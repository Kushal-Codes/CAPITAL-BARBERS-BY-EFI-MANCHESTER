export type GalleryFilterCategory = 'all' | 'cuts' | 'studio' | 'barber';

export interface GalleryItem {
  id: string;
  indexLabel: string;
  title: string;
  subtitle: string;
  category: Exclude<GalleryFilterCategory, 'all'>;
  src: string;
  alt: string;
  width: number;
  height: number;
  aspectClass: string;
  gridSpanClass: string;
  sourceLabel: string;
  sourceUrl: string;
  authenticityBadge: 'Actual Business Photo' | 'Actual Business Photo (Crop)';
  technicalNote: string;
}

export const GALLERY_CATEGORIES: { id: GalleryFilterCategory; label: string }[] = [
  { id: 'all', label: 'All Authentic Work (08)' },
  { id: 'cuts', label: 'Fades & Lineups' },
  { id: 'barber', label: 'Efi at Work' },
  { id: 'studio', label: '46 George St Studio' },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'precision-lineup-hero',
    indexLabel: '01',
    title: 'Temple Taper & Hairline Precision',
    subtitle: 'Cordless trimmer edge-up & comb control',
    category: 'cuts',
    src: '/images/gallery/01-precision-lineup-fade.png',
    alt: 'Efi in a crisp white shirt and leather chest holster lining up a client temple taper fade with a red cordless trimmer at 46 George Street.',
    width: 1835,
    height: 996,
    aspectClass: 'aspect-[16/9]',
    gridSpanClass: 'lg:col-span-8',
    sourceLabel: 'Official Website Asset (eficapitalbarber.com)',
    sourceUrl:
      'https://primary.jwwb.nl/public/w/p/b/temp-diawrivtfxhjeeltbsaa/image-high.png',
    authenticityBadge: 'Actual Business Photo',
    technicalNote:
      'Shot inside 46 George Street showing Efi’s signature white shirt, leather tool holster, gold watch, red trimmer, and chair-side facial steamer.',
  },
  {
    id: 'textured-crop-fade-closeup',
    indexLabel: '02',
    title: 'Textured Curl & Temple Fade Detail',
    subtitle: 'Close-up gradient & forehead line definition',
    category: 'cuts',
    src: '/images/gallery/07-textured-crop-fade-closeup.jpg',
    alt: 'Close-up detail of a sharp temple taper fade on textured curly hair being lined up with a red trimmer and comb.',
    width: 950,
    height: 996,
    aspectClass: 'aspect-square',
    gridSpanClass: 'lg:col-span-4',
    sourceLabel: 'Official Website High-Res Detail Crop',
    sourceUrl:
      'https://primary.jwwb.nl/public/w/p/b/temp-diawrivtfxhjeeltbsaa/image-high.png',
    authenticityBadge: 'Actual Business Photo (Crop)',
    technicalNote:
      '1:1 studio detail crop from the 1835×996 original highlighting the clean taper transition around the ear and temple.',
  },
  {
    id: 'efi-founder-portrait',
    indexLabel: '03',
    title: 'Efi — Founder & Master Barber',
    subtitle: '46 George Street, Central Manchester',
    category: 'barber',
    src: '/images/gallery/04-efi-founder-portrait.jpg',
    alt: 'Portrait of Efi smiling inside Capital Barber at 46 George Street wearing a white dress shirt and leather Barber-Tal chest holster with shears and combs.',
    width: 1919,
    height: 2879,
    aspectClass: 'aspect-[3/4]',
    gridSpanClass: 'lg:col-span-4',
    sourceLabel: 'Official Meet Efi Portrait (eficapitalbarber.com/meet-efi)',
    sourceUrl:
      'https://primary.jwwb.nl/public/w/p/b/temp-diawrivtfxhjeeltbsaa/whatsapp-image-2026-09-23-at-00-36-49-high-hsltgn.jpg',
    authenticityBadge: 'Actual Business Photo',
    technicalNote:
      'High-resolution 1919×2879 portrait. Notice the in-shop CAPITAL BARBERS BY EFI price board reflected in the mirror and red clippers on the marble station.',
  },
  {
    id: 'shop-interior-chair-session',
    indexLabel: '04',
    title: 'In the Chair Under Hexagonal Studio Lights',
    subtitle: 'Full studio view with 3D gold wall emblem',
    category: 'studio',
    src: '/images/gallery/02-shop-interior-chair-session.png',
    alt: 'Wide vertical view inside Capital Barber by Efi showing a client in the black and gold barber chair beneath hexagonal LED ceiling lights and the gold CAPITAL BARBERS by Efi wall sign.',
    width: 1564,
    height: 2687,
    aspectClass: 'aspect-[3/4]',
    gridSpanClass: 'lg:col-span-4',
    sourceLabel: 'Official Website Asset (eficapitalbarber.com/services-treatments)',
    sourceUrl:
      'https://primary.jwwb.nl/public/w/p/b/temp-diawrivtfxhjeeltbsaa/image-high-2ekm5u.png',
    authenticityBadge: 'Actual Business Photo',
    technicalNote:
      'Shows the complete studio environment: hexagonal overhead lighting, 3D gold Crown CB emblem, quilted waiting sofa, facial steamer, and gold-framed chair.',
  },
  {
    id: 'temple-taper-fade-detail',
    indexLabel: '05',
    title: 'Sharp Lineup & Taper Profile',
    subtitle: 'Precision clipper and comb work in progress',
    category: 'barber',
    src: '/images/gallery/03-temple-taper-fade-detail.png',
    alt: 'Vertical profile photograph of Efi lining up a client temple fade with a red cordless trimmer and comb.',
    width: 1100,
    height: 1993,
    aspectClass: 'aspect-[3/4]',
    gridSpanClass: 'lg:col-span-4',
    sourceLabel: 'Official Website Asset (eficapitalbarber.com)',
    sourceUrl:
      'https://primary.jwwb.nl/public/w/p/b/temp-diawrivtfxhjeeltbsaa/image-high-6jp71v.png',
    authenticityBadge: 'Actual Business Photo',
    technicalNote:
      'Full vertical frame (1100×1993) showing the client seated in the cape with the grey marble cabinetry and facial steamer behind.',
  },
  {
    id: 'gold-barber-chair-station',
    indexLabel: '06',
    title: 'Custom Gold & Black Leather Barber Chair',
    subtitle: 'Greek-key embossed footrest & marble workstation',
    category: 'studio',
    src: '/images/gallery/05-gold-barber-chair-station.jpg',
    alt: 'Custom black quilted leather and polished gold barber chair with Greek-key footrest and grey marble workstation at Capital Barber by Efi.',
    width: 578,
    height: 1536,
    aspectClass: 'aspect-[3/5]',
    gridSpanClass: 'lg:col-span-4',
    sourceLabel: 'Google Maps Official Business Photo',
    sourceUrl: 'https://maps.app.goo.gl/fn8KDwYQ34XBuVN2A',
    authenticityBadge: 'Actual Business Photo (Crop)',
    technicalNote:
      'Shows the custom gold-plated barber chair, black-and-gold marble feature wall, and red cordless clippers.',
  },
  {
    id: 'workstation-clippers-mirror',
    indexLabel: '07',
    title: 'The Workstation & Cordless Clipper Lineup',
    subtitle: 'Red Cocco/Wahl trimmers & reflected price board',
    category: 'studio',
    src: '/images/gallery/06-workstation-clippers-mirror.jpg',
    alt: 'Close-up of Efi marble workstation with red cordless clippers on charging docks, shaving brush, and mirror reflecting the shop price list.',
    width: 428,
    height: 754,
    aspectClass: 'aspect-[3/5]',
    gridSpanClass: 'lg:col-span-3',
    sourceLabel: 'Google Maps Official Business Photo',
    sourceUrl: 'https://maps.app.goo.gl/fn8KDwYQ34XBuVN2A',
    authenticityBadge: 'Actual Business Photo (Crop)',
    technicalNote:
      'Highlights the clean tool organization and the physical CAPITAL BARBERS BY EFI price board on the opposite wall.',
  },
  {
    id: 'storefront-lookbook-board',
    indexLabel: '08',
    title: '46 George Street Lookbook & Entrance Sign',
    subtitle: '10 client cuts & double-doors entrance wayfinding',
    category: 'cuts',
    src: '/images/gallery/08-storefront-lookbook-board.jpg',
    alt: 'Storefront board at 46 George Street showing the gold Crown CB logo, Entrance Through Double Doors on the Left instruction, and 10 photographs of client skin fades and beard trims.',
    width: 888,
    height: 677,
    aspectClass: 'aspect-[4/3]',
    gridSpanClass: 'lg:col-span-5',
    sourceLabel: 'Official Storefront Board (eficapitalbarber.com)',
    sourceUrl:
      'https://primary.jwwb.nl/public/w/p/b/temp-diawrivtfxhjeeltbsaa/whatsapp-image-2026-09-15-at-16-07-39-high.jpg',
    authenticityBadge: 'Actual Business Photo',
    technicalNote:
      'Features 10 real client haircut photographs across skin fades, high-top fades, textured crops, and beard lineups.',
  },
];

export function filterGalleryItems(
  items: readonly GalleryItem[],
  category: GalleryFilterCategory
): GalleryItem[] {
  if (category === 'all') {
    return [...items];
  }
  return items.filter((item) => item.category === category);
}
