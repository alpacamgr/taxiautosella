import React from 'react';
import { useAppStore } from '../../store/useAppStore';
import confetti from 'canvas-confetti';
import { X, CheckCircle2, MessageSquare, Mail } from 'lucide-react';

export const InquiryModal: React.FC = () => {
  const { 
    isInquiryModalOpen, 
    closeInquiryModal, 
    inquiryContext, 
    inquiryPrefill,
    isSuccessView, 
    setSuccessView, 
    activeConcept,
    t 
  } = useAppStore();

  const [guestName, setGuestName] = React.useState('');
  const [guestPhone, setGuestPhone] = React.useState('');
  const [guestEmail, setGuestEmail] = React.useState('');
  const [notes, setNotes] = React.useState('');

  if (!isInquiryModalOpen) return null;

  // Format WhatsApp message text
  const waMessage = encodeURIComponent(
    `*TAXI AUTO SELLA — INQUIRY*\n\n` +
    `• *Topic:* ${inquiryContext}\n` +
    `• *Prefill:* ${inquiryPrefill || 'N/A'}\n` +
    `• *Guest Name:* ${guestName || 'Guest'}\n` +
    `• *Guest Phone:* ${guestPhone || 'N/A'}\n` +
    `• *Guest Email:* ${guestEmail || 'N/A'}\n` +
    `• *Notes:* ${notes || 'None'}\n\n` +
    `Please advise on details and availability. Thank you!`
  );

  const handleWhatsAppDispatch = () => {
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    setSuccessView(true);
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
      <div className={`relative max-w-xl w-full rounded-3xl overflow-hidden shadow-2xl transition-all border ${
        isTech 
          ? 'bg-white text-slate-900 border-slate-200' 
          : 'bg-[#0E1117] text-[#F8F6F0] border-[#C5A880]/30'
      }`}>
        
        <div className={`p-5 px-6 border-b flex items-center justify-between ${
          isTech ? 'bg-slate-50 border-slate-200' : 'bg-[#0E1117] border-[#C5A880]/20'
        }`}>
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
              isLuxury ? 'bg-[#C5A880] text-[#0E1117]' : 'bg-sky-500 text-white'
            }`}>
              AS
            </div>
            <div>
              <h3 className="font-editorial text-base leading-tight">
                {isSuccessView ? 'Inquiry Sent' : `Inquiry: ${inquiryContext}`}
              </h3>
              <p className="text-xs text-[#F8F6F0]/60 font-light">
                Taxi Auto Sella Consortium • Val Gardena Dolomites
              </p>
            </div>
          </div>

          <button
            onClick={closeInquiryModal}
            className="p-1.5 rounded-lg text-[#F8F6F0]/40 hover:text-[#C5A880] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {isSuccessView ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto mb-4 animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-editorial text-2xl text-[#C5A880] mb-2">Inquiry Sent</h4>
              <p className="text-sm font-light text-[#F8F6F0]/70 max-w-sm mx-auto mb-8">
                Our concierge team will review your request and contact you shortly to arrange the details.
              </p>
              <button
                onClick={closeInquiryModal}
                className="px-8 py-3 text-sm tracking-widest uppercase bg-[#C5A880] text-[#0E1117] hover:bg-[#F8F6F0] transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleEmailDispatch} className="space-y-5">
              {inquiryPrefill && (
                <div className="p-4 border border-[#C5A880]/20 bg-[#C5A880]/5 text-[#C5A880] text-sm font-light leading-relaxed">
                  <span className="font-editorial text-base block mb-1">Request Details</span>
                  {inquiryPrefill}
                </div>
              )}
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs tracking-widest uppercase text-[#F8F6F0]/60">Guest Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alexander Weber"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="px-4 py-2.5 text-sm bg-transparent border-b border-[#C5A880]/30 text-[#F8F6F0] focus:border-[#C5A880] focus:outline-none transition-colors font-light placeholder-[#F8F6F0]/20"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs tracking-widest uppercase text-[#F8F6F0]/60">Phone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+49 170 1234567"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="px-4 py-2.5 text-sm bg-transparent border-b border-[#C5A880]/30 text-[#F8F6F0] focus:border-[#C5A880] focus:outline-none transition-colors font-light placeholder-[#F8F6F0]/20"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs tracking-widest uppercase text-[#F8F6F0]/60">Email *</label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={guestEmail}
                  onChange={(e) => setGuestEmail(e.target.value)}
                  className="px-4 py-2.5 text-sm bg-transparent border-b border-[#C5A880]/30 text-[#F8F6F0] focus:border-[#C5A880] focus:outline-none transition-colors font-light placeholder-[#F8F6F0]/20"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs tracking-widest uppercase text-[#F8F6F0]/60">Additional Notes</label>
                <textarea
                  rows={3}
                  placeholder="How can we assist you with your luxury experience?"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="px-4 py-2.5 text-sm bg-transparent border border-[#C5A880]/30 text-[#F8F6F0] focus:border-[#C5A880] focus:outline-none transition-colors font-light placeholder-[#F8F6F0]/20 resize-none"
                />
              </div>

              <div className="pt-6 border-t border-[#C5A880]/10 flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={handleWhatsAppDispatch}
                  className="flex-1 py-3 px-4 bg-[#25D366] hover:bg-[#128C7E] text-white text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </button>

                <button
                  type="submit"
                  className="flex-1 py-3 px-4 bg-[#C5A880] hover:bg-[#F8F6F0] text-[#0E1117] text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Request</span>
                </button>
              </div>

            </form>
          )}

        </div>
      </div>
    </div>
  );
};
