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

const emComponent = { em: <span className="italic text-tas-accent-on-light" /> };

export const LuxuryImprintPage: React.FC = () => {
  const { t } = useTranslation('legal');

  return (
    <div className="min-h-screen bg-tas-paper pt-24 pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-16">
        <header className="mb-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-tas-accent-strong">{t('eyebrow')}</p>
          <h1 className="mt-3 font-editorial text-5xl font-normal text-tas-ink lg:text-6xl">
            <Trans i18nKey="legal:imprint.title" components={emComponent} />
          </h1>
          <p className="mt-6 text-sm font-light leading-relaxed text-tas-ink/70">{t('imprint.subtitle')}</p>
        </header>

        <div className="space-y-10 text-[15px] font-light leading-relaxed text-tas-ink/85">
          <section>
            <h2 className="font-editorial text-2xl text-tas-ink">{t('imprint.publisher')}</h2>
            <div className="mt-3 space-y-1">
              <p className="font-semibold text-tas-ink">{COMPANY_LEGAL_NAME}</p>
              <p>{ADDRESS_LINE1}</p>
              <p>{ADDRESS_LINE2}</p>
            </div>
          </section>

          <section>
            <h2 className="font-editorial text-2xl text-tas-ink">{t('imprint.contact.title')}</h2>
            <div className="mt-3 space-y-1">
              <p>
                {t('imprint.contact.phoneLabel')}{' '}
                <a
                  href={`tel:${PHONE_DISPLAY.replace(/\s+/g, '')}`}
                  className="underline decoration-tas-focus underline-offset-4 hover:text-tas-accent-strong"
                >
                  {PHONE_DISPLAY}
                </a>
              </p>
              <p>{t('imprint.contact.faxLabel')} {FAX_DISPLAY}</p>
              <p>
                {t('imprint.contact.emailLabel')}{' '}
                <a href={`mailto:${EMAIL}`} className="underline decoration-tas-focus underline-offset-4 hover:text-tas-accent-strong">
                  {EMAIL}
                </a>
              </p>
              <p className="text-tas-ink/70">{t('imprint.contact.pecNote')}</p>
            </div>
          </section>

          <section>
            <h2 className="font-editorial text-2xl text-tas-ink">{t('imprint.company.title')}</h2>
            <div className="mt-3 space-y-1">
              <p>{t('imprint.company.vatLabel', { value: VAT_NUMBER })}</p>
              <p className="text-tas-ink/70">{t('imprint.company.codeNote')}</p>
              <p className="text-tas-ink/70">{t('imprint.company.reaNote')}</p>
              <p className="text-tas-ink/70">{t('imprint.company.repNote')}</p>
            </div>
          </section>

          <section>
            <h2 className="font-editorial text-2xl text-tas-ink">{t('imprint.authorisations.title')}</h2>
            <div className="mt-3 space-y-1">
              <p className="text-tas-ink/70">{t('imprint.authorisations.ncc')}</p>
              <p className="text-tas-ink/70">{t('imprint.authorisations.bus')}</p>
              <p className="text-tas-ink/70">{t('imprint.authorisations.authority')}</p>
            </div>
          </section>

          <section>
            <h2 className="font-editorial text-2xl text-tas-ink">{t('imprint.insurance.title')}</h2>
            <p className="mt-3 text-tas-ink/70">{t('imprint.insurance.body')}</p>
          </section>

          <section>
            <h2 className="font-editorial text-2xl text-tas-ink">{t('imprint.hosting.title')}</h2>
            <p className="mt-3">
              <Trans i18nKey="legal:imprint.hosting.body" components={{ b: <strong /> }} />
            </p>
          </section>

          <section>
            <h2 className="font-editorial text-2xl text-tas-ink">{t('imprint.credits.title')}</h2>
            <p className="mt-3 text-tas-ink/70">{t('imprint.credits.body')}</p>
          </section>

          <section>
            <h2 className="font-editorial text-2xl text-tas-ink">{t('imprint.terms.title')}</h2>
            <p className="mt-3">{t('imprint.terms.p1')}</p>
            <p className="mt-3">
              <Trans i18nKey="legal:imprint.terms.p2" components={{ b: <strong /> }} />
            </p>
            <p className="mt-3">{t('imprint.terms.p3')}</p>
          </section>

          <section>
            <h2 className="font-editorial text-2xl text-tas-ink">{t('imprint.copyright.title')}</h2>
            <p className="mt-3">{t('imprint.copyright.body', { company: COMPANY_LEGAL_NAME })}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LuxuryImprintPage;
