import React from 'react';
import { ArrowUp, Heart, Rocket, Github, Linkedin, Mail } from 'lucide-react';
import { Profile } from '../types';

interface FooterProps {
  profile: Profile;
  onOpenDeployGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, onOpenDeployGuide }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-rose-100 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-rose-100/70">
          {/* Brand Info */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 text-white font-bold flex items-center justify-center shadow-sm">
              {profile.name.charAt(0)}
            </div>
            <div>
              <p className="text-base font-bold text-slate-900 font-heading">
                {profile.name}
              </p>
              <p className="text-xs text-rose-600 font-medium">
                {profile.role}
              </p>
            </div>
          </div>

          {/* Quick Links & Deploy Guide Trigger */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-600">
            <a href="#about" className="hover:text-rose-600 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-rose-600 transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-rose-600 transition-colors">
              Projects & Demos
            </a>
            <a href="#experience" className="hover:text-rose-600 transition-colors">
              Work History
            </a>
            <a href="#contact" className="hover:text-rose-600 transition-colors">
              Contact
            </a>
            {/*<buttons
              onClick={onOpenDeployGuide}
              className="inline-flex items-center gap-1 text-rose-600 hover:text-rose-700 bg-rose-50 px-2.5 py-1 rounded-lg border border-rose-200 transition-colors"
            >
              <Rocket className="w-3.5 h-3.5" />
              Deploy Guide
            </button>*/}
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-2 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 text-rose-600 bg-rose-50 hover:bg-rose-100 rounded-xl border border-rose-200 shadow-2xs transition-colors ml-2"
              title="Back to Top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright & Subtext */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-slate-500">
            Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> using React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};
