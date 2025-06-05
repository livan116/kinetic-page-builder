
import Layout from "@/components/Layout";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, User, Phone, Mail } from "lucide-react";

const BookingPage = () => {
  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const services = [
    { id: "consultation", name: "Business Consultation", duration: "60 min", price: "$150" },
    { id: "strategy", name: "Strategy Session", duration: "90 min", price: "$250" },
    { id: "workshop", name: "Team Workshop", duration: "3 hours", price: "$500" },
    { id: "analysis", name: "Business Analysis", duration: "2 hours", price: "$300" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
              Book Your Consultation
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90 leading-relaxed">
              Schedule a personalized session with our experts and take the first step towards transforming your business.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader 
            title="Schedule Your Appointment"
            subtitle="Fill out the form below and we'll get back to you within 24 hours to confirm your booking."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Booking Form */}
            <Card className="shadow-2xl border-0 animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Calendar className="w-6 h-6 mr-3 text-primary" />
                  Booking Details
                </CardTitle>
                <CardDescription>Please provide your information and preferred time.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.id} value={service.id}>
                          {service.name} - {service.duration} ({service.price})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input id="date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Preferred Time</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your business goals and what you'd like to discuss..."
                    rows={4}
                  />
                </div>

                <Button className="w-full hover:scale-105 transition-transform duration-300" size="lg">
                  Book Appointment
                </Button>
              </CardContent>
            </Card>

            {/* Services Info */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    Available Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {services.map((service) => (
                      <div key={service.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-semibold">{service.name}</h4>
                          <p className="text-gray-600 text-sm">{service.duration}</p>
                        </div>
                        <span className="font-bold text-primary">{service.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <User className="w-5 h-5 mr-2 text-primary" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-primary" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-primary" />
                    <span>booking@company.com</span>
                  </div>
                  <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Business Hours:</strong><br />
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default BookingPage;
