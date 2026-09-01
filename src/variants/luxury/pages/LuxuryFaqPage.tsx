import React, { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import { useAppStore } from '../../../store/useAppStore';
import { JsonLd } from '../../../components/seo/JsonLd';
import { Reveal } from '../../../components/motion/Reveal';

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

const emComponent = { em: <span className="italic text-[#C5A880]" /> };

export const LuxuryFaqPage: React.FC = () => {
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
    <div className="min-h-screen bg-[#F8F6F0] pt-24 pb-20">
      <JsonLd data={faqJsonLd} />
      <div className="max-w-4xl mx-auto px-6 lg:px-16">
        <Reveal>
          <header className="mb-16">
            <h1 className="font-editorial text-5xl lg:text-7xl font-normal text-[#0E1117] mb-6">
              <Trans i18nKey="faq:header.title" components={emComponent} />
            </h1>
            <p className="text-[#0E1117]/80 text-lg font-light leading-relaxed">
              {t('header.subtitle')}
            </p>
          </header>
        </Reveal>

        <div className="border-t border-[#0E1117]/20">
          {faqs.map((faq, i) => (
            <Reveal key={faq.id} delay={(i % 4) * 40}>
              <div className="border-b border-[#0E1117]/20">
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  aria-expanded={openIdx === i}
                  aria-controls={`faq-answer-${i}`}
                  className="flex min-h-16 w-full items-center justify-between py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6D46] focus-visible:ring-inset"
                >
                  <span className="font-semibold text-sm sm:text-base text-[#0E1117] pr-6">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#C5A880] flex-shrink-0 transition-transform duration-300 ${openIdx === i ? 'rotate-180 text-[#0E1117]' : ''}`} />
                </button>
                <div
                  id={`faq-answer-${i}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIdx === i ? 'max-h-60 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="max-w-3xl text-sm text-[#0E1117]/80 font-light leading-relaxed pr-10">
                    {faq.a}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-8 border border-[#0E1117]/15 bg-[#EEE9DE] p-8 md:flex-row md:items-center md:p-12">
          <div className="max-w-xl">
            <h2 className="font-editorial text-3xl sm:text-4xl mb-3">{t('cta.title')}</h2>
            <p className="text-[#0E1117]/70 font-light text-sm leading-relaxed">{t('cta.body')}</p>
          </div>
          <button
            onClick={() => openInquiryModal(t('cta.context'), t('cta.prefill'))}
            className="flex min-h-12 w-full items-center justify-center bg-[#0E1117] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#8C6D46] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6D46] focus-visible:ring-offset-2 md:w-auto"
          >
            <span>{t('cta.button')}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
