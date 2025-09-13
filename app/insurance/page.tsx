import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ComparisonTable } from "@/components/comparison-table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Star, Shield, Globe, TrendingUp, Plane, Home, Car, Heart, Briefcase } from "lucide-react"

const insuranceProducts = [
  {
    id: "safetywing",
    name: "SafetyWing",
    price: "$42/month",
    rating: 4.6,
    features: {
      "Coverage Type": "Global travel coverage",
      "Claims Process": "Simple online claims",
      "Support": "24/7 support",
      "Best For": "Digital nomads",
      "Coverage Limit": "$250,000",
      "Deductible": "$250"
    },
    pros: ["Affordable for long-term travel", "Covers digital nomads", "Easy online application"],
    cons: ["Limited coverage for pre-existing conditions", "Not available in all countries"],
    affiliateUrl: "https://safetywing.com/?ref=globalcompare"
  },
  {
    id: "world-nomads",
    name: "World Nomads",
    price: "$89/month",
    rating: 4.8,
    features: {
      "Coverage Type": "Comprehensive travel coverage",
      "Claims Process": "Fast claims processing",
      "Support": "Excellent support",
      "Best For": "Frequent travelers",
      "Coverage Limit": "$500,000",
      "Deductible": "$100"
    },
    pros: ["Comprehensive coverage", "Covers adventure activities", "Excellent customer service"],
    cons: ["More expensive", "Complex policy terms"],
    affiliateUrl: "https://worldnomads.com/?ref=globalcompare"
  },
  {
    id: "allianz-travel",
    name: "Allianz Travel",
    price: "$67/month",
    rating: 4.5,
    features: {
      "Coverage Type": "Worldwide coverage",
      "Claims Process": "Efficient claims",
      "Support": "Reliable support",
      "Best For": "Business travelers",
      "Coverage Limit": "$1,000,000",
      "Deductible": "$150"
    },
    pros: ["High coverage limits", "Good for business travel", "Established brand"],
    cons: ["Higher premiums", "Strict policy conditions"],
    affiliateUrl: "https://allianztravel.com/?ref=globalcompare"
  },
  {
    id: "axa",
    name: "AXA",
    price: "$54/month",
    rating: 4.3,
    features: {
      "Coverage Type": "European travel coverage",
      "Claims Process": "Streamlined process",
      "Support": "Good support",
      "Best For": "European travelers",
      "Coverage Limit": "$300,000",
      "Deductible": "$200"
    },
    pros: ["Strong European presence", "Good value for money", "Reliable coverage"],
    cons: ["Limited global coverage", "Language barriers in some regions"],
    affiliateUrl: "https://axa-travel.com/?ref=globalcompare"
  },
  {
    id: "img-global",
    name: "IMG Global",
    price: "$76/month",
    rating: 4.4,
    features: {
      "Coverage Type": "US-focused coverage",
      "Claims Process": "Comprehensive claims",
      "Support": "24/7 assistance",
      "Best For": "US residents traveling abroad",
      "Coverage Limit": "$2,000,000",
      "Deductible": "$100"
    },
    pros: ["Very high coverage limits", "US-based support", "Comprehensive benefits"],
    cons: ["More expensive", "Complex application process"],
    affiliateUrl: "https://imglobal.com/?ref=globalcompare"
  }
]

const insuranceFeatures = [
  "Coverage Type",
  "Claims Process",
  "Support",
  "Best For",
  "Coverage Limit",
  "Deductible"
]

export default function InsurancePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Insurance: Protect What Matters Most
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Insurance is your financial safety net against unexpected events. Whether it's travel mishaps, health emergencies, or property damage, having the right coverage can save you from significant financial loss.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="text-sm py-2 px-4">
                  <Star className="w-4 h-4 mr-2" />
                  Expert Reviews
                </Badge>
                <Badge variant="secondary" className="text-sm py-2 px-4">
                  <Shield className="w-4 h-4 mr-2" />
                  Comprehensive Coverage
                </Badge>
                <Badge variant="secondary" className="text-sm py-2 px-4">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Updated 2025
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Insurance Types */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Key Insurance Types to Consider
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Plane className="w-6 h-6 text-blue-500 mr-3" />
                      Travel Insurance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">For trips, including medical coverage and trip cancellation</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Home className="w-6 h-6 text-green-500 mr-3" />
                      Homeowners/Renters Insurance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Protects your property and belongings</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Car className="w-6 h-6 text-red-500 mr-3" />
                      Auto Insurance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Covers vehicle damage and liability</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Heart className="w-6 h-6 text-pink-500 mr-3" />
                      Health Insurance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Medical coverage for you and your family</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Briefcase className="w-6 h-6 text-purple-500 mr-3" />
                      Business Insurance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Protects your business assets and operations</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Top 5 Insurance Providers Compared (2025)
            </h2>
            <ComparisonTable
              products={insuranceProducts}
              features={insuranceFeatures}
              category="Insurance"
              title="Best Insurance Providers 2025"
              description="Compare top insurance providers by coverage, claims process, and customer support. Find the perfect protection for your needs."
            />
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                How to Choose the Right Insurance Policy
              </h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Assess Your Specific Needs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Consider your travel destinations, health status, and assets</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Compare Coverage Limits
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Ensure they meet your requirements</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Check Exclusions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Understand what's not covered</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Evaluate Claims Process
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">How easy is it to file and get paid?</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Read Customer Reviews
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Look for real experiences with claims handling</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-2 flex items-center">
                  💡 Pro Tip
                </h3>
                <p className="text-blue-800">
                  Always read the fine print – some policies exclude pre-existing conditions or high-risk activities.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}