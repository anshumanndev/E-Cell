import React from 'react';

interface AtmosphericGlowProps {
  className?: string;
  variant?: 'top' | 'center' | 'bottom' | 'subtle' | 'warm-top' | 'warm-center';
}

/**
 * AtmosphericGlow
 * Section-level glow overlays that complement the global animated background.
 * Each variant creates a slightly different warm-light atmosphere.
 * Kept subtle so text remains fully readable.
 */
export const AtmosphericGlow: React.FC<AtmosphericGlowProps> = ({
  className = '',
  variant = 'center'
}) => {
  if (variant === 'top') {
    return (
      <div className={`pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-gradient-to-b from-[#06B6D4]/12 via-[#0E7490]/8 to-transparent blur-[140px] rounded-full -z-10 ambient-luminous-glow ${className}`} />
    );
  }

  if (variant === 'bottom') {
    return (
      <div className={`pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-t from-[#F59E0B]/10 via-[#06B6D4]/6 to-transparent blur-[150px] rounded-full -z-10 ${className}`} />
    );
  }

  if (variant === 'subtle') {
    // Warm golden tint — blends with global warm background
    return (
      <div className={`pointer-events-none absolute inset-0 -z-10 ${className}`}>
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-br from-amber-400/6 via-teal-500/4 to-transparent blur-[120px] rounded-full" />
        <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-[400px] h-[350px] bg-gradient-to-bl from-cyan-400/5 via-amber-300/4 to-transparent blur-[100px] rounded-full" />
      </div>
    );
  }

  if (variant === 'warm-top') {
    return (
      <div className={`pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-amber-300/12 via-yellow-200/8 to-transparent blur-[120px] rounded-full -z-10 ambient-luminous-glow ${className}`} />
    );
  }

  if (variant === 'warm-center') {
    return (
      <div className={`pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-amber-300/8 via-teal-400/6 to-amber-300/8 blur-[130px] rounded-full -z-10 ambient-luminous-glow ${className}`} />
    );
  }

  // Default 'center'
  return (
    <div className={`pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[1000px] h-[700px] bg-gradient-to-r from-[#06B6D4]/8 via-[#F59E0B]/6 to-[#0E7490]/8 blur-[150px] rounded-full -z-10 ambient-luminous-glow ${className}`} />
  );
};