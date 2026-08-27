import React from 'react';
import { Outlet } from 'react-router-dom';
import { TechNav } from './components/TechNav';

export const TechLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col font-sans selection:bg-[#D97706] selection:text-white">
      {/* Navigation */}
      <TechNav />

      {/* Page Content */}
      <div className="flex-1">
        <Outlet />
      </div>

      {/* Footer */}
      <footer className="bg-[#0A192F] text-slate-300 py-14 px-4 sm:px-8 text-xs border-t border-slate-800 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <img src="/images/brand/logo.svg" alt="Taxi Auto Sella Logo" className="h-6 w-auto object-contain mb-3 opacity-90" />
            <p className="text-slate-400 max-w-sm">
              Val Gardena’s largest taxi and bus consortium. Str. Gherdeina 7/A, I-39047 Santa Cristina (BZ), Dolomites, Italy.
            </p>
            <p className="text-slate-400 mt-1">VAT No.: IT01707460216 • 24/7 Hotline: (+39) 0471 790033</p>
          </div>

          <div className="flex flex-col md:items-end gap-2 text-slate-400">
            <div className="flex gap-4">
              <a href="tel:+390471790033" className="hover:text-[#F59E0B]">24/7 Phone Hotline</a>
              <a href="mailto:info@taxiautosella.it" className="hover:text-[#F59E0B]">Email Dispatch</a>
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
