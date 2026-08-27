# Technical Architecture & Engineering Decisions

Detailed overview of codebase architecture, modular sub-app organization, global state management, routing, and static edge deployment.

---

## 1. Core Technology Stack

* **Build Tool & Bundler**: Vite 6.4 (Sub-2 second production compilation)
* **Frontend Library**: React 18 with TypeScript 5.5
* **Routing**: React Router DOM (HashRouter for zero-config static hosting & Cloudflare Pages compatibility)
* **Styling & Design Tokens**: Tailwind CSS 3.4 with custom typography extensions (*Playfair Display*, *Inter*, *Outfit*)
* **Global State Management**: Zustand 4.5 (`src/store/useAppStore.ts`)
* **Icons & Visual Assets**: Lucide React + Local SVG & High-Resolution JPG Assets
* **Design Methodology**: Impeccable Design System (`.agents/skills/impeccable/`)

---

## 2. Modular Sub-App Directory Architecture

The project is structured as 3 independent, fully functional sub-applications living in `src/variants/`, connected by a global presentation switcher:

```text
src/
├── App.tsx                           # Global router mapping all 21 subpages
├── components/
│   ├── booking/                      # Global booking modals (LuxuryInquiryModal, BookingModal)
│   ├── mobile/                       # StickyMobileBar responsive conversion trigger
│   └── navigation/
│       └── VariantHeader.tsx         # Global presentation switcher (Variant 1, Variant 2, Variant 3 + i18n)
├── data/
│   ├── drivers.ts                    # 18 Consortium drivers, sponsors & statistics
│   ├── excursions.ts                 # Full day tours catalog (Venice, Verona, Innsbruck, Cortina, Merano)
│   ├── faqs.ts                       # Complete 13-topic multilingual Q&A
│   ├── fleet.ts                      # 25-vehicle fleet specs & capacity multipliers
│   ├── routes.ts                     # Airport & train station fixed rate tables
│   └── translations.ts               # Complete multilingual dictionary (EN, IT, DE)
├── store/
│   └── useAppStore.ts                # Global Zustand store (language, booking state, inquiry modal context)
└── variants/
    ├── luxury/                       # Variant 1: "The Grand Alpine Chauffeur" (Active)
    │   ├── LuxuryLayout.tsx
    │   ├── components/
    │   │   ├── LuxuryNav.tsx
    │   │   └── LuxuryInquiryModal.tsx
    │   └── pages/
    │       ├── LuxuryHome.tsx        # /luxury (Hero, concierge ribbon, fleet teaser, gateways)
    │       ├── LuxuryBookingPage.tsx # /luxury/booking (Fixed price tables for 9 airports & 4 stations)
    │       ├── LuxuryFleetPage.tsx   # /luxury/fleet (Full 25-vehicle fleet + wheelchair van + bike trailer)
    │       ├── LuxuryServicesPage.tsx# /luxury/services (9 specialized mobility services)
    │       ├── LuxuryExcursionsPage.tsx# /luxury/excursions (VIP day trips & mountain hut dinners)
    │       ├── LuxuryFaqPage.tsx     # /luxury/faq (Complete Q&A)
    │       └── LuxuryMembersPage.tsx # /luxury/members (18 drivers, official partner links, nightlife)
    ├── tech/                         # Variant 2: Stashed / Reserved for new creative direction
    │   ├── TechLayout.tsx
    │   ├── components/TechNav.tsx
    │   └── pages/
    │       └── TechHome.tsx          # Minimal placeholder component
    └── adventure/                    # Variant 3: "The Valley Gateway" (Active)
        ├── AdventureLayout.tsx
        ├── components/AdventureNav.tsx
        └── pages/
            ├── AdventureHome.tsx     # /adventure (Dual-track airport + instant valley taxi)
            ├── AdventureBookingPage.tsx # /adventure/booking (Fixed rates & booking form)
            ├── AdventureFleetPage.tsx# /adventure/fleet (25-vehicle fleet & trailers)
            ├── AdventureServicesPage.tsx# /adventure/services (9 valley & group services)
            ├── AdventureToursPage.tsx# /adventure/tours (Sella Ronda & regional day trips)
            ├── AdventureFaqPage.tsx  # /adventure/faq (Q&A)
            └── AdventureMembersPage.tsx# /adventure/members (Drivers, sponsors & nightlife)
```

---

## 3. Global Route Hierarchy (`src/App.tsx`)

| Route | Sub-App Variant | Page Title / Purpose |
| :--- | :--- | :--- |
| `#/` or `#/luxury` | Luxury | Luxury Welcome & Concierge Gateway |
| `#/luxury/booking` | Luxury | Fixed Prices & Online Booking |
| `#/luxury/fleet` | Luxury | Complete 25-Vehicle Fleet Showcase |
| `#/luxury/services` | Luxury | Taxi, Minibus & Bus Services |
| `#/luxury/excursions` | Luxury | Organised Tours & Sightseeing Trips |
| `#/luxury/faq` | Luxury | Questions & Answers Directory |
| `#/luxury/members` | Luxury | Consortium Driver Members & Official Partners |
| `#/tech` | Tech (Stashed) | Reserved Concept Workspace |
| `#/adventure` | Valley Gateway | Valley Welcome & Dual-Track Dispatch |
| `#/adventure/booking` | Valley Gateway | Fixed Rates & Online Booking |
| `#/adventure/fleet` | Valley Gateway | Fleet Collection & Mountain Trailers |
| `#/adventure/services` | Valley Gateway | Taxi & Bus Services |
| `#/adventure/tours` | Valley Gateway | Scenic Tours & Sella Ronda |
| `#/adventure/faq` | Valley Gateway | Questions & Answers |
| `#/adventure/members` | Valley Gateway | Consortium & Regional Sponsors |

---

## 4. Local Image Assets Pipeline

All 39+ high-resolution vehicle and landscape photos are locally bundled in `public/images/`:

* `public/images/brand/`: `logo.svg` (official vector logo), `digiem-logo.svg`, `dolomitiunesco-logo.png`, `suedtirol-logo.png`
* `public/images/hero/`: `autosella-fleet-lineup-dolomites.jpg`
* `public/images/fleet/`: `mercedes-e-class.jpg`, `mercedes-s-class-vip.jpg`, `mercedes-gl-suv-4matic.jpg`, `mercedes-v-class-luxury.jpg`, `mercedes-v-class-interior.jpg`, `mercedes-vito-minibus-4matic.jpg`, `mercedes-vito-ski-trailer.jpg`, `mercedes-sprinter-vip-coach.jpg`, `grand-touring-coach-56pax.jpg`, `autosella_filmproduktion_01.jpg`
* `public/images/excursions/`: `venice-lagoon-tour.jpg`, `verona-arena-tour.jpg`, `innsbruck-imperial-tour.jpg`, `lake-garda-sirmione-tour.jpg`
* `public/images/partners/`: `valgardena.svg`, `intersport-rent.png`
