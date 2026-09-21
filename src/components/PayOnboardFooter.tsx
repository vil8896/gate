import React from 'react';
import { ShieldCheck, Mail, MessageSquare, ExternalLink, Check, AlertCircle, MapPin } from 'lucide-react';
import { LegalDocType } from './LegalModal';

interface PayOnboardFooterProps {
  onOpenLegal: (type: LegalDocType) => void;
  onOpenConsultation: () => void;
  onOpenWhatsApp: () => void;
  onScrollToSection: (sectionId: string) => void;
  onNavigateToMridalini?: () => void;
}

export const PayOnboardFooter: React.FC<PayOnboardFooterProps> = ({
  onOpenLegal,
  onOpenConsultation,
  onOpenWhatsApp,
  onScrollToSection,
  onNavigateToMridalini,
}) => {
  return (
    <footer id="footer" className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Identity */}
          <div className="space-y-3.5 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200/90 flex items-center justify-center shrink-0">
                <span className="font-['Outfit'] font-black text-sm leading-none flex items-center">
                  <span className="text-slate-900">G</span>
                  <span className="text-[#059669]">W</span>
                </span>
              </div>
              <div>
                <span className="font-extrabold text-base tracking-tight text-white font-['Outfit'] block leading-tight">
                  Gatewaywala
                </span>
                {onNavigateToMridalini ? (
                  <button
                    onClick={onNavigateToMridalini}
                    className="text-[11px] text-emerald-400 hover:text-emerald-300 hover:underline font-semibold text-left cursor-pointer block"
                  >
                    By Mridalini Consulting (mridalini.com) ↗
                  </button>
                ) : (
                  <span className="text-[11px] text-emerald-400 font-semibold">
                    By Mridalini Consulting
                  </span>
                )}
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              Independent payment gateway onboarding, compliance audit, and documentation assistance for Indian businesses and global exporters.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 text-[11px] border border-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>SSL 256-Bit Encrypted</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services & Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3.5">
              Advisory Services
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => onScrollToSection('services-section')}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  Payment Gateway Selection
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('rejected-section')}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  Rejection Reason Resolution
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('services-section')}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  Website Compliance & Policy Setup
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('process-section')}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  Document KYC & Fast Onboarding
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('who-we-help')}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  Supported Business Categories
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Contact & Hours */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3.5">
              Official Contact & Location
            </h4>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] text-slate-500 uppercase font-semibold">Primary Support Email</span>
                  <a
                    href="mailto:support@mridalini.com"
                    className="text-white hover:text-emerald-300 font-semibold underline underline-offset-2 transition-colors"
                  >
                    support@mridalini.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] text-slate-500 uppercase font-semibold">Instant Inquiries</span>
                  <button
                    onClick={onOpenWhatsApp}
                    className="text-white hover:text-emerald-300 font-semibold underline underline-offset-2 transition-colors cursor-pointer text-left"
                  >
                    Chat on WhatsApp (+91 81230 91913)
                  </button>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] text-slate-500 uppercase font-semibold">Registered Office</span>
                  <span className="text-slate-300 text-xs leading-snug block">
                    Mridalini Consulting, Sector 62, Noida, Uttar Pradesh 201309, India
                  </span>
                </div>
              </li>
              <li className="text-[11px] text-slate-400 pt-1 border-t border-slate-800">
                Operating Hours: Mon – Sat, 10:00 AM – 7:00 PM IST
                <br />
                Inquiry Response SLA: Within 24 business hours
              </li>
            </ul>
          </div>

          {/* Col 4: Legal & Policies */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3.5">
              Legal & Trust Center
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer flex items-center gap-1.5"
                >
                  <span>Privacy Policy</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer flex items-center gap-1.5"
                >
                  <span>Terms of Service</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('refund')}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer flex items-center gap-1.5"
                >
                  <span>Refund & Cancellation</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('disclaimer')}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer flex items-center gap-1.5"
                >
                  <span>Non-Affiliation Disclaimer</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-700/80 hover:bg-emerald-600 text-white font-bold text-[11px] mt-2 transition-colors cursor-pointer"
                >
                  <span>Request Free Audit</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Google Ads Compliance: Prominent Non-Affiliation & Trademark Notice */}
        <div className="my-8 p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-slate-800 text-slate-400 text-[11px] leading-relaxed space-y-2">
          <div className="flex items-center gap-2 text-white font-bold text-xs">
            <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Advertising Transparency & Legal Disclaimer:</span>
          </div>
          <p>
            Gatewaywala is an independent technical onboarding, website compliance auditing, and documentation advisory service operated by <strong>Mridalini Consulting</strong>. We are NOT a payment aggregator, banking entity, or financial institution.
          </p>
          <p>
            Razorpay, Cashfree, CCAvenue, Stripe, PayU, PhonePe, PayPal, and Paytm are trademarks and registered trademarks of their respective holders. <strong>Mridalini Consulting / Gatewaywala has no affiliation, sponsorship, or endorsement with these entities.</strong> All brand references are purely nominative to describe the independent integration and compliance advisory services provided.
          </p>
          <p>
            Underwriting approvals, merchant account activation, settlement holds, and transactional limits are decided exclusively by the respective payment aggregators and their acquiring banking partners in accordance with RBI regulations. We provide documentation assistance and do not guarantee third-party approvals.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            © {new Date().getFullYear()} Mridalini Consulting. All rights reserved.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal('refund')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Refund Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal('disclaimer')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Disclaimer
            </button>
            <span>•</span>
            <a
              href="mailto:support@mridalini.com"
              className="hover:text-slate-300 transition-colors"
            >
              support@mridalini.com
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
