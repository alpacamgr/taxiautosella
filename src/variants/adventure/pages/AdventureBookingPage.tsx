import React, { useState } from 'react';
import { useAppStore } from '../../../store/useAppStore';
import { Plane, Train, Clock, ShieldCheck, MapPin, Calendar, Users, ArrowRight, Check } from 'lucide-react';

export const AdventureBookingPage: React.FC = () => {
  const { openBookingModal, updateBooking } = useAppStore();

  const airportRates = [
    { name: 'Innsbruck Airport (INN)', dist: '120 km', time: '1h 30m', sedan: '€240', van: '€280', coach: 'On Request' },
    { name: 'Verona Valerio Catullo (VRN)', dist: '190 km', time: '2h 05m', sedan: '€340', van: '€380', coach: 'On Request' },
    { name: 'Munich Franz Josef Strauss (MUC)', dist: '310 km', time: '3h 30m', sedan: '€480', van: '€550', coach: 'On Request' },
    { name: 'Venice Marco Polo (VCE)', dist: '270 km', time: '3h 15m', sedan: '€440', van: '€490', coach: 'On Request' },
    { name: 'Milan Malpensa (MXP)', dist: '350 km', time: '3h 55m', sedan: '€540', van: '€620', coach: 'On Request' },
    { name: 'Milan Linate (LIN)', dist: '320 km', time: '3h 35m', sedan: '€500', van: '€580', coach: 'On Request' },
    { name: 'Bergamo Orio al Serio (BGY)', dist: '270 km', time: '3h 00m', sedan: '€430', van: '€490', coach: 'On Request' },
    { name: 'Treviso Canova (TSF)', dist: '230 km', time: '2h 50m', sedan: '€400', van: '€450', coach: 'On Request' },
    { name: 'Bologna Guglielmo Marconi (BLQ)', dist: '290 km', time: '3h 10m', sedan: '€460', van: '€520', coach: 'On Request' },
    { name: 'Bolzano Airport (BZO)', dist: '42 km', time: '45m', sedan: '€110', van: '€130', coach: 'On Request' },
  ];

  const stationRates = [
    { name: 'Bolzano / Bozen Railway Station', dist: '40 km', time: '45m', sedan: '€100', van: '€120' },
    { name: 'Bressanone / Brixen Railway Station', dist: '32 km', time: '35m', sedan: '€85', van: '€105' },
    { name: 'Ponte Gardena / Waidbruck Station', dist: '15 km', time: '20m', sedan: '€50', van: '€65' },
    { name: 'Chiusa / Klausen Railway Station', dist: '25 km', time: '30m', sedan: '€70', van: '€85' },
  ];

  return (
    <div className="py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#181B22] mb-3">
          Fixed Rates & Online Booking
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Transparent, guaranteed pricing with zero taxi meter surprises. All highway tolls, winter pass fees, flight delay tracking, and luggage/skis are 100% included.
        </p>
      </div>

      {/* Airport Transfer Rates Table */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-12">
        <div className="flex items-center gap-2 mb-6">
          <Plane className="w-5 h-5 text-[#D6A56E]" />
          <h2 className="text-xl font-bold text-[#181B22]">Official Airport Transfer Rates (To / From Val Gardena)</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase text-[11px]">
                <th className="py-3 px-4">Airport Destination</th>
                <th className="py-3 px-4">Distance & Time</th>
                <th className="py-3 px-4">Sedan (1–3 Pax)</th>
                <th className="py-3 px-4">Minivan (1–8 Pax)</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {airportRates.map((r, i) => (
                <tr key={i} className="hover:bg-[#FAF9F5] transition-colors">
                  <td className="py-4 px-4 font-bold text-[#181B22]">{r.name}</td>
                  <td className="py-4 px-4 text-slate-500">{r.dist} • {r.time}</td>
                  <td className="py-4 px-4 font-extrabold text-emerald-800">{r.sedan}</td>
                  <td className="py-4 px-4 font-extrabold text-[#D6A56E]">{r.van}</td>
                  <td className="py-4 px-4 text-right">
                    <button
                      onClick={() => openBookingModal()}
                      className="px-4 py-1.5 bg-[#181B22] hover:bg-[#D6A56E] hover:text-[#181B22] text-white font-bold text-xs rounded-lg transition-colors"
                    >
                      Book
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Train Station Rates Table */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-12">
        <div className="flex items-center gap-2 mb-6">
          <Train className="w-5 h-5 text-[#D6A56E]" />
          <h2 className="text-xl font-bold text-[#181B22]">Railway Station Transfers</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase text-[11px]">
                <th className="py-3 px-4">Train Station</th>
                <th className="py-3 px-4">Distance & Time</th>
                <th className="py-3 px-4">Sedan (1–3 Pax)</th>
                <th className="py-3 px-4">Minivan (1–8 Pax)</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {stationRates.map((r, i) => (
                <tr key={i} className="hover:bg-[#FAF9F5] transition-colors">
                  <td className="py-4 px-4 font-bold text-[#181B22]">{r.name}</td>
                  <td className="py-4 px-4 text-slate-500">{r.dist} • {r.time}</td>
                  <td className="py-4 px-4 font-extrabold text-emerald-800">{r.sedan}</td>
                  <td className="py-4 px-4 font-extrabold text-[#D6A56E]">{r.van}</td>
                  <td className="py-4 px-4 text-right">
                    <button
                      onClick={() => openBookingModal()}
                      className="px-4 py-1.5 bg-[#181B22] hover:bg-[#D6A56E] hover:text-[#181B22] text-white font-bold text-xs rounded-lg transition-colors"
                    >
                      Book
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Inclusions & Payment Policies */}
      <div className="bg-[#181B22] text-[#FBF9F5] p-8 rounded-3xl border border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
        <div>
          <h3 className="text-sm font-bold text-[#D6A56E] mb-2">Free Flight Delay Monitoring</h3>
          <p className="text-slate-300 leading-relaxed">
            Your flight arrival time is tracked live. The first 60 minutes of waiting time after landing is included at zero extra fee.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold text-[#D6A56E] mb-2">Payment Methods</h3>
          <p className="text-slate-300 leading-relaxed">
            Pay comfortably in cash, via onboard credit card POS (Visa, Mastercard, Amex, Apple Pay), or by bank transfer.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold text-[#D6A56E] mb-2">No Hidden Surcharges</h3>
          <p className="text-slate-300 leading-relaxed">
            Oversized ski luggage, snowboard bags, infant child seats, and highway tolls are always included in your quoted fare.
          </p>
        </div>
      </div>
    </div>
  );
};
