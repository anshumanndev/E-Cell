import React from 'react';
import { AtmosphericGlow } from '../effects/AtmosphericGlow';
import { motion } from 'framer-motion';
import { Lightbulb, Globe, Users2, ShieldCheck, Zap, HeartHandshake, Sparkles } from 'lucide-react';
import { SectionBadge } from '../effects/SectionBadge';
import { benefitsData } from '../../data/goodiesData';

export const BenefitsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Lightbulb': return <Lightbulb className="text-[#D97706]" size={22} />;
      case 'Globe': return <Globe className="text-[#0E7490]" size={22} />;
      case 'Users2': return <Users2 className="text-[#0D9488]" size={22} />;
      case 'ShieldCheck': return <ShieldCheck className="text-[#164E63]" size={22} />;
      case 'Zap': return <Zap className="text-[#F59E0B]" size={22} />;
      case 'HeartHandshake': return <HeartHandshake className="text-[#06B6D4]" size={22} />;
      default: return <Sparkles className="text-[#0E7490]" size={22} />;
    }
  };

  return (
    <section className="relative py-8 lg:py-12 border-t border-slate-100/60 overflow-hidden select-none">
      <AtmosphericGlow variant="top" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6 lg:mb-8">
          <SectionBadge icon={<Sparkles size={13} />}>
            TRANSFORMATIVE GAINS
          </SectionBadge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-[#0F172A] tracking-tight">
            WHAT YOU WALK AWAY WITH
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            More than just a one-day certificate — structural advantages that accelerate your personal and professional trajectory.
          </p>
        </div>

        {/* 6 Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitsData.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-card p-6 flex flex-col justify-between group hover:border-[#0E7490]/60"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {getIcon(benefit.icon)}
                </div>
                <h3 className="text-xl font-display font-black text-[#0F172A] mb-2 group-hover:text-[#0E7490] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-[#0E7490] font-bold">
                <span>Advantage 0{idx + 1}</span>
                <span>Active</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
