import React from 'react';
import { motion } from 'framer-motion';
import { 
  Package, 
  Calendar,
  Users,
  MessageSquare,
  TrendingUp,
  AlertCircle,
  Edit,
  Bell,
  Settings
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import AdminStats from '../../components/admin/AdminStats';
import AdminAlerts from '../../components/admin/AdminAlerts';
import AdminActivity from '../../components/admin/AdminActivity';
import AdminQuickActions from '../../components/admin/AdminQuickActions';

const AdminDashboard = () => {
  const { language } = useLanguage();

  const stats = [
    { 
      title: language === 'uk' ? 'Активні тури' : 'Активные туры',
      value: '124',
      change: '+12%',
      icon: Package,
      color: 'bg-blue-500'
    },
    {
      title: language === 'uk' ? 'Нові бронювання' : 'Новые бронирования',
      value: '48',
      change: '+8%',
      icon: Calendar,
      color: 'bg-green-500'
    },
    {
      title: language === 'uk' ? 'Активні користувачі' : 'Активные пользователи',
      value: '1,893',
      change: '+21%',
      icon: Users,
      color: 'bg-purple-500'
    },
    {
      title: language === 'uk' ? 'Очікують відповіді' : 'Ожидают ответа',
      value: '12',
      change: '-3%',
      icon: MessageSquare,
      color: 'bg-yellow-500'
    }
  ];

  const alerts = [
    {
      title: language === 'uk' ? 'Мала доступність' : 'Малая доступность',
      message: language === 'uk' 
        ? 'Тур в Єгипет (15 листопада) має лише 2 вільних місця'
        : 'Тур в Египет (15 ноября) имеет только 2 свободных места',
      type: 'warning'
    },
    {
      title: language === 'uk' ? 'Потрібно оновити ціни' : 'Требуется обновление цен',
      message: language === 'uk'
        ? 'Турецькі пакети потребують оновлення цін на грудень'
        : 'Турецкие пакеты требуют обновления цен на декабрь',
      type: 'info'
    },
    {
      title: language === 'uk' ? 'Нові відгуки' : 'Новые отзывы',
      message: language === 'uk'
        ? '3 нових відгуки потребують модерації'
        : '3 новых отзыва требуют модерации',
      type: 'success'
    }
  ];

  const quickActions = [
    {
      title: language === 'uk' ? 'Редагувати контент' : 'Редактировать контент',
      icon: Edit,
      color: 'bg-blue-500',
      link: '/admin/content'
    },
    {
      title: language === 'uk' ? 'Сповіщення' : 'Уведомления',
      icon: Bell,
      color: 'bg-yellow-500',
      link: '/admin/notifications'
    },
    {
      title: language === 'uk' ? 'Налаштування' : 'Настройки',
      icon: Settings,
      color: 'bg-gray-500',
      link: '/admin/settings'
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          {language === 'uk' ? 'Панель керування' : 'Панель управления'}
        </h1>
        <p className="text-gray-600">
          {language === 'uk' ? 'Ласкаво просимо, Адмін' : 'Добро пожаловать, Админ'}
        </p>
      </div>

      <AdminStats stats={stats} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <AdminActivity />
        <AdminAlerts alerts={alerts} />
      </div>

      <AdminQuickActions actions={quickActions} />
    </div>
  );
};

export default AdminDashboard;