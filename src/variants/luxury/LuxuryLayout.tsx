import React from 'react';
import { Outlet } from 'react-router-dom';
import { LuxuryNav } from './components/LuxuryNav';

export const LuxuryLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8F6F0] text-[#0E1117] flex flex-col font-sans selection:bg-[#C5A880] selection:text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');
        .font-editorial { font-family: 'Playfair Display', serif; }
      `}</style>
      
      {/* Luxury Sub-Nav */}
      <LuxuryNav />

      {/* Luxury Page Content */}
      <div className="flex-1">
        <Outlet />
      </div>

      {/* Luxury Footer */}
      <footer className="bg-[#0E1117] text-[#F8F6F0] py-16 px-6 lg:px-16 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 border-b border-white/10 pb-12">
          <div>
            <h3 className="font-editorial text-3xl text-[#F8F6F0] mb-2">Taxi Auto Sella</h3>
            <p className="text-xs text-[#F8F6F0]/60 max-w-sm font-light leading-relaxed">
              Consortium Noleggio con Conducente. Str. Gherdeina 7/A, I-39047 Santa Cristina (BZ), Val Gardena, Dolomites, Italy.
            </p>
          </div>

          <div className="space-y-2 text-xs font-light text-[#F8F6F0]/70">
            <div><strong>Direct Dispatch:</strong> (+39) 0471 790033</div>
            <div><strong>Inquiries:</strong> info@taxiautosella.it</div>
            <div><strong>VAT No.:</strong> IT01707460216</div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] text-[#F8F6F0]/40 gap-4">
          <p>© {new Date().getFullYear()} Taxi Auto Sella Consortium. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="tel:+390471790033" className="hover:text-[#C5A880]">24/7 Hotline</a>
            <a href="mailto:info@taxiautosella.it" className="hover:text-[#C5A880]">Email Dispatch</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
