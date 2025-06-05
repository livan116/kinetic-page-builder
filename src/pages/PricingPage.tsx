
import Layout from "@/components/Layout";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import PricingCard from "@/components/common/PricingCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Check, X, Zap, Star, Crown, Rocket } from "lucide-react";

const PricingPage = () => {
  const packages = [
    {
      name: "Starter",
      price: "$99",
      period: "month",
      features: [
        "Up to 5 projects",
        "Basic analytics",
        "Email support",
        "Standard templates",
        "Mobile responsive design",
        "SSL certificate",
        "Basic SEO tools"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$199",
      period: "month",
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "Priority support",
        "Premium templates",
        "Custom branding",
        "A/B testing",
        "Advanced SEO suite",
        "Team collaboration",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "month",
      features: [
        "Everything in Professional",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom training",
        "SLA guarantee",
        "White-label solution",
        "Advanced security",
        "Compliance features"
      ],
      popular: false
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-primary to-primary/80 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed">
              Choose the perfect plan that scales with your business. No hidden fees, no surprises, just powerful solutions that drive results.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-16">
              <span className="text-white/80">Monthly</span>
              <div className="relative">
                <input type="checkbox" className="sr-only" />
                <div className="w-14 h-8 bg-white/20 rounded-full cursor-pointer flex items-center px-1">
                  <div className="w-6 h-6 bg-white rounded-full shadow-lg transform transition-transform duration-300"></div>
                </div>
              </div>
              <span className="text-white/80">Annual</span>
              <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">Save 20%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <Section background="gray" className="py-24 pt-16 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PricingCard key={index} {...pkg} index={index} />
          ))}
        </div>
      </Section>

      {/* Features Comparison */}
      <Section background="white">
        <SectionHeader 
          title="Compare All Features"
          subtitle="See exactly what's included in each plan and choose the one that fits your needs."
        />
        
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 overflow-x-auto animate-fade-in">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-4 px-6 font-bold text-gray-900">Features</th>
                <th className="text-center py-4 px-6 font-bold text-gray-900">Starter</th>
                <th className="text-center py-4 px-6 font-bold text-primary bg-primary/5 rounded-t-lg">Professional</th>
                <th className="text-center py-4 px-6 font-bold text-gray-900">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: "Projects", starter: "5", pro: "Unlimited", enterprise: "Unlimited" },
                { feature: "Team Members", starter: "1", pro: "10", enterprise: "Unlimited" },
                { feature: "Storage", starter: "10GB", pro: "100GB", enterprise: "1TB" },
                { feature: "Support", starter: "Email", pro: "Priority", enterprise: "24/7 Phone" },
                { feature: "Analytics", starter: "Basic", pro: "Advanced", enterprise: "Custom" },
                { feature: "API Access", starter: <X className="w-5 h-5 text-red-500 mx-auto" />, pro: <Check className="w-5 h-5 text-green-500 mx-auto" />, enterprise: <Check className="w-5 h-5 text-green-500 mx-auto" /> },
                { feature: "White Label", starter: <X className="w-5 h-5 text-red-500 mx-auto" />, pro: <X className="w-5 h-5 text-red-500 mx-auto" />, enterprise: <Check className="w-5 h-5 text-green-500 mx-auto" /> },
              ].map((row, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200">
                  <td className="py-4 px-6 font-medium text-gray-900">{row.feature}</td>
                  <td className="py-4 px-6 text-center text-gray-600">{row.starter}</td>
                  <td className="py-4 px-6 text-center text-primary font-semibold bg-primary/5">{row.pro}</td>
                  <td className="py-4 px-6 text-center text-gray-600">{row.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="gray">
        <SectionHeader 
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our pricing and plans."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              question: "Can I change plans anytime?",
              answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately and you'll be billed prorated."
            },
            {
              question: "Is there a free trial?",
              answer: "Absolutely! We offer a 14-day free trial on all plans. No credit card required to get started."
            },
            {
              question: "What payment methods do you accept?",
              answer: "We accept all major credit cards, PayPal, and bank transfers for Enterprise plans."
            },
            {
              question: "Do you offer refunds?",
              answer: "Yes, we offer a 30-day money-back guarantee on all annual plans. Monthly plans can be canceled anytime."
            },
            {
              question: "Is my data secure?",
              answer: "Yes! We use enterprise-grade security with SOC 2 compliance and bank-level encryption."
            },
            {
              question: "Can I get a custom plan?",
              answer: "For Enterprise customers, we offer custom plans tailored to your specific needs. Contact our sales team."
            }
          ].map((faq, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-10 opacity-90 leading-relaxed">
            Join thousands of businesses that have transformed their operations with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-10 py-4 hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold"
              asChild
            >
              <Link to="/contact">Start Free Trial</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PricingPage;
