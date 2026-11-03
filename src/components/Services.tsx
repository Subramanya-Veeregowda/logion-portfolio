import React from 'react';
import { SERVICES, Service } from '../data/portfolioData';
import { ArrowRight, Check } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 px-6 bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-zinc-900">
          <div>
            <span className="text-xs uppercase tracking-widest text-zinc-400 block mb-3 font-semibold">
              02. Capabilities & Offerings
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Services & Solutions
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
            Tailored digital infrastructure designed to eliminate operational drag, automate data flow, and provide crystal-clear visibility.
          </p>
        </div>

        {/* 6 Services Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service: Service) => (
            <div
              key={service.number}
              className="group p-8 bg-zinc-950 border border-zinc-800/80 rounded-lg hover:border-zinc-700 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header: Editorial Number & Category */}
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-zinc-900">
                  <span className="text-xs font-mono font-bold text-zinc-400">
                    {service.number}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-medium">
                    LOGION Standard
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-zinc-100 transition-colors mb-3">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                {/* Detailed Scope Items */}
                <div className="space-y-2 mb-8 pt-4 border-t border-zinc-900/80">
                  <div className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                    Scope of Work
                  </div>
                  {service.detailedScope.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300 leading-relaxed">
                      <Check className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Deliverables & CTA */}
              <div className="pt-6 border-t border-zinc-900">
                <div className="text-xs text-zinc-400 mb-4">
                  <span className="text-zinc-400 font-medium">Ideal for: </span>
                  {service.idealFor}
                </div>
                <button
                  type="button"
                  onClick={() => onSelectService(service.title)}
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-zinc-300 bg-zinc-900 border border-zinc-800 rounded hover:bg-white hover:text-black hover:border-white transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <span>Inquire for Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
