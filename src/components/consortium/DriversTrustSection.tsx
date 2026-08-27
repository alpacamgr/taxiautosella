import React from 'react';
import { CONSORTIUM_MEMBERS, CONSORTIUM_STATS } from '../../data/drivers';
import { useAppStore } from '../../store/useAppStore';
import { 
  Users, 
  ShieldCheck, 
  PhoneCall, 
  MessageSquare, 
  Sparkles, 
  Award, 
  Clock, 
  MapPin, 
  CheckCircle2 
} from 'lucide-react';

interface Props {
  themeVariant?: 'luxury' | 'tech' | 'adventure';
}

export const DriversTrustSection: React.FC<Props> = ({ themeVariant = 'luxury' }) => {
  const { t } = useAppStore();

  const isLuxury = themeVariant === 'luxury';
  const isTech = themeVariant === 'tech';
  const isAdventure = themeVariant === 'adventure';

  return (
    <section id="consortium" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${
          isLuxury 
            ? 'bg-gold-500/10 text-gold-400 border border-gold-500/30' 
            : isTech 
            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
            : 'bg-sky-500/20 text-sky-300 border border-sky-400/30'
        }`}>
          <Award className="w-3.5 h-3.5" />
          <span>Local Consortium Authority</span>
        </div>

        <h2 className={`text-2xl sm:text-4xl font-extrabold tracking-tight mb-4 ${
          isTech ? 'text-slate-900' : isLuxury ? 'font-serif gold-gradient-text' : 'text-white'
        }`}>
          {t('consortium.title')}
        </h2>

        <p className={`text-sm sm:text-base leading-relaxed ${isTech ? 'text-slate-600' : 'text-slate-300'}`}>
          {t('consortium.subtitle')}
        </p>
      </div>

      {/* Stats Counter Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
        {[
          { label: 'Mercedes 4MATIC Fleet', val: '25', sub: 'Sedans, Vans & Coaches' },
          { label: 'Consortium Drivers', val: '18', sub: 'Native Val Gardena Locals' },
          { label: 'Years of Excellence', val: '35+', sub: 'Established Since 1989' },
          { label: 'Guest Satisfaction', val: '4.95 ★', sub: 'From 120,000+ Transfers' },
        ].map((s, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-3xl text-center border transition-all ${
              isTech
                ? 'bg-white border-slate-200 shadow-lg'
                : isLuxury
                ? 'glass-card-dark border-slate-800'
                : 'glass-card-navy border-slate-800'
            }`}
          >
            <div className={`text-3xl sm:text-4xl font-black mb-1 ${
              isLuxury ? 'text-gold-400' : isTech ? 'text-emerald-600' : 'text-sky-300'
            }`}>
              {s.val}
            </div>
            <div className={`font-bold text-xs sm:text-sm mb-0.5 ${isTech ? 'text-slate-900' : 'text-white'}`}>
              {s.label}
            </div>
            <div className="text-[11px] text-slate-400">{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Immediate Local Taxi Hotline Callout Banner */}
      <div className={`p-8 rounded-3xl border mb-16 relative overflow-hidden shadow-2xl ${
        isLuxury
          ? 'glass-card-gold border-gold-500/40'
          : isTech
          ? 'bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white border-slate-700'
          : 'bg-gradient-to-r from-sky-950 via-slate-900 to-blue-950 text-white border-sky-500/40'
      }`}>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold mb-3 border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>24/7 LIVE TAXI DISPATCH (HIGH SEASON)</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {t('consortium.hotlineTitle')}
            </h3>
            
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              {t('consortium.hotlineDesc')}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            {/* 1-Tap Call */}
            <a
              href="tel:+390471790033"
              className="flex-1 sm:flex-initial px-6 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-amber-500 hover:from-gold-400 hover:to-amber-400 text-black font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-gold-500/20 transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call (+39) 0471 790033</span>
            </a>

            {/* 1-Tap WhatsApp */}
            <a
              href="https://wa.me/390471790033?text=Hello%20Taxi%20Auto%20Sella,%20I%20need%20a%20local%20taxi%20in%20Val%20Gardena."
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-initial px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Driver Grid Showcase */}
      <div>
        <h3 className={`text-center font-bold text-lg mb-8 ${isTech ? 'text-slate-800' : 'text-white'}`}>
          Meet Our Local Driver-Partners (Val Gardena Consortium)
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {CONSORTIUM_MEMBERS.map((driver, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl border transition-all ${
                isTech
                  ? 'bg-slate-50 border-slate-200 hover:bg-white hover:shadow-md'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold ${
                  isLuxury ? 'bg-gold-500/20 text-gold-400 border border-gold-500/30' : isTech ? 'bg-emerald-100 text-emerald-700' : 'bg-sky-500/20 text-sky-300'
                }`}>
                  {driver.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className={`font-bold text-xs ${isTech ? 'text-slate-900' : 'text-white'}`}>
                    {driver.name}
                  </h4>
                  <span className="text-[10px] text-slate-400 block">{driver.role}</span>
                </div>
              </div>

              <div className="text-[11px] text-slate-300 mb-2">
                <strong>Specialty:</strong> {driver.specialty}
              </div>

              <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-white/5">
                <span>{driver.experienceYears} Years Exp.</span>
                <div className="flex gap-1">
                  {driver.languages.map((lang, lIdx) => (
                    <span key={lIdx} className="px-1 py-0.5 rounded bg-slate-800 text-slate-300 font-semibold text-[9px]">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
