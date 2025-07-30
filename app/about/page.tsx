import { CompanyMission } from "@/components/company-mission"
import { Leadership } from "@/components/leadership"
import { Careers } from "@/components/careers"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">About Businessenrich Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Based in Savannah, we're transforming how B2B companies communicate their value and convert prospects.
          </p>
        </div>
        <CompanyMission />
        <Leadership />
        <Careers />
      </div>
    </main>
  )
}
