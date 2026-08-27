import React from 'react';
import { Outlet } from 'react-router-dom';
import { TechNav } from './components/TechNav';

export const TechLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-emerald-600 selection:text-white">
      {/* Tech Sub-Nav */}
      <TechNav />

      {/* Tech Page Content */}
      <div className="flex-1">
        <Outlet />
      </div>

      {/* Tech Footer */}
      <footer className="bg-slate-900 text-white py-14 px-4 sm:px-8 text-xs border-t border-slate-800 mt-auto">
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
