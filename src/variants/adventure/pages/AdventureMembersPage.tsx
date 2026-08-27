import React from 'react';
import { CONSORTIUM_MEMBERS, CONSORTIUM_STATS } from '../../../data/drivers';
import { Users, Award, ShieldCheck, GlassWater, Building2 } from 'lucide-react';

export const AdventureMembersPage: React.FC = () => {
  const allDrivers = [
    "Bauer Dietrich", "Bauer Martin", "Bernardi Jonas", "Comploi Johann", 
    "Demetz Mark", "Demetz Manuel", "Falaha Mohamed Majd", "Insam Andreas", 
    "Moroder Mikeol", "Perathoner Erich", "Piazza Walter", "Ploner Iwan", 
    "Ploner Vittorio", "Prinoth Markus", "Prucker Egon", "Runggaldier Franco", 
    "Runggaldier Jasmin", "Runggaldier Leo"
  ];

  const sponsors = [
    { name: "Elikos Helicopter Service", desc: "Scenic flights and heli-transfers in the Dolomites" },
    { name: "Dolomiti Sportclinic", desc: "Specialized sports medicine and orthopaedic emergency clinic" },
    { name: "Bruno Riffeser", desc: "Val Gardena master woodcarving and traditional South Tyrolean art" },
    { name: "Rusctlea Ristorante", desc: "Fine traditional and gourmet dining in Val Gardena" },
    { name: "Hotel Europa", desc: "Alpine hospitality partner in Santa Cristina" },
    { name: "Carrozzeria Gardena", desc: "Official technical bodywork and automotive maintenance partner" },
    { name: "Val Gardena Tourist Consortium", desc: "Official regional tourism board of Ortisei, S. Cristina, and Selva" },
    { name: "Intersport Rent", desc: "Official ski and snowboard rental partner" }
  ];

  const nightlifeVenues = [
    "Bar Caffe 2000", "Caffe Adler", "Marina Lounge", "Piz 5", 
    "Disco Dancing Dali'", "La Stua", "Goalies' Pub", "Mauriz Keller", 
    "Bar 181", "Après-Ski Bar Saltos"
  ];

  return (
    <div className="py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#181B22] mb-3">
          Members, Sponsors & Partners
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Taxi Auto Sella is Val Gardena’s largest taxi and bus consortium, uniting 18 independent mountain chauffeurs and trusted tourism partners across South Tyrol.
        </p>
      </div>

      {/* Consortium Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center shadow-sm">
          <div className="text-3xl font-extrabold text-[#181B22] mb-1">18</div>
          <div className="text-xs font-bold text-slate-500 uppercase">Native Drivers</div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center shadow-sm">
          <div className="text-3xl font-extrabold text-[#181B22] mb-1">25</div>
          <div className="text-xs font-bold text-slate-500 uppercase">4MATIC Fleet</div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center shadow-sm">
          <div className="text-3xl font-extrabold text-[#181B22] mb-1">35+</div>
          <div className="text-xs font-bold text-slate-500 uppercase">Years Active</div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center shadow-sm">
          <div className="text-3xl font-extrabold text-[#D6A56E] mb-1">24/7</div>
          <div className="text-xs font-bold text-slate-500 uppercase">Winter Dispatch</div>
        </div>
      </div>

      {/* 18 Member Drivers Roster */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm mb-16">
        <h2 className="text-2xl font-bold text-[#181B22] mb-2 flex items-center gap-2">
          <Users className="w-5 h-5 text-[#D6A56E]" />
          <span>Consortium Driver Members</span>
        </h2>
        <p className="text-xs text-slate-500 mb-6">All drivers are local to Val Gardena and fluent in English, German, and Italian.</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {allDrivers.map((name, i) => (
            <div key={i} className="p-3 bg-[#FAF9F5] rounded-xl border border-slate-200 text-center">
              <div className="w-8 h-8 rounded-full bg-[#181B22] text-[#D6A56E] text-xs font-bold flex items-center justify-center mx-auto mb-2">
                {name.split(' ').map(n => n[0]).join('')}
              </div>
              <span className="text-xs font-bold text-[#181B22] block">{name}</span>
              <span className="text-[10px] text-slate-400">Val Gardena</span>
            </div>
          ))}
        </div>
      </div>

      {/* Official Sponsors & Partners */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-[#181B22] mb-2 flex items-center gap-2">
          <Building2 className="w-5 h-5 text-[#D6A56E]" />
          <span>Official Tourism & Medical Partners</span>
        </h2>
        <p className="text-xs text-slate-500 mb-6">Trusted institutions, clinics, and hospitality partners in the Dolomites.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sponsors.map((s, idx) => (
            <div key={idx} className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-sm text-[#181B22] mb-1">{s.name}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Nightlife & Après-Ski Partners */}
      <div className="bg-[#181B22] text-[#FBF9F5] p-8 sm:p-10 rounded-3xl border border-white/10">
        <div className="flex items-center gap-2 mb-2">
          <GlassWater className="w-5 h-5 text-[#D6A56E]" />
          <h2 className="text-xl font-bold text-white">Nightlife & Après-Ski Shuttles</h2>
        </div>
        <p className="text-xs text-slate-400 mb-6">Safe, late-night returns to your hotel from Val Gardena’s top bars, pubs, and clubs.</p>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs">
          {nightlifeVenues.map((v, i) => (
            <div key={i} className="p-3 bg-[#232731] border border-white/10 rounded-xl font-medium text-slate-200 text-center">
              {v}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
