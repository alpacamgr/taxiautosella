import React, { useState } from 'react';
import { ChevronDown, MessageSquare, PhoneCall, HelpCircle } from 'lucide-react';
import { useAppStore } from '../../../store/useAppStore';

export const LuxuryFaqPage: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const { openInquiryModal } = useAppStore();

  const faqs = [
    {
      q: 'How will I recognize my driver at the airport arrivals hall?',
      a: 'Your personal chauffeur will wait in the airport arrivals hall directly past baggage claim, holding a digital tablet or personalized sign with your name. Prior to landing, you will also receive their direct mobile phone number for seamless communication.'
    },
    {
      q: 'What happens if my flight or train is delayed?',
      a: 'We monitor all inbound flights and rail connections in real time via live tracking systems. Your driver automatically adjusts their arrival time, and we provide up to 60 minutes of complimentary waiting time after your flight touches down with zero surcharge.'
    },
    {
      q: 'Are luggage and ski/snowboard bags included in the price?',
      a: 'Yes, all standard luggage, ski bags, snowboard cases, and boot bags are 100% included in our fixed price quotes. Please specify your passenger count and equipment when booking so we dispatch the optimal Mercedes model or extra-long wheelbase vehicle.'
    },
    {
      q: 'Do I need to pay a deposit in advance?',
      a: 'For standard private transfers, no deposit or prepayment is required. You can settle the fare directly with your chauffeur at the end of the journey. For large group coach charters or extended multi-day rentals, advance deposit details are arranged upon request.'
    },
    {
      q: 'What payment methods do you accept?',
      a: 'Every driver carries a modern wireless POS terminal accepting all major Credit Cards (Visa, Mastercard, American Express), Apple Pay, Google Pay, and Cash (EUR). We also provide official VAT-compliant tax invoices for corporate clients.'
    },
    {
      q: 'Do you provide child and infant safety seats?',
      a: 'Yes, certified child seats, infant capsules (Group 0+), and booster seats (for ages 0–12) are provided completely free of charge upon request during booking.'
    },
    {
      q: 'How do I know which vehicle is mine at the pickup point?',
      a: 'All our vehicles are pristine Mercedes-Benz models (E-Class, S-Class, V-Class, Vito 4MATIC) in elegant dark charcoal or black livery, discreetly displaying the official Taxi Auto Sella consortium crest.'
    },
    {
      q: 'Can we request rest stops or photo stops on scenic mountain passes?',
      a: 'Certainly. Our chauffeurs prioritize your relaxation and comfort. We are pleased to make brief coffee stops or panoramic photo pauses at iconic viewpoints along Passo Sella or Passo Gardena.'
    },
    {
      q: 'What languages do your drivers speak?',
      a: 'All 18 of our consortium drivers are local Val Gardena natives and are fully multilingual, speaking fluent English, German, Italian, and Ladin.'
    },
    {
      q: 'Do you operate on-demand local night taxis between Val Gardena villages?',
      a: 'Yes, during the winter and summer high seasons we operate 24/7 on-demand local taxi dispatch between Ortisei (St. Ulrich), Santa Cristina, Selva (Wolkenstein), ski lifts, and all regional restaurants and nightlife venues.'
    },
    {
      q: 'Are your vehicles equipped for severe winter snow and high mountain passes?',
      a: '100% of our fleet features permanent Mercedes 4MATIC all-wheel-drive systems, premium studded winter tires, and certified snow chains, operated by drivers with decades of Alpine snow experience.'
    },
    {
      q: 'Can you transport downhill mountain bikes and e-bikes in summer?',
      a: 'Yes, we operate specialized weatherproof bike trailers accommodating up to 10 mountain bikes or 3 motorbikes for the Sella Ronda MTB Tour and regional transfers.'
    },
    {
      q: 'Do you offer wheelchair accessible vehicles for disabled passengers?',
      a: 'Yes, we have specially modified Mercedes vans equipped with certified hydraulic wheelchair lifts and ISO 4-point floor tie-down restraints for safe, comfortable travel.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F6F0] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-16">
        <header className="mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-2">
            Frequently Asked Questions
          </span>
          <h1 className="font-editorial text-5xl lg:text-7xl font-normal text-[#0E1117] mb-6">
            Questions & <span className="italic text-[#C5A880]">Answers</span>
          </h1>
          <p className="text-[#0E1117]/80 text-lg font-light leading-relaxed">
            Everything you need to know about our luxury alpine transfers, mountain pass guarantees, booking policies, and journey details.
          </p>
        </header>

        <div className="space-y-3.5">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="bg-white rounded-xl shadow-sm border border-[#0E1117]/10 overflow-hidden transition-all hover:border-[#C5A880]/50"
            >
              <button 
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
              >
                <span className="font-semibold text-sm sm:text-base text-[#0E1117] pr-6">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-[#C5A880] flex-shrink-0 transition-transform duration-300 ${openIdx === i ? 'rotate-180 text-[#0E1117]' : ''}`} />
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIdx === i ? 'max-h-60 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-sm text-[#0E1117]/80 font-light leading-relaxed border-t border-[#0E1117]/5 pt-3">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-[#0E1117] text-[#F8F6F0] p-10 md:p-14 rounded-3xl flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden border border-white/10">
          <div className="relative z-10 max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-2">
              Direct Concierge Support
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl mb-3 text-white">Have an Unlisted Request?</h2>
            <p className="text-[#F8F6F0]/80 font-light mb-8 md:mb-0 text-sm leading-relaxed">
              Our 24/7 dispatch coordinators in Val Gardena are ready to answer custom questions or organize unique Alpine transfers.
            </p>
          </div>
          <button 
            onClick={() => openInquiryModal('General Inquiry', 'I have a specific question about your transfer services...')}
            className="relative z-10 w-full md:w-auto px-8 py-4 bg-[#C5A880] text-[#0E1117] font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors rounded-xl flex items-center justify-center gap-2 shadow-xl"
          >
            <span>Inquire Directly</span>
          </button>
        </div>
      </div>
    </div>
  );
};

