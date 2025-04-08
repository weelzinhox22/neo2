import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "secondary";
  className?: string;
}

const Badge = ({ 
  children, 
  variant = "default", 
  className 
}: BadgeProps) => {
  const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors";
  
  const variantStyles = {
    default: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
    outline: "border border-current bg-transparent",
    secondary: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
  };
  
  return (
    <span className={cn(
      baseStyles,
      variantStyles[variant],
      className
    )}>
      {children}
    </span>
  );
};

export default Badge;