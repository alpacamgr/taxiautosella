import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useAppStore } from '../../../store/useAppStore';
import { ArrowRight, Clock } from 'lucide-react';
import { ResponsiveImage } from '../../../components/ui/ResponsiveImage';
import { Reveal } from '../../../components/motion/Reveal';

interface ExcursionEntry {
  id: string;
  image: string;
}

const EXCURSIONS_UI: ExcursionEntry[] = [
  { id: 'dolomites-road', image: '/images/excursions/dolomites-sella-road.webp' },
  { id: 'alpine-hut', image: '/images/excursions/alpine-hut-evening.webp' },
  { id: 'venice', image: '/images/excursions/venice-lagoon-tour.jpg' },
  { id: 'verona-garda', image: '/images/excursions/lake-garda-sirmione-tour.jpg' },
  { id: 'innsbruck', image: '/images/excursions/innsbruck-golden-roof.webp' },
  { id: 'bolzano-merano', image: '/images/excursions/merano-promenade.webp' },
];

const emComponent = { em: <span className="italic text-tas-accent-on-light" /> };

export const LuxuryExcursionsPage: React.FC = () => {
  const { openInquiryModal } = useAppStore();
  const { t } = useTranslation('excursions');

  return (
    <div className="min-h-screen bg-tas-paper pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <Reveal>
          <header className="mb-16 max-w-3xl">
            <h1 className="font-editorial text-5xl lg:text-7xl font-normal text-tas-ink mb-6">
              <Trans i18nKey="excursions:header.title" components={emComponent} />
            </h1>
            <p className="text-tas-ink/80 text-lg font-light leading-relaxed">
              {t('header.subtitle')}
            </p>
          </header>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {EXCURSIONS_UI.map((exc, i) => {
            const title = t(`items.${exc.id}.title`);
            const duration = t(`items.${exc.id}.duration`);
            const desc = t(`items.${exc.id}.desc`);
            const alt = t(`items.${exc.id}.alt`);
            const badge = t(`items.${exc.id}.badge`);
            return (
              <Reveal key={exc.id} delay={(i % 2) * 80}>
                <article className="group bg-tas-surface rounded-2xl overflow-hidden shadow-xl border border-tas-ink/10 hover:border-tas-focus transition-all flex flex-col h-full">
                  <div className="w-full aspect-[3/2] bg-slate-900 overflow-hidden relative">
                    <ResponsiveImage
                      src={exc.image}
                      alt={alt}
                      width={1600}
                      height={1067}
                      priority={i < 2}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                    />
                    {badge && (
                      <span className="absolute top-4 left-4 px-3 py-1.5 bg-tas-ink/90 text-tas-paper text-[10px] font-bold uppercase tracking-wider rounded-md border border-white/15">
                        {badge}
                      </span>
                    )}
                  </div>
                  <div className="p-7 lg:p-8 flex flex-1 flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-tas-accent-on-light">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{duration}</span>
                        </div>
                      </div>
                      <h3 className="font-editorial text-2xl text-tas-ink mb-2.5 leading-tight">{title}</h3>
                      <p className="text-xs text-tas-ink/80 font-light leading-relaxed mb-6">{desc}</p>
                    </div>
                    <button
                      onClick={() =>
                        openInquiryModal(t('requestContext'), t('requestPrefill', { title, duration }))
                      }
                      className="self-start text-sm font-semibold text-tas-ink hover:text-tas-accent-strong transition-colors flex items-center gap-2 pt-3 border-t border-tas-ink/10 w-full justify-between group-hover:border-tas-focus"
                    >
                      <span>{t('askAboutTrip')}</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
};
