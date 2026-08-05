'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './UI/SectionHeader';
import { SKILLS_DATA, SkillCategory } from '@/data/portfolio';
import { Code2, Database, Wrench, BookOpen, Sparkles, CheckCircle2, Flame } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...SKILLS_DATA.map((c) => c.category)];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend':
        return Code2;
      case 'Backend':
        return Database;
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
    <section id="skills" className="py-20 md:py-28 max-w-5xl mx-auto px-6 sm:px-8">
      <SectionHeader
        badge="Technical Skills"
        title="Skills & Technologies"
        description="A comprehensive overview of frontend libraries, backend frameworks, database systems, core CS concepts, and tools I utilize."
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          const isLearning = cat === 'Currently Learning';
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                isActive
                  ? 'bg-slate-900 text-white shadow-2xs'
                  : isLearning
                  ? 'bg-amber-50 text-amber-800 border border-amber-200/80 hover:bg-amber-100/80'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
              }`}
            >
              {isLearning && <Flame className="w-3.5 h-3.5 text-amber-500" />}
              <span>{cat}</span>
            </button>
          );
        })}
      </div>

      {/* Categories Grid */}
      <div className="space-y-8">
        {filteredData.map((catGroup: SkillCategory, groupIdx: number) => {
          const Icon = getCategoryIcon(catGroup.category);
          const isCurrentlyLearning = catGroup.category === 'Currently Learning';

          return (
            <motion.div
              key={catGroup.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: groupIdx * 0.1 }}
              className={`border rounded-2xl p-6 sm:p-8 shadow-2xs transition-all ${
                isCurrentlyLearning
                  ? 'bg-slate-900 text-white border-slate-800'
                  : 'bg-white border-slate-200/80'
              }`}
            >
              {/* Category Header */}
              <div
                className={`flex items-center justify-between pb-6 mb-6 border-b ${
                  isCurrentlyLearning ? 'border-slate-800' : 'border-slate-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isCurrentlyLearning
                        ? 'bg-slate-800 text-amber-400'
                        : 'bg-slate-100 text-slate-900'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3
                      className={`text-xl font-bold tracking-tight ${
                        isCurrentlyLearning ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {catGroup.category}
                    </h3>
                    <p
                      className={`text-xs font-medium ${
                        isCurrentlyLearning ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      {catGroup.skills.length} Technologies
                    </p>
                  </div>
                </div>

                {isCurrentlyLearning && (
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Active Expansion</span>
                  </span>
                )}
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {catGroup.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`p-4 rounded-xl border transition-all group ${
                      isCurrentlyLearning
                        ? 'border-slate-800 bg-slate-800/50 hover:bg-slate-800 hover:border-slate-700'
                        : 'border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-2xs'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <CheckCircle2
                          className={`w-4 h-4 transition-colors ${
                            isCurrentlyLearning
                              ? 'text-amber-400'
                              : 'text-slate-400 group-hover:text-slate-900'
                          }`}
                        />
                        <span
                          className={`text-sm font-semibold ${
                            isCurrentlyLearning ? 'text-white' : 'text-slate-900'
                          }`}
                        >
                          {skill.name}
                        </span>
                      </div>
                      <span
                        className={`px-2 py-0.5 text-[10px] font-mono font-medium uppercase tracking-wider rounded ${
                          isCurrentlyLearning
                            ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                            : 'bg-slate-200/70 text-slate-700'
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                    <p
                      className={`text-xs pl-6 leading-relaxed ${
                        isCurrentlyLearning ? 'text-slate-300' : 'text-slate-500'
                      }`}
                    >
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
