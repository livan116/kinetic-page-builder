
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const team = [
    { name: "John Doe", role: "CEO & Founder", bio: "Placeholder bio text" },
    { name: "Jane Smith", role: "CTO", bio: "Placeholder bio text" },
    { name: "Mike Johnson", role: "Head of Operations", bio: "Placeholder bio text" },
  ];

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Placeholder company story and mission statement. Replace with your actual company background, 
              values, and what makes your business unique.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <Card className="animate-fade-in hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Placeholder mission statement. Describe your company's purpose, 
                  what you aim to achieve, and how you serve your customers.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in hover:shadow-lg transition-all duration-300" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Placeholder vision statement. Share your long-term goals, 
                  aspirations, and the impact you want to make in your industry.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 animate-fade-in">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card 
                  key={member.name} 
                  className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-gray-500">Photo Placeholder</span>
                    </div>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription>{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gray-50 rounded-lg p-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Work With Us?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get in touch to learn more about our services or schedule a consultation.
            </p>
            <Button size="lg" asChild className="hover:scale-105 transition-transform duration-300">
              <Link to="/booking">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
