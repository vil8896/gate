import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

interface PayOnboardBottomCtaProps {
  onOpenConsultation: () => void;
  onOpenWhatsApp: () => void;
}

export const PayOnboardBottomCta: React.FC<PayOnboardBottomCtaProps> = ({
  onOpenConsultation,
  onOpenWhatsApp,
}) => {
  return (
    <section className="py-12 bg-slate-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl bg-[#033827] p-8 sm:p-12 lg:p-14 overflow-hidden shadow-2xl border border-emerald-900/40">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            {/* Left Texts */}
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-400">
                <Zap className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                <span>Don't let a rejection stop your business.</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-['Outfit']">
                Get Your Payment Gateway Approved Today
              </h2>

              <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed font-normal">
                Talk to our experts and start accepting payments without any hassle.
              </p>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col items-start lg:items-end gap-3 shrink-0">
              <button
                id="bottom-cta-btn"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#059669] hover:bg-[#10b981] text-white font-bold text-base shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                id="bottom-cta-whatsapp"
                onClick={onOpenWhatsApp}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-emerald-200 hover:text-white transition-colors cursor-pointer"
              >
                {/* WhatsApp icon */}
                <svg className="w-4 h-4 fill-[#25D366]" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>Message on WhatsApp</span>
              </button>

              <span className="text-[10px] text-emerald-200/70 text-left lg:text-right max-w-xs">
                Independent onboarding guidance. Approvals decided by respective aggregators.
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
