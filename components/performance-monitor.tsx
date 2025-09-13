"use client"

import { useEffect } from "react"

export function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== "undefined" && "performance" in window) {
      // Largest Contentful Paint (LCP)
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "largest-contentful-paint") {
            console.log("[v0] LCP:", entry.startTime)
            // Track to analytics
            if (window.gtag) {
              window.gtag("event", "web_vitals", {
                name: "LCP",
                value: Math.round(entry.startTime),
                event_category: "performance",
              })
            }
          }
        }
      })

      try {
        observer.observe({ entryTypes: ["largest-contentful-paint"] })
      } catch (e) {
        console.warn("[v0] Performance observer not supported")
      }

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "first-input") {
            const fid = entry.processingStart - entry.startTime
            console.log("[v0] FID:", fid)
            if (window.gtag) {
              window.gtag("event", "web_vitals", {
                name: "FID",
                value: Math.round(fid),
                event_category: "performance",
              })
            }
          }
        }
      })

      try {
        fidObserver.observe({ entryTypes: ["first-input"] })
      } catch (e) {
        console.warn("[v0] FID observer not supported")
      }

      // Cumulative Layout Shift (CLS)
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
          }
        }
      })

      try {
        clsObserver.observe({ entryTypes: ["layout-shift"] })
      } catch (e) {
        console.warn("[v0] CLS observer not supported")
      }

      // Report CLS on page unload
      const reportCLS = () => {
        console.log("[v0] CLS:", clsValue)
        if (window.gtag) {
          window.gtag("event", "web_vitals", {
            name: "CLS",
            value: Math.round(clsValue * 1000),
            event_category: "performance",
          })
        }
      }

      window.addEventListener("beforeunload", reportCLS)

      return () => {
        observer.disconnect()
        fidObserver.disconnect()
        clsObserver.disconnect()
        window.removeEventListener("beforeunload", reportCLS)
      }
    }
  }, [])

  return null
}
