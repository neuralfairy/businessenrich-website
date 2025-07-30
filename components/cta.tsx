import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 to-blue-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Messaging?</h2>
        <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
          Join hundreds of B2B companies that have already transformed their messaging strategy and accelerated their
          growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg bg-transparent"
          >
            Book Demo
          </Button>

          <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 px-8 py-4 text-lg">
            <Download className="mr-2 h-5 w-5" />
            Download Free Guide
          </Button>
        </div>
      </div>
    </section>
  )
}
