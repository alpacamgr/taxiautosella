import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAppStore } from '../../../store/useAppStore';
import { Phone, Calendar } from 'lucide-react';

export const TechNav: React.FC = () => {
  const { openBookingModal } = useAppStore();

  const links = [
    { path: '/tech', label: 'Book Transfer' },
    { path: '/tech/fleet', label: 'Vehicles & Capacity' },
    { path: '/tech/routes', label: 'Airport Routes' },
    { path: '/tech/about', label: 'Consortium' },
    { path: '/tech/faq', label: 'Help & FAQ' },
  ];

  return (
    <nav className="w-full bg-white text-slate-900 border-b border-slate-200 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-sm">
      <Link to="/tech" className="flex items-center gap-2.5">
        <span className="font-extrabold text-lg text-slate-900 tracking-tight">
          Auto Sella <span className="text-emerald-600 font-bold text-xs uppercase px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200">Tech</span>
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-600">
        {links.map((l) => (
          <NavLink
            key={l.path}
            to={l.path}
            end={l.path === '/tech'}
            className={({ isActive }) =>
              `transition-colors hover:text-emerald-600 ${
                isActive ? 'text-emerald-600 font-bold border-b-2 border-emerald-600 pb-1' : ''
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
          className="px-4 py-2 bg-emerald-600 text-white font-bold text-xs rounded-xl shadow-md shadow-emerald-500/20 hover:bg-emerald-500 transition-all flex items-center gap-1.5"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Instant Quote</span>
        </button>

        <a
          href="tel:+390471790033"
          className="hidden sm:flex items-center gap-1.5 px-3 py-2 border border-slate-300 rounded-xl text-xs font-bold text-slate-700 hover:border-emerald-600 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-emerald-600" />
          <span>+39 0471 790033</span>
        </a>
      </div>
    </nav>
  );
};
