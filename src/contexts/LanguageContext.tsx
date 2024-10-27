import React, { createContext, useContext, useState } from 'react';

interface LanguageContextType {
  language: 'uk' | 'ru';
  setLanguage: (lang: 'uk' | 'ru') => void;
  t: (key: string) => string;
}

const translations = {
  uk: {
    // Navigation
    'nav.destinations': 'Напрямки',
    'nav.packages': 'Тури',
    'nav.blog': 'Блог',
    'nav.contact': 'Контакти',
    'nav.signIn': 'Увійти',
    
    // Hero
    'hero.title': 'Відкрийте свою наступну пригоду',
    'hero.subtitle': 'Досліджуйте світ разом з MonoTours - вашим надійним партнером у подорожах',
    
    // Search
    'search.placeholder': 'Куди б ви хотіли поїхати?',
    'search.guest': 'гість',
    'search.guests': 'гостей',
    'search.button': 'Пошук',
    
    // Destinations
    'destinations.title': 'Популярні напрямки',
    'destinations.from': 'від',
    
    // Egypt
    'destinations.egypt.name': 'Єгипет',
    'destinations.egypt.country': 'Африка',
    'destinations.egypt.flightTime': 'Час перельоту: 4 години',
    'destinations.egypt.visa': 'Віза: $25 або безкоштовно',
    'destinations.egypt.season': 'Найкращий сезон: зима',
    
    // Turkey
    'destinations.turkey.name': 'Туреччина',
    'destinations.turkey.country': 'Європа/Азія',
    'destinations.turkey.flightTime': 'Час перельоту: 2 години',
    'destinations.turkey.visa': 'Віза: не потрібна',
    'destinations.turkey.season': 'Найкращий сезон: літо',
    
    // Greece
    'destinations.greece.name': 'Греція',
    'destinations.greece.country': 'Європа',
    'destinations.greece.flightTime': 'Час перельоту: 2,5 години',
    'destinations.greece.visa': 'Віза: не потрібна',
    'destinations.greece.season': 'Найкращий сезон: літо',
    
    // Dubai
    'destinations.dubai.name': 'ОАЕ (Дубай)',
    'destinations.dubai.country': 'Близький Схід',
    'destinations.dubai.flightTime': 'Час перельоту: 5 годин',
    'destinations.dubai.visa': 'Віза: по прильоту',
    'destinations.dubai.season': 'Найкращий сезон: зима',
    
    // Thailand
    'destinations.thailand.name': 'Таїланд',
    'destinations.thailand.country': 'Азія',
    'destinations.thailand.flightTime': 'Час перельоту: 10 годин',
    'destinations.thailand.visa': 'Віза: не потрібна (до 30 днів)',
    'destinations.thailand.season': 'Найкращий сезон: зима',
    
    // Maldives
    'destinations.maldives.name': 'Мальдіви',
    'destinations.maldives.country': 'Індійський океан',
    'destinations.maldives.flightTime': 'Час перельоту: 9 годин',
    'destinations.maldives.visa': 'Віза: по прильоту',
    'destinations.maldives.season': 'Найкращий сезон: грудень-квітень',
    
    // Footer
    'footer.quickLinks': 'Швидкі посилання',
    'footer.services': 'Послуги',
    'footer.contact': 'Контакти',
    'footer.about': 'Про нас',
    'footer.flights': 'Авіаквитки',
    'footer.hotels': 'Готелі',
    'footer.cars': 'Оренда авто',
    'footer.insurance': 'Страхування',
    'footer.rights': '© 2024 MonoTours. Всі права захищені.',
    'footer.privacy': 'Конфіденційність',
    'footer.terms': 'Умови використання',
    'footer.description': 'Ваш надійний партнер у подорожах по всьому світу',
    'footer.address': 'Київ, вул. Хрещатик, 1',
    
    // Site
    'site.subtitle': 'онлайн турагенція',
    
    // Booking
    'booking.title': 'Забронювати тур',
    'booking.startDate': 'Дата початку',
    'booking.guests': 'Кількість гостей',
    'booking.guest': 'гість',
    'booking.pricePerPerson': 'Ціна за особу',
    'booking.totalPrice': 'Загальна вартість',
    'booking.name': "Ваше ім'я",
    'booking.phone': 'Телефон',
    'booking.continue': 'Продовжити',
    'booking.submit': 'Відправити заявку',
    'booking.submitting': 'Відправляємо...',
    'booking.successMessage': 'Заявка успішно відправлена! Ми зв\'яжемося з вами найближчим часом.',
    'booking.errorMessage': 'Виникла помилка при відправці заявки. Будь ласка, спробуйте ще раз.',
    
    // About page
    'about.title': 'Про нас',
    'about.subtitle': 'Ваш надійний партнер у подорожах',
    'about.description.first': 'Monotours — туристичне агентство, створене для того, щоб перетворити ваші мрії про подорожі в реальність. Ми надаємо нашим клієнтам повний спектр туристичних послуг, включаючи бронювання авіаквитків, підбір найкращих готелів, організацію екскурсійних програм та персоналізованих турів у найбільш затребувані напрямки.',
    'about.description.second': 'Ми розуміємо, наскільки важлива кожна деталь при організації подорожі, і прагнемо зробити ваш відпочинок комфортним та незабутнім. З нами ви можете розраховувати на надійну підтримку на всіх етапах поїздки — від планування до повернення додому.',
    'about.description.third': 'Приєднуйтесь до числа наших задоволених клієнтів та вирушайте у незабутню подорож разом з Monotours!',
    'about.features.worldwide.title': 'Глобальне покриття',
    'about.features.worldwide.description': 'Працюємо з перевіреними партнерами по всьому світу',
    'about.features.team.title': 'Професійна команда',
    'about.features.team.description': 'Досвідчені фахівці з організації подорожей',
    'about.features.reliability.title': 'Надійність',
    'about.features.reliability.description': 'Гарантуємо безпеку та якість послуг',
    'about.features.support.title': '24/7 підтримка',
    'about.features.support.description': 'Завжди на зв\'язку для вирішення будь-яких питань',
    'about.features.quality.title': 'Висока якість',
    'about.features.quality.description': 'Найкращий сервіс за доступними цінами',
    'about.features.care.title': 'Індивідуальний підхід',
    'about.features.care.description': 'Враховуємо всі ваші побажання та потреби',
    'about.cta.title': 'Готові до нових пригод?',
    'about.cta.description': 'Дозвольте нам зробити вашу подорож незабутньою',
    'about.cta.button': 'Забронювати тур'
  },
  ru: {
    // Navigation
    'nav.destinations': 'Направления',
    'nav.packages': 'Туры',
    'nav.blog': 'Блог',
    'nav.contact': 'Контакты',
    'nav.signIn': 'Войти',
    
    // Hero
    'hero.title': 'Откройте свое следующее приключение',
    'hero.subtitle': 'Исследуйте мир вместе с MonoTours - вашим надежным партнером в путешествиях',
    
    // Search
    'search.placeholder': 'Куда бы вы хотели поехать?',
    'search.guest': 'гость',
    'search.guests': 'гостей',
    'search.button': 'Поиск',
    
    // Destinations
    'destinations.title': 'Популярные направления',
    'destinations.from': 'от',
    
    // Egypt
    'destinations.egypt.name': 'Египет',
    'destinations.egypt.country': 'Африка',
    'destinations.egypt.flightTime': 'Время перелета: 4 часа',
    'destinations.egypt.visa': 'Виза: $25 или бесплатно',
    'destinations.egypt.season': 'Лучший сезон: зима',
    
    // Turkey
    'destinations.turkey.name': 'Турция',
    'destinations.turkey.country': 'Европа/Азия',
    'destinations.turkey.flightTime': 'Время перелета: 2 часа',
    'destinations.turkey.visa': 'Виза: не нужна',
    'destinations.turkey.season': 'Лучший сезон: лето',
    
    // Greece
    'destinations.greece.name': 'Греция',
    'destinations.greece.country': 'Европа',
    'destinations.greece.flightTime': 'Время перелета: 2,5 часа',
    'destinations.greece.visa': 'Виза: не нужна',
    'destinations.greece.season': 'Лучший сезон: лето',
    
    // Dubai
    'destinations.dubai.name': 'ОАЭ (Дубай)',
    'destinations.dubai.country': 'Ближний Восток',
    'destinations.dubai.flightTime': 'Время перелета: 5 часов',
    'destinations.dubai.visa': 'Виза: по прилету',
    'destinations.dubai.season': 'Лучший сезон: зима',
    
    // Thailand
    'destinations.thailand.name': 'Таиланд',
    'destinations.thailand.country': 'Азия',
    'destinations.thailand.flightTime': 'Время перелета: 10 часов',
    'destinations.thailand.visa': 'Виза: не нужна (до 30 дней)',
    'destinations.thailand.season': 'Лучший сезон: зима',
    
    // Maldives
    'destinations.maldives.name': 'Мальдивы',
    'destinations.maldives.country': 'Индийский океан',
    'destinations.maldives.flightTime': 'Время перелета: 9 часов',
    'destinations.maldives.visa': 'Виза: по прилету',
    'destinations.maldives.season': 'Лучший сезон: декабрь-апрель',
    
    // Footer
    'footer.quickLinks': 'Быстрые ссылки',
    'footer.services': 'Услуги',
    'footer.contact': 'Контакты',
    'footer.about': 'О нас',
    'footer.flights': 'Авиабилеты',
    'footer.hotels': 'Отели',
    'footer.cars': 'Аренда авто',
    'footer.insurance': 'Страхование',
    'footer.rights': '© 2024 MonoTours. Все права защищены.',
    'footer.privacy': 'Конфиденциальность',
    'footer.terms': 'Условия использования',
    'footer.description': 'Ваш надежный партнер в путешествиях по всему миру',
    'footer.address': 'Киев, ул. Крещатик, 1',
    
    // Site
    'site.subtitle': 'онлайн турагентство',
    
    // Booking
    'booking.title': 'Забронировать тур',
    'booking.startDate': 'Дата начала',
    'booking.guests': 'Количество гостей',
    'booking.guest': 'гость',
    'booking.pricePerPerson': 'Цена за человека',
    'booking.totalPrice': 'Общая стоимость',
    'booking.name': 'Ваше имя',
    'booking.phone': 'Телефон',
    'booking.continue': 'Продолжить',
    'booking.submit': 'Отправить заявку',
    'booking.submitting': 'Отправляем...',
    'booking.successMessage': 'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.',
    'booking.errorMessage': 'Произошла ошибка при отправке заявки. Пожалуйста, попробуйте еще раз.',
    
    // About page
    'about.title': 'О нас',
    'about.subtitle': 'Ваш надежный партнер в путешествиях',
    'about.description.first': 'Monotours — туристическое агентство, созданное для того, чтобы превратить ваши мечты о путешествиях в реальность. Мы предоставляем нашим клиентам полный спектр туристических услуг, включая бронирование авиабилетов, подбор лучших отелей, организацию экскурсионных программ и персонализированных туров в самые востребованные направления.',
    'about.description.second': 'Мы понимаем, насколько важна каждая деталь при организации путешествия, и стремимся сделать ваш отдых комфортным и незабываемым. С нами вы можете рассчитывать на надежную поддержку на всех этапах поездки — от планирования до возвращения домой.',
    'about.description.third': 'Присоединяйтесь к числу наших довольных клиентов и отправляйтесь в незабываемое путешествие вместе с Monotours!',
    'about.features.worldwide.title': 'Глобальное покрытие',
    'about.features.worldwide.description': 'Работаем с проверенными партнерами по всему миру',
    'about.features.team.title': 'Профессиональная команда',
    'about.features.team.description': 'Опытные специалисты по организации путешествий',
    'about.features.reliability.title': 'Надежность',
    'about.features.reliability.description': 'Гарантируем безопасность и качество услуг',
    'about.features.support.title': '24/7 поддержка',
    'about.features.support.description': 'Всегда на связи для решения любых вопросов',
    'about.features.quality.title': 'Высокое качество',
    'about.features.quality.description': 'Лучший сервис по доступным ценам',
    'about.features.care.title': 'Индивидуальный подход',
    'about.features.care.description': 'Учитываем все ваши пожелания и потребности',
    'about.cta.title': 'Готовы к новым приключениям?',
    'about.cta.description': 'Позвольте нам сделать ваше путешествие незабываемым',
    'about.cta.button': 'Забронировать тур'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'uk' | 'ru'>('uk');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};