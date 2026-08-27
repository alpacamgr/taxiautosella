import React from 'react';
import { CONSORTIUM_MEMBERS, CONSORTIUM_STATS } from '../../../data/drivers';
import { Award, ShieldCheck, PhoneCall } from 'lucide-react';

export const LuxuryAboutPage: React.FC = () => {
  return (
    <div className="py-20 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-16">
        <h1 className="font-editorial text-4xl sm:text-6xl text-[#0E1117] mb-4">
          Thirty-Five Years of <span className="italic text-[#C5A880]">Mountain Mastery</span>
        </h1>
        <p className="text-base text-[#0E1117]/70 font-light leading-relaxed">
          The story of Val Gardena’s largest chauffeur and bus consortium, uniting 18 native drivers who know every curve, pass, and chalet in the Dolomites.
        </p>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        <div className="p-8 bg-white rounded-3xl border border-[#0E1117]/5 shadow-sm text-center">
          <div className="font-editorial text-4xl text-[#0E1117] mb-1">{CONSORTIUM_STATS.vehiclesCount}</div>
          <div className="text-xs font-semibold text-[#0E1117]/50 uppercase tracking-widest">4MATIC Fleet</div>
        </div>
        <div className="p-8 bg-white rounded-3xl border border-[#0E1117]/5 shadow-sm text-center">
          <div className="font-editorial text-4xl text-[#0E1117] mb-1">{CONSORTIUM_STATS.driversCount}</div>
          <div className="text-xs font-semibold text-[#0E1117]/50 uppercase tracking-widest">Native Chauffeurs</div>
        </div>
        <div className="p-8 bg-white rounded-3xl border border-[#0E1117]/5 shadow-sm text-center">
          <div className="font-editorial text-4xl text-[#0E1117] mb-1">{CONSORTIUM_STATS.yearsActive}</div>
          <div className="text-xs font-semibold text-[#0E1117]/50 uppercase tracking-widest">Years in Operation</div>
        </div>
        <div className="p-8 bg-white rounded-3xl border border-[#0E1117]/5 shadow-sm text-center">
          <div className="font-editorial text-4xl text-[#0E1117] mb-1">{CONSORTIUM_STATS.rating}</div>
          <div className="text-xs font-semibold text-[#0E1117]/50 uppercase tracking-widest">Guest Satisfaction</div>
        </div>
      </div>

      {/* Consortium Driver Roster */}
      <h2 className="font-editorial text-3xl text-[#0E1117] mb-8">Consortium Chauffeurs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CONSORTIUM_MEMBERS.map((driver, idx) => (
          <div key={idx} className="p-6 bg-white rounded-2xl border border-[#0E1117]/5 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-[#0E1117] text-[#C5A880] flex items-center justify-center text-xs font-bold">
                {driver.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="font-semibold text-sm text-[#0E1117]">{driver.name}</h3>
                <span className="text-[11px] text-[#0E1117]/50">{driver.role}</span>
              </div>
            </div>
            <p className="text-xs text-[#0E1117]/70 font-light mb-3">
              <strong>Specialty:</strong> {driver.specialty}
            </p>
            <div className="text-[10px] text-[#0E1117]/40 uppercase tracking-wider pt-2 border-t border-[#0E1117]/5 flex justify-between">
              <span>{driver.experienceYears} Years Experience</span>
              <span>{driver.languages.join(' • ')}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
