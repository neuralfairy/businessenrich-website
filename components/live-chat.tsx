import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Clock } from "lucide-react"

export function LiveChat() {
  return (
    <div className="mt-16 max-w-md mx-auto">
      <Card className="border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-blue-50">
        <CardHeader className="text-center">
          <MessageCircle className="h-12 w-12 text-orange-500 mx-auto mb-4" />
          <CardTitle className="text-xl text-navy-900">Need Immediate Help?</CardTitle>
          <CardDescription>Chat with our messaging strategy experts</CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
            <Clock className="h-4 w-4" />
            <span>Average response time: 2 minutes</span>
          </div>
          <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black">
            Start Live Chat
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
