import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Variant 1: Alpine Luxury & Heritage
import { LuxuryLayout } from './variants/luxury/LuxuryLayout';
import { LuxuryHome } from './variants/luxury/pages/LuxuryHome';
import { LuxuryBookingPage } from './variants/luxury/pages/LuxuryBookingPage';
import { LuxuryFleetPage } from './variants/luxury/pages/LuxuryFleetPage';
import { LuxuryServicesPage } from './variants/luxury/pages/LuxuryServicesPage';
import { LuxuryExcursionsPage } from './variants/luxury/pages/LuxuryExcursionsPage';
import { LuxuryFaqPage } from './variants/luxury/pages/LuxuryFaqPage';
import { LuxuryMembersPage } from './variants/luxury/pages/LuxuryMembersPage';
import { LuxuryContactPage } from './variants/luxury/pages/LuxuryContactPage';
import { LuxuryPrivacyPage } from './variants/luxury/pages/LuxuryPrivacyPage';
import { LuxuryCookiePolicyPage } from './variants/luxury/pages/LuxuryCookiePolicyPage';
import { LuxuryImprintPage } from './variants/luxury/pages/LuxuryImprintPage';
import { LuxuryNotFoundPage } from './variants/luxury/pages/LuxuryNotFoundPage';

import { StickyMobileBar } from './components/mobile/StickyMobileBar';
import { ScrollToTop } from './components/navigation/ScrollToTop';

const PATH_TO_TITLE_KEY: Record<string, string> = {
  '/': 'common:pageTitles.home',
  '/booking': 'common:pageTitles.booking',
  '/fleet': 'common:pageTitles.fleet',
  '/services': 'common:pageTitles.services',
  '/excursions': 'common:pageTitles.excursions',
  '/faq': 'common:pageTitles.faq',
  '/members': 'common:pageTitles.members',
  '/contact': 'common:pageTitles.contact',
  '/privacy': 'common:pageTitles.privacy',
  '/cookie-policy': 'common:pageTitles.cookiePolicy',
  '/imprint': 'common:pageTitles.imprint',
};

const PageTitle: React.FC = () => {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();
  React.useEffect(() => {
    const key = PATH_TO_TITLE_KEY[pathname] ?? 'common:pageTitles.notFound';
    document.title = t(key);
  }, [pathname, t, i18n.language]);
  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageTitle />
      <div className="min-h-screen flex flex-col antialiased bg-slate-950">
        {/* Modular Sub-App Routes for Each Variant */}
        <main className="flex-1 pb-16 lg:pb-0">
          <Routes>
            {/* Variant 1: Alpine Luxury & Heritage */}
            <Route path="/" element={<LuxuryLayout />}>
              <Route index element={<LuxuryHome />} />
              <Route path="booking" element={<LuxuryBookingPage />} />
              <Route path="fleet" element={<LuxuryFleetPage />} />
              <Route path="services" element={<LuxuryServicesPage />} />
              <Route path="excursions" element={<LuxuryExcursionsPage />} />
              <Route path="faq" element={<LuxuryFaqPage />} />
              <Route path="members" element={<LuxuryMembersPage />} />
              <Route path="contact" element={<LuxuryContactPage />} />
              <Route path="privacy" element={<LuxuryPrivacyPage />} />
              <Route path="cookie-policy" element={<LuxuryCookiePolicyPage />} />
              <Route path="imprint" element={<LuxuryImprintPage />} />
              <Route path="*" element={<LuxuryNotFoundPage />} />
            </Route>
          </Routes>
        </main>

        {/* Mobile quick actions */}
        <StickyMobileBar />
      </div>
    </BrowserRouter>
  );
};

export default App;
