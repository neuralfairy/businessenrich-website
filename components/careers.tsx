import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, DollarSign } from "lucide-react"

const openings = [
  {
    title: "Senior Messaging Strategist",
    department: "Strategy",
    location: "Savannah, GA / Remote",
    type: "Full-time",
    salary: "$80k - $120k",
    description: "Lead messaging strategy development for our enterprise clients.",
  },
  {
    title: "Client Success Manager",
    department: "Customer Success",
    location: "Savannah, GA / Remote",
    type: "Full-time",
    salary: "$60k - $85k",
    description: "Ensure client success and drive account growth through strategic guidance.",
  },
  {
    title: "Marketing Operations Specialist",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    salary: "$55k - $75k",
    description: "Optimize our marketing operations and lead generation processes.",
  },
]

export function Careers() {
  return (
    <section id="careers">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-navy-900 mb-4">Career Opportunities</h2>
        <p className="text-xl text-gray-600">Join our growing team and help transform B2B messaging strategies</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {openings.map((job, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg text-navy-900">{job.title}</CardTitle>
              <CardDescription className="text-orange-500 font-semibold">{job.department}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">{job.description}</p>

              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  {job.location}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {job.type}
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4 mr-2" />
                  {job.salary}
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black">
                Apply Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline" className="text-black border-gray-300 hover:bg-gray-50 bg-transparent">
          View All Career Openings
        </Button>
      </div>
    </section>
  )
}
