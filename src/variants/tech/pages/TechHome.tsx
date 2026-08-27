import React, { useState } from 'react';
import { Plane, Car, Clock, ShieldCheck, ArrowRight, Activity, MapPin } from 'lucide-react';

export const TechHome: React.FC = () => {
  const [season, setSeason] = useState<'winter' | 'summer'>('winter');

  return (
    <div className="min-h-screen bg-[#090D14] text-white font-['Inter',sans-serif] selection:bg-[#059669] selection:text-white pb-20">
      
      {/* Hero Section */}
      <section className="relative px-6 pt-20 pb-24 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="absolute inset-0 bg-gradient-to-br from-[#059669]/10 to-transparent pointer-events-none rounded-full blur-3xl opacity-50 -top-40 -left-40 w-96 h-96"></div>
        
        <div className="flex-1 z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm text-xs font-medium text-slate-300">
            <Activity className="w-4 h-4 text-[#059669]" />
            <span>24/7 Live Flight Tracking Active</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Precision Mobility <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#059669] to-emerald-400">
              For The Dolomites.
            </span>
          </h1>
          
          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
            High-tech airport transfers to Val Gardena and the Dolomites. 
            Real-time routing, transparent pricing, and unparalleled reliability.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-[#090D14] font-bold rounded-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
              Book Transfer <ArrowRight className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-4 text-sm text-slate-400 font-medium">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#059669]"/> Fully Insured</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#059669]"/> 24/7 Hotline</span>
            </div>
          </div>
        </div>

        <div className="flex-1 z-10 w-full relative">
          <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#059669]/20 blur-3xl rounded-full"></div>
            
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Plane className="w-5 h-5 text-[#059669]" /> Quick Route Calculator
            </h3>
            
            <div className="space-y-4">
              <div className="bg-[#090D14] border border-slate-800 rounded-lg p-3 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-slate-500" />
                <div className="flex-1">
                  <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Pickup</label>
                  <select className="w-full bg-transparent text-white font-medium outline-none appearance-none cursor-pointer">
                    <option value="innsbruck">Innsbruck Airport (INN)</option>
                    <option value="munich">Munich Airport (MUC)</option>
                    <option value="verona">Verona Airport (VRN)</option>
                    <option value="venice">Venice Airport (VCE)</option>
                    <option value="milan">Milan Malpensa (MXP)</option>
                  </select>
                </div>
              </div>

              <div className="bg-[#090D14] border border-slate-800 rounded-lg p-3 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#059669]" />
                <div className="flex-1">
                  <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Dropoff</label>
                  <select className="w-full bg-transparent text-white font-medium outline-none appearance-none cursor-pointer">
                    <option value="val_gardena">Val Gardena / Gröden</option>
                    <option value="ortisei">Ortisei / St. Ulrich</option>
                    <option value="selva">Selva / Wolkenstein</option>
                    <option value="corvara">Corvara (Alta Badia)</option>
                  </select>
                </div>
              </div>

              <button className="w-full py-3.5 bg-[#059669] text-white font-bold rounded-lg hover:bg-[#047857] transition-colors mt-2">
                Calculate Instant Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Toggle & 3-Step Flow */}
      <section className="px-6 py-20 bg-[#111827] border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">The Velocity Flow</h2>
              <p className="text-slate-400">Frictionless travel from arrivals to the alpine slopes.</p>
            </div>
            
            <div className="flex bg-[#090D14] border border-slate-800 rounded-lg p-1">
              <button 
                onClick={() => setSeason('winter')}
                className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${season === 'winter' ? 'bg-[#059669] text-white' : 'text-slate-400 hover:text-white'}`}
              >
                ❄️ Winter Ski Mode
              </button>
              <button 
                onClick={() => setSeason('summer')}
                className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${season === 'summer' ? 'bg-amber-500 text-slate-900' : 'text-slate-400 hover:text-white'}`}
              >
                ☀️ Summer Alpine Mode
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'Real-Time Dispatch', desc: 'We track your flight live. If you are delayed, your driver waits automatically.' },
              { num: '02', title: season === 'winter' ? 'Ski & Gear Loading' : 'Bike & Hike Prep', desc: season === 'winter' ? 'Specialized trailers for skis & snowboards loaded securely.' : 'Mountain bike trailers and extensive luggage capacity available.' },
              { num: '03', title: 'Precision Dropoff', desc: 'Direct to your hotel door, navigating alpine roads with elite local drivers.' }
            ].map((step, i) => (
              <div key={i} className="p-6 bg-[#090D14] border border-slate-800 rounded-xl relative group hover:border-[#059669]/50 transition-colors">
                <div className="text-4xl font-black text-slate-800 absolute top-4 right-4">{step.num}</div>
                <h4 className="text-xl font-bold mb-3 mt-6">{step.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
