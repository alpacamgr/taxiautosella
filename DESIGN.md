---
name: "Taxi Auto Sella — Alpine Luxury"
description: "Editorial Alpine confidence with a calm, context-aware local dispatch handoff."
colors:
  ink: "#0E1117"
  warm-paper: "#F8F6F0"
  alpine-gold: "#C5A880"
  patina-gold: "#8C6D46"
  parchment: "#EEE9DE"
  clean-white: "#FFFFFF"
  dispatch-surface: "#FBFCFA"
  dispatch-ink: "#17201C"
  dispatch-line: "#CBD2CD"
  dispatch-focus: "#476759"
  dispatch-success: "#176B48"
  dispatch-error: "#A23E2A"
  context-transfer-soft: "#EAF2F5"
  context-transfer: "#285B6D"
  context-excursion-soft: "#EEF4E9"
  context-excursion: "#48633F"
  context-fleet-soft: "#EDF2F5"
  context-fleet: "#3F6070"
  context-urgent-soft: "#FFF3E4"
  context-urgent: "#934A18"
  context-service-soft: "#F3EEE7"
  context-service: "#72583A"
  context-general-soft: "#F4F0E9"
  context-general: "#6E573C"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "3rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "2.25rem"
    fontWeight: 400
    lineHeight: 1.25
  title:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.333
  body:
    fontFamily: "Plus Jakarta Sans, Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Plus Jakarta Sans, Inter, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.08em"
rounded:
  none: "0"
  scrollbar: "4px"
  control-sm: "8px"
  control-md: "12px"
  surface-lg: "16px"
  pill: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  page-wide: "64px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.warm-paper}"
    typography: "{typography.label}"
    rounded: "{rounded.control-md}"
    padding: "16px 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.patina-gold}"
    textColor: "{colors.clean-white}"
  button-reservation:
    backgroundColor: "{colors.alpine-gold}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control-sm}"
    padding: "0 16px"
    height: "44px"
  card:
    backgroundColor: "{colors.clean-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.surface-lg}"
    padding: "24px"
  input-dispatch:
    backgroundColor: "{colors.clean-white}"
    textColor: "{colors.dispatch-ink}"
    rounded: "{rounded.control-md}"
    padding: "0 14px"
    height: "44px"
  choice-dispatch:
    backgroundColor: "{colors.clean-white}"
    textColor: "{colors.dispatch-ink}"
    rounded: "{rounded.pill}"
    padding: "10px 12px"
  nav-link:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.warm-paper}"
    typography: "{typography.label}"
    height: "64px"
  button-handoff-transfer:
    backgroundColor: "{colors.context-transfer}"
    textColor: "{colors.clean-white}"
    rounded: "{rounded.control-md}"
    padding: "0 16px"
    height: "48px"
  urgent-call:
    backgroundColor: "{colors.dispatch-ink}"
    textColor: "{colors.clean-white}"
    rounded: "{rounded.surface-lg}"
    padding: "0 20px"
    height: "64px"
---

# Design System: Taxi Auto Sella — Alpine Luxury

## Overview

**Creative North Star: "The Alpine Dispatch Desk"**

The retained luxury variant combines an editorial Alpine travel identity with the directness of a long-established local consortium. Warm paper, near-black structure, serif headlines, restrained gold accents, generous section spacing, and large vehicle or destination photography establish confidence without the gloss of an anonymous booking platform.

The inquiry layer deliberately becomes quieter and more operational. It keeps the parent site's warm, restrained character, but switches fully to the sans-serif workhorse, pale contextual headers, charcoal-green neutrals, thin lines, and explicit next-step copy. Each enquiry type asks only for details useful to dispatch, then hands the visitor to WhatsApp, email, or the direct phone line; it does not imply that a booking is complete before dispatch confirms availability and price.

**Key Characteristics:**

- Warm editorial surfaces anchored by near-black navigation and type.
- Playfair Display for destination and fleet storytelling; Plus Jakarta Sans for controls, navigation, and dispatch work.
- Thin low-contrast rules, generous whitespace, and restrained gold rather than decorative ornament.
- One quiet contextual color pair per inquiry type, contained to the modal header and primary handoff.
- Clear dual-track conversion: structured planning for future travel, direct calling for an urgent local ride.

