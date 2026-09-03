import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useAppStore } from '../../../store/useAppStore';
import { Users, Briefcase, Check, ArrowRight } from 'lucide-react';
import { ResponsiveImage } from '../../../components/ui/ResponsiveImage';
import { Reveal } from '../../../components/motion/Reveal';

// Non-textual vehicle data. All names, subtitles, taglines, badges, and
// features come from `fleet.json` keyed by `id`.
interface FleetPageEntry {
  id: string;
  passengers: number | string;
  luggage: number | string;
  image: string;
}

const VEHICLES: FleetPageEntry[] = [
  { id: 'sedan-eclass', passengers: 3, luggage: 3, image: '/images/fleet/mercedes-e-class.jpg' },
  { id: 'sedan-sclass', passengers: 3, luggage: 3, image: '/images/fleet/mercedes-s-class-vip.jpg' },
  { id: 'suv-gls', passengers: 4, luggage: 5, image: '/images/fleet/mercedes-gl-suv-4matic.jpg' },
  { id: 'van-vclass', passengers: 7, luggage: 7, image: '/images/fleet/mercedes-v-class-luxury.jpg' },
  { id: 'minibus-vito', passengers: 8, luggage: 8, image: '/images/fleet/mercedes-vito-minibus-4matic.jpg' },
  { id: 'sprinter-vip', passengers: '16–30', luggage: '20+', image: '/images/fleet/grand-touring-coach-56pax.jpg' },
  { id: 'coach-grand', passengers: 56, luggage: 60, image: '/images/fleet/mercedes-sprinter-vip-coach.jpg' },
  { id: 'van-disabled', passengers: '1 Wheelchair + 6', luggage: 4, image: '/images/fleet/mercedes-vito-minibus-side.jpg' },
  { id: 'trailer', passengers: 'N/A', luggage: '10 Bikes / 30 Skis', image: '/images/fleet/mercedes-vito-ski-trailer.jpg' },
  { id: 'production', passengers: 5, luggage: 'Crew Equipment', image: '/images/fleet/autosella_2018_07.jpg' },
];

const emComponent = { em: <span className="text-tas-primary" /> };

export const LightFleetPage: React.FC = () => {
  const { openInquiryModal } = useAppStore();
  const { t } = useTranslation('fleet');

  return (
    <div className="bg-tas-paper">
      <section className="border-b border-tas-line bg-tas-parchment">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:py-20 lg:px-16">
          <Reveal>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-tas-ink sm:text-5xl">
              <Trans i18nKey="fleet:header.title" components={emComponent} />
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-tas-muted-text">
              {t('header.subtitle')}
            </p>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {VEHICLES.map((vehicle, i) => {
              const name = t(`vehicles.${vehicle.id}.name`);
              const subtitle = t(`vehicles.${vehicle.id}.subtitle`);
              const tagline = t(`vehicles.${vehicle.id}.tagline`);
              const badge = t(`vehicles.${vehicle.id}.badge`);
              const features = t(`vehicles.${vehicle.id}.features`, { returnObjects: true }) as string[];

              return (
                <Reveal key={vehicle.id} delay={(i % 3) * 80}>
                  <div className="flex h-full flex-col justify-between rounded-xl border border-tas-line bg-tas-surface p-6 shadow-card transition-shadow hover:shadow-card-hover">
                    <div>
                      <div className="relative mb-5 h-56 overflow-hidden rounded-lg bg-tas-parchment">
                        <ResponsiveImage
                          src={vehicle.image}
                          alt={name}
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="h-full w-full object-cover"
                        />
                        {badge && (
                          <span className="absolute right-3 top-3 rounded-full bg-tas-primary px-3 py-1 text-xs font-bold text-white">
                            {badge}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-tas-ink">{name}</h3>
                      <p className="mt-1 text-sm font-semibold text-tas-primary">{subtitle}</p>
                      <p className="mt-3 text-sm leading-relaxed text-tas-muted-text">{tagline}</p>

                      <ul className="mt-5 space-y-2 text-sm text-tas-ink">
                        {Array.isArray(features) &&
                          features.map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className="mt-0.5 h-4 w-4 flex-none text-tas-primary" />
                              <span>{feat}</span>
                            </li>
                          ))}
                      </ul>
                    </div>

                    <div className="mt-6 flex flex-col gap-4 border-t border-tas-line pt-5">
                      <div className="flex items-center gap-5 text-sm font-semibold text-tas-ink">
                        <span className="flex items-center gap-1.5">
                          <Users className="h-4 w-4 text-tas-primary" />
                          {t('capacityPaxLabel', { value: vehicle.passengers })}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Briefcase className="h-4 w-4 text-tas-primary" />
                          {vehicle.luggage}
                        </span>
                      </div>
                      <button
                        onClick={() =>
                          openInquiryModal(
                            t('fleetRequestContext'),
                            t('fleetRequestPrefill', {
                              name,
                              passengers: vehicle.passengers,
                              luggage: vehicle.luggage,
                              subtitle,
                            }),
                          )
                        }
                        aria-label={t('inquireAria', { name })}
                        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-tas-primary px-5 text-sm font-bold text-white transition-colors hover:bg-tas-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-primary focus-visible:ring-offset-2"
                      >
                        <span>{t('inquireLabel')}</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-2xl bg-tas-ink p-8 text-white md:flex-row md:items-center md:p-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('groupCta.title')}</h2>
              <p className="mt-3 text-base leading-relaxed text-white/80">{t('groupCta.body')}</p>
            </div>
            <button
              onClick={() => openInquiryModal(t('groupCta.context'), t('groupCta.prefill'))}
              className="inline-flex min-h-12 w-full flex-none items-center justify-center gap-2 rounded-lg bg-tas-primary px-6 text-sm font-bold text-white transition-colors hover:bg-tas-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-tas-ink md:w-auto"
            >
              <span>{t('groupCta.button')}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
