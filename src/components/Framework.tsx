import React from 'react';
import { METHODOLOGY_STEPS } from '../data/consultingData';
import { Clock, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface FrameworkProps {
  onScheduleCall: () => void;
}

export const Framework: React.FC<FrameworkProps> = ({ onScheduleCall }) => {
  return (
    <section id="methodology" className="py-16 md:py-24 bg-white border-t border-sky-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-blue-700 mb-3 shadow-xs">
            <span>HOW WE WORK WITH YOU</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-['Outfit'] tracking-tight mb-4">
            A Clear 4-Step Path to{' '}
            <span className="text-blue-600">Getting Customers</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            No endless theoretical slides or confusing jargon. We sit down with you, figure out what you need,
            set it up right alongside you, and make sure it brings in real income.
          </p>
        </div>

        {/* 4-Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {METHODOLOGY_STEPS.map((step) => (
            <div
              key={step.phase}
              id={`framework-step-${step.phase}`}
              className="bg-[#f0f7ff] border border-sky-200/80 hover:border-blue-400 rounded-2xl p-6 flex flex-col justify-between transition-all hover:-translate-y-1 shadow-xs hover:shadow-md relative group"
            >
              <div>
                {/* Step Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold font-['Outfit'] text-blue-600 group-hover:text-blue-700 transition-colors">
                    {step.phase}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-900 bg-amber-100 px-2.5 py-1 rounded-full border border-amber-300">
                    <Clock className="w-3 h-3 text-amber-700" />
                    <span>{step.duration}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 font-['Outfit'] mb-1">
                  {step.name}
                </h3>
                <p className="text-xs font-semibold text-blue-700 mb-3">
                  {step.tagline}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mb-5">
                  {step.description}
                </p>
              </div>

              {/* Outputs List */}
              <div className="pt-4 border-t border-sky-200/60">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  What You Receive:
                </span>
                <ul className="space-y-1.5">
                  {step.keyOutputs.map((out, oIdx) => (
                    <li key={oIdx} className="text-xs text-slate-700 flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Commitment Banner */}
        <div className="bg-gradient-to-r from-blue-50 via-sky-50 to-amber-50/60 border border-sky-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 shrink-0 shadow-xs">
              <ShieldCheck className="w-6 h-6 text-amber-700" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 font-['Outfit']">
                100% Full Ownership & Zero Locked Contracts
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Every website, payment link, spreadsheet, domain, and tool account belongs directly to you. We don&apos;t hold your business hostage.
              </p>
            </div>
          </div>
          <button
            id="btn-framework-schedule"
            onClick={onScheduleCall}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shrink-0 shadow-md shadow-blue-500/20"
          >
            <span>Book A Free Friendly Chat</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
