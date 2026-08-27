import React from 'react';
import { useAppStore } from '../../../store/useAppStore';
import { Clock, MapPin, ArrowRight } from 'lucide-react';

export const TechRoutesPage: React.FC = () => {
  const { openBookingModal } = useAppStore();

  const allAirports = [
    { name: 'Innsbruck Airport (INN)', distance: '120 km', duration: '1h 30m', price: 'from €240', desc: 'Closest major international gateway with direct highway access over the Brenner Pass.' },
    { name: 'Verona Valerio Catullo (VRN)', distance: '190 km', duration: '2h 05m', price: 'from €340', desc: 'Ideal for travelers from the UK, Scandinavia, and southern European connections.' },
    { name: 'Munich Franz Josef Strauss (MUC)', distance: '310 km', duration: '3h 30m', price: 'from €480', desc: 'Primary global hub for North American, Asian, and long-haul international flights.' },
    { name: 'Venice Marco Polo (VCE)', distance: '270 km', duration: '3h 15m', price: 'from €440', desc: 'Scenic transfer passing the Belluno pre-Alps directly into Val Gardena.' },
    { name: 'Milan Malpensa (MXP)', distance: '350 km', duration: '3h 55m', price: 'from €540', desc: 'Direct luxury Mercedes transfer for intercontinental and trans-Atlantic arrivals.' },
    { name: 'Bolzano Airport (BZO)', distance: '42 km', duration: '0h 45m', price: 'from €110', desc: 'Local regional airport with direct winter charter flights (SkyAlps).' },
  ];

  return (
    <div className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="max-w-2xl mb-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-3">
          Airport Transfer Routes & Rates
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          Guaranteed upfront fixed pricing. Highway tolls, mountain pass permits, meet & greet, and flight delay tracking are 100% included.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allAirports.map((r, i) => (
          <div key={i} className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-emerald-500 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Fixed Quote
                </span>
                <span className="text-lg font-extrabold text-slate-900">{r.price}</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">{r.name}</h3>
              <div className="text-xs text-slate-500 flex items-center gap-3 mb-3">
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {r.distance}</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {r.duration}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">{r.desc}</p>
            </div>

            <button
              onClick={() => openBookingModal()}
              className="w-full py-2.5 bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Book Route</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
