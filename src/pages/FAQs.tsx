
import Layout from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

const FAQs = () => {
  const faqs = [
    {
      question: "What is your refund policy?",
      answer: "We offer a comprehensive refund policy with 30-day money-back guarantee on all annual plans. For monthly subscriptions, you can cancel anytime and won't be charged for the next billing cycle. Enterprise customers have custom refund terms based on their agreement."
    },
    {
      question: "How do I schedule an appointment?",
      answer: "You can easily schedule an appointment through our online booking system available on our website. Simply select your preferred service, choose an available time slot, and provide your contact information. You'll receive instant confirmation via email."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers for Enterprise plans. All payments are processed securely using industry-standard encryption."
    },
    {
      question: "Do you offer group discounts?",
      answer: "Yes! We offer special pricing for teams and organizations. Groups of 5-10 users receive a 15% discount, 11-25 users get 25% off, and 25+ users qualify for our Enterprise pricing with custom rates and dedicated support."
    },
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking at least 2 weeks in advance for the best availability, especially during peak seasons. However, we often have same-day and next-day availability depending on the service and our current schedule."
    },
    {
      question: "Can I cancel or reschedule my appointment?",
      answer: "Absolutely! You can cancel or reschedule up to 24 hours before your appointment without any fees. For cancellations made less than 24 hours in advance, a cancellation fee may apply depending on the service type."
    },
    {
      question: "What support options are available?",
      answer: "We offer multiple support channels: 24/7 email support for all plans, priority support for Professional plans, and dedicated phone support for Enterprise customers. We also have an extensive knowledge base and video tutorials."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes! We offer a 14-day free trial for all our plans. No credit card is required to start your trial, and you can access all features during this period. You can upgrade or cancel anytime during your trial."
    }
  ];

  return (
    <Layout>
      <Section background="white">
        <SectionHeader 
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our services, policies, and procedures."
        />

        <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="font-semibold text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Can't find what you're looking for? Our support team is here to help you 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary text-white px-8 py-3 rounded-lg hover:scale-105 transition-transform duration-300 flex items-center">
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Support
            </Button>
            <Button variant="outline" className="border border-gray-300 px-8 py-3 rounded-lg hover:scale-105 transition-transform duration-300 flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              Live Chat
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default FAQs;
