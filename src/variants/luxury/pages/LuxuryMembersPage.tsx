import React from 'react';
import { User, Award, GlassWater } from 'lucide-react';

export const LuxuryMembersPage: React.FC = () => {
  const drivers = [
    'Bauer Dietrich', 'Bauer Martin', 'Bernardi Jonas', 'Comploi Johann',
    'Demetz Mark', 'Demetz Manuel', 'Falaha Mohamed Majd', 'Insam Andreas',
    'Moroder Mikeol', 'Perathoner Erich', 'Piazza Walter', 'Ploner Iwan',
    'Ploner Vittorio', 'Prinoth Markus', 'Prucker Egon', 'Runggaldier Franco',
    'Runggaldier Jasmin', 'Runggaldier Leo'
  ];

  const partners = [
    { name: 'Val Gardena Tourist Board', url: 'https://www.valgardena.it' },
    { name: 'Dolomiti Sportclinic', url: 'https://www.dolomitisportclinic.com' },
    { name: 'Elikos Helicopter Service', url: 'https://www.elikos.com' },
    { name: 'Intersport Rent', url: 'https://www.intersportrent.com' },
    { name: 'Dolomiti Superski', url: 'https://www.dolomitisuperski.com' },
    { name: 'UNESCO Dolomites', url: 'https://www.dolomitiunesco.info' },
    { name: 'Südtirol / South Tyrol', url: 'https://www.suedtirol.info' },
    { name: 'Hotel Europa', url: 'https://www.hoteleuropa.it' },
    { name: 'Rusctlea Ristorante', url: 'https://www.rusctlea.com' },
    { name: 'Bruno Riffeser Woodcarving', url: 'https://www.woodcarvings.info' },
    { name: 'Carrozzeria Gardena', url: 'https://www.carrozzeriagardena.it' },
    { name: 'Digiem', url: 'https://www.digiem.it' }
  ];

  const venues = [
    'Caffe 2000', 'Adler', 'Marina', 'Piz 5', 'Dali\'', 
    'La Stua', 'Goalies\' Pub', 'Mauriz Keller', 'Bar 181', 'Saltos'
  ];

  return (
    <div className="min-h-screen bg-[#F8F6F0] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <header className="mb-20 max-w-3xl">
          <h1 className="font-editorial text-5xl lg:text-7xl font-normal text-[#0E1117] mb-6">
            Members & <span className="italic text-[#C5A880]">Partners</span>
          </h1>
          <p className="text-[#0E1117]/70 text-lg font-light leading-relaxed">
            The heart of Taxi Auto Sella is our consortium of 18 native drivers, supported by the finest local establishments and services in Val Gardena.
          </p>
        </header>

        <section className="mb-24">
          <div className="flex items-center gap-4 mb-10 border-b border-[#0E1117]/10 pb-4">
            <User className="w-6 h-6 text-[#C5A880]" />
            <h2 className="font-editorial text-4xl text-[#0E1117]">The Chauffeurs</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {drivers.map(driver => (
              <div key={driver} className="p-4 bg-white rounded-xl shadow-sm border border-[#0E1117]/5 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0E1117]/5 flex items-center justify-center text-[#C5A880] font-editorial text-lg">
                  {driver.charAt(0)}
                </div>
                <span className="font-medium text-sm text-[#0E1117]">{driver}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <section>
            <div className="flex items-center gap-4 mb-8 border-b border-[#0E1117]/10 pb-4">
              <Award className="w-6 h-6 text-[#C5A880]" />
              <h2 className="font-editorial text-3xl text-[#0E1117]">Official Partners</h2>
            </div>
            <p className="text-sm text-[#0E1117]/60 mb-6 font-light">
              We proudly collaborate with these premier organizations to ensure an uncompromising level of service for our mutual guests.
            </p>
            <ul className="space-y-3">
              {partners.map(partner => (
                <li key={partner.name} className="flex items-center gap-3 text-sm font-medium text-[#0E1117]">
                  <span className="w-1.5 h-1.5 bg-[#C5A880] rounded-full flex-shrink-0"></span>
                  {partner.url ? (
                    <a href={partner.url} target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A880] transition-colors decoration-1 underline-offset-4 hover:underline">
                      {partner.name}
                    </a>
                  ) : (
                    <span>{partner.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-8 border-b border-[#0E1117]/10 pb-4">
              <GlassWater className="w-6 h-6 text-[#C5A880]" />
              <h2 className="font-editorial text-3xl text-[#0E1117]">Nightlife Destinations</h2>
            </div>
            <p className="text-sm text-[#0E1117]/60 mb-6 font-light">
              Let us be your designated driver. We provide reliable nighttime shuttles to and from these vibrant Val Gardena hotspots.
            </p>
            <div className="flex flex-wrap gap-3">
              {venues.map(venue => (
                <span key={venue} className="px-4 py-2 bg-white border border-[#0E1117]/10 rounded-full text-xs font-semibold text-[#0E1117] shadow-sm">
                  {venue}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
