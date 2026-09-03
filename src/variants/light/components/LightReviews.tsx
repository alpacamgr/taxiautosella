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

const Stars: React.FC<{ label?: string }> = ({ label }) => (
  <div className="flex items-center gap-0.5" aria-label={label} aria-hidden={label ? undefined : true}>
    {[0, 1, 2, 3, 4].map((i) => (
      <Star key={i} className="h-4 w-4 fill-tas-star text-tas-star" />
    ))}
  </div>
);

export const LightReviews: React.FC = () => {
  const { t } = useTranslation('reviews');

  return (
    <section className="border-t border-tas-line bg-tas-parchment py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <Reveal>
          <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-tas-ink sm:text-4xl">
                <Trans i18nKey="reviews:title" components={{ em: <span className="text-tas-primary" /> }} />
              </h2>
            </div>

            <div className="inline-flex items-center gap-3 self-start rounded-full border border-tas-line bg-tas-surface px-5 py-2.5 shadow-card">
              <Stars />
              <span className="text-base font-bold text-tas-ink">4.9</span>
              <span className="text-sm text-tas-muted-text">{t('ratingLabel')}</span>
            </div>
          </header>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {REVIEWERS.map((r, i) => (
            <Reveal key={r.id} delay={i * 80}>
              <figure className="flex h-full flex-col justify-between rounded-xl border border-tas-line bg-tas-surface p-6 shadow-card">
                <div>
                  <Stars label={t('fiveStarsAria')} />
                  <blockquote className="mt-4 text-base leading-relaxed text-tas-ink">
                    &ldquo;{t(`items.${r.id}.quote`)}&rdquo;
                  </blockquote>
                </div>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-tas-line pt-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-tas-primary-soft text-sm font-bold text-tas-primary">
                    {r.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-tas-ink">{r.name}, {r.origin}</span>
                    <span className="block text-xs text-tas-muted-text">{t(`items.${r.id}.date`)}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-tas-muted-text">{t('sampleNote')}</p>
      </div>
    </section>
  );
};

export default LightReviews;
