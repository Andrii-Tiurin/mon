import React, { useState } from 'react';
import { X, Calendar, Users, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import type { Package, BookingFormData } from '../../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  package: Package;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, package: pkg }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<BookingFormData>({
    startDate: pkg.startDates[0],
    guests: 1,
    name: '',
    email: '',
    phone: ''
  });
  const [step, setStep] = useState<1 | 2>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Here you would typically make an API call to your server
      // For now, we'll simulate a server response
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          packageId: pkg.id,
          packageTitle: pkg.title,
          ...formData,
          totalPrice: pkg.price * formData.guests
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit booking');
      }

      setSubmitStatus('success');
      setTimeout(() => {
        onClose();
        setSubmitStatus('idle');
        setStep(1);
      }, 2000);
    } catch (error) {
      console.error('Booking submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const totalPrice = pkg.price * formData.guests;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50"
              onClick={onClose}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-white rounded-xl shadow-xl max-w-lg w-full p-6"
            >
              <button
                onClick={onClose}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>

              <h2 className="text-2xl font-bold mb-6">{t('booking.title')}</h2>
              <h3 className="text-xl mb-4">{pkg.title}</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {step === 1 ? (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t('booking.startDate')}
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <select
                          className="pl-10 w-full border rounded-lg p-2"
                          value={formData.startDate}
                          onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                        >
                          {pkg.startDates.map(date => (
                            <option key={date} value={date}>
                              {new Date(date).toLocaleDateString('uk-UA')}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t('booking.guests')}
                      </label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <select
                          className="pl-10 w-full border rounded-lg p-2"
                          value={formData.guests}
                          onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                        >
                          {[...Array(pkg.availability)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>
                              {i + 1} {i === 0 ? t('booking.guest') : t('booking.guests')}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="border-t pt-4 mt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">{t('booking.pricePerPerson')}:</span>
                        <span className="font-medium">{pkg.price} ₴</span>
                      </div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-600">{t('booking.totalPrice')}:</span>
                        <span className="text-lg font-bold text-blue-600">{totalPrice} ₴</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t('booking.name')}
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full border rounded-lg p-2"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full border rounded-lg p-2"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t('booking.phone')}
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full border rounded-lg p-2"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div className="border-t pt-4 mt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-600">{t('booking.totalPrice')}:</span>
                        <span className="text-lg font-bold text-blue-600">{totalPrice} ₴</span>
                      </div>
                    </div>
                  </>
                )}

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-2 rounded-lg flex items-center justify-center transition-colors ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {t('booking.submitting')}
                      </span>
                    ) : step === 1 ? (
                      t('booking.continue')
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        {t('booking.submit')}
                      </>
                    )}
                  </button>
                </div>

                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg">
                    {t('booking.successMessage')}
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg">
                    {t('booking.errorMessage')}
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;