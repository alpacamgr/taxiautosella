import React, { useState } from 'react';
import { useAppStore } from '../../../store/useAppStore';
import { Plane, Train, ArrowRight, ShieldCheck, Clock, CheckCircle2, MessageSquare, MapPin, Calendar, Users, Briefcase } from 'lucide-react';

export const TechBookingPage: React.FC = () => {
  const { openInquiryModal } = useAppStore();

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    origin: 'Innsbruck Airport (INN)',
    destination: 'Ortisei / St. Ulrich',
    date: '',
    time: '',
    vehicle: 'Mercedes V-Class VIP (1–7 Pax)',
    passengers: '2',
    luggage: '2',
    skis: 'Yes',
    flightNum: '',
    notes: ''
  });

  const airportRates = [
    { name: 'Innsbruck Airport (INN)', dist: '120 km', time: '1h 30m', sedan: '€240', van: '€280', coach: '€440' },
    { name: 'Verona Valerio Catullo (VRN)', dist: '190 km', time: '2h 05m', sedan: '€340', van: '€380', coach: '€590' },
    { name: 'Munich Franz Josef Strauss (MUC)', dist: '310 km', time: '3h 30m', sedan: '€480', van: '€550', coach: '€820' },
    { name: 'Venice Marco Polo (VCE)', dist: '270 km', time: '3h 15m', sedan: '€440', van: '€490', coach: '€760' },
    { name: 'Milan Malpensa (MXP)', dist: '350 km', time: '3h 55m', sedan: '€540', van: '€620', coach: '€950' },
    { name: 'Milan Linate (LIN)', dist: '320 km', time: '3h 35m', sedan: '€500', van: '€580', coach: '€890' },
    { name: 'Bergamo Orio al Serio (BGY)', dist: '270 km', time: '3h 00m', sedan: '€430', van: '€490', coach: '€750' },
    { name: 'Treviso Canova (TSF)', dist: '230 km', time: '2h 50m', sedan: '€400', van: '€450', coach: '€690' },
    { name: 'Bologna Guglielmo Marconi (BLQ)', dist: '290 km', time: '3h 10m', sedan: '€460', van: '€520', coach: '€790' },
    { name: 'Bolzano Airport (BZO)', dist: '42 km', time: '45m', sedan: '€110', van: '€130', coach: '€220' },
  ];

  const stationRates = [
    { name: 'Bolzano / Bozen Railway Station', dist: '40 km', time: '45m', sedan: '€100', van: '€120' },
    { name: 'Bressanone / Brixen Railway Station', dist: '32 km', time: '35m', sedan: '€85', van: '€105' },
    { name: 'Ponte Gardena / Waidbruck Station', dist: '15 km', time: '20m', sedan: '€50', van: '€65' },
    { name: 'Chiusa / Klausen Railway Station', dist: '25 km', time: '30m', sedan: '€70', van: '€85' },
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openInquiryModal(
      'Online Transfer Reservation',
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nRoute: ${form.origin} ➔ ${form.destination}\nDate/Time: ${form.date} at ${form.time || 'TBD'}\nVehicle: ${form.vehicle}\nPax: ${form.passengers} | Luggage: ${form.luggage} | Ski/Gear: ${form.skis}\nFlight/Train #: ${form.flightNum || 'None'}\nNotes: ${form.notes || 'None'}`
    );
  };

  return (
    <div className="py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#D97706] block mb-2">
          Transparent Rates & Live Booking
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mb-3">
          Val Gardena Transfer Rates
        </h1>
        <p className="text-base text-slate-600 leading-relaxed font-normal">
          Guaranteed upfront fixed prices for all 9 regional airport gateways and railway stations. All highway tolls, alpine passes, ski equipment handling, and real-time flight tracking are 100% included.
        </p>
      </div>

      {/* Main Grid: Rate Tables + Fast Booking Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
        
        {/* Left 7 Cols: Tabular Rates */}
        <div className="lg:col-span-7 space-y-10">
          
          {/* Airport Rates */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <Plane className="w-5 h-5 text-[#D97706]" />
                <h2 className="text-xl font-extrabold text-slate-900">Airport Transfers to Val Gardena</h2>
              </div>
              <span className="text-xs text-slate-500 font-bold hidden sm:inline">Fixed All-Inclusive</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase text-[10px] tracking-wider">
                    <th className="py-3 px-3">Gateway</th>
                    <th className="py-3 px-3">Dist • Time</th>
                    <th className="py-3 px-3">Sedan (1-3)</th>
                    <th className="py-3 px-3">Van (1-8)</th>
                    <th className="py-3 px-3 text-right">Quick Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {airportRates.map((r, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-3 font-bold text-slate-900">{r.name}</td>
                      <td className="py-3.5 px-3 text-slate-500 text-xs">{r.dist} • {r.time}</td>
                      <td className="py-3.5 px-3 font-black text-slate-900">{r.sedan}</td>
                      <td className="py-3.5 px-3 font-black text-[#D97706]">{r.van}</td>
                      <td className="py-3.5 px-3 text-right">
                        <button
                          onClick={() => openInquiryModal('Airport Transfer', `Gateway: ${r.name}\nDistance: ${r.dist}\nTime: ${r.time}\nRates: Sedan ${r.sedan} / Van ${r.van}`)}
                          className="px-3 py-1.5 bg-[#0A192F] hover:bg-[#D97706] text-white font-bold text-xs rounded-lg transition-colors"
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
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <Train className="w-5 h-5 text-[#D97706]" />
                <h2 className="text-xl font-extrabold text-slate-900">Railway Station Connections</h2>
              </div>
              <span className="text-xs text-slate-500 font-bold hidden sm:inline">South Tyrol Rail</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase text-[10px] tracking-wider">
                    <th className="py-3 px-3">Railway Station</th>
                    <th className="py-3 px-3">Dist • Time</th>
                    <th className="py-3 px-3">Sedan (1-3)</th>
                    <th className="py-3 px-3">Van (1-8)</th>
                    <th className="py-3 px-3 text-right">Quick Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {stationRates.map((r, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-3 font-bold text-slate-900">{r.name}</td>
                      <td className="py-3.5 px-3 text-slate-500 text-xs">{r.dist} • {r.time}</td>
                      <td className="py-3.5 px-3 font-black text-slate-900">{r.sedan}</td>
                      <td className="py-3.5 px-3 font-black text-[#D97706]">{r.van}</td>
                      <td className="py-3.5 px-3 text-right">
                        <button
                          onClick={() => openInquiryModal('Station Transfer', `Station: ${r.name}\nDistance: ${r.dist}\nTime: ${r.time}\nRates: Sedan ${r.sedan} / Van ${r.van}`)}
                          className="px-3 py-1.5 bg-[#0A192F] hover:bg-[#D97706] text-white font-bold text-xs rounded-lg transition-colors"
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

        {/* Right 5 Cols: Online Reservation Form */}
        <div className="lg:col-span-5">
          <div className="sticky top-24 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl">
            <div className="border-b border-slate-100 pb-4 mb-6">
              <h3 className="font-extrabold text-xl text-slate-900">Direct Transfer Reservation</h3>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                No prepayment required • Free cancellation up to 24h
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})}
                    placeholder="Guest Name"
                    className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs font-bold text-slate-900 outline-none focus:border-[#D97706]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={e => setForm({...form, phone: e.target.value})}
                    placeholder="+44 / +49..."
                    className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs font-bold text-slate-900 outline-none focus:border-[#D97706]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                  placeholder="name@domain.com"
                  className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs font-bold text-slate-900 outline-none focus:border-[#D97706]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">Pick-Up Location</label>
                  <input
                    type="text"
                    required
                    value={form.origin}
                    onChange={e => setForm({...form, origin: e.target.value})}
                    placeholder="Airport / Station"
                    className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs font-bold text-slate-900 outline-none focus:border-[#D97706]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">Val Gardena Hotel</label>
                  <input
                    type="text"
                    required
                    value={form.destination}
                    onChange={e => setForm({...form, destination: e.target.value})}
                    placeholder="Hotel / Chalet"
                    className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs font-bold text-slate-900 outline-none focus:border-[#D97706]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">Transfer Date</label>
                  <input
                    type="date"
                    required
                    value={form.date}
                    onChange={e => setForm({...form, date: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs font-bold text-slate-900 outline-none focus:border-[#D97706]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">Flight Number (Live Tracking)</label>
                  <input
                    type="text"
                    value={form.flightNum}
                    onChange={e => setForm({...form, flightNum: e.target.value})}
                    placeholder="e.g. LH 1234 / BA 567"
                    className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs font-bold text-slate-900 outline-none focus:border-[#D97706]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">Pick-Up / Flight Time</label>
                  <input
                    type="time"
                    value={form.time}
                    onChange={e => setForm({...form, time: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs font-bold text-slate-900 outline-none focus:border-[#D97706]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">Vehicle Class</label>
                  <select
                    value={form.vehicle}
                    onChange={e => setForm({...form, vehicle: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs font-bold text-slate-900 outline-none focus:border-[#D97706]"
                  >
                    <option value="Mercedes E-Class 4MATIC">Mercedes E-Class 4MATIC (1-3 Pax)</option>
                    <option value="Mercedes V-Class Luxury">Mercedes V-Class VIP (1-7 Pax)</option>
                    <option value="Mercedes Vito 4MATIC">Mercedes Vito 4MATIC (1-8 Pax)</option>
                    <option value="Mercedes S-Class Long">Mercedes S-Class Long VIP</option>
                    <option value="Sprinter VIP Coach">Sprinter VIP Coach (16-30 Pax)</option>
                    <option value="Grand Touring Coach">Grand Touring Coach (56 Seats)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">Passengers</label>
                  <select
                    value={form.passengers}
                    onChange={e => setForm({...form, passengers: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 p-2 rounded-xl text-xs font-bold text-slate-900 outline-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map(n => <option key={n} value={n}>{n} Pax</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">Luggage Bags</label>
                  <select
                    value={form.luggage}
                    onChange={e => setForm({...form, luggage: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 p-2 rounded-xl text-xs font-bold text-slate-900 outline-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map(n => <option key={n} value={n}>{n} Bags</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">Ski / Snowboard</label>
                  <select
                    value={form.skis}
                    onChange={e => setForm({...form, skis: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 p-2 rounded-xl text-xs font-bold text-slate-900 outline-none"
                  >
                    <option value="Yes">Yes (Skis)</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">Special Notes / Child Seats</label>
                <textarea
                  rows={2}
                  value={form.notes}
                  onChange={e => setForm({...form, notes: e.target.value})}
                  placeholder="Free child seats, oversized luggage, multiple stops..."
                  className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs font-medium text-slate-900 outline-none focus:border-[#D97706] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 bg-[#0A192F] hover:bg-[#D97706] text-white font-extrabold text-xs py-4 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                <span>Request Reservation Voucher</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                <span>✓ 60m Free Waiting Time</span>
                <span>✓ Pay Driver Onboard</span>
              </div>
            </form>
          </div>
        </div>

      </div>

    </div>
  );
};

