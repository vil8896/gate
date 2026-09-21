import React from 'react';
import { MessageSquare, FileCheck, Send, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export const PayOnboardProcess: React.FC = () => {
  const steps = [
    {
      step: 1,
      icon: MessageSquare,
      title: 'Free Consultation',
      subtitle: 'Quick 15-min assessment',
      description: 'Tell us about your business model, entity type, and why previous gateway applications faced rejection.',
      badgeText: 'Step 1 • Intake',
      color: {
        theme: 'emerald',
        cardBg: 'bg-emerald-50/60 hover:bg-emerald-50',
        border: 'border-emerald-200/80 hover:border-emerald-400',
        badgeBg: 'bg-emerald-600',
        badgeText: 'text-white',
        tagBg: 'bg-emerald-100 text-emerald-800',
        iconBg: 'bg-emerald-600 text-white shadow-emerald-200',
        topGradient: 'from-emerald-400 to-teal-500',
        glow: 'hover:shadow-emerald-100',
      },
    },
    {
      step: 2,
      icon: FileCheck,
      title: 'Document & Issue Resolution',
      subtitle: 'Complete KYC & compliance fix',
      description: 'We audit your paperwork, website legal policies, and entity documents to resolve gateway red flags.',
      badgeText: 'Step 2 • Audit & Fix',
      color: {
        theme: 'blue',
        cardBg: 'bg-blue-50/60 hover:bg-blue-50',
        border: 'border-blue-200/80 hover:border-blue-400',
        badgeBg: 'bg-blue-600',
        badgeText: 'text-white',
        tagBg: 'bg-blue-100 text-blue-800',
        iconBg: 'bg-blue-600 text-white shadow-blue-200',
        topGradient: 'from-blue-400 to-indigo-500',
        glow: 'hover:shadow-blue-100',
      },
    },
    {
      step: 3,
      icon: Send,
      title: 'Application Resubmission',
      subtitle: 'Direct priority routing',
      description: 'We submit your corrected profile through official merchant channels with all required compliance verifications.',
      badgeText: 'Step 3 • Resubmission',
      color: {
        theme: 'violet',
        cardBg: 'bg-purple-50/60 hover:bg-purple-50',
        border: 'border-purple-200/80 hover:border-purple-400',
        badgeBg: 'bg-purple-600',
        badgeText: 'text-white',
        tagBg: 'bg-purple-100 text-purple-800',
        iconBg: 'bg-purple-600 text-white shadow-purple-200',
        topGradient: 'from-purple-400 to-pink-500',
        glow: 'hover:shadow-purple-100',
      },
    },
    {
      step: 4,
      icon: CheckCircle2,
      title: 'Get Onboarded',
      subtitle: 'Live API & checkout ready',
      description: 'Start accepting cards, UPI, and net banking seamlessly with zero disruption to your business cash flow.',
      badgeText: 'Step 4 • Activation',
      color: {
        theme: 'amber',
        cardBg: 'bg-amber-50/70 hover:bg-amber-50',
        border: 'border-amber-200/90 hover:border-amber-400',
        badgeBg: 'bg-amber-500',
        badgeText: 'text-slate-950 font-extrabold',
        tagBg: 'bg-amber-100 text-amber-900',
        iconBg: 'bg-amber-500 text-slate-950 shadow-amber-200',
        topGradient: 'from-amber-400 to-emerald-500',
        glow: 'hover:shadow-amber-100',
      },
    },
  ];

  return (
    <section id="process-section" className="py-16 sm:py-20 bg-linear-to-b from-white via-slate-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Our Proven Road to Approval
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
            Simple 4-Step Process
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            From rejection to active payments — we make the entire onboarding process colorful, rapid, and stress-free.
          </p>
        </div>

        {/* 4 Connected Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative">
          {steps.map((item, index) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.step}
                className="relative group"
              >
                <div
                  className={`relative flex flex-col justify-between h-full p-6 sm:p-7 rounded-2xl border transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 overflow-hidden ${item.color.cardBg} ${item.color.border} ${item.color.glow}`}
                >
                  {/* Top Color Accent Line */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r ${item.color.topGradient}`} />

                  {/* Header Row with Badge & Icon */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      {/* Step Tag Pill */}
                      <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${item.color.tagBg}`}>
                        {item.badgeText}
                      </span>

                      {/* Prominent Number Circle */}
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black shadow-md ${item.color.badgeBg} ${item.color.badgeText}`}>
                        0{item.step}
                      </div>
                    </div>

                    {/* Prominent Icon Box */}
                    <div className="mb-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105 ${item.color.iconBg}`}>
                        <IconComp className="w-6 h-6 stroke-[2.2]" />
                      </div>
                    </div>

                    {/* Step Title & Subtitle */}
                    <h3 className="text-lg font-extrabold text-slate-900 mb-1 leading-snug font-['Outfit']">
                      {item.title}
                    </h3>
                    <div className="text-xs font-semibold text-slate-600 mb-3">
                      {item.subtitle}
                    </div>

                    {/* Body Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Progress Bar Indicator */}
                  <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      Phase 0{item.step}
                    </span>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4].map((dot) => (
                        <div
                          key={dot}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            dot <= item.step ? item.color.badgeBg : 'bg-slate-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Arrow Connector on Desktop between consecutive cards */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white border border-slate-200 shadow-sm items-center justify-center text-slate-400 pointer-events-none group-hover:text-slate-800 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

