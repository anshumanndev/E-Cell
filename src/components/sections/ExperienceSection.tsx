import React, { useRef } from 'react';
import { IlluminatEBrand } from '../effects/IlluminatEBrand';
import { motion } from 'framer-motion';
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionBadge } from '../effects/SectionBadge';
import { experienceChapters } from '../../data/journeyData';
import { AtmosphericGlow } from '../effects/AtmosphericGlow';

export const ExperienceSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  return (
    <section id="experience" className="relative py-8 lg:py-12 border-t border-slate-100/60 overflow-hidden select-none">
      <AtmosphericGlow variant="center" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 lg:mb-8 gap-6">
          <div>
            <SectionBadge icon={<Sparkles size={13} />}>
              THE IMMERSIVE JOURNEY
            </SectionBadge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-[#0F172A] tracking-tight">
              THE <IlluminatEBrand size="lg" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E7490] via-[#0D9488] to-[#D97706]">EXPERIENCE</span>
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Six transformative milestones guiding your progression from curious thinker to venture builder.
            </p>
          </div>

          {/* Desktop scroll navigation controls */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={scrollLeft}
              aria-label="Previous Chapter"
              className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:border-[#0E7490]/50 hover:bg-teal-50 transition-all"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={scrollRight}
              aria-label="Next Chapter"
              className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:border-[#0E7490]/50 hover:bg-teal-50 transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Horizontal scroll container on desktop / swipeable on mobile */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 no-scrollbar scroll-smooth snap-x snap-mandatory"
        >
          {experienceChapters.map((chapter, idx) => (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="min-w-[280px] sm:min-w-[340px] md:min-w-[380px] snap-center glass-card p-7 flex flex-col justify-between group hover:border-[#0E7490]/70"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-3xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0E7490] to-[#D97706]">
                    0{idx + 1}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#0E7490] px-2.5 py-1 rounded-full bg-[#0E7490]/10 border border-[#0E7490]/20">
                    STAGE {chapter.number}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-black text-[#0F172A] mb-2 group-hover:text-[#0E7490] transition-colors">
                  {chapter.title}
                </h3>
                <p className="text-xs font-mono text-[#D97706] font-bold italic mb-4">
                  "{chapter.quote}"
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {chapter.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1.5 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0E7490]" />
                  Chapter Verified
                </span>
                <span className="text-[#0E7490] font-bold group-hover:translate-x-1 transition-transform">
                  Milestone →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
