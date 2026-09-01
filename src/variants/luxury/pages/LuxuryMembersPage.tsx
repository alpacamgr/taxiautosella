import React from 'react';
import { User, Award, GlassWater, ArrowRight } from 'lucide-react';
import { useAppStore } from '../../../store/useAppStore';

export const LuxuryMembersPage: React.FC = () => {
  const { openInquiryModal } = useAppStore();

  const drivers = [
    'Bauer Dietrich', 'Bauer Martin', 'Bernardi Jonas', 'Comploi Johann',
    'Demetz Mark', 'Demetz Manuel', 'Falaha Mohamed Majd', 'Insam Andreas',
    'Moroder Mikeol', 'Perathoner Erich', 'Piazza Walter', 'Ploner Iwan',
    'Ploner Vittorio', 'Prinoth Markus', 'Prucker Egon', 'Runggaldier Franco',
    'Runggaldier Jasmin', 'Runggaldier Leo'
  ];

  const partners = [
    { name: 'Val Gardena Tourist Board', desc: 'Official regional tourism partner', url: 'https://www.valgardena.it' },
    { name: 'Dolomiti Superski', desc: 'Regional ski area', url: 'https://www.dolomitisuperski.com' },
    { name: 'UNESCO Dolomites Foundation', desc: 'Dolomites World Heritage organization', url: 'https://www.dolomitiunesco.info' },
    { name: 'Südtirol / South Tyrol Official', desc: 'Provincial tourism board', url: 'https://www.suedtirol.info' },
    { name: 'Elikos Helicopter Service', desc: 'Helicopter transfers & scenic flights', url: 'https://www.elikos.com' },
    { name: 'Dolomiti Sportclinic', desc: 'High-specialization orthopedic clinic', url: 'https://www.dolomitisportclinic.com' },
    { name: 'Intersport Rent Val Gardena', desc: 'Ski, snowboard & bike rental equipment', url: 'https://www.intersportrent.com' },
    { name: 'Hotel Europa (Ortisei)', desc: 'Hotel in Ortisei', url: 'https://www.hoteleuropa.it' },
    { name: 'Rusctlea Ristorante', desc: 'South Tyrolean restaurant', url: 'https://www.rusctlea.com' },
    { name: 'Bruno Riffeser Woodcarving', desc: 'Val Gardena woodcarving studio', url: 'https://www.woodcarvings.info' },
    { name: 'Carrozzeria Gardena', desc: 'Official fleet maintenance & bodywork', url: 'https://www.carrozzeriagardena.it' },
    { name: 'Digiem Agency', desc: 'Digital systems & web infrastructure', url: 'https://www.digiem.it' }
  ];

  const venues = [
    'Caffe 2000', 'Caffe Adler', 'Marina Lounge Bar', 'Piz 5', 'Disco Dancing Dali\'', 
    'La Stua', 'Goalies\' Pub', 'Mauriz Keller', 'Bar 181', 'Après-Ski Saltos'
  ];

  return (
    <div className="min-h-screen bg-[#F8F6F0] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <header className="mb-20 max-w-3xl">
          <h1 className="font-editorial text-5xl lg:text-7xl font-normal text-[#0E1117] mb-6">
            Members & <span className="italic text-[#C5A880]">Partners</span>
          </h1>
          <p className="text-[#0E1117]/80 text-lg font-light leading-relaxed">
            Taxi Auto Sella is a consortium of 18 local drivers based in Santa Cristina, serving Val Gardena and longer routes.
          </p>
        </header>

        {/* 18 DRIVERS ROSTER */}
        <section className="mb-24">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 border-b border-[#0E1117]/10 pb-4">
            <div className="flex items-center gap-3">
              <User className="w-6 h-6 text-[#C5A880]" />
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#0E1117]">Consortium drivers</h2>
            </div>
            <span className="text-xs uppercase tracking-wider text-[#0E1117]/70 font-semibold">
              18 local operators
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {drivers.map((driver) => (
              <button 
                key={driver} 
                type="button"
                onClick={() => openInquiryModal('Preferred Chauffeur Request', `Preferred Chauffeur: ${driver}\n\nPlease check availability for private Alpine transfer in Val Gardena.`)}
                className="p-4 bg-white rounded-xl shadow-sm border border-[#0E1117]/10 flex items-center gap-3.5 hover:border-[#8C6D46] hover:shadow-md transition-all text-left cursor-pointer group w-full"
              >
                <div className="w-9 h-9 rounded-full bg-[#0E1117] text-[#C5A880] group-hover:bg-[#8C6D46] group-hover:text-white transition-colors flex items-center justify-center font-editorial text-sm font-semibold flex-shrink-0">
                  {driver.charAt(0)}
                </div>
                <div>
                  <span className="font-bold text-sm text-[#0E1117] group-hover:text-[#8C6D46] transition-colors block leading-snug">{driver}</span>
                  <span className="text-[10px] text-[#0E1117]/60 font-semibold uppercase tracking-wider block">Partner Chauffeur</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* OFFICIAL PARTNERS & NIGHTLIFE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <section>
            <div className="flex items-center gap-3 mb-6 border-b border-[#0E1117]/10 pb-4">
              <Award className="w-6 h-6 text-[#C5A880]" />
              <h2 className="font-editorial text-3xl text-[#0E1117]">Official Partners</h2>
            </div>
            <p className="text-sm text-[#0E1117]/70 mb-6 font-light leading-relaxed">
              Organizations and local businesses Taxi Auto Sella works with in and around Val Gardena.
            </p>
            <div className="space-y-3">
              {partners.map(partner => (
                <div key={partner.name} className="p-3.5 bg-white rounded-xl border border-[#0E1117]/10 shadow-sm flex items-center justify-between group">
                  <div>
                    <h4 className="font-semibold text-sm text-[#0E1117] group-hover:text-[#C5A880] transition-colors">
                      {partner.name}
                    </h4>
                    <p className="text-xs text-[#0E1117]/60 mt-0.5">{partner.desc}</p>
                  </div>
                  <a 
                    href={partner.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 text-[#0E1117]/40 hover:text-[#C5A880] transition-colors flex-shrink-0"
                    aria-label={`Visit ${partner.name}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6 border-b border-[#0E1117]/10 pb-4">
              <GlassWater className="w-6 h-6 text-[#C5A880]" />
              <h2 className="font-editorial text-3xl text-[#0E1117]">Nightlife Shuttles</h2>
            </div>
            <p className="text-sm text-[#0E1117]/70 mb-6 font-light leading-relaxed">
              During the winter and summer seasons, night dispatch connects hotels, homes, restaurants and venues across Val Gardena.
            </p>
            <div className="flex flex-wrap gap-2.5 mb-8">
              {venues.map(venue => (
                <button
                  type="button"
                  key={venue} 
                  onClick={() => openInquiryModal('Night Taxi Dispatch', `Venue: ${venue}\nImmediate night taxi dispatch requested in Val Gardena.`)}
                  className="px-4 py-2.5 bg-white border border-[#0E1117]/15 rounded-xl text-xs font-semibold text-[#0E1117] hover:border-[#C5A880] hover:text-[#C5A880] transition-colors shadow-sm cursor-pointer"
                >
                  {venue}
                </button>
              ))}
            </div>

            <div className="border border-[#0E1117]/15 bg-[#EEE9DE] p-6">
              <h4 className="font-editorial text-xl text-[#0E1117] mb-2">Need a taxi tonight?</h4>
              <p className="text-xs text-[#0E1117]/70 font-light mb-4 leading-relaxed">
                Call dispatch for pickup in Ortisei, Santa Cristina or Selva.
              </p>
              <a 
                href="tel:+390471790033"
                className="inline-flex min-h-11 items-center gap-2 bg-[#0E1117] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#8C6D46]"
              >
                <span>Call +39 0471 790033</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

