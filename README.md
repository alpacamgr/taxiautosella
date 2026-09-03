# Taxi Auto Sella website modernization

A single, production-focused redesign of the Taxi Auto Sella website for Val Gardena. The interface balances premium private transfers with practical local taxi, group, accessible, equipment, and excursion requests.

## Main routes

- `/` — home and quick transfer request
- `/booking` — airport and rail prices plus a detailed request form
- `/fleet` — cars, minivans, coaches, and specialist transport
- `/services` — local taxi, shuttle, group, and tailored services
- `/excursions` — Dolomites and regional day trips
- `/faq` — booking and travel answers
- `/members` — consortium drivers, partners, and night taxi requests

Unknown and retired prototype URLs redirect to `/`. Deep links are served by the Cloudflare single-page-application fallback in `wrangler.json`.

## Inquiry experience

The shared inquiry dialog adapts to the trigger that opened it:

- transfers request date, time, passengers, and travel details;
- excursions ask about itinerary and group needs;
- fleet requests emphasize luggage and equipment;
- urgent night taxis put direct calling first;
- general questions use a shorter free-form flow.

WhatsApp and email actions prepare a message for the visitor to send. The site does not claim a booking is confirmed until dispatch replies.

## Local development

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

The production build is emitted to `dist/`.

## Design versions

The preview switch in the bottom-right corner changes between two independently editable site trees:

- V1: `src/variants/luxury/`
- V2: `src/variants/luxury-v2/`

V1 is the default. Add `?version=v2` to any route to open V2 directly; the selection is also retained while navigating. Shared translations, fleet data, contact details, and image assets remain centralized, while the layouts, pages, and variant components can evolve separately.

The two palettes currently use identical token values. Their separate token blocks live in `src/styles/index.css`, so a future version-specific palette change can be scoped without affecting the other version.

## Deployment

`wrangler.json` deploys the production build as Cloudflare Workers Static Assets and provides the single-page-application fallback required by React Router.

```bash
pnpm deploy
```

## Adding a language

The site is set up for multilingual copy: every user-visible string lives in
`src/locales/<code>/*.json`, split by namespace (`common`, `home`, `booking`,
`fleet`, `services`, `excursions`, `faq`, `members`, `contact`, `legal`,
`inquiry`, `reviews`). English is bundled today; German and Italian are the
planned next languages.

To add German (`de`) or Italian (`it`):

1. Copy the whole `src/locales/en/` directory to `src/locales/de/` (or
   `src/locales/it/`) and translate the JSON values in place. Keep the keys
   and any `<em>…</em>` / `<b>…</b>` / `<br/>` markers exactly as they are —
   `<Trans>` places them back into the layout for you.
2. Import the new namespace files and add an entry to
   `SUPPORTED_LANGUAGES` in `src/i18n/index.ts` (uncomment the pre-seeded
   `de` / `it` line and add its files to the `buildResources()` map). The
   `<html lang>` attribute, the `Intl.*` formatters used for dates and the
   Mooovex booking iframe (`/en/`, `/de/`, `/it/`) all follow this value.
3. The `LanguageSwitcher` (`src/variants/luxury/components/LanguageSwitcher.tsx`)
   renders nothing while there is only one supported language, so it appears
   in the nav and the mobile menu automatically once the array has two or
   more entries.

URL-prefixed routes (`/de/…`, `/it/…`), `hreflang` tags and per-language
sitemap entries are a later step. They would go in `src/App.tsx` (add a
language segment to the routes) and in the `<head>` block of `index.html`.

