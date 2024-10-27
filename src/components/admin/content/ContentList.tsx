import React from 'react';
import { Edit, Trash2, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../contexts/LanguageContext';

interface Page {
  id: string;
  title: string;
  slug: string;
  status: 'draft' | 'published';
  lastModified: string;
  author: string;
}

interface ContentListProps {
  searchTerm: string;
  onEdit: (page: Page) => void;
  onDelete: (pageId: string) => void;
  onPreview: (page: Page) => void;
}

const mockPages: Page[] = [
  {
    id: '1',
    title: 'Головна сторінка',
    slug: '/',
    status: 'published',
    lastModified: '2024-03-15T10:30:00Z',
    author: 'Admin'
  },
  {
    id: '2',
    title: 'Про нас',
    slug: '/about',
    status: 'published',
    lastModified: '2024-03-14T15:45:00Z',
    author: 'Admin'
  },
  {
    id: '3',
    title: 'Новий тур до Єгипту',
    slug: '/tours/egypt-2024',
    status: 'draft',
    lastModified: '2024-03-16T09:15:00Z',
    author: 'Editor'
  }
];

const ContentList: React.FC<ContentListProps> = ({
  searchTerm,
  onEdit,
  onDelete,
  onPreview
}) => {
  const { language } = useLanguage();

  const filteredPages = mockPages.filter(page =>
    page.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    page.slug.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-3 px-4">
              {language === 'uk' ? 'Заголовок' : 'Заголовок'}
            </th>
            <th className="text-left py-3 px-4">URL</th>
            <th className="text-left py-3 px-4">
              {language === 'uk' ? 'Статус' : 'Статус'}
            </th>
            <th className="text-left py-3 px-4">
              {language === 'uk' ? 'Останні зміни' : 'Последние изменения'}
            </th>
            <th className="text-left py-3 px-4">
              {language === 'uk' ? 'Автор' : 'Автор'}
            </th>
            <th className="text-right py-3 px-4">
              {language === 'uk' ? 'Дії' : 'Действия'}
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredPages.map((page) => (
            <motion.tr
              key={page.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="border-b hover:bg-gray-50"
            >
              <td className="py-3 px-4">{page.title}</td>
              <td className="py-3 px-4">{page.slug}</td>
              <td className="py-3 px-4">
                <span className={`px-2 py-1 rounded-full text-sm ${
                  page.status === 'published'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {page.status === 'published'
                    ? (language === 'uk' ? 'Опубліковано' : 'Опубликовано')
                    : (language === 'uk' ? 'Чернетка' : 'Черновик')
                  }
                </span>
              </td>
              <td className="py-3 px-4">
                {new Date(page.lastModified).toLocaleString(
                  language === 'uk' ? 'uk-UA' : 'ru-RU'
                )}
              </td>
              <td className="py-3 px-4">{page.author}</td>
              <td className="py-3 px-4">
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => onPreview(page)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                    title={language === 'uk' ? 'Переглянути' : 'Просмотреть'}
                  >
                    <Eye className="w-5 h-5 text-gray-600" />
                  </button>
                  <button
                    onClick={() => onEdit(page)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                    title={language === 'uk' ? 'Редагувати' : 'Редактировать'}
                  >
                    <Edit className="w-5 h-5 text-blue-600" />
                  </button>
                  <button
                    onClick={() => onDelete(page.id)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                    title={language === 'uk' ? 'Видалити' : 'Удалить'}
                  >
                    <Trash2 className="w-5 h-5 text-red-600" />
                  </button>
                </div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContentList;