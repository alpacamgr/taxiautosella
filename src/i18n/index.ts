import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enCommon from '../locales/en/common.json';
import enHome from '../locales/en/home.json';
import enBooking from '../locales/en/booking.json';
import enFleet from '../locales/en/fleet.json';
import enServices from '../locales/en/services.json';
import enExcursions from '../locales/en/excursions.json';
import enFaq from '../locales/en/faq.json';
import enMembers from '../locales/en/members.json';
import enContact from '../locales/en/contact.json';
import enLegal from '../locales/en/legal.json';
import enInquiry from '../locales/en/inquiry.json';
import enReviews from '../locales/en/reviews.json';
import enHomeLight from '../locales/en/home-light.json';
import enHomeAmber from '../locales/en/home-amber.json';

/**
 * A supported language for the site.
 *
 * `code` is the 2-letter i18next key used everywhere in code
 * and in the `<html lang>` attribute.
 * `locale` is the BCP47 tag used for `Intl.*` formatters.
 * `label` names the language in English (menu tooltip / aria labels);
 * `nativeLabel` names it in itself (button text).
 *
 * Adding a language is a two-line change: create the JSON files under
 * `src/locales/<code>/` and add an entry here.
 */
export interface SupportedLanguage {
  code: string;
  label: string;
  nativeLabel: string;
  locale: string;
}

export const SUPPORTED_LANGUAGES: readonly SupportedLanguage[] = [
  { code: 'en', label: 'English', nativeLabel: 'English', locale: 'en-GB' },
  // { code: 'de', label: 'German',  nativeLabel: 'Deutsch',  locale: 'de-DE' },
  // { code: 'it', label: 'Italian', nativeLabel: 'Italiano', locale: 'it-IT' },
] as const;

export const DEFAULT_LANGUAGE = 'en';
const STORAGE_KEY = 'tas-lang';

export const ENGLISH_RESOURCES = {
  common: enCommon,
  home: enHome,
  booking: enBooking,
  fleet: enFleet,
  services: enServices,
  excursions: enExcursions,
  faq: enFaq,
  members: enMembers,
  contact: enContact,
  legal: enLegal,
  inquiry: enInquiry,
  reviews: enReviews,
  homeLight: enHomeLight,
  homeAmber: enHomeAmber,
} as const;

export type Namespace = keyof typeof ENGLISH_RESOURCES;
export const NAMESPACES: readonly Namespace[] = Object.keys(ENGLISH_RESOURCES) as Namespace[];

const isSupported = (code: string): boolean =>
  SUPPORTED_LANGUAGES.some((l) => l.code === code);

const readStoredLanguage = (): string | null => {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v && isSupported(v) ? v : null;
  } catch {
    return null;
  }
};

const writeStoredLanguage = (code: string): void => {
  try {
    window.localStorage.setItem(STORAGE_KEY, code);
  } catch {
    /* ignore quota / privacy-mode errors */
  }
};

const detectInitialLanguage = (): string => {
  const stored = readStoredLanguage();
  if (stored) return stored;
  try {
    const navLanguages = (typeof navigator !== 'undefined' && navigator.languages) || [];
    for (const raw of navLanguages) {
      const prefix = raw.slice(0, 2).toLowerCase();
      if (isSupported(prefix)) return prefix;
    }
  } catch {
    /* ignore */
  }
  return DEFAULT_LANGUAGE;
};

const buildResources = () => {
  // Only English is bundled today. When new locale folders are added, extend
  // this map with the same shape — resources are loaded statically so that
  // TypeScript stays happy and the bundle is deterministic.
  return {
    en: ENGLISH_RESOURCES,
  } as Record<string, typeof ENGLISH_RESOURCES>;
};

const initial = detectInitialLanguage();

if (!i18n.isInitialized) {
  void i18n.use(initReactI18next).init({
    resources: buildResources(),
    lng: initial,
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: SUPPORTED_LANGUAGES.map((l) => l.code),
    defaultNS: 'common',
    ns: NAMESPACES as unknown as string[],
    interpolation: { escapeValue: false },
    returnNull: false,
    react: { useSuspense: false },
  });
}

if (typeof document !== 'undefined') {
  document.documentElement.lang = initial;
}

export const getLanguageMeta = (code: string): SupportedLanguage => {
  return SUPPORTED_LANGUAGES.find((l) => l.code === code) ?? SUPPORTED_LANGUAGES[0];
};

export const getCurrentLanguage = (): string => i18n.language || DEFAULT_LANGUAGE;

export const getCurrentLocale = (): string => getLanguageMeta(getCurrentLanguage()).locale;

export const setLanguage = async (code: string): Promise<void> => {
  if (!isSupported(code)) return;
  await i18n.changeLanguage(code);
  writeStoredLanguage(code);
  if (typeof document !== 'undefined') {
    document.documentElement.lang = code;
  }
};

export default i18n;
