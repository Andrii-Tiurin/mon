import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Package, 
  MessageSquare, 
  TrendingUp,
  Calendar,
  AlertCircle,
  Edit,
  Bell,
  Settings
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { language } = useLanguage();

  const stats = [
    { 
      title: language === 'uk' ? 'Активні тури' : 'Активные туры',
      value: '124',
      change: '+12%',
      icon: Package,
      color: 'bg-blue-500',
      link: '/admin/destinations'
    },
    {
      title: language === 'uk' ? 'Нові бронювання' : 'Новые бронирования',
      value: '48',
      change: '+8%',
      icon: Calendar,
      color: 'bg-green-500',
      link: '/admin/bookings'
    },
    {
      title: language === 'uk' ? 'Активні користувачі' : 'Активные пользователи',
      value: '1,893',
      change: '+21%',
      icon: Users,
      color: 'bg-purple-500',
      link: '/admin/users'
    },
    {
      title: language === 'uk' ? 'Очікують відповіді' : 'Ожидают ответа',
      value: '12',
      change: '-3%',
      icon: MessageSquare,
      color: 'bg-yellow-500',
      link: '/admin/messages'
    }
  ];

  const alerts = [
    {
      title: language === 'uk' ? 'Мала доступність' : 'Малая доступность',
      message: language === 'uk' 
        ? 'Тур в Єгипет (15 листопада) має лише 2 вільних місця'
        : 'Тур в Египет (15 ноября) имеет только 2 свободных места',
      type: 'warning',
      link: '/admin/destinations'
    },
    {
      title: language === 'uk' ? 'Потрібно оновити ціни' : 'Требуется обновление цен',
      message: language === 'uk'
        ? 'Турецькі пакети потребують оновлення цін на грудень'
        : 'Турецкие пакеты требуют обновления цен на декабрь',
      type: 'info',
      link: '/admin/destinations'
    },
    {
      title: language === 'uk' ? 'Нові відгуки' : 'Новые отзывы',
      message: language === 'uk'
        ? '3 нових відгуки потребують модерації'
        : '3 новых отзыва требуют модерации',
      type: 'success',
      link: '/admin/reviews'
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

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Link key={index} to={stat.link}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <span className={`text-sm font-medium ${
                  stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-gray-600 text-sm font-medium">{stat.title}</h3>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </motion.div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
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

        {/* Alerts */}
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
              <Link key={index} to={alert.link}>
                <div className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <AlertCircle className={`w-5 h-5 mr-3 ${
                    alert.type === 'warning' ? 'text-yellow-500' :
                    alert.type === 'info' ? 'text-blue-500' : 'text-green-500'
                  }`} />
                  <div>
                    <p className="text-sm font-medium">{alert.title}</p>
                    <p className="text-xs text-gray-500">{alert.message}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">
          {language === 'uk' ? 'Швидкі дії' : 'Быстрые действия'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickActions.map((action, index) => (
            <Link key={index} to={action.link}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className={`inline-flex p-3 rounded-lg ${action.color} mb-4`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-medium text-gray-900">{action.title}</h3>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;