import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { ROICalculator } from "@/components/roi-calculator"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <ROICalculator />
      <Testimonials />
      <CTA />
    </main>
  )
}
