import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { StickyMobileCTA } from './components/layout/StickyMobileCTA';
import { HomePage } from './pages/HomePage';
import { RegisterPage } from './pages/RegisterPage';
import { SuccessPage } from './pages/SuccessPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ECellBackgroundWatermark } from './components/effects/ECellBackgroundWatermark';
import { GlobalAnimatedBackground } from './components/effects/GlobalAnimatedBackground';
import { PageTransition } from './components/effects/PageTransition';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      {/* Layer 0-3: Global warm ambient animated background (fixed, behind everything) */}
      <GlobalAnimatedBackground />

      {/* Layer -10: E-Cell logo watermark (fixed, animated, visible on all pages) */}
      <ECellBackgroundWatermark
        size="giant"
        position="fixed-center"
        opacity="opacity-[0.07]"
        animated={true}
      />

      {/* App Shell */}
      <div className="relative flex flex-col min-h-screen text-slate-900 selection:bg-teal-500/20 selection:text-teal-900 overflow-x-hidden">
        <Navbar />

        <main className="flex-grow relative z-10">
          <PageTransition>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/success" element={<SuccessPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </PageTransition>
        </main>

        <Footer />
        <StickyMobileCTA />
      </div>
    </BrowserRouter>
  );
}

export default App;
