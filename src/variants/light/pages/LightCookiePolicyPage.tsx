import React from 'react';
import { Link } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';

const openCookieSettings = () => {
  window.dispatchEvent(new CustomEvent('open-cookie-settings'));
};

const emComponent = { em: <span className="text-tas-primary" /> };

export const LightCookiePolicyPage: React.FC = () => {
  const { t } = useTranslation('legal');

  const thirdPartyItems = t('cookiePolicy.sections.thirdParty.items', { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen bg-tas-paper">
      <section className="border-b border-tas-line bg-tas-parchment">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:py-20 lg:px-16">
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-tas-ink sm:text-5xl">
            <Trans i18nKey="legal:cookiePolicy.title" components={emComponent} />
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-tas-muted-text">{t('lastUpdated')}</p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20 lg:px-16">
        <div className="space-y-10">
          <section>
            <p className="text-base leading-relaxed text-tas-ink">
              <Trans
                i18nKey="legal:cookiePolicy.intro"
                components={{
                  privacy: (
                    <Link to="/privacy" className="text-tas-primary hover:text-tas-primary-hover underline-offset-4 hover:underline" />
                  ),
                }}
              />
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-tas-ink">{t('cookiePolicy.sections.own.title')}</h2>
            <p className="mt-3 text-base leading-relaxed text-tas-ink">
              <Trans
                i18nKey="legal:cookiePolicy.sections.own.body"
                components={{
                  code: <code className="rounded bg-tas-parchment px-1.5 py-0.5 text-sm" />,
                }}
              />
            </p>
            <p className="mt-3 text-base leading-relaxed text-tas-ink">{t('cookiePolicy.sections.own.extra')}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-tas-ink">{t('cookiePolicy.sections.thirdParty.title')}</h2>
            <p className="mt-3 text-base leading-relaxed text-tas-ink">{t('cookiePolicy.sections.thirdParty.intro')}</p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-base leading-relaxed text-tas-ink">
              {thirdPartyItems.map((item, i) => (
                <li key={i}>
                  <Trans defaults={item} components={{ b: <strong /> }} />
                </li>
              ))}
            </ul>
            <p className="mt-3 text-base leading-relaxed text-tas-ink">{t('cookiePolicy.sections.thirdParty.note')}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-tas-ink">{t('cookiePolicy.sections.hosting.title')}</h2>
            <p className="mt-3 text-base leading-relaxed text-tas-ink">{t('cookiePolicy.sections.hosting.body')}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-tas-ink">{t('cookiePolicy.sections.manage.title')}</h2>
            <p className="mt-3 text-base leading-relaxed text-tas-ink">{t('cookiePolicy.sections.manage.body')}</p>
            <button
              type="button"
              onClick={openCookieSettings}
              className="mt-4 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-tas-primary px-5 text-sm font-bold text-white transition-colors hover:bg-tas-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-primary focus-visible:ring-offset-2"
            >
              {t('cookiePolicy.sections.manage.button')}
            </button>
            <p className="mt-4 text-base leading-relaxed text-tas-ink">{t('cookiePolicy.sections.manage.extra')}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LightCookiePolicyPage;
