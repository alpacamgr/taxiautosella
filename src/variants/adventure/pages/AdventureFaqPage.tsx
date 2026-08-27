import React, { useState } from 'react';
import { FAQS } from '../../../data/faqs';
import { useAppStore } from '../../../store/useAppStore';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const AdventureFaqPage: React.FC = () => {
  const { language } = useAppStore();
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  return (
    <div className="py-16 px-6 lg:px-16 max-w-4xl mx-auto">
      <div className="max-w-2xl mb-12">
        <h1 className="text-3xl sm:text-5xl font-black text-white font-display mb-3">
          Alpine Questions & Information
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          Everything you need to know about winter ski boxes, summer bike trailers, Passo Sella snow conditions, and 24/7 mountain dispatch.
        </p>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq) => {
          const isOpen = openId === faq.id;
          const q = faq.question[language] || faq.question.en;
          const a = faq.answer[language] || faq.answer.en;

          return (
            <div key={faq.id} className="bg-[#0F172A] rounded-2xl border border-sky-900/60 shadow-md overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm font-bold text-white"
              >
                <span>{q}</span>
                <span className="p-1 rounded-lg bg-sky-950 text-sky-400">
                  {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs text-slate-300 leading-relaxed border-t border-sky-950">
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
