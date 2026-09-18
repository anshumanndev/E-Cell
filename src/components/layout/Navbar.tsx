import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ArrowRight, Sparkles } from 'lucide-react';
import { ECellLogo } from '../effects/ECellLogo';
import { MobileMenu } from './MobileMenu';

interface NavbarProps {
  onOpenRegister?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#hero' },
    { name: 'About', href: '/#about' },
    { name: 'Events', href: '/#Events' },
    { name: 'Community', href: '/#community' },
    { name: 'Team', href: '/#team' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Contact', href: '/#contact' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-3'
            : 'bg-white/70 backdrop-blur-md py-4 border-b border-slate-100/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Official E-CELL UIT Brand Logo on Top Left Corner */}
          <a
            href="/#hero"
            className="group focus:outline-none focus:ring-2 focus:ring-[#0E7490]/30 rounded-xl transition-transform cursor-pointer"
          >
            <ECellLogo size="sm" showSubtitle={true} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-[#0E7490] hover:bg-white transition-all tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center gap-3">
            {onOpenRegister ? (
              <button
                onClick={onOpenRegister}
                className="relative inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-display font-bold text-white bg-gradient-to-r from-[#0E7490] to-[#0D9488] hover:from-[#164E63] hover:to-[#0E7490] shadow-glow-teal transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>REGISTER NOW</span>
                <ArrowRight size={14} className="hidden sm:inline" />
              </button>
            ) : (
              <Link
                to="/register"
                className="relative inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-display font-bold text-white bg-gradient-to-r from-[#0E7490] to-[#0D9488] hover:from-[#164E63] hover:to-[#0E7490] shadow-glow-teal transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>REGISTER NOW</span>
                <ArrowRight size={14} className="hidden sm:inline" />
              </Link>
            )}

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="lg:hidden p-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 hover:text-[#0E7490] focus:outline-none focus:ring-2 focus:ring-[#0E7490]"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
        onOpenRegister={onOpenRegister}
      />
    </>
  );
};
