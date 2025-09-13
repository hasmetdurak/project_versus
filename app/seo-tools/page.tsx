import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ComparisonTable } from "@/components/comparison-table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Star, Shield, Globe, TrendingUp, Search, BarChart, Link, FileText, Target } from "lucide-react"

const seoToolsProducts = [
  {
    id: "ahrefs",
    name: "Ahrefs",
    price: "$99/month",
    rating: 4.9,
    features: {
      "Starting Price": "$99/month",
      "Keyword Research": "⚡⚡⚡⚡⚡",
      "Backlink Analysis": "⚡⚡⚡⚡⚡",
      "Rank Tracking": "⚡⚡⚡⚡",
      "Best For": "Advanced SEO professionals",
      "Database Size": "22+ billion keywords",
      "Site Audit": "Yes",
      "Content Gap": "Yes"
    },
    pros: ["Most comprehensive backlink database", "Excellent keyword research", "Advanced competitor analysis", "Regular data updates"],
    cons: ["Expensive for beginners", "Steep learning curve"],
    affiliateUrl: "https://ahrefs.com/?ref=globalcompare"
  },
  {
    id: "semrush",
    name: "SEMrush",
    price: "$119.95/month",
    rating: 4.7,
    features: {
      "Starting Price": "$119.95/month",
      "Keyword Research": "⚡⚡⚡⚡⚡",
      "Backlink Analysis": "⚡⚡⚡⚡",
      "Rank Tracking": "⚡⚡⚡⚡",
      "Best For": "All-in-one SEO solution",
      "Database Size": "20+ billion keywords",
      "Site Audit": "Yes",
      "Content Gap": "Yes"
    },
    pros: ["All-in-one marketing toolkit", "Great for PPC research", "Social media tools included", "Comprehensive reporting"],
    cons: ["Can be overwhelming", "Higher price point"],
    affiliateUrl: "https://semrush.com/?ref=globalcompare"
  },
  {
    id: "moz-pro",
    name: "Moz Pro",
    price: "$99/month",
    rating: 4.4,
    features: {
      "Starting Price": "$99/month",
      "Keyword Research": "⚡⚡⚡⚡",
      "Backlink Analysis": "⚡⚡⚡",
      "Rank Tracking": "⚡⚡⚡",
      "Best For": "Beginner to intermediate users",
      "Database Size": "500+ million keywords",
      "Site Audit": "Yes",
      "Content Gap": "Limited"
    },
    pros: ["User-friendly interface", "Great for beginners", "Excellent educational resources", "Domain Authority metric"],
    cons: ["Smaller database than competitors", "Limited advanced features"],
    affiliateUrl: "https://moz.com/?ref=globalcompare"
  },
  {
    id: "ubersuggest",
    name: "Ubersuggest",
    price: "$29/month",
    rating: 4.2,
    features: {
      "Starting Price": "$29/month",
      "Keyword Research": "⚡⚡⚡",
      "Backlink Analysis": "⚡⚡",
      "Rank Tracking": "⚡⚡",
      "Best For": "Budget-conscious users",
      "Database Size": "3+ billion keywords",
      "Site Audit": "Yes",
      "Content Gap": "Basic"
    },
    pros: ["Very affordable pricing", "Simple interface", "Good for beginners", "Lifetime deal available"],
    cons: ["Limited advanced features", "Smaller database"],
    affiliateUrl: "https://ubersuggest.com/?ref=globalcompare"
  },
  {
    id: "spyfu",
    name: "SpyFu",
    price: "$39/month",
    rating: 4.3,
    features: {
      "Starting Price": "$39/month",
      "Keyword Research": "⚡⚡⚡",
      "Backlink Analysis": "⚡⚡",
      "Rank Tracking": "⚡⚡",
      "Best For": "Competitor analysis",
      "Database Size": "100+ million keywords",
      "Site Audit": "Basic",
      "Content Gap": "Yes"
    },
    pros: ["Excellent competitor research", "Historical data", "Affordable pricing", "PPC competitor analysis"],
    cons: ["Limited for technical SEO", "Smaller feature set"],
    affiliateUrl: "https://spyfu.com/?ref=globalcompare"
  }
]

const seoToolsFeatures = [
  "Starting Price",
  "Keyword Research",
  "Backlink Analysis",
  "Rank Tracking",
  "Best For",
  "Database Size",
  "Site Audit",
  "Content Gap"
]

export default function SEOToolsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 to-pink-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                🔍 SEO Tools: Boost Your Search Rankings
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                In today's competitive digital landscape, SEO tools are not optional – they're essential for understanding your website's performance, identifying opportunities, and staying ahead of competitors.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="text-sm py-2 px-4">
                  <Star className="w-4 h-4 mr-2" />
                  Expert Reviews
                </Badge>
                <Badge variant="secondary" className="text-sm py-2 px-4">
                  <Shield className="w-4 h-4 mr-2" />
                  Data-Driven
                </Badge>
                <Badge variant="secondary" className="text-sm py-2 px-4">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Updated 2025
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Tool Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Key SEO Tool Categories
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Search className="w-6 h-6 text-blue-500 mr-3" />
                      Keyword Research Tools
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Find profitable keywords and analyze search volume</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart className="w-6 h-6 text-green-500 mr-3" />
                      Site Audit Tools
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Identify technical SEO issues and optimization opportunities</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Link className="w-6 h-6 text-purple-500 mr-3" />
                      Backlink Analysis Tools
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Monitor your backlink profile and competitor links</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="w-6 h-6 text-red-500 mr-3" />
                      Rank Tracking Tools
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Track your keyword rankings over time</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="w-6 h-6 text-orange-500 mr-3" />
                      Content Optimization Tools
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Optimize your content for better search performance</p>
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
              Top 5 SEO Tools Compared (2025)
            </h2>
            <ComparisonTable
              products={seoToolsProducts}
              features={seoToolsFeatures}
              category="SEO Tools"
              title="Best SEO Tools 2025"
              description="Compare top SEO tools by features, pricing, and effectiveness. Boost your search rankings with the right tools."
            />
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                How to Choose the Right SEO Tool for You
              </h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Identify Your Primary Needs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Are you focused on keyword research, backlinks, or site audits?</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Consider Your Budget
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Some tools offer significant price differences for similar features</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Evaluate Learning Curve
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Some tools have steeper learning curves than others</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Check Integration Capabilities
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Does it integrate with your existing tools?</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Try Free Trials
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Most tools offer free trials – test them before committing</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8 p-6 bg-purple-50 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-900 mb-2 flex items-center">
                  💡 Pro Tip
                </h3>
                <p className="text-purple-800">
                  For beginners, start with Ubersuggest or Moz Pro before investing in premium tools like Ahrefs or SEMrush.
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