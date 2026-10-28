export interface OpeningHoursSchedule {
  sourceName: string;
  sourceUrl: string;
  verificationNote: string;
  rows: {
    days: string;
    hours: string;
  }[];
}

export interface LiveStudioStatus {
  manchesterTimeFormatted: string;
  manchesterDayName: string;
  isOpenGoogleMaps: boolean;
  isOpenWebsiteHours: boolean;
  statusHeadline: string;
  statusDetail: string;
  tone: 'open' | 'late-window' | 'closed';
}

export const BOOKSY_URL =
  'https://booksy.com/en-gb/193537_capital-barbers-by-efi_barber_628476_manchester';

export const DIKIDI_URL = 'https://dikidi.app/2148688';

export const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/fn8KDwYQ34XBuVN2A';

export const GOOGLE_MAPS_DIRECT_PLACE_URL =
  'https://www.google.com/maps/place/Capital+_Barbers+_By+Efi/@53.4791388,-2.2402386,17z';

export const GOOGLE_REVIEW_URL = 'https://g.page/r/CeMq1t3Txe3fECE/review';

export const INSTAGRAM_URL = 'https://www.instagram.com/capital_barbers_by_efi/reels/';

export const BUSINESS_INFO = {
  name: 'Capital Barber by Efi',
  signageName: 'CAPITAL BARBERS by Efi',
  monogram: 'CB',
  founder: 'Efi',
  founderFullName: 'Efrem Melake',
  tagline: 'Precision Barbering & Traditional Grooming in Central Manchester',
  heroHeadline: 'PRECISION IN EVERY CUT.',
  heroSubheadline:
    'Sharp skin fades, razor-clean beard lineups, and unhurried personal attention by Efi at 46 George Street, Manchester.',
  address: {
    street: '46 George Street',
    neighbourhood: 'Chinatown / Central Manchester',
    city: 'Manchester',
    postcode: 'M1 4HF',
    country: 'United Kingdom',
    full: '46 George Street, Manchester M1 4HF',
    plusCode: 'FQH5+MW Manchester',
    coordinates: {
      lat: 53.4791388,
      lng: -2.2402386,
    },
    entranceInstruction: 'Entrance through double doors on the left · Walk-ins welcome',
  },
  contact: {
    phoneDisplay: '07539 635060',
    phoneRaw: '07539635060',
    phoneInternational: '+44 7539 635060',
    phoneHref: 'tel:+447539635060',
    whatsappHref: 'https://wa.me/447539635060',
    email: 'capital@eficapitalbarber.com',
    emailHref: 'mailto:capital@eficapitalbarber.com',
    instagramHandle: '@capital_barbers_by_efi',
    storefrontHandle: '@CAPITAL_BARBERS_MCR',
  },
  links: {
    booksy: BOOKSY_URL,
    dikidi: DIKIDI_URL,
    googleMaps: GOOGLE_MAPS_URL,
    googleMapsDirect: GOOGLE_MAPS_DIRECT_PLACE_URL,
    googleReview: GOOGLE_REVIEW_URL,
    instagram: INSTAGRAM_URL,
    officialWebsite: 'https://www.eficapitalbarber.com/',
  },
  openingHoursSchedules: [
    {
      sourceName: 'Google Maps Business Listing',
      sourceUrl: GOOGLE_MAPS_URL,
      verificationNote:
        'Live daily schedule published on the verified Google Maps listing for 46 George Street.',
      rows: [
        { days: 'Monday – Saturday', hours: '9:00 AM – 10:00 PM' },
        { days: 'Sunday', hours: '9:00 AM – 8:00 PM' },
      ],
    },
    {
      sourceName: 'Official Website Footer',
      sourceUrl: 'https://www.eficapitalbarber.com/',
      verificationNote:
        'General hours currently published in the footer of eficapitalbarber.com.',
      rows: [{ days: 'Monday – Sunday', hours: '9:00 AM – 11:00 PM' }],
    },
  ] as OpeningHoursSchedule[],
  hoursDiscrepancyNote:
    'Published closing times differ between Google Maps (10:00 PM Mon–Sat, 8:00 PM Sun) and the current website footer (11:00 PM daily). For evening appointments after 8:00 PM, please check live booking slots or call 07539 635060.',
  aboutStory: {
    headline: 'Founded by Efi. Built on the details.',
    lead: 'Located at 46 George Street in the heart of central Manchester, Capital Barber by Efi combines sharp modern clipper work with traditional barbering discipline.',
    body: [
      'Every appointment starts with a direct consultation—looking at hair growth pattern, head shape, and how your cut needs to sit days after you leave the chair. From zero skin fades and temple tapers to full restyles and beard sculpting, each service is carried out personally with unhurried focus.',
      'The George Street studio is outfitted for complete grooming: custom gold-and-black leather chairs, daylight-balanced hexagonal overhead lighting for millimeter-accurate lineups, a dedicated facial mist steamer beside the main chair, and cordless precision trimmers.',
    ],
    verifiedStudioDetails: [
      {
        label: 'Founder & Barber',
        value: 'Efi (Efrem Melake)',
        detail: 'Personal one-to-one consultations and consistent execution on every cut.',
      },
      {
        label: 'Studio Equipment',
        value: 'Dedicated Facial Steamer & Cordless Trimmers',
        detail: 'Chair-side hot mist steamer for beard conditioning & pore preparation.',
      },
      {
        label: 'Central Location',
        value: '46 George Street, M1 4HF',
        detail: 'Entrance through double doors on the left. Walk-ins and online bookings welcome.',
      },
    ],
    ritualStages: [
      {
        step: '01',
        title: 'Growth Pattern & Head Shape Assessment',
        description:
          'Before a clipper touches the hair, Efi inspects crown whorl direction, parietal ridge structure, and hair density so the fade transition sits naturally as it grows out.',
      },
      {
        step: '02',
        title: 'Seamless Clipper Gradient & Scissor Balance',
        description:
          'Using calibrated cordless Cocco and Wahl clippers alongside Barber-Tal shears, the transition from foil-zero or taper into the top weight line is blended without harsh steps.',
      },
      {
        step: '03',
        title: 'Warm-Mist Facial Steamer & Beard Sculpting',
        description:
          'For full grooming packages, the chair-side facial mist steamer softens coarse beard bristles and opens pores prior to straight-razor cheek and neckline definition.',
      },
      {
        step: '04',
        title: 'Precision Forehead Lineup & Styling Finish',
        description:
          'Finished under daylight-balanced hexagonal overhead LEDs for symmetrical hairline geometry, followed by texture styling suited to your daily routine.',
      },
    ],
  },
  landmarks: [
    {
      name: 'Piccadilly Gardens',
      walkTime: '3 min walk',
      distance: '0.2 miles',
      direction: 'Walk south-west via Charlotte St or Mosley St into George Street (Chinatown).',
    },
    {
      name: "St Peter's Square Metrolink",
      walkTime: '4 min walk',
      distance: '0.2 miles',
      direction: 'Head east along Princess Street and turn onto George Street towards #46.',
    },
    {
      name: 'Manchester Piccadilly Station',
      walkTime: '9 min walk',
      distance: '0.5 miles',
      direction: 'Walk down Portland Street into Chinatown and turn right onto George Street.',
    },
  ],
} as const;

