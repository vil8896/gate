import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  ArrowLeft,
  CreditCard,
  CheckCircle2,
  AlertTriangle,
  Globe,
  Sparkles,
  Lock,
  ArrowRight,
  HelpCircle,
  Clock,
  FileText,
  DollarSign,
  Send,
  ExternalLink,
  MessageSquare
} from 'lucide-react';

interface GatewaywalaPageProps {
  onBackToHome: () => void;
}

interface GatewayRecommendation {
  name: string;
  bestFor: string;
  fees: string;
  approvalTime: string;
  documents: string[];
  currencies: string;
  highlight: string;
}

export const GatewaywalaPage: React.FC<GatewaywalaPageProps> = ({ onBackToHome }) => {
  // Business type selector for interactive readiness
  const [businessType, setBusinessType] = useState<'individual' | 'registered' | 'ecommerce' | 'international'>('individual');
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryGateway, setInquiryGateway] = useState('Razorpay');
  const [inquiryIssue, setInquiryIssue] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Keep title updated and scroll to top
  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'Gatewaywala – Payment Gateway Setup Advisory | Mridalini Consulting';
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'AW-10895732953', {
        page_path: '/gatewaywala',
        page_title: 'Gatewaywala – Payment Gateway Setup Advisory'
      });
    }

    return () => {
      document.title = prevTitle;
    };
  }, []);

  const getRecommendations = (): GatewayRecommendation[] => {
    switch (businessType) {
      case 'individual':
        return [
          {
            name: 'Instamojo & Cashfree',
            bestFor: 'Freelancers, tutors, and solo creators without GST',
            fees: '2.0% + GST per domestic transaction',
            approvalTime: '24–48 Hours',
            documents: ['PAN Card', 'Aadhaar Card', 'Cancelled Cheque / Bank Statement', 'Social Profile / Portfolio Link'],
            currencies: 'INR (Domestic UPI & Cards)',
            highlight: 'Easiest onboarding for unregistered individuals; zero setup fees.'
          },
          {
            name: 'PhonePe Payment Gateway',
            bestFor: 'High UPI transaction volume with minimal MDR',
            fees: 'Competitive rates, lowest UPI rejection rate',
            approvalTime: '2–3 Business Days',
            documents: ['PAN Card', 'Bank Account proof', 'Identity Proof', 'Basic business description'],
            currencies: 'INR (UPI, Cards, Netbanking)',
            highlight: 'Very high conversion rates on mobile payments in India.'
          }
        ];
      case 'registered':
        return [
          {
            name: 'Razorpay',
            bestFor: 'Proprietorships, Partnerships & Pvt Ltd companies wanting all-in-one features',
            fees: '2.0% standard MDR for domestic cards & UPI',
            approvalTime: '1–2 Business Days with clean paperwork',
            documents: ['GSTIN Certificate', 'Company / Firm PAN', 'Authorized Signatory KYC', 'Cancelled Cheque', 'Mandatory Website Policies'],
            currencies: 'INR & 100+ International Currencies',
            highlight: 'Best developer APIs, automated smart routing, and fast payouts.'
          },
          {
            name: 'Cashfree Payments',
            bestFor: 'Instant payouts, automated vendor splits & subscriptions',
            fees: '1.9% – 2.0% standard MDR',
            approvalTime: '2–3 Business Days',
            documents: ['GST Certificate', 'PAN', 'Bank Account Verification', 'Business Registration Proof'],
            currencies: 'INR & International card processing',
            highlight: 'Industry leader in 24x7 instant bank payouts and refund automation.'
          }
        ];
      case 'ecommerce':
        return [
          {
            name: 'Razorpay + Cashfree (Dual Gateway Setup)',
            bestFor: 'Online stores, Shopify, WooCommerce with zero cart dropouts',
            fees: '1.85% – 2.0% with volume discount opportunities',
            approvalTime: '2–4 Business Days',
            documents: ['GST Certificate', 'Proof of Business Premises', 'Website with Terms, Shipping & Refund Policies'],
            currencies: 'INR, Domestic COD to Prepaid conversion',
            highlight: 'Dual routing eliminates server downtime during peak flash sales.'
          },
          {
            name: 'PayU India',
            bestFor: 'High-volume merchants wanting custom checkout embeds',
            fees: 'Negotiable based on monthly transaction volume',
            approvalTime: '3–5 Business Days',
            documents: ['Full Corporate KYC', 'Audited financials (if high volume)', 'Compliant e-commerce website'],
            currencies: 'INR & International',
            highlight: 'Advanced fraud detection and high transaction success rates.'
          }
        ];
      case 'international':
        return [
          {
            name: 'Stripe India',
            bestFor: 'SaaS, global consultancies, and digital agencies billing USD/EUR',
            fees: '3.0% – 4.3% + ₹3 per international card + 2% conversion',
            approvalTime: '1–3 Business Days',
            documents: ['IEC (Import Export Code) if applicable', 'GST Certificate / PAN', 'Detailed service description & refund policy', 'Valid Bank Account for auto-payouts'],
            currencies: 'USD, EUR, GBP, AUD, CAD and 135+ currencies',
            highlight: 'Gold standard for international recurring billing and clean digital invoices.'
          },
          {
            name: 'PayPal + Razorpay International',
            bestFor: 'Freelance service providers and international agency clients',
            fees: '3.0% – 4.4% + fixed fee based on currency',
            approvalTime: 'Immediate for standard PayPal, 3–4 days for Razorpay multi-currency',
            documents: ['PAN Card', 'Purpose Code selection for RBI compliance', 'Bank Account for Auto-Withdrawal'],
            currencies: 'Global cross-border payments with automated FIRC',
            highlight: 'High buyer trust for US and European corporate clients.'
          }
        ];
    }
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-10895732953',
        event_category: 'inquiry_submit',
        event_label: inquiryGateway || 'gateway_advisory'
      });
    }

    const message = encodeURIComponent(
      `*Gatewaywala Setup Inquiry*\n\n` +
      `👤 *Name:* ${inquiryName || 'Merchant'}\n` +
      `📞 *Phone:* ${inquiryPhone || 'Not provided'}\n` +
      `🎯 *Target Gateway:* ${inquiryGateway}\n` +
      `📝 *Details:* ${inquiryIssue || 'Need gateway advisory & setup assistance'}`
    );

    window.open(`https://wa.me/918123091913?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#f0f7ff] text-slate-800 font-sans selection:bg-amber-300 selection:text-slate-900 pb-20">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-sky-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            id="gatewaywala-back-btn"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors cursor-pointer py-1.5 px-3 rounded-lg hover:bg-sky-50"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Mridalini Consulting</span>
          </button>

          {/* Partner & Live Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs text-emerald-800">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span className="font-semibold text-slate-800">Gatewaywala</span>
            <span className="text-slate-300">•</span>
            <span className="text-[11px] text-emerald-700 font-medium">Payment Gateway Advisory</span>
          </div>
        </div>
      </header>

      {/* Main Hero Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        {/* Notice Pill */}
        <div className="max-w-3xl mx-auto text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-800">
            <CreditCard className="w-4 h-4 text-blue-600" />
            <span>Dedicated Payment Gateway Advisory & Onboarding</span>
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-['Outfit'] tracking-tight leading-tight mb-4">
            Gatewaywala:{' '}
            <span className="text-blue-600 underline decoration-amber-400 decoration-wavy decoration-2">
              Payment Gateway Setup
            </span>{' '}
            Made Simple.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Stop getting your payment gateway rejected. From Razorpay & Cashfree in India
            to Stripe & PayPal worldwide, we handle your merchant KYC, documentation, compliance policies,
            and website integration with zero technical headaches.
          </p>
        </div>

        {/* 4 Core Value Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          <div className="bg-white border border-sky-100 rounded-2xl p-5 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-slate-900 mb-1 font-['Outfit']">
              100% First-Time KYC Approval
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              We audit your business documents, select the right Merchant Category Code (MCC),
              and draft compliant Refund, Terms, and Privacy pages so you pass gateway audits without rejection.
            </p>
          </div>

          <div className="bg-white border border-sky-100 rounded-2xl p-5 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-3">
              <CreditCard className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-slate-900 mb-1 font-['Outfit']">
              India Domestic Stack
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Instant UPI (GPay, PhonePe, Paytm), Credit/Debit Cards, NetBanking, EMI, and AutoPay setup
              across Razorpay, Cashfree, and PhonePe PG with T+1 settlement.
            </p>
          </div>

          <div className="bg-white border border-sky-100 rounded-2xl p-5 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
              <Globe className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-slate-900 mb-1 font-['Outfit']">
              International & Forex Payments
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Accept USD, EUR, GBP from clients worldwide via Stripe and PayPal. Includes automated FIRC
              (Foreign Inward Remittance Certificate) guidance for export tax exemptions.
            </p>
          </div>

          <div className="bg-white border border-sky-100 rounded-2xl p-5 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-3">
              <Sparkles className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-slate-900 mb-1 font-['Outfit']">
              Zero-Code Checkout Links
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Don’t have a website? No problem. We set up branded payment links and WhatsApp QR codes so
              you can receive credit card and UPI payments directly on your phone today.
            </p>
          </div>
        </div>

        {/* Interactive Gateway Readiness Tool */}
        <div className="bg-white border border-sky-200 rounded-3xl p-6 sm:p-10 mb-14 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Interactive Gateway Finder</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Outfit']">
              Which Payment Gateway Is Best for Your Business?
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Select your business model to see recommended gateways, document checklists, and setup timelines.
            </p>
          </div>

          {/* Business Type Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mb-8">
            <button
              onClick={() => setBusinessType('individual')}
              className={`p-3 rounded-xl text-xs font-bold transition-all cursor-pointer border text-center ${
                businessType === 'individual'
                  ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              Freelancer / Solo Creator
            </button>
            <button
              onClick={() => setBusinessType('registered')}
              className={`p-3 rounded-xl text-xs font-bold transition-all cursor-pointer border text-center ${
                businessType === 'registered'
                  ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              Registered Firm / Pvt Ltd
            </button>
            <button
              onClick={() => setBusinessType('ecommerce')}
              className={`p-3 rounded-xl text-xs font-bold transition-all cursor-pointer border text-center ${
                businessType === 'ecommerce'
                  ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              E-Commerce Store
            </button>
            <button
              onClick={() => setBusinessType('international')}
              className={`p-3 rounded-xl text-xs font-bold transition-all cursor-pointer border text-center ${
                businessType === 'international'
                  ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              Global / Export Billing
            </button>
          </div>

          {/* Recommendations Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {getRecommendations().map((rec, i) => (
              <div
                key={i}
                className="bg-slate-50/70 border border-sky-100 rounded-2xl p-6 relative overflow-hidden"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-slate-900 font-['Outfit']">
                    {rec.name}
                  </h3>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                    <Clock className="w-3 h-3" />
                    {rec.approvalTime}
                  </span>
                </div>
                <p className="text-xs text-slate-600 mb-4">{rec.bestFor}</p>

                <div className="space-y-3 mb-5 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-blue-600 shrink-0" />
                    <span><strong>Fee Structure:</strong> {rec.fees}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Currencies:</strong> {rec.currencies}</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-3.5 border border-sky-100 mb-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-blue-600" />
                    <span>Required KYC Documents</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {rec.documents.map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900 font-medium">
                  💡 {rec.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Common Rejections We Fix */}
        <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white rounded-3xl p-6 sm:p-10 mb-14 shadow-lg">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold mb-2">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Common Payment Gateway Obstacles</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-['Outfit']">
                Why Do Payment Gateways Reject Businesses?
              </h2>
              <p className="text-sm text-slate-300 mt-2">
                Payment gateways are heavily regulated by the RBI and card networks. Here is how Gatewaywala prepares your application to maximize approval rates:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="bg-white/10 border border-white/10 rounded-xl p-4">
                <div className="font-bold text-amber-300 text-sm mb-1">1. Missing Website Policy Pages</div>
                <p className="text-slate-300 leading-relaxed">
                  Gateways immediately reject applications if your website lacks clear Refund & Cancellation terms, Shipping timeline, and contact address. We provide pre-vetted, compliant legal text.
                </p>
              </div>

              <div className="bg-white/10 border border-white/10 rounded-xl p-4">
                <div className="font-bold text-amber-300 text-sm mb-1">2. Wrong Business Category (MCC)</div>
                <p className="text-slate-300 leading-relaxed">
                  Classifying as financial services, high-risk advisory, or prohibited categories triggers automated flags. We help position your business accurately so compliance approves you smoothly.
                </p>
              </div>

              <div className="bg-white/10 border border-white/10 rounded-xl p-4">
                <div className="font-bold text-amber-300 text-sm mb-1">3. International Payment Blocks</div>
                <p className="text-slate-300 leading-relaxed">
                  Foreign cards require 3D-Secure exemption handling and RBI Purpose Codes (P0802, P0801) for clean settlement. We configure international merchant accounts correctly.
                </p>
              </div>

              <div className="bg-white/10 border border-white/10 rounded-xl p-4">
                <div className="font-bold text-amber-300 text-sm mb-1">4. Settlement Holds & Freezes</div>
                <p className="text-slate-300 leading-relaxed">
                  Sudden spikes in sales trigger automated fraud algorithms that lock payouts for 90 days. We guide you on pre-notifying compliance teams and setting healthy velocity limits.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Setup Inquiry Form */}
        <div className="bg-white border border-sky-200 rounded-3xl p-6 sm:p-10 max-w-3xl mx-auto shadow-sm mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Outfit']">
              Request Gatewaywala Setup Assistance
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Tell us what payment gateway you need or what issue you are facing. We reply within 24 hours.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Inquiry Received!</h3>
              <p className="text-xs text-slate-600 mb-4">
                Thank you, {inquiryName}. Our payment gateway specialist will review your details and reach out on {inquiryPhone || 'your contact'}.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-blue-600 hover:underline cursor-pointer"
                >
                  Send another inquiry
                </button>
                <button
                  onClick={onBackToHome}
                  className="px-5 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 cursor-pointer"
                >
                  Return to Home
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleInquirySubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    placeholder="e.g. Anjali Sharma"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={inquiryPhone}
                    onChange={(e) => setInquiryPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Target Gateway *
                </label>
                <select
                  value={inquiryGateway}
                  onChange={(e) => setInquiryGateway(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                >
                  <option value="Razorpay">Razorpay (Domestic & Global)</option>
                  <option value="Cashfree">Cashfree (Fast payouts & UPI)</option>
                  <option value="Stripe">Stripe (International & Multi-currency)</option>
                  <option value="PhonePe">PhonePe Payment Gateway</option>
                  <option value="PayPal">PayPal (Global Invoicing)</option>
                  <option value="Instamojo">Instamojo (Freelancers / Solo)</option>
                  <option value="Not Sure">Not sure — Need Recommendation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  What Do You Need Help With?
                </label>
                <textarea
                  rows={3}
                  value={inquiryIssue}
                  onChange={(e) => setInquiryIssue(e.target.value)}
                  placeholder="e.g. My Razorpay account got rejected due to missing website policies, or I need to accept USD payments from US clients..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Gateway Setup Request</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* Quick Direct WhatsApp option */}
          <div className="mt-6 pt-6 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-500 mb-2">Prefer instant chat?</p>
            <a
              href="https://wa.me/918123091913?text=Hi%20Gatewaywala,%20I%20need%20help%20setting%20up%20a%20payment%20gateway%20for%20my%20business"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 py-2 px-4 rounded-xl transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>Chat Directly on WhatsApp</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};
