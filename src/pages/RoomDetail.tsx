
import Layout from "@/components/Layout";
import Section from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useParams } from "react-router-dom";
import { Star, User, Check, Calendar, ArrowLeft } from "lucide-react";
import DateRangePicker from "@/components/common/DateRangePicker";
import { useState } from "react";

const RoomDetail = () => {
  const { id } = useParams();
  const [selectedDates, setSelectedDates] = useState({ checkIn: null, checkOut: null });

  // Mock room data - in real app this would come from API
  const room = {
    id: parseInt(id || "1"),
    name: "Deluxe Ocean View Suite",
    type: "Suite",
    capacity: 2,
    pricePerNight: 299,
    originalPrice: 349,
    images: [
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop"
    ],
    amenities: [
      "Ocean View", "King Size Bed", "Mini Bar", "WiFi", "Room Service",
      "Air Conditioning", "Flat Screen TV", "Private Balcony", "Safe Box", "Coffee Machine"
    ],
    description: "Experience luxury at its finest in our Deluxe Ocean View Suite. This spacious accommodation features floor-to-ceiling windows showcasing breathtaking ocean views, premium furnishings, and modern amenities designed for the discerning traveler.",
    available: true,
    rating: 4.9,
    reviews: 128,
    size: "45 sqm",
    bedType: "King Bed",
    maxOccupancy: "2 Adults"
  };

  const calculateTotal = () => {
    if (selectedDates.checkIn && selectedDates.checkOut) {
      const diffTime = Math.abs(selectedDates.checkOut.getTime() - selectedDates.checkIn.getTime());
      const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return { nights, total: room.pricePerNight * nights };
    }
    return { nights: 1, total: room.pricePerNight };
  };

  const { nights, total } = calculateTotal();

  return (
    <Layout>
      <Section background="white">
        <div className="mb-6">
          <Button variant="outline" asChild>
            <Link to="/" className="flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Rooms
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Room Images */}
          <div className="animate-fade-in">
            <img 
              src={room.images[0]} 
              alt={room.name}
              className="w-full h-96 object-cover rounded-xl mb-4 shadow-lg"
            />
            <div className="grid grid-cols-4 gap-4">
              {room.images.slice(1).map((img, idx) => (
                <img 
                  key={idx}
                  src={img}
                  alt={`${room.name} ${idx + 2}`}
                  className="w-full h-20 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 shadow-md"
                />
              ))}
            </div>
          </div>

          {/* Room Details */}
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="outline">{room.type}</Badge>
              <div className="flex items-center">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                <span className="text-sm text-gray-600">{room.rating} ({room.reviews} reviews)</span>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{room.name}</h1>
            
            <div className="flex items-center space-x-4 mb-6 text-gray-600">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                <span>Up to {room.capacity} guests</span>
              </div>
              <span>•</span>
              <span>{room.size}</span>
              <span>•</span>
              <span>{room.bedType}</span>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <div className="text-3xl font-bold text-primary">${room.pricePerNight}</div>
              {room.originalPrice && (
                <div className="text-xl text-gray-500 line-through">${room.originalPrice}</div>
              )}
              <span className="text-gray-600">per night</span>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">{room.description}</p>

            <div className="space-y-4 mb-8">
              <h3 className="text-lg font-semibold">Room Amenities</h3>
              <div className="grid grid-cols-2 gap-2">
                {room.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center">
                    <Check className="w-4 h-4 text-primary mr-2" />
                    <span className="text-sm text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Booking Section */}
        <div className="bg-gray-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Book Your Stay</h2>
          
          <DateRangePicker 
            selectedDates={selectedDates}
            onDatesChange={setSelectedDates}
          />
          
          {selectedDates.checkIn && selectedDates.checkOut && (
            <Card className="mt-6 max-w-md mx-auto">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Booking Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Room:</span>
                    <span className="font-medium">{room.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Nights:</span>
                    <span className="font-medium">{nights}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rate per night:</span>
                    <span className="font-medium">${room.pricePerNight}</span>
                  </div>
                  <hr />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span className="text-primary">${total}</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90" asChild>
                  <Link to={`/booking?room=${room.id}&checkIn=${selectedDates.checkIn?.toISOString()}&checkOut=${selectedDates.checkOut?.toISOString()}`}>
                    <Calendar className="w-4 h-4 mr-2" />
                    Reserve Now
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </Section>
    </Layout>
  );
};

export default RoomDetail;
