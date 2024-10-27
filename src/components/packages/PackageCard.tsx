import React from 'react';
import { Calendar, Users, MapPin, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Package } from '../../types';

interface PackageCardProps {
  pkg: Package;
  onBookNow: (pkg: Package) => void;
}

const PackageCard: React.FC<PackageCardProps> = ({ pkg, onBookNow }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48">
        <img
          src={pkg.imageUrl}
          alt={pkg.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-semibold text-white">{pkg.title}</h3>
          <div className="flex items-center text-white/90">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{pkg.location}</span>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{pkg.duration}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-1" />
            <span>{pkg.groupSize}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">{pkg.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {pkg.includes.map((item) => (
            <span
              key={item}
              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="ml-1 font-medium">{pkg.rating}</span>
          </div>
          <div>
            <span className="text-sm text-gray-500">від</span>
            <p className="text-lg font-bold text-blue-600">{pkg.price} ₴</p>
          </div>
        </div>

        <div className="text-sm text-gray-600 mb-4">
          <p>Найближчі дати: {pkg.startDates[0]}</p>
          <p>Вільних місць: {pkg.availability}</p>
        </div>

        <button 
          onClick={() => onBookNow(pkg)}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Забронювати
        </button>
      </div>
    </motion.div>
  );
};

export default PackageCard;