import React from 'react';
import { AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

interface Alert {
  title: string;
  message: string;
  type: 'warning' | 'info' | 'success';
}

interface AdminAlertsProps {
  alerts: Alert[];
}

const AdminAlerts: React.FC<AdminAlertsProps> = ({ alerts }) => {
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-lg font-semibold mb-4">
        {language === 'uk' ? 'Сповіщення' : 'Уведомления'}
      </h2>
      <div className="space-y-4">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className="flex items-start p-3 bg-gray-50 rounded-lg"
          >
            <AlertCircle className={`w-5 h-5 mr-3 ${
              alert.type === 'warning' ? 'text-yellow-500' :
              alert.type === 'info' ? 'text-blue-500' : 'text-green-500'
            }`} />
            <div>
              <p className="text-sm font-medium">{alert.title}</p>
              <p className="text-xs text-gray-500">{alert.message}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default AdminAlerts;