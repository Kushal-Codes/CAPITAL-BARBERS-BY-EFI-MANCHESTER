import { BOOKSY_URL } from './business';

export type ServiceMenuSource = 'booksy' | 'in-shop-board';

export type ServiceCategory =
  | 'all'
  | 'fades-cuts'
  | 'beard-packages'
  | 'youth-kids'
  | 'grooming-waxing';

export type ConsultationGoalId =
  | 'all'
  | 'sharp-fade'
  | 'beard-steamer-ritual'
  | 'scissor-restyle'
  | 'express-lineup'
  | 'family-youth';

export interface BarberService {
  id: string;
  indexNumber: string;
  name: string;
  category: Exclude<ServiceCategory, 'all'>;
  menuSource: ServiceMenuSource;
  /** Price in GBP (£), or null when price requires confirmation at booking */
  priceGBP: number | null;
  priceLabel?: string;
  /** Duration in minutes, or null if not specified on the in-shop board */
  durationMinutes: number | null;
  description: string;
  includedHighlights: string[];
  crossSourceNote?: string;
  featured?: boolean;
  badge?: string;
  bookingUrl: string;
  sourceUrl: string;
}

export interface SignatureTier {
  id: string;
  tierLabel: string;
  serviceId: string;
  name: string;
  tagline: string;
  priceGBP: number;
  durationMinutes: number;
  sourceLabel: string;
  accentHighlight?: boolean;
  badgeText: string;
  features: string[];
  comparisonNote: string;
  bookingUrl: string;
}

export interface SmartComboSuggestion {
  type: 'save' | 'upgrade';
  headline: string;
  detail: string;
  recommendedServiceId: string;
  recommendedServiceName: string;
  recommendedPriceGBP: number;
  savingsGBP?: number;
}

export interface SessionEstimateResult {
  selectedServices: BarberService[];
  knownTotalGBP: number;
  hasUnpricedService: boolean;
  totalDurationMinutes: number;
  hasUntimedService: boolean;
  smartSuggestion: SmartComboSuggestion | null;
}

export const SERVICE_CATEGORIES: { id: ServiceCategory; label: string; countNote?: string }[] = [
  { id: 'all', label: 'All Services' },
  { id: 'fades-cuts', label: 'Haircuts & Fades' },
  { id: 'beard-packages', label: 'Beard & Full Packages' },
  { id: 'youth-kids', label: 'Youth & Kids' },
  { id: 'grooming-waxing', label: 'In-Shop Add-Ons & Waxing' },
];

export const CONSULTATION_GOALS: {
  id: ConsultationGoalId;
  label: string;
  subtitle: string;
  serviceIds: string[];
}[] = [
  {
    id: 'all',
    label: 'All Treatments',
    subtitle: 'Browse complete verified tariff',
    serviceIds: [],
  },
  {
    id: 'sharp-fade',
    label: 'Skin & Taper Fades',
    subtitle: 'Zero foil blends & temple tapers',
    serviceIds: ['skin-fade', 'taper-fade', 'haircut-and-beard', 'inshop-razor-fade-beard'],
  },
  {
    id: 'beard-steamer-ritual',
    label: 'Beard & Hot Steamer',
    subtitle: 'Full sculpt + chair-side facial mist',
    serviceIds: [
      'haircut-beard-steamer',
      'haircut-and-beard',
      'shape-up-beard-trim',
      'inshop-razor-fade-beard',
      'inshop-hot-towel-shave',
    ],
  },
  {
    id: 'scissor-restyle',
    label: 'Restyle & Wash',
    subtitle: 'Longer lengths & shampoo finish',
    serviceIds: ['long-hair-restyle', 'long-hair-restyle-beard', 'haircut-wash-style', 'classic-cut'],
  },
  {
    id: 'express-lineup',
    label: '20-Min Lineup & Wax',
    subtitle: 'Perimeter shape-up & facial detailing',
    serviceIds: [
      'shape-up-beard-trim',
      'inshop-beard-trim-only',
      'inshop-full-face-ear-waxing',
      'inshop-single-area-waxing',
    ],
  },
  {
    id: 'family-youth',
    label: 'Youth, Kids & Seniors',
    subtitle: 'Tailored cuts for all ages',
    serviceIds: ['youth-haircut-10-17', 'kids-under-10', 'inshop-senior-haircut'],
  },
];

