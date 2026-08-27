# 3 Design Concepts — Creative Strategy & Visual Identity

Overview of the design concepts created for Taxi Auto Sella, their intended user psychology, color chemistry, and information architecture.

---

## 1. Variant 1: "The Grand Alpine Chauffeur" (Alpine Luxury & Heritage)
*Base Route*: **`#/luxury`**

```text
Aesthetic: Obsidian Charcoal & Warm Limestone Ivory | Brushed Brass (#C5A880) | Playfair Display Serif
Target Audience: Luxury chalet guests, 5-star hotel clientele, executive airport travelers, VIP wedding parties
```

### Visual & Interactive Highlights:
* **Editorial Serenity**: High-contrast serif headlines paired with spacious limestone ivory surfaces and subtle hairline bronze micro-borders.
* **Universal Luxury Modal (`LuxuryInquiryModal.tsx`)**: Every card click (Gateways, Mercedes models, Excursions, Services) opens a bespoke luxury modal with pre-filled context, routing to 1-click WhatsApp (`wa.me/390471790033`), Email (`info@taxiautosella.it`), or direct phone.
* **100% Verified Partner Links**: On `LuxuryMembersPage.tsx`, all partners (*Val Gardena Tourism, Dolomiti Sportclinic, Elikos Helicopter, Intersport Rent, Dolomiti Superski, UNESCO Dolomites, Südtirol, Hotel Europa, Rusctlea, Bruno Riffeser, Carrozzeria Gardena, Digiem*) are linked to real external websites.

---

## 2. Variant 2: Stashed / Reserved Concept Workspace
*Base Route*: **`#/tech`**

```text
Status: Stashed / Under Development
Purpose: Reserved clean workspace for future creative agent exploration.
```

The underlying data models and routing structure are preserved in `src/variants/tech/` so a new creative direction can be spun up without affecting the active variants.

---

## 3. Variant 3: "The Valley Gateway" (Dolomiti Modern Alpine & Valley Hospitality)
*Base Route*: **`#/adventure`**

```text
Aesthetic: Warm Stone Slate (#181B22), Golden Larch Wood (#D6A56E) & Alpine Ivory (#FAF9F5)
Target Audience: Skiers, mountain hikers, vacationing families, and locals needing quick valley taxi rides
```

### Visual & Interactive Highlights:
* **Dual-Track Conversion Hero**:
  * **Track 1**: Planned Airport Transfers (with fixed quote selector for Innsbruck, Verona, Munich, Venice, Milan, Bolzano).
  * **Track 2**: 1-Tap Urgent Valley Taxi Dispatch (for immediate rides between Ortisei, Santa Cristina, Selva, ski lifts, and restaurants).
* **Complete Subpages**: Full fixed-price booking tables, 25-vehicle fleet gallery, 9 mobility services, Sella Ronda excursions, Q&A, and consortium driver roster.

---

## 4. The Global Presentation Switcher (`src/components/navigation/VariantHeader.tsx`)

A sticky top navigation bar allows the client to switch between the active variants seamlessly:
* **One-Click Variant Switching**: Instant client-side state transition between `#/luxury`, `#/tech`, and `#/adventure`.
* **Multilingual Toggle**: Instant switching between **English (EN)**, **Italian (IT)**, and **German (DE)**.
* **Universal 24/7 Hotline**: Instant phone callout to `+39 0471 790033`.
