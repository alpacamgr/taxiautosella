# V4 "Alpine Amber" — style contract

V4 is a fully self-contained variant with an amber palette and booking-form prefill sections.
Tokens are defined in `src/variants/amber/tokens.css` and imported by `AmberLayout.tsx`.
No code reaches into `src/components/` or other variants. Class names below are Tailwind
utilities from `tailwind.config.js`.

## Mood

White canvas, navy text, warm amber accents, soft 12px cards, friendly geometric sans
(Plus Jakarta Sans) at every level. Calm, clear, trustworthy. No serif, no gold,
no uppercase micro-labels, no italics for emphasis.

## The Colour Rule

**Amber is a fill colour only.** It never appears as text or icons on a light surface,
because amber on white fails WCAG contrast. Enforce this:

- `bg-tas-primary` / `bg-tas-brass-fill` = amber fills (buttons, chips, dark section accents).
  Text atop them is **always** `text-tas-on-accent` (navy #172A3A, 7.5:1 contrast).
- Text and icons on light surfaces use `text-tas-accent-on-light` (bronze #925E00) and
  `hover:text-tas-accent-strong` (#7A4E00). **Never** `text-tas-primary`.
- On the dark navy sections (e.g. cta block), the accent is `text-tas-accent-on-dark`
  (#FBBF24 amber).
- Focus rings use `ring-tas-focus` (#B07100 bronze), not `ring-tas-primary`.
- Navy (`tas-ink` #172A3A) carries all structure and matches `public/images/brand/logo-navy.svg`.

## Tokens (V4 values)

| class                     | value     | use                                             |
|---------------------------|-----------|-------------------------------------------------|
| `bg-tas-paper` / `bg-tas-surface` | #FFFFFF | page canvas, cards                          |
| `bg-tas-parchment`        | #FAF8F3   | warm off-white section background, page headers |
| `text-tas-ink`            | #172A3A   | headings, body text, structure                  |
| `text-tas-muted-text`     | #5B6B7B   | secondary copy, captions                        |
| `border-tas-line`         | #E5E7EB   | all borders and rules (solid, no opacity)       |
| `bg-tas-primary`          | #F5A623   | buttons, chips, fills only (never text/icons)   |
| `bg-tas-primary-hover`    | #E29414   | button hover                                    |
| `bg-tas-primary-soft`     | #FEF3DB   | icon background chips on light                  |
| `text-tas-accent-on-light` | #925E00  | text/icons on light surfaces (bronze)           |
| `text-tas-accent-strong`  | #7A4E00   | hover/active for text on light                  |
| `text-tas-accent-on-dark` | #FBBF24   | amber text on dark navy sections                |
| `ring-tas-focus`          | #B07100   | focus ring on light                             |
| `text-tas-star`           | #F5A623   | rating stars                                    |
| `text-tas-on-accent`      | #172A3A   | text on amber fills (navy, 7.5:1)               |

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

`<Trans>` titles that contain `<em>`: render `em` as `<span className="text-tas-accent-on-light" />`
on light surfaces, `text-tas-accent-on-dark` over the hero photo and other dark bands (no `italic`).

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
inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-tas-primary px-5 text-sm font-bold text-tas-on-accent transition-colors hover:bg-tas-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-focus focus-visible:ring-offset-2
```
Secondary button: same box, `border border-tas-line bg-tas-surface text-tas-ink hover:border-tas-ink/40`.
Text link: `inline-flex items-center gap-1.5 text-sm font-semibold text-tas-accent-on-light hover:text-tas-accent-strong` with `ArrowRight` icon.

Chip / tag: `rounded-full border border-tas-line bg-tas-surface px-3.5 py-1.5 text-sm font-medium text-tas-ink hover:border-tas-accent-on-light hover:text-tas-accent-on-light`.

Input: `min-h-12 w-full rounded-lg border border-tas-line bg-tas-surface px-3.5 text-sm text-tas-ink placeholder:text-tas-muted-text focus:border-tas-accent-on-light focus:outline-none focus:ring-2 focus:ring-tas-focus/20`. Labels: `text-sm font-semibold text-tas-ink` (sentence case).

Icon bubble (feature lists): `flex h-11 w-11 items-center justify-center rounded-full bg-tas-primary-soft text-tas-accent-on-light` with a `lucide-react` icon at `h-5 w-5`.

Callout / info band: `rounded-xl bg-tas-primary-soft p-6`. Dark surfaces are rationed: the hero,
the Google rating band directly beneath it (which also absorbs the booking card's overhang on
phones), and one call-to-action block per page (`bg-tas-ink text-white rounded-2xl`). Nothing else.

Reviews / stars: `Star` icon with `fill-tas-star text-tas-star`.

## Do not

- Do not use `text-tas-primary` or `text-tas-brass-fill` for text or icons on light surfaces —
  it fails contrast. Use `text-tas-accent-on-light` instead.
- Do not use `font-editorial`, Playfair, `italic`, `uppercase tracking-widest` labels,
  `font-light`, `text-[10px]`/`text-[11px]` micro type, `border-tas-ink/10`, `bg-tas-ink/90`
  badges, gradient overlays on images, or `shadow-2xl`.
- Do not import from `src/components/` or another variant. V4 is self-contained; copy the file
  into `src/variants/amber/components/` instead (see `Reveal`, `CountUp`, etc.). Shared only:
  `src/config/contact`, `src/data/*`, `src/i18n`, `src/store/useAppStore`.
- Do not add new copy keys unless the layout truly needs them; reuse the existing `homeAmber`
  namespace in `src/locales/en/home-amber.json`.
