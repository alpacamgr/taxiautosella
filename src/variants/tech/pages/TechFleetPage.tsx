import React from 'react';
import { FLEET } from '../../../data/fleet';
import { useAppStore } from '../../../store/useAppStore';
import { Users, Briefcase, Check, ArrowRight } from 'lucide-react';

export const TechFleetPage: React.FC = () => {
  const { openBookingModal } = useAppStore();

  return (
    <div className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="max-w-2xl mb-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-3">
          Our Vehicle Fleet & Capacities
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          100% 4MATIC all-wheel-drive Mercedes vehicles. Compare passenger limits, luggage volumes, and winter ski/summer bike equipment allowances.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FLEET.map((v) => (
          <div key={v.id} className="bg-slate-50 rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="h-52 rounded-2xl overflow-hidden mb-5 bg-slate-900">
                <img src={v.image} alt={v.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">{v.name}</h3>
              <p className="text-xs font-semibold text-emerald-700 mb-3">{v.subtitle}</p>
              <p className="text-xs text-slate-600 mb-6 leading-relaxed">{v.tagline}</p>

              <div className="grid grid-cols-3 gap-2 py-3 px-3 bg-white rounded-xl border border-slate-200 text-center mb-6 text-xs">
                <div>
                  <span className="font-bold text-slate-900 block">{v.passengers}</span>
                  <span className="text-[10px] text-slate-500">Max Pax</span>
                </div>
                <div>
                  <span className="font-bold text-slate-900 block">{v.luggage}</span>
                  <span className="text-[10px] text-slate-500">Luggage</span>
                </div>
                <div>
                  <span className="font-bold text-emerald-700 block">⛷️ {v.skis}</span>
                  <span className="text-[10px] text-slate-500">Ski Pairs</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => openBookingModal(v.id)}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <span>Select {v.name.split(' ')[1] || 'Vehicle'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
