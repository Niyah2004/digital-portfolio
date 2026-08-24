import React from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  BookOpen,
  CheckCircle2,
  Building2,
  MapPin,
  Calendar,
  Cpu,
  FileText
} from 'lucide-react';
import { Education } from '../types';

interface EducationSectionProps {
  education: Education;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  return (
    <section 
      id="education" 
      className="py-20 sm:py-28 relative bg-[#FFF9FA]/60 dark:bg-[#0B0F17] border-t border-slate-200/50 dark:border-slate-800/60 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-rose-500 dark:text-pink-400 block mb-2">
            01 / Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading tracking-tight">
            Education & Certifications
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            Computer science foundation combined with academic certificates in Artificial Intelligence and Technical Communication.
          </p>
        </div>

        {/* Main Degree Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-slate-200/60 dark:border-slate-800 shadow-xs mb-8 sleek-hover"
        >
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 dark:bg-pink-400/15 border border-pink-400/20 text-rose-500 dark:text-pink-300 font-bold flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-rose-500 dark:text-pink-400">
                    Bachelor of Science
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-heading">
                    {education.major}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 text-xs font-semibold rounded-lg bg-pink-50 dark:bg-slate-800 text-rose-700 dark:text-pink-300 border border-pink-200/60 dark:border-slate-700 font-mono">
                  {education.accreditation}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200 font-semibold">
                <Building2 className="w-4 h-4 text-rose-500 dark:text-pink-400" />
                {education.institution}
              </span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="flex items-center gap-1 text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {education.location}
              </span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="inline-flex items-center gap-1 font-mono text-xs">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                Graduation: {education.graduationDate}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
              Rigorous curriculum in systems architecture, algorithms, machine learning models, database engineering, and secure full-stack development.
            </p>

            {/* Honors Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {education.honors.map((honor, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200/60 dark:border-slate-700/80"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 dark:text-pink-400" />
                  {honor}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Academic Certificates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {education.certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 border border-slate-200/60 dark:border-slate-800 shadow-xs flex flex-col justify-between sleek-hover"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-pink-500/10 dark:bg-pink-400/15 border border-pink-400/20 text-rose-500 dark:text-pink-300 flex items-center justify-center shrink-0">
                      {cert.id === 'cert-ai' ? (
                        <Cpu className="w-4 h-4" />
                      ) : (
                        <FileText className="w-4 h-4" />
                      )}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-rose-500 dark:text-pink-400 uppercase tracking-wider">
                        Certificate
                      </span>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white font-heading">
                        {cert.name}
                      </h4>
                    </div>
                  </div>

                  <span className="px-2.5 py-0.5 text-[10px] font-semibold rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono shrink-0">
                    {cert.badge}
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/50 dark:border-slate-800 flex flex-wrap gap-1.5">
                {cert.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 py-0.5 text-[11px] font-medium bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded border border-slate-200/50 dark:border-slate-700/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coursework Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white/60 dark:bg-slate-900/60 rounded-2xl p-5 sm:p-6 border border-slate-200/50 dark:border-slate-800"
        >
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-4 h-4 text-rose-500 dark:text-pink-400" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 font-heading">
              Coursework & Applied Systems
            </h4>
          </div>

          <div className="flex flex-wrap gap-2">
            {education.coursework.map((course, cIdx) => (
              <span
                key={cIdx}
                className="px-3 py-1 text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200/60 dark:border-slate-700/80 hover:border-pink-300 dark:hover:border-pink-400/40 transition-colors"
              >
                {course}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
