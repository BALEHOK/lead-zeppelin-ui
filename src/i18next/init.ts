import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './lang.en.json';
import ru from './lang.ru.json';

export const initLocalization = () =>
  i18next.use(initReactI18next).init({
    fallbackLng: 'en',
    lng: 'ru',
    // debug: true,
    saveMissing: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en,
      ru,
    },
  });
