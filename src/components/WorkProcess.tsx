import React, { useState } from 'react';
import { WORK_PROCESS } from '../data/portfolioData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const WorkProcess: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = WORK_PROCESS[activeStepIndex];

  return (
    <section id="process" className="py-24 px-6 bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-zinc-900">
          <div>
            <span className="text-xs uppercase tracking-widest text-zinc-400 block mb-3 font-semibold">
              07. Methodical Execution
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Work Process
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span>Discover</span>
            <span className="text-zinc-600">→</span>
            <span>Plan</span>
            <span className="text-zinc-600">→</span>
            <span>Design</span>
            <span className="text-zinc-600">→</span>
            <span>Build</span>
            <span className="text-zinc-600">→</span>
            <span className="text-white">Deliver</span>
          </div>
        </div>

        {/* 5-Step Process Bar (Interactive Tabs) */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
          {WORK_PROCESS.map((step, idx) => (
            <button
              key={step.step}
              type="button"
              onClick={() => setActiveStepIndex(idx)}
              className={`p-5 rounded-lg text-left transition-all duration-150 border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 ${
                activeStepIndex === idx
                  ? 'bg-zinc-900 border-zinc-700 text-white shadow-md'
                  : 'bg-zinc-950 border-zinc-900 text-zinc-400 hover:text-zinc-200 hover:border-zinc-800'
              }`}
            >
              <div className="text-xs font-mono text-blue-500 mb-1">{step.step}</div>
              <div className="text-base font-bold tracking-tight text-white">{step.phase}</div>
              <div className="text-[11px] text-zinc-400 mt-1 truncate">{step.tagline}</div>
            </button>
          ))}
        </div>

        {/* Selected Step Deep Dive Spotlight Card */}
        <div className="p-8 sm:p-10 bg-zinc-950 border border-zinc-800/80 rounded-lg">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
            <div className="max-w-2xl space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-black font-mono text-white">{activeStep.step}.</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {activeStep.phase} — {activeStep.tagline}
                </h3>
              </div>
              <p className="text-base text-zinc-300 leading-relaxed pt-2">
                {activeStep.description}
              </p>
            </div>

            {/* Deliverable Box */}
            <div className="p-6 bg-black border border-zinc-900 rounded-md shrink-0 md:w-80">
              <div className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                Phase Deliverable
              </div>
              <div className="flex items-start gap-2.5 text-sm text-white font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>{activeStep.deliverable}</span>
              </div>
            </div>
          </div>

          {/* Stepping controls */}
          <div className="mt-8 pt-6 border-t border-zinc-900 flex justify-between items-center text-xs">
            <button
              type="button"
              disabled={activeStepIndex === 0}
              onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
              className="text-zinc-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none uppercase tracking-wider"
            >
              ← Previous Phase
            </button>
            <span className="font-mono text-zinc-400">
              Phase {activeStepIndex + 1} of {WORK_PROCESS.length}
            </span>
            <button
              type="button"
              disabled={activeStepIndex === WORK_PROCESS.length - 1}
              onClick={() => setActiveStepIndex((prev) => Math.min(WORK_PROCESS.length - 1, prev + 1))}
              className="text-zinc-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none uppercase tracking-wider flex items-center gap-1"
            >
              <span>Next Phase</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
