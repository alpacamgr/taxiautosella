import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

// Variant 1: Alpine Luxury & Heritage
import { LuxuryLayout } from './variants/luxury/LuxuryLayout';
import { LuxuryHome } from './variants/luxury/pages/LuxuryHome';
import { LuxuryBookingPage } from './variants/luxury/pages/LuxuryBookingPage';
import { LuxuryFleetPage } from './variants/luxury/pages/LuxuryFleetPage';
import { LuxuryServicesPage } from './variants/luxury/pages/LuxuryServicesPage';
import { LuxuryExcursionsPage } from './variants/luxury/pages/LuxuryExcursionsPage';
import { LuxuryFaqPage } from './variants/luxury/pages/LuxuryFaqPage';
import { LuxuryMembersPage } from './variants/luxury/pages/LuxuryMembersPage';

import { StickyMobileBar } from './components/mobile/StickyMobileBar';
import { ScrollToTop } from './components/navigation/ScrollToTop';

export const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col antialiased bg-slate-950">
        {/* Modular Sub-App Routes for Each Variant */}
        <main className="flex-1 pb-16 lg:pb-0">
          <Routes>
            {/* Variant 1: Alpine Luxury & Heritage */}
            <Route path="/" element={<LuxuryLayout />}>
              <Route index element={<LuxuryHome />} />
            </Route>
            <Route path="/luxury" element={<LuxuryLayout />}>
              <Route index element={<LuxuryHome />} />
              <Route path="booking" element={<LuxuryBookingPage />} />
              <Route path="fleet" element={<LuxuryFleetPage />} />
              <Route path="services" element={<LuxuryServicesPage />} />
              <Route path="excursions" element={<LuxuryExcursionsPage />} />
              <Route path="faq" element={<LuxuryFaqPage />} />
              <Route path="members" element={<LuxuryMembersPage />} />
            </Route>

            {/* Catch-all fallback */}
            <Route path="*" element={<Navigate to="/luxury" replace />} />
          </Routes>
        </main>

        {/* Mobile quick actions */}
        <StickyMobileBar />
      </div>
    </HashRouter>
  );
};

export default App;
