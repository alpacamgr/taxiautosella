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

export const TechServicesPage: React.FC = () => {
  const { openBookingModal } = useAppStore();

  const services = [
    {
      title: 'Private Chauffeur & Limousine Service',
      desc: 'Discreet, high-comfort VIP transfers for business appointments, executive travel, and luxury chalet guests with meet & greet.',
      icon: <Sparkles className="w-5 h-5 text-[#D97706]" />
    },
    {
      title: 'Hotel-to-Ski-Slope Shuttles',
      desc: 'Direct shuttles from hotels, garni, and residences in Val Gardena to Seceda, Saslong, Ciampinoi, and Dantercepies.',
      icon: <Mountain className="w-5 h-5 text-[#D97706]" />
    },
    {
      title: 'Austrian Casino & Evening Trips',
      desc: 'Private transfers to the prestigious Austrian casinos in Innsbruck, Seefeld, and surrounding alpine cities.',
      icon: <Car className="w-5 h-5 text-[#D97706]" />
    },
    {
      title: 'Transport for Disabled Customers',
      desc: 'Fully equipped vehicles with wheelchair ramps and secure safety restraints. Door-to-door platform meeting service.',
      icon: <HeartHandshake className="w-5 h-5 text-[#D97706]" />
    },
    {
      title: 'Minor Injury & Patient Medical Transport',
      desc: 'Transportation for non-emergency patients with minor injuries returning to accommodations, clinics, or regional airports.',
      icon: <ShieldCheck className="w-5 h-5 text-[#D97706]" />
    },
    {
      title: 'Bike & Motorbike Shuttle Trailer',
      desc: 'Trailer capable of transporting up to 10 bicycles or 2–3 motorbikes. Available across the Dolomites and northern Italy.',
      icon: <Bike className="w-5 h-5 text-[#D97706]" />
    },
    {
      title: 'School Bus & Group Services',
      desc: 'Certified local transport for schools, youth groups, and sports associations throughout Val Gardena.',
      icon: <Bus className="w-5 h-5 text-[#D97706]" />
    },
    {
      title: 'Express Luggage & Courier Service',
      desc: 'Fast, dependable express delivery of baggage, ski equipment, and urgent packages between hotels and valleys.',
      icon: <Package className="w-5 h-5 text-[#D97706]" />
    },
    {
      title: 'Child Seats & Pet Transport',
      desc: 'Safety child seats (0–12 years) provided free on request. Safe and friendly transportation for household pets.',
      icon: <Baby className="w-5 h-5 text-[#D97706]" />
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-3">
          Taxi, Minibus & Bus Services
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Val Gardena’s largest taxi and bus consortium. Our central office provides a 24-hour service in high season for immediate calls and planned bookings.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {services.map((s, idx) => (
          <div key={idx} className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#D97706] transition-colors">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-5">
                {s.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">{s.desc}</p>
            </div>

            <button
              onClick={() => openBookingModal()}
              className="text-xs font-bold text-slate-900 hover:text-[#D97706] flex items-center gap-1.5 self-start"
            >
              <span>Inquire Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* 24h Dispatch Callout */}
      <div className="bg-[#0A192F] text-white p-8 sm:p-10 rounded-3xl border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold mb-1">24-Hour Central Taxi Dispatch</h2>
          <p className="text-xs text-slate-300">Available round the clock during high season in Val Gardena.</p>
        </div>
        <a
          href="tel:+390471790033"
          className="px-6 py-3.5 bg-[#D97706] hover:bg-[#b45309] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 shadow-lg whitespace-nowrap"
        >
          <PhoneCall className="w-4 h-4" />
          <span>Call (+39) 0471 790033</span>
        </a>
      </div>
    </div>
  );
};
