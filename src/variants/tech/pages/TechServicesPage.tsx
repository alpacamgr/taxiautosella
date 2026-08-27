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
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export const TechServicesPage: React.FC = () => {
  const { openInquiryModal } = useAppStore();

  const services = [
    {
      title: 'Private Chauffeur & VIP Limousine Service',
      subtitle: 'Executive Business & VIP Travel',
      desc: 'Discreet, high-comfort VIP transfers in Mercedes S-Class and V-Class for business delegations, executive travel, and luxury chalet guests with white-glove meet & greet.',
      features: ['Mercedes-Benz S-Class & V-Class', 'Flight Tracking & VIP Meet & Greet', 'Complimentary Bottled Water & WiFi'],
      icon: Sparkles
    },
    {
      title: 'Hotel-to-Ski-Slope & Pass Shuttles',
      subtitle: 'Direct Ski Mountain Logistics',
      desc: 'Direct shuttles from hotels, garni, and private residences across Ortisei, Santa Cristina, and Selva directly to Seceda, Saslong, Ciampinoi, Dantercepies, and Passo Sella.',
      features: ['Roof Ski Boxes & Heated Cabins', 'Fast Valley Transfers', 'Door-to-Door Mountain Base Access'],
      icon: Mountain
    },
    {
      title: 'Nightlife, Dining & Après-Ski Taxis',
      subtitle: '24/7 Valley Dispatch',
      desc: 'Prompt evening and late-night shuttle services connecting hotels with Michelin-starred restaurants, traditional mountain huts, and popular Val Gardena après-ski venues.',
      features: ['24/7 High-Season Operation', 'Fixed Valley Rates', 'Group Transport up to 8 Pax per Minibus'],
      icon: Car
    },
    {
      title: 'Transport for Disabled Passengers',
      subtitle: 'Wheelchair Ramp & Lift Accessible',
      desc: 'Specially converted Mercedes vans equipped with electric/hydraulic wheelchair lifts, ISO 4-point floor tie-downs, and trained compassionate assistance chauffeurs.',
      features: ['Certified Hydraulic Wheelchair Lift', 'ISO 4-Point Safety Floor Restraints', 'Companion Seating up to 7 Pax'],
      icon: HeartHandshake
    },
    {
      title: 'Patient & Minor Injury Medical Transfers',
      subtitle: 'Clinic & Repatriation Transport',
      desc: 'Comfortable, non-emergency medical transportation for injured skiers and patients between Dolomiti Sportclinic, regional hospitals (Bolzano, Bressanone), and home/airports.',
      features: ['Gentle Air-Suspension Ride', 'Direct Clinic & Hospital Coordination', 'Direct Airport Repatriation'],
      icon: ShieldCheck
    },
    {
      title: 'Mountain Bike & Motorbike Trailer Shuttles',
      subtitle: 'Heavy Equipment Logistics',
      desc: 'Custom weatherproof enclosed trailers capable of carrying up to 10 downhill/e-bikes or 3 motorbikes for the Sella Ronda MTB tour, Brenner Pass, and breakdown recovery.',
      features: ['Up to 10 Mountain Bikes / E-Bikes', 'Weatherproof Lockable Enclosure', 'Pass Crossings & Sella Ronda Support'],
      icon: Bike
    },
    {
      title: 'Large Group Coaches & School Bus Services',
      subtitle: 'High-Capacity Group Transport',
      desc: 'Certified luxury touring coaches (16 to 56 seats) for corporate conferences, wedding parties, ski clubs, and youth sports events across South Tyrol and the Alps.',
      features: ['16, 30, and 56-Seat Coach Capacities', 'Onboard Restroom & PA Sound Systems', 'Certified Professional Touring Drivers'],
      icon: Bus
    },
    {
      title: 'Express Courier & Luggage Transfers',
      subtitle: 'Same-Day Urgent Delivery',
      desc: 'Fast, secure same-day delivery of oversized baggage, ski bags, forgotten personal items, and urgent business documents throughout the Dolomite valleys and airports.',
      features: ['Same-Day Direct Delivery', 'Direct Hotel-to-Hotel Luggage Forwarding', 'Urgent Valley Document Dispatch'],
      icon: Package
    },
    {
      title: 'Free Child Seats & Pet Transport',
      subtitle: 'Family & Pet Friendly',
      desc: 'Certified child safety seats and infant capsules (0–12 years) provided completely free of charge upon request. Safe, courteous transportation for household dogs.',
      features: ['Free Certified ISOFIX Child Seats', 'Pet-Friendly Clean Cabins', 'Spacious Climate-Controlled Interiors'],
      icon: Baby
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#D97706] block mb-2">
          Full Spectrum Mobility
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mb-3">
          Taxi, Minibus & Bus Services
        </h1>
        <p className="text-base text-slate-600 leading-relaxed font-normal">
          As Val Gardena’s largest transportation consortium, we provide 24-hour mobility in peak season. Discover our complete range of passenger, group, and specialized transport solutions.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {services.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div 
              key={idx} 
              className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#D97706] hover:shadow-lg transition-all group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-5 group-hover:bg-[#0A192F] transition-colors">
                  <Icon className="w-6 h-6 text-[#D97706] group-hover:text-[#F59E0B]" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 mb-1">{s.title}</h3>
                <p className="text-xs font-bold text-[#D97706] uppercase tracking-wide mb-3">{s.subtitle}</p>
                <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">{s.desc}</p>

                <ul className="space-y-1.5 mb-6 text-xs text-slate-600 font-medium">
                  {s.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D97706] flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => openInquiryModal('Service Request', `Service: ${s.title}\nCategory: ${s.subtitle}\n\nPlease advise on rates and availability.`)}
                className="w-full py-2.5 bg-slate-50 hover:bg-[#0A192F] hover:text-white text-slate-900 border border-slate-200 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Request Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          );
        })}
      </div>

      {/* 24/7 Hotline Contact Banner */}
      <div className="bg-[#0A192F] text-white p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-2xl">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#F59E0B] block mb-2">
            Instant Valley Dispatch
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
            Need an Immediate Ride in Val Gardena?
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Our central consortium dispatch office is staffed 24 hours a day in high season to handle on-demand taxi requests in Ortisei, Santa Cristina, and Selva.
          </p>
        </div>
        <a
          href="tel:+390471790033"
          className="w-full md:w-auto px-8 py-4 bg-[#F59E0B] hover:bg-[#d97706] text-black font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg flex-shrink-0 flex items-center justify-center gap-2"
        >
          <PhoneCall className="w-4 h-4 text-black" />
          <span>Call +39 0471 790033</span>
        </a>
      </div>

    </div>
  );
};
