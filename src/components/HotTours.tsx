import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, Plane, Coffee } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const hotTours = [
  {
    id: '1',
    destination: { uk: 'Єгипет', ru: 'Египет' },
    location: { uk: 'Шарм-ель-Шейх', ru: 'Шарм-эль-Шейх' },
    duration: { uk: '8 ночей', ru: '8 ночей' },
    departure: { uk: '5 листопада', ru: '5 ноября' },
    hotel: { uk: 'All Inclusive', ru: 'All Inclusive' },
    price: 63586,
    imageUrl: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?q=80&w=2071',
    agency: 'ОТПУСК.COM'
  },
  {
    id: '2',
    destination: { uk: 'Туреччина', ru: 'Турция' },
    location: { uk: 'Кемер', ru: 'Кемер' },
    duration: { uk: '7 ночей', ru: '7 ночей' },
    departure: { uk: '9 листопада', ru: '9 ноября' },
    hotel: { uk: 'All Inclusive', ru: 'All Inclusive' },
    price: 53878,
    imageUrl: 'https://images.unsplash.com/photo-1589561454226-796a8aa89b05?q=80&w=2069',
    agency: 'ПІЛІГРІМ'
  },
  {
    id: '3',
    destination: { uk: 'ОАЕ', ru: 'ОАЭ' },
    location: { uk: 'Фуджейра', ru: 'Фуджейра' },
    duration: { uk: '7 ночей', ru: '7 ночей' },
    departure: { uk: '14 листопада', ru: '14 ноября' },
    hotel: { uk: 'Сніданки', ru: 'Завтраки' },
    price: 82624,
    imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070',
    agency: 'MY HOT TOUR'
  },
  {
    id: '4',
    destination: { uk: 'Греція', ru: 'Греция' },
    location: { uk: 'Крит (Ієрапетра)', ru: 'Крит (Иерапетра)' },
    duration: { uk: '7 ночей', ru: '7 ночей' },
    departure: { uk: '3 листопада', ru: '3 ноября' },
    hotel: { uk: 'All Inclusive', ru: 'All Inclusive' },
    price: 66067,
    imageUrl: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=2074',
    agency: 'ОТПУСК.COM'
  }
];

const HotTours: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          🔥 {language === 'uk' ? 'Гарячі тури' : 'Горящие туры'}
        </h2>
        <p className="text-gray-600">
          {language === 'uk' 
            ? 'Найкращі пропозиції цього тижня за найвигіднішими цінами'
            : 'Лучшие предложения этой недели по выгодным ценам'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {hotTours.map((tour) => (
          <motion.div
            key={tour.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={tour.imageUrl}
                alt={`${tour.destination[language]} - ${tour.location[language]}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 rounded-bl-lg"
              >
                {language === 'uk' ? 'ГАРЯЧА' : 'ГОРЯЩАЯ'}
              </motion.div>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">
                {tour.destination[language]}, {tour.location[language]}
              </h3>

              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{tour.duration[language]}</span>
                </div>
                <div className="flex items-center">
                  <Plane className="w-4 h-4 mr-2" />
                  <span>{language === 'uk' ? 'Виліт: ' : 'Вылет: '}{tour.departure[language]}</span>
                </div>
                <div className="flex items-center">
                  <Coffee className="w-4 h-4 mr-2" />
                  <span>{tour.hotel[language]}</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="text-xs text-gray-500">{tour.agency}</div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">
                    {language === 'uk' ? 'за двох з перельотом' : 'за двоих с перелётом'}
                  </div>
                  <div className="text-lg font-bold text-blue-600">
                    {tour.price.toLocaleString()} ₴
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {language === 'uk' ? 'Забронювати' : 'Забронировать'}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HotTours;