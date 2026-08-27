import React, { useState, useEffect } from "react";
import { useAppStore } from "../../store/useAppStore";
import {
  Plane,
  MapPin,
  Calendar,
  Clock,
  Users,
  Briefcase,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageCircle,
  CreditCard,
  PlaneLanding,
  Car,
  Wifi,
  Snowflake,
  Sun,
  AlertCircle,
  ArrowRight,
  Star,
  ChevronDown,
  ChevronUp,
  Mountain
} from "lucide-react";

// --- TYPES ---
type Season = "winter" | "summer";

// --- MOCK DATA ---
const AIRPORTS = [
  { id: "innsbruck", name: "Innsbruck (INN)", distance: "120 km", duration: "1h 30m", price: "€240" },
  { id: "verona", name: "Verona (VRN)", distance: "190 km", duration: "2h 05m", price: "€340" },
  { id: "venice", name: "Venice Marco Polo (VCE)", distance: "270 km", duration: "3h 15m", price: "€440" },
  { id: "munich", name: "Munich (MUC)", distance: "310 km", duration: "3h 30m", price: "€480" },
  { id: "milan-mxp", name: "Milan Malpensa (MXP)", distance: "350 km", duration: "3h 55m", price: "€540" },
  { id: "bolzano", name: "Bolzano (BZO)", distance: "42 km", duration: "0h 45m", price: "€110" },
];

const VEHICLES = [
  {
    id: "sedan",
    name: "Premium Sedan",
    model: "Mercedes-Benz E-Class 4MATIC",
    pax: 3,
    bags: 3,
    gear_winter: "2 Pairs of Skis",
    gear_summer: "Standard Luggage",
    image: "/images/fleet/mercedes-e-class.jpg",
    description: "Ideal for couples and business executives. Silent acoustic comfort glass.",
  },
  {
    id: "van",
    name: "VIP Chauffeur Minivan",
    model: "Mercedes-Benz V-Class Luxury",
    pax: 7,
    bags: 7,
    gear_winter: "6 Pairs of Skis/Boards",
    gear_summer: "2 E-Bikes (on request)",
    image: "/images/fleet/mercedes-v-class-luxury.jpg",
    description: "The gold standard for families and executive groups with oversized luggage.",
    popular: true,
  },
  {
    id: "minibus",
    name: "Alpine Minibus",
    model: "Mercedes-Benz Vito 4MATIC",
    pax: 8,
    bags: 8,
    gear_winter: "8 Skis + Roof Box",
    gear_summer: "4 Mountain Bikes",
    image: "/images/fleet/mercedes-vito-minibus-4matic.jpg",
    description: "Equipped with aerodynamic roof boxes and heavy-duty winter 4x4 drivetrain.",
  },
  {
    id: "coach",
    name: "Executive VIP Coach",
    model: "Mercedes-Benz Sprinter",
    pax: 16,
    bags: 16,
    gear_winter: "16+ Skis/Boards",
    gear_summer: "Group Hiking Gear",
    image: "/images/fleet/mercedes-sprinter-vip-coach.jpg",
    description: "First-class group touring with panoramic alpine windows and PA system.",
  },
];

const TESTIMONIALS = [
  { name: "Michael T.", from: "London, UK", rating: 5, text: "Flawless transfer from Innsbruck. Our flight was delayed by 2 hours, but the driver was tracking it and waiting for us with a smile." },
  { name: "Sarah J.", from: "Munich, DE", rating: 5, text: "Immaculate Mercedes van. Easily fit all 5 of us plus our snowboards. Highly recommend for Val Gardena trips." },
  { name: "David L.", from: "New York, USA", rating: 5, text: "The summer bike shuttle saved us so much hassle. Punctual, professional, and the 4MATIC handled the mountain passes beautifully." },
];

const FAQS = [
  { q: "What happens if my flight is delayed?", a: "We monitor your flight in real-time. Your driver will automatically adjust the pickup time—you get 60 minutes of free waiting time after landing at no extra cost." },
  { q: "Are infant or child seats provided?", a: "Yes, we provide certified child seats free of charge. Please specify your requirements during the booking process." },
  { q: "How do I find my driver at the airport?", a: "Your driver will be waiting in the arrival hall holding an iPad or sign with your name on it." },
  { q: "Can I bring oversized luggage or bikes?", a: "Yes, just let us know in advance. Our V-Class and Vito vehicles are equipped for oversized gear like skis in winter and bikes in summer." }
];

