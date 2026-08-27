import React from 'react';
import { FLEET } from '../../../data/fleet';
import { useAppStore } from '../../../store/useAppStore';
import { Users, Briefcase, Check, ArrowRight, ShieldCheck } from 'lucide-react';

export const AdventureFleetPage: React.FC = () => {
  const { openBookingModal } = useAppStore();

  const specializedUnits = [
    {
      title: 'Disabled Passenger Transport (Accessible Wheelchair Lift)',
      desc: 'Vehicle equipped with an electric/hydraulic wheelchair ramp and ISO 4-point safety restraint system. Capacity: 1 wheelchair user + up to 7 accompanying guests. Door-to-door assistance and train platform escort.',
      image: '/images/fleet/autosella_mercedes-v-05.jpg'
    },
    {
      title: 'Bike & Motorbike Alpine Shuttle Trailer',
      desc: 'Heavy-duty aerodynamic trailer capable of carrying up to 10 bicycles/e-bikes or 2–3 motorbikes with luggage. Available for Dolomites tours, return transfers after bike tours, and breakdown recovery.',
      image: '/images/fleet/mercedes-vito-ski-trailer.jpg'
    },
    {
      title: 'Film & Photo Production Logistics Vehicle',
      desc: 'Specialized 4x4 transport and on-location production support for commercial filming, fashion photo shoots, and television crews in the Dolomites.',
      image: '/images/fleet/autosella_filmproduktion_01.jpg'
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#181B22] mb-3">
          Our 25-Vehicle Modern Fleet
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          From luxury Mercedes sedans to 8-passenger 4MATIC ski minibuses, 56-seat touring coaches, wheelchair-accessible vehicles, and mountain bike trailers.
        </p>
      </div>

      {/* Main Fleet Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {FLEET.map((v) => (
          <div key={v.id} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="h-56 rounded-2xl overflow-hidden mb-5 bg-slate-900">
                <img src={v.image} alt={v.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-[#181B22] mb-1">{v.name}</h3>
              <p className="text-xs font-bold text-[#D6A56E] mb-3">{v.subtitle}</p>
              <p className="text-xs text-slate-600 mb-5 leading-relaxed">{v.tagline}</p>

              <div className="p-3 bg-[#FAF9F5] rounded-xl border border-slate-200/80 mb-6 text-xs text-slate-700 space-y-1">
                <div className="flex justify-between">
                  <span>Passenger Capacity:</span>
                  <strong className="text-[#181B22]">{v.passengers} Pax</strong>
                </div>
                <div className="flex justify-between">
                  <span>Luggage Allowance:</span>
                  <strong className="text-[#181B22]">{v.luggage} Standard Bags</strong>
                </div>
                <div className="flex justify-between">
                  <span>Winter Ski Capacity:</span>
                  <strong className="text-[#1B3B2B]">⛷️ {v.skis} Pairs</strong>
                </div>
              </div>

              <ul className="space-y-1.5 mb-6 text-xs text-slate-600">
                {v.features.slice(0, 3).map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#D6A56E] flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => openBookingModal(v.id)}
              className="w-full py-3 bg-[#181B22] hover:bg-[#D6A56E] hover:text-[#181B22] text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <span>Book Vehicle</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Specialized Vehicles Section */}
      <h2 className="text-2xl font-bold text-[#181B22] mb-6">Specialized Vehicles & Equipment</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {specializedUnits.map((u, i) => (
          <div key={i} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="h-48 rounded-2xl overflow-hidden mb-5 bg-slate-900">
                <img src={u.image} alt={u.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-base font-bold text-[#181B22] mb-2">{u.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">{u.desc}</p>
            </div>

            <button
              onClick={() => openBookingModal()}
              className="w-full py-2.5 bg-[#FAF9F5] border border-slate-300 hover:border-[#D6A56E] text-[#181B22] font-bold text-xs rounded-xl transition-colors"
            >
              Inquire Special Vehicle
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
