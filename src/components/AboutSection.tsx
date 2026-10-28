import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { useNavigation } from '../context/NavigationContext';

const EASE_OUT_EXPO: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const AboutSection: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div id="about">
      {/* PART 1: High-Contrast Warm Alabaster (#F4F1EA) Founder Profile */}
      <section
        aria-labelledby="about-heading"
        className="border-b border-[#DCD6C8] bg-[#F4F1EA] text-[#141416] py-14 sm:py-22"
      >
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column (5 cols): Authentic High-Res Portrait of Efi */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
              className="lg:col-span-5 flex flex-col gap-5"
            >
              <figure className="border border-[#CFC8B8] bg-[#E8E3D8] overflow-hidden">
                <div className="aspect-[3/4] w-full overflow-hidden">
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
                    <strong className="text-[#141416]">Efi (Efrem Melake)</strong> · Founder &amp; Barber
                  </span>
                  <span className="font-mono-tabular">46 George St, M1 4HF</span>
                </figcaption>
              </figure>
            </motion.div>

            {/* Right Column (7 cols): Verified Brand Story & Studio Craftsmanship */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08, ease: EASE_OUT_EXPO }}
              className="lg:col-span-7 flex flex-col justify-between"
            >
              <div>
                <p className="text-xs font-semibold tracking-wider uppercase text-[#8C6B1F]">
                  03 · Meet Efi &amp; The George Street Studio
                </p>

                <h1
                  id="about-heading"
                  className="mt-2 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#121214] text-balance"
                >
                  {BUSINESS_INFO.aboutStory.headline}
                </h1>

                <p className="mt-4 font-serif-editorial italic text-xl sm:text-2xl text-[#3E3C36]">
                  “Modern refinement and traditional grooming values brought together in central Manchester.”
                </p>

                <p className="mt-5 text-base sm:text-lg font-medium leading-relaxed text-[#222226]">
                  {BUSINESS_INFO.aboutStory.lead}
                </p>

                <div className="mt-4 space-y-4 text-sm sm:text-base leading-relaxed text-[#42403B]">
                  {BUSINESS_INFO.aboutStory.body.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Verified Studio Facts Grid */}
              <div className="mt-8 pt-8 border-t border-[#D5CFC0] grid grid-cols-1 sm:grid-cols-3 gap-6">
                {BUSINESS_INFO.aboutStory.verifiedStudioDetails.map((item) => (
                  <div key={item.label} className="flex flex-col">
                    <span className="text-xs font-medium text-[#706C62]">
                      {item.label}
                    </span>
                    <span className="mt-1 font-display text-base font-bold text-[#141416]">
                      {item.value}
                    </span>
                    <span className="mt-1 text-xs leading-relaxed text-[#524F48]">
                      {item.detail}
                    </span>
                  </div>
                ))}
              </div>

              {/* Secondary Supporting Authentic Crops: Holster Detail & Real Wall Sign */}
              <div className="mt-8 pt-8 border-t border-[#D5CFC0] grid grid-cols-1 sm:grid-cols-2 gap-5">
                <figure className="border border-[#CFC8B8] bg-[#EFECE4] p-3 flex items-center gap-4">
                  <img
                    src="/images/beard/efi-holster-and-clippers.jpg"
                    alt="Close-up of Efi's leather Barber-Tal tool chest holster with shears and combs beside his red cordless clippers."
                    width={1500}
                    height={1850}
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-20 h-24 object-cover shrink-0 border border-[#CFC8B8]"
                  />
                  <div>
                    <p className="font-mono-tabular text-[11px] uppercase text-[#8C6B1F]">
                      Signature Craft
                    </p>
                    <p className="text-sm font-bold text-[#141416]">
                      Barber-Tal Shears &amp; Red Cordless Lineup
                    </p>
                    <p className="mt-0.5 text-xs text-[#524F48]">
                      Dedicated clippers, foil shavers, and combs kept at hand for crisp detailing.
                    </p>
                  </div>
                </figure>

                <figure className="border border-[#CFC8B8] bg-[#EFECE4] p-3 flex items-center gap-4">
                  <img
                    src="/images/brand/capital-barbers-wall-emblem.jpg"
                    alt="The physical 3D gold Crown CB wall sign inside Capital Barber by Efi at 46 George Street."
                    width={428}
                    height={760}
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-20 h-24 object-cover shrink-0 border border-[#CFC8B8]"
                  />
                  <div>
                    <p className="font-mono-tabular text-[11px] uppercase text-[#8C6B1F]">
                      Authentic Emblem
                    </p>
                    <p className="text-sm font-bold text-[#141416]">
                      The Crown &amp; CB Monogram
                    </p>
                    <p className="mt-0.5 text-xs text-[#524F48]">
                      Real 3D gold acrylic sign mounted above the waiting lounge at 46 George Street.
                    </p>
                  </div>
                </figure>
              </div>

              {/* Direct CTA */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={BUSINESS_INFO.links.booksy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#121214] px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wide text-[#F7F5F0] hover:bg-[#2A2A30] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>BOOK SEAT WITH EFI</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C8A24A]" aria-hidden="true" />
                </a>
                <a
                  href="/services"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/services');
                  }}
                  className="inline-flex items-center gap-1.5 border border-[#121214] px-5 py-3.5 text-xs sm:text-sm font-semibold text-[#121214] hover:bg-[#121214] hover:text-[#F7F5F0] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>View Services &amp; Session Planner</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PART 2: The 4-Stage Consultation & Cut Ritual (Obsidian Architectural Section) */}
      <section
        aria-labelledby="ritual-heading"
        className="border-b border-[#24242A] bg-[#0B0B0D] py-16 sm:py-24"
      >
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-wider uppercase text-[#C8A24A]">
              Inside the Chair at 46 George Street
            </p>
            <h2
              id="ritual-heading"
              className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F7F5F0]"
            >
              THE 4-STAGE EFI CUT &amp; STEAMER RITUAL.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#B8B4AA]">
              Every appointment at Capital Barber by Efi follows a disciplined four-part sequence—combining modern clipper engineering with warm-mist facial conditioning.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BUSINESS_INFO.aboutStory.ritualStages.map((stage, idx) => (
              <motion.article
                key={stage.step}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.07, ease: EASE_OUT_EXPO }}
                className="border border-[#26262E] bg-[#121217] p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono-tabular text-xs font-bold uppercase tracking-wider text-[#C8A24A]">
                    Stage {stage.step}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold text-[#F7F5F0]">
                    {stage.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#B8B4AA]">
                    {stage.description}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-[#22222A] flex items-center justify-between text-[11px] font-mono-tabular text-[#8E8A80]">
                  <span>46 GEORGE ST</span>
                  <span className="text-[#C8A24A]">M1 4HF</span>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Studio Interior & Equipment Plates */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <figure className="border border-[#26262E] bg-[#121217] overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden bg-[#181820]">
                <img
                  src="/images/shop/shop-interior-full-wide.png"
                  alt="Full studio view of Capital Barber by Efi showing the hexagonal LED ceiling lights and 3D gold Crown CB wall emblem."
                  width={1564}
                  height={2687}
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <figcaption className="p-4 border-t border-[#22222A]">
                <p className="font-mono-tabular text-xs text-[#C8A24A]">
                  01 · Daylight Hexagonal Lighting
                </p>
                <p className="mt-1 text-sm font-bold text-[#F7F5F0]">
                  Shadow-Free Overhead Studio Array
                </p>
                <p className="mt-1 text-xs text-[#A6A298]">
                  Reveals subtle fade gradients and hairline symmetry from every angle.
                </p>
              </figcaption>
            </figure>

            <figure className="border border-[#26262E] bg-[#121217] overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden bg-[#181820]">
                <img
                  src="/images/shop/gold-barber-chair-workstation.jpg"
                  alt="Custom black quilted leather and gold Greek-key barber chair at 46 George Street."
                  width={578}
                  height={1536}
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <figcaption className="p-4 border-t border-[#22222A]">
                <p className="font-mono-tabular text-xs text-[#C8A24A]">
                  02 · Custom Seating
                </p>
                <p className="mt-1 text-sm font-bold text-[#F7F5F0]">
                  Gold &amp; Black Quilted Barber Chairs
                </p>
                <p className="mt-1 text-xs text-[#A6A298]">
                  Full reclining hydraulic support for beard sculpting and hot-mist steamer sessions.
                </p>
              </figcaption>
            </figure>

            <figure className="border border-[#26262E] bg-[#121217] overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden bg-[#181820]">
                <img
                  src="/images/shop/workstation-clippers-mirror.jpg"
                  alt="Workstation counter at Capital Barber by Efi showing red cordless clippers and illuminated mirror."
                  width={428}
                  height={754}
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <figcaption className="p-4 border-t border-[#22222A]">
                <p className="font-mono-tabular text-xs text-[#C8A24A]">
                  03 · Precision Tooling
                </p>
                <p className="mt-1 text-sm font-bold text-[#F7F5F0]">
                  Cordless Cocco &amp; Wahl Clipper Lineup
                </p>
                <p className="mt-1 text-xs text-[#A6A298]">
                  Zero-gapped trimmers, foil shavers, and sanitized combs prepared before every client.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
};
