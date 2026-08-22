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
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-mesh-rose"
    >
      {/* Decorative ambient blurred rose orbs */}
      <div className="absolute top-12 left-1/4 w-72 h-72 bg-rose-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-36 right-10 w-96 h-96 bg-pink-300/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text Info, Name, Bio */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status & Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-rose-200/70 shadow-xs backdrop-blur-md"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500" />
              </span>
              <span className="text-xs font-semibold text-slate-800">
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
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-rose-500">{profile.name}</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-rose-800 font-heading">
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
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {profile.bio}
              </p>

              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm font-medium text-slate-500">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                <span>{profile.location}</span>
                <span className="mx-1.5 text-rose-300">•</span>
                <span className="text-slate-600">{profile.shortBio}</span>
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
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl text-white bg-rose-600 hover:bg-rose-500 shadow-md shadow-rose-500/25 hover:shadow-rose-500/35 transition-all transform hover:-translate-y-0.5"
              >
                <PlayCircle className="w-4 h-4" />
                Watch Video Demos
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onDownloadResume}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl text-slate-800 bg-white hover:bg-rose-50 border border-rose-200 shadow-xs hover:border-rose-300 transition-all transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-rose-500" />
                Download CV / Resume
              </button>

              <button
                type="button"
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold rounded-xl text-rose-700 hover:bg-rose-100/60 transition-colors"
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
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Connect:
              </span>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg text-slate-600 hover:text-rose-600 hover:bg-white border border-transparent hover:border-rose-200 transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg text-slate-600 hover:text-rose-600 hover:bg-white border border-transparent hover:border-rose-200 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="p-2 rounded-lg text-slate-600 hover:text-rose-600 hover:bg-white border border-transparent hover:border-rose-200 transition-all"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Visual Portrait & Stats Grid */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-sm"
            >
              {/* Decorative Frame with glowing rose gradient */}
              <div className="relative rounded-3xl p-3 bg-gradient-to-b from-rose-200 via-pink-100 to-white shadow-xl shadow-rose-200/50 border border-white">
                <div className="relative aspect-4/5 rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src={profile.avatarUrl}
                    alt={profile.name}
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  {/* Rose Gradient Overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex flex-col justify-end p-5">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 text-[11px] font-bold rounded-md bg-rose-500 text-white backdrop-blur-md">
                        Entry Level
                      </span>
                      <span className="text-xs font-semibold text-white/90">
                        {profile.role.split('&')[0]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Micro-Badge */}
                <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-rose-100 shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-500 text-white flex items-center justify-center font-bold">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  {/*<div>
                    <p className="text-xs font-bold text-slate-900"></p>
                    <p className="text-[11px] text-slate-500"> </p>
                  </div>*/}
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
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-rose-200/60"
        >
          {profile.stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-rose-100/80 shadow-xs hover:border-rose-300 hover:shadow-md transition-all duration-300 group"
            >
              <p className="text-2xl sm:text-3xl font-extrabold text-rose-600 font-heading group-hover:scale-105 transition-transform origin-left">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                {stat.label}
              </p>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 line-clamp-1">
                {stat.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
