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
    { id: 'experience', label: 'Experience', icon: Sparkles },
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
          ? 'bg-white/80 dark:bg-[#0B0F17]/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/60 py-3 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => scrollTo('about')}
          className="flex items-center gap-2.5 text-left group focus:outline-none cursor-pointer"
        >
          <div className="w-8 h-8 rounded-xl bg-pink-500/10 dark:bg-pink-400/15 border border-pink-400/20 text-rose-500 dark:text-pink-300 font-bold text-sm flex items-center justify-center transition-transform group-hover:scale-105">
            {profile.name.charAt(0)}
          </div>
          <div>
            <span className="text-sm font-bold text-slate-900 dark:text-slate-100 tracking-tight font-heading group-hover:text-rose-500 dark:group-hover:text-pink-300 transition-colors block">
              {profile.name}
            </span>
            <span className="text-[10px] font-medium text-slate-400 dark:text-slate-500 block -mt-0.5 font-mono">
              Portfolio
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/70 dark:bg-slate-900/70 backdrop-blur-md px-1.5 py-1 rounded-full border border-slate-200/50 dark:border-slate-800/60 shadow-xs">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-3.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-xs'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Actions: Theme Switcher & Deploy Button */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 bg-slate-100/60 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/50 dark:border-slate-800 transition-all cursor-pointer"
            aria-label={theme === 'dark' ? 'Switch to Light mode' : 'Switch to Dark mode'}
            title={theme === 'dark' ? 'Switch to Light mode' : 'Switch to Dark mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-300 transition-transform duration-300 hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-slate-600 transition-transform duration-300 hover:-rotate-12" />
            )}
          </button>

          <button
            type="button"
            onClick={onOpenDeployGuide}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-850 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs hover:border-pink-300 dark:hover:border-pink-400/40 transition-all cursor-pointer"
            title="Deploy Instructions"
          >
            <Rocket className="w-3.5 h-3.5 text-rose-500 dark:text-pink-400" />
            <span>Deploy</span>
          </button>
        </div>

        {/* Mobile menu hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 bg-slate-100/70 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-300" />
            ) : (
              <Moon className="w-4 h-4 text-slate-600" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white/95 dark:bg-[#0B0F17]/95 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-800 px-4 py-4 space-y-1.5 shadow-lg">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`w-full text-left px-3 py-2 text-sm font-medium rounded-xl flex items-center gap-2.5 transition-colors ${
                activeSection === link.id
                  ? 'bg-pink-500/10 dark:bg-pink-400/10 text-rose-600 dark:text-pink-300 font-semibold'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100/60 dark:hover:bg-slate-850'
              }`}
            >
              <link.icon className="w-4 h-4 text-rose-500 dark:text-pink-400" />
              {link.label}
            </button>
          ))}

          <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDeployGuide();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-850 rounded-xl"
            >
              <Rocket className="w-4 h-4 text-rose-500 dark:text-pink-400" />
              Deployment Instructions
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
