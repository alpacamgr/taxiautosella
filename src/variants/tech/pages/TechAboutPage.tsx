import React from 'react';
import { CONSORTIUM_MEMBERS, CONSORTIUM_STATS } from '../../../data/drivers';
import { ShieldCheck, Award, Users, Car } from 'lucide-react';

export const TechAboutPage: React.FC = () => {
  return (
    <div className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="max-w-2xl mb-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-3">
          About Taxi Auto Sella Consortium
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          The power of a high-tech booking engine combined with the authentic reliability of Val Gardena’s largest local driver consortium.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
          <div className="text-3xl font-extrabold text-slate-900 mb-1">{CONSORTIUM_STATS.vehiclesCount}</div>
          <div className="text-xs text-slate-500 font-semibold uppercase">Vehicles in Fleet</div>
        </div>
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
          <div className="text-3xl font-extrabold text-slate-900 mb-1">{CONSORTIUM_STATS.driversCount}</div>
          <div className="text-xs text-slate-500 font-semibold uppercase">Local Drivers</div>
        </div>
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
          <div className="text-3xl font-extrabold text-slate-900 mb-1">{CONSORTIUM_STATS.yearsActive}</div>
          <div className="text-xs text-slate-500 font-semibold uppercase">Years Operating</div>
        </div>
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
          <div className="text-3xl font-extrabold text-emerald-600 mb-1">4.95 ★</div>
          <div className="text-xs text-slate-500 font-semibold uppercase">1,200+ Reviews</div>
        </div>
      </div>

      <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 mb-16 text-slate-800">
        <h2 className="text-xl font-bold mb-3">Why Consortium Dispatch Beats Ride-Share Aggregators:</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs leading-relaxed">
          <div>
            <strong>100% 4MATIC Mountain Readiness:</strong> Every car has certified snow chains, all-wheel drive, and seasoned mountain chauffeurs.
          </div>
          <div>
            <strong>Direct Phone & WhatsApp Hotline:</strong> Reach a live dispatcher in Santa Cristina instantly if your plans change.
          </div>
          <div>
            <strong>No Surge Pricing:</strong> Fixed upfront fares regardless of blizzard conditions or mountain pass traffic.
          </div>
        </div>
      </div>
    </div>
  );
};
