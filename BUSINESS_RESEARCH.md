# Capital Barber by Efi — Business Research & Brand Audit

**Audit Date:** 28 October 2026  
**Business Name:** Capital Barber by Efi (also styled on physical signage as *CAPITAL BARBERS by Efi*)  
**Founder / Master Barber:** Efi (Efrem Melake)  
**Verified Address:** 46 George Street, Manchester, M1 4HF, United Kingdom (Chinatown / Central Manchester)  

---

## 1. Source Verification Matrix

| Fact / Field | Existing Website (`eficapitalbarber.com`) | Google Maps (`maps.app.goo.gl/fn8KDwYQ34XBuVN2A`) | Booking Platforms (Booksy & Dikidi) | Verification Status & Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Business Name** | `Capital_ Barber_By Efi` (page title) / `Capital Barber by Efi` (hero copy) / `CAPITAL BARBER BY EFI` (pricing page) | `Capital _Barbers _By Efi` | Booksy: `Capital Barbers by Efi` · Dikidi: `Efrem Melake` (`dikidi.app/2148688`) | **Verified.** Official display name normalized to **Capital Barber by Efi** (matching wall signage *CAPITAL BARBERS by Efi*). |
| **Founder Name** | Efi ("Founded by Efi") | Owner post signed by owner | Dikidi profile lists full name: **Efrem Melake** | **Verified.** Efi is Efrem Melake. |
| **Street Address** | `46 George Street, Manchester M1 4HF` (homepage) / `46 george street M1 4HF Manchester` (subpages) | `46 George St, Manchester M1 4HF, United Kingdom` (Coords: `53.4791388, -2.2402386`, Plus Code: `FQH5+MW`) | Booksy: `46 George Street, Manchester` · Dikidi: `46 george street` | **Verified Across All Sources.** |
| **Entrance Wayfinding** | Shown inside storefront image (`whatsapp-image-2026-09-15-at-16-07-39-high.jpg`) | Street-level entrance on George St | — | **Verified from Real Signage Photo:** *"ENTRANCE THROUGH DOUBLE DOORS ON THE LEFT — WALK INS WELCOME"*. |
| **Phone Number** | Displayed as `[ 07539635060 ]` in text; button link broken (`href="tel:[[phonenumber]]"`) | `+44 7539 635060` | Dikidi: `+44 75 3963 5060` (`wa.me/447539635060`) | **Verified.** `07539 635060` / `+44 7539 635060`. Fixed broken `tel:[[phonenumber]]` link in redesign. |
| **Email Address** | `capital@eficapitalbarber.com` | — | — | **Verified** on official website across all pages. |
| **Opening Hours** | Footer states: `Mon - Sunday 9am - 11pm` | Live listing states: `Mon–Sat: 9:00 AM – 10:00 PM`, `Sun: 9:00 AM – 8:00 PM` | Determined by live slot availability | **Discrepancy Recorded.** Website claims 9am–11pm daily; Google Maps lists 9am–10pm (Mon–Sat) and 9am–8pm (Sun). Both are transparently disclosed on the redesigned site so clients never arrive to a closed door. |
| **Primary Booking URL** | Hero "BOOK Now" links to `https://dikidi.app/2148688` (which currently has a single placeholder service `cusomer 1 — £15`) | Links to `dikidi.net` and `eficapitalbarber.com` | Booksy URL: `https://booksy.com/en-gb/193537_capital-barbers-by-efi_barber_628476_manchester` | **Discrepancy Recorded.** Booksy URL is the primary service-menu booking destination specified in the project brief; when queried directly in headless mode on 28 Oct 2026, Booksy returned *"This business is no longer available"*, while the website links to `https://dikidi.app/2148688`. All primary booking CTAs link to the specified Booksy URL, with direct fallback actions for Dikidi, WhatsApp/Phone (`07539 635060`), and Walk-ins. |
| **Instagram** | No working social URL in footer (`Follow us` has no link); storefront sign shows `@CAPITAL_BARBERS_MCR` | — | Official Reels URL: `https://www.instagram.com/capital_barbers_by_efi/reels/` | **Verified Official URL.** Unauthenticated headless requests to Instagram redirect to `/accounts/login/`; recorded as an access limitation without bypassing login walls. |
| **Google Review Link** | `/client-reviews` links QR code to `https://g.page/r/CeMq1t3Txe3fECE/review` | Google Maps rating shows `4.9` stars | — | **Verified.** Direct Google Review link and QR code preserved; unverified review counts omitted from Schema.org JSON-LD. |

