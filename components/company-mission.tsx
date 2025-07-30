import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, Zap } from "lucide-react"

export function CompanyMission() {
  return (
    <section className="mb-20">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold text-navy-900 mb-6">Our Mission</h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          We believe that every B2B company deserves messaging that truly connects with their audience. Based in the
          heart of Savannah, Georgia, we combine Southern hospitality with cutting-edge messaging strategy to help
          businesses transform their communication and accelerate growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card className="text-center border-0 shadow-lg">
          <CardContent className="p-8">
            <Target className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-navy-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the leading messaging strategy consultancy that transforms how B2B companies communicate their
              value.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center border-0 shadow-lg">
          <CardContent className="p-8">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-navy-900 mb-4">Our Values</h3>
            <p className="text-gray-600">
              Authenticity, results-driven approach, and genuine partnership with every client we serve.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center border-0 shadow-lg">
          <CardContent className="p-8">
            <Zap className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-navy-900 mb-4">Our Impact</h3>
            <p className="text-gray-600">
              Over 500 B2B companies transformed, with an average 85% increase in conversion rates.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-lg p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-navy-900 mb-4">Savannah Headquarters</h3>
          <p className="text-gray-600 mb-6">
            Located in the beautiful historic district of Savannah, Georgia, our team combines the charm of the South
            with world-class messaging expertise. We're proud to call this vibrant city our home and serve clients
            across the globe from our Savannah headquarters.
          </p>
          <div className="text-sm text-gray-500">123 Bull Street, Savannah, GA 31401</div>
        </div>
      </div>
    </section>
  )
}
