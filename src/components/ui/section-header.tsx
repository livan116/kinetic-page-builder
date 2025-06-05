
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
  centered?: boolean;
}

const SectionHeader = ({ title, subtitle, children, className, centered = true }: SectionHeaderProps) => {
  return (
    <div className={cn(
      "mb-16 animate-fade-in",
      centered && "text-center",
      className
    )}>
      <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
};

export default SectionHeader;
