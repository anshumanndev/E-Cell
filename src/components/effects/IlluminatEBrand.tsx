import React from 'react';
import { IlluminateSymbol } from './IlluminateSymbol';

interface IlluminatEBrandProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  textColor?: 'dark' | 'white';
}

/**
 * IlluminatEBrand
 * 
 * Renders the new ILLUMINATE logo exactly as requested:
 * The flame symbol is placed on the side of the full word "ILLUMINATE".
 */
export const IlluminatEBrand: React.FC<IlluminatEBrandProps> = ({ 
  className = '',
  size = 'md',
  textColor = 'dark'
}) => {
  // Size mappings
  const sizeMap = {
    sm: { height: 'h-6', textSize: 'text-lg', flameWidth: 'w-6' },
    md: { height: 'h-8', textSize: 'text-2xl', flameWidth: 'w-8' },
    lg: { height: 'h-12', textSize: 'text-4xl', flameWidth: 'w-12' },
    xl: { height: 'h-16', textSize: 'text-6xl', flameWidth: 'w-16' },
    hero: { height: 'h-20 sm:h-28 md:h-36', textSize: 'text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[7.5rem]', flameWidth: 'w-20 sm:w-28 md:w-36' },
  };

  const { textSize } = sizeMap[size];
  const colorClass = textColor === 'white' ? 'text-white drop-shadow-md' : 'text-[#2E1065]';

  return (
    <span className={`inline-flex items-center gap-1 sm:gap-2 ${className}`}>
      <span className={`${textSize} font-sans font-black tracking-tight ${colorClass} flex items-center`} style={{ letterSpacing: '-0.02em' }}>
        I
        <div className="relative flex items-center justify-center mx-[0.05em] h-[1em] w-[0.8em]">
          <img 
            src="/images/lamp-symbol.png" 
            alt="LL" 
            className="absolute h-[1.5em] max-w-none w-auto object-contain -translate-y-[0.1em]" 
          />
        </div>
        UMINATE
      </span>
    </span>
  );
};