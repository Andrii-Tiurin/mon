import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const AdminActivity = () => {
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-lg font-semibold mb-4">
        {language === 'uk' ? 'Остання активність' : 'Последняя активность'}
      </h2>
      <div className="space-y-4">
        <div className="flex items-center p-3 bg-gray-50 rounded-lg">
          <TrendingUp className="w-5 h-5 text-green-500 mr-3" />
          <div>
            <p className="text-sm font-medium">
              {language === 'uk' 
                ? 'Бронювання збільшились на 23%'
                : 'Бронирования увеличились на 23%'
              }
            </p>
            <p className="text-xs text-gray-500">
              {language === 'uk'
                ? 'Порівняно з минулим тижнем'
                : 'По сравнению с прошлой неделей'
              }
            </p>
          </div>
        </div>
        <div className="flex items-center p-3 bg-gray-50 rounded-lg">
          <Users className="w-5 h-5 text-blue-500 mr-3" />
          <div>
            <p className="text-sm font-medium">
              {language === 'uk'
                ? '15 нових реєстрацій користувачів'
                : '15 новых регистраций пользователей'
              }
            </p>
            <p className="text-xs text-gray-500">
              {language === 'uk'
                ? 'За останні 24 години'
                : 'За последние 24 часа'
              }
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AdminActivity;