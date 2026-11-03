import React from 'react';
import { Project } from '../data/portfolioData';
import { ProjectMockup } from './ProjectMockup';
import { ArrowUpRight, Layers } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(project)}
      className="group cursor-pointer bg-zinc-950 border border-zinc-850 rounded-lg overflow-hidden hover:border-zinc-700 transition-all duration-200 flex flex-col justify-between"
    >
      {/* Top Visual Screen Placeholder / High-Fidelity Mockup */}
      <div className="relative overflow-hidden bg-black aspect-[16/10] border-b border-zinc-900">
        <ProjectMockup project={project} />

        {/* Hover inspect overlay badge */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-white rounded shadow-lg">
            <span>Explore Architecture</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata Row: Project Type & Demonstration Tag (Clean unboxed text) */}
          <div className="flex items-center justify-between text-xs mb-3 text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="font-medium text-white">{project.categoryLabel}</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-zinc-400">{project.projectType}</span>
            </div>
            {project.isClientProject ? (
              <span className="text-zinc-400 text-[11px] font-mono">Client Contract</span>
            ) : (
              <span className="text-zinc-400 text-[11px] font-mono">Portfolio Demo</span>
            )}
          </div>

          {/* Project Title & Subtitle */}
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors tracking-tight">
              {project.title}
            </h3>
            <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors shrink-0 mt-1" />
          </div>

          <p className="text-xs uppercase tracking-wider text-zinc-400 font-medium mb-4">
            {project.subtitle}
          </p>

          <p className="text-sm text-zinc-400 leading-relaxed mb-6 line-clamp-3">
            {project.overview}
          </p>
        </div>

        {/* Tech Stack (Unboxed text with typographic separators) */}
        <div className="pt-4 border-t border-zinc-900">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-400">
            {project.techStack.map((tech, idx) => (
              <span key={tech} className="flex items-center gap-1.5">
                <span className="text-zinc-300 font-mono text-[11px]">{tech}</span>
                {idx < project.techStack.length - 1 && (
                  <span aria-hidden="true" className="text-zinc-700">/</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
