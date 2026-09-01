import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useAppStore } from '../../../store/useAppStore';

export const LuxuryFaqPage: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const { openInquiryModal } = useAppStore();

  const faqs = [
    {
      q: 'How will I recognize my driver at the airport arrivals hall?',
      a: 'Your driver will wait in the arrivals area with a sign showing your name and may contact you on the mobile number supplied with the booking.'
    },
    {
      q: 'What happens if my flight or train is delayed?',
      a: 'Up to one hour of flight-delay waiting is included. For longer delays, waiting time may be charged; please let dispatch know as soon as you can.'
    },
    {
      q: 'Are luggage and ski/snowboard bags included in the price?',
      a: 'Standard luggage and ski or snowboard bags are included. Specify passenger and equipment quantities when booking so dispatch can assign a suitable vehicle.'
    },
    {
      q: 'Do I need to pay a deposit in advance?',
      a: 'Standard private transfers do not require prepayment. Group coach hire or multi-day bookings may require a deposit; dispatch will confirm this before booking.'
    },
    {
      q: 'What payment methods do you accept?',
      a: 'Payment is available by cash, bank transfer, or credit card. Ask dispatch in advance if you need a particular payment arrangement or invoice.'
    },
    {
      q: 'Do you provide child and infant safety seats?',
      a: 'Yes. Child seats for different ages are available on request. Include the child’s age when booking so dispatch can prepare the right seat.'
    },
    {
      q: 'How do I know which vehicle is mine at the pickup point?',
      a: 'Vehicle choice depends on passenger count, luggage, equipment, accessibility needs, and availability. If you prefer a particular vehicle, ask when booking.'
    },
    {
      q: 'Can we request rest stops or photo stops on scenic mountain passes?',
      a: 'Yes. Ask for a short rest or photo stop when booking so it can be allowed for in the route and timing.'
    },
    {
      q: 'What languages do your drivers speak?',
      a: 'The local driver team can assist guests in Italian, German, and English. Mention your preferred language when booking.'
    },
    {
      q: 'Do you operate on-demand local night taxis between Val Gardena villages?',
      a: 'Yes, during the winter and summer high seasons we operate 24/7 on-demand local taxi dispatch between Ortisei (St. Ulrich), Santa Cristina, Selva (Wolkenstein), ski lifts, and all regional restaurants and nightlife venues.'
    },
    {
      q: 'Are your vehicles equipped for severe winter snow and high mountain passes?',
      a: 'The fleet includes Mercedes 4MATIC vehicles, and minivans are prepared with winter equipment and external ski carriers during the winter season. Dispatch selects a suitable vehicle for the conditions and group.'
    },
    {
      q: 'Can you transport downhill mountain bikes and e-bikes in summer?',
      a: 'Yes, we operate specialized weatherproof bike trailers accommodating up to 10 mountain bikes or 3 motorbikes for the Sella Ronda MTB Tour and regional transfers.'
    },
    {
      q: 'Do you offer wheelchair accessible vehicles for disabled passengers?',
      a: 'Yes. A specially adapted vehicle can carry one wheelchair and up to seven passengers. Contact dispatch before booking so the team can confirm availability and your exact access requirements.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F6F0] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-16">
        <header className="mb-16">
          <h1 className="font-editorial text-5xl lg:text-7xl font-normal text-[#0E1117] mb-6">
            Questions & <span className="italic text-[#C5A880]">Answers</span>
          </h1>
          <p className="text-[#0E1117]/80 text-lg font-light leading-relaxed">
            Practical answers about pickup, delays, payment, luggage, children, winter travel and accessible vehicles.
          </p>
        </header>

        <div className="border-t border-[#0E1117]/20">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="border-b border-[#0E1117]/20"
            >
              <button 
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                aria-expanded={openIdx === i}
                aria-controls={`faq-answer-${i}`}
                className="flex min-h-16 w-full items-center justify-between py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6D46] focus-visible:ring-inset"
              >
                <span className="font-semibold text-sm sm:text-base text-[#0E1117] pr-6">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-[#C5A880] flex-shrink-0 transition-transform duration-300 ${openIdx === i ? 'rotate-180 text-[#0E1117]' : ''}`} />
              </button>
              <div 
                id={`faq-answer-${i}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIdx === i ? 'max-h-60 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="max-w-3xl text-sm text-[#0E1117]/80 font-light leading-relaxed pr-10">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-8 border border-[#0E1117]/15 bg-[#EEE9DE] p-8 md:flex-row md:items-center md:p-12">
          <div className="max-w-xl">
            <h2 className="font-editorial text-3xl sm:text-4xl mb-3">Still need help?</h2>
            <p className="text-[#0E1117]/70 font-light text-sm leading-relaxed">
              Ask the local dispatch team about a route, vehicle or transport requirement.
            </p>
          </div>
          <button 
            onClick={() => openInquiryModal('General Inquiry', 'I have a specific question about your transfer services...')}
            className="flex min-h-12 w-full items-center justify-center bg-[#0E1117] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#8C6D46] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6D46] focus-visible:ring-offset-2 md:w-auto"
          >
            <span>Ask dispatch</span>
          </button>
        </div>
      </div>
    </div>
  );
};

