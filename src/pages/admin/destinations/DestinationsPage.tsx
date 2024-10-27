import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Edit, Trash2, MapPin } from 'lucide-react';
import type { Destination } from '../../../types';

const mockDestinations: Destination[] = [
  {
    id: '1',
    name: 'Egypt',
    country: 'Africa',
    description: 'Land of the Pharaohs',
    imageUrl: 'https://images.unsplash.com/photo-1539768942893-daf53e448371',
    price: 26887,
    rating: 4.8,
    amenities: ['Beach', 'History', 'Culture'],
    category: 'beach'
  },
  // Add more mock destinations...
];

const DestinationsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredDestinations = mockDestinations.filter(dest => 
    dest.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'all' || dest.category === selectedCategory)
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Destinations Management</h1>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Destination
        </motion.button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search destinations..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <select
            className="border rounded-lg px-4 py-2"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="beach">Beach</option>
            <option value="mountain">Mountain</option>
            <option value="city">City</option>
            <option value="countryside">Countryside</option>
          </select>
        </div>

        {/* Destinations List */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Destination</th>
                <th className="text-left py-3 px-4">Category</th>
                <th className="text-left py-3 px-4">Price</th>
                <th className="text-left py-3 px-4">Rating</th>
                <th className="text-right py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredDestinations.map((destination) => (
                <motion.tr
                  key={destination.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <img
                        src={destination.imageUrl}
                        alt={destination.name}
                        className="w-10 h-10 rounded-lg object-cover mr-3"
                      />
                      <div>
                        <div className="font-medium">{destination.name}</div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {destination.country}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                      {destination.category}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    {destination.price.toLocaleString()} ₴
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="ml-1">{destination.rating}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex justify-end space-x-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <Edit className="w-5 h-5 text-blue-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <Trash2 className="w-5 h-5 text-red-600" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DestinationsPage;