/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { OpenSource } from './components/OpenSource';
import { Skills } from './components/Skills';
import { WorkProcess } from './components/WorkProcess';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState<string>('Notion Workspace Development');

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForInquiry(serviceTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProjectForInquiry = (projectTitle: string) => {
    setSelectedServiceForInquiry(`Inquiry based on ${projectTitle}`);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar onOpenContact={() => handleSelectService('General Inquiry')} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section B: Hero */}
        <Hero />

        {/* Section C: About the Founder */}
        <About />

        {/* Section D: Services */}
        <Services onSelectService={handleSelectService} />

        {/* Section E: Featured Projects */}
        <Projects onSelectProjectForInquiry={handleSelectProjectForInquiry} />

        {/* Section F: Experience (CGI Apprentice Application Support Engineer) */}
        <Experience />

        {/* Section G: Open Source (Google Summer of Code 2026 - Apache Beam) */}
        <OpenSource />

        {/* Section H: Skills & Technologies */}
        <Skills />

        {/* Section I: Work Process */}
        <WorkProcess />

        {/* Section J: Contact */}
        <Contact preselectedService={selectedServiceForInquiry} />
      </main>

      {/* Monochrome Footer */}
      <Footer />
    </div>
  );
}
