import React from 'react';
import { motion } from 'motion/react';
import { Education } from '../types';
import { companyLogos } from '../data/logos';
import { SpotlightCard } from './SpotlightCard';

interface EducationSectionProps {
  education: Education;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  const untLogo = companyLogos['University of North Texas'];

  return (
    <section
      id="education"
      className="py-20 sm:py-28 relative bg-[#FFF9FA]/60 dark:bg-[#0B0F17] border-t border-slate-200/50 dark:border-slate-800/60 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-label font-semibold uppercase tracking-widest text-rose-500 dark:text-pink-400 block mb-2">
            Education
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white font-heading tracking-tight">
            Education & Certifications
          </h2>
        </div>

        {/* Main Degree Card with Spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
        >
          <SpotlightCard className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-slate-200/60 dark:border-slate-800 shadow-xs mb-8 sleek-hover">
            <div className="flex flex-col sm:flex-row sm:items-start gap-5">
              <div className="w-20 h-12 rounded-lg shrink-0 border border-slate-200/60 dark:border-slate-700 bg-white p-1.5 flex items-center justify-center overflow-hidden">
                <img
                  src={untLogo}
                  alt="University of North Texas"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="space-y-3 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-label font-semibold uppercase tracking-wider text-rose-500 dark:text-pink-400">
                      {education.degree}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-heading">
                      {education.major}
                    </h3>
                  </div>
                  <span className="text-xs font-label font-semibold text-rose-700 dark:text-pink-300 bg-pink-50 dark:bg-slate-800 border border-pink-200/60 dark:border-slate-700 px-3 py-1 rounded-lg shrink-0">
                    {education.accreditation}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  {education.institution} · {education.location} · Graduating {education.graduationDate} · GPA {education.gpa}
                </p>

                <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed space-y-1 list-disc list-inside">
                  {education.honors.map((honor, idx) => (
                    <li key={idx}>{honor}</li>
                  ))}
                </ul>
              </div>
            </div>
          </SpotlightCard>
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
            >
              <SpotlightCard className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 border border-slate-200/60 dark:border-slate-800 shadow-xs h-full flex flex-col justify-between sleek-hover">
                <div>
                  <span className="text-[10px] font-label font-semibold text-rose-500 dark:text-pink-400 uppercase tracking-wider">
                    Certificate
                  </span>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white font-heading mb-1.5">
                    {cert.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                    {cert.focus}
                  </p>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-800/80">
                  {cert.skills.join(' · ')}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Coursework */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <SpotlightCard className="bg-white/60 dark:bg-slate-900/60 rounded-2xl p-5 sm:p-6 border border-slate-200/50 dark:border-slate-800 sleek-hover">
            <h4 className="text-xs font-label font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Coursework
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {education.coursework.join(' · ')}
            </p>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
};
