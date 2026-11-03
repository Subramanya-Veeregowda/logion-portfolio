import React from 'react';
import { BRAND } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 px-6 bg-black border-t border-zinc-900 text-zinc-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-zinc-900">
        {/* Brand identity & Tagline */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <img
              src={BRAND.logoSrc}
              alt="LOGION"
              className="h-7 w-auto object-contain rounded-sm brightness-100"
            />
            <span className="text-xs uppercase tracking-widest text-zinc-300 font-semibold">
              · {BRAND.founder}
            </span>
          </div>
          <p className="text-xs tracking-wider uppercase text-zinc-400 font-medium">
            {BRAND.tagline}
          </p>
        </div>

        {/* Navigation jump links */}
        <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-wider text-zinc-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#opensource" className="hover:text-white transition-colors">Open Source</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Back to top button */}
        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider text-zinc-400 hover:text-white bg-zinc-950 border border-zinc-900 rounded hover:border-zinc-800 transition-colors"
          aria-label="Back to top of page"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Bottom Sub-row */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
        <div>
          © {new Date().getFullYear()} LOGION. All rights reserved. Designed & Engineered by Subramanya V.
        </div>
        <div className="flex items-center gap-4 text-[11px] font-mono">
          <span>Bengaluru, India</span>
          <span aria-hidden="true" className="text-zinc-600">·</span>
          <span>Minimalist Monochrome System</span>
        </div>
      </div>
    </footer>
  );
};
