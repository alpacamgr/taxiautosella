import React from 'react';
import { FLEET } from '../../../data/fleet';
import { useAppStore } from '../../../store/useAppStore';
import { Users, Briefcase, ArrowRight, ShieldCheck } from 'lucide-react';

export const AdventureFleetPage: React.FC = () => {
  const { openBookingModal } = useAppStore();

  return (
    <div className="py-16 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="max-w-2xl mb-12">
        <h1 className="text-3xl sm:text-5xl font-black text-white font-display mb-3">
          4x4 Ski & Mountain Bike Fleet
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          Permanent Mercedes 4MATIC all-wheel drive, oversized aerodynamic roof ski boxes, and certified summer bike trailers for up to 8 mountain bikes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FLEET.map((v) => (
          <div key={v.id} className="bg-[#0F172A] rounded-3xl p-6 border border-sky-900/60 shadow-xl flex flex-col justify-between hover:border-sky-400 transition-colors">
            <div>
              <div className="h-56 rounded-2xl overflow-hidden mb-5 bg-slate-900">
                <img src={v.image} alt={v.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-black text-white font-display mb-1">{v.name}</h3>
              <p className="text-xs text-sky-400 font-bold mb-3">{v.subtitle}</p>
              <p className="text-xs text-slate-300 mb-6 leading-relaxed">{v.tagline}</p>

              <div className="p-3 bg-sky-950/60 rounded-xl border border-sky-900/50 mb-6 text-xs text-slate-300 space-y-1.5">
                <div className="flex justify-between">
                  <span>Passenger Capacity:</span>
                  <strong className="text-white">{v.passengers} Pax</strong>
                </div>
                <div className="flex justify-between">
                  <span>Winter Ski Capacity:</span>
                  <strong className="text-sky-300">⛷️ {v.skis} Pairs</strong>
                </div>
                <div className="flex justify-between">
                  <span>Summer Bike Capacity:</span>
                  <strong className="text-[#EA580C]">🚲 Up to 8 Bikes</strong>
                </div>
              </div>
            </div>

            <button
              onClick={() => openBookingModal(v.id)}
              className="w-full py-3.5 bg-[#EA580C] hover:bg-[#c2410c] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <span>Book Vehicle</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
