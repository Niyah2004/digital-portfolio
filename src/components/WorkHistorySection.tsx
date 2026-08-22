import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  TrendingUp, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  ChevronDown, 
  ChevronUp,
  Award
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
    <section id="experience" className="py-20 sm:py-28 relative bg-white border-t border-rose-100/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-100 text-rose-700 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            Career Progression
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
            Professional Work History
          </h2>
          <p className="text-base text-slate-600 mt-2">
            A chronological timeline of internships, campus roles, and hands-on work that's shaped my path into software engineering.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-rose-200/80 space-y-12 ml-2 sm:ml-6">
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
                <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-4 border-white flex items-center justify-center shadow-md transition-colors ${
                  exp.isCurrent
                    ? 'bg-rose-600 text-white ring-4 ring-rose-200'
                    : 'bg-rose-100 text-rose-700 group-hover:bg-rose-500 group-hover:text-white'
                }`}>
                  <Briefcase className="w-3.5 h-3.5" />
                </div>

                {/* Experience Card */}
                <div className="bg-white rounded-2xl p-6 sm:p-7 border border-rose-100/90 shadow-xs hover:shadow-md hover:border-rose-200 transition-all duration-300">
                  {/* Top Bar: Role, Company, Period */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-xl font-bold text-slate-900 font-heading">
                          {exp.role}
                        </h3>
                        <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                          {exp.type}
                        </span>
                        {exp.isCurrent && (
                          <span className="px-2 py-0.5 text-[11px] font-bold rounded-full bg-emerald-100 text-emerald-800">
                            Current Role
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-3 text-sm font-semibold text-rose-700 mt-1 flex-wrap">
                        <span className="flex items-center gap-1.5">
                          <Building2 className="w-4 h-4 text-rose-500" />
                          {exp.company}
                        </span>
                        <span className="text-rose-300">•</span>
                        <span className="flex items-center gap-1.5 text-slate-500 font-normal">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Period Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 text-slate-700 text-xs font-bold font-mono border border-slate-200/80 shrink-0 self-start sm:self-auto">
                      <Calendar className="w-3.5 h-3.5 text-rose-500" />
                      {exp.period}
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Responsibilities list */}
                  <div className="space-y-2 mb-5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Key Responsibilities & Contributions:
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Impact Metrics */}
                  {exp.impactMetrics && exp.impactMetrics.length > 0 && (
                    <div className="bg-rose-50/60 p-3.5 rounded-xl border border-rose-100/90 mb-4">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-rose-800 uppercase tracking-wide mb-2">
                        <TrendingUp className="w-3.5 h-3.5 text-rose-600" />
                        Measurable Impact
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {exp.impactMetrics.map((metric, mIdx) => (
                          <div
                            key={mIdx}
                            className="bg-white px-3 py-2 rounded-lg text-xs font-semibold text-slate-800 border border-rose-100 flex items-center gap-2"
                          >
                            <Sparkles className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                            <span>{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-rose-100/70">
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 text-xs font-medium bg-slate-50 text-slate-600 rounded-md border border-slate-200/60"
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
