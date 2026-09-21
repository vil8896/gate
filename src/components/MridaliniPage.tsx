import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { DualPillars } from './DualPillars';
import { Framework } from './Framework';
import { DiagnosticTool } from './DiagnosticTool';
import { CaseStudies } from './CaseStudies';
import { FaqSection } from './FaqSection';
import { ConsultationSection } from './ConsultationSection';
import { Footer } from './Footer';
import { ServiceCategory } from '../types';

interface MridaliniPageProps {
  // Pure Mridalini homepage
}

export const MridaliniPage: React.FC<MridaliniPageProps> = () => {
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('integrated');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectServiceForInquiry = (serviceName: string, category: 'business' | 'tech' | 'integrated') => {
    setSelectedService(serviceName);
    setSelectedCategory(category);
    setInquiryMessage(
      `Hi Mridalini team, I'm interested in getting practical guidance for "${serviceName}". Can we discuss how to set this up for my business?`
    );
    scrollToSection('consultation');
  };

  const handleApplyDiagnostic = (summary: string) => {
    setInquiryMessage(summary);
    scrollToSection('consultation');
  };

  const handleInquireSimilarCase = (caseTitle: string) => {
    setInquiryMessage(
      `Hi Mridalini team, I saw your case story on "${caseTitle}". My business is in a similar situation and I'd like help getting the same practical setup.`
    );
    scrollToSection('consultation');
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Top Banner & Header */}
      <Navbar
        onScrollToSection={scrollToSection}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero onScrollToSection={scrollToSection} />

        {/* 2. Dual Pillars (Business Guidance & Tech Setup) */}
        <DualPillars onSelectServiceForInquiry={handleSelectServiceForInquiry} />

        {/* 3. Diagnostic Tool */}
        <DiagnosticTool onApplyDiagnosticToInquiry={handleApplyDiagnostic} />

        {/* 4. 4-Step Framework */}
        <Framework onScheduleCall={() => scrollToSection('consultation')} />

        {/* 5. Client Case Stories */}
        <CaseStudies onInquireSimilar={handleInquireSimilarCase} />

        {/* 6. FAQs */}
        <FaqSection />

        {/* 7. Consultation Booking Section */}
        <section id="consultation" className="py-16 md:py-24 bg-white border-t border-sky-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200 mb-3">
                LET'S TALK
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-['Outfit']">
                Book a 1-on-1 Guidance Session
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                Tell us a little about what you want to build or improve. We will prepare a clear, straightforward roadmap for our call.
              </p>
            </div>

            <ConsultationSection
              inquiryMessage={inquiryMessage}
              onInquiryMessageChange={setInquiryMessage}
              selectedService={selectedService}
              selectedCategory={selectedCategory}
            />
          </div>
        </section>
      </main>

      {/* Mridalini Footer */}
      <Footer
        onScrollToSection={scrollToSection}
      />
    </div>
  );
};
