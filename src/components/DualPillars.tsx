import React, { useState } from 'react';
import {
  Compass,
  TrendingUp,
  Users,
  CheckCircle2,
  ArrowRight,
  Globe,
  CreditCard,
  Cpu,
  Sparkles,
  Zap,
  HelpCircle
} from 'lucide-react';
import { BUSINESS_SERVICES, TECH_SERVICES } from '../data/consultingData';
import { ConsultingService } from '../types';

interface DualPillarsProps {
  onSelectServiceForInquiry: (serviceName: string, category: 'business' | 'tech' | 'integrated') => void;
}

export const DualPillars: React.FC<DualPillarsProps> = ({ onSelectServiceForInquiry }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'business' | 'tech'>('all');

  const renderIcon = (name: string, category: 'business' | 'tech') => {
    const isTech = category === 'tech';
    const iconColor = isTech ? 'text-blue-700' : 'text-amber-800';
    const iconBg = isTech ? 'bg-blue-100 border-blue-200' : 'bg-amber-100 border-amber-200';

    switch (name) {
      case 'Compass':
        return <div className={`w-10 h-10 rounded-xl ${iconBg} border flex items-center justify-center ${iconColor}`}><Compass className="w-5 h-5" /></div>;
      case 'TrendingUp':
        return <div className={`w-10 h-10 rounded-xl ${iconBg} border flex items-center justify-center ${iconColor}`}><TrendingUp className="w-5 h-5" /></div>;
      case 'Users':
        return <div className={`w-10 h-10 rounded-xl ${iconBg} border flex items-center justify-center ${iconColor}`}><Users className="w-5 h-5" /></div>;
      case 'Globe':
        return <div className={`w-10 h-10 rounded-xl ${iconBg} border flex items-center justify-center ${iconColor}`}><Globe className="w-5 h-5" /></div>;
      case 'CreditCard':
        return <div className={`w-10 h-10 rounded-xl ${iconBg} border flex items-center justify-center ${iconColor}`}><CreditCard className="w-5 h-5" /></div>;
      case 'Cpu':
        return <div className={`w-10 h-10 rounded-xl ${iconBg} border flex items-center justify-center ${iconColor}`}><Cpu className="w-5 h-5" /></div>;
      case 'Sparkles':
        return <div className={`w-10 h-10 rounded-xl ${iconBg} border flex items-center justify-center ${iconColor}`}><Sparkles className="w-5 h-5" /></div>;
      case 'CheckCircle2':
      default:
        return <div className={`w-10 h-10 rounded-xl ${iconBg} border flex items-center justify-center ${iconColor}`}><CheckCircle2 className="w-5 h-5" /></div>;
    }
  };

  const renderServiceCard = (service: ConsultingService) => {
    const isTech = service.category === 'tech';
    return (
      <div
        key={service.id}
        id={`service-card-${service.id}`}
        className="bg-white border border-sky-200/80 hover:border-blue-300 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all hover:shadow-md relative group"
      >
        <div>
          <div className="mb-4">
            {renderIcon(service.iconName, service.category as 'business' | 'tech')}
          </div>

          <h3 className="text-xl font-bold text-slate-900 font-['Outfit'] mb-2.5 group-hover:text-blue-700 transition-colors">
            {service.title}
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed mb-5">
            {service.shortDesc}
          </p>

          <div className="mb-5 bg-sky-50/70 rounded-xl p-4 border border-sky-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
              What We Do For You:
            </h4>
            <ul className="space-y-2">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                  <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${isTech ? 'text-blue-600' : 'text-amber-600'}`} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100">
          <div className="mb-4">
            <span className="text-[11px] font-bold text-slate-400 block mb-0.5 uppercase tracking-wider">PROVEN RESULT:</span>
            <span className="text-xs font-semibold text-slate-800">
              {service.metrics}
            </span>
          </div>

          <div className="flex items-center justify-between gap-3">
            <span className="text-[11px] text-slate-500 italic truncate max-w-[180px]">
              {service.idealFor}
            </span>
            <button
              id={`btn-inquire-${service.id}`}
              onClick={() => onSelectServiceForInquiry(service.title, service.category as 'business' | 'tech')}
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-xl bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white border border-blue-200 transition-colors cursor-pointer shrink-0 shadow-xs"
            >
              <span>Get Help With This</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="pillars" className="py-16 md:py-24 bg-[#f0f7ff] border-t border-sky-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-sky-200 text-xs font-bold text-blue-700 mb-3 shadow-xs">
            <span>EVERYTHING YOUR BUSINESS NEEDS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-['Outfit'] tracking-tight mb-4">
            Two Simple Areas.{' '}
            <span className="text-blue-600">Zero Confusion.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Most people either get advice with no tech help, or get a website from someone who doesn’t understand business.
            Mridalini handles both so you get up and running smoothly.
          </p>
        </div>

        {/* Synthesized Advantage Callout */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-white via-sky-50 to-amber-50/50 border border-sky-200 shadow-xs relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wider mb-2">
                <Zap className="w-4 h-4 text-amber-600" />
                <span>Why You Need Both Business & Tech Together</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Outfit'] mb-2">
                A great website is useless without a business plan. And a great idea stays stuck without tech.
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                If you build a website but don&apos;t know what to charge or who your customers are, you won&apos;t make money.
                If you have a great skill but no online payments, domain, or booking link, customers move on to someone else.
                We set up both at the same time so your business actually works from day one.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-sky-200 shadow-xs flex flex-col justify-center">
              <div className="text-xs font-bold text-slate-500 uppercase mb-2">What You Get:</div>
              <div className="text-sm font-bold text-slate-900 mb-2">Complete Launch & Growth Support</div>
              <div className="text-xs text-slate-600 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>Real pricing so you make take-home profit</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  <span>Live website on mridalini.com or your domain</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Friendly guidance whenever you get stuck</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pillar Filter Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            id="tab-pillar-all"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                : 'bg-white text-slate-700 hover:text-blue-700 border border-sky-200'
            }`}
          >
            All Services ({BUSINESS_SERVICES.length + TECH_SERVICES.length})
          </button>
          <button
            id="tab-pillar-business"
            onClick={() => setActiveTab('business')}
            className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
              activeTab === 'business'
                ? 'bg-amber-400 text-amber-950 shadow-md shadow-amber-500/20 border border-amber-400'
                : 'bg-white text-slate-700 hover:text-amber-800 border border-sky-200'
            }`}
          >
            Business Guidance ({BUSINESS_SERVICES.length})
          </button>
          <button
            id="tab-pillar-tech"
            onClick={() => setActiveTab('tech')}
            className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
              activeTab === 'tech'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                : 'bg-white text-slate-700 hover:text-blue-700 border border-sky-200'
            }`}
          >
            Practical Tech Setup ({TECH_SERVICES.length})
          </button>
        </div>

        {/* Services Grid */}
        <div id="services" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(activeTab === 'all' || activeTab === 'business') &&
            BUSINESS_SERVICES.map((srv) => renderServiceCard(srv))}
          {(activeTab === 'all' || activeTab === 'tech') &&
            TECH_SERVICES.map((srv) => renderServiceCard(srv))}
        </div>
      </div>
    </section>
  );
};
