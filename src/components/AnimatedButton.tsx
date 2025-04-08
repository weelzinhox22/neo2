
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface AnimatedButtonProps {
  children: ReactNode;
  to: string;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  external?: boolean;
}

const variantClasses = {
  primary: "bg-brand-600 hover:bg-brand-700 text-white border border-brand-600",
  secondary: "bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-200",
  outline: "bg-transparent hover:bg-brand-50 text-brand-600 border border-brand-600",
  ghost: "bg-transparent hover:bg-gray-100 text-gray-800 border-0"
};

const sizeClasses = {
  sm: "py-1 px-3 text-sm",
  md: "py-2 px-4",
  lg: "py-3 px-6 text-lg"
};

export default function AnimatedButton({
  children,
  to,
  className = "",
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  external = false
}: AnimatedButtonProps) {
  const buttonClasses = `
    inline-flex items-center justify-center
    rounded-lg font-medium
    transition-all duration-300 ease-in-out
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `;

  const buttonContent = (
    <>
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </>
  );

  const buttonAnimation = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  if (external) {
    return (
      <motion.a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        variants={buttonAnimation}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      variants={buttonAnimation}
    >
      <Link to={to} className={buttonClasses}>
        {buttonContent}
      </Link>
    </motion.div>
  );
}
