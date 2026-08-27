export interface DriverMember {
  name: string;
  role: string;
  experienceYears: number;
  specialty: string;
  languages: string[];
}

export const CONSORTIUM_STATS = {
  vehiclesCount: 25,
  driversCount: 18,
  yearsActive: 35,
  satisfiedGuests: '120,000+',
  winterReliability: '100% 4x4',
  rating: '4.95 / 5.0'
};

export const CONSORTIUM_MEMBERS: DriverMember[] = [
  { name: 'Dietrich Bauer', role: 'Senior Chauffeur & Founder', experienceYears: 28, specialty: 'Passo Sella & Airport Logistics', languages: ['DE', 'IT', 'EN', 'Ladin'] },
  { name: 'Martin Bauer', role: 'Fleet & Safety Coordinator', experienceYears: 18, specialty: 'VIP Mercedes V-Class', languages: ['DE', 'IT', 'EN', 'Ladin'] },
  { name: 'Jonas Bernardi', role: 'Alpine Tour Specialist', experienceYears: 12, specialty: 'Sella Ronda Excursions', languages: ['DE', 'IT', 'EN'] },
  { name: 'Johann Comploi', role: 'Master Chauffeur', experienceYears: 25, specialty: 'Long-Distance Munich & Venice', languages: ['DE', 'IT', 'EN', 'Ladin'] },
  { name: 'Manuel Demetz', role: 'Winter Mountain Driver', experienceYears: 14, specialty: 'Ski Shuttle & Heavy Snow Navigation', languages: ['DE', 'IT', 'EN'] },
  { name: 'Mark Demetz', role: 'Coach Tour Director', experienceYears: 20, specialty: '56-Seat Grand Coach Operations', languages: ['DE', 'IT', 'EN', 'Ladin'] },
  { name: 'Andreas Insam', role: 'Executive Chauffeur', experienceYears: 16, specialty: 'Airport Meet & Greet Logistics', languages: ['DE', 'IT', 'EN', 'Ladin'] },
  { name: 'Mikeol Moroder', role: 'Mountain & Bike Guide Chauffeur', experienceYears: 11, specialty: 'Trans-Dolomite Bike Transfers', languages: ['DE', 'IT', 'EN'] },
  { name: 'Erich Perathoner', role: 'Senior Chauffeur', experienceYears: 22, specialty: 'Innsbruck & Verona Fast Transfers', languages: ['DE', 'IT', 'EN', 'Ladin'] },
  { name: 'Walter Piazza', role: 'Senior Chauffeur', experienceYears: 24, specialty: 'Corporate & Conference Transport', languages: ['DE', 'IT', 'EN'] },
  { name: 'Iwan Ploner', role: 'Ski Transfer Specialist', experienceYears: 15, specialty: 'Seceda & Saslong Hotel Shuttles', languages: ['DE', 'IT', 'EN'] },
  { name: 'Markus Prinoth', role: 'Accessibility Specialist', experienceYears: 17, specialty: 'Wheelchair & Medical Transport', languages: ['DE', 'IT', 'EN', 'Ladin'] }
];
