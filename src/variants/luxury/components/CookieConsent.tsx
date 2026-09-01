import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';
import { X } from 'lucide-react';

const STORAGE_KEY = 'tas-cookie-consent';

type Choice = 'necessary' | 'all';

const readChoice = (): Choice | null => {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === 'necessary' || v === 'all') return v;
  } catch {
    /* ignore */
  }
  return null;
};

const writeChoice = (c: Choice) => {
  try {
    localStorage.setItem(STORAGE_KEY, c);
  } catch {
    /* ignore */
  }
};

export const CookieConsent: React.FC = () => {
  const { t } = useTranslation('common');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (readChoice() === null) setVisible(true);
    const handler = () => setVisible(true);
    window.addEventListener('open-cookie-settings', handler);
    return () => window.removeEventListener('open-cookie-settings', handler);
  }, []);

  if (!visible) return null;

  const decide = (c: Choice) => {
    writeChoice(c);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label={t('cookieBanner.ariaLabel')}
      className="fixed inset-x-3 bottom-[calc(env(safe-area-inset-bottom)+72px)] z-50 sm:inset-auto sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-sm lg:bottom-6"
    >
      <div className="relative rounded-2xl border border-[#0E1117]/15 bg-[#F8F6F0] p-5 text-[#0E1117] shadow-[0_24px_80px_rgba(17,32,25,0.24)] sm:p-6">
        <button
          type="button"
          onClick={() => decide('necessary')}
          aria-label={t('cookieBanner.dismissAria')}
          className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full text-[#0E1117]/60 hover:text-[#0E1117] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
        >
          <X className="h-4 w-4" />
        </button>

        <p className="pr-6 font-editorial text-xl leading-snug">{t('cookieBanner.title')}</p>
        <p className="mt-2 text-sm font-light leading-relaxed text-[#0E1117]/75">
          <Trans
            i18nKey="common:cookieBanner.body"
            components={{
              policy: (
                <Link to="/cookie-policy" className="underline decoration-[#C5A880] underline-offset-4 hover:text-[#8C6D46]" />
              ),
              privacy: (
                <Link to="/privacy" className="underline decoration-[#C5A880] underline-offset-4 hover:text-[#8C6D46]" />
              ),
            }}
          />
        </p>

        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => decide('necessary')}
            className="min-h-11 flex-1 rounded-lg border border-[#0E1117]/20 bg-transparent px-4 text-xs font-semibold uppercase tracking-[0.08em] text-[#0E1117] transition-colors hover:border-[#8C6D46] hover:text-[#8C6D46] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
          >
            {t('cookieBanner.onlyNecessary')}
          </button>
          <button
            type="button"
            onClick={() => decide('all')}
            className="min-h-11 flex-1 rounded-lg bg-[#0E1117] px-4 text-xs font-semibold uppercase tracking-[0.08em] text-[#F8F6F0] transition-colors hover:bg-[#8C6D46] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
          >
            {t('cookieBanner.acceptAll')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
