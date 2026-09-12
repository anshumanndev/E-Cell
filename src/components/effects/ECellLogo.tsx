import React from 'react';

interface ECellLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showSubtitle?: boolean;
  className?: string;
}

export const ECellLogo: React.FC<ECellLogoProps> = ({
  size = 'md',
  showSubtitle = true,
  className = ''
}) => {
  const sizeMap = {
    sm: { icon: 42, title: 'text-sm font-extrabold tracking-wider', sub: 'text-[9px]' },
    md: { icon: 52, title: 'text-base font-extrabold tracking-wider', sub: 'text-[10px]' },
    lg: { icon: 68, title: 'text-xl font-extrabold tracking-wider', sub: 'text-xs' },
    hero: { icon: 110, title: 'text-3xl font-extrabold tracking-widest', sub: 'text-sm' }
  };

  const { icon, title, sub } = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none group ${className}`}>
      {/* Official Symbol Vector */}
      <div className="relative flex items-center justify-center shrink-0">
        {/* Soft Ambient Glow matching Teal & Amber */}
        <div className="absolute inset-0 bg-[#0E7490]/15 blur-md rounded-full scale-125 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#F59E0B]/25 blur-sm rounded-full pointer-events-none" />

        <svg
          width={icon}
          height={icon * 1.15}
          viewBox="0 0 240 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative drop-shadow-[0_2px_8px_rgba(14,116,144,0.18)] transition-transform duration-300 group-hover:scale-105"
        >
          {/* 'E' Letter Path in Deep Teal */}
          <path
            d="M125 90H80C66.7452 90 56 100.745 56 114V146C56 159.255 66.7452 170 80 170H108"
            stroke="#164E63"
            strokeWidth="15"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M58 130H102"
            stroke="#164E63"
            strokeWidth="14"
            strokeLinecap="round"
          />

          {/* 'C' Letter Path in Vibrant Teal/Cyan Interlocking */}
          <path
            d="M142 128C136 122 124 118 110 120C92 123 80 138 80 156C80 174 94 188 114 188C128 188 138 182 144 174"
            stroke="#0D9488"
            strokeWidth="15"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Glowing Light Bulb at Center */}
          <g transform="translate(112, 140)">
            {/* Radiant Amber Rays */}
            <path d="M0 -34L0 -42" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round"/>
            <path d="M-15 -28L-22 -35" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round"/>
            <path d="M15 -28L22 -35" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round"/>
            <path d="M-24 -14L-32 -16" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round"/>
            <path d="M24 -14L32 -16" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round"/>

            {/* Bulb Glass */}
            <path
              d="M0 -28C-10 -28 -17 -20 -17 -11C-17 -4 -13 1 -9 6V14C-9 15.5 -7.5 17 -6 17H6C7.5 17 9 15.5 9 14V6C13 1 17 -4 17 -11C17 -20 10 -28 0 -28Z"
              fill="#FEF3C7"
              stroke="#D97706"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M-5 -12C-5 -18 -2 -22 0 -22C2 -22 5 -18 5 -12"
              stroke="#F59E0B"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Screw Base */}
            <path d="M-6 20H6" stroke="#D97706" strokeWidth="3" strokeLinecap="round"/>
            <path d="M-4 24H4" stroke="#D97706" strokeWidth="3" strokeLinecap="round"/>
            <path d="M-2 28H2" stroke="#B45309" strokeWidth="3" strokeLinecap="round"/>
          </g>
        </svg>
      </div>

      {/* Typography: E-CELL UIT + Empowering Tomorrow's Founder */}
      <div className="flex flex-col">
        <div className="flex items-center">
          <span className={`font-display font-black text-[#0E4B5C] ${title}`}>
            E-CELL
          </span>
          <span className={`font-display font-black text-[#0D9488] ml-1.5 ${title}`}>
            UIT
          </span>
        </div>
        {showSubtitle && (
          <span className={`font-sans text-[#475569] font-semibold -mt-0.5 tracking-tight ${sub}`}>
            Empowering Tomorrow's Founder
          </span>
        )}
      </div>
    </div>
  );
};
