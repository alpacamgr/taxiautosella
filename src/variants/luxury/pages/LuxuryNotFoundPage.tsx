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
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8C6D46] mb-4">{t('notFound.eyebrow')}</p>
      <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-[#0E1117] mb-6">
        <Trans t={t} i18nKey="notFound.title" components={{ em: <span className="italic text-[#C5A880]" /> }} />
      </h1>
      <p className="text-base text-[#0E1117]/80 font-light leading-relaxed max-w-xl mb-10">{t('notFound.body')}</p>
      <div className="flex flex-wrap gap-3">
        <Link
          to="/"
          className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#0E1117] px-5 text-[11px] font-bold uppercase tracking-[0.08em] text-[#F8F6F0] transition-colors hover:bg-[#1c2230] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
        >
          {t('notFound.home')} <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          to="/booking"
          className="inline-flex min-h-11 items-center rounded-lg border border-[#0E1117]/20 px-5 text-[11px] font-bold uppercase tracking-[0.08em] text-[#0E1117] transition-colors hover:border-[#C5A880] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
        >
          {t('notFound.booking')}
        </Link>
        <Link
          to="/contact"
          className="inline-flex min-h-11 items-center rounded-lg border border-[#0E1117]/20 px-5 text-[11px] font-bold uppercase tracking-[0.08em] text-[#0E1117] transition-colors hover:border-[#C5A880] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
        >
          {t('notFound.contact')}
        </Link>
      </div>
    </section>
  );
};

export default LuxuryNotFoundPage;
