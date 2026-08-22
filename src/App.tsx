import React, { useState, useEffect } from 'react';
import { 
  initialProfile, 
  educationData,
  skillsData, 
  projectsData, 
  workHistoryData 
} from './data/portfolioData';
import { Profile, Project } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectShowcase } from './components/ProjectShowcase';
import { WorkHistorySection } from './components/WorkHistorySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { DeploymentGuideModal } from './components/DeploymentGuideModal';
import { CustomizeProfileModal } from './components/CustomizeProfileModal';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [profile, setProfile] = useState<Profile>(() => {
    const saved = localStorage.getItem('portfolio_profile');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse saved profile:", e);
      }
    }
    return initialProfile;
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDeployGuideOpen, setIsDeployGuideOpen] = useState(false);
  const [isCustomizeOpen, setIsCustomizeOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleSaveProfile = (updated: Profile) => {
    setProfile(updated);
    localStorage.setItem('portfolio_profile', JSON.stringify(updated));
  };

  const handleResetProfile = () => {
    setProfile(initialProfile);
    localStorage.removeItem('portfolio_profile');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8FA] text-slate-800 flex flex-col antialiased selection:bg-rose-200 selection:text-rose-900">
      {/* Top Fixed Navigation */}
      <Navbar
        profile={profile}
        onOpenDeployGuide={() => setIsDeployGuideOpen(true)}
        onOpenCustomize={() => setIsCustomizeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Name & Bio Hero Section */}
        <HeroSection
          profile={profile}
          onExploreProjects={() => scrollToSection('projects')}
          onContactClick={() => scrollToSection('contact')}
          onDownloadResume={() => setIsResumeOpen(true)}
        />

        {/* 2. Education & Certifications Section */}
        <EducationSection education={educationData} />

        {/* 3. Visual Skills Matrix */}
        <SkillsSection skills={skillsData} />

        {/* 4. Project Showcase with Inline Video Demos */}
        <ProjectShowcase
          projects={projectsData}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        {/* 5. Work History Timeline */}
        <WorkHistorySection experiences={workHistoryData} />

        {/* 6. Contact Section */}
        <ContactSection profile={profile} />
      </main>

      {/* Footer */}
      <Footer
        profile={profile}
        onOpenDeployGuide={() => setIsDeployGuideOpen(true)}
      />

      {/* Modals */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <DeploymentGuideModal
        isOpen={isDeployGuideOpen}
        onClose={() => setIsDeployGuideOpen(false)}
      />

      <CustomizeProfileModal
        profile={profile}
        isOpen={isCustomizeOpen}
        onClose={() => setIsCustomizeOpen(false)}
        onSave={handleSaveProfile}
        onReset={handleResetProfile}
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
