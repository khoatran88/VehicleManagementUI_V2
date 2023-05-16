import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import resourcesToBackend from 'i18next-resources-to-backend'

i18n
  .use(
    resourcesToBackend(
      (language: any, namespace: any) =>
        import(`./${language}/${namespace}.json`)
    )
  )
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ns: ['common'],
    defaultNS: 'common',
    debug: true,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
