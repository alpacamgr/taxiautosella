import React from 'react';
import { useAppStore } from '../../../store/useAppStore';
import { Users, Briefcase, Check, ArrowRight, ShieldCheck } from 'lucide-react';

export const LuxuryFleetPage: React.FC = () => {
  const { openInquiryModal } = useAppStore();

  const vehicles = [
    {
      id: 'sedan-eclass',
      name: 'Mercedes-Benz E-Class 4MATIC',
      subtitle: 'Executive Alpine Sedan',
      tagline: 'Ideal for couples and solo business travelers with unmatched comfort.',
      passengers: 3, luggage: 3,
      features: ['Permanent 4MATIC 4-Wheel Drive', 'Leather Interior & Climate Control', 'Silent Acoustic Comfort Glass'],
      image: '/images/fleet/mercedes-e-class.jpg',
      badge: 'Couples & Business'
    },
    {
      id: 'sedan-sclass',
      name: 'Mercedes-Benz S-Class Long VIP',
      subtitle: 'Prestige Presidential Chauffeur',
      tagline: 'Top-of-the-line comfort and prestige for VIP delegations and executive travel.',
      passengers: 3, luggage: 3,
      features: ['First-Class Rear Reclining Seats', 'Acoustic Privacy Double Glazing', 'White-Glove VIP Chauffeur'],
      image: '/images/fleet/mercedes-s-class-vip.jpg',
      badge: 'Flagship Luxury'
    },
    {
      id: 'suv-gls',
      name: 'Mercedes-Benz GLS 4MATIC SUV',
      subtitle: 'Luxury Mountain SUV',
      tagline: 'Commanding presence and generous clearance for high-altitude luxury travel.',
      passengers: 4, luggage: 5,
      features: ['AirMATIC Air Suspension', 'Panoramic Sky Roof', 'Extreme Winter Mountain Grip'],
      image: '/images/fleet/mercedes-gl-suv-4matic.jpg',
      badge: 'High Altitude'
    },
    {
      id: 'van-vclass',
      name: 'Mercedes-Benz V-Class VIP',
      subtitle: 'VIP Chauffeur Minivan',
      tagline: 'Premium space with face-to-face conference seating for VIP families.',
      passengers: 7, luggage: 7,
      features: ['Executive Captain Lounge Seats', 'Dual Zone Panoramic Climate', 'Extra-Long Wheelbase for Luggage'],
      image: '/images/fleet/mercedes-v-class-luxury.jpg',
      badge: 'VIP Best Seller'
    },
    {
      id: 'minibus-vito',
      name: 'Mercedes-Benz Vito 4MATIC',
      subtitle: 'Alpine Ski & Group Minibus',
      tagline: 'The rugged Dolomite workhorse with maximum storage capacity and roof ski carriers.',
      passengers: 8, luggage: 8,
      features: ['Heavy-Duty Winter 4x4 Drivetrain', 'Aerodynamic Ski & Snowboard Box', 'Spacious 8-Passenger Seating'],
      image: '/images/fleet/mercedes-vito-minibus-4matic.jpg',
      badge: 'Best for Skiers'
    },
    {
      id: 'sprinter-vip',
      name: 'Mercedes-Benz Sprinter VIP Coach',
      subtitle: 'Luxury Small Group Coach',
      tagline: 'First-class touring coach for wedding parties and corporate events.',
      passengers: '16–30', luggage: '20+',
      features: ['Reclining Leather Touring Seats', 'Microphone & PA Audio System', 'Dedicated Ski Compartment'],
      image: '/images/fleet/mercedes-sprinter-vip-coach.jpg',
      badge: 'Weddings & Groups'
    },
    {
      id: 'coach-grand',
      name: 'Grand Touring Coach',
      subtitle: 'Large Tour & Excursion Coach',
      tagline: 'High-capacity luxury coach for large tour operators and ski charters.',
      passengers: 56, luggage: 60,
      features: ['56 Ergonomic Reclining Seats', 'Onboard Restroom & Galley Refrigerator', 'Massive Underfloor Luggage Bays'],
      image: '/images/fleet/grand-touring-coach-56pax.jpg',
      badge: 'Up to 56 Seats'
    },
    {
      id: 'van-disabled',
      name: 'Disabled Accessible Van',
      subtitle: 'Specialized Wheelchair Transport',
      tagline: 'Fully equipped with an electric/hydraulic lift and ISO 4-point restraints for wheelchair accessibility.',
      passengers: '1 Wheelchair + 6', luggage: 4,
      features: ['Hydraulic Wheelchair Ramp/Lift', 'ISO 4-Point Restraint System', 'Certified Assistance Chauffeur'],
      image: '/images/fleet/mercedes-vito-minibus-side.jpg',
      badge: 'Accessible Care'
    },
    {
      id: 'trailer',
      name: 'Ski & Mountain Bike Trailer',
      subtitle: 'Heavy Equipment Transport',
      tagline: 'Dedicated enclosed trailers for large groups requiring extensive bike or ski gear transport.',
      passengers: 'N/A', luggage: '10 Bikes / 30 Skis',
      features: ['Secure Weatherproof Enclosure', 'Up to 10 Downhill/E-Bikes', 'Summer & Winter Compatible'],
      image: '/images/fleet/mercedes-vito-ski-trailer.jpg',
      badge: 'Luggage & Bikes'
    },
    {
      id: 'production',
      name: 'Film & Photo Production Support',
      subtitle: 'Media Crew Logistics Unit',
      tagline: 'Specialized 4x4 vehicle for commercial camera crews, equipment transport, and location scouting in the Dolomites.',
      passengers: 5, luggage: 'Crew Equipment',
      features: ['220V Power Inverters Onboard', 'Heavy Gear Shelving & Racks', 'Deep Dolomite Scouting Experience'],
      image: '/images/fleet/autosella_2018_09.jpg',
      badge: 'Film & Media'
    }
  ];

  return (
    <div className="pt-24 pb-20 px-6 lg:px-16 max-w-7xl mx-auto bg-[#F8F6F0] min-h-screen">
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-2">
          Fleet Authority
        </span>
        <h1 className="font-editorial text-5xl sm:text-7xl text-[#0E1117] mb-6">
          The 25-Vehicle <span className="italic text-[#C5A880]">Collection</span>
        </h1>
        <p className="text-lg text-[#0E1117]/80 font-light leading-relaxed">
          Explore our complete fleet of 25 vehicles, from Mercedes-Benz executive sedans and VIP V-Class lounges, to 4MATIC minibuses, large touring coaches, and specialized support units.
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
                onClick={() => openInquiryModal('Fleet Request', `Vehicle: ${vehicle.name}\nCapacity: ${vehicle.passengers} Pax, ${vehicle.luggage}\nTier: ${vehicle.subtitle}\n\nPlease advise on vehicle availability and rate.`)}
                className="px-4 py-2 bg-[#0E1117] text-[#F8F6F0] hover:bg-[#C5A880] hover:text-[#0E1117] font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-1.5 shadow-md"
              >
                <span>Reserve</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 max-w-7xl mx-auto bg-[#0E1117] text-[#F8F6F0] p-10 md:p-16 rounded-3xl flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden border border-white/10">
        <div className="relative z-10 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-2">
            Consortium Scale
          </span>
          <h2 className="font-editorial text-4xl mb-4 text-white">Need a Multi-Vehicle Fleet Charter?</h2>
          <p className="text-[#F8F6F0]/80 font-light mb-8 md:mb-0 leading-relaxed text-sm">
            For large corporate events, VIP weddings in the Dolomites, or complex film production logistics, our dispatch coordinators can assemble multiple Mercedes sedans, V-Class vans, and coaches seamlessly.
          </p>
        </div>
        <button 
          onClick={() => openInquiryModal('Custom Fleet Charter', 'I require a custom multi-vehicle charter for an event...')}
          className="relative z-10 w-full md:w-auto px-8 py-4 bg-[#C5A880] text-[#0E1117] font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors rounded-xl flex items-center justify-center gap-2 shadow-xl"
        >
          <span>Inquire Multi-Vehicle</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

