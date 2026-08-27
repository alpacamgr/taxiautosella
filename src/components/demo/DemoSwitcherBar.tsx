import React, { useState } from 'react';
import { useAppStore, ConceptType } from '../../store/useAppStore';
import { Language } from '../../data/translations';
import { 
  Sparkles, 
  Layers, 
  Globe, 
  Zap, 
  Mountain, 
  Crown, 
  ChevronDown, 
  Info, 
  Check, 
  PhoneCall, 
  ExternalLink 
} from 'lucide-react';

export const DemoSwitcherBar: React.FC = () => {
  const { activeConcept, setConcept, language, setLanguage, t } = useAppStore();
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const concepts: { id: ConceptType; label: string; short: string; icon: React.ReactNode; color: string; desc: string }[] = [
    {
      id: 'luxury',
      label: 'Concept 1: Alpine Luxury & Prestige',
      short: '1. Luxury Prestige',
      icon: <Crown className="w-4 h-4 text-gold-400" />,
      color: 'from-amber-500/20 to-yellow-600/30 border-gold-500/40 text-gold-300',
      desc: 'Dark charcoal & warm champagne gold. Elegant serif typography, VIP chauffeur feel, high-end chalet & hotel aesthetic.'
    },
    {
      id: 'tech',
      label: 'Concept 2: Modern Global Tech (WelcomePickups)',
      short: '2. Modern Tech',
      icon: <Zap className="w-4 h-4 text-emerald-400" />,
      color: 'from-emerald-500/20 to-teal-600/30 border-emerald-500/40 text-emerald-300',
      desc: 'Clean snow white & emerald green. WelcomePickups-inspired conversion-optimized booking engine, flight tracking, trust badges.'
    },
    {
      id: 'adventure',
      label: 'Concept 3: Dolomites Adventure & Ski Shuttle',
      short: '3. Dolomites Ski & Adventure',
      icon: <Mountain className="w-4 h-4 text-sky-400" />,
      color: 'from-sky-500/20 to-blue-600/30 border-sky-500/40 text-sky-300',
      desc: 'Alpine navy & glacier ice blue. Focus on ski shuttles, Sella Ronda tours, 4x4 snow reliability, mountain bike groups.'
    }
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'it', label: 'Italiano', flag: '🇮🇹' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' }
  ];

  return (
    <>
      {/* Floating Demo Presentation Bar */}
      <header className="sticky top-0 z-50 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800 shadow-2xl transition-all">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 sm:py-2.5 flex flex-wrap items-center justify-between gap-2">
          
          {/* Logo & Client Presentation Badge */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-gold-500 to-amber-600 text-black font-bold text-xs sm:text-sm shadow-md">
              AS
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-xs sm:text-sm text-white tracking-wide">
                  Taxi Auto Sella
                </span>
                <span className="hidden md:inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold bg-gold-500/20 text-gold-300 border border-gold-500/30">
                  {t('demo.previewBadge')}
                </span>
              </div>
              <span className="text-[10px] text-slate-400 hidden sm:inline-block">
                Val Gardena • Str. Gherdeina 7/A
              </span>
            </div>
          </div>

          {/* 3 Concept Switcher Tabs */}
          <div className="flex items-center bg-slate-900/90 p-1 rounded-xl border border-slate-700/80 shadow-inner">
            {concepts.map((c) => {
              const isActive = activeConcept === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setConcept(c.id)}
                  className={`flex items-center gap-1.5 px-2 sm:px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? `bg-slate-800 text-white shadow-md border ${
                          c.id === 'luxury'
                            ? 'border-gold-500/50 shadow-gold-500/10'
                            : c.id === 'tech'
                            ? 'border-emerald-500/50 shadow-emerald-500/10'
                            : 'border-sky-500/50 shadow-sky-500/10'
                        }`
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                  }`}
                  title={c.desc}
                >
                  <span className="flex-shrink-0">{c.icon}</span>
                  <span className="hidden md:inline">{c.label}</span>
                  <span className="inline md:hidden">{c.short}</span>
                </button>
              );
            })}
          </div>

          {/* Right Tools: Language + Info Modal + Quick Call */}
          <div className="flex items-center gap-2">
            
            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
                aria-label="Language Selector"
              >
                <span>{languages.find((l) => l.code === language)?.flag}</span>
                <span className="hidden sm:inline uppercase">{language}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {isLangMenuOpen && (
                <div 
                  className="absolute right-0 mt-2 w-36 bg-slate-900 border border-slate-700 rounded-xl shadow-xl py-1 z-50 text-xs"
                  onMouseLeave={() => setIsLangMenuOpen(false)}
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLanguage(l.code);
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 text-left hover:bg-slate-800 transition-colors ${
                        language === l.code ? 'text-gold-400 font-semibold bg-slate-800/50' : 'text-slate-300'
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

            {/* Strategy Info Trigger */}
            <button
              onClick={() => setIsInfoOpen(true)}
              className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
              title="Concept Strategy Details"
              aria-label="Concept Strategy Details"
            >
              <Info className="w-4 h-4" />
            </button>

            {/* Direct 24/7 Hotline Quick Call */}
            <a
              href="tel:+390471790033"
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-semibold shadow-md transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>+39 0471 790033</span>
            </a>
          </div>

        </div>
      </header>

      {/* Concept Strategy Modal */}
      {isInfoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full p-6 text-slate-200 shadow-2xl relative">
            <button
              onClick={() => setIsInfoOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-lg font-bold p-1"
            >
              ✕
            </button>

            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-gold-400" />
              <h3 className="text-lg font-bold text-white">
                Taxi Auto Sella — 3 Modernized Design Directions
              </h3>
            </div>

            <p className="text-xs text-slate-300 mb-5 leading-relaxed">
              These 3 demo versions modernize the existing <a href="https://www.taxiautosella.it/en/" target="_blank" rel="noreferrer" className="text-gold-400 underline inline-flex items-center gap-0.5">taxiautosella.it <ExternalLink className="w-3 h-3" /></a> website, incorporating inspirations from <a href="https://www.welcomepickups.com/" target="_blank" rel="noreferrer" className="text-emerald-400 underline inline-flex items-center gap-0.5">Welcome Pickups <ExternalLink className="w-3 h-3" /></a> while preserving local Val Gardena consortium trust, 25 Mercedes 4x4 vehicles, and 24/7 hotline dispatch.
            </p>

            <div className="space-y-3 mb-6">
              {concepts.map((c) => (
                <div
                  key={c.id}
                  onClick={() => {
                    setConcept(c.id);
                    setIsInfoOpen(false);
                  }}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                    activeConcept === c.id
                      ? 'bg-slate-800 border-gold-500/80 shadow-md ring-1 ring-gold-500/50'
                      : 'bg-slate-800/40 border-slate-700 hover:bg-slate-800/80 hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2 font-semibold text-sm text-white">
                      {c.icon}
                      <span>{c.label}</span>
                    </div>
                    {activeConcept === c.id && (
                      <span className="text-[11px] font-bold text-gold-400 bg-gold-500/10 px-2 py-0.5 rounded border border-gold-500/20">
                        Active View
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-xs text-slate-400">
              <span>Ready for Cloudflare Pages & universal static hosting.</span>
              <button
                onClick={() => setIsInfoOpen(false)}
                className="px-4 py-2 bg-gold-500 hover:bg-gold-400 text-black font-bold rounded-lg transition-colors"
              >
                Close & Explore Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
