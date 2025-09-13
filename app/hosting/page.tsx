import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ComparisonTable } from "@/components/comparison-table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Star, Shield, Globe, TrendingUp, Server, Zap, Users, Clock } from "lucide-react"

const hostingProducts = [
  {
    id: "bluehost",
    name: "Bluehost",
    price: "$2.95/month",
    rating: 4.6,
    features: {
      "Starting Price": "$2.95/month",
      "Uptime": "99.9%",
      "Speed Rating": "⚡⚡⚡⚡",
      "Support": "24/7 phone, chat, email",
      "Best For": "WordPress beginners",
      "Free Domain": "Yes (1 year)",
      "Free SSL": "Yes",
      "Storage": "50GB SSD"
    },
    pros: ["Official WordPress recommended", "Free domain and SSL", "One-click WordPress install", "24/7 support"],
    cons: ["Higher renewal rates", "Limited storage on basic plan"],
    affiliateUrl: "https://bluehost.com/?ref=globalcompare"
  },
  {
    id: "siteground",
    name: "SiteGround",
    price: "$3.99/month",
    rating: 4.8,
    features: {
      "Starting Price": "$3.99/month",
      "Uptime": "99.99%",
      "Speed Rating": "⚡⚡⚡⚡⚡",
      "Support": "24/7 premium support, free CDN",
      "Best For": "Performance-focused sites",
      "Free Domain": "Yes (1 year)",
      "Free SSL": "Yes",
      "Storage": "10GB SSD"
    },
    pros: ["Fastest loading speeds", "Excellent customer support", "Advanced security features", "Free daily backups"],
    cons: ["Limited storage", "Higher renewal prices"],
    affiliateUrl: "https://siteground.com/?ref=globalcompare"
  },
  {
    id: "hostinger",
    name: "Hostinger",
    price: "$1.99/month",
    rating: 4.4,
    features: {
      "Starting Price": "$1.99/month",
      "Uptime": "99.9%",
      "Speed Rating": "⚡⚡⚡⚡",
      "Support": "24/7 chat support, free SSL",
      "Best For": "Budget-conscious users",
      "Free Domain": "Yes (1 year)",
      "Free SSL": "Yes",
      "Storage": "100GB SSD"
    },
    pros: ["Very affordable pricing", "Good performance for the price", "User-friendly control panel", "30-day money-back guarantee"],
    cons: ["No phone support", "Limited advanced features"],
    affiliateUrl: "https://hostinger.com/?ref=globalcompare"
  },
  {
    id: "kinsta",
    name: "Kinsta",
    price: "$30/month",
    rating: 4.9,
    features: {
      "Starting Price": "$30/month",
      "Uptime": "99.99%",
      "Speed Rating": "⚡⚡⚡⚡⚡",
      "Support": "24/7 WordPress experts",
      "Best For": "High-performance WordPress",
      "Free Domain": "No",
      "Free SSL": "Yes",
      "Storage": "10GB SSD"
    },
    pros: ["Premium managed WordPress hosting", "Google Cloud infrastructure", "Expert WordPress support", "Advanced developer tools"],
    cons: ["Expensive for beginners", "WordPress only"],
    affiliateUrl: "https://kinsta.com/?ref=globalcompare"
  },
  {
    id: "a2-hosting",
    name: "A2 Hosting",
    price: "$2.99/month",
    rating: 4.5,
    features: {
      "Starting Price": "$2.99/month",
      "Uptime": "99.9%",
      "Speed Rating": "⚡⚡⚡⚡⚡",
      "Support": "Turbo servers, 24/7 support",
      "Best For": "Speed-focused sites",
      "Free Domain": "No",
      "Free SSL": "Yes",
      "Storage": "100GB SSD"
    },
    pros: ["Turbo servers for speed", "Developer-friendly features", "Anytime money-back guarantee", "Green hosting"],
    cons: ["No free domain", "Turbo features cost extra"],
    affiliateUrl: "https://a2hosting.com/?ref=globalcompare"
  }
]

const hostingFeatures = [
  "Starting Price",
  "Uptime",
  "Speed Rating",
  "Support",
  "Best For",
  "Free Domain",
  "Free SSL",
  "Storage"
]

export default function HostingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-teal-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                🌐 Web Hosting: Build Your Online Presence
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Your website's hosting provider directly impacts performance, security, and user experience. Choosing the right hosting service is critical for SEO rankings, conversion rates, and overall business success.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="text-sm py-2 px-4">
                  <Star className="w-4 h-4 mr-2" />
                  Expert Reviews
                </Badge>
                <Badge variant="secondary" className="text-sm py-2 px-4">
                  <Shield className="w-4 h-4 mr-2" />
                  Secure Hosting
                </Badge>
                <Badge variant="secondary" className="text-sm py-2 px-4">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Updated 2025
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Top 5 Web Hosting Providers Compared (2025)
            </h2>
            <ComparisonTable
              products={hostingProducts}
              features={hostingFeatures}
              category="Web Hosting"
              title="Best Web Hosting Providers 2025"
              description="Compare top hosting providers by performance, features, and pricing. Find the best hosting solution for your website."
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}