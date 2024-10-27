import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center px-4"
      >
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-9xl font-bold text-blue-600">404</h1>
        </motion.div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          {language === 'uk' 
            ? 'Сторінку не знайдено'
            : 'Страница не найдена'
          }
        </h2>
        
        <p className="text-gray-600 mb-8">
          {language === 'uk'
            ? 'Вибачте, але сторінка, яку ви шукаєте, не існує.'
            : 'Извините, но страница, которую вы ищете, не существует.'
          }
        </p>

        <div className="flex items-center justify-center gap-2 text-gray-500">
          <Home className="w-5 h-5" />
          <p>
            {language === 'uk'
              ? 'Перенаправлення на головну сторінку через 3 секунди...'
              : 'Перенаправление на главную страницу через 3 секунды...'
            }
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;