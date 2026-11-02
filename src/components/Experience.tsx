'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE_DATA } from '@/data/portfolio';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 md:py-36 max-w-7xl mx-auto px-6 sm:px-8 relative">
      <div className="pb-12 border-b border-white/10 space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono-tech text-emerald-400 uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>[ 04 // CAREER & CONTRIBUTIONS ]</span>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase">
          WORK EXPERIENCE
        </h2>
        <p className="text-[#8d94a5] text-sm sm:text-base max-w-xl">
          Engineering roles, production milestones, and distributed architectural responsibilities.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative pl-6 sm:pl-10 border-l border-white/15 space-y-16 pt-12">
        {EXPERIENCE_DATA.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative space-y-6 group"
          >
            {/* Timeline Dot Marker */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-emerald-400 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>

            {/* Role Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <span className="text-white/40">@</span>
                  <span className="text-emerald-400 font-semibold text-xl sm:text-2xl">
                    {exp.company}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono-tech text-[#8d94a5] pt-2">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.duration}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </span>
                  <span>•</span>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white text-[11px]">
                    {exp.type}
                  </span>
                </div>
              </div>

              <span className="font-mono-tech text-xs text-white/30 hidden md:inline">
                INDEX 0{idx + 1}
              </span>
            </div>

            {/* Contributions List */}
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              {exp.description.map((bullet, bulletIdx) => (
                <li
                  key={bulletIdx}
                  className="p-4 rounded-xl bg-[#0e1017] border border-white/10 text-xs sm:text-sm text-[#ced3de] leading-relaxed flex items-start gap-3 hover:border-white/25 transition-all"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {exp.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono-tech text-[#8d94a5] bg-[#12141c] rounded-md border border-white/10 hover:text-white transition-colors"
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
