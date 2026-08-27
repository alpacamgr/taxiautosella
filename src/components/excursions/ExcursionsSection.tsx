import React from 'react';
import { EXCURSIONS } from '../../data/excursions';
import { useAppStore } from '../../store/useAppStore';
import { 
  Compass, 
  Clock, 
  MapPin, 
  Check, 
  ArrowRight, 
  Camera,
  Mountain
} from 'lucide-react';

interface Props {
  themeVariant?: 'luxury' | 'tech' | 'adventure';
}

export const ExcursionsSection: React.FC<Props> = ({ themeVariant = 'luxury' }) => {
  const { openBookingModal, t } = useAppStore();

  const isLuxury = themeVariant === 'luxury';
  const isTech = themeVariant === 'tech';
  const isAdventure = themeVariant === 'adventure';

  return (
    <section id="excursions" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${
          isLuxury 
            ? 'bg-gold-500/10 text-gold-400 border border-gold-500/30' 
            : isTech 
            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
            : 'bg-sky-500/20 text-sky-300 border border-sky-400/30'
        }`}>
          <Compass className="w-3.5 h-3.5" />
          <span>Bespoke Alpine Tours</span>
        </div>

        <h2 className={`text-2xl sm:text-4xl font-extrabold tracking-tight mb-4 ${
          isTech ? 'text-slate-900' : isLuxury ? 'font-serif gold-gradient-text' : 'text-white'
        }`}>
          {t('excursions.title')}
        </h2>

        <p className={`text-sm sm:text-base leading-relaxed ${isTech ? 'text-slate-600' : 'text-slate-300'}`}>
          {t('excursions.subtitle')}
        </p>
      </div>

      {/* Excursions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {EXCURSIONS.map((tour) => (
          <div
            key={tour.id}
            className={`group rounded-3xl overflow-hidden border transition-all duration-300 hover:shadow-2xl flex flex-col justify-between ${
              isTech
                ? 'bg-white border-slate-200 shadow-lg'
                : isLuxury
                ? 'glass-card-dark border-slate-800 hover:border-gold-500/40'
                : 'glass-card-navy border-slate-800 hover:border-sky-400/40'
            }`}
          >
            <div>
              {/* Photo Hero with Overlays */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                
                {/* Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold shadow-lg ${
                  isLuxury ? 'bg-gold-500 text-black' : isTech ? 'bg-emerald-600 text-white' : 'bg-sky-500 text-white'
                }`}>
                  {tour.badge}
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-xs text-gold-300 mb-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{tour.duration}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                    {tour.title}
                  </h3>
                </div>
              </div>

              {/* Details & Highlights */}
              <div className="p-6">
                <p className={`text-xs sm:text-sm leading-relaxed mb-5 ${isTech ? 'text-slate-600' : 'text-slate-300'}`}>
                  {tour.description}
                </p>

                <h4 className={`text-xs font-bold uppercase tracking-wider mb-3 ${isTech ? 'text-slate-400' : 'text-slate-400'}`}>
                  Tour Highlights:
                </h4>

                <ul className="space-y-2 mb-6 text-xs">
                  {tour.highlights.map((h, idx) => (
                    <li key={idx} className={`flex items-start gap-2.5 ${isTech ? 'text-slate-700' : 'text-slate-200'}`}>
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        isLuxury ? 'text-gold-400' : isTech ? 'text-emerald-500' : 'text-sky-400'
                      }`} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Bar with Pricing & Booking CTA */}
            <div className={`p-6 pt-4 border-t flex items-center justify-between ${
              isTech ? 'bg-slate-50 border-slate-100' : 'bg-slate-950/60 border-slate-800'
            }`}>
              <div>
                <span className="text-[10px] text-slate-400 block">Private Van Tour</span>
                <span className={`text-lg font-black ${isLuxury ? 'text-gold-400' : isTech ? 'text-emerald-600' : 'text-sky-300'}`}>
                  {tour.priceFrom}
                </span>
              </div>

              <button
                onClick={() => openBookingModal()}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-md ${
                  isLuxury
                    ? 'bg-gold-500 hover:bg-gold-400 text-black'
                    : isTech
                    ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                    : 'bg-sky-500 hover:bg-sky-400 text-white'
                }`}
              >
                <span>{t('excursions.learnMore')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
