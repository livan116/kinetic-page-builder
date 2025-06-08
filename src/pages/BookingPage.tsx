
import Layout from "@/components/Layout";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, User, Phone, Mail, CreditCard } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const BookingPage = () => {
  const [searchParams] = useSearchParams();
  const [paymentType, setPaymentType] = useState("full");
  const [promoCode, setPromoCode] = useState("");
  
  // Get booking details from URL params
  const roomId = searchParams.get("room");
  const checkIn = searchParams.get("checkIn");
  const checkOut = searchParams.get("checkOut");

  // Mock room data based on ID
  const room = {
    id: roomId || "1",
    name: "Deluxe Ocean View Suite",
    pricePerNight: 299,
    nights: checkIn && checkOut ? Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24)) : 1
  };

  const subtotal = room.pricePerNight * room.nights;
  const taxes = Math.round(subtotal * 0.12);
  const total = subtotal + taxes;
  const depositAmount = Math.round(total * 0.3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
              Complete Your Reservation
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90 leading-relaxed">
              Just a few more details and your perfect stay awaits!
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-2xl border-0 animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <User className="w-6 h-6 mr-3 text-primary" />
                    Guest Information
                  </CardTitle>
                  <CardDescription>Please provide your details for the reservation.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="guests">Number of Guests</Label>
                    <Select defaultValue="2">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Guest</SelectItem>
                        <SelectItem value="2">2 Guests</SelectItem>
                        <SelectItem value="3">3 Guests</SelectItem>
                        <SelectItem value="4">4 Guests</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="requests">Special Requests</Label>
                    <Textarea 
                      id="requests" 
                      placeholder="Any special requests or dietary requirements..."
                      rows={3}
                    />
                  </div>

                  <Separator />

                  {/* Payment Options */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center">
                      <CreditCard className="w-5 h-5 mr-2 text-primary" />
                      Payment Options
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <input 
                          type="radio" 
                          id="full-payment" 
                          name="payment" 
                          value="full"
                          checked={paymentType === "full"}
                          onChange={(e) => setPaymentType(e.target.value)}
                          className="text-primary"
                        />
                        <label htmlFor="full-payment" className="font-medium">
                          Pay Full Amount (${total})
                        </label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <input 
                          type="radio" 
                          id="deposit-payment" 
                          name="payment" 
                          value="deposit"
                          checked={paymentType === "deposit"}
                          onChange={(e) => setPaymentType(e.target.value)}
                          className="text-primary"
                        />
                        <label htmlFor="deposit-payment" className="font-medium">
                          Pay Deposit Only (${depositAmount}) - Pay remaining at check-in
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Promo Code */}
                  <div className="space-y-2">
                    <Label htmlFor="promo">Promo Code (Optional)</Label>
                    <div className="flex gap-2">
                      <Input 
                        id="promo" 
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Enter promo code" 
                      />
                      <Button variant="outline">Apply</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Summary */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <Card className="shadow-lg border-0 sticky top-6">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-primary" />
                    Booking Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Room:</span>
                      <span className="text-sm text-right">{room.name}</span>
                    </div>
                    
                    {checkIn && checkOut && (
                      <>
                        <div className="flex justify-between">
                          <span className="font-medium">Check-in:</span>
                          <span>{new Date(checkIn).toLocaleDateString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Check-out:</span>
                          <span>{new Date(checkOut).toLocaleDateString()}</span>
                        </div>
                      </>
                    )}
                    
                    <div className="flex justify-between">
                      <span className="font-medium">Nights:</span>
                      <span>{room.nights}</span>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between">
                      <span>Room rate (${room.pricePerNight}/night):</span>
                      <span>${subtotal}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span>Taxes & Fees:</span>
                      <span>${taxes}</span>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total:</span>
                      <span className="text-primary">${total}</span>
                    </div>
                    
                    {paymentType === "deposit" && (
                      <>
                        <Separator />
                        <div className="flex justify-between font-semibold text-primary">
                          <span>Amount Due Today:</span>
                          <span>${depositAmount}</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>Remaining at Check-in:</span>
                          <span>${total - depositAmount}</span>
                        </div>
                      </>
                    )}
                  </div>

                  <Button className="w-full mt-6 bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300">
                    Complete Reservation
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-primary" />
                    Need Help?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-3 text-primary" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-3 text-primary" />
                    <span>reservations@hotel.com</span>
                  </div>
                  <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Cancellation Policy:</strong><br />
                      Free cancellation up to 24 hours before check-in. After that, one night's stay will be charged.
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
