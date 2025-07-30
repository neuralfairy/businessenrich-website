import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Users } from "lucide-react"

export function BookingSection() {
  return (
    <section className="mt-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-navy-900 mb-4">Ready to Get Started?</h2>
        <p className="text-xl text-gray-600">Book a consultation with our messaging strategy experts</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <Calendar className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <CardTitle>Strategy Session</CardTitle>
            <CardDescription>30-minute consultation</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black">
              Book Now
            </Button>
          </CardContent>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <CardTitle>Quick Demo</CardTitle>
            <CardDescription>15-minute product demo</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full text-black border-gray-300 hover:bg-gray-50 bg-transparent">
              Schedule Demo
            </Button>
          </CardContent>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <CardTitle>Team Workshop</CardTitle>
            <CardDescription>60-minute team session</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full text-black border-gray-300 hover:bg-gray-50 bg-transparent">
              Book Workshop
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
