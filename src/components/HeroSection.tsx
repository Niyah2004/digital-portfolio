import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Download,
  MapPin,
  Sparkles,
  Github,
  Linkedin,
  Mail,
  CheckCircle2,
  PlayCircle,
  Briefcase
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
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-mesh-rose transition-colors duration-300"
    >
      {/* Decorative ambient blurred pastel orbs */}
      <div className="absolute top-12 left-1/4 w-72 h-72 bg-pink-200/30 dark:bg-rose-900/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-36 right-10 w-96 h-96 bg-rose-200/25 dark:bg-pink-900/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text Info, Name, Bio */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status & Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 dark:bg-slate-900/80 border border-pink-100 dark:border-slate-800 shadow-xs backdrop-blur-md"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-400 dark:bg-rose-400" />
              </span>
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                {profile.availability.text}
              </span>
            </motion.div>

            {/* Main Display Name & Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight font-heading leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-400 to-rose-400 dark:from-rose-400 dark:via-pink-300 dark:to-rose-300">
                  {profile.name}
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-rose-600 dark:text-rose-300 font-heading">
                {profile.role}
              </p>
            </motion.div>

            {/* Short Bio Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {profile.bio}
              </p>

              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                <MapPin className="w-4 h-4 text-rose-400 dark:text-rose-400 shrink-0" />
                <span>{profile.location}</span>
                <span className="mx-1.5 text-pink-300 dark:text-slate-600">•</span>
                <span className="text-slate-600 dark:text-slate-300">{profile.shortBio}</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2"
            >
              <button
                type="button"
                onClick={onExploreProjects}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-rose-400 to-pink-400 hover:from-rose-500 hover:to-pink-500 dark:from-rose-500 dark:to-pink-500 dark:hover:from-rose-400 dark:hover:to-pink-400 shadow-md shadow-pink-300/30 dark:shadow-rose-950/50 hover:shadow-pink-300/40 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <PlayCircle className="w-4 h-4" />
                Watch Video Demos
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onDownloadResume}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl text-slate-800 dark:text-slate-200 bg-white/90 dark:bg-slate-900/90 hover:bg-pink-50 dark:hover:bg-slate-800 border border-pink-100 dark:border-slate-800 shadow-xs hover:border-pink-200 dark:hover:border-slate-700 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Download className="w-4 h-4 text-rose-400 dark:text-rose-400" />
                Download CV / Resume
              </button>

              <button
                type="button"
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold rounded-xl text-rose-600 dark:text-rose-300 hover:bg-pink-50/70 dark:hover:bg-slate-800/80 transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-3 pt-3"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Connect:
              </span>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-rose-500 dark:hover:text-rose-300 hover:bg-white/80 dark:hover:bg-slate-800 border border-transparent hover:border-pink-100 dark:hover:border-slate-700 transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-rose-500 dark:hover:text-rose-300 hover:bg-white/80 dark:hover:bg-slate-800 border border-transparent hover:border-pink-100 dark:hover:border-slate-700 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-rose-500 dark:hover:text-rose-300 hover:bg-white/80 dark:hover:bg-slate-800 border border-transparent hover:border-pink-100 dark:hover:border-slate-700 transition-all"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Visual Portrait & Badges */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-sm"
            >
              {/* Decorative Frame with subtle pastel gradient */}
              <div className="relative rounded-3xl p-3 bg-gradient-to-b from-pink-100/90 via-pink-50/50 to-white dark:from-slate-800 dark:via-slate-900 dark:to-slate-950 shadow-xl shadow-pink-200/40 dark:shadow-black/60 border border-white/80 dark:border-slate-850">
                <div className="relative aspect-4/5 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={profile.avatarUrl}
                    alt={profile.name}
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  {/* Subtle Gradient Overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent flex flex-col justify-end p-5">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 text-[11px] font-bold rounded-md bg-gradient-to-r from-rose-400 to-pink-400 text-white backdrop-blur-md">
                        Entry Level
                      </span>
                      <span className="text-xs font-semibold text-white/90">
                        {profile.role.split('&')[0]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Micro-Badge */}
                <div className="absolute -bottom-4 -right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-3 rounded-2xl border border-pink-100 dark:border-slate-800 shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-400 to-pink-400 text-white flex items-center justify-center font-bold shadow-xs">
                    <Briefcase className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Highlight Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-pink-100/70 dark:border-slate-800"
        >
          {profile.stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-pink-100/80 dark:border-slate-800 shadow-xs hover:border-pink-300 dark:hover:border-rose-500/40 hover:shadow-md transition-all duration-300 group"
            >
              <p className="text-2xl sm:text-3xl font-extrabold text-rose-500 dark:text-rose-400 font-heading group-hover:scale-105 transition-transform origin-left">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">
                {stat.label}
              </p>
              <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                {stat.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
