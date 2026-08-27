import React, { useState } from 'react';
import { useAppStore } from '../../store/useAppStore';
import { ORIGINS, DESTINATIONS } from '../../data/routes';
import confetti from 'canvas-confetti';
import { 
  X, 
  CheckCircle2, 
  MessageSquare, 
  Mail, 
  MapPin, 
  Calendar, 
  Clock, 
  Users, 
  Briefcase, 
  Plane, 
  ShieldCheck, 
  ArrowLeft, 
  Phone, 
  Car,
  FileText
} from 'lucide-react';

export const BookingModal: React.FC = () => {
  const { 
    isModalOpen, 
    closeBookingModal, 
    isSuccessView, 
    setSuccessView, 
    booking, 
    updateBooking, 
    getRouteDetails, 
    getSelectedVehicle, 
    calculateVehiclePrice, 
    activeConcept,
    t 
  } = useAppStore();

  const [step, setStep] = useState<'review' | 'details'>('review');

  if (!isModalOpen) return null;

  const route = getRouteDetails();
  const vehicle = getSelectedVehicle() || { name: 'Mercedes V-Class Luxury', subtitle: 'VIP Minivan', multiplier: 1.25, passengers: 7, luggage: 7, skis: 6 };
  const totalPrice = calculateVehiclePrice(vehicle.multiplier);
  const origin = ORIGINS.find(o => o.id === booking.originId)?.name || booking.originId;
  const dest = DESTINATIONS.find(d => d.id === booking.destinationId)?.name || booking.destinationId;

  // Format WhatsApp message text
  const waMessage = encodeURIComponent(
    `*TAXI AUTO SELLA — TRANSFER RESERVATION REQUEST*\n\n` +
    `• *Route:* ${origin} ➔ ${dest}\n` +
    `• *Date & Time:* ${booking.date} at ${booking.time}\n` +
    `• *Vehicle:* ${vehicle.name}\n` +
    `• *Passengers:* ${booking.passengers} pax | ${booking.luggage} bags\n` +
    `• *Ski/Gear:* ${booking.hasSkis ? 'YES (Skis/Boards)' : 'No'}\n` +
    `• *Flight / Train #:* ${booking.flightNumber || 'N/A'}\n` +
    `• *Total Price Quote:* €${totalPrice} (All-Inclusive)\n` +
    `• *Guest Name:* ${booking.guestName || 'Guest'}\n` +
    `• *Guest Phone:* ${booking.guestPhone || 'N/A'}\n` +
    `• *Hotel/Notes:* ${booking.customNotes || 'None'}\n\n` +
    `Please confirm driver availability and send reservation voucher. Thank you!`
  );

  const handleWhatsAppDispatch = () => {
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    setSuccessView(true);
    // Open WhatsApp link in new tab
    window.open(`https://wa.me/390471790033?text=${waMessage}`, '_blank');
  };

  const handleEmailDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    setSuccessView(true);
  };

  const isLuxury = activeConcept === 'luxury';
  const isTech = activeConcept === 'tech';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className={`relative max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl transition-all border ${
        isTech 
          ? 'bg-white text-slate-900 border-slate-200' 
          : 'bg-slate-900 text-slate-100 border-slate-700'
      }`}>
        
        {/* Modal Header */}
        <div className={`p-5 px-6 border-b flex items-center justify-between ${
          isTech ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/80 border-slate-800'
        }`}>
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
              isLuxury ? 'bg-gold-500 text-black' : isTech ? 'bg-emerald-600 text-white' : 'bg-sky-500 text-white'
            }`}>
              AS
            </div>
            <div>
              <h3 className="font-bold text-base leading-tight">
                {isSuccessView ? t('modal.success') : t('modal.title')}
              </h3>
              <p className="text-xs text-slate-400">
                Taxi Auto Sella Consortium • Val Gardena Dolomites
              </p>
            </div>
          </div>

          <button
            onClick={closeBookingModal}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          
          {isSuccessView ? (
            // Success Confirmation Voucher Screen
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto mb-4 animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h4 className="text-xl font-bold mb-2">
                {t('modal.success')}
              </h4>
              <p className="text-xs text-slate-400 max-w-md mx-auto mb-6">
                {t('modal.successDesc')}
              </p>

              {/* Digital Booking Voucher Summary Card */}
              <div className={`p-4 rounded-2xl border text-left text-xs mb-6 max-w-lg mx-auto ${
                isTech ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
              }`}>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-700/50">
                  <span className="font-bold text-gold-400">VOUCHER #AS-{Math.floor(100000 + Math.random() * 900000)}</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-semibold">
                    DISPATCH QUEUED
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-slate-300 mb-3">
                  <div><strong>From:</strong> {origin}</div>
                  <div><strong>To:</strong> {dest}</div>
                  <div><strong>Date:</strong> {booking.date} @ {booking.time}</div>
                  <div><strong>Vehicle:</strong> {vehicle.name}</div>
                  <div><strong>Passengers:</strong> {booking.passengers} pax</div>
                  <div><strong>Total Quote:</strong> €{totalPrice} (Fixed)</div>
                </div>

                <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-800">
                  24/7 Hotline: <strong>+39 0471 790033</strong> • Meeting Point: Terminal Arrivals Hall
                </div>
              </div>

              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={closeBookingModal}
                  className={`px-6 py-2.5 rounded-xl text-xs font-bold ${
                    isLuxury ? 'bg-gold-500 text-black hover:bg-gold-400' : isTech ? 'bg-emerald-600 text-white hover:bg-emerald-500' : 'bg-sky-500 text-white hover:bg-sky-400'
                  }`}
                >
                  Done / Close Preview
                </button>
              </div>
            </div>
          ) : step === 'review' ? (
            // Step 1: Review Trip Details & Price
            <div className="space-y-5">
              
              {/* Trip Route Card */}
              <div className={`p-4 rounded-2xl border ${
                isTech ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
              }`}>
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {t('modal.step1')}
                  </span>
                  <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Fixed Price Guarantee
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-slate-400 text-[10px]">Pick-up Location</div>
                      <div className="font-bold text-sm text-white">{origin}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-slate-400 text-[10px]">Drop-off Destination</div>
                      <div className="font-bold text-sm text-white">{dest}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <div>
                      <div className="text-slate-400 text-[10px]">Date & Time</div>
                      <div className="font-medium">{booking.date} at {booking.time}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Car className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <div>
                      <div className="text-slate-400 text-[10px]">Assigned Fleet Vehicle</div>
                      <div className="font-medium">{vehicle.name}</div>
                    </div>
                  </div>
                </div>

                {/* Inclusions summary */}
                <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center gap-3 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Meet & Greet with Name Sign
                  </span>
                  <span className="flex items-center gap-1 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Live Flight Delay Monitoring
                  </span>
                  <span className="flex items-center gap-1 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Tolls & Dolomite Pass Fees Included
                  </span>
                </div>
              </div>

              {/* Total Price & Advance Button */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-black/40 border border-white/10">
                <div>
                  <span className="text-xs text-slate-400 block">Total Fixed Transfer Rate</span>
                  <span className="text-2xl font-black text-gold-400">€{totalPrice}</span>
                </div>

                <button
                  onClick={() => setStep('details')}
                  className={`px-6 py-3 rounded-xl text-xs font-bold transition-all shadow-lg ${
                    isLuxury ? 'bg-gold-500 text-black hover:bg-gold-400' : isTech ? 'bg-emerald-600 text-white hover:bg-emerald-500' : 'bg-sky-500 text-white hover:bg-sky-400'
                  }`}
                >
                  Next: Guest Information ➔
                </button>
              </div>

            </div>
          ) : (
            // Step 2: Guest Details & Dispatch Form
            <form onSubmit={handleEmailDispatch} className="space-y-4">
              
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <button
                  type="button"
                  onClick={() => setStep('review')}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Back to Summary
                </button>
                <span className="text-xs font-bold text-gold-400">
                  Total Quote: €{totalPrice}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-slate-300">{t('modal.name')} *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alexander Weber"
                    value={booking.guestName}
                    onChange={(e) => updateBooking({ guestName: e.target.value })}
                    className="px-3 py-2 rounded-xl text-xs bg-slate-950 border border-slate-700 text-white focus:ring-2 focus:ring-gold-400"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-slate-300">{t('modal.phone')} *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+49 170 1234567"
                    value={booking.guestPhone}
                    onChange={(e) => updateBooking({ guestPhone: e.target.value })}
                    className="px-3 py-2 rounded-xl text-xs bg-slate-950 border border-slate-700 text-white focus:ring-2 focus:ring-gold-400"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-slate-300">{t('modal.email')} *</label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={booking.guestEmail}
                  onChange={(e) => updateBooking({ guestEmail: e.target.value })}
                  className="px-3 py-2 rounded-xl text-xs bg-slate-950 border border-slate-700 text-white focus:ring-2 focus:ring-gold-400"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-slate-300">{t('modal.notes')}</label>
                <textarea
                  rows={2}
                  placeholder="e.g. Hotel Gran Baita, Ortisei / 2 ski bags / Child is 4 years old"
                  value={booking.customNotes}
                  onChange={(e) => updateBooking({ customNotes: e.target.value })}
                  className="px-3 py-2 rounded-xl text-xs bg-slate-950 border border-slate-700 text-white focus:ring-2 focus:ring-gold-400"
                />
              </div>

              {/* Two Direct Dispatch Options */}
              <div className="pt-3 border-t border-white/10 space-y-2.5">
                
                {/* Option 1: WhatsApp Instant Dispatch */}
                <button
                  type="button"
                  onClick={handleWhatsAppDispatch}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t('modal.submitWhatsApp')}</span>
                </button>

                {/* Option 2: Email Reservation Submission */}
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-all"
                >
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span>{t('modal.submitEmail')}</span>
                </button>

              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
};
