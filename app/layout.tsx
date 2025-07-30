import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ExitIntentPopup } from "@/components/exit-intent-popup"
import { LiveChatWidget } from "@/components/live-chat-widget"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Businessenrich Solutions - Transform Your B2B Messaging Strategy",
  description:
    "Professional messaging strategy consultancy helping B2B sales teams and agencies craft high-converting brand messaging. Based in Savannah, GA.",
  keywords:
    "messaging optimization, brand communication, conversion strategy, B2B messaging strategy, sales enablement",
  openGraph: {
    title: "Businessenrich Solutions - Transform Your B2B Messaging Strategy",
    description:
      "Professional messaging strategy consultancy helping B2B sales teams and agencies craft high-converting brand messaging.",
    url: "https://businessenrich.com",
    siteName: "Businessenrich Solutions",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Businessenrich Solutions",
              url: "https://businessenrich.com",
              logo: "https://businessenrich.com/logo.png",
              description:
                "Professional messaging strategy consultancy helping B2B sales teams and agencies craft high-converting brand messaging.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Savannah",
                addressRegion: "GA",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-0123",
                contactType: "customer service",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <ExitIntentPopup />
        <LiveChatWidget />
      </body>
    </html>
  )
}
