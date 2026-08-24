import React from 'react';
import { motion } from 'motion/react';
import { WorkExperience } from '../types';
import { companyLogos, companyLogoTileClass } from '../data/logos';
import { SpotlightCard } from './SpotlightCard';

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
          <span className="text-xs font-label font-semibold uppercase tracking-widest text-rose-500 dark:text-pink-400 block mb-2">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white font-heading tracking-tight">
            Professional Experience
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-14 sm:pl-16 border-l border-slate-200 dark:border-slate-800 space-y-10 ml-2 sm:ml-4">
          {experiences.map((exp, index) => {
            const logo = companyLogos[exp.company];
            const tileBg = companyLogoTileClass[exp.company] ?? 'bg-white';
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative group"
              >
                {/* Company logo marker on the timeline */}
                <div
                  className={`absolute -left-[62px] sm:-left-[68px] top-0 w-12 h-9 rounded-lg ${tileBg} border flex items-center justify-center overflow-hidden shrink-0 p-1.5 z-10 ${
                    exp.isCurrent
                      ? 'border-rose-400 ring-2 ring-pink-500/20'
                      : 'border-slate-200 dark:border-slate-800'
                  }`}
                >
                  {logo ? (
                    <img src={logo} alt={exp.company} className="max-w-full max-h-full object-contain" />
                  ) : (
                    <span className="text-xs font-bold text-slate-400">{exp.company.charAt(0)}</span>
                  )}
                </div>

                {/* Experience Card with Spotlight */}
                <SpotlightCard className="bg-white dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-7 border border-slate-200/60 dark:border-slate-800 shadow-xs sleek-hover">
                  {/* Top Bar: Role, Company, Period */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3 relative z-10">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-heading">
                          {exp.role}
                        </h3>
                        {exp.isCurrent && (
                          <span className="px-2 py-0.5 text-[10px] font-bold font-label rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900/50">
                            Current
                          </span>
                        )}
                        <span className="px-2 py-0.5 text-[10px] font-label text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 rounded">
                          {exp.type}
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">{exp.company}</span>
                        {' · '}{exp.location}
                      </p>
                    </div>

                    <span className="text-xs font-label text-slate-500 dark:text-slate-400 font-medium shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3 relative z-10">
                    {exp.description}
                  </p>

                  {/* Responsibilities list */}
                  <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed space-y-1 list-disc list-inside mb-4 relative z-10">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx}>{resp}</li>
                    ))}
                  </ul>

                  {/* Measurable Impact */}
                  {exp.impactMetrics && exp.impactMetrics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                      {exp.impactMetrics.map((metric, mIdx) => (
                        <span
                          key={mIdx}
                          className="bg-pink-500/5 dark:bg-pink-400/10 px-2.5 py-1 rounded-md text-[11px] font-semibold text-rose-600 dark:text-pink-300 border border-pink-400/20"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800 relative z-10">
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 text-[11px] font-medium bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
