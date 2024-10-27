import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <div className="pt-24 px-4 max-w-7xl mx-auto pb-16">
      <h1 className="text-3xl font-bold mb-8">Зв'яжіться з нами</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold mb-6">Контактна інформація</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="font-medium">Телефон</h3>
                <p className="text-gray-600">+380 44 123 4567</p>
                <p className="text-gray-600">+380 44 234 5678</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-600">info@monotours.com</p>
                <p className="text-gray-600">support@monotours.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="font-medium">Адреса</h3>
                <p className="text-gray-600">вул. Хрещатик, 1</p>
                <p className="text-gray-600">Київ, 01001</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold mb-6">Напишіть нам</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Ім'я</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Тема</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Повідомлення</label>
              <textarea
                rows={4}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Send className="w-5 h-5 mr-2" />
              Надіслати
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;