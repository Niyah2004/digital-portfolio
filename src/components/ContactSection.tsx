import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Send,
  Copy,
  Check,
  MapPin,
  Clock,
  MessageSquare,
  Github,
  Linkedin,
  Sparkles
} from 'lucide-react';
import { Profile } from '../types';

interface ContactSectionProps {
  profile: Profile;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 relative bg-[#FFF9FA]/60 dark:bg-[#0B0F17] border-t border-slate-200/50 dark:border-slate-800/60 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-rose-500 dark:text-pink-400 block mb-2">
                05 / Get in Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading tracking-tight">
                Let's Start a Conversation
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                Available for technology consulting engagements, full-stack software development, or engineering roles.
              </p>
            </div>

            {/* Direct Email Copy Card */}
            <div className="bg-white dark:bg-slate-900/80 p-5 rounded-2xl border border-slate-200/60 dark:border-slate-800 shadow-xs space-y-3">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Direct Email:
              </span>
              <div className="flex items-center justify-between gap-2 p-2.5 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200/50 dark:border-slate-800">
                <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 font-mono truncate">
                  {profile.email}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg border border-slate-200/60 dark:border-slate-700 transition-colors shrink-0 cursor-pointer"
                  title="Copy email"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Availability & Location Cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white dark:bg-slate-900/80 p-4 rounded-xl border border-slate-200/60 dark:border-slate-800">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
                  Location
                </span>
                <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">
                  {profile.location.split('/')[0].trim()}
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900/80 p-4 rounded-xl border border-slate-200/60 dark:border-slate-800">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
                  Response
                </span>
                <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  Within 24 Hours
                </p>
              </div>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-xl border border-slate-200/60 dark:border-slate-800 shadow-2xs transition-all"
              >
                <Github className="w-3.5 h-3.5 text-slate-500" />
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-xl border border-slate-200/60 dark:border-slate-800 shadow-2xs transition-all"
              >
                <Linkedin className="w-3.5 h-3.5 text-slate-500" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-slate-200/60 dark:border-slate-800 shadow-xs">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-3"
                >
                  <div className="w-12 h-12 bg-pink-500/10 dark:bg-pink-400/15 text-rose-500 dark:text-pink-300 rounded-full flex items-center justify-center mx-auto">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">
                    Message Received
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
                    Thank you! I will review your message and get back to you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-2 px-4 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center gap-2 mb-1">
                    <MessageSquare className="w-4 h-4 text-rose-500 dark:text-pink-400" />
                    <h3 className="text-base font-bold text-slate-900 dark:text-white font-heading">
                      Direct Message
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex"
                        className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-850 border border-slate-200/70 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400/30 focus:border-pink-400 transition-all text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-850 border border-slate-200/70 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400/30 focus:border-pink-400 transition-all text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project Consultation / Software Role"
                      className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-850 border border-slate-200/70 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400/30 focus:border-pink-400 transition-all text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your initiative, timeline, or open role..."
                      className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-850 border border-slate-200/70 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400/30 focus:border-pink-400 transition-all text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 disabled:opacity-50 rounded-xl shadow-xs transition-all cursor-pointer"
                  >
                    {isSubmitting ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
