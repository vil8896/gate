import React from 'react';
import { X, Check } from 'lucide-react';

export const PayOnboardRejectionSolution: React.FC = () => {
  return (
    <section id="rejected-section" className="py-16 sm:py-20 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Context & Reassurance */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-red-50 border border-red-200/80 text-xs font-bold text-red-600 uppercase tracking-wide">
              REJECTED BY TOP GATEWAYS?
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-['Outfit']">
              We Help You Get Approved
            </h2>

            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
              Your application may have been rejected due to KYC issues, documentation errors, business type restrictions or technical problems. We work with you to resolve these and get you onboarded with the right provider.
            </p>

            {/* Gateway Logos Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-8 sm:gap-10">
              {/* Razorpay Logo */}
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-[#0C2340] rounded-sm flex items-center justify-center text-white font-black text-xs">
                  R
                </div>
                <span className="text-lg font-extrabold tracking-tight text-[#0C2340]">
                  Razorpay
                </span>
              </div>

              {/* Cashfree Payments Logo */}
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-[#00897B] rounded-sm flex items-center justify-center text-white font-black text-xs">
                  C
                </div>
                <div className="flex flex-col -space-y-1">
                  <span className="text-base font-extrabold text-slate-900">Cashfree</span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Payments</span>
                </div>
              </div>

              {/* CCAvenue Logo */}
              <div className="flex items-center gap-2">
                <span className="text-lg font-black tracking-tight text-[#0D47A1] font-serif">
                  CC<span className="text-[#1565C0]">Avenue</span>
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Rejection Card -> "We Fix It For You!" with Green Check */}
          <div className="lg:col-span-6 relative flex items-center justify-center px-2 sm:px-4">
            
            {/* The White Stamped Paper */}
            <div className="relative w-full max-w-md bg-white p-6 sm:p-8 pr-12 sm:pr-8 rounded-2xl sm:rounded-3xl shadow-xl border border-slate-200/80 -rotate-1 sm:-rotate-2 transition-transform hover:rotate-0">
              
              {/* Red REJECTED stamp on upper right */}
              <div className="absolute top-4 right-4 sm:top-5 sm:right-5 rotate-6 border sm:border-2 border-red-600 px-2.5 py-0.5 sm:px-3.5 sm:py-1 rounded-xs sm:rounded-sm bg-red-50/50">
                <span className="text-red-600 font-black text-xs sm:text-sm tracking-widest uppercase font-mono">
                  REJECTED
                </span>
              </div>

              {/* Problem Bullets */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-slate-800">
                    KYC Issues
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-slate-800">
                    Documentation Errors
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-slate-800">
                    Business Type Restrictions
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-slate-800">
                    Technical Issues
                  </span>
                </div>
              </div>

            </div>

            {/* Hand-drawn style pointer "We Fix It For You!" */}
            <div className="absolute -right-1 sm:-right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center scale-85 sm:scale-100 origin-right">
              <div className="font-['Outfit'] font-black italic text-slate-800 text-sm sm:text-lg whitespace-nowrap rotate-6 leading-tight">
                We Fix It <br />
                <span className="text-[#059669]">For You!</span>
              </div>
              
              {/* Doodle curved arrow */}
              <svg className="w-8 h-6 sm:w-10 sm:h-8 text-slate-700 my-0.5 sm:my-1" viewBox="0 0 40 30" fill="none">
                <path d="M5 5 C 15 20, 25 10, 30 25 M30 25 L 22 22 M30 25 L 28 17" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              {/* Big Solid Green Checkmark Circle */}
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#059669] text-white flex items-center justify-center shadow-lg border-2 border-white">
                <Check className="w-5 h-5 sm:w-7 sm:h-7 stroke-[3.5]" />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
