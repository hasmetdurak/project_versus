import type { MetadataRoute } from "next"
import { supportedLanguages } from "@/lib/i18n"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://globalcompare.com"
  const currentDate = new Date()

  // Base pages
  const basePages = [
    "",
    "/vpn",
    "/credit-cards",
    "/hosting",
    "/seo-tools",
    "/insurance",
    "/money-transfer",
    "/blog",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ]

  // Generate sitemap entries for all languages
  const sitemapEntries: MetadataRoute.Sitemap = []

  Object.keys(supportedLanguages).forEach((lang) => {
    basePages.forEach((page) => {
      const url = lang === "en" ? `${baseUrl}${page}` : `${baseUrl}/${lang}${page}`

      sitemapEntries.push({
        url,
        lastModified: currentDate,
        changeFrequency: page === "" ? "daily" : page.includes("blog") ? "weekly" : "monthly",
        priority: page === "" ? 1.0 : page.includes("blog") ? 0.7 : 0.8,
        alternates: {
          languages: Object.keys(supportedLanguages).reduce(
            (acc, language) => {
              acc[language] = language === "en" ? `${baseUrl}${page}` : `${baseUrl}/${language}${page}`
              return acc
            },
            {} as Record<string, string>,
          ),
        },
      })
    })
  })

  return sitemapEntries
}
