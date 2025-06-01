
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

const BookingPage = () => {
  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
  ];

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Book an Appointment</h1>
            <p className="text-xl text-gray-600">
              Schedule your consultation or service appointment with our team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>Booking Information</CardTitle>
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
                  <Label htmlFor="service">Service Type</Label>
                  <select className="w-full p-2 border border-gray-300 rounded-md">
                    <option>Consultation</option>
                    <option>Service Option 1</option>
                    <option>Service Option 2</option>
                    <option>Service Option 3</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="message">Additional Notes</Label>
                  <Textarea id="message" placeholder="Any specific requirements or questions..." />
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle>Select Date & Time</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="date">Preferred Date</Label>
                  <Input id="date" type="date" />
                </div>
                <div>
                  <Label>Available Time Slots</Label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {timeSlots.map((time, index) => (
                      <Button 
                        key={time} 
                        variant="outline" 
                        className="hover:bg-primary hover:text-white transition-all duration-300"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Booking Summary</h3>
                  <p className="text-blue-700 text-sm">Selected service: Consultation</p>
                  <p className="text-blue-700 text-sm">Duration: 60 minutes</p>
                  <p className="text-blue-700 text-sm">Price: $150</p>
                </div>
                <Button className="w-full mt-6 hover:scale-105 transition-transform duration-300" asChild>
                  <Link to="/booking-success">Confirm Booking</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookingPage;
