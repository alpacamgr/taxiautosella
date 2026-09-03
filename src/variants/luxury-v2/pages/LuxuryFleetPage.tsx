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

const emComponent = { em: <span className="italic text-tas-accent-on-light" /> };

export const LuxuryFleetPage: React.FC = () => {
  const { openInquiryModal } = useAppStore();
  const { t } = useTranslation('fleet');

  return (
    <div className="pt-24 pb-20 px-6 lg:px-16 max-w-7xl mx-auto bg-tas-paper min-h-screen">
      <Reveal>
        <div className="max-w-3xl mb-16">
          <h1 className="font-editorial text-5xl sm:text-7xl text-tas-ink mb-6">
            <Trans i18nKey="fleet:header.title" components={emComponent} />
          </h1>
          <p className="text-lg text-tas-ink/80 font-light leading-relaxed">
            {t('header.subtitle')}
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {VEHICLES.map((vehicle, i) => {
          const name = t(`vehicles.${vehicle.id}.name`);
          const subtitle = t(`vehicles.${vehicle.id}.subtitle`);
          const tagline = t(`vehicles.${vehicle.id}.tagline`);
          const badge = t(`vehicles.${vehicle.id}.badge`);
          const features = t(`vehicles.${vehicle.id}.features`, { returnObjects: true }) as string[];

          return (
            <Reveal key={vehicle.id} delay={(i % 3) * 80}>
              <div className="bg-tas-surface p-6 shadow-xl rounded-2xl flex flex-col justify-between border border-tas-ink/10 hover:border-tas-focus transition-all group h-full">
                <div>
                  <div className="h-60 overflow-hidden mb-6 rounded-xl bg-slate-900 relative">
                    <ResponsiveImage
                      src={vehicle.image}
                      alt={name}
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {badge && (
                      <span className="absolute top-3 right-3 px-3 py-1 bg-tas-ink/90 backdrop-blur-md text-tas-accent-on-dark text-[10px] font-bold uppercase tracking-wider rounded-full border border-tas-focus/30">
                        {badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-editorial text-2xl text-tas-ink mb-1">{name}</h3>
                  <p className="text-xs text-tas-accent-on-light font-semibold tracking-wide uppercase mb-3">{subtitle}</p>
                  <p className="text-xs text-tas-ink/80 font-light leading-relaxed mb-6">{tagline}</p>

                  <ul className="space-y-2 mb-6 text-xs text-tas-ink/80 font-medium">
                    {Array.isArray(features) &&
                      features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-tas-accent-on-light flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-tas-ink/10 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-tas-ink/70 font-semibold">
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-tas-accent-on-light" />{' '}
                      {t('capacityPaxLabel', { value: vehicle.passengers })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 text-tas-accent-on-light" /> {vehicle.luggage}
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
                    className="flex min-h-11 items-center gap-1.5 bg-tas-ink px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-tas-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-focus focus-visible:ring-offset-2"
                  >
                    <span>{t('inquireLabel')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-20 flex max-w-7xl flex-col items-start justify-between gap-8 border border-tas-ink/15 bg-tas-parchment p-8 md:flex-row md:items-center md:p-12">
        <div className="max-w-2xl">
          <h2 className="font-editorial text-4xl mb-4">{t('groupCta.title')}</h2>
          <p className="text-tas-ink/70 font-light leading-relaxed text-sm">{t('groupCta.body')}</p>
        </div>
        <button
          onClick={() => openInquiryModal(t('groupCta.context'), t('groupCta.prefill'))}
          className="flex min-h-12 w-full items-center justify-center gap-2 bg-tas-ink px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-tas-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-focus focus-visible:ring-offset-2 md:w-auto"
        >
          <span>{t('groupCta.button')}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
