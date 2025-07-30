import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const leaders = [
  {
    name: "Sarah Mitchell",
    title: "CEO & Founder",
    bio: "Former VP of Marketing at three successful B2B SaaS companies. 15+ years of messaging strategy expertise.",
    image: "/placeholder.svg?height=200&width=200",
    linkedin: "#",
  },
  {
    name: "David Chen",
    title: "Head of Strategy",
    bio: "Ex-McKinsey consultant specializing in B2B growth strategies. MBA from Wharton.",
    image: "/placeholder.svg?height=200&width=200",
    linkedin: "#",
  },
  {
    name: "Maria Rodriguez",
    title: "VP of Client Success",
    bio: "Customer success expert with a track record of 95%+ client retention across multiple industries.",
    image: "/placeholder.svg?height=200&width=200",
    linkedin: "#",
  },
]

export function Leadership() {
  return (
    <section className="mb-20" id="leadership">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-navy-900 mb-4">Leadership Team</h2>
        <p className="text-xl text-gray-600">Meet the experts behind our messaging strategy success</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {leaders.map((leader, index) => (
          <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <img
                src={leader.image || "/placeholder.svg"}
                alt={leader.name}
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-bold text-navy-900 mb-2">{leader.name}</h3>
              <div className="text-orange-500 font-semibold mb-4">{leader.title}</div>
              <p className="text-gray-600 mb-6">{leader.bio}</p>
              <Button
                variant="outline"
                size="sm"
                className="text-black border-gray-300 hover:bg-gray-50 bg-transparent"
              >
                Connect on LinkedIn
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black">
          View Full Leadership Team
        </Button>
      </div>
    </section>
  )
}
