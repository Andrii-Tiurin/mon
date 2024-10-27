import React from 'react';
import { motion } from 'framer-motion';
import SearchBar from './SearchBar';
import type { SearchParams } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  
  const handleSearch = (params: SearchParams) => {
    console.log('Search params:', params);
  };

  return (
    <div className="relative h-[400px] flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=2070)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 w-full px-4 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            {t('hero.title')}
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <SearchBar onSearch={handleSearch} />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;