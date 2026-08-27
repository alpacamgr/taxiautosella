import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { TechNav } from './components/TechNav';
import { Phone, Mail, MapPin, ShieldCheck, MessageSquare } from 'lucide-react';

export const TechLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col font-sans selection:bg-[#D97706] selection:text-white">
      {/* Navigation */}
      <TechNav />

      {/* Page Content */}
      <div className="flex-1">
        <Outlet />
      </div>

      {/* Modern Grand Consortium Footer */}
      <footer className="bg-[#0A192F] text-slate-300 pt-16 pb-12 px-4 sm:px-8 lg:px-16 text-xs border-t border-slate-800 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand & Consortium */}
          <div className="space-y-4">
            <img src="/images/brand/logo.svg" alt="Taxi Auto Sella Logo" className="h-7 w-auto object-contain brightness-110" />
            <p className="text-slate-400 leading-relaxed text-xs font-normal">
              Consorzio Taxi Auto Sella is the primary passenger transport consortium in Val Gardena, operating 25 Mercedes 4MATIC vehicles driven by 18 native mountain chauffeurs.
            </p>
            <div className="pt-2 text-slate-400 space-y-1 text-[11px]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>Str. Gherdeina 7/A, I-39047 Santa Cristina (BZ)</span>
              </div>
              <p>VAT ID / P.IVA: IT01707460216 • REA: BZ-142857</p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-extrabold text-sm text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Consortium Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li><Link to="/tech/booking" className="hover:text-[#F59E0B] transition-colors">Airport & Rail Fixed Rates</Link></li>
              <li><Link to="/tech/fleet" className="hover:text-[#F59E0B] transition-colors">25-Vehicle Fleet Catalog</Link></li>
              <li><Link to="/tech/services" className="hover:text-[#F59E0B] transition-colors">Ski Shuttles & Night Taxis</Link></li>
              <li><Link to="/tech/tours" className="hover:text-[#F59E0B] transition-colors">Organised Dolomite Day Tours</Link></li>
              <li><Link to="/tech/members" className="hover:text-[#F59E0B] transition-colors">18 Native Chauffeurs & Partners</Link></li>
              <li><Link to="/tech/faq" className="hover:text-[#F59E0B] transition-colors">Questions & Travel Policies</Link></li>
            </ul>
          </div>

          {/* Col 3: Key Gateways */}
          <div>
            <h4 className="font-extrabold text-sm text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Major Airport Connections
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex justify-between">
                <span>Innsbruck Airport (INN)</span>
                <span className="font-bold text-slate-300">1h 30m</span>
              </li>
              <li className="flex justify-between">
                <span>Verona Catullo (VRN)</span>
                <span className="font-bold text-slate-300">2h 05m</span>
              </li>
              <li className="flex justify-between">
                <span>Munich Airport (MUC)</span>
                <span className="font-bold text-slate-300">3h 30m</span>
              </li>
              <li className="flex justify-between">
                <span>Venice Marco Polo (VCE)</span>
                <span className="font-bold text-slate-300">3h 15m</span>
              </li>
              <li className="flex justify-between">
                <span>Milan Malpensa (MXP)</span>
                <span className="font-bold text-slate-300">3h 55m</span>
              </li>
              <li className="flex justify-between">
                <span>Bolzano Airport (BZO)</span>
                <span className="font-bold text-slate-300">45m</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Dispatch Hotlines */}
          <div>
            <h4 className="font-extrabold text-sm text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              24/7 Dispatch Control
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+390471790033"
                className="flex items-center gap-3 p-3 bg-slate-800/90 hover:bg-slate-700 rounded-xl border border-slate-700 text-white font-bold transition-all"
              >
                <Phone className="w-4 h-4 text-[#F59E0B]" />
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase tracking-wider">Direct Hotline</span>
                  <span className="text-xs">+39 0471 790033</span>
                </div>
              </a>

              <a
                href="https://wa.me/390471790033"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-[#25D366]/20 hover:bg-[#25D366]/30 rounded-xl border border-[#25D366]/40 text-white font-bold transition-all"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <div>
                  <span className="text-[10px] text-[#25D366] block uppercase tracking-wider">WhatsApp Dispatch</span>
                  <span className="text-xs">+39 0471 790033</span>
                </div>
              </a>

              <a
                href="mailto:info@taxiautosella.it"
                className="flex items-center gap-3 p-3 bg-slate-800/90 hover:bg-slate-700 rounded-xl border border-slate-700 text-white font-bold transition-all"
              >
                <Mail className="w-4 h-4 text-[#F59E0B]" />
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase tracking-wider">Email Bookings</span>
                  <span className="text-xs">info@taxiautosella.it</span>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} Consorzio Taxi Auto Sella. All rights reserved. Built for the Dolomites.</p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400 font-semibold">Val Gardena • Santa Cristina • Ortisei • Selva</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

