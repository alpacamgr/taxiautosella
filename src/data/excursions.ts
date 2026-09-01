/**
 * Excursion catalogue. Non-textual fields only — the excursion pages
 * fetch names, descriptions, alt text and badges from
 * `src/locales/<lang>/excursions.json` keyed by `id`.
 */
export interface ExcursionItem {
  id: string;
  image: string;
  priceFrom?: string;
}

export const EXCURSIONS: ExcursionItem[] = [
  { id: 'sella-ronda-tour', image: '/images/hero/autosella-fleet-lineup-dolomites.jpg', priceFrom: '€320 / van' },
  { id: 'venice-lagoon', image: '/images/excursions/venice-lagoon-tour.jpg', priceFrom: '€490 / van' },
  { id: 'verona-garda', image: '/images/excursions/verona-arena-tour.jpg', priceFrom: '€440 / van' },
  { id: 'innsbruck-castles', image: '/images/excursions/innsbruck-imperial-tour.jpg', priceFrom: '€390 / van' },
];
