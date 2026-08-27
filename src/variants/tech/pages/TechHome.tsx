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
  Star,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const TechHome: React.FC = () => {
  const { openBookingModal, updateBooking } = useAppStore();
  const [pickup, setPickup] = useState('Innsbruck Airport (INN)');
  const [dropoff, setDropoff] = useState('Val Gardena (Ortisei, S. Cristina, Selva)');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState('2');

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (date) updateBooking({ date });
    openBookingModal();
  };

  const airports = [
    { name: 'Innsbruck Airport (INN)', distance: '120 km', duration: '1h 30m', price: 'from €240' },
    { name: 'Verona Airport (VRN)', distance: '190 km', duration: '2h 05m', price: 'from €340' },
    { name: 'Munich Airport (MUC)', distance: '310 km', duration: '3h 30m', price: 'from €480' },
    { name: 'Venice Marco Polo (VCE)', distance: '270 km', duration: '3h 15m', price: 'from €440' },
    { name: 'Milan Malpensa (MXP)', distance: '350 km', duration: '3h 55m', price: 'from €540' },
    { name: 'Bolzano Airport / Train', distance: '42 km', duration: '0h 45m', price: 'from €110' },
  ];

  return (
    <div className="bg-[#F8FAFC] text-[#0F172A] font-sans">
      
      {/* HERO WITH REAL DOLOMITES FLEET LINEUP PHOTO */}
      <section className="relative bg-[#0A192F] text-white pt-12 pb-24 px-4 sm:px-8 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/autosella-fleet-lineup-dolomites.jpg"
            alt="Taxi Auto Sella Fleet in Dolomites"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/60 to-[#0A192F]/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          
          <div className="flex items-center gap-2 mb-6">
            <span className="px-3.5 py-1.5 rounded-full bg-[#D97706]/20 border border-[#D97706]/40 text-[#F59E0B] text-xs font-bold uppercase tracking-wider">
              Val Gardena’s Largest Taxi & Bus Consortium • 25 Vehicles
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Title & Value Prop */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
                Reliable Taxi & Transfers Across the Dolomites.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-xl font-light leading-relaxed">
                Guaranteed fixed airport transfers, hotel ski slope shuttles, and 24/7 on-demand local dispatch in Ortisei, Santa Cristina, and Selva.
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-medium text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                  <span>Free Flight Delay Tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                  <span>18 Native Mountain Drivers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                  <span>100% 4MATIC Mercedes Fleet</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                  <span>Luggage & Skis Included</span>
                </div>
              </div>

              {/* Call Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="tel:+390471790033"
                  className="px-6 py-3.5 rounded-xl bg-[#D97706] hover:bg-[#b45309] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>24/7 Hotline: +39 0471 790033</span>
                </a>

                <a
                  href="https://wa.me/390471790033?text=Hello%20Taxi%20Auto%20Sella,%20I%20need%20a%20taxi%20in%20Val%20Gardena."
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold text-xs flex items-center gap-2 shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Dispatch</span>
                </a>
              </div>
            </div>

            {/* Right Booking Panel */}
            <div className="lg:col-span-6">
              <div className="bg-[#112240] border border-slate-700/80 p-6 sm:p-8 rounded-3xl shadow-2xl">
                <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-6">
                  <div>
                    <h2 className="text-lg font-bold text-white">Online Transfer Booking</h2>
                    <span className="text-xs text-slate-400">Fixed quote • No taxi meter surprises</span>
                  </div>
                  <span className="text-xs font-bold text-[#F59E0B] bg-[#D97706]/10 px-3 py-1 rounded-full border border-[#D97706]/30">
                    24h Service
                  </span>
                </div>

                <form onSubmit={handleBooking} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Pick-up Location
                    </label>
                    <select
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      className="w-full px-4 py-3 bg-[#0A192F] border border-slate-700 rounded-xl text-sm font-semibold text-white focus:border-[#F59E0B] outline-none"
                    >
                      <option value="Innsbruck Airport (INN)">Innsbruck Airport (INN) — 1h 30m • from €240</option>
                      <option value="Verona Airport (VRN)">Verona Valerio Catullo (VRN) — 2h 05m • from €340</option>
                      <option value="Munich Airport (MUC)">Munich Airport (MUC) — 3h 30m • from €480</option>
                      <option value="Venice Marco Polo (VCE)">Venice Marco Polo (VCE) — 3h 15m • from €440</option>
                      <option value="Milan Malpensa (MXP)">Milan Malpensa (MXP) — 3h 55m • from €540</option>
                      <option value="Bolzano Airport / Train (BZO)">Bolzano Airport / Train (BZO) — 45m • from €110</option>
                      <option value="Bressanone Train Station">Bressanone Train Station — 35m • from €90</option>
                      <option value="Ponte Gardena Train Station">Ponte Gardena Station — 20m • from €50</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Destination (Hotel / Chalet)
                    </label>
                    <input
                      type="text"
                      value={dropoff}
                      onChange={(e) => setDropoff(e.target.value)}
                      className="w-full px-4 py-3 bg-[#0A192F] border border-slate-700 rounded-xl text-sm font-semibold text-white focus:border-[#F59E0B] outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Date
                      </label>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-[#0A192F] border border-slate-700 rounded-xl text-xs font-semibold text-white focus:border-[#F59E0B] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Guests
                      </label>
                      <select
                        value={passengers}
                        onChange={(e) => setPassengers(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-[#0A192F] border border-slate-700 rounded-xl text-xs font-semibold text-white focus:border-[#F59E0B] outline-none"
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
                    className="w-full py-4 bg-[#D97706] hover:bg-[#b45309] text-white font-extrabold text-sm rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg mt-2"
                  >
                    <span>Request Fixed Price Booking</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* POPULAR AIRPORT TRANSFERS GRID */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Gateway Airport & Train Routes
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              All-inclusive fixed fares. Highway tolls, mountain pass permits, meet & greet with name sign, and flight delay tracking are always included.
            </p>
          </div>
          <Link
            to="/tech/booking"
            className="text-xs font-bold text-[#D97706] hover:underline flex items-center gap-1.5 self-start md:self-auto"
          >
            <span>View All Route Rates</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {airports.map((a, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#D97706] transition-colors">
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span>{a.distance} • {a.duration}</span>
                  <span className="font-extrabold text-[#D97706] text-sm">{a.price}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">{a.name}</h3>
                <p className="text-xs text-slate-500 mb-6">Direct private 4MATIC Mercedes transfer to your hotel door in Val Gardena.</p>
              </div>

              <button
                onClick={() => openBookingModal()}
                className="w-full py-2.5 bg-[#0A192F] hover:bg-[#D97706] text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Book Transfer</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* COMPLETE FLEET SHOWCASE */}
      <section className="py-20 bg-white border-y border-slate-200 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Our 25-Vehicle Modern Fleet
              </h2>
              <p className="text-sm text-slate-600 mt-1 max-w-xl">
                From executive Mercedes sedans and 8-seater ski minibuses to 56-seat touring coaches, wheelchair vans, and bike trailers.
              </p>
            </div>
            <Link
              to="/tech/fleet"
              className="px-5 py-2.5 bg-[#0A192F] text-white hover:bg-[#D97706] font-bold text-xs rounded-xl transition-colors flex items-center gap-2 self-start md:self-auto"
            >
              <span>View All 25 Vehicles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FLEET.slice(0, 3).map((v) => (
              <div key={v.id} className="bg-[#F8FAFC] p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between group">
                <div>
                  <div className="h-56 rounded-2xl overflow-hidden mb-6 bg-slate-900">
                    <img src={v.image} alt={v.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{v.name}</h3>
                  <p className="text-xs font-bold text-[#D97706] mb-3">{v.subtitle}</p>
                  <p className="text-xs text-slate-600 mb-6 leading-relaxed">{v.tagline}</p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700">Max {v.passengers} Pax • {v.luggage} Bags</span>
                  <button
                    onClick={() => openBookingModal(v.id)}
                    className="px-4 py-2 bg-[#D97706] text-white font-bold text-xs rounded-xl hover:bg-[#b45309] transition-colors"
                  >
                    Select
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXCURSIONS TEASER */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Organised Tours & Scenic Trips
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              Discover Venice, Verona, Innsbruck, Lake Garda, and the Sella Ronda with native chauffeurs.
            </p>
          </div>
          <Link
            to="/tech/tours"
            className="text-xs font-bold text-[#D97706] hover:underline flex items-center gap-1.5 self-start md:self-auto"
          >
            <span>Explore All Excursions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EXCURSIONS.slice(0, 2).map((tour) => (
            <div key={tour.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between group">
              <div className="h-64 overflow-hidden relative bg-slate-900">
                <img src={tour.image} alt={tour.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-[#0A192F] text-[#F59E0B] text-xs font-bold px-3.5 py-1 rounded-full">
                  {tour.duration}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{tour.title}</h3>
                <p className="text-xs font-bold text-[#D97706] mb-3">{tour.subtitle}</p>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed">{tour.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-sm font-extrabold text-slate-900">{tour.priceFrom}</span>
                  <button
                    onClick={() => openBookingModal()}
                    className="px-5 py-2.5 bg-[#0A192F] hover:bg-[#D97706] text-white font-bold text-xs rounded-xl transition-colors"
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
