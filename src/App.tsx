
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProductPage from "./pages/ProductPage";
import ShoppingCart from "./pages/ShoppingCart";
import Checkout from "./pages/Checkout";
import ThankYou from "./pages/ThankYou";
import UpsellFunnel from "./pages/UpsellFunnel";
import AboutUs from "./pages/AboutUs";
import BookingPage from "./pages/BookingPage";
import BookingSuccess from "./pages/BookingSuccess";
import ServicesPage from "./pages/ServicesPage";
import MembershipPage from "./pages/MembershipPage";
import ClassSchedule from "./pages/ClassSchedule";
import ContactUs from "./pages/ContactUs";
import FAQs from "./pages/FAQs";
import Testimonials from "./pages/Testimonials";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import PricingPage from "./pages/PricingPage";
import ProductDetail from "./pages/ProductDetail";
import OrderConfirmation from "./pages/OrderConfirmation";
import UserDashboard from "./pages/UserDashboard";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import RefundPolicy from "./pages/RefundPolicy";
import SpecialOffers from "./pages/SpecialOffers";
import HelpSupport from "./pages/HelpSupport";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/upsell" element={<UpsellFunnel />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/booking-success" element={<BookingSuccess />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/schedule" element={<ClassSchedule />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faq" element={<FAQs />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/offers" element={<SpecialOffers />} />
          <Route path="/help" element={<HelpSupport />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
