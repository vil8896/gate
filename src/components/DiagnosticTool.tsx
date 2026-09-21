import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, Compass, Globe, HeartHandshake } from 'lucide-react';
import { DiagnosticResult } from '../types';

interface DiagnosticToolProps {
  onApplyDiagnosticToInquiry: (summary: string) => void;
}

export const DiagnosticTool: React.FC<DiagnosticToolProps> = ({ onApplyDiagnosticToInquiry }) => {
  const [stage, setStage] = useState<string>('idea');
  const [hurdle, setHurdle] = useState<string>('no_website_payments');
  const [focus, setFocus] = useState<string>('dual');

  const getDiagnosticResult = (): DiagnosticResult => {
    if (hurdle === 'no_website_payments') {
      return {
        recommendedTrack: 'Painless Website, Domain & 1-Click Payments Setup',
        duration: '7 Days',
        estimatedEffort: 'Done-With-You Setup + Zero Technical Jargon',
        strategicFocus: 'Give your business an instant professional look on your custom domain (mridalini.com) so customers trust you and pay you with a single tap.',
        architectureFocus: 'Clean mobile-friendly one-page website, custom email (you@yourdomain.com), Stripe/PayPal checkout buttons, and Google Business profile.',
        keyDeliverables: [
          'Live, working website on your own custom domain',
          'One-click credit card & digital payment buttons',
          'Google Maps Business profile setup for local searches',
          'Clear contact and customer inquiry forms'
        ],
        priorityScore: 98
      };
    } else if (hurdle === 'pricing_profit') {
      return {
        recommendedTrack: 'Pricing for Real Profit & Cash Flow Clarity',
        duration: '1 to 2 Weeks',
        estimatedEffort: 'Simple 1-on-1 Review + Easy-to-Use Spreadsheets',
        strategicFocus: 'Stop undercharging or stressing over bills. Calculate your exact costs, create high-margin packages, and pay yourself a steady income.',
        architectureFocus: 'Simple profit & pricing spreadsheet, monthly cash flow tracker, cost trimming checklist, and tiered package pricing.',
        keyDeliverables: [
          'Personalized Profit & Pricing Calculator (easy to use)',
          'Monthly Cash Flow & Expense Tracker template',
          '3-Tiered Service Package structure that sells',
          'Clear guide on what to charge for new clients'
        ],
        priorityScore: 94
      };
    } else if (hurdle === 'finding_customers') {
      return {
        recommendedTrack: 'Local Customer Magnet & 5-Star Reviews Engine',
        duration: '2 Weeks',
        estimatedEffort: 'Practical Marketing Plan + Ready-to-Use Templates',
        strategicFocus: 'Generate steady new customer inquiries without paying expensive ad agencies or spending hours filming TikTok videos.',
        architectureFocus: 'Google review automation, local neighborhood outreach, customer referral program, and high-converting promotional offers.',
        keyDeliverables: [
          'Automated SMS/Email review request template for customers',
          'Step-by-step Google Maps ranking checklist',
          'Referral incentives to get your current clients bringing friends',
          'Simple 30-minute-per-week social media game plan'
        ],
        priorityScore: 92
      };
    } else if (hurdle === 'wasting_time') {
      return {
        recommendedTrack: '10-Hour Weekly Time-Saver & Operations Reset',
        duration: '1 to 2 Weeks',
        estimatedEffort: 'Streamlining Daily Routine + Simple Automation',
        strategicFocus: 'Stop being trapped working 14-hour days doing manual paperwork, chasing missed messages, and re-typing customer notes.',
        architectureFocus: 'Automated booking calendar, WhatsApp for Business quick replies, centralized customer list, and order management.',
        keyDeliverables: [
          'Online appointment booking calendar (clients schedule themselves)',
          'WhatsApp Business auto-greetings & FAQ quick replies',
          'Organized customer and order tracking system',
          'Step-by-step checklists so helpers or staff do things right'
        ],
        priorityScore: 95
      };
    } else {
      // ai_tech_confused
      return {
        recommendedTrack: 'Friendly Beginner AI & Time-Saving Tech Jumpstart',
        duration: '1 Week',
        estimatedEffort: 'Hands-on 1-on-1 Walkthrough + Ready-Made Prompts',
        strategicFocus: 'Learn how to use modern tools like ChatGPT safely and effectively to write emails, create quotes, and draft social posts in seconds.',
        architectureFocus: 'Curated ChatGPT prompt templates, basic email automation, and a patient screen-share session where you practice together.',
        keyDeliverables: [
          'Custom ChatGPT prompt cheat-sheet tailored to your business',
          'Ready-to-use email reply templates for everyday inquiries',
          '1-on-1 patient video session showing you step-by-step how to use it',
          'Cheat sheet of only the top 3 tools you actually need'
        ],
        priorityScore: 96
      };
    }
  };

  const result = getDiagnosticResult();

  const handleApply = () => {
    const summaryText = `[Small Business Readiness Plan]
Current Stage: ${stage.replace('_', ' ').toUpperCase()}
Primary Goal / Challenge: ${hurdle.replace('_', ' ').toUpperCase()}
Preferred Support: ${focus.toUpperCase()}
Recommended Plan: ${result.recommendedTrack} (${result.duration})
Key Goal: ${result.strategicFocus}`;

    onApplyDiagnosticToInquiry(summaryText);
  };

  return (
    <section id="diagnostic" className="py-16 md:py-24 bg-[#f0f7ff] border-t border-b border-sky-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-xs font-bold text-amber-900 mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>2-MINUTE QUICK CHECK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit'] tracking-tight mb-3">
            Find Out Exactly What Your Business Needs First
          </h2>
          <p className="text-base text-slate-600">
            Tell us where you are today and what&apos;s giving you the biggest headache.
            We will generate an instant, practical recommendation with clear next steps.
          </p>
        </div>

        {/* Diagnostic Input Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-6 bg-white border border-sky-200 rounded-2xl p-6 sm:p-8 space-y-7 shadow-xs">
            {/* Step 1: Stage */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-3">
                1. Where are you starting from?
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { id: 'idea', label: 'Have an Idea / Skill', sub: 'Want to launch my first business' },
                  { id: 'solo_freelance', label: 'Solo or Freelancer', sub: 'Need steady clients & better rates' },
                  { id: 'small_shop', label: 'Shop or Local Service', sub: 'Tired of manual messy orders' },
                  { id: 'growing', label: 'Growing Small Team', sub: 'Need organized systems to scale' }
                ].map((item) => (
                  <button
                    key={item.id}
                    id={`diag-stage-${item.id}`}
                    onClick={() => setStage(item.id)}
                    className={`p-3 text-left rounded-xl border transition-all cursor-pointer ${
                      stage === item.id
                        ? 'bg-amber-100 border-amber-400 text-slate-900 shadow-xs'
                        : 'bg-sky-50/50 border-sky-100 text-slate-700 hover:bg-sky-50'
                    }`}
                  >
                    <div className="text-xs font-bold font-['Outfit']">{item.label}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Primary Hurdle */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-3">
                2. What is your biggest challenge right now?
              </label>
              <div className="space-y-2">
                {[
                  {
                    id: 'no_website_payments',
                    label: 'No professional website, domain, or online card payment setup',
                    category: 'Tech & Presence'
                  },
                  {
                    id: 'pricing_profit',
                    label: 'I don’t know what to charge and where the profit is disappearing',
                    category: 'Pricing & Cash Flow'
                  },
                  {
                    id: 'finding_customers',
                    label: 'Struggling to find steady customers without expensive ads',
                    category: 'Marketing & Sales'
                  },
                  {
                    id: 'wasting_time',
                    label: 'Buried under manual paperwork, lost notes, and missed calls',
                    category: 'Daily Operations'
                  },
                  {
                    id: 'ai_tech_confused',
                    label: 'Tech feels overwhelming and I need someone to show me simply',
                    category: 'Tools & AI Help'
                  }
                ].map((item) => (
                  <button
                    key={item.id}
                    id={`diag-hurdle-${item.id}`}
                    onClick={() => setHurdle(item.id)}
                    className={`w-full p-3.5 text-left rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                      hurdle === item.id
                        ? 'bg-blue-50 border-blue-400 text-blue-900 shadow-xs'
                        : 'bg-sky-50/40 border-sky-100 text-slate-700 hover:bg-sky-50'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold">{item.label}</div>
                      <span className="text-[10px] font-bold text-blue-700 uppercase">{item.category}</span>
                    </div>
                    {hurdle === item.id && <Check className="w-4 h-4 text-blue-600 shrink-0 ml-2" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Focus */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-3">
                3. What kind of help do you prefer?
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'dual', label: 'Both Business & Tech' },
                  { id: 'business', label: 'Business Strategy' },
                  { id: 'tech', label: 'Practical Tech Setup' }
                ].map((item) => (
                  <button
                    key={item.id}
                    id={`diag-focus-${item.id}`}
                    onClick={() => setFocus(item.id)}
                    className={`p-2.5 text-center text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                      focus === item.id
                        ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                        : 'bg-sky-50/50 border-sky-100 text-slate-700 hover:bg-sky-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Real-time Generated Action Plan Column */}
          <div className="lg:col-span-6 bg-white border-2 border-blue-200 rounded-2xl p-6 sm:p-8 shadow-md relative">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  Recommended Action Plan
                </span>
              </div>
              <span className="text-xs font-bold bg-amber-100 border border-amber-300 px-3 py-1 rounded-full text-amber-900">
                Fit Score: {result.priorityScore}%
              </span>
            </div>

            <div className="mb-6">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                BEST FIRST STEP FOR YOU:
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 font-['Outfit'] mb-2">
                {result.recommendedTrack}
              </h3>
              <div className="flex items-center gap-3 text-xs text-slate-600 font-medium">
                <span className="bg-blue-50 text-blue-700 border border-blue-200 font-bold px-2.5 py-0.5 rounded-full">
                  Expected Timeline: {result.duration}
                </span>
                <span>•</span>
                <span>{result.estimatedEffort}</span>
              </div>
            </div>

            {/* Strategic & Tech Focus Blocks */}
            <div className="space-y-3.5 mb-6 text-xs">
              <div className="bg-amber-50/70 p-4 rounded-xl border border-amber-200">
                <span className="font-bold text-amber-900 uppercase block mb-1">
                  WHY THIS HELPS YOUR BUSINESS:
                </span>
                <p className="text-slate-700 leading-relaxed font-normal">
                  {result.strategicFocus}
                </p>
              </div>

              <div className="bg-sky-50/70 p-4 rounded-xl border border-sky-200">
                <span className="font-bold text-blue-900 uppercase block mb-1">
                  WHAT WE SET UP FOR YOU:
                </span>
                <p className="text-slate-700 leading-relaxed font-normal">
                  {result.architectureFocus}
                </p>
              </div>
            </div>

            {/* Key Deliverables */}
            <div className="mb-7">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-3">
                WHAT YOU WALK AWAY WITH:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-800">
                {result.keyDeliverables.map((deliv, idx) => (
                  <div key={idx} className="flex items-start gap-2 bg-sky-50/50 p-2.5 rounded-xl border border-sky-100">
                    <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="font-medium">{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Apply to Inquiry Action */}
            <div className="pt-4 border-t border-sky-100 flex flex-col sm:flex-row items-center gap-3">
              <button
                id="btn-apply-diagnostic-rfp"
                onClick={handleApply}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-blue-500/20 transition-all cursor-pointer"
              >
                <span>Put This Plan Into My Free Consultation Form</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-[11px] text-slate-500 font-medium text-center sm:text-right">
                Zero spam • 100% free chat
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
