import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$2,500",
    period: "/month",
    description: "Perfect for small B2B teams getting started with messaging optimization",
    features: [
      "Basic messaging framework",
      "Email support",
      "Monthly strategy review",
      "Up to 3 team members",
      "Basic analytics dashboard",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "$7,500",
    period: "/month",
    description: "Comprehensive messaging strategy for growing B2B companies",
    features: [
      "Advanced messaging optimization",
      "Sales enablement content",
      "CRM integrations",
      "Priority support",
      "Up to 15 team members",
      "Advanced analytics",
      "A/B testing tools",
      "Monthly strategy calls",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations with complex needs",
    features: [
      "Custom messaging frameworks",
      "Dedicated account manager",
      "Advanced integrations",
      "White-label options",
      "Unlimited team members",
      "Custom analytics",
      "Priority development",
      "Quarterly business reviews",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function PricingTiers() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={`relative ${plan.popular ? "ring-2 ring-orange-500 shadow-xl scale-105" : "shadow-lg"}`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                  <Star className="h-4 w-4 mr-1" />
                  Most Popular
                </div>
              </div>
            )}

            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl text-navy-900">{plan.name}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold text-navy-900">{plan.price}</span>
                <span className="text-gray-500">{plan.period}</span>
              </div>
              <CardDescription className="mt-4 text-base">{plan.description}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black"
                    : "bg-gray-900 hover:bg-gray-800 text-white"
                }`}
              >
                {plan.cta}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="outline" className="text-black border-gray-300 hover:bg-gray-50 bg-transparent">
            Plans Overview
          </Button>
          <Button variant="outline" className="text-black border-gray-300 hover:bg-gray-50 bg-transparent">
            Enterprise & Custom
          </Button>
          <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black">
            Free Trial
          </Button>
        </div>
      </div>
    </div>
  )
}
