import React from 'react';
import { Link } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';

const openCookieSettings = () => {
  window.dispatchEvent(new CustomEvent('open-cookie-settings'));
};

const emComponent = { em: <span className="italic text-[#C5A880]" /> };

export const LuxuryCookiePolicyPage: React.FC = () => {
  const { t } = useTranslation('legal');

  const thirdPartyItems = t('cookiePolicy.sections.thirdParty.items', { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen bg-[#F8F6F0] pt-24 pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-16">
        <header className="mb-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#8C6D46]">{t('eyebrow')}</p>
          <h1 className="mt-3 font-editorial text-5xl font-normal text-[#0E1117] lg:text-6xl">
            <Trans i18nKey="legal:cookiePolicy.title" components={emComponent} />
          </h1>
          <p className="mt-6 text-sm font-light italic text-[#0E1117]/60">{t('lastUpdated')}</p>
        </header>

        <div className="space-y-10 text-[15px] font-light leading-relaxed text-[#0E1117]/85">
          <section>
            <p>
              <Trans
                i18nKey="legal:cookiePolicy.intro"
                components={{
                  privacy: (
                    <Link to="/privacy" className="underline decoration-[#C5A880] underline-offset-4 hover:text-[#8C6D46]" />
                  ),
                }}
              />
            </p>
          </section>

          <section>
            <h2 className="font-editorial text-2xl text-[#0E1117]">{t('cookiePolicy.sections.own.title')}</h2>
            <p className="mt-3">
              <Trans
                i18nKey="legal:cookiePolicy.sections.own.body"
                components={{
                  code: <code className="rounded bg-[#EEE9DE] px-1.5 py-0.5 text-[13px]" />,
                }}
              />
            </p>
            <p className="mt-3">{t('cookiePolicy.sections.own.extra')}</p>
          </section>

          <section>
            <h2 className="font-editorial text-2xl text-[#0E1117]">{t('cookiePolicy.sections.thirdParty.title')}</h2>
            <p className="mt-3">{t('cookiePolicy.sections.thirdParty.intro')}</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              {thirdPartyItems.map((item, i) => (
                <li key={i}>
                  <Trans defaults={item} components={{ b: <strong /> }} />
                </li>
              ))}
            </ul>
            <p className="mt-3">{t('cookiePolicy.sections.thirdParty.note')}</p>
          </section>

          <section>
            <h2 className="font-editorial text-2xl text-[#0E1117]">{t('cookiePolicy.sections.hosting.title')}</h2>
            <p className="mt-3">{t('cookiePolicy.sections.hosting.body')}</p>
          </section>

          <section>
            <h2 className="font-editorial text-2xl text-[#0E1117]">{t('cookiePolicy.sections.manage.title')}</h2>
            <p className="mt-3">{t('cookiePolicy.sections.manage.body')}</p>
            <button
              type="button"
              onClick={openCookieSettings}
              className="mt-4 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#0E1117]/20 bg-white px-6 text-xs font-semibold uppercase tracking-[0.08em] text-[#0E1117] transition-colors hover:border-[#8C6D46] hover:text-[#8C6D46] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
            >
              {t('cookiePolicy.sections.manage.button')}
            </button>
            <p className="mt-4">{t('cookiePolicy.sections.manage.extra')}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LuxuryCookiePolicyPage;
