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

const emComponent = { em: <span className="text-tas-primary" /> };

export const LightExcursionsPage: React.FC = () => {
  const { openInquiryModal } = useAppStore();
  const { t } = useTranslation('excursions');

  return (
    <div className="bg-tas-paper">
      <section className="border-b border-tas-line bg-tas-parchment">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:py-20 lg:px-16">
          <Reveal>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-tas-ink sm:text-5xl">
              <Trans i18nKey="excursions:header.title" components={emComponent} />
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-tas-muted-text">
              {t('header.subtitle')}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          {EXCURSIONS_UI.map((exc, i) => {
            const title = t(`items.${exc.id}.title`);
            const duration = t(`items.${exc.id}.duration`);
            const desc = t(`items.${exc.id}.desc`);
            const alt = t(`items.${exc.id}.alt`);
            return (
              <Reveal key={exc.id} delay={(i % 2) * 80}>
                <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-tas-line bg-tas-surface p-4 shadow-card transition-shadow hover:shadow-card-hover">
                  <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg bg-tas-parchment">
                    <ResponsiveImage
                      src={exc.image}
                      alt={alt}
                      width={1600}
                      height={1067}
                      priority={i < 2}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <div className="flex items-center gap-2 text-sm font-semibold text-tas-primary">
                      <Clock className="h-4 w-4" />
                      <span>{duration}</span>
                    </div>
                    <h3 className="mt-2 text-xl font-bold leading-snug text-tas-ink sm:text-2xl">
                      {title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-tas-muted-text">{desc}</p>
                    <button
                      type="button"
                      onClick={() =>
                        openInquiryModal(t('requestContext'), t('requestPrefill', { title, duration }))
                      }
                      className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-tas-primary hover:text-tas-primary-hover"
                    >
                      <span>{t('askAboutTrip')}</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
};
