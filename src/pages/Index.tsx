
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState({});

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

  const services = [
    { title: "Service 1", description: "Placeholder description for your first service offering", price: "$99" },
    { title: "Service 2", description: "Placeholder description for your second service offering", price: "$149" },
    { title: "Service 3", description: "Placeholder description for your third service offering", price: "$199" },
    { title: "Service 4", description: "Placeholder description for your fourth service offering", price: "$249" },
  ];

  const testimonials = [
    { name: "Sarah Johnson", role: "Business Owner", rating: 5, text: "Amazing service! Highly recommend to everyone." },
    { name: "Michael Chen", role: "Entrepreneur", rating: 5, text: "Professional and reliable. Exceeded my expectations." },
    { name: "Emily Davis", role: "Freelancer", rating: 5, text: "Outstanding quality and customer service." },
    { name: "David Wilson", role: "Startup Founder", rating: 5, text: "Best decision I made for my business." },
  ];

  const blogPosts = [
    { id: 1, title: "Blog Post Title 1", excerpt: "This is a brief excerpt of the first blog post...", date: "2024-01-15", category: "Business" },
    { id: 2, title: "Blog Post Title 2", excerpt: "This is a brief excerpt of the second blog post...", date: "2024-01-10", category: "Technology" },
    { id: 3, title: "Blog Post Title 3", excerpt: "This is a brief excerpt of the third blog post...", date: "2024-01-05", category: "Marketing" },
    { id: 4, title: "Blog Post Title 4", excerpt: "This is a brief excerpt of the fourth blog post...", date: "2024-01-01", category: "Design" },
  ];

  const pricingPlans = [
    { name: "Basic", price: "$29", features: ["Feature 1", "Feature 2", "Feature 3"] },
    { name: "Pro", price: "$59", features: ["All Basic features", "Advanced Feature 1", "Advanced Feature 2"] },
    { name: "Enterprise", price: "$99", features: ["All Pro features", "Premium Feature 1", "Premium Feature 2"] },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-scale-in">
              Welcome to <span className="text-yellow-300">YourBrand</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Your tagline goes here. This is a placeholder for your main value proposition and brand message.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg px-8 py-3 hover:scale-105 transition-transform duration-300"
                asChild
              >
                <Link to="/products">Explore Products</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-3 text-white border-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" data-animate className={`py-20 bg-white transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Our Company</h2>
              <p className="text-xl text-gray-600 mb-6">
                Placeholder text about your company's mission, vision, and values. Replace this with compelling content about what makes your business unique and why customers should choose you.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Additional paragraph about your company's history, achievements, or unique selling propositions. This helps build trust and credibility with your audience.
              </p>
              <Button asChild className="hover:scale-105 transition-transform duration-300">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-lg">About Us Image Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" data-animate className={`py-20 bg-gray-50 transition-all duration-1000 ${isVisible.mission ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-lg">Mission Image Placeholder</span>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission & Vision</h2>
              <p className="text-xl text-gray-600 mb-6">
                Placeholder text describing your company's mission and long-term vision. This section should inspire confidence and show your commitment to your customers and industry.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Additional content about your core values, commitment to quality, and how you plan to make a positive impact in your industry or community.
              </p>
              <Button variant="outline" asChild className="hover:scale-105 transition-transform duration-300">
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Carousel */}
      <section id="services" data-animate className={`py-20 bg-white transition-all duration-1000 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our range of professional services designed to meet your needs.
            </p>
          </div>
          
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <CardHeader>
                      <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                        <span className="text-gray-500">Service Image</span>
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-primary">{service.price}</span>
                        <Button size="sm">Learn More</Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section id="testimonials" data-animate className={`py-20 bg-gray-50 transition-all duration-1000 ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say.
            </p>
          </div>
          
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-gray-500 text-sm">IMG</span>
                        </div>
                        <div>
                          <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                          <CardDescription>{testimonial.role}</CardDescription>
                        </div>
                      </div>
                      <div className="flex space-x-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-lg">★</span>
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 italic">"{testimonial.text}"</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Pricing Carousel */}
      <section id="pricing" data-animate className={`py-20 bg-white transition-all duration-1000 ${isVisible.pricing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that's right for you. No hidden fees, no surprises.
            </p>
          </div>
          
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {pricingPlans.map((plan, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <div className="mt-4">
                        <span className="text-4xl font-bold text-primary">{plan.price}</span>
                        <span className="text-gray-600">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full">Choose Plan</Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Blog Carousel */}
      <section id="blog" data-animate className={`py-20 bg-gray-50 transition-all duration-1000 ${isVisible.blog ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest from Our Blog</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest insights, tips, and industry news.
            </p>
          </div>
          
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {blogPosts.map((post, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <CardHeader>
                      <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                        <span className="text-gray-500">Blog Image</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs mr-2">
                          {post.category}
                        </span>
                        <span>{post.date}</span>
                      </div>
                      <CardTitle className="text-xl">{post.title}</CardTitle>
                      <CardDescription>{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" size="sm" asChild>
                        <Link to={`/blog/${post.id}`}>Read More</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" data-animate className={`py-20 bg-primary text-white transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-xl mb-8 opacity-90">
                Ready to get started? Contact us today and let's discuss how we can help you achieve your goals.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-white/20 rounded mr-4"></div>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-white/20 rounded mr-4"></div>
                  <span>hello@yourbrand.com</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-white/20 rounded mr-4"></div>
                  <span>123 Business Street, City, State 12345</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                  ></textarea>
                </div>
                <Button 
                  type="submit" 
                  variant="secondary" 
                  className="w-full hover:scale-105 transition-transform duration-300"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
            Join thousands of satisfied customers who have transformed their business with our solutions.
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-3 hover:scale-105 transition-transform duration-300"
            asChild
          >
            <Link to="/booking">Book Now</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
