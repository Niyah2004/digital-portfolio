import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  TrendingUp, 
  CheckCircle2, 
  Sparkles, 
  Building2 
} from 'lucide-react';
import { WorkExperience } from '../types';

interface WorkHistorySectionProps {
  experiences: WorkExperience[];
}

export const WorkHistorySection: React.FC<WorkHistorySectionProps> = ({ experiences }) => {
  const [expandedId, setExpandedId] = useState<string | null>(experiences[0]?.id || null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section 
      id="experience" 
      className="py-20 sm:py-28 relative bg-white/60 dark:bg-[#0B0F17] border-t border-pink-100/70 dark:border-slate-800/80 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-pink-100/80 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border border-pink-200/60 dark:border-rose-900/50 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            Career Progression
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 font-heading tracking-tight">
            Professional Work History
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 mt-2">
            A chronological timeline of internships, campus roles, and hands-on work that's shaped my path into software engineering.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-pink-200/80 dark:border-slate-800 space-y-12 ml-2 sm:ml-6">
          {experiences.map((exp, index) => {
            const isExpanded = expandedId === exp.id;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Timeline Dot Marker */}
                <div 
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-4 border-white dark:border-slate-900 flex items-center justify-center shadow-md transition-colors ${
                    exp.isCurrent
                      ? 'bg-gradient-to-br from-rose-400 to-pink-400 dark:from-rose-500 dark:to-pink-500 text-white ring-4 ring-pink-100 dark:ring-rose-950/50'
                      : 'bg-pink-100 dark:bg-slate-800 text-rose-600 dark:text-rose-400 group-hover:bg-rose-400 group-hover:text-white dark:group-hover:bg-rose-500'
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                </div>

                {/* Experience Card */}
                <div className="bg-white/90 dark:bg-slate-900/85 backdrop-blur-sm rounded-2xl p-6 sm:p-7 border border-pink-100/90 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-pink-300 dark:hover:border-rose-500/40 transition-all duration-300">
                  {/* Top Bar: Role, Company, Period */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 font-heading">
                          {exp.role}
                        </h3>
                        <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-pink-50 dark:bg-slate-800 text-rose-700 dark:text-rose-300 border border-pink-200 dark:border-slate-700">
                          {exp.type}
                        </span>
                        {exp.isCurrent && (
                          <span className="px-2 py-0.5 text-[11px] font-bold rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900/50">
                            Current Role
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-3 text-sm font-semibold text-rose-600 dark:text-rose-400 mt-1 flex-wrap">
                        <span className="flex items-center gap-1.5">
                          <Building2 className="w-4 h-4 text-rose-400" />
                          {exp.company}
                        </span>
                        <span className="text-pink-300 dark:text-slate-600">•</span>
                        <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-normal">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Period Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-pink-50/50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold font-mono border border-pink-100 dark:border-slate-700 shrink-0 self-start sm:self-auto">
                      <Calendar className="w-3.5 h-3.5 text-rose-400" />
                      {exp.period}
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Responsibilities list */}
                  <div className="space-y-2 mb-5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      Key Responsibilities & Contributions:
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Impact Metrics */}
                  {exp.impactMetrics && exp.impactMetrics.length > 0 && (
                    <div className="bg-pink-50/50 dark:bg-slate-850/60 p-3.5 rounded-xl border border-pink-100/90 dark:border-slate-800 mb-4">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-rose-700 dark:text-rose-300 uppercase tracking-wide mb-2">
                        <TrendingUp className="w-3.5 h-3.5 text-rose-400" />
                        Measurable Impact
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {exp.impactMetrics.map((metric, mIdx) => (
                          <div
                            key={mIdx}
                            className="bg-white dark:bg-slate-800 px-3 py-2 rounded-lg text-xs font-semibold text-slate-800 dark:text-slate-200 border border-pink-100 dark:border-slate-700 flex items-center gap-2"
                          >
                            <Sparkles className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                            <span>{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-pink-100/70 dark:border-slate-800">
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 text-xs font-medium bg-pink-50/50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md border border-pink-100/70 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
