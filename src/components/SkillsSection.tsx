import React, { useMemo, useState } from 'react';
import { Skill, SkillCategory } from '../types';
import { techLogos } from '../data/logos';
import { SpotlightCard } from './SpotlightCard';

interface SkillsSectionProps {
  skills: Skill[];
}

const categories: { id: string; label: string; match: (c: SkillCategory) => boolean }[] = [
  {
    id: 'genai_agentic',
    label: 'Gen AI & Agentic',
    match: (c) => c === 'genai_agentic' || c === 'ai_tools',
  },
  {
    id: 'programming',
    label: 'Programming & Dev',
    match: (c) => c === 'programming' || c === 'frontend' || c === 'backend',
  },
  {
    id: 'risk_compliance',
    label: 'Risk & Compliance',
    match: (c) => c === 'risk_compliance',
  },
  {
    id: 'cloud_testing',
    label: 'Cloud & Testing',
    match: (c) => c === 'cloud_testing' || c === 'cloud_devops',
  },
  {
    id: 'tools_platforms',
    label: 'Tools & Platforms',
    match: (c) => c === 'tools_platforms' || c === 'design_ui',
  },
];

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0].id);

  // Core languages & tools that have an official brand mark — the visual signature of this section.
  const coreTools = useMemo(() => {
    const seen = new Set<string>();
    const list: { name: string; logo: string }[] = [];
    for (const skill of skills) {
      for (const tag of skill.tags) {
        if (techLogos[tag] && !seen.has(tag)) {
          seen.add(tag);
          list.push({ name: tag, logo: techLogos[tag] });
        }
      }
    }
    return list;
  }, [skills]);

  const activeSkills = skills.filter((s) =>
    categories.find((c) => c.id === activeCategory)?.match(s.category)
  );

  return (
    <section
      id="skills"
      className="py-20 sm:py-28 relative bg-white dark:bg-[#0B0F17] border-y border-slate-200/50 dark:border-slate-800/60 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-label font-semibold uppercase tracking-widest text-rose-500 dark:text-pink-400 block mb-2">
            Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white font-heading tracking-tight">
            Skills & Capabilities
          </h2>
        </div>

        {/* Core Languages & Tools — real brand marks, monochrome by default */}
        <div className="mb-14">
          <h3 className="text-xs font-label font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
            Core Languages & Tools
          </h3>
          <div className="flex flex-wrap gap-x-7 gap-y-5">
            {coreTools.map((tool) => (
              <div
                key={tool.name}
                className="group flex items-center gap-2 cursor-default"
                title={tool.name}
              >
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="w-5 h-5 object-contain brand-mark transition-transform group-hover:scale-110"
                />
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 mb-8 no-scrollbar">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xs'
                    : 'bg-slate-100/70 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-transparent hover:border-slate-200 dark:hover:border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Grid with Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activeSkills.map((skill) => (
            <SpotlightCard
              key={skill.id}
              className="p-5 rounded-2xl bg-slate-50/60 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/80 sleek-hover flex gap-3.5 items-start"
            >
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-rose-400 dark:bg-pink-400 shrink-0 relative z-10" />
              <div className="relative z-10">
                <p className="text-sm font-bold text-slate-900 dark:text-white font-heading">
                  {skill.name}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-1">
                  {skill.highlight}
                </p>
                <p className="text-[11px] font-label text-slate-400 dark:text-slate-500 mt-2">
                  {skill.tags.join(' · ')}
                </p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};
