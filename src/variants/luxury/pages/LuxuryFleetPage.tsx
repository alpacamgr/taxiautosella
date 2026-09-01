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

const emComponent = { em: <span className="italic text-[#C5A880]" /> };

export const LuxuryFleetPage: React.FC = () => {
  const { openInquiryModal } = useAppStore();
  const { t } = useTranslation('fleet');

  return (
    <div className="pt-24 pb-20 px-6 lg:px-16 max-w-7xl mx-auto bg-[#F8F6F0] min-h-screen">
      <Reveal>
        <div className="max-w-3xl mb-16">
          <h1 className="font-editorial text-5xl sm:text-7xl text-[#0E1117] mb-6">
            <Trans i18nKey="fleet:header.title" components={emComponent} />
          </h1>
          <p className="text-lg text-[#0E1117]/80 font-light leading-relaxed">
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
              <div className="bg-white p-6 shadow-xl rounded-2xl flex flex-col justify-between border border-[#0E1117]/10 hover:border-[#C5A880] transition-all group h-full">
                <div>
                  <div className="h-60 overflow-hidden mb-6 rounded-xl bg-slate-900 relative">
                    <ResponsiveImage
                      src={vehicle.image}
                      alt={name}
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {badge && (
                      <span className="absolute top-3 right-3 px-3 py-1 bg-[#0E1117]/90 backdrop-blur-md text-[#C5A880] text-[10px] font-bold uppercase tracking-wider rounded-full border border-[#C5A880]/30">
                        {badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-editorial text-2xl text-[#0E1117] mb-1">{name}</h3>
                  <p className="text-xs text-[#C5A880] font-semibold tracking-wide uppercase mb-3">{subtitle}</p>
                  <p className="text-xs text-[#0E1117]/80 font-light leading-relaxed mb-6">{tagline}</p>

                  <ul className="space-y-2 mb-6 text-xs text-[#0E1117]/80 font-medium">
                    {Array.isArray(features) &&
                      features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#C5A880] flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#0E1117]/10 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-[#0E1117]/70 font-semibold">
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#C5A880]" />{' '}
                      {t('capacityPaxLabel', { value: vehicle.passengers })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 text-[#C5A880]" /> {vehicle.luggage}
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
                    className="flex min-h-11 items-center gap-1.5 bg-[#0E1117] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#8C6D46] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6D46] focus-visible:ring-offset-2"
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

      <div className="mt-20 flex max-w-7xl flex-col items-start justify-between gap-8 border border-[#0E1117]/15 bg-[#EEE9DE] p-8 md:flex-row md:items-center md:p-12">
        <div className="max-w-2xl">
          <h2 className="font-editorial text-4xl mb-4">{t('groupCta.title')}</h2>
          <p className="text-[#0E1117]/70 font-light leading-relaxed text-sm">{t('groupCta.body')}</p>
        </div>
        <button
          onClick={() => openInquiryModal(t('groupCta.context'), t('groupCta.prefill'))}
          className="flex min-h-12 w-full items-center justify-center gap-2 bg-[#0E1117] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#8C6D46] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6D46] focus-visible:ring-offset-2 md:w-auto"
        >
          <span>{t('groupCta.button')}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
