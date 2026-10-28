import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, Check, MapPin, Phone, Sparkles } from 'lucide-react';
import { HeroSection } from '../components/HeroSection';
import { SIGNATURE_TIERS } from '../data/services';
import { GALLERY_ITEMS } from '../data/gallery';
import { BUSINESS_INFO } from '../data/business';
import { useNavigation } from '../context/NavigationContext';

const EASE_OUT_EXPO: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const HomePage: React.FC = () => {
  const { navigate } = useNavigation();
  const featuredPlates = GALLERY_ITEMS.slice(0, 3);

  return (
    <div>
      {/* 01 · Architectural Split Hero */}
      <HeroSection />

      {/* 02 · Signature Grooming Tiers & Session Planner Gateway */}
      <section
        aria-labelledby="home-tiers-heading"
        className="border-b border-[#24242A] bg-[#0B0B0D] py-16 sm:py-24"
      >
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-[#24242C]">
            <div>
              <p className="text-xs font-medium tracking-wider uppercase text-[#C8A24A]">
                01 · Signature Appointments &amp; Tariff
              </p>
              <h2
                id="home-tiers-heading"
                className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F7F5F0] text-balance"
              >
                THREE SIGNATURE SESSIONS. ZERO GUESSWORK.
              </h2>
              <p className="mt-3 max-w-2xl text-sm sm:text-base text-[#B8B4AA]">
                Compare Efi’s three core Booksy appointment tiers below, or launch the interactive <strong className="text-[#F7F5F0]">Session Planner</strong> to combine cuts, beard sculpting, and facial waxing with exact durations and GBP pricing.
              </p>
            </div>

            <a
              href="/services"
              onClick={(e) => {
                e.preventDefault();
                navigate('/services');
              }}
              className="inline-flex items-center gap-2 border border-[#C8A24A] bg-[#C8A24A]/10 px-5 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#F7F5F0] hover:bg-[#C8A24A] hover:text-[#0B0B0D] transition-colors whitespace-nowrap shrink-0"
            >
              <span>All 19 Services &amp; Session Planner</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          {/* 3-Column Architectural Tier Cards */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {SIGNATURE_TIERS.map((tier, idx) => (
              <motion.article
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: EASE_OUT_EXPO }}
                className={`relative flex flex-col justify-between border p-6 sm:p-8 transition-colors ${
                  tier.accentHighlight
                    ? 'border-[#C8A24A] bg-[#14141B]'
                    : 'border-[#26262E] bg-[#111116] hover:border-[#3A3A46]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="font-mono-tabular uppercase tracking-wider text-[#C8A24A]">
                      {tier.tierLabel}
                    </span>
                    <span className="font-mono-tabular text-[#D5D1C8]">
                      {tier.badgeText}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-2xl font-bold text-[#F7F5F0]">
                    {tier.name}
                  </h3>
                  <p className="mt-1 text-sm text-[#B8B4AA]">{tier.tagline}</p>

                  {/* Tabular Price & Duration */}
                  <div className="mt-6 pb-6 border-b border-[#24242C] flex items-baseline justify-between gap-4">
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono-tabular text-4xl font-extrabold text-[#F7F5F0]">
                        £{tier.priceGBP}
                      </span>
                      <span className="font-mono-tabular text-xs text-[#9E9B93]">
                        / {tier.durationMinutes} min session
                      </span>
                    </div>
                    <span className="text-[11px] font-mono-tabular text-[#C8A24A]">
                      Booksy Verified
                    </span>
                  </div>

                  {/* Included Craftsmanship Checklist */}
                  <ul className="mt-6 space-y-3 text-xs sm:text-sm text-[#D5D1C8]">
                    {tier.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <Check
                          className="w-4 h-4 text-[#C8A24A] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-5 border-t border-[#22222A] flex flex-col gap-3">
                  <p className="text-xs text-[#8E8A80]">{tier.comparisonNote}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    <a
                      href={tier.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs font-bold uppercase tracking-wider transition-colors whitespace-nowrap ${
                        tier.accentHighlight
                          ? 'bg-[#C8A24A] text-[#0B0B0D] hover:bg-[#D9B55B]'
                          : 'border border-[#C8A24A] text-[#F7F5F0] hover:bg-[#C8A24A] hover:text-[#0B0B0D]'
                      }`}
                    >
                      <span>Book on Booksy</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>

                    <button
                      type="button"
                      onClick={() =>
                        navigate('/services', { initialServiceId: tier.serviceId })
                      }
                      className="inline-flex items-center justify-center gap-1.5 border border-[#2E2E38] bg-[#181820] px-4 py-3 text-xs font-semibold text-[#D5D1C8] hover:border-[#C8A24A] hover:text-[#F7F5F0] transition-colors whitespace-nowrap"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#C8A24A]" aria-hidden="true" />
                      <span>Add to Planner</span>
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 03 · Curated Lookbook Preview Strip (3 Authentic Plates) */}
      <section
        aria-labelledby="home-lookbook-heading"
        className="border-b border-[#24242A] bg-[#0E0E12] py-16 sm:py-24"
      >
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-[#26262E]">
            <div>
              <p className="text-xs font-medium tracking-wider uppercase text-[#C8A24A]">
                02 · Authentic Photography Only
              </p>
              <h2
                id="home-lookbook-heading"
                className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F7F5F0]"
              >
                THE WORK SPEAKS.
              </h2>
              <p className="mt-3 max-w-2xl text-sm sm:text-base text-[#B8B4AA]">
                Every photograph on this site is an authentic capture of Efi, his haircuts, and the 46 George Street studio—replacing the generic stock photos from the previous website.
              </p>
            </div>

            <a
              href="/gallery"
              onClick={(e) => {
                e.preventDefault();
                navigate('/gallery');
              }}
              className="inline-flex items-center gap-2 bg-[#C8A24A] px-5 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B0B0D] hover:bg-[#D9B55B] transition-colors whitespace-nowrap shrink-0"
            >
              <span>Explore Full 8-Plate Portfolio</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPlates.map((plate, idx) => (
              <motion.figure
                key={plate.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: EASE_OUT_EXPO }}
                className="group border border-[#26262E] bg-[#131318] overflow-hidden flex flex-col justify-between"
              >
                <a
                  href="/gallery"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/gallery');
                  }}
                  className="block relative aspect-[4/3] overflow-hidden bg-[#181820]"
                >
                  <img
                    src={plate.src}
                    alt={plate.alt}
                    width={plate.width}
                    height={plate.height}
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </a>
                <figcaption className="p-5 border-t border-[#22222A] bg-[#121217]">
                  <div className="flex items-center justify-between text-xs font-mono-tabular text-[#C8A24A]">
                    <span>
                      {plate.indexLabel} · {plate.authenticityBadge}
                    </span>
                    <span className="text-[#8E8A80]">
                      {plate.width}×{plate.height}
                    </span>
                  </div>
                  <h3 className="mt-1.5 font-display text-lg font-bold text-[#F7F5F0]">
                    {plate.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#A6A298]">{plate.subtitle}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* 04 · High-Contrast Warm Alabaster Founder & Studio Gateway */}
      <section
        aria-labelledby="home-founder-heading"
        className="border-b border-[#DCD6C8] bg-[#F4F1EA] text-[#141416] py-16 sm:py-24"
      >
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
              className="lg:col-span-5"
            >
              <figure className="border border-[#CFC8B8] bg-[#E8E3D8] overflow-hidden">
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <img
                    src="/images/hero/efi-portrait-founder.jpg"
                    alt="Efi (Efrem Melake), founder of Capital Barber by Efi, smiling in his studio at 46 George Street wearing a crisp white shirt and leather Barber-Tal tool holster."
                    width={1919}
                    height={2879}
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <figcaption className="p-4 border-t border-[#CFC8B8] bg-[#EFECE4] flex items-center justify-between text-xs text-[#4A4842]">
                  <span>
                    <strong className="text-[#141416]">Efi (Efrem Melake)</strong> · Founder &amp; Master Barber
                  </span>
                  <span className="font-mono-tabular">46 George St, M1 4HF</span>
                </figcaption>
              </figure>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08, ease: EASE_OUT_EXPO }}
              className="lg:col-span-7"
            >
              <p className="text-xs font-semibold tracking-wider uppercase text-[#8C6B1F]">
                03 · Meet Efi &amp; The 46 George Street Studio
              </p>
              <h2
                id="home-founder-heading"
                className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#121214]"
              >
                {BUSINESS_INFO.aboutStory.headline}
              </h2>
              <p className="mt-4 font-serif-editorial italic text-xl sm:text-2xl text-[#3E3C36]">
                “Modern refinement and traditional grooming values brought together in central Manchester.”
              </p>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#2C2B28]">
                {BUSINESS_INFO.aboutStory.lead}
              </p>

              <div className="mt-8 pt-6 border-t border-[#D5CFC0] grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs uppercase font-mono-tabular text-[#8C6B1F]">
                    Where to Find Us
                  </p>
                  <p className="mt-1 font-display text-base font-bold text-[#141416]">
                    46 George Street, Manchester M1 4HF
                  </p>
                  <p className="mt-1 text-xs text-[#524F48]">
                    Chinatown · Entrance through double doors on the left · Walk-ins welcome.
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase font-mono-tabular text-[#8C6B1F]">
                    Direct Studio Line
                  </p>
                  <p className="mt-1 font-mono-tabular text-base font-bold text-[#141416]">
                    <a href={BUSINESS_INFO.contact.phoneHref} className="hover:underline">
                      {BUSINESS_INFO.contact.phoneDisplay}
                    </a>
                  </p>
                  <p className="mt-1 text-xs text-[#524F48]">
                    Call for walk-in wait times or book your slot online via Booksy.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <a
                  href="/about"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/about');
                  }}
                  className="inline-flex items-center gap-2 bg-[#121214] px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#F7F5F0] hover:bg-[#2A2A32] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Meet Efi &amp; The 4-Stage Ritual</span>
                  <ArrowRight className="w-4 h-4 text-[#C8A24A]" aria-hidden="true" />
                </a>

                <a
                  href="/find-us"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/find-us');
                  }}
                  className="inline-flex items-center gap-2 border border-[#121214] px-5 py-3.5 text-xs sm:text-sm font-semibold text-[#121214] hover:bg-[#121214] hover:text-[#F7F5F0] transition-colors whitespace-nowrap shrink-0"
                >
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                  <span>Directions &amp; Opening Hours</span>
                </a>

                <a
                  href={BUSINESS_INFO.contact.phoneHref}
                  className="inline-flex items-center gap-1.5 px-3 py-3 text-xs sm:text-sm font-mono-tabular font-semibold text-[#121214] hover:text-[#8C6B1F] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#8C6B1F]" aria-hidden="true" />
                  <span>{BUSINESS_INFO.contact.phoneDisplay}</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
