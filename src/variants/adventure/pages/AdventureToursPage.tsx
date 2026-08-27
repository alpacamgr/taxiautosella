import React from 'react';
import { EXCURSIONS } from '../../../data/excursions';
import { useAppStore } from '../../../store/useAppStore';
import { Clock, Check, ArrowRight } from 'lucide-react';

export const AdventureToursPage: React.FC = () => {
  const { openBookingModal } = useAppStore();

  return (
    <div className="py-16 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="max-w-2xl mb-12">
        <h1 className="text-3xl sm:text-5xl font-black text-white font-display mb-3">
          Dolomite Tours & Excursions
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          Full-day mountain excursions with local mountain drivers. Sella Ronda loops, Venice day trips, Verona, and Lake Garda.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {EXCURSIONS.map((tour) => (
          <div key={tour.id} className="bg-[#0F172A] rounded-3xl overflow-hidden border border-sky-900/60 shadow-xl flex flex-col justify-between hover:border-sky-400 transition-colors">
            <div>
              <div className="h-64 relative bg-slate-900">
                <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-[#071526]/90 border border-sky-800 text-sky-400 px-3 py-1 rounded-full text-xs font-bold">
                  {tour.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black text-white font-display mb-1">{tour.title}</h3>
                <p className="text-xs text-sky-400 font-bold mb-4">{tour.subtitle}</p>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">{tour.description}</p>
                <ul className="space-y-2 mb-6 text-xs text-slate-300">
                  {tour.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#EA580C] flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-6 pt-0 border-t border-sky-950 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest block">Starting From</span>
                <span className="font-extrabold text-xl text-white">{tour.priceFrom}</span>
              </div>
              <button
                onClick={() => openBookingModal()}
                className="px-6 py-3 bg-[#EA580C] hover:bg-[#c2410c] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center gap-2"
              >
                <span>Book Tour</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
