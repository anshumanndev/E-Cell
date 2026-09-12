import React from 'react';
import { AtmosphericGlow } from '../effects/AtmosphericGlow';
import { motion } from 'framer-motion';
import { Code2, Palette, TrendingUp, Megaphone, Settings2, Users, Sparkles } from 'lucide-react';
import { SectionBadge } from '../effects/SectionBadge';

export const CommunitySection: React.FC = () => {
  const domains = [
    { title: "Tech & Engineering", desc: "Full-stack builders, AI researchers, and hardware architects creating high-velocity solutions.", icon: <Code2 className="text-[#0E7490]" size={22} /> },
    { title: "Product & Design", desc: "UI/UX designers and creative directors crafting intuitive user journeys and visual branding.", icon: <Palette className="text-[#0D9488]" size={22} /> },
    { title: "Business Strategy", desc: "Financial modelers, market analysts, and deal makers architecting monetization engines.", icon: <TrendingUp className="text-[#D97706]" size={22} /> },
    { title: "Growth & Marketing", desc: "Storytellers, viral marketers, and campaign architects accelerating user acquisition.", icon: <Megaphone className="text-[#164E63]" size={22} /> },
    { title: "Operations & Logistics", desc: "Execution specialists orchestrating flawless event mechanics and partnership workflows.", icon: <Settings2 className="text-[#06B6D4]" size={22} /> },
    { title: "Ecosystem Leadership", desc: "Visionary organizers rallying communities, inspiring action, and driving long-term culture.", icon: <Users className="text-[#F59E0B]" size={22} /> }
  ];

  return (
    <section id="community" className="relative py-8 lg:py-12 border-t border-slate-100/60 overflow-hidden select-none">
      <AtmosphericGlow variant="bottom" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6 lg:mb-8">
          <SectionBadge icon={<Sparkles size={13} />}>
            MULTIDISCIPLINARY NETWORK
          </SectionBadge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-[#0F172A] tracking-tight">
            YOU DON'T BUILD <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E7490] via-[#0D9488] to-[#D97706]">ALONE.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Different perspectives strengthen ideas. ILLUMINATE brings together six essential disciplines to forge complete startup founding teams.
          </p>
        </div>

        {/* 6 Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((dom, idx) => (
            <motion.div
              key={dom.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-card p-6 flex flex-col justify-between group hover:border-[#0E7490]/70"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#0E7490]/10 transition-all">
                  {dom.icon}
                </div>
                <h3 className="text-xl font-display font-black text-[#0F172A] mb-2 group-hover:text-[#0E7490] transition-colors">
                  {dom.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {dom.desc}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500 font-semibold">
                <span>Network Node</span>
                <span className="text-[#0E7490]">Connected</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
