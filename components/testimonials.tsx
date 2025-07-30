import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "VP of Sales, TechCorp",
    content:
      "Businessenrich transformed our messaging strategy completely. Our conversion rates increased by 92% in just 3 months.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Michael Chen",
    title: "Marketing Director, GrowthLab",
    content:
      "The ROI from their messaging optimization was incredible. We saw immediate improvements in our sales pipeline.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Emily Rodriguez",
    title: "CEO, ScaleUp Solutions",
    content:
      "Their team helped us craft messaging that actually resonates with our target audience. Game-changing results.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Trusted by Leading B2B Companies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our messaging strategy expertise has transformed businesses across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-navy-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.title}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
