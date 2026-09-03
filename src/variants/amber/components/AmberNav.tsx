import React, { useEffect, useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Phone, Menu, X, MessageSquare } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { PHONE_DISPLAY, PHONE_TEL, whatsappLink } from '../../../config/contact';

export const AmberNav: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('common');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { path: '/booking', label: t('nav.booking') },
    { path: '/fleet', label: t('nav.fleet') },
    { path: '/services', label: t('nav.services') },
    { path: '/excursions', label: t('nav.excursions') },
    { path: '/faq', label: t('nav.faq') },
    { path: '/members', label: t('nav.members') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <nav
      className={`sticky top-0 z-40 w-full border-b bg-tas-surface text-tas-ink transition-shadow ${
        scrolled ? 'border-tas-line shadow-[0_6px_24px_rgba(23,42,58,0.08)]' : 'border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center gap-3 px-4 sm:h-[72px] sm:px-6 xl:px-8">
        <Link
          to="/"
          className="flex min-h-11 flex-none items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-focus focus-visible:ring-offset-2"
          aria-label={t('nav.logoAlt')}
        >
          <img src="/images/brand/logo-navy.svg" alt={t('brand')} className="h-7 w-auto sm:h-8" />
        </Link>

        <div className="hidden min-w-0 flex-1 items-center justify-center gap-1 xl:flex">
          {links.map((l) => (
            <NavLink
              key={l.path}
              to={l.path}
              className={({ isActive }) =>
                `whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-focus ${
                  isActive
                    ? 'bg-tas-primary-soft text-tas-accent-on-light'
                    : 'text-tas-ink/80 hover:bg-tas-parchment hover:text-tas-ink'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="ml-auto flex flex-none items-center gap-2">
          <LanguageSwitcher variant="nav" className="hidden xl:flex" />

          <a
            href={`tel:${PHONE_TEL}`}
            aria-label={t('nav.callAria', { phone: PHONE_DISPLAY })}
            className="hidden min-h-11 items-center gap-2 rounded-lg px-3 text-sm font-semibold text-tas-ink transition-colors hover:text-tas-accent-on-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-focus lg:flex"
          >
            <Phone className="h-4 w-4 text-tas-accent-on-light" />
            <span className="whitespace-nowrap">{PHONE_DISPLAY}</span>
          </a>

          <button
            type="button"
            onClick={() => navigate('/booking')}
            className="flex min-h-11 items-center whitespace-nowrap rounded-lg bg-tas-primary px-3.5 text-sm font-bold text-tas-on-accent transition-colors hover:bg-tas-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-focus focus-visible:ring-offset-2 sm:px-5"
          >
            <span className="sm:hidden">{t('nav.book')}</span>
            <span className="hidden sm:inline">{t('nav.bookTransfer')}</span>
          </button>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex min-h-11 min-w-11 items-center justify-center rounded-lg text-tas-ink transition-colors hover:bg-tas-parchment focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-focus xl:hidden"
            aria-label={isMobileMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
            aria-expanded={isMobileMenuOpen}
            aria-controls="light-mobile-navigation"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          id="light-mobile-navigation"
          className="absolute left-0 top-full max-h-[calc(100vh-4rem)] w-full overflow-y-auto border-b border-tas-line bg-tas-surface shadow-[0_18px_40px_rgba(23,42,58,0.14)] xl:hidden"
        >
          <div className="mx-auto max-w-[1440px] px-4 py-4 sm:px-6">
            <div className="flex flex-col">
              <NavLink
                to="/"
                end
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex min-h-12 items-center rounded-lg px-3 text-base font-semibold transition-colors ${
                    isActive ? 'bg-tas-primary-soft text-tas-accent-on-light' : 'text-tas-ink hover:bg-tas-parchment'
                  }`
                }
              >
                {t('nav.home')}
              </NavLink>
              {links.map((l) => (
                <NavLink
                  key={l.path}
                  to={l.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex min-h-12 items-center rounded-lg px-3 text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-tas-focus ${
                      isActive ? 'bg-tas-primary-soft text-tas-accent-on-light' : 'text-tas-ink hover:bg-tas-parchment'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </div>

            <LanguageSwitcher variant="mobile" className="mt-4 border-t border-tas-line pt-4" />

            <div className="mt-4 grid gap-3 border-t border-tas-line pt-4 sm:grid-cols-2">
              <a
                href={`tel:${PHONE_TEL}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-tas-line bg-tas-surface px-4 text-sm font-semibold text-tas-ink transition-colors hover:border-tas-ink/40"
              >
                <Phone className="h-4 w-4 text-tas-accent-on-light" />
                <span>{t('nav.callWithNumber', { phone: PHONE_DISPLAY })}</span>
              </a>
              <a
                href={whatsappLink(t('stickyBar.whatsappMessage'))}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 text-sm font-semibold text-tas-ink transition-colors hover:bg-[#2BE171]"
              >
                <MessageSquare className="h-4 w-4" />
                <span>{t('nav.whatsapp')}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
