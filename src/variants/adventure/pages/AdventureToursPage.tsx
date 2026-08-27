import React from 'react';
import { EXCURSIONS } from '../../../data/excursions';
import { useAppStore } from '../../../store/useAppStore';
import { Clock, Check, ArrowRight, Mountain, Sparkles } from 'lucide-react';

export const AdventureToursPage: React.FC = () => {
  const { openBookingModal } = useAppStore();

  const additionalTours = [
    {
      title: 'Cortina d’Ampezzo — Olympic Capital of the Dolomites',
      subtitle: 'Passo Falzarego & Passo Giau Scenic Route',
      duration: 'Full Day (7–8 Hours)',
      priceFrom: '€380 / van',
      highlights: [
        'Scenic high pass drive through Passo Falzarego & Giau',
        'Explore luxury shopping on Corso Italia in Cortina',
        'Cinque Torri & Tofana panoramic photo stops',
        'Direct hotel pickup in Val Gardena'
      ],
      desc: 'Discover the world-famous Queen of the Dolomites. Experience high-altitude passes, chic alpine culture, and historic 1956/2026 Olympic heritage.'
    },
    {
      title: 'Bolzano & Merano — Spa Town & Ötzi the Iceman',
      subtitle: 'South Tyrolean Wine Road & Trauttmansdorff Gardens',
      duration: 'Full Day (6–8 Hours)',
      priceFrom: '€320 / van',
      highlights: [
        'South Tyrol Museum of Archaeology (Ötzi the Iceman)',
        'Merano thermal spa town & historic Kurhaus promenade',
        'Gardens of Trauttmansdorff Castle (Empress Sissi)',
        'Traditional fruit market & Walther Square'
      ],
      desc: 'A wonderful cultural excursion descending into the warm Mediterranean micro-climate of Bolzano and Merano, surrounded by vineyards and apple orchards.'
    },
    {
      title: 'Mountain Hut Dinners & Evening Sledge Rides',
      subtitle: 'Traditional South Tyrolean Alpine Chalet Evenings',
      duration: 'Evening (4–5 Hours)',
      priceFrom: '€180 / van',
      highlights: [
        'Private 4x4 snow transport to high mountain huts (Rasciesa, Monte Pana, Dantercepies)',
        'Traditional candlelit dinner with dumplings, strudel, and local wine',
        'Optional torchlit sledge descent under the stars',
        'Safe late-night return to your hotel door'
      ],
      desc: 'An unforgettable alpine evening. We handle the snowy mountain ascent and ensure you return safely to your hotel after an authentic South Tyrolean feast.'
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#181B22] mb-3">
          Organised Tours & Scenic Trips
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Experience northern Italy and the Dolomites with native chauffeurs who know every panoramic curve, historic landmark, and hidden mountain hut.
        </p>
      </div>

      {/* Main Catalog */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {EXCURSIONS.map((tour) => (
          <div key={tour.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between group">
            <div>
              <div className="h-64 overflow-hidden relative bg-slate-900">
                <img src={tour.image} alt={tour.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-[#181B22] text-[#D6A56E] text-xs font-bold px-3.5 py-1 rounded-full">
                  {tour.duration}
                </div>
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-bold text-[#181B22] mb-1">{tour.title}</h3>
                <p className="text-xs font-bold text-[#D6A56E] mb-3">{tour.subtitle}</p>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">{tour.description}</p>
                <ul className="space-y-2 mb-6 text-xs text-slate-700">
                  {tour.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#1B3B2B] flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-7 pt-0 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest block">Private Van Tour</span>
                <span className="font-extrabold text-xl text-[#181B22]">{tour.priceFrom}</span>
              </div>
              <button
                onClick={() => openBookingModal()}
                className="px-6 py-3 bg-[#181B22] hover:bg-[#D6A56E] hover:text-[#181B22] text-white font-bold text-xs rounded-xl transition-colors flex items-center gap-2"
              >
                <span>Book Excursion</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Cultural & Evening Tours */}
      <h2 className="text-2xl font-bold text-[#181B22] mb-6">Additional Cultural & Mountain Experiences</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {additionalTours.map((t, idx) => (
          <div key={idx} className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-block px-2.5 py-1 rounded-full bg-[#FAF9F5] border border-slate-200 text-xs font-bold text-slate-600 mb-3">
                {t.duration}
              </div>
              <h3 className="text-lg font-bold text-[#181B22] mb-1">{t.title}</h3>
              <p className="text-xs font-bold text-[#D6A56E] mb-3">{t.subtitle}</p>
              <p className="text-xs text-slate-600 mb-5 leading-relaxed">{t.desc}</p>
              <ul className="space-y-1.5 mb-6 text-xs text-slate-600">
                {t.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#D6A56E] flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-sm font-extrabold text-[#181B22]">{t.priceFrom}</span>
              <button
                onClick={() => openBookingModal()}
                className="px-4 py-2 bg-[#D6A56E] text-[#181B22] font-bold text-xs rounded-xl hover:bg-[#c4935d] transition-colors"
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
