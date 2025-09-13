"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Check, X, ExternalLink, Info, Filter } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface Product {
  id: number
  name: string
  logo: string
  rating: number
  reviewCount: number
  price: string
  priceNote?: string
  badge?: string
  badgeColor?: string
  features: Record<string, string | boolean | number>
  affiliateUrl: string
  ctaText: string
  discountText?: string
  pros: string[]
  cons: string[]
  description: string
}

interface Feature {
  key: string
  name: string
  type: "text" | "boolean" | "rating" | "price"
  important?: boolean
  tooltip?: string
}

interface ComparisonTableProps {
  products: Product[]
  features: Feature[]
  category: string
  title: string
  description?: string
}

export function ComparisonTable({ products, features, category, title, description }: ComparisonTableProps) {
  const [viewMode, setViewMode] = useState<"cards" | "table">("table")
  const [showAllFeatures, setShowAllFeatures] = useState(false)

  const displayFeatures = showAllFeatures ? features : features.filter((f) => f.important)

  const renderFeatureValue = (value: any, type: Feature["type"]) => {
    switch (type) {
      case "boolean":
        return value ? <Check className="h-4 w-4 text-green-500" /> : <X className="h-4 w-4 text-red-500" />
      case "rating":
        return (
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{value}</span>
          </div>
        )
      case "price":
        return <span className="font-semibold text-primary">{value}</span>
      default:
        return <span>{value || "—"}</span>
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl lg:text-4xl font-bold">{title}</h1>
        {description && <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{description}</p>}

        {/* View Toggle */}
        <Tabs value={viewMode} onValueChange={(value) => setViewMode(value as "cards" | "table")}>
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="table">Table View</TabsTrigger>
            <TabsTrigger value="cards">Card View</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Table View */}
      {viewMode === "table" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={() => setShowAllFeatures(!showAllFeatures)}
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              {showAllFeatures ? "Show Key Features Only" : "Show All Features"}
            </Button>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[180px] min-w-[180px]">Service</TableHead>
                  <TableHead className="text-center w-[80px]">Rating</TableHead>
                  <TableHead className="text-center w-[100px]">Price</TableHead>
                  {displayFeatures.map((feature) => (
                    <TableHead key={feature.key} className="text-center w-[90px] min-w-[90px]">
                      <div className="flex items-center justify-center gap-1">
                        <span className="text-xs">{feature.name}</span>
                        {feature.tooltip && <Info className="h-3 w-3 text-muted-foreground" />}
                      </div>
                    </TableHead>
                  ))}
                  <TableHead className="text-center w-[120px] min-w-[120px]">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product, index) => (
                  <TableRow key={product.id} className={cn(index === 0 && "bg-primary/5")}>
                    <TableCell className="py-3">
                      <div className="flex items-center gap-2">
                        <div className="relative h-6 w-6 rounded overflow-hidden bg-background border flex-shrink-0">
                          <Image
                            src={product.logo || "/placeholder.svg"}
                            alt={`${product.name} logo`}
                            fill
                            className="object-contain p-0.5"
                          />
                        </div>
                        <div className="min-w-0">
                          <div className="font-semibold text-sm truncate">{product.name}</div>
                          {product.badge && (
                            <Badge variant="secondary" className="text-xs mt-0.5">
                              {product.badge}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-center py-3">
                      <div className="flex items-center justify-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-sm">{product.rating}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center py-3">
                      <div className="font-semibold text-primary text-sm">{product.price}</div>
                      {product.priceNote && <div className="text-xs text-muted-foreground">{product.priceNote}</div>}
                    </TableCell>
                    {displayFeatures.map((feature) => (
                      <TableCell key={feature.key} className="text-center py-3">
                        <div className="flex justify-center">
                          {renderFeatureValue(product.features[feature.key], feature.type)}
                        </div>
                      </TableCell>
                    ))}
                    <TableCell className="text-center py-3">
                      <Button 
                        size="sm" 
                        onClick={() => window.open(product.affiliateUrl, "_blank")} 
                        className="w-full text-xs px-2 py-1 h-8"
                      >
                        Choose
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}

      {/* Cards View */}
      {viewMode === "cards" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className={cn(
                "relative overflow-hidden transition-all duration-300 hover:shadow-xl",
                index === 0 && "ring-2 ring-primary/20 scale-105",
              )}
            >
              {product.badge && (
                <Badge
                  className={cn(
                    "absolute top-4 right-4 z-10",
                    product.badgeColor || "bg-primary text-primary-foreground",
                  )}
                >
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
                  <div className="flex-1">
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{product.rating}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">({product.reviewCount.toLocaleString()})</span>
                    </div>
                  </div>
                </div>

                <div className="text-center py-4 border rounded-lg bg-muted/30">
                  <div className="text-3xl font-bold text-primary mb-1">{product.price}</div>
                  {product.priceNote && <div className="text-sm text-muted-foreground">{product.priceNote}</div>}
                  {product.discountText && (
                    <Badge variant="secondary" className="mt-2 bg-green-100 text-green-700">
                      {product.discountText}
                    </Badge>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-sm text-muted-foreground">{product.description}</p>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {displayFeatures.slice(0, 5).map((feature) => (
                      <div key={feature.key} className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{feature.name}</span>
                        {renderFeatureValue(product.features[feature.key], feature.type)}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pros & Cons */}
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <h5 className="font-medium text-green-600 mb-2">Pros</h5>
                    <ul className="space-y-1">
                      {product.pros.slice(0, 3).map((pro, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <Check className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-red-600 mb-2">Cons</h5>
                    <ul className="space-y-1">
                      {product.cons.slice(0, 2).map((con, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <X className="h-3 w-3 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  className="w-full text-lg py-6 group"
                  onClick={() => window.open(product.affiliateUrl, "_blank")}
                >
                  Choose
                  <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
