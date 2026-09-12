import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { featuredEvent } from '../../data/eventsData';

interface StickyMobileCTAProps {
  onOpenRegister?: () => void;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ onOpenRegister }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 p-3 bg-white/95 backdrop-blur-lg border-t border-slate-200 shadow-2xl">
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="text-xs text-slate-400 line-through">₹{featuredEvent.originalPrice}</span>
            <span className="text-sm font-extrabold text-[#0F172A] font-mono">₹{featuredEvent.specialPrice}</span>
            <span className="text-[10px] bg-[#0E7490]/10 text-[#0E7490] px-1.5 py-0.5 rounded font-mono font-bold">
              SPECIAL
            </span>
          </div>
          <span className="text-[10px] text-[#D97706] font-mono font-bold flex items-center gap-1">
            <Sparkles size={10} />
            Code: {featuredEvent.ambassadorCode}
          </span>
        </div>

        <button
          onClick={onOpenRegister}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#0E7490] to-[#0D9488] text-white font-display font-bold text-xs tracking-wide shadow-glow-teal active:scale-95 transition-transform"
        >
          <span>REGISTER NOW</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};
