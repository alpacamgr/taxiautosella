import React from 'react';
import { useAppStore } from '../../../store/useAppStore';
import { Users, Briefcase, Check, ArrowRight } from 'lucide-react';

export const LuxuryFleetPage: React.FC = () => {
  const { openInquiryModal } = useAppStore();

  const vehicles = [
    {
      id: 'sedan-eclass',
      name: 'Mercedes-Benz E-Class 4MATIC Estate',
      subtitle: 'Executive Alpine Estate',
      tagline: 'A comfortable choice for couples and business travellers with generous luggage space.',
      passengers: 3, luggage: 3,
      features: ['Permanent 4MATIC 4-Wheel Drive', 'Leather Interior & Climate Control', 'Silent Acoustic Comfort Glass'],
      image: '/images/fleet/mercedes-e-class.jpg',
      badge: 'Couples & Business'
    },
    {
      id: 'sedan-sclass',
      name: 'Mercedes-Benz S-Class Long',
      subtitle: 'Flagship Private Chauffeur',
      tagline: 'Flagship comfort for private airport transfers, special occasions, and executive travel.',
      passengers: 3, luggage: 3,
      features: ['Comfortable Rear Seating', 'Quiet Long-Wheelbase Cabin', 'Professional Private Driver'],
      image: '/images/fleet/mercedes-s-class-vip.jpg',
      badge: 'S-Class Long'
    },
    {
      id: 'suv-gls',
      name: 'Mercedes-Benz GLS 4MATIC SUV',
      subtitle: 'Mountain SUV',
      tagline: 'A spacious SUV option for winter roads, luggage and higher-altitude routes.',
      passengers: 4, luggage: 5,
      features: ['AirMATIC Air Suspension', 'Panoramic Sky Roof', 'Extreme Winter Mountain Grip'],
      image: '/images/fleet/mercedes-gl-suv-4matic.jpg',
      badge: 'High Altitude'
    },
    {
      id: 'van-vclass',
      name: 'Mercedes-Benz V-Class',
      subtitle: 'Private Group Minivan',
      tagline: 'Flexible group seating and luggage space for families or small groups.',
      passengers: 7, luggage: 7,
      features: ['Executive Captain Lounge Seats', 'Dual Zone Panoramic Climate', 'Extra-Long Wheelbase for Luggage'],
      image: '/images/fleet/mercedes-v-class-luxury.jpg',
      badge: 'Popular for Groups'
    },
    {
      id: 'minibus-vito',
      name: 'Mercedes-Benz Vito 4MATIC',
      subtitle: 'Alpine Ski & Group Minibus',
      tagline: 'An eight-seat minibus with space for group luggage and winter equipment.',
      passengers: 8, luggage: 8,
      features: ['Heavy-Duty Winter 4x4 Drivetrain', 'Aerodynamic Ski & Snowboard Box', 'Spacious 8-Passenger Seating'],
      image: '/images/fleet/mercedes-vito-minibus-4matic.jpg',
      badge: 'Best for Skiers'
    },
    {
      id: 'sprinter-vip',
      name: 'Mercedes-Benz Sprinter Coach',
      subtitle: 'Small Group Coach',
      tagline: 'Coach transport for wedding parties, tour groups and corporate events.',
      passengers: '16–30', luggage: '20+',
      features: ['Reclining Leather Touring Seats', 'Microphone & PA Audio System', 'Dedicated Ski Compartment'],
      image: '/images/fleet/grand-touring-coach-56pax.jpg',
      badge: 'Weddings & Groups'
    },
    {
      id: 'coach-grand',
      name: 'Grand Touring Coach',
      subtitle: 'Large Tour & Excursion Coach',
      tagline: 'High-capacity transport for tour groups, ski charters and excursions.',
      passengers: 56, luggage: 60,
      features: ['Group Transport Up to 56 Passengers', 'Tour & Excursion Configuration', 'Large Luggage Capacity'],
      image: '/images/fleet/mercedes-sprinter-vip-coach.jpg',
      badge: 'Up to 56 Seats'
    },
    {
      id: 'van-disabled',
      name: 'Wheelchair-Accessible Transport',
      subtitle: 'Mobility Support by Arrangement',
      tagline: 'Contact dispatch with your access requirements so the appropriate vehicle and assistance can be confirmed.',
      passengers: '1 Wheelchair + 6', luggage: 4,
      features: ['Access Requirements Confirmed in Advance', 'Door-to-Door Assistance', 'Vehicle Availability on Request'],
      image: '/images/fleet/mercedes-vito-minibus-side.jpg',
      badge: 'Accessible Care'
    },
    {
      id: 'trailer',
      name: 'Bike & Motorcycle Trailer',
      subtitle: 'Heavy Equipment Transport',
      tagline: 'Dedicated trailer transport for motorcycles, bicycles, and bulky sporting equipment by arrangement.',
      passengers: 'N/A', luggage: '10 Bikes / 30 Skis',
      features: ['Secure Tie-Down System', 'Motorcycle & Bicycle Transport', 'Equipment Options Confirmed in Advance'],
      image: '/images/fleet/mercedes-vito-ski-trailer.jpg',
      badge: 'Luggage & Bikes'
    },
    {
      id: 'production',
      name: 'Film & Photo Production Support',
      subtitle: 'Media Crew Logistics Unit',
      tagline: 'Coordinated vehicles for production crews, equipment transfers, and location logistics in the Dolomites.',
      passengers: 5, luggage: 'Crew Equipment',
      features: ['Multi-Vehicle Coordination', 'Crew & Equipment Transfers', 'Local Route Planning'],
      image: '/images/fleet/autosella_2018_07.jpg',
      badge: 'Film & Media'
    }
  ];

  return (
    <div className="pt-24 pb-20 px-6 lg:px-16 max-w-7xl mx-auto bg-[#F8F6F0] min-h-screen">
      <div className="max-w-3xl mb-16">
        <h1 className="font-editorial text-5xl sm:text-7xl text-[#0E1117] mb-6">
          Cars, Minivans & <span className="italic text-[#C5A880]">Coaches</span>
        </h1>
        <p className="text-lg text-[#0E1117]/80 font-light leading-relaxed">
          Explore our complete fleet of 25 vehicles, from Mercedes-Benz executive sedans and spacious V-Class minivans to 4MATIC models, touring coaches, and specialist transport.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="bg-white p-6 shadow-xl rounded-2xl flex flex-col justify-between border border-[#0E1117]/10 hover:border-[#C5A880] transition-all group">
            <div>
              <div className="h-60 overflow-hidden mb-6 rounded-xl bg-slate-900 relative">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {vehicle.badge && (
                  <span className="absolute top-3 right-3 px-3 py-1 bg-[#0E1117]/90 backdrop-blur-md text-[#C5A880] text-[10px] font-bold uppercase tracking-wider rounded-full border border-[#C5A880]/30">
                    {vehicle.badge}
                  </span>
                )}
              </div>
              <h3 className="font-editorial text-2xl text-[#0E1117] mb-1">{vehicle.name}</h3>
              <p className="text-xs text-[#C5A880] font-semibold tracking-wide uppercase mb-3">{vehicle.subtitle}</p>
              <p className="text-xs text-[#0E1117]/80 font-light leading-relaxed mb-6">
                {vehicle.tagline}
              </p>

              <ul className="space-y-2 mb-6 text-xs text-[#0E1117]/80 font-medium">
                {vehicle.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C5A880] flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[#0E1117]/10 flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-[#0E1117]/70 font-semibold">
                <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5 text-[#C5A880]" /> {vehicle.passengers} Pax</span>
                <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5 text-[#C5A880]" /> {vehicle.luggage}</span>
              </div>
              <button 
                onClick={() => openInquiryModal('Fleet Request', `Vehicle: ${vehicle.name}\nCapacity: ${vehicle.passengers} passengers, ${vehicle.luggage} luggage\nType: ${vehicle.subtitle}`)}
                className="flex min-h-11 items-center gap-1.5 bg-[#0E1117] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#8C6D46] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6D46] focus-visible:ring-offset-2"
              >
                <span>Ask</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 flex max-w-7xl flex-col items-start justify-between gap-8 border border-[#0E1117]/15 bg-[#EEE9DE] p-8 md:flex-row md:items-center md:p-12">
        <div className="max-w-2xl">
          <h2 className="font-editorial text-4xl mb-4">Planning group transport?</h2>
          <p className="text-[#0E1117]/70 font-light leading-relaxed text-sm">
            For corporate events, weddings in the Dolomites, large groups, or film-production logistics, dispatch can coordinate multiple Mercedes cars, minivans, and coaches.
          </p>
        </div>
        <button 
          onClick={() => openInquiryModal('Custom Fleet Charter', 'I require a custom multi-vehicle charter for an event...')}
          className="flex min-h-12 w-full items-center justify-center gap-2 bg-[#0E1117] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#8C6D46] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6D46] focus-visible:ring-offset-2 md:w-auto"
        >
          <span>Ask about group transport</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

