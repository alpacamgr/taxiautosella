import React from 'react';
import { useAppStore } from '../../store/useAppStore';
import { InstantQuoteWidget } from '../booking/InstantQuoteWidget';
import { FleetShowcase } from '../fleet/FleetShowcase';
import { ExcursionsSection } from '../excursions/ExcursionsSection';
import { DriversTrustSection } from '../consortium/DriversTrustSection';
import { FaqSection } from '../faq/FaqSection';
import { POPULAR_ROUTES } from '../../data/routes';
import { 
  Mountain, 
  Sparkles, 
  ShieldCheck, 
  MapPin, 
  PhoneCall, 
  ArrowRight, 
  ChevronRight,
  Compass,
  CheckCircle2
} from 'lucide-react';

export const ConceptAdventure: React.FC = () => {
  const { openBookingModal, t } = useAppStore();

  return (
    <div className="bg-[#071526] text-slate-100 min-h-screen">
      
      {/* Concept 3 Hero Section — Dynamic Alpine Adventure & Ski Shuttle */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-16 pb-20 px-4 sm:px-6 overflow-hidden">
        {/* Dolomite Winter Ski & Mountain Action Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&w=2000&q=85"
            alt="Dolomites Ski Resort Winter"
            className="w-full h-full object-cover opacity-30 scale-105 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#071526]/85 via-[#071526]/70 to-[#071526]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          
          {/* Hero Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/40 text-sky-300 text-xs font-bold tracking-wider uppercase mb-4 shadow-lg backdrop-blur-md">
              <Mountain className="w-4 h-4 text-sky-400" />
              <span>{t('adventure.hero.eyebrow')}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white max-w-4xl mx-auto leading-tight mb-6">
              {t('adventure.hero.title')}
            </h1>

            <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
              {t('adventure.hero.subtitle')}
            </p>

            {/* Gear Highlight Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-sky-200 mb-8">
              <span className="flex items-center gap-1.5 bg-slate-900/80 px-3.5 py-1.5 rounded-xl border border-sky-500/30">
                <span>⛷️</span>
                <span>Oversized Ski & Snowboard Boxes</span>
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900/80 px-3.5 py-1.5 rounded-xl border border-sky-500/30">
                <span>🚲</span>
                <span>Bike Shuttles & Trailers</span>
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900/80 px-3.5 py-1.5 rounded-xl border border-sky-500/30">
                <span>🏔️</span>
                <span>100% 4MATIC Winter Snow Certified</span>
              </span>
            </div>
          </div>

          {/* Interactive Hero Booking Calculator */}
          <div className="max-w-4xl mx-auto">
            <InstantQuoteWidget themeVariant="adventure" />
          </div>

        </div>
      </section>

      {/* Ski Gateway Connections Grid */}
      <section className="py-12 px-4 sm:px-6 max-w-7xl mx-auto border-t border-sky-900/50">
        <div className="text-center mb-8">
          <h3 className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-1">
            Airport to Ski Slopes Fast Track
          </h3>
          <p className="text-xl font-bold text-white">Direct Ski Chalet & Hotel Shuttles</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {POPULAR_ROUTES.map((r, idx) => (
            <div
              key={idx}
              onClick={() => openBookingModal()}
              className="p-4 rounded-2xl glass-card-navy border border-sky-900 hover:border-sky-400/80 transition-all cursor-pointer group flex items-center justify-between"
            >
              <div>
                <div className="text-[10px] text-sky-400 font-bold mb-0.5">{r.tag}</div>
                <div className="font-bold text-xs text-white group-hover:text-sky-300 transition-colors">
                  {r.origin}
                </div>
                <div className="text-[11px] text-slate-400 flex items-center gap-2 mt-1">
                  <span>{r.distance}</span>
                  <span>•</span>
                  <span>{r.duration}</span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-sm font-black text-sky-300 block">{r.price}</span>
                <span className="text-[10px] text-slate-400 flex items-center gap-0.5 justify-end group-hover:text-sky-300">
                  Book Shuttle <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fleet Showcase */}
      <FleetShowcase themeVariant="adventure" />

      {/* Excursions */}
      <ExcursionsSection themeVariant="adventure" />

      {/* Consortium & 18 Drivers */}
      <DriversTrustSection themeVariant="adventure" />

      {/* FAQs */}
      <FaqSection themeVariant="adventure" />

      {/* Adventure Footer */}
      <footer className="bg-[#050E1A] border-t border-sky-950 py-12 px-4 sm:px-6 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2 font-display font-bold text-base text-sky-400">
              <span>Taxi Auto Sella Consortium</span>
            </div>
            <p>{t('footer.address')}</p>
            <p className="mt-1">{t('footer.vat')} • 24/7 Hotline: (+39) 0471 790033</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex gap-4">
              <a href="tel:+390471790033" className="hover:text-sky-400 transition-colors">Emergency Dispatch</a>
              <a href="mailto:info@taxiautosella.it" className="hover:text-sky-400 transition-colors">info@taxiautosella.it</a>
              <a href="#faqs" className="hover:text-sky-400 transition-colors">FAQ</a>
            </div>
            <p className="text-[10px] text-slate-500">
              © {new Date().getFullYear()} Taxi Auto Sella. {t('footer.rights')}
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
};
