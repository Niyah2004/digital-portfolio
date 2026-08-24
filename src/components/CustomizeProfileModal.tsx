import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Save, RotateCcw, Sliders, Check } from 'lucide-react';
import { Profile } from '../types';
import { initialProfile } from '../data/portfolioData';

interface CustomizeProfileModalProps {
  profile: Profile;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedProfile: Profile) => void;
  onReset: () => void;
}

export const CustomizeProfileModal: React.FC<CustomizeProfileModalProps> = ({
  profile,
  isOpen,
  onClose,
  onSave,
  onReset,
}) => {
  const [formData, setFormData] = useState<Profile>({ ...profile });
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1000);
  };

  const handleResetToDefault = () => {
    setFormData({ ...initialProfile });
    onReset();
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

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200/60 dark:border-slate-800 z-10 p-6 sm:p-8 text-slate-800 dark:text-slate-100"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-20 cursor-pointer"
            aria-label="Close customizer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center shadow-xs">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 font-heading">
                Customize Portfolio
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                Personalize your name, role, bio, and contact information instantly.
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-850 border border-slate-200/70 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400/30 focus:border-pink-400 text-slate-800 dark:text-slate-100"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Professional Title / Role
                </label>
                <input
                  type="text"
                  required
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-850 border border-slate-200/70 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400/30 focus:border-pink-400 text-slate-800 dark:text-slate-100"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Full Bio
              </label>
              <textarea
                rows={3}
                required
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-850 border border-slate-200/70 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400/30 focus:border-pink-400 text-slate-800 dark:text-slate-100 resize-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Specialization / Short Focus Line
              </label>
              <input
                type="text"
                value={formData.shortBio}
                onChange={(e) => setFormData({ ...formData, shortBio: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-850 border border-slate-200/70 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400/30 focus:border-pink-400 text-slate-800 dark:text-slate-100"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-850 border border-slate-200/70 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400/30 focus:border-pink-400 text-slate-800 dark:text-slate-100"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Contact Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-850 border border-slate-200/70 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400/30 focus:border-pink-400 text-slate-800 dark:text-slate-100"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  value={formData.phone || ''}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 469.231.4486"
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-850 border border-slate-200/70 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400/30 focus:border-pink-400 text-slate-800 dark:text-slate-100"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Avatar Image URL
                </label>
                <input
                  type="url"
                  value={formData.avatarUrl}
                  onChange={(e) => setFormData({ ...formData, avatarUrl: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-850 border border-slate-200/70 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400/30 focus:border-pink-400 text-slate-800 dark:text-slate-100"
                />
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleResetToDefault}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors cursor-pointer border border-transparent dark:border-slate-700"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset to Default
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 rounded-xl shadow-xs transition-all cursor-pointer"
                >
                  {savedSuccess ? (
                    <>
                      <Check className="w-4 h-4" />
                      Saved!
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4" />
                      Save Changes
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
