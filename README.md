# Capital Barber by Efi — Complete Website Redesign

An independent, architectural groomer flagship website redesign for **Capital Barber by Efi** (**Efrem Melake**), located at **46 George Street, Manchester M1 4HF**.

Built after a comprehensive multi-source audit of the business's existing Webador site (`https://www.eficapitalbarber.com/`), Google Maps listing, Booksy booking profile, and official Instagram Reels (`@capital_barbers_by_efi`).

---

## 1. Key Documentation & Research Artifacts

- **[`BUSINESS_RESEARCH.md`](./BUSINESS_RESEARCH.md)** — Complete cross-source audit of the existing website, Google Maps, Instagram Reels, and Booksy; documented discrepancies (e.g., opening hours and £1–£2 pricing variations); authentic brand identity analysis (Crown + `CB` monogram, studio furnishings, equipment); and top 5 website weaknesses resolved by this redesign.
- **[`IMAGE_SOURCES.md`](./IMAGE_SOURCES.md)** — Complete manifest of all 18 local image assets organized under `/public/images/{brand,hero,haircuts,beard,shop,gallery}/`, including exact origin URLs, dimensions, crop treatments, and documentation of the 11 generic Pexels/AI-watermarked images removed from the original site.

---

## 2. Project Architecture

```text
/
├── BUSINESS_RESEARCH.md          # Complete business, brand, and cross-source audit
├── IMAGE_SOURCES.md              # Authentic image manifest & stock/AI removal log
├── vercel.json                   # Vercel build & headers config (including X-Robots-Tag: noindex)
├── index.html                    # Semantic HTML, SEO metadata, BarberShop JSON-LD
├── public/
│   └── images/
│       ├── brand/                # Crown + CB emblem crops, QR code, legacy logo reference
│       ├── hero/                 # High-res Efi lineup action shot & founder portrait
│       ├── haircuts/             # Temple taper fade, textured crop, lookbook board
│       ├── beard/                # Barber-Tal holster & red Cocco/Wahl clippers
│       ├── shop/                 # Full 46 George St interior, gold chair, exterior sign
│       └── gallery/              # Curated 01–08 high-res authentic portfolio shots
└── src/
    ├── App.tsx                   # 5-page router (/, /services, /gallery, /about, /find-us) + AnimatePresence transitions
    ├── index.css                 # Typography tokens, tabular-nums, reduced-motion rules
    ├── context/
    │   └── NavigationContext.tsx # Multi-page history router & deep-linked service selection
    ├── pages/
    │   └── HomePage.tsx          # Curated flagship landing page with gateway sections
    ├── data/
    │   ├── business.ts           # Single source of truth: address, phone, links, hours, live status
    │   ├── services.ts           # Verified Booksy (12) + Website (7) services, signature tiers & session estimator
    │   ├── gallery.ts            # Curated 8-item authentic portfolio manifest
    │   └── catalog.test.ts       # Automated unit tests (node:test) for data & pricing logic
    └── components/
        ├── HeroSection.tsx       # Split architectural hero + live studio status + 4-col facts strip
        ├── AboutSection.tsx      # Warm Alabaster founder profile + 4-stage cut ritual + equipment showcase
        ├── FindUsSection.tsx     # Live studio status, Chinatown walking guide, hours ledger, review QR
        ├── services/
        │   └── ServiceMenuSection.tsx # Signature tier matrix, style recommender & interactive Session Planner
        ├── gallery/
        │   └── GallerySection.tsx     # Asymmetric lookbook + layout switcher + accessible lightbox modal
        └── layout/
            ├── BrandEmblem.tsx   # Bespoke SVG Crown + CB monogram emblem
            ├── Navbar.tsx        # 3-zone Top Bar Contract header + animated active indicator + mobile drawer
            └── Footer.tsx        # Editorial footer + next-page continuation banner
```

---

## 3. Local Development & Testing

### Prerequisites
- Node.js 20+ and npm

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```
The development server starts on `http://localhost:3000`.

### Run Automated Data & Logic Unit Tests
```bash
npx tsx --test src/data/catalog.test.ts
```

### Production Build & Type Check
```bash
npm run lint
npm run build
```

---

## 4. Deploying to Vercel

This project is pre-configured for zero-configuration deployment to Vercel via [`vercel.json`](./vercel.json).

### Option A: Deploy via Vercel CLI
```bash
npx vercel
```
To deploy to production:
```bash
npx vercel --prod
```

### Option B: Deploy via GitHub + Vercel Dashboard
1. Push this repository to GitHub/GitLab/Bitbucket.
2. Import the project in the [Vercel Dashboard](https://vercel.com/new).
3. Vercel automatically detects **Vite**:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**.

> **Note on Search Engine Indexing:** Because this is an independent redesign preview, both `index.html` (`<meta name="robots" content="noindex, nofollow" />`) and `vercel.json` (`X-Robots-Tag: noindex, nofollow`) prevent search engines from indexing the preview deployment over the live business domain. When transferring to the official domain (`eficapitalbarber.com`), remove those two directives.

---

## 5. Quality Assurance & Verification Report

### Cross-Source Data Accuracy
- **Broken `tel:[[phonenumber]]` Fixed:** Every phone button on the original Webador site linked to `tel:[[phonenumber]]`. Replaced across header, hero, Find Us, and footer with verified `tel:+447539635060` (`07539 635060`).
- **Fake Corporate Pricing Tiers Replaced:** Removed the unedited Webador B2B template cards (*"Basic / Professional / Business — Lorem ipsum"*) and 8 unedited FAQ placeholders. Replaced with all **12 verified bookable services from Booksy** (with exact prices and durations) plus **7 additional in-shop treatments** from `/hair-beard-pricing`.
- **Opening Hours Discrepancy Disclosed:** Google Maps (`Mon–Sat 9am–10pm, Sun 9am–8pm`) and the existing website footer (`Mon–Sun 9am–11pm`) are presented side-by-side in the Find Us section with clear guidance to check Booksy for late-evening slots after 8pm/10pm.
- **100% Authentic Portfolio Imagery:** Removed all 9 generic Pexels stock photos and 2 AI-watermarked (`Made with AI`) images from the main website experience. Every hero, portrait, interior, and gallery image is a verified photograph of Efi and his 46 George Street studio.

### Responsive Viewport & Accessibility Checks
- Verified zero horizontal overflow (`scrollWidth <= innerWidth`) across `360px`, `390px`, `768px`, `1024px`, `1440px`, and `1920px`.
- Keyboard accessibility: skip-to-content link, visible `:focus-visible` outlines, and full keyboard support (`Escape`, `ArrowLeft`, `ArrowRight`) in the portfolio lightbox.
- Motion accessibility: `@media (prefers-reduced-motion: reduce)` disables non-essential transitions and smooth scrolling.
