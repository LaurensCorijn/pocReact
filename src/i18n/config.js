import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
    fallbackLng: 'nl',
    lng: 'nl',
    resources: {
        nl: {
            translations: require('./locales/nl/translations.json')
        },
        en: {
            translations: require('./locales/en/translations.json')
        }
    },
    ns: ['translations'],
    defaultNS: 'translations'
})
//console.log(i18n.getResourceBundle('nl','translations'))


i18n.languages = ['nl', 'en']

export default i18n
