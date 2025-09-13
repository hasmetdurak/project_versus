export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: {
    name: string
    avatar: string
    bio: string
  }
  category: string
  tags: string[]
  featuredImage: string
  publishedAt: Date
  updatedAt: Date
  readingTime: number
  isPublished: boolean
  seoTitle?: string
  seoDescription?: string
  language: string
  relatedProducts?: string[]
}

export interface BlogCategory {
  id: string
  name: string
  slug: string
  description: string
  postCount: number
  language: string
}

// Mock blog data - in real app this would come from CMS or database
export const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "best-vpn-2024-complete-guide",
    title: "Best VPN Services in 2024: Complete Buyer's Guide",
    excerpt:
      "Discover the top VPN services of 2024 with our comprehensive comparison. Security, speed, and value analyzed.",
    content: `# Best VPN Services in 2024: Complete Buyer's Guide

In today's digital landscape, choosing the right VPN service is crucial for your online privacy and security. After extensive testing and analysis, we've compiled this comprehensive guide to help you make an informed decision.

## What Makes a Great VPN?

When evaluating VPN services, we consider several key factors:

### 1. Security & Privacy
- Strong encryption protocols (AES-256)
- No-logs policy verification
- Kill switch functionality
- DNS leak protection

### 2. Performance
- Connection speeds across different servers
- Server network size and locations
- Streaming and torrenting capabilities
- Simultaneous device connections

### 3. User Experience
- Easy-to-use applications
- Customer support quality
- Pricing and value proposition
- Money-back guarantee

## Top VPN Recommendations

### 1. ExpressVPN - Best Overall
ExpressVPN consistently delivers excellent performance across all categories. With servers in 94 countries and military-grade encryption, it's our top choice for most users.

**Pros:**
- Lightning-fast speeds
- Excellent streaming support
- 24/7 customer support
- 30-day money-back guarantee

**Cons:**
- Higher price point
- Limited simultaneous connections (5 devices)

### 2. NordVPN - Best Value
NordVPN offers an excellent balance of features and affordability. Their CyberSec feature blocks ads and malware, making it a comprehensive security solution.

**Pros:**
- Competitive pricing
- Double VPN feature
- Large server network
- 6 simultaneous connections

**Cons:**
- Occasional connection drops
- Complex interface for beginners

## Conclusion

Choosing the right VPN depends on your specific needs and budget. For most users, ExpressVPN offers the best overall experience, while NordVPN provides excellent value for money.

Remember to always test any VPN service with their money-back guarantee to ensure it meets your requirements.`,
    author: {
      name: "Sarah Johnson",
      avatar: "/authors/sarah-johnson.jpg",
      bio: "Cybersecurity expert with 8+ years of experience in VPN and privacy technologies.",
    },
    category: "VPN",
    tags: ["VPN", "Privacy", "Security", "2024"],
    featuredImage: "/blog/vpn-guide-2024.jpg",
    publishedAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-15"),
    readingTime: 8,
    isPublished: true,
    seoTitle: "Best VPN Services 2024 - Complete Buyer's Guide & Reviews",
    seoDescription:
      "Find the best VPN service in 2024. Compare top providers, features, pricing, and security. Expert reviews and recommendations.",
    language: "en",
    relatedProducts: ["expressvpn", "nordvpn", "surfshark"],
  },
  {
    id: "2",
    slug: "credit-card-rewards-maximize-benefits",
    title: "How to Maximize Credit Card Rewards: Expert Tips & Strategies",
    excerpt:
      "Learn proven strategies to maximize your credit card rewards and earn more points, miles, and cashback on everyday purchases.",
    content: `# How to Maximize Credit Card Rewards: Expert Tips & Strategies

Credit card rewards can significantly boost your purchasing power when used strategically. This comprehensive guide will show you how to maximize your rewards earnings.

## Understanding Reward Types

### 1. Cashback Cards
- Flat-rate cashback (1-2% on all purchases)
- Category-specific bonuses (up to 5% on rotating categories)
- Tiered rewards (different rates for different spending levels)

### 2. Points Programs
- Flexible redemption options
- Transfer partners for maximum value
- Sign-up bonuses and multipliers

### 3. Travel Miles
- Airline-specific programs
- Hotel loyalty integration
- Elite status benefits

## Maximization Strategies

### 1. Choose the Right Card Mix
Having multiple cards allows you to maximize rewards across different categories:

- **Everyday spending**: 2% cashback card
- **Dining & travel**: 3x points card
- **Gas & groceries**: Category-specific bonus card
- **Large purchases**: Sign-up bonus opportunities

### 2. Time Your Applications
- Apply for cards when you have large purchases planned
- Take advantage of limited-time sign-up bonuses
- Consider business cards for additional opportunities

### 3. Optimize Your Spending
- Use the right card for each purchase category
- Take advantage of shopping portals
- Stack rewards with store loyalty programs

## Advanced Techniques

### Manufactured Spending
While risky, some advanced users create artificial spending to earn rewards:
- Gift card purchases (where allowed)
- Money orders and bill pay services
- Prepaid card loading

**Warning**: Always read terms and conditions, as many issuers prohibit these activities.

### Points Transfer Strategies
For travel rewards, transferring points to airline/hotel partners often provides better value than direct redemptions.

## Common Mistakes to Avoid

1. **Carrying a balance**: Interest charges negate reward value
2. **Ignoring annual fees**: Calculate if rewards exceed fees
3. **Not using benefits**: Many cards offer valuable perks beyond rewards
4. **Closing cards too early**: Can impact credit score and reward earning

## Conclusion

Maximizing credit card rewards requires strategy and discipline. Start with one or two cards that match your spending patterns, then gradually build a more sophisticated approach as you gain experience.

Remember: The best reward is the one you can earn without going into debt.`,
    author: {
      name: "Michael Chen",
      avatar: "/authors/michael-chen.jpg",
      bio: "Personal finance expert and credit card strategist with 10+ years of experience.",
    },
    category: "Credit Cards",
    tags: ["Credit Cards", "Rewards", "Personal Finance", "Strategy"],
    featuredImage: "/blog/credit-card-rewards.jpg",
    publishedAt: new Date("2024-01-10"),
    updatedAt: new Date("2024-01-10"),
    readingTime: 12,
    isPublished: true,
    seoTitle: "Maximize Credit Card Rewards: Expert Tips & Strategies 2024",
    seoDescription:
      "Learn how to maximize credit card rewards with expert strategies. Earn more points, miles, and cashback on everyday purchases.",
    language: "en",
    relatedProducts: ["chase-sapphire", "capital-one-venture", "citi-double-cash"],
  },
]

export const mockBlogCategories: BlogCategory[] = [
  {
    id: "1",
    name: "VPN",
    slug: "vpn",
    description: "VPN reviews, guides, and privacy tips",
    postCount: 15,
    language: "en",
  },
  {
    id: "2",
    name: "Credit Cards",
    slug: "credit-cards",
    description: "Credit card reviews, rewards strategies, and financial tips",
    postCount: 12,
    language: "en",
  },
  {
    id: "3",
    name: "Web Hosting",
    slug: "hosting",
    description: "Web hosting comparisons, tutorials, and recommendations",
    postCount: 8,
    language: "en",
  },
  {
    id: "4",
    name: "SEO Tools",
    slug: "seo-tools",
    description: "SEO software reviews and digital marketing guides",
    postCount: 10,
    language: "en",
  },
]

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const wordCount = content.split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}

export function generateBlogPostSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage,
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "GlobalCompare",
      logo: {
        "@type": "ImageObject",
        url: "/logo.png",
      },
    },
    datePublished: post.publishedAt.toISOString(),
    dateModified: post.updatedAt.toISOString(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://globalcompare.com/blog/${post.slug}`,
    },
  }
}
