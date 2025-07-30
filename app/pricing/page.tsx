import { PricingTiers } from "@/components/pricing-tiers"
import { PricingFAQ } from "@/components/pricing-faq"

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Transparent Pricing</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan to transform your messaging strategy and accelerate your B2B growth.
          </p>
        </div>
        <PricingTiers />
        <PricingFAQ />
      </div>
    </main>
  )
}
