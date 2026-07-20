'use client'

import {
  createContext,
  useContext,
  type ReactNode,
} from 'react'

export type Language = 'en' | 'sr'

const navigation = {
  en: {
    home: 'Home',
    projects: 'Projects',
    services: 'Services',
    about: 'About',
    process: 'Process',
    testimonials: 'Testimonials',
    contact: 'Contact',
    startProject: 'Start Your Project',
    menu: 'Menu',
  },
  sr: {
    home: 'Početna',
    projects: 'Projekti',
    services: 'Usluge',
    about: 'O nama',
    process: 'Proces',
    testimonials: 'Utisci',
    contact: 'Kontakt',
    startProject: 'Pokreni projekat',
    menu: 'Meni',
  },
} as const

type LanguageContextValue = {
  language: Language
  navigation: (typeof navigation)[Language]
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const value: LanguageContextValue = {
    language: 'en',
    navigation: navigation.en,
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider')
  }
  return context
}
