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
  Gauge
} from 'lucide-react';
import { Skill, SkillCategory } from '../types';

interface SkillsSectionProps {
  skills: Skill[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Competencies', icon: Layers },
    { id: 'frontend', label: 'Frontend & UI', icon: Code2 },
    { id: 'backend', label: 'Backend & APIs', icon: Server },
    { id: 'cloud_devops', label: 'Cloud & Infrastructure', icon: Cloud },
    { id: 'design_ui', label: 'Design & Accessibility', icon: Palette },
    { id: 'ai_tools', label: 'AI & Systems', icon: Cpu },
  ];

  // Helper to render lucide icon dynamically
  const renderIcon = (iconName: string) => {
    const iconClass = "w-5 h-5 text-rose-500";
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
      default: return <Sparkles className={iconClass} />;
    }
  };

  const filteredSkills = skills.filter((skill) => {
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.highlight.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 sm:py-28 relative bg-white border-y border-rose-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-100 text-rose-700 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Technical & Professional Matrix
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              Skills & Expertise
            </h2>
            <p className="text-base text-slate-600 mt-2 max-w-xl">
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
              className="w-full pl-10 pr-4 py-2 text-sm bg-rose-50/50 border border-rose-200/80 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-400/40 focus:border-rose-400 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600"
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
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${isSelected
                  ? 'bg-rose-600 text-white shadow-sm shadow-rose-500/20'
                  : 'bg-rose-50/60 text-slate-700 hover:bg-rose-100 hover:text-rose-700 border border-rose-100'
                  }`}
              >
                <cat.icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-rose-500'}`} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        {filteredSkills.length === 0 ? (
          <div className="text-center py-16 bg-rose-50/30 rounded-2xl border border-dashed border-rose-200">
            <p className="text-base font-semibold text-slate-700">No matching skills found</p>
            <p className="text-xs text-slate-500 mt-1">Try searching for different terms or resetting the category filter.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-1.5 text-xs font-semibold bg-rose-600 text-white rounded-lg"
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
                  className="bg-white rounded-2xl p-6 border border-rose-100/90 shadow-xs hover:shadow-lg hover:shadow-rose-100/60 hover:border-rose-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Header: Icon, Name, Level Badge */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                          {renderIcon(skill.icon)}
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-slate-900 font-heading group-hover:text-rose-600 transition-colors">
                            {skill.name}
                          </h3>
                          <span className="text-xs font-medium text-slate-500">
                            {skill.experienceYears} Years Experience
                          </span>
                        </div>
                      </div>

                      <span className={`px-2.5 py-0.5 text-[11px] font-bold rounded-full border ${skill.levelLabel === 'Expert'
                        ? 'bg-rose-100 text-rose-800 border-rose-200'
                        : 'bg-pink-50 text-pink-700 border-pink-200'
                        }`}>
                        {skill.levelLabel}
                      </span>
                    </div>

                    {/* Proficiency Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center text-xs font-semibold text-slate-600 mb-1">
                        <span>Proficiency</span>
                        <span className="font-mono text-rose-600 font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-rose-100/70 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                          className="h-full bg-gradient-to-r from-rose-400 to-rose-600 rounded-full"
                        />
                      </div>
                    </div>

                    {/* Highlight Description */}
                    <p className="text-xs text-slate-600 mb-4 leading-relaxed line-clamp-2">
                      {skill.highlight}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-rose-100/70">
                    {skill.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-[11px] font-medium bg-rose-50 text-rose-800 rounded-md border border-rose-100/80"
                      >
                        {tag}
                      </span>
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
