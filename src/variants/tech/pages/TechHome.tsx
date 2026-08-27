import React, { useState } from 'react';
import { useAppStore } from '../../../store/useAppStore';
import { FLEET } from '../../../data/fleet';
import { 
  Plane, 
  MapPin, 
  Calendar, 
  Users, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  PhoneCall, 
  MessageSquare, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight, 
  Briefcase, 
  Car, 
  Mountain,
  Snowflake,
  CreditCard,
  Compass,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const TechHome: React.FC = () => {
  const { openBookingModal, openInquiryModal } = useAppStore();

  // Interactive Live Quote Calculator State
  const [selectedGateway, setSelectedGateway] = useState('innsbruck');
  const [selectedVillage, setSelectedVillage] = useState('santa-cristina');
  const [selectedTier, setSelectedTier] = useState('van');
  const [passengers, setPassengers] = useState('4');

  const gateways = [
    { id: 'innsbruck', name: 'Innsbruck Airport (INN)', dist: '120 km', time: '1h 30m', basePrice: 240 },
    { id: 'verona', name: 'Verona Valerio Catullo (VRN)', dist: '190 km', time: '2h 05m', basePrice: 340 },
    { id: 'munich', name: 'Munich Airport (MUC)', dist: '310 km', time: '3h 30m', basePrice: 480 },
    { id: 'venice', name: 'Venice Marco Polo (VCE)', dist: '270 km', time: '3h 15m', basePrice: 440 },
    { id: 'milan-mxp', name: 'Milan Malpensa (MXP)', dist: '350 km', time: '3h 55m', basePrice: 540 },
    { id: 'milan-lin', name: 'Milan Linate (LIN)', dist: '320 km', time: '3h 30m', basePrice: 490 },
    { id: 'bergamo', name: 'Bergamo Orio al Serio (BGY)', dist: '270 km', time: '3h 00m', basePrice: 430 },
    { id: 'treviso', name: 'Treviso Canova (TSF)', dist: '220 km', time: '2h 50m', basePrice: 410 },
    { id: 'bologna', name: 'Bologna Guglielmo Marconi (BLQ)', dist: '310 km', time: '3h 15m', basePrice: 480 },
    { id: 'bolzano', name: 'Bolzano Airport / Station (BZO)', dist: '42 km', time: '45m', basePrice: 110 },
    { id: 'bressanone', name: 'Bressanone / Brixen Train Station', dist: '32 km', time: '35m', basePrice: 85 },
    { id: 'chiusa', name: 'Chiusa / Klausen Train Station', dist: '25 km', time: '30m', basePrice: 70 },
    { id: 'ponte-gardena', name: 'Ponte Gardena / Waidbruck Station', dist: '15 km', time: '20m', basePrice: 50 },
  ];

  const villages = [
    { id: 'santa-cristina', name: 'Santa Cristina / St. Christina' },
    { id: 'ortisei', name: 'Ortisei / St. Ulrich' },
    { id: 'selva', name: 'Selva / Wolkenstein' },
    { id: 'plan-de-gralba', name: 'Plan de Gralba / Passo Sella' },
  ];

  const vehicleTiers = [
    { id: 'sedan', name: 'Mercedes E-Class 4MATIC', pax: '1–3 Pax', mult: 1.0, icon: 'Executive Sedan' },
    { id: 'van', name: 'Mercedes V-Class VIP', pax: '1–7 Pax', mult: 1.25, icon: 'VIP Minivan', popular: true },
    { id: 'minibus', name: 'Mercedes Vito 4MATIC', pax: '1–8 Pax', mult: 1.20, icon: 'Ski Minibus' },
    { id: 'coach', name: 'Sprinter VIP Coach', pax: '16–30 Pax', mult: 1.85, icon: 'Group Coach' },
  ];

  const currentGateway = gateways.find(g => g.id === selectedGateway) || gateways[0];
  const currentVillage = villages.find(v => v.id === selectedVillage) || villages[0];
  const currentTier = vehicleTiers.find(t => t.id === selectedTier) || vehicleTiers[1];
  const calculatedPrice = Math.round(currentGateway.basePrice * currentTier.mult);

  const handleInstantWhatsApp = () => {
    const text = encodeURIComponent(
      `🚕 *TAXI AUTO SELLA — TRANSFER INQUIRY*\n\n` +
      `🛫 *From:* ${currentGateway.name}\n` +
      `🏔️ *To:* ${currentVillage.name} (Val Gardena)\n` +
      `🚐 *Vehicle:* ${currentTier.name} (${currentTier.pax})\n` +
      `👥 *Passengers:* ${passengers} Guests\n` +
      `💶 *Estimated Rate:* €${calculatedPrice} (All-Inclusive)\n\n` +
      `Please advise driver availability. Thank you!`
    );
    window.open(`https://wa.me/390471790033?text=${text}`, '_blank');
  };

  const handleOpenBookingModalWithPrefill = () => {
    openInquiryModal(
      'Instant Transfer Quote',
      `Origin: ${currentGateway.name}\nDestination: ${currentVillage.name}\nVehicle: ${currentTier.name}\nPassengers: ${passengers}\nCalculated Price: €${calculatedPrice}`
    );
  };

  const routes = [
    { from: 'Innsbruck (INN)', time: '1h 30m', dist: '120 km', price: 'from €240' },
    { from: 'Verona (VRN)', time: '2h 05m', dist: '190 km', price: 'from €340' },
    { from: 'Munich (MUC)', time: '3h 30m', dist: '310 km', price: 'from €480' },
    { from: 'Venice (VCE)', time: '3h 15m', dist: '270 km', price: 'from €440' },
    { from: 'Milan (MXP)', time: '3h 55m', dist: '350 km', price: 'from €540' },
    { from: 'Bolzano (BZO)', time: '45m', dist: '42 km', price: 'from €110' },
  ];

  return (
    <div className="bg-[#F8FAFC]">
      
      {/* 1. HERO SECTION: MODERN ALPINE PLATFORM COCKPIT */}
      <section className="relative w-full min-h-[92vh] bg-gradient-to-b from-[#0A192F] via-[#0E2240] to-[#0A192F] text-white flex flex-col justify-between pt-10 pb-16 px-4 sm:px-8 lg:px-16 overflow-hidden">
        
        {/* Background Dolomites Fleet Photography */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="/images/fleet/autosella_2018_09.jpg" 
            alt="Taxi Auto Sella Fleet in the Dolomites"
            className="w-full h-full object-cover object-[center_65%] opacity-35 brightness-90 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/95 via-[#0A192F]/80 to-transparent lg:w-3/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent h-40 bottom-0" />
        </div>

        {/* Top Trust Header Strip */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300 border-b border-slate-700/60 pb-3.5">
          <div className="flex items-center gap-2 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] animate-pulse"></span>
            <span className="font-bold text-white tracking-wide">Consorzio Taxi Auto Sella</span>
            <span className="text-slate-400">• Str. Gherdeina 7/A, Santa Cristina (BZ)</span>
          </div>
          <div className="flex items-center gap-5 text-[11px] font-semibold text-slate-300">
            <span className="hidden sm:inline text-[#F59E0B]">★ 18 Native Mountain Chauffeurs</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">25 Mercedes 4MATIC Fleet</span>
            <span>•</span>
            <a href="tel:+390471790033" className="text-white hover:text-[#F59E0B] font-bold transition-colors">
              Direct Hotline: +39 0471 790033
            </a>
          </div>
        </div>

        {/* Hero Main Content & Live Interactive Cockpit Grid */}
        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center my-auto py-8">
          
          {/* Left Column: Value Proposition & Authority */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F59E0B]/20 border border-[#F59E0B]/40 text-[#F59E0B] text-xs font-bold tracking-wider uppercase backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Val Gardena’s Leading Transport Consortium</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black leading-[1.08] tracking-tight text-white">
              The Modern <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#F59E0B]">
                Alpine Transfer
              </span> Standard
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
              Seamless airport and railway transfers connecting international gateways directly to Val Gardena hotels and chalets. 35+ years of mountain pass mastery with 25 Mercedes 4MATIC all-wheel-drive vehicles.
            </p>

            {/* Inclusions Feature Chips */}
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-semibold text-slate-200">
              <div className="flex items-center gap-2 bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/80">
                <CheckCircle2 className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                <span>Upfront Fixed Pricing</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/80">
                <Clock className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                <span>60m Free Flight Tracking</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/80">
                <Snowflake className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                <span>100% 4MATIC Winter Grip</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/80">
                <CreditCard className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                <span>Onboard POS Cards Accepted</span>
              </div>
            </div>

            {/* Quick Urgent Dispatch Action */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/390471790033"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center gap-2 uppercase tracking-wider"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Dispatch</span>
              </a>
              <a
                href="tel:+390471790033"
                className="px-5 py-3 bg-slate-800/90 hover:bg-slate-700 text-white font-bold text-xs rounded-xl border border-slate-600 transition-all flex items-center gap-2 uppercase tracking-wider"
              >
                <PhoneCall className="w-4 h-4 text-[#F59E0B]" />
                <span>Call +39 0471 790033</span>
              </a>
            </div>
          </div>

          {/* Right Column: Dynamic Live Rate Calculator Cockpit */}
          <div className="lg:col-span-6 w-full">
            <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                <div>
                  <h3 className="font-extrabold text-xl text-slate-900">
                    Instant Transfer Quote
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    Real-time distance calculation & fixed rates
                  </p>
                </div>
                <div className="px-3 py-1 bg-amber-50 text-[#D97706] font-extrabold text-xs rounded-full border border-amber-200">
                  Fixed Rate
                </div>
              </div>

              <div className="space-y-4">
                
                {/* Gateway Selector */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    1. Select Gateway (Airport / Train Station)
                  </label>
                  <div className="relative">
                    <Plane className="absolute left-3.5 top-3.5 w-4 h-4 text-[#D97706]" />
                    <select
                      value={selectedGateway}
                      onChange={e => setSelectedGateway(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 p-3 pl-10 rounded-xl text-xs font-bold text-slate-900 outline-none focus:border-[#D97706] focus:ring-1 focus:ring-[#D97706] cursor-pointer"
                    >
                      {gateways.map(g => (
                        <option key={g.id} value={g.id}>
                          {g.name} ({g.dist} • ~{g.time})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Destination & Passenger Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      2. Val Gardena Village
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3.5 top-3.5 w-4 h-4 text-[#D97706]" />
                      <select
                        value={selectedVillage}
                        onChange={e => setSelectedVillage(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 p-3 pl-10 rounded-xl text-xs font-bold text-slate-900 outline-none focus:border-[#D97706] focus:ring-1 focus:ring-[#D97706] cursor-pointer"
                      >
                        {villages.map(v => (
                          <option key={v.id} value={v.id}>
                            {v.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Passengers
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3.5 top-3.5 w-4 h-4 text-[#D97706]" />
                      <select
                        value={passengers}
                        onChange={e => setPassengers(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 p-3 pl-10 rounded-xl text-xs font-bold text-slate-900 outline-none focus:border-[#D97706] focus:ring-1 focus:ring-[#D97706] cursor-pointer"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5-7">5–7 (V-Class)</option>
                        <option value="8">8 (Vito 4x4)</option>
                        <option value="9+">9+ Coach</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Vehicle Tier Selector */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    3. Vehicle Class
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {vehicleTiers.map(tier => (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => setSelectedTier(tier.id)}
                        className={`p-2.5 rounded-xl text-left border transition-all text-xs font-bold flex flex-col justify-between ${
                          selectedTier === tier.id
                            ? 'bg-[#0A192F] text-white border-[#0A192F] shadow-md'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <span className="text-[11px] truncate">{tier.icon}</span>
                        <span className={`text-[10px] mt-1 ${selectedTier === tier.id ? 'text-[#F59E0B]' : 'text-slate-500'}`}>
                          {tier.pax}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Live Calculated Price Summary Display */}
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between mt-2">
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                      All-Inclusive Total Fare
                    </span>
                    <span className="text-xs font-semibold text-slate-700">
                      {currentGateway.dist} • {currentGateway.time} driving time
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-black text-[#D97706]">
                      €{calculatedPrice}
                    </div>
                    <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider block">
                      Tolls & Ski Gear Included
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleInstantWhatsApp}
                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 uppercase tracking-wider"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Quote</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleOpenBookingModalWithPrefill}
                    className="w-full bg-[#0A192F] hover:bg-[#D97706] text-white font-bold text-xs py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 uppercase tracking-wider"
                  >
                    <span>Reserve Online</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Partner Badges Strip */}
        <div className="relative z-10 max-w-7xl mx-auto w-full pt-4 flex flex-wrap items-center justify-between gap-6 border-t border-slate-700/60 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-300">Official Regional Alliances:</span>
          </div>
          <div className="flex flex-wrap items-center gap-6 font-semibold">
            <span className="hover:text-white transition-colors">Val Gardena Tourism</span>
            <span>•</span>
            <span className="hover:text-white transition-colors">Dolomiti Superski</span>
            <span>•</span>
            <span className="hover:text-white transition-colors">Südtirol Alto Adige</span>
            <span>•</span>
            <span className="hover:text-white transition-colors">UNESCO World Heritage</span>
          </div>
        </div>
      </section>

      {/* 2. CONSORTIUM FLEET SHOWCASE: 25 MERCEDES-BENZ VEHICLES */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#D97706] block mb-2">
              Mercedes 4MATIC Precision
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900">
              The 25-Vehicle Consortium Fleet
            </h2>
            <p className="text-slate-600 text-sm font-medium mt-2 max-w-xl">
              From executive sedans to 8-passenger 4MATIC minibuses with roof ski boxes and 56-seat touring coaches, we provide the right vehicle for every Alpine journey.
            </p>
          </div>
          <Link
            to="/tech/fleet"
            className="text-xs uppercase tracking-wider font-extrabold text-[#0A192F] hover:text-[#D97706] transition-colors flex items-center gap-1.5 self-start md:self-auto"
          >
            <span>Explore All 25 Vehicles</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FLEET.slice(0, 3).map((v) => (
            <div
              key={v.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#D97706]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="h-56 rounded-2xl overflow-hidden mb-6 bg-slate-900 relative">
                  <img
                    src={v.image}
                    alt={v.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {v.badge && (
                    <span className="absolute top-3 right-3 px-3 py-1 bg-[#0A192F]/90 text-[#F59E0B] text-[10px] font-extrabold uppercase tracking-wider rounded-lg backdrop-blur-sm border border-slate-700">
                      {v.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-extrabold text-xl text-slate-900 mb-1">{v.name}</h3>
                <p className="text-xs font-bold text-[#D97706] uppercase tracking-wide mb-3">{v.subtitle}</p>
                <p className="text-xs text-slate-600 font-medium leading-relaxed mb-6">
                  {v.tagline}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs font-bold text-slate-600">
                  <span className="flex items-center gap-1"><Users className="w-4 h-4 text-[#D97706]" /> {v.passengers} Pax</span>
                  <span className="flex items-center gap-1"><Briefcase className="w-4 h-4 text-[#D97706]" /> {v.luggage} Bags</span>
                </div>
                <button
                  onClick={() => openInquiryModal('Fleet Request', `Vehicle: ${v.name}\nCapacity: ${v.passengers} Pax, ${v.luggage} Bags\nTier: ${v.subtitle}`)}
                  className="px-4 py-2 bg-[#0A192F] hover:bg-[#D97706] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center gap-1"
                >
                  <span>Book</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. GATEWAY RATES DIRECTORY */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto border-t border-slate-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#D97706] block mb-2">
              Transparent Gateways
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900">
              Popular Airport Connections
            </h2>
          </div>
          <Link
            to="/tech/booking"
            className="text-xs uppercase tracking-wider font-extrabold text-[#0A192F] hover:text-[#D97706] transition-colors flex items-center gap-1"
          >
            <span>View Complete Rate Sheet (All 9 Gateways)</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map((r, i) => (
            <div
              key={i}
              onClick={() => openInquiryModal('Gateway Transfer', `Route: ${r.from} ➔ Val Gardena\nDistance: ${r.dist}\nDrive Time: ${r.time}\nRate: ${r.price}`)}
              className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-[#D97706] hover:shadow-lg transition-all cursor-pointer flex items-center justify-between group"
            >
              <div>
                <h4 className="font-bold text-base text-slate-900 group-hover:text-[#D97706] transition-colors mb-1">
                  {r.from}
                </h4>
                <div className="text-xs text-slate-500 font-medium flex items-center gap-2">
                  <span>{r.dist}</span>
                  <span>•</span>
                  <span>{r.time}</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-lg font-black text-[#D97706] block">{r.price}</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">All-Inclusive</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MOBILITY SERVICES OVERVIEW */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-[#0A192F] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#F59E0B] block mb-2">
              Full Spectrum Transport
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
              Taxi, Minibus & Specialized Bus Services
            </h2>
            <p className="text-slate-300 text-sm font-normal leading-relaxed">
              In addition to airport transfers, the Taxi Auto Sella consortium delivers comprehensive valley mobility across the Dolomites.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Airport Transfers', desc: 'Door-to-door direct transfers from 9 regional gateways with flight delay monitoring.', icon: Plane },
              { title: 'Ski & Lift Shuttles', desc: 'Private direct transfers to Seceda, Saslong, Ciampinoi, and Sella Ronda lifts.', icon: Snowflake },
              { title: 'Nightlife Taxis', desc: '24/7 night dispatch between Ortisei, Santa Cristina, Selva restaurants & clubs.', icon: Clock },
              { title: 'Bike & Gear Trailers', desc: 'Enclosed weatherproof trailers for up to 10 downhill mountain bikes or e-bikes.', icon: Compass },
              { title: 'Wheelchair Accessible', desc: 'Hydraulic lift vans and ISO 4-point restraints for disabled passenger transport.', icon: ShieldCheck },
              { title: 'VIP Wedding Chauffeur', desc: 'Prestige Mercedes S-Class and V-Class fleets for high-profile wedding parties.', icon: Sparkles },
              { title: 'Film & Media Logistics', desc: 'Specialized 4x4 production support units equipped with 220V power inverters.', icon: Car },
              { title: 'Organized Day Tours', desc: 'Private guided excursions to Venice Lagoon, Verona Arena, and Lake Garda.', icon: Mountain }
            ].map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div
                  key={i}
                  onClick={() => openInquiryModal('Service Request', `Service: ${svc.title}\n\nPlease advise on details.`)}
                  className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/80 hover:border-[#F59E0B] transition-all cursor-pointer group"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-700/60 flex items-center justify-center mb-4 group-hover:bg-[#F59E0B] group-hover:text-black transition-colors">
                    <Icon className="w-5 h-5 text-[#F59E0B] group-hover:text-black" />
                  </div>
                  <h4 className="font-bold text-base text-white mb-2">{svc.title}</h4>
                  <p className="text-xs text-slate-300 font-normal leading-relaxed">{svc.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. 18 LOCAL CHAUFFEURS TRUST BANNER */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-white to-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#D97706] block">
              Native Val Gardena Consortium
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              18 Mountain Chauffeurs Rooted in Santa Cristina
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Unlike anonymous tech apps or aggregator platforms, Taxi Auto Sella is directly owned and operated by eighteen native mountain drivers. We know every Alpine pass, hairpin turn, and winter weather pattern.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {['Bauer Dietrich', 'Bauer Martin', 'Bernardi Jonas', 'Comploi Johann', 'Demetz Mark', 'Demetz Manuel', 'Insam Andreas', 'Ploner Iwan', 'Runggaldier Franco'].map(d => (
                <span key={d} className="px-3 py-1 bg-slate-100 rounded-full text-xs font-bold text-slate-700">
                  {d}
                </span>
              ))}
              <span className="px-3 py-1 bg-amber-100 text-[#D97706] rounded-full text-xs font-extrabold">
                + 9 More Partners
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <a
              href="tel:+390471790033"
              className="w-full py-4 px-6 bg-[#0A192F] hover:bg-[#D97706] text-white font-bold text-xs uppercase tracking-wider rounded-xl text-center shadow-lg transition-all"
            >
              Call 24/7 Hotline: +39 0471 790033
            </a>
            <Link
              to="/tech/members"
              className="w-full py-3 px-6 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs uppercase tracking-wider rounded-xl border border-slate-300 text-center transition-all"
            >
              View All 18 Chauffeurs & Partners
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

