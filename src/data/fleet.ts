export interface VehicleCategory {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  category: 'sedan' | 'luxury_van' | 'minibus' | 'coach' | 'accessible';
  passengers: number;
  luggage: number;
  skis: number;
  multiplier: number;
  features: string[];
  image: string;
  badge?: string;
}

export const FLEET: VehicleCategory[] = [
  {
    id: 'sedan-eclass',
    name: 'Mercedes-Benz E-Class 4MATIC',
    subtitle: 'Executive Alpine Sedan',
    tagline: 'Ideal for couples, solo business travelers, and executive transfers with unmatched comfort.',
    category: 'sedan',
    passengers: 3,
    luggage: 3,
    skis: 2,
    multiplier: 1.0,
    features: [
      'Permanent 4MATIC 4-Wheel Drive',
      'Leather Interior & Climate Control',
      'High-Speed Wi-Fi & USB Charging',
      'Complimentary Dolomite Spring Water',
      'Silent Acoustic Comfort Glass'
    ],
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1000&q=80',
    badge: 'Popular for Couples'
  },
  {
    id: 'van-vclass',
    name: 'Mercedes-Benz V-Class Luxury',
    subtitle: 'VIP Chauffeur Minivan',
    tagline: 'Premium space with face-to-face conference seating for VIP families and executive groups.',
    category: 'luxury_van',
    passengers: 7,
    luggage: 7,
    skis: 6,
    multiplier: 1.25,
    features: [
      'Executive Captain Lounge Seats',
      '4MATIC All-Wheel Drive with Air Suspension',
      'Dual Zone Panoramic Climate',
      'Extra-Long Wheelbase for Luggage',
      'Oversized Ski / Snowboard Transport'
    ],
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80',
    badge: 'VIP Best Seller'
  },
  {
    id: 'minibus-vito',
    name: 'Mercedes-Benz Vito 4MATIC',
    subtitle: 'Alpine Ski & Group Minibus',
    tagline: 'The rugged Dolomite workhorse with maximum storage capacity and roof ski carriers.',
    category: 'minibus',
    passengers: 8,
    luggage: 8,
    skis: 8,
    multiplier: 1.20,
    features: [
      'Heavy-Duty Winter 4x4 Drivetrain',
      'Aerodynamic Ski & Snowboard Box',
      'Spacious 8-Passenger Seating',
      'Child & Booster Seats Available',
      'Summer Mountain Bike Trailer Compatible'
    ],
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1000&q=80',
    badge: 'Best for Ski Groups'
  },
  {
    id: 'van-accessible',
    name: 'Mercedes Wheelchair Accessible 4x4',
    subtitle: 'Inclusive Accessible Shuttle',
    tagline: 'Custom hydraulic ramp or lift with ISO wheelchair tie-downs for barrier-free mountain travel.',
    category: 'accessible',
    passengers: 5,
    luggage: 5,
    skis: 4,
    multiplier: 1.15,
    features: [
      'Integrated Hydraulic Wheelchair Ramp',
      'Certified 4-Point Safety Restraints',
      'Flat Floor with Ample Headroom',
      'Trained Medical-Assistance Chauffeur',
      'Direct Hotel Step-Free Drop-Off'
    ],
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1000&q=80',
    badge: 'Barrier-Free Access'
  },
  {
    id: 'sprinter-vip',
    name: 'Mercedes-Benz Sprinter VIP Coach',
    subtitle: 'Luxury Small Group Coach (16–30 Seats)',
    tagline: 'First-class touring coach for wedding parties, ski clubs, and corporate events.',
    category: 'coach',
    passengers: 16,
    luggage: 16,
    skis: 16,
    multiplier: 1.85,
    features: [
      'Reclining Leather Touring Seats',
      'Microphone & PA Audio System',
      'Dedicated Ski & Baggage Compartment',
      'Panoramic Alpine View Windows',
      'Professional Commercial Chauffeur'
    ],
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80',
    badge: 'Group & Events'
  },
  {
    id: 'coach-grand',
    name: 'Grand Touring Coach (Up to 56 Seats)',
    subtitle: 'Large Tour & Excursion Coach',
    tagline: 'High-capacity luxury coach for large tour operators, ski charters, and international excursions.',
    category: 'coach',
    passengers: 56,
    luggage: 60,
    skis: 50,
    multiplier: 3.20,
    features: [
      '56 Ergonomic Reclining Seats',
      'Onboard Restroom & Galley Refrigerator',
      'Dual Climate Control & Entertainment Screens',
      'Massive Underfloor Luggage Bays',
      'Full Euro-6 Eco Emissions Certified'
    ],
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1000&q=80',
    badge: 'Large Groups'
  }
];
