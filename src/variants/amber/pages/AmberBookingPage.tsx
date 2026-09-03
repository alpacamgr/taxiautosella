import React, { useEffect, useMemo } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useAppStore } from '../../../store/useAppStore';
import { ArrowRight, Info, X } from 'lucide-react';
import { BOOKING_WIDGET_URL } from '../../../config/contact';
import { Reveal } from '../components/Reveal';
import { getCurrentLanguage, getCurrentLocale } from '../../../i18n';

const AIRPORT_IDS = ['bzo', 'inn', 'vrn', 'vce', 'tsf', 'bgy', 'muc', 'blq', 'mxp'] as const;
const STATION_IDS = ['ponte', 'chiusa', 'bressanone', 'bolzano'] as const;

const emComponent = { em: <span className="text-tas-accent-on-light" /> };

const RouteRow: React.FC<{
  name: string;
  price: string;
  time: string;
  dist: string;
  onScrollToQuote: React.MouseEventHandler;
}> = ({ name, price, time, dist, onScrollToQuote }) => {
  const { t } = useTranslation('booking');
  return (
    <a
      href="#instant-quote"
      onClick={onScrollToQuote}
      className="group flex w-full items-center justify-between gap-4 rounded-xl border border-tas-line bg-tas-surface p-5 text-left shadow-card transition-shadow hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-focus focus-visible:ring-offset-2"
    >
      <span className="min-w-0 flex-1">
        <span className="block text-base font-bold text-tas-ink group-hover:text-tas-accent-on-light">
          {name}
        </span>
        <span className="mt-1 block text-sm text-tas-muted-text">
          {t('routeRow.approx', { dist, time })}
        </span>
      </span>
      <span className="flex flex-none items-center gap-3">
        <span className="text-right">
          <span className="block text-lg font-bold text-tas-ink">{price}</span>
          <span className="block text-xs font-medium text-tas-muted-text">
            {t('routeRow.indicative')}
          </span>
        </span>
        <ArrowRight
          className="h-5 w-5 flex-none text-tas-accent-on-light transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </a>
  );
};

