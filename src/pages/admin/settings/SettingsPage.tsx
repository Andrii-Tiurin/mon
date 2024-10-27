import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Save } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';
import NavigationManager from '../../../components/admin/navigation/NavigationManager';
import SEOManager from '../../../components/admin/SEOManager';

const SettingsPage = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-8">
        {language === 'uk' ? 'Налаштування' : 'Настройки'}
      </h1>

      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab('general')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'general'
              ? 'bg-blue-50 text-blue-600'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          {language === 'uk' ? 'Загальні' : 'Общие'}
        </button>
        <button
          onClick={() => setActiveTab('navigation')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'navigation'
              ? 'bg-blue-50 text-blue-600'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          {language === 'uk' ? 'Навігація' : 'Навигация'}
        </button>
        <button
          onClick={() => setActiveTab('seo')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'seo'
              ? 'bg-blue-50 text-blue-600'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          SEO
        </button>
      </div>

      {activeTab === 'general' && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-6">
            {language === 'uk' ? 'Загальні налаштування' : 'Общие настройки'}
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {language === 'uk' ? 'Назва сайту' : 'Название сайта'}
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg"
                defaultValue="MonoTours"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {language === 'uk' ? 'Опис сайту' : 'Описание сайта'}
              </label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg"
                rows={3}
                defaultValue={language === 'uk' ? 'Ваш надійний партнер у подорожах' : 'Ваш надежный партнер в путешествиях'}
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center"
            >
              <Save className="w-5 h-5 mr-2" />
              {language === 'uk' ? 'Зберегти' : 'Сохранить'}
            </motion.button>
          </form>
        </div>
      )}

      {activeTab === 'navigation' && <NavigationManager />}
      {activeTab === 'seo' && <SEOManager onSave={() => {}} />}
    </div>
  );
};

export default SettingsPage;