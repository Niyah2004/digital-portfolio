import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Info } from 'lucide-react';
import { Project } from '../types';
import { VideoPlayer } from './VideoPlayer';
import { techLogos } from '../data/logos';
import { SpotlightCard } from './SpotlightCard';

interface ProjectShowcaseProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'web_apps', label: 'Web Applications' },
  { id: 'ai_systems', label: 'AI & Machine Learning' },
  { id: 'mobile_fullstack', label: 'Mobile Applications' },
];

const TechChip: React.FC<{ tech: string }> = ({ tech }) => {
  const logo = techLogos[tech];
  return (
    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[11px] font-medium bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded border border-slate-200/50 dark:border-slate-700/60">
      {logo && <img src={logo} alt="" className="w-3 h-3 object-contain" />}
      {tech}
    </span>
  );
};

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  projects,
  onSelectProject,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'all' || project.category === activeCategory
  );

  return (
    <section
      id="projects"
      className="py-20 sm:py-28 relative bg-[#FFF9FA]/40 dark:bg-[#0B0F17] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-label font-semibold uppercase tracking-widest text-rose-500 dark:text-pink-400 block mb-2">
            Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white font-heading tracking-tight">
            Featured Projects
          </h2>
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
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                id={`project-${project.id}`}
                className="h-full"
              >
                <SpotlightCard className="bg-white dark:bg-slate-900/80 backdrop-blur-md rounded-2xl overflow-hidden border border-slate-200/60 dark:border-slate-800 shadow-xs flex flex-col justify-between h-full sleek-hover group">
                  <div>
                    {/* Inline Video Player Container */}
                    <div className="p-4 pb-0 relative z-10">
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
                    <div className="p-6 space-y-4 relative z-10">
                      <span className="text-[11px] font-label font-semibold uppercase tracking-wider text-rose-500 dark:text-pink-400">
                        {project.categoryLabel}
                      </span>

                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading group-hover:text-rose-500 dark:group-hover:text-pink-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                          {project.tagline}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.techStack.map((tech, idx) => (
                          <TechChip key={idx} tech={tech} />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 py-3.5 bg-slate-50/70 dark:bg-slate-950/60 border-t border-slate-200/50 dark:border-slate-800 flex items-center justify-between gap-3 relative z-10">
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-rose-500 dark:hover:text-pink-300 transition-colors cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5 text-rose-500 dark:text-pink-400" />
                      Details
                    </button>

                    <div className="flex items-center gap-2">
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
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
