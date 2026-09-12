import React from 'react';
import { IlluminatEBrand } from '../effects/IlluminatEBrand';
import { motion } from 'framer-motion';
import { Flame, ArrowRight } from 'lucide-react';
import { SectionBadge } from '../effects/SectionBadge';
import { AtmosphericGlow } from '../effects/AtmosphericGlow';

interface FounderSpotlightSectionProps {
  onOpenRegister?: () => void;
}

export const FounderSpotlightSection: React.FC<FounderSpotlightSectionProps> = ({ onOpenRegister }) => {
  const realities = [
    { label: "Uncertainty", desc: "Navigating ambiguous market signals and forging paths with incomplete information." },
    { label: "Experimentation", desc: "Formulating rapid hypotheses, running cheap pilots, and discarding what fails." },
    { label: "Failure", desc: "Embracing rejection as essential diagnostic data to refine the core proposition." },
    { label: "Resilience", desc: "The stubborn mental fortitude to execute through sleepless nights and stalled metrics." },
    { label: "Execution", desc: "Relentless daily discipline. Shipping code, closing deals, and building compound value." }
  ];

  return (
    <section className="relative py-8 lg:py-12 border-t border-slate-100/60 overflow-hidden select-none">
      <AtmosphericGlow variant="center" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Text Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <SectionBadge icon={<Flame size={13} />}>
              FROM IDEA TO ENTERPRISE
            </SectionBadge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#0F172A] tracking-tight leading-[1.1]">
              WHAT DOES IT REALLY TAKE TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E7490] via-[#0D9488] to-[#D97706]">BUILD?</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Mainstream media glorifies funding rounds and overnight success stories. At <IlluminatEBrand size="sm" />, our guest founders pull back the curtain to reveal the unglamorous mechanics of early-stage venture building.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenRegister}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-display font-bold text-sm hover:bg-[#0E7490]/10 hover:border-[#0E7490]/50 hover:text-[#0E7490] transition-all group"
              >
                <span>MEET THE FOUNDERS AT <IlluminatEBrand size="sm" /></span>
                <ArrowRight size={15} className="text-[#0E7490] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Realities Stack */}
          <div className="lg:col-span-6 space-y-3">
            {realities.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass-card p-4 sm:p-5 flex items-start gap-4 group hover:border-[#0E7490]/50"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0E7490]/10 border border-[#0E7490]/20 flex items-center justify-center shrink-0 mt-0.5 text-[#0E7490] font-mono text-xs font-bold">
                  0{idx + 1}
                </div>
                <div>
                  <h3 className="text-base font-display font-bold text-[#0F172A] group-hover:text-[#0E7490] transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
