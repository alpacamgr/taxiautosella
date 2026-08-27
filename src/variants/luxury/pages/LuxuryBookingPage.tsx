import React, { useState } from 'react';
import { useAppStore } from '../../../store/useAppStore';
import { ArrowRight, MapPin, Calendar, Users, Info, ShieldCheck, Clock } from 'lucide-react';

export const LuxuryBookingPage: React.FC = () => {
  const { openInquiryModal } = useAppStore();
  const [form, setForm] = useState({
    name: '', email: '', phone: '', pickup: '', dropoff: '', date: '', time: '', passengers: '1-2', message: ''
  });
  const [champagne, setChampagne] = useState(false);
  const [skiPassClearance, setSkiPassClearance] = useState(false);
  const [childSeats, setChildSeats] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const addons = [
      champagne ? '• Chilled Champagne on Board (+€95)' : null,
      skiPassClearance ? '• Dolomiti Superski Pass Pick-up & Delivery (Complimentary)' : null,
      childSeats ? '• Certified Child/Infant Safety Seats (Complimentary)' : null,
    ].filter(Boolean).join('\n');

    openInquiryModal(
      'Custom VIP Transfer Inquiry',
      `Guest Name: ${form.name || 'Guest'}\nPhone: ${form.phone || 'N/A'}\nEmail: ${form.email || 'N/A'}\nPick-Up: ${form.pickup}\nDrop-Off: ${form.dropoff}\nDate: ${form.date}\nPassengers: ${form.passengers}\n${addons ? `VIP Add-ons:\n${addons}\n` : ''}Special Notes: ${form.message || 'None'}`
    );
  };

  const airports = [
    { name: 'Bolzano (BZO)', price: 'from €110', time: '45m', dist: '42 km' },
    { name: 'Innsbruck (INN)', price: 'from €240', time: '1h 30m', dist: '120 km' },
    { name: 'Verona (VRN)', price: 'from €340', time: '2h 05m', dist: '190 km' },
    { name: 'Venice Marco Polo (VCE)', price: 'from €440', time: '3h 15m', dist: '270 km' },
    { name: 'Treviso (TSF)', price: 'from €440', time: '3h 05m', dist: '260 km' },
    { name: 'Bergamo Orio al Serio (BGY)', price: 'from €480', time: '3h 10m', dist: '270 km' },
    { name: 'Munich (MUC)', price: 'from €480', time: '3h 30m', dist: '310 km' },
    { name: 'Bologna (BLQ)', price: 'from €480', time: '3h 15m', dist: '280 km' },
    { name: 'Milan Linate/Malpensa (LIN/MXP)', price: 'from €540', time: '3h 55m', dist: '350 km' },
  ];

  const stations = [
    { name: 'Ponte Gardena / Waidbruck', price: 'from €60', time: '25m', dist: '18 km' },
    { name: 'Chiusa / Klausen', price: 'from €70', time: '30m', dist: '22 km' },
    { name: 'Bressanone / Brixen', price: 'from €95', time: '40m', dist: '32 km' },
    { name: 'Bolzano / Bozen', price: 'from €110', time: '45m', dist: '40 km' },
  ];

  return (
    <div className="min-h-screen bg-[#F8F6F0] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <header className="mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#8C6D46] block mb-2">
            Transparent Fixed Pricing
          </span>
          <h1 className="font-editorial text-5xl lg:text-7xl font-normal text-[#0E1117] mb-6">
            Prices & <span className="italic text-[#8C6D46]">Booking</span>
          </h1>
          <p className="text-[#0E1117]/80 text-lg max-w-2xl font-light leading-relaxed">
            Secure your premium transfer to Val Gardena. We offer transparent, fixed-rate pricing for all major Alpine gateways with our signature white-glove service.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* PRICING TABLES */}
          <div className="lg:col-span-7 space-y-16">
            <section>
              <div className="flex items-center justify-between border-b border-[#0E1117]/10 pb-4 mb-6">
                <h2 className="font-editorial text-3xl text-[#0E1117]">Airport Transfers</h2>
                <span className="text-xs text-[#0E1117]/60 font-medium">Click any route for instant quote</span>
              </div>
              <div className="grid gap-3">
                {airports.map((ap) => (
                  <div 
                    key={ap.name} 
                    onClick={() => openInquiryModal('Gateway Transfer', `Route: ${ap.name} ➔ Val Gardena\nDistance: ${ap.dist}\nApprox Duration: ${ap.time}\nRate: ${ap.price}\n\nPlease confirm availability and vehicle choice.`)}
                    className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-[#0E1117]/10 hover:border-[#8C6D46] hover:shadow-md cursor-pointer transition-all group"
                  >
                    <div>
                      <h4 className="font-semibold text-sm text-[#0E1117] group-hover:text-[#8C6D46] transition-colors">{ap.name}</h4>
                      <p className="text-xs text-[#0E1117]/60 mt-1 font-medium">{ap.dist} • Approx {ap.time}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-editorial text-[#0E1117] font-bold group-hover:text-[#8C6D46] transition-colors">{ap.price}</div>
                      <div className="text-[10px] uppercase tracking-wider text-[#0E1117]/60 font-semibold">Fixed All-Inclusive</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between border-b border-[#0E1117]/10 pb-4 mb-6">
                <h2 className="font-editorial text-3xl text-[#0E1117]">Railway Stations</h2>
                <span className="text-xs text-[#0E1117]/60 font-medium">South Tyrol railway connections</span>
              </div>
              <div className="grid gap-3">
                {stations.map((st) => (
                  <div 
                    key={st.name} 
                    onClick={() => openInquiryModal('Train Station Transfer', `Route: ${st.name} ➔ Val Gardena\nDistance: ${st.dist}\nApprox Duration: ${st.time}\nRate: ${st.price}\n\nPlease confirm arrival time.`)}
                    className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-[#0E1117]/10 hover:border-[#8C6D46] hover:shadow-md cursor-pointer transition-all group"
                  >
                    <div>
                      <h4 className="font-semibold text-sm text-[#0E1117] group-hover:text-[#8C6D46] transition-colors">{st.name}</h4>
                      <p className="text-xs text-[#0E1117]/60 mt-1 font-medium">{st.dist} • Approx {st.time}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-editorial text-[#0E1117] font-bold group-hover:text-[#8C6D46] transition-colors">{st.price}</div>
                      <div className="text-[10px] uppercase tracking-wider text-[#0E1117]/60 font-semibold">Fixed Rate</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-editorial text-3xl text-[#0E1117] mb-6 border-b border-[#0E1117]/10 pb-4">Hourly Chauffeur Rental</h2>
              <div className="p-6 bg-[#0E1117] text-[#F8F6F0] rounded-xl flex items-start gap-4 shadow-xl border border-white/10">
                <Info className="w-6 h-6 text-[#C5A880] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-base mb-1.5 text-white">Bespoke Hourly VIP Service</h4>
                  <p className="text-sm text-[#F8F6F0]/80 leading-relaxed font-light">
                    For utmost flexibility, reserve a dedicated chauffeur by the hour for shopping in Milan or Verona, corporate roadshows, or customized Dolomites sightseeing. Minimum 4 hours. Transparent quote upon request.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* INQUIRY FORM */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 bg-white p-8 rounded-2xl shadow-xl border border-[#0E1117]/10">
              <div className="border-b border-[#0E1117]/10 pb-4 mb-6">
                <h3 className="font-editorial text-2xl text-[#0E1117]">Formal Transfer Request</h3>
                <p className="text-xs text-[#0E1117]/70 font-medium mt-1">
                  Direct dispatch to Val Gardena drivers • Fast reply
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#0E1117]/75 font-semibold mb-1.5">Full Name</label>
                    <input 
                      type="text" 
                      value={form.name}
                      onChange={e => setForm({...form, name: e.target.value})}
                      className="w-full bg-[#F8F6F0] border border-[#0E1117]/15 p-3 rounded-lg text-sm text-[#0E1117] outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880]" 
                      placeholder="e.g. Lord Davies"
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#0E1117]/75 font-semibold mb-1.5">Mobile Phone</label>
                    <input 
                      type="tel" 
                      value={form.phone}
                      onChange={e => setForm({...form, phone: e.target.value})}
                      className="w-full bg-[#F8F6F0] border border-[#0E1117]/15 p-3 rounded-lg text-sm text-[#0E1117] outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880]" 
                      placeholder="+44 / +49..."
                      required 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#0E1117]/75 font-semibold mb-1.5">Email Address</label>
                  <input 
                    type="email" 
                    value={form.email}
                    onChange={e => setForm({...form, email: e.target.value})}
                    className="w-full bg-[#F8F6F0] border border-[#0E1117]/15 p-3 rounded-lg text-sm text-[#0E1117] outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880]" 
                    placeholder="name@company.com"
                    required 
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#0E1117]/75 font-semibold mb-1.5">Pick-up Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3.5 w-4 h-4 text-[#C5A880]" />
                      <input 
                        type="text" 
                        value={form.pickup} 
                        onChange={e => setForm({...form, pickup: e.target.value})} 
                        className="w-full bg-[#F8F6F0] border border-[#0E1117]/15 p-3 pl-10 rounded-lg text-sm text-[#0E1117] outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880]" 
                        required 
                        placeholder="Airport / Station" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#0E1117]/75 font-semibold mb-1.5">Destination</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3.5 w-4 h-4 text-[#C5A880]" />
                      <input 
                        type="text" 
                        value={form.dropoff} 
                        onChange={e => setForm({...form, dropoff: e.target.value})} 
                        className="w-full bg-[#F8F6F0] border border-[#0E1117]/15 p-3 pl-10 rounded-lg text-sm text-[#0E1117] outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880]" 
                        required 
                        placeholder="Val Gardena Hotel" 
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#0E1117]/75 font-semibold mb-1.5">Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3.5 w-4 h-4 text-[#C5A880]" />
                      <input 
                        type="date" 
                        value={form.date} 
                        onChange={e => setForm({...form, date: e.target.value})} 
                        className="w-full bg-[#F8F6F0] border border-[#0E1117]/15 p-3 pl-10 rounded-lg text-xs font-semibold text-[#0E1117] outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880]" 
                        required 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#0E1117]/75 font-semibold mb-1.5">Passengers</label>
                    <div className="relative">
                      <Users className="absolute left-3 top-3.5 w-4 h-4 text-[#C5A880]" />
                      <select 
                        value={form.passengers} 
                        onChange={e => setForm({...form, passengers: e.target.value})} 
                        className="w-full bg-[#F8F6F0] border border-[#0E1117]/15 p-3 pl-10 rounded-lg text-xs font-semibold text-[#0E1117] outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] cursor-pointer"
                      >
                        <option value="1-2">1–2 Passengers (Sedan)</option>
                        <option value="3-4">3–4 Passengers (SUV/Van)</option>
                        <option value="5-7">5–7 (V-Class VIP)</option>
                        <option value="8">8 Passengers (Vito 4x4)</option>
                        <option value="9+">9+ Group Coach</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* VIP Concierge Add-ons */}
                <div className="p-4 border border-[#8C6D46]/20 bg-[#8C6D46]/5 rounded-xl space-y-2.5">
                  <span className="block text-[11px] uppercase tracking-wider text-[#0E1117] font-bold">
                    VIP Concierge Add-ons
                  </span>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      checked={champagne}
                      onChange={e => setChampagne(e.target.checked)}
                      className="accent-[#8C6D46] w-4 h-4 cursor-pointer" 
                    />
                    <span className="text-xs font-medium text-[#0E1117]/85 group-hover:text-[#8C6D46] transition-colors">
                      Chilled Champagne (Veuve Clicquot) on Board (+€95)
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      checked={skiPassClearance}
                      onChange={e => setSkiPassClearance(e.target.checked)}
                      className="accent-[#8C6D46] w-4 h-4 cursor-pointer" 
                    />
                    <span className="text-xs font-medium text-[#0E1117]/85 group-hover:text-[#8C6D46] transition-colors">
                      Dolomiti Superski Pass Pick-up & Delivery (Complimentary)
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      checked={childSeats}
                      onChange={e => setChildSeats(e.target.checked)}
                      className="accent-[#8C6D46] w-4 h-4 cursor-pointer" 
                    />
                    <span className="text-xs font-medium text-[#0E1117]/85 group-hover:text-[#8C6D46] transition-colors">
                      Certified Child / Infant Safety Seats (Complimentary)
                    </span>
                  </label>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#0E1117] hover:bg-[#8C6D46] text-[#F8F6F0] hover:text-white transition-all py-4 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Submit VIP Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

