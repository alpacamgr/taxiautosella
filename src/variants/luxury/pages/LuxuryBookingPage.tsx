import React, { useEffect, useMemo } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useAppStore } from '../../../store/useAppStore';
import { ArrowRight, Info, X } from 'lucide-react';
import { BOOKING_WIDGET_URL } from '../../../config/contact';
import { Reveal } from '../../../components/motion/Reveal';
import { getCurrentLanguage, getCurrentLocale } from '../../../i18n';

const AIRPORT_IDS = ['bzo', 'inn', 'vrn', 'vce', 'tsf', 'bgy', 'muc', 'blq', 'mxp'] as const;
const STATION_IDS = ['ponte', 'chiusa', 'bressanone', 'bolzano'] as const;

const emPatina = { em: <span className="italic text-[#8C6D46]" /> };

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
      className="w-full flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-[#0E1117]/10 hover:border-[#8C6D46] hover:shadow-md cursor-pointer transition-all group text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6D46] focus-visible:ring-offset-2"
    >
      <span className="block">
        <span className="block font-semibold text-sm text-[#0E1117] group-hover:text-[#8C6D46] transition-colors">{name}</span>
        <span className="block text-xs text-[#0E1117]/60 mt-1 font-medium">
          {t('routeRow.approx', { dist, time })}
        </span>
      </span>
      <span className="block text-right">
        <span className="block text-lg font-editorial text-[#0E1117] font-bold group-hover:text-[#8C6D46] transition-colors">{price}</span>
        <span className="block text-[10px] uppercase tracking-wider text-[#0E1117]/60 font-semibold">{t('routeRow.indicative')}</span>
      </span>
    </a>
  );
};

export const LuxuryBookingPage: React.FC = () => {
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
    <div className="min-h-screen bg-[#F8F6F0] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <Reveal>
          <header className="mb-10">
            <h1 className="font-editorial text-5xl lg:text-7xl font-normal text-[#0E1117] mb-6">
              <Trans i18nKey="booking:header.title" components={emPatina} />
            </h1>
            <p className="text-[#0E1117]/80 text-lg max-w-2xl font-light leading-relaxed">
              {t('header.subtitle')}
            </p>
          </header>
        </Reveal>

        <section id="instant-quote" className="mb-20 scroll-mt-28">
          <Reveal>
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#8C6D46] mb-3">
              <span className="inline-block h-px w-6 bg-[#C5A880]" aria-hidden="true" />
              {t('instantQuote.eyebrow')}
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#0E1117] mb-3">
              <Trans i18nKey="booking:instantQuote.title" components={emPatina} />
            </h2>
            <p className="text-[#0E1117]/75 text-base max-w-2xl font-light leading-relaxed mb-6">
              {t('instantQuote.body')}
            </p>
          </Reveal>

          {heroPrefill && (
            <div className="mb-4 flex flex-wrap items-start justify-between gap-3 rounded-2xl border border-[#8C6D46]/30 bg-[#EEE9DE] px-4 py-3">
              <p className="text-sm leading-6 text-[#0E1117]/85 flex-1 min-w-[240px]">
                <span className="font-semibold text-[#0E1117]">{t('instantQuote.prefillBanner.label')}</span>{' '}
                {heroPrefill.pickup || t('instantQuote.prefillBanner.empty')} → {heroPrefill.destination || t('instantQuote.prefillBanner.empty')}
                {formattedDate ? ` · ${formattedDate}` : ''}
                {heroPrefill.passengers ? ` · ${heroPrefill.passengers}${t('instantQuote.prefillBanner.passengersSuffix')}` : ''}
                {t('instantQuote.prefillBanner.trailing')}
              </p>
              <button
                type="button"
                onClick={clearHeroPrefill}
                aria-label={t('instantQuote.prefillBanner.dismiss')}
                className="flex h-8 w-8 items-center justify-center rounded-full text-[#0E1117]/60 hover:bg-white/60 hover:text-[#0E1117] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6D46]"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          )}

          <div className="overflow-hidden rounded-2xl border border-[#0E1117]/10 bg-white shadow-xl">
            <iframe
              src={`${BOOKING_WIDGET_URL}/${currentLanguage}/`}
              title={t('instantQuote.iframeTitle')}
              loading="lazy"
              allow="geolocation"
              className="block w-full h-[900px] lg:h-[760px]"
            />
          </div>
          <p className="mt-3 text-xs text-[#0E1117]/60 font-medium">{t('instantQuote.note')}</p>
        </section>

        <div className="space-y-16">
          <section>
            <Reveal>
              <div className="flex items-center justify-between border-b border-[#0E1117]/10 pb-4 mb-6">
                <h2 className="font-editorial text-3xl text-[#0E1117]">{t('airports.title')}</h2>
                <span className="text-xs text-[#0E1117]/60 font-medium">{t('airports.note')}</span>
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
          </section>

          <section>
            <Reveal>
              <div className="flex items-center justify-between border-b border-[#0E1117]/10 pb-4 mb-6">
                <h2 className="font-editorial text-3xl text-[#0E1117]">{t('stations.title')}</h2>
                <span className="text-xs text-[#0E1117]/60 font-medium">{t('stations.note')}</span>
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
          </section>

          <section>
            <Reveal>
              <h2 className="font-editorial text-3xl text-[#0E1117] mb-6 border-b border-[#0E1117]/10 pb-4">
                {t('hourly.sectionTitle')}
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border border-[#0E1117]/15 bg-[#EEE9DE] p-6">
                <div className="flex items-start gap-4">
                  <Info className="w-6 h-6 text-[#8C6D46] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-base mb-1.5 text-[#0E1117]">{t('hourly.cardTitle')}</h4>
                    <p className="text-sm text-[#0E1117]/70 leading-relaxed font-light max-w-xl">
                      {t('hourly.cardBody')}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => openInquiryModal(t('hourly.context'), t('hourly.prefill'))}
                  className="self-start sm:self-auto inline-flex items-center gap-2 bg-[#0E1117] hover:bg-[#8C6D46] text-[#F8F6F0] transition-colors py-3 px-5 rounded-xl font-bold text-xs uppercase tracking-widest shadow-md"
                >
                  <span>{t('hourly.cta')}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </Reveal>
          </section>
        </div>
      </div>
    </div>
  );
};
