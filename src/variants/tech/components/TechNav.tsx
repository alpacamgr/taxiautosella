import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAppStore } from '../../../store/useAppStore';
import { Phone, Calendar, Menu, X, MessageSquare } from 'lucide-react';

export const TechNav: React.FC = () => {
  const { openBookingModal } = useAppStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { path: '/tech', label: 'Welcome' },
    { path: '/tech/booking', label: 'Prices & Booking' },
    { path: '/tech/fleet', label: 'Our Vehicles' },
    { path: '/tech/services', label: 'Taxi, Minibus & Bus' },
    { path: '/tech/tours', label: 'Organised Tours' },
    { path: '/tech/faq', label: 'Q&A' },
    { path: '/tech/members', label: 'Members & Partners' },
  ];

  return (
    <nav className="sticky top-[53px] z-40 w-full bg-[#0A192F]/95 backdrop-blur-md text-white border-b border-slate-700/60 px-4 sm:px-8 py-3 flex items-center justify-between shadow-xl">
      <Link to="/tech" className="flex items-center gap-3">
        <img src="/images/brand/logo.svg" alt="Taxi Auto Sella Logo" className="h-7 w-auto object-contain brightness-100" />
      </Link>

      <div className="hidden lg:flex items-center gap-6 text-xs font-bold text-slate-200">
        {links.map((l) => (
          <NavLink
            key={l.path}
            to={l.path}
            end={l.path === '/tech'}
            className={({ isActive }) =>
              `transition-colors hover:text-[#F59E0B] py-1 ${
                isActive ? 'text-[#F59E0B] font-black border-b-2 border-[#F59E0B]' : ''
              }`
            }
          >
            {l.label}
          </NavLink>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => openBookingModal()}
          className="px-4 py-2 bg-[#D97706] hover:bg-[#b45309] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center gap-1.5"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Ride</span>
        </button>

        <a
          href="tel:+390471790033"
          className="hidden sm:flex items-center gap-1.5 px-3 py-2 border border-slate-600 rounded-xl text-xs font-bold text-slate-200 hover:border-[#F59E0B] hover:text-[#F59E0B] transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-[#F59E0B]" />
          <span>+39 0471 790033</span>
        </a>

        {/* Mobile menu toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#0A192F] border-b border-slate-700 p-6 shadow-2xl space-y-4 animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {links.map((l) => (
              <NavLink
                key={l.path}
                to={l.path}
                end={l.path === '/tech'}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-bold transition-colors py-1.5 border-b border-slate-800 ${
                    isActive ? 'text-[#F59E0B] pl-2 border-l-2 border-[#F59E0B]' : 'text-slate-300 hover:text-white'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <a
              href="tel:+390471790033"
              className="w-full flex items-center justify-center gap-2 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider"
            >
              <Phone className="w-4 h-4 text-[#F59E0B]" />
              <span>Call +39 0471 790033</span>
            </a>
            <a
              href="https://wa.me/390471790033"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white rounded-xl text-xs font-bold uppercase tracking-wider"
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

