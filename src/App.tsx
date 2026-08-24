/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CoreCompetencies } from './components/CoreCompetencies';
import { ProductSection } from './components/ProductSection';
import { GlobalCountersSection } from './components/GlobalCountersSection';
import { ValidationStatsSection } from './components/ValidationStatsSection';
import { VisualGallerySection } from './components/VisualGallerySection';
import { OnlineInquirySection } from './components/OnlineInquirySection';
import { CategoryPageView } from './components/CategoryPageView';
import { PolicyPageView } from './components/PolicyPageView';
import { Footer } from './components/Footer';
import { BrochureModal } from './components/BrochureModal';
import { Language, MainCategoryKey } from './types';

export default function App() {
  const [lang, setLang] = useState<Language>('ko');
  
  // In-page view state: 'home' or a specific category key or policy pages
  const [currentView, setCurrentView] = useState<'home' | MainCategoryKey | 'privacy' | 'anti-spam'>('home');
  const [activeSubId, setActiveSubId] = useState<string | undefined>(undefined);
  
  // Brochure download modal
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  
  // Initial inquiry topic
  const [inquiryTopic, setInquiryTopic] = useState<string | undefined>(undefined);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ko' ? 'en' : 'ko'));
  };

  const handleOpenCategory = (catKey: MainCategoryKey, subId?: string) => {
    setCurrentView(catKey);
    setActiveSubId(subId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenPolicy = (type: 'privacy' | 'anti-spam') => {
    setCurrentView(type);
    setActiveSubId(undefined);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    setCurrentView('home');
    setActiveSubId(undefined);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToInquiry = (topic?: string) => {
    if (topic) setInquiryTopic(topic);
    
    // If not in home view, switch to home first, then scroll
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const element = document.getElementById('online-inquiry-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById('online-inquiry-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans flex flex-col selection:bg-emerald-600 selection:text-white">
      {/* Header & Global Navigation */}
      <Header
        lang={lang}
        currentView={currentView}
        onToggleLang={toggleLanguage}
        onGoHome={handleGoHome}
        onOpenCategory={handleOpenCategory}
        onOpenInquiry={() => handleScrollToInquiry()}
        onOpenBrochure={() => setIsBrochureOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentView === 'home' ? (
          <>
            {/* 1. Hero Zone & Main Copy */}
            <HeroSection
              lang={lang}
              onOpenCategory={handleOpenCategory}
              onScrollToInquiry={() => handleScrollToInquiry()}
              onOpenBrochure={() => setIsBrochureOpen(true)}
            />

            {/* 2. Key Products Highlights: 그로피드(Growfeed®) 핵심 제품군 */}
            <ProductSection
              lang={lang}
              onOpenProduct={(prodId) => handleOpenCategory('products', prodId)}
              onOpenLivestockGuide={() => handleOpenCategory('products', 'livestock-guide')}
            />

            {/* 3. Global Performance Counters: 글로벌 성과 & 정량 지표 */}
            <GlobalCountersSection
              lang={lang}
              onOpenGlobal={() => handleOpenCategory('global', 'export-status')}
            />

            {/* 4. 3 Core Competency Boxes: 맥섬석GM 3대 핵심 경쟁력 */}
            <CoreCompetencies
              lang={lang}
              onOpenCategory={handleOpenCategory}
            />

            {/* 5. Scientific Validation & Proofs */}
            <ValidationStatsSection
              lang={lang}
              onOpenRnd={() => handleOpenCategory('rnd', 'methane-trials')}
            />

            {/* 6. Production Facilities & Global Field Photo Gallery */}
            <VisualGallerySection
              lang={lang}
              onOpenPR={() => handleOpenCategory('pr', 'gallery')}
            />

            {/* 7. Online Inquiry Form Directly Visible at the Bottom */}
            <OnlineInquirySection
              lang={lang}
              onOpenBrochure={() => setIsBrochureOpen(true)}
              initialCategory={inquiryTopic}
            />
          </>
        ) : currentView === 'privacy' || currentView === 'anti-spam' ? (
          /* Privacy & Anti-Spam Policy Page View */
          <PolicyPageView
            lang={lang}
            initialTab={currentView}
            onGoHome={handleGoHome}
          />
        ) : (
          /* Detailed Category Page View (Rendered in the Same Window) */
          <CategoryPageView
            categoryKey={currentView}
            subCategoryId={activeSubId}
            lang={lang}
            onGoHome={handleGoHome}
            onSwitchCategory={(catKey, subId) => {
              setCurrentView(catKey);
              setActiveSubId(subId);
            }}
            onOpenInquiry={(topic) => handleScrollToInquiry(topic)}
            onOpenBrochure={() => setIsBrochureOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onOpenCategory={handleOpenCategory}
        onOpenBrochure={() => setIsBrochureOpen(true)}
        onOpenPolicy={handleOpenPolicy}
      />

      {/* Brochure & Catalog Download Modal */}
      {isBrochureOpen && (
        <BrochureModal
          lang={lang}
          onClose={() => setIsBrochureOpen(false)}
        />
      )}
    </div>
  );
}
