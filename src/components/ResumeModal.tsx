import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Printer, CheckCircle2, Building2, Calendar, MapPin, Mail, Sparkles, Award } from 'lucide-react';
import { Profile, Skill, WorkExperience } from '../types';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: Profile;
  skills: Skill[];
  experiences: WorkExperience[];
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  profile,
  skills,
  experiences,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto print:p-0">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity print:hidden"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-rose-100 z-10 p-6 sm:p-10 print:max-w-none print:max-h-none print:shadow-none print:border-none print:p-8"
        >
          {/* Action Bar (Hidden when printing) */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-rose-100 print:hidden">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-rose-100 text-rose-700">
                Curriculum Vitae
              </span>
              <span className="text-xs font-semibold text-slate-500">
                Print & Download Ready
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                title="Print or Save as PDF"
              >
                <Printer className="w-4 h-4 text-slate-600" />
                Print / Save PDF
              </button>

              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-rose-50 transition-colors"
                aria-label="Close resume view"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Document */}
          <div className="space-y-8 text-slate-800">
            {/* Header */}
            <div className="border-b border-rose-200 pb-6">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
                {profile.name}
              </h1>
              <p className="text-lg font-bold text-rose-600 font-heading mt-1">
                {profile.role}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600 mt-3">
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-rose-500" />
                  {profile.email}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-rose-500" />
                  {profile.location}
                </span>
                <span>•</span>
                <span className="text-rose-600 font-semibold">
                  {profile.availability.text}
                </span>
              </div>
            </div>

            {/* Executive Summary */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-rose-800 mb-2 border-b border-rose-100 pb-1">
                Professional Summary
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                {profile.bio}
              </p>
            </div>

            {/* Core Competencies */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-rose-800 mb-3 border-b border-rose-100 pb-1">
                Core Competencies & Technologies
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {skills.slice(0, 9).map((s) => (
                  <div key={s.id} className="text-xs bg-rose-50/60 p-2.5 rounded-lg border border-rose-100">
                    <p className="font-bold text-slate-900">{s.name}</p>
                    <p className="text-[11px] text-slate-500 line-clamp-1">{s.highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Work History */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-rose-800 mb-4 border-b border-rose-100 pb-1">
                Work Experience
              </h2>
              <div className="space-y-6">
                {experiences.map((exp) => (
                  <div key={exp.id} className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                      <div>
                        <h3 className="text-base font-bold text-slate-900">
                          {exp.role} — <span className="text-rose-600 font-semibold">{exp.company}</span>
                        </h3>
                        <p className="text-xs text-slate-500">
                          {exp.location} • {exp.type}
                        </p>
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-600 mt-1 sm:mt-0">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700">
                      {exp.description}
                    </p>

                    <ul className="space-y-1 pl-1">
                      {exp.responsibilities.slice(0, 3).map((r, rIdx) => (
                        <li key={rIdx} className="text-xs text-slate-600 flex items-start gap-1.5">
                          <span className="text-rose-500 font-bold">•</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
