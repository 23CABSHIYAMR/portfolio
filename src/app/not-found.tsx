import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Terminal } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#08090c] text-white flex flex-col items-center justify-center p-6 text-center font-mono-tech">
      <div className="space-y-4 max-w-md">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
          <Terminal className="w-3.5 h-3.5" />
          <span>404: RESOURCE_NOT_FOUND</span>
        </div>
        <h1 className="text-6xl font-black font-sans uppercase tracking-tight">
          PAGE NOT FOUND
        </h1>
        <p className="text-xs text-[#8d94a5] leading-relaxed">
          The requested coordinate does not exist in this sector.
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO GRID</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

