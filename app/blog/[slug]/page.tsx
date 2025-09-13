import { notFound } from "next/navigation"
import { mockBlogPosts, generateBlogPostSchema } from "@/lib/blog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { BlogCard } from "@/components/blog-card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AffiliateButton } from "@/components/affiliate-button"
import { Calendar, Clock, Share2, BookOpen } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = mockBlogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt.toISOString(),
      modifiedTime: post.updatedAt.toISOString(),
      authors: [post.author.name],
      images: [post.featuredImage],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage],
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = mockBlogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = mockBlogPosts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 3)

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.category, href: `/blog/category/${post.category.toLowerCase()}` },
    { label: post.title, href: `/blog/${post.slug}` },
  ]

  const schema = generateBlogPostSchema(post)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={breadcrumbItems} />

          <article className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="mb-8">
              <div className="mb-4">
                <Badge variant="secondary">{post.category}</Badge>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{post.title}</h1>

              <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                    <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{post.author.name}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.publishedAt.toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readingTime} min read
                      </div>
                    </div>
                  </div>
                </div>

                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </header>

            {/* Featured Image */}
            <div className="mb-8">
              <Image
                src={post.featuredImage || "/placeholder.svg"}
                alt={post.title}
                width={800}
                height={400}
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none dark:prose-invert mb-12">
              <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br />") }} />
            </div>

            {/* Related Products CTA */}
            {post.relatedProducts && post.relatedProducts.length > 0 && (
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-12">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Recommended Services
                </h3>
                <p className="text-muted-foreground mb-4">
                  Based on our analysis, here are the top services mentioned in this article:
                </p>
                <div className="flex flex-wrap gap-3">
                  {post.relatedProducts.map((productId) => (
                    <AffiliateButton
                      key={productId}
                      linkId={`blog_${post.id}_${productId}`}
                      url={`https://example.com/${productId}?ref=globalcompare`}
                      provider={productId}
                      text={`Try ${productId}`}
                      variant="default"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Author Bio */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-12">
              <div className="flex items-start gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold mb-2">About {post.author.name}</h3>
                  <p className="text-muted-foreground">{post.author.bio}</p>
                </div>
              </div>
            </div>

            <Separator className="mb-12" />

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <BlogCard key={relatedPost.id} post={relatedPost} />
                  ))}
                </div>
              </div>
            )}
          </article>
        </div>
      </div>
    </>
  )
}
