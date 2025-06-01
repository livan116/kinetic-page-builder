
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const PricingPage = () => {
  const packages = [
    {
      name: "Starter",
      price: "$99",
      period: "one-time",
      description: "Perfect for small projects",
      features: [
        "Feature 1 included",
        "Feature 2 included", 
        "Feature 3 included",
        "Email support",
        "Basic documentation"
      ],
      popular: false,
      buttonText: "Get Started"
    },
    {
      name: "Professional",
      price: "$299",
      period: "one-time",
      description: "Great for growing businesses",
      features: [
        "All Starter features",
        "Advanced Feature 1",
        "Advanced Feature 2",
        "Priority support",
        "Advanced documentation",
        "Phone support"
      ],
      popular: true,
      buttonText: "Choose Pro"
    },
    {
      name: "Enterprise",
      price: "$599",
      period: "one-time",
      description: "For large organizations",
      features: [
        "All Professional features",
        "Enterprise Feature 1",
        "Enterprise Feature 2",
        "24/7 dedicated support",
        "Custom training",
        "Account manager"
      ],
      popular: false,
      buttonText: "Contact Sales"
    }
  ];

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the package that best fits your needs. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <Card 
                key={pkg.name} 
                className={`relative hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in ${
                  pkg.popular ? 'border-2 border-primary transform scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-gray-600 ml-1">/{pkg.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full hover:scale-105 transition-transform duration-300 ${
                      pkg.popular ? 'bg-primary' : ''
                    }`}
                    variant={pkg.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link to="/checkout">{pkg.buttonText}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="bg-gray-50 rounded-lg p-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Pricing FAQ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer refunds?</h3>
                <p className="text-gray-600">Yes, we offer a 30-day money-back guarantee on all packages.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I upgrade later?</h3>
                <p className="text-gray-600">Absolutely! You can upgrade your package at any time.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Is support included?</h3>
                <p className="text-gray-600">Yes, all packages include support with varying response times.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Any setup fees?</h3>
                <p className="text-gray-600">No setup fees. The price you see is the price you pay.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need a custom solution?</h2>
            <p className="text-gray-600 mb-6">Contact our sales team for enterprise pricing and custom packages.</p>
            <Button size="lg" variant="outline" asChild className="hover:scale-105 transition-transform duration-300">
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PricingPage;
