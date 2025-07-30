import { FAQSection } from "@/components/faq-section"
import { Documentation } from "@/components/documentation"

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">FAQ & Documentation</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our messaging strategy services and access our documentation.
          </p>
        </div>
        <FAQSection />
        <Documentation />
      </div>
    </main>
  )
}
