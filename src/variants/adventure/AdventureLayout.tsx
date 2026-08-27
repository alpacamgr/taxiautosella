import React from 'react';
import { Outlet } from 'react-router-dom';
import { AdventureNav } from './components/AdventureNav';

export const AdventureLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1A1D24] flex flex-col font-sans selection:bg-[#D6A56E] selection:text-white">
      {/* Sub-Navigation */}
      <AdventureNav />

      {/* Page Content */}
      <div className="flex-1">
        <Outlet />
      </div>

      {/* Footer */}
      <footer className="bg-[#181B22] text-[#FBF9F5] py-14 px-4 sm:px-8 text-xs border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2 font-bold text-base text-white">
              <span>Taxi Auto Sella Consortium</span>
            </div>
            <p className="text-slate-400 max-w-sm">
              Str. Gherdeina 7/A, I-39047 Santa Cristina (BZ), Val Gardena, Dolomites, Italy.
            </p>
            <p className="text-slate-400 mt-1">VAT No.: IT01707460216 • 24/7 Valley Dispatch: (+39) 0471 790033</p>
          </div>

          <div className="flex flex-col md:items-end gap-2 text-slate-400">
            <div className="flex gap-4">
              <a href="tel:+390471790033" className="hover:text-[#D6A56E]">24/7 Phone Hotline</a>
              <a href="mailto:info@taxiautosella.it" className="hover:text-[#D6A56E]">Email Dispatch</a>
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
