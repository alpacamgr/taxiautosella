import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

/** Rendered for unknown paths. Adds a noindex robots meta while mounted. */
export const LightNotFoundPage: React.FC = () => {
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
    <section className="min-h-[60vh] flex flex-col justify-center mx-auto max-w-3xl px-6 py-24 lg:px-16">
      <h1 className="text-4xl font-bold tracking-tight text-tas-ink sm:text-5xl mb-6 leading-tight">
        <Trans t={t} i18nKey="notFound.title" components={{ em: <span className="text-tas-primary" /> }} />
      </h1>
      <p className="text-base leading-relaxed text-tas-muted-text max-w-xl mb-10">{t('notFound.body')}</p>
      <div className="flex flex-wrap gap-3">
        <Link
          to="/"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-tas-primary px-5 text-sm font-bold text-white transition-colors hover:bg-tas-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-primary focus-visible:ring-offset-2"
        >
          {t('notFound.home')} <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          to="/booking"
          className="inline-flex min-h-12 items-center justify-center rounded-lg border border-tas-line bg-tas-surface px-5 text-sm font-bold text-tas-ink transition-colors hover:border-tas-ink/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-primary focus-visible:ring-offset-2"
        >
          {t('notFound.booking')}
        </Link>
        <Link
          to="/contact"
          className="inline-flex min-h-12 items-center justify-center rounded-lg border border-tas-line bg-tas-surface px-5 text-sm font-bold text-tas-ink transition-colors hover:border-tas-ink/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-primary focus-visible:ring-offset-2"
        >
          {t('notFound.contact')}
        </Link>
      </div>
    </section>
  );
};

export default LightNotFoundPage;
