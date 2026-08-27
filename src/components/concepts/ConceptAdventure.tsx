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
  MessageCircle, 
  Clock, 
  ChevronRight,
  ArrowRight,
  Sun,
  Backpack,
  Map,
  Compass,
  PhoneCall
} from 'lucide-react';

type Season = 'winter' | 'summer';

export const ConceptAdventure: React.FC = () => {
  const { openBookingModal } = useAppStore();
  
  const [season, setSeason] = useState<Season>('winter');
  
  const [gear, setGear] = useState({
    skis: true,
    snowboards: false,
    bikes: false,
    childSeats: false,
    hikingPacks: false
  });

  const isWinter = season === 'winter';

  const passes = [
    { 
      name: 'Passo Sella', 
      alt: '2,240m', 
      winterTime: '45m', 
      summerTime: '40m',
      winterDesc: 'Direct ski access to Col Rodella slopes & Sassolungo',
      summerDesc: 'Hiking trails to Sassolungo & mountain bike paradise',
      winterStatus: 'Open (Winter Tires/Chains Req)',
      summerStatus: 'Open (Summer Tires)'
    },
    { 
      name: 'Passo Gardena', 
      alt: '2,136m', 
      winterTime: '55m', 
      summerTime: '45m',
      winterDesc: 'Dantercepies & Alta Badia connection',
      summerDesc: 'Puez-Odle Nature Park gateway',
      winterStatus: 'Open (Winter Tires/Chains Req)',
      summerStatus: 'Open (Summer Tires)'
    },
    { 
      name: 'Passo Pordoi', 
      alt: '2,239m', 
      winterTime: '50m', 
      summerTime: '45m',
      winterDesc: 'Sass Pordoi cable car base',
      summerDesc: 'Terrace of the Dolomites & historical cycling route',
      winterStatus: 'Open (Winter Tires/Chains Req)',
      summerStatus: 'Open (Summer Tires)'
    },
    { 
      name: 'Passo Campolongo', 
      alt: '1,875m', 
      winterTime: '40m', 
      summerTime: '35m',
      winterDesc: 'Corvara & Arabba link',
      summerDesc: 'Easy gradient road connecting Badia and Livinallongo',
      winterStatus: 'Open (Winter Tires/Chains Req)',
      summerStatus: 'Open (Summer Tires)'
    },
  ];

  // Theme constants
  const theme = {
    bg: isWinter ? 'bg-[#071526]' : 'bg-[#0B192C]',
    text: isWinter ? 'text-[#F0F9FF]' : 'text-[#FEF3C7]',
    primary: isWinter ? 'text-[#38BDF8]' : 'text-[#059669]',
    primaryBg: isWinter ? 'bg-[#38BDF8]' : 'bg-[#059669]',
    primaryBorder: isWinter ? 'border-[#38BDF8]' : 'border-[#059669]',
    accentBg: isWinter ? 'bg-[#EA580C]' : 'bg-[#D97706]',
    accentHover: isWinter ? 'hover:bg-[#C2410C]' : 'hover:bg-[#B45309]',
    cardBg: isWinter ? 'bg-[#0F172A]/90' : 'bg-[#1E293B]/90',
    cardBorder: isWinter ? 'border-sky-900/60 hover:border-sky-400' : 'border-emerald-900/60 hover:border-emerald-400',
    mutedText: isWinter ? 'text-slate-400' : 'text-[#FEF3C7]/70',
    btnInactive: isWinter ? 'bg-[#0F172A]/80 border-white/10 hover:border-white/20 text-slate-400' : 'bg-[#1E293B]/80 border-white/10 hover:border-emerald-900/50 text-[#FEF3C7]/60',
    btnActive: isWinter ? 'bg-[#0284C7] text-white border-sky-400' : 'bg-[#059669] text-white border-emerald-400',
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-700 ease-in-out ${theme.bg} ${theme.text} selection:bg-white/20`}>
      
      {/* MASTER SEASON SWITCHER (Floating) */}
      <div className="fixed top-24 right-6 lg:right-16 z-50 flex items-center bg-black/40 backdrop-blur-md rounded-full p-1 border border-white/10 shadow-2xl">
        <button 
          onClick={() => setSeason('winter')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${isWinter ? 'bg-white text-[#071526]' : 'text-white/60 hover:text-white'}`}
        >
          <Snowflake className="w-4 h-4" />
          <span>Winter</span>
        </button>
        <button 
          onClick={() => setSeason('summer')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${!isWinter ? 'bg-[#FEF3C7] text-[#0B192C]' : 'text-white/60 hover:text-white'}`}
        >
          <Sun className="w-4 h-4" />
          <span>Summer</span>
        </button>
      </div>

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-center pt-24 pb-20 px-6 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 z-0 transition-opacity duration-1000">
          <img
            src="/images/hero/autosella-fleet-lineup-dolomites.jpg"
            alt="Dolomites Mountain Expedition"
            className={`w-full h-full object-cover scale-105 transition-all duration-1000 ${isWinter ? 'opacity-40 grayscale-[20%]' : 'opacity-30 sepia-[30%] hue-rotate-[-10deg]'}`}
          />
          <div className={`absolute inset-0 bg-gradient-to-b transition-colors duration-1000 ${isWinter ? 'from-[#071526]/95 via-[#071526]/75 to-[#071526]' : 'from-[#0B192C]/95 via-[#0B192C]/75 to-[#0B192C]'}`} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-8">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${isWinter ? 'bg-[#38BDF8]/20 border-[#38BDF8]/40 text-[#38BDF8]' : 'bg-[#059669]/20 border-[#059669]/40 text-[#059669]'} text-xs font-black uppercase tracking-wider transition-colors`}>
              <Mountain className="w-4 h-4" />
              <span>{isWinter ? 'Winter Dolomiti Superski' : 'Summer Alpine Nirvana'}</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] font-display">
              {isWinter ? 'Alpine Ski Express.' : 'Dolomite Trails & Transits.'}
            </h1>

            <p className={`text-base sm:text-lg max-w-lg leading-relaxed font-normal ${theme.mutedText}`}>
              {isWinter 
                ? 'Direct airport shuttles to the ski slopes of Ortisei, Santa Cristina, and Selva. 4x4 Mercedes vans equipped for oversized ski boxes and safe winter transit.'
                : 'Premium trailhead shuttles, Trans-Dolomite luggage transport, and MTB trailers. Discover UNESCO peaks in ultimate comfort.'}
            </p>

            {/* Interactive Gear Loadout Configurator */}
            <div className="space-y-4 pt-2">
              <span className={`text-[11px] font-bold uppercase tracking-widest block ${theme.primary}`}>
                Select Your Equipment Loadout:
              </span>
              
              <div className="flex flex-wrap gap-3">
                {isWinter && (
                  <>
                    <button
                      type="button"
                      onClick={() => setGear({ ...gear, skis: !gear.skis })}
                      className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border ${gear.skis ? theme.btnActive : theme.btnInactive}`}
                    >
                      <span>⛷️ Skis</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setGear({ ...gear, snowboards: !gear.snowboards })}
                      className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border ${gear.snowboards ? theme.btnActive : theme.btnInactive}`}
                    >
                      <span>🏂 Snowboards</span>
                    </button>
                  </>
                )}
                {!isWinter && (
                  <>
                    <button
                      type="button"
                      onClick={() => setGear({ ...gear, bikes: !gear.bikes })}
                      className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border ${gear.bikes ? theme.btnActive : theme.btnInactive}`}
                    >
                      <Bike className="w-3.5 h-3.5" />
                      <span>MTB/E-Bikes</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setGear({ ...gear, hikingPacks: !gear.hikingPacks })}
                      className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border ${gear.hikingPacks ? theme.btnActive : theme.btnInactive}`}
                    >
                      <Backpack className="w-3.5 h-3.5" />
                      <span>Hiking Packs</span>
                    </button>
                  </>
                )}
                <button
                  type="button"
                  onClick={() => setGear({ ...gear, childSeats: !gear.childSeats })}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border ${gear.childSeats ? theme.btnActive : theme.btnInactive}`}
                >
                  <Baby className="w-3.5 h-3.5" />
                  <span>Child Seats</span>
                </button>
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => openBookingModal()}
                className={`px-7 py-4 rounded-xl ${theme.accentBg} ${theme.accentHover} text-white font-extrabold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center gap-2`}
              >
                <span>Book {isWinter ? 'Winter' : 'Summer'} Expedition</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/390471790033?text=Hello%20Taxi%20Auto%20Sella,%20I%20need%20a%20shuttle%20in%20Val%20Gardena."
                target="_blank"
                rel="noreferrer"
                className="px-5 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold text-xs flex items-center gap-2 backdrop-blur-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>24/7 WhatsApp Dispatch</span>
              </a>
            </div>

          </div>

          <div className="lg:col-span-6 relative z-20">
             <div className="relative">
                <div className={`absolute -inset-4 bg-gradient-to-r ${isWinter ? 'from-sky-500/20 to-blue-500/20' : 'from-emerald-500/20 to-amber-500/10'} blur-2xl -z-10 rounded-full opacity-60 transition-colors duration-1000`} />
                <InstantQuoteWidget themeVariant="adventure" />
             </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE ELEVATION & PASS EXPLORER */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display mb-4 tracking-tight">
              {isWinter ? 'Sella Ronda 4-Passes Tour' : 'UNESCO Passes & Trails'}
            </h2>
            <p className={`text-sm sm:text-base ${theme.mutedText} leading-relaxed`}>
              {isWinter 
                ? 'Travel between the high Dolomite passes in heated 4MATIC Mercedes comfort. Direct connections to ski lift valleys and safe transit even in heavy snowfall.'
                : 'Access remote trailheads and breathtaking mountain passes. We handle the driving and luggage so you can focus on the hike.'}
            </p>
          </div>
          <div className={`text-xs font-bold ${theme.primary} ${isWinter ? 'bg-[#38BDF8]/10 border-[#38BDF8]/30' : 'bg-[#059669]/10 border-[#059669]/30'} px-4 py-2 rounded-full border self-start md:self-auto flex items-center gap-2`}>
            <Compass className="w-4 h-4" />
            {isWinter ? '100% Alpine Winter Certified' : 'Off-Road & MTB Ready'}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {passes.map((p, idx) => (
            <div
              key={idx}
              onClick={() => openBookingModal()}
              className={`p-8 rounded-2xl ${theme.cardBg} border ${theme.cardBorder} transition-all cursor-pointer group flex flex-col justify-between h-full relative overflow-hidden shadow-xl`}
            >
              <div className={`absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 ${theme.primaryBg} rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`flex items-center justify-between text-xs font-bold mb-4 ${theme.primary}`}>
                  <span className="flex items-center gap-1.5"><Map className="w-3.5 h-3.5" /> {p.alt}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {isWinter ? p.winterTime : p.summerTime}</span>
                </div>
                <h3 className="text-xl font-black mb-3 group-hover:text-white transition-colors tracking-tight font-display">
                  {p.name}
                </h3>
                <p className={`text-sm ${theme.mutedText} leading-relaxed mb-6 min-h-[4rem]`}>
                  {isWinter ? p.winterDesc : p.summerDesc}
                </p>
                <div className="inline-block px-2.5 py-1.5 rounded bg-black/40 text-[10px] font-bold uppercase tracking-wider text-white/70 border border-white/10">
                  {isWinter ? p.winterStatus : p.summerStatus}
                </div>
              </div>

              <div className={`pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-bold ${theme.primary} relative z-10`}>
                <span>Book Transfer</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FLEET SHOWCASE */}
      <div className={`transition-all duration-1000 ${isWinter ? '' : 'sepia-[20%] hue-rotate-[-5deg]'}`}>
        <FleetShowcase themeVariant="adventure" />
      </div>

      {/* EXCURSIONS */}
      <div className={`transition-all duration-1000 ${isWinter ? '' : 'bg-[#0B192C]'}`}>
        <ExcursionsSection themeVariant="adventure" />
      </div>

      {/* CONSORTIUM */}
      <div className={`transition-all duration-1000 ${isWinter ? '' : 'bg-[#0B192C]'}`}>
        <DriversTrustSection themeVariant="adventure" />
      </div>

      {/* FAQS */}
      <div className={`transition-all duration-1000 ${isWinter ? '' : 'bg-[#0B192C]'}`}>
        <FaqSection themeVariant="adventure" />
      </div>

      {/* ADVENTURE FOOTER */}
      <footer className="bg-[#020617] text-slate-400 py-16 px-6 lg:px-16 text-xs border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4 font-display font-black text-lg text-white tracking-tight">
              <span>Taxi Auto Sella Consortium</span>
            </div>
            <p className="max-w-sm text-slate-400 leading-relaxed mb-2">
              Str. Gherdeina 7/A, I-39047 Santa Cristina (BZ), Val Gardena, Dolomites, Italy.
            </p>
            <p className="text-slate-500 font-medium">VAT No.: IT01707460216 • 24/7 Dispatch: (+39) 0471 790033</p>
          </div>

          <div className="flex flex-col md:items-end gap-3">
            <div className={`flex gap-6 font-bold ${theme.primary}`}>
              <a href="tel:+390471790033" className="hover:text-white transition-colors flex items-center gap-1.5"><PhoneCall className="w-3.5 h-3.5" /> Hotline</a>
              <a href="https://wa.me/390471790033" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5"><MessageCircle className="w-3.5 h-3.5" /> WhatsApp</a>
            </div>
            <p className="text-[11px] text-slate-600 mt-4 font-medium uppercase tracking-widest">
              © {new Date().getFullYear()} Taxi Auto Sella Consortium
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
};
