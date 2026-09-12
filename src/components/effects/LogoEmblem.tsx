import React from 'react';

interface LogoEmblemProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showText?: boolean;
  className?: string;
}

export const LogoEmblem: React.FC<LogoEmblemProps> = ({
  size = 'md',
  showText = true,
  className = ''
}) => {
  const sizeMap = {
    sm: { icon: 34, text: 'text-lg font-bold' },
    md: { icon: 46, text: 'text-xl font-bold' },
    lg: { icon: 68, text: 'text-2xl font-bold' },
    xl: { icon: 92, text: 'text-3xl font-extrabold' },
    hero: { icon: 140, text: 'text-5xl md:text-7xl font-extrabold' }
  };

  const { icon } = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      {/* Visual Emblem */}
      <div className="relative flex items-center justify-center shrink-0">
        {/* Multilayer Ambient Glow behind emblem */}
        <div className="absolute inset-0 bg-[#7C2CFF]/35 blur-xl rounded-full scale-150 pointer-events-none" />
        <div className="absolute inset-0 bg-[#A855F7]/25 blur-md rounded-full scale-110 pointer-events-none" />

        <svg
          width={icon}
          height={icon}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative drop-shadow-[0_0_18px_rgba(168,85,247,0.75)] transition-transform duration-300 hover:scale-105"
        >
          {/* Subtle Outer Halo Ring */}
          <circle cx="50" cy="40" r="34" stroke="url(#haloGrad)" strokeWidth="1.2" strokeDasharray="3 3" className="opacity-60" />

          {/* Bulb Outer Glass Silhouette */}
          <path
            d="M50 12C34.5 12 22 24.5 22 40C22 50.5 27.8 59.8 36.5 64.5V72C36.5 73.6 37.8 75 39.5 75H60.5C62.2 75 63.5 73.6 63.5 72V64.5C72.2 59.8 78 50.5 78 40C78 24.5 65.5 12 50 12Z"
            stroke="url(#purpleGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Inner Light Core Reflection Arch */}
          <path
            d="M30 32C33 22 41 17 50 17"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="opacity-75"
          />

          {/* Dragon Flame / Energy Crown Curve */}
          <path
            d="M50 20C55 28 62 32 65 44C68 56 59 66 50 69C41 66 32 56 35 44C38 32 45 28 50 20Z"
            fill="url(#dragonFlame)"
            className="opacity-95"
          />

          {/* Inner High-Intensity Spark Core */}
          <circle cx="50" cy="45" r="4.5" fill="#FFFFFF" className="drop-shadow-[0_0_8px_#FFFFFF]" />
          <circle cx="50" cy="45" r="9" stroke="#E9D5FF" strokeWidth="1.5" className="animate-pulse opacity-90" />
          <circle cx="50" cy="45" r="14" stroke="#A855F7" strokeWidth="1" strokeDasharray="2 2" className="opacity-60" />

          {/* Base Screw Contacts */}
          <path d="M40 79H60" stroke="#C084FC" strokeWidth="3" strokeLinecap="round" />
          <path d="M43 84H57" stroke="#A855F7" strokeWidth="3" strokeLinecap="round" />
          <path d="M46 89H54" stroke="#7C2CFF" strokeWidth="3.5" strokeLinecap="round" />

          {/* Linear Gradients */}
          <defs>
            <linearGradient id="haloGrad" x1="16" y1="6" x2="84" y2="74" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#E9D5FF" />
              <stop offset="50%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#7C2CFF" />
            </linearGradient>

            <linearGradient id="purpleGrad" x1="22" y1="12" x2="78" y2="89" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="25%" stopColor="#E9D5FF" />
              <stop offset="55%" stopColor="#C084FC" />
              <stop offset="85%" stopColor="#7C2CFF" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>

            <linearGradient id="dragonFlame" x1="50" y1="20" x2="50" y2="69" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="30%" stopColor="#E9D5FF" />
              <stop offset="65%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#7C2CFF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Wordmark Typography */}
      {showText && size !== 'hero' && (
        <div className="flex flex-col">
          <div className="flex items-center tracking-tight">
            <span className="font-display font-bold text-white tracking-wider text-base sm:text-lg">
              Illuminat
            </span>
            <span className="font-display font-extrabold text-[#A855F7] text-base sm:text-lg">
              E
            </span>
          </div>
          <span className="text-[10px] tracking-[0.25em] text-[#B7AFC5] uppercase font-mono font-medium -mt-0.5">
            E-CELL UIT
          </span>
        </div>
      )}
    </div>
  );
};
