'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/80 bg-white py-12 text-slate-500 text-xs">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
          <span className="font-semibold text-slate-900">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}.
          </span>
          <span className="hidden sm:inline">•</span>
          <span>Designed with restraint & built for speed.</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-[11px] font-mono text-slate-400">
            Next.js • Tailwind CSS • Framer Motion
          </span>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
            aria-label="Back to Top"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
