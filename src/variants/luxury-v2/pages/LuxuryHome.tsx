import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useAppStore } from '../../../store/useAppStore';
import { FLEET } from '../../../data/fleet';
import {
  Users,
  ArrowRight,
  Briefcase,
  Clock,
  CreditCard,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ResponsiveImage } from '../../../components/ui/ResponsiveImage';
import { LuxuryReviews } from '../components/LuxuryReviews';
import { Reveal } from '../../../components/motion/Reveal';
import { CountUp } from '../../../components/motion/CountUp';

const emComponent = { em: <span className="italic text-tas-accent-on-light" /> };
const emGoldPatina = { em: <span className="italic text-tas-accent-strong" /> };

const NIGHTLIFE_VENUES = [
  'Caffe 2000',
  'Adler',
  'Marina Lounge',
  'Piz 5',
  "Disco Dali'",
  'La Stua',
  "Goalies' Pub",
  'Mauriz Keller',
  'Bar 181',
  'Saltos',
];

const PARTNER_LINKS_LEFT = [
  { key: 'valgardena', url: 'https://www.valgardena.it' },
  { key: 'dolomitisuperski', url: 'https://www.dolomitisuperski.com' },
  { key: 'unesco', url: 'https://www.dolomitiunesco.info' },
  { key: 'suedtirol', url: 'https://www.suedtirol.info' },
  { key: 'elikos', url: 'https://www.elikos.com' },
  { key: 'sportclinic', url: 'https://www.dolomitisportclinic.com' },
] as const;

const PARTNER_LINKS_RIGHT = [
  { key: 'intersport', url: 'https://www.intersportrent.com' },
  { key: 'hoteleuropa', url: 'https://www.hoteleuropa.it' },
  { key: 'rusctlea', url: 'https://www.rusctlea.com' },
  { key: 'woodcarving', url: 'https://www.woodcarvings.info' },
  { key: 'carrozzeria', url: 'https://www.carrozzeriagardena.it' },
  { key: 'digiem', url: 'https://www.digiem.it' },
] as const;

const ROUTE_IDS = ['inn', 'vrn', 'muc', 'vce', 'mxp', 'bzo'] as const;

