import React, { useState } from 'react';
import { useAppStore } from '../../../store/useAppStore';
import { Clock, Mountain, ArrowRight, Snowflake, Sun } from 'lucide-react';

export const AdventurePassesPage: React.FC = () => {
  const { openBookingModal } = useAppStore();
  const [season, setSeason] = useState<'winter' | 'summer'>('winter');

  const passes = [
    { 
      name: 'Passo Sella', 
      alt: '2,240m', 
      winterTime: '45m', 
      summerTime: '40m',
      winterDesc: 'Direct ski access to Col Rodella slopes, Belvedere & Sassolungo circuit.',
      summerDesc: 'Hiking trails around the Sassolungo group & legendary rock climbing base.',
      winterStatus: 'Open (Winter 4x4 / Chains Req)',
      summerStatus: 'Open (Summer Pass)'
    },
    { 
      name: 'Passo Gardena', 
      alt: '2,136m', 
      winterTime: '55m', 
      summerTime: '45m',
      winterDesc: 'Connects Selva / Wolkenstein to Colfosco and Corvara (Alta Badia).',
      summerDesc: 'Puez-Odle Nature Park trailhead with dramatic limestone spires.',
      winterStatus: 'Open (Winter 4x4 / Chains Req)',
      summerStatus: 'Open (Summer Pass)'
    },
    { 
      name: 'Passo Pordoi', 
      alt: '2,239m', 
      winterTime: '50m', 
      summerTime: '45m',
      winterDesc: 'Sass Pordoi cable car base (The Terrace of the Dolomites at 2,950m).',
      summerDesc: 'Historic Giro d’Italia cycling climb and WW1 historical museum.',
      winterStatus: 'Open (Winter 4x4 / Chains Req)',
      summerStatus: 'Open (Summer Pass)'
    },
    { 
      name: 'Passo Campolongo', 
      alt: '1,875m', 
      winterTime: '40m', 
      summerTime: '35m',
      winterDesc: 'Crucial link between Corvara (Alta Badia) and Arabba ski valley.',
      summerDesc: 'Gentle alpine meadows and panoramic family walking routes.',
      winterStatus: 'Open (Winter 4x4 / Chains Req)',
      summerStatus: 'Open (Summer Pass)'
    },
  ];

  return (
    <div className="py-16 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-5xl font-black text-white font-display mb-3">
            Sella Ronda 4-Passes Guide
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            The high Alpine routes of the Sella Massif. Explore altitudes, live road statuses, and transfer durations across seasons.
          </p>
        </div>

        {/* Season toggle */}
        <div className="flex bg-[#0F172A] p-1 rounded-2xl border border-sky-900/60 self-start md:self-auto text-xs font-bold">
          <button
            onClick={() => setSeason('winter')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl transition-colors ${
              season === 'winter' ? 'bg-[#0284C7] text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Snowflake className="w-3.5 h-3.5" />
            <span>Winter Ski</span>
          </button>
          <button
            onClick={() => setSeason('summer')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl transition-colors ${
              season === 'summer' ? 'bg-[#EA580C] text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            <span>Summer MTB</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {passes.map((p, i) => (
          <div key={i} className="bg-[#0F172A] rounded-3xl p-8 border border-sky-900/60 shadow-xl flex flex-col justify-between hover:border-sky-400 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="font-extrabold text-sky-400 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-800">
                  Elevation: {p.alt}
                </span>
                <span className="text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {season === 'winter' ? p.winterTime : p.summerTime} Drive
                </span>
              </div>
              <h3 className="text-2xl font-black text-white font-display mb-2">{p.name}</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                {season === 'winter' ? p.winterDesc : p.summerDesc}
              </p>

              <div className="p-3 bg-sky-950/40 rounded-xl border border-sky-900/40 text-[11px] text-sky-300 font-semibold mb-6">
                <strong>Status:</strong> {season === 'winter' ? p.winterStatus : p.summerStatus}
              </div>
            </div>

            <button
              onClick={() => openBookingModal()}
              className="w-full py-3.5 bg-[#EA580C] hover:bg-[#c2410c] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <span>Book Pass Transfer</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
