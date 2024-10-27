import React from 'react';
import { Filter, SortAsc, SortDesc } from 'lucide-react';

interface PackageFiltersProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  sortBy: 'price' | 'rating';
  setSortBy: (sort: 'price' | 'rating') => void;
  sortOrder: 'asc' | 'desc';
  setSortOrder: (order: 'asc' | 'desc') => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
}

const PackageFilters: React.FC<PackageFiltersProps> = ({
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
  priceRange,
  setPriceRange,
}) => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start mb-8">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">Туристичні пакети</h1>
        
        <div className="flex flex-wrap gap-4 mt-2">
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-500" />
            <select
              className="border rounded-lg px-3 py-2"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">Всі категорії</option>
              <option value="mountain">Гори</option>
              <option value="beach">Море</option>
              <option value="cultural">Культурний</option>
              <option value="city">Місто</option>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              {sortOrder === 'asc' ? <SortAsc className="w-5 h-5" /> : <SortDesc className="w-5 h-5" />}
            </button>
            <select
              className="border rounded-lg px-3 py-2"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'price' | 'rating')}
            >
              <option value="price">Ціна</option>
              <option value="rating">Рейтинг</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Ціновий діапазон: {priceRange[0]}₴ - {priceRange[1]}₴
        </label>
        <input
          type="range"
          min="0"
          max="20000"
          step="500"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
          className="w-full"
        />
      </div>
    </>
  );
};

export default PackageFilters;