"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { usePathname, useRouter } from "next/navigation"
import {
  type SupportedLanguage,
  getLanguageFromPathname,
  removeLanguagePrefix,
  getTranslation,
  defaultLanguage,
} from "@/lib/i18n"

interface LanguageContextType {
  currentLanguage: SupportedLanguage
  setLanguage: (language: SupportedLanguage) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>(() => {
    const detectedLanguage = getLanguageFromPathname(pathname)
    return detectedLanguage || defaultLanguage
  })

  // Update language when pathname changes
  useEffect(() => {
    const newLanguage = getLanguageFromPathname(pathname) || defaultLanguage
    setCurrentLanguage(newLanguage)
  }, [pathname])

  const setLanguage = (language: SupportedLanguage) => {
    // Set cookie for persistence
    document.cookie = `preferred-language=${language}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`

    // Navigate to new language version
    const cleanPath = removeLanguagePrefix(pathname)
    const newPath = language === defaultLanguage ? cleanPath : `/${language}${cleanPath}`

    router.push(newPath)
  }

  const t = (key: string): string => {
    // Direct import to fix "require is not defined" error
    return getTranslation(key, currentLanguage)
  }

  return <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
