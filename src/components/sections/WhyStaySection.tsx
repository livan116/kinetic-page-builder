
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Star, User, Clock } from "lucide-react";

const WhyStaySection = () => {
  const benefits = [
    {
      icon: Star,
      title: "Premium Service",
      description: "24/7 concierge service and personalized attention to every guest"
    },
    {
      icon: Check,
      title: "Best Price Guarantee",
      description: "We guarantee the lowest rates with our price match promise"
    },
    {
      icon: User,
      title: "Guest Satisfaction",
      description: "95% satisfaction rate with over 1000+ happy guests"
    },
    {
      icon: Clock,
      title: "Flexible Booking",
      description: "Free cancellation up to 24 hours before check-in"
    }
  ];

  return (
    <Section background="white">
      <SectionHeader
        title="Why Stay With Us"
        subtitle="Experience the difference with our exceptional hospitality and premium amenities"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit, index) => {
          const IconComponent = benefit.icon;
          return (
            <Card 
              key={benefit.title}
              className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};

export default WhyStaySection;
