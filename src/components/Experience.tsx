import React from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { Briefcase, Terminal, Database, Server, FileCheck, Layers, Cpu } from 'lucide-react';

export const Experience: React.FC = () => {
  const exp = EXPERIENCE_DATA[0];

  return (
    <section id="experience" className="py-24 px-6 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-zinc-900">
          <div>
            <span className="text-xs uppercase tracking-widest text-zinc-400 block mb-3 font-semibold">
              04. Work History & Reliability
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Professional Experience
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
            Enterprise application reliability engineering, Linux system operations, and database diagnostics in high-availability environments.
          </p>
        </div>

        {/* Experience Showcase Card */}
        <div className="p-8 sm:p-10 bg-black border border-zinc-800/80 rounded-lg">
          {/* Header row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-zinc-900">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {exp.company}
                </span>
                <span className="text-zinc-600">·</span>
                <span className="text-sm sm:text-base font-semibold text-zinc-300">
                  {exp.role}
                </span>
              </div>
              <div className="text-xs uppercase tracking-wider text-zinc-400 mt-1">
                {exp.department}
              </div>
            </div>

            <div className="flex flex-col md:items-end text-xs font-mono text-zinc-400">
              <span className="text-white font-medium text-sm">{exp.period}</span>
              <span className="mt-0.5">{exp.location}</span>
            </div>
          </div>

          {/* Operational Pillars Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
            <div className="p-4 bg-zinc-950 border border-zinc-900 rounded">
              <div className="flex items-center gap-2 text-xs font-semibold text-white uppercase tracking-wider mb-1">
                <Terminal className="w-3.5 h-3.5 text-blue-500" />
                <span>Linux Operations</span>
              </div>
              <p className="text-xs text-zinc-400">
                Process monitoring, disk utilization audits, permissions, and service lifecycle management.
              </p>
            </div>

            <div className="p-4 bg-zinc-950 border border-zinc-900 rounded">
              <div className="flex items-center gap-2 text-xs font-semibold text-white uppercase tracking-wider mb-1">
                <Database className="w-3.5 h-3.5 text-blue-500" />
                <span>Oracle DB Diagnostics</span>
              </div>
              <p className="text-xs text-zinc-400">
                SQL-based investigation, connection pool verification, and database error pattern analysis.
              </p>
            </div>

            <div className="p-4 bg-zinc-950 border border-zinc-900 rounded">
              <div className="flex items-center gap-2 text-xs font-semibold text-white uppercase tracking-wider mb-1">
                <Server className="w-3.5 h-3.5 text-blue-500" />
                <span>Capacity Scaling</span>
              </div>
              <p className="text-xs text-zinc-400">
                Vertical scaling under high-load conditions, performance validation, and incident resolution runbooks.
              </p>
            </div>
          </div>

          {/* Detailed Responsibilities (Accurately from Resume) */}
          <div className="space-y-4 pt-4">
            <div className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">
              Key Engineering Responsibilities & Impact (From Resume)
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {exp.responsibilities.map((resp, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-zinc-950 border border-zinc-900/90 rounded-md hover:border-zinc-800 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-mono text-zinc-400 font-bold shrink-0 mt-0.5">
                      0{idx + 1}.
                    </span>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {resp}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Environment Tags */}
          <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">
              Technical Stack & Domain
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-400">
              {exp.technicalEnvironment.map((tech, idx) => (
                <span key={tech} className="flex items-center gap-2">
                  <span className="font-mono text-zinc-300 text-[11px]">{tech}</span>
                  {idx < exp.technicalEnvironment.length - 1 && (
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
