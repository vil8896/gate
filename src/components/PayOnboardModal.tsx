import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { LegalDocType } from './LegalModal';

interface PayOnboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLegal?: (type: LegalDocType) => void;
}

export const PayOnboardModal: React.FC<PayOnboardModalProps> = ({ isOpen, onClose, onOpenLegal }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessType: 'Small Business',
    rejectedGateway: 'Razorpay',
    rejectionReason: '',
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = encodeURIComponent(
      `*New Gateway Approval Request*\n\n` +
      `👤 *Name:* ${formData.name || 'Merchant'}\n` +
      `📞 *Phone:* ${formData.phone || 'Not provided'}\n` +
      `🏢 *Business Type:* ${formData.businessType}\n` +
      `❌ *Rejected Gateway:* ${formData.rejectedGateway}\n` +
      `📝 *Rejection Details:* ${formData.rejectionReason || 'Need complete onboarding review and resolution'}`
    );

    window.open(`https://wa.me/918123091913?text=${message}`, '_blank');
  };

  const handleWhatsAppDirect = () => {
    const fastMsg = encodeURIComponent(
      `Hi Gatewaywala! I need quick assistance getting my payment gateway approved.\n` +
      (formData.name ? `Name: ${formData.name}\n` : '') +
      (formData.phone ? `Phone: ${formData.phone}\n` : '') +
      `Business: ${formData.businessType}\n` +
      `Gateway: ${formData.rejectedGateway}\n` +
      (formData.rejectionReason ? `Issue: ${formData.rejectionReason}\n` : '') +
      `Please guide me with the onboarding process.`
    );
    window.open(`https://wa.me/918123091913?text=${fastMsg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#059669] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 font-['Outfit']">
              Details Sent to WhatsApp!
            </h3>
            <p className="text-slate-600 text-sm max-w-sm mx-auto">
              Your details were prepared for WhatsApp. If your chat didn't open automatically, click below to continue the conversation.
            </p>
            <div className="pt-4 flex flex-col gap-2">
              <button
                onClick={handleWhatsAppDirect}
                className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <span>Open WhatsApp Chat</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full py-2.5 text-xs text-slate-500 font-semibold hover:text-slate-800"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-[#059669] text-xs font-bold mb-2">
                <span>Free Onboarding Consultation</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 font-['Outfit']">
                Get Your Gateway Approved
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Tell us which provider rejected your application. We'll guide you to quick approval.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Priya Sharma"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#059669]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  WhatsApp / Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#059669]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Business Type
                  </label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white focus:outline-hidden focus:ring-2 focus:ring-[#059669]"
                  >
                    <option value="Small Business">Small Business</option>
                    <option value="Individual">Individual / Freelancer</option>
                    <option value="NGO">NGO / Trust</option>
                    <option value="Pvt Ltd / LLP">Pvt Ltd / LLP</option>
                    <option value="Proprietorship">Proprietorship</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Rejected Gateway
                  </label>
                  <select
                    value={formData.rejectedGateway}
                    onChange={(e) => setFormData({ ...formData, rejectedGateway: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white focus:outline-hidden focus:ring-2 focus:ring-[#059669]"
                  >
                    <option value="Razorpay">Razorpay</option>
                    <option value="Cashfree">Cashfree</option>
                    <option value="CCAvenue">CCAvenue</option>
                    <option value="PayU">PayU</option>
                    <option value="PhonePe PG">PhonePe PG</option>
                    <option value="Multiple Gateways">Multiple Gateways</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Rejection Reason (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.rejectionReason}
                  onChange={(e) => setFormData({ ...formData, rejectionReason: e.target.value })}
                  placeholder="e.g. Website compliance, MCC mismatch, or incomplete KYC proof"
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#059669]"
                />
              </div>

              {/* Explicit Consent Checkbox for Google Ads Policy Compliance */}
              <div className="pt-1">
                <label className="flex items-start gap-2.5 text-[11px] sm:text-xs text-slate-600 leading-snug cursor-pointer select-none">
                  <input
                    type="checkbox"
                    required
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded-md border-slate-300 text-[#059669] focus:ring-[#059669] cursor-pointer"
                  />
                  <span>
                    I agree to the{' '}
                    {onOpenLegal ? (
                      <>
                        <button
                          type="button"
                          onClick={() => onOpenLegal('terms')}
                          className="text-emerald-700 underline font-semibold hover:text-emerald-900 cursor-pointer"
                        >
                          Terms of Service
                        </button>
                        ,{' '}
                        <button
                          type="button"
                          onClick={() => onOpenLegal('privacy')}
                          className="text-emerald-700 underline font-semibold hover:text-emerald-900 cursor-pointer"
                        >
                          Privacy Policy
                        </button>
                        , and{' '}
                        <button
                          type="button"
                          onClick={() => onOpenLegal('refund')}
                          className="text-emerald-700 underline font-semibold hover:text-emerald-900 cursor-pointer"
                        >
                          Refund Policy
                        </button>
                      </>
                    ) : (
                      'Terms of Service, Privacy Policy, and Refund Policy'
                    )}
                    . I consent to receiving a free onboarding review via WhatsApp or email.
                  </span>
                </label>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={!agreedToTerms}
                  className={`flex-1 py-3.5 rounded-xl font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2 ${
                    agreedToTerms
                      ? 'bg-[#059669] hover:bg-[#047857] text-white cursor-pointer'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <span>Submit for Free Review</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="px-5 py-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center gap-2 border border-emerald-200 cursor-pointer"
                >
                  <span>Fast WhatsApp</span>
                </button>
              </div>

              {/* Google Ads Compliance Consent Note */}
              <div className="pt-2 text-[11px] text-slate-500 text-center leading-snug">
                Mridalini Consulting provides independent advisory. We never sell your personal data. Questions? Contact{' '}
                <a href="mailto:support@mridalini.com" className="text-emerald-700 underline font-medium">
                  support@mridalini.com
                </a>.
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
