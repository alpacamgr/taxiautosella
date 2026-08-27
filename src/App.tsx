import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { VariantHeader } from './components/navigation/VariantHeader';

// Variant 1: Luxury
import { LuxuryLayout } from './variants/luxury/LuxuryLayout';
import { LuxuryHome } from './variants/luxury/pages/LuxuryHome';
import { LuxuryFleetPage } from './variants/luxury/pages/LuxuryFleetPage';
import { LuxuryExcursionsPage } from './variants/luxury/pages/LuxuryExcursionsPage';
import { LuxuryAboutPage } from './variants/luxury/pages/LuxuryAboutPage';
import { LuxuryFaqPage } from './variants/luxury/pages/LuxuryFaqPage';

// Variant 2: Tech
import { TechLayout } from './variants/tech/TechLayout';
import { TechHome } from './variants/tech/pages/TechHome';
import { TechFleetPage } from './variants/tech/pages/TechFleetPage';
import { TechRoutesPage } from './variants/tech/pages/TechRoutesPage';
import { TechAboutPage } from './variants/tech/pages/TechAboutPage';
import { TechFaqPage } from './variants/tech/pages/TechFaqPage';

// Variant 3: Adventure
import { AdventureLayout } from './variants/adventure/AdventureLayout';
import { AdventureHome } from './variants/adventure/pages/AdventureHome';
import { AdventurePassesPage } from './variants/adventure/pages/AdventurePassesPage';
import { AdventureFleetPage } from './variants/adventure/pages/AdventureFleetPage';
import { AdventureToursPage } from './variants/adventure/pages/AdventureToursPage';
import { AdventureFaqPage } from './variants/adventure/pages/AdventureFaqPage';

// Shared Components
import { BookingModal } from './components/booking/BookingModal';
import { StickyMobileBar } from './components/mobile/StickyMobileBar';

export const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col antialiased bg-slate-950">
        
        {/* Global Variant Switcher & Route Header */}
        <VariantHeader />

        {/* Modular Sub-App Routes for Each Variant */}
        <main className="flex-1 pb-16 lg:pb-0">
          <Routes>
            {/* Variant 1: Alpine Luxury */}
            <Route path="/" element={<LuxuryLayout />}>
              <Route index element={<LuxuryHome />} />
            </Route>
            <Route path="/luxury" element={<LuxuryLayout />}>
              <Route index element={<LuxuryHome />} />
              <Route path="fleet" element={<LuxuryFleetPage />} />
              <Route path="excursions" element={<LuxuryExcursionsPage />} />
              <Route path="about" element={<LuxuryAboutPage />} />
              <Route path="faq" element={<LuxuryFaqPage />} />
            </Route>

            {/* Variant 2: Modern Tech (WelcomePickups) */}
            <Route path="/tech" element={<TechLayout />}>
              <Route index element={<TechHome />} />
              <Route path="fleet" element={<TechFleetPage />} />
              <Route path="routes" element={<TechRoutesPage />} />
              <Route path="about" element={<TechAboutPage />} />
              <Route path="faq" element={<TechFaqPage />} />
            </Route>

            {/* Variant 3: Creative Dual-Season Expedition */}
            <Route path="/adventure" element={<AdventureLayout />}>
              <Route index element={<AdventureHome />} />
              <Route path="passes" element={<AdventurePassesPage />} />
              <Route path="fleet" element={<AdventureFleetPage />} />
              <Route path="tours" element={<AdventureToursPage />} />
              <Route path="faq" element={<AdventureFaqPage />} />
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
