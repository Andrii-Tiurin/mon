import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, Shield, Lock } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';

interface UserFormData {
  email: string;
  name: string;
  role: 'user' | 'admin' | 'editor';
  password?: string;
}

interface UserFormProps {
  initialData?: Partial<UserFormData>;
  onSave: (data: UserFormData) => Promise<void>;
  onCancel: () => void;
}

const UserForm: React.FC<UserFormProps> = ({ initialData, onSave, onCancel }) => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState<UserFormData>({
    email: initialData?.email || '',
    name: initialData?.name || '',
    role: initialData?.role || 'user',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await onSave(formData);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {language === 'uk' ? "Ім'я" : 'Имя'}
        </label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            required
            className="pl-10 w-full border rounded-lg p-2"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            required
            className="pl-10 w-full border rounded-lg p-2"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>

      {!initialData && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {language === 'uk' ? 'Пароль' : 'Пароль'}
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              required={!initialData}
              className="pl-10 w-full border rounded-lg p-2"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {language === 'uk' ? 'Роль' : 'Роль'}
        </label>
        <div className="relative">
          <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <select
            className="pl-10 w-full border rounded-lg p-2"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value as UserFormData['role'] })}
          >
            <option value="user">{language === 'uk' ? 'Користувач' : 'Пользователь'}</option>
            <option value="editor">{language === 'uk' ? 'Редактор' : 'Редактор'}</option>
            <option value="admin">{language === 'uk' ? 'Адміністратор' : 'Администратор'}</option>
          </select>
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <motion.button
          type="button"
          onClick={onCancel}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-4 py-2 border rounded-lg"
        >
          {language === 'uk' ? 'Скасувати' : 'Отменить'}
        </motion.button>
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`px-4 py-2 rounded-lg text-white ${
            isSubmitting ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {language === 'uk' ? 'Збереження...' : 'Сохранение...'}
            </span>
          ) : (
            <span>
              {initialData 
                ? (language === 'uk' ? 'Оновити' : 'Обновить')
                : (language === 'uk' ? 'Створити' : 'Создать')
              }
            </span>
          )}
        </motion.button>
      </div>
    </form>
  );
};

export default UserForm;