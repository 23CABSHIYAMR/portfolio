'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Layers, Compass } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolio';

const CORE_PILLARS = [
  {
    icon: Zap,
    title: 'Frame Budget & Performance',
    description: 'Targeting 60fps+ fluid rendering, selective DOM virtualization, and optimized database queries.',
  },
  {
    icon: Layers,
    title: 'Distributed System Resilience',
    description: 'Worker-supervisor self-recovery, FIFO queues with acknowledgments, and duplicate-event suppression.',
  },
  {
    icon: ShieldCheck,
    title: 'Automated Quality Suites',
    description: 'End-to-end browser validation with Playwright (20/20 tests in 13.2s) and structured Winston logging.',
  },
  {
    icon: Compass,
    title: 'Creative UI Engineering',
    description: 'Interactive canvas graphics, responsive design systems, and tactile interactive micro-interactions.',
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-36 max-w-7xl mx-auto px-6 sm:px-8 relative">
      <div className="pb-12 border-b border-white/10 space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono-tech text-cyan-400 uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span>[ 03 // ABOUT & BACKGROUND ]</span>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase">
          ENGINEERING PERSPECTIVE
        </h2>
      </div>

      {/* Main Split Editorial Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-12">
        {/* Left Column: Narrative */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
            Bridging the gap between robust backend architectures and delightful, fluid frontends.
          </h3>

          <p className="text-[#8d94a5] text-base leading-relaxed">
            I am a Software Engineer and Bachelor of Computer Applications (BCA) Graduate based in Coimbatore, India. Currently developing real-time communications infrastructure and full-stack web applications at <span className="text-white font-medium">Sporada Secure India</span>.
          </p>

          <p className="text-[#8d94a5] text-base leading-relaxed">
            My experience spans architecting multi-user messaging workflows, QR-based authentication, WebSocket connection recovery, and database query optimization. When building applications, I obsess over speed, responsiveness, and creating digital products that feel memorable to interact with.
          </p>

          {/* Quick Technical Specs Box */}
          <div className="p-6 rounded-2xl bg-[#0e1017] border border-white/10 space-y-3 font-mono-tech text-xs">
            <div className="flex items-center justify-between text-white/50 border-b border-white/10 pb-2">
              <span>SPECIFICATION</span>
              <span>DETAILS</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#8d94a5]">PRIMARY FOCUS</span>
              <span className="text-white">Full Stack Engineering / Creative UI</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#8d94a5]">CORE STACK</span>
              <span className="text-emerald-400">React.js • Next.js • Node.js • MongoDB</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#8d94a5]">TESTING</span>
              <span className="text-cyan-400">Playwright E2E • Lighthouse (Core Web Vitals)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#8d94a5]">CURRENT LOCATION</span>
              <span className="text-white">Coimbatore, Tamil Nadu, India</span>
            </div>
          </div>
        </div>

        {/* Right Column: Telemetry & Pillars */}
        <div className="lg:col-span-5 space-y-4">
          <div className="grid grid-cols-2 gap-3 pb-2">
            {PERSONAL_INFO.stats.map((stat) => (
              <div
                key={stat.label}
                className="p-5 rounded-2xl bg-[#0f1118] border border-white/10 hover:border-white/30 transition-all"
              >
                <div className="text-3xl font-black font-mono-tech text-white">
                  {stat.value}
                </div>
                <div className="text-[11px] font-mono-tech uppercase tracking-wider text-[#8d94a5] pt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Core Pillars Cards */}
          <div className="space-y-3">
            {CORE_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-5 rounded-2xl bg-[#0e1017] border border-white/10 hover:border-white/25 transition-all flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white tracking-tight">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-[#8d94a5] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
