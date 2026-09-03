import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LuxuryNav } from './components/LuxuryNav';
import { LuxuryInquiryModal } from './components/LuxuryInquiryModal';
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

export const LuxuryLayout: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <div className="min-h-screen bg-tas-paper text-tas-ink flex flex-col font-sans selection:bg-tas-brass-fill selection:text-white">
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

      <LuxuryInquiryModal />

      {/* Luxury Footer */}
      <footer className="bg-tas-ink text-tas-paper py-16 px-6 lg:px-16 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 border-b border-white/10 pb-12">
          <div>
            <h3 className="font-editorial text-3xl text-tas-paper mb-2">{t('brand')}</h3>
            <p className="text-xs text-tas-paper/60 max-w-sm font-light leading-relaxed">
              {t('footer.tagline', {
                legal: COMPANY_LEGAL_NAME,
                line1: ADDRESS_LINE1,
                line2: ADDRESS_LINE2,
              })}
            </p>
            <div className="mt-4 space-y-1 text-[11px] text-tas-paper/50 font-light">
              <div>{t('footer.vat', { value: VAT_NUMBER })}</div>
              <div>{t('footer.rea')}</div>
              <div>{t('footer.pec')}</div>
            </div>
          </div>

          <div className="space-y-2 text-xs font-light text-tas-paper/70">
            <div>
              <strong className="font-semibold text-tas-paper">{t('footer.directDispatch')}</strong>{' '}
              <a href={`tel:${PHONE_TEL}`} className="hover:text-tas-accent-on-dark">{PHONE_DISPLAY}</a>
            </div>
            <div>
              <strong className="font-semibold text-tas-paper">{t('footer.inquiries')}</strong>{' '}
              <a href={`mailto:${EMAIL}`} className="hover:text-tas-accent-on-dark">{EMAIL}</a>
            </div>
            <div>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-tas-paper/70 hover:text-tas-accent-on-dark"
              >
                {t('footer.facebook')}
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 flex flex-col gap-6 border-b border-white/10 pb-8 text-[11px] text-tas-paper/60">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link to="/contact" className="hover:text-tas-accent-on-dark">{t('footer.contact')}</Link>
            <Link to="/privacy" className="hover:text-tas-accent-on-dark">{t('footer.privacy')}</Link>
            <Link to="/cookie-policy" className="hover:text-tas-accent-on-dark">{t('footer.cookiePolicy')}</Link>
            <button
              type="button"
              onClick={openCookieSettings}
              className="hover:text-tas-accent-on-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-focus"
            >
              {t('footer.cookieSettings')}
            </button>
            <Link to="/imprint" className="hover:text-tas-accent-on-dark">{t('footer.imprint')}</Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] text-tas-paper/40 gap-4">
          <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
          <div className="flex gap-6">
            <a href={`tel:${PHONE_TEL}`} className="hover:text-tas-accent-on-dark">{t('footer.callDispatch')}</a>
            <a href={`mailto:${EMAIL}`} className="hover:text-tas-accent-on-dark">{t('footer.emailDispatch')}</a>
          </div>
        </div>
      </footer>

      <CookieConsent />
    </div>
  );
};
