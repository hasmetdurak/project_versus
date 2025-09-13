"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { BlogPost } from "@/lib/blog"
import { Clock, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={`/blog/${post.slug}`}>
        <Card className={`overflow-hidden hover:shadow-lg transition-shadow duration-300 ${featured ? "md:flex" : ""}`}>
          <div className={`relative ${featured ? "md:w-1/2" : ""}`}>
            <Image
              src={post.featuredImage || "/placeholder.svg"}
              alt={post.title}
              width={featured ? 600 : 400}
              height={featured ? 400 : 250}
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="absolute top-4 left-4">
              <Badge variant="secondary" className="bg-white/90 text-gray-900">
                {post.category}
              </Badge>
            </div>
          </div>

          <CardContent className={`p-6 ${featured ? "md:w-1/2" : ""}`}>
            <div className="space-y-3">
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

              <h3
                className={`font-bold leading-tight hover:text-blue-600 transition-colors ${featured ? "text-2xl" : "text-lg"}`}
              >
                {post.title}
              </h3>

              <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>

              <div className="flex flex-wrap gap-2">
                {post.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{post.author.name}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}
