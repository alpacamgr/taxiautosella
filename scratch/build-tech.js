const fs = require('fs');
const path = require('path');

const techDir = path.join(__dirname, 'src/variants/tech');
const pagesDir = path.join(techDir, 'pages');
const compDir = path.join(techDir, 'components');

const files = {};

files['TechLayout.tsx'] = `import React from 'react';
import { Outlet } from 'react-router-dom';
import { TechNav } from './components/TechNav';

export const TechLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#161A1D] flex flex-col font-['Outfit',sans-serif] selection:bg-[#C84B31] selection:text-[#FAF7F2]">
      <TechNav />
      <div className="flex-1 flex flex-col">
        <Outlet />
      </div>
      <footer className="bg-[#132A1E] text-[#F0EBE1] py-16 px-6 border-t-[8px] border-[#C84B31] mt-auto relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <svg width="200" height="200" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0L100 50L50 100L0 50Z" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#C84B31] text-[#FAF7F2] rounded flex items-center justify-center font-bold text-xl tracking-tighter">AS</div>
              <span className="font-bold text-2xl tracking-tight text-[#FAF7F2]">Auto Sella</span>
            </div>
            <p className="text-[#F0EBE1]/70 max-w-sm text-sm leading-relaxed mb-4">
              Gran Turismo & Alpine Heritage Transit. Serving the Dolomites with timeless reliability and classic European transit craft since our inception.
            </p>
            <p className="text-[#F0EBE1]/50 text-xs tabular-nums">VAT: IT01707460216</p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-[#FAF7F2] uppercase tracking-widest text-xs mb-2">Transit Dispatch</h4>
            <a href="tel:+390471790033" className="hover:text-[#C84B31] transition-colors text-lg tabular-nums flex items-center gap-2">
              <span className="text-[#C84B31]">T.</span> (+39) 0471 790033
            </a>
            <a href="mailto:info@taxiautosella.it" className="hover:text-[#C84B31] transition-colors flex items-center gap-2">
              <span className="text-[#C84B31]">E.</span> info@taxiautosella.it
            </a>
            <p className="text-[#F0EBE1]/70 text-sm mt-4">
              Str. Gherdeina 7/A<br />
              I-39047 Santa Cristina (BZ)<br />
              Val Gardena, Dolomites, Italy
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-2 text-[#F0EBE1]/50 text-xs justify-end">
            <p>© {new Date().getFullYear()} Taxi Auto Sella Consortium.</p>
            <p>Dolomiti Gran Turismo Route Authority.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
`;

files['components/TechNav.tsx'] = `import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAppStore } from '../../../store/useAppStore';
import { Map, Ticket, Phone } from 'lucide-react';

export const TechNav: React.FC = () => {
  const { openBookingModal } = useAppStore();

  const links = [
    { path: '/tech', label: 'Transit Hub' },
    { path: '/tech/booking', label: 'Tickets & Routes' },
    { path: '/tech/fleet', label: 'Motor Fleet' },
    { path: '/tech/services', label: 'Mobility Services' },
    { path: '/tech/tours', label: 'Alpine Excursions' },
    { path: '/tech/faq', label: 'Information' },
    { path: '/tech/members', label: 'Consortium' },
  ];

  return (
    <nav className="w-full bg-[#FAF7F2] text-[#161A1D] border-b-2 border-[#132A1E]/10 sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/tech" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-[#132A1E] text-[#FAF7F2] flex items-center justify-center rounded font-bold text-lg group-hover:bg-[#C84B31] transition-colors">
            AS
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-extrabold text-xl tracking-tight uppercase">Auto Sella</span>
            <span className="text-[9px] font-bold tracking-widest text-[#C84B31] uppercase mt-1">Dolomiti Gran Turismo</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1 bg-[#F0EBE1] p-1 rounded-md">
          {links.map((l) => (
            <NavLink
              key={l.path}
              to={l.path}
              end={l.path === '/tech'}
              className={({ isActive }) =>
                \`px-4 py-2 rounded text-sm font-semibold tracking-tight transition-all \${
                  isActive 
                    ? 'bg-[#132A1E] text-[#FAF7F2] shadow-sm' 
                    : 'text-[#161A1D]/70 hover:text-[#161A1D] hover:bg-[#FAF7F2]/50'
                }\`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="tel:+390471790033"
            className="hidden sm:flex items-center gap-2 text-sm font-bold text-[#132A1E] hover:text-[#C84B31] transition-colors tabular-nums"
          >
            <Phone className="w-4 h-4" />
            +39 0471 790033
          </a>
          <button
            onClick={() => openBookingModal()}
            className="px-5 py-2.5 bg-[#C84B31] text-[#FAF7F2] font-bold text-sm rounded shadow-[4px_4px_0px_#132A1E] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_#132A1E] active:translate-y-[4px] active:translate-x-[4px] active:shadow-none transition-all flex items-center gap-2 uppercase tracking-wide"
          >
            <Ticket className="w-4 h-4" />
            Book Ticket
          </button>
        </div>
      </div>
    </nav>
  );
};
`;

