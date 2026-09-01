---
target: Taxi Auto Sella Variant 1 (Alpine Luxury)
total_score: 20
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 4
timestamp: 2026-09-01T09-33-05Z
slug: src-variants-luxury
---
# Taxi Auto Sella Variant 1 — Impeccable Critique

## Design Health Score

| # | Heuristic | Score | Key issue |
|---|---|---:|---|
| 1 | Visibility of system status | 1/4 | The inquiry can claim success before the WhatsApp/email handoff is actually completed. |
| 2 | Match system / real world | 3/4 | Route, fleet, and winter language fit travelers; excessive VIP terminology does not. |
| 3 | User control and freedom | 2/4 | Modal escape, cancel, focus management, and route revision are incomplete. |
| 4 | Consistency and standards | 2/4 | Two headers and several overlapping booking labels/flows compete. |
| 5 | Error prevention | 1/4 | Past dates, unconstrained locations, bypassable required fields, and missing journey details. |
| 6 | Recognition rather than recall | 3/4 | Core facts are visible, but several clickable rows/chips lack clear affordance or semantics. |
| 7 | Flexibility and efficiency | 2/4 | Many entry points exist, but they do not share one stateful booking flow. |
| 8 | Aesthetic and minimalist design | 3/4 | Strong hero and palette; double navigation and low-priority directories dilute focus. |
| 9 | Error recognition and recovery | 1/4 | No reliable handoff failure state or constructive inline recovery. |
| 10 | Help and documentation | 2/4 | FAQ and hotline help, but booking lacks response-time and next-step guidance. |
| **Total** |  | **20/40** | **Acceptable foundation; significant funnel work remains.** |

## Design Specificity Verdict

Variant 1 has high product specificity but only medium authenticity. The fleet lineup in the Dolomites, 4MATIC models, Santa Cristina consortium, airport gateways, 18 members, 25 vehicles, and winter operations feel authored for Taxi Auto Sella. The desktop hero is the strongest moment.

The credibility drops when the site leans into generic luxury theater: repeated “VIP,” “Lord Davies,” “Presidential Service,” champagne add-ons, crowns, and broad claims about every vehicle. Taxi Auto Sella's more defensible premium story is calm local competence, winter reliability, fleet breadth, and direct human service.

The deterministic detector returned a clean result: 0 findings across the 10 TSX files in `src/variants/luxury`. That means it found no banned mechanical patterns, not that the experience is production-ready. Browser evidence and the independent design review still found navigation, conversion, localization, accessibility, and state-feedback issues that are outside the detector's mechanical coverage. No live overlay was available because the permitted browser surface did not support mutable script injection; rendered screenshots and DOM snapshots were used instead.

## Overall Impression

Keep Variant 1 and stop concept exploration. It already contains the right visual world. The biggest opportunity is to replace its prototype-era complexity with one truthful, fast journey organized around two needs: plan an airport/station transfer and get a local taxi now.

## What's Working

1. The desktop hero has real authority: the fleet remains visible, the editorial headline is memorable, and the cream quote panel reads immediately.
2. Operational proof persuades better than adjectives: 25 vehicles, 18 members, fixed routes, passenger capacities, accessible transport, and winter-ready models.
3. The dual-track intent is correct: planned travelers need structured booking while urgent users need immediate phone or WhatsApp dispatch.

## Priority Issues

### P1 — Remove the demo shell and collapse to one branded header

The global variant switcher and luxury navigation create two stacked headers with duplicate booking and phone actions. Remove Variant 2/3 controls from the customer experience and merge language, booking, urgent contact, and a reduced navigation into one header.

Suggested command: `$impeccable distill`

### P1 — Put booking before the route directory on mobile

At 390 px, the actual booking form begins roughly 2,700 px down the booking page, after nine airport and four station routes. Put the quote/booking start first; move popular routes below it as compact prefill shortcuts.

Suggested command: `$impeccable adapt`

### P1 — Replace overlapping funnels with one canonical booking model

“Book Ride,” “Reserve,” “Instant Quote,” “Request VIP Chauffeur Quote,” route clicks, the formal request, and external contact choices represent overlapping flows. Decide whether the product provides a genuine instant quote or a human availability request, then make every planned-transfer CTA enter the same stateful flow. Keep phone/WhatsApp as explicit urgent alternatives. Also remove the duplicate `BookingModal` mount.

Suggested command: `$impeccable shape`

### P1 — Finish localization or remove the language selector until it is real

The selector changes shared UI while the luxury pages remain English. That creates a stitched-product effect precisely where international travelers need confidence.

Suggested command: `$impeccable harden`

### P2 — Harden semantics, input structure, modal accessibility, and confirmation states

Clickable `div`/`span` controls lack keyboard semantics; modal roles, focus handling, Escape, and accessible labels are incomplete; required fields can be bypassed; time/flight/train/equipment fields are incomplete; and success appears before external sending is confirmed.

Suggested command: `$impeccable audit`

## Persona Red Flags

**Jordan — first-time international guest:** cannot tell whether “Instant Quote” produces a price or sends a human inquiry, encounters five labels for overlapping actions, and is not told response time or what confirmation looks like.

**Riley — stress tester:** can select a past date, bypass required identity fields through WhatsApp, receive a false “Inquiry Sent” state, find two booking overlays, and produce a half-English/half-Italian experience.

**Casey — distracted mobile traveler:** loses a large part of the first viewport to two headers, must scroll through a long route wall before reaching the form, and sees three nearly equal sticky actions instead of one urgent and one planned path.

**Delayed international arrival:** needs exact reassurance about meeting point, delay handling, luggage/skis, vehicle fit, final price, and confirmation timing. Champagne and ceremonial VIP language do not answer those high-anxiety questions.

## Minor Observations

- Replace “Lord Davies” with a neutral example.
- Verify or soften “100% 4MATIC,” premium acoustic glass across every vehicle, live tracking, and “Presidential Service.”
- Reduce the homepage nightlife/partner decision cloud; keep it lower or on a dedicated page.
- Raise tiny 10–11 px uppercase labels and low-opacity placeholder text to a more readable floor.
- Keep the ink, limestone, bronze, and editorial serif; remove crowns and excessive VIP repetition.

## Questions to Consider

1. Should the production tone be **quiet Alpine authority** or **formal VIP chauffeur**?
2. Should the primary planned-transfer promise be a **real instant price** or a **fast human-confirmed request**?
3. Should the next pass address the **top three conversion issues** or the **full production cleanup**?
