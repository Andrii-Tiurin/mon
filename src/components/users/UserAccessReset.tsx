import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, RefreshCw } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useUsers } from '../../contexts/UserContext';

const UserAccessReset = () => {
  const { language } = useLanguage();
  const { resetAccess } = useUsers();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('idle');

    try {
      await resetAccess(email);
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">
        {language === 'uk' ? 'Скинути доступ' : 'Сбросить доступ'}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <motion.button
          type="submit"
          disabled={isLoading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-2 px-4 rounded-lg text-white flex items-center justify-center ${
            isLoading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {isLoading ? (
            <RefreshCw className="w-5 h-5 animate-spin" />
          ) : (
            language === 'uk' ? 'Надіслати посилання' : 'Отправить ссылку'
          )}
        </motion.button>

        {status === 'success' && (
          <p className="text-green-600 text-sm">
            {language === 'uk' 
              ? 'Посилання для відновлення доступу надіслано на вашу пошту'
              : 'Ссылка для восстановления доступа отправлена на вашу почту'
            }
          </p>
        )}

        {status === 'error' && (
          <p className="text-red-600 text-sm">
            {language === 'uk'
              ? 'Помилка при відправці посилання. Спробуйте ще раз'
              : 'Ошибка при отправке ссылки. Попробуйте еще раз'
            }
          </p>
        )}
      </form>
    </div>
  );
};

export default UserAccessReset;