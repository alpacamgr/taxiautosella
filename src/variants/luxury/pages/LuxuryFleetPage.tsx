import React from 'react';
import { FLEET } from '../../../data/fleet';
import { useAppStore } from '../../../store/useAppStore';
import { Users, Briefcase, Check, ArrowRight } from 'lucide-react';

export const LuxuryFleetPage: React.FC = () => {
  const { openBookingModal } = useAppStore();

  return (
    <div className="py-20 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-16">
        <h1 className="font-editorial text-4xl sm:text-6xl text-[#0E1117] mb-4">
          The 25-Vehicle <span className="italic text-[#C5A880]">Collection</span>
        </h1>
        <p className="text-base text-[#0E1117]/70 font-light leading-relaxed">
          Explore our complete fleet of Mercedes-Benz sedans, VIP V-Class lounges, 4MATIC minibuses, and luxury touring coaches.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FLEET.map((vehicle) => (
          <div key={vehicle.id} className="bg-white p-6 shadow-xl rounded-2xl flex flex-col justify-between border border-[#0E1117]/5 group">
            <div>
              <div className="h-60 overflow-hidden mb-6 rounded-xl bg-slate-900">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="font-editorial text-2xl text-[#0E1117] mb-1">{vehicle.name}</h3>
              <p className="text-xs text-[#C5A880] font-medium tracking-wide uppercase mb-3">{vehicle.subtitle}</p>
              <p className="text-xs text-[#0E1117]/70 font-light leading-relaxed mb-6">
                {vehicle.tagline}
              </p>

              <ul className="space-y-2 mb-6 text-xs text-[#0E1117]/80">
                {vehicle.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[#0E1117]/10 flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-[#0E1117]/60">
                <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {vehicle.passengers} Pax</span>
                <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" /> {vehicle.luggage} Bags</span>
              </div>
              <button 
                onClick={() => openBookingModal(vehicle.id)}
                className="px-4 py-2 bg-[#0E1117] text-[#F8F6F0] hover:bg-[#C5A880] hover:text-[#0E1117] font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-1.5"
              >
                <span>Reserve</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