---

## 2. Page-by-Page Audit of Existing Website (`eficapitalbarber.com`)

The current website is built on **Webador** (`jouwweb.nl` / `webador.co.uk`, website ID `8621117`). Inspection of all 6 accessible routes revealed severe template artefacts:

1. **Homepage (`/`)**:
   - **Title**: `Capital_ Barber_By Efi` (contains raw underscores and inconsistent spacing).
   - **Hero**: Uses an AI-edited wall sign (`copilot_20260930_225958-standard.png`) that still has a visible **"Made with AI"** watermark in the top-right corner and accidentally erased *"Efi"* from *"by Efi"*.
   - **Broken Phone CTA**: The header/hero phone action points to `href="tel:[[phonenumber]]"`—a literal unreplaced template variable.
   - **Service Previews**: Mixes 2 genuine photos of Efi (`image-high.png` and `image-high-6jp71v.png`) with 2 random Pexels stock photos (`7447145.jpeg` and `6007401.jpeg`).
   - **Unedited Webador FAQ Block**: Contains 8 completely unedited placeholder items reading: *"A question about your products or services — Example answer to the question. Feel free to customize this content with the actual information you want to provide."*
2. **Services & Treatments (`/services-treatments`)**:
   - **100% Unedited B2B Template Copy**: Contains zero barbering descriptions. Instead, it displays default Webador corporate filler: *"Beyond the ordinary. This is where our journey begins..."* and three pricing tiers named **"Basic"**, **"Professional"**, and **"Business"** (*"We offer a range of specialized services tailored to meet your individual needs"*), plus a *"Get a quote"* button.
   - **Images**: Mixes 1 genuine wide interior shot of Efi's shop (`image-high-2ekm5u.png`) with 4 random Pexels stock images (including `4612121.jpeg`, a stock photo of a woman holding a facial cream brush).
3. **Hair & Beard Pricing (`/hair-beard-pricing`)**:
   - Contains a real 20-item text list of prices (e.g., *Skin Fade — £20*, *Razor Fade & Beard Trim — £25*, *Shape-Up & Beard Trim — £13*, *Beard Trim — £10*, *Full Face & Ear Waxing — £12*), but it is sandwiched between duplicate *"Beyond the ordinary. This is where our journey begins..."* placeholder blocks and has no durations or per-service booking links.
4. **Style Gallery (`/style-gallery`)**:
   - Displays zero photos of Efi's actual haircuts. Instead, it shows 3 Pexels stock photos (`18503604.jpeg`, `3998431.jpeg`, `7697393.jpeg`) alongside generic e-commerce promo text (*"New Collection — Don't miss out on the chance to save..."*).
5. **Meet Efi (`/meet-efi`)**:
   - Contains **one outstanding, high-resolution authentic portrait of Efi** (`whatsapp-image-2026-09-23-at-00-36-49-high-hsltgn.jpg`, 1919×2879), but **zero biographical copy**—only the generic boilerplate *"Information — We pride ourselves on our adaptability..."* and a generic contact form.
6. **Client Reviews (`/client-reviews`)**:
   - Contains a typo heading (`"Revie us Here "`), a tiny 132×132 QR code (`download-high.png`), and the same generic `"Information"` paragraph.

---

## 3. Five Most Critical Weaknesses & Redesign Solutions

