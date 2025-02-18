import { createI18n } from 'vue-i18n'
import zh from './lang/zh'
import en from './lang/en'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
  },
})

const loadedLanguages = ['en']

export default i18n
export function loadLocaleAsync(locale: any) {
  if (locale !== i18n.global.locale.value) {
    if (!loadedLanguages.includes(locale)) {
      return import(`./lang/${locale}/index.ts`)
        .then((lang) => {
          i18n.global.mergeLocaleMessage(locale, lang.default)
          i18n.global.locale.value = locale as any
          loadedLanguages.push(locale)
          return Promise.resolve(lang.default)
        })
        .catch((err) => {
          console.warn(`Failed to load ${locale} locale`, err)
          return Promise.reject(err)
        })
    } else {
      i18n.global.locale.value = locale as any
      return Promise.resolve()
    }
  }
  return Promise.resolve()
}
