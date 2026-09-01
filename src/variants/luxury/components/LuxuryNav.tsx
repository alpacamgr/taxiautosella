import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAppStore } from '../../../store/useAppStore';
import { Phone, Calendar, Menu, X, MessageSquare } from 'lucide-react';

export const LuxuryNav: React.FC = () => {
  const { openInquiryModal } = useAppStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { path: '/luxury', label: 'Home' },
    { path: '/luxury/booking', label: 'Transfers & Prices' },
    { path: '/luxury/fleet', label: 'Fleet' },
    { path: '/luxury/services', label: 'Services' },
    { path: '/luxury/excursions', label: 'Excursions' },
    { path: '/luxury/faq', label: 'FAQ' },
    { path: '/luxury/members', label: 'About & Partners' },
  ];

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#0E1117] text-[#F8F6F0] shadow-[0_10px_30px_rgba(0,0,0,0.16)]">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center gap-2 px-3 sm:h-[72px] sm:gap-4 sm:px-6 xl:px-8">
        <Link
          to="/luxury"
          className="flex min-h-11 flex-none items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0E1117]"
          aria-label="Taxi Auto Sella home"
        >
          <img src="/images/brand/logo.svg" alt="Taxi Auto Sella" className="h-7 w-auto object-contain brightness-110 sm:h-9" />
        </Link>

        <div className="hidden min-w-0 flex-1 self-stretch xl:flex xl:items-stretch xl:justify-center">
          {links.map((l) => (
            <NavLink
              key={l.path}
              to={l.path}
              end={l.path === '/luxury'}
              className={({ isActive }) =>
                `flex items-center whitespace-nowrap border-b-2 px-2 text-xs font-semibold tracking-[0.04em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#C5A880] 2xl:px-3 2xl:text-[13px] ${
                  isActive
                    ? 'border-[#C5A880] text-[#C5A880]'
                    : 'border-transparent text-[#F8F6F0]/80 hover:text-[#F8F6F0]'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="ml-auto flex flex-none items-center gap-2">
          <a
            href="tel:+390471790033"
            aria-label="Call Taxi Auto Sella at +39 0471 790033"
            className="hidden min-h-11 min-w-11 items-center justify-center gap-2 rounded-lg border border-white/20 text-[#F8F6F0] transition-colors hover:border-[#C5A880] hover:text-[#C5A880] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880] xl:flex 2xl:px-4"
          >
            <Phone className="h-4 w-4 text-[#C5A880]" />
            <span className="hidden whitespace-nowrap text-xs font-medium 2xl:inline">+39 0471 790033</span>
          </a>

          <button
            onClick={() => openInquiryModal('Transfer reservation', 'I would like to arrange a transfer with Taxi Auto Sella.')}
            className="flex min-h-11 items-center gap-1.5 whitespace-nowrap rounded-lg bg-[#C5A880] px-2.5 text-[11px] font-bold uppercase tracking-[0.08em] text-[#0E1117] shadow-[0_8px_20px_rgba(0,0,0,0.18)] transition-colors hover:bg-[#d4b993] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F8F6F0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E1117] sm:gap-2 sm:px-4"
          >
            <Calendar className="h-4 w-4" />
            <span className="sm:hidden">Book</span>
            <span className="hidden sm:inline">Book transfer</span>
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex min-h-11 min-w-11 items-center justify-center rounded-lg text-white/80 transition-colors hover:bg-white/5 hover:text-[#C5A880] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880] xl:hidden"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="luxury-mobile-navigation"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          id="luxury-mobile-navigation"
          className="absolute left-0 top-full max-h-[calc(100vh-4rem)] w-full overflow-y-auto border-b border-white/15 bg-[#0E1117] shadow-[0_18px_40px_rgba(0,0,0,0.3)] xl:hidden"
        >
          <div className="mx-auto max-w-[1440px] px-4 py-5 sm:px-6">
            <div className="flex flex-col">
              {links.map((l) => (
                <NavLink
                  key={l.path}
                  to={l.path}
                  end={l.path === '/luxury'}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex min-h-12 items-center border-b border-white/10 px-1 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#C5A880] ${
                      isActive ? 'text-[#C5A880]' : 'text-white/80 hover:text-white'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </div>

            <div className="mt-5 grid gap-3 border-t border-white/10 pt-5 sm:grid-cols-2">
              <a
                href="tel:+390471790033"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-white/10 px-4 text-xs font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
              >
                <Phone className="h-4 w-4 text-[#C5A880]" />
                <span>Call +39 0471 790033</span>
              </a>
              <a
                href="https://wa.me/390471790033"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 text-xs font-semibold uppercase tracking-[0.08em] text-[#0E1117] transition-colors hover:bg-[#2BE171] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F8F6F0]"
              >
                <MessageSquare className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

