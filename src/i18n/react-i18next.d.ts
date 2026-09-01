import 'react-i18next';
import type { ENGLISH_RESOURCES } from './index';

/**
 * Type augmentation so `t('common.nav.home')` and friends are checked
 * against the English resources at compile time. Any locale added later
 * must mirror the English shape.
 */
declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: typeof ENGLISH_RESOURCES;
    returnNull: false;
  }
}
