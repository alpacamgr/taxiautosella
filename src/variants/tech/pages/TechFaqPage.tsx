import React from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const TechFaqPage: React.FC = () => {
  const faqs = [
    {
      q: 'Where do I meet my driver at the airport?',
      a: 'Your driver will be waiting in the Arrivals Hall, immediately after you exit baggage claim. They will be holding a tablet or sign displaying the lead passenger\'s name.'
    },
    {
      q: 'What happens if my flight is delayed?',
      a: 'We monitor all flights in real-time. If your flight is delayed, we automatically adjust your pickup time at no extra charge. Your driver will be dispatched based on the actual landing time.'
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept all major credit cards (Visa, MasterCard, Amex) directly in the vehicle via mobile POS, as well as cash. For advance bookings, we accept secure online payments and bank transfers.'
    },
    {
      q: 'How much luggage can I bring?',
      a: 'Our standard luggage allowance is one large suitcase and one carry-on per person. If you are traveling with skis, snowboards, or bikes, please let us know in advance so we can dispatch a vehicle with a specialized trailer or box.'
    },
    {
      q: 'Do you provide child seats?',
      a: 'Yes. We provide certified infant, toddler, and booster seats completely free of charge. Please specify the age and weight of your children during the booking process so we can install the correct seats before pickup.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#090D14] text-white font-['Inter',sans-serif] pb-20">
      
      {/* Header */}
      <section className="px-6 pt-20 pb-12 max-w-3xl mx-auto text-center border-b border-slate-800">
        <HelpCircle className="w-12 h-12 text-[#059669] mx-auto mb-6" />
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
          Frequently Asked <span className="text-[#059669]">Questions</span>.
        </h1>
        <p className="text-lg text-slate-400">
          Everything you need to know about your transfer.
        </p>
      </section>

      {/* FAQ Accordion */}
      <section className="px-6 py-16 max-w-3xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-[#111827] border border-slate-800 rounded-lg p-6 open:bg-slate-900 transition-colors cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-lg text-slate-200 list-none">
                {faq.q}
                <ChevronDown className="w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-slate-400 leading-relaxed pl-2 border-l-2 border-[#059669]">
                {faq.a}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-12 p-6 bg-slate-900 border border-slate-800 rounded-lg text-center">
          <p className="text-slate-400 mb-4">Still have questions?</p>
          <a href="mailto:info@taxiautosella.it" className="text-[#059669] font-bold hover:underline">
            Contact our 24/7 Support Team
          </a>
        </div>
      </section>

    </div>
  );
};
