
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, User } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface DateRangePickerProps {
  selectedDates: { checkIn: Date | null; checkOut: Date | null };
  onDatesChange: (dates: { checkIn: Date | null; checkOut: Date | null }) => void;
}

const DateRangePicker = ({ selectedDates, onDatesChange }: DateRangePickerProps) => {
  const [guests, setGuests] = useState(2);
  const [isCheckInOpen, setIsCheckInOpen] = useState(false);
  const [isCheckOutOpen, setIsCheckOutOpen] = useState(false);

  const handleCheckInSelect = (date: Date | undefined) => {
    if (date) {
      onDatesChange({ ...selectedDates, checkIn: date });
      setIsCheckInOpen(false);
    }
  };

  const handleCheckOutSelect = (date: Date | undefined) => {
    if (date) {
      onDatesChange({ ...selectedDates, checkOut: date });
      setIsCheckOutOpen(false);
    }
  };

  return (
    <Card className="max-w-4xl mx-auto shadow-lg">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Check-in Date */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Check-in</label>
            <Popover open={isCheckInOpen} onOpenChange={setIsCheckInOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !selectedDates.checkIn && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {selectedDates.checkIn ? format(selectedDates.checkIn, "MMM dd, yyyy") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={selectedDates.checkIn || undefined}
                  onSelect={handleCheckInSelect}
                  disabled={(date) => date < new Date()}
                  initialFocus
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Check-out Date */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Check-out</label>
            <Popover open={isCheckOutOpen} onOpenChange={setIsCheckOutOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !selectedDates.checkOut && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {selectedDates.checkOut ? format(selectedDates.checkOut, "MMM dd, yyyy") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={selectedDates.checkOut || undefined}
                  onSelect={handleCheckOutSelect}
                  disabled={(date) => date <= (selectedDates.checkIn || new Date())}
                  initialFocus
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Guests */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Guests</label>
            <div className="flex items-center border rounded-md px-3 py-2 bg-white">
              <User className="mr-2 h-4 w-4 text-gray-500" />
              <select 
                value={guests} 
                onChange={(e) => setGuests(parseInt(e.target.value))}
                className="w-full bg-transparent outline-none"
              >
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 invisible">Search</label>
            <Button 
              className="w-full bg-primary hover:bg-primary/90 h-10"
              onClick={() => console.log('Search rooms', { selectedDates, guests })}
            >
              Search Rooms
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DateRangePicker;
