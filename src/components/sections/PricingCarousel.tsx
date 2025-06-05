
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import PricingCard from "@/components/common/PricingCard";
import Autoplay from "embla-carousel-autoplay";

const PricingCarousel = () => {
  const pricingPlans = [
    { name: "Starter", price: "$99", period: "month", features: ["5 Projects", "Basic Support", "Standard Templates", "Email Integration"], popular: false },
    { name: "Professional", price: "$199", period: "month", features: ["Unlimited Projects", "Priority Support", "Premium Templates", "Advanced Analytics"], popular: true },
    { name: "Enterprise", price: "$399", period: "month", features: ["Custom Solutions", "24/7 Support", "White-label Options", "Dedicated Manager"], popular: false },
  ];

  return (
    <Section id="pricing" background="white">
      <SectionHeader 
        title="Flexible Pricing Plans"
        subtitle="Choose the perfect plan that scales with your business growth and ambitions."
      />
      
      <Carousel 
        className="w-full"
        plugins={[Autoplay({ delay: 5000 })]}
        opts={{ align: "start", loop: true, dragFree: true }}
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
