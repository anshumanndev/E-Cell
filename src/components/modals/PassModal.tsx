import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import confetti from 'canvas-confetti';
import {
  X,
  CheckCircle2,
  CalendarPlus,
  Printer,
  Share2,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { downloadCalendarInvite } from '../../utils/calendar';
import { RegistrationSubmission } from '../../types';
import { ECellLogo } from '../effects/ECellLogo';

interface PassModalProps {
  isOpen: boolean;
  onClose: () => void;
  registration: RegistrationSubmission | null;
}

export const PassModal: React.FC<PassModalProps> = ({
  isOpen,
  onClose,
  registration
}) => {
  useEffect(() => {
    if (isOpen) {
      confetti({
        particleCount: 75,
        spread: 70,
        origin: { y: 0.55 },
        colors: ['#0E7490', '#0D9488', '#F59E0B', '#06B6D4', '#D97706']
      });
    }
  }, [isOpen]);

  if (!registration) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "I'm attending ILLUMINATE 2026!",
        text: `Just secured my pass for ILLUMINATE 2026 at E-Cell UIT! Join me on September 30. Use code CA26ZTBUW for ₹100 off!`,
        url: window.location.origin
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`I'm attending ILLUMINATE 2026 at E-Cell UIT Prayagraj! Register now at: ${window.location.origin}`);
      alert("Registration pass link copied to clipboard!");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl bg-white rounded-3xl border border-teal-600/20 shadow-2xl p-6 sm:p-8 relative my-8"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            >
              <X size={18} />
            </button>

            {/* Success Header */}
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-600 mx-auto mb-3">
                <CheckCircle2 size={28} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-black text-[#0F172A]">
                YOU'RE IN.
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Official Conclave Pass Issued • E-Cell UIT Prayagraj
              </p>
            </div>

            {/* Digital Pass Card */}
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-50 via-white to-teal-50/40 border border-teal-600/20 p-5 sm:p-6 shadow-md mb-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <ECellLogo size="sm" showSubtitle={false} />
                <div className="text-right">
                  <span className="text-[10px] font-mono text-slate-500 block">PASS NUMBER</span>
                  <span className="text-sm font-mono font-black text-[#0E7490]">
                    {registration.registrationId}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 items-center">
                <div className="sm:col-span-2 space-y-2">
                  <div>
                    <span className="text-[10px] font-mono text-[#0E7490] font-bold uppercase">
                      ATTENDEE NAME
                    </span>
                    <h4 className="text-xl font-display font-black text-slate-900">
                      {registration.fullName}
                    </h4>
                    <p className="text-xs text-slate-600 font-mono">
                      {registration.college}
                    </p>
                  </div>

                  <div className="text-xs text-slate-700 space-y-0.5 pt-1">
                    <p><span className="font-bold">Event:</span> ILLUMINATE 2026</p>
                    <p><span className="font-bold">Date:</span> 30 September 2026 • 9:00 AM</p>
                    <p><span className="font-bold">Venue:</span> Auditorium, UIT Prayagraj</p>
                  </div>
                </div>

                {/* QR Code */}
                <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <QRCodeSVG
                    value={`https://ecell-uit.in/verify?id=${registration.registrationId}&name=${encodeURIComponent(registration.fullName)}`}
                    size={105}
                    level="H"
                  />
                  <span className="text-[9px] font-mono text-slate-600 font-bold mt-1">
                    SCAN AT CHECK-IN
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono">
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <ShieldCheck size={13} />
                  Verified Attendance
                </span>
                <span className="text-[#0E7490] font-bold">
                  ₹{registration.amountPaid} PAID
                </span>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={downloadCalendarInvite}
                className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-colors"
              >
                <CalendarPlus size={14} className="text-[#0E7490]" />
                <span className="hidden sm:inline">Calendar</span>
              </button>

              <button
                onClick={() => window.print()}
                className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-colors"
              >
                <Printer size={14} className="text-[#0E7490]" />
                <span className="hidden sm:inline">Print Pass</span>
              </button>

              <button
                onClick={handleShare}
                className="py-2.5 px-3 rounded-xl bg-[#0E7490] hover:bg-[#083344] text-white text-xs font-mono font-bold flex items-center justify-center gap-1.5 shadow-sm transition-colors"
              >
                <Share2 size={14} />
                <span>Share</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
