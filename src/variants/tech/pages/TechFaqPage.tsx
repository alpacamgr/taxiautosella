import React, { useState } from 'react';
import { FAQS } from '../../../data/faqs';
import { useAppStore } from '../../../store/useAppStore';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const TechFaqPage: React.FC = () => {
  const { language } = useAppStore();
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  return (
    <div className="py-16 px-4 sm:px-8 max-w-4xl mx-auto">
      <div className="max-w-2xl mb-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-3">
          Help Center & FAQs
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          Quick answers to common questions about booking, flight delays, meeting your driver, cancellations, and ski gear.
        </p>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq) => {
          const isOpen = openId === faq.id;
          const q = faq.question[language] || faq.question.en;
          const a = faq.answer[language] || faq.answer.en;

          return (
            <div key={faq.id} className="bg-slate-50 rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm font-bold text-slate-900"
              >
                <span>{q}</span>
                <span className="p-1 rounded-lg bg-white border border-slate-200 text-slate-600">
                  {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-200">
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
