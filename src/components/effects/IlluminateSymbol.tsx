import React from 'react';

interface IlluminateSymbolProps {
  className?: string;
}

export const IlluminateSymbol: React.FC<IlluminateSymbolProps> = ({ className = '' }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 150" 
      className={className}
      fill="none"
    >
      <defs>
        <linearGradient id="flame-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7E22CE" />
          <stop offset="50%" stopColor="#9333EA" />
          <stop offset="100%" stopColor="#D8B4FE" />
        </linearGradient>
      </defs>
      
      {/* Flame Shapes */}
      <path 
        d="M50 110 C 20 100, 10 50, 40 10 C 20 40, 25 70, 45 80 C 45 80, 60 50, 80 30 C 90 60, 80 95, 50 110 Z" 
        fill="url(#flame-grad)" 
      />
      <path 
        d="M50 110 C 35 100, 30 70, 45 40 C 40 60, 45 80, 52 85 C 52 85, 60 70, 70 50 C 75 75, 70 95, 50 110 Z" 
        fill="#A855F7" 
        opacity="0.8"
      />
      
      {/* Bulb Base */}
      <rect x="35" y="112" width="30" height="8" rx="4" fill="#E2E8F0" />
      <rect x="38" y="123" width="24" height="8" rx="4" fill="#E2E8F0" />
      <path d="M43 134 Q 50 144 57 134 Z" fill="#E2E8F0" />
    </svg>
  );
};
