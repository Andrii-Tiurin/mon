import React from 'react';
import { motion } from 'framer-motion';
import { Clock, User, FileText, LogIn, Settings } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';

// Mock data - replace with actual data from your backend
const mockActivities = [
  {
    id: '1',
    user: 'Admin User',
    action: 'login',
    details: 'Успішний вхід в систему',
    timestamp: new Date('2024-03-15T10:30:00')
  },
  {
    id: '2',
    user: 'Editor User',
    action: 'content_edit',
    details: 'Відредаговано сторінку "Про нас"',
    timestamp: new Date('2024-03-15T09:45:00')
  },
  {
    id: '3',
    user: 'Admin User',
    action: 'settings_change',
    details: 'Оновлено налаштування сайту',
    timestamp: new Date('2024-03-14T16:20:00')
  }
];

const UserActivityLog: React.FC = () => {
  const { language } = useLanguage();

  const getActionIcon = (action: string) => {
    switch (action) {
      case 'login':
        return <LogIn className="w-5 h-5" />;
      case 'content_edit':
        return <FileText className="w-5 h-5" />;
      case 'settings_change':
        return <Settings className="w-5 h-5" />;
      default:
        return <User className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-4">
      {mockActivities.map((activity) => (
        <motion.div
          key={activity.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-4 bg-gray-50 rounded-lg"
        >
          <div className="flex items-start space-x-4">
            <div className="bg-white p-2 rounded-lg">
              {getActionIcon(activity.action)}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{activity.user}</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>
                    {activity.timestamp.toLocaleString(
                      language === 'uk' ? 'uk-UA' : 'ru-RU'
                    )}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 mt-1">{activity.details}</p>
            </div>
          </div>
        </motion.div>
      ))}

      {mockActivities.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          {language === 'uk'
            ? 'Немає записів активності'
            : 'Нет записей активности'}
        </div>
      )}
    </div>
  );
};

export default UserActivityLog;