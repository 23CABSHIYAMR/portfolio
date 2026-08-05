'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './UI/SectionHeader';
import { EXPERIENCE_DATA } from '@/data/portfolio';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 max-w-5xl mx-auto px-6 sm:px-8">
      <SectionHeader
        badge="Career Progression"
        title="Work Experience"
        description="A timeline of my professional roles, engineering contributions, and key project milestones."
      />

      <div className="relative pl-6 sm:pl-8 border-l border-slate-200 space-y-12 my-6">
        {EXPERIENCE_DATA.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative space-y-4"
          >
            {/* Timeline Dot Icon */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-slate-900 flex items-center justify-center shadow-2xs">
              <div className="w-2 h-2 rounded-full bg-slate-900" />
            </div>

            {/* Role Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                  <span>{exp.role}</span>
                  <span className="text-slate-400 font-normal">@</span>
                  <span className="text-slate-800 font-semibold">{exp.company}</span>
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-medium pt-1">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.duration}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </span>
                  <span>•</span>
                  <span className="px-2 py-0.5 rounded bg-slate-100 font-mono text-[10px] text-slate-700">
                    {exp.type}
                  </span>
                </div>
              </div>
            </div>

            {/* Bullet List */}
            <ul className="space-y-2 pt-2">
              {exp.description.map((bullet, bulletIdx) => (
                <li
                  key={bulletIdx}
                  className="text-xs sm:text-sm text-slate-600 leading-relaxed flex items-start gap-2"
                >
                  <span className="text-slate-400 font-bold mt-0.5">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {exp.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 text-[11px] font-medium text-slate-600 bg-slate-100 rounded-md border border-slate-200/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
