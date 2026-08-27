import React, { useState } from 'react';
import { FLEET, VehicleCategory } from '../../data/fleet';
import { useAppStore } from '../../store/useAppStore';
import { 
  Users, 
  Briefcase, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  Filter
} from 'lucide-react';

interface Props {
  themeVariant?: 'luxury' | 'tech' | 'adventure';
}

export const FleetShowcase: React.FC<Props> = ({ themeVariant = 'luxury' }) => {
  const { openBookingModal, t } = useAppStore();
  const [filter, setFilter] = useState<'all' | 'sedan' | 'minibus' | 'coach' | 'accessible'>('all');

  const filteredFleet = filter === 'all' 
    ? FLEET 
    : FLEET.filter(v => v.category === filter || (filter === 'minibus' && v.category === 'luxury_van'));

  const isLuxury = themeVariant === 'luxury';
  const isTech = themeVariant === 'tech';
  const isAdventure = themeVariant === 'adventure';

  return (
    <section id="fleet" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${
          isLuxury 
            ? 'bg-gold-500/10 text-gold-400 border border-gold-500/30' 
            : isTech 
            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
            : 'bg-sky-500/20 text-sky-300 border border-sky-400/30'
        }`}>
          <Sparkles className="w-3.5 h-3.5" />
          <span>Mercedes-Benz 4MATIC Fleet</span>
        </div>

        <h2 className={`text-2xl sm:text-4xl font-extrabold tracking-tight mb-4 ${
          isTech ? 'text-slate-900' : isLuxury ? 'font-serif gold-gradient-text' : 'text-white'
        }`}>
          {t('fleet.title')}
        </h2>

        <p className={`text-sm sm:text-base leading-relaxed ${isTech ? 'text-slate-600' : 'text-slate-300'}`}>
          {t('fleet.subtitle')}
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {[
            { id: 'all', label: 'All 25 Vehicles' },
            { id: 'sedan', label: 'Executive Sedans' },
            { id: 'minibus', label: '4MATIC Minivans & V-Class' },
            { id: 'coach', label: 'Coaches (16–56 Seats)' },
            { id: 'accessible', label: 'Wheelchair Accessible' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === tab.id
                  ? isLuxury
                    ? 'bg-gold-500 text-black shadow-lg shadow-gold-500/20 font-bold'
                    : isTech
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/20 font-bold'
                    : 'bg-sky-500 text-white shadow-lg shadow-sky-500/30 font-bold'
                  : isTech
                  ? 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Fleet Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredFleet.map((vehicle) => (
          <div
            key={vehicle.id}
            className={`group rounded-3xl overflow-hidden border transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${
              isTech
                ? 'bg-white border-slate-200 shadow-xl hover:shadow-2xl'
                : isLuxury
                ? 'glass-card-dark border-slate-800 hover:border-gold-500/50 hover:shadow-luxury'
                : 'glass-card-navy border-slate-800 hover:border-sky-400/60 hover:shadow-adventure'
            }`}
          >
            <div>
              {/* Photo Banner with Badges */}
              <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-950">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30" />
                
                {vehicle.badge && (
                  <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold shadow-md ${
                    isLuxury ? 'bg-gold-500 text-black' : isTech ? 'bg-emerald-600 text-white' : 'bg-sky-500 text-white'
                  }`}>
                    {vehicle.badge}
                  </div>
                )}

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                  <span className="text-xs font-semibold text-slate-200 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-white/10">
                    {vehicle.subtitle}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className={`text-lg sm:text-xl font-bold mb-2 ${isTech ? 'text-slate-900' : 'text-white'}`}>
                  {vehicle.name}
                </h3>
                
                <p className={`text-xs leading-relaxed mb-4 ${isTech ? 'text-slate-500' : 'text-slate-400'}`}>
                  {vehicle.tagline}
                </p>

                {/* Capacity Badges */}
                <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-2xl mb-4 bg-slate-800/40 border border-slate-700/50 text-center">
                  <div>
                    <div className="flex items-center justify-center gap-1 text-slate-300 text-xs font-bold">
                      <Users className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{vehicle.passengers}</span>
                    </div>
                    <span className="text-[10px] text-slate-400">Max Pax</span>
                  </div>

                  <div>
                    <div className="flex items-center justify-center gap-1 text-slate-300 text-xs font-bold">
                      <Briefcase className="w-3.5 h-3.5 text-teal-400" />
                      <span>{vehicle.luggage}</span>
                    </div>
                    <span className="text-[10px] text-slate-400">Luggage</span>
                  </div>

                  <div>
                    <div className="flex items-center justify-center gap-1 text-sky-400 text-xs font-bold">
                      <span>⛷️ {vehicle.skis}</span>
                    </div>
                    <span className="text-[10px] text-slate-400">Ski Pairs</span>
                  </div>
                </div>

                {/* Feature Bullet Points */}
                <ul className="space-y-1.5 mb-6 text-xs">
                  {vehicle.features.map((feat, idx) => (
                    <li key={idx} className={`flex items-start gap-2 ${isTech ? 'text-slate-600' : 'text-slate-300'}`}>
                      <Check className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${
                        isLuxury ? 'text-gold-400' : isTech ? 'text-emerald-500' : 'text-sky-400'
                      }`} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className={`p-6 pt-0 mt-auto border-t ${isTech ? 'border-slate-100' : 'border-slate-800/80'}`}>
              <button
                onClick={() => openBookingModal(vehicle.id)}
                className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  isLuxury
                    ? 'bg-gradient-to-r from-gold-500 to-amber-500 hover:from-gold-400 hover:to-amber-400 text-black shadow-md'
                    : isTech
                    ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-md'
                    : 'bg-sky-500 hover:bg-sky-400 text-white shadow-md'
                }`}
              >
                <span>Book This Vehicle</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
