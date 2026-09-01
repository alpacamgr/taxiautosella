# Technical architecture

## Stack

- Vite, React 18, and TypeScript
- React Router with `HashRouter` for static hosting
- Tailwind CSS for the interface system
- Zustand for shared inquiry-dialog state
- Lucide React for icons

## Application structure

```text
src/
├── App.tsx
├── components/
│   ├── mobile/StickyMobileBar.tsx
│   └── navigation/ScrollToTop.tsx
├── data/fleet.ts
├── store/useAppStore.ts
└── variants/luxury/
    ├── LuxuryLayout.tsx
    ├── components/
    │   ├── LuxuryInquiryModal.tsx
    │   └── LuxuryNav.tsx
    └── pages/
        ├── LuxuryHome.tsx
        ├── LuxuryBookingPage.tsx
        ├── LuxuryFleetPage.tsx
        ├── LuxuryServicesPage.tsx
        ├── LuxuryExcursionsPage.tsx
        ├── LuxuryFaqPage.tsx
        └── LuxuryMembersPage.tsx
```

## Routing

The public site has one visual system under `#/luxury`. The root route renders the same home page, and unknown routes redirect to `#/luxury`.

## Inquiry state and external handoff

`useAppStore.ts` stores the dialog’s open state, source context, selected details, and optional contact/planning defaults. `LuxuryInquiryModal.tsx` maps that context to transfer, excursion, fleet, urgent, or general UX. WhatsApp and email are external handoffs; opening either is not treated as a successful submission.

## Images

Local assets live in `public/images/brand`, `public/images/hero`, `public/images/fleet`, `public/images/excursions`, and `public/images/partners`. Excursion photographs use explicit dimensions and deferred loading below the initial viewport.
