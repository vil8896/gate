import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, X } from 'lucide-react';

interface PayOnboardHeroProps {
  onOpenConsultation: () => void;
  onOpenWhatsApp: () => void;
}

export const PayOnboardHero: React.FC<PayOnboardHeroProps> = ({
  onOpenConsultation,
  onOpenWhatsApp,
}) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-sky-100/70 via-blue-50/40 to-white pt-10 pb-16 lg:pt-14 lg:pb-24">
      {/* Background Soft Glows */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Top Pill / Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200/90 shadow-2xs text-xs font-bold text-slate-800">
              <ShieldCheck className="w-4 h-4 text-slate-700" />
              <span>Payment Gateway Rejection? We've Got You Covered</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-slate-900 tracking-tight leading-[1.12] font-['Outfit']">
              Get Your Payment <br />
              Gateway Approved <br />
              <span className="text-[#059669]">We Help You Get Onboarded</span>
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
              If your payment gateway application got rejected by Razorpay, Cashfree, CCAvenue or any other provider — we help small businesses, individuals, NGOs and all types of entities get onboarded quickly and smoothly.
            </p>

            {/* Call To Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                id="hero-btn-consultation"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#059669] hover:bg-[#047857] text-white font-bold text-base shadow-sm transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                id="hero-btn-whatsapp"
                onClick={onOpenWhatsApp}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-emerald-50/80 text-slate-800 font-bold text-base border-2 border-[#10b981]/70 shadow-2xs transition-all cursor-pointer"
              >
                {/* WhatsApp SVG Icon */}
                <svg className="w-5 h-5 fill-[#25D366]" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>Chat on WhatsApp</span>
              </button>
            </div>

            {/* Google Ads Compliance Micro-Notice */}
            <p className="text-[11px] text-slate-500 leading-tight">
              *Approvals are subject to payment gateway underwriting & RBI regulations. Gatewaywala provides independent compliance & documentation advisory.
            </p>

            {/* Feature Checklist */}
            <div className="pt-4 grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-x-6 gap-y-2.5 text-xs sm:text-sm font-semibold text-slate-700">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#059669] fill-emerald-50 shrink-0" />
                <span>Expert Guidance</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#059669] fill-emerald-50 shrink-0" />
                <span>Higher Approval Chances</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#059669] fill-emerald-50 shrink-0" />
                <span>Fast & Hassle-Free</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#059669] fill-emerald-50 shrink-0" />
                <span>100% Genuine Process</span>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Composition */}
          <div className="lg:col-span-6 relative flex items-center justify-center pt-12 pb-6 sm:pt-16 sm:pb-8 px-2 sm:px-4">

            {/* Main Composition Container */}
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">

              {/* Main Photo of Indian Entrepreneur at Cafe Counter with Laptop */}
              <div className="relative z-10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white bg-slate-100 aspect-[4/3] sm:aspect-[1.15/1]">
                <img
                  src="/images/entrepreneur_laptop.jpg"
                  alt="Friendly Indian business owner leaning cheerfully on counter with laptop"
                  className="w-full h-full object-cover object-center"
                />

                {/* Subtle vignette/contrast enhancer at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* FLOATING CARDS - Top Left (REJECTED GATEWAYS) - Responsively Scaled */}
              <div className="absolute -top-5 sm:-top-8 -left-1.5 sm:-left-6 md:-left-8 z-30 flex flex-col gap-1.5 sm:gap-2">
                
                {/* Red Stamped Badge "REJECTED" */}
                <div className="self-start -rotate-12 bg-white px-2 py-0.5 sm:px-3 sm:py-0.5 rounded-xs sm:rounded-sm border sm:border-2 border-red-600 shadow-md mb-0.5">
                  <span className="text-red-600 font-black text-[10px] sm:text-xs md:text-sm tracking-wider uppercase font-mono">
                    REJECTED
                  </span>
                </div>

                {/* Card 1: Razorpay */}
                <div className="flex items-center justify-between gap-2 sm:gap-3 bg-white/95 backdrop-blur-md px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg border border-slate-100 min-w-[110px] sm:min-w-[155px]">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    {/* Razorpay stylized blue symbol */}
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#0C2340] rounded-xs flex items-center justify-center text-white text-[8px] sm:text-[10px] font-black">
                      R
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold text-[#0C2340]">Razorpay</span>
                  </div>
                  <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                    <X className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[3]" />
                  </div>
                </div>

                {/* Card 2: Cashfree */}
                <div className="flex items-center justify-between gap-2 sm:gap-3 bg-white/95 backdrop-blur-md px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg border border-slate-100 min-w-[110px] sm:min-w-[155px]">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    {/* Cashfree green/red symbol */}
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#00897B] rounded-xs flex items-center justify-center text-white text-[8px] sm:text-[10px] font-black">
                      C
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold text-slate-800">Cashfree</span>
                  </div>
                  <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                    <X className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[3]" />
                  </div>
                </div>

                {/* Card 3: CCAvenue */}
                <div className="flex items-center justify-between gap-2 sm:gap-3 bg-white/95 backdrop-blur-md px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg border border-slate-100 min-w-[110px] sm:min-w-[155px]">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    {/* CCAvenue blue symbol */}
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#1B5E20] rounded-xs flex items-center justify-center text-white text-[8px] sm:text-[10px] font-black">
                      CC
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold text-[#0D47A1]">CCAvenue</span>
                  </div>
                  <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                    <X className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[3]" />
                  </div>
                </div>
              </div>

              {/* TOP RIGHT CLUSTER: "Your Business Our Support" + Arrow + "APPROVED" Badge - Responsively Scaled */}
              <div className="absolute -top-9 sm:-top-16 -right-1 sm:-right-4 md:-right-6 z-30 flex flex-col items-end pointer-events-auto select-none">
                
                {/* Hand-drawn style playful labels on top with curved doodle arrow */}
                <div className="flex items-center gap-1 mr-2 sm:mr-4 mb-1">
                  <div className="font-['Outfit'] italic font-bold text-slate-800 text-[10px] sm:text-xs md:text-sm leading-tight text-right rotate-2">
                    Your Business <br />
                    <span className="text-slate-900 font-extrabold text-xs sm:text-sm md:text-base">Our Support</span>
                  </div>
                  {/* Cute curved doodle arrow pointing down toward APPROVED */}
                  <svg className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 text-slate-700 shrink-0 rotate-12" viewBox="0 0 40 40" fill="none">
                    <path d="M12 6 C 26 10, 32 20, 24 32 M24 32 L 18 26 M24 32 L 28 26" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Horizontal row with bold green transition arrow and APPROVED badge */}
                <div className="flex items-center gap-1.5 sm:gap-2.5 md:gap-3">
                  {/* Bold green pointing arrow */}
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-md sm:rounded-lg bg-[#059669] text-white flex items-center justify-center shadow-md animate-pulse shrink-0">
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 stroke-[3]" />
                  </div>

                  {/* FLOATING BADGE - Top Right (APPROVED ✔) */}
                  <div className="bg-white/98 backdrop-blur-md px-2.5 py-1 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-xl sm:rounded-2xl border sm:border-2 border-[#059669] shadow-lg sm:shadow-xl flex items-center gap-1.5 sm:gap-2">
                    <span className="text-[#059669] font-black text-xs sm:text-sm md:text-base tracking-wider uppercase font-mono">
                      APPROVED
                    </span>
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#059669] text-white flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* CHALKBOARD ON COUNTER - Bottom Right - Responsively Scaled */}
              <div className="absolute -bottom-2.5 sm:-bottom-4 right-1 sm:right-3 md:right-4 z-30 bg-[#2b221b] p-1 sm:p-1.5 rounded-lg sm:rounded-xl shadow-xl sm:shadow-2xl border-2 sm:border-4 border-[#8B5A2B]/80 max-w-[110px] sm:max-w-[150px] md:max-w-[170px]">
                <div className="bg-[#1e293b] rounded-md sm:rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 text-white font-mono text-[10px] sm:text-xs md:text-sm font-bold shadow-inner">
                  <div className="flex items-center gap-1 sm:gap-1.5 text-emerald-300">
                    <span>✓</span> <span>Payments</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-1.5 text-emerald-300 mt-0.5">
                    <span>✓</span> <span>Growth</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-1.5 text-emerald-300 mt-0.5">
                    <span>✓</span> <span>Success</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
