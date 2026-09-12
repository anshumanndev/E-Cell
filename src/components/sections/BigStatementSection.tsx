import React from 'react';
import { AtmosphericGlow } from '../effects/AtmosphericGlow';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { MagneticButton } from '../effects/MagneticButton';
import { LightPulse } from '../effects/LightPulse';

interface BigStatementSectionProps {
  onOpenRegister?: () => void;
}

export const BigStatementSection: React.FC<BigStatementSectionProps> = ({ onOpenRegister }) => {
  const steps = [
    { text: "Start learning.", sub: "Absorb deep domain context" },
    { text: "Start building.", sub: "Write code, design models, test MVPs" },
    { text: "Start connecting.", sub: "Unite with founders & investors" },
    { text: "Start now.", sub: "Take the decisive first leap" }
  ];

  return (
    <section className="relative min-h-[60vh] py-8 lg:py-12 flex items-center justify-center overflow-hidden border-t border-slate-200/80 select-none">
      <AtmosphericGlow variant="center" />
      <LightPulse delay={2} />

      {/* Atmospheric Ambient Glow */}
      <div className="absolute w-[800px] h-[500px] bg-[#06B6D4]/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-[#0E7490] font-bold tracking-widest uppercase">
            <Sparkles size={12} className="text-[#0E7490]" />
            <span>THE CATALYST PROMPT</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-[#0F172A] tracking-tight leading-[1.08] max-w-5xl mx-auto">
            WHAT IF YOUR NEXT IDEA <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E7490] via-[#0D9488] to-[#D97706]">CHANGES EVERYTHING?</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Don't wait until you think you're ready. The founders changing the world started with nothing more than an itch and the courage to begin.
          </p>

          {/* Action Sequence Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-4">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-left hover:border-[#0E7490]/40 transition-colors shadow-sm"
              >
                <span className="text-xs font-mono text-[#0E7490] font-bold">0{idx + 1}.</span>
                <p className="text-base font-display font-black text-[#0F172A] mt-1">
                  {step.text}
                </p>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">
                  {step.sub}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <MagneticButton
              variant="primary"
              size="lg"
              onClick={onOpenRegister}
            >
              <span>ENTER THE EXPERIENCE</span>
              <ArrowRight size={18} />
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
