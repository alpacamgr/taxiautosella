import React from 'react';
import { useAppStore } from '../../../store/useAppStore';
import { Plane, Train, ArrowRight } from 'lucide-react';

export const TechBookingPage: React.FC = () => {
  const { openBookingModal } = useAppStore();

  const airportRates = [
    { name: 'Innsbruck Airport (INN)', dist: '120 km', time: '1h 30m', sedan: '€240', van: '€280' },
    { name: 'Verona Valerio Catullo (VRN)', dist: '190 km', time: '2h 05m', sedan: '€340', van: '€380' },
    { name: 'Munich Franz Josef Strauss (MUC)', dist: '310 km', time: '3h 30m', sedan: '€480', van: '€550' },
    { name: 'Venice Marco Polo (VCE)', dist: '270 km', time: '3h 15m', sedan: '€440', van: '€490' },
    { name: 'Milan Malpensa (MXP)', dist: '350 km', time: '3h 55m', sedan: '€540', van: '€620' },
    { name: 'Milan Linate (LIN)', dist: '320 km', time: '3h 35m', sedan: '€500', van: '€580' },
    { name: 'Bergamo Orio al Serio (BGY)', dist: '270 km', time: '3h 00m', sedan: '€430', van: '€490' },
    { name: 'Treviso Canova (TSF)', dist: '230 km', time: '2h 50m', sedan: '€400', van: '€450' },
    { name: 'Bologna Guglielmo Marconi (BLQ)', dist: '290 km', time: '3h 10m', sedan: '€460', van: '€520' },
    { name: 'Bolzano Airport (BZO)', dist: '42 km', time: '45m', sedan: '€110', van: '€130' },
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
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-3">
          Fixed Rates & Online Booking
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Guaranteed upfront fixed prices to and from Val Gardena. All highway tolls, alpine permits, meet & greet, and flight delay tracking are 100% included.
        </p>
      </div>

      {/* Airport Rates */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-12">
        <div className="flex items-center gap-2 mb-6">
          <Plane className="w-5 h-5 text-[#D97706]" />
          <h2 className="text-xl font-bold text-slate-900">Airport Transfers (To / From Val Gardena)</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase text-[11px]">
                <th className="py-3 px-4">Airport</th>
                <th className="py-3 px-4">Distance & Time</th>
                <th className="py-3 px-4">Sedan (1–3 Pax)</th>
                <th className="py-3 px-4">Minivan (1–8 Pax)</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {airportRates.map((r, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 font-bold text-slate-900">{r.name}</td>
                  <td className="py-4 px-4 text-slate-500">{r.dist} • {r.time}</td>
                  <td className="py-4 px-4 font-extrabold text-slate-900">{r.sedan}</td>
                  <td className="py-4 px-4 font-extrabold text-[#D97706]">{r.van}</td>
                  <td className="py-4 px-4 text-right">
                    <button
                      onClick={() => openBookingModal()}
                      className="px-4 py-1.5 bg-[#0A192F] hover:bg-[#D97706] text-white font-bold text-xs rounded-lg transition-colors"
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

      {/* Train Station Rates */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-12">
        <div className="flex items-center gap-2 mb-6">
          <Train className="w-5 h-5 text-[#D97706]" />
          <h2 className="text-xl font-bold text-slate-900">Railway Station Transfers</h2>
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
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 font-bold text-slate-900">{r.name}</td>
                  <td className="py-4 px-4 text-slate-500">{r.dist} • {r.time}</td>
                  <td className="py-4 px-4 font-extrabold text-slate-900">{r.sedan}</td>
                  <td className="py-4 px-4 font-extrabold text-[#D97706]">{r.van}</td>
                  <td className="py-4 px-4 text-right">
                    <button
                      onClick={() => openBookingModal()}
                      className="px-4 py-1.5 bg-[#0A192F] hover:bg-[#D97706] text-white font-bold text-xs rounded-lg transition-colors"
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
    </div>
  );
};
