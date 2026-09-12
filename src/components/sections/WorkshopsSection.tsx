import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Presentation, Layers, Sparkles, Cpu, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionBadge } from '../effects/SectionBadge';
import { workshopsData } from '../../data/workshopsData';
import { Workshop } from '../../types';

interface WorkshopsSectionProps {
  onOpenRegister?: () => void;
}

export const WorkshopsSection: React.FC<WorkshopsSectionProps> = ({ onOpenRegister }) => {
  const [activeWorkshop, setActiveWorkshop] = useState<Workshop>(workshopsData[0]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass size={20} />;
      case 'Presentation': return <Presentation size={20} />;
      case 'Layers': return <Layers size={20} />;
      case 'Sparkles': return <Sparkles size={20} />;
      case 'Cpu': return <Cpu size={20} />;
      default: return <Sparkles size={20} />;
    }
  };

  return (
    <section id="workshops" className="relative py-8 lg:py-12 border-t border-slate-100/60 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 lg:mb-8 gap-6">
          <div>
            <SectionBadge icon={<Sparkles size={13} />}>
              HANDS-ON MASTERCLASSES
            </SectionBadge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-[#0F172A] tracking-tight">
              SPECIALIZED <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E7490] via-[#0D9488] to-[#D97706]">WORKSHOP TRACKS</span>
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            Dive deep into 5 targeted engineering and venture sprints led by experienced product operators and investors.
          </p>
        </div>

        {/* Masterclass Tabs & Detail View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Workshop Tab Selector */}
          <div className="lg:col-span-5 space-y-3">
            {workshopsData.map((workshop) => {
              const isSelected = activeWorkshop.id === workshop.id;
              return (
                <button
                  key={workshop.id}
                  onClick={() => setActiveWorkshop(workshop)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all flex items-center justify-between border ${
                    isSelected
                      ? 'bg-white border-[#0E7490] shadow-md ring-2 ring-[#0E7490]/20'
                      : 'bg-white/70 border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isSelected
                          ? 'bg-[#0E7490] text-white shadow-sm'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {getIcon(workshop.iconName)}
                    </div>
                    <div>
                      <h3 className="text-base font-display font-black text-[#0F172A]">
                        {workshop.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-mono">
                        {workshop.duration} • {workshop.level}
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    size={16}
                    className={`transition-transform ${
                      isSelected ? 'text-[#0E7490] translate-x-1' : 'text-slate-300'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Selected Workshop Deep-Dive Panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeWorkshop.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="glass-panel p-8 rounded-3xl border border-teal-600/20 space-y-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#0E7490]/10 border border-[#0E7490]/20 text-xs font-mono font-bold text-[#0E7490]">
                      Track: {activeWorkshop.instructorTag}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-mono text-slate-500 font-bold">
                      <Clock size={12} className="text-[#0E7490]" />
                      {activeWorkshop.duration}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-lg border border-emerald-300 font-bold">
                    Included with Conclave Pass
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-display font-black text-[#0F172A]">
                    {activeWorkshop.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#0E7490] font-bold mt-1">
                    {activeWorkshop.tagline}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-mono text-[#D97706] uppercase tracking-wider font-bold">
                    CURRICULUM BREAKDOWN:
                  </h4>
                  <div className="space-y-2.5">
                    {activeWorkshop.topics.map((topic, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 size={16} className="text-[#0E7490] shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500">
                    Interactive Q&A + Exercise Sheets
                  </span>
                  <button
                    onClick={onOpenRegister}
                    className="inline-flex items-center gap-1.5 text-xs font-display font-bold text-white bg-[#0E7490] hover:bg-[#083344] px-4 py-2 rounded-xl shadow-sm transition-all"
                  >
                    <span>JOIN WORKSHOP</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
