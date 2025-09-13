"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, TrendingUp } from "lucide-react"
import { affiliateTracker } from "@/lib/affiliate"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"

interface AffiliateButtonProps {
  linkId: string
  url: string
  provider: string
  text?: string
  variant?: "default" | "secondary" | "outline"
  size?: "sm" | "default" | "lg"
  className?: string
  showIcon?: boolean
  trackingEnabled?: boolean
}

export function AffiliateButton({
  linkId,
  url,
  provider,
  text,
  variant = "default",
  size = "default",
  className = "",
  showIcon = true,
  trackingEnabled = true,
}: AffiliateButtonProps) {
  const { t } = useLanguage()

  const handleClick = async () => {
    if (trackingEnabled) {
      // Get user metadata for tracking
      const metadata = {
        ipAddress: "unknown", // Would be set by server-side tracking
        userAgent: navigator.userAgent,
        referrer: document.referrer,
        country: "unknown", // Would be determined by GeoIP
      }

      await affiliateTracker.trackClick(linkId, metadata)
    }

    // Open affiliate link in new tab
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const buttonText = text || t("getStarted")

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
      <Button
        onClick={handleClick}
        variant={variant}
        size={size}
        className={`group relative overflow-hidden ${className}`}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
          initial={false}
        />
        <span className="relative z-10 flex items-center gap-2">
          {buttonText}
          {showIcon && (
            <motion.div animate={{ x: 0 }} whileHover={{ x: 2 }} transition={{ duration: 0.2 }}>
              <ExternalLink className="h-4 w-4" />
            </motion.div>
          )}
        </span>
      </Button>
    </motion.div>
  )
}

// Special CTA button for high-converting placements
export function PremiumAffiliateButton({
  linkId,
  url,
  provider,
  originalPrice,
  discountPrice,
  discountPercentage,
  className = "",
}: {
  linkId: string
  url: string
  provider: string
  originalPrice?: string
  discountPrice?: string
  discountPercentage?: number
  className?: string
}) {
  const { t } = useLanguage()

  const handleClick = async () => {
    const metadata = {
      ipAddress: "unknown",
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      country: "unknown",
    }

    await affiliateTracker.trackClick(linkId, metadata)
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={`relative ${className}`}>
      <Button
        onClick={handleClick}
        size="lg"
        className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            <span>{t("getExclusiveDeal")}</span>
          </div>
          {discountPercentage && (
            <div className="text-sm opacity-90">
              {t("save")} {discountPercentage}%
            </div>
          )}
          {originalPrice && discountPrice && (
            <div className="flex items-center gap-2 text-sm">
              <span className="line-through opacity-70">{originalPrice}</span>
              <span className="font-bold">{discountPrice}</span>
            </div>
          )}
        </div>
      </Button>

      {/* Pulsing effect for high-converting buttons */}
      <motion.div
        className="absolute inset-0 rounded-lg bg-green-400 opacity-20"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.2, 0.1, 0.2],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  )
}