| # | Existing Website Weakness | Concrete Solution in the Redesign |
| :--- | :--- | :--- |
| **1** | **Unedited Webador Template Copy & Broken Links:** Pages like `/services-treatments`, `/style-gallery`, and the homepage FAQ are filled with raw template placeholders (*"A question about your products or services"*, *"Basic / Professional / Business"*, `tel:[[phonenumber]]`). | **Complete Editorial Rewrite Using Verified Facts Only:** Removed every trace of Webador filler. All copy is written specifically around Efi's real Manchester studio at 46 George Street, his actual equipment (facial steamer, cordless trimmers, razor work), and verified services. Fixed `tel:+447539635060` and `mailto:capital@eficapitalbarber.com`. |
| **2** | **Visual Identity Clash & "Made with AI" Watermarks:** The site uses a default Webador mint-green theme (`#2a9d8f` / `#f6fbf9`) with a generic green scissor icon (`CBE`), plus two Copilot images carrying visible *"Made with AI"* watermarks. | **Authentic Studio Palette & Real Emblem:** Replaced the mint-green template palette and watermarked AI graphics with the actual visual identity seen inside Efi's shop: obsidian black (`#0B0B0C`), warm gallery alabaster (`#F5F2EB`), brushed gold (`#C9A449`) from his 3D wall sign and gold barber chair, and a crisp crimson accent (`#C8322C`) echoing his signature red Cocco/Wahl clippers. |
| **3** | **Stock Photos Hiding Authentic Work:** The `/style-gallery` page uses 100% Pexels stock photography, while Efi's real high-resolution portrait and real haircut action shots are buried or poorly cropped. | **Authentic Photography Portfolio ("THE WORK SPEAKS."):** Promoted Efi's real high-resolution photographs (`1835×996` hairline precision shot, `1919×2879` founder portrait, `1564×2687` full shop interior, `1100×1993` temple taper fade, Google Maps gold chair & workstation shots, and the 10-cut storefront lookbook board) into an asymmetric editorial portfolio with a full-screen keyboard-accessible lightbox. |
| **4** | **Disconnected Service Menus & Price Discrepancies:** The website lists 20 text-only prices without durations or booking buttons, while Booksy lists 12 timed bookable services (with slight price differences on Youth, Kids, and Wash/Steam packages). | **Unified, Transparent Service Menu (`src/data/services.ts`):** Built an editorial service ledger that defaults to the **Booksy Appointment Menu** (exact names, verified prices in £ GBP, and durations in minutes) with direct booking actions, plus a transparent tab to view **In-Shop / Website Menu & Grooming Add-Ons** (beard trim, hot towel shave, waxing) with clear source notes. |
| **5** | **Confusing Local Wayfinding & Hours Discrepancy:** Visitors aren't told how to enter the shop on George Street, and the website footer (`9am–11pm`) contradicts Google Maps (`9am–10pm Mon–Sat, 9am–8pm Sun`). | **Clear Chinatown Wayfinding & Honest Hours Disclosure:** Added the exact entrance instruction verified from the shop's storefront board (*"Entrance through double doors on the left — Walk-ins welcome"*), interactive Google Maps directions (`53.4791, -2.2402`), and a side-by-side disclosure of Google Maps vs. Website published hours. |

---

## 4. Service & Pricing Cross-Source Comparison

### A. Live Booking Platform Catalogue (Booksy — Primary Bookable Source)
Source: `https://booksy.com/en-gb/193537_capital-barbers-by-efi_barber_628476_manchester`

