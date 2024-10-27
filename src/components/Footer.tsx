import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">MonoTours - {t('site.subtitle')}</h3>
          <p className="text-gray-400 mb-4">{t('footer.description')}</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white"><Facebook className="w-6 h-6" /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Instagram className="w-6 h-6" /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Twitter className="w-6 h-6" /></a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">{t('footer.quickLinks')}</h4>
          <ul className="space-y-2">
            <li><Link to="/destinations" className="text-gray-400 hover:text-white">{t('nav.destinations')}</Link></li>
            <li><Link to="/packages" className="text-gray-400 hover:text-white">{t('nav.packages')}</Link></li>
            <li><Link to="/blog" className="text-gray-400 hover:text-white">{t('nav.blog')}</Link></li>
            <li><Link to="/about" className="text-gray-400 hover:text-white">{t('footer.about')}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">{t('footer.services')}</h4>
          <ul className="space-y-2">
            <li><Link to="/flights" className="text-gray-400 hover:text-white">{t('footer.flights')}</Link></li>
            <li><Link to="/hotels" className="text-gray-400 hover:text-white">{t('footer.hotels')}</Link></li>
            <li><Link to="/cars" className="text-gray-400 hover:text-white">{t('footer.cars')}</Link></li>
            <li><Link to="/insurance" className="text-gray-400 hover:text-white">{t('footer.insurance')}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">{t('footer.contact')}</h4>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-400">
              <Phone className="w-5 h-5 mr-2" />
              <span>+38063 832 34 90</span>
            </li>
            <li className="flex items-center text-gray-400">
              <Mail className="w-5 h-5 mr-2" />
              <span>toursmono@gmail.com</span>
            </li>
            <li className="flex items-center text-gray-400">
              <MapPin className="w-5 h-5 mr-2" />
              <span>{t('footer.address')}</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">{t('footer.rights')}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white">{t('footer.privacy')}</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;