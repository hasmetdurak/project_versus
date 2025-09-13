export interface AffiliateLink {
  id: string
  productId: string
  provider: string
  url: string
  commission: number
  trackingCode: string
  isActive: boolean
  clickCount: number
  conversionCount: number
  revenue: number
  createdAt: Date
  updatedAt: Date
}

export interface AffiliateClick {
  id: string
  affiliateLinkId: string
  userId?: string
  ipAddress: string
  userAgent: string
  referrer: string
  country: string
  timestamp: Date
  converted: boolean
  conversionValue?: number
}

export class AffiliateTracker {
  private static instance: AffiliateTracker
  private clicks: Map<string, AffiliateClick[]> = new Map()

  static getInstance(): AffiliateTracker {
    if (!AffiliateTracker.instance) {
      AffiliateTracker.instance = new AffiliateTracker()
    }
    return AffiliateTracker.instance
  }

  async trackClick(
    linkId: string,
    metadata: {
      userId?: string
      ipAddress: string
      userAgent: string
      referrer: string
      country: string
    },
  ): Promise<void> {
    const click: AffiliateClick = {
      id: crypto.randomUUID(),
      affiliateLinkId: linkId,
      userId: metadata.userId,
      ipAddress: metadata.ipAddress,
      userAgent: metadata.userAgent,
      referrer: metadata.referrer,
      country: metadata.country,
      timestamp: new Date(),
      converted: false,
    }

    // Store click data
    const existingClicks = this.clicks.get(linkId) || []
    existingClicks.push(click)
    this.clicks.set(linkId, existingClicks)

    // Send to analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "affiliate_click", {
        affiliate_link_id: linkId,
        affiliate_provider: metadata.referrer,
        country: metadata.country,
      })
    }

    // Store in localStorage for conversion tracking
    if (typeof window !== "undefined") {
      const clickData = {
        linkId,
        clickId: click.id,
        timestamp: click.timestamp.toISOString(),
      }
      localStorage.setItem(`affiliate_click_${linkId}`, JSON.stringify(clickData))
    }
  }

  async trackConversion(linkId: string, conversionValue: number): Promise<void> {
    if (typeof window !== "undefined") {
      const clickData = localStorage.getItem(`affiliate_click_${linkId}`)
      if (clickData) {
        const { clickId } = JSON.parse(clickData)

        // Update click with conversion data
        const clicks = this.clicks.get(linkId) || []
        const click = clicks.find((c) => c.id === clickId)
        if (click) {
          click.converted = true
          click.conversionValue = conversionValue
        }

        // Send conversion event to analytics
        if (window.gtag) {
          window.gtag("event", "affiliate_conversion", {
            affiliate_link_id: linkId,
            conversion_value: conversionValue,
            currency: "USD",
          })
        }

        // Clean up localStorage
        localStorage.removeItem(`affiliate_click_${linkId}`)
      }
    }
  }

  getClickStats(linkId: string): {
    totalClicks: number
    conversions: number
    conversionRate: number
    totalRevenue: number
  } {
    const clicks = this.clicks.get(linkId) || []
    const conversions = clicks.filter((c) => c.converted).length
    const totalRevenue = clicks.reduce((sum, c) => sum + (c.conversionValue || 0), 0)

    return {
      totalClicks: clicks.length,
      conversions,
      conversionRate: clicks.length > 0 ? (conversions / clicks.length) * 100 : 0,
      totalRevenue,
    }
  }
}

export const affiliateTracker = AffiliateTracker.getInstance()

// Utility functions for affiliate link management
export function generateTrackingCode(provider: string, productId: string): string {
  const timestamp = Date.now()
  const random = Math.random().toString(36).substring(2, 15)
  return `${provider}_${productId}_${timestamp}_${random}`
}

export function buildAffiliateUrl(
  baseUrl: string,
  trackingCode: string,
  additionalParams?: Record<string, string>,
): string {
  const url = new URL(baseUrl)
  url.searchParams.set("ref", trackingCode)
  url.searchParams.set("utm_source", "globalcompare")
  url.searchParams.set("utm_medium", "affiliate")
  url.searchParams.set("utm_campaign", "comparison")

  if (additionalParams) {
    Object.entries(additionalParams).forEach(([key, value]) => {
      url.searchParams.set(key, value)
    })
  }

  return url.toString()
}

export function validateAffiliateUrl(url: string): boolean {
  try {
    const urlObj = new URL(url)
    return urlObj.protocol === "https:" && urlObj.hostname.length > 0
  } catch {
    return false
  }
}
