"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-blue-600 rounded-lg"></div>
            <span className="text-xl font-bold text-navy-900">Businessenrich</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/features" className="text-gray-700 hover:text-orange-500 transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-orange-500 transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-orange-500 transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-orange-500 transition-colors">
              Resources
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-orange-500 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="text-black border-gray-300 hover:bg-gray-50 bg-transparent">
              Book Demo
            </Button>
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link href="/features" className="text-gray-700 hover:text-orange-500 transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="text-gray-700 hover:text-orange-500 transition-colors">
                Pricing
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-orange-500 transition-colors">
                About
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-orange-500 transition-colors">
                Resources
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-orange-500 transition-colors">
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="text-black border-gray-300 hover:bg-gray-50 bg-transparent">
                  Book Demo
                </Button>
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black">
                  Start Free Trial
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
