import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Phone, Mail, MessageSquare, MapPin, Printer, Clock, ExternalLink } from 'lucide-react';
import {
  COMPANY_LEGAL_NAME,
  PHONE_DISPLAY,
  PHONE_TEL,
  FAX_DISPLAY,
  EMAIL,
  ADDRESS_LINE1,
  ADDRESS_LINE2,
  VAT_NUMBER,
  whatsappLink,
} from '../../../config/contact';
import { JsonLd } from '../components/JsonLd';
import { Reveal } from '../components/Reveal';

const mapEmbedSrc =
  'https://www.openstreetmap.org/export/embed.html?bbox=11.7130%2C46.5540%2C11.7330%2C46.5640&layer=mapnik&marker=46.5590%2C11.7230';
const googleMapsLink =
  'https://www.google.com/maps/search/?api=1&query=Str.+Gherdeina+7%2FA+39047+Santa+Cristina+Valgardena';

const emComponent = { em: <span className="text-tas-accent-on-light" /> };

export const AmberContactPage: React.FC = () => {
  const { t } = useTranslation(['contact', 'common']);

  const whatsappText = t('contact:whatsappMessage');

  const contactPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: t('pageName'),
    url: 'https://www.taxiautosella.it/contact',
    mainEntity: {
      '@type': 'Organization',
      name: COMPANY_LEGAL_NAME,
      telephone: PHONE_DISPLAY,
      faxNumber: FAX_DISPLAY,
      email: EMAIL,
      vatID: VAT_NUMBER,
      address: {
        '@type': 'PostalAddress',
        streetAddress: ADDRESS_LINE1,
        addressLocality: 'Santa Cristina Val Gardena',
        addressRegion: 'BZ',
        postalCode: '39047',
        addressCountry: 'IT',
      },
    },
  };

  return (
    <div className="bg-tas-paper">
      <JsonLd data={contactPageJsonLd} />

      <section className="border-b border-tas-line bg-tas-parchment">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:py-20 lg:px-16">
          <Reveal>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-tas-ink sm:text-5xl">
              <Trans i18nKey="contact:header.title" components={emComponent} />
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-tas-muted-text">
              {t('header.subtitle')}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-6">
            <Reveal>
              <div className="rounded-xl border border-tas-line bg-tas-surface p-6 shadow-card sm:p-8">
                <h2 className="text-2xl font-bold tracking-tight text-tas-ink">
                  {t('address.title')}
                </h2>

                <div className="mt-5 flex items-start gap-3">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-tas-primary-soft text-tas-accent-on-light">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="text-base leading-relaxed text-tas-muted-text">
                    <div className="font-semibold text-tas-ink">{COMPANY_LEGAL_NAME}</div>
                    <div>{ADDRESS_LINE1}</div>
                    <div>{ADDRESS_LINE2}</div>
                  </div>
                </div>

                <dl className="mt-6 space-y-5 border-t border-tas-line pt-6">
                  <div className="flex items-start gap-3">
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-tas-primary-soft text-tas-accent-on-light">
                      <Phone className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <dt className="text-sm font-semibold text-tas-ink">
                        {t('address.directDispatch')}
                      </dt>
                      <dd className="mt-1">
                        <a
                          href={`tel:${PHONE_TEL}`}
                          className="text-base font-semibold text-tas-accent-on-light hover:text-tas-accent-strong"
                        >
                          {PHONE_DISPLAY}
                        </a>
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-tas-primary-soft text-tas-accent-on-light">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <dt className="text-sm font-semibold text-tas-ink">{t('address.email')}</dt>
                      <dd className="mt-1">
                        <a
                          href={`mailto:${EMAIL}`}
                          className="text-base font-semibold text-tas-accent-on-light hover:text-tas-accent-strong"
                        >
                          {EMAIL}
                        </a>
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-tas-primary-soft text-tas-accent-on-light">
                      <Printer className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <dt className="text-sm font-semibold text-tas-ink">{t('address.fax')}</dt>
                      <dd className="mt-1 text-base text-tas-muted-text">{FAX_DISPLAY}</dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span
                      className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-tas-primary-soft text-sm font-bold text-tas-accent-on-light"
                      aria-hidden="true"
                    >
                      {t('address.vatBadge')}
                    </span>
                    <div>
                      <dt className="text-sm font-semibold text-tas-ink">
                        {t('address.vatLabel')}
                      </dt>
                      <dd className="mt-1 text-base text-tas-muted-text">{VAT_NUMBER}</dd>
                    </div>
                  </div>
                </dl>

                <a
                  href={whatsappLink(whatsappText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-tas-primary px-5 py-3 text-center text-sm font-bold text-tas-on-accent transition-colors hover:bg-tas-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-focus focus-visible:ring-offset-2"
                >
                  <MessageSquare className="h-4 w-4 flex-none" />
                  {t('address.whatsappButton')}
                </a>
              </div>
            </Reveal>

            <Reveal delay={60}>
              <div className="rounded-xl bg-tas-primary-soft p-6 sm:p-8">
                <div className="flex items-start gap-3">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-white text-tas-accent-on-light">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="text-xl font-bold tracking-tight text-tas-ink sm:text-2xl">
                      {t('hours.title')}
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-tas-muted-text">
                      {t('hours.body')}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="space-y-6">
            <Reveal delay={60}>
              <div className="overflow-hidden rounded-xl border border-tas-line bg-tas-surface shadow-card">
                <div className="aspect-[4/3] w-full bg-tas-parchment">
                  <iframe
                    title={t('map.title')}
                    src={mapEmbedSrc}
                    loading="lazy"
                    className="h-full w-full border-0"
                  />
                </div>
                <div className="flex flex-col gap-3 border-t border-tas-line p-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-tas-muted-text">{t('map.note')}</p>
                  <a
                    href={googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-tas-line bg-tas-surface px-4 text-sm font-semibold text-tas-ink transition-colors hover:border-tas-ink/40"
                  >
                    {t('map.openGoogle')}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-xl border border-tas-line bg-tas-surface p-6 shadow-card sm:p-8">
                <h2 className="text-2xl font-bold tracking-tight text-tas-ink">
                  {t('howToFind.title')}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-tas-muted-text">
                  {t('howToFind.body')}
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal>
          <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-2xl bg-tas-ink p-8 text-white md:flex-row md:items-center md:p-12">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                <Trans i18nKey="contact:cta.title" components={emComponent} />
              </h2>
              <p className="mt-3 text-base leading-relaxed text-white/75">{t('cta.body')}</p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex w-full min-h-12 items-center justify-center gap-2 rounded-lg bg-tas-primary px-6 text-sm font-bold text-tas-on-accent transition-colors hover:bg-tas-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-tas-ink sm:w-auto"
              >
                <Phone className="h-4 w-4" />
                {t('cta.call', { phone: PHONE_DISPLAY })}
              </a>
              <a
                href={whatsappLink(whatsappText)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full min-h-12 items-center justify-center gap-2 rounded-lg border border-white/30 px-6 text-sm font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-tas-ink sm:w-auto"
              >
                <MessageSquare className="h-4 w-4" />
                {t('common:nav.whatsapp' as const)}
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default AmberContactPage;
