import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-blue-600 rounded-lg"></div>
              <span className="text-xl font-bold">Businessenrich</span>
            </div>
            <p className="text-gray-300 mb-6">
              Transforming B2B messaging strategies to drive conversions and accelerate growth.
            </p>
            <div className="text-sm text-gray-400">Based in Savannah, GA</div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/features" className="hover:text-orange-400 transition-colors">
                  Messaging Optimization
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-orange-400 transition-colors">
                  Sales Enablement
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-orange-400 transition-colors">
                  CRM Integrations
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-orange-400 transition-colors">
                  Performance Analytics
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/about" className="hover:text-orange-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about#leadership" className="hover:text-orange-400 transition-colors">
                  Leadership Team
                </Link>
              </li>
              <li>
                <Link href="/about#careers" className="hover:text-orange-400 transition-colors">
                  Career Openings
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-orange-400 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/faq" className="hover:text-orange-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/faq#documentation" className="hover:text-orange-400 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-400 transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-400 transition-colors">
                  API Reference
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap gap-4">
              <Button
                variant="outline"
                size="sm"
                className="text-black border-gray-600 hover:bg-gray-700 bg-transparent"
              >
                Contact
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-black border-gray-600 hover:bg-gray-700 bg-transparent"
              >
                Submit Ticket
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-black border-gray-600 hover:bg-gray-700 bg-transparent"
              >
                Partner Inquiry
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-black border-gray-600 hover:bg-gray-700 bg-transparent"
              >
                Integration Requests
              </Button>
            </div>

            <div className="text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-orange-400 transition-colors mr-4">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-orange-400 transition-colors mr-4">
                Terms of Service
              </Link>
              <span>Powered by Sales Intelligence Platform</span>
            </div>
          </div>

          <div className="text-center mt-8 text-gray-400 text-sm">
            © 2024 Businessenrich Solutions. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
