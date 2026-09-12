import React from 'react';
import { IlluminatEBrand } from '../effects/IlluminatEBrand';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Flame, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EnergyTrailsCanvas } from '../effects/EnergyTrailsCanvas';
import { AtmosphericGlow } from '../effects/AtmosphericGlow';
import { LightPulse } from '../effects/LightPulse';
import { MagneticButton } from '../effects/MagneticButton';
import { ThreeInnovationCore } from '../effects/ThreeInnovationCore';
import { featuredEvent } from '../../data/eventsData';

interface HeroSectionProps {
  onOpenRegister?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenRegister }) => {
  return (
    <section id="hero" className="relative min-h-[95vh] flex flex-col justify-between pt-28 pb-10 overflow-hidden select-none">
      <EnergyTrailsCanvas intensity="high" />
      <AtmosphericGlow variant="center" />
      <LightPulse delay={1} />

      {/* Main Hero 12-Column Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Hero Narrative (7 Cols) */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Organization Subheading */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E7490]/10 border border-[#0E7490]/20 text-xs sm:text-sm font-mono tracking-widest text-[#0E7490] font-bold uppercase mb-4 backdrop-blur-md shadow-sm"
            >
              <Sparkles size={14} className="text-[#0E7490]" />
              <span>E-CELL UIT PRESENTS</span>
            </motion.div>

            {/* Main Title - ILLUMINATE (Prominently Larger & Imposing) */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="flex justify-center items-center"
            >
              <IlluminatEBrand size="hero" className="mb-3" />
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-[#164E63] max-w-xl mb-3 tracking-tight"
            >
              Empowering the Next Generation of Changemakers
            </motion.p>

            {/* Supporting Narrative */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg text-slate-600 max-w-xl mb-6 leading-relaxed"
            >
              A premier platform where ambitious minds meet bold ideas, entrepreneurial thinking, and verified opportunities to turn imagination into enterprise.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto"
            >
              <MagneticButton
                variant="primary"
                size="lg"
                onClick={onOpenRegister}
                className="w-full sm:w-auto shadow-md"
              >
                <span>REGISTER FOR CONCLAVE</span>
                <ArrowRight size={18} />
              </MagneticButton>

              <a href="#about" className="w-full sm:w-auto">
                <MagneticButton variant="secondary" size="lg" className="w-full sm:w-auto shadow-sm">
                  <span>EXPLORE THE JOURNEY</span>
                  <ArrowRight size={16} className="text-[#0E7490]" />
                </MagneticButton>
              </a>
            </motion.div>

            {/* Quick Event Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.65 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-7 text-xs font-mono text-slate-600"
            >
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <Calendar size={13} className="text-[#0E7490]" />
                <span>{featuredEvent.formattedDate}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <MapPin size={13} className="text-[#0E7490]" />
                <span>Auditorium, UIT Prayagraj</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 font-bold shadow-sm">
                <Flame size={13} className="text-[#F59E0B]" />
                <span>IIT Bombay Keynotes</span>
              </div>
            </motion.div>
          </div>

          {/* Right 3D Innovation Core Animation (5 Cols - Shifted Right & Distinct) */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 w-full flex justify-center lg:justify-end relative"
          >
            <div className="relative w-full max-w-lg lg:max-w-none rounded-3xl bg-gradient-to-br from-white/95 via-white/80 to-teal-50/60 p-4 sm:p-6 border border-teal-600/20 shadow-xl backdrop-blur-xl">
              {/* Decorative corner accent lights */}
              <div className="absolute -top-3 -right-3 w-20 h-20 bg-amber-400/20 rounded-full blur-xl pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-teal-500/20 rounded-full blur-xl pointer-events-none" />

              {/* Interactive 3D Three.js Rig */}
              <ThreeInnovationCore />

              {/* 3D Floating Caption Card */}
              <div className="mt-2 p-3.5 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#0E7490] font-bold uppercase tracking-wider block">
                    INTERACTIVE 3D INNOVATION CORE
                  </span>
                  <p className="text-xs font-display font-extrabold text-[#0F172A] mt-0.5">
                    Rotate with cursor • Gyroscopic Particle Orbit
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-pulse" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Micro-Label Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500"
      >
        <span className="tracking-[0.2em] uppercase font-bold text-slate-700">
          ENTREPRENEURSHIP • INNOVATION • LEADERSHIP
        </span>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-slate-800 font-bold">Registrations Open for Conclave '26</span>
        </div>
      </motion.div>
    </section>
  );
};
