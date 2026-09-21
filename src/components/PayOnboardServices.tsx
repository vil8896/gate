import React from 'react';
import { ArrowRight, FileSearch, FileText, Settings, Headphones } from 'lucide-react';

interface PayOnboardServicesProps {
  onLearnMore: () => void;
}

export const PayOnboardServices: React.FC<PayOnboardServicesProps> = ({ onLearnMore }) => {
  const services = [
    {
      icon: FileSearch,
      title: 'Application Review & Error Fixing',
      description: 'We analyze the rejection reason and fix issues in your application.',
    },
    {
      icon: FileText,
      title: 'Documentation Support',
      description: 'Help with KYC, business proofs, integration & compliance.',
    },
    {
      icon: Settings,
      title: 'Technical Integration Guidance',
      description: 'Assistance with API setup and payment integration.',
    },
    {
      icon: Headphones,
      title: 'Dedicated Consultation',
      description: 'Get expert support from start to finish.',
    },
  ];

  return (
    <section id="services-section" className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Left Headline Column */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#059669]">
              OUR SERVICES
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight font-['Outfit']">
              Complete Payment Gateway <br className="hidden sm:inline" />
              Onboarding Support
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We handle the complex process, so you can focus on running your business.
            </p>

            <div className="pt-2">
              <button
                id="services-btn-learn-more"
                onClick={onLearnMore}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-300 hover:border-slate-800 bg-white text-slate-800 hover:text-slate-900 font-bold text-sm transition-colors cursor-pointer"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right 4-Card Horizontal Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((srv, idx) => {
              const IconComp = srv.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-start p-4 rounded-2xl bg-white hover:bg-slate-50/60 transition-all border border-transparent hover:border-slate-100 group"
                >
                  {/* Sky Blue Icon Square */}
                  <div className="w-12 h-12 rounded-2xl bg-sky-100 flex items-center justify-center text-sky-600 mb-4 group-hover:scale-105 transition-transform">
                    <IconComp className="w-6 h-6 stroke-[2]" />
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug mb-2">
                    {srv.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {srv.description}
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
