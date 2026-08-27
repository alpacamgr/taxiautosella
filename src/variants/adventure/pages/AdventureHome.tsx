import React, { useState } from 'react';
import { useAppStore } from '../../../store/useAppStore';
import { FLEET } from '../../../data/fleet';
import { EXCURSIONS } from '../../../data/excursions';
import { 
  PhoneCall, 
  MessageCircle, 
  MapPin, 
  Calendar, 
  Users, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Car, 
  Check, 
  Sun, 
  Snowflake,
  Mountain,
  Compass
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const AdventureHome: React.FC = () => {
  const { openBookingModal, updateBooking } = useAppStore();
  const [season, setSeason] = useState<'winter' | 'summer'>('winter');
  const [pickup, setPickup] = useState('Innsbruck Airport (INN)');
  const [dropoff, setDropoff] = useState('Val Gardena (Ortisei/S. Cristina/Selva)');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState('2');

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (date) updateBooking({ date });
    openBookingModal();
  };

  const valleyHotspots = [
    { name: 'Ortisei / St. Ulrich', subtitle: 'Seceda Cable Car & Pedestrian Zone', time: '5–10 min taxi', price: 'from €15' },
    { name: 'S. Cristina / St. Christina', subtitle: 'Saslong World Cup & Monte Pana', time: 'Central base', price: 'from €12' },
    { name: 'Selva / Wolkenstein', subtitle: 'Ciampinoi, Dantercepies & Sella Ronda', time: '5–10 min taxi', price: 'from €15' },
    { name: 'Passo Sella & Passo Gardena', subtitle: 'High Alpine Ski Slopes & Trailheads', time: '15–20 min taxi', price: 'from €35' },
  ];

  return (
    <div className="bg-[#FAF9F5] text-[#1A1D24] font-sans selection:bg-[#D6A56E] selection:text-white">
      
      {/* HERO: DUAL-TRACK GATEWAY (AIRPORT TRANSFERS + INSTANT VALLEY TAXI) */}
      <section className="relative bg-[#181B22] text-[#FBF9F5] pt-12 pb-24 px-4 sm:px-8 lg:px-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/autosella-fleet-lineup-dolomites.jpg"
            alt="Val Gardena Dolomites Fleet"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181B22] via-[#181B22]/70 to-[#181B22]/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          
          {/* Season Indicator Pill */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D6A56E]/20 border border-[#D6A56E]/40 text-[#E8B87D] text-xs font-bold uppercase tracking-wider">
              <span>Val Gardena & Dolomiti Superski Consortium</span>
            </div>

            <div className="flex bg-[#232731] p-1 rounded-xl border border-white/10 text-xs font-bold">
              <button
                type="button"
                onClick={() => setSeason('winter')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg transition-colors ${
                  season === 'winter' ? 'bg-[#D6A56E] text-[#181B22]' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Snowflake className="w-3.5 h-3.5" />
                <span>Winter Ski Mode</span>
              </button>
              <button
                type="button"
                onClick={() => setSeason('summer')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg transition-colors ${
                  season === 'summer' ? 'bg-[#1B3B2B] text-white border border-[#2D6047]' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Sun className="w-3.5 h-3.5 text-[#D6A56E]" />
                <span>Summer Alpine Mode</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Headline */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
                Your Ride in the Dolomites. <br />
                <span className="text-[#D6A56E]">Every Day, Every Season.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-xl font-light leading-relaxed">
                Val Gardena’s trusted 25-vehicle consortium. From fixed-price airport transfers (Innsbruck, Munich, Verona, Milan, Venice, Bolzano) to instant local taxi rides between Ortisei, Santa Cristina, and Selva.
              </p>

              {/* Dual-Track Quick Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="tel:+390471790033"
                  className="px-6 py-3.5 rounded-xl bg-[#D6A56E] hover:bg-[#c4935d] text-[#181B22] font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-amber-900/30 transition-all flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call 24/7 Valley Taxi (+39 0471 790033)</span>
                </a>

                <a
                  href="https://wa.me/390471790033?text=Hello%20Taxi%20Auto%20Sella,%20I%20need%20a%20ride%20in%20Val%20Gardena."
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold text-xs flex items-center gap-2 shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Dispatch</span>
                </a>
              </div>
            </div>

            {/* Right: Planned Airport Transfer Quick Form */}
            <div className="lg:col-span-6">
              <div className="bg-[#232731] border border-white/10 p-6 sm:p-8 rounded-3xl shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div>
                    <h2 className="text-lg font-bold text-white">Book Airport / Long-Distance Ride</h2>
                    <span className="text-xs text-slate-400">Guaranteed fixed prices, delay tracking & meet & greet</span>
                  </div>
                  <span className="text-xs font-bold text-[#D6A56E] bg-[#D6A56E]/10 px-3 py-1 rounded-full border border-[#D6A56E]/30">
                    100% 4MATIC
                  </span>
                </div>

                <form onSubmit={handleBooking} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      From (Airport / Train Station / City)
                    </label>
                    <select
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      className="w-full px-4 py-3 bg-[#181B22] border border-white/15 rounded-xl text-sm font-semibold text-white focus:border-[#D6A56E] outline-none"
                    >
                      <option value="Innsbruck Airport (INN)">Innsbruck Airport (INN) — 1h 30m • from €240</option>
                      <option value="Verona Airport (VRN)">Verona Valerio Catullo (VRN) — 2h 05m • from €340</option>
                      <option value="Munich Airport (MUC)">Munich Airport (MUC) — 3h 30m • from €480</option>
                      <option value="Venice Marco Polo (VCE)">Venice Marco Polo (VCE) — 3h 15m • from €440</option>
                      <option value="Milan Malpensa (MXP)">Milan Malpensa (MXP) — 3h 55m • from €540</option>
                      <option value="Bolzano Airport / Train (BZO)">Bolzano Airport / Train (BZO) — 45m • from €110</option>
                      <option value="Bressanone Train Station">Bressanone Train Station — 35m • from €90</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      To (Destination in Dolomites)
                    </label>
                    <input
                      type="text"
                      value={dropoff}
                      onChange={(e) => setDropoff(e.target.value)}
                      className="w-full px-4 py-3 bg-[#181B22] border border-white/15 rounded-xl text-sm font-semibold text-white focus:border-[#D6A56E] outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Date
                      </label>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-[#181B22] border border-white/15 rounded-xl text-xs font-semibold text-white focus:border-[#D6A56E] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Passengers
                      </label>
                      <select
                        value={passengers}
                        onChange={(e) => setPassengers(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-[#181B22] border border-white/15 rounded-xl text-xs font-semibold text-white focus:border-[#D6A56E] outline-none"
                      >
                        <option value="1">1 Passenger</option>
                        <option value="2">2 Passengers</option>
                        <option value="3-4">3–4 Passengers</option>
                        <option value="5-8">5–8 (Minivan 4x4)</option>
                        <option value="9+">9+ Group Coach</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#D6A56E] hover:bg-[#c4935d] text-[#181B22] font-extrabold text-sm rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-900/20 mt-2"
                  >
                    <span>Request Fixed Price Confirmation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* LOCAL VALLEY TAXI HUBS SECTION */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#181B22]">
              On-Demand Local Valley Taxis
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              Need a quick ride to the ski lift, dinner at a traditional mountain restaurant, or between Val Gardena villages? Our central dispatch connects you in minutes.
            </p>
          </div>
          <Link
            to="/adventure/services"
            className="text-xs font-bold text-[#1B3B2B] hover:text-[#D6A56E] flex items-center gap-1.5 self-start md:self-auto"
          >
            <span>Explore All Valley Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valleyHotspots.map((v, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#D6A56E] transition-colors">
              <div>
                <div className="flex items-center justify-between text-xs text-emerald-800 font-bold mb-2">
                  <span>{v.time}</span>
                  <span className="font-extrabold text-[#D6A56E]">{v.price}</span>
                </div>
                <h3 className="text-lg font-bold text-[#181B22] mb-1">{v.name}</h3>
                <p className="text-xs text-slate-500 mb-6">{v.subtitle}</p>
              </div>

              <a
                href="tel:+390471790033"
                className="w-full py-2.5 bg-[#181B22] hover:bg-[#D6A56E] hover:text-[#181B22] text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call Taxi</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* COMPLETE FLEET SHOWCASE */}
      <section className="py-20 bg-white border-y border-slate-200 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#181B22]">
                Our Complete 25-Vehicle Fleet
              </h2>
              <p className="text-sm text-slate-600 mt-1 max-w-xl">
                From executive sedans and 8-seater ski minibuses to 56-seat luxury coaches, wheelchair-accessible vans, and bike trailers.
              </p>
            </div>
            <Link
              to="/adventure/fleet"
              className="px-5 py-2.5 bg-[#181B22] text-[#D6A56E] hover:bg-[#D6A56E] hover:text-[#181B22] font-bold text-xs rounded-xl transition-colors flex items-center gap-2 self-start md:self-auto"
            >
              <span>View All 25 Vehicles & Specs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FLEET.slice(0, 3).map((v) => (
              <div key={v.id} className="bg-[#FAF9F5] p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between group">
                <div>
                  <div className="h-56 rounded-2xl overflow-hidden mb-6 bg-slate-900">
                    <img src={v.image} alt={v.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h3 className="text-xl font-bold text-[#181B22] mb-1">{v.name}</h3>
                  <p className="text-xs font-bold text-[#D6A56E] mb-3">{v.subtitle}</p>
                  <p className="text-xs text-slate-600 mb-6 leading-relaxed">{v.tagline}</p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700">Max {v.passengers} Pax • {v.luggage} Bags</span>
                  <button
                    onClick={() => openBookingModal(v.id)}
                    className="px-4 py-2 bg-[#D6A56E] text-[#181B22] font-bold text-xs rounded-xl hover:bg-[#c4935d] transition-colors"
                  >
                    Select
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DAY TOURS & SELLA RONDA TEASER */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#181B22]">
              Organised Tours & Sightseeing Trips
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              Explore Venice, Verona, Innsbruck, Lake Garda, and the breathtaking Sella Ronda loop with seasoned local chauffeurs.
            </p>
          </div>
          <Link
            to="/adventure/tours"
            className="text-xs font-bold text-[#1B3B2B] hover:text-[#D6A56E] flex items-center gap-1.5 self-start md:self-auto"
          >
            <span>View All Day Tours</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EXCURSIONS.slice(0, 2).map((tour) => (
            <div key={tour.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between group">
              <div className="h-64 overflow-hidden relative bg-slate-900">
                <img src={tour.image} alt={tour.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-[#181B22] text-[#D6A56E] text-xs font-bold px-3 py-1 rounded-full">
                  {tour.duration}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#181B22] mb-1">{tour.title}</h3>
                <p className="text-xs font-bold text-[#D6A56E] mb-3">{tour.subtitle}</p>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed">{tour.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-sm font-extrabold text-[#181B22]">{tour.priceFrom}</span>
                  <button
                    onClick={() => openBookingModal()}
                    className="px-5 py-2.5 bg-[#181B22] hover:bg-[#D6A56E] hover:text-[#181B22] text-white font-bold text-xs rounded-xl transition-colors"
                  >
                    Inquire Tour
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
