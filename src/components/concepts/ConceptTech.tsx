import React from 'react';
import { useAppStore } from '../../store/useAppStore';
import { InstantQuoteWidget } from '../booking/InstantQuoteWidget';
import { FleetShowcase } from '../fleet/FleetShowcase';
import { ExcursionsSection } from '../excursions/ExcursionsSection';
import { DriversTrustSection } from '../consortium/DriversTrustSection';
import { FaqSection } from '../faq/FaqSection';
import { POPULAR_ROUTES } from '../../data/routes';
import { 
  Zap, 
  ShieldCheck, 
  Clock, 
  Plane, 
  Star, 
  CheckCircle2, 
  ChevronRight,
  TrendingUp,
  Award,
  Users
} from 'lucide-react';

export const ConceptTech: React.FC = () => {
  const { openBookingModal, t } = useAppStore();

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      
      {/* Concept 2 Hero Section — Clean Tech & Instant Booking (WelcomePickups Style) */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 bg-gradient-to-b from-slate-100 via-white to-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          
          {/* Top Trust Banner */}
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-4 shadow-sm">
              <div className="flex text-amber-400">
                {'★'.repeat(5)}
              </div>
              <span>4.95 / 5.0 (1,200+ Verified Dolomites Travelers)</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4 font-sans">
              {t('tech.hero.title')}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t('tech.hero.subtitle')}
            </p>
          </div>

          {/* Centered Large Instant Quote Engine (Welcome Pickups Hero Style) */}
          <div className="max-w-4xl mx-auto mb-16">
            <InstantQuoteWidget themeVariant="tech" />
          </div>

          {/* 3-Step Value Proposition (WelcomePickups Pattern) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-900 mb-1">Instant Fixed Price</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Clear upfront rates with no meter surprises, Alpine pass surcharges, or luggage fees.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-900 mb-1">Flight Delay Protection</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We track your arrival in real-time. If your flight is delayed, your driver adjusts schedule for free.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-900 mb-1">Door-to-Door Arrival</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Chauffeur meets you with a name sign at baggage claim and takes you directly to your hotel door.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Popular Airport Routes Table / Grid */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Popular Direct Airport Transfers to Val Gardena
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Fixed private transfer rates for couples, families, and ski groups.
            </p>
          </div>
          <button
            onClick={() => openBookingModal()}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
          >
            <span>Custom Route Inquiry</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {POPULAR_ROUTES.map((r, idx) => (
            <div
              key={idx}
              onClick={() => openBookingModal()}
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500 hover:shadow-lg transition-all cursor-pointer group flex items-center justify-between"
            >
              <div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md mb-1.5 inline-block">
                  {r.tag}
                </span>
                <div className="font-bold text-sm text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {r.origin}
                </div>
                <div className="text-xs text-slate-500 flex items-center gap-2 mt-1">
                  <span>{r.distance}</span>
                  <span>•</span>
                  <span>{r.duration}</span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-base font-extrabold text-emerald-600 block">{r.price}</span>
                <span className="text-xs text-slate-400 group-hover:text-emerald-600 font-medium flex items-center justify-end gap-0.5">
                  Book <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fleet Showcase */}
      <div className="bg-white border-y border-slate-200">
        <FleetShowcase themeVariant="tech" />
      </div>

      {/* Excursions */}
      <ExcursionsSection themeVariant="tech" />

      {/* Consortium & 18 Drivers */}
      <div className="bg-white border-y border-slate-200">
        <DriversTrustSection themeVariant="tech" />
      </div>

      {/* FAQs */}
      <FaqSection themeVariant="tech" />

      {/* Tech Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-4 sm:px-6 text-xs border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2 font-bold text-base text-white">
              <span>Taxi Auto Sella Consortium</span>
            </div>
            <p>{t('footer.address')}</p>
            <p className="mt-1">{t('footer.vat')} • Dispatch Hotline: (+39) 0471 790033</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex gap-4">
              <a href="tel:+390471790033" className="hover:text-emerald-400 transition-colors">Call Dispatch</a>
              <a href="mailto:info@taxiautosella.it" className="hover:text-emerald-400 transition-colors">info@taxiautosella.it</a>
              <a href="#faqs" className="hover:text-emerald-400 transition-colors">FAQ</a>
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
