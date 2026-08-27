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
  Globe2
} from 'lucide-react';

export const ConceptAdventure: React.FC = () => {
  const { openBookingModal, setLanguage, language } = useAppStore();
  
  const [gear, setGear] = useState({
    skis: true,
    bikes: false,
    childSeats: false
  });

  const routes = [
    { name: 'Passo Sella', alt: '2,240m', time: '45m', desc: 'Direct access to Col Rodella slopes' },
    { name: 'Passo Gardena', alt: '2,136m', time: '55m', desc: 'Dantercepies & Alta Badia connection' },
    { name: 'Passo Pordoi', alt: '2,239m', time: '50m', desc: 'Sass Pordoi cable car base' },
    { name: 'Passo Campolongo', alt: '1,875m', time: '40m', desc: 'Corvara & Arabba link' },
  ];

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'it', label: 'IT' },
    { code: 'de', label: 'DE' }
  ] as const;

  return (
    <div className="bg-[#0B132B] text-[#F8FAFC] min-h-screen font-sans selection:bg-[#0284C7] selection:text-white">
      
      {/* Navigation / Header */}
      <nav className="absolute top-0 w-full z-50 px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#EA580C] rounded-lg flex items-center justify-center shrink-0">
            <Mountain className="text-white w-6 h-6" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white">
            Auto Sella
          </span>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex bg-[#0F172A]/80 backdrop-blur-md rounded-full p-1 border border-white/10">
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${
                  language === lang.code 
                    ? 'bg-[#0284C7] text-white' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
          <button 
            onClick={() => openBookingModal()}
            className="bg-white text-[#0B132B] px-5 py-2.5 rounded-full text-sm font-bold hover:bg-slate-200 transition-colors"
          >
            Book Expedition
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center pt-24 pb-16 px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&w=2000&q=85"
            alt="Dolomites Mountains"
            className="w-full h-full object-cover opacity-20 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B132B]/80 via-[#0B132B]/60 to-[#0B132B]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="max-w-2xl">
            {/* NO kickers/eyebrows. Let the heading speak. */}
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-white leading-[1.05] mb-8 font-display">
              Dolomiti Alpine Express.
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-12">
              Active mountain & ski expeditions. We provide 100% 4MATIC winter-certified transport directly to the Sella Ronda slopes, complete with high-capacity gear shuttles.
            </p>

            {/* Interactive Gear Loadout */}
            <div className="bg-[#0F172A]/80 backdrop-blur-md border border-white/10 rounded-3xl p-6 mb-12">
              <h2 className="text-sm font-bold text-white mb-4">Required Gear Space</h2>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setGear(g => ({ ...g, skis: !g.skis }))}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl border text-sm font-bold transition-all ${
                    gear.skis 
                      ? 'bg-[#0284C7]/20 border-[#0284C7] text-white' 
                      : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/30 hover:text-white'
                  }`}
                >
                  <Snowflake className="w-4 h-4" />
                  Skis & Snowboards
                </button>
                <button
                  onClick={() => setGear(g => ({ ...g, bikes: !g.bikes }))}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl border text-sm font-bold transition-all ${
                    gear.bikes 
                      ? 'bg-emerald-500/20 border-emerald-500 text-white' 
                      : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/30 hover:text-white'
                  }`}
                >
                  <Bike className="w-4 h-4" />
                  Mountain Bikes
                </button>
                <button
                  onClick={() => setGear(g => ({ ...g, childSeats: !g.childSeats }))}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl border text-sm font-bold transition-all ${
                    gear.childSeats 
                      ? 'bg-[#EA580C]/20 border-[#EA580C] text-white' 
                      : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/30 hover:text-white'
                  }`}
                >
                  <Baby className="w-4 h-4" />
                  Child Seats
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="tel:+390471790033"
                className="flex items-center gap-3 bg-white text-[#0B132B] px-6 py-4 rounded-2xl font-bold hover:bg-slate-200 transition-colors"
              >
                <PhoneCall className="w-5 h-5" />
                24/7 Dispatch
              </a>
              <a 
                href="https://wa.me/390471790033"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 bg-[#128C7E] text-white px-6 py-4 rounded-2xl font-bold hover:bg-[#075E54] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="relative">
            {/* Dynamic Quote Calculator */}
            <div className="bg-[#0F172A] border border-[#1E293B] rounded-3xl overflow-hidden shadow-2xl">
              <div className="p-1">
                <InstantQuoteWidget themeVariant="adventure" />
              </div>
            </div>
            
            {/* Trust badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#0B132B] border border-[#1E293B] rounded-2xl p-4 flex items-center gap-4 shadow-xl">
              <div className="w-12 h-12 rounded-full bg-[#0284C7]/20 flex items-center justify-center">
                <ShieldCheck className="text-[#38BDF8] w-6 h-6" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">100% 4MATIC</div>
                <div className="text-slate-400 text-xs">Winter Snow Certified</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Sella Ronda 4-Passes Section */}
      <section className="py-24 px-6 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-4xl font-black text-white mb-6 font-display">
              Sella Ronda 4-Passes Routes.
            </h2>
            <p className="text-lg text-slate-400">
              Direct transport to the core strategic nodes of the Dolomiti Superski network. 
              We track weather and road conditions in real-time to guarantee your connection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {routes.map((route, idx) => (
              <div 
                key={idx}
                className="bg-[#0B132B] border border-[#1E293B] rounded-3xl p-6 hover:border-[#0284C7] transition-colors group cursor-pointer"
                onClick={() => openBookingModal()}
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-10 h-10 rounded-full bg-[#0284C7]/10 flex items-center justify-center group-hover:bg-[#0284C7] transition-colors">
                    <Navigation className="w-5 h-5 text-[#38BDF8] group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-right">
                    <div className="text-white font-bold">{route.alt}</div>
                    <div className="text-xs text-slate-500 font-medium">Altitude</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{route.name}</h3>
                <p className="text-sm text-slate-400 mb-6 min-h-[40px]">{route.desc}</p>
                
                <div className="flex items-center justify-between border-t border-[#1E293B] pt-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
                    <Clock className="w-4 h-4 text-slate-500" />
                    {route.time} from base
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Showcase */}
      <div className="bg-[#0B132B]">
        <FleetShowcase themeVariant="adventure" />
      </div>

      {/* Excursions */}
      <div className="bg-[#0F172A]">
        <ExcursionsSection themeVariant="adventure" />
      </div>

      {/* Consortium & 18 Drivers */}
      <div className="bg-[#0B132B]">
        <DriversTrustSection themeVariant="adventure" />
      </div>

      {/* FAQs */}
      <div className="bg-[#0F172A]">
        <FaqSection themeVariant="adventure" />
      </div>

      {/* Adventure Footer */}
      <footer className="bg-[#050E1A] border-t border-[#1E293B] py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4 font-display font-black text-xl text-white">
              <Mountain className="text-[#EA580C] w-6 h-6" />
              Auto Sella
            </div>
            <p className="text-slate-400 text-sm">Piazza Nives 2, Selva di Val Gardena (BZ) 39048</p>
            <p className="text-slate-500 text-xs mt-2">VAT: IT 01234567890</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex flex-wrap justify-center gap-6 text-sm font-bold">
              <a href="tel:+390471790033" className="text-white hover:text-[#38BDF8] transition-colors">Emergency Dispatch</a>
              <a href="mailto:info@taxiautosella.it" className="text-white hover:text-[#38BDF8] transition-colors">info@taxiautosella.it</a>
              <button onClick={() => openBookingModal()} className="text-white hover:text-[#38BDF8] transition-colors">Book Now</button>
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
              <Globe2 className="w-4 h-4" />
              Multilingual Support: EN • IT • DE
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};
