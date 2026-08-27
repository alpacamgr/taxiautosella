import React, { useState } from "react";
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
  AlertCircle,
  ArrowRight
} from "lucide-react";

// --- MOCK DATA WITH LOCAL AUTO SELLA IMAGES ---
const AIRPORTS = [
  {
    id: "innsbruck",
    name: "Innsbruck Airport (INN)",
    distance: "120 km",
    duration: "1h 30m",
    price: "€240",
  },
  {
    id: "verona",
    name: "Verona Airport (VRN)",
    distance: "190 km",
    duration: "2h 05m",
    price: "€340",
  },
  {
    id: "munich",
    name: "Munich Airport (MUC)",
    distance: "310 km",
    duration: "3h 30m",
    price: "€480",
  },
  {
    id: "venice",
    name: "Venice Marco Polo (VCE)",
    distance: "270 km",
    duration: "3h 15m",
    price: "€440",
  },
  {
    id: "milan-mxp",
    name: "Milan Malpensa (MXP)",
    distance: "350 km",
    duration: "3h 55m",
    price: "€540",
  },
  {
    id: "bolzano",
    name: "Bolzano Airport (BZO)",
    distance: "42 km",
    duration: "0h 45m",
    price: "€110",
  },
];

const VEHICLES = [
  {
    id: "sedan",
    name: "Premium Sedan",
    model: "Mercedes-Benz E-Class 4MATIC",
    pax: 3,
    bags: 3,
    skis: 2,
    image: "/images/fleet/mercedes-e-class.jpg",
    description: "Ideal for couples and business executives. Silent acoustic comfort glass.",
  },
  {
    id: "van",
    name: "VIP Chauffeur Minivan",
    model: "Mercedes-Benz V-Class Luxury",
    pax: 7,
    bags: 7,
    skis: 6,
    image: "/images/fleet/mercedes-v-class-luxury.jpg",
    description: "The gold standard for families and executive groups with oversized ski luggage.",
  },
  {
    id: "minibus",
    name: "Alpine Ski Minibus",
    model: "Mercedes-Benz Vito 4MATIC",
    pax: 8,
    bags: 8,
    skis: 8,
    image: "/images/fleet/mercedes-vito-minibus-4matic.jpg",
    description: "Equipped with aerodynamic roof ski boxes and heavy-duty winter 4x4 drivetrain.",
  },
  {
    id: "coach",
    name: "Executive VIP Coach",
    model: "Mercedes-Benz Sprinter (16–30 Pax)",
    pax: 16,
    bags: 16,
    skis: 16,
    image: "/images/fleet/mercedes-sprinter-vip-coach.jpg",
    description: "First-class group touring with panoramic alpine windows and PA system.",
  },
];

