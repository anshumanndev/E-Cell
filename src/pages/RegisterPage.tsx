import React, { useState } from 'react';
import { IlluminatEBrand } from '../components/effects/IlluminatEBrand';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Tag,
  ShieldCheck,
  User,
  Mail,
  Phone,
  Building,
  GraduationCap,
  MapPin,
  Calendar
} from 'lucide-react';
import { SectionBadge } from '../components/effects/SectionBadge';
import { featuredEvent } from '../data/eventsData';
import { registrationService } from '../services/registrationService';
import { AtmosphericGlow } from '../components/effects/AtmosphericGlow';

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

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form State
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

  // Discount calculation
  const originalPrice = featuredEvent.originalPrice; // 799
  const discount = codeApplied ? 100 : 0;
  const finalPrice = originalPrice - discount; // 699

  const validateStep1 = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required.';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid Email is required.';
    if (!formData.phone.trim() || formData.phone.length < 8) errs.phone = 'Valid Phone number is required.';
    if (!formData.college.trim()) errs.college = 'College / University is required.';
    if (!formData.course.trim()) errs.course = 'Course / Branch is required.';
    if (!formData.city.trim()) errs.city = 'City is required.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep2 = () => {
    const errs: Record<string, string> = {};
    if (formData.interests.length === 0) errs.interests = 'Please select at least 1 interest domain.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 1) {
      if (validateStep1()) setCurrentStep(2);
    } else if (currentStep === 2) {
      if (validateStep2()) setCurrentStep(3);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const toggleInterest = (interest: string) => {
    if (formData.interests.includes(interest)) {
      setFormData({
        ...formData,
        interests: formData.interests.filter(i => i !== interest)
      });
    } else {
      setFormData({
        ...formData,
        interests: [...formData.interests, interest]
      });
    }
  };

  const handleApplyCode = () => {
    if (formData.ambassadorCode.trim().toUpperCase() === featuredEvent.ambassadorCode.toUpperCase()) {
      setCodeApplied(true);
    } else {
      alert("Invalid ambassador code. Try 'CA26ZTBUW' for ₹100 discount.");
      setCodeApplied(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeTerms) {
      alert("Please accept the event terms to proceed.");
      return;
    }

    setIsSubmitting(true);

    const submissionPayload = {
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
      ambassadorCodeUsed: codeApplied ? formData.ambassadorCode.toUpperCase() : '',
      amountPaid: finalPrice,
      paymentStatus: 'Confirmed' as const
    };

    try {
      // Call Express.js backend API
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionPayload)
      });
      const data = await res.json();
      if (data.registration) {
        setIsSubmitting(false);
        navigate(`/success?id=${data.registration.id}&regId=${data.registration.registrationId}`);
        return;
      }
    } catch {
      // Fallback to client service
    }

    const result = registrationService.submitRegistration(submissionPayload);
    setIsSubmitting(false);
    navigate(`/success?id=${result.id}&regId=${result.registrationId}`);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 relative overflow-hidden select-none">
      <AtmosphericGlow variant="top" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <SectionBadge icon={<Sparkles size={13} />}>
            OFFICIAL REGISTRATION
          </SectionBadge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            SECURE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-cyan-600 to-amber-600">CONCLAVE PASS</span>
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            Join 800+ aspiring student founders & innovators at United Institute of Technology, Prayagraj.
          </p>
        </div>

        {/* 3-Step Stepper Bar */}
        <div className="flex items-center justify-between max-w-xl mx-auto mb-10 relative">
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-slate-200 -translate-y-1/2 -z-10" />
          
          {[
            { num: 1, label: "Your Details" },
            { num: 2, label: "Your Interest" },
            { num: 3, label: "Confirm & Pay" }
          ].map((s) => {
            const isDone = currentStep > s.num;
            const isCurrent = currentStep === s.num;
            return (
              <div key={s.num} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-sm font-bold transition-all ${
                    isDone
                      ? 'bg-emerald-600 text-white shadow-md'
                      : isCurrent
                      ? 'bg-teal-700 text-white ring-4 ring-teal-600/20 shadow-md'
                      : 'bg-white border border-slate-300 text-slate-500'
                  }`}
                >
                  {isDone ? <CheckCircle2 size={18} /> : s.num}
                </div>
                <span className={`text-xs font-mono mt-2 ${isCurrent ? 'text-teal-800 font-bold' : 'text-slate-500'}`}>
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Main Card */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-xl bg-white/95">
          {/* STEP 1: Personal & College Details */}
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="border-b border-slate-200 pb-4">
                <h2 className="text-xl font-display font-bold text-slate-900">
                  Step 1 — Participant Information
                </h2>
                <p className="text-xs text-slate-600">
                  Please provide your academic and contact details for official credentials.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono text-slate-700 mb-1.5 flex items-center gap-1.5 font-semibold">
                    <User size={13} className="text-teal-700" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Aryan Sharma"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-teal-700 focus:bg-white focus:outline-none transition-all"
                  />
                  {errors.fullName && <p className="text-[11px] text-rose-500 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 mb-1.5 flex items-center gap-1.5 font-semibold">
                    <Mail size={13} className="text-teal-700" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="aryan@college.edu"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-teal-700 focus:bg-white focus:outline-none transition-all"
                  />
                  {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 mb-1.5 flex items-center gap-1.5 font-semibold">
                    <Phone size={13} className="text-teal-700" />
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-teal-700 focus:bg-white focus:outline-none transition-all"
                  />
                  {errors.phone && <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 mb-1.5 flex items-center gap-1.5 font-semibold">
                    <Building size={13} className="text-teal-700" />
                    College / Institute *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                    placeholder="e.g. United Institute of Technology"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-teal-700 focus:bg-white focus:outline-none transition-all"
                  />
                  {errors.college && <p className="text-[11px] text-rose-500 mt-1">{errors.college}</p>}
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 mb-1.5 flex items-center gap-1.5 font-semibold">
                    <GraduationCap size={13} className="text-teal-700" />
                    Course / Branch *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    placeholder="e.g. B.Tech CSE / MBA"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-teal-700 focus:bg-white focus:outline-none transition-all"
                  />
                  {errors.course && <p className="text-[11px] text-rose-500 mt-1">{errors.course}</p>}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono text-slate-700 mb-1.5 flex items-center gap-1 font-semibold">
                      <Calendar size={13} className="text-teal-700" />
                      Year *
                    </label>
                    <select
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-teal-700 focus:bg-white focus:outline-none transition-all"
                    >
                      <option value="1st Year">1st Year</option>
                      <option value="2nd Year">2nd Year</option>
                      <option value="3rd Year">3rd Year</option>
                      <option value="4th Year">4th Year</option>
                      <option value="Postgraduate">Postgrad</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 mb-1.5 flex items-center gap-1 font-semibold">
                      <MapPin size={13} className="text-teal-700" />
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Prayagraj"
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-teal-700 focus:bg-white focus:outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end pt-6 border-t border-slate-200">
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-teal-700 to-cyan-700 text-white font-display font-bold text-sm flex items-center gap-2 shadow-md hover:opacity-95 cursor-pointer"
                >
                  <span>NEXT: CHOOSE INTERESTS</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 2: Interests & Venture Goals */}
          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="border-b border-slate-200 pb-4">
                <h2 className="text-xl font-display font-bold text-slate-900">
                  Step 2 — Track & Domain Preferences
                </h2>
                <p className="text-xs text-slate-600">
                  Select the tracks you want prioritized for workshop seating and mentorship pods.
                </p>
              </div>

              <div>
                <label className="block text-xs font-mono text-teal-800 mb-3 font-semibold">
                  Select Interests (Choose all that apply) *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {INTEREST_OPTIONS.map((interest) => {
                    const isSelected = formData.interests.includes(interest);
                    return (
                      <button
                        type="button"
                        key={interest}
                        onClick={() => toggleInterest(interest)}
                        className={`p-3.5 rounded-xl text-xs font-mono font-medium transition-all text-left flex items-center justify-between border cursor-pointer ${
                          isSelected
                            ? 'bg-teal-50 border-teal-600 text-teal-900 font-bold shadow-sm'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <span>{interest}</span>
                        {isSelected && <CheckCircle2 size={14} className="text-teal-700" />}
                      </button>
                    );
                  })}
                </div>
                {errors.interests && <p className="text-[11px] text-rose-500 mt-1.5">{errors.interests}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-mono text-slate-700 mb-1 font-semibold">
                    Startup Idea / Project Title (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.projectTitle}
                    onChange={(e) => setFormData({ ...formData, projectTitle: e.target.value })}
                    placeholder="e.g. Autonomous AI Drone for Agriculture"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-teal-700 focus:bg-white focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-700 mb-1 font-semibold">
                    Team Size
                  </label>
                  <select
                    value={formData.teamSize}
                    onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-teal-700 focus:bg-white focus:outline-none transition-all"
                  >
                    <option value="1">Solo Attendee (1)</option>
                    <option value="2">2 Founders</option>
                    <option value="3">3 Members</option>
                    <option value="4+">4+ Member Team</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-mono text-slate-700 flex items-center gap-2 cursor-pointer transition-colors"
                >
                  <ArrowLeft size={14} />
                  <span>BACK</span>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-teal-700 to-cyan-700 text-white font-display font-bold text-sm flex items-center gap-2 shadow-md hover:opacity-95 cursor-pointer"
                >
                  <span>NEXT: CONFIRMATION</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: Confirm & Summary */}
          {currentStep === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="border-b border-slate-200 pb-4">
                <h2 className="text-xl font-display font-bold text-slate-900">
                  Step 3 — Order Summary & Pass Activation
                </h2>
                <p className="text-xs text-slate-600">
                  Verify your registration details and apply ambassador referral code.
                </p>
              </div>

              {/* Summary Review Pill */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Attendee Name:</span>
                  <span className="font-semibold text-slate-900">{formData.fullName}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>College / Institute:</span>
                  <span className="font-semibold text-slate-900">{formData.college}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Email / Phone:</span>
                  <span className="font-semibold text-slate-900">{formData.email} • {formData.phone}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Selected Tracks:</span>
                  <span className="font-semibold text-teal-700">{formData.interests.join(', ')}</span>
                </div>
              </div>

              {/* Ambassador Code Input */}
              <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200 space-y-3">
                <label className="block text-xs font-mono text-teal-900 flex items-center gap-1.5 font-semibold">
                  <Tag size={14} className="text-teal-700" />
                  Campus Ambassador Referral Code
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={formData.ambassadorCode}
                    onChange={(e) => setFormData({ ...formData, ambassadorCode: e.target.value })}
                    placeholder="Enter referral code (e.g. CA26ZTBUW)"
                    className="flex-1 px-4 py-2 rounded-xl bg-white border border-teal-200 text-slate-900 font-mono text-sm uppercase focus:border-teal-700 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={handleApplyCode}
                    className="px-4 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-xs font-mono font-bold text-white shadow-sm cursor-pointer"
                  >
                    Apply Code
                  </button>
                </div>
                {codeApplied && (
                  <p className="text-[11px] font-mono text-emerald-700 flex items-center gap-1 font-semibold">
                    <CheckCircle2 size={12} />
                    Ambassador Arpita Mishra code active (-₹100 Special Price Applied)
                  </p>
                )}
              </div>

              {/* Price Calculation Breakdown */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs font-mono">
                <div className="flex justify-between text-slate-600">
                  <span>Standard Pass Fee</span>
                  <span>₹{originalPrice}</span>
                </div>
                {codeApplied && (
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>Ambassador Discount ({formData.ambassadorCode})</span>
                    <span>-₹{discount}</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-bold text-slate-900 pt-2 border-t border-slate-200">
                  <span>Total Amount Due</span>
                  <span className="text-teal-700 text-xl font-display font-extrabold">₹{finalPrice}</span>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-2.5 pt-2">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                  className="mt-1 rounded accent-teal-700"
                />
                <label htmlFor="agreeTerms" className="text-xs text-slate-600 leading-relaxed">
                  I agree to the <span className="text-slate-900 font-semibold"><IlluminatEBrand size="sm" /> 2026 Participation & Code of Conduct guidelines</span>. I understand this pass includes full-day keynotes, masterclasses, networking lunch, kit, and verified certificate.
                </label>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-mono text-slate-700 flex items-center gap-2 cursor-pointer transition-colors"
                >
                  <ArrowLeft size={14} />
                  <span>BACK</span>
                </button>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-teal-700 to-cyan-700 text-white font-display font-bold text-sm tracking-wide shadow-md hover:opacity-95 flex items-center gap-2 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>GENERATING PASS...</span>
                  ) : (
                    <>
                      <span>CONFIRM REGISTRATION (₹{finalPrice})</span>
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};
