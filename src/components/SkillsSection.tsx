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
    { id: 'all', label: 'All', icon: Layers },
    { id: 'genai_agentic', label: 'Gen AI & Agentic', icon: Sparkles },
    { id: 'risk_compliance', label: 'Risk & Compliance', icon: ShieldCheck },
    { id: 'programming', label: 'Programming & Dev', icon: Code2 },
    { id: 'cloud_testing', label: 'Cloud & Testing', icon: Cloud },
    { id: 'tools_platforms', label: 'Tools & Platforms', icon: Wrench },
  ];

  const renderIcon = (iconName: string) => {
    const iconClass = "w-4 h-4 text-rose-500 dark:text-pink-400";
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
      className="py-20 sm:py-28 relative bg-white dark:bg-[#0B0F17] border-y border-slate-200/50 dark:border-slate-800/60 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-rose-500 dark:text-pink-400 block mb-2">
              02 / Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading tracking-tight">
              Skills & Technical Matrix
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
              {/* Languages, frameworks, compliance standards, and developer tools applied in real-world systems.*/}
            </p>
          </div>

          {/* Minimalist Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills or tags..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 rounded-xl text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-pink-400/30 focus:border-pink-400 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Minimalist Category Tabs */}
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
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${isSelected
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xs'
                    : 'bg-slate-100/70 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-transparent hover:border-slate-200 dark:hover:border-slate-800'
                  }`}
              >
                <cat.icon className={`w-3.5 h-3.5 ${isSelected ? 'text-pink-400 dark:text-rose-500' : 'text-slate-400'}`} />
                {cat.label}
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full font-bold ${isSelected
                      ? 'bg-white/20 dark:bg-slate-200 text-white dark:text-slate-900'
                      : 'bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
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
          <div className="text-center py-16 bg-slate-50/50 dark:bg-slate-900/40 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">No matching skills found</p>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Try another search keyword or reset the category filter.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-1.5 text-xs font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-lg cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            <AnimatePresence>
              {filteredSkills.map((skill) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  key={skill.id}
                  className="bg-white dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl p-5 border border-slate-200/60 dark:border-slate-800 shadow-xs flex flex-col justify-between sleek-hover group"
                >
                  <div>
                    {/* Top: Icon, Name, Level */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-pink-500/10 dark:bg-pink-400/15 border border-pink-400/20 flex items-center justify-center shrink-0">
                          {renderIcon(skill.icon)}
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-slate-900 dark:text-white font-heading">
                            {skill.name}
                          </h3>
                          <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                            {skill.experienceYears}y exp
                          </span>
                        </div>
                      </div>

                      <span className="px-2 py-0.5 text-[10px] font-mono font-semibold rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 shrink-0">
                        {skill.levelLabel}
                      </span>
                    </div>

                    {/* Progress indicator */}
                    <div className="mb-3">
                      <div className="flex justify-between items-center text-[11px] font-medium text-slate-500 mb-1">
                        <span>Proficiency</span>
                        <span className="font-mono text-slate-700 dark:text-slate-300 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, ease: 'easeOut' }}
                          className="h-full bg-gradient-to-r from-rose-400 to-pink-400 dark:from-rose-500 dark:to-pink-400 rounded-full"
                        />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed line-clamp-2">
                      {skill.highlight}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                    {skill.tags.map((tag, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSearchQuery(tag)}
                        className="px-2 py-0.5 text-[10px] font-medium bg-slate-50 dark:bg-slate-800/90 hover:bg-pink-500/10 text-slate-600 dark:text-slate-400 hover:text-rose-600 dark:hover:text-pink-300 rounded transition-colors cursor-pointer"
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
