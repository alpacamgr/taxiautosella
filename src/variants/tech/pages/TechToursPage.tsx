import React from 'react';
import { EXCURSIONS } from '../../../data/excursions';
import { useAppStore } from '../../../store/useAppStore';
import { Clock, Check, ArrowRight } from 'lucide-react';

export const TechToursPage: React.FC = () => {
  const { openBookingModal } = useAppStore();

  const additionalDestinations = [
    {
      title: 'Cortina d’Ampezzo — Winter Olympic Capital',
      subtitle: 'Passo Falzarego & Passo Giau Scenic Route',
      duration: 'Full Day (7–8 Hours)',
      priceFrom: '€380 / van',
      highlights: [
        'Panoramic high pass journey across the Dolomites',
        'Shopping and leisure in Cortina town center',
        'Direct hotel pickup and return'
      ],
      desc: 'Visit the Queen of the Dolomites and winter Olympic host city in luxury Mercedes comfort.'
    },
    {
      title: 'Bolzano & Merano — Spa Town & Ötzi the Iceman',
      subtitle: 'South Tyrolean Cultural Day Trip',
      duration: 'Full Day (6–8 Hours)',
      priceFrom: '€320 / van',
      highlights: [
        'South Tyrol Museum of Archaeology (Ötzi)',
        'Merano thermal spa promenade & historic Kurhaus',
        'Traditional wine cellars & fruit market'
      ],
      desc: 'Discover South Tyrol’s historic capital and the beautiful thermal spa town of Merano.'
    },
    {
      title: 'Mountain Hut Dinners & Evening Sledge Rides',
      subtitle: 'Traditional Alpine Chalet Experience',
      duration: 'Evening (4–5 Hours)',
      priceFrom: '€180 / van',
      highlights: [
        '4x4 snow transfer to high altitude mountain huts',
        'Traditional South Tyrolean dinner & wine',
        'Optional torchlit sledge descent'
      ],
      desc: 'An authentic alpine evening with comfortable 4x4 snow transport and safe return to your hotel.'
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-3">
          Organised Tours & Trips
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          We organize trips for you whatever time of year to a great many scenic destinations and cultural cities across northern Italy and central Europe.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {EXCURSIONS.map((tour) => (
          <div key={tour.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between group">
            <div>
              <div className="h-64 overflow-hidden relative bg-slate-900">
                <img src={tour.image} alt={tour.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-[#0A192F] text-[#F59E0B] text-xs font-bold px-3.5 py-1 rounded-full">
                  {tour.duration}
                </div>
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{tour.title}</h3>
                <p className="text-xs font-bold text-[#D97706] mb-3">{tour.subtitle}</p>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">{tour.description}</p>
                <ul className="space-y-2 mb-6 text-xs text-slate-700">
                  {tour.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#D97706] flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-7 pt-0 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest block">Private Van Tour</span>
                <span className="font-extrabold text-xl text-slate-900">{tour.priceFrom}</span>
              </div>
              <button
                onClick={() => openBookingModal()}
                className="px-6 py-3 bg-[#0A192F] hover:bg-[#D97706] text-white font-bold text-xs rounded-xl transition-colors flex items-center gap-2"
              >
                <span>Book Tour</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Cultural & Evening Tours */}
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Additional Day Excursions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {additionalDestinations.map((t, idx) => (
          <div key={idx} className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-block px-2.5 py-1 rounded-full bg-slate-100 text-xs font-bold text-slate-600 mb-3">
                {t.duration}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">{t.title}</h3>
              <p className="text-xs font-bold text-[#D97706] mb-3">{t.subtitle}</p>
              <p className="text-xs text-slate-600 mb-5 leading-relaxed">{t.desc}</p>
              <ul className="space-y-1.5 mb-6 text-xs text-slate-600">
                {t.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#D97706] flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-sm font-extrabold text-slate-900">{t.priceFrom}</span>
              <button
                onClick={() => openBookingModal()}
                className="px-4 py-2 bg-[#D97706] text-white font-bold text-xs rounded-xl hover:bg-[#b45309] transition-colors"
              >
                Inquire
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