export const SIGNATURE_TIERS: SignatureTier[] = [
  {
    id: 'tier-precision-fade',
    tierLabel: '01 · Core Precision',
    serviceId: 'skin-fade',
    name: 'Skin Fade / Taper Fade',
    tagline: 'Millimeter-sharp gradient & hairline lineup',
    priceGBP: 20,
    durationMinutes: 30,
    sourceLabel: 'Verified on Booksy & Website (£20)',
    badgeText: 'Signature Cut',
    features: [
      '1-on-1 head shape & growth pattern consultation',
      'Zero foil skin fade or graduated temple/nape taper',
      'Crown & top scissor texture balancing',
      'Cordless red trimmer forehead & temple lineup',
    ],
    comparisonNote: 'Same £20 tariff across Skin Fade, Taper Fade, and Standard Haircut.',
    bookingUrl: BOOKSY_URL,
  },
  {
    id: 'tier-cut-and-beard',
    tierLabel: '02 · High-Value Combo',
    serviceId: 'haircut-and-beard',
    name: 'Haircut & Beard Sculpt',
    tagline: 'Complete haircut + full beard shaping & razor line',
    priceGBP: 20,
    durationMinutes: 35,
    sourceLabel: 'Verified on Booksy & Website (£20)',
    accentHighlight: true,
    badgeText: 'Best Value on Menu',
    features: [
      'Full tailored haircut, skin fade, or taper fade',
      'Seamless sideburn-to-beard fade integration',
      'Full beard length balance & jawline structuring',
      'Razor-sharp cheek & neckline edge definition',
    ],
    comparisonNote: 'Includes both full haircut and beard trim in a 35-minute session at £20.',
    bookingUrl: BOOKSY_URL,
  },
  {
    id: 'tier-steamer-ritual',
    tierLabel: '03 · Flagship Studio Ritual',
    serviceId: 'haircut-beard-steamer',
    name: 'Haircut & Beard + Steamer',
    tagline: 'Elevated 45-minute session with warm-mist facial steamer',
    priceGBP: 28,
    durationMinutes: 45,
    sourceLabel: 'Verified on Booksy (£28 · 45 min)',
    badgeText: 'Flagship Experience',
    features: [
      'Everything in the Haircut & Beard Sculpt session',
      'Dedicated chair-side warm-mist facial steamer treatment',
      'Softens coarse beard bristles & opens facial pores',
      'Extended 45-minute unhurried detailing & skin hydration',
    ],
    comparisonNote: 'Uses the dedicated ozone facial mist steamer beside Efi’s main chair.',
    bookingUrl: BOOKSY_URL,
  },
];

/**
 * Central verified service catalogue.
 * - Primary bookable services (`menuSource: 'booksy'`) match the exact Booksy appointment names,
 *   verified GBP prices, and durations in minutes.
 * - Additional treatments published on `eficapitalbarber.com/hair-beard-pricing` (`menuSource: 'in-shop-board'`)
 *   are preserved transparently with source attribution and never silently merged.
 */
