import React, { useState } from 'react';
import { Menu, X, Globe, User } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
              <img 
                src="https://i.ibb.co/3YY9T0X/1-1.png" 
                alt="MonoTours Logo" 
                className="h-20 w-auto object-contain"
                loading="eager"
                style={{ maxWidth: '300px' }}
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/destinations" 
              className={`text-gray-700 hover:text-blue-600 transition ${
                location.pathname === '/destinations' ? 'text-blue-600' : ''
              }`}
            >
              {t('nav.destinations')}
            </Link>
            <Link 
              to="/packages" 
              className={`text-gray-700 hover:text-blue-600 transition ${
                location.pathname === '/packages' ? 'text-blue-600' : ''
              }`}
            >
              {t('nav.packages')}
            </Link>
            <Link 
              to="/blog" 
              className={`text-gray-700 hover:text-blue-600 transition ${
                location.pathname === '/blog' ? 'text-blue-600' : ''
              }`}
            >
              {t('nav.blog')}
            </Link>
            <Link 
              to="/contact" 
              className={`text-gray-700 hover:text-blue-600 transition ${
                location.pathname === '/contact' ? 'text-blue-600' : ''
              }`}
            >
              {t('nav.contact')}
            </Link>
            
            <button
              onClick={() => setLanguage(language === 'uk' ? 'ru' : 'uk')}
              className="p-2 hover:bg-gray-100 rounded-full flex items-center gap-2"
            >
              <Globe className="w-5 h-5" />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </button>
            
            <Link
              to="/login"
              className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 ${
                location.pathname === '/login' ? 'bg-blue-700' : ''
              }`}
            >
              <User className="w-4 h-4 mr-2" />
              {t('nav.signIn')}
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white border-b shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => handleNavigation('/destinations')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              {t('nav.destinations')}
            </button>
            <button
              onClick={() => handleNavigation('/packages')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              {t('nav.packages')}
            </button>
            <button
              onClick={() => handleNavigation('/blog')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              {t('nav.blog')}
            </button>
            <button
              onClick={() => handleNavigation('/contact')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              {t('nav.contact')}
            </button>
            <button
              onClick={() => setLanguage(language === 'uk' ? 'ru' : 'uk')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 flex items-center gap-2"
            >
              <Globe className="w-5 h-5" />
              <span>{language === 'uk' ? 'Українська' : 'Русский'}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;