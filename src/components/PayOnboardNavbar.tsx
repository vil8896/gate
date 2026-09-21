import React, { useState } from 'react';
import { ArrowRight, Menu, X, Check, ArrowLeft } from 'lucide-react';

interface PayOnboardNavbarProps {
  onOpenConsultation: () => void;
  onOpenWhatsApp?: () => void;
  onScrollToSection: (sectionId: string) => void;
  onNavigateToMridalini?: () => void;
}

export const PayOnboardNavbar: React.FC<PayOnboardNavbarProps> = ({
  onOpenConsultation,
  onOpenWhatsApp,
  onScrollToSection,
  onNavigateToMridalini,
}) => {
  const [activeTab, setActiveTab] = useState<'home' | 'about' | 'services' | 'why-us' | 'faqs'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (tab: 'home' | 'about' | 'services' | 'why-us' | 'faqs', sectionId: string) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    onScrollToSection(sectionId);
  };

  return (
    <>
      {/* Top Banner with link back to Parent Firm Mridalini */}
      {onNavigateToMridalini && (
        <div className="bg-slate-900 text-slate-300 text-[11px] sm:text-xs py-1.5 px-4 border-b border-slate-800">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Gatewaywala is a specialized division of <strong>Mridalini Consulting</strong></span>
            </div>
            <button
              onClick={onNavigateToMridalini}
              className="inline-flex items-center gap-1 font-bold text-white hover:text-emerald-400 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Visit Mridalini Main Website</span>
            </button>
          </div>
        </div>
      )}

      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center gap-4">
            <div
              onClick={() => handleNav('home', 'hero')}
              className="flex items-center gap-3 cursor-pointer select-none group"
            >
              {/* Gatewaywala GW Light Emblem */}
              <div className="relative w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/90 flex items-center justify-center shadow-xs group-hover:border-emerald-400 group-hover:bg-emerald-100/60 transition-all shrink-0">
                <span className="font-['Outfit'] font-black text-[17px] leading-none tracking-tight select-none flex items-center">
                  <span className="text-slate-900">G</span>
                  <span className="text-[#059669]">W</span>
                </span>

                {/* Verified Approval Check Badge */}
                <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#059669] border-2 border-white flex items-center justify-center text-white shadow-2xs">
                  <Check className="w-2.5 h-2.5 stroke-[3.5]" />
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex items-baseline text-2xl font-extrabold tracking-tight font-['Outfit']">
                  <span className="text-slate-900">Gateway</span>
                  <span className="text-[#059669]">wala</span>
                </div>
                <span className="text-[11px] font-semibold text-slate-500 tracking-normal -mt-1">
                  Your Payment Gateway Partner
                </span>
              </div>
            </div>
          </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-9 text-sm font-semibold text-slate-600">
          <button
            onClick={() => handleNav('home', 'hero')}
            className={`relative py-2 transition-colors cursor-pointer ${
              activeTab === 'home' ? 'text-slate-900 font-bold' : 'hover:text-slate-900'
            }`}
          >
            <span>Home</span>
            {activeTab === 'home' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#059669] rounded-full" />
            )}
          </button>

          <button
            onClick={() => handleNav('about', 'rejected-section')}
            className={`relative py-2 transition-colors cursor-pointer ${
              activeTab === 'about' ? 'text-slate-900 font-bold' : 'hover:text-slate-900'
            }`}
          >
            <span>About Us</span>
            {activeTab === 'about' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#059669] rounded-full" />
            )}
          </button>

          <button
            onClick={() => handleNav('services', 'services-section')}
            className={`relative py-2 transition-colors cursor-pointer ${
              activeTab === 'services' ? 'text-slate-900 font-bold' : 'hover:text-slate-900'
            }`}
          >
            <span>Services</span>
            {activeTab === 'services' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#059669] rounded-full" />
            )}
          </button>

          <button
            onClick={() => handleNav('why-us', 'process-section')}
            className={`relative py-2 transition-colors cursor-pointer ${
              activeTab === 'why-us' ? 'text-slate-900 font-bold' : 'hover:text-slate-900'
            }`}
          >
            <span>Why Us</span>
            {activeTab === 'why-us' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#059669] rounded-full" />
            )}
          </button>

          <button
            onClick={() => handleNav('faqs', 'faq-section')}
            className={`relative py-2 transition-colors cursor-pointer ${
              activeTab === 'faqs' ? 'text-slate-900 font-bold' : 'hover:text-slate-900'
            }`}
          >
            <span>FAQs</span>
            {activeTab === 'faqs' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#059669] rounded-full" />
            )}
          </button>
        </nav>

        {/* Right Action CTA Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {onOpenWhatsApp && (
            <button
              onClick={onOpenWhatsApp}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs border border-emerald-200 shadow-2xs transition-colors cursor-pointer"
              title="Chat directly on WhatsApp"
            >
              <svg className="w-4 h-4 fill-[#25D366]" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>Chat on WhatsApp</span>
            </button>
          )}

          <button
            id="nav-btn-consultation"
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#059669] hover:bg-[#047857] text-white font-bold text-sm shadow-sm transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Get Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3">
          <button
            onClick={() => handleNav('home', 'hero')}
            className="block w-full text-left py-2 text-base font-semibold text-slate-800 hover:text-[#059669]"
          >
            Home
          </button>
          <button
            onClick={() => handleNav('about', 'rejected-section')}
            className="block w-full text-left py-2 text-base font-semibold text-slate-800 hover:text-[#059669]"
          >
            About Us
          </button>
          <button
            onClick={() => handleNav('services', 'services-section')}
            className="block w-full text-left py-2 text-base font-semibold text-slate-800 hover:text-[#059669]"
          >
            Services
          </button>
          <button
            onClick={() => handleNav('why-us', 'process-section')}
            className="block w-full text-left py-2 text-base font-semibold text-slate-800 hover:text-[#059669]"
          >
            Why Us
          </button>
          <button
            onClick={() => handleNav('faqs', 'faq-section')}
            className="block w-full text-left py-2 text-base font-semibold text-slate-800 hover:text-[#059669]"
          >
            FAQs
          </button>
          <div className="pt-2 space-y-2">
            {onNavigateToMridalini && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateToMridalini();
                }}
                className="w-full py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer border border-slate-200"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Visit Mridalini Main Website</span>
              </button>
            )}
            {onOpenWhatsApp && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsApp();
                }}
                className="w-full py-2.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs border border-emerald-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <svg className="w-4 h-4 fill-[#25D366]" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>Chat on WhatsApp</span>
              </button>
            )}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 rounded-full bg-[#059669] text-white font-bold text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
    </>
  );
};
