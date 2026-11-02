'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#06070a] py-14 text-[#8d94a5] text-xs font-mono-tech relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="font-bold text-white uppercase tracking-wider">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}.
          </span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span>ALL RIGHTS RESERVED // CREATIVE DEVELOPER & FULL STACK ENGINEER</span>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-[11px] text-white/40 hidden lg:inline">
            NEXT.JS • REACT • CANVAS • TAILWIND CSS • FRAMER MOTION
          </span>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 text-white hover:bg-white hover:text-black transition-all"
            aria-label="Back to Top"
            title="Back to Top"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
