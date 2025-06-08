
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, User, Check } from "lucide-react";
import { Link } from "react-router-dom";

interface Room {
  id: number;
  name: string;
  type: string;
  capacity: number;
  pricePerNight: number;
  originalPrice?: number;
  images: string[];
  amenities: string[];
  description: string;
  available: boolean;
  rating: number;
  reviews: number;
}

interface RoomCardProps {
  room: Room;
  index?: number;
  selectedDates?: { checkIn: Date | null; checkOut: Date | null };
}

const RoomCard = ({ room, index = 0, selectedDates }: RoomCardProps) => {
  const calculateNights = () => {
    if (selectedDates?.checkIn && selectedDates?.checkOut) {
      const diffTime = Math.abs(selectedDates.checkOut.getTime() - selectedDates.checkIn.getTime());
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
    return 1;
  };

  const nights = calculateNights();
  const totalPrice = room.pricePerNight * nights;
  const savings = room.originalPrice ? (room.originalPrice - room.pricePerNight) * nights : 0;

  return (
    <Card
      className="group h-full bg-white shadow-lg border-0 transition-all duration-300 hover:shadow-2xl hover:scale-105 animate-fade-in overflow-hidden"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative">
        <img 
          src={room.images[0]} 
          alt={room.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge className="bg-primary/90 text-white">
            {room.type}
          </Badge>
          {savings > 0 && (
            <Badge variant="destructive" className="text-xs">
              Save ${savings}
            </Badge>
          )}
        </div>
        <div className="absolute top-4 right-4">
          <div className="bg-white/90 rounded-full px-2 py-1 flex items-center">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="text-sm font-medium">{room.rating}</span>
          </div>
        </div>
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold text-gray-900 line-clamp-2">
          {room.name}
        </CardTitle>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-600">
            <User className="w-4 h-4 mr-1" />
            <span className="text-sm">Up to {room.capacity} guests</span>
          </div>
          <span className="text-xs text-gray-500">{room.reviews} reviews</span>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{room.description}</p>
        
        <div className="mb-4">
          <h4 className="font-semibold text-sm text-gray-900 mb-2">Featured Amenities:</h4>
          <div className="flex flex-wrap gap-1">
            {room.amenities.slice(0, 3).map((amenity, idx) => (
              <span key={idx} className="flex items-center text-xs text-gray-600 bg-gray-100 rounded-full px-2 py-1">
                <Check className="w-3 h-3 mr-1" />
                {amenity}
              </span>
            ))}
            {room.amenities.length > 3 && (
              <span className="text-xs text-primary">+{room.amenities.length - 3} more</span>
            )}
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-gray-900">${room.pricePerNight}</span>
                {room.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">${room.originalPrice}</span>
                )}
              </div>
              <span className="text-sm text-gray-600">per night</span>
              {nights > 1 && (
                <div className="text-sm text-primary font-semibold">
                  Total: ${totalPrice} ({nights} nights)
                </div>
              )}
            </div>
          </div>

          <Button className="w-full bg-primary hover:bg-primary/90 transition-all duration-300" asChild>
            <Link to={`/room/${room.id}`}>
              Book Now
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RoomCard;
