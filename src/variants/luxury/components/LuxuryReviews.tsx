import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Star } from 'lucide-react';
import { Reveal } from '../../../components/motion/Reveal';

// Reviewer identity (proper names, origin) stays in code; only translatable
// text (quote, date) lives in the locale files.
interface ReviewMeta {
  id: 'weber' | 'anand' | 'bianchi';
  name: string;
  origin: string;
}

const REVIEWERS: ReviewMeta[] = [
  { id: 'weber', name: 'Familie Weber', origin: 'Munich' },
  { id: 'anand', name: 'James & Priya Anand', origin: 'London' },
  { id: 'bianchi', name: 'Chiara Bianchi', origin: 'Milano' },
];

export const LuxuryReviews: React.FC = () => {
  const { t } = useTranslation('reviews');

  return (
    <section className="bg-[#F8F6F0] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <Reveal>
          <header className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#8C6D46]">
                {t('eyebrow')}
              </p>
              <h2 className="mt-3 font-editorial text-4xl leading-tight text-[#0E1117] sm:text-5xl">
                <Trans
                  i18nKey="reviews:title"
                  components={{ em: <span className="italic text-[#C5A880]" /> }}
                />
              </h2>
            </div>

            <div className="flex items-center gap-3 rounded-full border border-[#0E1117]/15 bg-white px-5 py-3 shadow-sm">
              <div className="flex items-center gap-0.5" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-[#C5A880] text-[#C5A880]" />
                ))}
              </div>
              <span className="text-sm font-semibold text-[#0E1117]">4.9</span>
              <span className="text-xs font-light text-[#0E1117]/60">{t('ratingLabel')}</span>
            </div>
          </header>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {REVIEWERS.map((r, i) => (
            <Reveal key={r.id} delay={i * 80}>
              <figure className="flex h-full flex-col justify-between rounded-2xl border border-[#0E1117]/10 bg-white p-8 shadow-sm">
                <div>
                  <div className="mb-4 flex items-center gap-0.5" aria-label={t('fiveStarsAria')}>
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Star key={s} className="h-4 w-4 fill-[#C5A880] text-[#C5A880]" />
                    ))}
                  </div>
                  <blockquote className="font-editorial text-lg italic leading-relaxed text-[#0E1117]/90">
                    &ldquo;{t(`items.${r.id}.quote`)}&rdquo;
                  </blockquote>
                </div>
                <figcaption className="mt-6 border-t border-[#0E1117]/10 pt-4">
                  <div className="text-sm font-semibold text-[#0E1117]">
                    {r.name}, {r.origin}
                  </div>
                  <div className="text-xs font-light text-[#0E1117]/60">{t(`items.${r.id}.date`)}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-xs font-light italic text-[#0E1117]/50">
          {t('sampleNote')}
        </p>
      </div>
    </section>
  );
};

export default LuxuryReviews;
