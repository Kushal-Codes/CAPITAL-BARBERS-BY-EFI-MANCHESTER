import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight, Phone, MapPin, Clock } from 'lucide-react';
import { BUSINESS_INFO, getManchesterStudioStatus } from '../data/business';
import { useNavigation } from '../context/NavigationContext';

const EASE_OUT_EXPO: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const HeroSection: React.FC = () => {
  const { navigate } = useNavigation();
  const studioStatus = useMemo(() => getManchesterStudioStatus(), []);

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative border-b border-[#24242A] bg-[#0B0B0D] overflow-hidden"
    >
      {/* Subtle Architectural Radial Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-[#C8A24A]/[0.05] blur-3xl"
      />

      {/* Main 1440px Editorial Split */}
      <div className="relative mx-auto max-w-[1440px] px-4 pt-8 pb-10 sm:px-8 lg:px-12 lg:pt-14 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Choreographed Editorial Typography & Conversion Hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE_OUT_EXPO }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div>
              {/* Unboxed Kicker with Typographic Separators (Zero-Pill Discipline) */}
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium tracking-wide text-[#C8A24A] mb-5">
                <span>46 George Street</span>
                <span aria-hidden="true" className="text-[#5A5852]">·</span>
                <span>Central Manchester</span>
                <span aria-hidden="true" className="text-[#5A5852]">·</span>
                <span className="font-mono-tabular text-[#D5D1C8]">M1 4HF</span>
              </div>

              {/* Oversized Display Headline */}
              <h1
                id="hero-heading"
                className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[0.96] tracking-tight text-[#F7F5F0] text-balance"
              >
                PRECISION IN EVERY CUT.
              </h1>

              {/* Editorial Serif Sub-line echoing physical wall sign */}
              <p className="mt-4 font-serif-editorial italic text-xl sm:text-2xl text-[#D8C38E]">
                Sharp fades. Clean lines. Personal attention by Efi.
              </p>

              {/* Verified Lead Copy */}
              <p className="mt-5 max-w-[60ch] text-base sm:text-lg leading-relaxed text-[#B8B4AA]">
                Step into the chair at <strong className="font-semibold text-[#F7F5F0]">Capital Barber by Efi</strong> in central Manchester. From zero skin fades and temple tapers to hot-mist steamer beard sculpting, every cut is tailored to your head shape, hair texture, and daily style.
              </p>

              {/* Live Studio Status Line */}
              <div className="mt-5 flex items-center gap-2.5 text-xs sm:text-sm text-[#D5D1C8]">
                <span
                  aria-hidden="true"
                  className={`inline-block h-2 w-2 rounded-full shrink-0 ${
                    studioStatus.tone === 'open'
                      ? 'bg-[#34D399]'
                      : studioStatus.tone === 'late-window'
                      ? 'bg-[#FBBF24]'
                      : 'bg-[#C8A24A]'
                  }`}
                />
                <Clock className="w-3.5 h-3.5 text-[#C8A24A] shrink-0" aria-hidden="true" />
                <span className="font-medium text-[#F7F5F0]">{studioStatus.statusHeadline}</span>
                <span aria-hidden="true" className="text-[#5A5852]">·</span>
                <button
                  type="button"
                  onClick={() => navigate('/find-us')}
                  className="text-[#C8A24A] underline underline-offset-4 hover:text-[#E5C168] transition-colors"
                >
                  Hours &amp; Directions
                </button>
              </div>

              {/* Primary & Multi-Page Secondary CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href={BUSINESS_INFO.links.booksy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#C8A24A] px-6 py-4 text-sm font-bold tracking-wide text-[#0B0B0D] hover:bg-[#D9B55B] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F7F5F0]"
                >
                  <span>BOOK YOUR APPOINTMENT</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>

                <a
                  href="/services"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/services');
                  }}
                  className="inline-flex items-center justify-center gap-2 border border-[#32323A] bg-[#131317] px-6 py-4 text-sm font-semibold text-[#F7F5F0] hover:border-[#C8A24A] hover:text-[#C8A24A] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8A24A]"
                >
                  <span>SERVICES &amp; SESSION PLANNER</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Bottom Wayfinding & Direct Call Strip inside Left Column */}
            <div className="mt-10 pt-6 border-t border-[#222228] flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-[#A6A298]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C8A24A] shrink-0" aria-hidden="true" />
                <span>
                  Entrance through double doors on the left <span aria-hidden="true">·</span> Walk-ins welcome
                </span>
              </div>
              <a
                href={BUSINESS_INFO.contact.phoneHref}
                className="inline-flex items-center gap-1.5 font-mono-tabular text-[#F7F5F0] hover:text-[#C8A24A] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C8A24A]" aria-hidden="true" />
                <span>{BUSINESS_INFO.contact.phoneDisplay}</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Authentic Photography Composition with Choreographed Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: EASE_OUT_EXPO }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div className="relative h-full min-h-[340px] sm:min-h-[440px] lg:min-h-[520px] border border-[#2A2A32] bg-[#141418] overflow-hidden group">
              <img
                src="/images/hero/efi-precision-lineup-hero.png"
                alt="Efi in a crisp white shirt and leather tool holster lining up a client's temple taper fade with a red cordless trimmer at 46 George Street, Manchester."
                width={1835}
                height={996}
                fetchPriority="high"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
              />

              {/* Measured Contrast Scrim for Caption Legibility */}
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/92 via-[#0B0B0D]/20 to-transparent"
                aria-hidden="true"
              />

              {/* Authentic Provenance Caption */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div>
                  <p className="font-mono-tabular text-[11px] uppercase tracking-wider text-[#C8A24A]">
                    01 · In The Chair at 46 George Street
                  </p>
                  <p className="mt-0.5 text-sm sm:text-base font-semibold text-[#F7F5F0]">
                    Efi executing a razor-sharp temple taper &amp; forehead lineup
                  </p>
                </div>
                <a
                  href="/services"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/services', { initialServiceId: 'skin-fade' });
                  }}
                  className="text-xs font-mono-tabular text-[#D5D1C8] underline underline-offset-4 hover:text-[#C8A24A] whitespace-nowrap shrink-0"
                >
                  Skin &amp; Taper Fades · £20 →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full-Width 4-Column Verified Facts Bar Below the Split */}
      <div className="border-t border-[#222228] bg-[#101014]">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#222228]">
            <div className="py-4 sm:px-5 first:sm:pl-0">
              <p className="text-xs text-[#8E8A80]">Studio Address</p>
              <p className="mt-1 text-sm font-semibold text-[#F7F5F0]">
                46 George Street, Manchester M1 4HF
              </p>
              <p className="mt-0.5 text-xs text-[#A6A298]">
                Chinatown · Central Manchester
              </p>
            </div>

            <div className="py-4 sm:px-5">
              <p className="text-xs text-[#8E8A80]">Signature Cuts &amp; Fades</p>
              <p className="mt-1 font-mono-tabular text-sm font-semibold text-[#F7F5F0]">
                £20 · 30–35 Minutes
              </p>
              <p className="mt-0.5 text-xs text-[#A6A298]">
                Skin Fade · Taper Fade · Classic Cut · Haircut &amp; Beard
              </p>
            </div>

            <div className="py-4 sm:px-5">
              <p className="text-xs text-[#8E8A80]">Entrance &amp; Walk-Ins</p>
              <p className="mt-1 text-sm font-semibold text-[#F7F5F0]">
                Double Doors on the Left
              </p>
              <p className="mt-0.5 text-xs text-[#A6A298]">
                Appointments via Booksy &amp; walk-ins welcome
              </p>
            </div>

            <div className="py-4 sm:px-5 last:sm:pr-0">
              <p className="text-xs text-[#8E8A80]">Direct Studio Line</p>
              <p className="mt-1 font-mono-tabular text-sm font-semibold text-[#C8A24A]">
                <a href={BUSINESS_INFO.contact.phoneHref} className="hover:underline">
                  {BUSINESS_INFO.contact.phoneDisplay}
                </a>
              </p>
              <p className="mt-0.5 text-xs text-[#A6A298]">
                Open 7 days · Check live evening slots
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
