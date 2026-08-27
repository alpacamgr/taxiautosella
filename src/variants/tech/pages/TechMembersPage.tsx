import React from 'react';
import { Users, Award, ShieldCheck, HeartHandshake } from 'lucide-react';

export const TechMembersPage: React.FC = () => {
  const members = [
    "Kasslatter Armin", "Kasslatter Egon", "Kasslatter Mark",
    "Kostner Armin", "Lardschneider Marco", "Lardschneider Peter",
    "Malsiner Anton", "Malsiner Markus", "Moroder Anton",
    "Mussner Egon", "Mussner Georg", "Mussner Ivo",
    "Piazza Manuel", "Perathoner Ivan", "Perathoner Marco",
    "Ploner Andreas", "Senoner Erich", "Senoner Stefan"
  ];

  return (
    <div className="min-h-screen bg-[#090D14] text-white font-['Inter',sans-serif] pb-20">
      
      {/* Header */}
      <section className="px-6 pt-20 pb-12 max-w-7xl mx-auto border-b border-slate-800 text-center">
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
          The <span className="text-[#059669]">Consortium</span>.
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Taxi Auto Sella is an elite consortium of 18 independent driver-owners based in Val Gardena, united by a singular commitment to premium service.
        </p>
      </section>

      <section className="px-6 py-16 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
        
        {/* Members List */}
        <div className="lg:col-span-8 space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-[#059669]" />
            <h2 className="text-2xl font-bold">18 Independent Drivers. One Standard.</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {members.map((m, i) => (
              <div key={i} className="bg-[#111827] border border-slate-800 px-4 py-3 rounded-lg flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-xs font-bold text-slate-500">
                  {m.charAt(0)}
                </div>
                <span className="text-sm font-semibold text-slate-200">{m}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Structure */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
            <ShieldCheck className="w-8 h-8 text-[#059669] mb-4" />
            <h3 className="text-lg font-bold mb-2">Consortium Structure</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Unlike gig-economy platforms, every driver in our consortium is an owner-operator. This ensures extreme accountability, impeccable vehicle maintenance, and a deep, personal knowledge of the Dolomite roads.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
              <Award className="w-4 h-4 text-[#059669]" /> 100% Local Expertise
            </div>
          </div>
        </div>

      </section>

      {/* Partners */}
      <section className="px-6 py-16 max-w-7xl mx-auto border-t border-slate-800">
        <div className="flex items-center gap-3 mb-12">
          <HeartHandshake className="w-6 h-6 text-[#059669]" />
          <h2 className="text-2xl font-bold">Official Partners & Sponsors</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="font-bold text-slate-500 uppercase tracking-widest text-xs">Tourism & Medical</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center text-center font-bold text-slate-300">
                Val Gardena Tourism
              </div>
              <div className="p-6 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center text-center font-bold text-slate-300">
                Intersport Rent
              </div>
              <div className="p-6 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center text-center font-bold text-slate-300">
                Dolomiti Sportclinic
              </div>
              <div className="p-6 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center text-center font-bold text-slate-300">
                Elikos Helicopters
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-slate-500 uppercase tracking-widest text-xs">Val Gardena Nightlife</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center text-center font-bold text-slate-300">
                Luislkeller
              </div>
              <div className="p-6 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center text-center font-bold text-slate-300">
                Mauriz Keller
              </div>
              <div className="p-6 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center text-center font-bold text-slate-300">
                La Bula
              </div>
              <div className="p-6 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center text-center font-bold text-slate-300">
                Yello's
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