/**
 * Pure helper computing whether 46 George Street is currently within published opening hours
 * in Manchester (Europe/London), transparently accounting for the Google Maps vs Website footer discrepancy.
 */
export function getManchesterStudioStatus(now: Date = new Date()): LiveStudioStatus {
  const formatter = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/London',
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  const parts = formatter.formatToParts(now);
  const weekday = parts.find((p) => p.type === 'weekday')?.value || 'Monday';
  const hourStr = parts.find((p) => p.type === 'hour')?.value || '12';
  const minuteStr = parts.find((p) => p.type === 'minute')?.value || '00';

  const hour = parseInt(hourStr, 10);
  const minute = parseInt(minuteStr, 10);
  const decimalHour = hour + minute / 60;

  const isSunday = weekday === 'Sunday';
  const gmapsCloseHour = isSunday ? 20 : 22; // 8:00 PM Sun, 10:00 PM Mon-Sat
  const websiteCloseHour = 23; // 11:00 PM Mon-Sun
  const openHour = 9; // 9:00 AM daily

  const isOpenGoogleMaps = decimalHour >= openHour && decimalHour < gmapsCloseHour;
  const isOpenWebsiteHours = decimalHour >= openHour && decimalHour < websiteCloseHour;

  const displayTimeFormatter = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/London',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
  const manchesterTimeFormatted = displayTimeFormatter.format(now).toUpperCase();

  if (isOpenGoogleMaps) {
    const closeLabel = isSunday ? '8:00 PM' : '10:00 PM';
    return {
      manchesterTimeFormatted,
      manchesterDayName: weekday,
      isOpenGoogleMaps: true,
      isOpenWebsiteHours: true,
      statusHeadline: `Studio Open Now · Closes ${closeLabel}`,
      statusDetail: `Walk-ins welcome through double doors on the left (${weekday}, ${manchesterTimeFormatted} UK)`,
      tone: 'open',
    };
  }

  if (!isOpenGoogleMaps && isOpenWebsiteHours) {
    return {
      manchesterTimeFormatted,
      manchesterDayName: weekday,
      isOpenGoogleMaps: false,
      isOpenWebsiteHours: true,
      statusHeadline: 'Late Evening Window · Call to Confirm',
      statusDetail: `Between Google Maps close (${isSunday ? '8 PM' : '10 PM'}) and Website close (11 PM) — call 07539 635060`,
      tone: 'late-window',
    };
  }

  return {
    manchesterTimeFormatted,
    manchesterDayName: weekday,
    isOpenGoogleMaps: false,
    isOpenWebsiteHours: false,
    statusHeadline: 'Studio Currently Closed · Opens 9:00 AM',
    statusDetail: `Book your next slot online 24/7 via Booksy (${weekday}, ${manchesterTimeFormatted} UK)`,
    tone: 'closed',
  };
}
