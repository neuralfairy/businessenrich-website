import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare, HeadphonesIcon, Handshake, FileText } from "lucide-react"

const contactOptions = [
  {
    icon: MessageSquare,
    title: "Sales Inquiry",
    description: "Ready to transform your messaging strategy?",
    cta: "Contact Sales",
    color: "text-orange-500",
  },
  {
    icon: HeadphonesIcon,
    title: "Support Request",
    description: "Need help with your current plan?",
    cta: "Get Support",
    color: "text-blue-600",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    description: "Interested in partnering with us?",
    cta: "Partner Inquiry",
    color: "text-orange-500",
  },
  {
    icon: FileText,
    title: "Request a Quote",
    description: "Get a custom quote for your needs",
    cta: "Get Quote",
    color: "text-blue-600",
  },
]

export function ContactOptions() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {contactOptions.map((option, index) => (
        <Card key={index} className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <option.icon className={`h-12 w-12 ${option.color} mx-auto mb-4`} />
            <CardTitle className="text-lg text-navy-900">{option.title}</CardTitle>
            <CardDescription>{option.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black">
              {option.cta}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
