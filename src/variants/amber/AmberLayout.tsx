import './tokens.css';
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin } from 'lucide-react';
import { AmberNav } from './components/AmberNav';
import { AmberInquiryModal } from './components/AmberInquiryModal';
import { CookieConsent } from './components/CookieConsent';
import {
  COMPANY_LEGAL_NAME,
  ADDRESS_LINE1,
  ADDRESS_LINE2,
  VAT_NUMBER,
  PHONE_DISPLAY,
  PHONE_TEL,
  EMAIL,
  FACEBOOK_URL,
} from '../../config/contact';

const openCookieSettings = () => {
  window.dispatchEvent(new CustomEvent('open-cookie-settings'));
};

export const AmberLayout: React.FC = () => {
  const { t } = useTranslation(['common', 'homeAmber']);

  const columns = [
    {
      title: t('homeAmber:footer.travel'),
      links: [
        { to: '/booking', label: t('nav.booking') },
        { to: '/fleet', label: t('nav.fleet') },
        { to: '/services', label: t('nav.services') },
        { to: '/excursions', label: t('nav.excursions') },
      ],
    },
    {
      title: t('homeAmber:footer.company'),
      links: [
        { to: '/members', label: t('nav.members') },
        { to: '/faq', label: t('nav.faq') },
        { to: '/contact', label: t('nav.contact') },
      ],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-tas-paper font-sans text-tas-ink selection:bg-tas-primary-soft selection:text-tas-ink">
      <AmberNav />

      <div className="flex-1">
        <Outlet />
      </div>

      <AmberInquiryModal />

      <footer className="mt-auto border-t border-tas-line bg-tas-parchment">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-16">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <img src="/images/brand/logo-navy.svg" alt={t('brand')} className="h-8 w-auto" />
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-tas-muted-text">
                {t('footer.tagline', {
                  legal: COMPANY_LEGAL_NAME,
                  line1: ADDRESS_LINE1,
                  line2: ADDRESS_LINE2,
                })}
              </p>
              <ul className="mt-5 space-y-2 text-sm">
                <li>
                  <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 font-semibold text-tas-ink hover:text-tas-accent-on-light">
                    <Phone className="h-4 w-4 text-tas-accent-on-light" />
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 text-tas-ink hover:text-tas-accent-on-light">
                    <Mail className="h-4 w-4 text-tas-accent-on-light" />
                    {EMAIL}
                  </a>
                </li>
                <li className="inline-flex items-start gap-2 text-tas-muted-text">
                  <MapPin className="mt-0.5 h-4 w-4 flex-none text-tas-accent-on-light" />
                  <span>{ADDRESS_LINE1}, {ADDRESS_LINE2}</span>
                </li>
              </ul>
            </div>

            {columns.map((col) => (
              <div key={col.title} className="md:col-span-2">
                <h3 className="text-sm font-bold text-tas-ink">{col.title}</h3>
                <ul className="mt-4 space-y-2.5 text-sm text-tas-muted-text">
                  {col.links.map((l) => (
                    <li key={l.to + l.label}>
                      <Link to={l.to} className="hover:text-tas-accent-on-light">{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="md:col-span-3">
              <h3 className="text-sm font-bold text-tas-ink">{t('homeAmber:footer.dispatch')}</h3>
              <p className="mt-4 text-sm leading-relaxed text-tas-muted-text">
                {t('footer.directDispatch')} <a href={`tel:${PHONE_TEL}`} className="font-semibold text-tas-ink hover:text-tas-accent-on-light">{PHONE_DISPLAY}</a>
                <br />
                {t('footer.inquiries')} <a href={`mailto:${EMAIL}`} className="text-tas-ink hover:text-tas-accent-on-light">{EMAIL}</a>
              </p>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex text-sm font-semibold text-tas-accent-on-light hover:text-tas-accent-strong"
              >
                {t('footer.facebook')}
              </a>
              <div className="mt-5 space-y-1 text-xs text-tas-muted-text">
                <div>{t('footer.vat', { value: VAT_NUMBER })}</div>
                <div>{t('footer.rea')}</div>
                <div>{t('footer.pec')}</div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-tas-line pt-6 text-xs text-tas-muted-text sm:flex-row sm:items-center sm:justify-between">
            <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <Link to="/privacy" className="hover:text-tas-accent-on-light">{t('footer.privacy')}</Link>
              <Link to="/cookie-policy" className="hover:text-tas-accent-on-light">{t('footer.cookiePolicy')}</Link>
              <button
                type="button"
                onClick={openCookieSettings}
                className="hover:text-tas-accent-on-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-focus"
              >
                {t('footer.cookieSettings')}
              </button>
              <Link to="/imprint" className="hover:text-tas-accent-on-light">{t('footer.imprint')}</Link>
            </div>
          </div>
        </div>
      </footer>

      <CookieConsent />
    </div>
  );
};
