
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import PricingCard from "@/components/common/PricingCard";
import Autoplay from "embla-carousel-autoplay";

const PricingCarousel = () => {
  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for small teams getting started",
      price: "$29",
      period: "/month",
      features: [
        "Up to 5 team members",
        "10GB storage",
        "Email support",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      price: "$99",
      period: "/month",
      features: [
        "Up to 25 team members",
        "100GB storage",
        "Priority support",
        "Advanced analytics",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations with advanced needs",
      price: "$299",
      period: "/month",
      features: [
        "Unlimited team members",
        "1TB storage",
        "24/7 dedicated support",
        "Advanced security",
        "Custom solutions",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  return (
    <Section id="pricing" background="gray">
      <SectionHeader 
        title="Choose Your Plan"
        subtitle="Select the perfect plan that fits your needs and budget. Upgrade or downgrade at any time."
      />
      
      <Carousel 
        className="w-full"
        plugins={[Autoplay({ delay: 4000 })]}
        opts={{ align: "center", loop: true }}
      >
        <CarouselContent className="ml-4">
          {pricingPlans.map((plan, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <PricingCard {...plan} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Section>
  );
};

export default PricingCarousel;
