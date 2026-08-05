'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from './UI/SectionHeader';
import { PERSONAL_INFO } from '@/data/portfolio';
import { Download, Eye, FileText, X, Award, Briefcase, UserCheck } from 'lucide-react';

export const Resume: React.FC = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);

  return (
    <section id="resume" className="py-20 md:py-28 bg-slate-50/60 border-y border-slate-100">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <SectionHeader
          badge="Curriculum Vitae"
          title="Resume & Credentials"
          description="Download a copy of my official resume or inspect a quick overview of my background below."
        />

        {/* Card Box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-10 shadow-2xs space-y-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-slate-100">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-medium">
                <FileText className="w-3.5 h-3.5" />
                <span>PDF Resume Available</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                {PERSONAL_INFO.name} — Software Engineer
              </h3>
              <p className="text-sm text-slate-600">
                Specialized in React.js, Next.js, Node.js, Express.js & REST APIs.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={() => setIsPreviewOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                <Eye className="w-4 h-4" />
                <span>Quick Preview</span>
              </button>

              <a
                href={PERSONAL_INFO.socials.resume}
                target="_blank"
                rel="noreferrer"
                download="Shiyam_R_Software_Engineer_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-2xs"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Quick Snapshot Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <Award className="w-4 h-4 text-slate-700" />
                <span>Education</span>
              </div>
              <p className="text-xs text-slate-700 font-semibold">Bachelor of Computer Applications (BCA)</p>
              <p className="text-xs text-slate-500">Graduate Degree in Computer Science & Applications</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <Briefcase className="w-4 h-4 text-slate-700" />
                <span>Professional Experience</span>
              </div>
              <p className="text-xs text-slate-700 font-semibold">Associate System Engineer Trainee</p>
              <p className="text-xs text-slate-500">OpsMonsters Software Consultants (Oct 2025 – Nov 2025)</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <UserCheck className="w-4 h-4 text-slate-700" />
                <span>Core Competencies</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Frontend Development (React/Next.js), REST API Integration, Backend Node.js Services, Issue Resolution & Git Workflows.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quick Resume Preview Modal */}
      <AnimatePresence>
        {isPreviewOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPreviewOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden z-10 p-6 sm:p-10 space-y-6 max-h-[85vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <h3 className="text-xl font-bold text-slate-900">Resume Snapshot</h3>
                <button
                  onClick={() => setIsPreviewOpen(false)}
                  className="p-2 text-slate-500 hover:text-slate-900 rounded-full hover:bg-slate-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Simulated Resume Document View */}
              <div className="p-6 sm:p-8 bg-slate-50 border border-slate-200/80 rounded-xl space-y-6 font-sans text-slate-800">
                <div className="border-b border-slate-200 pb-4">
                  <h2 className="text-2xl font-bold text-slate-900">{PERSONAL_INFO.name}</h2>
                  <p className="text-sm text-slate-600 font-medium">{PERSONAL_INFO.title}</p>
                  <p className="text-xs text-slate-500 mt-1">{PERSONAL_INFO.email} • {PERSONAL_INFO.location}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Summary</h4>
                  <p className="text-xs leading-relaxed text-slate-600">{PERSONAL_INFO.bio}</p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Experience</h4>
                  <div className="space-y-3">
                    <div className="text-xs">
                      <div className="font-bold text-slate-900">Associate System Engineer Trainee — OpsMonsters Software Consultants</div>
                      <div className="text-slate-500">October 2025 — November 2025</div>
                      <p className="text-slate-600 mt-1">Built production features using React.js and Next.js, integrated REST APIs, and resolved 50+ production UI and functional issues.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Education</h4>
                  <div className="text-xs">
                    <div className="font-bold text-slate-900">Bachelor of Computer Applications (BCA)</div>
                    <div className="text-slate-600 mt-0.5">Focused on Software Engineering, Data Structures, Java OOP, and Web Development.</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => setIsPreviewOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
                >
                  Close
                </button>
                <a
                  href={PERSONAL_INFO.socials.resume}
                  target="_blank"
                  rel="noreferrer"
                  download="Shiyam_R_Software_Engineer_Resume.pdf"
                  className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
