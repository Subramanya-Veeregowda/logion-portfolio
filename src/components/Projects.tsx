import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Info } from 'lucide-react';

interface ProjectsProps {
  onSelectProjectForInquiry: (title: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProjectForInquiry }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'notion' | 'fullstack' | 'data'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  return (
    <section id="projects" className="py-24 px-6 bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-zinc-900">
          <div>
            <span className="text-xs uppercase tracking-widest text-zinc-400 block mb-3 font-semibold">
              03. Selected Works & Systems
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Featured Projects
            </h2>
          </div>

          {/* Interactive Filter Segmented Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-zinc-950 border border-zinc-800 rounded-lg">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-colors ${
                activeFilter === 'all'
                  ? 'bg-zinc-800 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              All Works ({PROJECTS.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('notion')}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-colors ${
                activeFilter === 'notion'
                  ? 'bg-zinc-800 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Notion Systems (4)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('fullstack')}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-colors ${
                activeFilter === 'fullstack'
                  ? 'bg-zinc-800 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Full-Stack (1)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('data')}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-colors ${
                activeFilter === 'data'
                  ? 'bg-zinc-800 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Data Engineering (1)
            </button>
          </div>
        </div>

        {/* Portfolio Demonstrations Disclaimer Strip */}
        <div className="mb-10 p-4 bg-zinc-950 border border-zinc-900 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-zinc-400">
          <div className="flex items-center gap-2.5">
            <Info className="w-4 h-4 text-blue-500 shrink-0" />
            <span>
              Transparent portfolio policy: Notion workspaces are curated portfolio demonstrations; software products and streaming pipelines represent production implementations from Subramanya V&apos;s engineering background.
            </span>
          </div>
          <span className="font-mono text-zinc-400 whitespace-nowrap">
            Showing {filteredProjects.length} of {PROJECTS.length}
          </span>
        </div>

        {/* Project Cards Grid (2 columns on large screen for generous card presence) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Modal for Deep Dive */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onInquire={(title) => onSelectProjectForInquiry(title)}
        />
      </div>
    </section>
  );
};
