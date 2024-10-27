import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, Plus, Save, Trash2 } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';

interface MenuItem {
  id: string;
  title: string;
  url: string;
  order: number;
  parentId: string | null;
}

const NavigationManager: React.FC = () => {
  const { language } = useLanguage();
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      id: '1',
      title: 'Головна',
      url: '/',
      order: 1,
      parentId: null
    },
    {
      id: '2',
      title: 'Про нас',
      url: '/about',
      order: 2,
      parentId: null
    }
  ]);

  const handleAddItem = () => {
    const newItem: MenuItem = {
      id: crypto.randomUUID(),
      title: '',
      url: '',
      order: menuItems.length + 1,
      parentId: null
    };
    setMenuItems([...menuItems, newItem]);
  };

  const handleUpdateItem = (id: string, field: keyof MenuItem, value: string | number) => {
    setMenuItems(items =>
      items.map(item =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const handleDeleteItem = (id: string) => {
    setMenuItems(items => items.filter(item => item.id !== id));
  };

  const handleSave = async () => {
    try {
      // Here you would typically make an API call to save the menu structure
      console.log('Saving menu items:', menuItems);
    } catch (error) {
      console.error('Error saving menu:', error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">
          {language === 'uk' ? 'Управління навігацією' : 'Управление навигацией'}
        </h2>
        <div className="flex gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleAddItem}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
          >
            <Plus className="w-5 h-5 mr-2" />
            {language === 'uk' ? 'Додати пункт' : 'Добавить пункт'}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSave}
            className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center"
          >
            <Save className="w-5 h-5 mr-2" />
            {language === 'uk' ? 'Зберегти' : 'Сохранить'}
          </motion.button>
        </div>
      </div>

      <div className="space-y-4">
        {menuItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
          >
            <Menu className="w-5 h-5 text-gray-400 cursor-move" />
            <div className="flex-1 grid grid-cols-2 gap-4">
              <input
                type="text"
                value={item.title}
                onChange={(e) => handleUpdateItem(item.id, 'title', e.target.value)}
                placeholder={language === 'uk' ? 'Назва пункту' : 'Название пункта'}
                className="border rounded-lg p-2"
              />
              <input
                type="text"
                value={item.url}
                onChange={(e) => handleUpdateItem(item.id, 'url', e.target.value)}
                placeholder={language === 'uk' ? 'URL-адреса' : 'URL-адрес'}
                className="border rounded-lg p-2"
              />
            </div>
            <button
              onClick={() => handleDeleteItem(item.id)}
              className="p-2 hover:bg-gray-200 rounded-lg"
            >
              <Trash2 className="w-5 h-5 text-red-600" />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NavigationManager;