files['pages/TechHome.tsx'] = `import React from 'react';
import { useAppStore } from '../../../store/useAppStore';
import { ArrowRight, Mountain, MapPin, Compass, Clock, Bus } from 'lucide-react';

export const TechHome: React.FC = () => {
  const { openBookingModal } = useAppStore();

  return (
    <div className="flex-1 bg-[#FAF7F2]">
      {/* Hero Header */}
      <header className="relative bg-[#132A1E] text-[#FAF7F2] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#F0EBE1_1px,_transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF7F2]/10 border border-[#FAF7F2]/20 rounded-full text-xs font-bold uppercase tracking-widest text-[#F0EBE1]">
              <Compass className="w-4 h-4 text-[#C84B31]" />
              Alpine Heritage Transit
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.95]">
              SOUTH TYROLEAN<br />
              <span className="text-[#C84B31]">MOUNTAIN</span><br />
              TRANSPORT.
            </h1>
            <p className="text-[#F0EBE1]/80 text-lg md:text-xl max-w-md font-medium leading-relaxed">
              Timeless European transit craft meeting precision routing. Fixed-rate Gran Turismo transfers to Val Gardena and the Dolomites since 1980.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button onClick={() => openBookingModal()} className="px-8 py-4 bg-[#FAF7F2] text-[#132A1E] font-bold text-sm rounded shadow-[4px_4px_0px_#C84B31] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_#C84B31] transition-all flex items-center gap-2 uppercase tracking-wide">
                Issue Transit Ticket <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-[#FAF7F2] p-8 rounded-lg shadow-2xl text-[#161A1D] border border-[#132A1E]/10 transform md:rotate-2">
              <div className="border-b-2 border-[#161A1D]/10 pb-4 mb-6 flex justify-between items-center">
                <h3 className="font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                  <Bus className="w-5 h-5 text-[#C84B31]" /> Route Ticketing
                </h3>
                <span className="text-xs font-bold bg-[#132A1E] text-[#FAF7F2] px-2 py-1 rounded">24/7 LIVE</span>
              </div>
              
              <div className="space-y-6">
                <div className="flex border-l-2 border-[#C84B31] pl-4 flex-col gap-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#161A1D]/50">Departure Hub</label>
                  <div className="font-bold text-lg flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#C84B31]" /> 
                    <span>Innsbruck / Munich / Verona</span>
                  </div>
                </div>
                
                <div className="h-4 border-l-2 border-dashed border-[#161A1D]/20 ml-[7px]"></div>
                
                <div className="flex border-l-2 border-[#132A1E] pl-4 flex-col gap-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#161A1D]/50">Alpine Destination</label>
                  <div className="font-bold text-lg flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-[#132A1E]" /> 
                    <span>Val Gardena (Ortisei, Selva)</span>
                  </div>
                </div>

                <button onClick={() => openBookingModal()} className="w-full py-4 mt-4 bg-[#132A1E] text-[#FAF7F2] font-bold uppercase tracking-widest text-sm hover:bg-[#C84B31] transition-colors rounded">
                  View Route Timetables
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats/Milestones */}
      <section className="border-b border-[#132A1E]/10 bg-[#F0EBE1]">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { v: '25+', l: 'Transit Vehicles' },
            { v: '18', l: 'Member Drivers' },
            { v: '9', l: 'Connected Airports' },
            { v: '24/7', l: 'Central Dispatch' },
          ].map((s, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-black text-[#132A1E] tracking-tighter tabular-nums">{s.v}</div>
              <div className="text-sm font-bold uppercase tracking-widest text-[#C84B31] mt-2">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-5xl font-black text-[#132A1E] uppercase tracking-tighter leading-tight">
              The Alpine<br />Transit Standard.
            </h2>
            <p className="text-lg text-[#161A1D]/70 leading-relaxed font-medium">
              We operate a unified fleet of premium Gran Turismo coaches, minivans, and limousines. 
              Our drivers are local mountaineers of the road, expertly trained to navigate the Dolomite passes in deep winter snow and high summer sun.
            </p>
            <ul className="space-y-4 mt-8">
              {['Fixed seasonal route pricing', 'Luggage & ski trailer deployment', 'Real-time flight radar tracking'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-bold text-[#161A1D]">
                  <div className="w-6 h-6 rounded-full bg-[#C84B31]/20 flex items-center justify-center text-[#C84B31]">
                    <Clock className="w-3 h-3" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-full bg-[#132A1E] rounded-xl p-8 text-[#FAF7F2] shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-12 opacity-5">
               <Mountain className="w-64 h-64" />
             </div>
             <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-[#F0EBE1] relative z-10">Winter & Summer Operations</h3>
             <div className="space-y-6 relative z-10">
               <div className="bg-[#FAF7F2]/5 p-4 rounded border border-[#FAF7F2]/10">
                 <h4 className="font-bold text-[#C84B31] uppercase tracking-widest text-sm mb-2">Winter Ski Transit</h4>
                 <p className="text-[#F0EBE1]/80 text-sm">Direct connections from arrivals to your hotel boot room. Vehicles equipped with winter treads and ski-boxes.</p>
               </div>
               <div className="bg-[#FAF7F2]/5 p-4 rounded border border-[#FAF7F2]/10">
                 <h4 className="font-bold text-[#C84B31] uppercase tracking-widest text-sm mb-2">Summer Gran Turismo</h4>
                 <p className="text-[#F0EBE1]/80 text-sm">Bike-shuttles, hiking trailhead drop-offs, and open-road Dolomite sightseeing tours.</p>
               </div>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
};
`;

