
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ImagePlaceholder from "@/components/ui/image-placeholder";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  index?: number;
}

const ServiceCard = ({ title, description, price, image, index = 0 }: ServiceCardProps) => {
  return (
    <Card 
      className="hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg animate-fade-in h-full"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardHeader className="pb-4">
        <ImagePlaceholder 
          height="h-56"
          text={image}
          gradient="from-primary/10 to-primary/20"
          className="mb-6"
        />
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold text-primary">{price}</span>
          <Button size="lg" className="hover:scale-110 transition-transform duration-300">
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
