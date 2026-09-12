import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { SectionBadge } from '../effects/SectionBadge';
import { faqList } from '../../data/faqData';

export const FAQSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>([faqList[0].id]);
  const [filterCategory, setFilterCategory] = useState<string>('ALL');

  const toggleFAQ = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter(item => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const categories = ['ALL', 'General', 'Registration', 'Inclusions'];

  const filteredFaqs = filterCategory === 'ALL'
    ? faqList
    : faqList.filter(f => f.category === filterCategory);

  return (
    <section id="faq" className="relative py-8 lg:py-12 border-t border-slate-100/60 overflow-hidden select-none">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6 lg:mb-8">
          <SectionBadge icon={<HelpCircle size={13} />}>
            FREQUENTLY ASKED QUESTIONS
          </SectionBadge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            EVERYTHING YOU NEED TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-amber-600">KNOW</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Clear, transparent answers regarding conclave tracks, event passes, accommodation, and ambassador discounts.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                filterCategory === cat
                  ? 'bg-teal-700 text-white font-bold shadow-md border border-teal-800'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 11 Accordion List Items */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className={`rounded-2xl transition-all border ${
                  isOpen
                    ? 'bg-white border-teal-500 shadow-md ring-2 ring-teal-500/10'
                    : 'bg-white/80 border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-display font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-slate-100 text-slate-600 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-teal-50 text-teal-700' : ''
                  }`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
