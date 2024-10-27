import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PackageCard from '../components/packages/PackageCard';
import PackageFilters from '../components/packages/PackageFilters';
import BookingModal from '../components/packages/BookingModal';
import type { Package } from '../types';

const packages: Package[] = [
  {
    id: '1',
    title: 'Карпатська пригода',
    location: 'Карпати, Україна',
    duration: '5 днів',
    groupSize: '4-12 осіб',
    price: 8500,
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=2072',
    description: 'Незабутня подорож Карпатами з відвідуванням найкращих локацій',
    includes: ['Проживання', 'Харчування', 'Трансфер', 'Екскурсії'],
    category: 'mountain',
    startDates: ['2024-04-01', '2024-04-15', '2024-05-01'],
    availability: 8
  },
  {
    id: '2',
    title: 'Вікенд у Львові',
    location: 'Львів, Україна',
    duration: '3 дні',
    groupSize: '2-8 осіб',
    price: 4500,
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1555921015-5532091f6026?q=80&w=2070',
    description: 'Культурний відпочинок у серці Західної України',
    includes: ['Готель', 'Сніданки', 'Екскурсії', 'Дегустації'],
    category: 'cultural',
    startDates: ['2024-04-05', '2024-04-19', '2024-05-03'],
    availability: 12
  },
  {
    id: '3',
    title: 'Морський відпочинок',
    location: 'Одеса, Україна',
    duration: '7 днів',
    groupSize: '2-6 осіб',
    price: 12000,
    rating: 4.7,
    imageUrl: 'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?q=80&w=2070',
    description: 'Розкішний відпочинок на березі Чорного моря',
    includes: ['Готель 4*', 'All Inclusive', 'СПА', 'Трансфер'],
    category: 'beach',
    startDates: ['2024-06-01', '2024-06-15', '2024-07-01'],
    availability: 6
  }
];

const PackagesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'price' | 'rating'>('price');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000]);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const filteredAndSortedPackages = packages
    .filter(pkg => 
      (selectedCategory === 'all' || pkg.category === selectedCategory) &&
      pkg.price >= priceRange[0] && pkg.price <= priceRange[1]
    )
    .sort((a, b) => {
      const modifier = sortOrder === 'asc' ? 1 : -1;
      return (a[sortBy] - b[sortBy]) * modifier;
    });

  const handleBookNow = (pkg: Package) => {
    setSelectedPackage(pkg);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="pt-24 px-4 max-w-7xl mx-auto pb-16">
      <PackageFilters
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredAndSortedPackages.map((pkg) => (
          <PackageCard
            key={pkg.id}
            pkg={pkg}
            onBookNow={handleBookNow}
          />
        ))}
      </div>

      {filteredAndSortedPackages.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Немає турів, що відповідають вашим критеріям</p>
        </div>
      )}

      {selectedPackage && (
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          package={selectedPackage}
        />
      )}
    </div>
  );
};

export default PackagesPage;