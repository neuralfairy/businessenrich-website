import { BlogGrid } from "@/components/blog-grid"
import { ResourceLibrary } from "@/components/resource-library"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Resources & Insights</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert insights, case studies, and resources to help you master B2B messaging strategy.
          </p>
        </div>
        <BlogGrid />
        <ResourceLibrary />
      </div>
    </main>
  )
}
