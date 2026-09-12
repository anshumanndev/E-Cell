import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Tag,
  User,
  Mail,
  Phone,
  Building,
  GraduationCap,
  MapPin,
  Calendar,
  Layers,
  ShieldCheck
} from 'lucide-react';
import { featuredEvent } from '../../data/eventsData';
import { RegistrationSubmission } from '../../types';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (registration: RegistrationSubmission) => void;
}

const INTEREST_OPTIONS = [
  "Entrepreneurship",
  "Startup",
  "Innovation",
  "Technology",
  "Design",
  "Marketing",
  "Networking",
  "Leadership"
];

export const RegisterModal: React.FC<RegisterModalProps> = ({
  isOpen,
  onClose,
  onSuccess
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    course: '',
    year: '1st Year',
    city: 'Prayagraj',
    interests: ['Entrepreneurship', 'Innovation'] as string[],
    projectTitle: '',
    teamSize: '1',
    ambassadorCode: 'CA26ZTBUW',
    agreeTerms: true
  });

  const [codeApplied, setCodeApplied] = useState<boolean>(true);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const originalPrice = featuredEvent.originalPrice; // 799
  const discount = codeApplied ? 100 : 0;
  const finalPrice = originalPrice - discount; // 699

  const validateStep1 = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required.';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid Email is required.';
    if (!formData.phone.trim() || formData.phone.length < 8) errs.phone = 'Valid Phone is required.';
    if (!formData.college.trim()) errs.college = 'College is required.';
    if (!formData.course.trim()) errs.course = 'Course is required.';
    if (!formData.city.trim()) errs.city = 'City is required.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep2 = () => {
    const errs: Record<string, string> = {};
    if (formData.interests.length === 0) errs.interests = 'Select at least 1 interest.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 1 && validateStep1()) setCurrentStep(2);
    else if (currentStep === 2 && validateStep2()) setCurrentStep(3);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const toggleInterest = (interest: string) => {
    if (formData.interests.includes(interest)) {
      setFormData({ ...formData, interests: formData.interests.filter(i => i !== interest) });
    } else {
      setFormData({ ...formData, interests: [...formData.interests, interest] });
    }
  };

  const handleApplyCode = () => {
    if (formData.ambassadorCode.trim().toUpperCase() === featuredEvent.ambassadorCode.toUpperCase()) {
      setCodeApplied(true);
    } else {
      alert("Invalid code. Try 'CA26ZTBUW' for ₹100 discount.");
      setCodeApplied(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeTerms) {
      alert("Please accept event terms.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Connect to Express backend API
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          ambassadorCode: codeApplied ? formData.ambassadorCode.toUpperCase() : ''
        })
      });

      if (response.ok) {
        const json = await response.json();
        setIsSubmitting(false);
        onSuccess(json.data);
      } else {
        throw new Error('Express API failed');
      }
    } catch (err) {
      // Local fallback
      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      const fallbackRecord: RegistrationSubmission = {
        id: 'reg-' + Date.now(),
        registrationId: `ILLUM-2026-${randomSuffix}`,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        college: formData.college,
        course: formData.course,
        year: formData.year,
        city: formData.city,
        interests: formData.interests,
        projectTitle: formData.projectTitle,
        teamSize: formData.teamSize,
        ambassadorCodeUsed: codeApplied ? 'CA26ZTBUW' : '',
        amountPaid: finalPrice,
        paymentStatus: 'Confirmed',
        registeredAt: new Date().toISOString()
      };
      setIsSubmitting(false);
      onSuccess(fallbackRecord);
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
            className="w-full max-w-2xl bg-white rounded-3xl border border-teal-600/20 shadow-2xl p-6 sm:p-8 relative my-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0E7490]/10 text-xs font-mono font-bold text-[#0E7490] uppercase mb-2">
                <Sparkles size={13} />
                Instant Conclave Pass Registration
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-black text-[#0F172A]">
                Reserve Your ILLUMINATE Pass
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                E-Cell UIT • September 30, 2026 • United Institute of Technology, Prayagraj
              </p>
            </div>

            {/* Stepper Dots */}
            <div className="flex items-center gap-2 mb-6">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-1.5 rounded-full transition-all ${
                    currentStep === s
                      ? 'w-10 bg-[#0E7490]'
                      : currentStep > s
                      ? 'w-6 bg-emerald-500'
                      : 'w-6 bg-slate-200'
                  }`}
                />
              ))}
            </div>

            {/* STEP 1 */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-700 font-bold mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Aryan Sharma"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-[#0E7490] focus:bg-white focus:outline-none"
                    />
                    {errors.fullName && <p className="text-[11px] text-rose-500 mt-0.5">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 font-bold mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="aryan@example.com"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-[#0E7490] focus:bg-white focus:outline-none"
                    />
                    {errors.email && <p className="text-[11px] text-rose-500 mt-0.5">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 font-bold mb-1">
                      WhatsApp Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-[#0E7490] focus:bg-white focus:outline-none"
                    />
                    {errors.phone && <p className="text-[11px] text-rose-500 mt-0.5">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 font-bold mb-1">
                      College / Institute *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.college}
                      onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                      placeholder="e.g. United Institute of Technology"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-[#0E7490] focus:bg-white focus:outline-none"
                    />
                    {errors.college && <p className="text-[11px] text-rose-500 mt-0.5">{errors.college}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 font-bold mb-1">
                      Course / Branch *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      placeholder="e.g. B.Tech Computer Science"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-[#0E7490] focus:bg-white focus:outline-none"
                    />
                    {errors.course && <p className="text-[11px] text-rose-500 mt-0.5">{errors.course}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-mono text-slate-700 font-bold mb-1">
                        Year
                      </label>
                      <select
                        value={formData.year}
                        onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                        className="w-full px-2.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-[#0E7490] focus:outline-none"
                      >
                        <option value="1st Year">1st Year</option>
                        <option value="2nd Year">2nd Year</option>
                        <option value="3rd Year">3rd Year</option>
                        <option value="4th Year">4th Year</option>
                        <option value="Postgraduate">Postgrad</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-700 font-bold mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="Prayagraj"
                        className="w-full px-2.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-[#0E7490] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-6 py-2.5 rounded-xl bg-[#0E7490] hover:bg-[#083344] text-white font-display font-bold text-xs flex items-center gap-2 shadow-sm transition-colors"
                  >
                    <span>NEXT: TRACK PREFERENCES</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-700 font-bold mb-2">
                    Select Tracks of Interest (Pick 1 or more) *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {INTEREST_OPTIONS.map((interest) => {
                      const isSelected = formData.interests.includes(interest);
                      return (
                        <button
                          type="button"
                          key={interest}
                          onClick={() => toggleInterest(interest)}
                          className={`p-2.5 rounded-xl text-xs font-mono transition-all text-left flex items-center justify-between border ${
                            isSelected
                              ? 'bg-[#0E7490]/10 border-[#0E7490] text-[#0E7490] font-bold'
                              : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                          }`}
                        >
                          <span>{interest}</span>
                          {isSelected && <CheckCircle2 size={13} className="text-[#0E7490]" />}
                        </button>
                      );
                    })}
                  </div>
                  {errors.interests && <p className="text-[11px] text-rose-500 mt-1">{errors.interests}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-100">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-mono text-slate-700 font-bold mb-1">
                      Startup Idea / Project Title (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.projectTitle}
                      onChange={(e) => setFormData({ ...formData, projectTitle: e.target.value })}
                      placeholder="e.g. AI Agri-tech Platform"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-[#0E7490] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-700 font-bold mb-1">
                      Team Size
                    </label>
                    <select
                      value={formData.teamSize}
                      onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-[#0E7490] focus:outline-none"
                    >
                      <option value="1">Solo (1)</option>
                      <option value="2">2 Members</option>
                      <option value="3">3 Members</option>
                      <option value="4+">4+ Members</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-4 py-2 rounded-xl bg-slate-100 text-xs font-mono text-slate-600 hover:bg-slate-200 flex items-center gap-1.5"
                  >
                    <ArrowLeft size={13} /> Back
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-6 py-2.5 rounded-xl bg-[#0E7490] hover:bg-[#083344] text-white font-display font-bold text-xs flex items-center gap-2 shadow-sm transition-colors"
                  >
                    <span>NEXT: CONFIRM & ACTIVATE</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {currentStep === 3 && (
              <div className="space-y-4">
                {/* Summary Pill */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
                  <div className="flex justify-between text-slate-600">
                    <span>Attendee:</span>
                    <span className="font-bold text-slate-900">{formData.fullName} ({formData.college})</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Contact:</span>
                    <span className="font-mono text-slate-900">{formData.email} • {formData.phone}</span>
                  </div>
                </div>

                {/* Ambassador Code */}
                <div className="p-3.5 rounded-2xl bg-[#0E7490]/5 border border-[#0E7490]/20 space-y-2">
                  <label className="block text-xs font-mono text-[#0E7490] font-bold flex items-center gap-1.5">
                    <Tag size={13} />
                    Campus Ambassador Code
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={formData.ambassadorCode}
                      onChange={(e) => setFormData({ ...formData, ambassadorCode: e.target.value })}
                      placeholder="CA26ZTBUW"
                      className="flex-1 px-3 py-1.5 rounded-xl bg-white border border-slate-300 text-slate-900 font-mono text-xs uppercase focus:border-[#0E7490] focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={handleApplyCode}
                      className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-black text-white text-xs font-mono font-bold"
                    >
                      Apply
                    </button>
                  </div>
                  {codeApplied && (
                    <p className="text-[11px] font-mono text-emerald-600 font-semibold flex items-center gap-1">
                      <CheckCircle2 size={12} />
                      Code CA26ZTBUW applied (-₹100 Ambassador Discount)
                    </p>
                  )}
                </div>

                {/* Price Breakdown */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono space-y-1.5">
                  <div className="flex justify-between text-slate-600">
                    <span>Regular Registration Pass</span>
                    <span>₹{originalPrice}</span>
                  </div>
                  {codeApplied && (
                    <div className="flex justify-between text-emerald-600 font-semibold">
                      <span>Ambassador Special Discount</span>
                      <span>-₹{discount}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm font-extrabold text-slate-900 pt-2 border-t border-slate-200">
                    <span>Final Pass Fee</span>
                    <span className="text-[#0E7490] text-lg font-black">₹{finalPrice}</span>
                  </div>
                </div>

                {/* Terms */}
                <div className="flex items-start gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="modalTerms"
                    checked={formData.agreeTerms}
                    onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                    className="mt-0.5 rounded accent-[#0E7490]"
                  />
                  <label htmlFor="modalTerms" className="text-[11px] text-slate-600 leading-tight">
                    I confirm my participation in ILLUMINATE 2026. This pass guarantees full-day keynotes, masterclasses, networking lunch, kit, and verified credential.
                  </label>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-4 py-2 rounded-xl bg-slate-100 text-xs font-mono text-slate-600 hover:bg-slate-200 flex items-center gap-1.5"
                  >
                    <ArrowLeft size={13} /> Back
                  </button>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="px-6 py-2.5 rounded-xl bg-[#0E7490] hover:bg-[#083344] text-white font-display font-bold text-xs flex items-center gap-2 shadow-glow-teal transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>ACTIVATING PASS...</span>
                    ) : (
                      <>
                        <span>GENERATE PASS (₹{finalPrice})</span>
                        <ArrowRight size={14} />
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
