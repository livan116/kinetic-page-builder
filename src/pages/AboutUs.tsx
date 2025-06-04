
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Star, Shield, Users, Award, Target, TrendingUp } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

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

  const team = [
    { name: "John Doe", role: "CEO & Founder", bio: "Visionary leader with 15+ years transforming businesses through innovative strategies and cutting-edge technology solutions." },
    { name: "Jane Smith", role: "CTO", bio: "Tech pioneer specializing in scalable architectures and emerging technologies that drive digital transformation." },
    { name: "Mike Johnson", role: "Head of Operations", bio: "Operations expert focused on streamlining processes and delivering exceptional client experiences at scale." },
  ];

  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Strategic Consulting",
      description: "Comprehensive business strategy development and implementation guidance."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth Acceleration",
      description: "Data-driven approaches to scale your business and maximize market reach."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Development",
      description: "Leadership training and organizational development for high-performing teams."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies for sustainable growth."
    }
  ];

  const whyChooseUs = [
    {
      title: "Proven Track Record",
      description: "Over 500 successful projects delivered with 98% client satisfaction rate.",
      stat: "500+"
    },
    {
      title: "Expert Team",
      description: "Industry-leading professionals with decades of combined experience.",
      stat: "15+"
    },
    {
      title: "Global Reach",
      description: "Serving clients across 50+ countries with localized expertise.",
      stat: "50+"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support ensuring your business never stops growing.",
      stat: "24/7"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, InnovateNow",
      rating: 5,
      text: "Their strategic guidance transformed our company culture and tripled our revenue within 18 months.",
      image: "Customer Image 1"
    },
    {
      name: "Michael Rodriguez",
      role: "Founder, TechScale",
      rating: 5,
      text: "The most professional and results-driven team we've ever worked with. Exceeded every expectation.",
      image: "Customer Image 2"
    },
    {
      name: "Emma Thompson",
      role: "Director, GrowthLab",
      rating: 5,
      text: "Their innovative approach and deep industry knowledge helped us capture new markets successfully.",
      image: "Customer Image 3"
    },
    {
      name: "David Park",
      role: "VP, ScaleUp Inc",
      rating: 5,
      text: "Outstanding service delivery and measurable results. They truly understand business transformation.",
      image: "Customer Image 4"
    }
  ];

  const trustedBrands = [
    "TechGiant Corp", "Innovation Labs", "Global Dynamics", "Future Systems", 
    "Smart Solutions", "Digital Pioneer", "NextGen Technologies", "Elite Enterprises"
  ];

  const galleryImages = [
    { title: "Our Modern Office", description: "State-of-the-art workspace designed for collaboration" },
    { title: "Team Collaboration", description: "Our experts working together on client solutions" },
    { title: "Client Presentation", description: "Delivering strategic insights to key stakeholders" },
    { title: "Innovation Lab", description: "Where breakthrough ideas come to life" },
    { title: "Global Conference", description: "Speaking at international business summits" },
    { title: "Award Ceremony", description: "Recognition for excellence in business consulting" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
              About Our Story
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90 leading-relaxed">
              Empowering businesses worldwide with innovative solutions, strategic insights, and unwavering commitment to excellence since 2010.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" data-animate className={`py-24 bg-white transition-all duration-1000 ${isVisible.mission ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="animate-fade-in hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-xl">
              <CardHeader className="text-center pb-8">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-3xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To democratize business success by providing world-class consulting, innovative solutions, and strategic guidance that enables every organization to reach its full potential in the digital age.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-xl" style={{ animationDelay: "0.1s" }}>
              <CardHeader className="text-center pb-8">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-3xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To be the global leader in business transformation, creating a world where innovation thrives, sustainable growth is achievable, and every business can make a meaningful impact on society.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section id="services" data-animate className={`py-24 bg-gray-50 transition-all duration-1000 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions designed to address every aspect of your business transformation journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <div className="text-primary">{service.icon}</div>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose" data-animate className={`py-24 bg-white transition-all duration-1000 ${isVisible['why-choose'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the difference that expertise, dedication, and proven results can make for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg animate-fade-in text-center" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-4">
                  <div className="text-4xl font-bold text-primary mb-4">{item.stat}</div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" data-animate className={`py-24 bg-gray-50 transition-all duration-1000 ${isVisible.team ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Industry veterans and innovative thinkers united by a passion for driving business success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card 
                key={member.name} 
                className="text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/30 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-primary font-medium">Photo</span>
                  </div>
                  <CardTitle className="text-2xl">{member.name}</CardTitle>
                  <CardDescription className="text-lg text-primary">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" data-animate className={`py-24 bg-white transition-all duration-1000 ${isVisible.gallery ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Journey in Pictures</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A glimpse into our world, our culture, and the moments that define our commitment to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg animate-fade-in overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 font-medium">Gallery Image</span>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{image.title}</h3>
                  <p className="text-gray-600">{image.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section id="testimonials" data-animate className={`py-24 bg-gray-50 transition-all duration-1000 ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Client Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Hear directly from the leaders who have transformed their businesses with our partnership.
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
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
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

      {/* Trusted Brands Carousel */}
      <section id="brands" data-animate className={`py-24 bg-white transition-all duration-1000 ${isVisible.brands ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Proud to partner with innovative companies across diverse industries worldwide.
            </p>
          </div>
          
          <Carousel 
            className="w-full"
            plugins={[
              Autoplay({
                delay: 2500,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
            }}
          >
            <CarouselContent className="ml-4">
              {trustedBrands.map((brand, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/3 lg:basis-1/4">
                  <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                    <CardContent className="p-8">
                      <div className="w-full h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-gray-500 font-medium text-sm">Logo</span>
                      </div>
                      <h3 className="text-center font-semibold text-gray-800">{brand}</h3>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-5xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-10 opacity-90 leading-relaxed">
            Let's discuss how our expertise and proven methodologies can accelerate your business transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-10 py-4 hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold" asChild>
              <Link to="/booking">Book a Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
