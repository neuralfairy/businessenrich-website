import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    title: "5 B2B Messaging Mistakes That Kill Conversions",
    excerpt: "Learn the most common messaging mistakes that B2B companies make and how to avoid them.",
    author: "Sarah Mitchell",
    date: "Jan 15, 2024",
    category: "Strategy",
    image: "/placeholder.svg?height=200&width=300",
    readTime: "5 min read",
  },
  {
    title: "How to Create a Messaging Framework That Converts",
    excerpt: "Step-by-step guide to building a messaging framework that resonates with your target audience.",
    author: "David Chen",
    date: "Jan 12, 2024",
    category: "Framework",
    image: "/placeholder.svg?height=200&width=300",
    readTime: "8 min read",
  },
  {
    title: "The Psychology Behind High-Converting B2B Messages",
    excerpt: "Understand the psychological principles that make B2B messaging more persuasive and effective.",
    author: "Maria Rodriguez",
    date: "Jan 10, 2024",
    category: "Psychology",
    image: "/placeholder.svg?height=200&width=300",
    readTime: "6 min read",
  },
  {
    title: "Case Study: 300% Conversion Increase in 90 Days",
    excerpt: "How we helped TechCorp transform their messaging and triple their conversion rates.",
    author: "Sarah Mitchell",
    date: "Jan 8, 2024",
    category: "Case Study",
    image: "/placeholder.svg?height=200&width=300",
    readTime: "10 min read",
  },
  {
    title: "AI-Powered Messaging: The Future of B2B Communication",
    excerpt: "Explore how artificial intelligence is revolutionizing B2B messaging strategies.",
    author: "David Chen",
    date: "Jan 5, 2024",
    category: "Technology",
    image: "/placeholder.svg?height=200&width=300",
    readTime: "7 min read",
  },
  {
    title: "Building Trust Through Authentic B2B Messaging",
    excerpt: "Learn how to craft authentic messages that build trust and credibility with prospects.",
    author: "Maria Rodriguez",
    date: "Jan 3, 2024",
    category: "Trust",
    image: "/placeholder.svg?height=200&width=300",
    readTime: "5 min read",
  },
]

export function BlogGrid() {
  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <div className="aspect-video overflow-hidden rounded-t-lg">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs">{post.category}</span>
                <span>{post.readTime}</span>
              </div>
              <CardTitle className="text-lg text-navy-900 hover:text-orange-500 transition-colors">
                {post.title}
              </CardTitle>
              <CardDescription className="text-gray-600">{post.excerpt}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
              </div>
              <Button variant="ghost" className="w-full text-black hover:bg-gray-100 group">
                Read More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
