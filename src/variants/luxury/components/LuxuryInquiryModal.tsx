import React from 'react';

/*
THESIS: Turn a generic luxury popup into a calm local dispatch desk that asks only for useful trip details.
OWN-WORLD: Warm white surfaces, charcoal type, thin neutral lines, and one quiet contextual color per enquiry type.
STORY: The visitor sees what was selected, answers the relevant questions, and chooses WhatsApp, email, or a direct call.
FIRST VIEWPORT: A bright contextual header leads into trip details and an explicit contact handoff; mobile uses a scrollable bottom sheet.
FORM: Context-specific dispatch sheet; user-pinned variant 1 refinement; seed key user-pinned-variant1-dispatch.
*/
import {
  ArrowUpRight,
  BusFront,
  CalendarDays,
  CarFront,
  Check,
  CircleHelp,
  Mail,
  MapPin,
  MessageCircle,
  Mountain,
  Phone,
  UsersRound,
  X,
  type LucideIcon,
} from 'lucide-react';
import { useAppStore } from '../../../store/useAppStore';

type InquiryKind = 'transfer' | 'excursion' | 'fleet' | 'urgent' | 'service' | 'general';

interface InquiryPresentation {
  kind: InquiryKind;
  title: string;
  intro: string;
  soft: string;
  accent: string;
  Icon: LucideIcon;
}

const presentationFor = (context: string): InquiryPresentation => {
  const value = context.toLowerCase();

  if (value.includes('night') || value.includes('taxi dispatch')) {
    return {
      kind: 'urgent',
      title: 'Call or message a taxi',
      intro: 'For a ride now, calling dispatch is fastest. You can also prepare the pickup details for WhatsApp.',
      soft: '#FFF3E4',
      accent: '#934A18',
      Icon: CarFront,
    };
  }

  if (value.includes('excursion')) {
    return {
      kind: 'excursion',
      title: 'Plan this excursion',
      intro: 'Choose a date and tell the driver what your group would enjoy. The route can be adjusted around your day.',
      soft: '#EEF4E9',
      accent: '#48633F',
      Icon: Mountain,
    };
  }

  if (value.includes('fleet') || value.includes('charter') || value.includes('vehicle')) {
    return {
      kind: 'fleet',
      title: 'Ask about a vehicle',
      intro: 'Passenger count, luggage and equipment help dispatch choose the right available vehicle.',
      soft: '#EDF2F5',
      accent: '#3F6070',
      Icon: BusFront,
    };
  }

  if (value.includes('service request') || value.includes('special service')) {
    return {
      kind: 'service',
      title: 'Arrange this service',
      intro: 'Add the practical details dispatch needs to check the service and suitable vehicle.',
      soft: '#F3EEE7',
      accent: '#72583A',
      Icon: CircleHelp,
    };
  }

  if (
    value.includes('transfer') ||
    value.includes('chauffeur') ||
    value.includes('gateway') ||
    value.includes('station')
  ) {
    return {
      kind: 'transfer',
      title: 'Request a transfer',
      intro: 'Confirm the route and timing. Dispatch will reply with availability, vehicle and final price.',
      soft: '#EAF2F5',
      accent: '#285B6D',
      Icon: MapPin,
    };
  }

  return {
    kind: 'general',
    title: 'Send a question',
    intro: 'Write what you need help with. A member of the local dispatch team will reply.',
    soft: '#F4F0E9',
    accent: '#6E573C',
    Icon: CircleHelp,
  };
};

const valueFrom = (text: string, label: string) => {
  const line = text.split('\n').find((item) => item.toLowerCase().startsWith(`${label.toLowerCase()}:`));
  return line?.slice(line.indexOf(':') + 1).trim() ?? '';
};

const cleanDetailLines = (text: string) => text
  .split('\n')
  .map((line) => line.trim())
  .filter((line) => {
    const value = line.toLowerCase();
    return line
      && !value.startsWith('please ')
      && !value.startsWith('i would like ')
      && !value.startsWith('i have ')
      && !value.startsWith('i am interested ')
      && !value.startsWith('need immediate ');
  });

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  inputRef?: React.Ref<HTMLInputElement>;
}

