import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAppStore } from '../../../store/useAppStore';
import { Phone, Calendar } from 'lucide-react';

export const LuxuryNav: React.FC = () => {
  const { openBookingModal } = useAppStore();

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
    <nav className="w-full bg-[#0E1117] text-[#F8F6F0] border-b border-white/10 px-6 lg:px-16 py-4 flex items-center justify-between">
      <Link to="/luxury" className="flex items-center gap-3">
        <img src="/images/brand/logo.svg" alt="Taxi Auto Sella" className="h-7 w-auto object-contain" />
      </Link>

      <div className="hidden lg:flex items-center gap-8 text-xs font-light tracking-wider">
        {links.map((l) => (
          <NavLink
            key={l.path}
            to={l.path}
            end={l.path === '/luxury'}
            className={({ isActive }) =>
              `transition-colors hover:text-[#C5A880] ${
                isActive ? 'text-[#C5A880] font-medium border-b border-[#C5A880] pb-1' : 'text-[#F8F6F0]/70'
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
          className="px-4 py-2 bg-[#C5A880] text-[#0E1117] font-semibold text-xs uppercase tracking-widest hover:bg-[#b8986c] transition-colors rounded-lg flex items-center gap-1.5"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Reserve</span>
        </button>

        <a
          href="tel:+390471790033"
          className="hidden sm:flex items-center gap-1.5 px-3 py-2 border border-white/20 rounded-lg text-xs text-[#F8F6F0] hover:border-[#C5A880] transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
          <span>+39 0471 790033</span>
        </a>
      </div>
    </nav>
  );
};
