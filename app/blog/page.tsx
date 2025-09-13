import { BlogCard } from "@/components/blog-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { mockBlogPosts, mockBlogCategories } from "@/lib/blog"
import { Search, TrendingUp } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - GlobalCompare | Expert Reviews & Guides",
  description:
    "Read expert reviews, guides, and tips about VPN, credit cards, hosting, SEO tools, and more. Stay informed with GlobalCompare blog.",
  openGraph: {
    title: "Blog - GlobalCompare | Expert Reviews & Guides",
    description: "Read expert reviews, guides, and tips about VPN, credit cards, hosting, SEO tools, and more.",
    type: "website",
  },
}

export default function BlogPage() {
  const featuredPost = mockBlogPosts[0]
  const recentPosts = mockBlogPosts.slice(1)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Expert Reviews & Guides
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay informed with our comprehensive guides, expert reviews, and insider tips on the best services and
            tools.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search articles..." className="pl-10" />
          </div>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">
              All
            </Badge>
            {mockBlogCategories.map((category) => (
              <Badge key={category.id} variant="outline" className="cursor-pointer hover:bg-blue-50">
                {category.name}
              </Badge>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            <h2 className="text-2xl font-bold">Featured Article</h2>
          </div>
          <BlogCard post={featuredPost} featured={true} />
        </div>

        {/* Recent Posts */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>

        {/* Categories Section */}
        <div className="mt-16 pt-12 border-t">
          <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {mockBlogCategories.map((category) => (
              <div key={category.id} className="p-6 border rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                <h3 className="font-semibold mb-2">{category.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                <Badge variant="secondary">{category.postCount} articles</Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
