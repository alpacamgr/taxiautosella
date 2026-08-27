import React, { useState } from 'react';
import { useAppStore } from '../../../store/useAppStore';
import { ArrowRight, MapPin, Calendar, Users, Info } from 'lucide-react';

export const LuxuryBookingPage: React.FC = () => {
  const { openInquiryModal } = useAppStore();
  const [form, setForm] = useState({
    name: '', email: '', phone: '', pickup: '', dropoff: '', date: '', time: '', passengers: '1', message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openInquiryModal('Custom Transfer Inquiry', `From: ${form.pickup} to ${form.dropoff} on ${form.date}. Passengers: ${form.passengers}.`);
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
          <h1 className="font-editorial text-5xl lg:text-7xl font-normal text-[#0E1117] mb-6">
            Prices & <span className="italic text-[#C5A880]">Booking</span>
          </h1>
          <p className="text-[#0E1117]/70 text-lg max-w-2xl font-light">
            Secure your premium transfer to Val Gardena. We offer transparent, fixed-rate pricing for all major Alpine gateways with our signature white-glove service.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* PRICING TABLES */}
          <div className="lg:col-span-7 space-y-16">
            <section>
              <h2 className="font-editorial text-3xl text-[#0E1117] mb-6 border-b border-[#0E1117]/10 pb-4">Airport Transfers</h2>
              <div className="grid gap-3">
                {airports.map((ap) => (
                  <div key={ap.name} className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-[#0E1117]/5">
                    <div>
                      <h4 className="font-medium text-[#0E1117]">{ap.name}</h4>
                      <p className="text-xs text-[#0E1117]/50 mt-1">{ap.dist} • Approx {ap.time}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-editorial text-[#C5A880]">{ap.price}</div>
                      <div className="text-[10px] uppercase tracking-widest text-[#0E1117]/40">Fixed Rate</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-editorial text-3xl text-[#0E1117] mb-6 border-b border-[#0E1117]/10 pb-4">Train Stations</h2>
              <div className="grid gap-3">
                {stations.map((st) => (
                  <div key={st.name} className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-[#0E1117]/5">
                    <div>
                      <h4 className="font-medium text-[#0E1117]">{st.name}</h4>
                      <p className="text-xs text-[#0E1117]/50 mt-1">{st.dist} • Approx {st.time}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-editorial text-[#C5A880]">{st.price}</div>
                      <div className="text-[10px] uppercase tracking-widest text-[#0E1117]/40">Fixed Rate</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-editorial text-3xl text-[#0E1117] mb-6 border-b border-[#0E1117]/10 pb-4">Hourly Chauffeur Rental</h2>
              <div className="p-6 bg-[#0E1117] text-[#F8F6F0] rounded-xl flex items-start gap-4">
                <Info className="w-6 h-6 text-[#C5A880] flex-shrink-0" />
                <div>
                  <h4 className="font-medium mb-2">Bespoke Hourly Service</h4>
                  <p className="text-sm text-[#F8F6F0]/70 leading-relaxed">
                    For utmost flexibility, reserve a chauffeur by the hour for shopping in Milan, business meetings, or customized sightseeing. Minimum 4 hours. Pricing upon request.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* INQUIRY FORM */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 bg-white p-8 rounded-2xl shadow-xl border border-[#0E1117]/10">
              <h3 className="font-editorial text-2xl text-[#0E1117] mb-8">Formal Inquiry</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-[#0E1117]/50 font-semibold mb-2">Name</label>
                    <input type="text" className="w-full bg-[#F8F6F0] border-none p-3 rounded-lg text-sm outline-none focus:ring-1 focus:ring-[#C5A880]" required />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-[#0E1117]/50 font-semibold mb-2">Phone</label>
                    <input type="tel" className="w-full bg-[#F8F6F0] border-none p-3 rounded-lg text-sm outline-none focus:ring-1 focus:ring-[#C5A880]" required />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-widest text-[#0E1117]/50 font-semibold mb-2">Email</label>
                  <input type="email" className="w-full bg-[#F8F6F0] border-none p-3 rounded-lg text-sm outline-none focus:ring-1 focus:ring-[#C5A880]" required />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-[#0E1117]/50 font-semibold mb-2">Pick-up</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-4 h-4 text-[#C5A880]" />
                      <input type="text" value={form.pickup} onChange={e => setForm({...form, pickup: e.target.value})} className="w-full bg-[#F8F6F0] border-none p-3 pl-10 rounded-lg text-sm outline-none focus:ring-1 focus:ring-[#C5A880]" required placeholder="Location" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-[#0E1117]/50 font-semibold mb-2">Drop-off</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-4 h-4 text-[#C5A880]" />
                      <input type="text" value={form.dropoff} onChange={e => setForm({...form, dropoff: e.target.value})} className="w-full bg-[#F8F6F0] border-none p-3 pl-10 rounded-lg text-sm outline-none focus:ring-1 focus:ring-[#C5A880]" required placeholder="Location" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-[#0E1117]/50 font-semibold mb-2">Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 w-4 h-4 text-[#C5A880]" />
                      <input type="date" value={form.date} onChange={e => setForm({...form, date: e.target.value})} className="w-full bg-[#F8F6F0] border-none p-3 pl-10 rounded-lg text-sm outline-none focus:ring-1 focus:ring-[#C5A880]" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-[#0E1117]/50 font-semibold mb-2">Passengers</label>
                    <div className="relative">
                      <Users className="absolute left-3 top-3 w-4 h-4 text-[#C5A880]" />
                      <select value={form.passengers} onChange={e => setForm({...form, passengers: e.target.value})} className="w-full bg-[#F8F6F0] border-none p-3 pl-10 rounded-lg text-sm outline-none focus:ring-1 focus:ring-[#C5A880]">
                        <option>1-2</option>
                        <option>3-4</option>
                        <option>5-8</option>
                        <option>9+</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-widest text-[#0E1117]/50 font-semibold mb-2">Special Requirements</label>
                  <textarea rows={3} className="w-full bg-[#F8F6F0] border-none p-3 rounded-lg text-sm outline-none focus:ring-1 focus:ring-[#C5A880]" placeholder="Child seats, extra luggage, etc."></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#0E1117] hover:bg-[#C5A880] text-[#F8F6F0] hover:text-[#0E1117] transition-colors py-4 rounded-lg font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2"
                >
                  <span>Submit Inquiry</span>
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
