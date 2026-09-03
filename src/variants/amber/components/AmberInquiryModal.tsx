import React from 'react';
/*
THESIS: A quiet dispatch sheet — one identity, one summary card, three fields, WhatsApp handoff.
OWN-WORLD: Warm-paper surface, ink type, Playfair title, gold accent line. Slides in from the right on desktop, up from the bottom on mobile.
STORY: Visitor sees what they came from, adds name + phone + a note, sends it to dispatch.
FORM: Right-side sheet (desktop) / bottom sheet (mobile); preserves the existing openInquiryModal(context, prefill, contact) API.
*/
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, Check, Mail, MessageCircle, Phone, X } from 'lucide-react';
import { useAppStore } from '../../../store/useAppStore';
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, whatsappLink } from '../../../config/contact';

type InquiryKind = 'transfer' | 'excursion' | 'fleet' | 'urgent' | 'service' | 'general';

interface Presentation {
  kind: InquiryKind;
  eyebrow: string;
  title: string;
  intro: string;
  contextLabel: string;
  placeholder: string;
}

// Which kind matches the free-text `context` string other pages pass in.
// Keeps the existing openInquiryModal() call sites unchanged; only the copy
// per kind moves through i18n.
const kindFor = (context: string): InquiryKind => {
  const value = (context || '').toLowerCase();
  if (value.includes('night') || value.includes('nightlife') || (value.includes('taxi') && value.includes('dispatch'))) {
    return 'urgent';
  }
  if (value.includes('excursion')) return 'excursion';
  if (value.includes('fleet') || value.includes('charter') || value.includes('vehicle') || value.includes('coach')) return 'fleet';
  if (value.includes('service') || value.includes('chauffeur') || value.includes('hourly')) return 'service';
  if (value.includes('transfer') || value.includes('gateway') || value.includes('station') || value.includes('reservation')) return 'transfer';
  return 'general';
};

const parseSummary = (prefill: string): Array<{ label: string; value: string }> => {
  if (!prefill) return [];
  const items: Array<{ label: string; value: string }> = [];
  const seen = new Set<string>();
  prefill.split('\n').forEach((raw) => {
    const line = raw.trim();
    if (!line || !line.includes(':')) return;
    const [labelPart, ...rest] = line.split(':');
    const label = labelPart.trim();
    const value = rest.join(':').trim();
    if (!value) return;
    const key = label.toLowerCase();
    if (
      key.startsWith('please ')
      || key.startsWith('i would like')
      || key.startsWith('i have')
      || key.startsWith('i am interested')
      || key.startsWith('need immediate')
    ) return;
    if (seen.has(key)) return;
    seen.add(key);
    items.push({ label, value });
  });
  return items;
};

const useReducedMotion = () => {
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener?.('change', handler);
    return () => mq.removeEventListener?.('change', handler);
  }, []);
  return reduced;
};

const EQUIPMENT_KEYS = ['skis', 'bikes', 'child'] as const;
type EquipmentKey = (typeof EQUIPMENT_KEYS)[number];

