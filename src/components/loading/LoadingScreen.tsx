import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ECellLogo } from '../effects/ECellLogo';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 500);
          }, 300);
          return 100;
        }
        const diff = Math.random() * 5 + 2;
        return Math.min(100, prev + diff);
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-[#F8FAFC] flex flex-col items-center justify-center select-none"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute w-96 h-96 bg-teal-100/40 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative flex flex-col items-center z-10 max-w-sm px-6 text-center">
            {/* Logo Entrance */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-8"
            >
              <ECellLogo size="hero" showSubtitle={true} />
            </motion.div>

            {/* Typography */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-col items-center mb-6"
            >
              <div className="flex items-center text-3xl font-display font-bold tracking-tight text-slate-900 mb-1">
                <span>I</span>
                <img 
                  src="/images/symbol.png" 
                  alt="ll" 
                  className="inline-block h-[0.8em] w-auto mx-[0.05em] object-contain" 
                />
                <span>uminat</span>
                <span className="text-teal-700">E</span>
              </div>
              <span className="text-xs tracking-[0.3em] font-mono uppercase text-slate-500">
                E-CELL UIT PRAYAGRAJ
              </span>
              <span className="text-[10px] tracking-[0.2em] font-mono uppercase text-slate-400 mt-2">
                Campus Ambassador: Arpita Mishra
              </span>
            </motion.div>

            {/* Status Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="text-[11px] font-mono tracking-widest text-slate-500 uppercase mb-4"
            >
              INITIALIZING EXPERIENCE...
            </motion.div>

            {/* Thin Teal/Cyan Progress Line */}
            <div className="w-52 h-[3px] bg-slate-200 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-teal-600 via-cyan-500 to-amber-500 shadow-[0_0_8px_rgba(13,148,136,0.5)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.2 }}
              />
            </div>

            <span className="text-[10px] font-mono text-teal-700 mt-2 font-bold">
              {Math.round(progress)}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
