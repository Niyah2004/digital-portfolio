import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Rocket, 
  Sparkles, 
  User, 
  Briefcase, 
  Award, 
  Send, 
  Sliders, 
  GraduationCap,
  Sun,
  Moon
} from 'lucide-react';
import { Profile } from '../types';

interface NavbarProps {
  profile: Profile;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onOpenDeployGuide: () => void;
  onOpenCustomize: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  theme,
  onToggleTheme,
  onOpenDeployGuide,
  onOpenCustomize,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'education', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Award },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'experience', label: 'Work History', icon: Sparkles },
    { id: 'contact', label: 'Contact', icon: Send },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-slate-900/85 backdrop-blur-md shadow-xs border-b border-pink-100/70 dark:border-slate-800/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => scrollTo('about')}
          className="flex items-center gap-2.5 text-left group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-400 via-pink-400 to-rose-300 dark:from-rose-500 dark:via-pink-500 dark:to-rose-400 text-white font-bold flex items-center justify-center shadow-md shadow-pink-300/30 dark:shadow-rose-950/40 group-hover:scale-105 transition-transform">
            {profile.name.charAt(0)}
          </div>
          <div>
            <span className="text-base font-bold text-slate-900 dark:text-slate-100 tracking-tight font-heading group-hover:text-rose-500 dark:group-hover:text-rose-400 transition-colors block">
              {profile.name}
            </span>
            <span className="text-[11px] font-medium text-rose-500 dark:text-rose-400 block -mt-0.5">
              Portfolio & Demos
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/75 dark:bg-slate-900/80 backdrop-blur-sm p-1.5 rounded-full border border-pink-100/80 dark:border-slate-800 shadow-xs">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-rose-400 to-pink-400 dark:from-rose-500 dark:to-pink-500 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-300 hover:bg-pink-50/70 dark:hover:bg-slate-800/80'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons & Theme Switcher */}
        <div className="hidden sm:flex items-center gap-2">
          {/* Dark / Light Mode Toggle Button */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 bg-white/80 dark:bg-slate-800/90 hover:bg-pink-50 dark:hover:bg-slate-700/80 border border-pink-100/80 dark:border-slate-700/80 shadow-2xs hover:text-rose-500 dark:hover:text-rose-300 transition-all cursor-pointer"
            aria-label={theme === 'dark' ? 'Switch to Light mode' : 'Switch to Dark mode'}
            title={theme === 'dark' ? 'Switch to Light mode' : 'Switch to Dark mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-300 transition-transform duration-300 hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-rose-500 transition-transform duration-300 hover:-rotate-12" />
            )}
          </button>

          {/* Deployment Guide Trigger */}
          <button
            type="button"
            onClick={onOpenDeployGuide}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-rose-400 to-pink-400 hover:from-rose-500 hover:to-pink-500 dark:from-rose-500 dark:to-pink-500 dark:hover:from-rose-400 dark:hover:to-pink-400 rounded-xl shadow-sm shadow-pink-300/30 dark:shadow-rose-950/40 hover:shadow-pink-300/40 transition-all cursor-pointer"
            title="How to deploy this portfolio"
          >
            <Rocket className="w-3.5 h-3.5" />
            <span>Deploy Guide</span>
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex sm:hidden items-center gap-2">
          {/* Mobile Theme Toggle */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 bg-white/80 dark:bg-slate-800 border border-pink-100 dark:border-slate-700"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-300" />
            ) : (
              <Moon className="w-4 h-4 text-rose-500" />
            )}
          </button>

          <button
            type="button"
            onClick={onOpenDeployGuide}
            className="p-2 text-rose-600 dark:text-rose-400 bg-pink-50 dark:bg-slate-800 rounded-lg border border-pink-200 dark:border-slate-700 text-xs font-semibold flex items-center gap-1"
            title="Deploy Guide"
          >
            <Rocket className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-pink-50 dark:hover:bg-slate-800 hover:text-rose-500 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-pink-100 dark:border-slate-800 px-4 py-4 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`w-full text-left px-3 py-2 text-sm font-medium rounded-xl flex items-center gap-2.5 transition-colors ${
                activeSection === link.id
                  ? 'bg-pink-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-300 font-semibold'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-pink-50/60 dark:hover:bg-slate-800'
              }`}
            >
              <link.icon className="w-4 h-4 text-rose-400 dark:text-rose-400" />
              {link.label}
            </button>
          ))}

          <div className="pt-3 border-t border-pink-100 dark:border-slate-800 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCustomize();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-rose-700 dark:text-rose-300 bg-pink-50 dark:bg-slate-800 rounded-xl border border-pink-200 dark:border-slate-700"
            >
              <Sliders className="w-4 h-4" />
              Customize Portfolio Data
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDeployGuide();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-white bg-gradient-to-r from-rose-400 to-pink-400 dark:from-rose-500 dark:to-pink-500 rounded-xl"
            >
              <Rocket className="w-4 h-4" />
              Static Hosting & Deploy Instructions
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
