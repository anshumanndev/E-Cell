import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, MapPin, Phone, Instagram, Linkedin } from 'lucide-react';
import { ECellLogo } from '../effects/ECellLogo';
import { IlluminateText } from '../effects/IlluminateText';
import { siteConfig } from '../../data/siteData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white/85 backdrop-blur-sm border-t border-slate-200/60 pt-16 pb-12 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-100">
          {/* Col 1: Brand & Taglines */}
          <div className="lg:col-span-2 space-y-4">
            <a 
              href="/#hero" 
              className="inline-block"
            >
              <ECellLogo size="md" showSubtitle={true} />
            </a>
            <p className="text-xs font-mono text-[#0E7490] tracking-widest uppercase font-bold">
              {siteConfig.primaryTagline}
            </p>
            <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
              {siteConfig.secondaryTagline} A platform empowering students to turn bold ideas into high-impact startups.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#0E7490] hover:border-[#0E7490]/40 hover:bg-teal-50 transition-all"
              >
                <Instagram size={16} />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#0E7490] hover:border-[#0E7490]/40 hover:bg-teal-50 transition-all"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                aria-label="Email"
                className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#0E7490] hover:border-[#0E7490]/40 hover:bg-teal-50 transition-all"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-900 tracking-widest uppercase">
              EXPERIENCE
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="/#hero" className="hover:text-[#0E7490] transition-colors">Home</a></li>
              <li><a href="/#about" className="hover:text-[#0E7490] transition-colors">About <IlluminateText>ILLUMINATE</IlluminateText></a></li>
              <li><a href="/#experience" className="hover:text-[#0E7490] transition-colors">The Journey</a></li>
              <li><a href="/#Events" className="hover:text-[#0E7490] transition-colors">Master Events</a></li>
              <li><a href="/#goodies" className="hover:text-[#0E7490] transition-colors">Goodies Kit</a></li>
            </ul>
          </div>

          {/* Col 3: Community & Opportunities */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-900 tracking-widest uppercase">
              ECOSYSTEM
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="/#community" className="hover:text-[#0E7490] transition-colors">Community</a></li>
              <li><a href="/#join-ecell" className="hover:text-[#0E7490] transition-colors">Join E-Cell UIT</a></li>
              <li><a href="/#ambassador" className="hover:text-[#0E7490] transition-colors">Campus Ambassador</a></li>
              <li><a href="/#gallery" className="hover:text-[#0E7490] transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Col 4: Institution & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-900 tracking-widest uppercase">
              HEADQUARTERS
            </h4>
            <div className="space-y-2.5 text-xs text-slate-600">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-[#0E7490] shrink-0 mt-0.5" />
                <span>{siteConfig.location}</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-start gap-2">
                  <Linkedin size={14} className="text-[#0E7490] shrink-0 mt-1" />
                  <div className="flex flex-col gap-1.5">
                    <span>Campus Ambassador: <a href="https://www.linkedin.com/in/arpita-mishra-6a012a381" target="_blank" rel="noreferrer" className="hover:text-[#0E7490] transition-colors underline decoration-slate-300 underline-offset-2 hover:decoration-[#0E7490]">Arpita Mishra</a></span>
                    <img src="/images/ca-qr.png" alt="Campus Ambassador LinkedIn QR" className="w-14 h-14 rounded border border-slate-200 mt-1" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-[#0E7490] shrink-0 opacity-0" />
                  <span>Head of E-Cell: +91 89536 15232</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#0E7490] shrink-0" />
                <span>{siteConfig.contactEmail}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-col gap-1.5">
            <p>Â© 2026 E-Cell UIT. All rights reserved.</p>
            <p className="pb-3">
              Designed by{' '}
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="font-semibold text-slate-600 hover:text-[#0E7490] transition-colors relative inline-block group">
                <span className="underline decoration-slate-300 underline-offset-2 group-hover:decoration-[#0E7490]">UI/UX Designer 1</span>
                <span className="absolute left-1/2 -translate-x-1/2 top-full text-[10px] italic text-slate-500 whitespace-nowrap mt-0.5">ANSHUMANN GUPTA</span>
              </a>
              {' & '}
              <a href="https://www.linkedin.com/in/aditya-rai-b43407374?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="font-semibold text-slate-600 hover:text-[#0E7490] transition-colors relative inline-block group">
                <span className="underline decoration-slate-300 underline-offset-2 group-hover:decoration-[#0E7490]">UI/UX Designer 2</span>
                <span className="absolute left-1/2 -translate-x-1/2 top-full text-[10px] italic text-slate-500 whitespace-nowrap mt-0.5">ADITYA RAI</span>
              </a>
              {' & E-Cell Team'}
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a href="/#about" className="hover:text-[#0E7490]">About</a>
            <a href="/#contact" className="hover:text-[#0E7490]">Contact</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#0E7490] hover:text-[#0F4C5C] font-semibold transition-colors group"
            >
              <span>Back to Top</span>
              <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
