import { InteractiveFeatures } from "@/components/interactive-features"
import { BookingSection } from "@/components/booking-section"

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Messaging Strategy Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your B2B messaging with our comprehensive suite of services designed to convert more prospects and
            accelerate growth.
          </p>
        </div>
        <InteractiveFeatures />
        <BookingSection />
      </div>
    </main>
  )
}
