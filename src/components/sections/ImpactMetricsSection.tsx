import React from 'react';
import { AtmosphericGlow } from '../effects/AtmosphericGlow';
import { motion } from 'framer-motion';
import { TrendingUp, Sparkles, ShieldCheck } from 'lucide-react';
import { SectionBadge } from '../effects/SectionBadge';
import { impactStatistics } from '../../data/galleryData';

export const ImpactMetricsSection: React.FC = () => {
  return (
    <section className="relative py-8 lg:py-12 border-t border-slate-100/60 overflow-hidden select-none">
      <AtmosphericGlow variant="subtle" />
      {/* Background soft glow */}
      <div className="absolute top-10 left-1/3 w-96 h-96 bg-teal-50/70 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-6 lg:mb-8">
          <SectionBadge icon={<TrendingUp size={13} />}>
            ECOSYSTEM IMPACT
          </SectionBadge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            MEASURABLE <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-amber-600">SCALE</span>
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            The quantitative footprint of our startup incubation initiatives and skill events.
          </p>
        </div>

        {/* 4 Impact Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {impactStatistics.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-card p-6 text-center rounded-2xl group hover:border-teal-500/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 group-hover:text-teal-700 transition-colors mb-2">
                {stat.value}{stat.suffix}
              </div>
              <h3 className="text-base font-display font-bold text-teal-700">
                {stat.label}
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-500 bg-white border border-slate-200 px-4 py-1.5 rounded-full shadow-sm">
            <ShieldCheck size={13} className="text-teal-600" />
            Updated after official E-Cell data verification.
          </span>
        </div>
      </div>
    </section>
  );
};
