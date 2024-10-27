import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Save, X, Image, Video, Link, List, Bold, Italic, Code } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';

interface Page {
  id: string;
  title: string;
  slug: string;
  content: string;
  status: 'draft' | 'published';
  lastModified: string;
  author: string;
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
}

interface ContentEditorProps {
  page: Page | null;
  onSave: (page: Page) => void;
  onCancel: () => void;
}

const ContentEditor: React.FC<ContentEditorProps> = ({ page, onSave, onCancel }) => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState<Page>(page || {
    id: '',
    title: '',
    slug: '',
    content: '',
    status: 'draft',
    lastModified: new Date().toISOString(),
    author: 'Admin',
    seo: {
      title: '',
      description: '',
      keywords: ''
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleSeoChange = (field: keyof typeof formData.seo, value: string) => {
    setFormData(prev => ({
      ...prev,
      seo: {
        ...prev.seo,
        [field]: value
      }
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {language === 'uk' ? 'Заголовок' : 'Заголовок'}
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {language === 'uk' ? 'URL-адреса' : 'URL-адрес'}
        </label>
        <input
          type="text"
          value={formData.slug}
          onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <button
            type="button"
            className="p-2 hover:bg-gray-100 rounded"
            title={language === 'uk' ? 'Додати зображення' : 'Добавить изображение'}
          >
            <Image className="w-5 h-5" />
          </button>
          <button
            type="button"
            className="p-2 hover:bg-gray-100 rounded"
            title={language === 'uk' ? 'Додати відео' : 'Добавить видео'}
          >
            <Video className="w-5 h-5" />
          </button>
          <button
            type="button"
            className="p-2 hover:bg-gray-100 rounded"
            title={language === 'uk' ? 'Додати посилання' : 'Добавить ссылку'}
          >
            <Link className="w-5 h-5" />
          </button>
          <button
            type="button"
            className="p-2 hover:bg-gray-100 rounded"
            title={language === 'uk' ? 'Список' : 'Список'}
          >
            <List className="w-5 h-5" />
          </button>
          <button
            type="button"
            className="p-2 hover:bg-gray-100 rounded"
            title={language === 'uk' ? 'Жирний' : 'Жирный'}
          >
            <Bold className="w-5 h-5" />
          </button>
          <button
            type="button"
            className="p-2 hover:bg-gray-100 rounded"
            title={language === 'uk' ? 'Курсив' : 'Курсив'}
          >
            <Italic className="w-5 h-5" />
          </button>
          <button
            type="button"
            className="p-2 hover:bg-gray-100 rounded"
            title={language === 'uk' ? 'Код' : 'Код'}
          >
            <Code className="w-5 h-5" />
          </button>
        </div>
        <textarea
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          className="w-full px-4 py-2 border rounded-lg h-64"
          required
        />
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">SEO</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {language === 'uk' ? 'META-заголовок' : 'META-заголовок'}
            </label>
            <input
              type="text"
              value={formData.seo.title}
              onChange={(e) => handleSeoChange('title', e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {language === 'uk' ? 'META-опис' : 'META-описание'}
            </label>
            <textarea
              value={formData.seo.description}
              onChange={(e) => handleSeoChange('description', e.target.value)}
              className="w-full px-4 py-2 border rounded-lg h-24"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {language === 'uk' ? 'Ключові слова' : 'Ключевые слова'}
            </label>
            <input
              type="text"
              value={formData.seo.keywords}
              onChange={(e) => handleSeoChange('keywords', e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder={language === 'uk' ? 'Розділяйте комами' : 'Разделяйте запятыми'}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <motion.button
          type="button"
          onClick={onCancel}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-4 py-2 border rounded-lg flex items-center"
        >
          <X className="w-5 h-5 mr-2" />
          {language === 'uk' ? 'Скасувати' : 'Отменить'}
        </motion.button>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
        >
          <Save className="w-5 h-5 mr-2" />
          {language === 'uk' ? 'Зберегти' : 'Сохранить'}
        </motion.button>
      </div>
    </form>
  );
};

export default ContentEditor;