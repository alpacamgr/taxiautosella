import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { VariantHeader } from './components/navigation/VariantHeader';
import { LuxuryPage } from './pages/LuxuryPage';
import { TechPage } from './pages/TechPage';
import { AdventurePage } from './pages/AdventurePage';
import { BookingModal } from './components/booking/BookingModal';
import { StickyMobileBar } from './components/mobile/StickyMobileBar';

export const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col antialiased bg-slate-950">
        
        {/* Global Variant Navigation Header */}
        <VariantHeader />

        {/* Dedicated Route Views */}
        <main className="flex-1 pb-16 lg:pb-0">
          <Routes>
            <Route path="/" element={<LuxuryPage />} />
            <Route path="/luxury" element={<LuxuryPage />} />
            <Route path="/tech" element={<TechPage />} />
            <Route path="/adventure" element={<AdventurePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* 2-Step Reservation & Confirmation Modal */}
        <BookingModal />

        {/* Sticky Mobile Conversion Bar */}
        <StickyMobileBar />
      </div>
    </HashRouter>
  );
};

export default App;
