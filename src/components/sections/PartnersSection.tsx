import React from 'react';
import { AtmosphericGlow } from '../effects/AtmosphericGlow';
import { motion } from 'framer-motion';
import { Handshake, ShieldCheck, Sparkles } from 'lucide-react';
import { SectionBadge } from '../effects/SectionBadge';

export const PartnersSection: React.FC = () => {
  const partnerCategories = [
    { title: "Institutional Ecosystem", desc: "Collaborating with premier technical institutes and regional innovation cells." },
    { title: "Venture & Angel Networks", desc: "Connecting high-potential student founders with early-stage capital and syndicates." },
    { title: "Knowledge & Cloud Partners", desc: "Equipping hackathon and conclave builders with platform credits, APIs, and tooling." },
    { title: "Media & Outreach Alliances", desc: "Amplifying startup breakthrough stories across national entrepreneurial forums." }
  ];

  return (
    <section className="relative py-8 lg:py-12 border-t border-slate-100/60 overflow-hidden select-none">
      <AtmosphericGlow variant="subtle" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6 lg:mb-8">
          <SectionBadge icon={<Handshake size={13} />}>
            ALLIANCES & ECOSYSTEM
          </SectionBadge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            NETWORK <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-amber-600">PARTNERS</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Building sustainable alliances across academia, venture funds, and industry incubators.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {partnerCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-card p-6 flex flex-col justify-between hover:border-teal-500/50 hover:shadow-lg transition-all duration-300"
            >
              <div>
                <span className="text-xs font-mono text-teal-700 font-bold">
                  TIER 0{idx + 1}
                </span>
                <h3 className="text-lg font-display font-bold text-slate-900 mt-1 mb-2">
                  {cat.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {cat.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/80 text-[10px] font-mono text-emerald-600 font-semibold">
                ● Official Alliance Framework
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-500 bg-white border border-slate-200 px-4 py-1.5 rounded-full shadow-sm">
            <ShieldCheck size={13} className="text-teal-600" />
            Partner logos and formal MoU signatories displayed following mutual institutional clearance.
          </span>
        </div>
      </div>
    </section>
  );
};
