import React, { useState } from 'react';
import { useAppStore } from '../../../store/useAppStore';
import { FLEET } from '../../../data/fleet';
import { 
  MapPin, 
  Calendar, 
  Users, 
  ArrowRight,
  Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const LuxuryHome: React.FC = () => {
  const { openBookingModal, updateBooking } = useAppStore();
  const [bookingDetails, setBookingDetails] = useState({
    pickup: '',
    dropoff: '',
    date: '',
    passengers: '2'
  });

  const handleStartBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const { openInquiryModal } = useAppStore.getState();
    openInquiryModal('VIP Chauffeur Request', `Pickup: ${bookingDetails.pickup}, Dropoff: ${bookingDetails.dropoff}, Date: ${bookingDetails.date}, Passengers: ${bookingDetails.passengers}`);
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
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[85vh] bg-[#0E1117] text-[#F8F6F0] flex flex-col justify-end pb-20 lg:pb-28 px-6 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero/autosella-fleet-lineup-dolomites.jpg" 
            alt="Dolomites Luxury Fleet Lineup"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1117] via-[#0E1117]/30 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <h1 className="font-editorial text-5xl sm:text-7xl lg:text-8xl font-normal leading-[1.05] tracking-tight mb-8 text-[#F8F6F0]">
              The Grand <br />
              <span className="italic text-[#C5A880]">Alpine</span> Chauffeur
            </h1>
            <p className="text-base sm:text-xl text-[#F8F6F0]/80 max-w-md font-light leading-relaxed">
              Discreet, uncompromising luxury transfers across the Dolomites. Thirty-five years of consortium heritage with 25 Mercedes 4MATIC vehicles.
            </p>
          </div>

          <div className="lg:col-span-5 w-full">
            {/* Bespoke Concierge Ribbon / Booking Panel */}
            <form onSubmit={handleStartBooking} className="bg-[#F8F6F0] p-8 sm:p-10 text-[#0E1117] shadow-2xl rounded-2xl">
              <h2 className="font-editorial text-2xl mb-6 border-b border-[#0E1117]/10 pb-4">
                Reserve Your Journey
              </h2>
              
              <div className="space-y-5">
                <div className="group relative">
                  <label className="block text-[11px] font-semibold uppercase tracking-widest text-[#0E1117]/50 mb-1">
                    Pick-Up Location
                  </label>
                  <div className="flex items-center border-b border-[#0E1117]/20 py-2 transition-colors focus-within:border-[#C5A880]">
                    <MapPin className="w-4 h-4 text-[#C5A880] mr-3" />
                    <input 
                      type="text" 
                      placeholder="e.g. Innsbruck / Munich Airport"
                      className="w-full bg-transparent border-none outline-none text-sm font-medium placeholder-[#0E1117]/40"
                      value={bookingDetails.pickup}
                      onChange={e => setBookingDetails({...bookingDetails, pickup: e.target.value})}
                    />
                  </div>
                </div>

                <div className="group relative">
                  <label className="block text-[11px] font-semibold uppercase tracking-widest text-[#0E1117]/50 mb-1">
                    Destination
                  </label>
                  <div className="flex items-center border-b border-[#0E1117]/20 py-2 transition-colors focus-within:border-[#C5A880]">
                    <MapPin className="w-4 h-4 text-[#C5A880] mr-3" />
                    <input 
                      type="text" 
                      placeholder="Hotel or Chalet in Val Gardena"
                      className="w-full bg-transparent border-none outline-none text-sm font-medium placeholder-[#0E1117]/40"
                      value={bookingDetails.dropoff}
                      onChange={e => setBookingDetails({...bookingDetails, dropoff: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="group relative">
                    <label className="block text-[11px] font-semibold uppercase tracking-widest text-[#0E1117]/50 mb-1">
                      Date
                    </label>
                    <div className="flex items-center border-b border-[#0E1117]/20 py-2 transition-colors focus-within:border-[#C5A880]">
                      <Calendar className="w-4 h-4 text-[#C5A880] mr-3" />
                      <input 
                        type="date" 
                        className="w-full bg-transparent border-none outline-none text-xs font-medium text-[#0E1117]"
                        value={bookingDetails.date}
                        onChange={e => setBookingDetails({...bookingDetails, date: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="group relative">
                    <label className="block text-[11px] font-semibold uppercase tracking-widest text-[#0E1117]/50 mb-1">
                      Guests
                    </label>
                    <div className="flex items-center border-b border-[#0E1117]/20 py-2 transition-colors focus-within:border-[#C5A880]">
                      <Users className="w-4 h-4 text-[#C5A880] mr-3" />
                      <select 
                        className="w-full bg-transparent border-none outline-none text-xs font-medium text-[#0E1117]"
                        value={bookingDetails.passengers}
                        onChange={e => setBookingDetails({...bookingDetails, passengers: e.target.value})}
                      >
                        <option value="1">1 Passenger</option>
                        <option value="2">2 Passengers</option>
                        <option value="3-4">3–4 Passengers</option>
                        <option value="5-8">5–8 (Minivan VIP)</option>
                        <option value="9+">9+ Group Coach</option>
                      </select>
                    </div>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full mt-4 bg-[#0E1117] hover:bg-[#C5A880] text-[#F8F6F0] hover:text-[#0E1117] transition-all duration-300 py-4 px-6 font-semibold text-xs uppercase tracking-widest flex items-center justify-between group shadow-md"
                >
                  <span>Request VIP Chauffeur</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* EDITORIAL HERITAGE SECTION */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto border-b border-[#0E1117]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-editorial text-4xl sm:text-5xl font-normal leading-tight text-[#0E1117]">
              Thirty-Five Years of <br />
              <span className="italic text-[#C5A880]">Dolomite</span> Mastery
            </h2>
            <p className="text-base text-[#0E1117]/70 font-light leading-relaxed">
              Founded in Santa Cristina in 1989, Taxi Auto Sella unites eighteen native mountain chauffeurs. We navigate high Alpine passes in every season with total composure, delivering guests seamlessly to five-star chalets and hotels.
            </p>
            
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#0E1117]/10">
              <div>
                <div className="font-editorial text-3xl text-[#0E1117]">25</div>
                <div className="text-[11px] font-semibold text-[#0E1117]/50 uppercase tracking-widest mt-1">4MATIC Fleet</div>
              </div>
              <div>
                <div className="font-editorial text-3xl text-[#0E1117]">18</div>
                <div className="text-[11px] font-semibold text-[#0E1117]/50 uppercase tracking-widest mt-1">Native Drivers</div>
              </div>
              <div>
                <div className="font-editorial text-3xl text-[#0E1117]">35+</div>
                <div className="text-[11px] font-semibold text-[#0E1117]/50 uppercase tracking-widest mt-1">Years Active</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <img 
                src="/images/fleet/mercedes-s-class-vip.jpg" 
                alt="Mercedes S-Class VIP Transfer"
                className="w-full h-[450px] object-cover shadow-2xl rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MINIMALIST FLEET PRESENTATION */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto border-b border-[#0E1117]/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-editorial text-4xl sm:text-5xl font-normal text-[#0E1117]">
              The Mercedes-Benz <span className="italic text-[#C5A880]">Lineup</span>
            </h2>
            <p className="text-sm text-[#0E1117]/60 font-light mt-2 max-w-md">
              Every vehicle in our fleet is permanently equipped with Mercedes 4MATIC all-wheel drive, premium acoustic glass, and winter alpine gear.
            </p>
          </div>
          <Link 
            to="/luxury/fleet"
            className="text-xs uppercase tracking-widest font-semibold text-[#0E1117] hover:text-[#C5A880] transition-colors flex items-center gap-2 self-start md:self-auto"
          >
            <span>View All 25 Vehicles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FLEET.slice(0, 3).map((vehicle) => (
            <div key={vehicle.id} className="bg-white p-6 shadow-xl rounded-2xl flex flex-col justify-between border border-[#0E1117]/5 group">
              <div>
                <div className="h-56 overflow-hidden mb-6 rounded-xl bg-slate-900">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="font-editorial text-2xl text-[#0E1117] mb-1">{vehicle.name}</h3>
                <p className="text-xs text-[#C5A880] font-medium tracking-wide uppercase mb-4">{vehicle.subtitle}</p>
                <p className="text-xs text-[#0E1117]/70 font-light leading-relaxed mb-6">
                  {vehicle.tagline}
                </p>
              </div>

              <div className="pt-4 border-t border-[#0E1117]/10 flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-[#0E1117]/60">
                  <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {vehicle.passengers} Pax</span>
                  <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" /> {vehicle.luggage} Bags</span>
                </div>
                <button 
                  onClick={() => openBookingModal(vehicle.id)}
                  className="p-2.5 rounded-full bg-[#0E1117] text-[#F8F6F0] hover:bg-[#C5A880] hover:text-[#0E1117] transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* POPULAR ROUTE DIRECTORY */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <h2 className="font-editorial text-4xl sm:text-5xl font-normal text-[#0E1117] mb-12">
          Gateway <span className="italic text-[#C5A880]">Connections</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map((r, i) => (
            <div 
              key={i} 
              onClick={() => openBookingModal()}
              className="p-6 bg-white rounded-2xl border border-[#0E1117]/5 hover:border-[#C5A880] transition-all cursor-pointer shadow-sm hover:shadow-md flex items-center justify-between"
            >
              <div>
                <h4 className="font-semibold text-sm text-[#0E1117] mb-1">{r.from}</h4>
                <div className="text-xs text-[#0E1117]/50 flex items-center gap-2">
                  <span>{r.dist}</span>
                  <span>•</span>
                  <span>{r.time}</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-sm font-bold text-[#C5A880] block">{r.price}</span>
                <span className="text-[10px] text-[#0E1117]/40 uppercase tracking-widest">Fixed Rate</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NIGHTLIFE & PARTNERS */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto border-t border-[#0E1117]/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-editorial text-4xl sm:text-5xl font-normal text-[#0E1117] mb-8">
              Val Gardena <span className="italic text-[#C5A880]">Nightlife</span>
            </h2>
            <p className="text-sm text-[#0E1117]/70 font-light leading-relaxed mb-6">
              When the slopes close, the après-ski and evening entertainment begins. We offer dedicated night shuttle services to all prime venues in the valley, ensuring you arrive in style and return safely to your chalet.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Caffe 2000', 'Adler', 'Marina', 'Piz 5', 'Dali\'', 'La Stua', 'Goalies\' Pub', 'Mauriz Keller', 'Bar 181', 'Saltos'].map(venue => (
                <span key={venue} className="px-4 py-2 border border-[#0E1117]/20 rounded-full text-xs font-medium text-[#0E1117]">{venue}</span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-editorial text-4xl sm:text-5xl font-normal text-[#0E1117] mb-8">
              Local <span className="italic text-[#C5A880]">Partners</span>
            </h2>
            <p className="text-sm text-[#0E1117]/70 font-light leading-relaxed mb-6">
              Our 35 years of heritage have allowed us to build strong relationships with the valley's most prestigious establishments and essential services.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm text-[#0E1117]/80 font-medium">
              <ul className="space-y-3">
                <li>• Elikos</li>
                <li>• Dolomiti Sportclinic</li>
                <li>• Bruno Riffeser</li>
                <li>• Rusctlea</li>
              </ul>
              <ul className="space-y-3">
                <li>• Europa Hotel</li>
                <li>• Carrozzeria Gardena</li>
                <li>• Val Gardena Tourism</li>
                <li>• Intersport Rent</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