export const LuxuryHome: React.FC = () => {
  const { openInquiryModal } = useAppStore();
  const { t } = useTranslation(['home', 'fleet', 'members']);

  return (
    <div>
      {/* HERO */}
      <section className="relative w-full bg-tas-ink text-tas-paper pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24 px-6 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <ResponsiveImage
            src="/images/hero/autosella-fleet-lineup-dolomites.jpg"
            alt={t('home:hero.backgroundAlt')}
            priority
            sizes="100vw"
            className="w-full h-full object-cover object-[center_76%] sm:object-[center_72%] lg:object-[center_68%] brightness-95 contrast-105 tas-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-tas-ink/95 via-tas-ink/85 to-transparent lg:w-3/5" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-editorial text-5xl sm:text-7xl lg:text-8xl font-normal leading-[1.03] tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              <Trans
                i18nKey="home:hero.title"
                components={{
                  em: (
                    <span className="italic text-tas-accent-on-dark drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]" />
                  ),
                }}
              />
            </h1>

            <p className="text-base sm:text-lg text-white max-w-lg font-light leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              {t('home:hero.subtitle')}
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-1 text-xs font-medium tracking-wider text-white">
              <div className="flex items-center gap-2 bg-black/40 px-3.5 py-2 rounded-xl border border-white/20 backdrop-blur-sm shadow-md drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                <Clock className="w-4 h-4 text-tas-accent-on-dark flex-shrink-0" />
                <span>{t('home:hero.badges.dispatch')}</span>
              </div>
              <div className="flex items-center gap-2 bg-black/40 px-3.5 py-2 rounded-xl border border-white/20 backdrop-blur-sm shadow-md drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                <CreditCard className="w-4 h-4 text-tas-accent-on-dark flex-shrink-0" />
                <span>{t('home:hero.badges.payment')}</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* HERITAGE */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto border-b border-tas-ink/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <Reveal className="lg:col-span-6 space-y-6">
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-tas-ink">
              <Trans
                i18nKey="home:heritage.title"
                components={{ em: <span className="italic text-tas-accent-on-light" />, br: <br /> }}
              />
            </h2>

            <p className="text-base text-tas-ink/80 font-light leading-relaxed">
              {t('home:heritage.paragraph1')}
            </p>

            <p className="text-sm text-tas-ink/70 font-light leading-relaxed">
              {t('home:heritage.paragraph2')}
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-tas-ink/10">
              <div>
                <div className="font-editorial text-4xl text-tas-ink">
                  <CountUp value={25} />
                </div>
                <div className="text-[11px] font-bold text-tas-ink/70 uppercase tracking-widest mt-1">
                  {t('home:heritage.stats.fleet')}
                </div>
              </div>
              <div>
                <div className="font-editorial text-4xl text-tas-ink">
                  <CountUp value={18} />
                </div>
                <div className="text-[11px] font-bold text-tas-ink/70 uppercase tracking-widest mt-1">
                  {t('home:heritage.stats.drivers')}
                </div>
              </div>
              <div>
                <div className="font-editorial text-4xl text-tas-ink">
                  <CountUp value={35} suffix="+" />
                </div>
                <div className="text-[11px] font-bold text-tas-ink/70 uppercase tracking-widest mt-1">
                  {t('home:heritage.stats.years')}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-6" delay={80}>
            <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
              <ResponsiveImage
                src="/images/fleet/mercedes-s-class-vip.jpg"
                alt={t('home:heritage.featureImage.alt')}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tas-ink/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-semibold uppercase tracking-widest text-tas-accent-on-dark block mb-1">
                  {t('home:heritage.featureImage.eyebrow')}
                </span>
                <h3 className="font-editorial text-2xl text-white">{t('home:heritage.featureImage.title')}</h3>
                <p className="text-xs text-white/80 font-light mt-1">
                  {t('home:heritage.featureImage.caption')}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FLEET TEASER */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto border-b border-tas-ink/10">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="font-editorial text-4xl sm:text-5xl font-normal text-tas-ink">
                <Trans i18nKey="home:fleetTeaser.title" components={emComponent} />
              </h2>
              <p className="text-sm text-tas-ink/70 font-light mt-2 max-w-md">
                {t('home:fleetTeaser.subtitle')}
              </p>
            </div>
            <Link
              to="/fleet"
              className="flex items-center gap-2 self-start text-sm font-semibold text-tas-ink transition-colors hover:text-tas-accent-strong md:self-auto"
            >
              <span>{t('home:fleetTeaser.viewAll')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FLEET.slice(0, 3).map((vehicle, i) => {
            const name = t(`fleet:vehicles.${vehicle.id}.name`);
            const subtitle = t(`fleet:vehicles.${vehicle.id}.subtitle`);
            const tagline = t(`fleet:vehicles.${vehicle.id}.tagline`);
            const badge = t(`fleet:vehicles.${vehicle.id}.badge`);
            return (
              <Reveal key={vehicle.id} delay={i * 80}>
                <div className="bg-tas-surface p-6 shadow-xl rounded-2xl flex flex-col justify-between border border-tas-ink/10 hover:border-tas-focus transition-all group h-full">
                  <div>
                    <div className="h-60 overflow-hidden mb-6 rounded-xl bg-slate-900 relative">
                      <ResponsiveImage
                        src={vehicle.image}
                        alt={name}
                        sizes="(min-width: 768px) 33vw, 100vw"
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
                  </div>

                  <div className="pt-4 border-t border-tas-ink/10 flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-tas-ink/70 font-medium">
                      <span className="flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-tas-accent-on-light" />{' '}
                        {t('home:fleetTeaser.capacityPax', { count: vehicle.passengers })}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4 text-tas-accent-on-light" />{' '}
                        {t('home:fleetTeaser.capacityBags', { count: vehicle.luggage })}
                      </span>
                    </div>
                    <button
                      onClick={() =>
                        openInquiryModal(
                          t('home:fleetTeaser.fleetRequestContext'),
                          t('home:fleetTeaser.fleetRequestPrefill', {
                            name,
                            passengers: vehicle.passengers,
                            luggage: vehicle.luggage,
                            subtitle,
                          }),
                        )
                      }
                      className="p-3 rounded-full bg-tas-ink text-tas-paper hover:bg-tas-brass-fill hover:text-tas-ink transition-colors shadow-md"
                      aria-label={t('home:fleetTeaser.inquireAria', { name })}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ROUTES */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto border-b border-tas-ink/10">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="font-editorial text-4xl sm:text-5xl font-normal text-tas-ink">
                <Trans i18nKey="home:routes.title" components={emGoldPatina} />
              </h2>
            </div>
            <Link
              to="/booking"
              className="flex items-center gap-2 text-sm font-semibold text-tas-ink transition-colors hover:text-tas-accent-strong"
            >
              <span>{t('home:routes.viewAll')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ROUTE_IDS.map((id, i) => (
            <Reveal key={id} delay={i * 80}>
              <Link
                to="/booking"
                className="w-full p-6 bg-tas-surface rounded-2xl border border-tas-ink/10 hover:border-tas-accent-strong transition-all cursor-pointer shadow-md hover:shadow-xl flex items-center justify-between group text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-focus focus-visible:ring-offset-2"
              >
                <span className="block">
                  <span className="block font-bold text-sm text-tas-ink group-hover:text-tas-accent-strong transition-colors mb-1">
                    {t(`home:routes.items.${id}.from`)}
                  </span>
                  <span className="text-xs text-tas-ink/70 flex items-center gap-2 font-medium">
                    <span>{t(`home:routes.items.${id}.dist`)}</span>
                    <span>•</span>
                    <span>{t(`home:routes.items.${id}.time`)}</span>
                  </span>
                </span>
                <span className="block text-right">
                  <span className="text-base font-bold text-tas-ink group-hover:text-tas-accent-strong transition-colors block">
                    {t(`home:routes.items.${id}.price`)}
                  </span>
                  <span className="text-[10px] text-tas-muted-60 font-semibold uppercase tracking-wider">
                    {t('home:routes.indicative')}
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <LuxuryReviews />

      {/* NIGHTLIFE & PARTNERS */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <Reveal>
            <div>
              <h2 className="font-editorial text-4xl sm:text-5xl font-normal text-tas-ink mb-6">
                <Trans i18nKey="home:nightlife.title" components={emGoldPatina} />
              </h2>
              <p className="text-sm text-tas-ink/80 font-light leading-relaxed mb-6">
                {t('home:nightlife.body')}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {NIGHTLIFE_VENUES.map((venue) => (
                  <button
                    type="button"
                    key={venue}
                    onClick={() =>
                      openInquiryModal(
                        t('home:nightlife.context'),
                        t('home:nightlife.prefill', { venue }),
                      )
                    }
                    className="px-4 py-2 bg-tas-surface border border-tas-ink/15 rounded-full text-xs font-semibold text-tas-ink hover:border-tas-accent-strong hover:text-tas-accent-strong transition-colors cursor-pointer shadow-sm"
                  >
                    {venue}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div>
              <h2 className="font-editorial text-4xl sm:text-5xl font-normal text-tas-ink mb-6">
                <Trans i18nKey="home:partners.title" components={emGoldPatina} />
              </h2>
              <p className="text-sm text-tas-ink/80 font-light leading-relaxed mb-6">
                {t('home:partners.body')}
              </p>
              <div className="grid grid-cols-2 gap-4 text-xs text-tas-ink/90 font-medium">
                <ul className="space-y-3">
                  {PARTNER_LINKS_LEFT.map((p) => (
                    <li key={p.key}>
                      • <a href={p.url} target="_blank" rel="noopener noreferrer" className="hover:text-tas-accent-strong underline-offset-2 hover:underline">
                        {t(`members:homePartners.${p.key}` as const)}
                      </a>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-3">
                  {PARTNER_LINKS_RIGHT.map((p) => (
                    <li key={p.key}>
                      • <a href={p.url} target="_blank" rel="noopener noreferrer" className="hover:text-tas-accent-strong underline-offset-2 hover:underline">
                        {t(`members:homePartners.${p.key}` as const)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
