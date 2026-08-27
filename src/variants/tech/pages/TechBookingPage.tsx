import React from 'react';
import { Plane, Train, Clock, CheckCircle } from 'lucide-react';

export const TechBookingPage: React.FC = () => {
  const airports = [
    { name: 'Innsbruck (INN)', price: '180€', time: '1h 30m' },
    { name: 'Verona (VRN)', price: '220€', time: '2h 00m' },
    { name: 'Venice (VCE)', price: '350€', time: '3h 15m' },
    { name: 'Treviso (TSF)', price: '340€', time: '3h 00m' },
    { name: 'Bergamo (BGY)', price: '380€', time: '3h 30m' },
    { name: 'Milan Linate (LIN)', price: '450€', time: '4h 00m' },
    { name: 'Milan Malpensa (MXP)', price: '480€', time: '4h 15m' },
    { name: 'Munich (MUC)', price: '400€', time: '3h 45m' },
    { name: 'Bologna (BLQ)', price: '390€', time: '3h 30m' },
    { name: 'Bolzano (BZO)', price: '90€', time: '0h 45m' },
  ];

  return (
    <div className="min-h-screen bg-[#090D14] text-white font-['Inter',sans-serif] pb-20">
      
      {/* Header */}
      <section className="px-6 pt-20 pb-12 max-w-7xl mx-auto border-b border-slate-800">
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
          Transparent <span className="text-[#059669]">Pricing</span> Matrix.
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl">
          Fixed rates with zero hidden fees. All prices include taxes, highway tolls, and standard luggage. 
        </p>
      </section>

      {/* Pricing Tables */}
      <section className="px-6 py-16 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        
        {/* Airports */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <Plane className="w-6 h-6 text-[#059669]" />
            <h2 className="text-2xl font-bold">Airport Transfers</h2>
          </div>
          
          <div className="bg-[#111827] rounded-xl border border-slate-800 overflow-hidden">
            <table className="w-full text-sm text-left">
              <thead className="bg-[#090D14] border-b border-slate-800 text-slate-400 font-bold uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="px-6 py-4">Airport</th>
                  <th className="px-6 py-4">Est. Time</th>
                  <th className="px-6 py-4 text-right">Starting From</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                {airports.map((a, i) => (
                  <tr key={i} className="hover:bg-slate-800/20 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-200">{a.name}</td>
                    <td className="px-6 py-4 text-slate-500">{a.time}</td>
                    <td className="px-6 py-4 text-right font-bold text-[#059669]">{a.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Stations & Hourly */}
        <div className="space-y-12">
          
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <Train className="w-6 h-6 text-[#059669]" />
              <h2 className="text-2xl font-bold">Train Stations</h2>
            </div>
            <div className="bg-[#111827] rounded-xl border border-slate-800 p-6 space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-slate-800/50">
                <div>
                  <h4 className="font-bold text-slate-200">Bolzano / Bozen Station</h4>
                  <p className="text-xs text-slate-500">45 minutes to Val Gardena</p>
                </div>
                <div className="text-lg font-bold text-[#059669]">From 90€</div>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-slate-800/50">
                <div>
                  <h4 className="font-bold text-slate-200">Bressanone / Brixen</h4>
                  <p className="text-xs text-slate-500">40 minutes to Val Gardena</p>
                </div>
                <div className="text-lg font-bold text-[#059669]">From 80€</div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-slate-200">Chiusa / Klausen</h4>
                  <p className="text-xs text-slate-500">30 minutes to Val Gardena</p>
                </div>
                <div className="text-lg font-bold text-[#059669]">From 60€</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <Clock className="w-6 h-6 text-[#059669]" />
              <h2 className="text-2xl font-bold">Hourly Dispositions</h2>
            </div>
            <div className="bg-gradient-to-br from-[#111827] to-[#090D14] rounded-xl border border-slate-800 p-6">
              <p className="text-slate-400 text-sm mb-6">For business roadshows, flexible ski safaris, or VIP shopping trips.</p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-[#059669]" /> Minivan (up to 8 pax): <span className="font-bold text-white ml-auto">75€ / hour</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-[#059669]" /> Executive Sedan: <span className="font-bold text-white ml-auto">85€ / hour</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-[#059669]" /> Luxury S-Class: <span className="font-bold text-white ml-auto">On Request</span>
                </li>
              </ul>
              
              <div className="text-xs text-slate-500 bg-slate-900/50 p-3 rounded-lg border border-slate-800">
                Minimum booking: 3 hours. Mileage limits apply.
              </div>
            </div>
          </div>

        </div>

      </section>
    </div>
  );
};
