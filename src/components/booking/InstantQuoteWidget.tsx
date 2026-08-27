import React from 'react';
import { useAppStore } from '../../store/useAppStore';
import { ORIGINS, DESTINATIONS } from '../../data/routes';
import { FLEET } from '../../data/fleet';
import { 
  MapPin, 
  Calendar, 
  Clock, 
  Users, 
  Briefcase, 
  Plane, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Check, 
  Baby, 
  Compass, 
  Info,
  Car
} from 'lucide-react';

interface Props {
  themeVariant?: 'luxury' | 'tech' | 'adventure';
}

export const InstantQuoteWidget: React.FC<Props> = ({ themeVariant = 'luxury' }) => {
  const { 
    booking, 
    updateBooking, 
    openBookingModal, 
    getRouteDetails, 
    calculateVehiclePrice,
    t 
  } = useAppStore();

  const route = getRouteDetails();
  const selectedOrigin = ORIGINS.find(o => o.id === booking.originId) || ORIGINS[0];
  const selectedDest = DESTINATIONS.find(d => d.id === booking.destinationId) || DESTINATIONS[0];

  // Helper styles based on theme
  const isLuxury = themeVariant === 'luxury';
  const isTech = themeVariant === 'tech';
  const isAdventure = themeVariant === 'adventure';

  const cardStyle = isLuxury
    ? 'glass-card-gold shadow-luxury rounded-3xl border-gold-500/30'
    : isTech
    ? 'bg-white shadow-2xl rounded-3xl border border-slate-200 text-slate-800'
    : 'glass-card-navy shadow-adventure rounded-3xl border-sky-400/40 text-slate-100';

  const buttonAccent = isLuxury
    ? 'bg-gradient-to-r from-gold-500 via-amber-400 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black font-bold shadow-lg shadow-gold-500/20'
    : isTech
    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold shadow-lg shadow-emerald-500/20'
    : 'bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold shadow-lg shadow-sky-500/30';

  return (
    <div className={`p-6 sm:p-8 transition-all ${cardStyle}`}>
      
      {/* Widget Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <span className={`p-1.5 rounded-lg ${isLuxury ? 'bg-gold-500/20 text-gold-400' : isTech ? 'bg-emerald-100 text-emerald-700' : 'bg-sky-500/20 text-sky-400'}`}>
              <Compass className="w-5 h-5" />
            </span>
            <h3 className={`text-lg sm:text-xl font-bold ${isTech ? 'text-slate-900' : 'text-white'}`}>
              {t('calc.title')}
            </h3>
          </div>
          <p className={`text-xs mt-1 ${isTech ? 'text-slate-500' : 'text-slate-300'}`}>
            {t('calc.allInclusive')}
          </p>
        </div>

        {/* Live Route Preview Pill */}
        <div className={`flex items-center gap-3 px-3.5 py-1.5 rounded-full text-xs font-semibold ${
          isLuxury 
            ? 'bg-gold-500/10 text-gold-300 border border-gold-500/30' 
            : isTech 
            ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
            : 'bg-sky-500/15 text-sky-300 border border-sky-400/30'
        }`}>
          <span>{route.distanceKm} km</span>
          <span>•</span>
          <span>~{Math.floor(route.durationMinutes / 60)}h {route.durationMinutes % 60}m</span>
          <span>•</span>
          <span className="font-bold">{t('calc.startingFrom')} €{route.basePrice}</span>
        </div>
      </div>

      {/* Main Input Form Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        
        {/* Origin Dropdown */}
        <div className="flex flex-col gap-1.5">
          <label className={`text-xs font-semibold flex items-center gap-1.5 ${isTech ? 'text-slate-700' : 'text-slate-300'}`}>
            <MapPin className="w-3.5 h-3.5 text-red-400" />
            <span>{t('calc.pickup')}</span>
          </label>
          <select
            value={booking.originId}
            onChange={(e) => updateBooking({ originId: e.target.value })}
            className={`w-full px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
              isTech
                ? 'bg-slate-50 border border-slate-300 text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:bg-white'
                : 'bg-slate-900/90 border border-slate-700 text-white focus:ring-2 focus:ring-gold-400 focus:border-gold-400'
            }`}
          >
            {ORIGINS.map((o) => (
              <option key={o.id} value={o.id} className="bg-slate-900 text-white">
                {o.name} {o.code ? `(${o.code})` : ''} — {o.country}
              </option>
            ))}
          </select>
        </div>

        {/* Destination Dropdown */}
        <div className="flex flex-col gap-1.5">
          <label className={`text-xs font-semibold flex items-center gap-1.5 ${isTech ? 'text-slate-700' : 'text-slate-300'}`}>
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t('calc.dropoff')}</span>
          </label>
          <select
            value={booking.destinationId}
            onChange={(e) => updateBooking({ destinationId: e.target.value })}
            className={`w-full px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
              isTech
                ? 'bg-slate-50 border border-slate-300 text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:bg-white'
                : 'bg-slate-900/90 border border-slate-700 text-white focus:ring-2 focus:ring-gold-400 focus:border-gold-400'
            }`}
          >
            {DESTINATIONS.map((d) => (
              <option key={d.id} value={d.id} className="bg-slate-900 text-white">
                {d.name} — {d.country}
              </option>
            ))}
          </select>
        </div>

        {/* Date Picker */}
        <div className="flex flex-col gap-1.5">
          <label className={`text-xs font-semibold flex items-center gap-1.5 ${isTech ? 'text-slate-700' : 'text-slate-300'}`}>
            <Calendar className="w-3.5 h-3.5 text-blue-400" />
            <span>{t('calc.date')}</span>
          </label>
          <input
            type="date"
            value={booking.date}
            min={new Date().toISOString().split('T')[0]}
            onChange={(e) => updateBooking({ date: e.target.value })}
            className={`w-full px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
              isTech
                ? 'bg-slate-50 border border-slate-300 text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:bg-white'
                : 'bg-slate-900/90 border border-slate-700 text-white focus:ring-2 focus:ring-gold-400'
            }`}
          />
        </div>

        {/* Time Picker */}
        <div className="flex flex-col gap-1.5">
          <label className={`text-xs font-semibold flex items-center gap-1.5 ${isTech ? 'text-slate-700' : 'text-slate-300'}`}>
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>{t('calc.time')}</span>
          </label>
          <input
            type="time"
            value={booking.time}
            onChange={(e) => updateBooking({ time: e.target.value })}
            className={`w-full px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
              isTech
                ? 'bg-slate-50 border border-slate-300 text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:bg-white'
                : 'bg-slate-900/90 border border-slate-700 text-white focus:ring-2 focus:ring-gold-400'
            }`}
          />
        </div>

      </div>

      {/* Row 2: Passengers, Luggage, Flight Number & Toggles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        
        {/* Passengers Counter */}
        <div className="flex flex-col gap-1.5">
          <label className={`text-xs font-semibold flex items-center gap-1.5 ${isTech ? 'text-slate-700' : 'text-slate-300'}`}>
            <Users className="w-3.5 h-3.5 text-indigo-400" />
            <span>{t('calc.pax')}</span>
          </label>
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => updateBooking({ passengers: Math.max(1, booking.passengers - 1) })}
              className={`w-9 h-9 rounded-l-xl flex items-center justify-center font-bold text-sm transition-colors ${
                isTech ? 'bg-slate-200 hover:bg-slate-300 text-slate-800' : 'bg-slate-800 hover:bg-slate-700 text-white'
              }`}
            >
              -
            </button>
            <div className={`flex-1 text-center py-2 text-xs font-bold border-y ${
              isTech ? 'bg-slate-50 border-slate-200 text-slate-900' : 'bg-slate-900 border-slate-700 text-white'
            }`}>
              {booking.passengers} {booking.passengers === 1 ? 'Person' : 'Guests'}
            </div>
            <button
              type="button"
              onClick={() => updateBooking({ passengers: Math.min(56, booking.passengers + 1) })}
              className={`w-9 h-9 rounded-r-xl flex items-center justify-center font-bold text-sm transition-colors ${
                isTech ? 'bg-slate-200 hover:bg-slate-300 text-slate-800' : 'bg-slate-800 hover:bg-slate-700 text-white'
              }`}
            >
              +
            </button>
          </div>
        </div>

        {/* Luggage Counter */}
        <div className="flex flex-col gap-1.5">
          <label className={`text-xs font-semibold flex items-center gap-1.5 ${isTech ? 'text-slate-700' : 'text-slate-300'}`}>
            <Briefcase className="w-3.5 h-3.5 text-teal-400" />
            <span>{t('calc.luggage')}</span>
          </label>
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => updateBooking({ luggage: Math.max(0, booking.luggage - 1) })}
              className={`w-9 h-9 rounded-l-xl flex items-center justify-center font-bold text-sm transition-colors ${
                isTech ? 'bg-slate-200 hover:bg-slate-300 text-slate-800' : 'bg-slate-800 hover:bg-slate-700 text-white'
              }`}
            >
              -
            </button>
            <div className={`flex-1 text-center py-2 text-xs font-bold border-y ${
              isTech ? 'bg-slate-50 border-slate-200 text-slate-900' : 'bg-slate-900 border-slate-700 text-white'
            }`}>
              {booking.luggage} Suitcases
            </div>
            <button
              type="button"
              onClick={() => updateBooking({ luggage: Math.min(60, booking.luggage + 1) })}
              className={`w-9 h-9 rounded-r-xl flex items-center justify-center font-bold text-sm transition-colors ${
                isTech ? 'bg-slate-200 hover:bg-slate-300 text-slate-800' : 'bg-slate-800 hover:bg-slate-700 text-white'
              }`}
            >
              +
            </button>
          </div>
        </div>

        {/* Flight Number Input */}
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label className={`text-xs font-semibold flex items-center justify-between ${isTech ? 'text-slate-700' : 'text-slate-300'}`}>
            <span className="flex items-center gap-1.5">
              <Plane className="w-3.5 h-3.5 text-sky-400" />
              <span>{t('calc.flightNum')}</span>
            </span>
            <span className="text-[10px] text-emerald-400 font-normal">
              Free Delay Tracking
            </span>
          </label>
          <input
            type="text"
            placeholder="e.g. LH 1852, OS 903, or Train #9724"
            value={booking.flightNumber}
            onChange={(e) => updateBooking({ flightNumber: e.target.value })}
            className={`w-full px-3 py-2 rounded-xl text-xs font-medium transition-all ${
              isTech
                ? 'bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-500'
                : 'bg-slate-900/90 border border-slate-700 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-gold-400'
            }`}
          />
        </div>

      </div>

      {/* Alpine Special Equipment Toggles */}
      <div className="flex flex-wrap items-center gap-3 mb-8 p-3 rounded-2xl bg-black/20 border border-white/5">
        
        {/* Ski / Snowboard Gear Toggle */}
        <label className={`flex items-center gap-2 px-3 py-2 rounded-xl cursor-pointer text-xs font-medium transition-all border ${
          booking.hasSkis 
            ? isLuxury 
              ? 'bg-gold-500/20 text-gold-300 border-gold-500/50' 
              : isTech 
              ? 'bg-emerald-50 text-emerald-800 border-emerald-400' 
              : 'bg-sky-500/20 text-sky-300 border-sky-400'
            : isTech ? 'bg-white border-slate-200 text-slate-600' : 'bg-slate-800/60 border-slate-700 text-slate-300'
        }`}>
          <input
            type="checkbox"
            checked={booking.hasSkis}
            onChange={(e) => updateBooking({ hasSkis: e.target.checked })}
            className="rounded accent-gold-500 w-4 h-4"
          />
          <span>⛷️ Ski / Snowboard Equipment</span>
        </label>

        {/* Mountain Bikes Toggle */}
        <label className={`flex items-center gap-2 px-3 py-2 rounded-xl cursor-pointer text-xs font-medium transition-all border ${
          booking.hasBikes 
            ? isLuxury 
              ? 'bg-gold-500/20 text-gold-300 border-gold-500/50' 
              : isTech 
              ? 'bg-emerald-50 text-emerald-800 border-emerald-400' 
              : 'bg-sky-500/20 text-sky-300 border-sky-400'
            : isTech ? 'bg-white border-slate-200 text-slate-600' : 'bg-slate-800/60 border-slate-700 text-slate-300'
        }`}>
          <input
            type="checkbox"
            checked={booking.hasBikes}
            onChange={(e) => updateBooking({ hasBikes: e.target.checked })}
            className="rounded accent-gold-500 w-4 h-4"
          />
          <span>🚲 Mountain Bikes / Trailer</span>
        </label>

        {/* Child Seats Toggle */}
        <label className={`flex items-center gap-2 px-3 py-2 rounded-xl cursor-pointer text-xs font-medium transition-all border ${
          booking.hasChildSeats 
            ? isLuxury 
              ? 'bg-gold-500/20 text-gold-300 border-gold-500/50' 
              : isTech 
              ? 'bg-emerald-50 text-emerald-800 border-emerald-400' 
              : 'bg-sky-500/20 text-sky-300 border-sky-400'
            : isTech ? 'bg-white border-slate-200 text-slate-600' : 'bg-slate-800/60 border-slate-700 text-slate-300'
        }`}>
          <input
            type="checkbox"
            checked={booking.hasChildSeats}
            onChange={(e) => updateBooking({ hasChildSeats: e.target.checked })}
            className="rounded accent-gold-500 w-4 h-4"
          />
          <span>👶 Child & Baby Seats (Free)</span>
        </label>

      </div>

      {/* Vehicle Tier Selection Cards */}
      <div className="mb-4">
        <h4 className={`text-xs font-bold uppercase tracking-wider mb-3 ${isTech ? 'text-slate-500' : 'text-slate-400'}`}>
          {t('calc.selectVehicle')} — Real-Time Calculated Options
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {FLEET.slice(0, 3).map((vehicle) => {
            const calculatedPrice = calculateVehiclePrice(vehicle.multiplier);
            const isSelected = booking.selectedVehicleId === vehicle.id;

            return (
              <div
                key={vehicle.id}
                onClick={() => updateBooking({ selectedVehicleId: vehicle.id })}
                className={`relative p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? isLuxury
                      ? 'bg-gold-500/10 border-gold-500 shadow-lg ring-1 ring-gold-500/60'
                      : isTech
                      ? 'bg-emerald-50/50 border-emerald-500 shadow-lg ring-1 ring-emerald-500/60'
                      : 'bg-sky-500/15 border-sky-400 shadow-lg ring-1 ring-sky-400/60'
                    : isTech
                    ? 'bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-white'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
                }`}
              >
                {/* Vehicle Badge */}
                {vehicle.badge && (
                  <div className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-900 text-gold-400 border border-gold-500/40 shadow-sm">
                    {vehicle.badge}
                  </div>
                )}

                <div>
                  {/* Photo Preview */}
                  <div className="w-full h-28 rounded-xl overflow-hidden mb-3 bg-slate-950 relative">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2.5 text-[11px] font-semibold text-white">
                      {vehicle.subtitle}
                    </div>
                  </div>

                  {/* Title & Specs */}
                  <h5 className={`font-bold text-sm mb-1 ${isTech ? 'text-slate-900' : 'text-white'}`}>
                    {vehicle.name}
                  </h5>
                  
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1" title="Max Passengers">
                      <Users className="w-3.5 h-3.5 text-slate-400" />
                      <span>{vehicle.passengers} pax</span>
                    </span>
                    <span className="flex items-center gap-1" title="Luggage capacity">
                      <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                      <span>{vehicle.luggage} bags</span>
                    </span>
                    <span className="flex items-center gap-1 text-sky-400" title="Ski capacity">
                      <span>⛷️ {vehicle.skis}</span>
                    </span>
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block">Total Fixed Rate</span>
                    <span className={`text-xl font-extrabold ${isLuxury ? 'text-gold-400' : isTech ? 'text-emerald-600' : 'text-sky-300'}`}>
                      €{calculatedPrice}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openBookingModal(vehicle.id);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                      isSelected ? buttonAccent : isTech ? 'bg-slate-200 text-slate-800 hover:bg-slate-300' : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                    }`}
                  >
                    <span>Reserve</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs">
        <div className={`flex items-center gap-2 ${isTech ? 'text-slate-600' : 'text-slate-400'}`}>
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Guaranteed 4MATIC Mercedes • Free Cancellation up to 24h</span>
        </div>

        <button
          type="button"
          onClick={() => openBookingModal()}
          className={`w-full sm:w-auto px-8 py-3 rounded-xl text-sm transition-all flex items-center justify-center gap-2 ${buttonAccent}`}
        >
          <span>Continue to Reservation Summary</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
