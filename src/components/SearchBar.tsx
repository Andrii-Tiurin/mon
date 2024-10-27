import React, { useState } from 'react';
import { Search, Calendar, Users } from 'lucide-react';
import type { SearchParams } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface SearchBarProps {
  onSearch: (params: SearchParams) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const { t } = useLanguage();
  const [searchParams, setSearchParams] = useState<SearchParams>({
    destination: '',
    checkIn: null,
    checkOut: null,
    guests: 1
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchParams);
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-2 p-4 bg-white rounded-lg shadow-lg">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder={t('search.placeholder')}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchParams.destination}
              onChange={(e) => setSearchParams({ ...searchParams, destination: e.target.value })}
            />
          </div>
        </div>

        <div className="flex-1 flex gap-2">
          <div className="relative flex-1">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="date"
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onChange={(e) => setSearchParams({ ...searchParams, checkIn: new Date(e.target.value) })}
            />
          </div>
          <div className="relative flex-1">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="date"
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onChange={(e) => setSearchParams({ ...searchParams, checkOut: new Date(e.target.value) })}
            />
          </div>
        </div>

        <div className="md:w-32">
          <div className="relative">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <select
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              value={searchParams.guests}
              onChange={(e) => setSearchParams({ ...searchParams, guests: parseInt(e.target.value) })}
            >
              {[1, 2, 3, 4, 5, 6].map(num => (
                <option key={num} value={num}>
                  {num} {num === 1 ? t('search.guest') : t('search.guests')}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          {t('search.button')}
        </button>
      </div>
    </form>
  );
};

export default SearchBar;