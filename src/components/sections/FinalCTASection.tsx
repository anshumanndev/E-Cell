import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Flame } from 'lucide-react';
import { MagneticButton } from '../effects/MagneticButton';
import { AtmosphericGlow } from '../effects/AtmosphericGlow';
import { LightPulse } from '../effects/LightPulse';
import { IlluminatEBrand } from '../effects/IlluminatEBrand';

interface FinalCTASectionProps {
  onOpenRegister?: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenRegister }) => {
  return (
    <section className="relative py-8 lg:py-12 border-t border-teal-500/20 overflow-hidden select-none">
      <AtmosphericGlow variant="warm-center" />
      <LightPulse delay={0} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-xs font-mono text-teal-800 tracking-widest uppercase shadow-sm">
            <Flame size={14} className="text-amber-500" />
            <span>ONE IDEA. ONE DECISION. ONE BEGINNING.</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold text-slate-900 tracking-tight leading-none">
            ILLUMINATE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-cyan-600 to-amber-600">IDEA.</span>
          </h2>

          <p className="text-lg sm:text-xl text-teal-900 font-medium max-w-xl mx-auto">
            The next changemaker could be you.
          </p>

          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
            Reserve your pass for <IlluminatEBrand /> 2026. Join the cohort of founders, builders, and leaders shaping India's startup frontier.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            {onOpenRegister ? (
              <MagneticButton variant="primary" size="lg" onClick={onOpenRegister}>
                <span>JOIN THE MOVEMENT</span>
                <ArrowRight size={18} />
              </MagneticButton>
            ) : (
              <Link to="/register">
                <MagneticButton variant="primary" size="lg">
                  <span>JOIN THE MOVEMENT</span>
                  <ArrowRight size={18} />
                </MagneticButton>
              </Link>
            )}

            <a href="#workshops">
              <MagneticButton variant="secondary" size="lg">
                <span>EXPLORE WORKSHOPS</span>
                <ArrowRight size={16} className="text-teal-700" />
              </MagneticButton>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
