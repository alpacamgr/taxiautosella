import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAppStore } from '../../../store/useAppStore';
import { Phone, Calendar } from 'lucide-react';

export const AdventureNav: React.FC = () => {
  const { openBookingModal } = useAppStore();

  const links = [
    { path: '/adventure', label: 'Welcome' },
    { path: '/adventure/booking', label: 'Prices & Booking' },
    { path: '/adventure/fleet', label: 'Our Vehicles' },
    { path: '/adventure/services', label: 'Taxi & Bus Services' },
    { path: '/adventure/tours', label: 'Tours & Excursions' },
    { path: '/adventure/faq', label: 'Questions & Answers' },
    { path: '/adventure/members', label: 'Members & Sponsors' },
  ];

  return (
    <nav className="w-full bg-[#181B22] text-[#FBF9F5] border-b border-white/10 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-md">
      <Link to="/adventure" className="flex items-center gap-2.5">
        <span className="font-extrabold text-lg text-white tracking-tight">
          Auto Sella <span className="text-[#D6A56E] font-bold text-xs uppercase px-2 py-0.5 rounded-full bg-[#D6A56E]/10 border border-[#D6A56E]/30">Valley</span>
        </span>
      </Link>

      <div className="hidden lg:flex items-center gap-5 text-xs font-semibold text-slate-300">
        {links.map((l) => (
          <NavLink
            key={l.path}
            to={l.path}
            end={l.path === '/adventure'}
            className={({ isActive }) =>
              `transition-colors hover:text-[#D6A56E] ${
                isActive ? 'text-[#D6A56E] font-bold border-b-2 border-[#D6A56E] pb-1' : ''
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
          className="px-4 py-2 bg-[#D6A56E] text-[#181B22] font-bold text-xs rounded-xl shadow-md hover:bg-[#c4935d] transition-all flex items-center gap-1.5"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Ride</span>
        </button>

        <a
          href="tel:+390471790033"
          className="hidden sm:flex items-center gap-1.5 px-3 py-2 border border-white/20 rounded-xl text-xs font-bold text-slate-200 hover:border-[#D6A56E] hover:text-[#D6A56E] transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-[#D6A56E]" />
          <span>+39 0471 790033</span>
        </a>
      </div>
    </nav>
  );
};
