import React, { useState } from 'react';
import { FAQS } from '../../data/faqs';
import { useAppStore } from '../../store/useAppStore';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface Props {
  themeVariant?: 'luxury' | 'tech' | 'adventure';
}

export const FaqSection: React.FC<Props> = ({ themeVariant = 'luxury' }) => {
  const { language, t } = useAppStore();
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const isLuxury = themeVariant === 'luxury';
  const isTech = themeVariant === 'tech';
  const isAdventure = themeVariant === 'adventure';

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${
          isLuxury 
            ? 'bg-gold-500/10 text-gold-400 border border-gold-500/30' 
            : isTech 
            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
            : 'bg-sky-500/20 text-sky-300 border border-sky-400/30'
        }`}>
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Traveler Advice & FAQ</span>
        </div>

        <h2 className={`text-2xl sm:text-4xl font-extrabold tracking-tight mb-4 ${
          isTech ? 'text-slate-900' : isLuxury ? 'font-serif gold-gradient-text' : 'text-white'
        }`}>
          {t('nav.faq')}
        </h2>
        <p className={`text-xs sm:text-sm ${isTech ? 'text-slate-600' : 'text-slate-400'}`}>
          Everything you need to know about airport meet & greets, flight tracking, and ski luggage.
        </p>
      </div>

      {/* FAQ Accordion List */}
      <div className="space-y-3">
        {FAQS.map((faq) => {
          const isOpen = openId === faq.id;
          const questionText = faq.question[language] || faq.question.en;
          const answerText = faq.answer[language] || faq.answer.en;

          return (
            <div
              key={faq.id}
              className={`rounded-2xl border transition-all overflow-hidden ${
                isTech
                  ? 'bg-white border-slate-200 shadow-sm'
                  : 'bg-slate-900/70 border-slate-800'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(faq.id)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm hover:opacity-90 transition-opacity"
              >
                <span className={isTech ? 'text-slate-900' : 'text-white'}>
                  {questionText}
                </span>
                <span className={`p-1.5 rounded-lg flex-shrink-0 ${
                  isLuxury ? 'bg-gold-500/10 text-gold-400' : isTech ? 'bg-emerald-50 text-emerald-600' : 'bg-sky-500/20 text-sky-300'
                }`}>
                  {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </button>

              {isOpen && (
                <div className={`px-5 pb-5 pt-1 text-xs leading-relaxed border-t ${
                  isTech ? 'text-slate-600 border-slate-100' : 'text-slate-300 border-white/5'
                }`}>
                  {answerText}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </section>
  );
};
