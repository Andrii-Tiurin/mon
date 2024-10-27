import React from 'react';
import { MapPin, Star } from 'lucide-react';
import type { Destination } from '../types';

const destinations: Destination[] = [
  {
    id: '1',
    name: 'Буковель',
    country: 'Україна',
    description: 'Найбільший гірськолижний курорт України',
    imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070',
    price: 2500,
    rating: 4.8,
    amenities: ['Спа', 'Ресторан', 'Басейн'],
    category: 'mountain'
  },
  {
    id: '2',
    name: 'Одеса',
    country: 'Україна',
    description: 'Перлина біля Чорного моря',
    imageUrl: 'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?q=80&w=2070',
    price: 1800,
    rating: 4.6,
    amenities: ['Пляж', 'Екскурсії', 'Нічне життя'],
    category: 'beach'
  },
  {
    id: '3',
    name: 'Львів',
    country: 'Україна',
    description: 'Культурна столиця України',
    imageUrl: 'https://images.unsplash.com/photo-1555921015-5532091f6026?q=80&w=2070',
    price: 1500,
    rating: 4.9,
    amenities: ['Історичний центр', 'Кава', 'Музеї'],
    category: 'city'
  }
];

const DestinationsPage = () => {
  return (
    <div className="pt-24 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Popular Destinations</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-48">
              <img
                src={destination.imageUrl}
                alt={destination.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-xl font-semibold text-white">{destination.name}</h3>
                <div className="flex items-center text-white/90">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{destination.country}</span>
                </div>
              </div>
            </div>
            
            <div className="p-4">
              <p className="text-gray-600 mb-4">{destination.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="ml-1 font-medium">{destination.rating}</span>
                </div>
                <div>
                  <span className="text-sm text-gray-500">from</span>
                  <p className="text-lg font-bold text-blue-600">{destination.price} ₴</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {destination.amenities.map((amenity) => (
                  <span
                    key={amenity}
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationsPage;