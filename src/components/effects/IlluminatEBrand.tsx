import React from 'react';

interface IlluminatEBrandProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  textColor?: 'dark' | 'white';
}

/**
 * IlluminatEBrand
 * 
 * Renders the new ILLUMINATE logo exactly as requested:
 * The double LL is replaced by the provided flame symbol image.
 */
export const IlluminatEBrand: React.FC<IlluminatEBrandProps> = ({ 
  className = '',
  size = 'md',
  textColor = 'dark'
}) => {
  // Size mappings
  const sizeMap = {
    sm: { textSize: 'text-lg' },
    md: { textSize: 'text-2xl' },
    lg: { textSize: 'text-4xl' },
    xl: { textSize: 'text-6xl' },
    hero: { textSize: 'text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[7.5rem]' },
  };

  const { textSize } = sizeMap[size];
  const colorClass = textColor === 'white' ? 'text-white drop-shadow-md' : 'text-[#2E1065]';

  return (
    <span className={`inline-flex items-center ${className}`}>
      {/* The text with image replacing LL */}
      <span className={`${textSize} font-sans font-black tracking-tight flex items-center ${colorClass}`} style={{ letterSpacing: '-0.02em' }}>
        I
        <img 
          src="/images/illuminate-ll.png" 
          alt="LL" 
          className="h-[1.1em] w-auto object-contain inline-block mx-[0.05em] -translate-y-[0.05em]" 
        />
        UMINATE
      </span>
    </span>
  );
};