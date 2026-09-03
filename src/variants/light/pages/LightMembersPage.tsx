import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Users, Award, GlassWater, ArrowRight, Phone } from 'lucide-react';
import { useAppStore } from '../../../store/useAppStore';
import { Reveal } from '../../../components/motion/Reveal';
import { PHONE_DISPLAY, PHONE_TEL } from '../../../config/contact';

// Proper names — never translated — stay in code.
const DRIVERS: readonly string[] = [
  'Bauer Dietrich', 'Bauer Martin', 'Bernardi Jonas', 'Comploi Johann',
  'Demetz Mark', 'Demetz Manuel', 'Falaha Mohamed Majd', 'Insam Andreas',
  'Moroder Mikeol', 'Perathoner Erich', 'Piazza Walter', 'Ploner Iwan',
  'Ploner Vittorio', 'Prinoth Markus', 'Prucker Egon', 'Runggaldier Franco',
  'Runggaldier Jasmin', 'Runggaldier Leo',
];

const PARTNERS = [
  { id: 'valgardena', url: 'https://www.valgardena.it' },
  { id: 'dolomitisuperski', url: 'https://www.dolomitisuperski.com' },
  { id: 'unesco', url: 'https://www.dolomitiunesco.info' },
  { id: 'suedtirol', url: 'https://www.suedtirol.info' },
  { id: 'elikos', url: 'https://www.elikos.com' },
  { id: 'sportclinic', url: 'https://www.dolomitisportclinic.com' },
  { id: 'intersport', url: 'https://www.intersportrent.com' },
  { id: 'hoteleuropa', url: 'https://www.hoteleuropa.it' },
  { id: 'rusctlea', url: 'https://www.rusctlea.com' },
  { id: 'woodcarving', url: 'https://www.woodcarvings.info' },
  { id: 'carrozzeria', url: 'https://www.carrozzeriagardena.it' },
  { id: 'digiem', url: 'https://www.digiem.it' },
] as const;

const VENUES: readonly string[] = [
  'Caffe 2000', 'Caffe Adler', 'Marina Lounge Bar', 'Piz 5', "Disco Dancing Dali'",
  'La Stua', "Goalies' Pub", 'Mauriz Keller', 'Bar 181', 'Après-Ski Saltos',
];

const emComponent = { em: <span className="text-tas-primary" /> };

const initials = (name: string): string =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w.charAt(0).toUpperCase())
    .join('');

export const LightMembersPage: React.FC = () => {
  const { openInquiryModal } = useAppStore();
  const { t } = useTranslation('members');

  return (
    <div className="bg-tas-paper">
      <section className="border-b border-tas-line bg-tas-parchment">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:py-20 lg:px-16">
          <Reveal>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-tas-ink sm:text-5xl">
              <Trans i18nKey="members:header.title" components={emComponent} />
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-tas-muted-text">
              {t('header.subtitle')}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-16">
        <Reveal>
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-tas-primary-soft text-tas-primary">
                <Users className="h-5 w-5" />
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-tas-ink sm:text-4xl">
                {t('drivers.sectionTitle')}
              </h2>
            </div>
            <span className="text-sm font-semibold text-tas-muted-text">
              {t('drivers.sectionCount')}
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DRIVERS.map((driver, i) => (
            <Reveal key={driver} delay={(i % 3) * 50}>
              <article className="flex h-full flex-col justify-between rounded-xl border border-tas-line bg-tas-surface p-5 shadow-card transition-shadow hover:shadow-card-hover">
                <div className="flex items-center gap-4">
                  <div
                    className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-tas-primary-soft text-base font-bold text-tas-primary"
                    aria-hidden="true"
                  >
                    {initials(driver)}
                    {i < 6 && (
                      <img
                        src={`/images/drivers/driver-0${i + 1}.jpg`}
                        alt=""
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    )}
                  </div>
                  <div className="min-w-0">
                    <div className="text-base font-bold leading-tight text-tas-ink">{driver}</div>
                    <div className="mt-1 text-sm text-tas-muted-text">{t('drivers.role')}</div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    openInquiryModal(
                      t('drivers.requestContext'),
                      t('drivers.requestPrefill', { driver }),
                    )
                  }
                  className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-tas-primary hover:text-tas-primary-hover"
                >
                  <span>{t('drivers.requestContext')}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-tas-line">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-16">
          <div>
            <Reveal>
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-tas-primary-soft text-tas-primary">
                  <Award className="h-5 w-5" />
                </span>
                <h2 className="text-2xl font-bold tracking-tight text-tas-ink sm:text-3xl">
                  {t('partners.sectionTitle')}
                </h2>
              </div>
              <p className="mb-6 text-base leading-relaxed text-tas-muted-text">
                {t('partners.sectionBody')}
              </p>
            </Reveal>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {PARTNERS.map((partner, i) => {
                const name = t(`partners.items.${partner.id}.name`);
                const desc = t(`partners.items.${partner.id}.desc`);
                return (
                  <Reveal key={partner.id} delay={(i % 3) * 40}>
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t('partners.visitAria', { name })}
                      className="group flex h-full items-center justify-between gap-3 rounded-xl border border-tas-line bg-tas-surface p-4 shadow-card transition-shadow hover:shadow-card-hover"
                    >
                      <div className="min-w-0">
                        <h4 className="text-sm font-bold text-tas-ink group-hover:text-tas-primary">
                          {name}
                        </h4>
                        <p className="mt-0.5 text-sm text-tas-muted-text">{desc}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 flex-shrink-0 text-tas-muted-text group-hover:text-tas-primary" />
                    </a>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <div>
            <Reveal>
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-tas-primary-soft text-tas-primary">
                  <GlassWater className="h-5 w-5" />
                </span>
                <h2 className="text-2xl font-bold tracking-tight text-tas-ink sm:text-3xl">
                  {t('nightlife.sectionTitle')}
                </h2>
              </div>
              <p className="mb-6 text-base leading-relaxed text-tas-muted-text">
                {t('nightlife.sectionBody')}
              </p>
            </Reveal>

            <div className="mb-8 flex flex-wrap gap-2.5">
              {VENUES.map((venue) => (
                <button
                  type="button"
                  key={venue}
                  onClick={() =>
                    openInquiryModal(
                      t('nightlife.requestContext'),
                      t('nightlife.requestPrefill', { venue }),
                    )
                  }
                  className="rounded-full border border-tas-line bg-tas-surface px-3.5 py-1.5 text-sm font-medium text-tas-ink transition-colors hover:border-tas-primary hover:text-tas-primary"
                >
                  {venue}
                </button>
              ))}
            </div>

            <Reveal>
              <div className="rounded-2xl bg-tas-ink p-6 text-white sm:p-8">
                <h4 className="text-xl font-bold text-white sm:text-2xl">
                  {t('nightlife.callBoxTitle')}
                </h4>
                <p className="mt-3 text-base leading-relaxed text-white/75">
                  {t('nightlife.callBoxBody')}
                </p>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-tas-primary px-5 text-sm font-bold text-white transition-colors hover:bg-tas-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-tas-ink"
                >
                  <Phone className="h-4 w-4" />
                  <span>{t('nightlife.callBoxButton', { phone: PHONE_DISPLAY })}</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};
