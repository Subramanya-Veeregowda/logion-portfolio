import React from 'react';
import { Project } from '../data/portfolioData';
import { 
  LayoutDashboard, 
  Kanban, 
  Calendar, 
  Link as LinkIcon, 
  Cpu, 
  CheckCircle, 
  Clock, 
  DollarSign, 
  ExternalLink,
  ShieldAlert,
  Activity,
  Layers,
  ArrowRight
} from 'lucide-react';

interface ProjectMockupProps {
  project: Project;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ project }) => {
  switch (project.mockupType) {
    case 'notion-dashboard':
      return (
        <div className="w-full h-full min-h-[260px] bg-zinc-950 p-4 font-mono text-xs flex flex-col justify-between border-b border-zinc-800/80 select-none">
          {/* Notion Header Simulator */}
          <div className="flex items-center justify-between pb-3 border-b border-zinc-900 text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
              <span className="ml-2 text-zinc-300 font-sans font-medium text-[11px]">LOGION HQ // Workspace</span>
            </div>
            <span className="text-[10px] text-zinc-400">Notion OS v2.4</span>
          </div>

          {/* Body: Notion Relational Blocks */}
          <div className="grid grid-cols-3 gap-2 my-3">
            <div className="p-2.5 bg-black rounded border border-zinc-900">
              <div className="text-[10px] uppercase text-zinc-400 mb-1">Active Deals</div>
              <div className="text-base font-bold text-white font-sans">$14,200</div>
              <div className="text-[10px] text-zinc-400 mt-1">4 In Delivery</div>
            </div>
            <div className="p-2.5 bg-black rounded border border-zinc-900">
              <div className="text-[10px] uppercase text-zinc-400 mb-1">Daily Focus</div>
              <div className="text-base font-bold text-white font-sans">6 / 8 Done</div>
              <div className="text-[10px] text-zinc-400 mt-1">High Velocity</div>
            </div>
            <div className="p-2.5 bg-black rounded border border-zinc-900">
              <div className="text-[10px] uppercase text-zinc-400 mb-1">Content Q3</div>
              <div className="text-base font-bold text-white font-sans">18 Articles</div>
              <div className="text-[10px] text-zinc-400 mt-1">Scheduled</div>
            </div>
          </div>

          {/* Mini Table Rows */}
          <div className="bg-black rounded border border-zinc-900 p-2 space-y-1.5">
            <div className="flex justify-between items-center text-[10px] text-zinc-400 pb-1 border-b border-zinc-900">
              <span>PROJECT DELIVERABLE</span>
              <span>MILESTONE</span>
              <span>STATUS</span>
            </div>
            <div className="flex justify-between items-center text-[11px] text-zinc-300">
              <span className="text-white truncate max-w-[120px]">E-Commerce Workspace</span>
              <span className="text-zinc-400">Phase 3</span>
              <span className="text-blue-400 text-[10px]">In Progress</span>
            </div>
            <div className="flex justify-between items-center text-[11px] text-zinc-300">
              <span className="text-white truncate max-w-[120px]">Marketing CRM Pipeline</span>
              <span className="text-zinc-400">Final Audit</span>
              <span className="text-zinc-400 text-[10px]">Completed</span>
            </div>
          </div>

          <div className="text-right text-[10px] text-zinc-400 pt-2">
            Relational DBs · Rollups · Auto Views
          </div>
        </div>
      );

    case 'notion-crm':
      return (
        <div className="w-full h-full min-h-[260px] bg-zinc-950 p-4 font-mono text-xs flex flex-col justify-between border-b border-zinc-800/80 select-none">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-900 text-zinc-400">
            <div className="flex items-center gap-2">
              <Kanban className="w-3.5 h-3.5 text-zinc-400" />
              <span className="font-sans font-medium text-[11px] text-zinc-300">LOGION Client CRM · Pipeline</span>
            </div>
            <span className="text-[10px] text-zinc-400">Kanban DB</span>
          </div>

          {/* Kanban Columns */}
          <div className="grid grid-cols-3 gap-2 my-2.5">
            <div className="p-2 bg-black rounded border border-zinc-900 space-y-1.5">
              <div className="text-[10px] text-zinc-400 font-semibold uppercase">Qualified (2)</div>
              <div className="p-1.5 bg-zinc-950 rounded border border-zinc-850 text-[10px]">
                <div className="text-zinc-200 font-medium">Fintech Retainer</div>
                <div className="text-zinc-400 text-[9px] mt-0.5">$4,500 · High Intent</div>
              </div>
            </div>
            <div className="p-2 bg-black rounded border border-zinc-900 space-y-1.5">
              <div className="text-[10px] text-blue-400 font-semibold uppercase">Proposal (1)</div>
              <div className="p-1.5 bg-zinc-950 rounded border border-zinc-850 text-[10px]">
                <div className="text-zinc-200 font-medium">SaaS Operations</div>
                <div className="text-zinc-400 text-[9px] mt-0.5">$6,200 · Reviewing</div>
              </div>
            </div>
            <div className="p-2 bg-black rounded border border-zinc-900 space-y-1.5">
              <div className="text-[10px] text-zinc-300 font-semibold uppercase">Closed Won (3)</div>
              <div className="p-1.5 bg-zinc-950 rounded border border-zinc-850 text-[10px]">
                <div className="text-zinc-200 font-medium">Agency System</div>
                <div className="text-zinc-400 text-[9px] mt-0.5">$5,800 · Onboarded</div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center text-[10px] text-zinc-400 pt-2 border-t border-zinc-900">
            <span>Last Interaction: 2 hrs ago</span>
            <span className="text-blue-400">Next Step: Follow-up</span>
          </div>
        </div>
      );

    case 'notion-kanban':
      return (
        <div className="w-full h-full min-h-[260px] bg-zinc-950 p-4 font-mono text-xs flex flex-col justify-between border-b border-zinc-800/80 select-none">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-900 text-zinc-400">
            <div className="flex items-center gap-2">
              <LayoutDashboard className="w-3.5 h-3.5 text-zinc-400" />
              <span className="font-sans font-medium text-[11px] text-zinc-300">Project Operations Hub</span>
            </div>
            <span className="text-[10px] text-zinc-400">Sprint 14</span>
          </div>

          {/* Sprint Pacing Progress */}
          <div className="my-2 p-2.5 bg-black rounded border border-zinc-900">
            <div className="flex justify-between text-[10px] mb-1.5 text-zinc-400">
              <span>Sprint Budget Burn-down</span>
              <span className="text-zinc-200">72% Completed</span>
            </div>
            <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full" style={{ width: '72%' }} />
            </div>
          </div>

          {/* Tasks List */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between p-2 bg-black rounded border border-zinc-900 text-[11px]">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-blue-500" />
                <span className="text-zinc-200">Database Schema Migration</span>
              </div>
              <span className="text-[10px] text-zinc-500">2d ago</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-black rounded border border-zinc-900 text-[11px]">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-zinc-400" />
                <span className="text-zinc-200">Client Review & Verification</span>
              </div>
              <span className="text-[10px] text-blue-400">Due Today</span>
            </div>
          </div>

          <div className="text-[10px] text-zinc-400 pt-2 flex justify-between">
            <span>Critical Path: 0 Blockers</span>
            <span>Delivery: On Schedule</span>
          </div>
        </div>
      );

    case 'notion-studio':
      return (
        <div className="w-full h-full min-h-[260px] bg-zinc-950 p-4 font-mono text-xs flex flex-col justify-between border-b border-zinc-800/80 select-none">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-900 text-zinc-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-zinc-400" />
              <span className="font-sans font-medium text-[11px] text-zinc-300">Content Studio Calendar</span>
            </div>
            <span className="text-[10px] text-zinc-400">Editorial Matrix</span>
          </div>

          {/* Calendar row simulator */}
          <div className="grid grid-cols-4 gap-1.5 my-2.5 text-[10px]">
            <div className="p-2 bg-black rounded border border-zinc-900">
              <div className="text-zinc-400 mb-1">MON</div>
              <div className="p-1 bg-zinc-900 rounded text-[9px] text-zinc-300">LinkedIn Post</div>
              <div className="text-[8px] text-zinc-400 mt-1">Live</div>
            </div>
            <div className="p-2 bg-black rounded border border-zinc-900">
              <div className="text-zinc-400 mb-1">WED</div>
              <div className="p-1 bg-zinc-900 rounded text-[9px] text-blue-400">Deep Dive</div>
              <div className="text-[8px] text-zinc-400 mt-1">Drafting</div>
            </div>
            <div className="p-2 bg-black rounded border border-zinc-900">
              <div className="text-zinc-400 mb-1">FRI</div>
              <div className="p-1 bg-zinc-900 rounded text-[9px] text-zinc-300">Case Study</div>
              <div className="text-[8px] text-zinc-400 mt-1">Review</div>
            </div>
            <div className="p-2 bg-black rounded border border-zinc-900">
              <div className="text-zinc-400 mb-1">SUN</div>
              <div className="p-1 bg-zinc-900 rounded text-[9px] text-zinc-400">Newsletter</div>
              <div className="text-[8px] text-zinc-400 mt-1">Queued</div>
            </div>
          </div>

          <div className="p-2 bg-black rounded border border-zinc-900 flex justify-between items-center text-[10px]">
            <span className="text-zinc-400">Asset Library: 34 Visuals Ready</span>
            <span className="text-white font-sans">Cadence: 4x / week</span>
          </div>

          <div className="text-[10px] text-zinc-400 pt-2">
            Omnichannel Publishing · Ideation Pipeline
          </div>
        </div>
      );

    case 'linkforge-app':
      return (
        <div className="w-full h-full min-h-[260px] bg-zinc-950 p-4 font-mono text-xs flex flex-col justify-between border-b border-zinc-800/80 select-none">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-900 text-zinc-400">
            <div className="flex items-center gap-2">
              <LinkIcon className="w-3.5 h-3.5 text-blue-500" />
              <span className="font-sans font-medium text-[11px] text-zinc-200">LinkForge Console</span>
            </div>
            <span className="text-[10px] text-zinc-400 font-mono">Redis Cache: 2.1ms</span>
          </div>

          {/* URL Input Bar */}
          <div className="my-2 p-2 bg-black rounded border border-zinc-800 flex items-center justify-between">
            <span className="text-zinc-400 text-[10px] truncate max-w-[180px]">
              https://enterprise.internal/reports/annual-2026
            </span>
            <span className="px-2 py-0.5 bg-blue-600 text-white text-[9px] rounded font-sans font-medium">
              Shortened
            </span>
          </div>

          {/* Generated URL & QR preview */}
          <div className="p-2 bg-black rounded border border-zinc-900 flex items-center justify-between">
            <div>
              <div className="text-[10px] text-blue-400 font-bold">linkforge.io/s/enterprise-q3</div>
              <div className="text-[9px] text-zinc-400 mt-0.5">Password protected · Self-destruct 48h</div>
            </div>
            <div className="w-8 h-8 bg-zinc-900 border border-zinc-800 rounded flex items-center justify-center text-[9px] text-zinc-400">
              QR
            </div>
          </div>

          {/* Analytics stat */}
          <div className="flex justify-between items-center text-[10px] text-zinc-400 pt-2">
            <span>Redirects: 4,820</span>
            <span className="text-zinc-300">Kafka Stream: Active</span>
          </div>
        </div>
      );

    case 'spark-pipeline':
      return (
        <div className="w-full h-full min-h-[260px] bg-zinc-950 p-4 font-mono text-xs flex flex-col justify-between border-b border-zinc-800/80 select-none">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-900 text-zinc-400">
            <div className="flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-blue-500" />
              <span className="font-sans font-medium text-[11px] text-zinc-200">Kafka → Spark Streaming</span>
            </div>
            <span className="text-[10px] text-zinc-400">Cluster 3 Nodes</span>
          </div>

          {/* Pipeline flow diagram blocks */}
          <div className="grid grid-cols-3 gap-1.5 my-2.5 text-center text-[10px]">
            <div className="p-2 bg-black rounded border border-zinc-900">
              <div className="text-zinc-400 text-[9px]">Python Producer</div>
              <div className="text-white font-bold mt-1">1,200 msg/s</div>
            </div>
            <div className="p-2 bg-black rounded border border-zinc-900">
              <div className="text-blue-400 text-[9px]">Spark Streaming</div>
              <div className="text-white font-bold mt-1">Micro-batch 500ms</div>
            </div>
            <div className="p-2 bg-black rounded border border-zinc-900">
              <div className="text-zinc-400 text-[9px]">Fault Tolerance</div>
              <div className="text-white font-bold mt-1">Checkpoints OK</div>
            </div>
          </div>

          {/* Terminal log snippet */}
          <div className="p-2 bg-black rounded border border-zinc-900 text-[9px] text-zinc-400 space-y-0.5">
            <div>[INFO] Batch 482 processed: 600 records in 142ms</div>
            <div className="text-blue-400">[STREAM] Consumer offset committed to Kafka partition 2</div>
          </div>

          <div className="flex justify-between items-center text-[10px] text-zinc-400 pt-2">
            <span>Cluster Status: Healthy</span>
            <span className="text-zinc-400">0 Data Loss</span>
          </div>
        </div>
      );

    default:
      return null;
  }
};
