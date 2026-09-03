import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import {
  COMPANY_LEGAL_NAME,
  ADDRESS_LINE1,
  ADDRESS_LINE2,
  PHONE_DISPLAY,
  FAX_DISPLAY,
  EMAIL,
  VAT_NUMBER,
} from '../../../config/contact';

const emComponent = { em: <span className="text-tas-accent-on-light" /> };

export const AmberImprintPage: React.FC = () => {
  const { t } = useTranslation('legal');

  return (
    <div className="min-h-screen bg-tas-paper">
      <section className="border-b border-tas-line bg-tas-parchment">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:py-20 lg:px-16">
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-tas-ink sm:text-5xl">
            <Trans i18nKey="legal:imprint.title" components={emComponent} />
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-tas-muted-text">{t('imprint.subtitle')}</p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20 lg:px-16">
        <div className="space-y-10">
          <section>
            <h2 className="text-xl font-bold text-tas-ink">{t('imprint.publisher')}</h2>
            <div className="mt-3 space-y-1 text-base leading-relaxed text-tas-ink">
              <p className="font-semibold">{COMPANY_LEGAL_NAME}</p>
              <p>{ADDRESS_LINE1}</p>
              <p>{ADDRESS_LINE2}</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-tas-ink">{t('imprint.contact.title')}</h2>
            <div className="mt-3 space-y-1 text-base leading-relaxed text-tas-ink">
              <p>
                {t('imprint.contact.phoneLabel')}{' '}
                <a
                  href={`tel:${PHONE_DISPLAY.replace(/\s+/g, '')}`}
                  className="text-tas-accent-on-light hover:text-tas-accent-strong underline-offset-4 hover:underline"
                >
                  {PHONE_DISPLAY}
                </a>
              </p>
              <p>{t('imprint.contact.faxLabel')} {FAX_DISPLAY}</p>
              <p>
                {t('imprint.contact.emailLabel')}{' '}
                <a href={`mailto:${EMAIL}`} className="text-tas-accent-on-light hover:text-tas-accent-strong underline-offset-4 hover:underline">
                  {EMAIL}
                </a>
              </p>
              <p className="text-tas-muted-text">{t('imprint.contact.pecNote')}</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-tas-ink">{t('imprint.company.title')}</h2>
            <div className="mt-3 space-y-1 text-base leading-relaxed text-tas-ink">
              <p>{t('imprint.company.vatLabel', { value: VAT_NUMBER })}</p>
              <p className="text-tas-muted-text">{t('imprint.company.codeNote')}</p>
              <p className="text-tas-muted-text">{t('imprint.company.reaNote')}</p>
              <p className="text-tas-muted-text">{t('imprint.company.repNote')}</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-tas-ink">{t('imprint.authorisations.title')}</h2>
            <div className="mt-3 space-y-1 text-base leading-relaxed">
              <p className="text-tas-muted-text">{t('imprint.authorisations.ncc')}</p>
              <p className="text-tas-muted-text">{t('imprint.authorisations.bus')}</p>
              <p className="text-tas-muted-text">{t('imprint.authorisations.authority')}</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-tas-ink">{t('imprint.insurance.title')}</h2>
            <p className="mt-3 text-base leading-relaxed text-tas-muted-text">{t('imprint.insurance.body')}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-tas-ink">{t('imprint.hosting.title')}</h2>
            <p className="mt-3 text-base leading-relaxed text-tas-ink">
              <Trans i18nKey="legal:imprint.hosting.body" components={{ b: <strong /> }} />
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-tas-ink">{t('imprint.credits.title')}</h2>
            <p className="mt-3 text-base leading-relaxed text-tas-muted-text">{t('imprint.credits.body')}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-tas-ink">{t('imprint.terms.title')}</h2>
            <p className="mt-3 text-base leading-relaxed text-tas-ink">{t('imprint.terms.p1')}</p>
            <p className="mt-3 text-base leading-relaxed text-tas-ink">
              <Trans i18nKey="legal:imprint.terms.p2" components={{ b: <strong /> }} />
            </p>
            <p className="mt-3 text-base leading-relaxed text-tas-ink">{t('imprint.terms.p3')}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-tas-ink">{t('imprint.copyright.title')}</h2>
            <p className="mt-3 text-base leading-relaxed text-tas-ink">{t('imprint.copyright.body', { company: COMPANY_LEGAL_NAME })}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AmberImprintPage;
