import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Zap, Lightbulb, Compass, Rocket } from 'lucide-react';
import { SectionBadge } from '../effects/SectionBadge';
import { AtmosphericGlow } from '../effects/AtmosphericGlow';
import { IlluminatEBrand } from '../effects/IlluminatEBrand';
import { IlluminateText } from '../effects/IlluminateText';

export const AboutSection: React.FC = () => {
  const narrativePillars = [
    {
      icon: <Lightbulb className="text-[#D97706]" size={20} />,
      title: "Breakthroughs begin with questions.",
      desc: "Every world-changing venture started with someone daring to ask: why does this have to be so difficult, slow, or inaccessible?"
    },
    {
      icon: <Compass className="text-[#0E7490]" size={20} />,
      title: "Startups begin with problems.",
      desc: "Great companies aren't built on vanity features. They are forged in the crucible of real customer pain and relentless validation."
    },
    {
      icon: <Zap className="text-[#0D9488]" size={20} />,
      title: "Movements begin with people who act.",
      desc: "Ideas alone are cheap. Execution, grit, and the audacity to build in public turn blueprints into living institutions."
    },
    {
      icon: <Rocket className="text-[#F59E0B]" size={20} />,
      title: "ILLUMINATE is built for those people.",
      desc: "We provide the high-octane environment, mentorship, and ecosystem required to take your vision from zero to one.",
      isIlluminate: true,
    }
  ];

  return (
    <section id="about" className="relative py-8 lg:py-12 border-t border-slate-100/60 overflow-hidden select-none">
      <AtmosphericGlow variant="top" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Editorial Header */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 sticky top-28 space-y-6"
          >
            <SectionBadge icon={<Sparkles size={13} />}>
              THE GENESIS
            </SectionBadge>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-[#0F172A] tracking-tight leading-[1.08]">
              AN IDEA IS ONLY THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E7490] via-[#0D9488] to-[#D97706]">BEGINNING.</span>
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              <IlluminateText>ILLUMINATE is not another passive seminar. It is an inflection point where engineering curiosity transforms into venture-scale action.</IlluminateText>
            </p>

            <div className="pt-2">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 text-sm font-mono font-bold text-[#0E7490] hover:text-[#083344] transition-colors group"
              >
                <span>EXPLORE THE CONCLAVE NARRATIVE</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right Narrative Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {narrativePillars.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="glass-card p-6 flex flex-col justify-between group hover:border-[#0E7490]/50"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-display font-bold text-[#0F172A] mb-2 leading-snug">
                    {(item as { isIlluminate?: boolean }).isIlluminate ? (
                      <><IlluminatEBrand /> is built for those people.</>
                    ) : item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-[#0E7490] font-bold">
                  <span>PILLAR 0{idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0E7490]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
