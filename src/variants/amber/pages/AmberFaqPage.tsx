import React, { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import { useAppStore } from '../../../store/useAppStore';
import { JsonLd } from '../components/JsonLd';
import { Reveal } from '../components/Reveal';

const FAQ_IDS = [
  'recognize',
  'delay',
  'luggage',
  'deposit',
  'payment',
  'children',
  'vehicle',
  'stops',
  'languages',
  'night',
  'winter',
  'bikes',
  'wheelchair',
] as const;

const emComponent = { em: <span className="text-tas-accent-on-light" /> };

export const AmberFaqPage: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const { openInquiryModal } = useAppStore();
  const { t } = useTranslation('faq');

  const faqs = FAQ_IDS.map((id) => ({
    id,
    q: t(`items.${id}.q`),
    a: t(`items.${id}.a`),
  }));

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <div className="bg-tas-paper">
      <JsonLd data={faqJsonLd} />

      <section className="border-b border-tas-line bg-tas-parchment">
        <div className="mx-auto max-w-4xl px-6 py-14 sm:py-20 lg:px-16">
          <Reveal>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-tas-ink sm:text-5xl">
              <Trans i18nKey="faq:header.title" components={emComponent} />
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-tas-muted-text">
              {t('header.subtitle')}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 sm:py-20 lg:px-16">
        <div className="overflow-hidden rounded-xl border border-tas-line bg-tas-surface">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <Reveal key={faq.id} delay={(i % 4) * 40}>
                <div className={i > 0 ? 'border-t border-tas-line' : ''}>
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    className="flex min-h-16 w-full items-center justify-between gap-6 px-5 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-tas-focus sm:px-6"
                  >
                    <span className="text-base font-bold text-tas-ink sm:text-lg">{faq.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 flex-shrink-0 text-tas-accent-on-light transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    id={`faq-answer-${i}`}
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="max-w-3xl px-5 pb-6 pr-8 text-base leading-relaxed text-tas-muted-text sm:px-6">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-xl bg-tas-primary-soft p-6 sm:p-8 md:flex-row md:items-center md:p-10">
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold tracking-tight text-tas-ink sm:text-3xl">
                {t('cta.title')}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-tas-muted-text">{t('cta.body')}</p>
            </div>
            <button
              type="button"
              onClick={() => openInquiryModal(t('cta.context'), t('cta.prefill'))}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-tas-primary px-5 text-sm font-bold text-tas-on-accent transition-colors hover:bg-tas-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-focus focus-visible:ring-offset-2 md:w-auto"
            >
              <span>{t('cta.button')}</span>
            </button>
          </div>
        </Reveal>
      </section>
    </div>
  );
};
