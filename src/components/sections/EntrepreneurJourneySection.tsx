import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { SectionBadge } from '../effects/SectionBadge';
import { journeyStages } from '../../data/journeyData';
import { AtmosphericGlow } from '../effects/AtmosphericGlow';

export const EntrepreneurJourneySection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section className="relative py-8 lg:py-12 border-t border-slate-100/60 overflow-hidden select-none">
      <AtmosphericGlow variant="center" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6 lg:mb-8">
          <SectionBadge icon={<Sparkles size={13} />}>
            THE 9-STAGE SPRINT
          </SectionBadge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-[#0F172A] tracking-tight">
            THE ENTREPRENEUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E7490] via-[#0D9488] to-[#D97706]">JOURNEY</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            A battle-tested 9-step progression turning ambiguous student observations into scalable venture architectures.
          </p>
        </div>

        {/* Giant Vertical Glowing Timeline */}
        <div className="relative border-l-2 border-teal-500/30 ml-4 sm:ml-8 md:ml-32 pl-6 sm:pl-10 space-y-10">
          {journeyStages.map((stage, idx) => {
            const isHovered = activeStep === idx;
            return (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                onMouseEnter={() => setActiveStep(idx)}
                className={`relative group transition-all duration-300 ${
                  isHovered ? 'scale-[1.01]' : 'opacity-90'
                }`}
              >
                {/* Node on Timeline */}
                <div
                  className={`absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                    isHovered
                      ? 'bg-[#0E7490] ring-4 ring-teal-500/20 shadow-md'
                      : 'bg-white border-2 border-teal-600/40'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full ${isHovered ? 'bg-white' : 'bg-[#0E7490]'}`} />
                </div>

                {/* Content Box */}
                <div className={`glass-card p-6 sm:p-7 rounded-2xl transition-all ${
                  isHovered ? 'border-[#0E7490] shadow-card-hover bg-slate-50/50' : ''
                }`}>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-mono font-black text-[#0E7490]">
                        STAGE {stage.step}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-700 px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200">
                        {stage.tag}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-slate-500 hidden sm:inline">
                      Action: {stage.action}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-black text-[#0F172A] group-hover:text-[#0E7490] transition-colors mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
