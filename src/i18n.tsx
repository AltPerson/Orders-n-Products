import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEnglish from './Translation/English/translation.json';
import translationUkraine from './Translation/Ukraine/translation.json';

const resources = {
  en: {
    translation: translationEnglish,
  },
  ua: {
    translation: translationUkraine,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: 'ua',
});

export default i18next;
