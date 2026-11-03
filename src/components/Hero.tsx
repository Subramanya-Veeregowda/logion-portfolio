import React from 'react';
import { BRAND, ABOUT_FOUNDER } from '../data/portfolioData';
import { ArrowDown, ArrowUpRight, FileText, ChevronRight } from 'lucide-react';

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-12 px-6 overflow-hidden bg-black">
      {/* Subtle background hairline grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, #27272a 1px, transparent 1px), linear-gradient(to bottom, #27272a 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, transparent 80%)',
        }}
      />

      {/* Main Hero Container */}
      <div className="relative max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">
        {/* Editorial Sub-Header / Founder Tag */}
        <div className="mb-6 flex flex-wrap items-center gap-3 text-xs tracking-wider uppercase text-zinc-400">
          <span className="text-white font-semibold">LOGION</span>
          <span aria-hidden="true" className="text-zinc-600">·</span>
          <span>Founded by {BRAND.founder}</span>
          <span aria-hidden="true" className="text-zinc-600">·</span>
          <span className="text-zinc-400">Bengaluru, India</span>
        </div>

        {/* Main Headline */}
        <div className="max-w-5xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white uppercase leading-[1.02] text-balance">
            {BRAND.headline}
          </h1>

          {/* Supporting Text */}
          <p className="mt-8 text-xl sm:text-2xl text-zinc-300 font-light max-w-3xl leading-relaxed">
            {BRAND.subheadline}
          </p>

          {/* Founder Role Positioning (Unboxed metadata with typographic separators) */}
          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-zinc-400 font-normal">
            <span>Engineer</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Digital Solutions Enthusiast</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Notion Workspace Designer</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Full-Stack Developer</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Open-Source Contributor</span>
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-black bg-white rounded-md hover:bg-zinc-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 shadow-md group"
            >
              <span>Explore Projects</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white bg-zinc-900 border border-zinc-800 rounded-md hover:bg-zinc-800 hover:border-zinc-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <span>Contact Me</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-400" />
            </a>

            <a
              href={BRAND.resumeSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              title="Open Official Subramanya V Resume PDF"
            >
              <FileText className="w-4 h-4 text-blue-500" />
              <span>Resume (PDF)</span>
            </a>
          </div>
        </div>
      </div>

      {/* Proof Adjacency Strip & Scroll Indicator */}
      <div className="relative max-w-7xl mx-auto w-full pt-12 border-t border-zinc-900/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        {/* Quantitative Rigor Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 text-left">
          <div>
            <div className="text-xl sm:text-2xl font-bold text-white tabular-nums">GSoC 2026</div>
            <div className="text-xs text-zinc-500 mt-0.5">Apache Beam Contributor</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold text-white tabular-nums">CGI L2</div>
            <div className="text-xs text-zinc-500 mt-0.5">Application Support Engineer</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold text-white tabular-nums">6 Systems</div>
            <div className="text-xs text-zinc-500 mt-0.5">Notion, Full-Stack & Streaming</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold text-white tabular-nums">BE · EE</div>
            <div className="text-xs text-zinc-500 mt-0.5">Dr. AIT Bengaluru (7.0 CGPA)</div>
          </div>
        </div>

        {/* Minimal Scroll Indicator */}
        <a
          href="#about"
          className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 hover:text-zinc-300 transition-colors shrink-0"
          aria-label="Scroll to About section"
        >
          <span>Scroll</span>
          <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-1 text-zinc-400" />
        </a>
      </div>
    </section>
  );
};
