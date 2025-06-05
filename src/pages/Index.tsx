
import Layout from "@/components/Layout";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import MissionSection from "@/components/sections/MissionSection";
import ServicesCarousel from "@/components/sections/ServicesCarousel";
import TestimonialsCarousel from "@/components/sections/TestimonialsCarousel";
import PricingCarousel from "@/components/sections/PricingCarousel";
import BlogCarousel from "@/components/sections/BlogCarousel";
import ContactSection from "@/components/sections/ContactSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <ServicesCarousel />
      <TestimonialsCarousel />
      <PricingCarousel />
      <BlogCarousel />
      <ContactSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
