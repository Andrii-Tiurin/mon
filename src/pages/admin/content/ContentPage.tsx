import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';
import ContentEditor from '../../../components/admin/content/ContentEditor';
import ContentList from '../../../components/admin/content/ContentList';

const ContentPage = () => {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [selectedPage, setSelectedPage] = useState(null);

  const handleCreatePage = () => {
    setSelectedPage(null);
    setIsEditing(true);
  };

  const handleSave = async (page: any) => {
    try {
      // Here you would typically make an API call to save the page
      console.log('Saving page:', page);
      setIsEditing(false);
      setSelectedPage(null);
    } catch (error) {
      console.error('Error saving page:', error);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">
          {language === 'uk' ? 'Управління контентом' : 'Управление контентом'}
        </h1>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleCreatePage}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
        >
          <Plus className="w-5 h-5 mr-2" />
          {language === 'uk' ? 'Створити сторінку' : 'Создать страницу'}
        </motion.button>
      </div>

      {isEditing ? (
        <ContentEditor
          page={selectedPage}
          onSave={handleSave}
          onCancel={() => {
            setIsEditing(false);
            setSelectedPage(null);
          }}
        />
      ) : (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder={language === 'uk' ? 'Пошук сторінок...' : 'Поиск страниц...'}
                className="w-full pl-10 pr-4 py-2 border rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <ContentList
            searchTerm={searchTerm}
            onEdit={(page) => {
              setSelectedPage(page);
              setIsEditing(true);
            }}
            onDelete={(pageId) => {
              // Handle page deletion
              console.log('Deleting page:', pageId);
            }}
            onPreview={(page) => {
              // Handle page preview
              console.log('Previewing page:', page);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ContentPage;