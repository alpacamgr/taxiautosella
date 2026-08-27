import React from 'react';
import { EXCURSIONS } from '../../../data/excursions';
import { useAppStore } from '../../../store/useAppStore';
import { Clock, Check, ArrowRight } from 'lucide-react';

export const LuxuryExcursionsPage: React.FC = () => {
  const { openBookingModal } = useAppStore();

  return (
    <div className="py-20 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-16">
        <h1 className="font-editorial text-4xl sm:text-6xl text-[#0E1117] mb-4">
          Bespoke <span className="italic text-[#C5A880]">Excursions</span> & Day Tours
        </h1>
        <p className="text-base text-[#0E1117]/70 font-light leading-relaxed">
          From panoramic Sella Ronda circuits to private Venetian day trips, discover northern Italy in uncompromising comfort with a native Dolomite chauffeur.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {EXCURSIONS.map((tour) => (
          <div key={tour.id} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-[#0E1117]/5 flex flex-col justify-between group">
            <div>
              <div className="h-72 overflow-hidden bg-slate-900 relative">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#0E1117] text-[#C5A880] px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                  {tour.duration}
                </div>
              </div>

              <div className="p-8">
                <h3 className="font-editorial text-3xl text-[#0E1117] mb-2">{tour.title}</h3>
                <p className="text-xs text-[#C5A880] font-semibold uppercase tracking-widest mb-4">{tour.subtitle}</p>
                <p className="text-xs text-[#0E1117]/70 font-light leading-relaxed mb-6">
                  {tour.description}
                </p>

                <ul className="space-y-2 mb-8 text-xs text-[#0E1117]/80">
                  {tour.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#C5A880] flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-8 pt-0 border-t border-[#0E1117]/5 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-[#0E1117]/40 uppercase tracking-widest block">Private Van Tour</span>
                <span className="font-editorial text-2xl text-[#0E1117]">{tour.priceFrom}</span>
              </div>
              <button
                onClick={() => openBookingModal()}
                className="px-6 py-3 bg-[#0E1117] text-[#F8F6F0] hover:bg-[#C5A880] hover:text-[#0E1117] text-xs font-semibold uppercase tracking-widest rounded-xl transition-colors flex items-center gap-2"
              >
                <span>Inquire Tour</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
