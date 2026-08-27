export interface RoutePoint {
  id: string;
  name: string;
  code?: string;
  type: 'airport' | 'station' | 'resort' | 'city';
  country: string;
}

export interface RouteQuote {
  originId: string;
  destinationId: string;
  distanceKm: number;
  durationMinutes: number;
  basePrice: number; // For standard Sedan 1-3 pax
  popular?: boolean;
}

export const ORIGINS: RoutePoint[] = [
  { id: 'inn', name: 'Innsbruck Airport', code: 'INN', type: 'airport', country: 'Austria' },
  { id: 'muc', name: 'Munich Airport', code: 'MUC', type: 'airport', country: 'Germany' },
  { id: 'vrn', name: 'Verona Valerio Catullo', code: 'VRN', type: 'airport', country: 'Italy' },
  { id: 'vce', name: 'Venice Marco Polo', code: 'VCE', type: 'airport', country: 'Italy' },
  { id: 'tsf', name: 'Treviso Canova', code: 'TSF', type: 'airport', country: 'Italy' },
  { id: 'bgy', name: 'Milan Bergamo Orio al Serio', code: 'BGY', type: 'airport', country: 'Italy' },
  { id: 'mxp', name: 'Milan Malpensa', code: 'MXP', type: 'airport', country: 'Italy' },
  { id: 'lin', name: 'Milan Linate', code: 'LIN', type: 'airport', country: 'Italy' },
  { id: 'bzo', name: 'Bolzano Airport', code: 'BZO', type: 'airport', country: 'Italy' },
  { id: 'blq', name: 'Bologna Guglielmo Marconi', code: 'BLQ', type: 'airport', country: 'Italy' },
  { id: 'st-bzo', name: 'Bolzano Railway Station', type: 'station', country: 'Italy' },
  { id: 'st-bxn', name: 'Bressanone (Brixen) Station', type: 'station', country: 'Italy' },
  { id: 'st-ponte', name: 'Ponte Gardena / Waidbruck Station', type: 'station', country: 'Italy' },
  { id: 'local-val', name: 'Val Gardena (Local Ride)', type: 'resort', country: 'Italy' }
];

export const DESTINATIONS: RoutePoint[] = [
  { id: 'ortisei', name: 'Ortisei / St. Ulrich', type: 'resort', country: 'Val Gardena' },
  { id: 'scristina', name: 'S. Cristina / St. Christina', type: 'resort', country: 'Val Gardena' },
  { id: 'selva', name: 'Selva / Wolkenstein', type: 'resort', country: 'Val Gardena' },
  { id: 'passo-sella', name: 'Passo Sella / Sellajoch', type: 'resort', country: 'Val Gardena' },
  { id: 'passo-gardena', name: 'Passo Gardena / Grödnerjoch', type: 'resort', country: 'Val Gardena' },
  { id: 'altabadia', name: 'Alta Badia (Corvara / Colfosco)', type: 'resort', country: 'Dolomites' },
  { id: 'cortina', name: 'Cortina d\'Ampezzo', type: 'resort', country: 'Dolomites' },
  { id: 'alpe-siusi', name: 'Alpe di Siusi / Seiser Alm', type: 'resort', country: 'Dolomites' }
];

export const ROUTE_MATRIX: Record<string, { distanceKm: number; durationMinutes: number; basePrice: number }> = {
  'inn': { distanceKm: 120, durationMinutes: 90, basePrice: 240 },
  'muc': { distanceKm: 310, durationMinutes: 210, basePrice: 480 },
  'vrn': { distanceKm: 190, durationMinutes: 125, basePrice: 340 },
  'vce': { distanceKm: 270, durationMinutes: 195, basePrice: 440 },
  'tsf': { distanceKm: 250, durationMinutes: 180, basePrice: 420 },
  'bgy': { distanceKm: 275, durationMinutes: 180, basePrice: 450 },
  'mxp': { distanceKm: 350, durationMinutes: 240, basePrice: 540 },
  'lin': { distanceKm: 320, durationMinutes: 210, basePrice: 510 },
  'bzo': { distanceKm: 42, durationMinutes: 45, basePrice: 110 },
  'blq': { distanceKm: 300, durationMinutes: 200, basePrice: 480 },
  'st-bzo': { distanceKm: 38, durationMinutes: 40, basePrice: 95 },
  'st-bxn': { distanceKm: 30, durationMinutes: 35, basePrice: 85 },
  'st-ponte': { distanceKm: 18, durationMinutes: 25, basePrice: 55 },
  'local-val': { distanceKm: 10, durationMinutes: 15, basePrice: 30 },
};

export const POPULAR_ROUTES = [
  {
    origin: 'Innsbruck Airport (INN)',
    destination: 'Val Gardena (Ortisei/Selva)',
    distance: '120 km',
    duration: '1h 30m',
    price: 'from €240',
    popular: true,
    tag: 'Fastest International Hub'
  },
  {
    origin: 'Verona Airport (VRN)',
    destination: 'Val Gardena (Ortisei/Selva)',
    distance: '190 km',
    duration: '2h 05m',
    price: 'from €340',
    popular: true,
    tag: 'Direct Highway Access'
  },
  {
    origin: 'Munich Airport (MUC)',
    destination: 'Val Gardena (Ortisei/Selva)',
    distance: '310 km',
    duration: '3h 30m',
    price: 'from €480',
    popular: true,
    tag: 'Top German Gateway'
  },
  {
    origin: 'Venice Airport (VCE)',
    destination: 'Val Gardena (Ortisei/Selva)',
    distance: '270 km',
    duration: '3h 15m',
    price: 'from €440',
    popular: false,
    tag: 'Scenic Alpine Route'
  },
  {
    origin: 'Milan Malpensa (MXP)',
    destination: 'Val Gardena (Ortisei/Selva)',
    distance: '350 km',
    duration: '3h 55m',
    price: 'from €540',
    popular: false,
    tag: 'Global Long-Haul Hub'
  },
  {
    origin: 'Bolzano Airport (BZO)',
    destination: 'Val Gardena (Ortisei/Selva)',
    distance: '42 km',
    duration: '45m',
    price: 'from €110',
    popular: true,
    tag: 'Closest Regional Airport'
  }
];
