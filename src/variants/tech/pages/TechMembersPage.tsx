import React from 'react';
import { useAppStore } from '../../../store/useAppStore';
import { Users, Building2, GlassWater, ExternalLink, ArrowRight, PhoneCall } from 'lucide-react';

export const TechMembersPage: React.FC = () => {
  const { openInquiryModal } = useAppStore();

  const allDrivers = [
    "Bauer Dietrich", "Bauer Martin", "Bernardi Jonas", "Comploi Johann", 
    "Demetz Mark", "Demetz Manuel", "Falaha Mohamed Majd", "Insam Andreas", 
    "Moroder Mikeol", "Perathoner Erich", "Piazza Walter", "Ploner Iwan", 
    "Ploner Vittorio", "Prinoth Markus", "Prucker Egon", "Runggaldier Franco", 
    "Runggaldier Jasmin", "Runggaldier Leo"
  ];

  const partners = [
    { name: "Val Gardena Tourist Board", desc: "Official regional tourism board of Ortisei, Santa Cristina, and Selva", url: "https://www.valgardena.it" },
    { name: "Dolomiti Superski", desc: "World's largest ski carousel featuring 1,200 km of connected slopes", url: "https://www.dolomitisuperski.com" },
    { name: "UNESCO Dolomites Foundation", desc: "Official World Natural Heritage Site protection organization", url: "https://www.dolomitiunesco.info" },
    { name: "Südtirol / South Tyrol", desc: "Official provincial South Tyrol tourism destination partner", url: "https://www.suedtirol.info" },
    { name: "Elikos Helicopter Service", desc: "VIP heli-transfers, rescue logistics, and scenic flights across the Dolomites", url: "https://www.elikos.com" },
    { name: "Dolomiti Sportclinic", desc: "High-specialization sports medicine and emergency orthopedic clinic", url: "https://www.dolomitisportclinic.com" },
    { name: "Intersport Rent Val Gardena", desc: "Official ski, snowboard, and downhill mountain bike rental partner", url: "https://www.intersportrent.com" },
    { name: "Hotel Europa (Ortisei)", desc: "Premier 4-star Alpine hotel partner in Val Gardena", url: "https://www.hoteleuropa.it" },
    { name: "Rusctlea Ristorante", desc: "Fine dining and traditional South Tyrolean gastronomy", url: "https://www.rusctlea.com" },
    { name: "Bruno Riffeser Woodcarving", desc: "Heritage Val Gardena master wood sculptor and traditional art studio", url: "https://www.woodcarvings.info" },
    { name: "Carrozzeria Gardena", desc: "Official technical bodywork and automotive maintenance partner", url: "https://www.carrozzeriagardena.it" },
    { name: "Digiem Agency", desc: "Digital systems, web development, and telecommunications infrastructure", url: "https://www.digiem.it" }
  ];

  const nightlifeVenues = [
    "Bar Caffe 2000", "Caffe Adler", "Marina Lounge", "Piz 5", 
    "Disco Dancing Dali'", "La Stua", "Goalies' Pub", "Mauriz Keller", 
    "Bar 181", "Après-Ski Bar Saltos"
  ];

  return (
    <div className="py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#D97706] block mb-2">
          Local Heritage & Alliances
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mb-3">
          Members, Sponsors & Partners
        </h1>
        <p className="text-base text-slate-600 leading-relaxed font-normal">
          Founded and operated by 18 native Val Gardena drivers, supported by leading South Tyrolean institutions and premier hospitality partners.
        </p>
      </div>

      {/* Driver Members Grid */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm mb-16">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
              <Users className="w-5 h-5 text-[#D97706]" />
              <span>The 18 Consortium Chauffeurs</span>
            </h2>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Native Val Gardena drivers fluent in German, Italian, English, and Ladin.
            </p>
          </div>
          <span className="text-xs font-extrabold text-[#D97706] uppercase tracking-wider">
            35+ Years Active
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {allDrivers.map((name, i) => (
            <button 
              key={i} 
              type="button"
              onClick={() => openInquiryModal('Driver Dispatch Request', `Chauffeur: ${name}\n\nPlease check availability for chauffeur transfer in Val Gardena.`)}
              className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-center hover:border-[#D97706] hover:shadow-md transition-all w-full cursor-pointer group"
            >
              <div className="w-9 h-9 rounded-full bg-[#0A192F] group-hover:bg-[#D97706] text-[#F59E0B] group-hover:text-white text-xs font-black flex items-center justify-center mx-auto mb-2.5 shadow-sm transition-colors">
                {name.split(' ').map(n => n[0]).join('')}
              </div>
              <span className="text-xs font-extrabold text-slate-900 group-hover:text-[#D97706] transition-colors block leading-tight">{name}</span>
              <span className="text-[10px] text-slate-500 font-medium mt-0.5 block">Partner Driver</span>
            </button>
          ))}
        </div>
      </div>

      {/* Sponsors & Partners */}
      <div className="mb-16">
        <div className="mb-6">
          <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-[#D97706]" />
            <span>Official Regional & Hospitality Partners</span>
          </h2>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            Premier alliances across Val Gardena, South Tyrol, and the Dolomites.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((s, idx) => (
            <div key={idx} className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm hover:border-[#D97706] hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <h3 className="font-extrabold text-base text-slate-900 mb-1 group-hover:text-[#D97706] transition-colors">
                  {s.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">{s.desc}</p>
              </div>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#0A192F] hover:text-[#D97706] flex items-center gap-1.5 self-start pt-2 border-t border-slate-100 w-full justify-between"
              >
                <span>Visit Official Site</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#D97706]" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Nightlife Venues */}
      <div className="bg-[#0A192F] text-white p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-2xl">
        <div className="flex items-center gap-2 mb-2">
          <GlassWater className="w-5 h-5 text-[#F59E0B]" />
          <h2 className="text-2xl font-black">Val Gardena Nightlife & Après-Ski Shuttles</h2>
        </div>
        <p className="text-xs text-slate-300 mb-8 max-w-2xl font-normal leading-relaxed">
          Enjoy your evening without driving worries. We provide rapid 24/7 night shuttle service to and from Val Gardena’s top restaurants, clubs, and après-ski bars. Tap any venue for immediate dispatch.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs mb-8">
          {nightlifeVenues.map((v, i) => (
            <button
              key={i}
              onClick={() => openInquiryModal('Night Taxi Request', `Destination: ${v}\nImmediate night taxi requested in Val Gardena.`)}
              className="p-3.5 bg-slate-800/80 hover:bg-[#F59E0B] hover:text-black border border-slate-700/80 rounded-xl font-bold text-slate-200 text-center transition-all shadow-sm"
            >
              {v}
            </button>
          ))}
        </div>

        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-slate-400 font-medium">
            Active night drivers in Ortisei, Santa Cristina, and Selva.
          </span>
          <a
            href="tel:+390471790033"
            className="w-full sm:w-auto px-6 py-3 bg-[#F59E0B] text-black font-black text-xs uppercase tracking-wider rounded-xl hover:bg-white transition-colors flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-black" />
            <span>Hotline: +39 0471 790033</span>
          </a>
        </div>
      </div>

    </div>
  );
};

