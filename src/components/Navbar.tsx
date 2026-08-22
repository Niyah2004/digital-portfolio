import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket, Sparkles, User, Briefcase, Award, Send, Sliders, GraduationCap } from 'lucide-react';
import { Profile } from '../types';

interface NavbarProps {
  profile: Profile;
  onOpenDeployGuide: () => void;
  onOpenCustomize: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
        ? 'bg-white/85 backdrop-blur-md shadow-xs border-b border-rose-100/80 py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => scrollTo('about')}
          className="flex items-center gap-2.5 text-left group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 text-white font-bold flex items-center justify-center shadow-md shadow-rose-500/20 group-hover:scale-105 transition-transform">
            {profile.name.charAt(0)}
          </div>
          <div>
            <span className="text-base font-bold text-slate-900 tracking-tight font-heading group-hover:text-rose-600 transition-colors block">
              {profile.name}
            </span>
            <span className="text-[11px] font-medium text-rose-600 block -mt-0.5">
              Portfolio & Demos
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/70 backdrop-blur-sm p-1.5 rounded-full border border-rose-100 shadow-xs">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${isActive
                  ? 'bg-rose-500 text-white shadow-xs'
                  : 'text-slate-600 hover:text-rose-600 hover:bg-rose-50'
                  }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2">
          {/* Customizer trigger */}
          {/* <button
            type="button"
            onClick={onOpenCustomize}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 rounded-lg border border-rose-200 transition-colors"
            title="Edit profile & data"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Customize</span>
          </button>

          {/* Deployment Guide Trigger */}
          <button
            type="button"
            onClick={onOpenDeployGuide}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-500 rounded-lg shadow-sm hover:shadow-rose-500/25 transition-all"
            title="How to deploy this portfolio"
          >
            <Rocket className="w-3.5 h-3.5" />
            <span>Deploy Guide</span>
          </button>
        </div>

        {/* Mobile menu hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            type="button"
            onClick={onOpenDeployGuide}
            className="p-2 text-rose-600 bg-rose-50 rounded-lg border border-rose-200 text-xs font-semibold flex items-center gap-1"
            title="Deploy Guide"
          >
            <Rocket className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-rose-50 hover:text-rose-600 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white/95 backdrop-blur-xl border-b border-rose-100 px-4 py-4 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`w-full text-left px-3 py-2 text-sm font-medium rounded-lg flex items-center gap-2.5 transition-colors ${activeSection === link.id
                ? 'bg-rose-50 text-rose-700 font-semibold'
                : 'text-slate-700 hover:bg-rose-50'
                }`}
            >
              <link.icon className="w-4 h-4 text-rose-500" />
              {link.label}
            </button>
          ))}

          <div className="pt-3 border-t border-rose-100 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCustomize();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-rose-700 bg-rose-50 rounded-lg border border-rose-200"
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
              className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-white bg-rose-600 rounded-lg"
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
