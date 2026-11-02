'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Send, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, HackerRankIcon } from '@/components/UI/Icons';
import { PERSONAL_INFO } from '@/data/portfolio';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 900);
  };

  return (
    <section id="contact" className="py-24 md:py-36 max-w-7xl mx-auto px-6 sm:px-8 relative">
      <div className="pb-12 border-b border-white/10 space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono-tech text-cyan-400 uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span>[ 07 // INITIATE TRANSMISSION ]</span>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight uppercase leading-[0.95]">
          LET&apos;S BUILD SOMETHING EXTRAORDINARY.
        </h2>
        <p className="text-[#8d94a5] text-sm sm:text-base max-w-xl">
          Whether you have an engineering opening, a high-impact product inquiry, or want to explore collaboration — I am always eager to talk.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-12">
        {/* Left Column: Direct Email & Channels */}
        <div className="lg:col-span-5 space-y-6">
          {/* Email Copy Card */}
          <div className="p-8 rounded-3xl bg-[#0e1017] border border-white/10 space-y-6 shadow-2xl">
            <div className="space-y-1">
              <span className="text-xs font-mono-tech text-emerald-400 uppercase tracking-widest">
                DIRECT INBOX
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white break-all">
                {PERSONAL_INFO.email}
              </h3>
            </div>

            <button
              onClick={handleCopyEmail}
              className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full text-xs font-mono-tech font-bold uppercase tracking-wider bg-white text-black hover:bg-cyan-400 transition-all shadow-lg active:scale-98"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>ADDRESS COPIED TO CLIPBOARD!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>CLICK TO COPY ADDRESS</span>
                </>
              )}
            </button>
          </div>

          {/* Social Links Grid */}
          <div className="p-6 rounded-3xl bg-[#0e1017] border border-white/10 space-y-3">
            <h4 className="text-xs font-mono-tech uppercase tracking-widest text-[#8d94a5] pb-2">
              VERIFIED CHANNELS
            </h4>

            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-3.5 rounded-xl bg-[#08090d] hover:bg-[#161822] border border-white/5 hover:border-white/20 transition-all text-xs font-mono-tech text-white"
            >
              <div className="flex items-center gap-3">
                <GithubIcon className="w-4 h-4 text-[#8d94a5]" />
                <span>GITHUB REPOSITORIES</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-white/40" />
            </a>

            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-3.5 rounded-xl bg-[#08090d] hover:bg-[#161822] border border-white/5 hover:border-white/20 transition-all text-xs font-mono-tech text-white"
            >
              <div className="flex items-center gap-3">
                <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                <span>LINKEDIN NETWORK</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-white/40" />
            </a>

            <a
              href={PERSONAL_INFO.socials.hackerrank}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-3.5 rounded-xl bg-[#08090d] hover:bg-[#161822] border border-white/5 hover:border-white/20 transition-all text-xs font-mono-tech text-white"
            >
              <div className="flex items-center gap-3">
                <HackerRankIcon className="w-4 h-4 text-emerald-400" />
                <span>HACKERRANK PROFILE</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-white/40" />
            </a>
          </div>
        </div>

        {/* Right Column: Contact Message Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0e1017] border border-white/10 shadow-2xl">
            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4 font-mono-tech"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-white uppercase">
                  MESSAGE TRANSMITTED
                </h4>
                <p className="text-xs text-[#8d94a5] max-w-md mx-auto">
                  Thank you for reaching out! I will review your message and reply promptly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-5 py-2.5 rounded-full bg-[#161822] text-xs text-white border border-white/10 hover:border-white/30"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 font-mono-tech text-xs">
                    <label className="text-white/70 uppercase tracking-wider">YOUR NAME *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full bg-[#08090d] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-cyan-400 font-sans"
                    />
                  </div>

                  <div className="space-y-1.5 font-mono-tech text-xs">
                    <label className="text-white/70 uppercase tracking-wider">YOUR EMAIL *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full bg-[#08090d] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-cyan-400 font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 font-mono-tech text-xs">
                  <label className="text-white/70 uppercase tracking-wider">SUBJECT</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Full Stack Opportunity / Project Inquiry"
                    className="w-full bg-[#08090d] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-cyan-400 font-sans"
                  />
                </div>

                <div className="space-y-1.5 font-mono-tech text-xs">
                  <label className="text-white/70 uppercase tracking-wider">MESSAGE *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Shiyam, we are looking for a creative developer..."
                    className="w-full bg-[#08090d] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-cyan-400 font-sans resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-full bg-white text-black font-mono-tech font-bold text-xs uppercase tracking-wider hover:bg-cyan-400 transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  {loading ? (
                    <span>TRANSMITTING...</span>
                  ) : (
                    <>
                      <span>TRANSMIT MESSAGE</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
