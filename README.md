# Taxi Auto Sella — Next-Gen Modernization & Multi-Variant Experience

Modernized, high-craft web application for **Taxi Auto Sella** (Val Gardena, South Tyrol, Dolomites — `https://www.taxiautosella.it/en/`), built with Vite, React, TypeScript, and the Impeccable design system.

---

## 🌟 Live Demo & Concept Navigation

The application is structured into modular, independent sub-apps with a persistent top presentation switcher:

1. **Variant 1: "The Grand Alpine Chauffeur"** (`#/luxury`)
   - *Aesthetic*: Obsidian Charcoal (`#0E1117`), Warm Limestone Ivory (`#F8F6F0`), Hairline Brushed Brass (`#C5A880`), Editorial Serif (`Playfair Display`).
   - *Feel*: High-end luxury VIP mountain chauffeur for luxury chalets, 5-star hotel guests, and presidential transfers.
   - *Complete 7 Subpages*: Welcome Hub (`#/luxury`), Prices & Booking (`#/luxury/booking`), 25-Vehicle Fleet (`#/luxury/fleet`), Taxi & Bus Services (`#/luxury/services`), Organised Tours (`#/luxury/excursions`), Q&A (`#/luxury/faq`), Members & Partners (`#/luxury/members`).
   - *Interactive Modal*: Bespoke `LuxuryInquiryModal` with context pre-filling for routes, vehicles, excursions, and services.
   - *Verified Links*: 100% verified external links to official partners (*Val Gardena Tourism, Dolomiti Sportclinic, Elikos Helicopter, Intersport Rent, Dolomiti Superski, UNESCO Dolomites, Südtirol, Hotel Europa, Rusctlea, Bruno Riffeser, Carrozzeria Gardena, Digiem, and 10 nightlife venues*).

2. **Variant 2: Reserved Concept Workspace** (`#/tech`)
   - *Status*: Clean placeholder workspace ready for future creative exploration, preserving underlying data models and routing structure.

3. **Variant 3: "The Valley Gateway"** (`#/adventure`)
   - *Aesthetic*: Warm Stone Slate (`#181B22`), Golden Larch Wood (`#D6A56E`), Alpine Ivory (`#FAF9F5`), Forest Pine (`#1B3B2B`).
   - *Feel*: Contemporary South Tyrolean warmth balancing planned airport transfers with 1-tap urgent local valley taxi dispatch.
   - *Complete 7 Subpages*: Valley Welcome, Fixed Rates, Fleet Gallery, Services, Tours & Passes, FAQ, Consortium & Sponsors.

---

## 🚀 Key Interactive Features Built-In

* **100% Legacy Site Information Fidelity**: Contains all information and features from the original `taxiautosella.it` website (18 local drivers, 25 vehicles, 9 airports, 4 railway stations, 9 services, 6 tours, 13 FAQs, 8 sponsors, 10 nightlife venues).
* **Official Branding & Real Photos**: Uses the official vector Taxi Auto Sella logo (`/images/brand/logo.svg`) and 39+ local high-resolution vehicle and landscape assets (`/images/fleet/...`, `/images/hero/...`, `/images/excursions/...`).
* **Live Fixed Price Calculator**: Transparent, guaranteed rates for all 9 regional airports (Innsbruck, Munich, Verona, Venice, Bergamo, Milan Linate/MXP, Treviso, Bologna, Bolzano) and 4 train stations.
* **Universal Pre-Filled Inquiries**: 1-click WhatsApp (`wa.me/390471790033`) and Email dispatch (`info@taxiautosella.it`) with auto-formatted details.
* **Multilingual Readiness**: Built-in support for **English (EN)**, **Italian (IT)**, and **German (DE)**.
* **Sticky Mobile Conversion Bar**: Mobile-first bottom bar for one-thumb bookings.

---

## 📁 Comprehensive Documentation Suite (`/docs`)

* [01. Project Overview & Legacy Website Audit](file:///e:/AutoSella/docs/01_PROJECT_OVERVIEW_AND_AUDIT.md)
* [02. Competitor Benchmarking & Modern UX Strategy](file:///e:/AutoSella/docs/02_COMPETITOR_BENCHMARKING_AND_UX.md)
* [03. Technical Architecture & Modular Directory Structure](file:///e:/AutoSella/docs/03_TECHNICAL_ARCHITECTURE.md)
* [04. 3 Creative Design Concepts & Visual Strategy](file:///e:/AutoSella/docs/04_THREE_DESIGN_CONCEPTS_STRATEGY.md)
* [05. Cloudflare Pages Deployment & Universal Hosting Guide](file:///e:/AutoSella/docs/05_DEPLOYMENT_GUIDE_CLOUDFLARE_PAGES.md)

---

## 🛠️ Quick Start & Build

```bash
# 1. Install dependencies
npm install

# 2. Start local hot-reload development server
npm run dev

# 3. Build for production (outputs pure static files to dist/)
npm run build

# 4. Preview production build locally
npm run preview
```

---

## ☁️ Universal Deployment (Cloudflare Pages or Any Server)

* **Cloudflare Pages**: Connect `https://github.com/alpacamgr/taxiautosella`, set Build command `npm run build`, Output directory `dist`.
* **Traditional Apache / Nginx / cPanel**: Upload `dist/` directly. Pure static HTML/CSS/JS with zero vendor lock-in.
