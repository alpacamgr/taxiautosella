# Taxi Auto Sella — Next-Gen Modernization & Multi-Variant Experience

Modernized, high-craft web application for **Taxi Auto Sella** (Val Gardena, South Tyrol, Dolomites — [taxiautosella.it](https://www.taxiautosella.it/en/)), built with Vite, React, TypeScript, and the Impeccable design system.

---

## 🌟 Live Demo & Concept Navigation

The application is structured into modular sub-applications accessible via the persistent top presentation switcher:

### 1. **Variant 1: "The Grand Alpine Chauffeur"** (`#/luxury`)
* **Aesthetic**: Obsidian Charcoal (`#0E1117`), Warm Limestone Ivory (`#F8F6F0`), Hairline Alpine Bronze (`#8C6D46` / `#C5A880`), Editorial Serif (`Playfair Display`).
* **Target Audience**: Ultra-luxury chalets, 5-star hotel guests, executive delegations, and presidential transfers.
* **Complete 7 Subpages**: 
  - Welcome Hub (`#/luxury`)
  - Prices & Booking (`#/luxury/booking`) with VIP Concierge add-ons (Chilled Veuve Clicquot Champagne, Dolomiti Superski Pass delivery, child seats)
  - 25-Vehicle Fleet (`#/luxury/fleet`)
  - Taxi, Minibus & Bus Services (`#/luxury/services`)
  - Organised Tours (`#/luxury/excursions`)
  - Q&A (`#/luxury/faq`)
  - Members & Partners (`#/luxury/members`) with **1-click interactive requests for all 18 consortium drivers**.
* **Interactive Modal**: Bespoke `LuxuryInquiryModal` with pre-filled context, instant WhatsApp message generation with emojis, and direct phone dialer.

### 2. **Variant 2: "The Dolomites Grand Consortium"** (`#/tech`)
* **Aesthetic**: Deep Alpine Navy (`#0A192F`), Titanium Slate (`#F8FAFC`), High-Visibility Amber/Gold (`#F59E0B` / `#D97706`), Modern Sans-Serif (`Plus Jakarta Sans`).
* **Target Audience**: International skiers, tech-forward travelers, corporate retreats, and large tour groups.
* **Complete 7 Subpages**:
  - Live Interactive Rate Calculator Hub (`#/tech`) with all **9 airports and 4 railway stations**, passenger selector, and instant emoji WhatsApp link builder.
  - Step-by-Step Reservation Wizard (`#/tech/booking`) with flight number tracking, vehicle class dropdown, and gear allowances.
  - Fleet Directory (`#/tech/fleet`) with category filter tabs and capacity breakdowns.
  - 9 Mobility Services (`#/tech/services`).
  - Curated Dolomites Tours (`#/tech/tours`).
  - Searchable Accordion FAQ (`#/tech/faq`).
  - 18 Interactive Driver Cards & 12 Partner Hubs (`#/tech/members`).

### 3. **Variant 3: "The Valley Gateway"** (`#/adventure`)
* **Aesthetic**: Warm Stone Slate (`#181B22`), Golden Larch Wood (`#D6A56E`), Alpine Ivory (`#FAF9F5`), Forest Pine (`#1B3B2B`).
* **Feel**: Contemporary South Tyrolean warmth balancing planned airport transfers with 1-tap urgent local valley taxi dispatch.

---

## 🚀 Key Interactive Features Built-In

* **100% Legacy Site Information Fidelity**: Contains all information and features from the original `taxiautosella.it` website (18 local drivers, 25 vehicles, 9 airports, 4 railway stations, 9 services, 6 tours, 13 FAQs, 12 regional partners, 10 nightlife venues).
* **Official Branding & High-Res Photography**: Uses the official vector Taxi Auto Sella logo (`/images/brand/logo.svg`) and high-resolution vehicle and landscape photography (`/images/fleet/...`, `/images/hero/...`, `/images/excursions/...`).
* **Live Fixed Price Calculator**: Real-time rate calculation for all 9 regional airports (*Innsbruck, Verona, Munich, Venice, Milan Malpensa, Milan Linate, Bergamo, Treviso, Bologna*) and 4 train stations (*Bolzano, Bressanone, Ponte Gardena, Chiusa*).
* **Universal 1-Click WhatsApp & Email Dispatch**: Auto-formatted WhatsApp payload (`wa.me/390471790033`) and direct email prefill (`info@taxiautosella.it`) with route, passenger count, and equipment details.
* **WCAG AA Accessibility**: High-contrast ratios across all dark and light themes, accessible focus rings, and semantic HTML elements.
* **Auto Route Scroll Restoration**: Seamless view transitions with automatic scroll-to-top on route changes.

---

## 📁 Comprehensive Documentation Suite (`/docs`)

* [01. Project Overview & Legacy Website Audit](file:///e:/AutoSella/docs/01_PROJECT_OVERVIEW_AND_AUDIT.md)
* [02. Competitor Benchmarking & Modern UX Strategy](file:///e:/AutoSella/docs/02_COMPETITOR_BENCHMARKING_AND_UX.md)
* [03. Technical Architecture & Modular Directory Structure](file:///e:/AutoSella/docs/03_TECHNICAL_ARCHITECTURE.md)
* [04. 3 Creative Design Concepts & Visual Strategy](file:///e:/AutoSella/docs/04_THREE_DESIGN_CONCEPTS_STRATEGY.md)
* [05. Cloudflare Pages Deployment & Universal Hosting Guide](file:///e:/AutoSella/docs/05_DEPLOYMENT_GUIDE_CLOUDFLARE_PAGES.md)

---

## 🛠️ Local Development & Build

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

## ☁️ Continuous Deployment to Cloudflare Pages

1. Connected to GitHub repository: `https://github.com/alpacamgr/taxiautosella`
2. **Build Settings**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Node.js Version**: `18.x` or higher
3. Every push to `main` automatically triggers a zero-downtime deployment to Cloudflare Pages.
