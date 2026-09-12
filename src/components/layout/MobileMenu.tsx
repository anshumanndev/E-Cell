import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, ArrowRight, Sparkles } from 'lucide-react';
import { ECellLogo } from '../effects/ECellLogo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ name: string; href: string; isRoute?: boolean }>;
  onOpenRegister?: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navLinks,
  onOpenRegister
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-white/98 backdrop-blur-2xl flex flex-col justify-between p-6 md:hidden select-none"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <Link to="/" onClick={onClose}>
              <ECellLogo size="sm" showSubtitle={true} />
            </Link>
            <button
              onClick={onClose}
              aria-label="Close Menu"
              className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="flex flex-col gap-2.5 py-6 overflow-y-auto">
            {navLinks.map((link, idx) => {
              if (link.isRoute) {
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={onClose}
                    className="flex items-center justify-between px-4 py-3 rounded-2xl bg-slate-50 border border-slate-100 text-base font-display font-bold text-slate-800 hover:border-teal-500/30 hover:bg-teal-50/50 transition-colors"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs font-mono text-[#0E7490]">{`0${idx + 1}`}</span>
                  </Link>
                );
              }
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={onClose}
                  className="flex items-center justify-between px-4 py-3 rounded-2xl bg-slate-50 border border-slate-100 text-base font-display font-bold text-slate-800 hover:border-teal-500/30 hover:bg-teal-50/50 transition-colors"
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-mono text-[#0E7490]">{`0${idx + 1}`}</span>
                </a>
              );
            })}
          </div>

          {/* Footer Action */}
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            {onOpenRegister ? (
              <button
                onClick={() => {
                  onClose();
                  onOpenRegister();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#0E7490] to-[#0D9488] text-white font-display font-bold text-sm tracking-wide shadow-glow-teal"
              >
                <span>REGISTER FOR ILLUMINATE</span>
                <ArrowRight size={16} />
              </button>
            ) : (
              <Link
                to="/register"
                onClick={onClose}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#0E7490] to-[#0D9488] text-white font-display font-bold text-sm tracking-wide shadow-glow-teal"
              >
                <span>REGISTER FOR ILLUMINATE</span>
                <ArrowRight size={16} />
              </Link>
            )}

            <div className="flex items-center justify-center text-xs font-mono text-slate-500 pt-1">
              <span className="flex items-center gap-1.5">
                <Sparkles size={12} className="text-[#0E7490]" />
                E-Cell UIT Prayagraj Ecosystem
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
