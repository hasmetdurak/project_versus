// Database connection and query utilities
// Since we're not using an ORM, we'll create utility functions for database operations

export interface Category {
  id: number
  name: string
  slug: string
  description?: string
  icon?: string
  meta_title?: string
  meta_description?: string
  created_at: Date
  updated_at: Date
}

export interface Product {
  id: number
  category_id: number
  name: string
  slug: string
  description?: string
  logo_url?: string
  website_url?: string
  rating: number
  review_count: number
  price_from?: number
  price_currency: string
  is_featured: boolean
  is_active: boolean
  meta_title?: string
  meta_description?: string
  created_at: Date
  updated_at: Date
}

export interface Feature {
  id: number
  category_id: number
  name: string
  slug: string
  description?: string
  feature_type: "text" | "boolean" | "number" | "rating"
  is_important: boolean
  display_order: number
  created_at: Date
}

export interface ProductFeature {
  id: number
  product_id: number
  feature_id: number
  value?: string
  numeric_value?: number
  boolean_value?: boolean
  created_at: Date
}

export interface AffiliateLink {
  id: number
  product_id: number
  provider: string
  affiliate_url: string
  cta_text: string
  discount_code?: string
  discount_text?: string
  is_primary: boolean
  click_count: number
  conversion_count: number
  created_at: Date
  updated_at: Date
}

export interface Translation {
  id: number
  table_name: string
  record_id: number
  field_name: string
  language_code: string
  translated_value: string
  created_at: Date
  updated_at: Date
}

export interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt?: string
  content: string
  featured_image?: string
  author_name?: string
  category_id?: number
  is_published: boolean
  published_at?: Date
  meta_title?: string
  meta_description?: string
  created_at: Date
  updated_at: Date
}

// Utility functions for database operations
export const dbQueries = {
  // Categories
  getCategories: () => `SELECT * FROM categories ORDER BY name`,
  getCategoryBySlug: (slug: string) => `SELECT * FROM categories WHERE slug = '${slug}'`,

  // Products
  getProductsByCategory: (categoryId: number) =>
    `SELECT * FROM products WHERE category_id = ${categoryId} AND is_active = true ORDER BY is_featured DESC, rating DESC`,

  getProductBySlug: (slug: string) => `SELECT * FROM products WHERE slug = '${slug}' AND is_active = true`,

  getFeaturedProducts: () =>
    `SELECT * FROM products WHERE is_featured = true AND is_active = true ORDER BY rating DESC LIMIT 6`,

  // Features
  getFeaturesByCategory: (categoryId: number) =>
    `SELECT * FROM features WHERE category_id = ${categoryId} ORDER BY display_order, name`,

  // Product Features
  getProductFeatures: (productId: number) =>
    `SELECT pf.*, f.name as feature_name, f.feature_type 
     FROM product_features pf 
     JOIN features f ON pf.feature_id = f.id 
     WHERE pf.product_id = ${productId}`,

  // Affiliate Links
  getAffiliateLinks: (productId: number) =>
    `SELECT * FROM affiliate_links WHERE product_id = ${productId} ORDER BY is_primary DESC`,

  // Translations
  getTranslations: (tableName: string, recordId: number, languageCode: string) =>
    `SELECT * FROM translations 
     WHERE table_name = '${tableName}' AND record_id = ${recordId} AND language_code = '${languageCode}'`,

  // Blog
  getBlogPosts: () => `SELECT * FROM blog_posts WHERE is_published = true ORDER BY published_at DESC`,

  getBlogPostBySlug: (slug: string) => `SELECT * FROM blog_posts WHERE slug = '${slug}' AND is_published = true`,

  // Analytics
  trackEvent: (eventType: string, pagePath?: string, productId?: number, userCountry?: string) =>
    `INSERT INTO analytics_events (event_type, page_path, product_id, user_country, created_at) 
     VALUES ('${eventType}', ${pagePath ? `'${pagePath}'` : "NULL"}, ${productId || "NULL"}, ${userCountry ? `'${userCountry}'` : "NULL"}, NOW())`,
}
