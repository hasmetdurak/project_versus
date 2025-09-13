"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"

// Google Analytics 4
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

interface AnalyticsProps {
  gaId?: string
}

export function Analytics({ gaId = "G-XXXXXXXXXX" }: AnalyticsProps) {
  const pathname = usePathname()
  const { currentLanguage } = useLanguage()

  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== "undefined" && gaId) {
      // Load gtag script
      const script = document.createElement("script")
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
      script.async = true
      document.head.appendChild(script)

      // Initialize dataLayer and gtag
      window.dataLayer = window.dataLayer || []
      window.gtag = function gtag() {
        window.dataLayer.push(arguments)
      }

      window.gtag("js", new Date())
      window.gtag("config", gaId, {
        page_title: document.title,
        page_location: window.location.href,
        custom_map: {
          custom_parameter_1: "language",
        },
      })

      // Set custom dimensions
      window.gtag("config", gaId, {
        language: currentLanguage,
        content_group1: "comparison_site",
      })
    }
  }, [gaId, currentLanguage])

  // Track page views
  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", gaId, {
        page_path: pathname,
        page_title: document.title,
        language: currentLanguage,
      })
    }
  }, [pathname, currentLanguage, gaId])

  return null
}

// Custom event tracking functions
export const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, {
      ...parameters,
      timestamp: new Date().toISOString(),
    })
  }
}

export const trackAffiliateClick = (productName: string, category: string, position: number) => {
  trackEvent("affiliate_click", {
    product_name: productName,
    category: category,
    position: position,
    event_category: "affiliate",
    event_label: `${category}_${productName}`,
  })
}

export const trackComparison = (category: string, products: string[]) => {
  trackEvent("comparison_view", {
    category: category,
    products: products.join(","),
    product_count: products.length,
    event_category: "engagement",
  })
}

export const trackSearch = (searchTerm: string, category?: string) => {
  trackEvent("search", {
    search_term: searchTerm,
    category: category,
    event_category: "search",
  })
}
