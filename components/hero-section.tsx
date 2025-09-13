"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, CreditCard, Server, TrendingUp, Umbrella, Send } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    name: "VPN Services",
    description: "Secure your privacy with top-rated VPN providers",
    href: "/vpn",
    icon: Shield,
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    count: "25+ providers",
  },
  {
    name: "Credit Cards",
    description: "Find the perfect credit card for your needs",
    href: "/credit-cards",
    icon: CreditCard,
    color: "bg-green-500/10 text-green-600 dark:text-green-400",
    count: "50+ cards",
  },
  {
    name: "Web Hosting",
    description: "Compare hosting providers and SaaS platforms",
    href: "/hosting",
    icon: Server,
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    count: "40+ services",
  },
  {
    name: "SEO Tools",
    description: "Boost your rankings with powerful SEO tools",
    href: "/seo-tools",
    icon: TrendingUp,
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    count: "30+ tools",
  },
  {
    name: "Insurance",
    description: "Protect what matters with comprehensive coverage",
    href: "/insurance",
    icon: Umbrella,
    color: "bg-red-500/10 text-red-600 dark:text-red-400",
    count: "20+ providers",
  },
  {
    name: "Money Transfer",
    description: "Send money globally with the best rates",
    href: "/money-transfer",
    icon: Send,
    color: "bg-teal-500/10 text-teal-600 dark:text-teal-400",
    count: "15+ services",
  },
]

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">
            Trusted by millions worldwide
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
            Compare the World's
            <span className="text-primary"> Best Services</span>
          </h1>
          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
            Make informed decisions with our comprehensive comparisons of VPN services, credit cards, hosting providers,
            and more. Find the perfect solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Start Comparing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
              Browse Categories
            </Button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <Link key={category.href} href={category.href}>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg ${category.color}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground text-balance">{category.description}</p>
                    <div className="flex items-center mt-4 text-sm text-primary group-hover:translate-x-1 transition-transform">
                      Compare now
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
