import React, { useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { ProjectMockup } from './ProjectMockup';
import { X, CheckCircle2, Layers, Cpu, ExternalLink, Info } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (title: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-zinc-950 border border-zinc-800 rounded-lg shadow-2xl p-6 sm:p-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-white rounded-md bg-zinc-900 border border-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-12 pb-6 border-b border-zinc-900">
          <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400 mb-2">
            <span className="font-semibold text-white uppercase tracking-wider">{project.categoryLabel}</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>{project.projectType}</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span className="font-mono text-blue-400">
              {project.isClientProject ? 'Paid Client Project' : 'Portfolio Demonstration'}
            </span>
          </div>

          <h2 id="modal-project-title" className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {project.title}
          </h2>
          <p className="text-sm font-medium text-zinc-400 mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Mockup Preview Visual Frame */}
        <div className="my-6 rounded-lg border border-zinc-900 overflow-hidden bg-black">
          <ProjectMockup project={project} />
        </div>

        {/* Demonstration Disclaimer Note */}
        {project.demoNote && (
          <div className="mb-6 p-4 bg-zinc-900/50 border border-zinc-800 rounded-md flex items-start gap-3 text-xs text-zinc-300">
            <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-white">Project Scope Note: </span>
              {project.demoNote}
            </div>
          </div>
        )}

        {/* Overview & Core Purpose */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xs uppercase tracking-widest text-zinc-400 mb-3 font-semibold">
              System Overview
            </h3>
            <p className="text-base text-zinc-300 leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Key Features List */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-zinc-400 mb-4 font-semibold">
              Key Engineering Features & Capabilities
            </h3>
            <div className="space-y-2.5">
              {project.keyFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Stack (Unboxed text with separators) */}
          <div className="pt-4 border-t border-zinc-900">
            <h3 className="text-xs uppercase tracking-widest text-zinc-400 mb-3 font-semibold">
              Technologies & Infrastructure
            </h3>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs">
              {project.techStack.map((tech, idx) => (
                <span key={tech} className="flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-zinc-900 border border-zinc-800 rounded text-zinc-200 font-mono">
                    {tech}
                  </span>
                </span>
              ))}
            </div>
          </div>

          {/* Metrics or Outcomes */}
          {project.metricsOrOutcomes && (
            <div className="p-4 bg-black border border-zinc-900 rounded-md">
              <div className="text-xs uppercase tracking-widest text-zinc-400 mb-1 font-semibold">
                Outcome & Performance Metrics
              </div>
              <div className="text-sm font-medium text-white">
                {project.metricsOrOutcomes}
              </div>
            </div>
          )}
        </div>

        {/* Modal Actions */}
        <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-zinc-400">
            Engineered by <span className="text-white font-medium">LOGION / Subramanya V</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white bg-zinc-900 rounded-md transition-colors"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onInquire(project.title);
              }}
              className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-zinc-200 rounded-md transition-colors"
            >
              Inquire Similar System
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
