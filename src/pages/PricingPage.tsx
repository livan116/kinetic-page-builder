
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Check, Star, Zap, Crown, Rocket } from "lucide-react";

const PricingPage = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [selectedPlan, setSelectedPlan] = useState<string>("professional");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const packages = [
    {
      id: "starter",
      name: "Starter",
      price: "$99",
      period: "month",
      description: "Perfect for small businesses getting started",
      icon: <Zap className="w-8 h-8" />,
      features: [
        "Up to 5 projects",
        "Basic analytics",
        "Email support",
        "Standard templates",
        "Mobile responsive design",
        "SSL certificate",
        "Basic SEO tools"
      ],
      popular: false,
      buttonText: "Start Free Trial",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: "professional",
      name: "Professional",
      price: "$199",
      period: "month",
      description: "Ideal for growing businesses that need more power",
      icon: <Star className="w-8 h-8" />,
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
      popular: true,
      buttonText: "Get Started",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "$399",
      period: "month",
      description: "For large organizations with complex needs",
      icon: <Crown className="w-8 h-8" />,
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
      popular: false,
      buttonText: "Contact Sales",
      color: "from-emerald-500 to-emerald-600"
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
      <section id="pricing" data-animate className={`py-24 bg-gray-50 transition-all duration-1000 ${isVisible.pricing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card 
                key={pkg.id} 
                className={`relative hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-xl animate-fade-in ${
                  pkg.popular ? 'ring-4 ring-primary/50 transform scale-110 lg:scale-110' : ''
                } ${selectedPlan === pkg.id ? 'ring-2 ring-primary' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedPlan(pkg.id)}
              >
                {pkg.popular && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center">
                      <Rocket className="w-4 h-4 mr-2" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pt-12 pb-8 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${pkg.color} opacity-5`}></div>
                  <div className={`w-16 h-16 bg-gradient-to-br ${pkg.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg`}>
                    {pkg.icon}
                  </div>
                  <CardTitle className="text-3xl font-bold mb-2">{pkg.name}</CardTitle>
                  <CardDescription className="text-base text-gray-600 mb-6">{pkg.description}</CardDescription>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-gray-600 ml-2 text-lg">/{pkg.period}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="px-8 pb-10">
                  <ul className="space-y-4 mb-10">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center animate-fade-in" style={{ animationDelay: `${(index * 0.1) + (idx * 0.05)}s` }}>
                        <div className={`w-5 h-5 bg-gradient-to-br ${pkg.color} rounded-full flex items-center justify-center mr-4 flex-shrink-0`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full hover:scale-105 transition-all duration-300 text-lg py-3 ${
                      pkg.popular 
                        ? `bg-gradient-to-r ${pkg.color} shadow-lg hover:shadow-xl` 
                        : 'bg-gray-900 hover:bg-gray-800'
                    }`}
                    variant={pkg.popular ? "default" : "outline"}
                    size="lg"
                    asChild
                  >
                    <Link to="/checkout">{pkg.buttonText}</Link>
                  </Button>
                  
                  {pkg.popular && (
                    <p className="text-center text-gray-600 text-sm mt-4">
                      🔥 Limited time: First month 50% off!
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section id="comparison" data-animate className={`py-24 bg-white transition-all duration-1000 ${isVisible.comparison ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Compare All Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See exactly what's included in each plan and choose the one that fits your needs.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 overflow-x-auto">
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
                  { feature: "API Access", starter: "❌", pro: "✅", enterprise: "✅" },
                  { feature: "White Label", starter: "❌", pro: "❌", enterprise: "✅" },
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
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" data-animate className={`py-24 bg-gray-50 transition-all duration-1000 ${isVisible.faq ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing and plans.
            </p>
          </div>
          
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
        </div>
      </section>

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
              <Link to="/checkout">Start Free Trial</Link>
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
