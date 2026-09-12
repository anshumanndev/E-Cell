import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, MapPin, Clock, Tag, CheckCircle2, ArrowRight, ShieldCheck, Gift } from 'lucide-react';
import { SectionBadge } from '../effects/SectionBadge';
import { featuredEvent } from '../../data/eventsData';
import { MagneticButton } from '../effects/MagneticButton';
import { AtmosphericGlow } from '../effects/AtmosphericGlow';
import { ECellBackgroundWatermark } from '../effects/ECellBackgroundWatermark';

interface FeaturedEventSectionProps {
  onOpenRegister?: () => void;
}

export const FeaturedEventSection: React.FC<FeaturedEventSectionProps> = ({ onOpenRegister }) => {
  return (
    <section id="featured-event" className="relative py-8 lg:py-12 border-t border-slate-100/60 overflow-hidden select-none">
      <ECellBackgroundWatermark size="giant" position="center" opacity="opacity-[0.03]" />
      <AtmosphericGlow variant="top" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6 lg:mb-8">
          <SectionBadge icon={<Sparkles size={13} />}>
            THE FLAGSHIP CONCLAVE
          </SectionBadge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-[#0F172A] tracking-tight">
            {featuredEvent.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
            {featuredEvent.description}
          </p>
        </div>

        {/* Big Conversion Master Card */}
        <div className="relative rounded-3xl bg-white border border-teal-600/20 p-8 sm:p-10 lg:p-12 shadow-card-hover">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Event Highlights & Inclusions */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#0E7490]/10 border border-[#0E7490]/20 text-xs font-mono font-bold text-[#0E7490]">
                  CONCLAVE '26
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono font-bold text-emerald-700 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  Live Registration Window
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#0F172A] leading-snug">
                Exclusive Founder Keynotes, Networking & Certified Startup Masterclasses
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-600">
                  <Calendar size={18} className="text-[#0E7490] shrink-0" />
                  <div>
                    <p className="font-bold text-[#0F172A]">Date</p>
                    <p>{featuredEvent.formattedDate}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-600">
                  <Clock size={18} className="text-[#0E7490] shrink-0" />
                  <div>
                    <p className="font-bold text-[#0F172A]">Timing</p>
                    <p>{featuredEvent.time}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-600 sm:col-span-2">
                  <MapPin size={18} className="text-[#0E7490] shrink-0" />
                  <div>
                    <p className="font-bold text-[#0F172A]">Venue</p>
                    <p>{featuredEvent.venue}</p>
                  </div>
                </div>
              </div>

              {/* Inclusions Checklist */}
              <div className="pt-4 border-t border-slate-100">
                <h4 className="text-xs font-mono text-[#0E7490] font-bold uppercase tracking-wider mb-3">
                  PASS INCLUSIONS & PRIVILEGES:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {featuredEvent.inclusions.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                      <CheckCircle2 size={15} className="text-[#0E7490] shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pricing & Checkout Card */}
            <div className="lg:col-span-5 rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <span className="text-xs font-mono font-bold text-slate-700 uppercase">
                    REGISTRATION PASS
                  </span>
                  <span className="text-xs font-mono text-amber-700 bg-amber-100 px-2 py-0.5 rounded-lg border border-amber-300 font-bold">
                    Closes {featuredEvent.deadline}
                  </span>
                </div>

                {/* Price Display */}
                <div className="pt-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl sm:text-5xl font-display font-black text-[#0F172A]">
                      ₹{featuredEvent.specialPrice}
                    </span>
                    <span className="text-lg text-slate-400 line-through font-mono">
                      ₹{featuredEvent.originalPrice}
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-100 px-2 py-1 rounded-lg">
                      SAVE ₹{featuredEvent.ambassadorDiscount}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Inclusive of workshop access, meals, goodies kit, and verified certificate.
                  </p>
                </div>

                {/* Ambassador Referral Badge */}
                <div className="mt-6 p-3.5 rounded-xl bg-[#0E7490]/10 border border-[#0E7490]/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Tag size={16} className="text-[#0E7490]" />
                    <div className="text-xs">
                      <p className="font-mono text-[#0E7490] font-black tracking-wider">
                        {featuredEvent.ambassadorCode}
                      </p>
                      <p className="text-[10px] text-slate-600 font-semibold">
                        Ambassador: {featuredEvent.referralName}
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-700 font-bold">
                    -₹100 APPLIED
                  </span>
                </div>
              </div>

              {/* Action */}
              <div className="space-y-3">
                <MagneticButton
                  variant="primary"
                  size="lg"
                  onClick={onOpenRegister}
                  className="w-full"
                >
                  <span>CLAIM PASS & GET QR TICKET</span>
                  <ArrowRight size={18} />
                </MagneticButton>

                <div className="flex items-center justify-center gap-4 text-[11px] font-mono text-slate-500 pt-1">
                  <span className="flex items-center gap-1">
                    <ShieldCheck size={13} className="text-[#0E7490]" />
                    Instant Pass Generation
                  </span>
                  <span className="flex items-center gap-1">
                    <Gift size={13} className="text-[#0E7490]" />
                    Goodies Kit Included
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
