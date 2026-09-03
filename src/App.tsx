import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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

import { LuxuryLayout as LuxuryLayoutV2 } from './variants/luxury-v2/LuxuryLayout';
import { LuxuryHome as LuxuryHomeV2 } from './variants/luxury-v2/pages/LuxuryHome';
import { LuxuryBookingPage as LuxuryBookingPageV2 } from './variants/luxury-v2/pages/LuxuryBookingPage';
import { LuxuryFleetPage as LuxuryFleetPageV2 } from './variants/luxury-v2/pages/LuxuryFleetPage';
import { LuxuryServicesPage as LuxuryServicesPageV2 } from './variants/luxury-v2/pages/LuxuryServicesPage';
import { LuxuryExcursionsPage as LuxuryExcursionsPageV2 } from './variants/luxury-v2/pages/LuxuryExcursionsPage';
import { LuxuryFaqPage as LuxuryFaqPageV2 } from './variants/luxury-v2/pages/LuxuryFaqPage';
import { LuxuryMembersPage as LuxuryMembersPageV2 } from './variants/luxury-v2/pages/LuxuryMembersPage';
import { LuxuryContactPage as LuxuryContactPageV2 } from './variants/luxury-v2/pages/LuxuryContactPage';
import { LuxuryPrivacyPage as LuxuryPrivacyPageV2 } from './variants/luxury-v2/pages/LuxuryPrivacyPage';
import { LuxuryCookiePolicyPage as LuxuryCookiePolicyPageV2 } from './variants/luxury-v2/pages/LuxuryCookiePolicyPage';
import { LuxuryImprintPage as LuxuryImprintPageV2 } from './variants/luxury-v2/pages/LuxuryImprintPage';
import { LuxuryNotFoundPage as LuxuryNotFoundPageV2 } from './variants/luxury-v2/pages/LuxuryNotFoundPage';

import { LightLayout } from './variants/light/LightLayout';
import { LightHome } from './variants/light/pages/LightHome';
import { LightBookingPage } from './variants/light/pages/LightBookingPage';
import { LightFleetPage } from './variants/light/pages/LightFleetPage';
import { LightServicesPage } from './variants/light/pages/LightServicesPage';
import { LightExcursionsPage } from './variants/light/pages/LightExcursionsPage';
import { LightFaqPage } from './variants/light/pages/LightFaqPage';
import { LightMembersPage } from './variants/light/pages/LightMembersPage';
import { LightContactPage } from './variants/light/pages/LightContactPage';
import { LightPrivacyPage } from './variants/light/pages/LightPrivacyPage';
import { LightCookiePolicyPage } from './variants/light/pages/LightCookiePolicyPage';
import { LightImprintPage } from './variants/light/pages/LightImprintPage';
import { LightNotFoundPage } from './variants/light/pages/LightNotFoundPage';

import { StickyMobileBar } from './components/mobile/StickyMobileBar';
import { ScrollToTop } from './components/navigation/ScrollToTop';
import { SiteVersion, VersionToggle } from './components/preview/VersionToggle';

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

const SITE_VERSIONS = {
  v1: {
    Layout: LuxuryLayout,
    Home: LuxuryHome,
    Booking: LuxuryBookingPage,
    Fleet: LuxuryFleetPage,
    Services: LuxuryServicesPage,
    Excursions: LuxuryExcursionsPage,
    Faq: LuxuryFaqPage,
    Members: LuxuryMembersPage,
    Contact: LuxuryContactPage,
    Privacy: LuxuryPrivacyPage,
    CookiePolicy: LuxuryCookiePolicyPage,
    Imprint: LuxuryImprintPage,
    NotFound: LuxuryNotFoundPage,
  },
  v2: {
    Layout: LuxuryLayoutV2,
    Home: LuxuryHomeV2,
    Booking: LuxuryBookingPageV2,
    Fleet: LuxuryFleetPageV2,
    Services: LuxuryServicesPageV2,
    Excursions: LuxuryExcursionsPageV2,
    Faq: LuxuryFaqPageV2,
    Members: LuxuryMembersPageV2,
    Contact: LuxuryContactPageV2,
    Privacy: LuxuryPrivacyPageV2,
    CookiePolicy: LuxuryCookiePolicyPageV2,
    Imprint: LuxuryImprintPageV2,
    NotFound: LuxuryNotFoundPageV2,
  },
  v3: {
    Layout: LightLayout,
    Home: LightHome,
    Booking: LightBookingPage,
    Fleet: LightFleetPage,
    Services: LightServicesPage,
    Excursions: LightExcursionsPage,
    Faq: LightFaqPage,
    Members: LightMembersPage,
    Contact: LightContactPage,
    Privacy: LightPrivacyPage,
    CookiePolicy: LightCookiePolicyPage,
    Imprint: LightImprintPage,
    NotFound: LightNotFoundPage,
  },
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

const readInitialVersion = (): SiteVersion => {
  const v = document.documentElement.dataset.tasVersion;
  return v === 'v2' || v === 'v3' ? v : 'v1';
};

const VersionedSite: React.FC = () => {
  const [version, setVersion] = React.useState<SiteVersion>(readInitialVersion);
  const location = useLocation();
  const navigate = useNavigate();
  const site = SITE_VERSIONS[version];
  const Layout = site.Layout;

  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    const currentVersion = params.get('version');

    if (version !== 'v1' && currentVersion !== version) {
      params.set('version', version);
    } else if (version === 'v1' && currentVersion !== null) {
      params.delete('version');
    } else {
      return;
    }

    const search = params.toString();
    navigate(
      {
        pathname: location.pathname,
        search: search ? `?${search}` : '',
        hash: location.hash,
      },
      { replace: true },
    );
  }, [location.hash, location.pathname, location.search, navigate, version]);

  const selectVersion = (nextVersion: SiteVersion) => {
    setVersion(nextVersion);
    document.documentElement.dataset.tasVersion = nextVersion;
    window.localStorage.setItem('tas-version', nextVersion);
  };

  return (
    <>
      <ScrollToTop />
      <PageTitle />
      <div className="min-h-screen flex flex-col antialiased bg-slate-950">
        <main className="flex-1 pb-16 lg:pb-0">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<site.Home />} />
              <Route path="booking" element={<site.Booking />} />
              <Route path="fleet" element={<site.Fleet />} />
              <Route path="services" element={<site.Services />} />
              <Route path="excursions" element={<site.Excursions />} />
              <Route path="faq" element={<site.Faq />} />
              <Route path="members" element={<site.Members />} />
              <Route path="contact" element={<site.Contact />} />
              <Route path="privacy" element={<site.Privacy />} />
              <Route path="cookie-policy" element={<site.CookiePolicy />} />
              <Route path="imprint" element={<site.Imprint />} />
              <Route path="*" element={<site.NotFound />} />
            </Route>
          </Routes>
        </main>

        <StickyMobileBar />
        <VersionToggle version={version} onChange={selectVersion} />
      </div>
    </>
  );
};

export const App: React.FC = () => (
  <BrowserRouter>
    <VersionedSite />
  </BrowserRouter>
);

export default App;
