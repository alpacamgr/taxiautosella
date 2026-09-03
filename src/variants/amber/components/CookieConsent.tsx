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
      <div className="relative rounded-2xl border border-tas-ink/15 bg-tas-paper p-5 text-tas-ink shadow-[0_24px_80px_rgba(17,32,25,0.24)] sm:p-6">
        <button
          type="button"
          onClick={() => decide('necessary')}
          aria-label={t('cookieBanner.dismissAria')}
          className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full text-tas-muted-60 hover:text-tas-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-focus"
        >
          <X className="h-4 w-4" />
        </button>

        <p className="pr-6 font-editorial text-xl leading-snug">{t('cookieBanner.title')}</p>
        <p className="mt-2 text-sm font-light leading-relaxed text-tas-ink/75">
          <Trans
            i18nKey="common:cookieBanner.body"
            components={{
              policy: (
                <Link to="/cookie-policy" className="underline decoration-tas-focus underline-offset-4 hover:text-tas-accent-strong" />
              ),
              privacy: (
                <Link to="/privacy" className="underline decoration-tas-focus underline-offset-4 hover:text-tas-accent-strong" />
              ),
            }}
          />
        </p>

        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => decide('necessary')}
            className="min-h-11 flex-1 rounded-lg border border-tas-ink/20 bg-transparent px-4 text-xs font-semibold uppercase tracking-[0.08em] text-tas-ink transition-colors hover:border-tas-accent-strong hover:text-tas-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-focus"
          >
            {t('cookieBanner.onlyNecessary')}
          </button>
          <button
            type="button"
            onClick={() => decide('all')}
            className="min-h-11 flex-1 rounded-lg bg-tas-ink px-4 text-xs font-semibold uppercase tracking-[0.08em] text-tas-paper transition-colors hover:bg-tas-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-focus"
          >
            {t('cookieBanner.acceptAll')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
