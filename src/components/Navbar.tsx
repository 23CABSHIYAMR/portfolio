'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolio';

const NAV_ITEMS = [
  { label: 'WORK', href: '#projects' },
  { label: 'ABOUT', href: '#about' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'LAB', href: '#lab' },
  { label: 'CONTACT', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<string>('');

  // Real-time ticking clock (IST / Local)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZone: 'Asia/Kolkata',
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection observer for active navigation link
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 font-mono-tech ${
        scrolled
          ? 'bg-[#08090c]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Left Identity & Availability */}
        <div className="flex items-center gap-4">
          <a
            href="#hero"
            className="group flex items-center gap-2.5 text-white tracking-tight"
          >
            <span className="w-2 h-2 rounded-full bg-white group-hover:scale-150 transition-transform duration-200" />
            <span className="font-bold text-sm tracking-wider uppercase font-sans">
              {PERSONAL_INFO.name}
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-2 pl-3 border-l border-white/15 text-[11px] text-[#8d94a5]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="uppercase tracking-widest text-[10px]">
              AVAILABLE FOR HIRE
            </span>
          </div>
        </div>

        {/* Center Minimalist Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-1 bg-[#12141c]/80 backdrop-blur-md p-1 rounded-full border border-white/10 shadow-inner">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-black'
                    : 'text-[#8d94a5] hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-white rounded-full shadow-md"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right HUD Controls: Live Clock & Quick Resume */}
        <div className="flex items-center gap-3">
          {/* Live Clock */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#12141c]/80 border border-white/10 text-[11px] text-[#8d94a5] tracking-widest">
            <span className="text-white/40">IST</span>
            <span className="text-white font-mono">{currentTime || '16:05:00'}</span>
          </div>

          {/* Quick Resume Link */}
          <a
            href={PERSONAL_INFO.socials.resume}
            target="_blank"
            rel="noreferrer"
            download="Shiyam_R_Software_Engineer_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-cyan-400 transition-colors shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>RESUME</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#12141c] border border-white/10 text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-x-0 top-[60px] bg-[#090a0f]/95 backdrop-blur-xl border-b border-white/10 p-6 shadow-2xl space-y-4"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item, idx) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-lg bg-[#12141c]/60 text-sm font-semibold tracking-wider uppercase text-white hover:bg-white hover:text-black transition-colors flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-white/40 font-mono">0{idx + 1}</span>
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#8d94a5]">
              <span>COIMBATORE, INDIA</span>
              <span className="font-mono text-white">{currentTime} IST</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
