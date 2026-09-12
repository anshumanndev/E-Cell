import React from 'react';
import { motion } from 'framer-motion';

interface LightPulseProps {
  className?: string;
  delay?: number;
}

export const LightPulse: React.FC<LightPulseProps> = ({
  className = '',
  delay = 0
}) => {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden -z-10 ${className}`}>
      <motion.div
        initial={{ x: '-100%', opacity: 0 }}
        animate={{
          x: '200%',
          opacity: [0, 0.4, 0.6, 0.3, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatDelay: 5,
          delay: delay,
          ease: 'easeInOut'
        }}
        className="w-[400px] h-full bg-gradient-to-r from-transparent via-[#06B6D4]/20 to-transparent skew-x-[-25deg] blur-3xl"
      />
    </div>
  );
};