files['pages/TechBookingPage.tsx'] = `import React from 'react';
import { useAppStore } from '../../../store/useAppStore';
import { Plane, Train, MapPin, Ticket, ArrowRight, Shield } from 'lucide-react';

export const TechBookingPage: React.FC = () => {
  const { openBookingModal } = useAppStore();

  const airports = [
    { name: 'Innsbruck (INN)', price: 'from 230€' },
    { name: 'Verona (VRN)', price: 'from 280€' },
    { name: 'Munich (MUC)', price: 'from 450€' },
    { name: 'Venice (VCE / TSF)', price: 'from 420€' },
    { name: 'Milan (MXP / LIN)', price: 'from 550€' },
    { name: 'Bergamo (BGY)', price: 'from 480€' }
  ];

  const stations = [
    { name: 'Bolzano / Bozen', price: 'from 90€' },
    { name: 'Bressanone / Brixen', price: 'from 80€' },
    { name: 'Ponte Gardena', price: 'from 50€' },
    { name: 'Chiusa / Klausen', price: 'from 60€' }
  ];

  return (
    <div className="flex-1 bg-[#FAF7F2] py-12 md:py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-16">
        
        <header className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#132A1E]/10 rounded-full text-xs font-bold uppercase tracking-widest text-[#132A1E]">
            <Ticket className="w-4 h-4 text-[#C84B31]" />
            Ticketing & Tariffs
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#132A1E] uppercase tracking-tighter">
            Route Pricing.
          </h1>
          <p className="text-lg text-[#161A1D]/70 max-w-2xl mx-auto font-medium">
            Fixed Gran Turismo transit fares to Val Gardena. Transparent pricing with no hidden dispatch fees.
          </p>
        </header>

        <div className="bg-[#132A1E] text-[#FAF7F2] rounded-xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center gap-8 justify-between">
          <div className="space-y-4">
            <h2 className="text-3xl font-black uppercase tracking-tight">Issue a Ticket Now</h2>
            <p className="text-[#F0EBE1]/80 max-w-md">Our dispatch system is ready. Book your Gran Turismo transfer instantly online.</p>
            <div className="flex items-center gap-4 text-sm font-bold text-[#C84B31]">
              <Shield className="w-4 h-4" /> Secure Payment • Free Cancellation
            </div>
          </div>
          <button onClick={() => openBookingModal()} className="w-full md:w-auto px-8 py-5 bg-[#C84B31] text-[#FAF7F2] font-bold text-lg rounded shadow-[4px_4px_0px_#F0EBE1] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_#F0EBE1] transition-all flex items-center justify-center gap-2 uppercase tracking-wider">
            Open Booking Engine <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-[#132A1E] uppercase flex items-center gap-3 border-b-2 border-[#132A1E]/10 pb-4">
              <Plane className="w-6 h-6 text-[#C84B31]" /> Airport Routes
            </h3>
            <ul className="space-y-3">
              {airports.map((a, i) => (
                <li key={i} className="flex justify-between items-center p-4 bg-[#F0EBE1] rounded border border-[#132A1E]/5 hover:border-[#C84B31] transition-colors">
                  <span className="font-bold text-[#161A1D]">{a.name}</span>
                  <span className="font-black text-[#132A1E] tabular-nums">{a.price}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-black text-[#132A1E] uppercase flex items-center gap-3 border-b-2 border-[#132A1E]/10 pb-4">
              <Train className="w-6 h-6 text-[#C84B31]" /> Railway Routes
            </h3>
            <ul className="space-y-3">
              {stations.map((s, i) => (
                <li key={i} className="flex justify-between items-center p-4 bg-[#F0EBE1] rounded border border-[#132A1E]/5 hover:border-[#C84B31] transition-colors">
                  <span className="font-bold text-[#161A1D]">{s.name}</span>
                  <span className="font-black text-[#132A1E] tabular-nums">{s.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-[#F0EBE1] p-6 rounded-lg border-l-4 border-[#C84B31] text-[#161A1D]/80 text-sm font-medium">
          <strong className="text-[#132A1E] uppercase block mb-2">Transit Note:</strong>
          Prices are indicative base fares for 1-3 passengers during standard dispatch hours. Fares may vary based on exact vehicle class, night service (22:00 - 06:00), or excess luggage requirements (e.g., ski boxes).
        </div>

      </div>
    </div>
  );
};
`;

