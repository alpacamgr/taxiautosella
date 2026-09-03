import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

/** Rendered for unknown paths. Adds a noindex robots meta while mounted. */
export const LuxuryNotFoundPage: React.FC = () => {
  const { t } = useTranslation('common');

  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex';
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <section className="py-24 px-6 lg:px-16 max-w-3xl mx-auto min-h-[60vh] flex flex-col justify-center">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-tas-accent-strong mb-4">{t('notFound.eyebrow')}</p>
      <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-tas-ink mb-6">
        <Trans t={t} i18nKey="notFound.title" components={{ em: <span className="italic text-tas-accent-on-light" /> }} />
      </h1>
      <p className="text-base text-tas-ink/80 font-light leading-relaxed max-w-xl mb-10">{t('notFound.body')}</p>
      <div className="flex flex-wrap gap-3">
        <Link
          to="/"
          className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-tas-ink px-5 text-[11px] font-bold uppercase tracking-[0.08em] text-tas-paper transition-colors hover:bg-[#1c2230] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-focus"
        >
          {t('notFound.home')} <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          to="/booking"
          className="inline-flex min-h-11 items-center rounded-lg border border-tas-ink/20 px-5 text-[11px] font-bold uppercase tracking-[0.08em] text-tas-ink transition-colors hover:border-tas-focus focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-focus"
        >
          {t('notFound.booking')}
        </Link>
        <Link
          to="/contact"
          className="inline-flex min-h-11 items-center rounded-lg border border-tas-ink/20 px-5 text-[11px] font-bold uppercase tracking-[0.08em] text-tas-ink transition-colors hover:border-tas-focus focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-focus"
        >
          {t('notFound.contact')}
        </Link>
      </div>
    </section>
  );
};

export default LuxuryNotFoundPage;
