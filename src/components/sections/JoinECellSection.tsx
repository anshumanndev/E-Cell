import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, X, CheckCircle2, Send } from 'lucide-react';
import { SectionBadge } from '../effects/SectionBadge';
import { recruitmentRoles } from '../../data/teamData';
import { MagneticButton } from '../effects/MagneticButton';

export const JoinECellSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(recruitmentRoles[0].name);
  const [formData, setFormData] = useState({ name: '', email: '', collegeYear: '', reason: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    try {
      await fetch('/api/ambassador', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, role: selectedRole })
      });
    } catch (err) {}
    setTimeout(() => {
      setIsSubmitted(false);
      setModalOpen(false);
      setFormData({ name: '', email: '', collegeYear: '', reason: '' });
    }, 2000);
  };

  return (
    <section id="join-ecell" className="relative py-8 lg:py-12 border-t border-slate-100/60 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6 lg:mb-8">
          <SectionBadge icon={<Sparkles size={13} />}>
            RECRUITMENT & MEMBERSHIP
          </SectionBadge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-[#0F172A] tracking-tight leading-tight">
            DON'T JUST JOIN A CLUB. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E7490] via-[#0D9488] to-[#D97706]">JOIN A MOVEMENT.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4">
            E-Cell UIT is where high-ambition undergraduates build real products, organize regional conclaves, and manage national partnerships.
          </p>
        </div>

        {/* 8 Department Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 lg:mb-8">
          {recruitmentRoles.map((role) => (
            <div
              key={role.name}
              className="glass-card p-5 rounded-2xl flex flex-col justify-between hover:border-[#0E7490]/70"
            >
              <div>
                <h3 className="text-lg font-display font-black text-[#0F172A] mb-1">
                  {role.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {role.desc}
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-slate-100 text-[11px] font-mono text-[#0E7490] font-bold">
                Recruiting Cohort '26
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <MagneticButton
            variant="primary"
            size="lg"
            onClick={() => setModalOpen(true)}
          >
            <span>JOIN THE TEAM</span>
            <ArrowRight size={18} />
          </MagneticButton>
        </div>
      </div>

      {/* Recruitment Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-3xl bg-white border border-teal-600/20 p-6 sm:p-8 relative shadow-2xl"
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-[#0E7490] font-bold uppercase mb-1">
                <span>E-Cell UIT Recruitment</span>
              </div>

              <h3 className="text-2xl font-display font-black text-[#0F172A] mb-2">
                Join the E-Cell Movement
              </h3>
              <p className="text-xs text-slate-600 mb-6">
                Tell us about your interests and which department matches your skills.
              </p>

              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-600">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-xl font-display font-bold text-[#0F172A]">
                    Application Received!
                  </h4>
                  <p className="text-xs text-slate-600 max-w-xs">
                    Our leadership team will review your profile and reach out via email/phone.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-700 font-bold mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Aryan Sharma"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-[#0E7490] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-700 font-bold mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-[#0E7490] focus:bg-white focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-700 font-bold mb-1">
                        Department
                      </label>
                      <select
                        value={selectedRole}
                        onChange={(e) => setSelectedRole(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-[#0E7490] focus:outline-none"
                      >
                        {recruitmentRoles.map((r) => (
                          <option key={r.name} value={r.name}>
                            {r.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 font-bold mb-1">
                      Why do you want to join E-Cell UIT?
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.reason}
                      onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                      placeholder="Briefly describe what you would like to build or organize..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-[#0E7490] focus:bg-white focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-[#0E7490] hover:bg-[#083344] text-white font-display font-bold text-sm tracking-wide shadow-glow-teal flex items-center justify-center gap-2 transition-all"
                  >
                    <span>SUBMIT APPLICATION</span>
                    <Send size={15} />
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
