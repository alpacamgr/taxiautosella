import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAppStore } from '../../../store/useAppStore';
import { Mountain, Phone, Calendar } from 'lucide-react';

export const AdventureNav: React.FC = () => {
  const { openBookingModal } = useAppStore();

  const links = [
    { path: '/adventure', label: 'Expedition Base' },
    { path: '/adventure/passes', label: 'Sella Ronda Passes' },
    { path: '/adventure/fleet', label: '4x4 Ski & Bike Fleet' },
    { path: '/adventure/tours', label: 'Dolomite Tours' },
    { path: '/adventure/faq', label: 'Alpine FAQ' },
  ];

  return (
    <nav className="w-full bg-[#071526] text-white border-b border-sky-950 px-6 lg:px-16 py-4 flex items-center justify-between shadow-lg">
      <Link to="/adventure" className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-[#EA580C] text-white font-extrabold flex items-center justify-center text-xs shadow-md">
          <Mountain className="w-4 h-4" />
        </div>
        <span className="font-extrabold text-base tracking-tight text-white">
          Dolomiti <span className="text-[#38BDF8] font-bold">Express</span>
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-slate-300">
        {links.map((l) => (
          <NavLink
            key={l.path}
            to={l.path}
            end={l.path === '/adventure'}
            className={({ isActive }) =>
              `transition-colors hover:text-[#38BDF8] ${
                isActive ? 'text-[#38BDF8] border-b-2 border-[#38BDF8] pb-1' : ''
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
          className="px-4 py-2 bg-[#EA580C] text-white font-extrabold text-xs uppercase tracking-wider hover:bg-[#c2410c] transition-colors rounded-xl shadow-md shadow-orange-500/20 flex items-center gap-1.5"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Shuttle</span>
        </button>

        <a
          href="tel:+390471790033"
          className="hidden sm:flex items-center gap-1.5 px-3 py-2 border border-sky-800 rounded-xl text-xs font-bold text-sky-300 hover:border-sky-400 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />
          <span>+39 0471 790033</span>
        </a>
      </div>
    </nav>
  );
};
