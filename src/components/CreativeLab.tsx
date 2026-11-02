'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Sparkles, RefreshCw, Activity, Cpu } from 'lucide-react';

interface LabParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
}

export const CreativeLab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'gravitron' | 'terminal' | 'oscilloscope'>('gravitron');

  // Terminal state
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    'SHIYAM_OS v2.6.4 [System Operational]',
    'Type "help" to list available commands.',
    '----------------------------------------',
  ]);

  // Gravitron canvas ref
  const gravitronCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<LabParticle[]>([]);

  // Oscilloscope canvas ref
  const oscCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Gravitron Animation Loop
  useEffect(() => {
    if (activeTab !== 'gravitron') return;
    const canvas = gravitronCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = 360);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 360;
    };
    window.addEventListener('resize', handleResize);

    // Initial burst
    const colors = ['#38bdf8', '#10b981', '#f59e0b', '#ec4899', '#ffffff'];
    for (let i = 0; i < 40; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 4 + 1;
      particlesRef.current.push({
        x: width / 2,
        y: height / 2,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        maxLife: Math.random() * 80 + 40,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 3 + 1.5,
      });
    }

    const render = () => {
      ctx.fillStyle = 'rgba(10, 12, 18, 0.25)';
      ctx.fillRect(0, 0, width, height);

      const pArr = particlesRef.current;
      for (let i = pArr.length - 1; i >= 0; i--) {
        const p = pArr[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05; // gentle gravity
        p.life -= 1 / p.maxLife;

        // Bounce
        if (p.x < 0 || p.x > width) p.vx *= -0.8;
        if (p.y > height) {
          p.y = height;
          p.vy *= -0.7;
        }

        if (p.life <= 0) {
          pArr.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, [activeTab]);

  // Gravitron Click/Spawn Handler
  const handleGravitronClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = gravitronCanvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const colors = ['#38bdf8', '#10b981', '#f59e0b', '#a855f7', '#ffffff'];
    for (let i = 0; i < 35; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 6 + 1.5;
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        maxLife: Math.random() * 70 + 40,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 3.5 + 1.5,
      });
    }
  };

  // Oscilloscope Animation Loop
  useEffect(() => {
    if (activeTab !== 'oscilloscope') return;
    const canvas = oscCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let step = 0;
    const width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    const height = (canvas.height = 360);

    const render = () => {
      ctx.fillStyle = 'rgba(9, 10, 15, 0.2)';
      ctx.fillRect(0, 0, width, height);

      // Grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Sine Wave 1 (Cyan)
      ctx.beginPath();
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2.5;
      ctx.shadowColor = '#38bdf8';
      ctx.shadowBlur = 12;
      for (let x = 0; x < width; x++) {
        const y = height / 2 + Math.sin(x * 0.015 + step) * 55 * Math.sin(x * 0.005 + step * 0.5);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Sine Wave 2 (Emerald)
      ctx.beginPath();
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 1.5;
      ctx.shadowColor = '#10b981';
      ctx.shadowBlur = 10;
      for (let x = 0; x < width; x++) {
        const y = height / 2 + Math.cos(x * 0.02 - step * 1.2) * 35;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.shadowBlur = 0;

      step += 0.04;
      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [activeTab]);

  // Terminal Command Executor
  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();

    let reply = '';
    switch (cmd) {
      case 'help':
        reply = 'Available commands: whoami, skills, stack, projects, stats, clear, contact, date';
        break;
      case 'whoami':
        reply = 'Shiyam R — Full Stack Developer & Creative Engineer based in Coimbatore, India.';
        break;
      case 'skills':
        reply = 'Proficient: React.js, Next.js, Node.js, Express.js, MongoDB, Socket.IO, Playwright, Nginx';
        break;
      case 'stack':
        reply = 'Core Stack: React • Next.js • Node.js • Express • MongoDB • Tailwind CSS';
        break;
      case 'projects':
        reply = '1. Multi-User WhatsApp App | 2. Habit Tracker | 3. Aeronero Replica | 4. Node Server CLI';
        break;
      case 'stats':
        reply = '50+ Production Issues Resolved | 20/20 Passing Playwright Tests (13.2s) | 2 Awards';
        break;
      case 'contact':
        reply = 'Email: shiyamramesh01@gmail.com | LinkedIn: /in/shiyam-r-3a885a315';
        break;
      case 'date':
        reply = `Current Time: ${new Date().toISOString()} (IST)`;
        break;
      case 'clear':
        setTerminalLogs([]);
        setTerminalInput('');
        return;
      case '':
        return;
      default:
        reply = `Command not recognized: "${cmd}". Type "help" for a list of commands.`;
    }

    setTerminalLogs((prev) => [...prev, `> ${terminalInput}`, reply]);
    setTerminalInput('');
  };

  return (
    <section id="lab" className="py-24 md:py-36 max-w-7xl mx-auto px-6 sm:px-8 relative">
      <div className="pb-12 border-b border-white/10 space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono-tech text-amber-400 uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>[ 02 // CREATIVE LAB & EXPERIMENTS ]</span>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase">
          INTERACTIVE EXPERIMENTS
        </h2>
        <p className="text-[#8d94a5] text-sm sm:text-base max-w-xl">
          A showcase of creative physics, canvas visualizers, and interactive terminal protocols running directly in your browser.
        </p>
      </div>

      {/* Experiment Selector Pills */}
      <div className="flex flex-wrap items-center gap-3 pt-8 pb-6">
        <button
          onClick={() => setActiveTab('gravitron')}
          className={`px-5 py-2.5 rounded-full text-xs font-mono-tech font-bold uppercase tracking-wider transition-all ${
            activeTab === 'gravitron'
              ? 'bg-cyan-400 text-black shadow-[0_0_20px_rgba(56,189,248,0.35)]'
              : 'bg-[#12141c] text-[#8d94a5] border border-white/10 hover:text-white'
          }`}
        >
          ● 01: GRAVITRON PHYSICS
        </button>

        <button
          onClick={() => setActiveTab('terminal')}
          className={`px-5 py-2.5 rounded-full text-xs font-mono-tech font-bold uppercase tracking-wider transition-all ${
            activeTab === 'terminal'
              ? 'bg-emerald-400 text-black shadow-[0_0_20px_rgba(16,185,129,0.35)]'
              : 'bg-[#12141c] text-[#8d94a5] border border-white/10 hover:text-white'
          }`}
        >
          ● 02: SYSTEM TERMINAL HUD
        </button>

        <button
          onClick={() => setActiveTab('oscilloscope')}
          className={`px-5 py-2.5 rounded-full text-xs font-mono-tech font-bold uppercase tracking-wider transition-all ${
            activeTab === 'oscilloscope'
              ? 'bg-amber-400 text-black shadow-[0_0_20px_rgba(245,158,11,0.35)]'
              : 'bg-[#12141c] text-[#8d94a5] border border-white/10 hover:text-white'
          }`}
        >
          ● 03: KINETIC WAVE OSCILLATOR
        </button>
      </div>

      {/* Main Interactive Stage */}
      <div className="rounded-2xl border border-white/15 bg-[#0a0c12] p-4 sm:p-6 shadow-2xl relative overflow-hidden">
        {/* TAB 1: GRAVITRON */}
        {activeTab === 'gravitron' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono-tech text-[#8d94a5] border-b border-white/10 pb-3">
              <span className="flex items-center gap-2 text-cyan-400">
                <Cpu className="w-3.5 h-3.5" />
                <span>CLICK ANYWHERE ON CANVAS TO SPAWN PARTICLES</span>
              </span>
              <button
                onClick={() => {
                  particlesRef.current = [];
                }}
                className="hover:text-white flex items-center gap-1.5"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>RESET STAGE</span>
              </button>
            </div>

            <canvas
              ref={gravitronCanvasRef}
              onClick={handleGravitronClick}
              className="w-full h-[360px] rounded-xl bg-[#07080c] cursor-crosshair border border-white/5"
            />
          </div>
        )}

        {/* TAB 2: SYSTEM TERMINAL HUD */}
        {activeTab === 'terminal' && (
          <div className="space-y-4 font-mono-tech text-xs">
            <div className="flex items-center justify-between text-[#8d94a5] border-b border-white/10 pb-3">
              <span className="flex items-center gap-2 text-emerald-400">
                <Terminal className="w-3.5 h-3.5" />
                <span>INTERACTIVE CLI INTERFACE</span>
              </span>
              <span>TYPE &quot;help&quot; FOR COMMANDS</span>
            </div>

            <div className="h-[280px] overflow-y-auto space-y-1.5 bg-[#06080d] p-4 rounded-xl border border-white/5 text-emerald-400/90">
              {terminalLogs.map((log, idx) => (
                <div key={idx} className="leading-relaxed">
                  {log}
                </div>
              ))}
            </div>

            <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2 pt-1">
              <span className="text-emerald-400 font-bold">&gt;</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="Type 'skills', 'projects', 'stats', 'whoami', 'clear'..."
                className="w-full bg-[#12141c] border border-white/10 rounded-lg px-3 py-2 text-white placeholder-white/30 focus:outline-none focus:border-emerald-400"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-emerald-500 text-black font-bold uppercase rounded-lg hover:bg-emerald-400 transition-colors"
              >
                RUN
              </button>
            </form>
          </div>
        )}

        {/* TAB 3: KINETIC WAVE OSCILLATOR */}
        {activeTab === 'oscilloscope' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono-tech text-[#8d94a5] border-b border-white/10 pb-3">
              <span className="flex items-center gap-2 text-amber-400">
                <Activity className="w-3.5 h-3.5" />
                <span>DUAL SINE-WAVE MATHEMATICAL SIMULATION</span>
              </span>
              <span>FREQ: 440Hz / MOD: 55Hz (60 FPS RENDER)</span>
            </div>

            <canvas
              ref={oscCanvasRef}
              className="w-full h-[360px] rounded-xl bg-[#06080c] border border-white/5"
            />
          </div>
        )}
      </div>
    </section>
  );
};
