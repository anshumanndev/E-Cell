import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles } from 'lucide-react';
import { SectionBadge } from '../effects/SectionBadge';
import { siteConfig } from '../../data/siteData';

export const ECellConnectionSection: React.FC = () => {
  return (
    <section className="relative py-8 lg:py-12 border-t border-slate-100/60 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6 lg:mb-8">
          <SectionBadge icon={<Sparkles size={13} />}>
            THE ECOSYSTEM ENGINE
          </SectionBadge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-[#0F172A] tracking-tight">
            HOW THE MOVEMENT FLOWS
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            From the academic foundation of UIT to national venture impact — a continuous innovation loop.
          </p>
        </div>

        {/* Visual Flow Grid / Stepper */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 relative">
          {siteConfig.eCellConnectionSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative glass-card p-5 flex flex-col justify-between group hover:border-[#0E7490]/60"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-[#0E7490]">
                    {step.step}
                  </span>
                  {idx < siteConfig.eCellConnectionSteps.length - 1 && (
                    <ChevronRight size={14} className="hidden lg:block text-slate-400 group-hover:translate-x-1 transition-transform" />
                  )}
                </div>
                <h3 className="text-lg font-display font-black text-[#0F172A] group-hover:text-[#0E7490] transition-colors mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0E7490] group-hover:scale-125 transition-all" />
                <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold">
                  Phase {idx + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
