import React from 'react';
import { useAppStore } from '../../../store/useAppStore';
import { ArrowRight, Clock, MapPin, Sparkles } from 'lucide-react';

export const LuxuryExcursionsPage: React.FC = () => {
  const { openInquiryModal } = useAppStore();

  const excursions = [
    {
      title: 'Venice Lagoon & Grand Canal',
      duration: 'Full Day (approx. 10h)',
      desc: 'Descend from the Alps to the Adriatic. Explore the canals, St. Mark\'s Square, and the rich history of La Serenissima in absolute comfort.',
      img: '/images/excursions/venice-lagoon-tour.jpg',
      badge: 'Bestselling Excursion'
    },
    {
      title: 'Verona Arena & Lake Garda Sirmione',
      duration: 'Full Day (approx. 9h)',
      desc: 'Visit the city of Romeo & Juliet and the grand Roman Arena, followed by a scenic drive along the olive-lined shores of Lake Garda.',
      img: '/images/excursions/lake-garda-sirmione-tour.jpg',
      badge: 'Culture & Romance'
    },
    {
      title: 'Innsbruck Imperial & Swarovski Crystal Worlds',
      duration: 'Full Day (approx. 8h)',
      desc: 'Cross the Brenner Pass to Austria. See the Golden Roof, the Imperial Hofburg Palace, and marvel at the Swarovski Crystal Worlds in Wattens.',
      img: '/images/excursions/innsbruck-imperial-tour.jpg',
      badge: 'Austria Alpine Tour'
    },
    {
      title: 'Great Dolomites Road & Passo Sella Loop',
      duration: 'Full Day (approx. 7h)',
      desc: 'A breathtaking high Alpine journey crossing Passo Sella, Passo Gardena, Passo Pordoi, and Passo Campolongo around the majestic Sella Massif.',
      img: '/images/fleet/autosella_2018_09.jpg',
      badge: 'UNESCO World Heritage'
    },
    {
      title: 'Bolzano Ötzi Museum & Merano Thermal Spa',
      duration: 'Half or Full Day (5–8h)',
      desc: 'Discover Ötzi the 5,300-year-old Iceman in Bolzano, then stroll the Mediterranean promenade and botanical gardens of Merano.',
      img: '/images/fleet/autosella_2018_04.jpg',
      badge: 'South Tyrol Heritage'
    },
    {
      title: 'Romantic Alpine Hut Dinners & Night Shuttles',
      duration: 'Evening Tour',
      desc: 'Private winter or summer evening transport to traditional high-altitude mountain refuges for authentic Ladin cuisine, followed by safe return to your chalet.',
      img: '/images/fleet/mercedes-v-class-luxury.jpg',
      badge: 'Culinary Evening'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F6F0] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <header className="mb-16 max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-2">
            Curated Experiences
          </span>
          <h1 className="font-editorial text-5xl lg:text-7xl font-normal text-[#0E1117] mb-6">
            Organised <span className="italic text-[#C5A880]">Tours</span>
          </h1>
          <p className="text-[#0E1117]/80 text-lg font-light leading-relaxed">
            Let our native mountain chauffeurs guide you through the cultural, historical, and natural wonders surrounding Val Gardena and Northern Italy.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {excursions.map((exc, i) => (
            <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-xl border border-[#0E1117]/10 hover:border-[#C5A880] transition-all flex flex-col sm:flex-row">
              <div className="w-full sm:w-2/5 aspect-[4/3] sm:aspect-auto sm:h-full bg-slate-900 overflow-hidden relative">
                <img 
                  src={exc.img} 
                  alt={exc.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
                {exc.badge && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#0E1117]/90 text-[#C5A880] text-[9px] font-bold uppercase tracking-wider rounded-md backdrop-blur-sm border border-[#C5A880]/30 sm:hidden">
                    {exc.badge}
                  </span>
                )}
              </div>
              <div className="w-full sm:w-3/5 p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C5A880]">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{exc.duration}</span>
                    </div>
                  </div>
                  <h3 className="font-editorial text-2xl text-[#0E1117] mb-2.5 leading-tight">{exc.title}</h3>
                  <p className="text-xs text-[#0E1117]/80 font-light leading-relaxed mb-6">
                    {exc.desc}
                  </p>
                </div>
                <button 
                  onClick={() => openInquiryModal('Excursion Inquiry', `Excursion: ${exc.title}\nDuration: ${exc.duration}\n\nPlease advise on custom itinerary, pickup timing, and vehicle options.`)}
                  className="self-start text-xs uppercase tracking-wider font-bold text-[#0E1117] hover:text-[#C5A880] transition-colors flex items-center gap-2 pt-2 border-t border-[#0E1117]/10 w-full justify-between group-hover:border-[#C5A880]"
                >
                  <span>Inquire Private Tour</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

