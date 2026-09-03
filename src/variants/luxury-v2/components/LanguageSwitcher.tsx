import React from 'react';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES, setLanguage } from '../../../i18n';

interface LanguageSwitcherProps {
  variant?: 'nav' | 'mobile';
  className?: string;
}

/**
 * Small EN · DE · IT selector. Renders nothing while only one language is
 * configured, so the current single-language demo shows no switcher. Add
 * an entry to SUPPORTED_LANGUAGES and it appears automatically.
 */
export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  variant = 'nav',
  className,
}) => {
  const { i18n, t } = useTranslation('common');

  if (SUPPORTED_LANGUAGES.length < 2) return null;

  const current = i18n.language;
  const base =
    variant === 'nav'
      ? 'flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em]'
      : 'flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em]';

  return (
    <div
      role="group"
      aria-label={t('language.switcherLabel')}
      className={`${base} ${className ?? ''}`}
    >
      {SUPPORTED_LANGUAGES.map((lang, index) => {
        const active = current === lang.code;
        return (
          <React.Fragment key={lang.code}>
            {index > 0 && (
              <span aria-hidden="true" className="text-white/25">·</span>
            )}
            <button
              type="button"
              lang={lang.code}
              aria-pressed={active}
              aria-label={t('language.switchTo', { language: lang.label })}
              onClick={() => {
                if (!active) void setLanguage(lang.code);
              }}
              className={`min-h-8 rounded px-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-focus ${
                active
                  ? 'text-tas-accent-on-dark'
                  : 'text-tas-paper/70 hover:text-tas-paper'
              }`}
            >
              {lang.code.toUpperCase()}
            </button>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
