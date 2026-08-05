'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Mail, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, HackerRankIcon } from '@/components/UI/Icons';
import { PERSONAL_INFO } from '@/data/portfolio';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 max-w-5xl mx-auto px-6 sm:px-8 flex flex-col justify-center min-h-[85vh]"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 md:gap-12">
        {/* Left Column - Text Content */}
        <div className="flex-1 space-y-6">
          {/* Availability Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/80 text-slate-700 text-xs font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{PERSONAL_INFO.availabilityStatus}</span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-3"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              {PERSONAL_INFO.tagline}
            </h1>
            <p className="text-lg sm:text-xl font-medium text-slate-600 tracking-tight">
              Hi, I&apos;m <span className="text-slate-900 font-semibold">{PERSONAL_INFO.name}</span> — {PERSONAL_INFO.title}
            </p>
          </motion.div>

          {/* Short Introduction */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal"
          >
            {PERSONAL_INFO.bio}
          </motion.p>

          {/* CTAs & Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-2 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all hover:shadow-sm group"
            >
              <span>View Projects</span>
              <ArrowDown className="w-4 h-4 text-slate-300 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href={PERSONAL_INFO.socials.resume}
              target="_blank"
              rel="noreferrer"
              download="Shiyam_R_Software_Engineer_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-slate-900 transition-colors"
            >
              <FileText className="w-4 h-4 text-slate-500" />
              <span>Resume</span>
            </a>

            <div className="h-6 w-px bg-slate-200 hidden sm:block mx-1" />

            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              {PERSONAL_INFO.socials.hackerrank && (
                <a
                  href={PERSONAL_INFO.socials.hackerrank}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                  aria-label="HackerRank Profile"
                >
                  <HackerRankIcon className="w-5 h-5" />
                </a>
              )}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Avatar Photo & Badge Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex-shrink-0 mx-auto md:mx-0"
        >
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border border-slate-200 shadow-md group">
            <Image
              src="/images/shiyamAvatar.jpeg"
              alt={PERSONAL_INFO.name}
              fill
              sizes="(max-width: 768px) 224px, 256px"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              priority
            />
            <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors" />
          </div>

          {/* Decorative Corner Badge */}
          <div className="absolute -bottom-3 -right-3 bg-white border border-slate-200 rounded-xl px-3 py-1.5 shadow-sm flex items-center gap-1.5 text-xs font-medium text-slate-800">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Full-Stack & Web Engineering</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