export const ConceptTech: React.FC = () => {
  const { openBookingModal, updateBooking, t } = useAppStore();
  const [tab, setTab] = useState<"resort" | "airport">("resort");
  const [selectedAirport, setSelectedAirport] = useState(AIRPORTS[0].id);
  const [selectedVehicle, setSelectedVehicle] = useState(VEHICLES[1].id);
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState("2");
  const [flightNo, setFlightNo] = useState("");

  const activeAirportData = AIRPORTS.find((a) => a.id === selectedAirport) || AIRPORTS[0];
  const activeVehicleData = VEHICLES.find((v) => v.id === selectedVehicle) || VEHICLES[1];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (date) updateBooking({ date });
    if (flightNo) updateBooking({ flightNumber: flightNo });
    openBookingModal();
  };

  return (
    <div className="bg-[#FFFFFF] text-[#090D14] min-h-screen font-sans selection:bg-[#059669] selection:text-white">
      
      {/* HERO SECTION — HIGH-CONVERSION ENGINE */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Value Proposition & Social Proof */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
              <span className="flex text-amber-500">★★★★★</span>
              <span>4.95/5 Rating (1,200+ Dolomites Guests)</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
              Smart Airport Transfers to Val Gardena.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Fixed upfront prices, automated flight delay tracking, and 25 Mercedes 4MATIC vehicles. Book your mountain transfer in 60 seconds.
            </p>

            {/* Inclusions Checkmarks */}
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Free Flight Delay Tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Name-Sign Meet & Greet</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>All Highway Tolls Included</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>100% 4MATIC Winter Fleet</span>
              </div>
            </div>
          </div>

          {/* Right Column: Real-Time Booking Widget */}
          <div className="lg:col-span-6">
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xl">
              
              {/* Tab Selector */}
              <div className="flex bg-slate-200/80 p-1 rounded-xl mb-6 text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setTab("resort")}
                  className={`flex-1 py-2.5 rounded-lg transition-all ${
                    tab === "resort"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Airport ➔ Val Gardena
                </button>
                <button
                  type="button"
                  onClick={() => setTab("airport")}
                  className={`flex-1 py-2.5 rounded-lg transition-all ${
                    tab === "airport"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Val Gardena ➔ Airport
                </button>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-4">
                {/* Gateway Selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    Select Gateway Airport
                  </label>
                  <select
                    value={selectedAirport}
                    onChange={(e) => setSelectedAirport(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm font-semibold text-slate-800 focus:ring-2 focus:ring-emerald-500"
                  >
                    {AIRPORTS.map((a) => (
                      <option key={a.id} value={a.id}>
                        {a.name} — {a.distance} ({a.duration}) • {a.price}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date & Time Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Date
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Flight / Train #
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. OS 903 (Delay Tracked)"
                      value={flightNo}
                      onChange={(e) => setFlightNo(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                {/* Instant Metric Summary Banner */}
                <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] text-emerald-800 font-bold block uppercase">
                      Fixed All-Inclusive Rate
                    </span>
                    <span className="text-xl font-extrabold text-emerald-700">
                      {activeAirportData.price}
                    </span>
                  </div>
                  <div className="text-right text-slate-600 font-medium">
                    <div>{activeAirportData.distance}</div>
                    <div className="text-emerald-700 font-bold">{activeAirportData.duration}</div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <span>Continue to Instant Confirmation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

            </div>
          </div>

        </div>
      </section>

      {/* 3-STEP PROCESS SECTION */}
      <section className="py-16 bg-slate-50 border-y border-slate-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">How Auto Sella Works</h2>
            <p className="text-sm text-slate-600 mt-2">
              The frictionless, reliable way to reach your hotel in the Dolomites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 font-extrabold text-xl flex items-center justify-center mb-6">
                1
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Instant Fixed Price</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Choose your airport and vehicle. Get an upfront guaranteed rate with no taxi meter surprises or mountain pass surcharges.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 font-extrabold text-xl flex items-center justify-center mb-6">
                2
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Flight Delay Tracking</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Provide your flight number. If your arrival is delayed, your driver automatically adjusts pickup time at zero extra cost.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 font-extrabold text-xl flex items-center justify-center mb-6">
                3
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Doorstep Chalet Arrival</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Chauffeur greets you with a name sign at baggage claim, loads all ski equipment, and takes you directly to your hotel door.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE FLEET MATRIX */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900">Mercedes-Benz Fleet Matrix</h2>
            <p className="text-sm text-slate-600 mt-1">
              Select the optimal vehicle for your party size and ski luggage requirements.
            </p>
          </div>
          <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 self-start md:self-auto">
            100% 4MATIC All-Wheel Drive
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VEHICLES.map((v) => (
            <div
              key={v.id}
              onClick={() => setSelectedVehicle(v.id)}
              className={`p-6 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between ${
                selectedVehicle === v.id
                  ? "bg-white border-emerald-500 shadow-xl ring-2 ring-emerald-500/20"
                  : "bg-slate-50 border-slate-200 hover:bg-white hover:shadow-md"
              }`}
            >
              <div>
                <div className="h-44 rounded-2xl overflow-hidden mb-4 bg-slate-900">
                  <img
                    src={v.image}
                    alt={v.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-bold text-base text-slate-900">{v.name}</h3>
                <p className="text-xs text-emerald-700 font-semibold mb-2">{v.model}</p>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">{v.description}</p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 font-bold">
                    <Users className="w-3.5 h-3.5 text-slate-400" /> {v.pax}
                  </span>
                  <span className="flex items-center gap-1 font-bold">
                    <Briefcase className="w-3.5 h-3.5 text-slate-400" /> {v.bags}
                  </span>
                  <span className="font-bold text-emerald-700">
                    ⛷️ {v.skis}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    openBookingModal();
                  }}
                  className="p-2 rounded-xl bg-slate-900 text-white hover:bg-emerald-600 transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TECH FOOTER */}
      <footer className="bg-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8 text-xs border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2 font-bold text-base text-white">
              <span>Taxi Auto Sella Consortium</span>
            </div>
            <p className="text-slate-400 max-w-sm">
              Str. Gherdeina 7/A, I-39047 Santa Cristina (BZ), Val Gardena, Dolomites, Italy.
            </p>
            <p className="text-slate-400 mt-1">VAT No.: IT01707460216 • Dispatch Hotline: (+39) 0471 790033</p>
          </div>

          <div className="flex flex-col md:items-end gap-2 text-slate-400">
            <div className="flex gap-4">
              <a href="tel:+390471790033" className="hover:text-emerald-400">Direct Phone Hotline</a>
              <a href="mailto:info@taxiautosella.it" className="hover:text-emerald-400">Email Dispatch</a>
            </div>
            <p className="text-[11px] text-slate-500 mt-2">
              © {new Date().getFullYear()} Taxi Auto Sella Consortium. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
};
