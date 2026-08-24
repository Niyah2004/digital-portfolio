import React, { useState } from 'react';
import { Copy, Check, Github, Linkedin } from 'lucide-react';
import { Profile } from '../types';
import { AmbientGlow } from './AmbientGlow';
import { SpotlightCard } from './SpotlightCard';

interface ContactSectionProps {
  profile: Profile;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 relative overflow-hidden bg-[#FFF9FA]/60 dark:bg-[#0B0F17] border-t border-slate-200/50 dark:border-slate-800/60 transition-colors duration-300"
    >
      <AmbientGlow />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <span className="text-xs font-label font-semibold uppercase tracking-widest text-rose-500 dark:text-pink-400 block mb-2">
          Contact
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white font-heading tracking-tight mb-3">
          Get in touch
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-8">
          Feel free to reach out — always happy to talk technology consulting, software development, or open roles.
        </p>

        <SpotlightCard className="inline-flex items-center gap-2 p-2 bg-white dark:bg-slate-900/80 rounded-2xl border border-slate-200/60 dark:border-slate-800 shadow-xs sleek-hover">
          <span className="pl-3 text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200 font-mono relative z-10">
            {profile.email}
          </span>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl border border-slate-200/60 dark:border-slate-700 transition-colors cursor-pointer relative z-10"
            title="Copy email"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>Copy</span>
              </>
            )}
          </button>
        </SpotlightCard>

        <div className="flex items-center justify-center gap-2 mt-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-xl border border-slate-200/60 dark:border-slate-800 shadow-2xs transition-all"
          >
            <Github className="w-3.5 h-3.5 text-slate-500" />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-xl border border-slate-200/60 dark:border-slate-800 shadow-2xs transition-all"
          >
            <Linkedin className="w-3.5 h-3.5 text-slate-500" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};
