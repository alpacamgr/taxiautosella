import React from 'react';
import { Map, ArrowRight, Utensils } from 'lucide-react';

export const TechToursPage: React.FC = () => {
  const tours = [
    {
      title: 'Venice Day Trip',
      desc: 'Leave the mountains for a day and explore the floating city. We drop you off at Piazzale Roma and wait while you take a water taxi to St. Mark\'s Square.',
      duration: 'Full Day (12h)',
      tags: ['Culture', 'City']
    },
    {
      title: 'Verona & Lake Garda',
      desc: 'Visit Juliet\'s balcony and the Roman Arena in Verona, followed by a scenic drive along the shores of Lake Garda or a wine tasting in Valpolicella.',
      duration: 'Full Day (10h)',
      tags: ['Wine', 'Sightseeing']
    },
    {
      title: 'Innsbruck & Swarovski Crystal Worlds',
      desc: 'Cross the border into Austria to explore the historic center of Innsbruck (Golden Roof) and the famous Swarovski Crystal Worlds in Wattens.',
      duration: 'Full Day (9h)',
      tags: ['Shopping', 'Family']
    },
    {
      title: 'Cortina & The Great Dolomites Road',
      desc: 'A spectacular driving tour through the heart of the Dolomites (UNESCO World Heritage), traversing famous mountain passes to reach the glamorous town of Cortina d\'Ampezzo.',
      duration: 'Full/Half Day',
      tags: ['Nature', 'Photography']
    },
    {
      title: 'Bolzano & Merano',
      desc: 'Discover Ötzi the Iceman at the Bolzano Archaeology Museum, shop in the medieval arcades, and stroll the botanical gardens of Trauttmansdorff Castle in Merano.',
      duration: 'Half Day (6h)',
      tags: ['Museum', 'Culture']
    }
  ];

  return (
    <div className="min-h-screen bg-[#090D14] text-white font-['Inter',sans-serif] pb-20">
      
      {/* Header */}
      <section className="px-6 pt-20 pb-12 max-w-7xl mx-auto border-b border-slate-800">
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
          Organized <span className="text-[#059669]">Tours</span>.
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl">
          Curated excursions from Val Gardena to the region's most iconic destinations. Sit back and enjoy the scenery in our luxury vehicles.
        </p>
      </section>

      {/* Excursions */}
      <section className="px-6 py-16 max-w-7xl mx-auto space-y-12">
        
        <div className="grid lg:grid-cols-2 gap-6">
          {tours.map((t, i) => (
            <div key={i} className="p-8 bg-[#111827] border border-slate-800 rounded-xl hover:border-slate-600 transition-colors flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-slate-100">{t.title}</h3>
                <span className="px-3 py-1 bg-slate-900 text-[#059669] text-xs font-bold rounded-full border border-slate-800">
                  {t.duration}
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6 flex-1">
                {t.desc}
              </p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-800/50">
                <div className="flex gap-2">
                  {t.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase font-bold text-slate-500 tracking-wider bg-slate-900 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="text-sm font-bold text-[#059669] hover:text-white flex items-center gap-1 transition-colors">
                  Inquire <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Hut Dinners */}
        <div className="p-8 bg-gradient-to-r from-[#111827] to-[#059669]/10 border border-[#059669]/30 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-20">
            <Utensils className="w-32 h-32 text-[#059669]" />
          </div>
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl font-bold text-white mb-3">Evening Mountain Hut Dinners</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Experience the magic of the Dolomites at night. We provide transport from your hotel to the snowcat or snowmobile pickup points for exclusive dinners at high-altitude alpine huts (Rifugi). We'll be waiting to bring you home after dessert.
            </p>
            <button className="px-6 py-3 bg-[#059669] text-white text-sm font-bold rounded-lg hover:bg-[#047857] transition-colors">
              Book Evening Transport
            </button>
          </div>
        </div>

      </section>

    </div>
  );
};
