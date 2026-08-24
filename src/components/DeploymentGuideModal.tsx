import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Rocket,
  CheckCircle2,
  Copy,
  Check,
  Terminal,
  Globe,
  ShieldCheck,
  CloudRain,
  Zap,
  Github,
  FileCheck
} from 'lucide-react';
import { deploymentGuides } from '../data/portfolioData';

interface DeploymentGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeploymentGuideModal: React.FC<DeploymentGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedGuideId, setSelectedGuideId] = useState<string>('guide-vercel');
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  if (!isOpen) return null;

  const currentGuide = deploymentGuides.find((g) => g.id === selectedGuideId) || deploymentGuides[0];

  const handleCopy = (command: string) => {
    navigator.clipboard.writeText(command);
    setCopiedCommand(command);
    setTimeout(() => setCopiedCommand(null), 2500);
  };

  const getGuideIcon = (id: string) => {
    switch (id) {
      case 'guide-vercel': return <Zap className="w-4 h-4 text-rose-400" />;
      case 'guide-netlify': return <CloudRain className="w-4 h-4 text-sky-400" />;
      case 'guide-ghpages': return <Github className="w-4 h-4 text-slate-700 dark:text-slate-300" />;
      case 'guide-cloudflare': return <ShieldCheck className="w-4 h-4 text-amber-400" />;
      default: return <Globe className="w-4 h-4 text-rose-400" />;
    }
  };

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

        {/* Modal Box */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200/60 dark:border-slate-800 z-10 p-6 sm:p-8 text-slate-800 dark:text-slate-100"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-20 cursor-pointer"
            aria-label="Close guide"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center shadow-xs shrink-0">
              <Rocket className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 font-heading">
                  Hosting & Deployment Guide
                </h2>
                <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900/50">
                  100% Static Ready
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                Deploy this portfolio for free to any standard static hosting platform in under 3 minutes.
              </p>
            </div>
          </div>

          {/* Static Deliverable Guarantee Box */}
          <div className="bg-slate-50 dark:bg-slate-850/70 border border-slate-200/60 dark:border-slate-800 rounded-2xl p-4 mb-6 flex items-start gap-3">
            <FileCheck className="w-5 h-5 text-rose-500 dark:text-rose-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-1">
              <p className="font-bold text-slate-900 dark:text-slate-100">
                Self-Contained Client-Side Architecture
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                This website is built entirely as a standalone client-side Single Page Application (SPA). It requires <strong>zero backend servers, no database provisioning, and no ongoing server maintenance</strong>.
              </p>
            </div>
          </div>

          {/* Provider Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
            {deploymentGuides.map((guide) => {
              const isSelected = selectedGuideId === guide.id;
              return (
                <button
                  key={guide.id}
                  onClick={() => setSelectedGuideId(guide.id)}
                  className={`flex flex-col items-center text-center p-3 rounded-2xl border text-xs font-bold transition-all cursor-pointer ${isSelected
                      ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-transparent shadow-xs'
                      : 'bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-200/60 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'
                    }`}
                >
                  <div className={`p-1.5 rounded-lg mb-1.5 ${isSelected ? 'bg-white/15 dark:bg-slate-900/10' : 'bg-slate-50 dark:bg-slate-700'}`}>
                    {getGuideIcon(guide.id)}
                  </div>
                  <span className="line-clamp-1">{guide.title.split('(')[0].replace('Deploy to ', '')}</span>
                  <span className={`text-[10px] font-normal mt-0.5 ${isSelected ? 'text-slate-300 dark:text-slate-600' : 'text-slate-500 dark:text-slate-400'}`}>
                    {guide.estimatedTime}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Guide Details */}
          <div className="bg-slate-50 dark:bg-slate-850/60 rounded-2xl p-5 sm:p-6 border border-slate-200/60 dark:border-slate-800 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 font-heading">
                  {currentGuide.title}
                </h3>
                <span className="text-xs text-rose-500 dark:text-rose-400 font-semibold">
                  Difficulty: {currentGuide.difficulty} • Estimated Time: {currentGuide.estimatedTime}
                </span>
              </div>
            </div>

            {/* Steps Checklist */}
            <div className="space-y-4">
              {currentGuide.steps.map((s) => (
                <div
                  key={s.step}
                  className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200/60 dark:border-slate-800 space-y-2 shadow-2xs"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 text-rose-600 dark:text-pink-300 text-xs font-bold flex items-center justify-center shrink-0">
                      {s.step}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 font-heading">
                      {s.title}
                    </h4>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 pl-8 leading-relaxed">
                    {s.explanation}
                  </p>

                  {s.command && (
                    <div className="ml-8 mt-2 flex items-center justify-between gap-2 p-2.5 bg-slate-900 dark:bg-slate-950 text-emerald-400 font-mono text-xs rounded-lg border border-slate-800">
                      <div className="flex items-center gap-2 truncate">
                        <Terminal className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="truncate">{s.command}</span>
                      </div>
                      <button
                        onClick={() => handleCopy(s.command!)}
                        className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 transition-colors shrink-0 cursor-pointer"
                        title="Copy command"
                      >
                        {copiedCommand === s.command ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Free Tier Notice */}
            <div className="text-xs text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900/80 p-3 rounded-xl border border-slate-200/60 dark:border-slate-800 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0" />
              <span>{currentGuide.freeTierNote}</span>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200/60 dark:border-slate-800">
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Build command: <code className="font-mono text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">npm run build</code> → Output: <code className="font-mono text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">dist/</code>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 text-sm font-semibold bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white rounded-xl transition-colors ml-auto cursor-pointer"
            >
              Got it, Close Guide
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
