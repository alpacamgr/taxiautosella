import React, { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  BadgeEuro,
  Briefcase,
  CalendarDays,
  CarFront,
  ClipboardCheck,
  Handshake,
  IdCard,
  MapPin,
  MessageSquare,
  Minus,
  Mountain,
  Phone,
  PlaneLanding,
  Plus,
  Snowflake,
  Star,
  Users,
} from 'lucide-react';
import { useAppStore } from '../../../store/useAppStore';
import { FLEET } from '../../../data/fleet';
import { PHONE_DISPLAY, PHONE_TEL, whatsappLink } from '../../../config/contact';
import { ResponsiveImage } from '../../../components/ui/ResponsiveImage';
import { Reveal } from '../../../components/motion/Reveal';
import { CountUp } from '../../../components/motion/CountUp';
import { LightReviews } from '../components/LightReviews';

const em = { em: <span className="text-tas-primary" /> };

const ROUTE_IDS = ['inn', 'vrn', 'muc', 'vce', 'mxp', 'bzo'] as const;

const FEATURED_DRIVERS = [
  'Bauer Martin',
  'Demetz Manuel',
  'Insam Andreas',
  'Moroder Mikeol',
  'Runggaldier Jasmin',
  'Perathoner Erich',
] as const;

const PARTNER_LINKS = [
  { key: 'valgardena', url: 'https://www.valgardena.it' },
  { key: 'dolomitisuperski', url: 'https://www.dolomitisuperski.com' },
  { key: 'unesco', url: 'https://www.dolomitiunesco.info' },
  { key: 'suedtirol', url: 'https://www.suedtirol.info' },
  { key: 'hoteleuropa', url: 'https://www.hoteleuropa.it' },
  { key: 'intersport', url: 'https://www.intersportrent.com' },
  { key: 'elikos', url: 'https://www.elikos.com' },
  { key: 'sportclinic', url: 'https://www.dolomitisportclinic.com' },
] as const;

const initials = (fullName: string) =>
  fullName
    .split(' ')
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join('');

const primaryButton =
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-tas-primary px-5 text-sm font-bold text-white transition-colors hover:bg-tas-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-primary focus-visible:ring-offset-2';
const secondaryButton =
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-tas-line bg-tas-surface px-5 text-sm font-semibold text-tas-ink transition-colors hover:border-tas-ink/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-primary focus-visible:ring-offset-2';
const textLink =
  'inline-flex items-center gap-1.5 text-sm font-semibold text-tas-primary transition-colors hover:text-tas-primary-hover';
const inputClass =
  'min-h-12 w-full rounded-lg border border-tas-line bg-tas-surface px-3.5 text-sm text-tas-ink placeholder:text-tas-muted-text focus:border-tas-primary focus:outline-none focus:ring-2 focus:ring-tas-primary/20';

