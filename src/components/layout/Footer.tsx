import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/business';
import { APP_ROUTES, AppRoute, useNavigation } from '../../context/NavigationContext';
import { BrandEmblem } from './BrandEmblem';

export const Footer: React.FC = () => {
  const { currentRoute, navigate } = useNavigation();

  // Compute the next logical page in the multi-page journey so visitors can step smoothly through the site
  const currentIndex = APP_ROUTES.findIndex((r) => r.path === currentRoute);
  const nextRoute = APP_ROUTES[(currentIndex + 1) % APP_ROUTES.length];

  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, path: AppRoute) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <footer className="bg-[#08080A] text-[#9E9B93] border-t border-[#1E1E24] pb-12">
      {/* Architectural Next-Page Continuation Banner */}
      <div className="border-b border-[#1C1C22] bg-[#0D0D11]">
        <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-8 lg:px-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="font-mono-tabular text-xs uppercase tracking-wider text-[#C8A24A]">
              Continue Exploring · {nextRoute.kicker}
            </p>
            <p className="mt-1 font-display text-xl sm:text-2xl font-bold text-[#F7F5F0]">
              Up Next: {nextRoute.label} — {nextRoute.shortTitle}
            </p>
          </div>

          <a
            href={nextRoute.path}
            onClick={(e) => handleLink(e, nextRoute.path)}
            className="inline-flex items-center gap-2.5 border border-[#C8A24A] bg-[#C8A24A]/10 px-5 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#F7F5F0] hover:bg-[#C8A24A] hover:text-[#0B0B0D] transition-colors whitespace-nowrap shrink-0"
          >
            <span>Explore {nextRoute.label}</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-[#1C1C22]">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <a
              href="/"
              onClick={(e) => handleLink(e, '/')}
              className="inline-flex items-center gap-3 group"
            >
              <BrandEmblem size="md" />
              <div>
                <p className="font-display text-lg font-bold tracking-tight text-[#F7F5F0] group-hover:text-[#C8A24A] transition-colors">
                  CAPITAL BARBER BY EFI
                </p>
                <p className="text-xs text-[#8E8A80]">
                  46 George Street · Central Manchester · M1 4HF
                </p>
              </div>
            </a>
            <p className="mt-4 max-w-sm text-xs sm:text-sm leading-relaxed text-[#9E9B93]">
              Precision skin fades, taper fades, scissor restyles, and warm-mist steamer beard sculpting by Efi (Efrem Melake) in central Manchester.
            </p>
          </div>

          {/* Multi-Page Directory Column */}
          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#F7F5F0]">
              Studio Pages
            </p>
            <ul className="mt-3 space-y-2 text-xs sm:text-sm">
              {APP_ROUTES.map((route) => {
                const active = currentRoute === route.path;
                return (
                  <li key={route.path}>
                    <a
                      href={route.path}
                      onClick={(e) => handleLink(e, route.path)}
                      className={`inline-flex items-center gap-2 transition-colors ${
                        active
                          ? 'text-[#C8A24A] font-semibold'
                          : 'hover:text-[#C8A24A]'
                      }`}
                    >
                      <span>{route.label}</span>
                      <span className="text-[11px] text-[#6E6B62]">· {route.shortTitle}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Verified External Destinations */}
          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#F7F5F0]">
              Booking &amp; Direct Links
            </p>
            <ul className="mt-3 space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href={BUSINESS_INFO.links.booksy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#C8A24A] hover:underline font-medium"
                >
                  <span>Book Online via Booksy</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_INFO.links.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#F7F5F0] transition-colors"
                >
                  <span>Google Maps Directions (M1 4HF)</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_INFO.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#F7F5F0] transition-colors"
                >
                  <span>Instagram Reels ({BUSINESS_INFO.contact.instagramHandle})</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_INFO.contact.phoneHref}
                  className="font-mono-tabular hover:text-[#F7F5F0] transition-colors"
                >
                  Tel: {BUSINESS_INFO.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_INFO.contact.emailHref}
                  className="hover:text-[#F7F5F0] transition-colors"
                >
                  {BUSINESS_INFO.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#706C64]">
          <p>
            © {new Date().getFullYear()} {BUSINESS_INFO.name} · 46 George Street, Manchester M1 4HF.
          </p>
          <p>
            Concept Redesign Demonstration · Configured with <code className="text-[#9E9B93]">noindex</code> prior to official domain cutover.
          </p>
        </div>
      </div>
    </footer>
  );
};
