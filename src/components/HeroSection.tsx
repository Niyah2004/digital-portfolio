import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Download,
  MapPin,
  Github,
  Linkedin,
  Mail,
  PlayCircle,
  Sparkles
} from 'lucide-react';
import { Profile } from '../types';

interface HeroSectionProps {
  profile: Profile;
  onExploreProjects: () => void;
  onContactClick: () => void;
  onDownloadResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  profile,
  onExploreProjects,
  onContactClick,
  onDownloadResume,
}) => {
  return (
    <section
      id="about"
      className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden bg-mesh-rose transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Name, Role, Bio, Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Display Name & Title */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight font-heading leading-[1.1]">
                {profile.name}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-600 dark:text-slate-300 font-heading">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-rose-400 dark:from-rose-400 dark:via-pink-300 dark:to-rose-300 font-semibold">
                  {profile.role}
                </span>
              </p>
            </motion.div>

            {/* Short Bio */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                {profile.bio}
              </p>

              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-rose-500 dark:text-pink-400 shrink-0" />
                <span>{profile.location}</span>
                <span className="text-slate-300 dark:text-slate-700">•</span>
                <span className="text-slate-600 dark:text-slate-400">{profile.shortBio}</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2"
            >
              <button
                type="button"
                onClick={onExploreProjects}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 shadow-sm transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <PlayCircle className="w-4 h-4 text-pink-400 dark:text-rose-500" />
                View Projects & Demos
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={onDownloadResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl text-slate-700 dark:text-slate-200 bg-white/90 dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-850 border border-slate-200/80 dark:border-slate-800 shadow-2xs transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                Resume / CV
              </button>

              <button
                type="button"
                onClick={onContactClick}
                className="inline-flex items-center gap-1.5 px-3 py-2.5 text-xs sm:text-sm font-semibold rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5" />
                Contact
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start gap-2 pt-2"
            >
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono pr-1">
                Links:
              </span>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800 transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800 transition-all"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Clean Minimalist Portrait Card */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-xs sm:max-w-sm"
            >
              <div className="relative rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-850 border border-slate-200/70 dark:border-slate-800 shadow-sm sleek-hover">
                <div className="aspect-4/5 w-full overflow-hidden">
                  <img
                    src={profile.avatarUrl}
                    alt={profile.name}
                    className="w-full h-full object-cover object-center grayscale-15 hover:grayscale-0 transition-all duration-500"
                    loading="eager"
                  />
                </div>
                {/* Subtle Clean Bottom Label */}
                <div className="p-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-t border-slate-200/50 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-slate-100 font-heading">
                      {profile.name}
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate max-w-[200px]">
                      {profile.role}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-pink-500/10 dark:bg-pink-400/15 text-rose-600 dark:text-pink-300 text-[10px] font-bold font-mono">
                    <Sparkles className="w-3 h-3" />
                    UNT CS
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
