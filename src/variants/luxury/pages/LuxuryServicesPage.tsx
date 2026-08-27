import React from 'react';
import { useAppStore } from '../../../store/useAppStore';
import { Check, ArrowRight } from 'lucide-react';

export const LuxuryServicesPage: React.FC = () => {
  const { openInquiryModal } = useAppStore();

  const services = [
    {
      title: 'Private Chauffeur',
      desc: 'Discreet, highly professional chauffeur services for point-to-point transfers and daily rentals.',
    },
    {
      title: 'Hotel-to-Ski-Slope Shuttles',
      desc: 'Seamless door-to-slope transfers. Skip the crowded ski buses and arrive at the lifts in a warm, private 4MATIC vehicle.',
    },
    {
      title: 'Austrian Casino Trips',
      desc: 'Exclusive evening excursions to the glamorous casinos in Innsbruck and Seefeld.',
    },
    {
      title: 'Minor Injury Patient Transport',
      desc: 'Comfortable, careful transport for guests with minor ski injuries (e.g., broken legs, sprains) back to home or the airport.',
    },
    {
      title: 'Disabled Passenger Service',
      desc: 'Specially equipped vans with hydraulic lifts ensuring safe and dignified travel for passengers in wheelchairs.',
    },
    {
      title: 'School Bus Services',
      desc: 'Trusted, reliable local transportation for students across the Val Gardena region.',
    },
    {
      title: 'Child Seats (0-12 yrs)',
      desc: 'Safety first. We provide premium child seats, infant carriers, and booster seats upon request at no extra charge.',
    },
    {
      title: 'Pet Transport',
      desc: 'Your furry family members are welcome. We accommodate pets with appropriate safety measures for long journeys.',
    },
    {
      title: 'Express Luggage & Courier',
      desc: 'Urgent delivery of delayed baggage, important documents, or specialized equipment across the Alps.',
    },
    {
      title: 'Bike & Motorbike Trailer',
      desc: 'Heavy-duty enclosed trailers capable of transporting up to 10 mountain bikes or 3 motorbikes securely.',
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
            Beyond standard airport transfers, the Taxi Auto Sella consortium provides a comprehensive suite of mobility solutions designed for every need in the Dolomites.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-xl border border-[#0E1117]/5 hover:border-[#C5A880]/30 transition-colors">
              <div className="w-10 h-10 rounded-full bg-[#0E1117]/5 flex items-center justify-center mb-6">
                <Check className="w-5 h-5 text-[#C5A880]" />
              </div>
              <h3 className="font-editorial text-2xl text-[#0E1117] mb-3">{svc.title}</h3>
              <p className="text-sm text-[#0E1117]/70 font-light leading-relaxed">
                {svc.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#0E1117] text-[#F8F6F0] p-10 md:p-16 rounded-3xl flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-editorial text-4xl mb-4">Request a Special Service</h2>
            <p className="text-[#F8F6F0]/70 font-light mb-8 md:mb-0">
              Need to arrange a patient transport, book a bike trailer, or reserve a table at the casino? Contact our dispatchers directly.
            </p>
          </div>
          <button 
            onClick={() => openInquiryModal('Special Service Request', 'I am interested in arranging a special service...')}
            className="relative z-10 w-full md:w-auto px-8 py-4 bg-[#C5A880] text-[#0E1117] font-semibold text-xs uppercase tracking-widest hover:bg-white transition-colors rounded-lg flex items-center justify-center gap-2"
          >
            <span>Inquire Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
