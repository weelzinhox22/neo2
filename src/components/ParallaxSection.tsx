
import { ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  bgImage?: string;
  bgColor?: string;
  speed?: number;
  className?: string;
  overlayColor?: string;
  overlayOpacity?: number;
  id?: string;
}

export default function ParallaxSection({
  children,
  bgImage,
  bgColor = 'bg-gray-100',
  speed = 0.5,
  className = '',
  overlayColor = 'bg-black',
  overlayOpacity = 0.3,
  id
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`]);

  return (
    <section 
      ref={ref} 
      id={id}
      className={`relative overflow-hidden ${bgImage ? '' : bgColor} ${className}`}
    >
      {bgImage && (
        <>
          <motion.div 
            className="absolute inset-0 w-full h-full bg-cover bg-center -z-10"
            style={{ 
              backgroundImage: `url(${bgImage})`,
              y 
            }}
          />
          <div 
            className={`absolute inset-0 w-full h-full ${overlayColor} opacity-${Math.round(overlayOpacity * 10)} -z-10`} 
          />
        </>
      )}
      {children}
    </section>
  );
}
