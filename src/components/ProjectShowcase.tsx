import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  PlayCircle, 
  Sparkles, 
  ExternalLink, 
  Github, 
  Layers, 
  CheckCircle2, 
  TrendingUp, 
  Info, 
  SlidersHorizontal 
} from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import { VideoPlayer } from './VideoPlayer';

interface ProjectShowcaseProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  projects,
  onSelectProject,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [filterFeaturedOnly, setFilterFeaturedOnly] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web_apps', label: 'Web Applications' },
    { id: 'ai_systems', label: 'AI & Data Systems' },
    { id: 'design_engineering', label: 'Design Systems' },
    { id: 'mobile_fullstack', label: 'Mobile & Full-Stack' },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
    const matchesFeatured = !filterFeaturedOnly || project.featured;
    return matchesCategory && matchesFeatured;
  });

  return (
    <section id="projects" className="py-20 sm:py-28 relative bg-[#FFF8FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-100 text-rose-700 mb-3">
              <PlayCircle className="w-3.5 h-3.5" />
              Live Interactive Demos
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              Featured Project Showcase
            </h2>
            <p className="text-base text-slate-600 mt-2 max-w-2xl">
              Every project includes a high-definition inline video demo. Click any thumbnail below to watch the live application in action directly on this page.
            </p>
          </div>

          {/* Featured toggle switch */}
          <div className="flex items-center gap-3 bg-white p-2 rounded-2xl border border-rose-100 shadow-xs self-start md:self-auto">
            <button
              onClick={() => setFilterFeaturedOnly(!filterFeaturedOnly)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                filterFeaturedOnly
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-rose-600 bg-rose-50/50'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Featured Only
            </button>
            <span className="text-xs font-semibold text-slate-400 pr-2">
              {filteredProjects.length} {filteredProjects.length === 1 ? 'Project' : 'Projects'}
            </span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-rose-50 hover:text-rose-700 border border-rose-100 shadow-xs'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.article
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                id={`project-${project.id}`}
                className="bg-white rounded-3xl overflow-hidden border border-rose-100/90 shadow-sm hover:shadow-xl hover:shadow-rose-100/60 hover:border-rose-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Inline Video Player Container (falls back to a static preview when no demo video exists) */}
                  <div className="p-4 sm:p-5 pb-0">
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

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 space-y-4">
                    {/* Category & Status */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded-lg border border-rose-100">
                        {project.categoryLabel}
                      </span>
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                          <Sparkles className="w-3 h-3" />
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Title and Tagline */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading group-hover:text-rose-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Quick Highlight Metrics */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="grid grid-cols-3 gap-2 pt-1">
                        {project.metrics.map((m, idx) => (
                          <div
                            key={idx}
                            className="bg-rose-50/50 rounded-xl p-2.5 text-center border border-rose-100/60"
                          >
                            <p className="text-xs font-extrabold text-rose-600 font-heading">
                              {m.value}
                            </p>
                            <p className="text-[10px] font-semibold text-slate-500 truncate">
                              {m.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 text-xs font-medium bg-slate-50 text-slate-700 rounded-md border border-slate-200/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Controls: Details Modal, Live Link, GitHub */}
                <div className="px-6 sm:px-7 py-4 bg-rose-50/40 border-t border-rose-100/80 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-700 hover:text-rose-800 bg-white hover:bg-rose-50 px-3 py-1.5 rounded-lg border border-rose-200 shadow-2xs transition-colors"
                  >
                    <Info className="w-3.5 h-3.5" />
                    Architecture & Features
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-100 rounded-lg border border-rose-100 transition-colors"
                        title="View Source Code"
                        aria-label={`View source code for ${project.title}`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-500 rounded-lg shadow-xs transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
