import React from 'react';
import { AtmosphericGlow } from '../effects/AtmosphericGlow';
import { motion } from 'framer-motion';
import { Gift, Briefcase, Book, Calendar, PenTool, Key, Image as ImageIcon } from 'lucide-react';
import { SectionBadge } from '../effects/SectionBadge';
import { goodiesData } from '../../data/goodiesData';
import { IlluminateText } from '../effects/IlluminateText';

export const GoodiesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase': return <Briefcase className="text-[#0E7490]" size={24} />;
      case 'Book': return <Book className="text-[#0D9488]" size={24} />;
      case 'Calendar': return <Calendar className="text-[#D97706]" size={24} />;
      case 'PenTool': return <PenTool className="text-[#164E63]" size={24} />;
      case 'Key': return <Key className="text-[#F59E0B]" size={24} />;
      case 'Image': return <ImageIcon className="text-[#06B6D4]" size={24} />;
      default: return <Gift className="text-[#0E7490]" size={24} />;
    }
  };

  return (
    <section id="goodies" className="relative py-8 lg:py-12 border-t border-slate-100/60 overflow-hidden select-none">
      <AtmosphericGlow variant="bottom" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6 lg:mb-8">
          <SectionBadge icon={<Gift size={13} />}>
            EXCLUSIVE ATTENDEE MERCHANDISE
          </SectionBadge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-[#0F172A] tracking-tight">
            THE OFFICIAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E7490] via-[#0D9488] to-[#D97706]">FOUNDER GOODIES KIT</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            <IlluminateText>Every registered attendee receives the curated ILLUMINATE 2026 welcome kit upon check-in at the UIT Auditorium.</IlluminateText>
          </p>
        </div>

        {/* Goodies 6-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {goodiesData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card p-6 flex flex-col justify-between group hover:border-[#0E7490]/70"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#0E7490]/10 transition-all">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-wider text-[#0E7490] bg-[#0E7490]/10 border border-[#0E7490]/20 px-2.5 py-1 rounded-full uppercase">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-display font-black text-[#0F172A] group-hover:text-[#0E7490] transition-colors mb-1">
                  {item.name}
                </h3>
                <span className="text-xs font-mono text-[#D97706] font-bold block mb-2">
                  Quantity: {item.quantity}
                </span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500 font-semibold">
                <span>Included with Pass</span>
                <span className="text-emerald-700 font-bold">✓ Guaranteed</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
