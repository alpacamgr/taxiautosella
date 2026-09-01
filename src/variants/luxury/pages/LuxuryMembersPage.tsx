import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { User, Award, GlassWater, ArrowRight } from 'lucide-react';
import { useAppStore } from '../../../store/useAppStore';
import { Reveal } from '../../../components/motion/Reveal';
import { PHONE_DISPLAY, PHONE_TEL } from '../../../config/contact';

// Proper names — never translated — stay in code.
const DRIVERS: readonly string[] = [
  'Bauer Dietrich', 'Bauer Martin', 'Bernardi Jonas', 'Comploi Johann',
  'Demetz Mark', 'Demetz Manuel', 'Falaha Mohamed Majd', 'Insam Andreas',
  'Moroder Mikeol', 'Perathoner Erich', 'Piazza Walter', 'Ploner Iwan',
  'Ploner Vittorio', 'Prinoth Markus', 'Prucker Egon', 'Runggaldier Franco',
  'Runggaldier Jasmin', 'Runggaldier Leo',
];

const PARTNERS = [
  { id: 'valgardena', url: 'https://www.valgardena.it' },
  { id: 'dolomitisuperski', url: 'https://www.dolomitisuperski.com' },
  { id: 'unesco', url: 'https://www.dolomitiunesco.info' },
  { id: 'suedtirol', url: 'https://www.suedtirol.info' },
  { id: 'elikos', url: 'https://www.elikos.com' },
  { id: 'sportclinic', url: 'https://www.dolomitisportclinic.com' },
  { id: 'intersport', url: 'https://www.intersportrent.com' },
  { id: 'hoteleuropa', url: 'https://www.hoteleuropa.it' },
  { id: 'rusctlea', url: 'https://www.rusctlea.com' },
  { id: 'woodcarving', url: 'https://www.woodcarvings.info' },
  { id: 'carrozzeria', url: 'https://www.carrozzeriagardena.it' },
  { id: 'digiem', url: 'https://www.digiem.it' },
] as const;

const VENUES: readonly string[] = [
  'Caffe 2000', 'Caffe Adler', 'Marina Lounge Bar', 'Piz 5', "Disco Dancing Dali'",
  'La Stua', "Goalies' Pub", 'Mauriz Keller', 'Bar 181', 'Après-Ski Saltos',
];

const emComponent = { em: <span className="italic text-[#C5A880]" /> };

export const LuxuryMembersPage: React.FC = () => {
  const { openInquiryModal } = useAppStore();
  const { t } = useTranslation('members');

  return (
    <div className="min-h-screen bg-[#F8F6F0] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <Reveal>
          <header className="mb-20 max-w-3xl">
            <h1 className="font-editorial text-5xl lg:text-7xl font-normal text-[#0E1117] mb-6">
              <Trans i18nKey="members:header.title" components={emComponent} />
            </h1>
            <p className="text-[#0E1117]/80 text-lg font-light leading-relaxed">
              {t('header.subtitle')}
            </p>
          </header>
        </Reveal>

        <section className="mb-24">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 border-b border-[#0E1117]/10 pb-4">
              <div className="flex items-center gap-3">
                <User className="w-6 h-6 text-[#C5A880]" />
                <h2 className="font-editorial text-3xl sm:text-4xl text-[#0E1117]">{t('drivers.sectionTitle')}</h2>
              </div>
              <span className="text-xs uppercase tracking-wider text-[#0E1117]/70 font-semibold">
                {t('drivers.sectionCount')}
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {DRIVERS.map((driver, i) => (
              <Reveal key={driver} delay={(i % 4) * 60}>
                <button
                  type="button"
                  onClick={() =>
                    openInquiryModal(
                      t('drivers.requestContext'),
                      t('drivers.requestPrefill', { driver }),
                    )
                  }
                  className="p-4 bg-white rounded-xl shadow-sm border border-[#0E1117]/10 flex items-center gap-3.5 hover:border-[#8C6D46] hover:shadow-md transition-all text-left cursor-pointer group w-full"
                >
                  <div className="w-9 h-9 rounded-full bg-[#0E1117] text-[#C5A880] group-hover:bg-[#8C6D46] group-hover:text-white transition-colors flex items-center justify-center font-editorial text-sm font-semibold flex-shrink-0">
                    {driver.charAt(0)}
                  </div>
                  <div>
                    <span className="font-bold text-sm text-[#0E1117] group-hover:text-[#8C6D46] transition-colors block leading-snug">{driver}</span>
                    <span className="text-[10px] text-[#0E1117]/60 font-semibold uppercase tracking-wider block">
                      {t('drivers.role')}
                    </span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <section>
            <Reveal>
              <div className="flex items-center gap-3 mb-6 border-b border-[#0E1117]/10 pb-4">
                <Award className="w-6 h-6 text-[#C5A880]" />
                <h2 className="font-editorial text-3xl text-[#0E1117]">{t('partners.sectionTitle')}</h2>
              </div>
              <p className="text-sm text-[#0E1117]/70 mb-6 font-light leading-relaxed">
                {t('partners.sectionBody')}
              </p>
            </Reveal>
            <div className="space-y-3">
              {PARTNERS.map((partner, i) => {
                const name = t(`partners.items.${partner.id}.name`);
                const desc = t(`partners.items.${partner.id}.desc`);
                return (
                  <Reveal key={partner.id} delay={(i % 3) * 40}>
                    <div className="p-3.5 bg-white rounded-xl border border-[#0E1117]/10 shadow-sm flex items-center justify-between group">
                      <div>
                        <h4 className="font-semibold text-sm text-[#0E1117] group-hover:text-[#C5A880] transition-colors">
                          {name}
                        </h4>
                        <p className="text-xs text-[#0E1117]/60 mt-0.5">{desc}</p>
                      </div>
                      <a
                        href={partner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-[#0E1117]/40 hover:text-[#C5A880] transition-colors flex-shrink-0"
                        aria-label={t('partners.visitAria', { name })}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </section>

          <section>
            <Reveal>
              <div className="flex items-center gap-3 mb-6 border-b border-[#0E1117]/10 pb-4">
                <GlassWater className="w-6 h-6 text-[#C5A880]" />
                <h2 className="font-editorial text-3xl text-[#0E1117]">{t('nightlife.sectionTitle')}</h2>
              </div>
              <p className="text-sm text-[#0E1117]/70 mb-6 font-light leading-relaxed">
                {t('nightlife.sectionBody')}
              </p>
            </Reveal>
            <div className="flex flex-wrap gap-2.5 mb-8">
              {VENUES.map((venue) => (
                <button
                  type="button"
                  key={venue}
                  onClick={() =>
                    openInquiryModal(
                      t('nightlife.requestContext'),
                      t('nightlife.requestPrefill', { venue }),
                    )
                  }
                  className="px-4 py-2.5 bg-white border border-[#0E1117]/15 rounded-xl text-xs font-semibold text-[#0E1117] hover:border-[#C5A880] hover:text-[#C5A880] transition-colors shadow-sm cursor-pointer"
                >
                  {venue}
                </button>
              ))}
            </div>

            <div className="border border-[#0E1117]/15 bg-[#EEE9DE] p-6">
              <h4 className="font-editorial text-xl text-[#0E1117] mb-2">{t('nightlife.callBoxTitle')}</h4>
              <p className="text-xs text-[#0E1117]/70 font-light mb-4 leading-relaxed">
                {t('nightlife.callBoxBody')}
              </p>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex min-h-11 items-center gap-2 bg-[#0E1117] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#8C6D46]"
              >
                <span>{t('nightlife.callBoxButton', { phone: PHONE_DISPLAY })}</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
