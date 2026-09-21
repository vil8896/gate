import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onScrollToSection: (sectionId: string) => void;
  onNavigateToGatewaywala?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onScrollToSection, onNavigateToGatewaywala }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', id: 'pillars' },
    { label: 'Readiness Check', id: 'diagnostic' },
    { label: 'How We Work', id: 'methodology' },
    { label: 'Client Stories', id: 'cases' },
    { label: 'FAQ', id: 'faq' }
  ];

  const handleNavClick = (id: string) => {
    onScrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Advisory Banner */}
      <aside aria-label="Announcement" id="top-announcement-bar" className="bg-sky-100/90 border-b border-sky-200 text-xs text-slate-700 py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-200 text-amber-900 border border-amber-300">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mr-1.5 animate-pulse"></span>
              Free 30-Min Discovery Chats Open
            </span>
            <span className="hidden sm:inline text-slate-600 font-medium">
              Simple business guidance & easy tech setup for everyday entrepreneurs
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-600">
            <span className="font-mono text-[11px] text-slate-700">
              Official Website: <strong className="text-blue-700">mridalini.com</strong>
            </span>
          </div>
        </div>
      </aside>

      {/* Main Sticky Header */}
      <header
        id="main-header"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-sky-200 shadow-sm shadow-blue-900/5'
            : 'bg-[#f0f7ff]/95 border-b border-sky-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 via-amber-400 to-amber-500 flex items-center justify-center font-bold text-slate-900 shadow-md shadow-amber-500/20 font-mono text-xl tracking-tighter">
              M
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 font-['Outfit']">
                  Mridalini
                </span>
                <span className="text-blue-700 bg-blue-50 border border-blue-200 font-bold text-xs tracking-wider uppercase px-2 py-0.5 rounded-full">
                  Consulting
                </span>
              </div>
              <p className="text-[11px] tracking-wide text-slate-500 font-medium">
                Business & Tech Made Simple
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-600">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className="hover:text-blue-600 py-1 transition-all cursor-pointer"
              >
                <span>{link.label}</span>
              </button>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              id="btn-diagnostic-nav"
              onClick={() => handleNavClick('diagnostic')}
              className="text-xs font-bold px-3.5 py-2.5 text-slate-700 hover:text-blue-700 bg-white hover:bg-sky-50 border border-sky-200 rounded-xl transition-all cursor-pointer shadow-xs"
            >
              Readiness Check
            </button>
            <button
              id="btn-book-consultation-nav"
              onClick={() => handleNavClick('consultation')}
              className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md shadow-blue-500/20 transition-all cursor-pointer"
            >
              <span>Book 30-Min Chat</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-blue-600 rounded-xl border border-sky-200 bg-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu-panel"
            className="lg:hidden bg-white border-b border-sky-200 px-4 pt-3 pb-6 space-y-3 shadow-xl"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  id={`mobile-nav-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className="flex items-center justify-between py-2.5 text-left text-slate-700 hover:text-blue-600 text-base font-semibold border-b border-sky-100"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              ))}
            </div>

            <div className="pt-3 flex flex-col gap-2.5">
              <button
                id="btn-diagnostic-mobile"
                onClick={() => handleNavClick('diagnostic')}
                className="w-full text-center py-2.5 text-sm font-bold text-slate-800 bg-sky-50 border border-sky-200 rounded-xl hover:bg-sky-100"
              >
                Take Small Business Readiness Check
              </button>
              <button
                id="btn-consultation-mobile"
                onClick={() => handleNavClick('consultation')}
                className="w-full text-center py-2.5 text-sm font-bold bg-blue-600 text-white rounded-xl hover:bg-blue-700 shadow-md shadow-blue-500/20"
              >
                Book Friendly Consultation
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
