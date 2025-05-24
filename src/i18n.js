import i18n from "i18next"
import { initReactI18next } from "react-i18next"

// Import translations
import translationEN from "./locales/en/translation.json"
import translationPL from "./locales/pl/translation.json"
import translationDE from "./locales/de/translation.json"
import translationUA from "./locales/ua/translation.json"

const resources = {
  en: {
    translation: translationEN,
  },
  pl: {
    translation: translationPL,
  },
  de: {
    translation: translationDE,
  },
  ua: {
    translation: translationUA,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: "pl", // Default language
  fallbackLng: "pl",
  interpolation: {
    escapeValue: false, // React already escapes values
  },
})

export default i18n
