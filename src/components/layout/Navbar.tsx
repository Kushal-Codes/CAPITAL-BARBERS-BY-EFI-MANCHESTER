import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Phone, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/business';
import { APP_ROUTES, AppRoute, useNavigation } from '../../context/NavigationContext';
import { BrandEmblem } from './BrandEmblem';

export const Navbar: React.FC = () => {
  const { currentRoute, navigate } = useNavigation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: AppRoute) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
        scrolled
          ? 'bg-[#0B0B0D]/95 backdrop-blur-md border-b border-[#282832]'
          : 'bg-[#0B0B0D] border-b border-[#1E1E24]'
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-2 sm:gap-4 lg:gap-8 px-3.5 py-3 sm:px-6 lg:px-12 sm:py-3.5">
        {/* Zone 1: Brand Wordmark (Single clean element per Top Bar Contract) */}
        <a
          href="/"
          onClick={(e) => handleNavClick(e, '/')}
          className="group flex items-center gap-2 sm:gap-2.5 lg:gap-3 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C8A24A] whitespace-nowrap shrink-0"
        >
          <BrandEmblem size="sm" />
          <span className="font-display text-xs min-[380px]:text-sm lg:text-lg font-bold tracking-tight text-[#F7F5F0] group-hover:text-[#C8A24A] transition-colors">
            CAPITAL BARBER BY EFI
          </span>
        </a>

        {/* Zone 2: 5 Multi-Page Navigation Links with Animated Gold Active Underline */}
        <nav
          aria-label="Primary Multi-Page Navigation"
          className="hidden md:flex items-center md:gap-4 lg:gap-7 text-xs lg:text-sm font-medium"
        >
          {APP_ROUTES.map((item) => {
            const isActive = currentRoute === item.path;
            return (
              <a
                key={item.path}
                href={item.path}
                aria-current={isActive ? 'page' : undefined}
                onClick={(e) => handleNavClick(e, item.path)}
                className={`relative py-1.5 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C8A24A] ${
                  isActive
                    ? 'text-[#F7F5F0] font-semibold'
                    : 'text-[#B8B4AA] hover:text-[#F7F5F0]'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="active-nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C8A24A]"
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href={BUSINESS_INFO.links.booksy}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 sm:gap-1.5 bg-[#C8A24A] px-2.5 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-semibold text-[#0B0B0D] hover:bg-[#D7B35C] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F7F5F0]"
          >
            <span>Book Now</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex md:hidden items-center justify-center w-9 h-9 sm:w-10 sm:h-10 border border-[#2A2A32] text-[#F7F5F0] hover:border-[#C8A24A] hover:text-[#C8A24A] transition-colors focus-visible:outline-2 focus-visible:outline-[#C8A24A]"
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            ) : (
              <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Animated Mobile Multi-Page Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            role="region"
            aria-label="Mobile Navigation Menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-b border-[#26262C] bg-[#111115]"
          >
            <div className="px-4 pt-3 pb-6 sm:px-8">
              <nav
                aria-label="Mobile Page Links"
                className="flex flex-col divide-y divide-[#222228]"
              >
                {APP_ROUTES.map((item) => {
                  const isActive = currentRoute === item.path;
                  return (
                    <a
                      key={item.path}
                      href={item.path}
                      aria-current={isActive ? 'page' : undefined}
                      onClick={(e) => handleNavClick(e, item.path)}
                      className={`flex items-center justify-between py-3.5 transition-colors ${
                        isActive
                          ? 'text-[#C8A24A] font-semibold'
                          : 'text-[#F7F5F0] hover:text-[#C8A24A]'
                      }`}
                    >
                      <div>
                        <span className="block text-base">{item.label}</span>
                        <span className="block text-xs text-[#8E8A80]">
                          {item.shortTitle}
                        </span>
                      </div>
                      <span className="font-mono-tabular text-xs text-[#C8A24A]">
                        {isActive ? 'ACTIVE' : '→'}
                      </span>
                    </a>
                  );
                })}
              </nav>

              <div className="mt-5 pt-4 border-t border-[#26262C] flex flex-col gap-3 text-xs text-[#A6A298]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C8A24A] shrink-0" aria-hidden="true" />
                  <span>{BUSINESS_INFO.address.full} · Double doors on left</span>
                </div>
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href={BUSINESS_INFO.contact.phoneHref}
                    className="inline-flex items-center gap-1.5 border border-[#2E2E36] px-3.5 py-2 text-xs font-medium text-[#F7F5F0] hover:border-[#C8A24A]"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C8A24A]" aria-hidden="true" />
                    <span>Call {BUSINESS_INFO.contact.phoneDisplay}</span>
                  </a>
                  <a
                    href={BUSINESS_INFO.links.booksy}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="inline-flex items-center gap-1.5 bg-[#C8A24A] px-4 py-2 text-xs font-semibold text-[#0B0B0D]"
                  >
                    <span>Book Appointment</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
