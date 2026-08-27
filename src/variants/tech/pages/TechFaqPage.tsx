import React, { useState } from 'react';
import { FAQS } from '../../../data/faqs';
import { useAppStore } from '../../../store/useAppStore';
import { ChevronDown, ChevronUp, PhoneCall } from 'lucide-react';

export const TechFaqPage: React.FC = () => {
  const { language } = useAppStore();
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  return (
    <div className="py-16 px-4 sm:px-8 lg:px-16 max-w-4xl mx-auto">
      <div className="max-w-2xl mb-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-3">
          Questions & Answers
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Important information about meeting your driver, delay policies, luggage, child seats, and payment methods.
        </p>
      </div>

      <div className="space-y-4 mb-16">
        {FAQS.map((faq) => {
          const isOpen = openId === faq.id;
          const q = faq.question[language] || faq.question.en;
          const a = faq.answer[language] || faq.answer.en;

          return (
            <div key={faq.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm font-bold text-slate-900 hover:text-[#D97706] transition-colors"
              >
                <span>{q}</span>
                <span className="p-1 rounded-lg bg-slate-100 text-slate-600">
                  {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                  {a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Hotline Footer */}
      <div className="bg-[#0A192F] text-white p-8 rounded-3xl border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold mb-1">Have More Questions?</h3>
          <p className="text-xs text-slate-300">Call our central office or send a direct inquiry.</p>
        </div>
        <a
          href="tel:+390471790033"
          className="px-5 py-3 bg-[#D97706] text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#b45309] transition-colors flex items-center gap-2 whitespace-nowrap"
        >
          <PhoneCall className="w-4 h-4" />
          <span>+39 0471 790033</span>
        </a>
      </div>
    </div>
  );
};
