import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAppStore } from '../../../store/useAppStore';
import { Phone, Calendar, Menu, X, MessageSquare } from 'lucide-react';

export const LuxuryNav: React.FC = () => {
  const { openBookingModal, openInquiryModal } = useAppStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { path: '/luxury', label: 'Welcome' },
    { path: '/luxury/booking', label: 'Prices & Booking' },
    { path: '/luxury/fleet', label: 'Our Vehicles' },
    { path: '/luxury/services', label: 'Taxi, Minibus & Bus' },
    { path: '/luxury/excursions', label: 'Organised Tours' },
    { path: '/luxury/faq', label: 'Q&A' },
    { path: '/luxury/members', label: 'Members & Partners' },
  ];

  return (
    <nav className="sticky top-[53px] z-40 w-full bg-[#0E1117] text-[#F8F6F0] px-6 lg:px-16 py-3 flex items-center justify-between">
      <Link to="/luxury" className="flex items-center gap-3">
        <img src="/images/brand/logo.svg" alt="Taxi Auto Sella" className="h-7 w-auto object-contain brightness-110" />
      </Link>

      <div className="hidden lg:flex items-center gap-7 text-xs font-medium tracking-wider">
        {links.map((l) => (
          <NavLink
            key={l.path}
            to={l.path}
            end={l.path === '/luxury'}
            className={({ isActive }) =>
              `transition-colors hover:text-[#C5A880] py-1 ${
                isActive ? 'text-[#C5A880] font-bold border-b-2 border-[#C5A880]' : 'text-[#F8F6F0]/80'
              }`
            }
          >
            {l.label}
          </NavLink>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => openInquiryModal('VIP Chauffeur Reservation', 'Direct reservation request via concierge navigation.')}
          className="px-4 py-2 bg-[#C5A880] text-[#0E1117] font-bold text-xs uppercase tracking-widest hover:bg-[#d4b993] transition-colors rounded-lg flex items-center gap-1.5 shadow-md"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Reserve</span>
        </button>

        <a
          href="tel:+390471790033"
          className="hidden sm:flex items-center gap-1.5 px-3 py-2 border border-white/20 rounded-lg text-xs text-[#F8F6F0] hover:border-[#C5A880] hover:text-[#C5A880] transition-colors font-medium"
        >
          <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
          <span>+39 0471 790033</span>
        </a>

        {/* Mobile menu toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-white/80 hover:text-[#C5A880] transition-colors"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#0E1117] border-b border-white/15 p-6 shadow-2xl space-y-4 animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {links.map((l) => (
              <NavLink
                key={l.path}
                to={l.path}
                end={l.path === '/luxury'}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors py-1.5 border-b border-white/5 ${
                    isActive ? 'text-[#C5A880] font-bold pl-2 border-l-2 border-[#C5A880]' : 'text-white/80 hover:text-[#C5A880]'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="tel:+390471790033"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-semibold uppercase tracking-wider"
            >
              <Phone className="w-4 h-4 text-[#C5A880]" />
              <span>Call +39 0471 790033</span>
            </a>
            <a
              href="https://wa.me/390471790033"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white rounded-lg text-xs font-semibold uppercase tracking-wider"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Dispatch 24/7</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