export const ConceptTech: React.FC = () => {
  const { openBookingModal, updateBooking } = useAppStore();
  const [season, setSeason] = useState<Season>("winter");
  const [tab, setTab] = useState<"resort" | "airport">("resort");
  const [selectedAirport, setSelectedAirport] = useState(AIRPORTS[0].id);
  const [selectedVehicle, setSelectedVehicle] = useState(VEHICLES[1].id);
  
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [passengers, setPassengers] = useState("2");
  const [flightNo, setFlightNo] = useState("");
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const activeAirportData = AIRPORTS.find((a) => a.id === selectedAirport) || AIRPORTS[0];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (date) updateBooking({ date });
    if (flightNo) updateBooking({ flightNumber: flightNo });
    openBookingModal();
  };

  return (
    <div className="bg-[#F8FAFC] text-[#090D14] min-h-screen font-sans selection:bg-[#059669] selection:text-white pb-20">
      
      {/* HEADER UTILITY BAR */}
      <div className="bg-[#090D14] text-white py-2 px-4 text-xs font-medium flex justify-between items-center sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Fully Licensed & Insured</span>
          <span className="hidden md:flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Free Cancellation up to 24h</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://wa.me/390471790033" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
            <MessageCircle className="w-3.5 h-3.5" /> WhatsApp 24/7
          </a>
          <a href="tel:+390471790033" className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
            <Phone className="w-3.5 h-3.5" /> +39 0471 790033
          </a>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="bg-[#FFFFFF] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-800 text-sm font-semibold shadow-sm">
                <div className="flex text-[#D97706]">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span>4.95/5 from 1,200+ Dolomites travelers</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#090D14] leading-[1.1]">
                Your Private Airport Transfer to <span className="text-[#059669]">Val Gardena.</span>
              </h1>

              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                Start your holiday the right way. Enjoy fixed meter-free pricing, 100% private Mercedes 4MATIC vehicles, and complimentary flight delay tracking.
              </p>

              {/* Seasonality Toggle */}
              <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200">
                <button
                  onClick={() => setSeason("winter")}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                    season === "winter" ? "bg-white text-slate-900 shadow-sm ring-1 ring-slate-200/50" : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  <Snowflake className={`w-4 h-4 ${season === "winter" ? "text-blue-500" : ""}`} />
                  Winter Ski Season
                </button>
                <button
                  onClick={() => setSeason("summer")}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                    season === "summer" ? "bg-white text-slate-900 shadow-sm ring-1 ring-slate-200/50" : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  <Sun className={`w-4 h-4 ${season === "summer" ? "text-amber-500" : ""}`} />
                  Summer Alpine Season
                </button>
              </div>

              {/* Dynamic Feature Highlights based on Season */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 p-1 bg-emerald-50 rounded text-[#059669]">
                    <PlaneLanding className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-slate-900">Meet & Greet included</span>
                    <span className="text-xs text-slate-500">60 mins free waiting time</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 p-1 bg-emerald-50 rounded text-[#059669]">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-slate-900">
                      {season === "winter" ? "Free Ski Luggage" : "Free Bike/Hike Gear Space"}
                    </span>
                    <span className="text-xs text-slate-500">
                      {season === "winter" ? "Spacious roof boxes available" : "Bike racks & van space available"}
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 p-1 bg-emerald-50 rounded text-[#059669]">
                    <Car className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-slate-900">Mercedes 4MATIC Fleet</span>
                    <span className="text-xs text-slate-500">
                      {season === "winter" ? "Safe on snowy mountain passes" : "Comfortable on winding alpine roads"}
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 p-1 bg-emerald-50 rounded text-[#059669]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-slate-900">Door-to-door Service</span>
                    <span className="text-xs text-slate-500">
                      {season === "winter" ? "Direct to your ski hotel" : "Direct to your resort or trailhead"}
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Content: Booking Widget (Welcome Pickups Style) */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-3xl transform rotate-2 scale-[1.02] -z-10"></div>
              <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 p-6 sm:p-8">
                
                <h2 className="text-xl font-bold text-slate-900 mb-6">Book your transfer</h2>

                {/* Direction Toggle */}
                <div className="flex bg-slate-100 p-1 rounded-xl mb-6">
                  <button
                    type="button"
                    onClick={() => setTab("resort")}
                    className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${
                      tab === "resort" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    To Val Gardena
                  </button>
                  <button
                    type="button"
                    onClick={() => setTab("airport")}
                    className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${
                      tab === "airport" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    From Val Gardena
                  </button>
                </div>

                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  
                  {/* Locations */}
                  <div className="space-y-3 relative">
                    <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-slate-200"></div>
                    
                    <div className="relative flex items-center">
                      <div className="w-10 flex justify-center z-10">
                        <div className="w-3 h-3 rounded-full bg-emerald-500 outline outline-4 outline-white"></div>
                      </div>
                      <div className="flex-1">
                        <select
                          value={tab === "resort" ? selectedAirport : "val-gardena"}
                          onChange={(e) => tab === "resort" && setSelectedAirport(e.target.value)}
                          disabled={tab !== "resort"}
                          className="w-full pl-4 pr-10 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 focus:bg-white focus:ring-2 focus:ring-[#059669] focus:border-transparent outline-none appearance-none"
                        >
                          {tab === "resort" ? (
                            AIRPORTS.map((a) => (
                              <option key={a.id} value={a.id}>{a.name}</option>
                            ))
                          ) : (
                            <option value="val-gardena">Val Gardena / Dolomites</option>
                          )}
                        </select>
                      </div>
                    </div>

                    <div className="relative flex items-center">
                      <div className="w-10 flex justify-center z-10">
                        <div className="w-3 h-3 rounded-sm bg-slate-900 outline outline-4 outline-white"></div>
                      </div>
                      <div className="flex-1">
                        <select
                          value={tab === "airport" ? selectedAirport : "val-gardena"}
                          onChange={(e) => tab === "airport" && setSelectedAirport(e.target.value)}
                          disabled={tab !== "airport"}
                          className="w-full pl-4 pr-10 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 focus:bg-white focus:ring-2 focus:ring-[#059669] focus:border-transparent outline-none appearance-none"
                        >
                          {tab === "airport" ? (
                            AIRPORTS.map((a) => (
                              <option key={a.id} value={a.id}>{a.name}</option>
                            ))
                          ) : (
                            <option value="val-gardena">Val Gardena / Dolomites</option>
                          )}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Date & Pax */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                        className="w-full pl-10 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 focus:bg-white focus:ring-2 focus:ring-[#059669] outline-none"
                      />
                    </div>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <select
                        value={passengers}
                        onChange={(e) => setPassengers(e.target.value)}
                        className="w-full pl-10 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 focus:bg-white focus:ring-2 focus:ring-[#059669] outline-none appearance-none"
                      >
                        {[1,2,3,4,5,6,7,8,16].map(n => (
                          <option key={n} value={n}>{n} Passenger{n > 1 ? 's' : ''}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Flight Number */}
                  <div className="relative pt-1">
                    <PlaneLanding className="absolute left-3 top-[1.4rem] w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder={tab === "resort" ? "Arrival Flight No. (e.g. BA 532)" : "Departure Flight No."}
                      value={flightNo}
                      onChange={(e) => setFlightNo(e.target.value)}
                      className="w-full pl-10 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 focus:bg-white focus:ring-2 focus:ring-[#059669] outline-none"
                    />
                  </div>

                  {/* Price Banner */}
                  <div className="mt-6 p-4 bg-[#F8FAFC] border border-slate-200 rounded-xl flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">Fixed Price</div>
                      <div className="text-2xl font-extrabold text-[#090D14]">{activeAirportData.price}</div>
                    </div>
                    <div className="text-right text-sm font-medium text-slate-600">
                      <div>{activeAirportData.distance}</div>
                      <div className="text-[#059669]">{activeAirportData.duration}</div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 mt-4 rounded-xl bg-[#059669] hover:bg-emerald-700 text-white font-bold text-base shadow-[0_4px_14px_0_rgba(5,150,105,0.39)] transition-all flex items-center justify-center gap-2"
                  >
                    Show Available Vehicles
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-center text-xs text-slate-500 font-medium">Same price as a regular taxi, but 100% private.</p>

                </form>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3-STEP JOURNEY */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900">How it works</h2>
          <p className="text-base text-slate-600 mt-4">The easiest way to reach your destination in the Dolomites.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200 -z-10"></div>
          
          <div className="text-center">
            <div className="w-24 h-24 mx-auto bg-white border border-slate-200 rounded-full shadow-sm flex items-center justify-center mb-6">
              <Calendar className="w-10 h-10 text-[#059669]" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">1. Book in 60 seconds</h3>
            <p className="text-sm text-slate-600">Choose your route, vehicle, and date. You'll get an instant confirmation via email.</p>
          </div>

          <div className="text-center">
            <div className="w-24 h-24 mx-auto bg-white border border-slate-200 rounded-full shadow-sm flex items-center justify-center mb-6">
              <PlaneLanding className="w-10 h-10 text-[#059669]" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">2. We track your flight</h3>
            <p className="text-sm text-slate-600">If your flight is delayed, your driver adjusts the pickup time automatically. 60 mins wait time included.</p>
          </div>

          <div className="text-center">
            <div className="w-24 h-24 mx-auto bg-white border border-slate-200 rounded-full shadow-sm flex items-center justify-center mb-6">
              <MapPin className="w-10 h-10 text-[#059669]" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">3. Meet & Greet</h3>
            <p className="text-sm text-slate-600">Your driver waits in the arrivals hall with a name sign. They'll help with luggage and take you directly to your hotel.</p>
          </div>
        </div>
      </section>

      {/* FLEET SELECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900">Choose your vehicle</h2>
          <p className="text-base text-slate-600 mt-2">All our vehicles are modern Mercedes-Benz models equipped with 4MATIC for alpine safety.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VEHICLES.map((v) => (
            <div
              key={v.id}
              onClick={() => setSelectedVehicle(v.id)}
              className={`bg-white rounded-2xl border transition-all cursor-pointer overflow-hidden flex flex-col ${
                selectedVehicle === v.id
                  ? "border-[#059669] shadow-[0_0_0_2px_rgba(5,150,105,0.2)]"
                  : "border-slate-200 hover:border-slate-300 hover:shadow-md"
              }`}
            >
              <div className="relative h-48 bg-slate-100 overflow-hidden">
                {v.popular && (
                  <div className="absolute top-3 left-3 z-10 bg-[#D97706] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                    Most Popular
                  </div>
                )}
                <img
                  src={v.image}
                  alt={v.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-lg text-slate-900">{v.name}</h3>
                </div>
                <p className="text-xs text-slate-500 font-semibold mb-4">{v.model}</p>
                
                <div className="flex gap-4 mb-4 text-sm font-medium text-slate-700">
                  <span className="flex items-center gap-1.5" title="Passengers"><Users className="w-4 h-4 text-slate-400" /> {v.pax}</span>
                  <span className="flex items-center gap-1.5" title="Luggage"><Briefcase className="w-4 h-4 text-slate-400" /> {v.bags}</span>
                </div>

                <div className="mb-4 text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100 flex items-start gap-2">
                  {season === "winter" ? <Snowflake className="w-4 h-4 text-blue-500 flex-shrink-0" /> : <Mountain className="w-4 h-4 text-amber-500 flex-shrink-0" />}
                  <span className="font-medium">{season === "winter" ? v.gear_winter : v.gear_summer}</span>
                </div>
                
                <p className="text-sm text-slate-600 mb-6 flex-grow">{v.description}</p>
                
                <button
                  onClick={(e) => { e.stopPropagation(); openBookingModal(); }}
                  className={`w-full py-3 rounded-xl font-bold text-sm transition-colors ${
                    selectedVehicle === v.id
                      ? "bg-[#090D14] text-white hover:bg-slate-800"
                      : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                  }`}
                >
                  Select Vehicle
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold mb-4">Loved by Travelers</h2>
            <div className="flex items-center justify-center gap-2 text-xl font-bold text-amber-400">
              <Star className="w-6 h-6 fill-current" />
              <Star className="w-6 h-6 fill-current" />
              <Star className="w-6 h-6 fill-current" />
              <Star className="w-6 h-6 fill-current" />
              <Star className="w-6 h-6 fill-current" />
            </div>
            <p className="mt-2 text-slate-400 font-medium">4.95/5 average rating across 1,200+ reviews</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                <div className="flex text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-300 italic mb-6 leading-relaxed">"{t.text}"</p>
                <div className="font-bold text-white">{t.name}</div>
                <div className="text-xs text-slate-500 font-medium">{t.from}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <button
                onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
              >
                <span className="font-bold text-slate-900">{faq.q}</span>
                {faqOpen === idx ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>
              {faqOpen === idx && (
                <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-sm">
          <div>
            <h4 className="font-bold text-slate-900 mb-4 text-lg">Auto Sella</h4>
            <p className="text-slate-500 mb-6 leading-relaxed">
              Premium airport transfers to Val Gardena and the Dolomites. Reliable, comfortable, and always on time.
            </p>
            <div className="flex gap-4">
              <CreditCard className="w-6 h-6 text-slate-400" />
              <ShieldCheck className="w-6 h-6 text-slate-400" />
            </div>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Contact</h4>
            <ul className="space-y-3 text-slate-500 font-medium">
              <li className="flex items-center gap-2 hover:text-[#059669] cursor-pointer"><Phone className="w-4 h-4" /> +39 0471 790033</li>
              <li className="flex items-center gap-2 hover:text-[#059669] cursor-pointer"><MessageCircle className="w-4 h-4" /> WhatsApp Us</li>
              <li>info@taxiautosella.it</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Top Routes</h4>
            <ul className="space-y-3 text-slate-500 font-medium">
              <li>Innsbruck to Val Gardena</li>
              <li>Verona to Val Gardena</li>
              <li>Venice to Val Gardena</li>
              <li>Munich to Val Gardena</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-3 text-slate-500 font-medium">
              <li>About Us</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Fleet Information</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-100 text-xs text-slate-400 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Taxi Auto Sella Consortium. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Str. Gherdeina 7/A, I-39047 Santa Cristina (BZ), Val Gardena, Italy</p>
        </div>
      </footer>
    </div>
  );
};