export const AmberInquiryModal: React.FC = () => {
  const {
    isInquiryModalOpen,
    closeInquiryModal,
    inquiryContext,
    inquiryPrefill,
    inquiryContact,
  } = useAppStore();
  const { t } = useTranslation('inquiry');

  const kind = kindFor(inquiryContext);
  const presentation: Presentation = {
    kind,
    eyebrow: t(`kinds.${kind}.eyebrow`),
    title: t(`kinds.${kind}.title`),
    intro: t(`kinds.${kind}.intro`),
    contextLabel: t(`kinds.${kind}.contextLabel`),
    placeholder: t(`kinds.${kind}.placeholder`),
  };
  const reducedMotion = useReducedMotion();

  const dialogRef = React.useRef<HTMLDivElement>(null);
  const nameFieldRef = React.useRef<HTMLInputElement>(null);
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);

  const [mounted, setMounted] = React.useState(false);
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [details, setDetails] = React.useState('');
  const [choices, setChoices] = React.useState<EquipmentKey[]>([]);
  const [validation, setValidation] = React.useState('');
  const [status, setStatus] = React.useState('');

  const summary = React.useMemo(() => parseSummary(inquiryPrefill), [inquiryPrefill]);

  React.useEffect(() => {
    if (!isInquiryModalOpen) return;
    setName(inquiryContact.name ?? '');
    setPhone(inquiryContact.phone ?? '');
    setDetails('');
    setChoices([]);
    setValidation('');
    setStatus('');
  }, [inquiryContact, inquiryContext, inquiryPrefill, isInquiryModalOpen]);

  React.useEffect(() => {
    if (!isInquiryModalOpen) {
      setMounted(false);
      return;
    }
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const raf = window.requestAnimationFrame(() => setMounted(true));

    const focusTimer = window.setTimeout(() => {
      if (presentation.kind === 'urgent') {
        closeButtonRef.current?.focus();
      } else {
        nameFieldRef.current?.focus();
      }
    }, reducedMotion ? 0 : 260);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeInquiryModal();
        return;
      }
      if (event.key !== 'Tab' || !dialogRef.current) return;
      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )).filter((el) => el.offsetParent !== null || el === document.activeElement);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.cancelAnimationFrame(raf);
      window.clearTimeout(focusTimer);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInquiryModalOpen]);

  if (!isInquiryModalOpen) return null;

  const toggleChoice = (choice: EquipmentKey) => setChoices((current) => (
    current.includes(choice) ? current.filter((c) => c !== choice) : [...current, choice]
  ));

  const chosenEquipmentLabels = choices.map((c) => t(`equipmentOptions.${c}`));

  const messageLines: string[] = [];
  messageLines.push(t('template.heading', { context: presentation.contextLabel }));
  summary.forEach((s) => messageLines.push(`${s.label}: ${s.value}`));
  if (choices.length) messageLines.push(t('template.equipment', { values: chosenEquipmentLabels.join(', ') }));
  if (name.trim()) messageLines.push(t('template.name', { value: name.trim() }));
  if (phone.trim()) messageLines.push(t('template.phone', { value: phone.trim() }));
  if (details.trim()) messageLines.push(t('template.details', { value: details.trim() }));
  messageLines.push(t('template.closing'));
  const message = messageLines.filter(Boolean).join('\n');

  const validate = (): boolean => {
    if (!name.trim()) {
      setValidation(t('validation'));
      nameFieldRef.current?.focus();
      return false;
    }
    setValidation('');
    return true;
  };

  const openWhatsApp = () => {
    if (!validate()) return;
    const url = whatsappLink(message);
    const win = window.open(url, '_blank', 'noopener,noreferrer');
    if (!win) window.location.href = url;
    setStatus(t('statusWhatsapp'));
  };

  const openEmail = () => {
    if (!validate()) return;
    const subject = t('emailSubject', { context: presentation.contextLabel });
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    setStatus(t('statusEmail'));
  };

  const showEquipment = presentation.kind === 'transfer' || presentation.kind === 'fleet';
  const isUrgent = presentation.kind === 'urgent';

  const transitionClass = reducedMotion
    ? ''
    : 'transition-transform duration-[250ms] ease-out';

  const slideClosedDesktop = 'lg:translate-x-full';
  const slideClosedMobile = 'translate-y-full';
  const slideOpen = 'translate-y-0 lg:translate-x-0';

  return (
    <div
      className={`fixed inset-0 z-50 flex items-end justify-end ${mounted ? 'bg-tas-ink/55 backdrop-blur-sm' : 'bg-transparent'} ${reducedMotion ? '' : 'transition-colors duration-[250ms]'}`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closeInquiryModal();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="inquiry-title"
        aria-describedby="inquiry-intro"
        className={`relative flex h-auto max-h-[92dvh] w-full flex-col overflow-hidden rounded-t-3xl bg-tas-paper shadow-[0_24px_80px_rgba(17,32,25,0.28)] lg:h-full lg:max-h-none lg:max-w-md lg:rounded-none lg:rounded-l-3xl ${transitionClass} ${mounted ? slideOpen : `${slideClosedMobile} ${slideClosedDesktop}`}`}
      >
        <header className="relative border-b border-tas-ink/10 bg-tas-paper px-5 pt-5 pb-4 sm:px-7 sm:pt-6">
          <div className="pr-12">
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-tas-accent-strong">
              <span className="inline-block h-px w-6 bg-tas-brass-fill" aria-hidden="true" />
              {presentation.eyebrow}
            </div>
            <h2
              id="inquiry-title"
              className="mt-2 font-editorial text-[1.75rem] leading-tight text-tas-ink sm:text-3xl"
            >
              {presentation.title}
            </h2>
            <p id="inquiry-intro" className="mt-2 text-sm leading-6 text-tas-muted-text">
              {presentation.intro}
            </p>
            {!isUrgent && (
              <a
                href={`tel:${PHONE_TEL}`}
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-tas-ink/80 underline decoration-tas-focus decoration-[1.5px] underline-offset-4 hover:text-tas-ink"
              >
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                {t('callWithPhone', { phone: PHONE_DISPLAY })}
              </a>
            )}
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeInquiryModal}
            className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full text-tas-ink/70 transition-colors hover:bg-tas-ink/5 hover:text-tas-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-focus focus-visible:ring-offset-2 focus-visible:ring-offset-tas-paper sm:right-5 sm:top-5"
            aria-label={t('close')}
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto overscroll-contain">
          <div className="space-y-5 px-5 py-5 sm:px-7 sm:py-6">
            {isUrgent && (
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex min-h-14 items-center justify-between rounded-2xl bg-tas-ink px-5 text-tas-paper transition-colors hover:bg-tas-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-focus focus-visible:ring-offset-2 focus-visible:ring-offset-tas-paper"
              >
                <span className="flex items-center gap-2.5 text-sm font-bold uppercase tracking-[0.12em]">
                  <Phone className="h-4 w-4" aria-hidden="true" /> {t('callDispatch')}
                </span>
                <span className="text-sm text-tas-paper/90">{PHONE_DISPLAY}</span>
              </a>
            )}

            {summary.length > 0 && (
              <section
                aria-label={t('yourRequest')}
                className="rounded-2xl border border-tas-ink/10 bg-tas-parchment px-4 py-3.5"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-tas-accent-strong">
                  {t('yourRequest')}
                </p>
                <dl className="mt-2 space-y-1.5">
                  {summary.map((item, i) => (
                    <div key={`${item.label}-${i}`} className="flex flex-wrap gap-x-2 text-sm leading-5 text-tas-ink">
                      <dt className="font-semibold text-tas-ink/80">{item.label}:</dt>
                      <dd className="text-tas-ink/90">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}

            <div className="space-y-4">
              <label className="block">
                <span className="text-sm font-semibold text-tas-ink">
                  {t('nameLabel')}
                </span>
                <input
                  ref={nameFieldRef}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                  placeholder={t('namePlaceholder')}
                  className="mt-1.5 h-11 w-full rounded-xl border border-tas-ink/15 bg-tas-surface px-3.5 text-sm text-tas-ink outline-none placeholder:text-tas-muted-text focus:border-tas-focus focus:ring-2 focus:ring-tas-focus/25"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-tas-ink">
                  {t('phoneLabel')}{' '}
                  <span className="font-normal text-tas-muted-text normal-case tracking-normal">
                    {t('phoneOptional')}
                  </span>
                </span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  autoComplete="tel"
                  placeholder={t('phonePlaceholder')}
                  className="mt-1.5 h-11 w-full rounded-xl border border-tas-ink/15 bg-tas-surface px-3.5 text-sm text-tas-ink outline-none placeholder:text-tas-muted-text focus:border-tas-focus focus:ring-2 focus:ring-tas-focus/25"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-tas-ink">
                  {t('detailsLabel')}
                </span>
                <textarea
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  rows={4}
                  placeholder={presentation.placeholder}
                  className="mt-1.5 w-full resize-none rounded-xl border border-tas-ink/15 bg-tas-surface px-3.5 py-3 text-sm leading-6 text-tas-ink outline-none placeholder:text-tas-muted-text focus:border-tas-focus focus:ring-2 focus:ring-tas-focus/25"
                />
              </label>

              {showEquipment && (
                <div>
                  <p className="text-sm font-semibold text-tas-ink">
                    {t('equipmentLabel')}{' '}
                    <span className="font-normal text-tas-muted-text normal-case tracking-normal">
                      {t('equipmentOptional')}
                    </span>
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {EQUIPMENT_KEYS.map((choice) => {
                      const on = choices.includes(choice);
                      const label = t(`equipmentOptions.${choice}`);
                      return (
                        <button
                          key={choice}
                          type="button"
                          aria-pressed={on}
                          onClick={() => toggleChoice(choice)}
                          className={`flex min-h-9 items-center gap-2 rounded-full border px-3 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-focus focus-visible:ring-offset-2 focus-visible:ring-offset-tas-paper ${
                            on
                              ? 'border-tas-accent-strong bg-tas-parchment text-tas-ink'
                              : 'border-tas-ink/15 bg-tas-surface text-tas-ink/75 hover:border-tas-accent-strong hover:text-tas-ink'
                          }`}
                        >
                          <span className={`flex h-4 w-4 items-center justify-center rounded-full border ${on ? 'border-tas-accent-strong bg-tas-accent-strong text-white' : 'border-tas-ink/30'}`}>
                            {on && <Check className="h-2.5 w-2.5" aria-hidden="true" />}
                          </span>
                          {label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              <p className="text-sm text-tas-muted-text">{t('hint')}</p>
              {validation && (
                <p role="alert" className="text-sm font-medium text-[#A23E2A]">
                  {validation}
                </p>
              )}
            </div>

            <div className="space-y-2.5 pt-1">
              <button
                type="button"
                onClick={openWhatsApp}
                className="flex min-h-12 w-full items-center justify-between rounded-xl bg-tas-ink px-4 text-sm font-bold uppercase tracking-[0.12em] text-tas-paper transition-colors hover:bg-tas-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-focus focus-visible:ring-offset-2 focus-visible:ring-offset-tas-paper"
              >
                <span className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  {t('sendWhatsapp')}
                </span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={openEmail}
                className="flex min-h-10 w-full items-center justify-center gap-2 text-sm font-medium text-tas-ink/75 underline decoration-tas-focus decoration-[1.5px] underline-offset-4 hover:text-tas-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-focus focus-visible:ring-offset-2 focus-visible:ring-offset-tas-paper"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {t('emailInstead')}
              </button>
              <p aria-live="polite" className="min-h-5 text-center text-xs font-medium text-[#476759]">
                {status}
              </p>
            </div>

            <section aria-label={t('messagePreview')} className="rounded-xl border border-tas-ink/10 bg-tas-surface/70 px-3.5 py-3">
              <p className="text-xs font-semibold text-tas-muted-text">
                {t('messagePreview')}
              </p>
              <pre className="mt-1.5 whitespace-pre-wrap break-words font-sans text-[12px] leading-5 text-tas-ink/75">
                {message}
              </pre>
            </section>

            <p className="text-xs leading-5 text-tas-muted-text">
              {t('notBookedNote')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
