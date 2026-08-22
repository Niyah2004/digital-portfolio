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
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-rose-100 z-10 p-6 sm:p-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-rose-50 transition-colors z-20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-rose-100 text-rose-700">
                {project.categoryLabel}
              </span>
              {project.featured && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-semibold rounded-full bg-amber-100 text-amber-800">
                  <Sparkles className="w-3 h-3" />
                  Featured Project
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1">
              {project.tagline}
            </p>
          </div>

          {/* Inline Video Player inside Modal (falls back to a static preview when no demo video exists) */}
          <div className="mb-8">
            {project.videoUrl ? (
              <VideoPlayer
                videoUrl={project.videoUrl}
                posterUrl={project.fallbackPoster}
                title={project.title}
                caption={project.videoCaption}
              />
            ) : (
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-900 shadow-md border border-rose-100">
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
                  className="bg-rose-50/70 border border-rose-100/80 rounded-xl p-4 text-center"
                >
                  <p className="text-2xl font-bold text-rose-600 font-heading flex items-center justify-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-rose-500" />
                    {metric.value}
                  </p>
                  <p className="text-xs font-medium text-slate-600 mt-0.5">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Body Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-base font-semibold text-slate-900 mb-2 font-heading">
                About the Project
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Key Features */}
            {project.keyFeatures && (
              <div>
                <h3 className="text-base font-semibold text-slate-900 mb-3 font-heading">
                  Key Capabilities & Architecture
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.keyFeatures.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100"
                    >
                      <CheckCircle2 className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Architecture Notes */}
            {project.architectureNotes && (
              <div className="bg-gradient-to-br from-rose-50/50 to-pink-50/30 p-4 rounded-xl border border-rose-100">
                <div className="flex items-center gap-2 text-xs font-semibold text-rose-800 mb-1.5 uppercase tracking-wide">
                  <Layers className="w-4 h-4 text-rose-600" />
                  Engineering Deep Dive
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {project.architectureNotes}
                </p>
              </div>
            )}

            {/* Tech Stack Badges */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2.5">
                Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-medium bg-white text-slate-700 rounded-md border border-rose-200/80 shadow-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-rose-100 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-rose-600 hover:bg-rose-500 text-white shadow-sm transition-all"
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
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                )}
              </div>

              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors ml-auto"
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
