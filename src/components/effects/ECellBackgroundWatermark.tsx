import React from 'react';
import { ECellLogo } from './ECellLogo';

interface ECellBackgroundWatermarkProps {
  opacity?: string;
  animated?: boolean;
  size?: 'md' | 'lg' | 'xl' | 'giant';
  position?: 'center' | 'top-right' | 'bottom-left' | 'fixed-center';
}

/**
 * ECellBackgroundWatermark
 * 
 * Rebuilt as a full-page animated scrolling tile pattern.
 * This covers the entire background with diagonal scrolling E-Cell logos.
 */
export const ECellBackgroundWatermark: React.FC<ECellBackgroundWatermarkProps> = ({
  opacity = 'opacity-[0.05]',
  animated = true,
}) => {
  // We use CSS background-image and background-position animation
  // The animation keyframes are defined in index.css (we will add watermarkScroll)
  
  return (
    <div
      className={`fixed inset-0 pointer-events-none select-none z-[-10] overflow-hidden ${opacity}`}
      aria-hidden="true"
    >
      <div 
        className={`absolute inset-[-100%] w-[300%] h-[300%] ${animated ? 'animate-watermark-scroll' : ''}`}
        style={{
          backgroundImage: `url("/images/ecell-uit-logo.svg")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '250px 250px',
          opacity: 0.8, // Base opacity for the tiles
          transform: 'rotate(-15deg)', // Diagonal effect
        }}
      />
    </div>
  );
};