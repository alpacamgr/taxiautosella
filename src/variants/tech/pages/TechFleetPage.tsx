import React from 'react';
import { CarFront, Users, Briefcase, Settings2, Plus, ArrowRight } from 'lucide-react';

export const TechFleetPage: React.FC = () => {
  const fleet = [
    {
      class: 'Executive Sedan',
      models: 'Mercedes E-Class 4MATIC',
      pax: 3,
      luggage: 3,
      features: ['Leather interior', 'Free WiFi', 'AWD for snow', 'Climate control'],
      highlight: false
    },
    {
      class: 'VIP Luxury Sedan',
      models: 'Mercedes S-Class Long VIP',
      pax: 2,
      luggage: 2,
      features: ['Massage seats', 'Privacy glass', 'AWD for snow', 'Bottled water'],
      highlight: true
    },
    {
      class: 'Luxury SUV',
      models: 'Mercedes GLS 4MATIC',
      pax: 4,
      luggage: 4,
      features: ['Panoramic roof', 'Air suspension', 'Extra legroom'],
      highlight: false
    },
    {
      class: 'Premium Minivan',
      models: 'Mercedes V-Class VIP',
      pax: 7,
      luggage: 7,
      features: ['Conference seating', 'Extra long wheel base', 'Ski box option'],
      highlight: true
    },
    {
      class: 'Standard Minivan',
      models: 'Mercedes Vito 4MATIC / Caravelle',
      pax: 8,
      luggage: 8,
      features: ['Cost effective', 'High capacity', 'Ski box option'],
      highlight: false
    },
    {
      class: 'VIP Minibus',
      models: 'Mercedes Sprinter VIP Coach',
      pax: 20,
      luggage: 20,
      features: ['Reclining seats', 'Microphone', 'Large cargo hold', 'USB charging'],
      highlight: false
    },
    {
      class: 'Grand Coach',
      models: '56-Passenger Touring Coach',
      pax: 56,
      luggage: 60,
      features: ['Restroom', 'Fridge', 'TV/DVD', 'Huge luggage bays'],
      highlight: false
    }
  ];

  const specialized = [
    { name: 'Disabled Accessible Van', desc: 'Equipped with hydraulic lift for wheelchair accessibility.' },
    { name: 'Ski/Bike Trailers', desc: 'Enclosed, secure trailers for up to 10 bikes or 20 pairs of skis.' },
    { name: 'Film Production Support', desc: 'Logistics vans for camera equipment and crew transport.' }
  ];

  return (
    <div className="min-h-screen bg-[#090D14] text-white font-['Inter',sans-serif] pb-20">
      
      {/* Header */}
      <section className="px-6 pt-20 pb-12 max-w-7xl mx-auto border-b border-slate-800">
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
          The <span className="text-[#059669]">Fleet</span> Matrix.
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mb-6">
          25 state-of-the-art vehicles. All strictly equipped with 4MATIC All-Wheel Drive and premium winter tires for absolute safety in the Dolomites.
        </p>
        <div className="flex flex-wrap gap-3">
          <span className="px-3 py-1 bg-slate-800 text-xs font-bold rounded-md">100% 4MATIC</span>
          <span className="px-3 py-1 bg-slate-800 text-xs font-bold rounded-md">Avg. Age &lt; 3 Years</span>
          <span className="px-3 py-1 bg-slate-800 text-xs font-bold rounded-md">Euro 6d Emissions</span>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {fleet.map((vehicle, i) => (
            <div key={i} className={`p-6 rounded-xl border ${vehicle.highlight ? 'bg-[#059669]/10 border-[#059669]/50' : 'bg-[#111827] border-slate-800'} relative group flex flex-col`}>
              {vehicle.highlight && (
                <div className="absolute top-0 right-6 -translate-y-1/2 px-3 py-1 bg-[#059669] text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                  Popular
                </div>
              )}
              
              <h3 className="text-xl font-bold text-slate-200 mb-1">{vehicle.class}</h3>
              <p className="text-sm text-slate-400 font-medium mb-6">{vehicle.models}</p>
              
              <div className="flex gap-4 mb-6">
                <div className="flex items-center gap-1.5 text-sm font-bold text-slate-300">
                  <Users className="w-4 h-4 text-slate-500" /> {vehicle.pax} Pax
                </div>
                <div className="flex items-center gap-1.5 text-sm font-bold text-slate-300">
                  <Briefcase className="w-4 h-4 text-slate-500" /> {vehicle.luggage} Bags
                </div>
              </div>
              
              <ul className="space-y-2 mb-8 flex-1">
                {vehicle.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-slate-400">
                    <Plus className="w-3.5 h-3.5 text-[#059669] shrink-0 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>

              <button className="w-full py-2.5 bg-slate-800 text-slate-200 text-xs font-bold rounded-lg hover:bg-slate-700 transition-colors flex items-center justify-center gap-2">
                Request <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}

        </div>
      </section>

      {/* Specialized Units */}
      <section className="px-6 py-16 max-w-7xl mx-auto border-t border-slate-800">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Settings2 className="w-6 h-6 text-[#059669]" /> Specialized Units
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {specialized.map((s, i) => (
            <div key={i} className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
              <h4 className="font-bold text-slate-200 mb-2">{s.name}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
