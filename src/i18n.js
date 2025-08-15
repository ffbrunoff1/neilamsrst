import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 1. Importe os arquivos JSON
import translationEN from './locales/en/translation.json';
import translationPT from './locales/pt/translation.json';

// 2. Crie o objeto de recursos a partir dos arquivos importados
const resources = {
  en: {
    translation: translationEN
  },
  pt: {
    translation: translationPT
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources, // 3. Use o objeto de recursos aqui
    fallbackLng: 'pt',
    debug: true, // Você pode remover isso em produção se quiser
    interpolation: {
      escapeValue: false, // React já protege contra XSS
    },
  });

export default i18n;