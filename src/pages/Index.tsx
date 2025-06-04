import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BookingWidget from "@/components/BookingWidget";
import Autoplay from "embla-carousel-autoplay";

const Index = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [counters, setCounters] = useState({ clients: 0, successRate: 0, support: 0, countries: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
            
            // Start counter animation when hero section is visible
            if (entry.target.id === 'hero-stats') {
              animateCounters();
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const targets = { clients: 500, successRate: 98, support: 24, countries: 50 };
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 FPS
    const increment = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounters({
        clients: Math.floor(targets.clients * progress),
        successRate: Math.floor(targets.successRate * progress),
        support: Math.floor(targets.support * progress),
        countries: Math.floor(targets.countries * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, increment);
  };

  const services = [
    { title: "Premium Consulting", description: "Expert business consulting services to accelerate your growth", price: "$299", image: "Service Image 1" },
    { title: "Digital Strategy", description: "Comprehensive digital transformation strategies", price: "$449", image: "Service Image 2" },
    { title: "Brand Development", description: "Complete brand identity and positioning services", price: "$599", image: "Service Image 3" },
    { title: "Marketing Automation", description: "Advanced marketing automation and analytics", price: "$349", image: "Service Image 4" },
  ];

  const testimonials = [
    { name: "Sarah Johnson", role: "CEO, TechStart", rating: 5, text: "Absolutely transformed our business operations. The results exceeded all expectations!", image: "Customer Image 1" },
    { name: "Michael Chen", role: "Founder, InnovateCorp", rating: 5, text: "Professional, reliable, and incredibly effective. Highly recommend to any business owner.", image: "Customer Image 2" },
    { name: "Emily Davis", role: "Director, GrowthLabs", rating: 5, text: "Outstanding service quality and customer support. They truly care about your success.", image: "Customer Image 3" },
    { name: "David Wilson", role: "Manager, ScaleUp", rating: 5, text: "Best investment we made for our company. The ROI was immediate and substantial.", image: "Customer Image 4" },
  ];

  const blogPosts = [
    { id: 1, title: "10 Strategies to Scale Your Business in 2024", excerpt: "Discover proven methods to accelerate growth and expand your market reach...", date: "2024-01-15", category: "Business Growth", readTime: "5 min read" },
    { id: 2, title: "The Future of Digital Transformation", excerpt: "How emerging technologies are reshaping industries and creating new opportunities...", date: "2024-01-10", category: "Technology", readTime: "7 min read" },
    { id: 3, title: "Building a Customer-Centric Brand", excerpt: "Learn how to create authentic connections with your audience and build loyalty...", date: "2024-01-05", category: "Branding", readTime: "6 min read" },
    { id: 4, title: "Data-Driven Marketing Success", excerpt: "Leverage analytics and insights to optimize your marketing performance...", date: "2024-01-01", category: "Marketing", readTime: "8 min read" },
  ];

  const pricingPlans = [
    { name: "Starter", price: "$99", period: "month", features: ["5 Projects", "Basic Support", "Standard Templates", "Email Integration"], popular: false },
    { name: "Professional", price: "$199", period: "month", features: ["Unlimited Projects", "Priority Support", "Premium Templates", "Advanced Analytics"], popular: true },
    { name: "Enterprise", price: "$399", period: "month", features: ["Custom Solutions", "24/7 Support", "White-label Options", "Dedicated Manager"], popular: false },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-scale-in bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
              Transform Your <span className="text-yellow-300">Vision</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed">
              Unlock your business potential with our cutting-edge solutions, expert guidance, and innovative strategies that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg px-10 py-4 hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-yellow-300/25 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold"
                asChild
              >
                <Link to="/products">Start Your Journey</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-10 py-4 text-white border-2 border-white/50 hover:bg-white/20 hover:border-white hover:scale-110 transition-all duration-300 backdrop-blur-sm"
                asChild
              >
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
            
            {/* Stats */}
            <div id="hero-stats" data-animate className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center animate-fade-in">
                <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">{counters.clients}+</div>
                <div className="text-white/80">Happy Clients</div>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">{counters.successRate}%</div>
                <div className="text-white/80">Success Rate</div>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">{counters.support}/7</div>
                <div className="text-white/80">Support</div>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">{counters.countries}+</div>
                <div className="text-white/80">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" data-animate className={`py-24 bg-white transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">Pioneering Excellence in <span className="text-primary">Innovation</span></h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                With over a decade of experience, we've transformed thousands of businesses through cutting-edge solutions, strategic insights, and unwavering commitment to excellence.
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Our team of world-class experts brings together diverse perspectives and deep industry knowledge to deliver results that exceed expectations and drive sustainable growth.
              </p>
              <Button size="lg" asChild className="hover:scale-105 transition-transform duration-300 shadow-lg">
                <Link to="/about">Discover Our Story</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="w-full h-[500px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-2xl flex items-center justify-center hover:scale-105 transition-transform duration-500">
                <span className="text-gray-500 text-xl">About Us Visual</span>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" data-animate className={`py-24 bg-gradient-to-br from-gray-50 to-gray-100 transition-all duration-1000 ${isVisible.mission ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="w-full h-[500px] bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl shadow-2xl flex items-center justify-center hover:scale-105 transition-transform duration-500">
                <span className="text-primary text-xl font-medium">Mission Visual</span>
              </div>
              <div className="absolute -top-8 -left-8 w-20 h-20 bg-yellow-400 rounded-full animate-bounce"></div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">Empowering Your <span className="text-primary">Future</span></h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our mission is to democratize success by providing world-class tools, strategies, and support that enable every business to reach its full potential in the digital age.
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                We believe in the power of innovation, the strength of collaboration, and the importance of sustainable growth that benefits not just businesses, but entire communities.
              </p>
              <Button variant="outline" size="lg" asChild className="hover:scale-105 transition-transform duration-300 shadow-lg">
                <Link to="/about">Our Vision</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Carousel */}
      <section id="services" data-animate className={`py-24 bg-white transition-all duration-1000 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Premium Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions designed to accelerate your growth and maximize your potential.
            </p>
          </div>
          
          <Carousel 
            className="w-full"
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
            }}
          >
            <CarouselContent className="ml-4">
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg">
                    <CardHeader className="pb-4">
                      <div className="w-full h-56 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl mb-6 flex items-center justify-center">
                        <span className="text-primary font-medium">{service.image}</span>
                      </div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <span className="text-3xl font-bold text-primary">{service.price}</span>
                        <Button size="lg" className="hover:scale-110 transition-transform duration-300">Learn More</Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" data-animate className={`py-24 bg-gradient-to-br from-primary/5 to-primary/10 transition-all duration-1000 ${isVisible.booking ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Schedule Your Success</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Book a personalized consultation with our experts and take the first step towards transforming your business.
            </p>
          </div>
          
          <BookingWidget />
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section id="testimonials" data-animate className={`py-24 bg-gray-50 transition-all duration-1000 ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Hear from the industry leaders who have transformed their businesses with our solutions.
            </p>
          </div>
          
          <Carousel 
            className="w-full"
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
            }}
          >
            <CarouselContent className="ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2">
                  <Card className="hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg h-full">
                    <CardHeader className="pb-6">
                      <div className="flex items-center space-x-6 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/30 rounded-full flex items-center justify-center">
                          <span className="text-primary text-sm font-medium">IMG</span>
                        </div>
                        <div>
                          <CardTitle className="text-xl">{testimonial.name}</CardTitle>
                          <CardDescription className="text-base">{testimonial.role}</CardDescription>
                        </div>
                      </div>
                      <div className="flex space-x-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-xl">★</span>
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 italic text-lg leading-relaxed">"{testimonial.text}"</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* Pricing Carousel */}
      <section id="pricing" data-animate className={`py-24 bg-white transition-all duration-1000 ${isVisible.pricing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Flexible Pricing Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect plan that scales with your business growth and ambitions.
            </p>
          </div>
          
          <Carousel 
            className="w-full"
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
            }}
          >
            <CarouselContent className="ml-4">
              {pricingPlans.map((plan, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className={`hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg relative py-8 ${
                    plan.popular ? 'ring-2 ring-primary bg-gradient-to-br from-primary/5 to-primary/10' : ''
                  }`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <CardHeader className="text-center pt-10 pb-6">
                      <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                      <div className="mb-6">
                        <span className="text-5xl font-bold text-primary">{plan.price}</span>
                        <span className="text-gray-600 ml-2">/{plan.period}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="px-8 pb-8">
                      <ul className="space-y-4 mb-8">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-4"></div>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button 
                        className={`w-full hover:scale-105 transition-transform duration-300 ${
                          plan.popular ? 'bg-primary shadow-lg' : ''
                        }`}
                        variant={plan.popular ? "default" : "outline"}
                        size="lg"
                      >
                        Get Started
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* Blog Carousel */}
      <section id="blog" data-animate className={`py-24 bg-gray-50 transition-all duration-1000 ${isVisible.blog ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Latest Insights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay ahead with expert insights, industry trends, and actionable strategies.
            </p>
          </div>
          
          <Carousel 
            className="w-full"
            plugins={[
              Autoplay({
                delay: 4500,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
            }}
          >
            <CarouselContent className="ml-4">
              {blogPosts.map((post, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg h-full">
                    <CardHeader className="pb-4">
                      <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-6 flex items-center justify-center">
                        <span className="text-gray-500">Blog Image</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs mr-3">
                          {post.category}
                        </span>
                        <span>{post.readTime}</span>
                      </div>
                      <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">{post.date}</span>
                        <Button variant="outline" size="sm" asChild className="hover:scale-110 transition-transform duration-300">
                          <Link to={`/blog/${post.id}`}>Read More</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" data-animate className={`py-24 bg-gradient-to-br from-primary to-primary/90 text-white transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8">Ready to Get Started?</h2>
              <p className="text-xl mb-10 opacity-90 leading-relaxed">
                Let's discuss how we can transform your business with our proven strategies and cutting-edge solutions.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-6">
                    <span className="text-white text-lg">📞</span>
                  </div>
                  <div>
                    <div className="font-semibold">Call Us</div>
                    <span className="opacity-90">+1 (555) 123-4567</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-6">
                    <span className="text-white text-lg">✉️</span>
                  </div>
                  <div>
                    <div className="font-semibold">Email Us</div>
                    <span className="opacity-90">hello@yourbrand.com</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-6">
                    <span className="text-white text-lg">📍</span>
                  </div>
                  <div>
                    <div className="font-semibold">Visit Us</div>
                    <span className="opacity-90">123 Business Street, City, State 12345</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-10 shadow-2xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    className="w-full px-6 py-4 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    className="w-full px-6 py-4 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-6 py-4 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                />
                <textarea 
                  placeholder="Tell us about your project..." 
                  rows={4}
                  className="w-full px-6 py-4 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50 resize-none transition-all duration-300"
                ></textarea>
                <Button 
                  type="submit" 
                  variant="secondary" 
                  size="lg"
                  className="w-full hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold py-4 text-lg"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-5xl font-bold mb-8 text-gray-900">Transform Your Business Today</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-gray-600 leading-relaxed">
            Join thousands of successful businesses who have accelerated their growth with our proven solutions and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-10 py-4 hover:scale-105 transition-transform duration-300 shadow-lg bg-gradient-to-r from-primary to-primary/80"
              asChild
            >
              <Link to="/booking">Book Free Consultation</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-10 py-4 hover:scale-105 transition-transform duration-300 shadow-lg"
              asChild
            >
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
