import React, { useState, useEffect } from 'react';
import {
  initialProfile,
  educationData,
  skillsData,
  projectsData,
  workHistoryData
} from './data/portfolioData';
import { Project } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectShowcase } from './components/ProjectShowcase';
import { WorkHistorySection } from './components/WorkHistorySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ResumeModal } from './components/ResumeModal';
import { CursorSpotlight } from './components/CursorSpotlight';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('portfolio_theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const profile = initialProfile;

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8FA] dark:bg-[#0B0F17] text-slate-800 dark:text-slate-100 flex flex-col antialiased selection:bg-pink-200 selection:text-pink-900 dark:selection:bg-pink-900/60 dark:selection:text-pink-100 transition-colors duration-300 relative">
      {/* Global Interactive Cursor Spotlight */}
      <CursorSpotlight />

      <Navbar
        profile={profile}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main className="flex-1">
        <HeroSection
          profile={profile}
          onExploreProjects={() => scrollToSection('projects')}
          onContactClick={() => scrollToSection('contact')}
          onDownloadResume={() => setIsResumeOpen(true)}
        />

        <EducationSection education={educationData} />

        <SkillsSection skills={skillsData} />

        <ProjectShowcase
          projects={projectsData}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        <WorkHistorySection experiences={workHistoryData} />

        <ContactSection profile={profile} />
      </main>

      <Footer profile={profile} theme={theme} onToggleTheme={toggleTheme} />

      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        profile={profile}
        education={educationData}
        skills={skillsData}
        experiences={workHistoryData}
        projects={projectsData}
      />
    </div>
  );
}
