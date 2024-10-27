import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Globe, FileText, Save } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface SEOData {
  title: string;
  description: string;
  keywords: string;
  ogImage: string;
  robotsTxt: string;
}

interface SEOManagerProps {
  initialData?: SEOData;
  onSave: (data: SEOData) => void;
}

const SEOManager: React.FC<SEOManagerProps> = ({ 
  initialData = {
    title: '',
    description: '',
    keywords: '',
    ogImage: '',
    robotsTxt: 'User-agent: *\nAllow: /'
  },
  onSave 
}) => {
  const { language } = useLanguage();
  const [seoData, setSeoData] = useState<SEOData>(initialData);
  const [previewUrl, setPreviewUrl] = useState('');

  const handleSave = () => {
    onSave(seoData);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">
          {language === 'uk' ? 'Управління SEO' : 'Управление SEO'}
        </h2>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSave}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Save className="w-4 h-4 mr-2" />
          {language === 'uk' ? 'Зберегти' : 'Сохранить'}
        </motion.button>
      </div>

      <div className="space-y-6">
        {/* URL Preview */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {language === 'uk' ? 'Попередній перегляд URL' : 'Предварительный просмотр URL'}
          </label>
          <div className="flex items-center space-x-2">
            <Globe className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={previewUrl}
              onChange={(e) => setPreviewUrl(e.target.value)}
              className="flex-1 p-2 border rounded"
              placeholder="https://example.com/page"
            />
          </div>
        </div>

        {/* Meta Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Meta Title
          </label>
          <input
            type="text"
            value={seoData.title}
            onChange={(e) => setSeoData({ ...seoData, title: e.target.value })}
            className="w-full p-2 border rounded"
            maxLength={60}
          />
          <p className="text-sm text-gray-500 mt-1">
            {60 - seoData.title.length} {language === 'uk' ? 'символів залишилось' : 'символов осталось'}
          </p>
        </div>

        {/* Meta Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Meta Description
          </label>
          <textarea
            value={seoData.description}
            onChange={(e) => setSeoData({ ...seoData, description: e.target.value })}
            className="w-full p-2 border rounded"
            rows={3}
            maxLength={160}
          />
          <p className="text-sm text-gray-500 mt-1">
            {160 - seoData.description.length} {language === 'uk' ? 'символів залишилось' : 'символов осталось'}
          </p>
        </div>

        {/* Keywords */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {language === 'uk' ? 'Ключові слова' : 'Ключевые слова'}
          </label>
          <input
            type="text"
            value={seoData.keywords}
            onChange={(e) => setSeoData({ ...seoData, keywords: e.target.value })}
            className="w-full p-2 border rounded"
            placeholder={language === 'uk' ? 'Розділіть комами' : 'Разделите запятыми'}
          />
        </div>

        {/* OG Image */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            OG Image URL
          </label>
          <input
            type="text"
            value={seoData.ogImage}
            onChange={(e) => setSeoData({ ...seoData, ogImage: e.target.value })}
            className="w-full p-2 border rounded"
          />
          {seoData.ogImage && (
            <img
              src={seoData.ogImage}
              alt="OG Preview"
              className="mt-2 max-w-xs rounded"
            />
          )}
        </div>

        {/* robots.txt */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            robots.txt
          </label>
          <textarea
            value={seoData.robotsTxt}
            onChange={(e) => setSeoData({ ...seoData, robotsTxt: e.target.value })}
            className="w-full p-2 border rounded font-mono text-sm"
            rows={5}
          />
        </div>

        {/* Preview */}
        <div className="border rounded-lg p-4">
          <h3 className="text-lg font-medium mb-4">
            {language === 'uk' ? 'Попередній перегляд у Google' : 'Предварительный просмотр в Google'}
          </h3>
          <div className="space-y-1">
            <div className="text-blue-600 text-xl hover:underline cursor-pointer">
              {seoData.title || 'Page Title'}
            </div>
            <div className="text-green-700 text-sm">
              {previewUrl || 'https://example.com/page'}
            </div>
            <div className="text-gray-600">
              {seoData.description || 'Page description will appear here...'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOManager;