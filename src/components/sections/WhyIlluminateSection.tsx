import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Network, Compass, Cpu, Mic, Flame, Sparkles } from 'lucide-react';
import { SectionBadge } from '../effects/SectionBadge';
import { IlluminatEBrand } from '../effects/IlluminatEBrand';
import { AtmosphericGlow } from '../effects/AtmosphericGlow';
import { whyIlluminateChapters } from '../../data/journeyData';

export const WhyIlluminateSection: React.FC = () => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'BookOpen': return <BookOpen className="text-[#0E7490]" size={22} />;
      case 'Network': return <Network className="text-[#0D9488]" size={22} />;
      case 'Compass': return <Compass className="text-[#06B6D4]" size={22} />;
      case 'Cpu': return <Cpu className="text-[#164E63]" size={22} />;
      case 'Mic': return <Mic className="text-[#D97706]" size={22} />;
      case 'Flame': return <Flame className="text-[#F59E0B]" size={22} />;
      default: return <Sparkles className="text-[#0E7490]" size={22} />;
    }
  };

  return (
    <section id="why-illuminate" className="relative py-8 lg:py-12 border-t border-slate-100/60 overflow-hidden select-none">
      <AtmosphericGlow variant="subtle" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 lg:mb-8 gap-6">
          <div>
            <SectionBadge icon={<Sparkles size={13} />}>
              THE VALUE PROPOSITION
            </SectionBadge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-[#0F172A] tracking-tight">
              WHY PARTICIPATE IN{' '}
              <IlluminatEBrand />?
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            Six pillars engineered to equip you with unfair competitive advantages in startup ideation, venture capital, and leadership.
          </p>
        </div>

        {/* 6 Chapter Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyIlluminateChapters.map((chapter, idx) => (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-card p-7 flex flex-col justify-between group hover:border-[#0E7490]/60"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#0E7490]/10 transition-all">
                    {getIcon(chapter.icon)}
                  </div>
                  <span className="font-mono text-xs font-bold text-[#0E7490] bg-[#0E7490]/10 px-2.5 py-1 rounded-full">
                    CHAPTER {chapter.number}
                  </span>
                </div>

                <h3 className="text-2xl font-display font-black text-[#0F172A] group-hover:text-[#0E7490] transition-colors mb-1">
                  {chapter.title}
                </h3>
                <h4 className="text-xs font-mono text-[#D97706] mb-3 uppercase tracking-wider font-bold">
                  {chapter.subtitle}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {chapter.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500 font-semibold">
                <span>Core Track</span>
                <span className="text-[#0E7490] group-hover:translate-x-1 transition-transform">Explore →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
