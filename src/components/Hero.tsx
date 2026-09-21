import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Compass, Globe, Laptop, TrendingUp } from 'lucide-react';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToSection }) => {
  return (
    <section id="hero" className="relative pt-6 pb-16 md:pt-10 md:pb-24 overflow-hidden bg-gradient-to-b from-[#f0f7ff] via-[#eaf4ff] to-[#f0f7ff]">
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-yellow-300/20 via-sky-300/20 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-300/15 blur-3xl pointer-events-none rounded-full" />

      <div className="w-full max-w-[1560px] mx-auto px-2 sm:px-4 relative z-10">
        {/* Selected Hero Banner Card - Slim, compact aspect ratio */}
        <div
          id="hero-banner-main-card"
          className="w-[95%] max-w-[1440px] mx-auto relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-r from-[#d9ebfc] via-[#e6f1fd] to-[#dee9fc] border border-sky-200/90 shadow-md shadow-blue-500/5 px-6 sm:px-10 md:px-12 py-5 sm:py-6 md:py-7 mb-10 transition-all"
        >
          {/* Decorative Translucent Glass & Code Glows Matching Mockup Backdrop */}
          <div className="absolute top-1/4 -left-12 w-72 h-48 rounded-2xl bg-white/40 border border-white/70 backdrop-blur-md rotate-[-5deg] pointer-events-none opacity-80" />
          <div className="absolute top-1/3 -right-12 w-80 h-56 rounded-2xl bg-white/35 border border-white/60 backdrop-blur-md rotate-[4deg] pointer-events-none opacity-75" />
          <div className="absolute -bottom-8 left-1/3 w-80 h-28 bg-blue-300/25 blur-3xl pointer-events-none rounded-full" />
          <div className="absolute top-6 right-1/4 w-60 h-24 bg-cyan-200/35 blur-2xl pointer-events-none rounded-full" />
          
          {/* Subtle decorative code/graph watermarks */}
          <div className="absolute left-8 bottom-6 hidden lg:block opacity-25 pointer-events-none font-mono text-[9px] text-blue-900 select-none space-y-0.5">
            <div>// business.guidance.clarity</div>
            <div>const roadmap = validateLaunchSteps();</div>
          </div>
          <div className="absolute right-12 top-6 hidden lg:block opacity-25 pointer-events-none font-mono text-[9px] text-blue-900 select-none space-y-0.5 text-right">
            <div>// revenue.efficiency</div>
            <div>return sustainableGrowth;</div>
          </div>

          {/* Top Row: Title + Subtitle on Left, CTA on Right */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
            {/* Left: Branding & Core Promise */}
            <div className="max-w-2xl text-left">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black tracking-tight text-slate-900 font-['Outfit'] leading-tight">
                Mridalini Consulting: Your Business Guidance Partner
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium mt-1 tracking-normal">
                Achieve Clarity, Efficiency, and Growth
              </p>
            </div>

            {/* Right: Book a 1-on-1 Session Button */}
            <div className="shrink-0">
              <button
                id="btn-book-session"
                onClick={() => onScrollToSection('consultation')}
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:py-3 rounded-xl bg-[#1d6fe9] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-600/25 transition-all transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
              >
                <span>Book a 1-on-1 Session</span>
                <span className="text-base">🗓️</span>
              </button>
            </div>
          </div>

          {/* Center: 3D Consultation Scene (Slim height, centered) */}
          <div className="relative z-10 my-1 sm:my-2 md:my-3 flex items-center justify-center">
            <img
              id="hero-banner-illustration"
              src="images/banner1.png"
              alt="Mridalini Consulting 3D Business & Tech Consultation Scene"
              className="w-full max-w-3xl max-h-[190px] sm:max-h-[230px] md:max-h-[270px] object-contain drop-shadow-xs mx-auto select-none pointer-events-none"
              loading="eager"
            />
          </div>

          {/* Bottom Row: 3 Feature Badges on the Right */}
          <div className="flex flex-wrap items-center justify-end gap-5 sm:gap-8 pt-1 relative z-10">
            {/* Feature 1: Tech Simplified */}
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-700">
                <Laptop className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <div className="font-extrabold text-slate-900 text-xs leading-none">Tech</div>
                <div className="text-slate-600 text-[11px] leading-tight mt-0.5">Simplified</div>
              </div>
            </div>

            {/* Feature 2: Expert Strategy */}
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-700">
                <Compass className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <div className="font-extrabold text-slate-900 text-xs leading-none">Expert</div>
                <div className="text-slate-600 text-[11px] leading-tight mt-0.5">Strategy</div>
              </div>
            </div>

            {/* Feature 3: Real-world Results */}
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-700">
                <TrendingUp className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <div className="font-extrabold text-slate-900 text-xs leading-none">Real-world</div>
                <div className="text-slate-600 text-[11px] leading-tight mt-0.5">Results</div>
              </div>
            </div>
          </div>
        </div>

        {/* Dual Pillar Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-14">
          {/* Pillar 1: Business Guidance */}
          <div
            id="hero-preview-business"
            onClick={() => onScrollToSection('pillars')}
            className="group relative bg-white hover:bg-amber-50/30 border border-sky-100 hover:border-amber-300 p-7 rounded-2xl transition-all shadow-sm hover:shadow-md cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-800 mb-4">
              <Compass className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 font-['Outfit'] mb-2 group-hover:text-amber-800 transition-colors">
              Simple Business Guidance
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Launch your idea from scratch, price your services to keep money in the bank,
              find steady customers, and set up daily routines so you don’t burn out.
            </p>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Step-by-step launch roadmap for first-time founders</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Pricing calculator so you make real take-home profit</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Steady customer attraction without expensive marketing</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2: Practical Tech */}
          <div
            id="hero-preview-tech"
            onClick={() => onScrollToSection('pillars')}
            className="group relative bg-white hover:bg-sky-50/40 border border-sky-100 hover:border-blue-300 p-7 rounded-2xl transition-all shadow-sm hover:shadow-md cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700 mb-4">
              <Globe className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 font-['Outfit'] mb-2 group-hover:text-blue-700 transition-colors">
              Practical Tech & Online Setup
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Clean mobile website, custom domain (like mridalini.com), easy card payments,
              calendar booking, and simple AI shortcuts that save you 10+ hours a week.
            </p>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Fast mobile website with professional email</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>One-click card payments and automated customer receipts</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Friendly AI prompts & WhatsApp setup to save hours</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Quantified Track Record Strip */}
        <div className="bg-white border border-sky-200 rounded-2xl p-6 sm:p-7 shadow-xs">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-700 font-['Outfit'] tracking-tight">
                50+
              </div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Small Businesses & Starters Helped
              </p>
            </div>
            <div className="space-y-1 border-l-0 sm:border-l border-sky-100">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-600 font-['Outfit'] tracking-tight">
                12+ Hrs
              </div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Saved Every Week per Owner
              </p>
            </div>
            <div className="space-y-1 border-l-0 md:border-l border-sky-100">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 font-['Outfit'] tracking-tight">
                100%
              </div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Plain English, Zero Rocket Science
              </p>
            </div>
            <div className="space-y-1 border-l-0 sm:border-l border-sky-100">
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit'] tracking-tight">
                7 Days
              </div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Typical Setup to Launch Ready
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
