import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

var supportedLangs = ['en', 'uk'];
var userLang = (navigator.language || navigator.userLanguage).slice(0, 2);
export const lang = supportedLangs.find(i => i === userLang) || 'en';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .use(Backend)
    .init({
        // detection: options,
        lng: lang,
        backend: {
            /* translation file path */
            loadPath: '/assets/i18n/{{ns}}/{{lng}}.json'
        },
        fallbackLng: 'en',
        debug: true,
        /* can have multiple namespace, in case you want to divide a huge translation into smaller pieces and load them on demand */
        ns: ['translations'],
        defaultNS: 'translations',
        keySeparator: false,
        interpolation: {
            escapeValue: false,
            formatSeparator: ','
        },
        react: {
            wait: true
        }
    });

export default i18n;
