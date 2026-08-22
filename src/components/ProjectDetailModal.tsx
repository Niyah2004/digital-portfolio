import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Sparkles, TrendingUp } from 'lucide-react';
import { Project } from '../types';
import { VideoPlayer } from './VideoPlayer';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-pink-100 dark:border-slate-800 z-10 p-6 sm:p-8 text-slate-800 dark:text-slate-100"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-pink-50 dark:hover:bg-slate-800 transition-colors z-20 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-pink-100/80 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-pink-200 dark:border-rose-900/40">
                {project.categoryLabel}
              </span>
              {project.featured && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-semibold rounded-full bg-amber-100 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-900/50">
                  <Sparkles className="w-3 h-3" />
                  Featured Project
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 font-heading">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-1">
              {project.tagline}
            </p>
          </div>

          {/* Inline Video Player inside Modal */}
          <div className="mb-8">
            {project.videoUrl ? (
              <VideoPlayer
                videoUrl={project.videoUrl}
                posterUrl={project.fallbackPoster}
                title={project.title}
                caption={project.videoCaption}
              />
            ) : (
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-md border border-pink-100/60 dark:border-slate-800">
                <img
                  src={project.fallbackPoster}
                  alt={`${project.title} preview graphic`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            )}
          </div>

          {/* Quick Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {project.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-pink-50/50 dark:bg-slate-850/80 border border-pink-100/80 dark:border-slate-800 rounded-xl p-4 text-center"
                >
                  <p className="text-2xl font-bold text-rose-500 dark:text-rose-400 font-heading flex items-center justify-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-rose-400" />
                    {metric.value}
                  </p>
                  <p className="text-xs font-medium text-slate-600 dark:text-slate-400 mt-0.5">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Body Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-2 font-heading">
                About the Project
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Key Features */}
            {project.keyFeatures && (
              <div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-3 font-heading">
                  Key Capabilities & Architecture
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.keyFeatures.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300 bg-pink-50/40 dark:bg-slate-800/80 p-2.5 rounded-xl border border-pink-100/60 dark:border-slate-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Architecture Notes */}
            {project.architectureNotes && (
              <div className="bg-pink-50/50 dark:bg-slate-850/70 p-4 rounded-2xl border border-pink-100/80 dark:border-slate-800">
                <div className="flex items-center gap-2 text-xs font-semibold text-rose-700 dark:text-rose-300 mb-1.5 uppercase tracking-wide">
                  <Layers className="w-4 h-4 text-rose-400" />
                  Engineering Deep Dive
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.architectureNotes}
                </p>
              </div>
            )}

            {/* Tech Stack Badges */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
                Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-medium bg-pink-50/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md border border-pink-100 dark:border-slate-700 shadow-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-pink-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl bg-gradient-to-r from-rose-400 to-pink-400 hover:from-rose-500 hover:to-pink-500 text-white shadow-sm transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Application
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors border border-transparent dark:border-slate-700"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                )}
              </div>

              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-xl hover:bg-pink-50 dark:hover:bg-slate-800 transition-colors ml-auto cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
