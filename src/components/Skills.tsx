import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code, Server, Database, Activity, Wrench, Layers } from 'lucide-react';

export const Skills: React.FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0: return <Code className="w-4 h-4 text-blue-500" />;
      case 1: return <Server className="w-4 h-4 text-blue-500" />;
      case 2: return <Database className="w-4 h-4 text-blue-500" />;
      case 3: return <Activity className="w-4 h-4 text-blue-500" />;
      case 4: return <Wrench className="w-4 h-4 text-blue-500" />;
      default: return <Layers className="w-4 h-4 text-blue-500" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-6 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-zinc-900">
          <div>
            <span className="text-xs uppercase tracking-widest text-zinc-400 block mb-3 font-semibold">
              06. Technical Arsenal
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Skills & Technologies
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
            Battle-tested frameworks, database systems, and streaming technologies utilized across enterprise production and custom client workflows.
          </p>
        </div>

        {/* 6 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.name}
              className="p-7 bg-black border border-zinc-850 rounded-lg hover:border-zinc-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 pb-4 mb-5 border-b border-zinc-900">
                  {getCategoryIcon(idx)}
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                    {cat.name}
                  </h3>
                </div>

                {/* Clean unboxed skill list */}
                <div className="space-y-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center justify-between text-xs py-1.5 px-2.5 rounded bg-zinc-950/60 border border-zinc-900 hover:border-zinc-800 transition-colors"
                    >
                      <span className="text-zinc-200 font-medium">{skill}</span>
                      <span className="text-[10px] text-zinc-400 font-mono">Verified</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-zinc-900/60 text-[11px] text-zinc-400 font-mono text-right">
                {cat.skills.length} Technologies
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