export const LightHome: React.FC = () => {
  const { openInquiryModal, setHeroPrefill } = useAppStore();
  const { t } = useTranslation(['homeLight', 'home', 'fleet', 'members']);
  const navigate = useNavigate();

  const [booking, setBooking] = useState({ pickup: '', dropoff: '', date: '', passengers: 2 });

  const handleStartBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setHeroPrefill({
      pickup: booking.pickup,
      destination: booking.dropoff,
      date: booking.date,
      passengers: String(booking.passengers),
    });
    navigate('/booking');
  };

  const openWhatsAppTransferSheet = () => {
    const lines: string[] = [];
    if (booking.pickup) lines.push(t('home:quote.prefillLine.pickup', { value: booking.pickup }));
    if (booking.dropoff) lines.push(t('home:quote.prefillLine.destination', { value: booking.dropoff }));
    if (booking.date) lines.push(t('home:quote.prefillLine.date', { value: booking.date }));
    lines.push(t('home:quote.prefillLine.passengers', { value: String(booking.passengers) }));
    openInquiryModal(t('home:quote.transferRequestContext'), lines.join('\n'));
  };

  const trust = [
    { id: 'price', Icon: BadgeEuro },
    { id: 'meet', Icon: IdCard },
    { id: 'flight', Icon: PlaneLanding },
    { id: 'winter', Icon: Snowflake },
  ] as const;

  const steps = [
    { id: 'book', Icon: CalendarDays },
    { id: 'confirm', Icon: ClipboardCheck },
    { id: 'meet', Icon: Handshake },
    { id: 'arrive', Icon: Mountain },
  ] as const;

  return (
    <div>
      {/* HERO */}
      <section className="relative bg-tas-ink text-white">
        <div className="absolute inset-0">
          <ResponsiveImage
            src="/images/hero/alpine-light-hero.jpg"
            mobileSrc="/images/hero/alpine-light-hero-mobile.jpg"
            alt={t('homeLight:hero.backgroundAlt')}
            priority
            sizes="100vw"
            className="h-full w-full object-cover object-center lg:object-[65%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-tas-ink/80 via-tas-ink/50 to-tas-ink/20" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-tas-ink/60 to-transparent" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 pb-0 pt-12 sm:pt-16 lg:grid-cols-12 lg:items-center lg:gap-12 lg:px-16 lg:pb-24 lg:pt-20">
          <div className="lg:col-span-7">
            <h1 className="max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              <Trans i18nKey="homeLight:hero.title" components={{ em: <span className="text-tas-accent-on-dark" /> }} />
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              <span className="sm:hidden">{t('homeLight:hero.subtitleShort')}</span>
              <span className="hidden sm:inline">{t('homeLight:hero.subtitle')}</span>
            </p>

            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-white/90">
              <li className="inline-flex items-center gap-2">
                <Star className="h-4 w-4 fill-tas-star text-tas-star" />
                {t('homeLight:hero.proof.rating')}
              </li>
              <li className="inline-flex items-center gap-2">
                <IdCard className="h-4 w-4 text-tas-accent-on-dark" />
                {t('homeLight:hero.proof.drivers')}
              </li>
              <li className="inline-flex items-center gap-2">
                <CarFront className="h-4 w-4 text-tas-accent-on-dark" />
                {t('homeLight:hero.proof.fleet')}
              </li>
            </ul>
          </div>

          <div className="-mb-60 lg:col-span-5 lg:mb-0">
            <form
              onSubmit={handleStartBooking}
              className="rounded-2xl bg-tas-surface p-6 text-tas-ink shadow-[0_24px_60px_rgba(12,24,36,0.35)] sm:p-7"
            >
              <h2 className="text-xl font-bold tracking-tight">{t('homeLight:quote.title')}</h2>

              <div className="mt-5 space-y-4">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold">{t('homeLight:quote.pickupLabel')}</span>
                  <span className="relative block">
                    <MapPin className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-tas-primary" />
                    <input
                      type="text"
                      className={`${inputClass} pl-10`}
                      placeholder={t('homeLight:quote.pickupPlaceholder')}
                      value={booking.pickup}
                      onChange={(e) => setBooking({ ...booking, pickup: e.target.value })}
                    />
                  </span>
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold">{t('homeLight:quote.destinationLabel')}</span>
                  <span className="relative block">
                    <MapPin className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-tas-primary" />
                    <input
                      type="text"
                      className={`${inputClass} pl-10`}
                      placeholder={t('homeLight:quote.destinationPlaceholder')}
                      value={booking.dropoff}
                      onChange={(e) => setBooking({ ...booking, dropoff: e.target.value })}
                    />
                  </span>
                </label>

                <div className="grid grid-cols-2 gap-4">
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-semibold">{t('homeLight:quote.dateLabel')}</span>
                    <span className="relative block">
                      <CalendarDays className="pointer-events-none absolute left-3.5 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-tas-primary sm:block" />
                      <input
                        type="date"
                        className={`${inputClass} sm:pl-10`}
                        value={booking.date}
                        onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                      />
                    </span>
                  </label>

                  <div>
                    <span className="mb-1.5 block text-sm font-semibold">{t('homeLight:quote.passengersLabel')}</span>
                    <div className="flex min-h-12 items-center justify-between rounded-lg border border-tas-line bg-tas-surface px-1.5">
                      <button
                        type="button"
                        aria-label={t('homeLight:quote.decrease')}
                        onClick={() => setBooking({ ...booking, passengers: Math.max(1, booking.passengers - 1) })}
                        className="flex h-9 w-9 items-center justify-center rounded-md text-tas-ink transition-colors hover:bg-tas-parchment focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-primary"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="inline-flex items-center gap-1.5 text-sm font-bold" aria-live="polite">
                        <Users className="h-4 w-4 text-tas-primary" />
                        {booking.passengers}
                      </span>
                      <button
                        type="button"
                        aria-label={t('homeLight:quote.increase')}
                        onClick={() => setBooking({ ...booking, passengers: Math.min(56, booking.passengers + 1) })}
                        className="flex h-9 w-9 items-center justify-center rounded-md text-tas-ink transition-colors hover:bg-tas-parchment focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-primary"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <button type="submit" className={`${primaryButton} min-h-14 w-full text-base`}>
                  {t('homeLight:quote.submit')}
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={openWhatsAppTransferSheet}
                  className="w-full text-center text-sm font-semibold text-tas-primary underline-offset-4 hover:underline"
                >
                  {t('homeLight:quote.whatsappFallback')}
                </button>
              </div>

              <p className="mt-4 border-t border-tas-line pt-4 text-center text-xs text-tas-muted-text">
                {t('homeLight:quote.trustLine')}
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="border-b border-tas-line bg-tas-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-8 px-6 pb-12 pt-72 lg:grid-cols-4 lg:px-16 lg:py-12">
          {trust.map(({ id, Icon }, i) => (
            <Reveal key={id} delay={i * 60} className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-tas-primary-soft text-tas-primary">
                <Icon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-base font-bold text-tas-ink">{t(`homeLight:trust.${id}.title`)}</span>
                <span className="mt-1 block text-sm leading-relaxed text-tas-muted-text">{t(`homeLight:trust.${id}.body`)}</span>
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-b border-tas-line bg-tas-parchment py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-16">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-tas-ink sm:text-4xl">{t('homeLight:services.title')}</h2>
            <p className="mt-3 max-w-2xl text-base text-tas-muted-text">{t('homeLight:services.subtitle')}</p>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Reveal className="flex flex-col overflow-hidden rounded-xl border border-tas-line bg-tas-surface shadow-card transition-shadow hover:shadow-card-hover">
              <ResponsiveImage
                src="/images/services/meet-greet-arrivals.jpg"
                alt={t('homeLight:services.transfers.title')}
                sizes="(min-width: 768px) 33vw, 100vw"
                className="h-52 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-tas-ink">{t('homeLight:services.transfers.title')}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-tas-muted-text">{t('homeLight:services.transfers.body')}</p>
                <Link to="/booking" className={`${primaryButton} mt-6 self-start`}>
                  {t('homeLight:services.transfers.cta')}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={80} className="flex flex-col overflow-hidden rounded-xl border border-tas-line bg-tas-surface shadow-card transition-shadow hover:shadow-card-hover">
              <ResponsiveImage
                src="/images/excursions/dolomites-sella-road.webp"
                alt={t('homeLight:services.excursions.title')}
                sizes="(min-width: 768px) 33vw, 100vw"
                className="h-52 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-tas-ink">{t('homeLight:services.excursions.title')}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-tas-muted-text">{t('homeLight:services.excursions.body')}</p>
                <Link to="/excursions" className={`${secondaryButton} mt-6 self-start`}>
                  {t('homeLight:services.excursions.cta')}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={160} className="flex flex-col overflow-hidden rounded-xl border border-tas-line bg-tas-surface shadow-card transition-shadow hover:shadow-card-hover">
              <ResponsiveImage
                src="/images/services/local-taxi-ortisei-night.jpg"
                alt={t('homeLight:services.local.title')}
                sizes="(min-width: 768px) 33vw, 100vw"
                className="h-52 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-tas-ink">{t('homeLight:services.local.title')}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-tas-muted-text">{t('homeLight:services.local.body')}</p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={whatsappLink(t('homeLight:urgent.whatsappMessage'))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${primaryButton} w-full sm:w-auto`}
                  >
                    <MessageSquare className="h-4 w-4" />
                    {t('homeLight:services.local.cta')}
                  </a>
                  <a href={`tel:${PHONE_TEL}`} className={`${secondaryButton} w-full sm:w-auto`}>
                    <Phone className="h-4 w-4 text-tas-primary" />
                    {t('homeLight:services.local.call', { phone: PHONE_DISPLAY })}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ROUTES */}
      <section className="bg-tas-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-16">
          <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-tas-ink sm:text-4xl">{t('homeLight:routes.title')}</h2>
              <p className="mt-3 max-w-2xl text-base text-tas-muted-text">{t('homeLight:routes.subtitle')}</p>
            </div>
            <Link to="/booking" className={textLink}>
              {t('homeLight:routes.viewAll')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {ROUTE_IDS.map((id, i) => (
              <Reveal key={id} delay={i * 60}>
                <Link
                  to="/booking"
                  className="group flex items-center justify-between gap-4 rounded-xl border border-tas-line bg-tas-surface p-5 shadow-card transition-shadow hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-primary focus-visible:ring-offset-2"
                >
                  <span className="flex items-center gap-4">
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-tas-primary-soft text-tas-primary">
                      <PlaneLanding className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-base font-bold text-tas-ink group-hover:text-tas-primary">
                        {t(`home:routes.items.${id}.from`)}
                      </span>
                      <span className="mt-0.5 block text-sm text-tas-muted-text">
                        {t(`home:routes.items.${id}.dist`)} · {t(`home:routes.items.${id}.time`)}
                      </span>
                    </span>
                  </span>
                  <span className="text-right">
                    <span className="block text-lg font-bold text-tas-ink">{t(`home:routes.items.${id}.price`)}</span>
                    <span className="block text-xs text-tas-muted-text">{t('home:routes.indicative')}</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-t border-tas-line bg-tas-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-16">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-tas-ink sm:text-4xl">{t('homeLight:steps.title')}</h2>
            <p className="mt-3 text-base text-tas-muted-text">{t('homeLight:steps.subtitle')}</p>
          </Reveal>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ id, Icon }, i) => (
              <Reveal key={id} as="li" delay={i * 80} className="relative">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-tas-primary text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-bold text-tas-primary">0{i + 1}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-tas-ink">{t(`homeLight:steps.items.${id}.title`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-tas-muted-text">{t(`homeLight:steps.items.${id}.body`)}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-tas-line bg-tas-primary-soft">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 lg:grid-cols-4 lg:px-16">
          {[
            { id: 'years', node: <CountUp value={35} suffix="+" /> },
            { id: 'drivers', node: <CountUp value={18} /> },
            { id: 'fleet', node: <CountUp value={25} /> },
            { id: 'rating', node: <span>4.9</span> },
          ].map((s) => (
            <div key={s.id}>
              <div className="text-4xl font-bold tracking-tight text-tas-ink">{s.node}</div>
              <div className="mt-1 text-sm font-semibold text-tas-muted-text">{t(`homeLight:stats.${s.id}`)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* DRIVERS */}
      <section className="bg-tas-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-16">
          <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-tas-ink sm:text-4xl">{t('homeLight:drivers.title')}</h2>
              <p className="mt-3 max-w-2xl text-base text-tas-muted-text">{t('homeLight:drivers.subtitle')}</p>
            </div>
            <Link to="/members" className={textLink}>
              {t('homeLight:drivers.viewAll')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED_DRIVERS.map((driver, i) => (
              <Reveal key={driver} delay={i * 60}>
                <button
                  type="button"
                  onClick={() =>
                    openInquiryModal(
                      t('homeLight:drivers.requestContext'),
                      t('homeLight:drivers.requestPrefill', { driver }),
                    )
                  }
                  className="group flex w-full items-center gap-4 rounded-xl border border-tas-line bg-tas-surface p-5 text-left shadow-card transition-shadow hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-primary focus-visible:ring-offset-2"
                >
                  <span className="relative flex h-14 w-14 flex-none items-center justify-center overflow-hidden rounded-full bg-tas-primary-soft text-base font-bold text-tas-primary">
                    {initials(driver)}
                    <ResponsiveImage
                      src={`/images/drivers/driver-0${i + 1}.jpg`}
                      alt=""
                      sizes="56px"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-base font-bold text-tas-ink group-hover:text-tas-primary">{driver}</span>
                    <span className="mt-1 block text-sm text-tas-muted-text">
                      {t('homeLight:drivers.based')} {t('homeLight:drivers.basedValue')}
                    </span>
                    <span className="block text-sm text-tas-muted-text">
                      {t('homeLight:drivers.languages')}: {t('homeLight:drivers.languagesValue')}
                    </span>
                  </span>
                  <ArrowRight className="h-4 w-4 flex-none text-tas-muted-text group-hover:text-tas-primary" />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FLEET */}
      <section className="border-t border-tas-line bg-tas-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-16">
          <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-tas-ink sm:text-4xl">{t('homeLight:fleet.title')}</h2>
              <p className="mt-3 max-w-2xl text-base text-tas-muted-text">{t('homeLight:fleet.subtitle')}</p>
            </div>
            <Link to="/fleet" className={textLink}>
              {t('homeLight:fleet.viewAll')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {FLEET.slice(0, 3).map((vehicle, i) => {
              const name = t(`fleet:vehicles.${vehicle.id}.name`);
              const subtitle = t(`fleet:vehicles.${vehicle.id}.subtitle`);
              const tagline = t(`fleet:vehicles.${vehicle.id}.tagline`);
              return (
                <Reveal key={vehicle.id} delay={i * 80} className="flex flex-col rounded-xl border border-tas-line bg-tas-surface p-5 shadow-card transition-shadow hover:shadow-card-hover">
                  <div className="h-48 overflow-hidden rounded-lg">
                    <ResponsiveImage
                      src={vehicle.image}
                      alt={name}
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-tas-ink">{name}</h3>
                  <p className="text-sm font-semibold text-tas-primary">{subtitle}</p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-tas-muted-text">{tagline}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-tas-line pt-4">
                    <div className="flex items-center gap-4 text-sm font-medium text-tas-ink">
                      <span className="inline-flex items-center gap-1.5">
                        <Users className="h-4 w-4 text-tas-primary" />
                        {t('home:fleetTeaser.capacityPax', { count: vehicle.passengers })}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase className="h-4 w-4 text-tas-primary" />
                        {t('home:fleetTeaser.capacityBags', { count: vehicle.luggage })}
                      </span>
                    </div>
                    <button
                      type="button"
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
                      aria-label={t('home:fleetTeaser.inquireAria', { name })}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-tas-primary text-white transition-colors hover:bg-tas-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-primary focus-visible:ring-offset-2"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <LightReviews />

      {/* PARTNERS / B2B */}
      <section className="border-t border-tas-line bg-tas-surface py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-12 lg:px-16">
          <Reveal className="lg:col-span-6">
            <h2 className="text-3xl font-bold tracking-tight text-tas-ink sm:text-4xl">{t('homeLight:partners.title')}</h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-tas-muted-text">{t('homeLight:partners.body')}</p>
            <button
              type="button"
              onClick={() => openInquiryModal(t('homeLight:partners.context'), t('homeLight:partners.prefill'))}
              className={`${primaryButton} mt-6`}
            >
              {t('homeLight:partners.cta')}
              <ArrowRight className="h-4 w-4" />
            </button>
          </Reveal>
          <Reveal delay={80} className="lg:col-span-6">
            <ResponsiveImage
              src="/images/services/hotel-arrival.jpg"
              alt={t('homeLight:partners.title')}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="mb-6 h-56 w-full rounded-xl object-cover"
            />
            <h3 className="text-sm font-bold text-tas-muted-text">{t('homeLight:partners.listTitle')}</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {PARTNER_LINKS.map((p) => (
                <li key={p.key}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-12 items-center rounded-lg border border-tas-line bg-tas-surface px-4 text-sm font-semibold text-tas-ink transition-colors hover:border-tas-primary hover:text-tas-primary"
                  >
                    {t(`members:homePartners.${p.key}` as const)}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* URGENT CTA */}
      <section className="bg-tas-surface px-6 pb-16 sm:pb-20 lg:px-16">
        <Reveal className="mx-auto flex max-w-7xl flex-col gap-6 rounded-2xl bg-tas-ink p-8 text-white sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{t('homeLight:urgent.title')}</h2>
            <p className="mt-2 max-w-xl text-base text-white/80">{t('homeLight:urgent.body')}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={`tel:${PHONE_TEL}`} className={`${primaryButton} min-h-14 w-full px-6 text-base sm:w-auto`}>
              <Phone className="h-5 w-5" />
              {t('homeLight:urgent.call', { phone: PHONE_DISPLAY })}
            </a>
            <a
              href={whatsappLink(t('homeLight:urgent.whatsappMessage'))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full min-h-14 items-center justify-center gap-2 rounded-lg border border-white/25 px-6 text-base font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto"
            >
              <MessageSquare className="h-5 w-5 text-tas-accent-on-dark" />
              {t('homeLight:urgent.whatsapp')}
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
};
