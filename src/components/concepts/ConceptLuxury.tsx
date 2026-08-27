import React from 'react';
import { useAppStore } from '../../store/useAppStore';
import { InstantQuoteWidget } from '../booking/InstantQuoteWidget';
import { FleetShowcase } from '../fleet/FleetShowcase';
import { ExcursionsSection } from '../excursions/ExcursionsSection';
import { DriversTrustSection } from '../consortium/DriversTrustSection';
import { FaqSection } from '../faq/FaqSection';
import { POPULAR_ROUTES } from '../../data/routes';
import { 
  Crown, 
  ShieldCheck, 
  Sparkles, 
  MapPin, 
  PhoneCall, 
  ArrowRight, 
  ChevronRight,
  Plane,
  Clock,
  Star,
  CheckCircle2
} from 'lucide-react';

export const ConceptLuxury: React.FC = () => {
  const { openBookingModal, updateBooking, t } = useAppStore();

  return (
    <div className="bg-[#0B0F17] text-slate-100 min-h-screen">
      
      {/* Concept 1 Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-16 pb-20 px-4 sm:px-6 overflow-hidden">
        {/* Dolomite Sunset Luxury Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=2000&q=85"
            alt="Dolomites Mountains Sunset"
            className="w-full h-full object-cover opacity-35 scale-105 animate-pulse transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F17]/80 via-[#0B0F17]/60 to-[#0B0F17]" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0B0F17]/70 to-[#0B0F17]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          
          {/* Top Eyebrow & VIP Badges */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold tracking-wider uppercase mb-4 shadow-lg shadow-gold-500/10 backdrop-blur-md">
              <Crown className="w-3.5 h-3.5" />
              <span>{t('luxury.hero.eyebrow')}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold tracking-tight gold-gradient-text max-w-4xl mx-auto leading-tight mb-6">
              {t('luxury.hero.title')}
            </h1>

            <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
              {t('luxury.hero.subtitle')}
            </p>

            {/* Quick Feature Badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-300 mb-10">
              <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-full border border-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                25 Mercedes 4MATIC Vehicles
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-full border border-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                Meet & Greet with Name Sign
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-full border border-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                Live Flight Delay Tracking
              </span>
            </div>
          </div>

          {/* Interactive Hero Booking Calculator */}
          <div className="max-w-4xl mx-auto">
            <InstantQuoteWidget themeVariant="luxury" />
          </div>

        </div>
      </section>

      {/* Popular Transfers Quick Grid */}
      <section className="py-12 px-4 sm:px-6 max-w-7xl mx-auto border-t border-slate-800/60">
        <div className="text-center mb-8">
          <h3 className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-1">
            Seamless Gateway Connections
          </h3>
          <p className="text-lg font-bold text-white">Popular Dolomites Airport Routes</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {POPULAR_ROUTES.map((r, idx) => (
            <div
              key={idx}
              onClick={() => openBookingModal()}
              className="p-4 rounded-2xl glass-card-dark border border-slate-800/80 hover:border-gold-500/50 transition-all cursor-pointer group flex items-center justify-between"
            >
              <div>
                <div className="text-[10px] text-gold-400 font-semibold mb-0.5">{r.tag}</div>
                <div className="font-bold text-xs text-white group-hover:text-gold-300 transition-colors">
                  {r.origin}
                </div>
                <div className="text-[11px] text-slate-400 flex items-center gap-2 mt-1">
                  <span>{r.distance}</span>
                  <span>•</span>
                  <span>{r.duration}</span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-sm font-extrabold text-gold-400 block">{r.price}</span>
                <span className="text-[10px] text-slate-400 flex items-center gap-0.5 justify-end group-hover:text-gold-300">
                  Select <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fleet Showcase */}
      <FleetShowcase themeVariant="luxury" />

      {/* Excursions */}
      <ExcursionsSection themeVariant="luxury" />

      {/* Consortium & 18 Drivers */}
      <DriversTrustSection themeVariant="luxury" />

      {/* FAQs */}
      <FaqSection themeVariant="luxury" />

      {/* Luxury Footer */}
      <footer className="bg-slate-950 border-t border-slate-800/80 py-12 px-4 sm:px-6 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2 font-serif font-bold text-base text-gold-400">
              <span>Taxi Auto Sella Consortium</span>
            </div>
            <p>{t('footer.address')}</p>
            <p className="mt-1">{t('footer.vat')} • Hotline: (+39) 0471 790033</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex gap-4">
              <a href="tel:+390471790033" className="hover:text-gold-400 transition-colors">Call Hotline</a>
              <a href="mailto:info@taxiautosella.it" className="hover:text-gold-400 transition-colors">info@taxiautosella.it</a>
              <a href="#faqs" className="hover:text-gold-400 transition-colors">FAQ</a>
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
