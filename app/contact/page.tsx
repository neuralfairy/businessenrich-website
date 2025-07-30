import { ContactOptions } from "@/components/contact-options"
import { ContactForm } from "@/components/contact-form"
import { LiveChat } from "@/components/live-chat"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your messaging strategy? Choose how you'd like to connect with our team.
          </p>
        </div>
        <ContactOptions />
        <ContactForm />
        <LiveChat />
      </div>
    </main>
  )
}
