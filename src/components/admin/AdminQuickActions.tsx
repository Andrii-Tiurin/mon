import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface QuickAction {
  title: string;
  icon: LucideIcon;
  color: string;
  link: string;
}

interface AdminQuickActionsProps {
  actions: QuickAction[];
}

const AdminQuickActions: React.FC<AdminQuickActionsProps> = ({ actions }) => {
  const { language } = useLanguage();

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">
        {language === 'uk' ? 'Швидкі дії' : 'Быстрые действия'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {actions.map((action, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              to={action.link}
              className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className={`inline-flex p-3 rounded-lg ${action.color} mb-4`}>
                <action.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-medium text-gray-900">{action.title}</h3>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AdminQuickActions;