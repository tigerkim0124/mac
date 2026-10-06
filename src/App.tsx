/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, Suspense } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CoreCompetencies } from './components/CoreCompetencies';
import { ProductSection } from './components/ProductSection';
import { GlobalCountersSection } from './components/GlobalCountersSection';
import { ValidationStatsSection } from './components/ValidationStatsSection';
import { VisualGallerySection } from './components/VisualGallerySection';
import { OnlineInquirySection } from './components/OnlineInquirySection';
import { Footer } from './components/Footer';
import { Language, MainCategoryKey } from './types';
import { downloadBrochurePdf } from './utils';

// Code-split heavy page views to keep the initial page bundle ultra-light
const CategoryPageView = React.lazy(() =>
  import('./components/CategoryPageView').then((m) => ({ default: m.CategoryPageView }))
);
const PolicyPageView = React.lazy(() =>
  import('./components/PolicyPageView').then((m) => ({ default: m.PolicyPageView }))
);

/**
 * Detect whether the visitor is accessing from Korea or overseas.
 * - Korea access -> Korean ('ko')
 * - Foreign access -> English ('en')
 * - Explicit user toggle stored in localStorage is always respected.
 */
function detectInitialLanguage(): Language {
  try {
    // 1. Check if the user explicitly chose a language before
    const saved = localStorage.getItem('growfeed_user_lang');
    if (saved === 'ko' || saved === 'en') {
      return saved;
    }

    // 2. Check Device Timezone (Korea Standard Time uses Asia/Seoul or ROK)
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    const isKoreaTimezone =
      timeZone === 'Asia/Seoul' ||
      timeZone === 'ROK' ||
      timeZone.includes('Seoul') ||
      timeZone.includes('Korea');

    // 3. Check browser locale language
    const langs =
      navigator.languages && navigator.languages.length > 0
        ? navigator.languages
        : [navigator.language || ''];
    const primaryLang = (langs[0] || '').toLowerCase();
    const isKoreanLocale = primaryLang.startsWith('ko');

    // If connected from Korea (Korean timezone or Korean browser language) -> 'ko'
    if (isKoreaTimezone || isKoreanLocale) {
      return 'ko';
    }

    // Otherwise, foreign access -> 'en'
    return 'en';
  } catch {
    return 'ko';
  }
}

export default function App() {
  const [lang, setLang] = useState<Language>(detectInitialLanguage);
  
  // In-page view state: 'home' or a specific category key or policy pages
  const [currentView, setCurrentView] = useState<'home' | MainCategoryKey | 'privacy' | 'anti-spam'>('home');
  const [activeSubId, setActiveSubId] = useState<string | undefined>(undefined);
  
  // Initial inquiry topic
  const [inquiryTopic, setInquiryTopic] = useState<string | undefined>(undefined);

  const handleDownloadBrochure = () => {
    downloadBrochurePdf(lang);
  };

  // Background IP-based country detection (Non-blocking verification for visitors without manual preference)
  useEffect(() => {
    try {
      const saved = localStorage.getItem('growfeed_user_lang');
      if (saved) return; // User already set an explicit choice

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 1800);

      fetch('https://api.country.is', { signal: controller.signal })
        .then((res) => {
          if (!res.ok) throw new Error('Geo lookup error');
          return res.json();
        })
        .then((data) => {
          clearTimeout(timeoutId);
          if (data && typeof data.country === 'string') {
            const isKR = data.country.toUpperCase() === 'KR';
            setLang((curr) => {
              if (localStorage.getItem('growfeed_user_lang')) return curr;
              return isKR ? 'ko' : 'en';
            });
          }
        })
        .catch(() => {
          // Gracefully fallback to the initial timezone/locale detection without throwing any errors
        });

      return () => {
        clearTimeout(timeoutId);
        controller.abort();
      };
    } catch {
      // Safe fallback
    }
  }, []);

  // Synchronize document lang & title
  useEffect(() => {
    try {
      document.documentElement.lang = lang;
      if (lang === 'ko') {
        document.title = '맥섬석GM㈜ | Growfeed - 저메탄·고신뢰 축산바이오 전문기업';
      } else {
        document.title = 'Macsumsuk GM | Growfeed - Low-Methane Eco-Friendly Livestock Bio-Tech';
      }
    } catch {
      // Ignore in non-browser env
    }
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => {
      const next: Language = prev === 'ko' ? 'en' : 'ko';
      try {
        localStorage.setItem('growfeed_user_lang', next);
      } catch {
        // Ignore localStorage quota errors
      }
      return next;
    });
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
        onOpenBrochure={handleDownloadBrochure}
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
              onOpenBrochure={handleDownloadBrochure}
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
              onOpenBrochure={handleDownloadBrochure}
              initialCategory={inquiryTopic}
            />
          </>
        ) : (
          <Suspense
            fallback={
              <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4 py-24">
                <div className="w-10 h-10 border-3 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-xs font-semibold text-slate-400 tracking-wide">
                  {lang === 'ko' ? '화면을 로딩 중입니다...' : 'Loading view...'}
                </p>
              </div>
            }
          >
            {currentView === 'privacy' || currentView === 'anti-spam' ? (
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
                onOpenBrochure={handleDownloadBrochure}
              />
            )}
          </Suspense>
        )}
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onOpenCategory={handleOpenCategory}
        onOpenBrochure={handleDownloadBrochure}
        onOpenPolicy={handleOpenPolicy}
      />
    </div>
  );
}
