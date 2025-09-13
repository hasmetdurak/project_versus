import type React from "react"
import type { Metadata } from "next/metadata"
import { notFound } from "next/navigation"
import { supportedLanguages, getTranslation } from "@/lib/i18n"

interface LanguageLayoutProps {
  children: React.ReactNode
  params: { lang: string }
}

export async function generateStaticParams() {
  return Object.keys(supportedLanguages)
    .filter((lang) => lang !== "en") // Exclude default language
    .map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const { lang } = params

  if (!(lang in supportedLanguages)) {
    return {}
  }

  const title = getTranslation("hero.title", lang as keyof typeof supportedLanguages)
  const description = getTranslation("hero.subtitle", lang as keyof typeof supportedLanguages)

  return {
    title: `${title} - GlobalCompare`,
    description,
    alternates: {
      languages: Object.keys(supportedLanguages).reduce(
        (acc, language) => {
          acc[language] = language === "en" ? "/" : `/${language}`
          return acc
        },
        {} as Record<string, string>,
      ),
    },
  }
}

export default function LanguageLayout({ children, params }: LanguageLayoutProps) {
  const { lang } = params

  // Validate language parameter
  if (!(lang in supportedLanguages)) {
    notFound()
  }

  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  )
}
