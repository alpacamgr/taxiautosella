import React, { useState } from 'react';
import { FLEET } from '../../../data/fleet';
import { useAppStore } from '../../../store/useAppStore';
import { Check, ArrowRight } from 'lucide-react';

export const TechFleetPage: React.FC = () => {
  const { openInquiryModal } = useAppStore();
  const [activeCategory, setActiveCategory] = useState<'all' | 'sedan' | 'luxury_van' | 'minibus' | 'coach' | 'specialized'>('all');

  const specializedUnits = [
    {
      id: 'accessible',
      name: 'Mercedes Wheelchair Lift Accessible Van',
      subtitle: 'Specialized Mobility Transport',
      tagline: 'Equipped with electric/hydraulic wheelchair ramp and ISO 4-point safety restraint system. Capacity: 1 wheelchair + 7 passengers.',
      category: 'specialized' as const,
      passengers: '1 Wheelchair + 7',
      luggage: '4 Bags',
      skis: '4 Pairs',
      image: '/images/fleet/mercedes-vito-minibus-side.jpg',
      badge: 'Certified Accessible',
      features: ['Electric / Hydraulic Ramp', 'ISO 4-Point Floor Restraints', 'Qualified Assistance Chauffeur', 'Climate Controlled Cabin']
    },
    {
      id: 'trailer-bike',
      name: 'Heavy-Duty Mountain Bike & Gear Trailer',
      subtitle: 'Outdoor Equipment Logistics',
      tagline: 'Weatherproof enclosed trailer accommodating up to 10 downhill/e-bikes or 3 motorbikes for the Sella Ronda loop and Alps touring.',
      category: 'specialized' as const,
      passengers: 'Trailer Unit',
      luggage: '10 MTBs / 30 Skis',
      skis: '30 Pairs',
      image: '/images/fleet/mercedes-vito-ski-trailer.jpg',
      badge: 'Summer & Winter',
      features: ['Up to 10 Mountain Bikes', 'Enclosed Weatherproof Shell', 'Secure Wheel Clamping', 'Full Breakdown Recovery Ready']
    },
    {
      id: 'film-support',
      name: '4x4 Film & Photo Production Support Unit',
      subtitle: 'Commercial Media Crew Transport',
      tagline: 'Heavy-duty 4x4 production support vehicle for TV, film, and commercial photoshoot crews working on Dolomites mountain passes.',
      category: 'specialized' as const,
      passengers: '5 Crew',
      luggage: 'Heavy Production Gear',
      skis: 'Location Gear',
      image: '/images/fleet/autosella_2018_09.jpg',
      badge: 'Media & Commercial',
      features: ['220V Power Inverters Onboard', 'Heavy Gear Shelving & Racking', 'Mountain Pass Scouting Knowledge', 'All-Weather 4x4 Drivetrain']
    }
  ];

  const allVehicles = [
    ...FLEET.map(f => ({ ...f, passengers: `${f.passengers} Pax`, luggage: `${f.luggage} Bags`, skis: `${f.skis} Pairs` })),
    ...specializedUnits
  ];

  const filteredVehicles = activeCategory === 'all' 
    ? allVehicles 
    : allVehicles.filter(v => v.category === activeCategory);

  return (
    <div className="py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#D97706] block mb-2">
          Fleet Authority
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mb-3">
          The 25-Vehicle Modern Fleet
        </h1>
        <p className="text-base text-slate-600 leading-relaxed font-normal">
          Every vehicle in the Taxi Auto Sella fleet is equipped with permanent Mercedes-Benz 4MATIC all-wheel-drive systems, premium acoustic comfort glass, and winter mountain pass equipment.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-slate-200">
        {[
          { id: 'all', label: 'All 25 Vehicles' },
          { id: 'sedan', label: 'Executive Sedans' },
          { id: 'luxury_van', label: 'VIP Minivans (V-Class)' },
          { id: 'minibus', label: 'Alpine Minibuses (Vito 4x4)' },
          { id: 'coach', label: 'Group Coaches (16–56 Seats)' },
          { id: 'specialized', label: 'Specialized (Accessible / Trailers)' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveCategory(tab.id as any)}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
              activeCategory === tab.id
                ? 'bg-[#0A192F] text-white shadow-md'
                : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Vehicle Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {filteredVehicles.map((v) => (
          <div 
            key={v.id} 
            className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#D97706]/40 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="h-56 rounded-2xl overflow-hidden mb-5 bg-slate-900 relative">
                <img 
                  src={v.image} 
                  alt={v.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                {v.badge && (
                  <span className="absolute top-3 right-3 px-3 py-1 bg-[#0A192F]/90 text-[#F59E0B] text-[10px] font-extrabold uppercase tracking-wider rounded-lg backdrop-blur-sm border border-slate-700">
                    {v.badge}
                  </span>
                )}
              </div>
              
              <h3 className="text-xl font-extrabold text-slate-900 mb-1">{v.name}</h3>
              <p className="text-xs font-bold text-[#D97706] uppercase tracking-wide mb-3">{v.subtitle}</p>
              <p className="text-xs text-slate-600 mb-5 leading-relaxed font-normal">{v.tagline}</p>

              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 mb-6 text-xs text-slate-700 space-y-1.5 font-medium">
                <div className="flex justify-between">
                  <span>Passenger Capacity:</span>
                  <strong className="text-slate-900 font-bold">{v.passengers}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Luggage Capacity:</span>
                  <strong className="text-slate-900 font-bold">{v.luggage}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Winter Ski / Gear:</span>
                  <strong className="text-[#D97706] font-bold">{v.skis}</strong>
                </div>
              </div>

              <ul className="space-y-1.5 mb-6 text-xs text-slate-600 font-medium">
                {v.features.slice(0, 3).map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#D97706] flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => openInquiryModal('Fleet Request', `Vehicle: ${v.name}\nCategory: ${v.subtitle}\nCapacity: ${v.passengers}, ${v.luggage}\n\nPlease check vehicle availability.`)}
              className="w-full py-3 bg-[#0A192F] hover:bg-[#D97706] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <span>Inquire & Reserve</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Multi-Vehicle Banner */}
      <div className="bg-[#0A192F] text-white p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-2xl">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#F59E0B] block mb-2">
            Consortium Charter Service
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
            Organizing a Large Group, Wedding, or Corporate Event?
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            We coordinate simultaneous multi-vehicle transfers with our 25 Mercedes 4MATIC sedans, minibuses, and touring coaches across the Dolomites.
          </p>
        </div>
        <button
          onClick={() => openInquiryModal('Group Charter Inquiry', 'I need to arrange multiple vehicles for an event in Val Gardena...')}
          className="w-full md:w-auto px-8 py-4 bg-[#F59E0B] hover:bg-[#d97706] text-black font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg flex-shrink-0 flex items-center justify-center gap-2"
        >
          <span>Multi-Vehicle Inquiry</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