export const SERVICES_DATA: BarberService[] = [
  // === 1. BOOKSY LIVE BOOKABLE APPOINTMENT MENU (12 VERIFIED SERVICES) ===
  {
    id: 'skin-fade',
    indexNumber: '01',
    name: 'Skin fade',
    category: 'fades-cuts',
    menuSource: 'booksy',
    priceGBP: 20,
    durationMinutes: 30,
    description:
      'Seamless zero-grade or foil transition blended into tailored top length, finished with razor-sharp temple and neckline detailing.',
    includedHighlights: ['Zero/Foil Fade', 'Scissor Top Trim', 'Razor Edge-Up'],
    crossSourceNote: 'Matches £20 Skin Fade on eficapitalbarber.com/hair-beard-pricing.',
    featured: true,
    badge: 'Most Requested',
    bookingUrl: BOOKSY_URL,
    sourceUrl: BOOKSY_URL,
  },
  {
    id: 'taper-fade',
    indexNumber: '02',
    name: 'Taper fade',
    category: 'fades-cuts',
    menuSource: 'booksy',
    priceGBP: 20,
    durationMinutes: 30,
    description:
      'Clean, graduated taper around the temples and nape while preserving natural fullness through the sides and crown.',
    includedHighlights: ['Temple & Nape Taper', 'Crown Blending', 'Crisp Lineup'],
    featured: true,
    badge: 'Signature',
    bookingUrl: BOOKSY_URL,
    sourceUrl: BOOKSY_URL,
  },
  {
    id: 'haircut',
    indexNumber: '03',
    name: 'Haircut',
    category: 'fades-cuts',
    menuSource: 'booksy',
    priceGBP: 20,
    durationMinutes: 30,
    description:
      'Consultation followed by a tailored clipper and scissor cut, clean hairline edge-up, and styling finish.',
    includedHighlights: ['Consultation', 'Clipper & Scissor Cut', 'Texture Finish'],
    crossSourceNote: 'Listed as Standard Haircut (£20) on website pricing page.',
    bookingUrl: BOOKSY_URL,
    sourceUrl: BOOKSY_URL,
  },
  {
    id: 'classic-cut',
    indexNumber: '04',
    name: 'Classic Cut',
    category: 'fades-cuts',
    menuSource: 'booksy',
    priceGBP: 20,
    durationMinutes: 35,
    description:
      'Traditional scissor and clipper craftsmanship with extended 35-minute detailing for structured, timeless silhouettes.',
    includedHighlights: ['35-Min Extended Detail', 'Traditional Scissor Work', 'Neck Taper'],
    crossSourceNote: 'Matches £20 Classic Haircut on website pricing page.',
    bookingUrl: BOOKSY_URL,
    sourceUrl: BOOKSY_URL,
  },
  {
    id: 'long-hair-restyle',
    indexNumber: '05',
    name: 'Long Hair Restyle',
    category: 'fades-cuts',
    menuSource: 'booksy',
    priceGBP: 25,
    durationMinutes: 40,
    description:
      'Full 40-minute scissor restyle or transformation from longer lengths, shaped for natural movement and balance.',
    includedHighlights: ['40-Min Transformation', 'Full Scissor Layering', 'Movement & Flow'],
    bookingUrl: BOOKSY_URL,
    sourceUrl: BOOKSY_URL,
  },
  {
    id: 'haircut-and-beard',
    indexNumber: '06',
    name: 'Haircut & Beard',
    category: 'beard-packages',
    menuSource: 'booksy',
    priceGBP: 20,
    durationMinutes: 35,
    description:
      'Complete tailored haircut or fade paired with beard sculpting, faded sideburns, and crisp jawline edging.',
    includedHighlights: ['Full Haircut / Fade', 'Beard Sculpt & Fade', 'Razor Jawline'],
    crossSourceNote:
      'Matches £20 Haircut & Beard Trim / Professional Beard Styling on website pricing page.',
    featured: true,
    badge: 'Best Value',
    bookingUrl: BOOKSY_URL,
    sourceUrl: BOOKSY_URL,
  },
  {
    id: 'haircut-beard-steamer',
    indexNumber: '07',
    name: 'Haircut & Beard + Steamer',
    category: 'beard-packages',
    menuSource: 'booksy',
    priceGBP: 28,
    durationMinutes: 45,
    description:
      'Full haircut and structured beard sculpt elevated with our chair-side warm mist facial steamer to soften bristles, open pores, and hydrate skin.',
    includedHighlights: ['45-Min Full Ritual', 'Warm-Mist Facial Steamer', 'Cut + Beard Sculpt'],
    featured: true,
    badge: 'Flagship Package',
    bookingUrl: BOOKSY_URL,
    sourceUrl: BOOKSY_URL,
  },
  {
    id: 'haircut-wash-style',
    indexNumber: '08',
    name: 'Haircut + Wash & Style',
    category: 'beard-packages',
    menuSource: 'booksy',
    priceGBP: 27,
    durationMinutes: 45,
    description:
      'Precision haircut followed by an invigorating shampoo wash, scalp refresh, blow-dry, and product styling.',
    includedHighlights: ['Precision Haircut', 'Shampoo & Scalp Wash', 'Blow-Dry & Style'],
    crossSourceNote:
      'Booksy lists £27 (45 mins); website /hair-beard-pricing lists Haircut, Wash & Finish at £25.',
    bookingUrl: BOOKSY_URL,
    sourceUrl: BOOKSY_URL,
  },
  {
    id: 'long-hair-restyle-beard',
    indexNumber: '09',
    name: 'Long Hair Restyle + Beard',
    category: 'beard-packages',
    menuSource: 'booksy',
    priceGBP: 28,
    durationMinutes: 40,
    description:
      'Comprehensive scissor restyle combined with full beard shaping, taper integration, and razor line definition.',
    includedHighlights: ['Full Scissor Restyle', 'Complete Beard Shape', 'Razor Detailing'],
    bookingUrl: BOOKSY_URL,
    sourceUrl: BOOKSY_URL,
  },
  {
    id: 'shape-up-beard-trim',
    indexNumber: '10',
    name: 'Shape Up + Beard Trim',
    category: 'beard-packages',
    menuSource: 'booksy',
    priceGBP: 13,
    durationMinutes: 20,
    description:
      'Sharp perimeter hairline and temple touch-up paired with a structured beard trim and cheek/neck line cleanup.',
    includedHighlights: ['20-Min Express', 'Hairline & Temple Edge', 'Beard Trim & Lineup'],
    crossSourceNote: 'Matches £13 Shape-Up & Beard Trim on website pricing page.',
    bookingUrl: BOOKSY_URL,
    sourceUrl: BOOKSY_URL,
  },
  {
    id: 'youth-haircut-10-17',
    indexNumber: '11',
    name: 'Youth Haircut (10–17)',
    category: 'youth-kids',
    menuSource: 'booksy',
    priceGBP: 17,
    durationMinutes: 25,
    description:
      'Tailored haircut, taper, or fade for ages 10 to 17 with clean styling and natural finish.',
    includedHighlights: ['Ages 10–17', 'Fade or Scissor Cut', '25-Min Session'],
    crossSourceNote:
      'Booksy lists £17 (25 mins); website /hair-beard-pricing lists £15.',
    bookingUrl: BOOKSY_URL,
    sourceUrl: BOOKSY_URL,
  },
  {
    id: 'kids-under-10',
    indexNumber: '12',
    name: 'Kids Under 10',
    category: 'youth-kids',
    menuSource: 'booksy',
    priceGBP: 13,
    durationMinutes: 20,
    description:
      'Patient, comfortable haircut for children under 10, finished with neat scissor and clipper detailing.',
    includedHighlights: ['Under 10 Years', 'Patient Detailing', '20-Min Session'],
    crossSourceNote:
      "Booksy lists £13 (20 mins); website /hair-beard-pricing lists Children's Haircut (Under 10) at £12.",
    bookingUrl: BOOKSY_URL,
    sourceUrl: BOOKSY_URL,
  },

  // === 2. ADDITIONAL IN-SHOP TREATMENTS LISTED ON EFICAPITALBARBER.COM ===
  {
    id: 'inshop-razor-fade-beard',
    indexNumber: '13',
    name: 'Razor Fade & Beard Trim',
    category: 'beard-packages',
    menuSource: 'in-shop-board',
    priceGBP: 25,
    durationMinutes: null,
    description:
      'Close razor skin fade paired with a full beard trim, razor line edging, and conditioning oil finish.',
    includedHighlights: ['Close Razor Fade', 'Beard Trim', 'Razor Line Finish'],
    crossSourceNote: 'Published on eficapitalbarber.com/hair-beard-pricing (£25).',
    bookingUrl: BOOKSY_URL,
    sourceUrl: 'https://www.eficapitalbarber.com/hair-beard-pricing',
  },
  {
    id: 'inshop-beard-trim-only',
    indexNumber: '14',
    name: 'Beard Trim',
    category: 'beard-packages',
    menuSource: 'in-shop-board',
    priceGBP: 10,
    durationMinutes: null,
    description:
      'Standalone beard length sculpting, clipper graduation, and crisp razor line-up.',
    includedHighlights: ['Length Sculpting', 'Sideburn Blend', 'Cheek & Neck Lineup'],
    crossSourceNote: 'Published on eficapitalbarber.com/hair-beard-pricing (£10).',
    bookingUrl: BOOKSY_URL,
    sourceUrl: 'https://www.eficapitalbarber.com/hair-beard-pricing',
  },
  {
    id: 'inshop-zero-length-cut',
    indexNumber: '15',
    name: 'Zero-Length Cut',
    category: 'fades-cuts',
    menuSource: 'in-shop-board',
    priceGBP: 15,
    durationMinutes: null,
    description:
      'Even all-over zero clipper or foil buzz cut with clean perimeter detailing.',
    includedHighlights: ['All-Over Zero Grade', 'Foil Option', 'Perimeter Lineup'],
    crossSourceNote: 'Published on eficapitalbarber.com/hair-beard-pricing (£15).',
    bookingUrl: BOOKSY_URL,
    sourceUrl: 'https://www.eficapitalbarber.com/hair-beard-pricing',
  },
  {
    id: 'inshop-senior-haircut',
    indexNumber: '16',
    name: 'Senior Haircut (Ages 65+)',
    category: 'fades-cuts',
    menuSource: 'in-shop-board',
    priceGBP: 20,
    durationMinutes: null,
    description:
      'Classic scissor or clipper cut tailored for gentlemen aged 65 and over.',
    includedHighlights: ['Ages 65+', 'Traditional Scissor/Clipper', 'Neck & Brow Tidy'],
    crossSourceNote: 'Published on eficapitalbarber.com/hair-beard-pricing (£20).',
    bookingUrl: BOOKSY_URL,
    sourceUrl: 'https://www.eficapitalbarber.com/hair-beard-pricing',
  },
  {
    id: 'inshop-full-face-ear-waxing',
    indexNumber: '17',
    name: 'Full Face & Ear Waxing',
    category: 'grooming-waxing',
    menuSource: 'in-shop-board',
    priceGBP: 12,
    durationMinutes: null,
    description:
      'Complete facial grooming wax covering nose, ears, cheek lines, and eyebrows for a clean finish.',
    includedHighlights: ['Nose & Ears', 'Cheek Lines', 'Eyebrow Tidy (£20 Value)'],
    badge: 'Save £8 vs Single Wax',
    crossSourceNote: 'Published on eficapitalbarber.com/hair-beard-pricing (£12).',
    bookingUrl: BOOKSY_URL,
    sourceUrl: 'https://www.eficapitalbarber.com/hair-beard-pricing',
  },
  {
    id: 'inshop-single-area-waxing',
    indexNumber: '18',
    name: 'Nose, Ear, Cheek Line, or Eyebrow Waxing',
    category: 'grooming-waxing',
    menuSource: 'in-shop-board',
    priceGBP: 5,
    priceLabel: '£5 each',
    durationMinutes: null,
    description:
      'Individual hot-wax detailing for nose, ears, cheek line, or eyebrows (£5 per area).',
    includedHighlights: ['£5 Per Area', 'Hot Wax Detail', 'Quick Add-On'],
    crossSourceNote:
      'Published as 4 individual £5 items on eficapitalbarber.com/hair-beard-pricing.',
    bookingUrl: BOOKSY_URL,
    sourceUrl: 'https://www.eficapitalbarber.com/hair-beard-pricing',
  },
  {
    id: 'inshop-hot-towel-shave',
    indexNumber: '19',
    name: 'Traditional Hot Towel Shave',
    category: 'grooming-waxing',
    menuSource: 'in-shop-board',
    priceGBP: null,
    priceLabel: 'Confirm price when booking',
    durationMinutes: null,
    description:
      'Straight-razor wet shave with soothing warm towels, pre-shave essential oils, and a cold-towel aftershave finish.',
    includedHighlights: ['Warm & Cold Towels', 'Pre-Shave Oils', 'Straight-Razor Shave'],
    crossSourceNote:
      'Featured on eficapitalbarber.com homepage; standalone price not listed on Booksy—confirm when booking.',
    bookingUrl: BOOKSY_URL,
    sourceUrl: 'https://www.eficapitalbarber.com/',
  },
];

