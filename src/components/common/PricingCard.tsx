
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  features: string[];
  popular: boolean;
  index?: number;
}

const PricingCard = ({ name, price, period, features, popular, index = 0 }: PricingCardProps) => {
  return (
    <Card 
      className={`hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg h-full animate-fade-in py-8 ${
        popular ? 'ring-4 ring-primary/50 transform scale-110 lg:scale-110' : ''
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {popular && (
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
            Most Popular
          </span>
        </div>
      )}
      <CardHeader className="text-center pt-12 pb-6">
        <CardTitle className="text-2xl mb-2">{name}</CardTitle>
        <div className="mb-6">
          <span className="text-5xl font-bold text-primary">{price}</span>
          <span className="text-gray-600 ml-2">/{period}</span>
        </div>
      </CardHeader>
      <CardContent className="px-8 pb-8">
        <ul className="space-y-4 mb-8">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        <Button 
          className={`w-full hover:scale-105 transition-transform duration-300 ${
            popular ? 'bg-primary shadow-lg' : ''
          }`}
          variant={popular ? "default" : "outline"}
          size="lg"
          asChild
        >
          <Link to="/checkout">Get Started</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