## Colors

The site uses warm black, ivory, muted gold, and parchment as its stable visual identity; the dispatch sheet adds green-charcoal neutrals and six low-saturation contextual pairs.

### Primary

- **Consortium Ink** (`ink`, #0E1117): The navigation, footer, hero foundation, strongest text, and primary call-to-action fill.
- **Warm Alpine Paper** (`warm-paper`, #F8F6F0): The persistent page canvas and light text over ink surfaces.
- **Alpine Brass** (`alpine-gold`, #C5A880): The reserved highlight for active navigation, the persistent reservation action, focus states on the site shell, and small trust details.
- **Weathered Brass** (`patina-gold`, #8C6D46): The deeper hover and interactive emphasis used on editorial list items and dark actions.

### Secondary

- **Parchment Panel** (`parchment`, #EEE9DE): Flat editorial callouts that need tonal separation without card elevation.
- **Clean White** (`clean-white`, #FFFFFF): Cards, fields, selected-summary strips, and secondary inquiry actions.

### Tertiary

- **Transfer Blue** (#EAF2F5 / #285B6D): `context-transfer-soft` creates the transfer header field and `context-transfer` carries its primary handoff.
- **Excursion Green** (#EEF4E9 / #48633F): `context-excursion-soft` creates the excursion header field and `context-excursion` carries its primary handoff.
- **Fleet Slate** (#EDF2F5 / #3F6070): `context-fleet-soft` creates the vehicle header field and `context-fleet` carries its primary handoff.
- **Urgent Amber** (#FFF3E4 / #934A18): `context-urgent-soft` announces immediacy and `context-urgent` is reserved for urgent focus emphasis; the direct-call block remains dark and structurally dominant.
- **Service Umber** (#F3EEE7 / #72583A): `context-service-soft` and `context-service` mark special-service requests.
- **General Taupe** (#F4F0E9 / #6E573C): `context-general-soft` and `context-general` mark open questions.

### Neutral

- **Dispatch Surface** (`dispatch-surface`, #FBFCFA): The warm-white modal body.
- **Dispatch Ink** (`dispatch-ink`, #17201C): Inquiry headings and the direct-call block.
- **Dispatch Line** (`dispatch-line`, #CBD2CD): Field borders and quiet control boundaries.
- **Dispatch Focus** (`dispatch-focus`, #476759): Field focus, choice selection, and keyboard focus rings inside the inquiry flow.
- **Dispatch Success** (`dispatch-success`, #176B48): WhatsApp continuation and completion status.
- **Dispatch Error** (`dispatch-error`, #A23E2A): Inline validation only.

### Named Rules

**The One Context Rule.** An inquiry uses exactly one soft header color and its matching dark accent; contextual colors do not mix within one request.

**The Gold Is a Signal Rule.** Gold marks navigation state, booking intent, focus, or a small prestige detail. It is not a broad background wash.

**The Confirmation Rule.** Green communicates a handoff or successful continuation, never a completed booking that dispatch has not confirmed.

## Typography

**Display Font:** Playfair Display (with Georgia and serif fallbacks)  
**Body Font:** Plus Jakarta Sans (with Inter, system UI, and sans-serif fallbacks)

**Character:** Playfair Display supplies established, destination-led hospitality; Plus Jakarta Sans keeps prices, logistics, forms, and navigation contemporary and highly legible. The inquiry sheet uses the sans family throughout so it reads as a working dispatch surface rather than another marketing panel.

### Hierarchy

- **Display** (400, 3rem mobile, 4.5rem on large page headers, up to 6rem in the home hero, line-height 1–1.03): Page and hero statements only.
- **Headline** (400, 2.25rem, line-height 1.25): Major section headings and editorial callout headings.
- **Title** (400, 1.5rem, line-height 1.333): Card names, fleet names, and subsection titles. Inquiry titles are instead sans-serif semibold at 1.5rem and 1.875rem from the small breakpoint.
- **Body** (400, 1rem, line-height 1.5): Explanatory content; quieter supporting copy commonly drops to 0.875rem with line-height 1.5rem.
- **Label** (700, 0.75rem, 0.08em tracking, uppercase where the action is compact): Reservation actions, badges, and small navigation calls. Form labels stay sentence case at 0.875rem and medium weight.

### Named Rules

**The Story and Service Rule.** Serif type tells the Alpine story; sans-serif type helps the visitor decide, compare, enter, or contact.

**The Dispatch Sans Rule.** Do not introduce editorial serif headings inside the inquiry modal. Its calm comes from clarity, not flourish.

## Layout

The main content rhythm uses a centered 80rem container, 1.5rem page gutters, and 6rem vertical sections. Large screens expand horizontal page padding to 4rem. The sticky navigation may span a wider 90rem container so seven destinations and the primary reservation action remain on one line.

Marketing sections move from one column to two or three columns at the medium and large breakpoints. Editorial service and FAQ lists use rules and flat rows; fleet, excursion, and selection content uses white cards in responsive grids. The standard breakpoints in the shipped Tailwind layout are 640px, 768px, 1024px, 1280px, and 1536px.

The inquiry dialog is capped at 64rem wide. On phones it is a bottom sheet aligned to the viewport edge, capped at 94dvh, rounded only at the top, and internally scrollable with an always-visible slim scrollbar. From 640px it becomes a centered, fully rounded dialog with viewport breathing room. At 1024px, planned enquiries split trip details from contact handoff; the urgent variant instead places the direct-call route beside a short WhatsApp preparation form.

**The Selected-Then-Ask Sequence.** When source context exists, show the selected summary directly below the contextual header before requesting new details.

## Elevation & Depth

Depth is a restrained hybrid. Parchment callouts and editorial lists are flat and separated by fine rules; white content cards use familiar Tailwind shadows; the sticky shell and overlays use deliberate custom shadows. Photography supplies most of the atmosphere, while shadows establish interaction layers rather than luxury ornament.

### Shadow Vocabulary

- **Sticky Navigation** (`0 10px 30px rgba(0,0,0,0.16)`): Separates the persistent dark header from scrolling content.
- **Reservation Action** (`0 8px 20px rgba(0,0,0,0.18)`): Gives the persistent gold booking action modest priority.
- **Mobile Navigation** (`0 18px 40px rgba(0,0,0,0.30)`): Defines the opened navigation layer.
- **Inquiry Dialog** (`0 24px 80px rgba(17,32,25,0.24)`): Creates one soft, broad overlay elevation above the dimmed page.
- **Content Cards:** Use the shipped Tailwind `shadow-sm`, `shadow-md`, `shadow-xl`, and `shadow-2xl` utilities according to scale; hover may move from medium to extra-large shadow but does not translate the card.

### Named Rules

**The Layer, Not Lacquer Rule.** Use a shadow to communicate a real layer—sticky shell, card, opened menu, or modal—not to decorate flat editorial copy.

## Shapes

The system intentionally mixes editorial rectangles with gently curved interactive surfaces. Large imagery, prominent cards, and the inquiry shell use 1rem corners. Form fields, compact cards, and primary in-form actions use 0.75rem corners. Navigation controls use 0.5rem corners. Chips and icon-only actions are circular or pill-shaped.

Parchment information bands, large secondary calls to action, and some fleet/service buttons remain square. This preserves the publication-like rhythm and prevents every surface from becoming a soft card. Borders are usually one pixel and low contrast: ink at 10–20% opacity on the parent site, or a dedicated cool-neutral line in the dispatch sheet.

**The Nested Radius Rule.** A rounded outer card may contain a slightly tighter rounded image or field; inner and outer corners should not use the same silhouette indiscriminately.

## Components

### Buttons

- **Persistent reservation:** Brass fill, ink text, compact uppercase label, 2.75rem minimum height, 0.5rem corners, and a small structural shadow. Hover lightens the brass; focus uses a warm-paper ring against the dark navigation.
- **Primary editorial/form action:** Ink fill and warm-paper text, commonly 3rem high with 0.75rem corners in forms. Hover shifts to weathered brass. Full-width form actions may use uppercase tracked labels; content-band actions may remain sentence case and square.
- **Inquiry handoff:** The dominant WhatsApp action uses the current enquiry's dark contextual accent, white text, a rightward handoff cue, 3rem minimum height, and 0.75rem corners. Email is an outlined white secondary action; direct call is a quiet underlined tertiary action except in urgent mode, where it becomes the first large dark block.
- **Hover / Focus:** Color change or a slight brightness reduction only; no transform is used. Every interactive control keeps a visible two-pixel focus ring.

### Chips

- **Editorial tags:** White with a low-opacity ink border, dark small text, and a pill silhouette; hover moves the border and text toward weathered brass.
- **Dispatch choices:** White with a cool-neutral border and an internal circular marker. The selected state uses a pale green surface, dispatch-focus border, dark green text, and a filled check marker. `aria-pressed` communicates the state.

### Cards / Containers

- **Corner Style:** Prominent cards use 1rem corners; compact partner and route cards use 0.75rem corners; editorial parchment bands remain square.
- **Background:** White cards sit on warm paper. Parchment panels create quieter grouping without elevation.
- **Shadow Strategy:** Small list cards begin with a light shadow and deepen on hover; image-led cards use a stable extra-large shadow.
- **Border:** A one-pixel ink border at 10% opacity is the standard card edge. Hover uses Alpine Brass or Weathered Brass according to whether the card is prestige-led or action-led.
- **Internal Padding:** Compact rows use 1rem; standard cards use 1.5rem; major planning panels use 2rem.

### Inputs / Fields

- **Site planning fields:** Warm paper fill, low-opacity ink border, 0.5rem corners, and a gold focus border/ring.
- **Dispatch fields:** White fill, cool-neutral border, 0.75rem corners, 2.75rem minimum height, 0.875rem text, and 0.875rem horizontal padding.
- **Focus:** Dispatch controls use the muted green focus border plus a soft two-pixel ring at 15% opacity. The focused field remains bright; focus does not recolor the whole section.
- **Error / Status:** Validation is inline in brick red and receives alert semantics. Handoff status is inline in dispatch green and uses a polite live region.

### Navigation

The navigation is sticky, near-black, and compact. On extra-large screens, centered links use small semibold text and a two-pixel bottom rule for the active destination. The phone control is outlined and the reservation control remains visible. Below 1280px, links move into a full-width dark drawer while the logo, short booking action, and menu control remain in the bar.

### Contextual Inquiry Dialog

The dialog opens with the enquiry icon, action-specific title, and practical intro on the matching soft contextual color. Planned flows use a trip-details column and a contact/handoff column; urgent rides lead with the direct dispatch number and require only pickup and destination before preparing WhatsApp. Escape closes the dialog, focus is trapped and restored, the page behind is scroll-locked, and clicking the backdrop closes the layer.

## Do's and Don'ts

### Do:

- **Do** keep the retained site world warm, editorial, and locally authoritative: ink structure, ivory canvas, brass signals, and real transport or Dolomites imagery.
- **Do** use serif display type for story and inventory, then switch to sans-serif for controls, prices, logistics, and every dispatch field.
- **Do** preserve the dual-track behavior: rich details for planned travel and a direct phone-first path for urgent local rides.
- **Do** show exactly what the visitor selected before asking for additional details.
- **Do** keep mobile inquiries scrollable within a bottom sheet and maintain keyboard focus management on larger screens.

### Don't:

- **Don't** mix several inquiry context colors or let them bleed into the parent site's gold identity.
- **Don't** present WhatsApp or email handoff as a confirmed booking; dispatch still confirms availability and price.
- **Don't** force an urgent taxi request through the full planned-transfer contact form.
- **Don't** round every editorial panel or add shadows to every section; flat parchment bands and fine rules are part of the retained system.
- **Don't** use gold as a large decorative fill or add ornamental luxury effects that compete with the information hierarchy.
