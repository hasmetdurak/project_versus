import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Star, Shield, Globe, TrendingUp, Users, Award, Target, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About GlobalCompare
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We're on a mission to help millions of people make better decisions by providing honest, data-driven comparisons of the world's best services.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="text-sm py-2 px-4">
                  <Users className="w-4 h-4 mr-2" />
                  10M+ Users Helped
                </Badge>
                <Badge variant="secondary" className="text-sm py-2 px-4">
                  <Award className="w-4 h-4 mr-2" />
                  Industry Leading
                </Badge>
                <Badge variant="secondary" className="text-sm py-2 px-4">
                  <Shield className="w-4 h-4 mr-2" />
                  Trusted Reviews
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Our Mission
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardHeader>
                    <Target className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                    <CardTitle>Transparency</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">We provide honest, unbiased reviews based on real testing and user feedback, never influenced by payments.</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardHeader>
                    <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <CardTitle>Trust</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Every recommendation is backed by thorough research, testing, and verification from our expert team.</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardHeader>
                    <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                    <CardTitle>User-First</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Your needs come first. We focus on helping you find the best solution, not the highest commission.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Our Story
              </h2>
              
              <div className="prose prose-lg mx-auto text-gray-600">
                <p className="text-lg leading-relaxed mb-6">
                  GlobalCompare was founded in 2020 with a simple idea: people deserve honest, comprehensive comparisons when choosing digital services. Too many comparison sites were biased by affiliate payments, showing the highest-paying options rather than the best ones.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  We started by personally testing every VPN service on the market, spending months analyzing speed, security, and reliability. Our honest reviews quickly gained trust from users who were tired of misleading recommendations.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  Today, we've expanded to cover credit cards, web hosting, SEO tools, insurance, and money transfer services. Our team of experts tests every service for at least 30 days, ensuring our recommendations are based on real experience, not marketing materials.
                </p>
                
                <p className="text-lg leading-relaxed">
                  We've helped over 10 million people make better decisions, saving them time, money, and frustration. Our commitment remains the same: provide honest, data-driven comparisons that put your needs first.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                What Makes Us Different
              </h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Real Testing, Real Results
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">We personally test every service for at least 30 days under real-world conditions. No shortcuts, no marketing fluff.</p>
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
                    <p className="text-gray-600">We cross-reference all claims with third-party sources and user reviews to ensure accuracy.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      No Pay-for-Play Reviews
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">We never accept payment for favorable reviews. Our rankings are based purely on performance and value.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Regular Updates
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">We update our reviews monthly to reflect changes in pricing, features, and performance.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Expert Team
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Our team includes cybersecurity experts, financial advisors, web developers, and digital marketing specialists.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Team Stats */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                By the Numbers
              </h2>
              
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-blue-600 mb-2">10M+</div>
                    <p className="text-gray-600">Users Helped</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                    <p className="text-gray-600">Services Tested</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-purple-600 mb-2">350+</div>
                    <p className="text-gray-600">FAQ Questions</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                    <p className="text-gray-600">Support Available</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Have Questions?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our expert team is here to help you make the best decision for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">
                  Contact Us
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  View FAQ
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}