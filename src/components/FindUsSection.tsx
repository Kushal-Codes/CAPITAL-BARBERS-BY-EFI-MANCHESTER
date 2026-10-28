import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  Navigation,
  Instagram,
  AlertCircle,
  Footprints,
} from 'lucide-react';
import { BUSINESS_INFO, getManchesterStudioStatus } from '../data/business';

const EASE_OUT_EXPO: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const FindUsSection: React.FC = () => {
  const studioStatus = useMemo(() => getManchesterStudioStatus(), []);

  return (
    <section
      id="find-us"
      aria-labelledby="find-us-heading"
      className="border-b border-[#24242A] bg-[#0B0B0D] py-12 sm:py-20"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[#26262C]"
        >
          <div>
            <p className="text-xs font-medium tracking-wider uppercase text-[#C8A24A]">
              04 · Location, Hours &amp; Direct Contact
            </p>
            <h1
              id="find-us-heading"
              className="mt-2 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F7F5F0]"
            >
              FIND US ON GEORGE STREET.
            </h1>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-[#B8B4AA]">
              Situated at 46 George Street in Manchester’s Chinatown district (M1 4HF), minutes from Piccadilly Gardens and St Peter’s Square.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={BUSINESS_INFO.links.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#34343E] bg-[#141419] px-5 py-3 text-xs sm:text-sm font-semibold text-[#F7F5F0] hover:border-[#C8A24A] hover:text-[#C8A24A] transition-colors whitespace-nowrap shrink-0"
            >
              <Navigation className="w-4 h-4 text-[#C8A24A]" aria-hidden="true" />
              <span>Open in Google Maps</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>

            <a
              href={BUSINESS_INFO.links.booksy}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C8A24A] px-5 py-3 text-xs sm:text-sm font-bold text-[#0B0B0D] hover:bg-[#D9B55B] transition-colors whitespace-nowrap shrink-0"
            >
              <span>Book Now on Booksy</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        {/* Live Manchester Studio Status Banner */}
        <div className="mt-8 border border-[#2A2A34] bg-[#13131A] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <span
              aria-hidden="true"
              className={`mt-1 sm:mt-0 inline-block h-2.5 w-2.5 rounded-full shrink-0 ${
                studioStatus.tone === 'open'
                  ? 'bg-[#34D399]'
                  : studioStatus.tone === 'late-window'
                  ? 'bg-[#FBBF24]'
                  : 'bg-[#C8A24A]'
              }`}
            />
            <div>
              <p className="text-xs sm:text-sm font-bold text-[#F7F5F0]">
                {studioStatus.statusHeadline}
              </p>
              <p className="text-xs text-[#A6A298]">{studioStatus.statusDetail}</p>
            </div>
          </div>

          <a
            href={BUSINESS_INFO.contact.phoneHref}
            className="inline-flex items-center gap-1.5 font-mono-tabular text-xs sm:text-sm font-bold text-[#C8A24A] hover:underline whitespace-nowrap shrink-0"
          >
            <Phone className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Direct Line: {BUSINESS_INFO.contact.phoneDisplay}</span>
          </a>
        </div>

        {/* Main 12-Column Contact & Wayfinding Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left 7 Columns: Address, Clickable Contact Channels, Opening Hours Comparison & Landmarks */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Primary Contact & Address Ledger */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border border-[#26262C] bg-[#121217] p-6 sm:p-8">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono-tabular uppercase tracking-wider text-[#C8A24A]">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                  <span>Verified Studio Address</span>
                </div>
                <h2 className="mt-2 font-display text-xl font-bold text-[#F7F5F0]">
                  {BUSINESS_INFO.name}
                </h2>
                <p className="mt-1 text-base text-[#D5D1C8]">
                  {BUSINESS_INFO.address.street}
                  <br />
                  {BUSINESS_INFO.address.city} {BUSINESS_INFO.address.postcode}
                  <br />
                  {BUSINESS_INFO.address.country}
                </p>
                <p className="mt-2 text-xs text-[#C8A24A]">
                  {BUSINESS_INFO.address.entranceInstruction}
                </p>
                <div className="mt-4 pt-3 border-t border-[#22222A]">
                  <a
                    href={BUSINESS_INFO.links.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F7F5F0] underline underline-offset-4 hover:text-[#C8A24A]"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="flex flex-col justify-between border-t sm:border-t-0 sm:border-l border-[#22222A] pt-6 sm:pt-0 sm:pl-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono-tabular uppercase tracking-wider text-[#C8A24A]">
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    <span>Direct Contact Channels</span>
                  </div>

                  <div className="mt-3 space-y-3">
                    <div>
                      <p className="text-xs text-[#8E8A80]">Phone &amp; Walk-In Enquiries</p>
                      <a
                        href={BUSINESS_INFO.contact.phoneHref}
                        className="mt-0.5 inline-block font-mono-tabular text-lg font-bold text-[#F7F5F0] hover:text-[#C8A24A] transition-colors"
                      >
                        {BUSINESS_INFO.contact.phoneDisplay}
                      </a>
                    </div>

                    <div>
                      <p className="text-xs text-[#8E8A80]">Email Address</p>
                      <a
                        href={BUSINESS_INFO.contact.emailHref}
                        className="mt-0.5 inline-flex items-center gap-1.5 text-sm font-medium text-[#D5D1C8] hover:text-[#C8A24A] break-all transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 text-[#C8A24A] shrink-0" aria-hidden="true" />
                        <span>{BUSINESS_INFO.contact.email}</span>
                      </a>
                    </div>

                    <div>
                      <p className="text-xs text-[#8E8A80]">Official Instagram</p>
                      <a
                        href={BUSINESS_INFO.links.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-0.5 inline-flex items-center gap-1.5 text-sm font-medium text-[#D5D1C8] hover:text-[#C8A24A] transition-colors"
                      >
                        <Instagram className="w-3.5 h-3.5 text-[#C8A24A] shrink-0" aria-hidden="true" />
                        <span>{BUSINESS_INFO.contact.instagramHandle}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#22222A] flex flex-wrap gap-3 text-xs">
                  <a
                    href={BUSINESS_INFO.contact.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C8A24A] hover:underline font-medium"
                  >
                    Message on WhatsApp →
                  </a>
                </div>
              </div>
            </div>

            {/* Verified Opening Hours Comparison Box */}
            <div className="border border-[#26262C] bg-[#121217] p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-mono-tabular uppercase tracking-wider text-[#C8A24A]">
                <Clock className="w-4 h-4" aria-hidden="true" />
                <span>Opening Hours &amp; Source Comparison</span>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                {BUSINESS_INFO.openingHoursSchedules.map((schedule) => (
                  <div
                    key={schedule.sourceName}
                    className="border border-[#24242C] bg-[#16161C] p-4 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-sm font-bold text-[#F7F5F0]">
                          {schedule.sourceName}
                        </h3>
                        <a
                          href={schedule.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-[#C8A24A] hover:underline whitespace-nowrap shrink-0"
                        >
                          Source ↗
                        </a>
                      </div>
                      <p className="mt-1 text-xs text-[#9E9B93]">
                        {schedule.verificationNote}
                      </p>

                      <dl className="mt-3 space-y-2 border-t border-[#24242C] pt-3 text-xs sm:text-sm">
                        {schedule.rows.map((row) => (
                          <div key={row.days} className="flex items-center justify-between gap-2">
                            <dt className="text-[#B8B4AA]">{row.days}</dt>
                            <dd className="font-mono-tabular font-semibold text-[#F7F5F0]">
                              {row.hours}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>
                ))}
              </div>

              {/* Honest Discrepancy Note */}
              <div className="mt-4 flex items-start gap-2.5 border-t border-[#22222A] pt-4 text-xs text-[#A6A298]">
                <AlertCircle className="w-4 h-4 text-[#C8A24A] shrink-0 mt-0.5" aria-hidden="true" />
                <p>{BUSINESS_INFO.hoursDiscrepancyNote}</p>
              </div>
            </div>

            {/* Central Manchester / Chinatown Walking Guide */}
            <div className="border border-[#26262C] bg-[#121217] p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-mono-tabular uppercase tracking-wider text-[#C8A24A]">
                <Footprints className="w-4 h-4" aria-hidden="true" />
                <span>Walking Times from Central Manchester Landmarks</span>
              </div>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {BUSINESS_INFO.landmarks.map((lm) => (
                  <div
                    key={lm.name}
                    className="border border-[#24242C] bg-[#16161C] p-4 flex flex-col justify-between"
                  >
                    <div>
                      <p className="font-mono-tabular text-xs font-bold text-[#C8A24A]">
                        {lm.walkTime} · {lm.distance}
                      </p>
                      <h3 className="mt-1 font-display text-sm font-bold text-[#F7F5F0]">
                        {lm.name}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-[#A6A298]">
                        {lm.direction}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Storefront Entrance Wayfinding Card & Google Review QR */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Real Storefront Sign & Entrance Wayfinding */}
            <div className="border border-[#26262C] bg-[#121217] overflow-hidden">
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#0B0B0D]">
                <img
                  src="/images/haircuts/client-lookbook-board.jpg"
                  alt="Official Capital Barbers by Efi storefront sign showing Entrance Through Double Doors on the Left, Walk-ins Welcome, and 10 haircut examples."
                  width={888}
                  height={677}
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-5 border-t border-[#26262C]">
                <p className="font-mono-tabular text-xs uppercase text-[#C8A24A]">
                  Arriving at 46 George Street
                </p>
                <h2 className="mt-1 font-display text-lg font-bold text-[#F7F5F0]">
                  “Entrance Through Double Doors on the Left”
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-[#B8B4AA]">
                  Look for the black-and-gold <strong className="text-[#F7F5F0]">Capital Barbers by Efi</strong> board on George Street (M1 4HF) and enter via the double doors on the left.
                </p>
              </div>
            </div>

            {/* Verified Google Review QR Code & Link */}
            <div className="border border-[#26262C] bg-[#121217] p-5 flex items-center justify-between gap-4">
              <div>
                <p className="font-mono-tabular text-xs uppercase text-[#C8A24A]">
                  Client Feedback
                </p>
                <h2 className="mt-1 font-display text-base sm:text-lg font-bold text-[#F7F5F0]">
                  Visited Efi’s Chair Recently?
                </h2>
                <p className="mt-1 text-xs text-[#A6A298]">
                  Scan the official studio QR code or use the direct Google Review link to share your experience.
                </p>
                <a
                  href={BUSINESS_INFO.links.googleReview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#C8A24A] hover:underline"
                >
                  <span>Leave a Google Review</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>

              <a
                href={BUSINESS_INFO.links.googleReview}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Scan or click to review Capital Barber by Efi on Google"
                className="shrink-0 border border-[#2E2E38] bg-white p-2"
              >
                <img
                  src="/images/brand/google-review-qr.png"
                  alt="Official QR code for leaving a Google Review for Capital Barber by Efi"
                  width={84}
                  height={84}
                  decoding="async"
                  className="w-20 h-20 object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
