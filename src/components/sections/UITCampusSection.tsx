import React from 'react';
import { motion } from 'framer-motion';
import { Building2, MapPin, GraduationCap, Award, Briefcase, Users } from 'lucide-react';
import { SectionBadge } from '../effects/SectionBadge';
import { siteConfig } from '../../data/siteData';

export const UITCampusSection: React.FC = () => {
  return (
    <section id="uit-campus" className="relative py-8 lg:py-12 border-t border-slate-100/60 overflow-hidden select-none">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -left-20 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-6 lg:mb-8">
          <SectionBadge icon={<Building2 size={13} />}>
            INSTITUTIONAL FOUNDATION
          </SectionBadge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            THE CAMPUS BEHIND THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-amber-600">COMMUNITY</span>
          </h2>
          <p className="text-lg font-display font-bold text-teal-800 mt-2">
            UNITED INSTITUTE OF TECHNOLOGY
          </p>
          <p className="text-xs sm:text-sm text-slate-600 flex items-center justify-center gap-1.5 mt-2 font-mono">
            <MapPin size={14} className="text-teal-600" />
            <span>{siteConfig.location}</span>
          </p>
        </div>

        {/* 4 Verified Institutional Figures */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {siteConfig.institutionalStats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-card p-6 rounded-2xl flex flex-col justify-between group hover:border-teal-500/50 hover:shadow-lg transition-all duration-300"
            >
              <div>
                <span className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 group-hover:text-teal-700 transition-colors">
                  {stat.value}
                </span>
                <h3 className="text-base font-display font-bold text-teal-700 mt-1">
                  {stat.label}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {stat.detail}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/80 text-[10px] font-mono text-slate-500">
                UIT Campus Benchmark
              </div>
            </motion.div>
          ))}
        </div>

        {/* Attribution Notice */}
        <div className="text-center">
          <span className="text-[11px] font-mono text-slate-500 bg-white/80 border border-slate-200 px-4 py-1.5 rounded-full shadow-sm">
            * Note: These metrics represent verified United Group / UIT institutional milestones across engineering and management disciplines.
          </span>
        </div>
      </div>
    </section>
  );
};
