import React from 'react';
import { AtmosphericGlow } from '../effects/AtmosphericGlow';
import { motion } from 'framer-motion';
import { MessageSquareQuote, Quote } from 'lucide-react';
import { SectionBadge } from '../effects/SectionBadge';
import { testimonialsData } from '../../data/testimonialsData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="relative py-8 lg:py-12 border-t border-slate-100/60 overflow-hidden select-none">
      <AtmosphericGlow variant="top" />
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-amber-50/70 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-6 lg:mb-8">
          <SectionBadge icon={<MessageSquareQuote size={13} />}>
            VOICES FROM THE ECOSYSTEM
          </SectionBadge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            COMMUNITY & <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-amber-600">ALUMNI VOICES</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Real reflections from founders, campus ambassadors, and students empowered through E-Cell UIT initiatives.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((test, idx) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 flex flex-col justify-between group hover:border-teal-500/50 hover:shadow-lg transition-all duration-300"
            >
              <div>
                <Quote size={28} className="text-teal-500/40 mb-4 group-hover:text-teal-600 transition-colors" />
                <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{test.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-display font-bold text-slate-900">
                    {test.name}
                  </h3>
                  <p className="text-xs font-mono text-teal-700 font-semibold">
                    {test.role}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    {test.collegeOrCompany}
                  </p>
                </div>
                <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-1 rounded">
                  '{test.batch}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