files['pages/TechFleetPage.tsx'] = `import React from 'react';
import { Bus, Car, Settings, CheckCircle2 } from 'lucide-react';

export const TechFleetPage: React.FC = () => {
  const fleet = [
    { type: 'Gran Turismo Limousine', desc: 'Mercedes E-Class, S-Class, Audi A8. Perfect for 1-3 passengers.' },
    { type: 'Alpine Minivan', desc: 'Mercedes V-Class, VW Multivan. Spacious transit for up to 8 passengers.' },
    { type: 'Transit Coach', desc: 'Mercedes Sprinter. Heavy-duty transit for small groups (9-20 pax).' }
  ];

  return (
    <div className="flex-1 bg-[#FAF7F2] py-12 md:py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-black text-[#132A1E] uppercase tracking-tighter">
            Motor Fleet.
          </h1>
          <p className="text-lg text-[#161A1D]/70 max-w-2xl mx-auto font-medium">
            25 heavily equipped transit vehicles. Maintained to pristine Gran Turismo standards for Dolomite roads.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {fleet.map((f, i) => (
            <div key={i} className="bg-[#F0EBE1] p-8 rounded-xl border-t-4 border-[#132A1E] hover:border-[#C84B31] transition-colors shadow-sm">
              <Car className="w-10 h-10 text-[#C84B31] mb-6" />
              <h3 className="text-xl font-black text-[#132A1E] uppercase mb-3">{f.type}</h3>
              <p className="text-[#161A1D]/70 font-medium leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#132A1E] rounded-xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
          <div className="flex-1 p-10 md:p-16 text-[#FAF7F2] space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF7F2]/10 rounded-full text-xs font-bold uppercase tracking-widest text-[#F0EBE1]">
              <Settings className="w-4 h-4 text-[#C84B31]" />
              Engineering Standard
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">Alpine Ready.</h2>
            <p className="text-[#F0EBE1]/80 text-lg leading-relaxed">
              Every vehicle in the Auto Sella consortium fleet is heavily vetted for mountain operations.
            </p>
            <ul className="space-y-4 pt-4">
              {['Winter tires & snow chains mandatory', 'Ski-box & bike trailer equipped', 'Annual strict maintenance audits', 'Impeccable interior sanitation'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-bold text-[#F0EBE1]">
                  <CheckCircle2 className="w-5 h-5 text-[#C84B31]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-2/5 bg-[#161A1D] flex items-center justify-center p-12 relative overflow-hidden">
             <Bus className="w-48 h-48 text-[#FAF7F2]/5 absolute -right-10 -bottom-10" />
             <div className="text-center relative z-10 space-y-2">
               <div className="text-6xl font-black text-[#FAF7F2]">25</div>
               <div className="text-[#C84B31] font-bold uppercase tracking-widest">Active Units</div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};
`;

