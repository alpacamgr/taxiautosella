import React from 'react';
import { useAppStore } from '../../store/useAppStore';
import { PhoneCall, MessageSquare, Calculator } from 'lucide-react';

export const StickyMobileBar: React.FC = () => {
  const { openBookingModal, activeConcept } = useAppStore();

  const isLuxury = activeConcept === 'luxury';
  const isTech = activeConcept === 'tech';

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 block lg:hidden p-2.5 bg-slate-950/95 backdrop-blur-xl border-t border-slate-800 shadow-2xl">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        
        {/* 1-Tap WhatsApp */}
        <a
          href="https://wa.me/390471790033?text=Hello%20Taxi%20Auto%20Sella,%20I%20would%20like%20to%20request%20a%20taxi%20transfer."
          target="_blank"
          rel="noreferrer"
          className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        {/* 1-Tap Direct Phone Call */}
        <a
          href="tel:+390471790033"
          className="flex-1 py-2.5 px-3 rounded-xl bg-slate-800 active:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 border border-slate-700 shadow-md"
        >
          <PhoneCall className="w-4 h-4 text-gold-400" />
          <span>Call Dispatch</span>
        </a>

        {/* Instant Quote / Book */}
        <button
          type="button"
          onClick={() => openBookingModal()}
          className={`flex-1 py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-md ${
            isLuxury
              ? 'bg-gold-500 active:bg-gold-600 text-black'
              : isTech
              ? 'bg-slate-900 active:bg-black text-white border border-slate-700'
              : 'bg-sky-500 active:bg-sky-600 text-white'
          }`}
        >
          <Calculator className="w-4 h-4" />
          <span>Instant Quote</span>
        </button>

      </div>
    </div>
  );
};
