import React, { useState } from 'react';
import { useAppStore } from '../../store/useAppStore';
import { InstantQuoteWidget } from '../booking/InstantQuoteWidget';
import { FleetShowcase } from '../fleet/FleetShowcase';
import { ExcursionsSection } from '../excursions/ExcursionsSection';
import { DriversTrustSection } from '../consortium/DriversTrustSection';
import { FaqSection } from '../faq/FaqSection';
import { 
  Mountain, 
  Snowflake,
  Bike,
  Baby,
  MapPin, 
  PhoneCall, 
  MessageCircle, 
  Clock, 
  Navigation,
  ShieldCheck,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

export const ConceptAdventure: React.FC = () => {
  const { openBookingModal, t } = useAppStore();
  
  const [gear, setGear] = useState({
    skis: true,
    bikes: false,
    childSeats: false
  });

  const passes = [
    { name: 'Passo Sella', alt: '2,240m', time: '45m', desc: 'Direct ski access to Col Rodella slopes & Sassolungo' },
    { name: 'Passo Gardena', alt: '2,136m', time: '55m', desc: 'Dantercepies & Alta Badia connection' },
    { name: 'Passo Pordoi', alt: '2,239m', time: '50m', desc: 'Sass Pordoi cable car base' },
    { name: 'Passo Campolongo', alt: '1,875m', time: '40m', desc: 'Corvara & Arabba link' },
  ];

  return (
    <div className="bg-[#0B132B] text-[#F8FAFC] min-h-screen font-sans selection:bg-[#0284C7] selection:text-white">
      
      {/* HERO SECTION — ALPINE SKI & EXPEDITION */}
      <section className="relative min-h-[85vh] flex flex-col justify-center pt-16 pb-20 px-6 lg:px-16 overflow-hidden">
        {/* Real Fleet Lineup Mountain Photo */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/autosella-fleet-lineup-dolomites.jpg"
            alt="Dolomites Mountain Expedition"
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B132B]/90 via-[#0B132B]/75 to-[#0B132B]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EA580C]/20 border border-[#EA580C]/40 text-[#EA580C] text-xs font-black uppercase tracking-wider">
              <Mountain className="w-4 h-4" />
              <span>Sella Ronda & Dolomiti Superski</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] font-display">
              Dolomiti Alpine Express.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-lg leading-relaxed font-normal">
              Direct airport shuttles to the ski slopes of Ortisei, Santa Cristina, and Selva. 4x4 Mercedes vans equipped for oversized ski boxes and mountain bike trailers.
            </p>

            {/* Interactive Gear Loadout Toggles */}
            <div className="space-y-3 pt-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-sky-400 block">
                Select Your Equipment Loadout:
              </span>
              
              <div className="flex flex-wrap gap-2.5">
                <button
                  type="button"
                  onClick={() => setGear({ ...gear, skis: !gear.skis })}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border ${
                    gear.skis
                      ? "bg-[#0284C7] text-white border-sky-400 shadow-md"
                      : "bg-[#0F172A]/80 text-slate-400 border-white/10 hover:border-white/20"
                  }`}
                >
                  <span>⛷️ Ski & Snowboard Box</span>
                  <span className="text-[10px] opacity-80">{gear.skis ? "Included" : "+ Add"}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setGear({ ...gear, bikes: !gear.bikes })}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border ${
                    gear.bikes
                      ? "bg-[#0284C7] text-white border-sky-400 shadow-md"
                      : "bg-[#0F172A]/80 text-slate-400 border-white/10 hover:border-white/20"
                  }`}
                >
                  <Bike className="w-3.5 h-3.5" />
                  <span>Mountain Bike Trailer</span>
                  <span className="text-[10px] opacity-80">{gear.bikes ? "Included" : "+ Add"}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setGear({ ...gear, childSeats: !gear.childSeats })}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border ${
                    gear.childSeats
                      ? "bg-[#0284C7] text-white border-sky-400 shadow-md"
                      : "bg-[#0F172A]/80 text-slate-400 border-white/10 hover:border-white/20"
                  }`}
                >
                  <Baby className="w-3.5 h-3.5" />
                  <span>Child / Baby Seats</span>
                  <span className="text-[10px] opacity-80">{gear.childSeats ? "Included" : "+ Add"}</span>
                </button>
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => openBookingModal()}
                className="px-7 py-3.5 rounded-xl bg-[#EA580C] hover:bg-[#c2410c] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-orange-600/30 transition-all flex items-center gap-2"
              >
                <span>Book Mountain Shuttle</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/390471790033?text=Hello%20Taxi%20Auto%20Sella,%20I%20need%20a%20ski%20shuttle%20in%20Val%20Gardena."
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Dispatch</span>
              </a>
            </div>

          </div>

          {/* Right Column: Hero Calculator */}
          <div className="lg:col-span-6">
            <InstantQuoteWidget themeVariant="adventure" />
          </div>

        </div>
      </section>

      {/* SELLA RONDA 4-PASSES SECTION */}
      <section className="py-20 px-6 lg:px-16 max-w-7xl mx-auto border-t border-sky-900/40">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-display">
              Sella Ronda 4-Passes Tour
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Travel between the high Dolomite passes in heated 4MATIC Mercedes comfort. Direct connections to ski lift valleys.
            </p>
          </div>
          <div className="text-xs font-bold text-sky-400 bg-sky-500/10 px-3.5 py-1.5 rounded-full border border-sky-400/30 self-start md:self-auto">
            100% Alpine Winter Certified
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {passes.map((p, idx) => (
            <div
              key={idx}
              onClick={() => openBookingModal()}
              className="p-6 rounded-2xl bg-[#0F172A]/90 border border-sky-900/60 hover:border-sky-400 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-sky-400 font-bold mb-2">
                  <span>{p.alt}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {p.time}</span>
                </div>
                <h3 className="text-lg font-black text-white mb-1 group-hover:text-sky-300 transition-colors">
                  {p.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-sky-400 font-bold">
                <span>Book Transfer</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FLEET SHOWCASE */}
      <FleetShowcase themeVariant="adventure" />

      {/* EXCURSIONS */}
      <ExcursionsSection themeVariant="adventure" />

      {/* CONSORTIUM */}
      <DriversTrustSection themeVariant="adventure" />

      {/* FAQS */}
      <FaqSection themeVariant="adventure" />

      {/* ADVENTURE FOOTER */}
      <footer className="bg-[#050E1A] text-slate-400 py-14 px-6 lg:px-16 text-xs border-t border-sky-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2 font-display font-bold text-base text-white">
              <span>Taxi Auto Sella Consortium</span>
            </div>
            <p className="max-w-sm text-slate-400">
              Str. Gherdeina 7/A, I-39047 Santa Cristina (BZ), Val Gardena, Dolomites, Italy.
            </p>
            <p className="mt-1">VAT No.: IT01707460216 • 24/7 Ski Hotline: (+39) 0471 790033</p>
          </div>

          <div className="flex flex-col md:items-end gap-2">
            <div className="flex gap-4 text-sky-400">
              <a href="tel:+390471790033" className="hover:underline">Emergency Hotline</a>
              <a href="mailto:info@taxiautosella.it" className="hover:underline">Email Dispatch</a>
            </div>
            <p className="text-[11px] text-slate-500 mt-2">
              © {new Date().getFullYear()} Taxi Auto Sella Consortium. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
};
