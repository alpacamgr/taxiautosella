import React from 'react';
import { useAppStore } from '../../../store/useAppStore';
import { ArrowRight, Clock } from 'lucide-react';

export const LuxuryExcursionsPage: React.FC = () => {
  const { openInquiryModal } = useAppStore();

  const excursions = [
    {
      title: 'Great Dolomites Road & Passo Sella Loop',
      duration: 'Full Day (approx. 7h)',
      desc: 'A full-day loop over Passo Sella, Gardena, Pordoi and Campolongo, with stops agreed with your driver.',
      img: '/images/excursions/dolomites-sella-road.webp',
      alt: 'Great Dolomites Road curving beneath the Sella Massif',
      badge: 'UNESCO World Heritage'
    },
    {
      title: 'Romantic Alpine Hut Dinners & Night Shuttles',
      duration: 'Evening Tour',
      desc: 'Evening transport to a mountain hut, with a return ride to your accommodation.',
      img: '/images/excursions/alpine-hut-evening.webp',
      alt: 'Traditional Dolomites mountain hut glowing warmly at blue hour',
      badge: 'Culinary Evening'
    },
    {
      title: 'Venice Lagoon & Grand Canal',
      duration: 'Full Day (approx. 10h)',
      desc: 'A full-day return journey to Venice, with drop-off and pickup arranged near the historic centre.',
      img: '/images/excursions/venice-lagoon-tour.jpg',
      alt: 'Venice lagoon and historic waterfront viewed from the water',
      badge: 'Bestselling Excursion'
    },
    {
      title: 'Verona Arena & Lake Garda Sirmione',
      duration: 'Full Day (approx. 9h)',
      desc: 'A day trip combining central Verona with Sirmione on Lake Garda.',
      img: '/images/excursions/lake-garda-sirmione-tour.jpg',
      alt: 'Sirmione peninsula extending into Lake Garda',
      badge: 'Culture & Romance'
    },
    {
      title: 'Innsbruck Imperial & Swarovski Crystal Worlds',
      duration: 'Full Day (approx. 8h)',
      desc: 'A return trip over the Brenner Pass to central Innsbruck and Swarovski Crystal Worlds in Wattens.',
      img: '/images/excursions/innsbruck-golden-roof.webp',
      alt: 'Innsbruck Golden Roof framed by the Nordkette mountains',
      badge: 'Austria Alpine Tour'
    },
    {
      title: 'Bolzano Ötzi Museum & Merano Thermal Spa',
      duration: 'Half or Full Day (5–8h)',
      desc: 'Visit the Ötzi museum in Bolzano, then continue to Merano for its promenade and gardens.',
      img: '/images/excursions/merano-promenade.webp',
      alt: 'Merano riverside promenade with Mediterranean gardens and Alpine peaks',
      badge: 'South Tyrol Heritage'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F6F0] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <header className="mb-16 max-w-3xl">
          <h1 className="font-editorial text-5xl lg:text-7xl font-normal text-[#0E1117] mb-6">
            Day Trips & <span className="italic text-[#C5A880]">Excursions</span>
          </h1>
          <p className="text-[#0E1117]/80 text-lg font-light leading-relaxed">
            Discover the cultural, historical, and natural highlights surrounding Val Gardena with experienced local drivers and an itinerary shaped around your day.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {excursions.map((exc, i) => (
            <article key={exc.title} className="group bg-white rounded-2xl overflow-hidden shadow-xl border border-[#0E1117]/10 hover:border-[#C5A880] transition-all flex flex-col">
              <div className="w-full aspect-[3/2] bg-slate-900 overflow-hidden relative">
                <img 
                  src={exc.img} 
                  alt={exc.alt}
                  width="1600"
                  height="1067"
                  loading={i < 2 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
                {exc.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1.5 bg-[#0E1117]/90 text-[#F8F6F0] text-[10px] font-bold uppercase tracking-wider rounded-md border border-white/15">
                    {exc.badge}
                  </span>
                )}
              </div>
              <div className="p-7 lg:p-8 flex flex-1 flex-col justify-between">
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
                  onClick={() => openInquiryModal('Excursion Inquiry', `Excursion: ${exc.title}\nDuration: ${exc.duration}`)}
                  className="self-start text-sm font-semibold text-[#0E1117] hover:text-[#8C6D46] transition-colors flex items-center gap-2 pt-3 border-t border-[#0E1117]/10 w-full justify-between group-hover:border-[#C5A880]"
                >
                  <span>Ask about this trip</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

