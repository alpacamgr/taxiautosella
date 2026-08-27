import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAppStore } from '../../../store/useAppStore';
import { Phone, Calendar } from 'lucide-react';

export const TechNav: React.FC = () => {
  const { openBookingModal } = useAppStore();

  const links = [
    { path: '/tech', label: 'Book Transfer' },
    { path: '/tech/booking', label: 'Prices & Booking' },
    { path: '/tech/fleet', label: 'Our Vehicles' },
    { path: '/tech/services', label: 'Services & Shuttles' },
    { path: '/tech/tours', label: 'Tours & Excursions' },
    { path: '/tech/faq', label: 'FAQ' },
    { path: '/tech/members', label: 'Members & Sponsors' },
  ];

  return (
    <nav className="w-full bg-[#090D14] text-white border-b border-slate-800 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-sm font-['Inter',sans-serif]">
      <Link to="/tech" className="flex items-center gap-2.5">
        <span className="font-extrabold text-lg text-white tracking-tight">
          Auto Sella <span className="text-[#059669] font-bold text-xs uppercase px-2 py-0.5 rounded-full bg-[#059669]/10 border border-[#059669]/30">Velocity</span>
        </span>
      </Link>

      <div className="hidden lg:flex items-center gap-6 text-xs font-semibold text-slate-300 tracking-tight">
        {links.map((l) => (
          <NavLink
            key={l.path}
            to={l.path}
            end={l.path === '/tech'}
            className={({ isActive }) =>
              `transition-colors hover:text-white ${
                isActive ? 'text-[#059669] font-bold border-b-2 border-[#059669] pb-1' : ''
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
          className="px-4 py-2 bg-[#059669] text-white font-bold text-xs rounded-xl shadow-md shadow-[#059669]/20 hover:bg-[#047857] transition-all flex items-center gap-1.5"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Instant Quote</span>
        </button>

        <a
          href="tel:+390471790033"
          className="hidden sm:flex items-center gap-1.5 px-3 py-2 border border-slate-700 rounded-xl text-xs font-bold text-slate-300 hover:border-[#059669] hover:text-white transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-[#059669]" />
          <span>+39 0471 790033</span>
        </a>
      </div>
    </nav>
  );
};
