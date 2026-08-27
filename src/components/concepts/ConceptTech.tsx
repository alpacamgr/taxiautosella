import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppStore } from "../../store/useAppStore";
import {
  Plane,
  MapPin,
  Calendar,
  Clock,
  Users,
  Briefcase,
  ChevronRight,
  Star,
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
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- MOCK DATA FOR SELF-CONTAINED UI ---
const AIRPORTS = [
  {
    id: "innsbruck",
    name: "Innsbruck (INN)",
    distance: "120 km",
    duration: "1h 30m",
    price: "€ 280",
  },
  {
    id: "munich",
    name: "Munich (MUC)",
    distance: "300 km",
    duration: "3h 30m",
    price: "€ 550",
  },
  {
    id: "verona",
    name: "Verona (VRN)",
    distance: "190 km",
    duration: "2h 15m",
    price: "€ 350",
  },
  {
    id: "venice",
    name: "Venice (VCE)",
    distance: "210 km",
    duration: "3h 00m",
    price: "€ 420",
  },
  {
    id: "milan-mxp",
    name: "Milan Malpensa (MXP)",
    distance: "360 km",
    duration: "4h 15m",
    price: "€ 680",
  },
  {
    id: "bolzano",
    name: "Bolzano (BZO)",
    distance: "45 km",
    duration: "0h 50m",
    price: "€ 130",
  },
];

const VEHICLES = [
  {
    id: "sedan",
    name: "Premium Sedan",
    model: "Mercedes E-Class 4MATIC",
    pax: 3,
    bags: 3,
    skis: false,
    image:
      "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=800&h=400",
    description: "Perfect for couples. Effortless alpine performance.",
  },
  {
    id: "van",
    name: "Luxury Minivan",
    model: "Mercedes V-Class 4MATIC",
    pax: 7,
    bags: 7,
    skis: true,
    image:
      "https://images.unsplash.com/photo-1620882794420-56ccf69fc030?auto=format&fit=crop&q=80&w=800&h=400",
    description: "The definitive choice for families and ski equipment.",
  },
  {
    id: "sprinter",
    name: "Executive Minibus",
    model: "Mercedes Sprinter",
    pax: 16,
    bags: 16,
    skis: true,
    image:
      "https://images.unsplash.com/photo-1596720235956-62161fdf9558?auto=format&fit=crop&q=80&w=800&h=400",
    description: "Spacious group transport without compromising luxury.",
  },
];

// --- COMPONENTS ---

const BookingEngine = () => {
  const { openBookingModal } = useAppStore();
  const [direction, setDirection] = useState<"to_resort" | "to_airport">(
    "to_resort",
  );
  const [selectedAirport, setSelectedAirport] = useState(AIRPORTS[0]);
  const [isFocused, setIsFocused] = useState<string | null>(null);

  return (
    <div className="bg-white rounded-2xl shadow-[0_12px_40px_-12px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden w-full max-w-5xl mx-auto z-10 relative">
      {/* Tabs */}
      <div className="flex border-b border-slate-100">
        <button
          onClick={() => setDirection("to_resort")}
          className={cn(
            "flex-1 py-4 px-6 text-sm font-bold tracking-tight transition-colors",
            direction === "to_resort"
              ? "bg-white text-slate-900 border-b-2 border-emerald-600"
              : "bg-slate-50 text-slate-500 hover:text-slate-700",
          )}
        >
          To Val Gardena
        </button>
        <button
          onClick={() => setDirection("to_airport")}
          className={cn(
            "flex-1 py-4 px-6 text-sm font-bold tracking-tight transition-colors",
            direction === "to_airport"
              ? "bg-white text-slate-900 border-b-2 border-emerald-600"
              : "bg-slate-50 text-slate-500 hover:text-slate-700",
          )}
        >
          To Airport / Station
        </button>
      </div>

      <div className="p-6 sm:p-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
          {/* Pick-up */}
          <div className="md:col-span-5 relative">
            <label className="block text-xs font-bold text-slate-900 mb-2 tracking-tight">
              Pick-up Location
            </label>
            <div
              className={cn(
                "flex items-center gap-3 px-4 py-3.5 rounded-xl border bg-slate-50 transition-all",
                isFocused === "pickup"
                  ? "border-emerald-600 ring-4 ring-emerald-600/10 bg-white"
                  : "border-slate-200",
              )}
            >
              {direction === "to_resort" ? (
                <Plane className="w-5 h-5 text-emerald-600" />
              ) : (
                <MapPin className="w-5 h-5 text-slate-400" />
              )}
              <select
                className="w-full bg-transparent text-slate-900 font-medium text-sm focus:outline-none appearance-none cursor-pointer tracking-tight"
                onFocus={() => setIsFocused("pickup")}
                onBlur={() => setIsFocused(null)}
                value={
                  direction === "to_resort" ? selectedAirport.id : "val-gardena"
                }
                onChange={(e) => {
                  if (direction === "to_resort") {
                    setSelectedAirport(
                      AIRPORTS.find((a) => a.id === e.target.value) ||
                        AIRPORTS[0],
                    );
                  }
                }}
              >
                {direction === "to_resort" ? (
                  AIRPORTS.map((a) => (
                    <option key={a.id} value={a.id}>
                      {a.name}
                    </option>
                  ))
                ) : (
                  <option value="val-gardena">
                    Val Gardena (Any Hotel/Address)
                  </option>
                )}
              </select>
            </div>
          </div>

          {/* Drop-off */}
          <div className="md:col-span-5 relative">
            <label className="block text-xs font-bold text-slate-900 mb-2 tracking-tight">
              Drop-off Location
            </label>
            <div
              className={cn(
                "flex items-center gap-3 px-4 py-3.5 rounded-xl border bg-slate-50 transition-all",
                isFocused === "dropoff"
                  ? "border-emerald-600 ring-4 ring-emerald-600/10 bg-white"
                  : "border-slate-200",
              )}
            >
              {direction === "to_airport" ? (
                <Plane className="w-5 h-5 text-emerald-600" />
              ) : (
                <MapPin className="w-5 h-5 text-slate-400" />
              )}
              <select
                className="w-full bg-transparent text-slate-900 font-medium text-sm focus:outline-none appearance-none cursor-pointer tracking-tight"
                onFocus={() => setIsFocused("dropoff")}
                onBlur={() => setIsFocused(null)}
                value={
                  direction === "to_airport"
                    ? selectedAirport.id
                    : "val-gardena"
                }
                onChange={(e) => {
                  if (direction === "to_airport") {
                    setSelectedAirport(
                      AIRPORTS.find((a) => a.id === e.target.value) ||
                        AIRPORTS[0],
                    );
                  }
                }}
              >
                {direction === "to_airport" ? (
                  AIRPORTS.map((a) => (
                    <option key={a.id} value={a.id}>
                      {a.name}
                    </option>
                  ))
                ) : (
                  <option value="val-gardena">
                    Val Gardena (Any Hotel/Address)
                  </option>
                )}
              </select>
            </div>
          </div>

          {/* Action */}
          <div className="md:col-span-2">
            <button
              onClick={() => openBookingModal()}
              className="w-full bg-[#090D14] hover:bg-slate-800 text-white py-3.5 px-4 rounded-xl font-bold text-sm transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 tracking-tight"
            >
              See Prices
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Live Preview Feedback */}
        <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-slate-400" />
              <span className="text-sm font-medium text-slate-900 tracking-tight">
                {selectedAirport.duration}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-slate-400" />
              <span className="text-sm font-medium text-slate-900 tracking-tight">
                {selectedAirport.distance}
              </span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-sm text-slate-500 mr-2">
              Fixed fares from
            </span>
            <span className="text-xl font-extrabold text-[#090D14] tracking-tight">
              {selectedAirport.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const FlightDelayTracker = () => {
  return (
    <div className="bg-[#090D14] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-emerald-400 text-xs font-bold mb-6 tracking-tight">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            Live Monitoring Active
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            Your flight is delayed. <br className="hidden sm:block" />
            Your driver is already informed.
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-lg leading-relaxed">
            We track your arrival down to the minute. You never pay wait time
            fees for flight delays, and your driver will be at arrivals exactly
            when you land.
          </p>
          <ul className="space-y-4">
            {[
              "Real-time API connection to global flight radar",
              "Automated driver schedule adjustment",
              "Direct driver SMS channel upon landing",
            ].map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-slate-300 font-medium tracking-tight">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Visualizer */}
        <div className="relative rounded-2xl bg-slate-900/50 border border-slate-800 p-6 backdrop-blur-sm">
          <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-6">
            <div>
              <div className="text-3xl font-bold tracking-tight text-white mb-1">
                LHR
              </div>
              <div className="text-slate-500 text-sm font-medium">London</div>
            </div>
            <div className="flex-1 px-8 relative flex flex-col items-center">
              <div className="w-full h-px bg-slate-800 absolute top-1/2 -translate-y-1/2"></div>
              <Plane className="w-6 h-6 text-emerald-500 relative z-10" />
              <span className="text-emerald-500 text-xs font-bold mt-2">
                Flight BA123
              </span>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold tracking-tight text-white mb-1">
                MUC
              </div>
              <div className="text-slate-500 text-sm font-medium">Munich</div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center bg-slate-900 rounded-xl p-4 border border-slate-800">
              <span className="text-slate-400 font-medium text-sm">
                Scheduled Arrival
              </span>
              <span className="text-slate-300 font-bold line-through opacity-50">
                14:30
              </span>
            </div>
            <div className="flex justify-between items-center bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/20">
              <span className="text-emerald-400 font-medium text-sm">
                Estimated Landing
              </span>
              <span className="text-emerald-400 font-bold text-lg">15:45</span>
            </div>
            <div className="flex items-center gap-3 mt-6 pt-6 border-t border-slate-800">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">
                  Driver Dispatch Updated
                </div>
                <div className="text-slate-500 text-xs mt-0.5">
                  Pickup rescheduled to 16:15 automatically
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const VehicleMatrix = () => {
  const [activeVehicle, setActiveVehicle] = useState(VEHICLES[1]);

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#090D14] mb-12 text-center">
          The Fleet Matrix
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Selection List */}
          <div className="lg:col-span-5 space-y-4">
            {VEHICLES.map((vehicle) => (
              <button
                key={vehicle.id}
                onClick={() => setActiveVehicle(vehicle)}
                className={cn(
                  "w-full text-left p-6 rounded-2xl border transition-all duration-300",
                  activeVehicle.id === vehicle.id
                    ? "bg-white border-emerald-600 shadow-[0_8px_30px_rgb(0,0,0,0.08)] scale-[1.02]"
                    : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50",
                )}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl text-[#090D14] tracking-tight">
                    {vehicle.name}
                  </h3>
                  {activeVehicle.id === vehicle.id && (
                    <span className="text-emerald-600">
                      <CheckCircle2 className="w-6 h-6" />
                    </span>
                  )}
                </div>
                <p className="text-slate-500 font-medium text-sm mb-4">
                  {vehicle.model}
                </p>
                <div className="flex items-center gap-4 text-slate-700 text-sm font-bold">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-slate-400" /> {vehicle.pax}{" "}
                    Pax
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-slate-400" />{" "}
                    {vehicle.bags} Bags
                  </div>
                  {vehicle.skis && (
                    <div className="flex items-center gap-1.5">
                      <Snowflake className="w-4 h-4 text-emerald-500" /> Skis OK
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Visual Showcase */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeVehicle.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100"
              >
                <img
                  src={activeVehicle.image}
                  alt={activeVehicle.name}
                  className="w-full h-[300px] object-cover rounded-2xl mb-8 shadow-sm"
                />
                <h4 className="text-2xl font-bold tracking-tight text-[#090D14] mb-2">
                  {activeVehicle.name}
                </h4>
                <p className="text-slate-600 leading-relaxed mb-8">
                  {activeVehicle.description}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-slate-100 pt-8">
                  <div>
                    <div className="text-slate-400 text-xs font-bold mb-1">
                      Make / Model
                    </div>
                    <div className="text-[#090D14] font-bold text-sm tracking-tight">
                      {activeVehicle.model}
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs font-bold mb-1">
                      Drive
                    </div>
                    <div className="text-[#090D14] font-bold text-sm tracking-tight">
                      4MATIC AWD
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs font-bold mb-1">
                      Amenities
                    </div>
                    <div className="text-[#090D14] font-bold text-sm tracking-tight">
                      WiFi, Water
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs font-bold mb-1">
                      Climate
                    </div>
                    <div className="text-[#090D14] font-bold text-sm tracking-tight">
                      Multi-zone
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ConceptTech: React.FC = () => {
  const { openBookingModal } = useAppStore();

  return (
    <div className="bg-[#F8FAFC] min-h-screen font-sans selection:bg-emerald-200 selection:text-emerald-900">
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-32 px-6 overflow-hidden">
        {/* Subtle geometric background */}
        <div
          className="absolute inset-0 bg-white"
          style={{
            backgroundImage: "radial-gradient(#E2E8F0 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        ></div>
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-white to-transparent"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Trust Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-bold text-[#090D14] tracking-tight">
              <div className="flex text-[#D97706]">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              4.95/5 on Google & TripAdvisor
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#090D14] leading-[1.1] mb-6">
              Precision Transfers to <br />
              <span className="text-emerald-600">Val Gardena</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Book fixed-rate premium transfers from all major airports directly
              to your hotel. We track your flight and guarantee your driver is
              waiting when you land.
            </p>
          </div>

          {/* Booking Engine */}
          <BookingEngine />

          {/* Value Props Row */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                <CreditCard className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-bold text-[#090D14] tracking-tight mb-2">
                  Fixed Transparent Pricing
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  No hidden fees, no meter surprises, no alpine pass surcharges.
                  The price you see is what you pay.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                <PlaneLanding className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-[#090D14] tracking-tight mb-2">
                  Flight Delay Guarantee
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We monitor your flight in real-time. If you're delayed, we
                  adjust the pickup schedule automatically at no cost.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="font-bold text-[#090D14] tracking-tight mb-2">
                  Door-to-Door Arrival
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Your driver meets you at arrivals with a name sign, and takes
                  you directly to your hotel entrance in the Dolomites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FLEET MATRIX */}
      <VehicleMatrix />

      {/* 3. FLIGHT TRACKING DEMO */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <FlightDelayTracker />
        </div>
      </section>

      {/* 4. DISPATCH CTA */}
      <section className="py-24 bg-[#090D14] text-white px-6 border-b border-slate-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold tracking-tight mb-6">
            Need immediate assistance?
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Our dispatch team operates 24/7. Reach out for custom routes,
            last-minute bookings, or large group logistics.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="https://wa.me/390471790033"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-colors shadow-lg shadow-emerald-900/50"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Dispatch
            </a>
            <a
              href="tel:+390471790033"
              className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call (+39) 0471 790033
            </a>
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-[#090D14] pt-16 pb-8 px-6 text-sm text-slate-400">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800 pb-12 mb-8">
          <div className="md:col-span-2">
            <div className="text-xl font-extrabold text-white tracking-tight mb-4">
              AutoSella
            </div>
            <p className="max-w-xs leading-relaxed">
              The premier transfer consortium for Val Gardena and the Dolomites.
              Reliable, premium, and safe alpine transport since 1974.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 tracking-tight">
              Transfers
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => openBookingModal()}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Innsbruck to Val Gardena
                </button>
              </li>
              <li>
                <button
                  onClick={() => openBookingModal()}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Munich to Val Gardena
                </button>
              </li>
              <li>
                <button
                  onClick={() => openBookingModal()}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Verona to Val Gardena
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 tracking-tight">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Imprint
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} Taxi Auto Sella Consortium. All rights
            reserved.
          </div>
          <div className="flex gap-4">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" /> Secure SSL
              Booking
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ConceptTech;
