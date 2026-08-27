import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { VariantHeader } from './components/navigation/VariantHeader';

// Variant 1: Alpine Luxury & Heritage
import { LuxuryLayout } from './variants/luxury/LuxuryLayout';
import { LuxuryHome } from './variants/luxury/pages/LuxuryHome';
import { LuxuryBookingPage } from './variants/luxury/pages/LuxuryBookingPage';
import { LuxuryFleetPage } from './variants/luxury/pages/LuxuryFleetPage';
import { LuxuryServicesPage } from './variants/luxury/pages/LuxuryServicesPage';
import { LuxuryExcursionsPage } from './variants/luxury/pages/LuxuryExcursionsPage';
import { LuxuryFaqPage } from './variants/luxury/pages/LuxuryFaqPage';
import { LuxuryMembersPage } from './variants/luxury/pages/LuxuryMembersPage';

// Variant 2: Modern Tech (Velocity / WelcomePickups Evolved)
import { TechLayout } from './variants/tech/TechLayout';
import { TechHome } from './variants/tech/pages/TechHome';
import { TechBookingPage } from './variants/tech/pages/TechBookingPage';
import { TechFleetPage } from './variants/tech/pages/TechFleetPage';
import { TechServicesPage } from './variants/tech/pages/TechServicesPage';
import { TechToursPage } from './variants/tech/pages/TechToursPage';
import { TechFaqPage } from './variants/tech/pages/TechFaqPage';
import { TechMembersPage } from './variants/tech/pages/TechMembersPage';

// Variant 3: Dolomiti Modern Alpine & Valley Hospitality
import { AdventureLayout } from './variants/adventure/AdventureLayout';
import { AdventureHome } from './variants/adventure/pages/AdventureHome';
import { AdventureBookingPage } from './variants/adventure/pages/AdventureBookingPage';
import { AdventureFleetPage } from './variants/adventure/pages/AdventureFleetPage';
import { AdventureServicesPage } from './variants/adventure/pages/AdventureServicesPage';
import { AdventureToursPage } from './variants/adventure/pages/AdventureToursPage';
import { AdventureFaqPage } from './variants/adventure/pages/AdventureFaqPage';
import { AdventureMembersPage } from './variants/adventure/pages/AdventureMembersPage';

// Shared Components
import { BookingModal } from './components/booking/BookingModal';
import { StickyMobileBar } from './components/mobile/StickyMobileBar';
import { ScrollToTop } from './components/navigation/ScrollToTop';

export const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col antialiased bg-slate-950">
        
        {/* Global Variant Switcher & Route Header */}
        <VariantHeader />

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

            {/* Variant 2: Modern Tech Platform */}
            <Route path="/tech" element={<TechLayout />}>
              <Route index element={<TechHome />} />
              <Route path="booking" element={<TechBookingPage />} />
              <Route path="fleet" element={<TechFleetPage />} />
              <Route path="services" element={<TechServicesPage />} />
              <Route path="tours" element={<TechToursPage />} />
              <Route path="faq" element={<TechFaqPage />} />
              <Route path="members" element={<TechMembersPage />} />
            </Route>

            {/* Variant 3: Dolomiti Modern Alpine & Valley Hospitality */}
            <Route path="/adventure" element={<AdventureLayout />}>
              <Route index element={<AdventureHome />} />
              <Route path="booking" element={<AdventureBookingPage />} />
              <Route path="fleet" element={<AdventureFleetPage />} />
              <Route path="services" element={<AdventureServicesPage />} />
              <Route path="tours" element={<AdventureToursPage />} />
              <Route path="faq" element={<AdventureFaqPage />} />
              <Route path="members" element={<AdventureMembersPage />} />
            </Route>

            {/* Catch-all fallback */}
            <Route path="*" element={<Navigate to="/luxury" replace />} />
          </Routes>
        </main>

        {/* Global Booking Modal & Mobile Bar */}
        <BookingModal />
        <StickyMobileBar />
      </div>
    </HashRouter>
  );
};

export default App;
