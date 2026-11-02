'use client';

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle, Terminal, Layers, Cpu, ShieldCheck } from 'lucide-react';
import { GithubIcon } from '@/components/UI/Icons';
import { Project } from '@/data/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', stiffness: 320, damping: 28 }}
          className="relative w-full max-w-4xl bg-[#0e1017] border border-white/15 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 flex flex-col max-h-[90vh]"
        >
          {/* Top Browser Window Chrome */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#090a0f]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="hidden sm:inline font-mono text-[11px] text-[#8d94a5] pl-3">
                PROJECT://{project.id.toUpperCase()}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#8d94a5] hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Modal Content */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8">
            {/* Visual Preview */}
            <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden border border-white/10 bg-black/50">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 1200px"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <span className="px-3 py-1 rounded bg-black/75 backdrop-blur-md text-[11px] font-mono-tech text-emerald-400 border border-white/10">
                  ● PRODUCTION VERIFIED
                </span>

                <div className="flex items-center gap-2">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-lg bg-white text-black font-semibold text-xs tracking-wider uppercase flex items-center gap-1.5 hover:bg-emerald-400 transition-colors shadow-lg"
                    >
                      <span>LAUNCH APP</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-lg bg-[#1a1c26] text-white border border-white/15 font-semibold text-xs tracking-wider uppercase flex items-center gap-1.5 hover:border-white/40 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>SOURCE</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-2 border-b border-white/10 pb-6">
              <span className="text-xs font-mono-tech text-cyan-400 uppercase tracking-widest">
                {project.subtitle}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
                {project.title}
              </h2>
            </div>

            {/* Deep Overview */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono-tech text-[#8d94a5] uppercase tracking-widest flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>ARCHITECTURAL OVERVIEW</span>
              </h3>
              <p className="text-[#8d94a5] text-sm sm:text-base leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Highlights Checklist */}
            <div className="space-y-4 p-6 rounded-xl bg-[#090a0f] border border-white/10">
              <h3 className="text-xs font-mono-tech text-white uppercase tracking-widest flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>KEY TECHNICAL HIGHLIGHTS & SYSTEM DECISIONS</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {project.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-[#ced3de] leading-relaxed"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono-tech text-[#8d94a5] uppercase tracking-widest flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                <span>TECHNOLOGIES & TOOLING</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-[#161822] border border-white/10 text-xs font-mono-tech text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
