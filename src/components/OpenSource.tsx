import React from 'react';
import { OPEN_SOURCE_DATA } from '../data/portfolioData';
import { GitPullRequest, GitMerge, ExternalLink, Code2, BookOpen } from 'lucide-react';

export const OpenSource: React.FC = () => {
  const os = OPEN_SOURCE_DATA[0];

  return (
    <section id="opensource" className="py-24 px-6 bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-zinc-900">
          <div>
            <span className="text-xs uppercase tracking-widest text-zinc-400 block mb-3 font-semibold">
              05. Open Source Ecosystem
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Open-Source Contributions
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-zinc-400">
              Google Summer of Code 2026
            </span>
          </div>
        </div>

        {/* Featured Apache Beam GSoC Card */}
        <div className="p-8 sm:p-10 bg-zinc-950 border border-zinc-800/80 rounded-lg">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-zinc-900">
            <div>
              <div className="flex items-center gap-2.5 text-xs uppercase tracking-wider text-blue-400 font-semibold mb-2">
                <GitMerge className="w-4 h-4 text-blue-500" />
                <span>{os.program}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {os.organization} — {os.project}
              </h3>
              <p className="text-sm text-zinc-400 mt-2 max-w-2xl leading-relaxed">
                {os.summary}
              </p>
            </div>

            <div className="p-4 bg-black border border-zinc-900 rounded-md shrink-0 text-left md:text-right">
              <div className="text-2xl font-black text-white font-mono">{os.prsMerged}</div>
              <div className="text-xs text-zinc-400 mt-0.5">Apache Beam Repositories</div>
              <div className="text-xs font-mono text-zinc-400 mt-1">{os.period}</div>
            </div>
          </div>

          {/* Contributions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="p-6 bg-black border border-zinc-900 rounded-lg space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white">
                <Code2 className="w-4 h-4 text-blue-500" />
                <span>SDK Enhancements</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Authored and contributed core changes across both Java and Python SDK modules, focusing on developer ergonomics, typing inference accuracy, and cross-SDK consistency.
              </p>
            </div>

            <div className="p-6 bg-black border border-zinc-900 rounded-lg space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white">
                <BookOpen className="w-4 h-4 text-blue-500" />
                <span>Documentation & Code Examples</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Refined technical documentation, added production-ready pipeline examples, and improved developer onboarding for Apache Beam distributed data workflows.
              </p>
            </div>
          </div>

          {/* Detailed Contribution Highlights (From Resume) */}
          <div className="space-y-3 pt-2">
            <div className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-3">
              Contribution Details
            </div>
            {os.contributions.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                <GitPullRequest className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Technologies Applied */}
          <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">
              Ecosystem Technologies
            </div>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-400">
              {os.technologies.map((tech, idx) => (
                <span key={tech} className="flex items-center gap-2">
                  <span className="font-mono text-zinc-300 text-[11px]">{tech}</span>
                  {idx < os.technologies.length - 1 && (
                    <span aria-hidden="true" className="text-zinc-700">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
