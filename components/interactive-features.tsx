"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare, Target, Zap, ArrowRight } from "lucide-react"

const services = [
  {
    id: "messaging",
    icon: MessageSquare,
    title: "Messaging Optimization & Brand Communication Frameworks",
    description: "Transform your brand messaging with our comprehensive PSA Suite",
    details: [
      "Brand voice and tone development",
      "Message hierarchy and positioning",
      "Competitive differentiation strategies",
      "Multi-channel messaging consistency",
      "A/B testing and optimization",
    ],
    color: "from-orange-500 to-orange-600",
  },
  {
    id: "sales",
    icon: Target,
    title: "Sales Enablement Content Mapping",
    description: "Accelerate your lead generation with targeted content strategies",
    details: [
      "Buyer journey content mapping",
      "Sales collateral optimization",
      "Objection handling frameworks",
      "Personalization strategies",
      "Performance tracking and analytics",
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "integrations",
    icon: Zap,
    title: "CRM Integrations & AI-Driven Recommendations",
    description: "Seamless PSA Integrations with intelligent automation",
    details: [
      "Salesforce, HubSpot, Pipedrive integration",
      "AI-powered message recommendations",
      "Automated follow-up sequences",
      "Lead scoring and prioritization",
      "Real-time performance insights",
    ],
    color: "from-orange-500 to-blue-600",
  },
]

export function InteractiveFeatures() {
  const [activeService, setActiveService] = useState("messaging")

  const activeServiceData = services.find((service) => service.id === activeService)

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {services.map((service) => (
          <Card
            key={service.id}
            className={`cursor-pointer transition-all duration-300 ${
              activeService === service.id ? "ring-2 ring-orange-500 shadow-xl" : "hover:shadow-lg"
            }`}
            onClick={() => setActiveService(service.id)}
          >
            <CardHeader className="text-center">
              <service.icon
                className={`h-12 w-12 mx-auto mb-4 ${
                  activeService === service.id ? "text-orange-500" : "text-gray-400"
                }`}
              />
              <CardTitle className="text-lg">{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      {activeServiceData && (
        <Card className="shadow-xl">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-lg bg-gradient-to-r ${activeServiceData.color}`}>
                <activeServiceData.icon className="h-8 w-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl text-navy-900">{activeServiceData.title}</CardTitle>
                <CardDescription className="text-lg">{activeServiceData.description}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-navy-900 mb-4">What's Included:</h4>
                <ul className="space-y-3">
                  {activeServiceData.details.map((detail, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <ArrowRight className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black">
                  Get Started
                </Button>
                <Button variant="outline" className="text-black border-gray-300 hover:bg-gray-50 bg-transparent">
                  Learn More
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
