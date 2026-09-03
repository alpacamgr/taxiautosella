import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import {
  COMPANY_LEGAL_NAME,
  ADDRESS_LINE1,
  ADDRESS_LINE2,
  EMAIL,
  PHONE_DISPLAY,
} from '../../../config/contact';

const emComponent = { em: <span className="italic text-tas-accent-on-light" /> };

export const LuxuryPrivacyPage: React.FC = () => {
  const { t } = useTranslation('legal');

  const dataItems = t('privacy.sections.data.items', { returnObjects: true }) as string[];
  const basesItems = t('privacy.sections.bases.items', { returnObjects: true }) as string[];
  const recipientsItems = t('privacy.sections.recipients.items', { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen bg-tas-paper pt-24 pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-16">
        <header className="mb-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-tas-accent-strong">{t('eyebrow')}</p>
          <h1 className="mt-3 font-editorial text-5xl font-normal text-tas-ink lg:text-6xl">
            <Trans i18nKey="legal:privacy.title" components={emComponent} />
          </h1>
          <p className="mt-6 text-sm font-light italic text-tas-muted-60">{t('lastUpdated')}</p>
        </header>

        <div className="space-y-10 text-[15px] font-light leading-relaxed text-tas-ink/85">
          <section>
            <p>{t('privacy.intro', { company: COMPANY_LEGAL_NAME })}</p>
          </section>

          <section>
            <h2 className="font-editorial text-2xl text-tas-ink">{t('privacy.sections.controller.title')}</h2>
            <div className="mt-3 space-y-1">
              <p>{COMPANY_LEGAL_NAME}</p>
              <p>{ADDRESS_LINE1}</p>
              <p>{ADDRESS_LINE2}</p>
              <p>
                {t('privacy.sections.controller.emailLabel')}{' '}
                <a href={`mailto:${EMAIL}`} className="underline decoration-tas-focus underline-offset-4 hover:text-tas-accent-strong">
                  {EMAIL}
                </a>
              </p>
              <p>
                {t('privacy.sections.controller.phoneLabel')} {PHONE_DISPLAY}
              </p>
              <p className="text-tas-muted-60">{t('privacy.sections.controller.dpoNote')}</p>
            </div>
          </section>

          <section>
            <h2 className="font-editorial text-2xl text-tas-ink">{t('privacy.sections.data.title')}</h2>
            <p className="mt-3">{t('privacy.sections.data.intro')}</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              {dataItems.map((item, i) => (
                <li key={i}>
                  <Trans defaults={item} components={{ b: <strong /> }} />
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-editorial text-2xl text-tas-ink">{t('privacy.sections.bases.title')}</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              {basesItems.map((item, i) => (
                <li key={i}>
                  <Trans defaults={item} components={{ b: <strong /> }} />
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-editorial text-2xl text-tas-ink">{t('privacy.sections.recipients.title')}</h2>
            <p className="mt-3">{t('privacy.sections.recipients.intro')}</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              {recipientsItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="mt-3 text-tas-ink/70">{t('privacy.sections.recipients.note')}</p>
          </section>

          <section>
            <h2 className="font-editorial text-2xl text-tas-ink">{t('privacy.sections.transfers.title')}</h2>
            <p className="mt-3">{t('privacy.sections.transfers.body')}</p>
          </section>

          <section>
            <h2 className="font-editorial text-2xl text-tas-ink">{t('privacy.sections.retention.title')}</h2>
            <p className="mt-3">{t('privacy.sections.retention.body')}</p>
            <p className="mt-2 text-tas-ink/70">{t('privacy.sections.retention.note')}</p>
          </section>

          <section>
            <h2 className="font-editorial text-2xl text-tas-ink">{t('privacy.sections.rights.title')}</h2>
            <p className="mt-3">{t('privacy.sections.rights.body')}</p>
            <p className="mt-3">
              <Trans
                i18nKey="legal:privacy.sections.rights.contact"
                components={{
                  email: (
                    <a
                      href={`mailto:${EMAIL}`}
                      className="underline decoration-tas-focus underline-offset-4 hover:text-tas-accent-strong"
                    >
                      {EMAIL}
                    </a>
                  ),
                }}
              />
            </p>
          </section>

          <section>
            <h2 className="font-editorial text-2xl text-tas-ink">{t('privacy.sections.complaint.title')}</h2>
            <p className="mt-3">
              <Trans
                i18nKey="legal:privacy.sections.complaint.body"
                components={{
                  garante: (
                    <a
                      href="https://www.garanteprivacy.it"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-tas-focus underline-offset-4 hover:text-tas-accent-strong"
                    />
                  ),
                }}
              />
            </p>
          </section>

          <section>
            <h2 className="font-editorial text-2xl text-tas-ink">{t('privacy.sections.automated.title')}</h2>
            <p className="mt-3">{t('privacy.sections.automated.body')}</p>
          </section>

          <section>
            <h2 className="font-editorial text-2xl text-tas-ink">{t('privacy.sections.changes.title')}</h2>
            <p className="mt-3">{t('privacy.sections.changes.body')}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LuxuryPrivacyPage;
