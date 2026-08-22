import React from 'react';
import { ArrowUp, Heart, Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';
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
  onToggleTheme, 
  onOpenDeployGuide 
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white/95 dark:bg-slate-950 border-t border-pink-100 dark:border-slate-800/80 py-12 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-pink-100/70 dark:border-slate-800">
          {/* Brand Info */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-400 dark:from-rose-500 dark:to-pink-500 text-white font-bold flex items-center justify-center shadow-sm shadow-pink-300/30">
              {profile.name.charAt(0)}
            </div>
            <div>
              <p className="text-base font-bold text-slate-900 dark:text-slate-100 font-heading">
                {profile.name}
              </p>
              <p className="text-xs text-rose-500 dark:text-rose-400 font-medium">
                {profile.role}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-600 dark:text-slate-400">
            <a href="#about" className="hover:text-rose-500 dark:hover:text-rose-300 transition-colors">
              About
            </a>
            <a href="#education" className="hover:text-rose-500 dark:hover:text-rose-300 transition-colors">
              Education
            </a>
            <a href="#skills" className="hover:text-rose-500 dark:hover:text-rose-300 transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-rose-500 dark:hover:text-rose-300 transition-colors">
              Projects & Demos
            </a>
            <a href="#experience" className="hover:text-rose-500 dark:hover:text-rose-300 transition-colors">
              Work History
            </a>
            <a href="#contact" className="hover:text-rose-500 dark:hover:text-rose-300 transition-colors">
              Contact
            </a>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            {onToggleTheme && (
              <button
                type="button"
                onClick={onToggleTheme}
                className="p-2 text-slate-500 dark:text-slate-400 hover:text-rose-500 dark:hover:text-rose-300 hover:bg-pink-50 dark:hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
                title="Toggle Theme"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-rose-500" />}
              </button>
            )}

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-rose-500 dark:hover:text-rose-300 hover:bg-pink-50 dark:hover:bg-slate-800 rounded-xl transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-rose-500 dark:hover:text-rose-300 hover:bg-pink-50 dark:hover:bg-slate-800 rounded-xl transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-rose-500 dark:hover:text-rose-300 hover:bg-pink-50 dark:hover:bg-slate-800 rounded-xl transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 text-rose-600 dark:text-rose-300 bg-pink-50 dark:bg-slate-800 hover:bg-pink-100 dark:hover:bg-slate-700 rounded-xl border border-pink-200 dark:border-slate-700 shadow-2xs transition-colors ml-2 cursor-pointer"
              title="Back to Top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright & Subtext */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-2">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
            Crafted with <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" /> using React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};
