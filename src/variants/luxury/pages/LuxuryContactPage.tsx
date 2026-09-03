import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Phone, Mail, MessageSquare, MapPin, Printer, Clock, ExternalLink } from 'lucide-react';
import {
  COMPANY_NAME,
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
import { JsonLd } from '../../../components/seo/JsonLd';
import { Reveal } from '../../../components/motion/Reveal';

const mapEmbedSrc =
  'https://www.openstreetmap.org/export/embed.html?bbox=11.7130%2C46.5540%2C11.7330%2C46.5640&layer=mapnik&marker=46.5590%2C11.7230';
const googleMapsLink =
  'https://www.google.com/maps/search/?api=1&query=Str.+Gherdeina+7%2FA+39047+Santa+Cristina+Valgardena';

const emCream = { em: <span className="italic text-tas-accent-on-light" /> };

export const LuxuryContactPage: React.FC = () => {
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
    <div className="min-h-screen bg-tas-paper pt-24 pb-20">
      <JsonLd data={contactPageJsonLd} />
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <Reveal>
          <header className="mb-16 max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-tas-accent-strong">
              {t('header.eyebrow')}
            </p>
            <h1 className="mt-3 font-editorial text-5xl font-normal text-tas-ink lg:text-7xl">
              <Trans i18nKey="contact:header.title" components={emCream} />
            </h1>
            <p className="mt-6 text-lg font-light leading-relaxed text-tas-ink/75">
              {t('header.subtitle')}
            </p>
          </header>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            <Reveal>
              <div className="rounded-2xl border border-tas-ink/10 bg-tas-surface p-8 shadow-sm">
                <h2 className="font-editorial text-2xl text-tas-ink">{t('address.title')}</h2>
                <div className="mt-4 flex items-start gap-3 text-sm font-light leading-relaxed text-tas-ink/80">
                  <MapPin className="mt-0.5 h-4 w-4 flex-none text-tas-accent-on-light" aria-hidden="true" />
                  <div>
                    <div className="font-semibold text-tas-ink">{COMPANY_LEGAL_NAME}</div>
                    <div>{ADDRESS_LINE1}</div>
                    <div>{ADDRESS_LINE2}</div>
                  </div>
                </div>

                <dl className="mt-8 space-y-4 border-t border-tas-ink/10 pt-6 text-sm">
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 flex-none text-tas-accent-on-light" aria-hidden="true" />
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-tas-muted-60">
                        {t('address.directDispatch')}
                      </dt>
                      <dd>
                        <a
                          href={`tel:${PHONE_TEL}`}
                          className="font-semibold text-tas-ink underline decoration-tas-focus underline-offset-4 hover:text-tas-accent-strong"
                        >
                          {PHONE_DISPLAY}
                        </a>
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 flex-none text-tas-accent-on-light" aria-hidden="true" />
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-tas-muted-60">
                        {t('address.email')}
                      </dt>
                      <dd>
                        <a
                          href={`mailto:${EMAIL}`}
                          className="font-semibold text-tas-ink underline decoration-tas-focus underline-offset-4 hover:text-tas-accent-strong"
                        >
                          {EMAIL}
                        </a>
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Printer className="mt-0.5 h-4 w-4 flex-none text-tas-accent-on-light" aria-hidden="true" />
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-tas-muted-60">
                        {t('address.fax')}
                      </dt>
                      <dd className="font-light text-tas-ink/80">{FAX_DISPLAY}</dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex h-4 w-4 flex-none items-center justify-center text-[10px] font-bold text-tas-accent-on-light"
                      aria-hidden="true"
                    >
                      {t('address.vatBadge')}
                    </span>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-tas-muted-60">
                        {t('address.vatLabel')}
                      </dt>
                      <dd className="font-light text-tas-ink/80">{VAT_NUMBER}</dd>
                    </div>
                  </div>
                </dl>

                <a
                  href={whatsappLink(whatsappText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#176B48] px-4 text-xs font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#125A3C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-focus"
                >
                  <MessageSquare className="h-4 w-4" />
                  {t('address.whatsappButton')}
                </a>
              </div>
            </Reveal>

            <Reveal delay={60}>
              <div className="rounded-2xl border border-tas-ink/15 bg-tas-parchment p-8">
                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 flex-none text-tas-accent-strong" aria-hidden="true" />
                  <div>
                    <h2 className="font-editorial text-2xl text-tas-ink">{t('hours.title')}</h2>
                    <p className="mt-3 text-sm font-light leading-relaxed text-tas-ink/80">
                      {t('hours.body')}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="space-y-6">
            <Reveal delay={60}>
              <div className="overflow-hidden rounded-2xl border border-tas-ink/10 bg-tas-surface shadow-sm">
                <div className="aspect-[4/3] w-full bg-tas-parchment">
                  <iframe
                    title={t('map.title')}
                    src={mapEmbedSrc}
                    loading="lazy"
                    className="h-full w-full border-0"
                  />
                </div>
                <div className="flex flex-col gap-3 border-t border-tas-ink/10 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs font-light italic text-tas-muted-60">{t('map.note')}</p>
                  <a
                    href={googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-tas-ink/20 px-4 text-xs font-semibold uppercase tracking-[0.08em] text-tas-ink transition-colors hover:border-tas-accent-strong hover:text-tas-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-focus"
                  >
                    {t('map.openGoogle')}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-2xl border border-tas-ink/10 bg-tas-surface p-8 shadow-sm">
                <h2 className="font-editorial text-2xl text-tas-ink">{t('howToFind.title')}</h2>
                <p className="mt-3 text-sm font-light leading-relaxed text-tas-ink/75">
                  {t('howToFind.body')}
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal>
          <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-2xl border border-tas-ink/15 bg-tas-ink p-8 text-tas-paper md:flex-row md:items-center md:p-12">
            <div className="max-w-xl">
              <h2 className="font-editorial text-3xl text-tas-paper sm:text-4xl">
                <Trans i18nKey="contact:cta.title" components={emCream} />
              </h2>
              <p className="mt-3 text-sm font-light leading-relaxed text-tas-paper/70">
                {t('cta.body')}
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex min-h-12 items-center justify-center gap-2 rounded-lg bg-tas-brass-fill px-6 text-xs font-bold uppercase tracking-[0.08em] text-tas-ink transition-colors hover:bg-tas-brass-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Phone className="h-4 w-4" />
                {t('cta.call', { phone: PHONE_DISPLAY })}
              </a>
              <a
                href={whatsappLink(whatsappText)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/25 px-6 text-xs font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-tas-surface/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-focus"
              >
                <MessageSquare className="h-4 w-4" />
                {/* Use the shared nav "whatsapp" label */}
                {t('common:nav.whatsapp' as const)}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default LuxuryContactPage;
