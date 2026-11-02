import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { CreativeLab } from '@/components/CreativeLab';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Resume } from '@/components/Resume';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { InteractiveBackground } from '@/components/InteractiveBackground';
import { CustomCursor } from '@/components/CustomCursor';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#08090c] text-[#f4f5f8] font-sans selection:bg-white selection:text-black overflow-x-hidden">
      {/* Dynamic Canvas Particles & Mesh */}
      <InteractiveBackground />

      {/* Smooth Magnetic Fluid Cursor */}
      <CustomCursor />

      {/* Fixed Patrick Heng Minimal Header */}
      <Navbar />

      {/* Main Experience Stream */}
      <main className="relative z-10 space-y-0">
        <Hero />
        <Projects />
        <CreativeLab />
        <About />
        <Experience />
        <Skills />
        <Resume />
        <Contact />
      </main>

      {/* Bottom Minimal Footer */}
      <Footer />
    </div>
  );
}
