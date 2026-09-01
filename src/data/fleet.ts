/**
 * Vehicle catalogue used by the home page teaser and the pricing / booking
 * calculator. Non-textual fields only — every user-visible name, subtitle,
 * tagline, badge and feature list lives in `src/locales/<lang>/fleet.json`
 * keyed by `id`.
 */
export interface VehicleCategory {
  id: string;
  category: 'sedan' | 'luxury_van' | 'minibus' | 'coach' | 'accessible';
  passengers: number;
  luggage: number;
  skis: number;
  multiplier: number;
  image: string;
}

export const FLEET: VehicleCategory[] = [
  {
    id: 'sedan-eclass',
    category: 'sedan',
    passengers: 3,
    luggage: 3,
    skis: 2,
    multiplier: 1.0,
    image: '/images/fleet/mercedes-e-class.jpg',
  },
  {
    id: 'van-vclass',
    category: 'luxury_van',
    passengers: 7,
    luggage: 7,
    skis: 6,
    multiplier: 1.25,
    image: '/images/fleet/mercedes-v-class-luxury.jpg',
  },
  {
    id: 'minibus-vito',
    category: 'minibus',
    passengers: 8,
    luggage: 8,
    skis: 8,
    multiplier: 1.2,
    image: '/images/fleet/mercedes-vito-minibus-4matic.jpg',
  },
  {
    id: 'sedan-sclass',
    category: 'sedan',
    passengers: 3,
    luggage: 3,
    skis: 2,
    multiplier: 1.45,
    image: '/images/fleet/mercedes-s-class-vip.jpg',
  },
  {
    id: 'sprinter-vip',
    category: 'coach',
    passengers: 16,
    luggage: 16,
    skis: 16,
    multiplier: 1.85,
    image: '/images/fleet/grand-touring-coach-56pax.jpg',
  },
  {
    id: 'coach-grand',
    category: 'coach',
    passengers: 56,
    luggage: 60,
    skis: 50,
    multiplier: 3.2,
    image: '/images/fleet/mercedes-sprinter-vip-coach.jpg',
  },
];
