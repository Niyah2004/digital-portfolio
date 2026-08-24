import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  MapPin, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { WorkExperience } from '../types';

interface WorkHistorySectionProps {
  experiences: WorkExperience[];
}

export const WorkHistorySection: React.FC<WorkHistorySectionProps> = ({ experiences }) => {
  return (
    <section 
      id="experience" 
      className="py-20 sm:py-28 relative bg-white dark:bg-[#0B0F17] border-t border-slate-200/50 dark:border-slate-800/60 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-rose-500 dark:text-pink-400 block mb-2">
            04 / Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading tracking-tight">
            Professional Experience
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
            Chronological record of software development, consulting, and systems support roles.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l border-slate-200 dark:border-slate-800 space-y-10 ml-2 sm:ml-4">
          {experiences.map((exp, index) => {
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative group"
              >
                {/* Minimalist Dot Marker */}
                <div 
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-white dark:border-slate-900 transition-all ${
                    exp.isCurrent
                      ? 'bg-rose-500 ring-4 ring-pink-500/20'
                      : 'bg-slate-300 dark:bg-slate-700 group-hover:bg-rose-500 dark:group-hover:bg-pink-400'
                  }`}
                />

                {/* Experience Card */}
                <div className="bg-white dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-7 border border-slate-200/60 dark:border-slate-800 shadow-xs sleek-hover">
                  {/* Top Bar: Role, Company, Period */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-heading">
                          {exp.role}
                        </h3>
                        {exp.isCurrent && (
                          <span className="px-2 py-0.5 text-[10px] font-bold font-mono rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900/50">
                            Current
                          </span>
                        )}
                        <span className="px-2 py-0.5 text-[10px] font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 rounded">
                          {exp.type}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-rose-600 dark:text-pink-400 font-medium mt-1 flex-wrap">
                        <span className="flex items-center gap-1 font-semibold text-slate-800 dark:text-slate-200">
                          <Building2 className="w-3.5 h-3.5 text-rose-500 dark:text-pink-400" />
                          {exp.company}
                        </span>
                        <span className="text-slate-300 dark:text-slate-700">•</span>
                        <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Period */}
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-medium shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Responsibilities list */}
                  <ul className="space-y-1.5 mb-4">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 dark:text-pink-400 mt-0.5 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Measurable Impact */}
                  {exp.impactMetrics && exp.impactMetrics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.impactMetrics.map((metric, mIdx) => (
                        <div
                          key={mIdx}
                          className="bg-pink-500/5 dark:bg-pink-400/10 px-2.5 py-1 rounded-md text-[11px] font-semibold text-rose-600 dark:text-pink-300 border border-pink-400/20 flex items-center gap-1.5"
                        >
                          <Sparkles className="w-3 h-3 text-pink-400" />
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 text-[11px] font-medium bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded"
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
