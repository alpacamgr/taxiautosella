import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useAppStore } from '../../../store/useAppStore';

export const LuxuryFaqPage: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How will I recognize my driver at the airport?',
      a: 'Your personal chauffeur will wait in the arrivals hall holding a personalized sign with your name. You will also receive their mobile number before your journey for seamless coordination. Look for our signature Taxi Auto Sella logo on the driver\'s tablet or sign.'
    },
    {
      q: 'How do I know which vehicle is mine?',
      a: 'All our Mercedes-Benz vehicles are discreet, usually black or dark colors, featuring the understated Taxi Auto Sella consortium logo. Your driver will guide you directly to the vehicle parked in the VIP or short-term parking.'
    },
    {
      q: 'Do I need to pay a deposit?',
      a: 'For standard transfers, no deposit is required. You can pay the driver directly at the end of the journey. For large groups, luxury coaches, or extended hourly rentals, a partial deposit via bank transfer may be requested to secure the booking.'
    },
    {
      q: 'How far in advance should I book?',
      a: 'We recommend booking as early as possible, especially during peak winter season and holidays, to guarantee your preferred vehicle. However, we do accommodate last-minute requests subject to fleet availability.'
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept Cash, all major Credit Cards (Visa, Mastercard, Amex via mobile POS terminals carried by every driver), and advance Bank Transfers. We ensure a secure and hassle-free payment process.'
    },
    {
      q: 'Are luggage and skis included in the price?',
      a: 'Yes, all standard luggage and ski/snowboard equipment are included in the quoted fixed rate. Please inform us of the exact amount of luggage and oversized items at the time of booking so we can dispatch the appropriate vehicle.'
    },
    {
      q: 'What happens if my flight is delayed?',
      a: 'We monitor all flight statuses in real-time. If your flight is delayed, your driver will adjust their arrival time. We offer 60 minutes of complimentary waiting time after your flight lands.'
    },
    {
      q: 'Do you provide child seats?',
      a: 'Absolutely. We provide premium infant carriers, child seats, and booster seats (for ages 0-12) free of charge. Please request them during booking, specifying the age and weight of the children.'
    },
    {
      q: 'Can we make a rest stop during the transfer?',
      a: 'Yes. Upon request, your chauffeur will happily make brief stops for restrooms or a quick coffee during longer journeys (e.g., from Munich or Milan), prioritizing your comfort.'
    },
    {
      q: 'Do your drivers speak multiple languages?',
      a: 'Our drivers are native to the Val Gardena region and are fully multilingual, fluent in English, German, Italian, and Ladin, ensuring clear communication and exceptional service.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F6F0] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-16">
        <header className="mb-16">
          <h1 className="font-editorial text-5xl lg:text-7xl font-normal text-[#0E1117] mb-6">
            Questions & <span className="italic text-[#C5A880]">Answers</span>
          </h1>
          <p className="text-[#0E1117]/70 text-lg font-light leading-relaxed">
            Everything you need to know about our luxury alpine transfer services, booking policies, and journey details.
          </p>
        </header>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm border border-[#0E1117]/5 overflow-hidden transition-all">
              <button 
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
              >
                <span className="font-medium text-[#0E1117] pr-8">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-[#C5A880] transition-transform ${openIdx === i ? 'rotate-180' : ''}`} />
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIdx === i ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-sm text-[#0E1117]/70 font-light leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-[#0E1117] text-[#F8F6F0] p-10 md:p-16 rounded-3xl flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-editorial text-4xl mb-4">Still have questions?</h2>
            <p className="text-[#F8F6F0]/70 font-light mb-8 md:mb-0">
              Our concierge team is available to assist you with any specific inquiries or custom requests.
            </p>
          </div>
          <button 
            onClick={() => useAppStore.getState().openInquiryModal('General Inquiry', '')}
            className="relative z-10 w-full md:w-auto px-8 py-4 bg-[#C5A880] text-[#0E1117] font-semibold text-xs uppercase tracking-widest hover:bg-white transition-colors rounded-lg flex items-center justify-center gap-2"
          >
            <span>Inquire Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};
