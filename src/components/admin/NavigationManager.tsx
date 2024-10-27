import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, Plus, Edit2, Trash2, ChevronRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface MenuItem {
  id: string;
  title: string;
  url: string;
  children?: MenuItem[];
}

interface NavigationManagerProps {
  initialMenu?: MenuItem[];
  onSave: (menu: MenuItem[]) => void;
}

const NavigationManager: React.FC<NavigationManagerProps> = ({ initialMenu = [], onSave }) => {
  const { language } = useLanguage();
  const [menu, setMenu] = useState<MenuItem[]>(initialMenu);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (id: string) => {
    setExpandedItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const addMenuItem = (parentId?: string) => {
    const newItem: MenuItem = {
      id: crypto.randomUUID(),
      title: language === 'uk' ? 'Новий пункт' : 'Новый пункт',
      url: '/',
      children: []
    };

    if (!parentId) {
      setMenu([...menu, newItem]);
    } else {
      setMenu(prev => {
        const updateChildren = (items: MenuItem[]): MenuItem[] => {
          return items.map(item => {
            if (item.id === parentId) {
              return {
                ...item,
                children: [...(item.children || []), newItem]
              };
            }
            if (item.children) {
              return {
                ...item,
                children: updateChildren(item.children)
              };
            }
            return item;
          });
        };
        return updateChildren(prev);
      });
    }
  };

  const updateMenuItem = (id: string, updates: Partial<MenuItem>) => {
    setMenu(prev => {
      const updateItem = (items: MenuItem[]): MenuItem[] => {
        return items.map(item => {
          if (item.id === id) {
            return { ...item, ...updates };
          }
          if (item.children) {
            return {
              ...item,
              children: updateItem(item.children)
            };
          }
          return item;
        });
      };
      return updateItem(prev);
    });
  };

  const removeMenuItem = (id: string) => {
    setMenu(prev => {
      const removeItem = (items: MenuItem[]): MenuItem[] => {
        return items.filter(item => {
          if (item.id === id) {
            return false;
          }
          if (item.children) {
            return {
              ...item,
              children: removeItem(item.children)
            };
          }
          return true;
        });
      };
      return removeItem(prev);
    });
  };

  const renderMenuItem = (item: MenuItem, depth = 0) => {
    const isExpanded = expandedItems.includes(item.id);

    return (
      <div key={item.id} className="border-l-2 border-gray-200 pl-4 mt-2">
        <div className="flex items-center space-x-2">
          {item.children?.length ? (
            <button
              onClick={() => toggleExpand(item.id)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>
          ) : (
            <Menu className="w-4 h-4 text-gray-400 ml-1" />
          )}
          
          <input
            type="text"
            value={item.title}
            onChange={(e) => updateMenuItem(item.id, { title: e.target.value })}
            className="flex-1 p-2 border rounded"
          />
          
          <input
            type="text"
            value={item.url}
            onChange={(e) => updateMenuItem(item.id, { url: e.target.value })}
            className="flex-1 p-2 border rounded"
          />
          
          <div className="flex space-x-1">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => addMenuItem(item.id)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <Plus className="w-4 h-4 text-green-600" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => removeMenuItem(item.id)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <Trash2 className="w-4 h-4 text-red-600" />
            </motion.button>
          </div>
        </div>
        
        {isExpanded && item.children && (
          <div className="ml-4">
            {item.children.map(child => renderMenuItem(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">
          {language === 'uk' ? 'Управління навігацією' : 'Управление навигацией'}
        </h2>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSave(menu)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          {language === 'uk' ? 'Зберегти зміни' : 'Сохранить изменения'}
        </motion.button>
      </div>

      <div className="space-y-2">
        {menu.map(item => renderMenuItem(item))}
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => addMenuItem()}
        className="mt-4 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
      >
        <Plus className="w-4 h-4 inline mr-2" />
        {language === 'uk' ? 'Додати пункт меню' : 'Добавить пункт меню'}
      </motion.button>
    </div>
  );
};

export default NavigationManager;