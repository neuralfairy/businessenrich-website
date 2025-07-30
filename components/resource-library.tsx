import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, Video, BookOpen } from "lucide-react"

const resources = [
  {
    type: "Whitepaper",
    icon: FileText,
    title: "The Complete Guide to B2B Messaging Strategy",
    description:
      "Comprehensive 50-page guide covering everything from messaging frameworks to conversion optimization.",
    downloads: "2.3k",
    color: "text-orange-500",
  },
  {
    type: "Case Study",
    icon: BookOpen,
    title: "How SaaS Companies Increase Conversions by 85%",
    description: "In-depth analysis of successful messaging transformations across 50+ SaaS companies.",
    downloads: "1.8k",
    color: "text-blue-600",
  },
  {
    type: "Tutorial",
    icon: Video,
    title: "Messaging Framework Workshop (Video Series)",
    description: "5-part video series teaching you to build high-converting messaging frameworks.",
    downloads: "3.1k",
    color: "text-orange-500",
  },
  {
    type: "Template",
    icon: FileText,
    title: "B2B Messaging Templates & Frameworks",
    description: "Ready-to-use templates for creating compelling B2B messaging across all channels.",
    downloads: "4.2k",
    color: "text-blue-600",
  },
]

export function ResourceLibrary() {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-navy-900 mb-4">Resource Library</h2>
        <p className="text-xl text-gray-600">Free resources to help you master B2B messaging strategy</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {resources.map((resource, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-lg bg-gray-100`}>
                  <resource.icon className={`h-8 w-8 ${resource.color}`} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">{resource.type}</div>
                  <CardTitle className="text-lg text-navy-900">{resource.title}</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 mb-4">{resource.description}</CardDescription>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">{resource.downloads} downloads</div>
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
