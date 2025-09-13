// SEO utilities for meta tags, schema, and hreflang

import { type SupportedLanguage, supportedLanguages } from "./i18n"

export interface SEOData {
  title: string
  description: string
  keywords?: string
  canonical?: string
  ogImage?: string
  ogType?: string
  schema?: any
  hreflang?: Record<string, string>
}

export function generateMetaTags(seo: SEOData, currentLang: SupportedLanguage = "en") {
  const tags = [
    { name: "description", content: seo.description },
    { property: "og:title", content: seo.title },
    { property: "og:description", content: seo.description },
    { property: "og:type", content: seo.ogType || "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: seo.title },
    { name: "twitter:description", content: seo.description },
  ]

  if (seo.keywords) {
    tags.push({ name: "keywords", content: seo.keywords })
  }

  if (seo.ogImage) {
    tags.push({ property: "og:image", content: seo.ogImage }, { name: "twitter:image", content: seo.ogImage })
  }

  return tags
}

export function generateHreflangTags(basePath: string, currentLang: SupportedLanguage) {
  const hreflangTags = []

  // Add all supported languages
  Object.keys(supportedLanguages).forEach((lang) => {
    const url = lang === "en" ? basePath : `/${lang}${basePath}`
    hreflangTags.push({
      rel: "alternate",
      hreflang: lang,
      href: url,
    })
  })

  // Add x-default for English
  hreflangTags.push({
    rel: "alternate",
    hreflang: "x-default",
    href: basePath,
  })

  return hreflangTags
}

export function generateProductSchema(product: any, category: any, features: any[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.logo_url,
    url: product.website_url,
    brand: {
      "@type": "Brand",
      name: product.name,
    },
    category: category.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.review_count,
      bestRating: 5,
      worstRating: 1,
    },
    offers: product.price_from
      ? {
          "@type": "Offer",
          price: product.price_from,
          priceCurrency: product.price_currency,
          availability: "https://schema.org/InStock",
        }
      : undefined,
  }
}

export function generateComparisonSchema(products: any[], category: any) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Best ${category.name} Comparison`,
    description: category.description,
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        description: product.description,
        image: product.logo_url,
        url: product.website_url,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: product.rating,
          reviewCount: product.review_count,
        },
      },
    })),
  }
}

export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  }
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GlobalCompare",
    url: "https://globalcompare.com",
    logo: "https://globalcompare.com/logo.png",
    description: "Compare the world's best services with expert reviews and detailed comparisons.",
    sameAs: [
      "https://twitter.com/globalcompare",
      "https://facebook.com/globalcompare",
      "https://linkedin.com/company/globalcompare",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-123-4567",
      contactType: "customer service",
      availableLanguage: Object.keys(supportedLanguages),
    },
  }
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "GlobalCompare",
    url: "https://globalcompare.com",
    description: "Compare VPN, credit cards, hosting, SEO tools, insurance and more.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://globalcompare.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    inLanguage: Object.keys(supportedLanguages),
  }
}

// Internal linking strategy
export function generateInternalLinks(currentCategory: string, currentProduct?: string) {
  const links = []

  // Category-based internal links
  const categoryLinks = {
    vpn: [
      { text: "Best VPN for Streaming", url: "/vpn/streaming" },
      { text: "VPN vs Proxy Comparison", url: "/vpn/vs-proxy" },
      { text: "Free VPN Services", url: "/vpn/free" },
    ],
    "credit-cards": [
      { text: "Best Travel Credit Cards", url: "/credit-cards/travel" },
      { text: "Cash Back vs Points", url: "/credit-cards/cashback-vs-points" },
      { text: "Business Credit Cards", url: "/credit-cards/business" },
    ],
    hosting: [
      { text: "WordPress Hosting Comparison", url: "/hosting/wordpress" },
      { text: "Cloud vs Shared Hosting", url: "/hosting/cloud-vs-shared" },
      { text: "E-commerce Hosting", url: "/hosting/ecommerce" },
    ],
    "seo-tools": [
      { text: "Keyword Research Tools", url: "/seo-tools/keyword-research" },
      { text: "SEO vs SEM", url: "/seo-tools/seo-vs-sem" },
      { text: "Local SEO Tools", url: "/seo-tools/local-seo" },
    ],
  }

  if (categoryLinks[currentCategory]) {
    links.push(...categoryLinks[currentCategory])
  }

  // Add cross-category links
  links.push(
    { text: "All Categories", url: "/" },
    { text: "Latest Reviews", url: "/reviews" },
    { text: "Expert Guides", url: "/guides" },
  )

  return links
}
