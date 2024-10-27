import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Clock, User } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';

interface ContentItem {
  id: string;
  title: string;
  slug: string;
  content: string;
  status: 'draft' | 'published';
  lastModified: Date;
  author: string;
  language: 'uk' | 'ru';
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
}

interface ContentPreviewProps {
  content: ContentItem;
}

const ContentPreview: React.FC<ContentPreviewProps> = ({ content }) => {
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Preview Header */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">{content.title}</h2>
          <span
            className={`px-3 py-1 rounded-full text-sm ${
              content.status === 'published'
                ? 'bg-green-100 text-green-800'
                : 'bg-yellow-100 text-yellow-800'
            }`}
          >
            {content.status === 'published'
              ? language === 'uk' ? 'Опубліковано' : 'Опубликовано'
              : language === 'uk' ? 'Чернетка' : 'Черновик'}
          </span>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Globe className="w-4 h-4 mr-2" />
            <span>/{content.slug}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            <span>
              {new Date(content.lastModified).toLocaleDateString(
                language === 'uk' ? 'uk-UA' : 'ru-RU',
                {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                }
              )}
            </span>
          </div>
          <div className="flex items-center">
            <User className="w-4 h-4 mr-2" />
            <span>{content.author}</span>
          </div>
        </div>
      </div>

      {/* Content Preview */}
      <div className="prose max-w-none">
        <div dangerouslySetInnerHTML={{ __html: content.content }} />
      </div>

      {/* SEO Preview */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-medium mb-4">SEO Preview</h3>
        <div className="bg-white border rounded-lg p-4">
          <div className="space-y-2">
            <h4 className="text-blue-600 text-xl hover:underline cursor-pointer">
              {content.seo.title}
            </h4>
            <div className="text-green-700 text-sm">
              https://monotours.com/{content.slug}
            </div>
            <p className="text-gray-600">
              {content.seo.description}
            </p>
          </div>
        </div>
      </div>

      {/* Meta Information */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-medium mb-4">
          {language === 'uk' ? 'Мета-інформація' : 'Мета-информация'}
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              {language === 'uk' ? 'Ключові слова' : 'Ключевые слова'}
            </label>
            <div className="mt-1 flex flex-wrap gap-2">
              {content.seo.keywords.split(',').map((keyword, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                >
                  {keyword.trim()}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContentPreview;