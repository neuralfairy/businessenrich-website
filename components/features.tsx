import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Target, Zap, BarChart3, Users, Rocket } from "lucide-react"

const features = [
  {
    icon: MessageSquare,
    title: "Messaging Optimization",
    description:
      "Craft compelling brand communication frameworks that resonate with your target audience and drive conversions.",
    color: "text-orange-500",
  },
  {
    icon: Target,
    title: "Sales Enablement Content",
    description:
      "Create targeted content mapping strategies that empower your sales team with the right message at the right time.",
    color: "text-blue-600",
  },
  {
    icon: Zap,
    title: "CRM Integrations",
    description:
      "Seamlessly integrate with your existing CRM systems and leverage AI-driven recommendations for optimal messaging.",
    color: "text-orange-500",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description:
      "Track messaging performance with detailed analytics and insights to continuously optimize your strategy.",
    color: "text-blue-600",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Enable your entire team to collaborate on messaging strategy with shared frameworks and guidelines.",
    color: "text-orange-500",
  },
  {
    icon: Rocket,
    title: "Growth Acceleration",
    description: "Accelerate your B2B growth with proven messaging strategies that convert prospects into customers.",
    color: "text-blue-600",
  },
]

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Everything You Need to Transform Your Messaging
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive suite of tools and services helps you create, optimize, and scale your B2B messaging
            strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <feature.icon className={`h-12 w-12 ${feature.color} mb-4`} />
                <CardTitle className="text-xl text-navy-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
