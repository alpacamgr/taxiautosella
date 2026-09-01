import React from 'react';
import { useAppStore } from '../../store/useAppStore';
import { PhoneCall, MessageSquare, Send } from 'lucide-react';

export const StickyMobileBar: React.FC = () => {
  const { openInquiryModal } = useAppStore();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 block lg:hidden px-3 py-2.5 bg-[#0E1117]/95 backdrop-blur-xl border-t border-white/10 shadow-2xl">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        
        {/* 1-Tap WhatsApp */}
        <a
          href="https://wa.me/390471790033?text=Hello%20Taxi%20Auto%20Sella,%20I%20would%20like%20to%20request%20a%20taxi%20transfer."
          target="_blank"
          rel="noreferrer"
          className="flex-1 min-h-11 px-3 bg-[#167C4D] active:bg-[#11633D] text-white font-semibold text-xs flex items-center justify-center gap-1.5"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        {/* 1-Tap Direct Phone Call */}
        <a
          href="tel:+390471790033"
          className="flex-1 min-h-11 px-3 border border-white/20 active:bg-white/10 text-white font-semibold text-xs flex items-center justify-center gap-1.5"
        >
          <PhoneCall className="w-4 h-4 text-[#C5A880]" />
          <span>Call</span>
        </a>

        {/* Instant Quote / Book */}
        <button
          type="button"
          onClick={() => openInquiryModal('Transfer reservation', 'I would like to arrange a transfer with Taxi Auto Sella.')}
          className="flex-1 min-h-11 px-3 bg-[#C5A880] active:bg-[#B09269] text-[#0E1117] font-semibold text-xs flex items-center justify-center gap-1.5"
        >
          <Send className="w-4 h-4" />
          <span>Plan a ride</span>
        </button>

      </div>
    </div>
  );
};
