
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import RoomCard from "@/components/common/RoomCard";
import DateRangePicker from "@/components/common/DateRangePicker";
import { useState } from "react";

const RoomListingSection = () => {
  const [selectedDates, setSelectedDates] = useState({ checkIn: null, checkOut: null });

  const rooms = [
    {
      id: 1,
      name: "Deluxe Ocean View Suite",
      type: "Suite",
      capacity: 2,
      pricePerNight: 299,
      originalPrice: 349,
      images: ["https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop"],
      amenities: ["Ocean View", "King Bed", "Mini Bar", "WiFi", "Room Service"],
      description: "Luxurious suite with breathtaking ocean views and premium amenities.",
      available: true,
      rating: 4.9,
      reviews: 128
    },
    {
      id: 2,
      name: "Family Garden Suite",
      type: "Family",
      capacity: 4,
      pricePerNight: 199,
      originalPrice: 249,
      images: ["https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop"],
      amenities: ["Garden View", "Two Beds", "Living Area", "WiFi", "Kids Area"],
      description: "Spacious family suite with garden views and separate living area.",
      available: true,
      rating: 4.7,
      reviews: 89
    },
    {
      id: 3,
      name: "Business Executive Room",
      type: "Executive",
      capacity: 2,
      pricePerNight: 179,
      originalPrice: 219,
      images: ["https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=400&fit=crop"],
      amenities: ["City View", "Work Desk", "High-Speed WiFi", "Coffee Machine"],
      description: "Perfect for business travelers with modern work facilities.",
      available: true,
      rating: 4.6,
      reviews: 67
    },
    {
      id: 4,
      name: "Romantic Honeymoon Suite",
      type: "Honeymoon",
      capacity: 2,
      pricePerNight: 399,
      originalPrice: 499,
      images: ["https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop"],
      amenities: ["Private Balcony", "Jacuzzi", "King Bed", "Champagne", "Room Service"],
      description: "Intimate suite designed for couples with luxury amenities.",
      available: false,
      rating: 5.0,
      reviews: 45
    }
  ];

  const availableRooms = rooms.filter(room => room.available);

  return (
    <Section id="rooms" background="gray">
      <SectionHeader
        title="Our Premium Rooms"
        subtitle="Choose from our carefully curated selection of luxury accommodations"
      />
      
      <div className="mb-12">
        <DateRangePicker 
          selectedDates={selectedDates}
          onDatesChange={setSelectedDates}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {availableRooms.map((room, index) => (
          <RoomCard 
            key={room.id} 
            room={room} 
            index={index}
            selectedDates={selectedDates}
          />
        ))}
      </div>
      
      {rooms.some(room => !room.available) && (
        <div className="mt-8 text-center">
          <p className="text-gray-600">Some rooms are currently unavailable. Check back later or contact us for more options.</p>
        </div>
      )}
    </Section>
  );
};

export default RoomListingSection;
