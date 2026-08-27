import React, { useState } from 'react';
import { useAppStore } from '../../../store/useAppStore';
import { FLEET } from '../../../data/fleet';
import { 
  MapPin, 
  Calendar, 
  Users, 
  ArrowRight,
  Briefcase,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  Clock,
  Sparkles,
  Mountain
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const LuxuryHome: React.FC = () => {
  const { openBookingModal, updateBooking, openInquiryModal } = useAppStore();
  const [bookingDetails, setBookingDetails] = useState({
    pickup: '',
    dropoff: '',
    date: '',
    passengers: '2'
  });

  const handleStartBooking = (e: React.FormEvent) => {
    e.preventDefault();
    openInquiryModal(
      'VIP Chauffeur Request',
      `Pick-Up: ${bookingDetails.pickup || 'Airport/Station'}\nDestination: ${bookingDetails.dropoff || 'Val Gardena'}\nDate: ${bookingDetails.date || 'Flexible'}\nGuests: ${bookingDetails.passengers} Passengers\nService: VIP Chauffeur Transfer`
    );
  };

  const routes = [
    { from: 'Innsbruck Airport (INN)', to: 'Val Gardena', time: '1h 30m', dist: '120 km', price: 'from €240' },
    { from: 'Verona Valerio Catullo (VRN)', to: 'Val Gardena', time: '2h 05m', dist: '190 km', price: 'from €340' },
    { from: 'Munich Franz Josef Strauss (MUC)', to: 'Val Gardena', time: '3h 30m', dist: '310 km', price: 'from €480' },
    { from: 'Venice Marco Polo (VCE)', to: 'Val Gardena', time: '3h 15m', dist: '270 km', price: 'from €440' },
    { from: 'Milan Malpensa (MXP)', to: 'Val Gardena', time: '3h 55m', dist: '350 km', price: 'from €540' },
    { from: 'Bolzano Airport (BZO)', to: 'Val Gardena', time: '45m', dist: '42 km', price: 'from €110' },
  ];

  return (
    <div>
      {/* HERO SECTION — Generous luxury margins, high-contrast text readability & bright fleet visibility */}
      <section className="relative w-full bg-[#0E1117] text-[#F8F6F0] pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24 px-6 lg:px-16 overflow-hidden">
        
        {/* Background Hero Image with Precise Fleet Framing & Luminous Alpine Light */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="/images/hero/autosella-fleet-lineup-dolomites.jpg" 
            alt="Taxi Auto Sella 25 Mercedes 4MATIC Fleet Lineup in the Dolomites"
            className="w-full h-full object-cover object-[center_76%] sm:object-[center_72%] lg:object-[center_68%] brightness-95 contrast-105 transform scale-100 transition-transform duration-1000"
          />
          
          {/* Targeted directional gradient on left 60% for guaranteed text legibility while fleet on right stays bright */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E1117]/95 via-[#0E1117]/85 to-transparent lg:w-3/5" />
        </div>

        {/* Main Hero Content Grid */}
        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Unboxed Editorial Headline & Heritage with Natural Text Shadows */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-editorial text-5xl sm:text-7xl lg:text-8xl font-normal leading-[1.03] tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              The Grand <br />
              <span className="italic text-[#C5A880] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">Alpine</span> Chauffeur
            </h1>

            <p className="text-base sm:text-lg text-white max-w-lg font-light leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              Discreet, uncompromising luxury transfers across the Dolomites. Thirty-five years of consortium heritage, 18 native drivers, and 25 Mercedes 4MATIC all-wheel-drive vehicles ready for every Alpine pass.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-1 text-xs font-medium tracking-wider text-white">
              <div className="flex items-center gap-2 bg-black/40 px-3.5 py-2 rounded-xl border border-white/20 backdrop-blur-sm shadow-md drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                <ShieldCheck className="w-4 h-4 text-[#C5A880] flex-shrink-0" />
                <span>Guaranteed Winter 4x4 Readiness</span>
              </div>
              <div className="flex items-center gap-2 bg-black/40 px-3.5 py-2 rounded-xl border border-white/20 backdrop-blur-sm shadow-md drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                <Clock className="w-4 h-4 text-[#C5A880] flex-shrink-0" />
                <span>60 Min Free Flight Delay Waiting</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bespoke Concierge Booking Panel */}
          <div className="lg:col-span-5 w-full">
            <form 
              onSubmit={handleStartBooking} 
              className="bg-[#F8F6F0] p-7 sm:p-9 text-[#0E1117] shadow-2xl rounded-2xl border border-white/20 backdrop-blur-lg relative"
            >
              <div className="text-center border-b border-[#0E1117]/10 pb-3.5 mb-5">
                <h2 className="font-editorial text-2xl text-[#0E1117]">
                  Reserve Your Journey
                </h2>
                <p className="text-[11px] text-[#0E1117]/70 font-medium tracking-wide uppercase mt-1">
                  Fixed transparent rates • No prepayment needed
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="group relative">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#0E1117]/70 mb-1">
                    Pick-Up Location / Airport
                  </label>
                  <div className="flex items-center border-b border-[#0E1117]/30 py-2 transition-colors focus-within:border-[#C5A880]">
                    <MapPin className="w-4 h-4 text-[#C5A880] mr-3 flex-shrink-0" />
                    <input 
                      type="text" 
                      placeholder="e.g. Innsbruck, Munich, Verona, Bolzano"
                      className="w-full bg-transparent border-none outline-none text-sm font-medium text-[#0E1117] placeholder-[#0E1117]/50"
                      value={bookingDetails.pickup}
                      onChange={e => setBookingDetails({...bookingDetails, pickup: e.target.value})}
                    />
                  </div>
                </div>

                <div className="group relative">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#0E1117]/70 mb-1">
                    Destination in Val Gardena
                  </label>
                  <div className="flex items-center border-b border-[#0E1117]/30 py-2 transition-colors focus-within:border-[#C5A880]">
                    <MapPin className="w-4 h-4 text-[#C5A880] mr-3 flex-shrink-0" />
                    <input 
                      type="text" 
                      placeholder="Hotel, Chalet or Resort in Ortisei / Selva"
                      className="w-full bg-transparent border-none outline-none text-sm font-medium text-[#0E1117] placeholder-[#0E1117]/50"
                      value={bookingDetails.dropoff}
                      onChange={e => setBookingDetails({...bookingDetails, dropoff: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-1">
                  <div className="group relative">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#0E1117]/70 mb-1">
                      Date
                    </label>
                    <div className="flex items-center border-b border-[#0E1117]/30 py-2 transition-colors focus-within:border-[#C5A880]">
                      <Calendar className="w-4 h-4 text-[#C5A880] mr-2 flex-shrink-0" />
                      <input 
                        type="date" 
                        className="w-full bg-transparent border-none outline-none text-xs font-semibold text-[#0E1117]"
                        value={bookingDetails.date}
                        onChange={e => setBookingDetails({...bookingDetails, date: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="group relative">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#0E1117]/70 mb-1">
                      Passengers
                    </label>
                    <div className="flex items-center border-b border-[#0E1117]/30 py-2 transition-colors focus-within:border-[#C5A880]">
                      <Users className="w-4 h-4 text-[#C5A880] mr-2 flex-shrink-0" />
                      <select 
                        className="w-full bg-transparent border-none outline-none text-xs font-semibold text-[#0E1117] cursor-pointer"
                        value={bookingDetails.passengers}
                        onChange={e => setBookingDetails({...bookingDetails, passengers: e.target.value})}
                      >
                        <option value="1">1 Passenger</option>
                        <option value="2">2 Passengers</option>
                        <option value="3-4">3–4 Passengers</option>
                        <option value="5-7">5–7 (V-Class VIP)</option>
                        <option value="8">8 Passengers (Vito 4x4)</option>
                        <option value="9+">9+ Group Coach</option>
                      </select>
                    </div>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full mt-6 bg-[#0E1117] hover:bg-[#C5A880] text-[#F8F6F0] hover:text-[#0E1117] transition-all duration-300 py-4 px-6 font-semibold text-xs uppercase tracking-widest flex items-center justify-between group shadow-xl rounded-xl"
                >
                  <span className="font-bold">Request VIP Chauffeur Quote</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="mt-4 pt-3 border-t border-[#0E1117]/10 flex items-center justify-between text-[10px] text-[#0E1117]/70 font-medium">
                <span>✓ Onboard Card Payment</span>
                <span>✓ Free Ski Gear Handling</span>
                <span>✓ Direct WhatsApp Dispatch</span>
              </div>
            </form>
          </div>
        </div>

      </section>

      {/* EDITORIAL HERITAGE & ALPINE RESILIENCE SECTION */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto border-b border-[#0E1117]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C5A880]">
              <Mountain className="w-4 h-4" />
              <span>Consortium Heritage Since 1989</span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-[#0E1117]">
              Thirty-Five Years of <br />
              <span className="italic text-[#C5A880]">Dolomite</span> Mastery
            </h2>
            
            <p className="text-base text-[#0E1117]/80 font-light leading-relaxed">
              Founded in Santa Cristina in 1989, Taxi Auto Sella unites eighteen native mountain chauffeurs. We navigate high Alpine passes in every season with total composure, delivering guests seamlessly to five-star chalets and hotels.
            </p>

            <p className="text-sm text-[#0E1117]/70 font-light leading-relaxed">
              Whether ascending Passo Sella during a winter snowstorm or providing late-night dinner shuttles between Ortisei and Selva, our 100% Mercedes 4MATIC fleet guarantees effortless serenity and punctuality.
            </p>
            
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#0E1117]/10">
              <div>
                <div className="font-editorial text-4xl text-[#0E1117]">25</div>
                <div className="text-[11px] font-bold text-[#0E1117]/70 uppercase tracking-widest mt-1">4MATIC Fleet</div>
              </div>
              <div>
                <div className="font-editorial text-4xl text-[#0E1117]">18</div>
                <div className="text-[11px] font-bold text-[#0E1117]/70 uppercase tracking-widest mt-1">Native Drivers</div>
              </div>
              <div>
                <div className="font-editorial text-4xl text-[#0E1117]">35+</div>
                <div className="text-[11px] font-bold text-[#0E1117]/70 uppercase tracking-widest mt-1">Years Active</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/images/fleet/mercedes-s-class-vip.jpg" 
                alt="Mercedes S-Class VIP Transfer"
                className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1117]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-1">
                  Presidential Service
                </span>
                <h3 className="font-editorial text-2xl text-white">Mercedes-Benz S-Class Long VIP</h3>
                <p className="text-xs text-white/80 font-light mt-1">
                  Acoustic double glazing, rear executive massage seating, and white-glove chauffeur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MINIMALIST FLEET PRESENTATION */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto border-b border-[#0E1117]/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-2">
              Mercedes-Benz Fleet
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl font-normal text-[#0E1117]">
              The Executive <span className="italic text-[#C5A880]">Lineup</span>
            </h2>
            <p className="text-sm text-[#0E1117]/70 font-light mt-2 max-w-md">
              Every vehicle in our fleet is permanently equipped with Mercedes 4MATIC all-wheel drive, premium acoustic glass, and winter alpine gear.
            </p>
          </div>
          <Link 
            to="/luxury/fleet"
            className="text-xs uppercase tracking-widest font-semibold text-[#0E1117] hover:text-[#C5A880] transition-colors flex items-center gap-2 self-start md:self-auto"
          >
            <span>View All 25 Vehicles & Coaches</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FLEET.slice(0, 3).map((vehicle) => (
            <div 
              key={vehicle.id} 
              className="bg-white p-6 shadow-xl rounded-2xl flex flex-col justify-between border border-[#0E1117]/10 hover:border-[#C5A880] transition-all group"
            >
              <div>
                <div className="h-60 overflow-hidden mb-6 rounded-xl bg-slate-900 relative">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {vehicle.badge && (
                    <span className="absolute top-3 right-3 px-3 py-1 bg-[#0E1117]/90 backdrop-blur-md text-[#C5A880] text-[10px] font-bold uppercase tracking-wider rounded-full border border-[#C5A880]/30">
                      {vehicle.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-editorial text-2xl text-[#0E1117] mb-1">{vehicle.name}</h3>
                <p className="text-xs text-[#C5A880] font-semibold tracking-wide uppercase mb-3">{vehicle.subtitle}</p>
                <p className="text-xs text-[#0E1117]/80 font-light leading-relaxed mb-6">
                  {vehicle.tagline}
                </p>
              </div>

              <div className="pt-4 border-t border-[#0E1117]/10 flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-[#0E1117]/70 font-medium">
                  <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-[#C5A880]" /> {vehicle.passengers} Pax</span>
                  <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4 text-[#C5A880]" /> {vehicle.luggage} Bags</span>
                </div>
                <button 
                  onClick={() => openInquiryModal('Fleet Request', `Vehicle: ${vehicle.name}\nCapacity: ${vehicle.passengers} Pax, ${vehicle.luggage} Bags\nTier: ${vehicle.subtitle}\n\nPlease advise on availability.`)}
                  className="p-3 rounded-full bg-[#0E1117] text-[#F8F6F0] hover:bg-[#C5A880] hover:text-[#0E1117] transition-colors shadow-md"
                  aria-label={`Inquire about ${vehicle.name}`}
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* POPULAR ROUTE DIRECTORY — High-contrast fixed price cards */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto border-b border-[#0E1117]/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8C6D46] block mb-2">
              Transparent Fixed Rates
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl font-normal text-[#0E1117]">
              Gateway <span className="italic text-[#8C6D46]">Connections</span>
            </h2>
          </div>
          <Link 
            to="/luxury/booking" 
            className="text-xs uppercase tracking-widest font-bold text-[#0E1117] hover:text-[#8C6D46] transition-colors flex items-center gap-2"
          >
            <span>View All Airports & Train Stations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map((r, i) => (
            <div 
              key={i} 
              onClick={() => openInquiryModal('Gateway Transfer', `Route: ${r.from} ➔ ${r.to}\nDistance: ${r.dist}\nDrive Time: ${r.time}\nRate: ${r.price}\n\nPlease confirm availability and flight details.`)}
              className="p-6 bg-white rounded-2xl border border-[#0E1117]/10 hover:border-[#8C6D46] transition-all cursor-pointer shadow-md hover:shadow-xl flex items-center justify-between group"
            >
              <div>
                <h4 className="font-bold text-sm text-[#0E1117] group-hover:text-[#8C6D46] transition-colors mb-1">{r.from}</h4>
                <div className="text-xs text-[#0E1117]/70 flex items-center gap-2 font-medium">
                  <span>{r.dist}</span>
                  <span>•</span>
                  <span>{r.time}</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-base font-bold text-[#0E1117] group-hover:text-[#8C6D46] transition-colors block">{r.price}</span>
                <span className="text-[10px] text-[#0E1117]/60 font-semibold uppercase tracking-wider">All-Inclusive</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NIGHTLIFE & PARTNERS */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8C6D46] block mb-2">
              Evening & Après-Ski Mobility
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl font-normal text-[#0E1117] mb-6">
              Val Gardena <span className="italic text-[#8C6D46]">Nightlife</span>
            </h2>
            <p className="text-sm text-[#0E1117]/80 font-light leading-relaxed mb-6">
              When the slopes close, the après-ski and evening entertainment begins. We offer dedicated night shuttle services to all prime venues in the valley, ensuring you arrive in style and return safely to your chalet.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {['Caffe 2000', 'Adler', 'Marina Lounge', 'Piz 5', 'Disco Dali\'', 'La Stua', 'Goalies\' Pub', 'Mauriz Keller', 'Bar 181', 'Saltos'].map(venue => (
                <span 
                  key={venue} 
                  onClick={() => openInquiryModal('Nightlife Taxi Dispatch', `Venue: ${venue}\nNeed immediate evening pickup in Val Gardena.`)}
                  className="px-4 py-2 bg-white border border-[#0E1117]/15 rounded-full text-xs font-semibold text-[#0E1117] hover:border-[#8C6D46] hover:text-[#8C6D46] transition-colors cursor-pointer shadow-sm"
                >
                  {venue}
                </span>
              ))}
            </div>
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8C6D46] block mb-2">
              Local Authority
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl font-normal text-[#0E1117] mb-6">
              Official <span className="italic text-[#8C6D46]">Partners</span>
            </h2>
            <p className="text-sm text-[#0E1117]/80 font-light leading-relaxed mb-6">
              Our 35 years of heritage have allowed us to build strong relationships with the valley's most prestigious establishments and essential services.
            </p>
            <div className="grid grid-cols-2 gap-4 text-xs text-[#0E1117]/90 font-medium">
              <ul className="space-y-3">
                <li>• <a href="https://www.valgardena.it" target="_blank" rel="noopener noreferrer" className="hover:text-[#8C6D46] underline-offset-2 hover:underline">Val Gardena Tourist Board</a></li>
                <li>• <a href="https://www.dolomitisuperski.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#8C6D46] underline-offset-2 hover:underline">Dolomiti Superski</a></li>
                <li>• <a href="https://www.dolomitiunesco.info" target="_blank" rel="noopener noreferrer" className="hover:text-[#8C6D46] underline-offset-2 hover:underline">UNESCO Dolomites World Heritage</a></li>
                <li>• <a href="https://www.suedtirol.info" target="_blank" rel="noopener noreferrer" className="hover:text-[#8C6D46] underline-offset-2 hover:underline">Südtirol / South Tyrol</a></li>
                <li>• <a href="https://www.elikos.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#8C6D46] underline-offset-2 hover:underline">Elikos Helicopter Service</a></li>
                <li>• <a href="https://www.dolomitisportclinic.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#8C6D46] underline-offset-2 hover:underline">Dolomiti Sportclinic</a></li>
              </ul>
              <ul className="space-y-3">
                <li>• <a href="https://www.intersportrent.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#8C6D46] underline-offset-2 hover:underline">Intersport Rent</a></li>
                <li>• <a href="https://www.hoteleuropa.it" target="_blank" rel="noopener noreferrer" className="hover:text-[#8C6D46] underline-offset-2 hover:underline">Hotel Europa</a></li>
                <li>• <a href="https://www.rusctlea.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#8C6D46] underline-offset-2 hover:underline">Rusctlea Ristorante</a></li>
                <li>• <a href="https://www.woodcarvings.info" target="_blank" rel="noopener noreferrer" className="hover:text-[#8C6D46] underline-offset-2 hover:underline">Bruno Riffeser Woodcarving</a></li>
                <li>• <a href="https://www.carrozzeriagardena.it" target="_blank" rel="noopener noreferrer" className="hover:text-[#8C6D46] underline-offset-2 hover:underline">Carrozzeria Gardena</a></li>
                <li>• <a href="https://www.digiem.it" target="_blank" rel="noopener noreferrer" className="hover:text-[#8C6D46] underline-offset-2 hover:underline">Digiem Agency</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

