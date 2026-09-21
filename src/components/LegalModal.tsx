import React from 'react';
import { X, Shield, FileText, AlertCircle, Mail, RotateCcw } from 'lucide-react';

export type LegalDocType = 'privacy' | 'terms' | 'disclaimer' | 'refund';

interface LegalModalProps {
  isOpen: boolean;
  docType: LegalDocType;
  onClose: () => void;
  onSelectDoc: (type: LegalDocType) => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  docType,
  onClose,
  onSelectDoc,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col max-h-[90vh] overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/70 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center justify-center">
              {docType === 'privacy' && <Shield className="w-5 h-5" />}
              {docType === 'terms' && <FileText className="w-5 h-5" />}
              {docType === 'disclaimer' && <AlertCircle className="w-5 h-5" />}
              {docType === 'refund' && <RotateCcw className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 font-['Outfit']">
                {docType === 'privacy' && 'Privacy Policy'}
                {docType === 'terms' && 'Terms of Service'}
                {docType === 'disclaimer' && 'Non-Affiliation & Legal Disclaimer'}
                {docType === 'refund' && 'Refund & Cancellation Policy'}
              </h3>
              <p className="text-xs text-slate-500">
                Operated by Mridalini Consulting • Last updated: September 2026
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="px-6 py-3 bg-slate-100/70 border-b border-slate-200/80 flex items-center gap-2 overflow-x-auto shrink-0">
          <button
            onClick={() => onSelectDoc('privacy')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              docType === 'privacy'
                ? 'bg-white text-emerald-800 shadow-xs border border-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => onSelectDoc('terms')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              docType === 'terms'
                ? 'bg-white text-emerald-800 shadow-xs border border-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Terms of Service
          </button>
          <button
            onClick={() => onSelectDoc('refund')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              docType === 'refund'
                ? 'bg-white text-emerald-800 shadow-xs border border-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Refund & Cancellation
          </button>
          <button
            onClick={() => onSelectDoc('disclaimer')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              docType === 'disclaimer'
                ? 'bg-white text-emerald-800 shadow-xs border border-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Disclaimer & Trademarks
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
          {docType === 'privacy' && (
            <>
              <section className="space-y-2">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  1. Information We Collect
                </h4>
                <p>
                  Mridalini Consulting ("Gatewaywala", "we", "us", or "our") respects your privacy. When you request a consultation, submit our assessment forms, or contact us via WhatsApp or email, we may collect:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li>Your Name and Contact Information (e.g. Phone Number, WhatsApp Number, Email Address).</li>
                  <li>Business Information (Business name, constitution type e.g., Proprietorship, Pvt Ltd, NGO, or Freelancer).</li>
                  <li>Payment gateway application details (e.g., rejected provider, reason codes, compliance documentation status).</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  2. Purpose of Data Processing
                </h4>
                <p>
                  Your information is used strictly to:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li>Assess your payment gateway rejection reasons and formulate a compliant resolution strategy.</li>
                  <li>Communicate with you directly via WhatsApp, phone, or email regarding your inquiry.</li>
                  <li>Deliver contracted documentation advisory and website compliance auditing services.</li>
                </ul>
                <p className="font-semibold text-slate-800">
                  We NEVER sell, trade, rent, or distribute your personal or commercial contact information to third-party brokers or advertisers.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  3. Google Ads Compliance & Cookie Disclosure
                </h4>
                <p>
                  We comply strictly with Google Ads Transparency and Data Collection Policies. When you visit our website, standard analytical measurement tags (e.g. Google Analytics / Google Ads conversion tracking) may set lightweight first-party or third-party cookies to evaluate marketing campaign performance and prevent fraudulent bot traffic. You may disable cookies at any time through your browser settings.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  4. Data Security & Storage
                </h4>
                <p>
                  We implement enterprise-grade TLS encryption across all digital touchpoints. Client documentation shared with us for KYC auditing is stored securely in encrypted environments and deleted upon project conclusion upon request.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  5. Contact Our Privacy Officer
                </h4>
                <p>
                  To exercise your data privacy rights, request removal of your contact details, or submit questions regarding this policy, email{' '}
                  <a href="mailto:support@mridalini.com" className="text-emerald-700 underline font-bold">
                    support@mridalini.com
                  </a>.
                </p>
              </section>
            </>
          )}

          {docType === 'terms' && (
            <>
              <section className="space-y-2">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  1. Scope of Services
                </h4>
                <p>
                  Gatewaywala (a specialized division of Mridalini Consulting) provides independent website compliance auditing, documentation review, and technical integration advisory services for businesses seeking payment gateway merchant accounts in India and globally.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  2. Independent Advisory Status (No Guaranteed Outcomes)
                </h4>
                <p>
                  Our advisory assists merchants in satisfying standard KYC, regulatory policies, and technical guidelines prescribed by banking networks. <strong>Underwriting risk approval, merchant account activation, settlement cycles, and transactional limits remain at the sole, independent discretion of the third-party payment aggregators and banking partners.</strong>
                </p>
                <p>
                  While we apply industry best practices to maximize approval rates, Gatewaywala cannot and does not issue absolute legal or financial guarantees of third-party approval.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  3. Client Obligations
                </h4>
                <p>
                  Clients agree to provide truthful, accurate, and lawful business information, including valid registration proofs, PAN, GST certificates, and genuine product/service descriptions. We reserve the right to decline or terminate consultation with any merchant promoting illegal, infringing, or prohibited categories under RBI or Indian law.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  4. Limitation of Liability
                </h4>
                <p>
                  In no event shall Mridalini Consulting or Gatewaywala be liable for indirect, incidental, punitive, or consequential damages resulting from third-party gateway downtime, settlement freezes, or underwriting rejections enacted by independent payment networks.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  5. Contact & Support
                </h4>
                <p>
                  For inquiries or questions concerning these Terms, reach out to our team at{' '}
                  <a href="mailto:support@mridalini.com" className="text-emerald-700 underline font-bold">
                    support@mridalini.com
                  </a>.
                </p>
              </section>
            </>
          )}

          {docType === 'refund' && (
            <>
              <section className="space-y-2">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  1. Free Initial Consultation
                </h4>
                <p>
                  All introductory diagnostics, initial rejection reason evaluations, and document checklist reviews provided via our online consultation form or WhatsApp are completely free of charge. No payment details are requested or charged for initial consultations.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  2. Paid Advisory Engagements
                </h4>
                <p>
                  For in-depth end-to-end services (such as custom website legal policy drafting, technical API integration setup, or dedicated re-application management), a transparent, scope-based fee is communicated and agreed upon in writing prior to commencing work.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  3. Cancellation & Refund Policy
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li>
                    <strong>Before Work Commences:</strong> If a client cancels a paid service engagement within 24 hours of payment and before our compliance audit or policy drafting has commenced, a 100% full refund is issued.
                  </li>
                  <li>
                    <strong>In-Progress Services:</strong> Once audit reports, custom legal pages, or integration code snippets have been generated and delivered, professional advisory fees are non-refundable due to the labor-intensive nature of customized consulting.
                  </li>
                  <li>
                    <strong>Ongoing Re-Application Support:</strong> In the unlikely event an aggregator rejects an application after our corrections, we provide continued re-routing guidance and submission support to alternative compliant gateways at zero additional cost.
                  </li>
                </ul>
              </section>

              <section className="space-y-2">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  4. Refund Processing Window
                </h4>
                <p>
                  Eligible refund requests must be emailed to{' '}
                  <a href="mailto:support@mridalini.com" className="text-emerald-700 underline font-bold">
                    support@mridalini.com
                  </a>{' '}
                  with the transaction reference. Approved refunds are processed back to the original source account within 5 to 7 business days.
                </p>
              </section>
            </>
          )}

          {docType === 'disclaimer' && (
            <>
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/90 text-amber-950 space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm text-amber-900">
                  <AlertCircle className="w-4 h-4 text-amber-700" />
                  <span>Google Ads Policy Compliance & Non-Affiliation Statement</span>
                </div>
                <p className="text-xs leading-relaxed text-amber-900">
                  This website is created for educational and professional consultancy purposes. Please read our nominative trademark use and non-affiliation notice below.
                </p>
              </div>

              <section className="space-y-2">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  1. Independent Consultancy
                </h4>
                <p>
                  <strong>Gatewaywala is an independent merchant consultancy operated by Mridalini Consulting.</strong> We are NOT an authorized bank, financial institution, non-banking financial company (NBFC), or licensed payment aggregator (PA/PG).
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  2. Third-Party Trademarks & Fair Use
                </h4>
                <p>
                  Razorpay, Cashfree, CCAvenue, Stripe, PayU, PhonePe, PayPal, Paytm, and all other brand names, trademarks, service marks, and trade dress referenced on this website are the sole property of their respective trademark holders.
                </p>
                <p>
                  <strong>Mridalini Consulting / Gatewaywala is NOT affiliated with, authorized by, sponsored by, or endorsed by any of these entities.</strong> Reference to these companies is solely for descriptive and nominative purposes to inform prospective clients about the independent setup and technical support services we offer.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  3. Underwriting & Final Approval Disclaimer
                </h4>
                <p>
                  Payment gateway providers independently enforce risk management guidelines under the Reserve Bank of India (RBI) Payment and Settlement Systems Act. Mridalini Consulting assists merchants with document completeness, legal website policies (Terms, Privacy, Refund), and correct category assignment. Final onboarding decisions rest exclusively with the acquiring aggregator.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  4. Support Communication
                </h4>
                <p>
                  For questions or legal correspondence regarding our advisory disclosures, email{' '}
                  <a href="mailto:support@mridalini.com" className="text-emerald-700 underline font-bold">
                    support@mridalini.com
                  </a>.
                </p>
              </section>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Mail className="w-3.5 h-3.5 text-slate-400" />
            <span>support@mridalini.com</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs cursor-pointer"
          >
            I Understand
          </button>
        </div>

      </div>
    </div>
  );
};
