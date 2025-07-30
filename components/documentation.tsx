import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Book, Code, Zap, HelpCircle } from "lucide-react"

const docSections = [
  {
    icon: Book,
    title: "User Guide",
    description: "Complete guide to using our messaging strategy platform and tools.",
    links: ["Getting Started", "Messaging Frameworks", "Content Optimization", "Performance Tracking"],
    color: "text-orange-500",
  },
  {
    icon: Code,
    title: "API Reference",
    description: "Technical documentation for developers integrating with our platform.",
    links: ["Authentication", "Messaging API", "Analytics API", "Webhooks"],
    color: "text-blue-600",
  },
  {
    icon: Zap,
    title: "Integrations",
    description: "Setup guides for connecting with your existing tools and platforms.",
    links: ["Salesforce Integration", "HubSpot Setup", "Slack Notifications", "Custom Integrations"],
    color: "text-orange-500",
  },
  {
    icon: HelpCircle,
    title: "Troubleshooting",
    description: "Common issues and solutions for our messaging strategy tools.",
    links: ["Common Issues", "Error Messages", "Performance Tips", "Contact Support"],
    color: "text-blue-600",
  },
]

export function Documentation() {
  return (
    <section id="documentation">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-navy-900 mb-4">Documentation</h2>
        <p className="text-xl text-gray-600">
          Everything you need to get the most out of our messaging strategy platform
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {docSections.map((section, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <section.icon className={`h-8 w-8 ${section.color}`} />
                <div>
                  <CardTitle className="text-xl text-navy-900">{section.title}</CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Button variant="ghost" className="w-full justify-start text-black hover:bg-gray-100 p-2">
                      {link}
                    </Button>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black">
                View All Documentation
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
