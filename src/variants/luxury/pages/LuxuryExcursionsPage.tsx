import React from 'react';
import { useAppStore } from '../../../store/useAppStore';
import { Map, ArrowRight, Clock, MapPin } from 'lucide-react';

export const LuxuryExcursionsPage: React.FC = () => {
  const { openInquiryModal } = useAppStore();

  const excursions = [
    {
      title: 'Venice Lagoon & Architecture',
      duration: 'Full Day',
      desc: 'Descend from the Alps to the Adriatic. Explore the canals, St. Mark\'s Square, and the rich history of La Serenissima.',
      img: '/images/excursions/venice-lagoon-tour.jpg'
    },
    {
      title: 'Verona & Lake Garda',
      duration: 'Full Day',
      desc: 'Visit the city of Romeo & Juliet, the grand Roman Arena, followed by a scenic drive along the shores of Lake Garda.',
      img: '/images/excursions/verona-arena-tour.jpg'
    },
    {
      title: 'Innsbruck Imperial & Swarovski',
      duration: 'Full Day',
      desc: 'Cross the Brenner Pass to Austria. See the Golden Roof, the Imperial Palace, and marvel at the Swarovski Crystal Worlds in Wattens.',
      img: '/images/excursions/innsbruck-imperial-tour.jpg'
    },
    {
      title: 'Cortina d\'Ampezzo Olympic Capital',
      duration: 'Half or Full Day',
      desc: 'A spectacular drive through the Great Dolomites Road to the exclusive resort town of Cortina, home of the Winter Olympics.',
      img: '/images/hero/autosella-fleet-lineup-dolomites.jpg'
    },
    {
      title: 'Bolzano Ötzi & Merano Spa',
      duration: 'Half or Full Day',
      desc: 'Discover Ötzi the Iceman in Bolzano\'s archaeological museum, then relax in the Mediterranean climate and thermal baths of Merano.',
      img: '/images/fleet/mercedes-v-class-luxury.jpg'
    },
    {
      title: 'Mountain Hut Dinners & Sledge Rides',
      duration: 'Evening',
      desc: 'Nighttime snowcat or snowmobile rides to traditional alpine huts for dinner, followed by a thrilling sledge ride down the mountain.',
      img: '/images/hero/autosella-fleet-lineup-dolomites.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F6F0] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <header className="mb-16 max-w-3xl">
          <h1 className="font-editorial text-5xl lg:text-7xl font-normal text-[#0E1117] mb-6">
            Organised <span className="italic text-[#C5A880]">Tours</span>
          </h1>
          <p className="text-[#0E1117]/70 text-lg font-light leading-relaxed">
            Let our local expert chauffeurs guide you through the cultural, historical, and natural wonders surrounding the Dolomites.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {excursions.map((exc, i) => (
            <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-xl border border-[#0E1117]/5 flex flex-col sm:flex-row">
              <div className="w-full sm:w-2/5 aspect-[4/3] sm:aspect-auto sm:h-full bg-slate-900 overflow-hidden relative">
                <img 
                  src={exc.img} 
                  alt={exc.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
              </div>
              <div className="w-full sm:w-3/5 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C5A880] mb-3">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{exc.duration}</span>
                  </div>
                  <h3 className="font-editorial text-2xl text-[#0E1117] mb-3 leading-tight">{exc.title}</h3>
                  <p className="text-sm text-[#0E1117]/70 font-light leading-relaxed mb-6">
                    {exc.desc}
                  </p>
                </div>
                <button 
                  onClick={() => openInquiryModal('Excursion Inquiry', `Excursion: ${exc.title}\nDuration: ${exc.duration}\nPrice: Upon Request\n\nPlease provide availability and detailed pricing.`)}
                  className="self-start text-xs uppercase tracking-widest font-semibold text-[#0E1117] hover:text-[#C5A880] transition-colors flex items-center gap-2"
                >
                  <span>Inquire Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
