
import { ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  animation?: 'fadeIn' | 'slideUp' | 'slideRight' | 'scale' | 'none';
}

export default function AnimatedSection({
  children,
  delay = 0,
  className = '',
  animation = 'fadeIn',
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const getAnimationProps = () => {
    switch (animation) {
      case 'fadeIn':
        return {
          initial: { opacity: 0 },
          animate: isInView ? { opacity: 1 } : { opacity: 0 },
          transition: { duration: 0.6, delay }
        };
      case 'slideUp':
        return {
          initial: { opacity: 0, y: 50 },
          animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
          transition: { duration: 0.6, delay }
        };
      case 'slideRight':
        return {
          initial: { opacity: 0, x: -50 },
          animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 },
          transition: { duration: 0.6, delay }
        };
      case 'scale':
        return {
          initial: { opacity: 0, scale: 0.8 },
          animate: isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 },
          transition: { duration: 0.6, delay }
        };
      case 'none':
      default:
        return {};
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      {...getAnimationProps()}
    >
      {children}
    </motion.div>
  );
}
