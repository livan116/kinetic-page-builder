
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Calendar as CalendarIcon, Clock, User, MapPin, Phone, Mail } from "lucide-react";

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedService, setSelectedService] = useState<string>("consultation");

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
  ];

  const services = [
    { id: "consultation", name: "Consultation", duration: "60 min", price: "$150" },
    { id: "service1", name: "Service Option 1", duration: "45 min", price: "$120" },
    { id: "service2", name: "Service Option 2", duration: "90 min", price: "$200" },
    { id: "service3", name: "Service Option 3", duration: "30 min", price: "$80" },
  ];

  const selectedServiceDetails = services.find(s => s.id === selectedService);

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Book Your Appointment</h1>
            <p className="text-xl text-gray-600">
              Schedule your consultation or service appointment with our expert team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Service Selection */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  Select Service
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {services.map((service, index) => (
                  <div 
                    key={service.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-all duration-300 hover:shadow-md animate-fade-in ${
                      selectedService === service.id ? 'border-primary bg-primary/5' : 'border-gray-200'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setSelectedService(service.id)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-900">{service.name}</h3>
                        <p className="text-sm text-gray-600 flex items-center mt-1">
                          <Clock className="w-4 h-4 mr-1" />
                          {service.duration}
                        </p>
                      </div>
                      <span className="text-lg font-bold text-primary">{service.price}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Calendar & Time Selection */}
            <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CalendarIcon className="w-5 h-5 mr-2" />
                  Select Date & Time
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label>Choose Date</Label>
                  <div className="mt-2 flex justify-center">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border"
                      disabled={(date) => date < new Date()}
                    />
                  </div>
                </div>
                
                {selectedDate && (
                  <div className="animate-fade-in">
                    <Label>Available Time Slots</Label>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {timeSlots.map((time, index) => (
                        <Button 
                          key={time} 
                          variant={selectedTime === time ? "default" : "outline"}
                          className="hover:scale-105 transition-all duration-300"
                          style={{ animationDelay: `${index * 0.05}s` }}
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Booking Form */}
            <Card className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="(555) 123-4567" />
                </div>
                <div>
                  <Label htmlFor="message">Additional Notes</Label>
                  <Textarea id="message" placeholder="Any specific requirements or questions..." />
                </div>

                {/* Booking Summary */}
                {selectedDate && selectedTime && selectedServiceDetails && (
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg animate-fade-in">
                    <h3 className="font-semibold text-primary mb-3">Booking Summary</h3>
                    <div className="space-y-2 text-sm">
                      <p className="flex items-center text-gray-700">
                        <User className="w-4 h-4 mr-2" />
                        Service: {selectedServiceDetails.name}
                      </p>
                      <p className="flex items-center text-gray-700">
                        <CalendarIcon className="w-4 h-4 mr-2" />
                        Date: {selectedDate.toDateString()}
                      </p>
                      <p className="flex items-center text-gray-700">
                        <Clock className="w-4 h-4 mr-2" />
                        Time: {selectedTime}
                      </p>
                      <p className="flex items-center text-gray-700">
                        <Clock className="w-4 h-4 mr-2" />
                        Duration: {selectedServiceDetails.duration}
                      </p>
                      <div className="border-t pt-2 mt-2">
                        <p className="flex justify-between items-center font-semibold">
                          <span>Total:</span>
                          <span className="text-primary">{selectedServiceDetails.price}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <Button 
                  className="w-full mt-6 hover:scale-105 transition-transform duration-300" 
                  size="lg"
                  asChild
                  disabled={!selectedDate || !selectedTime}
                >
                  <Link to="/booking-success">Confirm Booking</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600">hello@yourbrand.com</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-600">123 Business Street, City</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookingPage;
