import React from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  Award,
  BookOpen,
  CheckCircle2,
  Building2,
  MapPin,
  Calendar,
  Cpu,
  FileText,
  ShieldCheck,
  Star
} from 'lucide-react';
import { Education } from '../types';

interface EducationSectionProps {
  education: Education;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  return (
    <section 
      id="education" 
      className="py-20 sm:py-28 relative bg-[#FFF8FA] dark:bg-[#0B0F17] border-t border-pink-100/70 dark:border-slate-800/80 overflow-hidden transition-colors duration-300"
    >
      {/* Ambient background decoration */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-pink-200/25 dark:bg-rose-900/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-200/25 dark:bg-pink-900/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-pink-100/80 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border border-pink-200/60 dark:border-rose-900/50 mb-3">
            <GraduationCap className="w-4 h-4" />
            Academic Foundation & Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 font-heading tracking-tight">
            Education & Certifications
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 mt-2">
            Academic rigor in computer science paired with specialized certificates in Artificial Intelligence and Technical Communication.
          </p>
        </div>

        {/* Main Degree Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="bg-white/90 dark:bg-slate-900/85 backdrop-blur-sm rounded-3xl p-6 sm:p-10 border border-pink-100/90 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-pink-100/50 dark:hover:shadow-black/40 transition-all duration-300 mb-12 relative overflow-hidden group"
        >
          {/* Subtle pastel accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-rose-400 via-pink-400 to-rose-300 dark:from-rose-500 dark:via-pink-500 dark:to-rose-400" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Col: University & Degree */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-400 dark:from-rose-500 dark:to-pink-500 text-white font-bold flex items-center justify-center shadow-md shadow-pink-300/30 dark:shadow-rose-950/40">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-500 dark:text-rose-400">
                    Undergraduate Degree
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 font-heading">
                    {education.degree} in {education.major}
                  </h3>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
                <span className="flex items-center gap-1.5 text-rose-600 dark:text-rose-300">
                  <Building2 className="w-4 h-4 text-rose-400" />
                  {education.institution}
                </span>
                <span className="text-pink-300 dark:text-slate-600">•</span>
                <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400 font-normal">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {education.location}
                </span>
                <span className="text-pink-300 dark:text-slate-600">•</span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-pink-50/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono font-bold border border-pink-100 dark:border-slate-700">
                  <Calendar className="w-3.5 h-3.5 text-rose-400" />
                  Graduation: {education.graduationDate}
                </span>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed pt-2">
                Focused on systems architecture, machine learning foundations, algorithms, and secure enterprise software engineering. Maintained academic excellence while serving in campus technology support and consulting leadership.
              </p>

              {/* Honors / Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {education.honors.map((honor, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold bg-pink-50/80 dark:bg-slate-800/90 text-rose-700 dark:text-rose-300 rounded-full border border-pink-200/70 dark:border-slate-700 shadow-2xs"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-rose-400" />
                    {honor}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Col: Key Metric Highlights */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4 self-center">
              <div className="bg-gradient-to-br from-pink-50/80 to-rose-50/40 dark:from-slate-850 dark:to-slate-900 p-5 rounded-2xl border border-pink-100/90 dark:border-slate-800 text-center">
                <div className="w-9 h-9 rounded-xl bg-white dark:bg-slate-800 text-rose-500 dark:text-rose-400 flex items-center justify-center mx-auto mb-2 shadow-2xs">
                  <Star className="w-5 h-5 fill-rose-400 text-rose-400" />
                </div>
                <p className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 font-heading">
                  {education.gpa}
                </p>
                <p className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider mt-0.5">
                  Cumulative GPA
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  Scale: 4.0 / High Honors
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50/80 to-rose-50/40 dark:from-slate-850 dark:to-slate-900 p-5 rounded-2xl border border-pink-100/90 dark:border-slate-800 text-center">
                <div className="w-9 h-9 rounded-xl bg-white dark:bg-slate-800 text-rose-500 dark:text-rose-400 flex items-center justify-center mx-auto mb-2 shadow-2xs">
                  <ShieldCheck className="w-5 h-5 text-rose-400" />
                </div>
                <p className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 font-heading">
                  ABET
                </p>
                <p className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider mt-0.5">
                  Accredited
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  Engineering Commission
                </p>
              </div>

              <div className="col-span-2 bg-white dark:bg-slate-900/90 p-4 rounded-2xl border border-pink-100/80 dark:border-slate-800 shadow-2xs flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-pink-100/70 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-slate-100">
                    Dual Academic Certificates
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Artificial Intelligence & Technical Communication
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Academic Certificates Grid */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-5 h-5 text-rose-500 dark:text-rose-400" />
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 font-heading">
              Earned Academic Certificates
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {education.certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white/90 dark:bg-slate-900/85 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-pink-100 dark:border-slate-800 shadow-xs hover:shadow-lg hover:shadow-pink-100/60 dark:hover:shadow-black/50 hover:border-pink-300 dark:hover:border-rose-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Certificate Top Header */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-pink-50 dark:bg-slate-800 border border-pink-100 dark:border-slate-700 text-rose-500 dark:text-rose-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                        {cert.id === 'cert-ai' ? (
                          <Cpu className="w-5 h-5" />
                        ) : (
                          <FileText className="w-5 h-5" />
                        )}
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-rose-500 dark:text-rose-400 uppercase tracking-wider">
                          Certificate
                        </span>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 font-heading group-hover:text-rose-500 dark:group-hover:text-rose-400 transition-colors">
                          {cert.name}
                        </h4>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-pink-100/80 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-pink-200/70 dark:border-rose-900/40 shrink-0">
                      {cert.badge}
                    </span>
                  </div>

                  <div className="bg-pink-50/50 dark:bg-slate-850/60 p-3 rounded-xl border border-pink-100/60 dark:border-slate-800 mb-4">
                    <p className="text-xs font-semibold text-rose-800 dark:text-rose-300">
                      Focus: <span className="font-normal text-slate-700 dark:text-slate-300">{cert.focus}</span>
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {cert.description}
                  </p>
                </div>

                {/* Key Skills Tags */}
                <div className="pt-4 border-t border-pink-100/70 dark:border-slate-800">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2">
                    Core Competencies:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-0.5 text-xs font-medium bg-pink-50/50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md border border-pink-100/80 dark:border-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Relevant Coursework Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/90 dark:bg-slate-900/85 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-pink-100 dark:border-slate-800 shadow-xs"
        >
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-4 h-4 text-rose-500 dark:text-rose-400" />
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
              Key Academic Coursework & Applied Systems
            </h4>
          </div>

          <div className="flex flex-wrap gap-2">
            {education.coursework.map((course, cIdx) => (
              <span
                key={cIdx}
                className="px-3.5 py-1.5 text-xs sm:text-sm font-semibold bg-pink-50/70 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 rounded-xl border border-pink-200/60 dark:border-slate-700 hover:bg-pink-100/70 dark:hover:bg-slate-700 transition-colors"
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
