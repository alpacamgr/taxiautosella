import React from 'react';
import { PlaneTakeoff, Snowflake, HeartPulse, GraduationCap, PackageOpen, Bike, Dice5, Baby, Dog } from 'lucide-react';

export const TechServicesPage: React.FC = () => {
  const services = [
    { icon: <PlaneTakeoff />, title: 'Airport Transfers', desc: 'Direct, private transfers from all major airports in Northern Italy, Austria, and Southern Germany to your hotel in the Dolomites.' },
    { icon: <Snowflake />, title: 'Hotel-to-Slope Ski Shuttles', desc: 'Daily dedicated shuttles taking you from your hotel door directly to the Sella Ronda lifts or Dolomiti Superski starting points.' },
    { icon: <Dice5 />, title: 'Austrian Casino Trips', desc: 'Evening VIP transport to Casino Innsbruck or Casino Seefeld, including waiting time and late-night return.' },
    { icon: <HeartPulse />, title: 'Minor Injury Patient Transport & Disabled', desc: 'Specialized vans for non-emergency medical transport (e.g., knee injuries from skiing) and fully wheelchair-accessible vans with hydraulic lifts.' },
    { icon: <GraduationCap />, title: 'School Bus Services', desc: 'Trusted daily routing for local schools in the Val Gardena municipality with fully certified drivers.' },
    { icon: <Baby />, title: 'Child Seats Provided', desc: 'We provide certified infant, toddler, and booster seats completely free of charge upon request.' },
    { icon: <Dog />, title: 'Pet Transport', desc: 'Your furry friends are welcome. We provide adequate space and secure transport for dogs of all sizes.' },
    { icon: <PackageOpen />, title: 'Express Luggage Courier', desc: 'Need your bags sent ahead? Or left something at the airport? We provide rapid point-to-point courier services.' },
    { icon: <Bike />, title: '10-Bike / Ski Trailers', desc: 'Large groups? Our specialized enclosed trailers can haul up to 10 mountain bikes or 20 pairs of skis securely.' },
  ];

  return (
    <div className="min-h-screen bg-[#090D14] text-white font-['Inter',sans-serif] pb-20">
      
      {/* Header */}
      <section className="px-6 pt-20 pb-12 max-w-7xl mx-auto border-b border-slate-800">
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
          Capabilities & <span className="text-[#059669]">Services</span>.
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl">
          Beyond standard transfers. We offer a full spectrum of specialized mobility solutions for the Val Gardena region.
        </p>
      </section>

      {/* Services Grid */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="p-6 bg-[#111827] border border-slate-800 rounded-xl hover:border-[#059669]/50 transition-colors group">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-[#059669] mb-6 group-hover:scale-110 transition-transform">
                {React.cloneElement(s.icon as React.ReactElement, { className: 'w-6 h-6' })}
              </div>
              <h3 className="text-xl font-bold text-slate-200 mb-3">{s.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
