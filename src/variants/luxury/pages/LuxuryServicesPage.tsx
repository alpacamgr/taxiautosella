import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useAppStore } from '../../../store/useAppStore';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '../../../components/motion/Reveal';

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

const emComponent = { em: <span className="italic text-[#C5A880]" /> };

export const LuxuryServicesPage: React.FC = () => {
  const { openInquiryModal } = useAppStore();
  const { t } = useTranslation('services');

  return (
    <div className="min-h-screen bg-[#F8F6F0] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <Reveal>
          <header className="mb-16 max-w-3xl">
            <h1 className="font-editorial text-5xl lg:text-7xl font-normal text-[#0E1117] mb-6">
              <Trans i18nKey="services:header.title" components={emComponent} />
            </h1>
            <p className="text-[#0E1117]/70 text-lg font-light leading-relaxed">
              {t('header.subtitle')}
            </p>
          </header>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-[#0E1117]/15">
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
                  className={`group flex min-h-36 w-full items-start justify-between gap-6 border-b border-[#0E1117]/15 py-6 text-left transition-colors hover:text-[#8C6D46] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6D46] focus-visible:ring-inset md:py-7 ${i % 2 === 0 ? 'md:pr-8' : 'md:border-l md:pl-8'}`}
                >
                  <span>
                    <span className="block font-editorial text-2xl text-[#0E1117] mb-2">{title}</span>
                    <span className="block max-w-md text-sm text-[#0E1117]/70 font-light leading-relaxed">
                      {desc}
                    </span>
                  </span>
                  <ArrowRight className="mt-1 h-5 w-5 flex-none transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </button>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-7 border border-[#0E1117]/15 bg-[#EEE9DE] p-8 md:flex-row md:items-center md:p-12">
          <div className="max-w-2xl">
            <h2 className="font-editorial text-4xl mb-3">{t('cta.title')}</h2>
            <p className="text-[#0E1117]/70 font-light">{t('cta.body')}</p>
          </div>
          <button
            onClick={() => openInquiryModal(t('cta.context'), t('cta.prefill'))}
            className="flex min-h-12 w-full items-center justify-center gap-2 bg-[#0E1117] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#8C6D46] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6D46] focus-visible:ring-offset-2 md:w-auto"
          >
            <span>{t('cta.button')}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