const Field: React.FC<FieldProps> = ({ label, inputRef, className = '', ...props }) => (
  <label className={`block text-sm font-medium text-[#25302B] ${className}`}>
    {label}
    <input
      ref={inputRef}
      {...props}
      className="mt-1.5 min-h-11 w-full rounded-xl border border-[#CBD2CD] bg-white px-3.5 text-sm text-[#17201C] outline-none transition placeholder:text-[#6D7772] focus:border-[#476759] focus:ring-2 focus:ring-[#476759]/15"
    />
  </label>
);

interface ContactFieldsProps {
  name: string;
  phone: string;
  email: string;
  onName: (value: string) => void;
  onPhone: (value: string) => void;
  onEmail: (value: string) => void;
  nameRef: React.Ref<HTMLInputElement>;
}

const ContactFields: React.FC<ContactFieldsProps> = ({ name, phone, email, onName, onPhone, onEmail, nameRef }) => (
  <div>
    <h3 className="text-base font-semibold text-[#17201C]">Your contact details</h3>
    <p className="mt-1 text-sm leading-5 text-[#59645F]">A name is enough to start. Phone and email are optional.</p>
    <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
      <Field label="Name" inputRef={nameRef} value={name} onChange={(event) => onName(event.target.value)} autoComplete="name" placeholder="Your name" />
      <Field label="Mobile phone" value={phone} onChange={(event) => onPhone(event.target.value)} autoComplete="tel" type="tel" placeholder="+39 …" />
      <Field label="Email" value={email} onChange={(event) => onEmail(event.target.value)} autoComplete="email" type="email" placeholder="name@example.com" className="sm:col-span-2 lg:col-span-1" />
    </div>
  </div>
);

interface ChoiceProps {
  checked: boolean;
  label: string;
  onChange: () => void;
}

const Choice: React.FC<ChoiceProps> = ({ checked, label, onChange }) => (
  <button
    type="button"
    aria-pressed={checked}
    onClick={onChange}
    className={`flex min-h-10 items-center gap-2 rounded-full border px-3 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#476759] focus-visible:ring-offset-2 ${
      checked ? 'border-[#476759] bg-[#E6EEE9] text-[#203C30]' : 'border-[#CAD1CC] bg-white text-[#44504A] hover:border-[#7D8B84]'
    }`}
  >
    <span className={`flex size-4 items-center justify-center rounded-full border ${checked ? 'border-[#476759] bg-[#476759] text-white' : 'border-[#9AA59F]'}`}>
      {checked && <Check className="size-3" aria-hidden="true" />}
    </span>
    {label}
  </button>
);

