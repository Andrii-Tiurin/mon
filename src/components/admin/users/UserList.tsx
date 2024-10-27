import React from 'react';
import { motion } from 'framer-motion';
import { User, Shield, Clock, Edit2, Trash2 } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';

interface UserData {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'editor' | 'user';
  status: 'active' | 'inactive';
  lastLogin: Date;
}

interface UserListProps {
  users: UserData[];
  onEdit: (user: UserData) => void;
  onDelete: (userId: string) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onEdit, onDelete }) => {
  const { language } = useLanguage();

  return (
    <div className="space-y-4">
      {users.map((user) => (
        <motion.div
          key={user.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-100 p-2 rounded-full">
                <User className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <h3 className="font-medium">{user.name}</h3>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm text-gray-500">
                <Shield className="w-4 h-4 mr-1" />
                <span>{user.role}</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-1" />
                <span>
                  {user.lastLogin.toLocaleDateString(
                    language === 'uk' ? 'uk-UA' : 'ru-RU'
                  )}
                </span>
              </div>
              <span
                className={`px-2 py-1 text-xs rounded-full ${
                  user.status === 'active'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {user.status === 'active'
                  ? language === 'uk'
                    ? 'Активний'
                    : 'Активный'
                  : language === 'uk'
                  ? 'Неактивний'
                  : 'Неактивный'}
              </span>
            </div>
            <div className="flex space-x-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => onEdit(user)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <Edit2 className="w-5 h-5 text-blue-600" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => onDelete(user.id)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <Trash2 className="w-5 h-5 text-red-600" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      ))}

      {users.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          {language === 'uk'
            ? 'Користувачів не знайдено'
            : 'Пользователи не найдены'}
        </div>
      )}
    </div>
  );
};

export default UserList;