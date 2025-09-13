import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ComparisonTable } from "@/components/comparison-table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Star, Shield, Globe, TrendingUp, DollarSign, Clock, MapPin, Lock, Smartphone } from "lucide-react"

const moneyTransferProducts = [
  {
    id: "wise",
    name: "Wise",
    price: "0.5%",
    rating: 4.8,
    features: {
      "Transfer Fee": "0.5%",
      "Exchange Rate": "⚡⚡⚡⚡⚡",
      "Transfer Speed": "1-2 business days",
      "Countries": "80+",
      "Best For": "Best overall value",
      "Mobile App": "Excellent"
    },
    pros: ["Real exchange rates", "Transparent fees", "Fast transfers", "Great mobile app"],
    cons: ["Not available in all countries", "Limited cash pickup options"],
    affiliateUrl: "https://wise.com/?ref=globalcompare"
  },
  {
    id: "remitly",
    name: "Remitly",
    price: "1.0%",
    rating: 4.6,
    features: {
      "Transfer Fee": "1.0%",
      "Exchange Rate": "⚡⚡⚡⚡",
      "Transfer Speed": "1-3 business days",
      "Countries": "150+",
      "Best For": "Sending to developing countries",
      "Mobile App": "Very Good"
    },
    pros: ["Wide country coverage", "Multiple delivery options", "Good customer support"],
    cons: ["Higher fees than Wise", "Exchange rates could be better"],
    affiliateUrl: "https://remitly.com/?ref=globalcompare"
  },
  {
    id: "paypal",
    name: "PayPal",
    price: "3.0%",
    rating: 4.2,
    features: {
      "Transfer Fee": "3.0%",
      "Exchange Rate": "⚡⚡⚡",
      "Transfer Speed": "1-3 business days",
      "Countries": "200+",
      "Best For": "Small personal transfers",
      "Mobile App": "Good"
    },
    pros: ["Widely accepted", "Easy to use", "Instant transfers to PayPal users"],
    cons: ["High fees", "Poor exchange rates", "Limited customer support"],
    affiliateUrl: "https://paypal.com/?ref=globalcompare"
  },
  {
    id: "western-union",
    name: "Western Union",
    price: "4.0%",
    rating: 3.9,
    features: {
      "Transfer Fee": "4.0%",
      "Exchange Rate": "⚡⚡",
      "Transfer Speed": "1-2 business days",
      "Countries": "200+",
      "Best For": "Urgent transfers",
      "Mobile App": "Average"
    },
    pros: ["Extensive agent network", "Cash pickup available", "Fast urgent transfers"],
    cons: ["Very high fees", "Poor exchange rates", "Outdated technology"],
    affiliateUrl: "https://westernunion.com/?ref=globalcompare"
  },
  {
    id: "revolut",
    name: "Revolut",
    price: "0.7%",
    rating: 4.4,
    features: {
      "Transfer Fee": "0.7%",
      "Exchange Rate": "⚡⚡⚡⚡",
      "Transfer Speed": "1-2 business days",
      "Countries": "150+",
      "Best For": "Frequent travelers",
      "Mobile App": "Excellent"
    },
    pros: ["Great for frequent travelers", "Multi-currency account", "Good exchange rates"],
    cons: ["Premium features require subscription", "Limited customer support"],
    affiliateUrl: "https://revolut.com/?ref=globalcompare"
  }
]

const moneyTransferFeatures = [
  "Transfer Fee",
  "Exchange Rate",
  "Transfer Speed",
  "Countries",
  "Best For",
  "Mobile App"
]

export default function MoneyTransferPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-teal-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                💱 Money Transfer: Send Money Globally with Confidence
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                When sending money internationally, the right service can save you significant fees and offer better exchange rates. With so many options available, comparing providers is essential for getting the best value.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="text-sm py-2 px-4">
                  <Star className="w-4 h-4 mr-2" />
                  Expert Reviews
                </Badge>
                <Badge variant="secondary" className="text-sm py-2 px-4">
                  <Shield className="w-4 h-4 mr-2" />
                  Secure Transfers
                </Badge>
                <Badge variant="secondary" className="text-sm py-2 px-4">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Updated 2025
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Right Service */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Why Choosing the Right Money Transfer Service Matters
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <DollarSign className="w-6 h-6 text-green-500 mr-3" />
                      Transfer Fees vs Exchange Rates
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Compare total costs including hidden exchange rate margins</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="w-6 h-6 text-blue-500 mr-3" />
                      Transfer Speed
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Instant, same-day, or multi-day transfer options</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="w-6 h-6 text-red-500 mr-3" />
                      Supported Countries
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Coverage and supported currencies worldwide</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Lock className="w-6 h-6 text-purple-500 mr-3" />
                      Security Measures
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Regulatory compliance and encryption standards</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Smartphone className="w-6 h-6 text-orange-500 mr-3" />
                      User Experience
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">App quality and customer support availability</p>
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
              Top 5 Money Transfer Services Compared (2025)
            </h2>
            <ComparisonTable
              products={moneyTransferProducts}
              features={moneyTransferFeatures}
              category="Money Transfer"
              title="Best Money Transfer Services 2025"
              description="Compare top money transfer services by fees, exchange rates, and transfer speed. Find the best value for your international transfers."
            />
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                How to Choose the Right Money Transfer Service
              </h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Compare Total Cost
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Look beyond fees to include exchange rate margins</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Check Transfer Speed Needs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Do you need instant transfer or can you wait?</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Verify Destination Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Ensure the service operates in your target country</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Evaluate Customer Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">How accessible is help if issues arise?</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Check Security Measures
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Look for regulatory licenses and encryption standards</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8 p-6 bg-green-50 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-2 flex items-center">
                  💡 Pro Tip
                </h3>
                <p className="text-green-800">
                  For regular transfers, consider setting up a recurring transfer to lock in favorable rates.
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