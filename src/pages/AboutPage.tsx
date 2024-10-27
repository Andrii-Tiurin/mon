import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, Shield, Clock, Award, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutPage = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Globe,
      title: t('about.features.worldwide.title'),
      description: t('about.features.worldwide.description')
    },
    {
      icon: Users,
      title: t('about.features.team.title'),
      description: t('about.features.team.description')
    },
    {
      icon: Shield,
      title: t('about.features.reliability.title'),
      description: t('about.features.reliability.description')
    },
    {
      icon: Clock,
      title: t('about.features.support.title'),
      description: t('about.features.support.description')
    },
    {
      icon: Award,
      title: t('about.features.quality.title'),
      description: t('about.features.quality.description')
    },
    {
      icon: Heart,
      title: t('about.features.care.title'),
      description: t('about.features.care.description')
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="relative h-[300px] mb-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2071)',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('about.title')}</h1>
            <p className="text-xl text-white/90">{t('about.subtitle')}</p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg max-w-none mb-16"
        >
          <p className="text-gray-600 leading-relaxed mb-6">{t('about.description.first')}</p>
          <p className="text-gray-600 leading-relaxed mb-6">{t('about.description.second')}</p>
          <p className="text-gray-600 leading-relaxed">{t('about.description.third')}</p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-blue-600 text-white rounded-xl p-8 shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-4">{t('about.cta.title')}</h2>
          <p className="text-xl mb-6">{t('about.cta.description')}</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            {t('about.cta.button')}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;