files['pages/TechServicesPage.tsx'] = `import React from 'react';
import { Briefcase, Mountain, Users, HeartPulse, Camera, Dog, Wheelchair } from 'lucide-react';

export const TechServicesPage: React.FC = () => {
  const services = [
    { icon: <Mountain />, title: 'Ski Shuttles', desc: 'Direct hotel-to-slope transit. Ski boxes included.' },
    { icon: <Briefcase />, title: 'Corporate Transit', desc: 'VIP dispatch for business retreats and congresses.' },
    { icon: <Wheelchair />, title: 'Accessible Mobility', desc: 'Specially equipped vans for wheelchair access.' },
    { icon: <HeartPulse />, title: 'Medical Transport', desc: 'Discreet clinic visits and non-emergency mobility.' },
    { icon: <Camera />, title: 'Film Production Support', desc: 'Logistics and transit for alpine film crews.' },
    { icon: <Dog />, title: 'Pet Friendly', desc: 'Your animals are welcome in our transit cabins.' }
  ];

  return (
    <div className="flex-1 bg-[#FAF7F2] py-12 md:py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-black text-[#132A1E] uppercase tracking-tighter">
            Mobility Services.
          </h1>
          <p className="text-lg text-[#161A1D]/70 max-w-2xl mx-auto font-medium">
            Beyond airport routes. A full spectrum of specialized alpine transit solutions.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded border border-[#132A1E]/10 hover:shadow-[8px_8px_0px_#132A1E] transition-all group">
              <div className="w-12 h-12 bg-[#F0EBE1] text-[#132A1E] rounded flex items-center justify-center mb-6 group-hover:bg-[#C84B31] group-hover:text-[#FAF7F2] transition-colors">
                {React.cloneElement(s.icon, { className: 'w-6 h-6' })}
              </div>
              <h3 className="text-xl font-black text-[#132A1E] uppercase mb-2">{s.title}</h3>
              <p className="text-[#161A1D]/70 font-medium text-sm">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
`;

files['pages/TechToursPage.tsx'] = `import React from 'react';
import { Map, Compass, Camera } from 'lucide-react';

export const TechToursPage: React.FC = () => {
  const tours = [
    { title: 'Dolomite Passes', desc: 'Sella, Gardena, Pordoi. A Gran Turismo circuit through the UNESCO peaks.' },
    { title: 'Venice Day Trip', desc: 'From the alpine heights to the Grand Canal in complete comfort.' },
    { title: 'Verona & Lake Garda', desc: 'Transit to the Arena di Verona or the shores of Garda.' },
    { title: 'Innsbruck / Cortina', desc: 'Cross-border cultural excursions.' }
  ];

  return (
    <div className="flex-1 bg-[#FAF7F2] py-12 md:py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-16">
        
        <header className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#132A1E] text-[#C84B31] rounded-full mb-4">
            <Compass className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#132A1E] uppercase tracking-tighter">
            Alpine Excursions.
          </h1>
          <p className="text-lg text-[#161A1D]/70 max-w-2xl mx-auto font-medium">
            Private sightseeing dispatch. Curated Gran Turismo routes across Northern Italy and the Alps.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {tours.map((t, i) => (
            <div key={i} className="flex gap-6 bg-[#F0EBE1] p-6 rounded-xl border-l-4 border-[#132A1E]">
              <div className="mt-1">
                <Map className="w-6 h-6 text-[#C84B31]" />
              </div>
              <div>
                <h3 className="text-xl font-black text-[#132A1E] uppercase mb-2">{t.title}</h3>
                <p className="text-[#161A1D]/80 font-medium">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#132A1E] text-center p-12 rounded-xl text-[#FAF7F2] shadow-xl">
          <Camera className="w-12 h-12 text-[#C84B31] mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-4">Custom Itineraries</h2>
          <p className="text-[#F0EBE1]/80 max-w-lg mx-auto mb-8 font-medium">
            Have a specific destination? Our dispatch office will map the route and provide a fixed quote for your private tour.
          </p>
          <a href="mailto:info@taxiautosella.it" className="inline-block px-8 py-4 bg-[#C84B31] text-[#FAF7F2] font-bold uppercase tracking-widest text-sm rounded shadow-[4px_4px_0px_#161A1D] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_#161A1D] transition-all">
            Request Tour Quote
          </a>
        </div>

      </div>
    </div>
  );
};
`;

