import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code2,
  Server,
  Cloud,
  Palette,
  Cpu,
  Sparkles,
  Search,
  CheckCircle2,
  Layers,
  FileCode2,
  Database,
  Network,
  Figma,
  Eye,
  Gauge,
  ShieldCheck,
  Lock,
  Workflow,
  Wrench,
  BarChart3
} from 'lucide-react';
import { Skill } from '../types';

interface SkillsSectionProps {
  skills: Skill[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Competencies', icon: Layers },
    { id: 'genai_agentic', label: 'Gen AI & Agentic AI', icon: Sparkles },
    { id: 'risk_compliance', label: 'Risk & Compliance', icon: ShieldCheck },
    { id: 'programming', label: 'Programming & Dev', icon: Code2 },
    { id: 'cloud_testing', label: 'Cloud, DevOps & Testing', icon: Cloud },
    { id: 'tools_platforms', label: 'Tools & Platforms', icon: Wrench },
  ];

  // Helper to render lucide icon dynamically
  const renderIcon = (iconName: string) => {
    const iconClass = "w-5 h-5 text-rose-400 dark:text-rose-400";
    switch (iconName) {
      case 'Code2': return <Code2 className={iconClass} />;
      case 'FileCode2': return <FileCode2 className={iconClass} />;
      case 'Palette': return <Palette className={iconClass} />;
      case 'Sparkles': return <Sparkles className={iconClass} />;
      case 'Server': return <Server className={iconClass} />;
      case 'Database': return <Database className={iconClass} />;
      case 'Cloud': return <Cloud className={iconClass} />;
      case 'Network': return <Network className={iconClass} />;
      case 'Figma': return <Figma className={iconClass} />;
      case 'Eye': return <Eye className={iconClass} />;
      case 'Cpu': return <Cpu className={iconClass} />;
      case 'Gauge': return <Gauge className={iconClass} />;
      case 'ShieldCheck': return <ShieldCheck className={iconClass} />;
      case 'Lock': return <Lock className={iconClass} />;
      case 'Workflow': return <Workflow className={iconClass} />;
      case 'Wrench': return <Wrench className={iconClass} />;
      case 'BarChart3': return <BarChart3 className={iconClass} />;
      case 'CheckCircle2': return <CheckCircle2 className={iconClass} />;
      default: return <Sparkles className={iconClass} />;
    }
  };

  const isSkillInCategory = (skill: Skill, categoryId: string) => {
    if (categoryId === 'all') return true;
    if (categoryId === 'genai_agentic') return skill.category === 'genai_agentic' || skill.category === 'ai_tools';
    if (categoryId === 'risk_compliance') return skill.category === 'risk_compliance';
    if (categoryId === 'programming') return skill.category === 'programming' || skill.category === 'frontend' || skill.category === 'backend';
    if (categoryId === 'cloud_testing') return skill.category === 'cloud_testing' || skill.category === 'cloud_devops';
    if (categoryId === 'tools_platforms') return skill.category === 'tools_platforms' || skill.category === 'design_ui';
    return skill.category === categoryId;
  };

  const filteredSkills = skills.filter((skill) => {
    const matchesCategory = isSkillInCategory(skill, selectedCategory);
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.highlight.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section 
      id="skills" 
      className="py-20 sm:py-28 relative bg-white/70 dark:bg-[#0B0F17] border-y border-pink-100/70 dark:border-slate-800/80 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-pink-100/80 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border border-pink-200/60 dark:border-rose-900/50 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Technical & Professional Matrix
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 font-heading tracking-tight">
              Skills & Expertise
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
              A breakdown of the technologies I've used throughout my experience, including through internships, coursework, and personal projects.
            </p>
          </div>

          {/* Search input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-rose-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by technology..."
              className="w-full pl-10 pr-4 py-2 text-sm bg-pink-50/50 dark:bg-slate-900/80 border border-pink-100 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-rose-400/40 focus:border-rose-400 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const count = cat.id === 'all'
              ? skills.length
              : skills.filter((s) => isSkillInCategory(s, cat.id)).length;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-rose-400 to-pink-400 dark:from-rose-500 dark:to-pink-500 text-white shadow-sm shadow-pink-300/30 dark:shadow-rose-950/40'
                    : 'bg-pink-50/60 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:bg-pink-100/70 dark:hover:bg-slate-800 border border-pink-100 dark:border-slate-800'
                }`}
              >
                <cat.icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-rose-400 dark:text-rose-400'}`} />
                {cat.label}
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono font-bold ${
                    isSelected 
                      ? 'bg-white/25 text-white' 
                      : 'bg-pink-100 dark:bg-slate-800 text-rose-700 dark:text-rose-300'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        {filteredSkills.length === 0 ? (
          <div className="text-center py-16 bg-pink-50/30 dark:bg-slate-900/40 rounded-2xl border border-dashed border-pink-200 dark:border-slate-800">
            <p className="text-base font-semibold text-slate-700 dark:text-slate-300">No matching skills found</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Try searching for different terms or resetting the category filter.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-1.5 text-xs font-semibold bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-lg cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredSkills.map((skill) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  key={skill.id}
                  className="bg-white/90 dark:bg-slate-900/85 backdrop-blur-sm rounded-2xl p-6 border border-pink-100/90 dark:border-slate-800 shadow-xs hover:shadow-lg hover:shadow-pink-100/60 dark:hover:shadow-black/50 hover:border-pink-300 dark:hover:border-rose-500/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Header: Icon, Name, Level Badge */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-pink-50/80 dark:bg-slate-800 border border-pink-100 dark:border-slate-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                          {renderIcon(skill.icon)}
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 font-heading group-hover:text-rose-500 dark:group-hover:text-rose-400 transition-colors">
                            {skill.name}
                          </h3>
                          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                            {skill.experienceYears} Years Experience
                          </span>
                        </div>
                      </div>

                      <span
                        className={`px-2.5 py-0.5 text-[11px] font-bold rounded-full border ${
                          skill.levelLabel === 'Expert'
                            ? 'bg-pink-100/80 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border-pink-200 dark:border-rose-900/40'
                            : 'bg-pink-50 dark:bg-slate-800 text-rose-600 dark:text-rose-300 border-pink-100 dark:border-slate-700'
                        }`}
                      >
                        {skill.levelLabel}
                      </span>
                    </div>

                    {/* Proficiency Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
                        <span>Proficiency</span>
                        <span className="font-mono text-rose-500 dark:text-rose-400 font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-pink-100/70 dark:bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                          className="h-full bg-gradient-to-r from-rose-400 to-pink-400 dark:from-rose-500 dark:to-pink-400 rounded-full"
                        />
                      </div>
                    </div>

                    {/* Highlight Description */}
                    <p className="text-xs text-slate-600 dark:text-slate-300 mb-4 leading-relaxed line-clamp-2">
                      {skill.highlight}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-pink-100/70 dark:border-slate-800">
                    {skill.tags.map((tag, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSearchQuery(tag)}
                        className="px-2 py-0.5 text-[11px] font-medium bg-pink-50/70 dark:bg-slate-800 hover:bg-pink-100 dark:hover:bg-slate-700 text-rose-800 dark:text-rose-300 rounded-md border border-pink-100/80 dark:border-slate-700 transition-colors cursor-pointer"
                        title={`Filter by ${tag}`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
};
