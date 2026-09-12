import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Microscope, Rocket, Users, Sparkles, Compass } from 'lucide-react';
import { SectionBadge } from '../effects/SectionBadge';
import { siteConfig } from '../../data/siteData';

export const UITPhilosophySection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="text-teal-600" size={22} />;
      case 'Microscope': return <Microscope className="text-cyan-600" size={22} />;
      case 'Rocket': return <Rocket className="text-amber-600" size={22} />;
      case 'Users': return <Users className="text-teal-700" size={22} />;
      default: return <Sparkles className="text-teal-600" size={22} />;
    }
  };

  return (
    <section className="relative py-8 lg:py-12 border-t border-slate-100/60 overflow-hidden select-none">
      {/* Soft ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-50/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-6 lg:mb-8">
          <SectionBadge icon={<Compass size={13} />}>
            CORE TENETS
          </SectionBadge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            UIT × E-CELL <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-amber-600">PHILOSOPHY</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Five core pillars steering our educational ethos, research culture, and student-driven ventures.
          </p>
        </div>

        {/* 5 Pillars Horizontal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {siteConfig.pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-card p-6 flex flex-col justify-between group hover:border-teal-500/50 hover:shadow-lg transition-all duration-300"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200/70 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {getIcon(pillar.icon)}
                </div>
                <h3 className="text-lg font-display font-bold text-slate-900 group-hover:text-teal-700 transition-colors mb-1">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/80 text-[10px] font-mono text-teal-700 font-semibold">
                Pillar 0{idx + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
