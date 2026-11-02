'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Wrench, BookOpen, Sparkles, Flame } from 'lucide-react';
import { SKILLS_DATA, SkillCategory } from '@/data/portfolio';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...SKILLS_DATA.map((c) => c.category)];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend':
        return Code2;
      case 'Backend':
      case 'Database':
        return Database;
      case 'Tools':
        return Wrench;
      case 'Concepts':
        return BookOpen;
      case 'Currently Learning':
        return Sparkles;
      default:
        return Wrench;
    }
  };

  const filteredData =
    selectedCategory === 'All'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="py-24 md:py-36 max-w-7xl mx-auto px-6 sm:px-8 relative">
      <div className="pb-12 border-b border-white/10 space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono-tech text-cyan-400 uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span>[ 05 // TECHNICAL CAPABILITIES ]</span>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase">
          SKILLS & TECHNOLOGIES
        </h2>
        <p className="text-[#8d94a5] text-sm sm:text-base max-w-xl">
          Core competencies, backend frameworks, database architectures, and development toolchains.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 pt-8 pb-10">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          const isLearning = cat === 'Currently Learning';

          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono-tech font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 ${
                isActive
                  ? 'bg-white text-black shadow-lg'
                  : isLearning
                  ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20 hover:border-amber-500/40'
                  : 'bg-[#12141c] text-[#8d94a5] border border-white/10 hover:text-white hover:border-white/20'
              }`}
            >
              {isLearning && <Flame className="w-3.5 h-3.5 text-amber-400" />}
              <span>{cat}</span>
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <div className="space-y-12">
        {filteredData.map((catGroup: SkillCategory, groupIdx: number) => {
          const Icon = getCategoryIcon(catGroup.category);
          const isCurrentlyLearning = catGroup.category === 'Currently Learning';

          return (
            <motion.div
              key={catGroup.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: groupIdx * 0.08 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-mono-tech font-bold uppercase tracking-widest text-white">
                  {catGroup.category}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {catGroup.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`p-5 rounded-2xl border transition-all duration-300 ${
                      isCurrentlyLearning
                        ? 'bg-[#14120e] border-amber-500/20 hover:border-amber-500/40'
                        : 'bg-[#0e1017] border-white/10 hover:border-white/25 hover:shadow-xl'
                    }`}
                  >
                    <div className="flex items-center justify-between pb-2">
                      <h4 className="text-base font-bold text-white tracking-tight">
                        {skill.name}
                      </h4>
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-mono-tech uppercase tracking-wider font-semibold ${
                          skill.level === 'Proficient'
                            ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                            : skill.level === 'Learning'
                            ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                            : 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs text-[#8d94a5] leading-relaxed pt-1">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
