import React from 'react';
import { ArrowRight, Store, User, Users, Building2, FileCheck2 } from 'lucide-react';

interface PayOnboardWhoWeHelpProps {
  onGetStarted: () => void;
}

export const PayOnboardWhoWeHelp: React.FC<PayOnboardWhoWeHelpProps> = ({ onGetStarted }) => {
  const categories = [
    {
      icon: Store,
      title: 'Small Businesses',
      description: 'Retail, Shops, Cafes, Restaurants, etc.',
    },
    {
      icon: User,
      title: 'Individuals',
      description: 'Freelancers, Professionals, Self-employed',
    },
    {
      icon: Users,
      title: 'NGOs',
      description: 'Trusts, Societies, Non-profit Organizations',
    },
    {
      icon: Building2,
      title: 'Pvt Ltd / LLP',
      description: 'Companies & Startups',
    },
    {
      icon: FileCheck2,
      title: 'Proprietorship & Other Entities',
      description: 'All types of business structures',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50/60 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start">
          
          {/* Left Description & CTA */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              WHO WE HELP
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight font-['Outfit']">
              All Types of Businesses <br className="hidden sm:inline" />
              & Organizations
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Whether you're a small shop or a growing startup, we're here to support you.
            </p>

            <div className="pt-2">
              <button
                id="who-we-help-get-started"
                onClick={onGetStarted}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#059669] hover:bg-[#047857] text-white font-bold text-sm shadow-xs transition-all cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right 5-Card Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {categories.map((cat, idx) => {
              const IconComp = cat.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-md transition-all group"
                >
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    <IconComp className="w-5 h-5 stroke-[2]" />
                  </div>

                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1 leading-snug">
                    {cat.title}
                  </h3>

                  <p className="text-[11px] sm:text-xs text-slate-500 leading-normal">
                    {cat.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
