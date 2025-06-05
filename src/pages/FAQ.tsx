
import Layout from "@/components/Layout";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MessageCircle, Phone, Mail, Clock } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What services do you offer?",
          answer: "We offer comprehensive business consulting services including strategic planning, digital transformation, process optimization, team development, and technology integration. Our solutions are tailored to meet the unique needs of each client."
        },
        {
          question: "How do I get started?",
          answer: "Getting started is easy! Simply book a free consultation through our website, and one of our experts will reach out to discuss your needs and create a customized plan for your business."
        },
        {
          question: "Do you work with small businesses?",
          answer: "Absolutely! We work with businesses of all sizes, from startups and small businesses to large enterprises. Our solutions are scalable and can be adapted to fit any budget and business size."
        }
      ]
    },
    {
      category: "Pricing & Plans",
      questions: [
        {
          question: "What is your pricing structure?",
          answer: "We offer flexible pricing options including project-based pricing, monthly retainers, and hourly consulting rates. Our pricing is transparent with no hidden fees, and we provide detailed quotes before starting any work."
        },
        {
          question: "Do you offer refunds?",
          answer: "Yes, we offer a 30-day money-back guarantee on all our annual plans. For monthly subscriptions, you can cancel anytime and won't be charged for the next billing cycle. Enterprise customers have custom refund terms based on their agreement."
        },
        {
          question: "Can I upgrade or downgrade my plan?",
          answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and you'll be billed prorated for any upgrades or receive credits for downgrades."
        }
      ]
    },
    {
      category: "Support & Services",
      questions: [
        {
          question: "What support options are available?",
          answer: "We offer multiple support channels: 24/7 email support for all plans, priority support for Professional plans, and dedicated phone support for Enterprise customers. We also have an extensive knowledge base and video tutorials."
        },
        {
          question: "How quickly can you start working on my project?",
          answer: "Typically, we can start working on your project within 1-2 weeks of signing the agreement, depending on our current workload and the complexity of your project. Urgent projects can often be accommodated with expedited timelines."
        },
        {
          question: "Do you provide ongoing support after project completion?",
          answer: "Yes! We offer ongoing support and maintenance packages to ensure your solutions continue to perform optimally. This includes regular check-ins, updates, and troubleshooting as needed."
        }
      ]
    },
    {
      category: "Process & Timeline",
      questions: [
        {
          question: "What does your typical process look like?",
          answer: "Our process typically includes: 1) Initial consultation and assessment, 2) Strategy development and planning, 3) Implementation and execution, 4) Testing and optimization, 5) Training and knowledge transfer, 6) Ongoing support and monitoring."
        },
        {
          question: "How long do projects typically take?",
          answer: "Project timelines vary depending on scope and complexity. Small projects may take 2-4 weeks, while comprehensive transformations can take 3-6 months or longer. We provide detailed timelines during the planning phase."
        },
        {
          question: "Can I make changes to the project scope?",
          answer: "Yes, we understand that business needs can evolve. We're flexible with scope changes and will work with you to adjust timelines and budgets accordingly. All changes are documented and approved before implementation."
        }
      ]
    }
  ];

  const contactOptions = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Chat",
      description: "Get instant answers to your questions",
      action: "Start Chat",
      available: "Available 24/7"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      description: "Speak directly with our experts",
      action: "Call Now",
      available: "Mon-Fri 9AM-6PM"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      description: "Send us detailed questions",
      action: "Send Email",
      available: "Response within 4 hours"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90 leading-relaxed">
              Find answers to common questions about our services, processes, and policies. Can't find what you're looking for? Contact our support team.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          {faqs.map((category, categoryIndex) => (
            <div key={category.category} className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {category.category}
              </h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`${categoryIndex}-${index}`} 
                    className="bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <span className="font-semibold text-lg text-gray-900">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-600 text-base leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Support Section */}
      <Section background="gray">
        <SectionHeader 
          title="Still Need Help?"
          subtitle="Our support team is here to assist you with any questions or concerns you may have."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactOptions.map((option, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="text-primary">{option.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <div className="flex items-center justify-center text-sm text-gray-500 mb-6">
                  <Clock className="w-4 h-4 mr-2" />
                  {option.available}
                </div>
                <Button className="w-full hover:scale-105 transition-transform duration-300">
                  {option.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Additional Resources */}
      <Section background="white">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Additional Resources</h2>
          <p className="text-xl text-gray-600 mb-8">
            Explore our knowledge base and resources to learn more about our services and best practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="outline" className="hover:scale-105 transition-transform duration-300" asChild>
              <Link to="/about">About Us</Link>
            </Button>
            <Button size="lg" variant="outline" className="hover:scale-105 transition-transform duration-300" asChild>
              <Link to="/services">Our Services</Link>
            </Button>
            <Button size="lg" className="hover:scale-105 transition-transform duration-300" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default FAQ;
