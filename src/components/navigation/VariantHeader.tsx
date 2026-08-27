import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAppStore } from '../../store/useAppStore';
import { Language } from '../../data/translations';
import { 
  Crown, 
  Zap, 
  Compass, 
  ChevronDown, 
  Check,
  Calendar,
  PhoneCall
} from 'lucide-react';

export const VariantHeader: React.FC = () => {
  const { language, setLanguage, openBookingModal } = useAppStore();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const location = useLocation();

  const pages = [
    {
      path: '/luxury',
      label: '1. Alpine Luxury',
      sub: 'Heritage & Prestige',
      icon: <Crown className="w-3.5 h-3.5" />,
      activeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40'
    },
    {
      path: '/tech',
      label: '2. Modern Tech',
      sub: 'High-Tech Platform',
      icon: <Zap className="w-3.5 h-3.5" />,
      activeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
    },
    {
      path: '/adventure',
      label: '3. Valley Hospitality',
      sub: 'Modern Alpine Living',
      icon: <Compass className="w-3.5 h-3.5" />,
      activeColor: 'bg-amber-600/20 text-amber-200 border-amber-600/40'
    }
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English (Default)', flag: '🇬🇧' },
    { code: 'it', label: 'Italiano', flag: '🇮🇹' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#090D14]/95 backdrop-blur-md border-b border-slate-800 text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3">
        
        {/* Brand Logo & Presentation Hub */}
        <div className="flex items-center gap-3">
          <NavLink to="/luxury" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 text-black font-extrabold flex items-center justify-center text-xs shadow-md">
              AS
            </div>
            <div>
              <span className="font-bold text-sm text-white tracking-wide block leading-tight">
                Taxi Auto Sella
              </span>
              <span className="text-[10px] text-slate-400">
                Val Gardena Dolomites • 25 Vehicles
              </span>
            </div>
          </NavLink>
        </div>

        {/* 3 Dedicated Variant Tabs */}
        <nav className="flex items-center bg-slate-900/90 p-1 rounded-xl border border-slate-800 shadow-inner">
          {pages.map((p) => {
            const isCurrent = location.pathname.startsWith(p.path) || (p.path === '/luxury' && (location.pathname === '/' || location.pathname === ''));
            return (
              <NavLink
                key={p.path}
                to={p.path}
                className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  isCurrent
                    ? `${p.activeColor} shadow-md border`
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <span>{p.icon}</span>
                <span>{p.label}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Right Actions: Language & Direct Dispatch */}
        <div className="flex items-center gap-2.5">
          
          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
            >
              <span>{languages.find((l) => l.code === language)?.flag}</span>
              <span className="uppercase text-[11px] font-bold">{language}</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {isLangOpen && (
              <div 
                className="absolute right-0 mt-2 w-44 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl py-1 z-50 text-xs"
                onMouseLeave={() => setIsLangOpen(false)}
              >
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLanguage(l.code);
                      setIsLangOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 text-left hover:bg-slate-800 transition-colors ${
                      language === l.code ? 'text-amber-400 font-bold bg-slate-800/50' : 'text-slate-300'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{l.flag}</span>
                      <span>{l.label}</span>
                    </span>
                    {language === l.code && <Check className="w-3.5 h-3.5" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Book Modal Trigger */}
          <button
            onClick={() => openBookingModal()}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition-all"
          >
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            <span>Book Ride</span>
          </button>

          {/* Direct 24/7 Hotline Call */}
          <a
            href="tel:+390471790033"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md transition-all"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span className="hidden md:inline">+39 0471 790033</span>
            <span className="inline md:hidden">Call</span>
          </a>

        </div>

      </div>
    </header>
  );
};
