import React from 'react';
import { useAppStore } from '../../../store/useAppStore';
import { 
  Car, 
  Mountain, 
  ShieldCheck, 
  HeartHandshake, 
  Bike, 
  Bus, 
  Package, 
  Baby, 
  Sparkles,
  PhoneCall,
  ArrowRight
} from 'lucide-react';

export const AdventureServicesPage: React.FC = () => {
  const { openBookingModal } = useAppStore();

  const services = [
    {
      title: 'Private Chauffeur & VIP Transfers',
      desc: 'Discreet, high-comfort transfers for corporate executives, wedding parties, and luxury chalet guests with meet & greet at the airport.',
      icon: <Sparkles className="w-5 h-5 text-[#D6A56E]" />
    },
    {
      title: 'Hotel-to-Ski-Slope Shuttles',
      desc: 'Seamless connections from your hotel or holiday apartment to Seceda, Saslong, Ciampinoi, Dantercepies, and Monte Pana.',
      icon: <Mountain className="w-5 h-5 text-[#D6A56E]" />
    },
    {
      title: 'Austrian Casino & Night Trips',
      desc: 'Evening private transfers to the grand casinos and entertainment venues in Innsbruck and Seefeld in Tyrol.',
      icon: <Car className="w-5 h-5 text-[#D6A56E]" />
    },
    {
      title: 'Transport for Disabled Passengers',
      desc: 'Wheelchair-accessible vehicles with hydraulic ramps and 4-point restraints. Platform meeting and luggage assistance provided.',
      icon: <HeartHandshake className="w-5 h-5 text-[#D6A56E]" />
    },
    {
      title: 'Minor Injury & Patient Medical Transport',
      desc: 'Comfortable, seated transportation for patients with minor ski injuries returning to accommodations, clinics, or regional airports.',
      icon: <ShieldCheck className="w-5 h-5 text-[#D6A56E]" />
    },
    {
      title: 'Bike & Motorbike Shuttle Trailer',
      desc: 'Trailer equipped for up to 10 bicycles or 2–3 motorbikes with luggage. Available for trans-Alpine tours and breakdown recovery.',
      icon: <Bike className="w-5 h-5 text-[#D6A56E]" />
    },
    {
      title: 'School Bus & Youth Group Shuttles',
      desc: 'Certified daily transport services for local schools, youth sports teams, and ski training academies in Val Gardena.',
      icon: <Bus className="w-5 h-5 text-[#D6A56E]" />
    },
    {
      title: 'Express Luggage & Courier Service',
      desc: 'Fast, secure delivery of baggage, ski gear, hotel transfers between valleys, and urgent courier packages.',
      icon: <Package className="w-5 h-5 text-[#D6A56E]" />
    },
    {
      title: 'Child Seats & Pet Transportation',
      desc: 'Safety-certified baby and child booster seats (0–12 years) provided free on request. Friendly transportation for family pets.',
      icon: <Baby className="w-5 h-5 text-[#D6A56E]" />
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#181B22] mb-3">
          Taxi, Minibus & Bus Services
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Val Gardena’s most comprehensive mobility offering. Whether you need a 5-minute lift ride, a 16-person wedding shuttle, or an emergency ski gear transport.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {services.map((s, idx) => (
          <div key={idx} className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#D6A56E] transition-colors">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FAF9F5] border border-slate-200 flex items-center justify-center mb-5">
                {s.icon}
              </div>
              <h3 className="text-lg font-bold text-[#181B22] mb-2">{s.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">{s.desc}</p>
            </div>

            <button
              onClick={() => openBookingModal()}
              className="text-xs font-bold text-[#1B3B2B] hover:text-[#D6A56E] flex items-center gap-1.5 self-start"
            >
              <span>Inquire Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* 24/7 Hotline Callout */}
      <div className="bg-[#181B22] text-[#FBF9F5] p-8 sm:p-10 rounded-3xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Need an Immediate Taxi in Val Gardena?</h2>
          <p className="text-xs text-slate-300">Central dispatch operates 24/7 during high season in Ortisei, Santa Cristina, and Selva.</p>
        </div>
        <div className="flex gap-3">
          <a
            href="tel:+390471790033"
            className="px-6 py-3.5 bg-[#D6A56E] hover:bg-[#c4935d] text-[#181B22] font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 shadow-lg"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call +39 0471 790033</span>
          </a>
        </div>
      </div>
    </div>
  );
};
