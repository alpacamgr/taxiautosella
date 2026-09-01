import React from 'react';
import { useAppStore } from '../../../store/useAppStore';
import { ArrowRight } from 'lucide-react';

export const LuxuryServicesPage: React.FC = () => {
  const { openInquiryModal } = useAppStore();

  const services = [
    {
      title: 'Private Chauffeur',
      desc: 'Point-to-point journeys and driver hire by the day.',
    },
    {
      title: 'Hotel-to-Ski-Slope Shuttles',
      desc: 'Hotel, residence and chalet pickups for ski lifts across Val Gardena.',
    },
    {
      title: 'Austrian Casino Trips',
      desc: 'Evening transport to casinos in Innsbruck, Seefeld and other Austrian destinations.',
    },
    {
      title: 'Non-Emergency Passenger Transport',
      desc: 'Careful transport for self-sufficient passengers who do not require medical assistance. Contact dispatch to confirm suitability.',
    },
    {
      title: 'Wheelchair-Accessible Transport',
      desc: 'A specially adapted vehicle is available for one wheelchair and up to seven passengers. Contact dispatch with your requirements.',
    },
    {
      title: 'School Bus Services',
      desc: 'Local school transport by prior arrangement.',
    },
    {
      title: 'Child Seats (0-12 yrs)',
      desc: 'Child seats, infant carriers and boosters are available on request. Include the child’s age.',
    },
    {
      title: 'Pet Transport',
      desc: 'Pets can travel by prior arrangement. Tell dispatch the animal and carrier size.',
    },
    {
      title: 'Express Luggage & Courier',
      desc: 'Delivery of delayed luggage, documents or equipment across the region.',
    },
    {
      title: 'Bike & Motorbike Trailer',
      desc: 'Enclosed trailers for up to 10 mountain bikes or 3 motorbikes.',
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F6F0] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <header className="mb-16 max-w-3xl">
          <h1 className="font-editorial text-5xl lg:text-7xl font-normal text-[#0E1117] mb-6">
            Taxi, Minibus & <span className="italic text-[#C5A880]">Bus Services</span>
          </h1>
          <p className="text-[#0E1117]/70 text-lg font-light leading-relaxed">
            Airport transfers are one part of the service. The consortium also handles local rides, ski shuttles, school routes, accessible transport, luggage, pets and equipment.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-[#0E1117]/15">
          {services.map((svc, i) => (
            <button
              type="button"
              key={i} 
              onClick={() => openInquiryModal('Service Request', `Service Type: ${svc.title}\n\nPlease provide more details.`)}
              className={`group flex min-h-36 w-full items-start justify-between gap-6 border-b border-[#0E1117]/15 py-6 text-left transition-colors hover:text-[#8C6D46] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6D46] focus-visible:ring-inset md:py-7 ${i % 2 === 0 ? 'md:pr-8' : 'md:border-l md:pl-8'}`}
            >
              <span>
                <span className="block font-editorial text-2xl text-[#0E1117] mb-2">{svc.title}</span>
                <span className="block max-w-md text-sm text-[#0E1117]/70 font-light leading-relaxed">
                  {svc.desc}
                </span>
              </span>
              <ArrowRight className="mt-1 h-5 w-5 flex-none transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </button>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-7 border border-[#0E1117]/15 bg-[#EEE9DE] p-8 md:flex-row md:items-center md:p-12">
          <div className="max-w-2xl">
            <h2 className="font-editorial text-4xl mb-3">Something not listed?</h2>
            <p className="text-[#0E1117]/70 font-light">
              Tell dispatch what you need, including passengers, equipment and any access requirements.
            </p>
          </div>
          <button 
            onClick={() => openInquiryModal('Special Service Request', 'I am interested in arranging a special service...')}
            className="flex min-h-12 w-full items-center justify-center gap-2 bg-[#0E1117] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#8C6D46] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6D46] focus-visible:ring-offset-2 md:w-auto"
          >
            <span>Ask dispatch</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