export const LuxuryInquiryModal: React.FC = () => {
  const {
    isInquiryModalOpen,
    closeInquiryModal,
    inquiryContext,
    inquiryPrefill,
    inquiryContact,
  } = useAppStore();
  const presentation = presentationFor(inquiryContext);
  const dialogRef = React.useRef<HTMLDivElement>(null);
  const firstFieldRef = React.useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const nameFieldRef = React.useRef<HTMLInputElement>(null);
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [pickup, setPickup] = React.useState('');
  const [destination, setDestination] = React.useState('');
  const [date, setDate] = React.useState('');
  const [time, setTime] = React.useState('');
  const [passengers, setPassengers] = React.useState('');
  const [luggage, setLuggage] = React.useState('');
  const [travelReference, setTravelReference] = React.useState('');
  const [notes, setNotes] = React.useState('');
  const [choices, setChoices] = React.useState<string[]>([]);
  const [validation, setValidation] = React.useState('');
  const [status, setStatus] = React.useState('');

  React.useEffect(() => {
    if (!isInquiryModalOpen) return;
    const route = valueFrom(inquiryPrefill, 'Route');
    const routeParts = route.split(/➔|→/).map((part) => part.trim());
    setName(inquiryContact.name ?? '');
    setPhone(inquiryContact.phone ?? '');
    setEmail(inquiryContact.email ?? '');
    setPickup(valueFrom(inquiryPrefill, 'Pick-Up') || routeParts[0] || '');
    setDestination(valueFrom(inquiryPrefill, 'Drop-Off') || routeParts[1] || '');
    setDate(inquiryContact.date || valueFrom(inquiryPrefill, 'Date'));
    setTime(inquiryContact.time ?? '');
    setPassengers(inquiryContact.groupSize || valueFrom(inquiryPrefill, 'Passengers').replace(/[^0-9+–-]/g, ''));
    setLuggage('');
    setTravelReference('');
    setNotes('');
    setChoices([]);
    setValidation('');
    setStatus('');
  }, [inquiryContact, inquiryContext, inquiryPrefill, isInquiryModalOpen]);

  React.useEffect(() => {
    if (!isInquiryModalOpen) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusTimer = window.setTimeout(() => firstFieldRef.current?.focus(), 50);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeInquiryModal();
        return;
      }
      if (event.key !== 'Tab' || !dialogRef.current) return;
      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )).filter((element) => element.offsetParent !== null);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [closeInquiryModal, isInquiryModalOpen]);

  if (!isInquiryModalOpen) return null;

  const detailLines = cleanDetailLines(inquiryPrefill);
  const toggleChoice = (choice: string) => setChoices((current) => (
    current.includes(choice) ? current.filter((item) => item !== choice) : [...current, choice]
  ));

  const specificLines: Record<InquiryKind, string[]> = {
    urgent: [
      pickup ? `Pickup: ${pickup}` : '',
      destination ? `Destination: ${destination}` : '',
      passengers ? `Passengers: ${passengers}` : '',
      notes ? `Other details: ${notes}` : '',
    ],
    transfer: [
      pickup ? `Pickup: ${pickup}` : '',
      destination ? `Destination: ${destination}` : '',
      date ? `Date: ${date}${time ? ` at ${time}` : ''}` : '',
      passengers ? `Passengers: ${passengers}` : '',
      luggage ? `Luggage: ${luggage}` : '',
      travelReference ? `Flight or train: ${travelReference}` : '',
      choices.length ? `Equipment: ${choices.join(', ')}` : '',
      notes ? `Notes: ${notes}` : '',
    ],
    excursion: [
      date ? `Preferred date: ${date}${time ? ` at ${time}` : ''}` : '',
      passengers ? `Guests: ${passengers}` : '',
      pickup ? `Pickup: ${pickup}` : '',
      choices.length ? `Interests: ${choices.join(', ')}` : '',
      notes ? `Notes: ${notes}` : '',
    ],
    fleet: [
      date ? `Date: ${date}${time ? ` at ${time}` : ''}` : '',
      passengers ? `Passengers: ${passengers}` : '',
      luggage ? `Luggage: ${luggage}` : '',
      pickup ? `Pickup: ${pickup}` : '',
      destination ? `Destination: ${destination}` : '',
      choices.length ? `Equipment: ${choices.join(', ')}` : '',
      notes ? `Notes: ${notes}` : '',
    ],
    service: [
      date ? `Preferred date: ${date}${time ? ` at ${time}` : ''}` : '',
      passengers ? `Passengers: ${passengers}` : '',
      pickup ? `Pickup: ${pickup}` : '',
      destination ? `Destination: ${destination}` : '',
      notes ? `Requirements: ${notes}` : '',
    ],
    general: [notes ? `Question: ${notes}` : ''],
  };

  const message = [
    'TAXI AUTO SELLA REQUEST',
    `Type: ${inquiryContext}`,
    ...detailLines,
    ...specificLines[presentation.kind],
    name ? `Name: ${name}` : '',
    phone ? `Phone: ${phone}` : '',
    email ? `Email: ${email}` : '',
    'Please reply with availability and the next steps.',
  ].filter(Boolean).join('\n');

  const validate = () => {
    if (presentation.kind === 'urgent') {
      if (pickup.trim() && destination.trim()) return true;
      setValidation('Add both the pickup and destination, or call dispatch instead.');
      firstFieldRef.current?.focus();
      return false;
    }
    if (!name.trim()) {
      setValidation('Add your name before continuing.');
      nameFieldRef.current?.focus();
      return false;
    }
    if (presentation.kind === 'general' && !notes.trim()) {
      setValidation('Write your question before continuing.');
      firstFieldRef.current?.focus();
      return false;
    }
    return true;
  };

  const openWhatsApp = () => {
    if (!validate()) return;
    const url = `https://wa.me/390471790033?text=${encodeURIComponent(message)}`;
    const newWindow = window.open(url, '_blank');
    if (newWindow) newWindow.opener = null;
    else window.location.href = url;
    setValidation('');
    setStatus('WhatsApp opened with your details. Send the message there to finish.');
  };

  const openEmail = () => {
    if (!validate()) return;
    const subject = `Taxi Auto Sella — ${inquiryContext}`;
    window.location.href = `mailto:info@taxiautosella.it?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    setValidation('');
    setStatus('Your email draft should now be open. Send it there to finish.');
  };

  const sharedNotes = (label: string, placeholder: string) => (
    <label className="block text-sm font-medium text-[#25302B]">
      {label}
      <textarea
        value={notes}
        onChange={(event) => setNotes(event.target.value)}
        rows={3}
        placeholder={placeholder}
        className="mt-1.5 w-full resize-none rounded-xl border border-[#CBD2CD] bg-white px-3.5 py-3 text-sm leading-5 text-[#17201C] outline-none transition placeholder:text-[#6D7772] focus:border-[#476759] focus:ring-2 focus:ring-[#476759]/15"
      />
    </label>
  );

  const transferFields = (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Pickup" inputRef={firstFieldRef as React.Ref<HTMLInputElement>} value={pickup} onChange={(event) => setPickup(event.target.value)} placeholder="Airport, station or address" />
        <Field label="Destination" value={destination} onChange={(event) => setDestination(event.target.value)} placeholder="Hotel or address" />
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        <Field label="Date" type="date" value={date} onChange={(event) => setDate(event.target.value)} />
        <Field label="Pickup time" type="time" value={time} onChange={(event) => setTime(event.target.value)} />
        <Field label="Passengers" type="number" min="1" inputMode="numeric" value={passengers} onChange={(event) => setPassengers(event.target.value)} placeholder="2" className="col-span-2 sm:col-span-1" />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Flight or train number" value={travelReference} onChange={(event) => setTravelReference(event.target.value)} placeholder="Optional" />
        <Field label="Suitcases" type="number" min="0" inputMode="numeric" value={luggage} onChange={(event) => setLuggage(event.target.value)} placeholder="0" />
      </div>
      <div className="flex flex-wrap gap-2">
        {['Skis or snowboard', 'Bicycles', 'Child seat'].map((choice) => (
          <Choice key={choice} label={choice} checked={choices.includes(choice)} onChange={() => toggleChoice(choice)} />
        ))}
      </div>
      {sharedNotes('Anything else?', 'Accessibility needs, pets, extra stops or other useful details')}
    </div>
  );

  const excursionFields = (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        <Field label="Preferred date" inputRef={firstFieldRef as React.Ref<HTMLInputElement>} type="date" value={date} onChange={(event) => setDate(event.target.value)} />
        <Field label="Start time" type="time" value={time} onChange={(event) => setTime(event.target.value)} />
        <Field label="Guests" type="number" min="1" inputMode="numeric" value={passengers} onChange={(event) => setPassengers(event.target.value)} placeholder="2" className="col-span-2 sm:col-span-1" />
      </div>
      <Field label="Pickup in Val Gardena" value={pickup} onChange={(event) => setPickup(event.target.value)} placeholder="Hotel or address" />
      <div>
        <p className="text-sm font-medium text-[#25302B]">What interests your group?</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {['Scenic stops', 'Short walks', 'Local lunch', 'Photography', 'Family-friendly pace'].map((choice) => (
            <Choice key={choice} label={choice} checked={choices.includes(choice)} onChange={() => toggleChoice(choice)} />
          ))}
        </div>
      </div>
      {sharedNotes('Ideas or access needs', 'Places you want to see, mobility needs, children, or preferred pace')}
    </div>
  );

  const fleetFields = (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Field label="Date" inputRef={firstFieldRef as React.Ref<HTMLInputElement>} type="date" value={date} onChange={(event) => setDate(event.target.value)} />
        <Field label="Time" type="time" value={time} onChange={(event) => setTime(event.target.value)} />
        <Field label="Passengers" type="number" min="1" inputMode="numeric" value={passengers} onChange={(event) => setPassengers(event.target.value)} placeholder="8" />
        <Field label="Suitcases" type="number" min="0" inputMode="numeric" value={luggage} onChange={(event) => setLuggage(event.target.value)} placeholder="4" />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Pickup" value={pickup} onChange={(event) => setPickup(event.target.value)} placeholder="Address or venue" />
        <Field label="Destination" value={destination} onChange={(event) => setDestination(event.target.value)} placeholder="Address or route" />
      </div>
      <div className="flex flex-wrap gap-2">
        {['Skis or snowboard', 'Bicycles', 'Wheelchair access', 'Child seat'].map((choice) => (
          <Choice key={choice} label={choice} checked={choices.includes(choice)} onChange={() => toggleChoice(choice)} />
        ))}
      </div>
      {sharedNotes('Vehicle requirements', 'Large equipment, multiple stops, trailer needs or event logistics')}
    </div>
  );

  const serviceFields = (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        <Field label="Preferred date" inputRef={firstFieldRef as React.Ref<HTMLInputElement>} type="date" value={date} onChange={(event) => setDate(event.target.value)} />
        <Field label="Time" type="time" value={time} onChange={(event) => setTime(event.target.value)} />
        <Field label="Passengers" type="number" min="1" inputMode="numeric" value={passengers} onChange={(event) => setPassengers(event.target.value)} placeholder="2" className="col-span-2 sm:col-span-1" />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Pickup" value={pickup} onChange={(event) => setPickup(event.target.value)} placeholder="If relevant" />
        <Field label="Destination" value={destination} onChange={(event) => setDestination(event.target.value)} placeholder="If relevant" />
      </div>
      {sharedNotes('What should dispatch prepare for?', 'Accessibility, pet, school, courier, trailer or other requirements')}
    </div>
  );

  const generalFields = (
    <label className="block text-sm font-medium text-[#25302B]">
      Your question
      <textarea
        ref={firstFieldRef as React.Ref<HTMLTextAreaElement>}
        value={notes}
        onChange={(event) => setNotes(event.target.value)}
        rows={7}
        placeholder="What would you like to know?"
        className="mt-1.5 w-full resize-none rounded-xl border border-[#CBD2CD] bg-white px-3.5 py-3 text-sm leading-6 text-[#17201C] outline-none transition placeholder:text-[#6D7772] focus:border-[#476759] focus:ring-2 focus:ring-[#476759]/15"
      />
    </label>
  );

  const urgentFields = (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Pickup" inputRef={firstFieldRef as React.Ref<HTMLInputElement>} value={pickup} onChange={(event) => setPickup(event.target.value)} placeholder="Hotel, venue or address" />
        <Field label="Destination" value={destination} onChange={(event) => setDestination(event.target.value)} placeholder="Where are you going?" />
      </div>
      <div className="grid gap-3 sm:grid-cols-[160px_1fr]">
        <Field label="Passengers" type="number" min="1" inputMode="numeric" value={passengers} onChange={(event) => setPassengers(event.target.value)} placeholder="2" />
        <Field label="Name (optional)" value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" />
      </div>
      {sharedNotes('Pickup note', 'Entrance, table name, luggage or anything that helps the driver find you')}
    </div>
  );

  const fieldsByKind: Record<InquiryKind, React.ReactNode> = {
    transfer: transferFields,
    excursion: excursionFields,
    fleet: fleetFields,
    service: serviceFields,
    general: generalFields,
    urgent: urgentFields,
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-[#132019]/35 p-0 sm:items-center sm:p-5"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closeInquiryModal();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="inquiry-title"
        aria-describedby="inquiry-intro"
        className="relative flex max-h-[94dvh] w-full max-w-5xl flex-col overflow-hidden rounded-t-2xl bg-[#FBFCFA] shadow-[0_24px_80px_rgba(17,32,25,0.24)] sm:max-h-[calc(100dvh-2.5rem)] sm:rounded-2xl"
      >
        <header className="relative px-5 py-5 pr-16 sm:px-7 sm:py-6 sm:pr-20" style={{ backgroundColor: presentation.soft }}>
          <div className="flex items-start gap-3.5">
            <presentation.Icon className="mt-1 size-6 shrink-0" aria-hidden="true" />
            <div>
              <h2 id="inquiry-title" className="text-2xl font-semibold leading-tight tracking-[-0.025em] text-[#17201C] sm:text-3xl">
                {presentation.title}
              </h2>
              <p id="inquiry-intro" className="mt-2 max-w-2xl text-sm leading-6 text-[#4C5953]">{presentation.intro}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={closeInquiryModal}
            className="absolute right-3 top-3 flex size-11 items-center justify-center rounded-full text-[#3D4843] transition-colors hover:bg-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#476759] focus-visible:ring-offset-2 sm:right-5 sm:top-5"
            aria-label="Close inquiry"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </header>

        <div className="inquiry-scrollbar overflow-y-auto overscroll-contain">
          {detailLines.length > 0 && (
            <div className="border-b border-[#E1E5E2] bg-white px-5 py-3.5 sm:px-7">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-[#4B5751]">
                <span className="font-semibold text-[#17201C]">Selected</span>
                {detailLines.map((line, index) => <span key={`${line}-${index}`}>{line}</span>)}
              </div>
            </div>
          )}

          {presentation.kind === 'urgent' ? (
            <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-[0.78fr_1.22fr] lg:gap-8">
              <div>
                <p className="text-sm leading-6 text-[#4C5953]">If the pickup is time-sensitive, call the local dispatch number directly.</p>
                <a
                  href="tel:+390471790033"
                  className="mt-4 flex min-h-16 items-center justify-between rounded-2xl bg-[#17201C] px-5 text-white transition-colors hover:bg-[#2A3831] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#934A18] focus-visible:ring-offset-2"
                >
                  <span className="flex items-center gap-3 text-base font-semibold"><Phone className="size-5" /> Call dispatch</span>
                  <span className="text-sm text-white/80">+39 0471 790033</span>
                </a>
                <p className="mt-3 text-xs leading-5 text-[#68736E]">During busy periods, availability depends on the nearest free driver.</p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#17201C]">Message the pickup details</h3>
                <div className="mt-4">{fieldsByKind.urgent}</div>
                {validation && <p role="alert" className="mt-3 text-sm font-medium text-[#A23E2A]">{validation}</p>}
                <button
                  type="button"
                  onClick={openWhatsApp}
                  className="mt-4 flex min-h-12 w-full items-center justify-between rounded-xl bg-[#176B48] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#12583A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B48] focus-visible:ring-offset-2"
                >
                  <span className="flex items-center gap-2"><MessageCircle className="size-4" /> Continue in WhatsApp</span>
                  <ArrowUpRight className="size-4" />
                </button>
                <p aria-live="polite" className="mt-2 min-h-5 text-xs font-medium text-[#176B48]">{status}</p>
              </div>
            </div>
          ) : (
            <div className="grid gap-7 p-5 sm:p-7 lg:grid-cols-[1.45fr_0.75fr] lg:gap-9">
              <section>
                <h3 className="text-base font-semibold text-[#17201C]">
                  {presentation.kind === 'general' ? 'What can we answer?' : 'Trip details'}
                </h3>
                <div className="mt-4">{fieldsByKind[presentation.kind]}</div>
              </section>
              <aside className="border-t border-[#E1E5E2] pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <ContactFields name={name} phone={phone} email={email} onName={setName} onPhone={setPhone} onEmail={setEmail} nameRef={nameFieldRef} />
                {validation && <p role="alert" className="mt-3 text-sm font-medium text-[#A23E2A]">{validation}</p>}
                <div className="mt-5 space-y-2.5">
                  <button
                    type="button"
                    onClick={openWhatsApp}
                    className="flex min-h-12 w-full items-center justify-between rounded-xl px-4 text-sm font-semibold text-white transition-[filter] hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                    style={{ backgroundColor: presentation.accent }}
                  >
                    <span className="flex items-center gap-2"><MessageCircle className="size-4" /> Open in WhatsApp</span>
                    <ArrowUpRight className="size-4" />
                  </button>
                  <button
                    type="button"
                    onClick={openEmail}
                    className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-[#C9D0CC] bg-white px-4 text-sm font-semibold text-[#2C3732] transition-colors hover:bg-[#F4F6F4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#476759] focus-visible:ring-offset-2"
                  >
                    <Mail className="size-4" /> Use email instead
                  </button>
                  <a href="tel:+390471790033" className="flex min-h-10 items-center justify-center gap-2 text-sm font-medium text-[#4C5953] underline decoration-[#9BA59F] underline-offset-4 hover:text-[#17201C]">
                    <Phone className="size-4" /> Call dispatch
                  </a>
                </div>
                <p className="mt-4 text-xs leading-5 text-[#68736E]">Nothing is booked until dispatch confirms availability and price.</p>
                <p aria-live="polite" className="mt-2 min-h-5 text-xs font-medium text-[#176B48]">{status}</p>
              </aside>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
