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
  Sparkles,
  ArrowRight
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
    <section id="contact" className="py-20 sm:py-28 relative bg-[#FFF1F5] overflow-hidden">
      {/* Background ambient orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-200/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-pink-300/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 text-rose-700 shadow-2xs border border-rose-200">
              <Mail className="w-3.5 h-3.5" />
              Let's Connect
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              Get in Touch
            </h2>

            <p className="text-base text-slate-700 leading-relaxed">
              Have a project in mind, an exciting role to discuss, or just want to chat about web architecture and UI design? My inbox is always open.
            </p>

            {/* Direct Email Copy Card */}
            <div className="bg-white p-5 rounded-2xl border border-rose-200/90 shadow-sm space-y-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Direct Email Address:
              </span>
              <div className="flex items-center justify-between gap-2 p-3 bg-rose-50/70 rounded-xl border border-rose-100">
                <span className="text-sm sm:text-base font-semibold text-slate-800 font-mono truncate">
                  {profile.email}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-rose-700 bg-white hover:bg-rose-100 rounded-lg border border-rose-200 shadow-2xs transition-colors shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Availability & Location Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-white p-4 rounded-2xl border border-rose-100 shadow-2xs">
                <div className="flex items-center gap-2 text-rose-600 mb-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Location
                  </span>
                </div>
                <p className="text-sm font-semibold text-slate-800">
                  {profile.location}
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-rose-100 shadow-2xs">
                <div className="flex items-center gap-2 text-rose-600 mb-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Response Time
                  </span>
                </div>
                <p className="text-sm font-semibold text-slate-800">
                  Within 24 Hours
                </p>
              </div>
            </div>

            {/* Social Channels */}
            <div className="pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Social Profiles
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-white text-slate-700 hover:text-rose-600 rounded-xl border border-rose-100 shadow-2xs transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-white text-slate-700 hover:text-rose-600 rounded-xl border border-rose-100 shadow-2xs transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rose-200 shadow-md">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 font-heading">
                    Thank You for Your Message!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Your inquiry has been received. I will review your note and respond back to your email within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-5 py-2 text-xs font-bold text-rose-700 bg-rose-50 hover:bg-rose-100 rounded-xl border border-rose-200 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="w-4 h-4 text-rose-500" />
                    <h3 className="text-lg font-bold text-slate-900 font-heading">
                      Send a Direct Message
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 text-sm bg-rose-50/40 border border-rose-200/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400/40 focus:border-rose-400 transition-all text-slate-800 placeholder-slate-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sarah@company.com"
                        className="w-full px-3.5 py-2.5 text-sm bg-rose-50/40 border border-rose-200/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400/40 focus:border-rose-400 transition-all text-slate-800 placeholder-slate-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Project Consultation / Engineering Role"
                      className="w-full px-3.5 py-2.5 text-sm bg-rose-50/40 border border-rose-200/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400/40 focus:border-rose-400 transition-all text-slate-800 placeholder-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, timeline, or open opportunity..."
                      className="w-full px-3.5 py-2.5 text-sm bg-rose-50/40 border border-rose-200/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400/40 focus:border-rose-400 transition-all text-slate-800 placeholder-slate-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 text-sm font-bold text-white bg-rose-600 hover:bg-rose-500 disabled:bg-rose-300 rounded-xl shadow-md shadow-rose-500/25 transition-all transform hover:-translate-y-0.5"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
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