export const AmberBookingPage: React.FC = () => {
  const { openInquiryModal, heroPrefill, clearHeroPrefill } = useAppStore();
  const { t } = useTranslation('booking');

  const currentLanguage = getCurrentLanguage();
  const currentLocale = getCurrentLocale();

  const scrollToQuote: React.MouseEventHandler = (e) => {
    e.preventDefault();
    document.getElementById('instant-quote')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    if (heroPrefill) {
      const timer = window.setTimeout(() => {
        document.getElementById('instant-quote')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
      return () => window.clearTimeout(timer);
    }
  }, [heroPrefill]);

  const formattedDate = useMemo(() => {
    if (!heroPrefill?.date) return '';
    const dt = new Date(heroPrefill.date);
    if (Number.isNaN(dt.getTime())) return heroPrefill.date;
    try {
      return new Intl.DateTimeFormat(currentLocale, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }).format(dt);
    } catch {
      return heroPrefill.date;
    }
  }, [heroPrefill?.date, currentLocale]);

  return (
    <div className="bg-tas-paper">
      <section className="border-b border-tas-line bg-tas-parchment">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:py-20 lg:px-16">
          <Reveal>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-tas-ink sm:text-5xl">
              <Trans i18nKey="booking:header.title" components={emComponent} />
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-tas-muted-text">
              {t('header.subtitle')}
            </p>
          </Reveal>
        </div>
      </section>

      <section id="instant-quote" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-16">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-tas-ink sm:text-4xl">
              <Trans i18nKey="booking:instantQuote.title" components={emComponent} />
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-tas-muted-text">
              {t('instantQuote.body')}
            </p>
          </Reveal>

          {heroPrefill && (
            <div className="mt-6 flex flex-wrap items-start justify-between gap-3 rounded-xl bg-tas-primary-soft p-4">
              <p className="min-w-[240px] flex-1 text-sm leading-6 text-tas-ink">
                <span className="font-semibold text-tas-ink">{t('instantQuote.prefillBanner.label')}</span>{' '}
                {heroPrefill.pickup || t('instantQuote.prefillBanner.empty')} → {heroPrefill.destination || t('instantQuote.prefillBanner.empty')}
                {formattedDate ? ` · ${formattedDate}` : ''}
                {heroPrefill.passengers ? ` · ${heroPrefill.passengers}${t('instantQuote.prefillBanner.passengersSuffix')}` : ''}
                {t('instantQuote.prefillBanner.trailing')}
              </p>
              <button
                type="button"
                onClick={clearHeroPrefill}
                aria-label={t('instantQuote.prefillBanner.dismiss')}
                className="flex h-8 w-8 items-center justify-center rounded-full text-tas-muted-text transition-colors hover:bg-tas-surface hover:text-tas-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-focus"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          )}

          <div className="mt-6 overflow-hidden rounded-xl border border-tas-line bg-tas-surface shadow-card">
            <iframe
              src={`${BOOKING_WIDGET_URL}/${currentLanguage}/`}
              title={t('instantQuote.iframeTitle')}
              loading="lazy"
              allow="geolocation"
              className="block h-[760px] w-full"
            />
          </div>
          <p className="mt-3 text-sm text-tas-muted-text">{t('instantQuote.note')}</p>
        </div>
      </section>

      <section className="border-t border-tas-line bg-tas-parchment">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-16">
          <Reveal>
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
              <h2 className="text-3xl font-bold tracking-tight text-tas-ink sm:text-4xl">
                {t('airports.title')}
              </h2>
              <span className="text-sm text-tas-muted-text">{t('airports.note')}</span>
            </div>
          </Reveal>
          <div className="grid gap-3 md:grid-cols-2">
            {AIRPORT_IDS.map((id, i) => (
              <Reveal key={id} delay={(i % 4) * 60}>
                <RouteRow
                  name={t(`airports.items.${id}.name`)}
                  price={t(`airports.items.${id}.price`)}
                  time={t(`airports.items.${id}.time`)}
                  dist={t(`airports.items.${id}.dist`)}
                  onScrollToQuote={scrollToQuote}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-16">
          <Reveal>
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
              <h2 className="text-3xl font-bold tracking-tight text-tas-ink sm:text-4xl">
                {t('stations.title')}
              </h2>
              <span className="text-sm text-tas-muted-text">{t('stations.note')}</span>
            </div>
          </Reveal>
          <div className="grid gap-3 md:grid-cols-2">
            {STATION_IDS.map((id, i) => (
              <Reveal key={id} delay={(i % 2) * 60}>
                <RouteRow
                  name={t(`stations.items.${id}.name`)}
                  price={t(`stations.items.${id}.price`)}
                  time={t(`stations.items.${id}.time`)}
                  dist={t(`stations.items.${id}.dist`)}
                  onScrollToQuote={scrollToQuote}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-tas-line bg-tas-parchment">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-16">
          <Reveal>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-tas-ink sm:text-4xl">
              {t('hourly.sectionTitle')}
            </h2>
            <div className="flex flex-col gap-6 rounded-xl border border-tas-line bg-tas-surface p-6 shadow-card sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-tas-primary-soft text-tas-accent-on-light">
                  <Info className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-1.5 text-lg font-bold text-tas-ink">{t('hourly.cardTitle')}</h4>
                  <p className="max-w-xl text-base leading-relaxed text-tas-muted-text">
                    {t('hourly.cardBody')}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => openInquiryModal(t('hourly.context'), t('hourly.prefill'))}
                className="inline-flex min-h-12 flex-none items-center justify-center gap-2 self-start rounded-lg bg-tas-primary px-5 text-sm font-bold text-tas-on-accent transition-colors hover:bg-tas-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-focus focus-visible:ring-offset-2 sm:self-auto"
              >
                <span>{t('hourly.cta')}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