export function formatPriceGBP(service: Pick<BarberService, 'priceGBP' | 'priceLabel'>): string {
  if (service.priceLabel) {
    return service.priceLabel;
  }
  if (service.priceGBP === null) {
    return 'Confirm price when booking';
  }
  return `£${service.priceGBP}`;
}

export function formatDuration(durationMinutes: number | null): string {
  if (durationMinutes === null || durationMinutes <= 0) {
    return 'In-shop timing';
  }
  return `${durationMinutes} min`;
}

export function filterServicesByMenuAndCategory(
  services: readonly BarberService[],
  menuSource: ServiceMenuSource | 'all-sources',
  category: ServiceCategory,
  searchQuery: string = '',
  goalId: ConsultationGoalId = 'all'
): BarberService[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const goalConfig = CONSULTATION_GOALS.find((g) => g.id === goalId);

  return services.filter((service) => {
    const matchesSource =
      menuSource === 'all-sources' ? true : service.menuSource === menuSource;
    const matchesCategory =
      category === 'all' ? true : service.category === category;
    const matchesGoal =
      !goalConfig || goalConfig.id === 'all'
        ? true
        : goalConfig.serviceIds.includes(service.id);
    const matchesSearch =
      normalizedQuery.length === 0
        ? true
        : service.name.toLowerCase().includes(normalizedQuery) ||
          service.description.toLowerCase().includes(normalizedQuery) ||
          service.includedHighlights.some((h) =>
            h.toLowerCase().includes(normalizedQuery)
          );

    return matchesSource && matchesCategory && matchesGoal && matchesSearch;
  });
}

