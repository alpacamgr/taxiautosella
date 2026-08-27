# Taxi Auto Sella — Next-Gen Modernization & 3-Concept Interactive Demo

Modernized digital web experience for **Taxi Auto Sella** (Val Gardena, Dolomites — `https://www.taxiautosella.it/en/`), featuring inspirations from **Welcome Pickups** (`https://www.welcomepickups.com/`) while honoring the consortium's 35-year local authority, 25-vehicle 4MATIC fleet, and 24/7 winter alpine operations.

---

## 🌟 Live Demo & Concept Switcher

This interactive prototype includes an instant **Demo Switcher Bar** that lets you present **3 distinct creative directions** to the Taxi Auto Sella owners with zero reload delay:

1. **Concept 1: Alpine Luxury & Prestige**
   - *Aesthetic*: Dark Obsidian (`#0B0F17`), Brushed Champagne Gold (`#D4AF37`), Serif typography (`Playfair Display`).
   - *Feel*: Private chauffeur, VIP chalet arrivals, high-end Mercedes comfort.
2. **Concept 2: Modern Global Tech (WelcomePickups Style)**
   - *Aesthetic*: Crisp Snow White, Deep Slate, Alpine Emerald Green (`#059669`), Amber rating stars.
   - *Feel*: Frictionless 60-second instant quote engine, flight delay tracking guarantee, rating social proof badges.
3. **Concept 3: Dolomites Adventure & Ski Shuttle**
   - *Aesthetic*: Alpine Navy (`#0C2340`), Glacier Ice Blue (`#38BDF8`), Mountain Emerald, bold outdoor typography (`Outfit`).
   - *Feel*: Dedicated ski & snowboard gear loadout, Sella Ronda 4-passes tours, group shuttles, winter 4x4 snow reliability.

---

## 🚀 Key Interactive Features Built-In

* **Live Quote & Pricing Calculator**: Real-time distance, duration, and price calculation for 9+ regional airports (Innsbruck, Munich, Verona, Venice, Bergamo, Milan, Bolzano) and train stations to Val Gardena villages.
* **Ski & Gear Load Optimizer**: Toggles for ⛷️ Ski/Snowboard equipment, 🚲 Mountain bikes, 👶 Child seats, and ♿ Wheelchair accessibility.
* **Interactive 25-Vehicle Fleet Viewer**: Full specs, passenger capacity, luggage capacity, and 4MATIC winter equipment badges.
* **Dual-Track Conversion Funnel**:
  - *Planned Airport Transfers*: 2-step reservation confirmation with flight tracking.
  - *Urgent Ski Resort Taxis*: 1-tap WhatsApp chat (`+39 0471 790033`) and direct phone hotline.
* **Multilingual Localization**: Complete support for **English (EN)**, **Italian (IT)**, and **German (DE)**.
* **Sticky Mobile Conversion Bar**: Mobile-first bottom navigation for one-thumb bookings on the slopes.

---

## 📁 In-Depth Documentation Suite (`/docs`)

Comprehensive strategic and architectural documentation is available in the `/docs` folder:
- [01. Project Overview & Legacy Website Audit](file:///e:/AutoSella/docs/01_PROJECT_OVERVIEW_AND_AUDIT.md)
- [02. Competitor Benchmarking & Modern UX](file:///e:/AutoSella/docs/02_COMPETITOR_BENCHMARKING_AND_UX.md)
- [03. Technical Architecture & State Machine](file:///e:/AutoSella/docs/03_TECHNICAL_ARCHITECTURE.md)
- [04. 3 Creative Design Concepts & Psychology](file:///e:/AutoSella/docs/04_THREE_DESIGN_CONCEPTS_STRATEGY.md)
- [05. Cloudflare Pages Deployment & Universal Hosting Guide](file:///e:/AutoSella/docs/05_DEPLOYMENT_GUIDE_CLOUDFLARE_PAGES.md)

---

## 🛠️ Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production (outputs to dist/)
npm run build
```

---

## ☁️ Deploying to Cloudflare Pages (or Any Host)

### Option A: Cloudflare Pages (Temporary Demo / Preview)
1. Push this repository to GitHub: `https://github.com/alpacamgr/taxiautosella`
2. In Cloudflare Dashboard: **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select `taxiautosella`. Set Build command: `npm run build`, Output directory: `dist`.
4. Deploy!

### Option B: Any Traditional Host (Apache, Nginx, cPanel, Hetzner, Digiem)
1. Run `npm run build`.
2. Upload the contents of `dist/` directly to your web server (`public_html` / `www`).
3. Pure static HTML/CSS/JS with zero vendor lock-in!
