import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, UserCheck, Lock } from 'lucide-react';
import { SectionBadge } from '../effects/SectionBadge';
import { teamMembers, teamDepartments } from '../../data/teamData';

export const TeamSection: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>('ALL');

  const filteredMembers = selectedDept === 'ALL'
    ? teamMembers
    : teamMembers.filter(m => m.department === selectedDept);

  return (
    <section id="team" className="relative py-8 lg:py-12 border-t border-slate-100/60 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 lg:mb-8 gap-6">
          <div>
            <SectionBadge icon={<Users size={13} />}>
              ORGANIZING COUNCIL
            </SectionBadge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-[#0F172A] tracking-tight">
              THE MINDS BEHIND <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E7490] via-[#0D9488] to-[#D97706]">E-CELL UIT</span>
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            Our multi-tiered student hierarchy bridging faculty mentorship with executive event operations.
          </p>
        </div>

        {/* Department Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {teamDepartments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-4 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all ${
                selectedDept === dept
                  ? 'bg-[#0E7490] text-white shadow-sm font-bold border border-teal-600'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMembers.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass-card p-6 flex flex-col justify-between group hover:border-[#0E7490]/70"
            >
              <div>
                {/* Avatar frame */}
                <div className="w-full h-40 rounded-2xl bg-gradient-to-b from-slate-100 to-slate-200 border border-slate-200 flex flex-col items-center justify-center mb-5 group-hover:border-[#0E7490]/40 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white border border-slate-300 flex items-center justify-center text-[#0E7490] mb-2 shadow-sm">
                    {member.isVerified ? (
                      <UserCheck size={20} className="text-[#0E7490]" />
                    ) : (
                      <Lock size={18} className="text-slate-400" />
                    )}
                  </div>
                  <span className="text-[10px] font-mono tracking-wider text-slate-900 uppercase font-black">
                    {member.isVerified ? 'VERIFIED LEAD' : 'COUNCIL NOMINEE'}
                  </span>
                </div>

                <h3 className="text-lg font-display font-black text-[#0F172A] group-hover:text-[#0E7490] transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs font-mono text-[#0E7490] font-bold mt-0.5">
                  {member.role}
                </p>
                {member.personName && (
                  <p className="text-sm italic text-slate-600 mt-1 font-medium">
                    {member.personName}
                  </p>
                )}
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500 font-semibold">
                <span>{member.department}</span>
                <span className="text-emerald-700 font-bold">● Active</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