files['pages/TechFaqPage.tsx'] = `import React from 'react';
import { HelpCircle } from 'lucide-react';

export const TechFaqPage: React.FC = () => {
  const faqs = [
    { q: 'How do I book a transit ticket?', a: 'Use our online booking engine for instant quotes, or call our 24/7 dispatch hotline directly.' },
    { q: 'Do you track delayed flights?', a: 'Yes. Our dispatch monitors live radar for all incoming flights. Drivers adjust their arrival automatically.' },
    { q: 'Is luggage transport extra?', a: 'Standard luggage is included. Inform us of oversized items (bikes, ski bags) so we deploy the correct trailer.' },
    { q: 'Are child seats available?', a: 'Yes, provided free of charge. Please specify the age and weight of the child during ticketing.' }
  ];

  return (
    <div className="flex-1 bg-[#FAF7F2] py-12 md:py-20 px-6">
      <div className="max-w-3xl mx-auto space-y-12">
        
        <header className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-black text-[#132A1E] uppercase tracking-tighter flex items-center gap-4">
            <HelpCircle className="w-10 h-10 text-[#C84B31]" />
            Information.
          </h1>
        </header>

        <div className="space-y-6">
          {faqs.map((f, i) => (
            <div key={i} className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-[#132A1E]/10">
              <h3 className="text-lg font-black text-[#132A1E] mb-3 uppercase tracking-tight">{f.q}</h3>
              <p className="text-[#161A1D]/70 font-medium leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
`;

files['pages/TechMembersPage.tsx'] = `import React from 'react';
import { Users, Award } from 'lucide-react';

export const TechMembersPage: React.FC = () => {
  const sponsors = ['Val Gardena Tourism', 'Elikos Helicopter', 'Dolomiti Sportclinic', 'Intersport Rent'];

  return (
    <div className="flex-1 bg-[#FAF7F2] py-12 md:py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-16">
        
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-black text-[#132A1E] uppercase tracking-tighter">
            Consortium.
          </h1>
          <p className="text-lg text-[#161A1D]/70 max-w-2xl mx-auto font-medium">
            18 independent owner-operators united under the Auto Sella Gran Turismo standard.
          </p>
        </header>

        <div className="bg-[#132A1E] text-[#FAF7F2] p-8 md:p-12 rounded-xl text-center shadow-xl">
          <Users className="w-16 h-16 text-[#C84B31] mx-auto mb-6" />
          <h2 className="text-2xl font-black uppercase tracking-widest mb-4">The Driver Network</h2>
          <p className="text-[#F0EBE1]/80 max-w-xl mx-auto font-medium">
            Our members are locals. They know every turn of the Dolomite passes, speak multiple languages, and maintain their vehicles to rigorous consortium specifications.
          </p>
        </div>

        <div className="space-y-8">
          <div className="flex items-center gap-4 border-b-2 border-[#132A1E]/10 pb-4">
            <Award className="w-8 h-8 text-[#C84B31]" />
            <h3 className="text-2xl font-black text-[#132A1E] uppercase">Official Partners</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sponsors.map((s, i) => (
              <div key={i} className="bg-[#F0EBE1] p-6 text-center rounded font-bold text-[#132A1E] border border-[#132A1E]/5 flex items-center justify-center min-h-[100px]">
                {s}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
`;

for (const [relativePath, content] of Object.entries(files)) {
  const fullPath = path.join(techDir, relativePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(\`Wrote \${fullPath}\`);
}
