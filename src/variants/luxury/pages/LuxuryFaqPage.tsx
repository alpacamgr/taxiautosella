import React, { useState } from 'react';
import { FAQS } from '../../../data/faqs';
import { useAppStore } from '../../../store/useAppStore';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const LuxuryFaqPage: React.FC = () => {
  const { language } = useAppStore();
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  return (
    <div className="py-20 px-6 lg:px-16 max-w-5xl mx-auto">
      <div className="max-w-3xl mb-16">
        <h1 className="font-editorial text-4xl sm:text-6xl text-[#0E1117] mb-4">
          Frequently <span className="italic text-[#C5A880]">Asked Questions</span>
        </h1>
        <p className="text-base text-[#0E1117]/70 font-light leading-relaxed">
          Detailed information about private airport arrivals, flight delay tracking, ski luggage, payment methods, and winter pass safety.
        </p>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq) => {
          const isOpen = openId === faq.id;
          const q = faq.question[language] || faq.question.en;
          const a = faq.answer[language] || faq.answer.en;

          return (
            <div key={faq.id} className="bg-white rounded-2xl border border-[#0E1117]/5 shadow-sm overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 text-sm font-semibold text-[#0E1117]"
              >
                <span>{q}</span>
                <span className="p-1 rounded-lg bg-[#F8F6F0] text-[#C5A880]">
                  {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-1 text-xs text-[#0E1117]/70 leading-relaxed border-t border-[#0E1117]/5">
                  {a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
