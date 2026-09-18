import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Lock, X, ShieldCheck } from 'lucide-react';
import { SectionBadge } from '../effects/SectionBadge';
import { speakersData } from '../../data/eventsData';
import { Speaker } from '../../types';
import { IlluminateText } from '../effects/IlluminateText';

export const SpeakersSection: React.FC = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  return (
    <section id="speakers" className="relative py-8 lg:py-12 border-t border-slate-100/60 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 lg:mb-8 gap-6">
          <div>
            <SectionBadge icon={<Sparkles size={13} />}>
              KEYNOTE & JURY ROSTER
            </SectionBadge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-[#0F172A] tracking-tight">
              SPEAKERS & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E7490] via-[#0D9488] to-[#D97706]">FOUNDERS</span>
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            Learn directly from IIT Bombay alumni, venture capital leads, and engineering leaders who have built high-scale products.
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {speakersData.map((speaker, idx) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedSpeaker(speaker)}
              className="glass-card p-6 flex flex-col justify-between group cursor-pointer hover:border-[#0E7490]/70"
            >
              <div>
                {/* Speaker Avatar / Placeholder Frame */}
                <div className="relative w-full h-52 rounded-2xl bg-gradient-to-b from-slate-100 to-slate-200/80 border border-slate-200 flex flex-col items-center justify-center overflow-hidden mb-6 group-hover:border-[#0E7490]/40 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-white border border-slate-300 flex items-center justify-center text-[#0E7490] mb-2 shadow-sm group-hover:scale-110 transition-transform">
                    <Lock size={22} className="text-[#0E7490]" />
                  </div>
                  <span className="text-xs font-mono tracking-wider text-slate-900 uppercase font-black">
                    OFFICIAL REVEAL IMMINENT
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 font-semibold mt-0.5">
                    IIT Bombay Ecosystem
                  </span>

                  {/* Corner Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 border border-slate-200 text-[10px] font-mono font-bold text-[#0E7490] shadow-sm">
                    {speaker.category}
                  </div>
                </div>

                <h3 className="text-xl font-display font-black text-[#0F172A] group-hover:text-[#0E7490] transition-colors">
                  {speaker.name}
                </h3>
                <p className="text-xs font-mono text-[#0E7490] font-bold mt-0.5">
                  {speaker.designation}
                </p>
                <p className="text-xs text-slate-500 font-mono mt-0.5">
                  {speaker.company}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 mt-3 line-clamp-2 leading-relaxed">
                  {speaker.bio}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                <span className="text-[#0E7490] font-bold group-hover:underline">
                  View Spotlight Details →
                </span>
                <span className="w-2 h-2 rounded-full bg-[#0E7490] animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Verification Transparency Notice */}
        <div className="mt-10 p-4 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-between flex-wrap gap-4 text-xs font-mono text-slate-600 shadow-sm">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-[#0E7490]" />
            <span>Exact names and company profiles will be publicly unveiled following final scheduling confirmation.</span>
          </div>
          <span className="text-[#0E7490] font-bold">E-Cell UIT Official</span>
        </div>
      </div>

      {/* Speaker Details Modal */}
      <AnimatePresence>
        {selectedSpeaker && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedSpeaker(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-3xl bg-white border border-teal-600/20 p-6 sm:p-8 relative shadow-2xl"
            >
              <button
                onClick={() => setSelectedSpeaker(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-[#0E7490] font-bold uppercase mb-2">
                <span>{selectedSpeaker.category} Spotlight</span>
                <span>•</span>
                <span>IIT Bombay Conclave</span>
              </div>

              <h3 className="text-2xl font-display font-black text-[#0F172A]">
                {selectedSpeaker.name}
              </h3>
              <p className="text-sm font-mono text-[#0E7490] font-bold mt-1">
                {selectedSpeaker.designation} • {selectedSpeaker.company}
              </p>

              <div className="my-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {selectedSpeaker.bio}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-xs font-mono text-slate-500">
                  <IlluminateText>ILLUMINATE 2026 Verified</IlluminateText>
                </span>
                <button
                  onClick={() => setSelectedSpeaker(null)}
                  className="px-4 py-2 rounded-xl bg-[#0E7490] text-white text-xs font-bold"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
