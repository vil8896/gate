import React, { useState } from 'react';
import {
  Send,
  CheckCircle,
  Copy,
  Clock,
  Shield,
  HeartHandshake,
  Mail,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { ServiceCategory } from '../types';

interface ConsultationSectionProps {
  inquiryMessage: string;
  onInquiryMessageChange: (msg: string) => void;
  selectedService: string;
  selectedCategory: ServiceCategory;
}

export const ConsultationSection: React.FC<ConsultationSectionProps> = ({
  inquiryMessage,
  onInquiryMessageChange,
  selectedService,
  selectedCategory
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyWebsite, setCompanyWebsite] = useState('');
  const [category, setCategory] = useState<ServiceCategory>(selectedCategory || 'integrated');
  const [stage, setStage] = useState('Solo business or Freelancer');
  const [budget, setBudget] = useState('$500 - $1,500 (Complete 1-Week Launch Package)');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedBrief, setCopiedBrief] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  // Synchronize when parent prop changes
  React.useEffect(() => {
    if (selectedCategory) {
      setCategory(selectedCategory);
    }
  }, [selectedCategory]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = `MRD-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(generatedRef);
    setIsSubmitted(true);

    const subject = encodeURIComponent(`Free Consultation Request: ${fullName} ${companyName ? `(${companyName})` : ''} [Ref: ${generatedRef}]`);
    const body = encodeURIComponent(`Consultation Request for Mridalini (mridalini.com)
Reference: ${generatedRef}

Name: ${fullName}
Email: ${email}
Business / Idea Name: ${companyName || 'Not yet named'}
Website: ${companyWebsite || 'None yet'}
Help Requested: ${category.toUpperCase()}
Current Stage: ${stage}
Estimated Budget Range: ${budget}

What I want help with:
${inquiryMessage || selectedService || 'Looking to start or grow my business with simple business & tech guidance.'}
`);

    const mailtoUri = `mailto:hello@mridalini.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoUri;
  };

  const copyBrief = () => {
    const briefContent = `MRIDALINI CONSULTATION REQUEST
Reference: ${referenceId || 'DRAFT'}
Website: https://mridalini.com

Name: ${fullName || '[Your Name]'}
Email: ${email || '[Your Email]'}
Business: ${companyName || '[Idea / Company]'}
Current Stage: ${stage}
Budget: ${budget}
Area: ${category.toUpperCase()}

Notes:
${inquiryMessage || selectedService || 'General business & tech consultation'}`;

    navigator.clipboard.writeText(briefContent);
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 2500);
  };

  return (
    <section id="consultation" className="py-16 md:py-24 bg-white border-t border-sky-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-xs font-bold text-amber-900 mb-3 shadow-xs">
            <HeartHandshake className="w-3.5 h-3.5 text-amber-700" />
            <span>FREE & FRIENDLY • NO PRESSURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-['Outfit'] tracking-tight mb-4">
            Let&apos;s Have a Quick,{' '}
            <span className="text-blue-600">Friendly Chat</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Tell us where you are and what you want to achieve. We&apos;ll explain things simply in plain English,
            with zero pushy sales talk and practical advice you can use immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Left: Assurance & Scope Summary */}
          <div className="lg:col-span-5 bg-[#f0f7ff] border border-sky-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block mb-1">
                OUR PROMISE TO YOU
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-['Outfit'] mb-3">
                Simple Guidance You Can Trust
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Whether you just have an idea written on a napkin or you already have a small shop,
                we treat your goals with care, respect, and total privacy.
              </p>
            </div>

            <div className="space-y-3.5 text-xs text-slate-700 pt-3 border-t border-sky-200/60">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 shrink-0 mt-0.5">
                  <Shield className="w-3.5 h-3.5 text-amber-700" />
                </div>
                <div>
                  <strong className="text-slate-900 block text-xs">100% Private & Confidential</strong>
                  <span className="text-slate-600">Your ideas, financials, and customer numbers stay strictly between us.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-800 shrink-0 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-blue-700" />
                </div>
                <div>
                  <strong className="text-slate-900 block text-xs">Fast 24-Hour Friendly Reply</strong>
                  <span className="text-slate-600">You talk directly to someone who builds and consults, not an offshore call center.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-800 shrink-0 mt-0.5">
                  <HeartHandshake className="w-3.5 h-3.5 text-emerald-700" />
                </div>
                <div>
                  <strong className="text-slate-900 block text-xs">Zero Pressure or Upselling</strong>
                  <span className="text-slate-600">If your business only needs a simple free tool, we will honestly tell you that.</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="bg-white p-5 rounded-2xl border border-sky-200 shadow-2xs space-y-2">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">DIRECT EMAIL INQUIRY:</div>
              <div className="text-sm font-bold text-blue-700 flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500" />
                <span>hello@mridalini.com</span>
              </div>
              <div className="text-xs text-slate-500">
                Official Website: <span className="text-slate-800 font-semibold">https://mridalini.com</span>
              </div>
            </div>
          </div>

          {/* Right: RFP & Consultation Form */}
          <div className="lg:col-span-7 bg-white border-2 border-sky-200 rounded-3xl p-6 sm:p-8 shadow-md relative">
            {isSubmitted ? (
              <div className="py-10 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                    MESSAGE RECEIVED!
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900 font-['Outfit'] mb-2">
                    Thank You, {fullName}!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto mb-4">
                    We received your request and will get back to you personally within 24 hours to arrange our friendly chat.
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-sky-50 border border-sky-200 text-xs text-slate-700 mb-6">
                    <span className="font-medium">Your Request Code:</span>
                    <strong className="text-blue-700 font-mono">{referenceId}</strong>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={copyBrief}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold border border-slate-200 cursor-pointer"
                  >
                    {copiedBrief ? <CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedBrief ? 'Copied to Clipboard!' : 'Copy Summary'}</span>
                  </button>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    <span>Submit Another Question</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Advisory Scope Selection */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
                    What Do You Want Help With? *
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'integrated', label: 'Both Business & Tech' },
                      { id: 'business', label: 'Business Strategy' },
                      { id: 'tech', label: 'Tech & Website Setup' }
                    ].map((opt) => (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => setCategory(opt.id as ServiceCategory)}
                        className={`py-2 px-2 text-center text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                          category === opt.id
                            ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                            : 'bg-sky-50/50 border-sky-200 text-slate-700 hover:bg-sky-50'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Your Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. John Miller"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-sky-50/40 border border-sky-200 focus:border-blue-500 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Your Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-sky-50/40 border border-sky-200 focus:border-blue-500 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Company & Domain */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Business or Idea Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Miller Home Bakery or Idea"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full bg-sky-50/40 border border-sky-200 focus:border-blue-500 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Current Website or Social Page (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. instagram.com/mybusiness"
                      value={companyWebsite}
                      onChange={(e) => setCompanyWebsite(e.target.value)}
                      className="w-full bg-sky-50/40 border border-sky-200 focus:border-blue-500 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Stage & Target Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Where are you right now?
                    </label>
                    <select
                      value={stage}
                      onChange={(e) => setStage(e.target.value)}
                      className="w-full bg-sky-50/40 border border-sky-200 focus:border-blue-500 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none"
                    >
                      <option>Just an idea / Want to launch</option>
                      <option>Solo business or Freelancer</option>
                      <option>Local shop or service provider</option>
                      <option>Growing small team (2-10 staff)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Approximate Budget
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full bg-sky-50/40 border border-sky-200 focus:border-blue-500 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none"
                    >
                      <option>Under $500 (Quick Starter Setup & Checklist)</option>
                      <option>$500 - $1,500 (Complete 1-Week Launch Package)</option>
                      <option>$1,500 - $3,000 (Full Business & Tech Overhaul)</option>
                      <option>Flexible / Just exploring options right now</option>
                    </select>
                  </div>
                </div>

                {/* Message / Objectives */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-bold text-slate-700">
                      What are you trying to accomplish or fix?
                    </label>
                    {selectedService && (
                      <span className="text-[11px] font-bold text-blue-600">
                        Topic: {selectedService}
                      </span>
                    )}
                  </div>
                  <textarea
                    rows={4}
                    placeholder="Tell us a little bit about what you do, who your customers are, and what feels stuck or confusing right now..."
                    value={inquiryMessage}
                    onChange={(e) => onInquiryMessageChange(e.target.value)}
                    className="w-full bg-sky-50/40 border border-sky-200 focus:border-blue-500 rounded-xl p-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                {/* Submit button */}
                <button
                  id="btn-submit-rfp"
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Free Consultation Request (hello@mridalini.com)</span>
                </button>

                <p className="text-[11px] text-slate-500 text-center">
                  We respect your privacy. No marketing lists, no spam, no high-pressure sales calls.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
