# Technical architecture

## Stack

- Vite, React 18, and TypeScript
- React Router with `BrowserRouter` and a host-level SPA fallback
- Tailwind CSS for the interface system
- Zustand for shared inquiry-dialog state
- Lucide React for icons

## Application structure

```text
src/
├── App.tsx
├── components/
│   ├── mobile/StickyMobileBar.tsx
│   ├── navigation/ScrollToTop.tsx
│   └── preview/VersionToggle.tsx
├── data/fleet.ts
├── store/useAppStore.ts
└── variants/
    ├── luxury/       # V1 layout, components, and pages
    └── luxury-v2/    # Independently editable V2 copy
```

## Routing

The site uses `BrowserRouter` with public routes such as `/`, `/booking`, and `/fleet`. `App.tsx` selects the complete V1 or V2 route component set. V1 is the default; `?version=v2` selects V2, and the choice is stored locally and preserved across route changes.

Variant-specific layouts, pages, and components are duplicated so design experiments in one tree do not modify the other. Shared translations, business data, contact configuration, state, and image infrastructure remain centralized to prevent factual drift.

Cloudflare’s `single-page-application` asset fallback serves `index.html` for direct route visits.

## Inquiry state and external handoff

`useAppStore.ts` stores the dialog’s open state, source context, selected details, and optional contact/planning defaults. `LuxuryInquiryModal.tsx` maps that context to transfer, excursion, fleet, urgent, or general UX. WhatsApp and email are external handoffs; opening either is not treated as a successful submission.

## Images

Local assets live in `public/images/brand`, `public/images/hero`, `public/images/fleet`, `public/images/excursions`, and `public/images/partners`. Excursion photographs use explicit dimensions and deferred loading below the initial viewport.
