'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, LayoutGrid, List, Sparkles, Terminal } from 'lucide-react';
import { GithubIcon } from '@/components/UI/Icons';
import { PROJECTS_DATA, Project } from '@/data/portfolio';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [viewMode, setViewMode] = useState<'slider' | 'archive'>('slider');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // For archive table hover image preview
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const total = PROJECTS_DATA.length;
  const project = PROJECTS_DATA[currentSlide];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + total) % total);
  };

  // Keyboard navigation for slider
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProject) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, total]);

  const handleMouseMoveArchive = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const openProjectModal = (proj: Project) => {
    setSelectedProject(proj);
  };

  return (
    <section id="projects" className="py-24 md:py-36 max-w-7xl mx-auto px-6 sm:px-8 relative">
      {/* Section Header with Patrick Heng View Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono-tech text-cyan-400 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>[ 01 // SELECTED WORK & APPLICATIONS ]</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase">
            FEATURED PROJECTS
          </h2>
          <p className="text-[#8d94a5] text-sm sm:text-base max-w-xl">
            Real-time web applications, pixel-perfect recreations, and developer infrastructure built with React, Next.js, and Node.js.
          </p>
        </div>

        {/* View Mode Toggle: Slider vs Archive */}
        <div className="flex items-center gap-2 bg-[#12141c] p-1.5 rounded-full border border-white/10">
          <button
            onClick={() => setViewMode('slider')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono-tech font-bold tracking-wider uppercase transition-all duration-200 ${
              viewMode === 'slider'
                ? 'bg-white text-black shadow-md'
                : 'text-[#8d94a5] hover:text-white'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>SHOWCASE</span>
          </button>

          <button
            onClick={() => setViewMode('archive')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono-tech font-bold tracking-wider uppercase transition-all duration-200 ${
              viewMode === 'archive'
                ? 'bg-white text-black shadow-md'
                : 'text-[#8d94a5] hover:text-white'
            }`}
          >
            <List className="w-3.5 h-3.5" />
            <span>ARCHIVE INDEX</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: PATRICK HENG SIGNATURE SHOWCASE SLIDER */}
      {viewMode === 'slider' && (
        <div className="pt-12 space-y-12">
          {/* Main Slide Card */}
          <div className="relative rounded-3xl bg-[#0e1017]/90 border border-white/10 p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl backdrop-blur-md">
            {/* Background Watermark Index */}
            <div className="absolute top-4 right-8 text-8xl sm:text-9xl font-black font-mono-tech text-white/[0.03] select-none pointer-events-none">
              0{currentSlide + 1}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Project Details */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3 text-xs font-mono-tech text-emerald-400">
                  <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 font-bold">
                    0{currentSlide + 1} / 0{total}
                  </span>
                  <span className="text-white/40">•</span>
                  <span className="uppercase tracking-widest text-[#8d94a5]">
                    {project.subtitle}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3
                    onClick={() => openProjectModal(project)}
                    className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>
                  <p className="text-[#8d94a5] text-sm sm:text-base leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-md bg-[#161822] border border-white/10 text-xs font-mono-tech text-white/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights List */}
                <ul className="space-y-2 pt-2 border-t border-white/10 text-xs text-[#8d94a5]">
                  {project.highlights.slice(0, 2).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">↗</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Controls */}
                <div className="flex flex-wrap items-center gap-3 pt-4">
                  <button
                    onClick={() => openProjectModal(project)}
                    className="group px-6 py-3 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-cyan-400 transition-all flex items-center gap-2 shadow-lg"
                  >
                    <span>EXPLORE CASE STUDY</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-3 rounded-full bg-[#1a1c26] text-white border border-white/15 font-semibold text-xs tracking-wider uppercase hover:border-white/40 transition-colors flex items-center gap-2"
                    >
                      <span>LIVE PREVIEW</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-full bg-[#1a1c26] text-white border border-white/15 hover:border-white/40 transition-colors"
                      title="View GitHub Repository"
                      aria-label="View GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Visual Frame */}
              <div
                data-cursor="project"
                onClick={() => openProjectModal(project)}
                className="lg:col-span-6 relative group cursor-pointer"
              >
                <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden border border-white/15 bg-black/60 shadow-2xl group-hover:border-cyan-400/50 transition-all duration-500">
                  {/* Browser Bar */}
                  <div className="absolute top-0 inset-x-0 h-8 bg-[#090a0f]/90 border-b border-white/10 px-4 flex items-center gap-2 z-20">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="text-[10px] font-mono-tech text-white/40 pl-2 truncate">
                      https://shiyam.dev/works/{project.id}
                    </span>
                  </div>

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover object-top pt-8 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Dark Vignette Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                  {/* Hover Pill CTA */}
                  <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-4 py-2 rounded-full bg-white text-black font-bold text-xs tracking-wider uppercase flex items-center gap-1.5 shadow-xl">
                      <span>OPEN DETAILS</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Slider Scrubber & Arrow Navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
            {/* Step Indicators */}
            <div className="flex items-center gap-2">
              {PROJECTS_DATA.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentSlide === idx ? 'w-10 bg-white' : 'w-3 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Slide Navigation Buttons */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono-tech text-[#8d94a5] pr-2">
                0{currentSlide + 1} OF 0{total}
              </span>

              <button
                onClick={handlePrev}
                className="p-3.5 rounded-full bg-[#12141c] text-white border border-white/15 hover:border-white/40 hover:bg-white hover:text-black transition-all shadow-md"
                aria-label="Previous Slide"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                onClick={handleNext}
                className="p-3.5 rounded-full bg-[#12141c] text-white border border-white/15 hover:border-white/40 hover:bg-white hover:text-black transition-all shadow-md"
                aria-label="Next Slide"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: PATRICK HENG EDITORIAL ARCHIVE TABLE */}
      {viewMode === 'archive' && (
        <div
          onMouseMove={handleMouseMoveArchive}
          className="pt-12 relative overflow-hidden"
        >
          <div className="divide-y divide-white/10 border-y border-white/10 font-mono-tech">
            {PROJECTS_DATA.map((proj, idx) => (
              <div
                key={proj.id}
                onMouseEnter={() => setHoveredProject(proj)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => openProjectModal(proj)}
                className="group py-6 px-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/[0.04] transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-6">
                  <span className="text-xs text-white/40 font-bold">0{idx + 1}</span>
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold font-sans text-white group-hover:text-cyan-400 transition-colors uppercase">
                      {proj.title}
                    </h4>
                    <p className="text-xs text-[#8d94a5] font-sans pt-0.5">{proj.subtitle}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 md:gap-8 text-xs text-[#8d94a5]">
                  <span className="hidden lg:inline text-white/60">
                    {proj.techStack.slice(0, 3).join(' • ')}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white text-[11px]">
                    2026
                  </span>
                  <div className="flex items-center gap-1 text-white font-semibold group-hover:text-cyan-400 transition-colors">
                    <span>VIEW</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Floating Hover Thumbnail Follower */}
          {hoveredProject && (
            <motion.div
              className="pointer-events-none fixed z-30 hidden lg:block w-72 h-44 rounded-xl overflow-hidden border border-white/25 shadow-2xl bg-black"
              style={{
                top: cursorPos.y - 90,
                left: cursorPos.x + 30,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <Image
                src={hoveredProject.image}
                alt={hoveredProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                <span className="text-[11px] font-sans font-bold text-white uppercase">
                  {hoveredProject.title}
                </span>
              </div>
            </motion.div>
          )}
        </div>
      )}

      {/* Case Study Full-Screen Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
