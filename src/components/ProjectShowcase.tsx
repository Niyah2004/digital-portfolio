import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  ExternalLink, 
  Github, 
  Info,
  Layers
} from 'lucide-react';
import { Project } from '../types';
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
    { id: 'ai_systems', label: 'AI & Machine Learning' },
    { id: 'mobile_fullstack', label: 'Mobile Applications' },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
    const matchesFeatured = !filterFeaturedOnly || project.featured;
    return matchesCategory && matchesFeatured;
  });

  return (
    <section 
      id="projects" 
      className="py-20 sm:py-28 relative bg-[#FFF9FA]/40 dark:bg-[#0B0F17] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-rose-500 dark:text-pink-400 block mb-2">
              03 / Selected Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading tracking-tight">
              Featured Engineering Projects
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
              Production architectures with high-definition interactive video walkthroughs and live deployments.
            </p>
          </div>

          {/* Minimalist Filter Controls */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => setFilterFeaturedOnly(!filterFeaturedOnly)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filterFeaturedOnly
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-200/50 dark:border-slate-800'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-pink-400 dark:text-rose-500" />
              Featured
            </button>
            <span className="text-xs font-mono text-slate-400 dark:text-slate-500 pl-1">
              ({filteredProjects.length})
            </span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-10 no-scrollbar">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xs'
                    : 'bg-white/80 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-200/60 dark:border-slate-800'
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.article
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                id={`project-${project.id}`}
                className="bg-white dark:bg-slate-900/80 backdrop-blur-md rounded-2xl overflow-hidden border border-slate-200/60 dark:border-slate-800 shadow-xs flex flex-col justify-between sleek-hover group"
              >
                <div>
                  {/* Inline Video Player Container */}
                  <div className="p-4 pb-0">
                    {project.videoUrl ? (
                      <VideoPlayer
                        videoUrl={project.videoUrl}
                        posterUrl={project.fallbackPoster}
                        title={project.title}
                        caption={project.videoCaption}
                      />
                    ) : (
                      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-900 border border-slate-200/50 dark:border-slate-800">
                        <img
                          src={project.fallbackPoster}
                          alt={`${project.title} preview graphic`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-4">
                    {/* Category & Status */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-rose-500 dark:text-pink-400 bg-pink-500/10 dark:bg-pink-400/15 px-2.5 py-0.5 rounded-md">
                        {project.categoryLabel}
                      </span>
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold font-mono text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 px-2 py-0.5 rounded border border-amber-200 dark:border-amber-900/50">
                          <Sparkles className="w-3 h-3" />
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Title and Tagline */}
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading group-hover:text-rose-500 dark:group-hover:text-pink-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-[11px] font-medium bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded border border-slate-200/50 dark:border-slate-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Minimalist Card Footer */}
                <div className="px-6 py-3.5 bg-slate-50/70 dark:bg-slate-950/60 border-t border-slate-200/50 dark:border-slate-800 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-rose-500 dark:hover:text-pink-300 transition-colors cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5 text-rose-500 dark:text-pink-400" />
                    Deep Dive
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-colors"
                        title="Source Code"
                        aria-label={`Source code for ${project.title}`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 rounded-lg shadow-2xs transition-all"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3 h-3" />
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
