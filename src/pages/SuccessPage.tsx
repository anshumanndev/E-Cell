import React, { useEffect, useState } from 'react';
import { IlluminatEBrand } from '../components/effects/IlluminatEBrand';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import confetti from 'canvas-confetti';
import {
  CheckCircle2,
  Calendar,
  MapPin,
  Download,
  Share2,
  CalendarPlus,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Printer
} from 'lucide-react';
import { featuredEvent } from '../data/eventsData';
import { registrationService } from '../services/registrationService';
import { downloadCalendarInvite } from '../utils/calendar';
import { RegistrationSubmission } from '../types';
import { ECellLogo } from '../components/effects/ECellLogo';
import { AtmosphericGlow } from '../components/effects/AtmosphericGlow';

export const SuccessPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const regId = searchParams.get('regId') || searchParams.get('id') || 'ILLUM-2026-8491';
  const [registration, setRegistration] = useState<RegistrationSubmission | null>(null);

  useEffect(() => {
    // Fire celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#0E7490', '#0D9488', '#F59E0B', '#06B6D4', '#0F172A']
    });

    const record = registrationService.getRegistrationById(regId);
    if (record) {
      setRegistration(record);
    }
  }, [regId]);

  const attendeeName = registration?.fullName || 'Verified Attendee';
  const displayId = registration?.registrationId || regId;
  const collegeName = registration?.college || 'United Institute of Technology';

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "I'm attending ILLUMINATE 2026!",
        text: `Just secured my pass for ILLUMINATE 2026 at E-Cell UIT! Join me on September 30. Use code CA26ZTBUW for ₹100 off!`,
        url: window.location.origin
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`I'm attending ILLUMINATE 2026 at E-Cell UIT Prayagraj! Register now at: ${window.location.origin}`);
      alert("Registration share link copied to clipboard!");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen pt-28 pb-20 relative overflow-hidden select-none">
      <AtmosphericGlow variant="top" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Success Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-600 mx-auto mb-4 shadow-sm"
          >
            <CheckCircle2 size={36} />
          </motion.div>

          <h1 className="text-4xl sm:text-6xl font-display font-black text-slate-900 tracking-tight leading-none mb-2">
            YOU'RE IN.
          </h1>
          <p className="text-base sm:text-lg text-teal-800 font-bold">
            Your registration is confirmed. Welcome to the ILLUMINATE 2026 Cohort!
          </p>
          <p className="text-xs text-slate-600 mt-1">
            An official confirmation pass has been provisioned. Present your QR pass at the entrance desk.
          </p>
        </div>

        {/* Digital Holographic Pass */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-3xl bg-white border border-teal-600/30 p-6 sm:p-8 shadow-xl overflow-hidden"
        >
          {/* Top Notch Banner */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <ECellLogo size="sm" showSubtitle={false} />
            </div>
            <div className="text-right">
              <span className="text-[10px] font-mono text-slate-500 block">PASS NUMBER</span>
              <span className="text-sm sm:text-base font-mono font-black text-teal-700 tracking-wider">
                {displayId}
              </span>
            </div>
          </div>

          {/* Attendee Details & QR Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 items-center">
            <div className="sm:col-span-2 space-y-4">
              <div>
                <span className="text-[10px] font-mono text-teal-700 font-bold tracking-widest uppercase">
                  ATTENDEE NAME
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-900">
                  {attendeeName}
                </h3>
                <p className="text-xs text-slate-600 font-mono mt-0.5">
                  {collegeName}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs text-slate-700">
                <div>
                  <span className="text-[10px] font-mono text-slate-500 block">EVENT</span>
                  <span className="font-bold text-slate-900"><IlluminatEBrand size="sm" /> 2026</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 block">DATE & TIME</span>
                  <span className="font-bold text-slate-900">30 Sept 2026 • 9:00 AM</span>
                </div>
                <div className="col-span-2">
                  <span className="text-[10px] font-mono text-slate-500 block">VENUE</span>
                  <span className="font-bold text-slate-900">Auditorium Complex, UIT Prayagraj</span>
                </div>
              </div>
            </div>

            {/* QR Code Container */}
            <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-inner">
              <QRCodeSVG
                value={`https://ecell-uit.in/verify?id=${displayId}&attendee=${encodeURIComponent(attendeeName)}`}
                size={130}
                level="H"
                includeMargin={false}
              />
              <span className="text-[9px] font-mono text-slate-700 font-bold mt-1.5 tracking-wider">
                SCAN AT CHECK-IN
              </span>
            </div>
          </div>

          {/* Bottom Security Strip */}
          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-600">
            <span className="flex items-center gap-1.5 text-emerald-700 font-bold">
              <ShieldCheck size={14} />
              Verified Participation Pass
            </span>
            <span className="text-teal-700 font-bold">
              E-CELL UIT OFFICIAL
            </span>
          </div>
        </motion.div>

        {/* Action Buttons: Calendar, Download/Print, Share */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button
            onClick={downloadCalendarInvite}
            className="py-3 px-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-display font-semibold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
          >
            <CalendarPlus size={16} className="text-teal-700" />
            <span>Add to Calendar</span>
          </button>

          <button
            onClick={handlePrint}
            className="py-3 px-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-display font-semibold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
          >
            <Printer size={16} className="text-teal-700" />
            <span>Print / Save Pass</span>
          </button>

          <button
            onClick={handleShare}
            className="py-3 px-4 rounded-xl bg-gradient-to-r from-teal-700 to-cyan-700 text-white font-display font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:opacity-95 transition-opacity cursor-pointer"
          >
            <Share2 size={16} />
            <span>Share with Friends</span>
          </button>
        </div>

        {/* Back to Home CTA */}
        <div className="text-center mt-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-teal-800 hover:text-teal-950 font-bold transition-colors"
          >
            <span>Return to <IlluminatEBrand size="sm" /> Conclave Homepage</span>
            <ArrowRight size={14} className="text-teal-700" />
          </Link>
        </div>
      </div>
    </div>
  );
};
