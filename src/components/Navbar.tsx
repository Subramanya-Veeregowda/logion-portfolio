import React, { useState, useEffect } from 'react';
import { BRAND } from '../data/portfolioData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Open Source', href: '#opensource' },
    { label: 'Process', href: '#process' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-black/85 backdrop-blur-md border-b border-zinc-800/80 shadow-2xl'
          : 'bg-black/40 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark & Official Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500"
          aria-label="LOGION Homepage"
        >
          <img
            src={BRAND.logoSrc}
            alt="LOGION"
            className="h-8 md:h-9 w-auto object-contain rounded-sm brightness-100 transition-opacity group-hover:opacity-90"
          />
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 group-hover:text-zinc-200 transition-colors font-medium">
              Subramanya V
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links (Single-line, unboxed, clean hover) */}
        <nav
          className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-400"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="whitespace-nowrap shrink-0 hover:text-white transition-colors duration-150 py-1 border-b border-transparent hover:border-zinc-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <a
            href="#contact"
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-white rounded-md hover:bg-zinc-200 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 shadow-sm"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="#contact"
            className="text-xs px-3 py-1.5 font-medium text-black bg-white rounded-md hover:bg-zinc-200"
          >
            Contact
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-400 hover:text-white focus-visible:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800 px-6 py-6 transition-all duration-200">
          <nav className="flex flex-col gap-4 text-base font-medium text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-zinc-900 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-white rounded-md hover:bg-zinc-200 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href={BRAND.resumeSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
              >
                View Resume (PDF)
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
