
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { Calendar as CalendarIcon, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

const BookingWidget = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>("");

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
      {/* Calendar Section */}
      <Card className="hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-xl bg-gradient-to-br from-white to-gray-50">
        <CardHeader className="text-center pb-6">
          <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <CalendarIcon className="w-10 h-10 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold">Select Date</CardTitle>
          <CardDescription className="text-lg">Choose your preferred appointment date</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center pb-8">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-xl border-0 shadow-inner bg-white/50"
            disabled={(date) => date < new Date()}
          />
        </CardContent>
      </Card>

      {/* Time Slots Section */}
      <Card className="hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-xl bg-gradient-to-br from-white to-gray-50">
        <CardHeader className="text-center pb-6">
          <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Clock className="w-10 h-10 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold">Select Time</CardTitle>
          <CardDescription className="text-lg">Available time slots for your appointment</CardDescription>
        </CardHeader>
        <CardContent className="pb-8">
          <div className="grid grid-cols-2 gap-4 mb-8">
            {timeSlots.map((time, index) => (
              <Button 
                key={time} 
                variant={selectedTime === time ? "default" : "outline"}
                size="lg"
                className="hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 py-3 text-base"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </Button>
            ))}
          </div>
          
          {selectedDate && (
            <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl animate-fade-in border border-primary/20">
              <h3 className="font-bold text-primary mb-4 flex items-center text-lg">
                <User className="w-5 h-5 mr-3" />
                Booking Summary
              </h3>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-center">
                  <CalendarIcon className="w-4 h-4 mr-3 text-primary" />
                  <span className="font-medium">Date:</span>
                  <span className="ml-2">{selectedDate.toDateString()}</span>
                </p>
                {selectedTime && (
                  <p className="flex items-center">
                    <Clock className="w-4 h-4 mr-3 text-primary" />
                    <span className="font-medium">Time:</span>
                    <span className="ml-2">{selectedTime}</span>
                  </p>
                )}
                <p className="flex items-center">
                  <User className="w-4 h-4 mr-3 text-primary" />
                  <span className="font-medium">Service:</span>
                  <span className="ml-2">Consultation (60 minutes)</span>
                </p>
                <div className="border-t border-primary/20 pt-3 mt-4">
                  <p className="flex justify-between items-center font-bold text-lg">
                    <span>Total:</span>
                    <span className="text-primary">$150</span>
                  </p>
                </div>
              </div>
            </div>
          )}
          
          <Button 
            className="w-full mt-8 hover:scale-105 transition-transform duration-300 shadow-lg bg-gradient-to-r from-primary to-primary/80" 
            size="lg"
            asChild
            disabled={!selectedDate || !selectedTime}
          >
            <Link to="/booking">Complete Booking</Link>
          </Button>
        </CardContent>
      </Card>

      {/* Features */}
      <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <div className="w-8 h-8 bg-green-500 rounded-full"></div>
          </div>
          <h3 className="font-bold text-gray-900 mb-3 text-lg">Easy Scheduling</h3>
          <p className="text-gray-600">Book appointments in just a few clicks with our intuitive interface</p>
        </div>
        <div className="text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
          </div>
          <h3 className="font-bold text-gray-900 mb-3 text-lg">Instant Confirmation</h3>
          <p className="text-gray-600">Receive immediate booking confirmation and calendar invites</p>
        </div>
        <div className="text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
          </div>
          <h3 className="font-bold text-gray-900 mb-3 text-lg">Flexible Rescheduling</h3>
          <p className="text-gray-600">Easy to reschedule or cancel if your plans change</p>
        </div>
      </div>
    </div>
  );
};

export default BookingWidget;
