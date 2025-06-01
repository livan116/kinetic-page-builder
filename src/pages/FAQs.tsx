
import Layout from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQs = () => {
  const faqs = [
    {
      question: "What is your refund policy?",
      answer: "Placeholder answer for refund policy. Replace with your actual refund policy details and terms."
    },
    {
      question: "How do I schedule an appointment?",
      answer: "You can schedule an appointment through our booking page or by calling our office directly. Placeholder text for booking process."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers. Placeholder text for payment information."
    },
    {
      question: "Do you offer group discounts?",
      answer: "Yes, we offer special pricing for groups of 5 or more. Contact us for custom pricing. Placeholder text for group discounts."
    },
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking at least 2 weeks in advance for the best availability. Placeholder text for booking recommendations."
    },
    {
      question: "Can I cancel or reschedule my appointment?",
      answer: "Yes, you can cancel or reschedule up to 24 hours before your appointment. Placeholder text for cancellation policy."
    }
  ];

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services, policies, and procedures.
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h2>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="space-x-4">
              <button className="bg-primary text-white px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-300">
                Contact Support
              </button>
              <button className="border border-gray-300 px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-300">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQs;
