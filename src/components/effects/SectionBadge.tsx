import React from 'react';

interface SectionBadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const SectionBadge: React.FC<SectionBadgeProps> = ({
  children,
  icon,
  className = ''
}) => {
  return (
    <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E7490]/10 border border-[#0E7490]/20 text-xs font-mono font-bold text-[#0E7490] tracking-wider uppercase backdrop-blur-md shadow-sm mb-4 ${className}`}>
      {icon && <span className="text-[#0E7490]">{icon}</span>}
      <span>{children}</span>
    </div>
  );
};
