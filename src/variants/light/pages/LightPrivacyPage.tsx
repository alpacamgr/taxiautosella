import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import {
  COMPANY_LEGAL_NAME,
  ADDRESS_LINE1,
  ADDRESS_LINE2,
  EMAIL,
  PHONE_DISPLAY,
} from '../../../config/contact';

const emComponent = { em: <span className="text-tas-primary" /> };

export const LightPrivacyPage: React.FC = () => {
  const { t } = useTranslation('legal');

  const dataItems = t('privacy.sections.data.items', { returnObjects: true }) as string[];
  const basesItems = t('privacy.sections.bases.items', { returnObjects: true }) as string[];
  const recipientsItems = t('privacy.sections.recipients.items', { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen bg-tas-paper">
      <section className="border-b border-tas-line bg-tas-parchment">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:py-20 lg:px-16">
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-tas-ink sm:text-5xl">
            <Trans i18nKey="legal:privacy.title" components={emComponent} />
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-tas-muted-text">{t('lastUpdated')}</p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20 lg:px-16">
        <div className="space-y-10">
          <section>
            <p className="text-base leading-relaxed text-tas-ink">{t('privacy.intro', { company: COMPANY_LEGAL_NAME })}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-tas-ink">{t('privacy.sections.controller.title')}</h2>
            <div className="mt-3 space-y-1 text-base leading-relaxed text-tas-ink">
              <p>{COMPANY_LEGAL_NAME}</p>
              <p>{ADDRESS_LINE1}</p>
              <p>{ADDRESS_LINE2}</p>
              <p>
                {t('privacy.sections.controller.emailLabel')}{' '}
                <a href={`mailto:${EMAIL}`} className="text-tas-primary hover:text-tas-primary-hover underline-offset-4 hover:underline">
                  {EMAIL}
                </a>
              </p>
              <p>
                {t('privacy.sections.controller.phoneLabel')} {PHONE_DISPLAY}
              </p>
              <p className="text-tas-muted-text">{t('privacy.sections.controller.dpoNote')}</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-tas-ink">{t('privacy.sections.data.title')}</h2>
            <p className="mt-3 text-base leading-relaxed text-tas-ink">{t('privacy.sections.data.intro')}</p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-base leading-relaxed text-tas-ink">
              {dataItems.map((item, i) => (
                <li key={i}>
                  <Trans defaults={item} components={{ b: <strong /> }} />
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-tas-ink">{t('privacy.sections.bases.title')}</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-base leading-relaxed text-tas-ink">
              {basesItems.map((item, i) => (
                <li key={i}>
                  <Trans defaults={item} components={{ b: <strong /> }} />
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-tas-ink">{t('privacy.sections.recipients.title')}</h2>
            <p className="mt-3 text-base leading-relaxed text-tas-ink">{t('privacy.sections.recipients.intro')}</p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-base leading-relaxed text-tas-ink">
              {recipientsItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="mt-3 text-base leading-relaxed text-tas-muted-text">{t('privacy.sections.recipients.note')}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-tas-ink">{t('privacy.sections.transfers.title')}</h2>
            <p className="mt-3 text-base leading-relaxed text-tas-ink">{t('privacy.sections.transfers.body')}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-tas-ink">{t('privacy.sections.retention.title')}</h2>
            <p className="mt-3 text-base leading-relaxed text-tas-ink">{t('privacy.sections.retention.body')}</p>
            <p className="mt-2 text-base leading-relaxed text-tas-muted-text">{t('privacy.sections.retention.note')}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-tas-ink">{t('privacy.sections.rights.title')}</h2>
            <p className="mt-3 text-base leading-relaxed text-tas-ink">{t('privacy.sections.rights.body')}</p>
            <p className="mt-3 text-base leading-relaxed text-tas-ink">
              <Trans
                i18nKey="legal:privacy.sections.rights.contact"
                components={{
                  email: (
                    <a
                      href={`mailto:${EMAIL}`}
                      className="text-tas-primary hover:text-tas-primary-hover underline-offset-4 hover:underline"
                    >
                      {EMAIL}
                    </a>
                  ),
                }}
              />
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-tas-ink">{t('privacy.sections.complaint.title')}</h2>
            <p className="mt-3 text-base leading-relaxed text-tas-ink">
              <Trans
                i18nKey="legal:privacy.sections.complaint.body"
                components={{
                  garante: (
                    <a
                      href="https://www.garanteprivacy.it"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-tas-primary hover:text-tas-primary-hover underline-offset-4 hover:underline"
                    />
                  ),
                }}
              />
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-tas-ink">{t('privacy.sections.automated.title')}</h2>
            <p className="mt-3 text-base leading-relaxed text-tas-ink">{t('privacy.sections.automated.body')}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-tas-ink">{t('privacy.sections.changes.title')}</h2>
            <p className="mt-3 text-base leading-relaxed text-tas-ink">{t('privacy.sections.changes.body')}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LightPrivacyPage;
