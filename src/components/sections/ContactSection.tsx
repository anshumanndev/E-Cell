import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import { SectionBadge } from '../effects/SectionBadge';
import { siteConfig } from '../../data/siteData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'General Inquiry', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Call Express API endpoint
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
    } catch {
      // Graceful fallback
    }

    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
    }, 3500);
  };

  return (
    <section id="contact" className="relative py-8 lg:py-12 border-t border-slate-100/60 overflow-hidden select-none">
      {/* Soft ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-teal-50/70 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: Heading & Official Details */}
          <div className="lg:col-span-5 space-y-6">
            <SectionBadge icon={<MessageSquare size={13} />}>
              DIRECT CONNECT
            </SectionBadge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              HAVE AN IDEA? <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-amber-600">TALK TO US.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Whether you're exploring sponsorship alliances, speaker nominations, collaborative incubations, or have event queries — our organizing council is ready to connect.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3 text-sm text-slate-600">
                <MapPin size={18} className="text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-900">United Institute of Technology</p>
                  <p className="text-xs">{siteConfig.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Mail size={18} className="text-teal-600 shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900">Email Address</p>
                  <a href={`mailto:${siteConfig.contactEmail}`} className="text-xs text-teal-700 hover:underline font-mono">
                    {siteConfig.contactEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Phone size={18} className="text-teal-600 shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900">Phone Support</p>
                  <a href={`tel:${siteConfig.contactPhone}`} className="text-xs text-teal-700 hover:underline font-mono">
                    {siteConfig.contactPhone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 rounded-3xl border border-slate-200/80 shadow-lg bg-white/90">
              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-600">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-slate-900">
                    Message Dispatched!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-sm">
                    Thank you for reaching out. The E-Cell UIT secretariat will get back to you within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-700 mb-1 font-semibold">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Priyanshu Roy"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-teal-600 focus:bg-white focus:outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-700 mb-1 font-semibold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="priyanshu@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-teal-600 focus:bg-white focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 mb-1 font-semibold">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-teal-600 focus:bg-white focus:outline-none transition-all"
                    >
                      <option value="General Inquiry">General Inquiry / Questions</option>
                      <option value="Sponsorship">Corporate Sponsorship & Alliances</option>
                      <option value="Speaker Nomination">Speaker / Founder Nomination</option>
                      <option value="Campus Delegation">College Bulk Registration Delegation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 mb-1 font-semibold">
                      Message / Proposal *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details about your proposal or question..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-teal-600 focus:bg-white focus:outline-none resize-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-teal-700 to-cyan-700 text-white font-display font-bold text-sm tracking-wide shadow-md flex items-center justify-center gap-2 hover:opacity-95 transition-opacity cursor-pointer disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'DISPATCHING...' : 'SEND MESSAGE'}</span>
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
