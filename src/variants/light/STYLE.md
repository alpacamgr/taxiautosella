# V3 "Alpine Light" — style contract

V3 is the light, Welcome-Pickups-inspired version of the site. Same routes, same copy
(`src/locales/en/*.json`), same data (`src/data/*`), same store and inquiry flow as V1/V2.
Only the presentation changes. Tokens are defined under `:root[data-tas-version='v3']` in
`src/styles/index.css`; class names below are Tailwind utilities from `tailwind.config.js`.

## Mood

White canvas, Dolomite-navy text, one pine-green action colour, soft 12px cards, friendly
geometric sans (Plus Jakarta Sans) at every level. Calm, clear, trustworthy. No serif, no gold,
no dark hero bands, no uppercase micro-labels, no italics for emphasis.

## Tokens (V3 values)

| class                     | value     | use                                             |
|---------------------------|-----------|-------------------------------------------------|
| `bg-tas-paper` / `bg-tas-surface` | #FFFFFF | page canvas, cards                          |
| `bg-tas-parchment`        | #F3F6F9   | "snow" alternate section background, page headers |
| `text-tas-ink`            | #172A3A   | headings and body text                          |
| `text-tas-muted-text`     | #5B6B7B   | secondary copy, captions                        |
| `border-tas-line`         | #E3E8EE   | all borders and rules (solid, no opacity)       |
| `bg-tas-primary`          | #0F6E4E   | primary buttons, links on hover, icons          |
| `bg-tas-primary-hover`    | #0B5A40   | button hover                                    |
| `bg-tas-primary-soft`     | #E6F4EE   | tinted callouts, icon backgrounds, selected chips |
| `text-tas-star`           | #F5A623   | rating stars only                               |
| `text-tas-on-accent`      | #FFFFFF   | text on primary                                 |

Legacy tokens (`tas-brass-*`, `tas-accent-*`, `tas-focus`) resolve to green in V3, so shared
components still work, but **new V3 code should use the names above**.

## Recipes

Page header (every subpage):
```tsx
<section className="border-b border-tas-line bg-tas-parchment">
  <div className="mx-auto max-w-7xl px-6 py-14 sm:py-20 lg:px-16">
    <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-tas-ink sm:text-5xl">…</h1>
    <p className="mt-4 max-w-2xl text-lg leading-relaxed text-tas-muted-text">…</p>
  </div>
</section>
```

`<Trans>` titles that contain `<em>`: render `em` as `<span className="text-tas-primary" />`
(no `italic`).

Section title: `text-3xl font-bold tracking-tight text-tas-ink sm:text-4xl`, subtitle
`mt-3 text-base text-tas-muted-text`. Sub-heading (h3/h4): `text-lg font-bold text-tas-ink`.

Body copy: `text-base leading-relaxed text-tas-muted-text` (secondary) or `text-tas-ink`
(primary). Never `font-light`.

Section rhythm: `py-16 sm:py-20` inside `mx-auto max-w-7xl px-6 lg:px-16`. Alternate white and
`bg-tas-parchment` sections; separate with `border-t border-tas-line` when both are white.

Card:
```
rounded-xl border border-tas-line bg-tas-surface p-6 shadow-card transition-shadow hover:shadow-card-hover
```
Image inside a card: `rounded-lg` (nested radius tighter than the card).

Primary button:
```
inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-tas-primary px-5 text-sm font-bold text-white transition-colors hover:bg-tas-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-primary focus-visible:ring-offset-2
```
Secondary button: same box, `border border-tas-line bg-tas-surface text-tas-ink hover:border-tas-ink/40`.
Text link: `inline-flex items-center gap-1.5 text-sm font-semibold text-tas-primary hover:text-tas-primary-hover` with `ArrowRight` icon.

Chip / tag: `rounded-full border border-tas-line bg-tas-surface px-3.5 py-1.5 text-sm font-medium text-tas-ink hover:border-tas-primary hover:text-tas-primary`.

Input: `min-h-12 w-full rounded-lg border border-tas-line bg-tas-surface px-3.5 text-sm text-tas-ink placeholder:text-tas-muted-text focus:border-tas-primary focus:outline-none focus:ring-2 focus:ring-tas-primary/20`. Labels: `text-sm font-semibold text-tas-ink` (sentence case).

Icon bubble (feature lists): `flex h-11 w-11 items-center justify-center rounded-full bg-tas-primary-soft text-tas-primary` with a `lucide-react` icon at `h-5 w-5`.

Callout / info band: `rounded-xl bg-tas-primary-soft p-6` (never a dark band). The **only** dark
surface allowed on a page is a single call-to-action block (`bg-tas-ink text-white rounded-2xl`),
e.g. "Need a taxi tonight?".

Reviews / stars: `Star` icon with `fill-tas-star text-tas-star`.

## Do not

- Do not use `font-editorial`, Playfair, `italic`, `uppercase tracking-widest` labels,
  `font-light`, `text-[10px]`/`text-[11px]` micro type, `border-tas-ink/10`, `bg-tas-ink/90`
  badges, gradient overlays on images, or `shadow-2xl`.
- Do not add new copy keys unless the layout truly needs them; reuse the existing namespaces.
- Do not change behaviour: keep every `openInquiryModal`, `navigate`, `heroPrefill`, Mooovex
  iframe and link exactly as in the V2 source you port from.
