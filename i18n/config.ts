import type { Dictionary } from "./types"

export const defaultLocale = 'es'
export const locales = ['es', 'en'] as const
export type ValidLocale = (typeof locales)[number]

type LanguageNames = {
  [key in ValidLocale]: string
}

export const languageNames: LanguageNames = {
  es: "Español",
  en: "English"
}

export const dictionaries: {
  [key in ValidLocale]: () => Promise<Dictionary>
} = {
  es: () => import('./dictionaries/es.json').then((module) => module.default),
  en: () => import('./dictionaries/en.json').then((module) => module.default),
} 