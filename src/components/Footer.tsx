import React from 'react';
import { Globe, Mail, ShieldCheck, ArrowUp, Heart, Sparkles } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
  onNavigateToGatewaywala?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToSection, onNavigateToGatewaywala }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#e8f3fc] border-t border-sky-200 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Col 1 & 2: Brand Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-400 flex items-center justify-center font-black text-amber-950 font-mono text-xl shadow-xs">
                M
              </div>
              <div>
                <span className="font-extrabold text-lg tracking-tight text-slate-900 font-['Outfit']">
                  Mridalini
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              Friendly business guidance and simple tech setups for individuals starting a new business
              and small local companies. No complicated jargon or high fees—just what actually works.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2.5 text-xs">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-sky-200 text-blue-700 font-semibold shadow-2xs">
                <Globe className="w-3.5 h-3.5 text-blue-600" />
                <span>mridalini.com</span>
              </div>
            </div>
          </div>

          {/* Col 3: Business Advice */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Business Guidance
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => onScrollToSection('pillars')}
                  className="hover:text-blue-600 transition-colors text-left cursor-pointer"
                >
                  Idea Check & First Offer
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('pillars')}
                  className="hover:text-blue-600 transition-colors text-left cursor-pointer"
                >
                  Pricing So You Make Profit
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('pillars')}
                  className="hover:text-blue-600 transition-colors text-left cursor-pointer"
                >
                  Finding First 10 Customers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('pillars')}
                  className="hover:text-blue-600 transition-colors text-left cursor-pointer"
                >
                  Legal, Licenses & Invoicing
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Tech & Website */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Simple Tech & Web
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => onScrollToSection('pillars')}
                  className="hover:text-blue-600 transition-colors text-left cursor-pointer"
                >
                  1-Page Fast Website Setup
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('pillars')}
                  className="hover:text-blue-600 transition-colors text-left cursor-pointer"
                >
                  Domain & Professional Email
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('pillars')}
                  className="hover:text-blue-600 transition-colors text-left cursor-pointer"
                >
                  Online Payments & Invoicing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('pillars')}
                  className="hover:text-blue-600 transition-colors text-left cursor-pointer"
                >
                  Booking & Appointment Calendars
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2 text-slate-700">
                <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <a href="mailto:hello@mridalini.com" className="hover:text-blue-700 font-medium transition-colors">
                  hello@mridalini.com
                </a>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => onScrollToSection('diagnostic')}
                  className="text-blue-600 hover:text-blue-800 font-bold flex items-center gap-1 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Free 60-Sec Checkup</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-sky-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-600">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <p>
              © {new Date().getFullYear()} Mridalini (mridalini.com) • Practical business and tech help for everyday entrepreneurs.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-600 hover:text-blue-700 font-bold transition-colors cursor-pointer py-1"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
