import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Clock, Ticket, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const destinations = [
  {
    id: '1',
    name: { uk: 'Єгипет', ru: 'Египет' },
    country: { uk: 'Африка', ru: 'Африка' },
    flightTime: { uk: 'Час перельоту: 4 години', ru: 'Время перелёта: 4 часа' },
    visa: { uk: 'Віза: $25 або безкоштовно', ru: 'Виза: $25 или бесплатно' },
    price: 26887,
    imageUrl: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?q=80&w=2071'
  },
  {
    id: '2',
    name: { uk: 'Туреччина', ru: 'Турция' },
    country: { uk: 'Європа/Азія', ru: 'Европа/Азия' },
    flightTime: { uk: 'Час перельоту: 2 години', ru: 'Время перелёта: 2 часа' },
    visa: { uk: 'Віза: не потрібна', ru: 'Виза: не нужна' },
    price: 24010,
    imageUrl: 'https://images.unsplash.com/photo-1589561454226-796a8aa89b05?q=80&w=2069'
  },
  {
    id: '3',
    name: { uk: 'Греція', ru: 'Греция' },
    country: { uk: 'Європа', ru: 'Европа' },
    flightTime: { uk: 'Час перельоту: 2,5 години', ru: 'Время перелёта: 2,5 часа' },
    visa: { uk: 'Віза: не потрібна', ru: 'Виза: не нужна' },
    price: 28397,
    imageUrl: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=2074'
  },
  {
    id: '4',
    name: { uk: 'Іспанія', ru: 'Испания' },
    country: { uk: 'Європа', ru: 'Европа' },
    flightTime: { uk: 'Час перельоту: 4,5 години', ru: 'Время перелёта: 4,5 часа' },
    visa: { uk: 'Віза: не потрібна', ru: 'Виза: не нужна' },
    price: 40712,
    imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=2070'
  },
  {
    id: '5',
    name: { uk: 'ОАЕ', ru: 'ОАЭ' },
    country: { uk: 'Близький Схід', ru: 'Ближний Восток' },
    flightTime: { uk: 'Час перельоту: 5 годин', ru: 'Время перелёта: 5 часов' },
    visa: { uk: 'Віза: по прильоту', ru: 'Виза: по прилету' },
    price: 35000,
    imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070'
  },
  {
    id: '6',
    name: { uk: 'Таїланд', ru: 'Таиланд' },
    country: { uk: 'Азія', ru: 'Азия' },
    flightTime: { uk: 'Час перельоту: 10 годин', ru: 'Время перелёта: 10 часов' },
    visa: { uk: 'Віза: не потрібна (до 30 днів)', ru: 'Виза: не нужна (до 30 дней)' },
    price: 42000,
    imageUrl: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2069'
  },
  {
    id: '7',
    name: { uk: 'Мальдіви', ru: 'Мальдивы' },
    country: { uk: 'Індійський океан', ru: 'Индийский океан' },
    flightTime: { uk: 'Час перельоту: 9 годин', ru: 'Время перелёта: 9 часов' },
    visa: { uk: 'Віза: по прильоту', ru: 'Виза: по прилету' },
    price: 98000,
    imageUrl: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2071'
  },
  {
    id: '8',
    name: { uk: 'Домініканська Республіка', ru: 'Доминиканская Республика' },
    country: { uk: 'Карибський басейн', ru: 'Карибский бассейн' },
    flightTime: { uk: 'Час перельоту: 12 годин', ru: 'Время перелёта: 12 часов' },
    visa: { uk: 'Віза: не потрібна (до 30 днів)', ru: 'Виза: не нужна (до 30 дней)' },
    price: 112300,
    imageUrl: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070'
  }
];

const FeaturedDestinations: React.FC = () => {
  const { language } = useLanguage();
  
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        {language === 'uk' ? 'Популярні напрямки' : 'Популярные направления'}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {destinations.map((destination) => (
          <motion.div
            key={destination.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={destination.imageUrl}
                alt={destination.name[language]}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-xl font-semibold text-white">{destination.name[language]}</h3>
                <div className="flex items-center text-white/90">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{destination.country[language]}</span>
                </div>
              </div>
            </div>
            
            <div className="p-4">
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">{destination.flightTime[language]}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Ticket className="w-4 h-4 mr-2" />
                  <span className="text-sm">{destination.visa[language]}</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="text-right">
                  <span className="text-sm text-gray-500">
                    {language === 'uk' ? 'від' : 'от'}
                  </span>
                  <p className="text-lg font-bold text-blue-600">
                    {destination.price.toLocaleString()} ₴
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedDestinations;