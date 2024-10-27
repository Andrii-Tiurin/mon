import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Plus, Search } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';
import UserList from './UserList';
import UserForm from './UserForm';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'editor' | 'user';
  status: 'active' | 'inactive';
  lastLogin: Date;
}

const UserManager: React.FC = () => {
  const { language } = useLanguage();
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    // Fetch users from the server
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateUser = () => {
    setSelectedUser(null);
    setIsCreating(true);
  };

  const handleSaveUser = async (userData: any) => {
    try {
      if (selectedUser) {
        // Update existing user
        await axios.put(`http://localhost:5000/api/users/${selectedUser.id}`, userData);
        setUsers(prevUsers =>
          prevUsers.map(user =>
            user.id === selectedUser.id
              ? { ...user, ...userData }
              : user
          )
        );
      } else {
        // Create new user
        const response = await axios.post('http://localhost:5000/api/users', userData);
        setUsers(prevUsers => [...prevUsers, response.data]);
      }
      setIsCreating(false);
      setSelectedUser(null);
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  const handleDeleteUser = async (userId: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${userId}`);
      setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">
          {language === 'uk' ? 'Користувачі' : 'Пользователи'}
        </h1>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleCreateUser}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
        >
          <Plus className="w-5 h-5 mr-2" />
          {language === 'uk' ? 'Додати користувача' : 'Добавить пользователя'}
        </motion.button>
      </div>

      {isCreating || selectedUser ? (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-6">
            {selectedUser
              ? language === 'uk'
                ? 'Редагувати користувача'
                : 'Редактировать пользователя'
              : language === 'uk'
              ? 'Новий користувач'
              : 'Новый пользователь'}
          </h2>
          <UserForm
            initialData={selectedUser || undefined}
            onSave={handleSaveUser}
            onCancel={() => {
              setIsCreating(false);
              setSelectedUser(null);
            }}
          />
        </div>
      ) : (
        <>
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder={
                  language === 'uk'
                    ? 'Пошук користувачів...'
                    : 'Поиск пользователей...'
                }
                className="w-full pl-10 pr-4 py-2 border rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <UserList
            users={filteredUsers}
            onEdit={setSelectedUser}
            onDelete={handleDeleteUser}
          />
        </>
      )}
    </div>
  );
};

export default UserManager;
