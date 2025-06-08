
import Layout from "@/components/Layout";
import HeroSection from "@/components/sections/HeroSection";
import RoomListingSection from "@/components/sections/RoomListingSection";
import WhyStaySection from "@/components/sections/WhyStaySection";
import TestimonialsCarousel from "@/components/sections/TestimonialsCarousel";
import ContactSection from "@/components/sections/ContactSection";
import FAQSection from "@/components/common/faqSection";

const Index = () => {
  return (
    <Layout>
      <div className="space-y-0">
        <HeroSection />
        <RoomListingSection />
        <WhyStaySection />
        <TestimonialsCarousel />
        <ContactSection />
        <FAQSection />
      </div>
    </Layout>
  );
};

export default Index;
