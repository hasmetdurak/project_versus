import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import { LanguageProvider } from "@/contexts/language-context"
import { Analytics as CustomAnalytics } from "@/components/analytics"
import { PerformanceMonitor } from "@/components/performance-monitor"
import { generateOrganizationSchema, generateWebsiteSchema } from "@/lib/seo"
import "./globals.css"

export const metadata: Metadata = {
  title: "GlobalCompare - Compare Best Services Worldwide",
  description:
    "Compare VPN, credit cards, hosting, SEO tools, insurance and more. Find the best services with detailed comparisons and expert reviews.",
  generator: "GlobalCompare",
  keywords: "comparison, VPN, credit cards, hosting, SEO tools, insurance, money transfer, reviews",
  authors: [{ name: "GlobalCompare Team" }],
  openGraph: {
    title: "GlobalCompare - Compare Best Services Worldwide",
    description:
      "Compare VPN, credit cards, hosting, SEO tools, insurance and more. Find the best services with detailed comparisons and expert reviews.",
    type: "website",
    locale: "en_US",
    alternateLocale: ["tr_TR", "de_DE", "fr_FR", "es_ES"],
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GlobalCompare - Compare Best Services Worldwide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GlobalCompare - Compare Best Services Worldwide",
    description: "Compare VPN, credit cards, hosting, SEO tools, insurance and more.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    languages: {
      en: "/",
      tr: "/tr",
      de: "/de",
      fr: "/fr",
      es: "/es",
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
}

const organizationSchema = generateOrganizationSchema()
const websiteSchema = generateWebsiteSchema()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <LanguageProvider>
              {children}
              <CustomAnalytics />
              <PerformanceMonitor />
            </LanguageProvider>
            <Analytics />
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  )
}
