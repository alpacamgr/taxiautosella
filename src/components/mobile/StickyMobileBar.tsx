import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PhoneCall, MessageSquare, Calculator } from 'lucide-react';
import { PHONE_TEL, whatsappLink } from '../../config/contact';

export const StickyMobileBar: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('common');

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 block lg:hidden px-3 py-2.5 bg-tas-ink/95 backdrop-blur-xl border-t border-white/10 shadow-2xl">
      <div className="flex items-center gap-2 max-w-md mx-auto">

        {/* 1-Tap WhatsApp */}
        <a
          href={whatsappLink(t('stickyBar.whatsappMessage'))}
          target="_blank"
          rel="noreferrer"
          className="flex-1 min-h-11 px-3 rounded-lg bg-[#167C4D] active:bg-[#11633D] text-white font-semibold text-xs flex items-center justify-center gap-1.5"
        >
          <MessageSquare className="w-4 h-4" />
          <span>{t('stickyBar.whatsapp')}</span>
        </a>

        {/* 1-Tap Direct Phone Call */}
        <a
          href={`tel:${PHONE_TEL}`}
          className="flex-1 min-h-11 px-3 rounded-lg border border-white/20 active:bg-tas-surface/10 text-white font-semibold text-xs flex items-center justify-center gap-1.5"
        >
          <PhoneCall className="w-4 h-4 text-tas-accent-on-dark" />
          <span>{t('stickyBar.call')}</span>
        </a>

        {/* Instant Quote / Book */}
        <button
          type="button"
          onClick={() => navigate('/booking')}
          className="flex-1 min-h-11 px-3 rounded-lg bg-tas-brass-fill active:bg-tas-brass-active text-tas-on-accent font-semibold text-xs flex items-center justify-center gap-1.5"
        >
          <Calculator className="w-4 h-4" />
          <span>{t('stickyBar.getPrice')}</span>
        </button>

      </div>
    </div>
  );
};
