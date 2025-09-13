// ... existing code ...

const hostingFAQs = [
  {
    category: "High-Traffic & Performance",
    questions: [
      {
        question: "What is the best hosting for high-traffic sites?",
        answer: "For sites with 100,000+ monthly visitors, choose: Cloudways (scalable cloud hosting from $10/month), Kinsta (managed WordPress starting at $30/month), SiteGround (Enterprise plan for 500K+ visitors). These providers offer dedicated resources, enterprise-grade security, and 24/7 expert support."
      }
    ]
  },
  {
    category: "Cost & Value",
    questions: [
      {
        question: "Are cheap hosting providers reliable?",
        answer: "Some budget hosts like Hostinger ($1.99/month) offer decent reliability for small sites, but avoid providers under $2/month. They often oversell servers, causing slow speeds and frequent downtime. For critical sites, invest in $5-$10/month plans from trusted providers."
      },
      // Satır 21'i düzelt:
      {
        question: "Do hosting providers offer money-back guarantees?",
        answer: "Most reputable hosts offer 30-day money-back guarantees. Bluehost, SiteGround, and Hostinger all provide full refunds within 30 days. Some like A2 Hosting offer 'anytime' money-back guarantees. Always read the fine print as some exclude domain registration fees."
      }
    ]
  }
]

// Yanlış yerdeki JSX kodunu kaldır (satır 22-29)
// Bu JSX kodu component'in return kısmında olmalı

// Insurance FAQ'ya ek kategoriler ekleniyor
const finalInsuranceFAQs = [
  // ... existing code ...