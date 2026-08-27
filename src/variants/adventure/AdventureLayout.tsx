import React from 'react';
import { Outlet } from 'react-router-dom';
import { AdventureNav } from './components/AdventureNav';

export const AdventureLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#071526] text-[#F0F9FF] flex flex-col font-sans selection:bg-[#0284C7] selection:text-white">
      {/* Adventure Sub-Nav */}
      <AdventureNav />

      {/* Adventure Page Content */}
      <div className="flex-1">
        <Outlet />
      </div>

      {/* Adventure Footer */}
      <footer className="bg-[#050E1A] text-slate-400 py-14 px-6 lg:px-16 text-xs border-t border-sky-950 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2 font-display font-bold text-base text-white">
              <span>Taxi Auto Sella Consortium</span>
            </div>
            <p className="max-w-sm text-slate-400">
              Str. Gherdeina 7/A, I-39047 Santa Cristina (BZ), Val Gardena, Dolomites, Italy.
            </p>
            <p className="mt-1">VAT No.: IT01707460216 • 24/7 Ski Hotline: (+39) 0471 790033</p>
          </div>

          <div className="flex flex-col md:items-end gap-2">
            <div className="flex gap-4 text-sky-400">
              <a href="tel:+390471790033" className="hover:underline">Emergency Hotline</a>
              <a href="mailto:info@taxiautosella.it" className="hover:underline">Email Dispatch</a>
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
