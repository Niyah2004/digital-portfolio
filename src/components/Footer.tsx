import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';
import { Profile } from '../types';

interface FooterProps {
  profile: Profile;
  theme?: 'light' | 'dark';
  onToggleTheme?: () => void;
  onOpenDeployGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  profile,
  theme,
  onToggleTheme
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-[#0B0F17] border-t border-slate-200/50 dark:border-slate-800/60 py-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
          {/* Brand Info */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-pink-500/10 dark:bg-pink-400/15 border border-pink-400/20 text-rose-500 dark:text-pink-300 font-bold text-xs flex items-center justify-center">
              {profile.name.charAt(0)}
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white font-heading">
                {profile.name}
              </p>
              <p className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">
                {profile.role}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400">
            <a href="#about" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              About
            </a>
            <a href="#education" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Education
            </a>
            <a href="#skills" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-1.5">
            {onToggleTheme && (
              <button
                type="button"
                onClick={onToggleTheme}
                className="p-1.5 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                title="Toggle Theme"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-300" /> : <Moon className="w-3.5 h-3.5 text-slate-600" />}
              </button>
            )}

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-1.5 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-1.5 text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-50 dark:bg-slate-850 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg border border-slate-200/50 dark:border-slate-800 transition-colors ml-1 cursor-pointer"
              title="Back to Top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-400 dark:text-slate-500 gap-2">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p>
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
