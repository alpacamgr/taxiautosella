import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useAppStore } from '../../../store/useAppStore';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '../components/Reveal';

const SERVICE_IDS = [
  'chauffeur',
  'ski',
  'casino',
  'nonEmergency',
  'wheelchair',
  'school',
  'childSeats',
  'pet',
  'courier',
  'trailer',
] as const;

const emComponent = { em: <span className="text-tas-accent-on-light" /> };

export const AmberServicesPage: React.FC = () => {
  const { openInquiryModal } = useAppStore();
  const { t } = useTranslation('services');

  return (
    <div className="bg-tas-paper">
      <section className="border-b border-tas-line bg-tas-parchment">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:py-20 lg:px-16">
          <Reveal>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-tas-ink sm:text-5xl">
              <Trans i18nKey="services:header.title" components={emComponent} />
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-tas-muted-text">
              {t('header.subtitle')}
            </p>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-16">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {SERVICE_IDS.map((id, i) => {
              const title = t(`items.${id}.title`);
              const desc = t(`items.${id}.desc`);
              return (
                <Reveal key={id} delay={(i % 2) * 60}>
                  <button
                    type="button"
                    onClick={() =>
                      openInquiryModal(
                        t('requestContext'),
                        t('requestPrefill', { title }),
                      )
                    }
                    className="group flex h-full w-full items-start justify-between gap-6 rounded-xl border border-tas-line bg-tas-surface p-6 text-left shadow-card transition-shadow hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-focus focus-visible:ring-offset-2"
                  >
                    <span className="min-w-0 flex-1">
                      <span className="block text-xl font-bold text-tas-ink group-hover:text-tas-accent-on-light">
                        {title}
                      </span>
                      <span className="mt-2 block text-base leading-relaxed text-tas-muted-text">
                        {desc}
                      </span>
                    </span>
                    <ArrowRight
                      className="mt-1 h-5 w-5 flex-none text-tas-accent-on-light transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </button>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-2xl bg-tas-ink p-8 text-white md:flex-row md:items-center md:p-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('cta.title')}</h2>
              <p className="mt-3 text-base leading-relaxed text-white/80">{t('cta.body')}</p>
            </div>
            <button
              onClick={() => openInquiryModal(t('cta.context'), t('cta.prefill'))}
              className="inline-flex min-h-12 w-full flex-none items-center justify-center gap-2 rounded-lg bg-tas-primary px-6 text-sm font-bold text-tas-on-accent transition-colors hover:bg-tas-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-tas-ink md:w-auto"
            >
              <span>{t('cta.button')}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
