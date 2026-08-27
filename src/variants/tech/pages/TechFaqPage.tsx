import React, { useState } from 'react';
import { useAppStore } from '../../../store/useAppStore';
import { ChevronDown, ChevronUp, PhoneCall, Search, MessageSquare, HelpCircle } from 'lucide-react';

export const TechFaqPage: React.FC = () => {
  const { openInquiryModal } = useAppStore();
  const [openId, setOpenId] = useState<string | null>('How will I recognize my driver at the airport arrivals hall?');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const faqs = [
    {
      category: 'arrival',
      q: 'How will I recognize my driver at the airport arrivals hall?',
      a: 'Your personal chauffeur will wait in the arrivals hall directly past baggage claim, holding a digital tablet or personalized sign with your name. You will also receive their direct mobile phone number prior to landing for seamless contact.'
    },
    {
      category: 'arrival',
      q: 'What happens if my flight or train is delayed?',
      a: 'We monitor all inbound flights and rail connections in real time via live tracking systems. Your driver automatically adjusts their arrival schedule, and we provide up to 60 minutes of complimentary waiting time after your flight touches down with zero surcharge.'
    },
    {
      category: 'luggage',
      q: 'Are luggage and ski/snowboard bags included in the price?',
      a: 'Yes, all standard suitcases, ski bags, snowboard cases, and boot bags are 100% included in our upfront fixed price quotes. Please specify your passenger count and equipment when booking so we dispatch the optimal vehicle.'
    },
    {
      category: 'booking',
      q: 'Do I need to pay a deposit in advance?',
      a: 'For standard airport and private transfers, no deposit or prepayment is required. You can settle the fare directly with your chauffeur at the end of the journey. For large group coach charters, custom deposit terms are arranged upon request.'
    },
    {
      category: 'booking',
      q: 'What payment methods do you accept?',
      a: 'Every driver carries a modern wireless POS terminal accepting all major Credit Cards (Visa, Mastercard, American Express), Apple Pay, Google Pay, and Cash (EUR). We also provide official VAT-compliant tax invoices for corporate clients.'
    },
    {
      category: 'safety',
      q: 'Do you provide child and infant safety seats?',
      a: 'Yes, certified child seats, infant capsules (Group 0+), and booster seats (for ages 0–12) are provided completely free of charge upon request during booking.'
    },
    {
      category: 'arrival',
      q: 'How do I know which vehicle is mine at the pickup point?',
      a: 'All our vehicles are pristine Mercedes-Benz models (E-Class, S-Class, V-Class, Vito 4MATIC) in elegant dark charcoal or black livery, discreetly displaying the official Taxi Auto Sella consortium crest.'
    },
    {
      category: 'safety',
      q: 'Can we request rest stops or photo stops on scenic mountain passes?',
      a: 'Certainly. Our chauffeurs prioritize your relaxation and comfort. We are pleased to make brief coffee stops or panoramic photo pauses at iconic viewpoints along Passo Sella or Passo Gardena.'
    },
    {
      category: 'service',
      q: 'What languages do your drivers speak?',
      a: 'All 18 of our consortium drivers are local Val Gardena natives and are fully multilingual, speaking fluent English, German, Italian, and Ladin.'
    },
    {
      category: 'service',
      q: 'Do you operate on-demand local night taxis between Val Gardena villages?',
      a: 'Yes, during the winter and summer high seasons we operate 24/7 on-demand local taxi dispatch between Ortisei (St. Ulrich), Santa Cristina, Selva (Wolkenstein), ski lifts, and all regional restaurants and nightlife venues.'
    },
    {
      category: 'safety',
      q: 'Are your vehicles equipped for severe winter snow and high mountain passes?',
      a: '100% of our fleet features permanent Mercedes 4MATIC all-wheel-drive systems, premium studded winter tires, and certified snow chains, operated by drivers with decades of Alpine snow experience.'
    },
    {
      category: 'luggage',
      q: 'Can you transport downhill mountain bikes and e-bikes in summer?',
      a: 'Yes, we operate specialized weatherproof bike trailers accommodating up to 10 mountain bikes or 3 motorbikes for the Sella Ronda MTB Tour and regional transfers.'
    },
    {
      category: 'service',
      q: 'Do you offer wheelchair accessible vehicles for disabled passengers?',
      a: 'Yes, we have specially modified Mercedes vans equipped with certified hydraulic wheelchair lifts and ISO 4-point floor tie-down restraints for safe, comfortable travel.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCat = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="py-16 px-4 sm:px-8 lg:px-16 max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="max-w-2xl mb-12">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#D97706] block mb-2">
          Knowledge Base & Policies
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mb-3">
          Questions & Answers
        </h1>
        <p className="text-base text-slate-600 leading-relaxed font-normal">
          Everything you need to know about airport arrivals, delays, winter pass safety, luggage policies, and onboard payment.
        </p>
      </div>

      {/* Search & Category Filter */}
      <div className="space-y-4 mb-10">
        <div className="relative">
          <Search className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g. flight delays, payment, skis, child seats)..."
            className="w-full bg-white border border-slate-200 p-3.5 pl-11 rounded-2xl text-xs font-bold text-slate-900 outline-none focus:border-[#D97706] shadow-sm"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {[
            { id: 'all', label: 'All Topics' },
            { id: 'arrival', label: 'Airports & Delays' },
            { id: 'booking', label: 'Booking & Payment' },
            { id: 'luggage', label: 'Luggage & Skis' },
            { id: 'safety', label: 'Safety & 4MATIC' },
            { id: 'service', label: 'Valley Services' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#0A192F] text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion FAQ List */}
      <div className="space-y-3.5 mb-16">
        {filteredFaqs.map((faq) => {
          const isOpen = openId === faq.q;
          return (
            <div key={faq.q} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:border-[#D97706]/50 transition-colors">
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : faq.q)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm font-bold text-slate-900 transition-colors"
              >
                <span>{faq.q}</span>
                <span className={`p-1 rounded-lg transition-transform ${isOpen ? 'bg-[#D97706] text-white rotate-180' : 'bg-slate-100 text-slate-600'}`}>
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 font-normal">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Direct Contact Banner */}
      <div className="bg-[#0A192F] text-white p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#F59E0B] block mb-1">
            24/7 Customer Support
          </span>
          <h3 className="text-xl font-bold text-white mb-1">Have an Unlisted Question?</h3>
          <p className="text-xs text-slate-300">Call our central office directly or send an instant inquiry.</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => openInquiryModal('General Question', 'I have a specific question about your transfer services...')}
            className="px-5 py-3 bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
          >
            <span>Ask Online</span>
          </button>
          <a
            href="tel:+390471790033"
            className="px-5 py-3 bg-[#D97706] text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#b45309] transition-all flex items-center gap-2 shadow-md"
          >
            <PhoneCall className="w-4 h-4" />
            <span>+39 0471 790033</span>
          </a>
        </div>
      </div>

    </div>
  );
};