| Service Name | Booksy Price | Booksy Duration | Website `/hair-beard-pricing` Equivalent | Discrepancy & Resolution |
| :--- | :--- | :--- | :--- | :--- |
| **Haircut** | £20 | 30 mins | Standard Haircut — £20 | **Exact Price Match (£20).** Use Booksy name & 30 min duration. |
| **Skin fade** | £20 | 30 mins | Skin Fade — £20 | **Exact Price Match (£20).** Use Booksy name & 30 min duration. |
| **Classic Cut** | £20 | 35 mins | Classic Haircut — £20 | **Exact Price Match (£20).** Use Booksy name & 35 min duration. |
| **Taper fade** | £20 | 30 mins | (Listed under Skin/Razor Fade — £20) | **Exact Price Match (£20).** Use Booksy name & 30 min duration. |
| **Haircut & Beard** | £20 | 35 mins | Haircut & Beard Trim — £20 / Haircut & Professional Beard Styling — £20 | **Exact Price Match (£20).** Use Booksy name & 35 min duration. |
| **Shape Up + Beard Trim** | £13 | 20 mins | Shape-Up & Beard Trim — £13 | **Exact Price Match (£13).** Use Booksy name & 20 min duration. |
| **Haircut + Wash & Style** | £27 | 45 mins | Haircut, Wash & Finish — £25 | **£2 Discrepancy** (£27 on Booksy vs £25 on website). Prefer Booksy (£27, 45 mins) for online booking; note £25 website listing. |
| **Haircut & Beard + Steamer** | £28 | 45 mins | (Described as "The complete package" on homepage; facial steamer visible in shop photos) | **Verified on Booksy (£28, 45 mins).** Note: the physical facial steamer is visibly positioned next to Efi's chair in `image-high-2ekm5u.png`. |
| **Long Hair Restyle** | £25 | 40 mins | Scissor Cut — £20 | **Verified on Booksy (£25, 40 mins).** |
| **Long Hair Restyle + Beard** | £28 | 40 mins | — | **Verified on Booksy (£28, 40 mins).** |
| **Youth Haircut (10–17)** | £17 | 25 mins | Youth Haircut (Ages 10–17) — £15 | **£2 Discrepancy** (£17 on Booksy vs £15 on website). Prefer Booksy (£17, 25 mins) and note website rate. |
| **Kids Under 10** | £13 | 20 mins | Children's Haircut (Under 10) — £12 | **£1 Discrepancy** (£13 on Booksy vs £12 on website). Prefer Booksy (£13, 20 mins) and note website rate. |

### B. Additional In-Shop Treatments Listed on `eficapitalbarber.com/hair-beard-pricing`
These services appear on the website's pricing board or homepage descriptions:
- **Razor Fade & Beard Trim:** £25 (Website pricing page)
- **Razor Fade:** £20 (Website pricing page)
- **Scissor Cut:** £20 (Website pricing page)
- **Senior Haircut (Ages 65+):** £20 (Website pricing page)
- **Zero-Length Cut:** £15 (Website pricing page)
- **Beard Trim:** £10 (Website pricing page)
- **Full Face & Ear Waxing:** £12 (Website pricing page)
- **Nose / Ear / Cheek Line / Eyebrow Waxing:** £5 each (Website pricing page)
- **Traditional Hot Towel Shave:** Described on homepage (*"Relax with an authentic straight razor shave, soothing warm towels, pre-shave essential oils, and an invigorating cold-towel aftershave treatment"*), no standalone price listed — marked as **"Confirm price when booking"**.

---

## 5. Brand Identity Audit & Creative Direction

### What the Real Shop & Barber Look Like (Observed from Authentic Photos)
- **Logo & Wall Signage:** Inside the shop at 46 George Street (`image-high-2ekm5u.png` and `gmaps_photo_1.jpg`) and on the exterior window board (`whatsapp-image-2026-09-15-at-16-07-39-high.jpg`), the real brand mark is a **five-point Crown above an intertwined `CB` monogram**, followed by **`CAPITAL`** in bold classical serif capitals, **`— BARBERS —`** flanked by horizontal rules, and **`by Efi`** in a flowing script.
- **Shop Interior & Furnishings:**
  - Custom **black quilted leather and polished gold barber chair** with Greek-key embossed gold footrest (`gmaps_photo_1.jpg`).
  - **Black-and-gold veined marble** feature wall paired with **cool grey marble cabinetry** framed in matte black (`whatsapp-image-2026-09-23-at-00-36-49-high-hsltgn.jpg`).
  - **Hexagonal overhead LED light tubes** casting crisp, daylight-balanced studio illumination (`image-high-2ekm5u.png`).
  - Dedicated **standalone facial mist steamer** positioned directly beside the main barber chair (`image-high-2ekm5u.png`, `image-high.png`).
