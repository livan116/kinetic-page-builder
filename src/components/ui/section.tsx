
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "gray" | "primary" | "gradient";
}

const Section = ({ children, className, id, background = "white" }: SectionProps) => {
  const backgroundClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    primary: "bg-primary",
    gradient: "bg-gradient-to-br from-primary via-primary/90 to-primary/80"
  };

  return (
    <section 
      id={id}
      className={cn(
        "py-24",
        backgroundClasses[background],
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;
