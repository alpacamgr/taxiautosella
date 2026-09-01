/**
 * Single source of truth for company contact data.
 * NOTE: WHATSAPP_NUMBER currently uses the office landline from the legacy site.
 * Replace with the client's real WhatsApp Business number before launch.
 */
export const COMPANY_NAME = 'Taxi Auto Sella';
export const COMPANY_LEGAL_NAME = 'Taxi Auto Sella — Consorzio Noleggio con Conducente';
export const PHONE_DISPLAY = '+39 0471 790033';
export const PHONE_TEL = '+390471790033';
export const FAX_DISPLAY = '+39 0471 790034';
export const WHATSAPP_NUMBER = '390471790033';
export const EMAIL = 'info@taxiautosella.it';
export const ADDRESS_LINE1 = 'Str. Gherdëina 7/A';
export const ADDRESS_LINE2 = 'I-39047 Santa Cristina Val Gardena (BZ), Italy';
export const VAT_NUMBER = 'IT01707460216';
export const FACEBOOK_URL = 'https://www.facebook.com/taxiautosella.valgardena';
export const BOOKING_WIDGET_URL = 'https://onlinebooking.taxiautosella.it';

export const whatsappLink = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
