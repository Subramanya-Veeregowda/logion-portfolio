import React, { useState } from 'react';
import { BRAND, SERVICES } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Send, 
  MessageSquare,
  Linkedin,
  Github,
  Globe
} from 'lucide-react';

interface ContactProps {
  preselectedService?: string;
}

export const Contact: React.FC<ContactProps> = ({ preselectedService }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: preselectedService || 'Notion Workspace Development',
    timeline: 'Within 2-4 weeks',
    message: '',
  });

  // Keep service synced if user clicks "Inquire" on a service card
  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(BRAND.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(BRAND.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Build mailto query
    const subject = encodeURIComponent(`[LOGION Inquiry] ${formData.service} — ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Subramanya,\n\nI would like to inquire about ${formData.service}.\n\nName: ${formData.name}\nEmail: ${formData.email}\nTimeline: ${formData.timeline}\n\nProject Scope & Context:\n${formData.message}\n\nBest regards,\n${formData.name}`
    );

    // Open mail client
    window.location.href = `mailto:${BRAND.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-zinc-900">
          <div>
            <span className="text-xs uppercase tracking-widest text-zinc-400 block mb-3 font-semibold">
              08. Start a Conversation
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Get in Touch
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
            Ready to streamline your business workflows, build high-performance software, or architect resilient data pipelines? Let&apos;s build beyond sanity.
          </p>
        </div>

        {/* 2-Column Layout: Direct Details vs Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Profiles */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-black border border-zinc-800/80 rounded-lg space-y-6">
              <h3 className="text-lg font-bold text-white">Direct Channels</h3>

              {/* Email item */}
              <div className="p-4 bg-zinc-950 border border-zinc-900 rounded flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase text-zinc-400 font-semibold">Email</div>
                    <div className="text-xs sm:text-sm text-white font-mono truncate">{BRAND.email}</div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 text-zinc-400 hover:text-white bg-zinc-900 rounded border border-zinc-800 transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-blue-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Phone item */}
              <div className="p-4 bg-zinc-950 border border-zinc-900 rounded flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase text-zinc-400 font-semibold">Phone</div>
                    <div className="text-xs sm:text-sm text-white font-mono truncate">{BRAND.phone}</div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="p-2 text-zinc-400 hover:text-white bg-zinc-900 rounded border border-zinc-800 transition-colors shrink-0"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-blue-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Location item */}
              <div className="p-4 bg-zinc-950 border border-zinc-900 rounded flex items-center gap-3">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
                <div>
                  <div className="text-[10px] uppercase text-zinc-400 font-semibold">Location</div>
                  <div className="text-xs sm:text-sm text-white">{BRAND.location}</div>
                </div>
              </div>
            </div>

            {/* Verified Profiles & Platforms */}
            <div className="p-8 bg-black border border-zinc-800/80 rounded-lg">
              <h3 className="text-xs uppercase tracking-widest text-zinc-400 mb-4 font-semibold">
                Professional Profiles & Repositories
              </h3>
              <div className="space-y-2.5">
                <a
                  href={BRAND.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-950 border border-zinc-900 rounded flex items-center justify-between text-xs text-zinc-300 hover:text-white hover:border-zinc-800 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-zinc-400" />
                    <span>LinkedIn</span>
                  </div>
                  <div className="flex items-center gap-1 text-zinc-400 font-mono text-[11px]">
                    <span>Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </a>

                <a
                  href={BRAND.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-950 border border-zinc-900 rounded flex items-center justify-between text-xs text-zinc-300 hover:text-white hover:border-zinc-800 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-zinc-400" />
                    <span>GitHub</span>
                  </div>
                  <div className="flex items-center gap-1 text-zinc-400 font-mono text-[11px]">
                    <span>Repositories</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </a>

                <a
                  href={BRAND.socials.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-950 border border-zinc-900 rounded flex items-center justify-between text-xs text-zinc-300 hover:text-white hover:border-zinc-800 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Globe className="w-4 h-4 text-zinc-400" />
                    <span>Upwork (Freelance)</span>
                  </div>
                  <div className="flex items-center gap-1 text-zinc-400 font-mono text-[11px]">
                    <span>Contract Work</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </a>

                <div className="p-3 bg-zinc-950 border border-zinc-900 rounded flex items-center justify-between text-xs text-zinc-400">
                  <span>LeetCode & HackerRank</span>
                  <span className="font-mono text-[11px] text-zinc-400">Listed in Resume</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 bg-black border border-zinc-800/80 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-2">Project Inquiry</h3>
            <p className="text-xs text-zinc-400 mb-6">
              Complete the form below to draft your direct inquiry to Subramanya V.
            </p>

            {formSubmitted && (
              <div className="mb-6 p-4 bg-zinc-900 border border-zinc-800 rounded-md text-xs text-zinc-200 flex items-center gap-2.5">
                <Check className="w-4 h-4 text-blue-400 shrink-0" />
                <span>
                  Thank you! Your default mail client has been launched with the drafted message. You can also directly reach out at {BRAND.email}.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Morgan"
                    className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                    Service Required
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.title} value={s.title} className="bg-zinc-950 text-white">
                        {s.title}
                      </option>
                    ))}
                    <option value="General Consulting & Architecture" className="bg-zinc-950 text-white">
                      General Consulting & Architecture
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                    Estimated Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  >
                    <option value="Immediate (< 2 weeks)" className="bg-zinc-950 text-white">Immediate (&lt; 2 weeks)</option>
                    <option value="Within 2-4 weeks" className="bg-zinc-950 text-white">Within 2–4 weeks</option>
                    <option value="1-2 months" className="bg-zinc-950 text-white">1–2 months</option>
                    <option value="Flexible / Discovery Phase" className="bg-zinc-950 text-white">Flexible / Discovery Phase</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                  Project Scope & Context *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your current workflow, system requirements, or objectives..."
                  className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[11px] text-zinc-400 font-mono">
                  Replies typically within 24 hours
                </span>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 text-xs font-semibold uppercase tracking-wider text-black bg-white rounded hover:bg-zinc-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 shadow-md"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
