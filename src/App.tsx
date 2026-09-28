import React, { useState, useEffect } from 'react';
import { MridaliniPage } from './components/MridaliniPage';
import { PayOnboardNavbar } from './components/PayOnboardNavbar';
import { PayOnboardHero } from './components/PayOnboardHero';
import { PayOnboardServices } from './components/PayOnboardServices';
import { PayOnboardRejectionSolution } from './components/PayOnboardRejectionSolution';
import { PayOnboardProcess } from './components/PayOnboardProcess';
import { PayOnboardWhoWeHelp } from './components/PayOnboardWhoWeHelp';
import { PayOnboardTestimonials } from './components/PayOnboardTestimonials';
import { PayOnboardFaq } from './components/PayOnboardFaq';
import { PayOnboardBottomCta } from './components/PayOnboardBottomCta';
import { PayOnboardFooter } from './components/PayOnboardFooter';
import { PayOnboardModal } from './components/PayOnboardModal';
import { LegalModal, LegalDocType } from './components/LegalModal';

// Helper to test if current URL targets the Gatewaywala page
const isGatewaywalaRoute = (): boolean => {
  if (typeof window === 'undefined') return false;
  const hostname = window.location.hostname.toLowerCase();
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();

  return (
    hostname.includes('gatewaywala') ||
    path.startsWith('/gatewaywala') ||
    path.includes('gatewaywala') ||
    hash.startsWith('#/gatewaywala') ||
    hash.startsWith('#gatewaywala') ||
    hash.includes('gatewaywala') ||
    hash.includes('payonboard')
  );
};

export default function App() {
  // Check URL pathname or hash for page routing
  const [currentPage, setCurrentPage] = useState<'mridalini' | 'gatewaywala'>(() => {
    return isGatewaywalaRoute() ? 'gatewaywala' : 'mridalini';
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalDocType, setLegalDocType] = useState<LegalDocType>('privacy');

  // Sync state when URL path or hash changes (e.g. back/forward or direct navigation)
  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentPage(isGatewaywalaRoute() ? 'gatewaywala' : 'mridalini');
    };

    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('hashchange', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, []);

  // Update browser tab title and notify Google Ads tag (gtag) on page route
  useEffect(() => {
    if (currentPage === 'gatewaywala') {
      document.title = "Gatewaywala – Your Payment Gateway Partner | Get Approved & Onboarded";
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'AW-10895732953', {
          page_path: '/gatewaywala',
          page_title: 'Gatewaywala – Your Payment Gateway Partner'
        });
        window.gtag('event', 'page_view', {
          page_path: '/gatewaywala',
          page_title: 'Gatewaywala – Your Payment Gateway Partner'
        });
      }
    } else {
      document.title = "Mridalini Consulting – Business Guidance & Tech Setup (mridalini.com)";
    }
  }, [currentPage]);

  const navigateToMridalini = () => {
    setCurrentPage('mridalini');
    if (window.location.pathname.includes('gatewaywala')) {
      window.history.pushState({}, '', '/');
    } else {
      window.location.hash = '';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenConsultation = () => {
    setModalOpen(true);
  };

  const handleOpenLegal = (type: LegalDocType) => {
    setLegalDocType(type);
    setLegalModalOpen(true);
  };

  const handleOpenWhatsApp = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-10895732953',
        event_category: 'whatsapp_click',
        event_label: 'hero_or_nav_whatsapp'
      });
    }
    const message = encodeURIComponent(
      "Hi Gatewaywala! My payment gateway application was rejected. I would like assistance getting approved and onboarded."
    );
    window.open(`https://wa.me/918123091913?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans">
      {/* ============================================================ */}
      {/* PAGE 1: MRIDALINI CONSULTING MAIN WEBSITE (mridalini.com)     */}
      {/* ============================================================ */}
      {currentPage === 'mridalini' ? (
        <MridaliniPage />
      ) : (
        /* ============================================================ */
        /* PAGE 2: GATEWAYWALA SEPARATE PAGE (mridalini.com/gatewaywala) */
        /* ============================================================ */
        <div className="flex-1 flex flex-col selection:bg-emerald-100 selection:text-emerald-900">
          {/* Top PayOnboard Navigation Bar */}
          <PayOnboardNavbar
            onOpenConsultation={handleOpenConsultation}
            onOpenWhatsApp={handleOpenWhatsApp}
            onScrollToSection={scrollToSection}
            onNavigateToMridalini={navigateToMridalini}
          />

          {/* Main Content strictly matching the landing layout */}
          <main className="flex-1">
            {/* 1. Hero Section */}
            <PayOnboardHero
              onOpenConsultation={handleOpenConsultation}
              onOpenWhatsApp={handleOpenWhatsApp}
            />

            {/* 2. Our Services */}
            <PayOnboardServices
              onLearnMore={() => scrollToSection('rejected-section')}
            />

            {/* 3. Rejected by Top Gateways? We Help You Get Approved */}
            <PayOnboardRejectionSolution />

            {/* 4. Simple 4-Step Process */}
            <PayOnboardProcess />

            {/* 5. Who We Help: All Types of Businesses & Organizations */}
            <PayOnboardWhoWeHelp
              onGetStarted={handleOpenConsultation}
            />

            {/* 6. Success Stories: What Our Clients Say */}
            <PayOnboardTestimonials />

            {/* 7. FAQs: Google Ads Transparency & Compliance Questions */}
            <PayOnboardFaq />

            {/* 8. Bottom CTA Banner */}
            <PayOnboardBottomCta
              onOpenConsultation={handleOpenConsultation}
              onOpenWhatsApp={handleOpenWhatsApp}
            />
          </main>

          {/* Google Ads Compliant Legal & Contact Footer */}
          <PayOnboardFooter
            onOpenLegal={handleOpenLegal}
            onOpenConsultation={handleOpenConsultation}
            onOpenWhatsApp={handleOpenWhatsApp}
            onScrollToSection={scrollToSection}
            onNavigateToMridalini={navigateToMridalini}
          />

          {/* Interactive Consultation Request Modal */}
          <PayOnboardModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            onOpenLegal={handleOpenLegal}
          />

          {/* Interactive Legal Policy & Non-Affiliation Modal (Google Ads Compliance) */}
          <LegalModal
            isOpen={legalModalOpen}
            docType={legalDocType}
            onClose={() => setLegalModalOpen(false)}
            onSelectDoc={(type) => setLegalDocType(type)}
          />
        </div>
      )}
    </div>
  );
}
