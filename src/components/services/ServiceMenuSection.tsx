import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight,
  Info,
  ExternalLink,
  Phone,
  Plus,
  Check,
  Sparkles,
  Search,
  Trash2,
  Clock,
  SlidersHorizontal,
} from 'lucide-react';
import {
  SERVICES_DATA,
  SERVICE_CATEGORIES,
  CONSULTATION_GOALS,
  SIGNATURE_TIERS,
  ServiceCategory,
  ServiceMenuSource,
  ConsultationGoalId,
  formatPriceGBP,
  formatDuration,
  filterServicesByMenuAndCategory,
  calculateSessionEstimate,
} from '../../data/services';
import { BUSINESS_INFO } from '../../data/business';
import { useNavigation } from '../../context/NavigationContext';

const EASE_OUT_EXPO: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const ServiceMenuSection: React.FC = () => {
  const { preselectedServiceId, clearPreselectedService } = useNavigation();

  const [selectedSource, setSelectedSource] = useState<ServiceMenuSource | 'all-sources'>('all-sources');
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('all');
  const [selectedGoal, setSelectedGoal] = useState<ConsultationGoalId>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [plannedServiceIds, setPlannedServiceIds] = useState<string[]>(['skin-fade']);

  useEffect(() => {
    if (preselectedServiceId) {
      setPlannedServiceIds((prev) =>
        prev.includes(preselectedServiceId) ? prev : [preselectedServiceId]
      );
      clearPreselectedService();
    }
  }, [preselectedServiceId, clearPreselectedService]);

  const toggleServiceInPlan = (id: string) => {
    setPlannedServiceIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const applySmartSuggestion = (recommendedId: string) => {
    // Replace standalone cut + beard with the recommended package
    const standaloneToReplace = new Set([
      'skin-fade',
      'taper-fade',
      'haircut',
      'classic-cut',
      'inshop-beard-trim-only',
      'shape-up-beard-trim',
      'haircut-and-beard',
    ]);
    setPlannedServiceIds((prev) => {
      const kept = prev.filter((id) => !standaloneToReplace.has(id));
      return kept.includes(recommendedId) ? kept : [recommendedId, ...kept];
    });
  };

  const visibleServices = filterServicesByMenuAndCategory(
    SERVICES_DATA,
    selectedSource,
    selectedCategory,
    searchQuery,
    selectedGoal
  );

  const sessionEstimate = calculateSessionEstimate(SERVICES_DATA, plannedServiceIds);

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="border-b border-[#24242A] bg-[#0B0B0D] py-12 sm:py-20"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[#26262C]"
        >
          <div>
            <p className="text-xs font-medium tracking-wider uppercase text-[#C8A24A]">
              01 · Verified Service Ledger, Tariff &amp; Session Estimator
            </p>
            <h1
              id="services-heading"
              className="mt-2 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F7F5F0] text-balance"
            >
              TRANSPARENT MENU. REAL TIMINGS.
            </h1>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-[#B8B4AA]">
              Every appointment below uses the exact service names, prices in £ GBP, and session durations from Efi’s verified Booksy catalogue and 46 George Street price board. Select any combination of services to calculate your visit duration and smart package savings.
            </p>
          </div>

          {/* Interactive Source Selector */}
          <div className="flex flex-col sm:items-end gap-2">
            <span className="text-xs text-[#8E8A80]">Filter by Menu Source</span>
            <div
              role="group"
              aria-label="Filter services by source menu"
              className="inline-flex flex-wrap items-center gap-1 bg-[#141419] p-1 border border-[#26262C]"
            >
              <button
                type="button"
                onClick={() => setSelectedSource('all-sources')}
                className={`px-3.5 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                  selectedSource === 'all-sources'
                    ? 'bg-[#C8A24A] text-[#0B0B0D]'
                    : 'text-[#C8C4BA] hover:text-[#F7F5F0]'
                }`}
              >
                Complete Catalogue (19)
              </button>
              <button
                type="button"
                onClick={() => setSelectedSource('booksy')}
                className={`px-3.5 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                  selectedSource === 'booksy'
                    ? 'bg-[#C8A24A] text-[#0B0B0D]'
                    : 'text-[#C8C4BA] hover:text-[#F7F5F0]'
                }`}
              >
                Booksy Appointment Menu (12)
              </button>
              <button
                type="button"
                onClick={() => setSelectedSource('in-shop-board')}
                className={`px-3.5 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                  selectedSource === 'in-shop-board'
                    ? 'bg-[#C8A24A] text-[#0B0B0D]'
                    : 'text-[#C8C4BA] hover:text-[#F7F5F0]'
                }`}
              >
                In-Shop Board &amp; Add-Ons (07)
              </button>
            </div>
          </div>
        </motion.div>

        {/* PART 1: 3-Column Signature Tier Comparison Cards */}
        <div className="mt-10 pb-12 border-b border-[#22222A]">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="font-display text-lg sm:text-xl font-bold text-[#F7F5F0]">
                Signature Appointment Tiers (Most Popular on Booksy)
              </h2>
              <p className="text-xs sm:text-sm text-[#9E9B93]">
                Compare Efi’s three core sessions side by side or click “Select in Planner” to build a custom visit.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {SIGNATURE_TIERS.map((tier, idx) => {
              const isSelected = plannedServiceIds.includes(tier.serviceId);
              return (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: idx * 0.07, ease: EASE_OUT_EXPO }}
                  className={`flex flex-col justify-between border p-6 transition-colors ${
                    isSelected
                      ? 'border-[#C8A24A] bg-[#15151D]'
                      : tier.accentHighlight
                      ? 'border-[#C8A24A]/60 bg-[#121218]'
                      : 'border-[#26262E] bg-[#101015]'
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

                    <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold text-[#F7F5F0]">
                      {tier.name}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-[#B8B4AA]">
                      {tier.tagline}
                    </p>

                    <div className="mt-5 pb-5 border-b border-[#24242C] flex items-baseline justify-between">
                      <div>
                        <span className="font-mono-tabular text-3xl sm:text-4xl font-extrabold text-[#F7F5F0]">
                          £{tier.priceGBP}
                        </span>
                        <span className="ml-2 font-mono-tabular text-xs text-[#9E9B93]">
                          · {tier.durationMinutes} min
                        </span>
                      </div>
                      <span className="text-[11px] font-mono-tabular text-[#C8A24A]">
                        {tier.sourceLabel}
                      </span>
                    </div>

                    <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-[#D5D1C8]">
                      {tier.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2">
                          <Check
                            className="w-4 h-4 text-[#C8A24A] shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#22222A] grid grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={() => toggleServiceInPlan(tier.serviceId)}
                      className={`inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold border transition-colors ${
                        isSelected
                          ? 'border-[#C8A24A] bg-[#C8A24A]/20 text-[#F7F5F0]'
                          : 'border-[#32323C] bg-[#17171F] text-[#D5D1C8] hover:border-[#C8A24A]'
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#C8A24A]" aria-hidden="true" />
                          <span>In Your Plan</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5 text-[#C8A24A]" aria-hidden="true" />
                          <span>Select in Plan</span>
                        </>
                      )}
                    </button>

                    <a
                      href={tier.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 bg-[#C8A24A] px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0B0B0D] hover:bg-[#D9B55B] transition-colors"
                    >
                      <span>Book Slot</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* PART 2: Interactive Consultation Style Finder & Search Controls */}
        <div className="mt-10 pb-6 border-b border-[#22222A] flex flex-col gap-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono-tabular uppercase tracking-wider text-[#C8A24A]">
              <SlidersHorizontal className="w-4 h-4" aria-hidden="true" />
              <span>Interactive Style &amp; Treatment Recommender</span>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8E8A80]"
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search fade, steamer, beard, wax..."
                aria-label="Search services by name or keyword"
                className="w-full border border-[#2C2C36] bg-[#121217] pl-9 pr-3 py-2 text-xs sm:text-sm text-[#F7F5F0] placeholder-[#78756D] focus:border-[#C8A24A] focus:outline-none"
              />
            </div>
          </div>

          {/* Consultation Goal Cards */}
          <div
            role="group"
            aria-label="Filter by grooming consultation goal"
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5"
          >
            {CONSULTATION_GOALS.map((goal) => {
              const active = selectedGoal === goal.id;
              return (
                <button
                  key={goal.id}
                  type="button"
                  onClick={() => {
                    setSelectedGoal(goal.id);
                    if (goal.id !== 'all') {
                      setSelectedCategory('all');
                      setSelectedSource('all-sources');
                    }
                  }}
                  className={`p-3 text-left border transition-colors flex flex-col justify-between ${
                    active
                      ? 'border-[#C8A24A] bg-[#C8A24A]/15 text-[#F7F5F0]'
                      : 'border-[#24242C] bg-[#111116] text-[#B8B4AA] hover:border-[#3A3A46] hover:text-[#F7F5F0]'
                  }`}
                >
                  <span className="text-xs font-bold text-[#F7F5F0]">{goal.label}</span>
                  <span className="mt-1 text-[11px] text-[#9E9B93]">{goal.subtitle}</span>
                </button>
              );
            })}
          </div>

          {/* Category Filter Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <div
              role="group"
              aria-label="Filter services by category"
              className="flex flex-wrap items-center gap-2"
            >
              {SERVICE_CATEGORIES.map((cat) => {
                const active = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3.5 py-2 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 ${
                      active
                        ? 'border-[#C8A24A] bg-[#C8A24A] text-[#0B0B0D] font-semibold'
                        : 'border-[#26262C] bg-[#111115] text-[#A6A298] hover:border-[#3E3E48] hover:text-[#F7F5F0]'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            <p className="font-mono-tabular text-xs text-[#8E8A80]">
              Showing {visibleServices.length} of {SERVICES_DATA.length} verified services
            </p>
          </div>
        </div>

        {/* PART 3: Asymmetric 12-Column Layout — Interactive Session Planner (Left 4 Cols) + Service Ledger (Right 8 Cols) */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column (4 cols): Interactive Custom Session Planner & Studio Visual */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-24">
            {/* Live Interactive Session Estimator Card */}
            <div className="border border-[#C8A24A]/60 bg-[#121218] p-5 sm:p-6">
              <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#262630]">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C8A24A]" aria-hidden="true" />
                  <h2 className="font-display text-base sm:text-lg font-bold text-[#F7F5F0]">
                    Custom Session Planner
                  </h2>
                </div>
                {sessionEstimate.selectedServices.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setPlannedServiceIds([])}
                    className="inline-flex items-center gap-1 text-xs text-[#9E9B93] hover:text-[#F7F5F0] transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Clear</span>
                  </button>
                )}
              </div>

              {sessionEstimate.selectedServices.length === 0 ? (
                <div className="py-6 text-center">
                  <p className="text-xs sm:text-sm text-[#B8B4AA]">
                    Click <strong className="text-[#F7F5F0]">“+ Plan”</strong> on any service row to calculate your combined appointment time, total £ GBP, and combo savings.
                  </p>
                </div>
              ) : (
                <div className="mt-4 space-y-3">
                  <ul className="divide-y divide-[#22222A] max-h-60 overflow-y-auto pr-1">
                    {sessionEstimate.selectedServices.map((item) => (
                      <li
                        key={item.id}
                        className="py-2.5 flex items-center justify-between gap-3 text-xs sm:text-sm"
                      >
                        <div className="min-w-0">
                          <p className="font-semibold text-[#F7F5F0] truncate">
                            {item.name}
                          </p>
                          <p className="font-mono-tabular text-[11px] text-[#9E9B93]">
                            {formatDuration(item.durationMinutes)} ·{' '}
                            {item.menuSource === 'booksy' ? 'Booksy' : 'In-Shop'}
                          </p>
                        </div>

                        <div className="flex items-center gap-2.5 shrink-0">
                          <span className="font-mono-tabular font-bold text-[#F7F5F0]">
                            {formatPriceGBP(item)}
                          </span>
                          <button
                            type="button"
                            onClick={() => toggleServiceInPlan(item.id)}
                            aria-label={`Remove ${item.name} from session plan`}
                            className="text-xs text-[#8E8A80] hover:text-[#C8A24A] px-1.5 py-0.5 border border-[#2C2C36]"
                          >
                            ×
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Totals Summary */}
                  <div className="pt-4 border-t border-[#262630] space-y-2">
                    <div className="flex items-center justify-between text-xs text-[#B8B4AA]">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#C8A24A]" aria-hidden="true" />
                        <span>Estimated Chair Time</span>
                      </span>
                      <span className="font-mono-tabular font-semibold text-[#F7F5F0]">
                        {sessionEstimate.totalDurationMinutes > 0
                          ? `${sessionEstimate.totalDurationMinutes} min`
                          : 'In-shop timing'}
                        {sessionEstimate.hasUntimedService &&
                        sessionEstimate.totalDurationMinutes > 0
                          ? ' + add-on'
                          : ''}
                      </span>
                    </div>

                    <div className="flex items-baseline justify-between pt-1">
                      <span className="text-xs uppercase font-mono-tabular tracking-wider text-[#C8A24A]">
                        Estimated Total
                      </span>
                      <div className="text-right">
                        <span className="font-mono-tabular text-2xl sm:text-3xl font-extrabold text-[#F7F5F0]">
                          £{sessionEstimate.knownTotalGBP}
                        </span>
                        {sessionEstimate.hasUnpricedService && (
                          <span className="block text-[11px] text-[#D8C38E]">
                            + Hot Towel Shave (confirm at booking)
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Animated Smart Combo Advisor */}
                  <AnimatePresence mode="wait">
                    {sessionEstimate.smartSuggestion && (
                      <motion.div
                        key={sessionEstimate.smartSuggestion.headline}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="mt-3 border border-[#C8A24A]/50 bg-[#C8A24A]/10 p-3.5 text-xs"
                      >
                        <p className="font-bold text-[#F7F5F0]">
                          {sessionEstimate.smartSuggestion.headline}
                        </p>
                        <p className="mt-1 leading-relaxed text-[#D5D1C8]">
                          {sessionEstimate.smartSuggestion.detail}
                        </p>
                        <button
                          type="button"
                          onClick={() =>
                            applySmartSuggestion(
                              sessionEstimate.smartSuggestion!.recommendedServiceId
                            )
                          }
                          className="mt-2.5 inline-flex items-center gap-1.5 bg-[#C8A24A] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#0B0B0D] hover:bg-[#D9B55B] transition-colors"
                        >
                          <span>
                            Switch to {sessionEstimate.smartSuggestion.recommendedServiceName} (£
                            {sessionEstimate.smartSuggestion.recommendedPriceGBP})
                          </span>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="pt-3 flex flex-col gap-2">
                    <a
                      href={BUSINESS_INFO.links.booksy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#C8A24A] px-4 py-3 text-xs font-bold uppercase tracking-wider text-[#0B0B0D] hover:bg-[#D9B55B] transition-colors"
                    >
                      <span>Book Selected on Booksy</span>
                      <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                    </a>
                    <a
                      href={BUSINESS_INFO.contact.phoneHref}
                      className="w-full inline-flex items-center justify-center gap-1.5 border border-[#2E2E38] bg-[#16161E] px-4 py-2.5 text-xs font-mono-tabular text-[#D5D1C8] hover:border-[#C8A24A] hover:text-[#F7F5F0] transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#C8A24A]" aria-hidden="true" />
                      <span>Or Call Studio: {BUSINESS_INFO.contact.phoneDisplay}</span>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Authentic Studio Context Card */}
            <div className="border border-[#26262C] bg-[#121216] overflow-hidden">
              <div className="aspect-[4/5] overflow-hidden bg-[#18181E]">
                <img
                  src="/images/shop/shop-interior-full-wide.png"
                  alt="Full interior view of Capital Barber by Efi at 46 George Street showing the hexagonal overhead lighting, 3D Crown CB wall sign, gold-trimmed barber chairs, and chair-side facial steamer."
                  width={1564}
                  height={2687}
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-5 border-t border-[#26262C]">
                <p className="font-mono-tabular text-xs text-[#C8A24A]">
                  46 George Street Studio &amp; Facial Steamer
                </p>
                <p className="mt-1 text-sm text-[#D5D1C8]">
                  Notice the warm-mist facial steamer positioned beside Efi’s main chair under the hexagonal studio lights—used in the <strong className="text-[#F7F5F0]">Haircut &amp; Beard + Steamer (£28, 45 min)</strong> treatment.
                </p>
              </div>
            </div>

            {/* Price Transparency & Booking Platform Verification Note */}
            <div className="border border-[#2A2A32] bg-[#121216] p-5">
              <div className="flex items-start gap-2.5">
                <Info className="w-4 h-4 text-[#C8A24A] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-semibold text-[#F7F5F0]">
                    Price &amp; Booking Verification Note
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#A6A298]">
                    Online appointment names, durations, and prices follow the{' '}
                    <strong className="text-[#D5D1C8]">Booksy menu</strong>. Where the in-shop wall board (<code className="text-[#C8A24A]">/hair-beard-pricing</code>) lists a £1–£2 difference or additional walk-in services (such as £5 waxing or £10 standalone beard trims), the difference is noted directly below each service.
                  </p>
                  <div className="mt-4 pt-3 border-t border-[#222228] flex flex-col gap-2 text-xs">
                    <a
                      href={BUSINESS_INFO.links.booksy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between text-[#C8A24A] hover:underline font-medium"
                    >
                      <span>Open Primary Booksy Listing</span>
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                    <a
                      href={BUSINESS_INFO.links.dikidi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between text-[#B8B4AA] hover:text-[#F7F5F0]"
                    >
                      <span>Alternative Dikidi Booking Profile</span>
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (8 cols): Animated Editorial Service Ledger */}
          <div className="lg:col-span-8">
            {visibleServices.length === 0 ? (
              <div className="border border-[#26262C] bg-[#121216] p-8 text-center">
                <p className="text-base font-medium text-[#F7F5F0]">
                  No services match your current filter or search query.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedSource('all-sources');
                    setSelectedCategory('all');
                    setSelectedGoal('all');
                    setSearchQuery('');
                  }}
                  className="mt-4 inline-flex items-center gap-1.5 border border-[#C8A24A] px-4 py-2 text-xs font-semibold text-[#C8A24A] hover:bg-[#C8A24A] hover:text-[#0B0B0D] transition-colors"
                >
                  Reset Filters &amp; Show All 19 Services
                </button>
              </div>
            ) : (
              <div className="divide-y divide-[#24242A] border-t border-b border-[#24242A]">
                <AnimatePresence initial={false}>
                  {visibleServices.map((service) => {
                    const isPlanned = plannedServiceIds.includes(service.id);
                    return (
                      <motion.article
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.22 }}
                        key={service.id}
                        className={`group py-5 sm:py-6 px-3 sm:px-5 transition-colors duration-150 flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                          isPlanned
                            ? 'bg-[#16161F] border-l-2 border-l-[#C8A24A]'
                            : 'hover:bg-[#131318]'
                        }`}
                      >
                        {/* Service Index, Name, Highlights, Description & Cross-Source Note */}
                        <div className="flex items-start gap-3.5 sm:gap-5 max-w-xl">
                          <span className="font-mono-tabular text-xs font-medium text-[#7E7A70] pt-1 shrink-0">
                            {service.indexNumber}.
                          </span>
                          <div>
                            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                              <h3 className="font-display text-lg sm:text-xl font-bold text-[#F7F5F0] group-hover:text-[#C8A24A] transition-colors">
                                {service.name}
                              </h3>
                              <span className="text-xs text-[#8E8A80]">
                                <span aria-hidden="true">·</span>{' '}
                                {service.menuSource === 'booksy'
                                  ? 'Booksy Menu'
                                  : 'In-Shop Price Board'}
                              </span>
                              {service.badge && (
                                <span className="text-[11px] font-mono-tabular uppercase tracking-wider text-[#C8A24A]">
                                  [{service.badge}]
                                </span>
                              )}
                            </div>

                            <p className="mt-1.5 text-sm leading-relaxed text-[#B8B4AA]">
                              {service.description}
                            </p>

                            {/* Unboxed Typographic Highlights (Zero-Pill Discipline) */}
                            {service.includedHighlights.length > 0 && (
                              <p className="mt-2 font-mono-tabular text-[11px] text-[#C8C4BA]">
                                {service.includedHighlights.join(' · ')}
                              </p>
                            )}

                            {service.crossSourceNote && (
                              <p className="mt-1.5 text-xs text-[#8E8A80]">
                                Note: {service.crossSourceNote}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Right Side: Tabular Duration, Price, Plan Toggle & Direct Booking Action */}
                        <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-3 pl-7 sm:pl-0 shrink-0 border-t sm:border-t-0 border-[#1E1E24] pt-3 sm:pt-0">
                          <div className="flex items-baseline gap-3">
                            <span className="font-mono-tabular text-xs text-[#9E9B93]">
                              {formatDuration(service.durationMinutes)}
                            </span>
                            <span
                              className={`font-mono-tabular font-bold ${
                                service.priceGBP !== null
                                  ? 'text-xl sm:text-2xl text-[#F7F5F0]'
                                  : 'text-xs sm:text-sm text-[#D8C38E]'
                              }`}
                            >
                              {formatPriceGBP(service)}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => toggleServiceInPlan(service.id)}
                              className={`inline-flex items-center gap-1 border px-3 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                                isPlanned
                                  ? 'border-[#C8A24A] bg-[#C8A24A]/20 text-[#C8A24A]'
                                  : 'border-[#2E2E38] bg-[#14141A] text-[#C8C4BA] hover:border-[#C8A24A] hover:text-[#F7F5F0]'
                              }`}
                            >
                              {isPlanned ? (
                                <>
                                  <Check className="w-3.5 h-3.5" aria-hidden="true" />
                                  <span>Planned</span>
                                </>
                              ) : (
                                <>
                                  <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                                  <span>Plan</span>
                                </>
                              )}
                            </button>

                            <a
                              href={service.bookingUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Book ${service.name} (${formatPriceGBP(service)}) on Booksy`}
                              className="inline-flex items-center gap-1.5 border border-[#34343E] bg-[#16161C] px-3.5 py-2 text-xs font-semibold text-[#F7F5F0] hover:border-[#C8A24A] hover:bg-[#C8A24A] hover:text-[#0B0B0D] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#C8A24A]"
                            >
                              <span>Book</span>
                              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                            </a>
                          </div>
                        </div>
                      </motion.article>
                    );
                  })}
                </AnimatePresence>
              </div>
            )}

            {/* Bottom Summary Callout */}
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-[#26262C] bg-[#121216] p-5">
              <div>
                <p className="text-sm font-semibold text-[#F7F5F0]">
                  Not sure whether to book a Skin Fade, Taper Fade, or Restyle?
                </p>
                <p className="mt-0.5 text-xs text-[#A6A298]">
                  Book a standard 30-minute slot on Booksy or call Efi directly on{' '}
                  <a href={BUSINESS_INFO.contact.phoneHref} className="text-[#C8A24A] underline">
                    {BUSINESS_INFO.contact.phoneDisplay}
                  </a>{' '}
                  before visiting 46 George Street.
                </p>
              </div>
              <a
                href={BUSINESS_INFO.links.booksy}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#C8A24A] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#0B0B0D] hover:bg-[#D9B55B] transition-colors whitespace-nowrap shrink-0"
              >
                <span>Book on Booksy</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
