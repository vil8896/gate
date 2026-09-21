import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export const PayOnboardFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'Is Gatewaywala officially affiliated with Razorpay, Cashfree, or CCAvenue?',
      answer:
        'No. Gatewaywala is an independent technical onboarding, documentation advisory, and website compliance consultancy operated by Mridalini Consulting. We are not an official partner, bank, or payment aggregator. All company names and trademarks (Razorpay, Cashfree, CCAvenue, Stripe, Paytm, etc.) are used solely for descriptive, nominative identification of the third-party platforms we help clients integrate.',
    },
    {
      question: 'Can Gatewaywala guarantee 100% approval of my payment gateway account?',
      answer:
        'No consultancy can legally or truthfully guarantee 100% third-party approval. Under RBI regulations, risk underwriting and merchant account activation are decided exclusively by the respective payment aggregators and their acquiring bank partners. What Gatewaywala does is diagnose your rejection cause, fix website compliance defects, prepare compliant policies, and structure your KYC documentation to maximize your approval probability.',
    },
    {
      question: 'What happens if my business application gets rejected again?',
      answer:
        'If a gateway provides specific rejection feedback, our team reviews the rejection remarks, updates your documents or website policies accordingly, and guides you in reapplying or routing to an alternative RBI-authorized payment aggregator that supports your specific business category or merchant risk profile.',
    },
    {
      question: 'How long does the payment gateway onboarding and audit process take?',
      answer:
        'Our initial website compliance audit and documentation review is usually completed within 24 to 48 business hours. Once documents and mandatory website pages (Privacy Policy, Terms, Refund Policy, Contact) are in place, the gateway aggregator’s standard review typically takes between 2 to 5 business days depending on their underwriting queue.',
    },
    {
      question: 'What business models and categories do you support?',
      answer:
        'We assist individuals, sole proprietors, partnership firms, LLPs, Private Limited companies, trusts, and registered NGOs operating in e-commerce, digital services, SaaS, ed-tech, B2B wholesale, and consulting. We strictly do not support illegal, counterfeit, or prohibited categories under Indian law or RBI regulations.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-2.5 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/70 border border-emerald-200 text-[#059669] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>TRANSPARENCY & FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Clear, honest answers about our independent advisory services, compliance standards, and onboarding timelines.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-white border-emerald-300 shadow-sm'
                    : 'bg-white/80 border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-emerald-100 text-emerald-800 rotate-180'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
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
