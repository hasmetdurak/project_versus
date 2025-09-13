"use client"

import Head from "next/head"
import { useLanguage } from "@/contexts/language-context"
import { generateHreflangTags } from "@/lib/seo"

interface SEOHeadProps {
  title: string
  description: string
  keywords?: string
  canonical?: string
  ogImage?: string
  ogType?: string
  schema?: any
  noIndex?: boolean
}

export function SEOHead({
  title,
  description,
  keywords,
  canonical,
  ogImage = "/og-image.jpg",
  ogType = "website",
  schema,
  noIndex = false,
}: SEOHeadProps) {
  const { currentLanguage } = useLanguage()

  const fullTitle = `${title} | GlobalCompare`
  const currentUrl = typeof window !== "undefined" ? window.location.href : ""
  const baseUrl = typeof window !== "undefined" ? window.location.origin : ""

  // Generate hreflang tags
  const hreflangTags = generateHreflangTags(canonical || "/", currentLanguage)

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noIndex ? "noindex,nofollow" : "index,follow"} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={`${baseUrl}${canonical}`} />}

      {/* Hreflang Tags */}
      {hreflangTags.map((tag, index) => (
        <link key={index} rel={tag.rel} hrefLang={tag.hreflang} href={`${baseUrl}${tag.href}`} />
      ))}

      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:locale"
        content={currentLanguage === "en" ? "en_US" : `${currentLanguage}_${currentLanguage.toUpperCase()}`}
      />
      <meta property="og:site_name" content="GlobalCompare" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />
      <meta name="twitter:site" content="@globalcompare" />

      {/* Additional SEO Tags */}
      <meta name="author" content="GlobalCompare Team" />
      <meta name="publisher" content="GlobalCompare" />
      <meta name="language" content={currentLanguage} />

      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />

      {/* Schema.org JSON-LD */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      )}

      {/* Favicon and Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  )
}
