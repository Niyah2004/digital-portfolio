import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Printer
} from 'lucide-react';
import { Profile, Skill, WorkExperience, Education, Project } from '../types';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: Profile;
  education: Education;
  skills: Skill[];
  experiences: WorkExperience[];
  projects?: Project[];
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  profile,
  education,
  experiences,
  projects = [],
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
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity print:hidden"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200/60 dark:border-slate-800 z-10 p-6 sm:p-10 print:max-w-none print:max-h-none print:shadow-none print:border-none print:p-8 print:bg-white print:text-black print:dark:bg-white print:dark:text-black"
        >
          {/* Action Bar (Hidden when printing) */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-200/60 dark:border-slate-800 print:hidden">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-slate-100 dark:bg-slate-800 text-rose-600 dark:text-pink-300 border border-slate-200/60 dark:border-slate-700">
                Curriculum Vitae
              </span>
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                Print & Download Ready
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 rounded-xl shadow-xs transition-all cursor-pointer"
                title="Print or Save as PDF"
              >
                <Printer className="w-4 h-4" />
                Print / Save PDF
              </button>

              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close resume view"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Document */}
          <div className="space-y-6 text-slate-800 dark:text-slate-200 print:text-black">
            {/* Header */}
            <div className="border-b border-slate-300 dark:border-slate-700 print:border-slate-300 pb-4 text-center sm:text-left">
              <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 print:text-black font-heading">
                {profile.name}
              </h1>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-slate-600 dark:text-slate-400 print:text-slate-600 mt-2">
                <span>{profile.location.split('/')[0].trim()}</span>
                <span>|</span>
                {profile.phone && (
                  <>
                    <span>{profile.phone}</span>
                    <span>|</span>
                  </>
                )}
                <span>{profile.email}</span>
                <span>|</span>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-rose-500 dark:text-rose-400 print:text-rose-700 hover:underline">
                  linkedin.com/in/janiyah-wright
                </a>
                <span>|</span>
                <a href={profile.github} target="_blank" rel="noreferrer" className="text-rose-500 dark:text-rose-400 print:text-rose-700 hover:underline">
                  github.com/Niyah2004
                </a>
              </div>
            </div>

            {/* EDUCATION */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-300 print:text-rose-800 border-b border-slate-300 dark:border-slate-700 print:border-slate-300 pb-1 mb-2 font-heading">
                EDUCATION
              </h2>
              <div className="space-y-1 text-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-slate-900 dark:text-slate-100 print:text-black">
                  <span>
                    {education.degree}, {education.major} — <span className="font-semibold text-slate-800 dark:text-slate-200 print:text-slate-800">{education.institution}, {education.location}</span>
                  </span>
                  <span className="text-slate-600 dark:text-slate-400 print:text-slate-600 font-mono text-[11px]">
                    {education.graduationDate}
                  </span>
                </div>
                <div className="text-slate-700 dark:text-slate-300 print:text-slate-700 text-xs">
                  <span className="font-semibold">GPA: {education.gpa}</span> | <span>{education.accreditation}</span> | <span className="font-semibold">Academic Certificates:</span> Artificial Intelligence, Technical Communication
                </div>
              </div>
            </div>

            {/* TECHNICAL SKILLS */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-300 print:text-rose-800 border-b border-slate-300 dark:border-slate-700 print:border-slate-300 pb-1 mb-2 font-heading">
                TECHNICAL SKILLS
              </h2>
              <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 print:text-slate-700">
                <p>
                  <span className="font-bold text-slate-900 dark:text-slate-100 print:text-black">Risk & Compliance:</span> NIST CSF, ISO 27001, PCI-DSS, SOC 2, Security Best Practices, Control Evaluation, Authentication Architecture (SSO, MFA, IAM)
                </p>
                <p>
                  <span className="font-bold text-slate-900 dark:text-slate-100 print:text-black">Programming & Development:</span> Python, JavaScript, TypeScript, Java, C++, HTML, CSS, React Native, Node.js, REST API, SQL, Git, MATLAB
                </p>
                <p>
                  <span className="font-bold text-slate-900 dark:text-slate-100 print:text-black">Cloud, DevOps & Testing:</span> Docker, GitHub/GitLab, CI/CD (Jenkins, Azure DevOps), Selenium, Cypress, Playwright, TestNG
                </p>
                <p>
                  <span className="font-bold text-slate-900 dark:text-slate-100 print:text-black">Gen AI & Agentic AI:</span> Agentic AI System Design, Multi-Agent Workflow Integration, RAG, Prompt Engineering, LLM Integration, Model Evaluation
                </p>
                <p>
                  <span className="font-bold text-slate-900 dark:text-slate-100 print:text-black">Tools & Platforms:</span> Firebase, TensorFlow.js, Jira, Figma, Power BI, Notion, Slack, ServiceNow, Excel, Tableau
                </p>
              </div>
            </div>

            {/* PROFESSIONAL EXPERIENCE */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-300 print:text-rose-800 border-b border-slate-300 dark:border-slate-700 print:border-slate-300 pb-1 mb-3 font-heading">
                PROFESSIONAL EXPERIENCE
              </h2>
              <div className="space-y-4">
                {experiences.map((exp) => (
                  <div key={exp.id} className="space-y-1 text-xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                      <h3 className="font-bold text-slate-900 dark:text-slate-100 print:text-black text-sm">
                        {exp.role} — <span className="text-rose-600 dark:text-rose-400 print:text-rose-700 font-semibold">{exp.company}</span>, <span className="text-slate-600 dark:text-slate-400 print:text-slate-600 font-normal">{exp.location}</span>
                      </h3>
                      <span className="font-mono text-slate-600 dark:text-slate-400 print:text-slate-600 text-[11px] font-semibold">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="list-disc list-outside pl-4 space-y-1 text-slate-700 dark:text-slate-300 print:text-slate-700">
                      {exp.responsibilities.map((r, rIdx) => (
                        <li key={rIdx} className="leading-relaxed">
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* ENGINEERING PROJECTS */}
            {projects && projects.length > 0 && (
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-300 print:text-rose-800 border-b border-slate-300 dark:border-slate-700 print:border-slate-300 pb-1 mb-3 font-heading">
                  ENGINEERING PROJECTS
                </h2>
                <div className="space-y-3">
                  {projects.slice(0, 2).map((proj) => (
                    <div key={proj.id} className="space-y-1 text-xs">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                        <h3 className="font-bold text-slate-900 dark:text-slate-100 print:text-black text-sm">
                          {proj.title}
                        </h3>
                        <span className="font-mono text-slate-600 dark:text-slate-400 print:text-slate-600 text-[11px] font-semibold">
                          {proj.categoryLabel}
                        </span>
                      </div>

                      <ul className="list-disc list-outside pl-4 space-y-1 text-slate-700 dark:text-slate-300 print:text-slate-700">
                        {proj.keyFeatures.map((f, fIdx) => (
                          <li key={fIdx} className="leading-relaxed">
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