- **Efi's Personal Presentation & Tools:**
  - Efi wears a **crisp tailored white button-down shirt**, olive trousers, gold wristwatch, black nitrile gloves while cutting, and a signature **black leather `Barber-Tal` chest holster** carrying his shears and fade combs (`whatsapp-image-2026-09-23-at-00-36-49-high-hsltgn.jpg`).
  - His workstation features matching **crimson-red cordless Cocco/Wahl clippers and trimmers** lined up on charging docks.

### Elements Preserved vs. Changed
- **Preserved:**
  - The authentic **Crown + `CB` monogram + `CAPITAL — BARBERS — by Efi`** identity.
  - The contrast of **crisp white shirt / daylight studio clarity** with **obsidian black marble and warm brushed gold hardware**.
  - Every authentic photograph of Efi, his clients' fades, and his 46 George Street studio.
- **Changed:**
  - Discarded Webador's default mint-teal (`#2a9d8f`) and coral-pink (`#e26f6f`) template colours.
  - Discarded the AI-generated `CBE` green scissor icon and the two `"Made with AI"` watermarked images.
  - Discarded the generic Pexels stock gallery in favour of a curated, genuine portfolio.

### Recommended Colour Palette (60–30–10 Editorial System)
- **Dominant Canvas (60%):**
  - **Obsidian Marble (`#0B0B0D`)** — Deep carbon-black canvas inspired by the shop's black marble walls and leather barber chair.
  - **Warm Alabaster Paper (`#F4F1EA`)** — High-contrast daylight editorial surface inspired by Efi's crisp white shirt and bright studio lighting (used for alternating editorial sections so the site never feels like a generic dark-mode template).
- **Structural Surfaces & Typography (30%):**
  - **Charcoal Slate (`#141418`)** — Elevated dark surface for gallery frames and service ledger rows.
  - **Stone Rule (`#26262C` dark / `#DCD6C8` light)** — Exposed 1px architectural hairlines.
  - **Crisp Ivory (`#F7F5F0`) & Muted Pewter (`#9E9B93`)** — Primary and secondary typography on dark surfaces.
- **Focal Accents (10%):**
  - **Sovereign Brushed Gold (`#C8A24A`)** — Sampled from the 3D wall sign and gold Greek-key barber chair frame; used for primary CTAs, active tabs, and monograph numbering.
  - **Clipper Crimson (`#C8322C`)** — Sampled from Efi's signature red cordless trimmers; used sparingly as a micro-accent for live/verified badges.

### Typography Pairing (The 2+1 Font Rule)
1. **Display / Headlines (`Bricolage Grotesque` & `Cormorant Garamond`):**
   - `Bricolage Grotesque` (700/800, tight tracking) gives bold, contemporary Manchester architectural presence to headlines like **PRECISION IN EVERY CUT.** and **THE WORK SPEAKS.**
   - `Cormorant Garamond` (600/700 & Italic) echoes the classical serif `CAPITAL BARBERS` and script `by Efi` on the physical shop wall sign.
2. **Body Prose (`Plus Jakarta Sans`):**
   - Clean, high-legibility geometric sans-serif at 15px–16px for service descriptions, location wayfinding, and brand narrative.
3. **Tabular Pricing & Durations (`JetBrains Mono`):**
   - `tabular-nums` monospace strictly for service prices (`£20`), durations (`30 MIN`), postcode (`M1 4HF`), and coordinates.
