import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ComparisonTable } from "@/components/comparison-table"

// Mock data for credit cards
const creditCardProducts = [
  {
    id: 1,
    name: "Chase Sapphire Preferred",
    logo: "/chase-credit-card-logo.jpg",
    rating: 4.7,
    reviewCount: 8900,
    price: "$95",
    priceNote: "annual fee",
    badge: "Best for Travel",
    badgeColor: "bg-blue-600 text-white",
    features: {
      signupBonus: "60,000 points",
      rewardsRate: "2x on travel & dining",
      annualFee: "$95",
      apr: "21.49% - 28.49%",
      foreignFees: false,
      creditScore: "Good to Excellent",
      travelInsurance: true,
      purchaseProtection: true,
      extendedWarranty: true,
      concierge: false,
    },
    affiliateUrl: "https://chase.com/sapphire-preferred?a=globalcompare",
    ctaText: "Apply Now",
    discountText: "60K Bonus Points",
    pros: [
      "Excellent travel rewards program",
      "No foreign transaction fees",
      "Comprehensive travel insurance",
      "Flexible point redemption options",
    ],
    cons: ["Annual fee required", "High APR for balance transfers"],
    description: "Premium travel rewards card with excellent benefits and flexible point redemption.",
  },
  {
    id: 2,
    name: "Capital One Venture X",
    logo: "/capital-one-logo.jpg",
    rating: 4.8,
    reviewCount: 6500,
    price: "$395",
    priceNote: "annual fee",
    badge: "Premium Travel",
    badgeColor: "bg-red-600 text-white",
    features: {
      signupBonus: "75,000 miles",
      rewardsRate: "2x on all purchases",
      annualFee: "$395",
      apr: "19.49% - 29.49%",
      foreignFees: false,
      creditScore: "Excellent",
      travelInsurance: true,
      purchaseProtection: true,
      extendedWarranty: true,
      concierge: true,
    },
    affiliateUrl: "https://capitalone.com/venture-x?a=globalcompare",
    ctaText: "Apply Now",
    discountText: "75K Bonus Miles",
    pros: ["High signup bonus", "2x miles on all purchases", "Premium travel benefits", "Airport lounge access"],
    cons: ["High annual fee", "Requires excellent credit"],
    description: "Premium travel card with exceptional benefits and high earning potential.",
  },
  {
    id: 3,
    name: "Citi Double Cash",
    logo: "/citi-logo.jpg",
    rating: 4.5,
    reviewCount: 12300,
    price: "$0",
    priceNote: "annual fee",
    badge: "Best Cash Back",
    badgeColor: "bg-green-600 text-white",
    features: {
      signupBonus: "None",
      rewardsRate: "2% cash back",
      annualFee: "$0",
      apr: "18.49% - 28.49%",
      foreignFees: true,
      creditScore: "Good to Excellent",
      travelInsurance: false,
      purchaseProtection: true,
      extendedWarranty: true,
      concierge: false,
    },
    affiliateUrl: "https://citi.com/double-cash?a=globalcompare",
    ctaText: "Apply Now",
    pros: [
      "Simple 2% cash back on everything",
      "No annual fee",
      "No category restrictions",
      "Easy to understand rewards",
    ],
    cons: ["Foreign transaction fees", "No signup bonus", "Limited premium benefits"],
    description: "Straightforward cash back card with no annual fee and simple rewards structure.",
  },
]

const creditCardFeatures = [
  { key: "signupBonus", name: "Signup Bonus", type: "text" as const, important: true },
  { key: "rewardsRate", name: "Rewards Rate", type: "text" as const, important: true },
  { key: "annualFee", name: "Annual Fee", type: "price" as const, important: true },
  { key: "apr", name: "APR", type: "text" as const, important: true },
  { key: "foreignFees", name: "No Foreign Fees", type: "boolean" as const, important: true },
  { key: "creditScore", name: "Credit Score Needed", type: "text" as const, important: false },
  { key: "travelInsurance", name: "Travel Insurance", type: "boolean" as const, important: false },
  { key: "purchaseProtection", name: "Purchase Protection", type: "boolean" as const, important: false },
  { key: "extendedWarranty", name: "Extended Warranty", type: "boolean" as const, important: false },
  { key: "concierge", name: "Concierge Service", type: "boolean" as const, important: false },
]

export default function CreditCardsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container mx-auto px-4 py-8">
        <ComparisonTable
          products={creditCardProducts}
          features={creditCardFeatures}
          category="Credit Cards"
          title="Best Credit Cards 2024"
          description="Compare top credit cards by rewards, fees, and benefits. Find the perfect card for your spending habits and financial goals."
        />
      </main>
      <Footer />
    </div>
  )
}
