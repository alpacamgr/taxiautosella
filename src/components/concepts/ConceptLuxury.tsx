import React, { useState } from 'react';
import { useAppStore } from '../../store/useAppStore';
import { 
  MapPin, 
  Calendar, 
  Users, 
  ArrowRight,
  Phone,
  MessageCircle,
  Clock,
  Shield
} from 'lucide-react';

export const ConceptLuxury: React.FC = () => {
  const { openBookingModal } = useAppStore();
  const [bookingDetails, setBookingDetails] = useState({
    pickup: '',
    dropoff: '',
    date: '',
    passengers: '1'
  });

  return (
    <div className="bg-[#F8F6F0] text-[#0E1117] min-h-screen font-sans selection:bg-[#C5A880] selection:text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');
        .font-editorial { font-family: 'Playfair Display', serif; }
      `}</style>
      
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[90vh] bg-[#0E1117] text-[#F8F6F0] flex flex-col justify-end pb-24 lg:pb-32 px-6 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=2000&q=85" 
            alt="Dolomites Mountains"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1117] via-[#0E1117]/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <h1 className="font-editorial text-5xl sm:text-7xl lg:text-8xl font-normal leading-[1.05] tracking-tight mb-8 text-[#F8F6F0]">
              The Grand <br />
              <span className="italic text-[#C5A880]">Alpine</span> Chauffeur
            </h1>
            <p className="text-lg sm:text-xl text-[#F8F6F0]/80 max-w-md font-light leading-relaxed">
              Discreet, uncompromising luxury transfers across the Dolomites. Thirty-five years of consortium heritage.
            </p>
          </div>

          <div className="lg:col-span-5 w-full">
            {/* Bespoke Concierge Ribbon / Booking Panel */}
            <div className="bg-[#F8F6F0] p-8 sm:p-10 text-[#0E1117] shadow-2xl">
              <h2 className="font-editorial text-2xl mb-6 border-b border-[#0E1117]/10 pb-4">Reserve Your Journey</h2>
              
              <div className="space-y-5">
                <div className="group relative">
                  <label className="block text-xs font-semibold uppercase tracking-widest text-[#0E1117]/50 mb-1">From</label>
                  <div className="flex items-center border-b border-[#0E1117]/20 py-2 transition-colors focus-within:border-[#C5A880]">
                    <MapPin className="w-4 h-4 text-[#C5A880] mr-3" />
                    <input 
                      type="text" 
                      placeholder="Airport or Hotel"
                      className="w-full bg-transparent border-none outline-none text-sm font-medium placeholder-[#0E1117]/30"
                      value={bookingDetails.pickup}
                      onChange={e => setBookingDetails({...bookingDetails, pickup: e.target.value})}
                    />
                  </div>
                </div>

                <div className="group relative">
                  <label className="block text-xs font-semibold uppercase tracking-widest text-[#0E1117]/50 mb-1">To</label>
                  <div className="flex items-center border-b border-[#0E1117]/20 py-2 transition-colors focus-within:border-[#C5A880]">
                    <MapPin className="w-4 h-4 text-[#C5A880] mr-3" />
                    <input 
                      type="text" 
                      placeholder="Destination in Val Gardena"
                      className="w-full bg-transparent border-none outline-none text-sm font-medium placeholder-[#0E1117]/30"
                      value={bookingDetails.dropoff}
                      onChange={e => setBookingDetails({...bookingDetails, dropoff: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="group relative">
                    <label className="block text-xs font-semibold uppercase tracking-widest text-[#0E1117]/50 mb-1">Date</label>
                    <div className="flex items-center border-b border-[#0E1117]/20 py-2 transition-colors focus-within:border-[#C5A880]">
                      <Calendar className="w-4 h-4 text-[#C5A880] mr-3" />
                      <input 
                        type="date" 
                        className="w-full bg-transparent border-none outline-none text-sm font-medium text-[#0E1117]"
                        value={bookingDetails.date}
                        onChange={e => setBookingDetails({...bookingDetails, date: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="group relative">
                    <label className="block text-xs font-semibold uppercase tracking-widest text-[#0E1117]/50 mb-1">Passengers</label>
                    <div className="flex items-center border-b border-[#0E1117]/20 py-2 transition-colors focus-within:border-[#C5A880]">
                      <Users className="w-4 h-4 text-[#C5A880] mr-3" />
                      <select 
                        className="w-full bg-transparent border-none outline-none text-sm font-medium text-[#0E1117]"
                        value={bookingDetails.passengers}
                        onChange={e => setBookingDetails({...bookingDetails, passengers: e.target.value})}
                      >
                        {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n}</option>)}
                      </select>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => openBookingModal()}
                  className="w-full mt-6 bg-[#0E1117] hover:bg-[#161A23] text-[#F8F6F0] transition-colors py-4 px-6 flex items-center justify-between group"
                >
                  <span className="text-xs font-semibold uppercase tracking-widest">Request Quote</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HERITAGE SECTION */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 bg-[#F8F6F0]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 overflow-hidden bg-[#0E1117]">
              <img 
                src="https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?auto=format&fit=crop&w=800&q=80" 
                alt="Chauffeur Service"
                className="w-full h-full object-cover opacity-90 grayscale contrast-125"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 lg:bottom-12 lg:-right-12 bg-[#0E1117] p-8 text-[#F8F6F0] max-w-xs outline outline-1 outline-offset-8 outline-[#0E1117] shadow-2xl">
              <div className="font-editorial text-5xl mb-2 text-[#C5A880]">35</div>
              <div className="text-xs uppercase tracking-widest font-semibold">Years of Excellence</div>
              <p className="text-sm mt-4 text-[#F8F6F0]/70 font-light">Founded by 18 native drivers, navigating the alpine passes with unmatched local expertise.</p>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8 lg:pl-12">
            <h2 className="font-editorial text-4xl lg:text-5xl text-[#0E1117] leading-tight">
              A Consortium Built on <br />
              <span className="italic text-[#C5A880]">Trust</span> & Tradition
            </h2>
            <div className="w-12 h-[1px] bg-[#C5A880]" />
            <p className="text-lg text-[#0E1117]/70 font-light leading-relaxed">
              We are not just drivers; we are your hosts in the Dolomites. Since 1989, Taxi Auto Sella has set the standard for luxury transportation in Val Gardena. Our fleet of immaculate Mercedes-Benz vehicles is piloted by seasoned professionals who know every curve of these mountains.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-[#0E1117]/10">
              <div>
                <Shield className="w-6 h-6 text-[#C5A880] mb-4" />
                <h4 className="font-semibold text-sm uppercase tracking-widest mb-2 text-[#0E1117]">Impeccable Safety</h4>
                <p className="text-sm text-[#0E1117]/60">4MATIC all-wheel drive and rigorous winter maintenance.</p>
              </div>
              <div>
                <Clock className="w-6 h-6 text-[#C5A880] mb-4" />
                <h4 className="font-semibold text-sm uppercase tracking-widest mb-2 text-[#0E1117]">Punctuality</h4>
                <p className="text-sm text-[#0E1117]/60">Live flight tracking and complimentary wait times.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLEET SHOWCASE */}
      <section className="py-24 lg:py-32 bg-[#0E1117] text-[#F8F6F0] px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 lg:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="font-editorial text-4xl lg:text-5xl mb-6">
                The <span className="italic text-[#C5A880]">Collection</span>
              </h2>
              <p className="text-lg text-[#F8F6F0]/60 font-light">
                Our meticulously maintained fleet represents the pinnacle of automotive engineering, tailored for alpine comfort.
              </p>
            </div>
            <button onClick={() => openBookingModal()} className="shrink-0 text-xs font-semibold uppercase tracking-widest text-[#C5A880] hover:text-white transition-colors flex items-center gap-2">
              View All Vehicles <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                name: 'Mercedes E-Class 4MATIC',
                category: 'Executive Sedan',
                pax: 3,
                bags: 3,
                image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80'
              },
              {
                name: 'Mercedes V-Class VIP',
                category: 'Luxury Van',
                pax: 7,
                bags: 7,
                image: 'https://images.unsplash.com/photo-1618846648753-1596a77dce7e?auto=format&fit=crop&w=600&q=80'
              },
              {
                name: 'Executive Coach',
                category: 'Group Travel',
                pax: 20,
                bags: 20,
                image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=600&q=80'
              }
            ].map((vehicle, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#161A23] mb-6 relative">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal"
                  />
                  <div className="absolute inset-0 border border-[#C5A880]/0 group-hover:border-[#C5A880]/30 transition-colors m-4" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] mb-2">{vehicle.category}</div>
                <h3 className="font-editorial text-2xl mb-4 text-[#F8F6F0]">{vehicle.name}</h3>
                <div className="flex items-center gap-6 text-sm text-[#F8F6F0]/50 font-light border-t border-[#F8F6F0]/10 pt-4">
                  <span className="flex items-center gap-2"><Users className="w-4 h-4" /> {vehicle.pax} Passengers</span>
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border border-current rounded-sm flex items-center justify-center text-[10px]">B</span> 
                    {vehicle.bags} Luggage
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROUTES & PRICING */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 bg-[#F8F6F0]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-editorial text-4xl lg:text-5xl text-[#0E1117] mb-6">
              Curated <span className="italic text-[#C5A880]">Journeys</span>
            </h2>
            <div className="w-12 h-[1px] bg-[#C5A880] mx-auto" />
          </div>

          <div className="space-y-0 border-t border-[#0E1117]/10">
            {[
              { route: 'Innsbruck Airport (INN) to Val Gardena', distance: '120 km', time: '1h 45m', price: 'from €380' },
              { route: 'Munich Airport (MUC) to Val Gardena', distance: '300 km', time: '3h 30m', price: 'from €650' },
              { route: 'Verona Airport (VRN) to Val Gardena', distance: '190 km', time: '2h 15m', price: 'from €420' },
              { route: 'Venice Marco Polo (VCE) to Val Gardena', distance: '310 km', time: '3h 45m', price: 'from €680' },
              { route: 'Milan Malpensa (MXP) to Val Gardena', distance: '360 km', time: '4h 15m', price: 'from €850' },
            ].map((route, idx) => (
              <div key={idx} className="group flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-[#0E1117]/10 hover:border-[#C5A880] transition-colors cursor-pointer" onClick={() => openBookingModal()}>
                <div className="mb-4 sm:mb-0 pr-4">
                  <h4 className="text-lg font-medium text-[#0E1117] group-hover:text-[#C5A880] transition-colors mb-1">{route.route}</h4>
                  <div className="text-sm text-[#0E1117]/50 font-light flex gap-4">
                    <span>{route.distance}</span>
                    <span>{route.time}</span>
                  </div>
                </div>
                <div className="flex items-center gap-6 shrink-0">
                  <span className="font-editorial text-xl text-[#0E1117]">{route.price}</span>
                  <div className="w-10 h-10 rounded-full border border-[#0E1117]/20 flex items-center justify-center group-hover:bg-[#C5A880] group-hover:border-[#C5A880] group-hover:text-white transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-sm text-[#0E1117]/50 font-light">
            <p>All transfers include complimentary meet & greet, wait time for flight delays, and bottled water.</p>
          </div>
        </div>
      </section>

      {/* FOOTER CONCIERGE */}
      <footer className="bg-[#0E1117] text-[#F8F6F0] pt-24 pb-12 px-6 lg:px-16 border-t border-[#F8F6F0]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h3 className="font-editorial text-3xl mb-6 text-[#F8F6F0]">Taxi Auto Sella</h3>
            <p className="text-[#F8F6F0]/60 font-light max-w-sm mb-8 leading-relaxed">
              The premier chauffeur consortium of Val Gardena, delivering uncompromising alpine luxury since 1989.
            </p>
            <div className="flex gap-4">
              <a href="https://wa.me/390471790033" className="flex items-center gap-2 text-sm text-[#C5A880] hover:text-white transition-colors">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <a href="tel:+390471790033" className="flex items-center gap-2 text-sm text-[#C5A880] hover:text-white transition-colors">
                <Phone className="w-4 h-4" /> Direct Line
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#F8F6F0]/40 mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-[#F8F6F0]/80 font-light">
              <li><button onClick={() => openBookingModal()} className="hover:text-[#C5A880] transition-colors">Airport Transfers</button></li>
              <li><button onClick={() => openBookingModal()} className="hover:text-[#C5A880] transition-colors">Corporate Travel</button></li>
              <li><button onClick={() => openBookingModal()} className="hover:text-[#C5A880] transition-colors">Ski Safaris</button></li>
              <li><button onClick={() => openBookingModal()} className="hover:text-[#C5A880] transition-colors">Dolomites Excursions</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#F8F6F0]/40 mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-[#F8F6F0]/80 font-light">
              <li>Via Meisules 285</li>
              <li>39048 Selva di Val Gardena (BZ)</li>
              <li>Italy</li>
              <li className="pt-4"><a href="mailto:info@taxiautosella.it" className="hover:text-[#C5A880] transition-colors">info@taxiautosella.it</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-[#F8F6F0]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#F8F6F0]/40 font-light">
          <p>© {new Date().getFullYear()} Taxi Auto Sella Consortium. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#F8F6F0] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#F8F6F0] transition-colors">Terms of Service</a>
            <div className="flex gap-2 items-center border-l border-[#F8F6F0]/20 pl-6">
              <span className="hover:text-[#F8F6F0] transition-colors cursor-pointer uppercase">En</span>
              <span className="hover:text-[#F8F6F0] transition-colors cursor-pointer uppercase">It</span>
              <span className="hover:text-[#F8F6F0] transition-colors cursor-pointer uppercase">De</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
