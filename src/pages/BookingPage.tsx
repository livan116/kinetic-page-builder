
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { useState } from "react";
import { User, MapPin, Phone, Mail } from "lucide-react";
import BookingWidget from "@/components/BookingWidget";

const BookingPage = () => {
  const [selectedService, setSelectedService] = useState<string>("consultation");

  const services = [
    { id: "consultation", name: "Business Consultation", duration: "60 min", price: "$150" },
    { id: "strategy", name: "Strategy Session", duration: "90 min", price: "$250" },
    { id: "audit", name: "Business Audit", duration: "120 min", price: "$350" },
    { id: "workshop", name: "Team Workshop", duration: "180 min", price: "$500" },
  ];

  const selectedServiceDetails = services.find(s => s.id === selectedService);

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Schedule Your Success</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Book a personalized consultation with our expert team and take the first step towards transforming your business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Service Selection */}
            <Card className="animate-fade-in border-0 shadow-xl">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center text-2xl">
                  <User className="w-6 h-6 mr-3" />
                  Select Service
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {services.map((service, index) => (
                  <div 
                    key={service.id}
                    className={`p-6 border-2 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-lg animate-fade-in ${
                      selectedService === service.id ? 'border-primary bg-gradient-to-br from-primary/10 to-primary/5' : 'border-gray-200 hover:border-primary/50'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setSelectedService(service.id)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-2">{service.name}</h3>
                        <p className="text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                          Duration: {service.duration}
                        </p>
                      </div>
                      <span className="text-2xl font-bold text-primary">{service.price}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Booking Widget */}
            <div className="lg:col-span-2">
              <BookingWidget />
            </div>
          </div>

          {/* Booking Form */}
          <Card className="animate-fade-in border-0 shadow-xl" style={{ animationDelay: "0.3s" }}>
            <CardHeader className="text-center pb-8">
              <CardTitle className="flex items-center justify-center text-3xl mb-4">
                <Mail className="w-8 h-8 mr-3" />
                Your Information
              </CardTitle>
              <p className="text-gray-600 text-lg">Complete your booking details below</p>
            </CardHeader>
            <CardContent className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <Label htmlFor="firstName" className="text-base font-medium">First Name</Label>
                  <Input id="firstName" placeholder="John" className="mt-2 h-12" />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-base font-medium">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" className="mt-2 h-12" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <Label htmlFor="email" className="text-base font-medium">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="mt-2 h-12" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-base font-medium">Phone Number</Label>
                  <Input id="phone" placeholder="(555) 123-4567" className="mt-2 h-12" />
                </div>
              </div>
              <div className="mb-8">
                <Label htmlFor="company" className="text-base font-medium">Company Name (Optional)</Label>
                <Input id="company" placeholder="Your Company" className="mt-2 h-12" />
              </div>
              <div className="mb-10">
                <Label htmlFor="message" className="text-base font-medium">Additional Notes</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your business goals and what you'd like to achieve..." 
                  className="mt-2 min-h-[120px]"
                />
              </div>

              {/* Booking Summary */}
              {selectedServiceDetails && (
                <div className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl animate-fade-in border border-primary/20 mb-8">
                  <h3 className="font-bold text-primary mb-6 text-xl">Booking Summary</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <p className="flex items-center text-gray-700">
                        <User className="w-5 h-5 mr-3 text-primary" />
                        <span className="font-medium">Service:</span>
                        <span className="ml-2">{selectedServiceDetails.name}</span>
                      </p>
                      <p className="flex items-center text-gray-700">
                        <span className="w-5 h-5 mr-3 text-primary flex items-center justify-center">⏱️</span>
                        <span className="font-medium">Duration:</span>
                        <span className="ml-2">{selectedServiceDetails.duration}</span>
                      </p>
                    </div>
                    <div className="border-l border-primary/20 pl-6">
                      <p className="flex justify-between items-center font-bold text-xl">
                        <span>Total Amount:</span>
                        <span className="text-primary text-2xl">{selectedServiceDetails.price}</span>
                      </p>
                      <p className="text-gray-600 text-sm mt-2">No hidden fees • Cancel anytime</p>
                    </div>
                  </div>
                </div>
              )}

              <Button 
                className="w-full hover:scale-105 transition-transform duration-300 shadow-lg bg-gradient-to-r from-primary to-primary/80" 
                size="lg"
                asChild
              >
                <Link to="/booking-success">Confirm Booking</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Card className="text-center hover:shadow-xl transition-all duration-500 hover:scale-105 border-0 shadow-lg">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-bold mb-3 text-lg">Call Us</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
                <p className="text-gray-500 text-sm mt-2">Mon-Fri, 9AM-6PM EST</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-xl transition-all duration-500 hover:scale-105 border-0 shadow-lg">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold mb-3 text-lg">Email Us</h3>
                <p className="text-gray-600">hello@yourbrand.com</p>
                <p className="text-gray-500 text-sm mt-2">We respond within 24 hours</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-xl transition-all duration-500 hover:scale-105 border-0 shadow-lg">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-bold mb-3 text-lg">Visit Us</h3>
                <p className="text-gray-600">123 Business Street</p>
                <p className="text-gray-500 text-sm mt-2">New York, NY 10001</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookingPage;
