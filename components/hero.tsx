import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-navy-900 mb-8 leading-tight">
            Transform Your{" "}
            <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
              Messaging Strategy
            </span>
            <br />
            Convert More. Grow Faster.
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Help your B2B sales teams and agencies craft high-converting brand messaging that resonates with prospects
            and drives measurable results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black px-8 py-4 text-lg"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-black border-gray-300 hover:bg-gray-50 px-8 py-4 text-lg bg-transparent"
            >
              <Play className="mr-2 h-5 w-5" />
              Book a Demo
            </Button>

            <Button size="lg" variant="ghost" className="text-black hover:bg-gray-100 px-8 py-4 text-lg">
              Interactive Demo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">85%</div>
              <div className="text-gray-600">Average conversion increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">3x</div>
              <div className="text-gray-600">Faster sales cycles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
              <div className="text-gray-600">B2B companies transformed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
