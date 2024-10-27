import React, { createContext, useContext, useState, useCallback } from 'react';
import { useAuth } from './AuthContext';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  lastLogin: Date;
}

interface UserContextType {
  users: User[];
  addUser: (user: Omit<User, 'id' | 'lastLogin'>) => Promise<void>;
  deleteUser: (id: string) => Promise<void>;
  updateUser: (id: string, data: Partial<Omit<User, 'id'>>) => Promise<void>;
  resetAccess: (email: string) => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
  const { user: currentUser } = useAuth();

  const addUser = useCallback(async (userData: Omit<User, 'id' | 'lastLogin'>) => {
    try {
      const newUser: User = {
        id: crypto.randomUUID(),
        ...userData,
        lastLogin: new Date(),
      };

      setUsers(prevUsers => [...prevUsers, newUser]);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error('Error adding user:', error);
      throw error;
    }
  }, []);

  const deleteUser = useCallback(async (id: string) => {
    try {
      // Prevent self-deletion for admin
      if (currentUser?.id === id) {
        throw new Error('Cannot delete your own account');
      }

      setUsers(prevUsers => prevUsers.filter(user => user.id !== id));

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  }, [currentUser]);

  const updateUser = useCallback(async (id: string, data: Partial<Omit<User, 'id'>>) => {
    try {
      setUsers(prevUsers =>
        prevUsers.map(user =>
          user.id === id
            ? { ...user, ...data }
            : user
        )
      );

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  }, []);

  const resetAccess = useCallback(async (email: string) => {
    try {
      // Generate temporary access token
      const tempToken = crypto.randomUUID();

      // Update user's last login
      setUsers(prevUsers =>
        prevUsers.map(user =>
          user.email === email
            ? { ...user, lastLogin: new Date() }
            : user
        )
      );

      // Simulate sending email with access link
      console.log(`Access reset link sent to ${email} with token: ${tempToken}`);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error('Error resetting access:', error);
      throw error;
    }
  }, []);

  return (
    <UserContext.Provider value={{ users, addUser, deleteUser, updateUser, resetAccess }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUsers must be used within a UserProvider');
  }
  return context;
};