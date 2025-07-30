import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is messaging strategy and why is it important for B2B companies?",
    answer:
      "Messaging strategy is the systematic approach to crafting and delivering consistent, compelling messages that resonate with your target audience. For B2B companies, it's crucial because it directly impacts conversion rates, sales cycle length, and overall business growth. A well-defined messaging strategy helps you communicate your value proposition clearly, differentiate from competitors, and build trust with prospects.",
  },
  {
    question: "How long does it take to see results from messaging optimization?",
    answer:
      "Most clients see initial improvements within 30-60 days of implementing our messaging strategies. However, significant results typically become apparent within 90 days. The timeline depends on factors like your current messaging maturity, implementation speed, and market conditions. Our average client sees an 85% increase in conversion rates within the first quarter.",
  },
  {
    question: "Do you work with companies in specific industries?",
    answer:
      "We specialize in B2B companies across various industries, including SaaS, technology services, professional services, manufacturing, and healthcare. Our methodology is adaptable to any B2B context, and we have experience working with companies ranging from startups to Fortune 500 enterprises.",
  },
  {
    question: "What's the difference between messaging strategy and content marketing?",
    answer:
      "Messaging strategy focuses on what you say and how you say it - the core messages, value propositions, and communication frameworks. Content marketing is about creating and distributing valuable content. Messaging strategy is the foundation that informs all your content marketing efforts, ensuring consistency and effectiveness across all channels.",
  },
  {
    question: "How do you measure the success of messaging strategy improvements?",
    answer:
      "We track multiple metrics including conversion rates, lead quality scores, sales cycle length, win rates, and customer acquisition costs. We also monitor engagement metrics like email open rates, website time-on-page, and content consumption. Our clients typically see measurable improvements across these KPIs within 90 days.",
  },
  {
    question: "Can you integrate with our existing CRM and marketing tools?",
    answer:
      "Yes, we integrate with all major CRM platforms including Salesforce, HubSpot, Pipedrive, and others. We also work with marketing automation tools, email platforms, and analytics systems. Our PSA Integrations ensure seamless implementation of messaging strategies across your entire tech stack.",
  },
  {
    question: "What makes your approach different from other messaging consultancies?",
    answer:
      "Our approach combines data-driven insights with psychological principles and proven frameworks. We don't just create messages - we build comprehensive messaging systems that scale with your business. Our team has hands-on experience growing B2B companies, and we focus on measurable results rather than just creative output.",
  },
  {
    question: "Do you provide ongoing support after the initial messaging strategy is developed?",
    answer:
      "Absolutely. Messaging strategy is not a one-time project - it requires ongoing optimization and refinement. All our plans include ongoing support, regular strategy reviews, and continuous optimization based on performance data. We're your long-term partner in messaging success.",
  },
]

export function FAQSection() {
  return (
    <section className="mb-16">
      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-navy-900 py-6">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6 leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
