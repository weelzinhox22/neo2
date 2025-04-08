
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface InfoCardProps {
  icon?: ReactNode;
  title: string;
  content: string | ReactNode;
  className?: string;
  iconClassName?: string;
  delay?: number;
}

export default function InfoCard({
  icon,
  title,
  content,
  className = "",
  iconClassName = "",
  delay = 0
}: InfoCardProps) {
  return (
    <motion.div
      className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all ease-in-out duration-300 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      {icon && (
        <div className={`mb-4 text-brand-600 ${iconClassName}`}>
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <div className="text-gray-600">{content}</div>
    </motion.div>
  );
}
