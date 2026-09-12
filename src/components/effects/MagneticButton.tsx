import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'glass' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled = false
}) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current?.getBoundingClientRect() || {
      left: 0,
      top: 0,
      width: 0,
      height: 0
    };
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = "relative inline-flex items-center justify-center font-display font-bold transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer group";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs rounded-xl gap-1.5",
    md: "px-6 py-3 text-sm rounded-xl gap-2",
    lg: "px-8 py-3.5 text-base rounded-2xl gap-2.5"
  };

  const variantStyles = {
    primary: "bg-gradient-to-r from-[#0E7490] via-[#0D9488] to-[#0E7490] bg-[length:200%_auto] hover:bg-[position:right_center] text-white shadow-glow-teal hover:shadow-lg border border-teal-500/20",
    gold: "bg-gradient-to-r from-[#D97706] via-[#F59E0B] to-[#D97706] text-white shadow-glow-amber hover:shadow-lg border border-amber-500/20",
    secondary: "bg-white hover:bg-slate-50 text-[#0F172A] border border-slate-200 shadow-sm hover:border-[#0E7490]/40",
    outline: "bg-transparent text-[#0E7490] hover:text-[#0F4C5C] border border-[#0E7490]/30 hover:border-[#0E7490] hover:bg-[#0E7490]/5",
    glass: "bg-white/80 hover:bg-white text-[#0F172A] backdrop-blur-md border border-slate-200 shadow-sm"
  };

  return (
    <motion.button
      ref={buttonRef}
      type={type}
      onClick={onClick}
      disabled={disabled}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 260, damping: 20, mass: 0.5 }}
      whileTap={{ scale: 0.97 }}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};
