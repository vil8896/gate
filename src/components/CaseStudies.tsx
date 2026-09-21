import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/consultingData';
import { Store, CheckCircle2, TrendingUp, ArrowRight } from 'lucide-react';

interface CaseStudiesProps {
  onInquireSimilar: (caseTitle: string) => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onInquireSimilar }) => {
  const [selectedCase, setSelectedCase] = useState<string>(CASE_STUDIES[0].id);

  const currentCase = CASE_STUDIES.find((c) => c.id === selectedCase) || CASE_STUDIES[0];

  return (
    <section id="cases" className="py-16 md:py-24 bg-[#f0f7ff] border-t border-sky-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-sky-200 text-xs font-bold text-blue-700 mb-3 shadow-xs">
            <span>REAL STORIES • REAL RESULTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-['Outfit'] tracking-tight mb-4">
            How Everyday Businesses{' '}
            <span className="text-blue-600">Got Simple & Profitable</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Real people who had a craft or small business, felt overwhelmed with tech and disorganized billing,
            and got up and running in just a few short weeks.
          </p>
        </div>

        {/* Case Study Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {CASE_STUDIES.map((c) => (
            <button
              key={c.id}
              id={`tab-case-${c.id}`}
              onClick={() => setSelectedCase(c.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                selectedCase === c.id
                  ? 'bg-amber-400 text-amber-950 shadow-md shadow-amber-500/20 border border-amber-400'
                  : 'bg-white text-slate-600 hover:text-blue-700 border border-sky-200'
              }`}
            >
              <Store className="w-3.5 h-3.5" />
              <span>{c.industry}</span>
            </button>
          ))}
        </div>

        {/* Highlighted Case Card */}
        <div className="bg-white border border-sky-200 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Challenge & Solution */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
                <span>{currentCase.clientType}</span>
                <span>•</span>
                <span>{currentCase.industry}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Outfit'] leading-tight">
                {currentCase.title}
              </h3>

              <div className="space-y-4 text-sm">
                <div className="bg-rose-50/60 p-4 rounded-xl border border-rose-200">
                  <h4 className="text-xs font-bold uppercase text-rose-800 tracking-wider mb-1">
                    What Was Going Wrong Before:
                  </h4>
                  <p className="leading-relaxed text-slate-700 text-xs sm:text-sm">{currentCase.challenge}</p>
                </div>

                <div className="bg-emerald-50/60 p-4 rounded-xl border border-emerald-200">
                  <h4 className="text-xs font-bold uppercase text-emerald-800 tracking-wider mb-1">
                    What Mridalini Did:
                  </h4>
                  <p className="leading-relaxed text-slate-700 text-xs sm:text-sm">{currentCase.solution}</p>
                </div>
              </div>

              {/* What We Set Up */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Tools & Systems We Set Up:
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentCase.servicesProvided.map((srv, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 rounded-lg text-xs bg-sky-50/80 border border-sky-200 text-slate-700 font-medium"
                    >
                      {srv}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Outcomes Dashboard */}
            <div className="lg:col-span-5 bg-sky-50/70 border border-sky-200 rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-sky-200/80">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                    <span className="text-xs uppercase tracking-wider text-slate-900 font-bold">
                      VERIFIED RESULTS
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300">
                    Real Outcome
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3.5 mb-6">
                  {currentCase.results.map((res, rIdx) => (
                    <div
                      key={rIdx}
                      className="bg-white p-4 rounded-xl border border-sky-200 shadow-2xs"
                    >
                      <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 font-['Outfit'] tracking-tight mb-1">
                        {res.value}
                      </div>
                      <div className="text-xs font-bold text-slate-600 leading-snug">
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                id={`btn-case-inquire-${currentCase.id}`}
                onClick={() => onInquireSimilar(currentCase.title)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md shadow-blue-500/20"
              >
                <span>I Want Something Like This</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
