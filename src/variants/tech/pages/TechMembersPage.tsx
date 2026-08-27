import React from 'react';
import { Users, Building2, GlassWater } from 'lucide-react';

export const TechMembersPage: React.FC = () => {
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
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-3">
          Members, Sponsors & Partners
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          These are the independent driver members and official tourism partners that make up Taxi Auto Sella Consortium.
        </p>
      </div>

      {/* Driver Members Grid */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
          <Users className="w-5 h-5 text-[#D97706]" />
          <span>Consortium Driver Members</span>
        </h2>
        <p className="text-xs text-slate-500 mb-6">Our drivers are all local to Val Gardena and speak German, Italian, and English.</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {allDrivers.map((name, i) => (
            <div key={i} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
              <div className="w-8 h-8 rounded-full bg-[#0A192F] text-[#F59E0B] text-xs font-bold flex items-center justify-center mx-auto mb-2">
                {name.split(' ').map(n => n[0]).join('')}
              </div>
              <span className="text-xs font-bold text-slate-900 block">{name}</span>
              <span className="text-[10px] text-slate-400">Val Gardena</span>
            </div>
          ))}
        </div>
      </div>

      {/* Sponsors & Partners */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
          <Building2 className="w-5 h-5 text-[#D97706]" />
          <span>Our Sponsors & Regional Partners</span>
        </h2>
        <p className="text-xs text-slate-500 mb-6">Trusted tourism and commercial partners in Val Gardena.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sponsors.map((s, idx) => (
            <div key={idx} className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-sm text-slate-900 mb-1">{s.name}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Nightlife Venues */}
      <div className="bg-[#0A192F] text-white p-8 sm:p-10 rounded-3xl border border-slate-700">
        <div className="flex items-center gap-2 mb-2">
          <GlassWater className="w-5 h-5 text-[#F59E0B]" />
          <h2 className="text-xl font-bold">Nightlife in Val Gardena</h2>
        </div>
        <p className="text-xs text-slate-300 mb-6">Safe night transfers to and from Val Gardena’s top venues and après-ski bars.</p>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs">
          {nightlifeVenues.map((v, i) => (
            <div key={i} className="p-3 bg-[#112240] border border-slate-700 rounded-xl font-medium text-slate-200 text-center">
              {v}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
