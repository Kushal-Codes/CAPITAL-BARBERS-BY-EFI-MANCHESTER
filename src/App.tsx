/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ServiceMenuSection } from './components/services/ServiceMenuSection';
import { GallerySection } from './components/gallery/GallerySection';
import { AboutSection } from './components/AboutSection';
import { FindUsSection } from './components/FindUsSection';

const PAGE_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const ActivePageRouter: React.FC = () => {
  const { currentRoute } = useNavigation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentRoute}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.32, ease: PAGE_EASE }}
      >
        {currentRoute === '/' && <HomePage />}
        {currentRoute === '/services' && <ServiceMenuSection />}
        {currentRoute === '/gallery' && <GallerySection />}
        {currentRoute === '/about' && <AboutSection />}
        {currentRoute === '/find-us' && <FindUsSection />}
      </motion.div>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <NavigationProvider>
      <div className="min-h-screen flex flex-col justify-between bg-[#0B0B0D] text-[#F5F2EB] selection:bg-[#C8A24A] selection:text-[#0B0B0D]">
        {/* Skip-to-content link for keyboard accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-[#C8A24A] focus:text-[#0B0B0D] focus:px-5 focus:py-3 focus:text-xs focus:font-bold focus:uppercase focus:tracking-widest"
        >
          Skip to main content
        </a>

        <Navbar />

        <main id="main-content" className="flex-1">
          <ActivePageRouter />
        </main>

        <Footer />
      </div>
    </NavigationProvider>
  );
}
