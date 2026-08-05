'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './UI/SectionHeader';
import { PERSONAL_INFO } from '@/data/portfolio';
import { ShieldCheck, Zap, Layers, Compass } from 'lucide-react';

const PRINCIPLES = [
  {
    icon: Zap,
    title: 'Performance & Optimization',
    description: 'Fast page rendering, efficient API integration, and optimized database queries.',
  },
  {
    icon: Layers,
    title: 'Reusable Architecture',
    description: 'Clean component patterns built with React, Next.js, and TypeScript.',
  },
  {
    icon: ShieldCheck,
    title: 'Software Quality',
    description: 'Writing maintainable code and solving real-world production engineering issues.',
  },
  {
    icon: Compass,
    title: 'Intuitive UX',
    description: 'Creating accessible, responsive, and clear user interfaces.',
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-slate-50/60 border-y border-slate-100">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <SectionHeader
          badge="About Me"
          title="Building clean, efficient & scalable software."
          description="A dedicated Software Engineer with a solid foundation in computer applications and modern web technologies."
        />

        {/* Narrative & Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 space-y-4 shadow-2xs"
          >
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              Software Engineer & BCA Graduate
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              I am a Bachelor of Computer Applications (BCA) Graduate with hands-on software development experience. I specialize in building modern web applications using React.js, Next.js, Node.js, and REST APIs.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              I enjoy building scalable web applications, continuously learning modern technologies, solving complex engineering problems, and creating clean, intuitive user experiences.
            </p>
          </motion.div>

          {/* Right Highlights Stats Grid */}
          <div className="md:col-span-5 grid grid-cols-2 gap-4">
            {PERSONAL_INFO.stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-2xs space-y-1"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-slate-500 leading-snug">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 4 Pillars / Core Principles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRINCIPLES.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white border border-slate-200/60 rounded-xl p-5 space-y-3 shadow-2xs hover:border-slate-300 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-semibold text-slate-900 tracking-tight">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
