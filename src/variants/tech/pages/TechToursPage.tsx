import React from 'react';
import { EXCURSIONS } from '../../../data/excursions';
import { useAppStore } from '../../../store/useAppStore';
import { Clock, CheckCircle2, ArrowRight, Sparkles, MapPin } from 'lucide-react';

export const TechToursPage: React.FC = () => {
  const { openInquiryModal } = useAppStore();

  const additionalDestinations = [
    {
      title: 'Great Dolomites Road & Passo Sella Loop',
      subtitle: 'Passo Sella, Gardena, Pordoi & Campolongo',
      duration: 'Full Day (7–8 Hours)',
      priceFrom: '€380 / van',
      highlights: [
        'Scenic high pass loop crossing 4 iconic Dolomite passes',
        'Spectacular vistas of Sassolungo and Marmolada Glacier',
        'Flexible photo pauses and traditional Alpine hut lunch'
      ],
      desc: 'The ultimate UNESCO World Heritage panoramic tour around the mighty Sella Massif in a luxury Mercedes 4MATIC van.',
      image: '/images/fleet/autosella_2018_09.jpg'
    },
    {
      title: 'Bolzano & Merano — Spa Town & Ötzi the Iceman',
      subtitle: 'South Tyrolean Cultural Day Trip',
      duration: 'Full Day (6–8 Hours)',
      priceFrom: '€320 / van',
      highlights: [
        'South Tyrol Museum of Archaeology (5,300-year-old Ötzi)',
        'Merano Mediterranean thermal spa promenade & Kurhaus',
        'Traditional South Tyrolean winery visit & fruit market'
      ],
      desc: 'Discover South Tyrol’s historic provincial capital and the beautiful Mediterranean spa city of Merano.',
      image: '/images/fleet/autosella_2018_04.jpg'
    },
    {
      title: 'Alpine Hut Dinners & Evening Night Shuttles',
      subtitle: 'Traditional Mountain Refuge Dining',
      duration: 'Evening Tour (4–5 Hours)',
      priceFrom: '€180 / van',
      highlights: [
        'Safe 4MATIC winter transport to high-altitude mountain refuges',
        'Authentic Ladin & South Tyrolean dinner with fine wine',
        'Safe, heated return to your hotel or chalet'
      ],
      desc: 'An authentic high-altitude alpine evening experience with comfortable transport and safe return to your accommodation.',
      image: '/images/fleet/mercedes-v-class-luxury.jpg'
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#D97706] block mb-2">
          Curated Private Excursions
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mb-3">
          Organised Tours & Day Trips
        </h1>
        <p className="text-base text-slate-600 leading-relaxed font-normal">
          Explore iconic destinations across Northern Italy and the Austrian Tyrol with our experienced multilingual mountain chauffeurs in executive Mercedes comfort.
        </p>
      </div>

      {/* Featured Excursions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {EXCURSIONS.map((tour) => (
          <div key={tour.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-[#D97706] hover:shadow-xl transition-all">
            <div>
              <div className="h-64 overflow-hidden relative bg-slate-900">
                <img src={tour.image} alt={tour.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95" />
                <div className="absolute top-4 left-4 bg-[#0A192F]/90 backdrop-blur-md text-[#F59E0B] text-xs font-extrabold px-3.5 py-1.5 rounded-xl border border-slate-700 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{tour.duration}</span>
                </div>
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-extrabold text-slate-900 mb-1 leading-tight">{tour.title}</h3>
                <p className="text-xs font-bold text-[#D97706] uppercase tracking-wide mb-3">{tour.subtitle}</p>
                <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">{tour.description}</p>
                
                <ul className="space-y-2 mb-6 text-xs text-slate-700 font-medium">
                  {tour.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D97706] flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-7 pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold block">Private Tour Fare</span>
                <span className="font-black text-xl text-slate-900">{tour.priceFrom}</span>
              </div>
              <button
                onClick={() => openInquiryModal('Tour Booking', `Tour: ${tour.title}\nDuration: ${tour.duration}\nRate: ${tour.priceFrom}\n\nPlease check tour availability.`)}
                className="px-6 py-3 bg-[#0A192F] hover:bg-[#D97706] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center gap-2 shadow-md"
              >
                <span>Inquire Tour</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Regional Itineraries */}
      <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6">
        More Regional Excursions & Alpine Experiences
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {additionalDestinations.map((dest, idx) => (
          <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all group">
            <div>
              <div className="h-48 overflow-hidden bg-slate-900 relative">
                <img src={dest.image} alt={dest.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-3 left-3 bg-[#0A192F]/90 text-[#F59E0B] text-[10px] font-extrabold px-2.5 py-1 rounded-lg backdrop-blur-md">
                  {dest.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-extrabold text-slate-900 mb-1 leading-tight">{dest.title}</h3>
                <p className="text-xs font-bold text-[#D97706] uppercase tracking-wide mb-3">{dest.subtitle}</p>
                <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">{dest.desc}</p>
                
                <ul className="space-y-1.5 mb-6 text-xs text-slate-600 font-medium">
                  {dest.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D97706] flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold block">From</span>
                <span className="font-black text-lg text-slate-900">{dest.priceFrom}</span>
              </div>
              <button
                onClick={() => openInquiryModal('Tour Inquiry', `Tour: ${dest.title}\nDuration: ${dest.duration}\nRate: ${dest.priceFrom}`)}
                className="px-4 py-2 bg-slate-100 hover:bg-[#0A192F] hover:text-white text-slate-900 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center gap-1"
              >
                <span>Inquire</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

