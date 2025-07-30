import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What's included in the free trial?",
    answer:
      "Our 14-day free trial includes full access to our Professional plan features, including messaging optimization tools, basic CRM integrations, and email support.",
  },
  {
    question: "Can I change plans at any time?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    question: "Do you offer custom enterprise solutions?",
    answer:
      "Our Enterprise plan is fully customizable to meet your organization's specific needs, including custom integrations, dedicated support, and tailored messaging frameworks.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer email support for Starter plans, priority support for Professional plans, and dedicated account management for Enterprise customers.",
  },
  {
    question: "Are there any setup fees?",
    answer:
      "No setup fees for Starter and Professional plans. Enterprise customers may have implementation fees depending on the complexity of their requirements.",
  },
]

export function PricingFAQ() {
  return (
    <section className="mt-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-navy-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-xl text-gray-600">Everything you need to know about our pricing and plans</p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-navy-900">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
