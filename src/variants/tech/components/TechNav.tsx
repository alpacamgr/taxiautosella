import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAppStore } from '../../../store/useAppStore';
import { Phone, Calendar } from 'lucide-react';

export const TechNav: React.FC = () => {
  const { openBookingModal } = useAppStore();

  const links = [
    { path: '/tech', label: 'Welcome' },
    { path: '/tech/booking', label: 'Prices & Booking' },
    { path: '/tech/fleet', label: 'Our Vehicles' },
    { path: '/tech/services', label: 'Taxi, Minibus & Bus' },
    { path: '/tech/tours', label: 'Organised Tours' },
    { path: '/tech/faq', label: 'Q&A' },
    { path: '/tech/members', label: 'Members & Sponsors' },
  ];

  return (
    <nav className="w-full bg-[#0A192F] text-white border-b border-slate-700/60 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-lg">
      <Link to="/tech" className="flex items-center gap-3">
        <img src="/images/brand/logo.svg" alt="Taxi Auto Sella Logo" className="h-7 w-auto object-contain brightness-100" />
      </Link>

      <div className="hidden lg:flex items-center gap-6 text-xs font-semibold text-slate-200">
        {links.map((l) => (
          <NavLink
            key={l.path}
            to={l.path}
            end={l.path === '/tech'}
            className={({ isActive }) =>
              `transition-colors hover:text-[#F59E0B] ${
                isActive ? 'text-[#F59E0B] font-bold border-b-2 border-[#F59E0B] pb-1' : ''
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
          className="px-4 py-2 bg-[#D97706] text-white font-bold text-xs rounded-xl shadow-md hover:bg-[#b45309] transition-all flex items-center gap-1.5"
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
      </div>
    </nav>
  );
};
