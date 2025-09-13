"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ExternalLink } from "lucide-react"
import Image from "next/image"

// Mock data - in real app this would come from database
const featuredProducts = [
  {
    id: 1,
    name: "ExpressVPN",
    category: "VPN",
    rating: 4.8,
    reviewCount: 12500,
    price: "$8.32/month",
    description: "Lightning-fast VPN with military-grade encryption and 3000+ servers worldwide.",
    logo: "/expressvpn-logo.png",
    features: ["No-logs policy", "24/7 support", "30-day guarantee"],
    badge: "Editor's Choice",
    ctaText: "Get ExpressVPN",
  },
  {
    id: 2,
    name: "Chase Sapphire Preferred",
    category: "Credit Card",
    rating: 4.7,
    reviewCount: 8900,
    price: "$95 annual fee",
    description: "Premium travel rewards card with 2x points on travel and dining purchases.",
    logo: "/chase-credit-card-logo.jpg",
    features: ["60k bonus points", "No foreign fees", "Travel insurance"],
    badge: "Best Value",
    ctaText: "Apply Now",
  },
  {
    id: 3,
    name: "Bluehost",
    category: "Hosting",
    rating: 4.6,
    reviewCount: 15600,
    price: "$2.95/month",
    description: "Reliable web hosting with one-click WordPress install and 24/7 support.",
    logo: "/bluehost-logo.png",
    features: ["Free domain", "SSL certificate", "WordPress optimized"],
    badge: "Most Popular",
    ctaText: "Start Hosting",
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Editor's Top Picks</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our experts have tested and reviewed hundreds of services. Here are the standout performers in each
            category.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              {product.badge && (
                <Badge className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground">
                  {product.badge}
                </Badge>
              )}

              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-12 w-12 rounded-lg overflow-hidden bg-background border">
                    <Image
                      src={product.logo || "/placeholder.svg"}
                      alt={`${product.name} logo`}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{product.category}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviewCount.toLocaleString()} reviews)
                  </span>
                </div>

                <div className="text-2xl font-bold text-primary mb-3">{product.price}</div>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-4 text-balance">{product.description}</p>

                <div className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Button className="w-full group-hover:bg-primary/90 transition-colors">
                  {product.ctaText}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Categories
          </Button>
        </div>
      </div>
    </section>
  )
}
