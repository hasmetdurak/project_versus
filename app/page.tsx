import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <FeaturedProducts />
        
        {/* Editor's Top Picks Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                🏆 Editor's Top Picks: Expert Recommendations
              </h2>
              <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                Our expert team has tested hundreds of services to bring you these top recommendations across different categories.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                {/* ExpressVPN */}
                <Card className="border-2 border-blue-200 bg-white">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-blue-600 text-white">🔐 VPN</Badge>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm font-medium">4.8</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl">ExpressVPN: The Gold Standard</CardTitle>
                    <CardDescription>
                      Lightning-fast speeds with military-grade encryption
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600 mb-4">
                      <li>• 3,000+ servers in 94 countries</li>
                      <li>• Strict no-logs policy verified by audits</li>
                      <li>• Works with Netflix, Hulu, streaming</li>
                      <li>• 24/7 live chat support</li>
                    </ul>
                    <div className="bg-green-50 p-3 rounded-lg mb-4">
                      <p className="text-sm font-medium text-green-800">
                        Special Offer: Save 49% on 15-month plan + 3 months free!
                      </p>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Get ExpressVPN
                    </Button>
                  </CardContent>
                </Card>

                {/* Chase Sapphire */}
                <Card className="border-2 border-purple-200 bg-white">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-purple-600 text-white">💳 Credit Card</Badge>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm font-medium">4.8</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl">Chase Sapphire Preferred</CardTitle>
                    <CardDescription>
                      The ultimate travel rewards card
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600 mb-4">
                      <li>• 2x points on travel and dining</li>
                      <li>• 60,000 bonus points after $4,000 spend</li>
                      <li>• Primary rental car insurance</li>
                      <li>• No foreign transaction fees</li>
                    </ul>
                    <div className="bg-green-50 p-3 rounded-lg mb-4">
                      <p className="text-sm font-medium text-green-800">
                        Earn 60,000 bonus points (worth $750 in travel)
                      </p>
                    </div>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>

                {/* Bluehost */}
                <Card className="border-2 border-orange-200 bg-white">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-orange-600 text-white">🌐 Hosting</Badge>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm font-medium">4.6</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl">Bluehost: Best for Beginners</CardTitle>
                    <CardDescription>
                      Official WordPress recommended hosting
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600 mb-4">
                      <li>• One-click WordPress installation</li>
                      <li>• Free domain for first year</li>
                      <li>• 24/7 expert WordPress support</li>
                      <li>• Free SSL certificate and CDN</li>
                    </ul>
                    <div className="bg-green-50 p-3 rounded-lg mb-4">
                      <p className="text-sm font-medium text-green-800">
                        Starting at $2.95/month + free domain!
                      </p>
                    </div>
                    <Button className="w-full bg-orange-600 hover:bg-orange-700">
                      Get Bluehost
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* How We Test Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                📈 How We Test and Review Services
              </h2>
              <p className="text-lg text-gray-600 mb-8 text-center">
                At GlobalCompare, we don't just rely on marketing claims – we test every service ourselves to provide you with honest, data-driven comparisons.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Real-World Usage Testing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">We use each service for at least 30 days under normal conditions</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Performance Metrics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">We measure speed, reliability, and user experience quantitatively</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Expert Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Our specialists evaluate features, security, and value</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Independent Verification
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">We cross-reference claims with third-party sources and user reviews</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-lg text-center">
                <p className="text-blue-800">
                  Our commitment to transparency means you can trust our recommendations – we never accept payment for favorable reviews, and we disclose all affiliate relationships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                📚 Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>What makes GlobalCompare different from other comparison sites?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Unlike many comparison sites that rely on marketing materials, we personally test every service we review. Our team of experts uses each product for at least 30 days to provide authentic, data-driven comparisons. We also verify all claims with independent sources and never accept payment for favorable reviews.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>How often do you update your comparisons?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      We update our comparisons monthly to ensure accuracy and relevance. Pricing, features, and availability can change frequently, so we continuously monitor all services to provide the most current information.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