export function getServiceSummaryStats(services: readonly BarberService[]) {
  const booksyServices = services.filter((s) => s.menuSource === 'booksy');
  const pricedServices = services.filter((s) => typeof s.priceGBP === 'number');
  const prices = pricedServices.map((s) => s.priceGBP as number);
  const minPrice = prices.length > 0 ? Math.min(...prices) : 0;
  const maxPrice = prices.length > 0 ? Math.max(...prices) : 0;

  return {
    totalServicesCount: services.length,
    booksyBookableCount: booksyServices.length,
    inShopAdditionalCount: services.length - booksyServices.length,
    minPriceGBP: minPrice,
    maxPriceGBP: maxPrice,
  };
}

/**
 * Pure session estimator & smart combo advisor.
 * Evaluates user-selected service IDs and computes exact total GBP, duration,
 * and smart package upgrades/savings based strictly on verified Booksy & Website pricing.
 */
export function calculateSessionEstimate(
  services: readonly BarberService[],
  selectedIds: readonly string[]
): SessionEstimateResult {
  const idSet = new Set(selectedIds);
  const selectedServices = services.filter((s) => idSet.has(s.id));

  let knownTotalGBP = 0;
  let hasUnpricedService = false;
  let totalDurationMinutes = 0;
  let hasUntimedService = false;

  for (const s of selectedServices) {
    if (typeof s.priceGBP === 'number') {
      knownTotalGBP += s.priceGBP;
    } else {
      hasUnpricedService = true;
    }

    if (typeof s.durationMinutes === 'number' && s.durationMinutes > 0) {
      totalDurationMinutes += s.durationMinutes;
    } else {
      hasUntimedService = true;
    }
  }

  let smartSuggestion: SmartComboSuggestion | null = null;

  const standaloneCutIds = ['skin-fade', 'taper-fade', 'haircut', 'classic-cut'];
  const hasStandaloneCut = selectedServices.some((s) => standaloneCutIds.includes(s.id));
  const hasStandaloneBeard = idSet.has('inshop-beard-trim-only') || idSet.has('shape-up-beard-trim');

  // Case 1: User selected a £20 cut + a standalone beard trim (£10 or £13) -> £30–£33 total
  if (hasStandaloneCut && hasStandaloneBeard && !idSet.has('haircut-and-beard')) {
    const combinedCost = knownTotalGBP;
    const savings = Math.max(0, combinedCost - 20);
    smartSuggestion = {
      type: 'save',
      headline: `Save £${savings} with the Booksy Haircut & Beard Combo (£20)`,
      detail:
        'Instead of booking a Haircut (£20) and Beard Trim (£10) separately for £30, Efi’s verified "Haircut & Beard" appointment on Booksy includes both in a 35-minute session for £20—or upgrade to "Haircut & Beard + Steamer" for £28.',
      recommendedServiceId: 'haircut-and-beard',
      recommendedServiceName: 'Haircut & Beard',
      recommendedPriceGBP: 20,
      savingsGBP: savings,
    };
  }
  // Case 2: User selected Haircut & Beard (£20) -> suggest +£8 Steamer Ritual upgrade
  else if (idSet.has('haircut-and-beard') && !idSet.has('haircut-beard-steamer')) {
    smartSuggestion = {
      type: 'upgrade',
      headline: 'Upgrade to the Warm-Mist Facial Steamer Ritual (+£8 · +10 min)',
      detail:
        'For £28 (45 mins total), "Haircut & Beard + Steamer" adds Efi’s chair-side hot mist steamer to soften coarse beard hair, open pores, and hydrate the skin during razor detailing.',
      recommendedServiceId: 'haircut-beard-steamer',
      recommendedServiceName: 'Haircut & Beard + Steamer',
      recommendedPriceGBP: 28,
    };
  }
  // Case 3: User selected a standalone £20 cut only -> inform them that Haircut & Beard is also £20
  else if (
    selectedServices.length === 1 &&
    standaloneCutIds.includes(selectedServices[0].id)
  ) {
    smartSuggestion = {
      type: 'upgrade',
      headline: 'Need a Beard Sculpt Too? Haircut & Beard is Also £20 (35 min)',
      detail:
        'On Efi’s official Booksy menu, "Haircut & Beard" (35 mins) is priced at £20—the same rate as a standalone Skin Fade or Taper Fade.',
      recommendedServiceId: 'haircut-and-beard',
      recommendedServiceName: 'Haircut & Beard',
      recommendedPriceGBP: 20,
    };
  }

  return {
    selectedServices,
    knownTotalGBP,
    hasUnpricedService,
    totalDurationMinutes,
    hasUntimedService,
    smartSuggestion,
  };
}
