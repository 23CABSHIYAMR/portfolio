'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDownRight, Terminal, FileText, ArrowRight, Sparkles, Layers } from 'lucide-react';
import { GithubIcon, LinkedinIcon, HackerRankIcon } from '@/components/UI/Icons';
import { PERSONAL_INFO } from '@/data/portfolio';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative pt-36 pb-24 md:pt-48 md:pb-36 max-w-7xl mx-auto px-6 sm:px-8 flex flex-col justify-center min-h-[90vh]"
    >
      {/* Top Technical Metadata HUD */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/10 text-xs font-mono-tech text-[#8d94a5]"
      >
        <div className="flex items-center gap-3">
          <span className="text-white font-bold tracking-widest">[ 00 // PORTFOLIO 2026 ]</span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span className="hidden sm:inline">COIMBATORE, TN, INDIA</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-emerald-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>OPEN TO NEW ROLES</span>
          </span>
          <span className="text-white/30">•</span>
          <span className="text-white/60">REACT • NEXT.JS • NODE.JS</span>
        </div>
      </motion.div>

      {/* Main Hero Header */}
      <div className="py-12 md:py-16 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <div className="inline-block px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono-tech text-white/70">
            CREATIVE ENGINEER & SYSTEM ARCHITECT
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[0.95] uppercase">
            <span>SHIYAM R</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/30">
              BUILDING FLUID
            </span>
            <br />
            <span className="italic font-light text-white/90">
              WEB EXPERIENCES.
            </span>
          </h1>
        </motion.div>

        {/* Bio Narrative & Metric Chips */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-lg sm:text-xl text-[#8d94a5] leading-relaxed max-w-2xl font-light">
              Full Stack Engineer specializing in <span className="text-white font-medium">React.js, Next.js, Node.js, and real-time Socket.IO systems</span>. Focused on high-fidelity user interfaces, distributed backend resilience, and pixel-precise creative execution.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-[#38bdf8] hover:text-black hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]"
              >
                <span>EXPLORE SELECTED WORK</span>
                <ArrowDownRight className="w-4 h-4 group-hover:rotate-[-45deg] transition-transform duration-300" />
              </a>

              <a
                href="#lab"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#12141c] text-white border border-white/15 font-semibold text-xs tracking-wider uppercase hover:border-white/40 hover:bg-[#1a1c26] transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>INTERACTIVE LAB</span>
              </a>

              <a
                href={PERSONAL_INFO.socials.resume}
                target="_blank"
                rel="noreferrer"
                download="Shiyam_R_Software_Engineer_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-transparent text-white/80 border border-white/10 font-semibold text-xs tracking-wider uppercase hover:text-white hover:border-white/20 transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>RESUME PDF</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Telemetry Specs HUD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 grid grid-cols-2 gap-3"
          >
            {PERSONAL_INFO.stats.map((stat) => (
              <div
                key={stat.label}
                className="p-4 rounded-xl bg-[#0f1118]/80 border border-white/10 backdrop-blur-md hover:border-white/25 transition-all group"
              >
                <div className="text-2xl sm:text-3xl font-black font-mono-tech text-white group-hover:text-emerald-400 transition-colors">
                  {stat.value}
                </div>
                <div className="text-[11px] font-mono-tech uppercase tracking-wider text-[#8d94a5] pt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Social Strip & Coordinates */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="pt-10 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono-tech text-[#8d94a5]"
      >
        <div className="flex items-center gap-5">
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GITHUB</span>
          </a>
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LINKEDIN</span>
          </a>
          <a
            href={PERSONAL_INFO.socials.hackerrank}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <HackerRankIcon className="w-4 h-4" />
            <span>HACKERRANK</span>
          </a>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>CURRENT: FULL STACK DEV @ SPORADA</span>
        </div>
      </motion.div>
    </section>
  );
};
