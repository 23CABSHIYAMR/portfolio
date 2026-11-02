'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Eye, FileText, X, Award, Briefcase, UserCheck } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolio';

export const Resume: React.FC = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);

  return (
    <section id="resume" className="py-24 md:py-36 max-w-7xl mx-auto px-6 sm:px-8 relative">
      <div className="pb-12 border-b border-white/10 space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono-tech text-emerald-400 uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>[ 06 // CURRICULUM VITAE ]</span>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase">
          RESUME & CREDENTIALS
        </h2>
      </div>

      <div className="pt-12">
        <div className="rounded-3xl bg-[#0e1017] border border-white/10 p-6 sm:p-10 lg:p-12 space-y-8 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs font-mono-tech">
                <FileText className="w-3.5 h-3.5" />
                <span>OFFICIAL RESUME DOCUMENT</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight uppercase">
                {PERSONAL_INFO.name} — FULL STACK DEVELOPER
              </h3>
              <p className="text-sm text-[#8d94a5]">
                Specialized in React.js, Next.js, Node.js, Express.js & REST APIs.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={() => setIsPreviewOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-mono-tech font-bold uppercase tracking-wider text-white bg-[#1a1c26] hover:bg-[#252837] border border-white/15 rounded-full transition-colors"
              >
                <Eye className="w-4 h-4" />
                <span>INSPECT PREVIEW</span>
              </button>

              <a
                href={PERSONAL_INFO.socials.resume}
                target="_blank"
                rel="noreferrer"
                download="Shiyam_R_Software_Engineer_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono-tech font-bold uppercase tracking-wider text-black bg-white hover:bg-cyan-400 rounded-full transition-all shadow-lg"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD PDF</span>
              </a>
            </div>
          </div>

          {/* Quick Snapshot Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-[#08090d] border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 font-mono-tech text-xs uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>EDUCATION</span>
              </div>
              <p className="text-sm text-white font-bold">Bachelor of Computer Applications (BCA)</p>
              <p className="text-xs text-[#8d94a5]">Degree in Computer Science & Practical Applications</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#08090d] border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-mono-tech text-xs uppercase tracking-wider">
                <Briefcase className="w-4 h-4" />
                <span>CURRENT ENGAGEMENT</span>
              </div>
              <p className="text-sm text-white font-bold">Full Stack Developer</p>
              <p className="text-xs text-[#8d94a5]">Sporada Secure India Private Limited (Sep 2026 – Present)</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#08090d] border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-mono-tech text-xs uppercase tracking-wider">
                <UserCheck className="w-4 h-4" />
                <span>CORE METRICS</span>
              </div>
              <p className="text-xs text-[#8d94a5] leading-relaxed">
                50+ Production issues resolved, 20/20 Playwright automated tests passed in 13.2s, 2 Inter-college awards.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Quick Preview Modal */}
      <AnimatePresence>
        {isPreviewOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPreviewOpen(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-[#0e1017] border border-white/15 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col h-[85vh]"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#08090d]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono-tech text-white/50 pl-3">
                    ShiyamSporadaResume.pdf
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={PERSONAL_INFO.socials.resume}
                    target="_blank"
                    rel="noreferrer"
                    download
                    className="text-xs font-mono-tech text-cyan-400 hover:text-white flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>DOWNLOAD</span>
                  </a>

                  <button
                    onClick={() => setIsPreviewOpen(false)}
                    className="p-1 rounded text-white/50 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="flex-1 bg-[#161822]">
                <iframe
                  src={`${PERSONAL_INFO.socials.resume}#toolbar=0`}
                  title="Shiyam R Resume PDF"
                  className="w-full h-full border-none"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
