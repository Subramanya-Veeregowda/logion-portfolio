import React, { useState } from 'react';
import { ABOUT_FOUNDER, BRAND } from '../data/portfolioData';
import { Download, FileText, CheckCircle2, Award, GraduationCap, Globe } from 'lucide-react';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bio' | 'education' | 'certifications'>('bio');

  return (
    <section id="about" className="py-24 px-6 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-zinc-900">
          <div>
            <span className="text-xs uppercase tracking-widest text-zinc-400 block mb-3 font-semibold">
              01. Background & Profile
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              About the Founder
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={BRAND.resumeSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-zinc-900 border border-zinc-800 rounded-md hover:bg-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-blue-500" />
              <span>View Official Resume</span>
            </a>
            <a
              href={BRAND.resumeSrc}
              download="Subramanya_V_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-white rounded-md hover:bg-zinc-200 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* 2-Column Split: Identity Profile & Detailed Resume Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Identity, Positioning & Philosophy */}
          <div className="lg:col-span-5 space-y-8">
            {/* Visual Founder Branding Block */}
            <div className="p-8 bg-black border border-zinc-800/80 rounded-lg">
              <div className="flex items-center justify-between pb-6 border-b border-zinc-900">
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {ABOUT_FOUNDER.name}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-zinc-400 mt-1">
                    Founder of LOGION
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-zinc-400 font-mono">Bengaluru, IN</span>
                </div>
              </div>

              {/* Verified Positioning Highlights */}
              <div className="py-6 space-y-2.5 border-b border-zinc-900">
                <div className="text-xs uppercase tracking-widest text-zinc-400 mb-3 font-semibold">
                  Professional Positioning
                </div>
                {ABOUT_FOUNDER.positioning.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Languages Spoken (From Resume) */}
              <div className="pt-6">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-400 mb-3 font-semibold">
                  <Globe className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Languages</span>
                </div>
                <div className="space-y-1.5 text-xs text-zinc-300">
                  {ABOUT_FOUNDER.languages.map((lang) => (
                    <div key={lang.language} className="flex justify-between items-center py-1">
                      <span className="font-medium text-white">{lang.language}</span>
                      <span className="text-zinc-400">{lang.proficiency}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Core Working Philosophy Quote */}
            <div className="p-8 bg-zinc-900/40 border border-zinc-800/60 rounded-lg">
              <p className="text-sm text-zinc-300 leading-relaxed italic">
                &ldquo;True efficiency is not about adding more tools — it is about engineering seamless systems that eliminate cognitive overload and let people think beyond sanity.&rdquo;
              </p>
              <div className="mt-4 text-xs tracking-wider uppercase text-zinc-400 font-medium">
                — Subramanya V, Founder
              </div>
            </div>
          </div>

          {/* Right Column: Tabbed Detailed Credentials from Resume */}
          <div className="lg:col-span-7">
            {/* Functional Tab Segmented Bar */}
            <div className="flex items-center gap-2 p-1 bg-black border border-zinc-800 rounded-lg mb-8 max-w-fit">
              <button
                type="button"
                onClick={() => setActiveTab('bio')}
                className={`px-4 py-2 text-xs font-medium uppercase tracking-wider rounded-md transition-colors ${
                  activeTab === 'bio'
                    ? 'bg-zinc-800 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Executive Bio
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('education')}
                className={`px-4 py-2 text-xs font-medium uppercase tracking-wider rounded-md transition-colors ${
                  activeTab === 'education'
                    ? 'bg-zinc-800 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Education History
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('certifications')}
                className={`px-4 py-2 text-xs font-medium uppercase tracking-wider rounded-md transition-colors ${
                  activeTab === 'certifications'
                    ? 'bg-zinc-800 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Certifications
              </button>
            </div>

            {/* Tab 1: Executive Bio */}
            {activeTab === 'bio' && (
              <div className="space-y-6">
                <div className="p-8 bg-black border border-zinc-800/80 rounded-lg">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Engineering Clarity From Operational Chaos
                  </h4>
                  <p className="text-base text-zinc-300 leading-relaxed mb-6">
                    {ABOUT_FOUNDER.bio}
                  </p>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    With an engineering background from Dr. Ambedkar Institute of Technology and hands-on production application support experience at CGI, Subramanya applies strict system reliability principles to productivity architecture, workspace design, and automated software pipelines.
                  </p>
                </div>

                {/* Soft Skills & Execution Capabilities */}
                <div className="p-8 bg-black border border-zinc-800/80 rounded-lg">
                  <h4 className="text-xs uppercase tracking-widest text-zinc-400 mb-4 font-semibold">
                    Core Engineering Attributes (From Resume)
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {ABOUT_FOUNDER.softSkills.map((skill) => (
                      <div
                        key={skill}
                        className="p-3 bg-zinc-950 border border-zinc-900 rounded text-xs text-zinc-200 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Education History (Accurately from resume) */}
            {activeTab === 'education' && (
              <div className="space-y-4">
                {ABOUT_FOUNDER.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-7 bg-black border border-zinc-800/80 rounded-lg hover:border-zinc-700 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-blue-500 shrink-0" />
                        <h4 className="text-base font-semibold text-white">{edu.degree}</h4>
                      </div>
                      <span className="text-xs font-mono text-zinc-400 shrink-0">{edu.period}</span>
                    </div>
                    <div className="text-sm text-zinc-400 mb-3">{edu.institution}</div>
                    <div className="flex items-center justify-between text-xs pt-3 border-t border-zinc-900">
                      <span className="text-zinc-500">{edu.details}</span>
                      <span className="font-semibold text-white font-mono">{edu.score}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 3: Certifications & Training (From resume) */}
            {activeTab === 'certifications' && (
              <div className="space-y-4">
                {ABOUT_FOUNDER.certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-7 bg-black border border-zinc-800/80 rounded-lg hover:border-zinc-700 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-blue-500 shrink-0" />
                        <h4 className="text-base font-semibold text-white">{cert.title}</h4>
                      </div>
                      <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                        {cert.status}
                      </span>
                    </div>
                    <div className="text-sm text-zinc-400 mb-4">{cert.provider}</div>
                    <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-zinc-300">
                      {cert.skills.map((skill, sIdx) => (
                        <span key={skill} className="flex items-center gap-1.5">
                          <span className="text-zinc-300">{skill}</span>
                          {sIdx < cert.skills.length - 1 && (
                            <span aria-hidden="true" className="text-zinc-700">·</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
