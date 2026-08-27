export interface ExcursionItem {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  highlights: string[];
  description: string;
  image: string;
  priceFrom: string;
  badge: string;
}

export const EXCURSIONS: ExcursionItem[] = [
  {
    id: 'sella-ronda-tour',
    title: 'The Great Dolomites & Sella Ronda Tour',
    subtitle: '4 Mountain Passes Spectacular Journey',
    duration: 'Full Day (6–7 Hours)',
    priceFrom: '€320 / van',
    highlights: [
      'Passo Sella, Passo Gardena, Passo Pordoi, Passo Campolongo',
      'Panoramic photo stops at 2,240m altitude',
      'Traditional South Tyrolean mountain hut lunch recommendation',
      'Direct pickup and return to your hotel'
    ],
    description: 'Experience the world-renowned Sella Massif loop with our local drivers who know every scenic viewpoint, historical milestone, and hidden valley vista.',
    image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1000&q=80',
    badge: 'Most Popular'
  },
  {
    id: 'venice-lagoon',
    title: 'Venice — The Floating City Day Trip',
    subtitle: 'From the Peaks to the Venetian Canals',
    duration: 'Full Day (10–12 Hours)',
    priceFrom: '€490 / van',
    highlights: [
      'Door-to-door luxury transfer to Piazzale Roma / Water Taxi terminal',
      '6 hours free time to explore St. Mark\'s Square, Rialto & Gondolas',
      'Stress-free return journey in a climate-controlled Mercedes',
      'Bottled water and charging ports included'
    ],
    description: 'A magical transition from the rugged Dolomites to the romantic canals of Venice. Travel in executive luxury without the hassle of train transfers.',
    image: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1000&q=80',
    badge: 'Iconic Italian Day'
  },
  {
    id: 'verona-garda',
    title: 'Verona & Lake Garda Scenic Day Trip',
    subtitle: 'Romeo & Juliet Roman Arena & Alpine Waters',
    duration: 'Full Day (8–9 Hours)',
    priceFrom: '€440 / van',
    highlights: [
      'Historic Verona Arena and Juliet’s Balcony tour',
      'Scenic drive along the northern shores of Lake Garda (Riva / Malcesine)',
      'Wine tasting stop in the Valpolicella vineyards (on request)',
      'Flexible private schedule'
    ],
    description: 'Combine Renaissance romance with Mediterranean warmth. Explore Verona’s ancient Roman amphitheatre and relax on the shores of Lake Garda.',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1000&q=80',
    badge: 'Culture & Romance'
  },
  {
    id: 'innsbruck-castles',
    title: 'Innsbruck Imperial City & Swarovski World',
    subtitle: 'Tyrolean Heritage & Crystal Wonder',
    duration: 'Full Day (7–8 Hours)',
    priceFrom: '€390 / van',
    highlights: [
      'Brenner Pass scenic Alpine route',
      'Innsbruck Golden Roof & Hofburg Imperial Palace',
      'Swarovski Crystal Worlds (Kristallwelten) in Wattens',
      'Boutique shopping in historic Tyrolean old town'
    ],
    description: 'Cross the Austrian border in comfort. Discover the rich Habsburg heritage of Innsbruck and the sparkling art installations of Swarovski.',
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1000&q=80',
    badge: 'Cross-Border Tour'
  }
];
