export interface FaqItem {
  id: string;
  question: {
    en: string;
    it: string;
    de: string;
  };
  answer: {
    en: string;
    it: string;
    de: string;
  };
  category: 'booking' | 'airport' | 'winter' | 'fleet';
}

export const FAQS: FaqItem[] = [
  {
    id: 'meet-greet',
    category: 'airport',
    question: {
      en: 'How do I find my driver at the airport or train station?',
      it: 'Come trovo il mio autista all\'aeroporto o alla stazione?',
      de: 'Wie finde ich meinen Fahrer am Flughafen oder Bahnhof?'
    },
    answer: {
      en: 'Your chauffeur will be waiting in the arrival terminal right after baggage claim, holding a personalized sign with your name or company logo. We also share your driver\'s direct WhatsApp and mobile number in advance.',
      it: 'Il vostro autista vi aspetterà nella hall arrivi subito dopo il ritiro bagagli con un cartello personalizzato con il vostro nome. Riceverete anche il contatto diretto WhatsApp e cellulare dell\'autista prima dell\'arrivo.',
      de: 'Ihr Fahrer erwartet Sie im Ankunftsbereich direkt nach der Gepäckausgabe mit einem personalisierten Namensschild. Vorab erhalten Sie auch die direkte Handynummer und WhatsApp des Fahrers.'
    }
  },
  {
    id: 'flight-delay',
    category: 'airport',
    question: {
      en: 'What happens if my flight or train is delayed?',
      it: 'Cosa succede se il mio volo o treno è in ritardo?',
      de: 'Was passiert, wenn mein Flug oder Zug Verspätung hat?'
    },
    answer: {
      en: 'We continuously track your flight number in real-time. If your flight is delayed or lands early, your pickup time is automatically adjusted at no extra charge. 60 minutes free waiting time from actual touch-down is always included.',
      it: 'Monitoriamo costantemente il vostro numero di volo in tempo reale. In caso di ritardo o anticipo, l\'orario di ritiro viene aggiornato automaticamente senza costi aggiuntivi. Sono inclusi 60 minuti di attesa gratuita dall\'atterraggio.',
      de: 'Wir verfolgen Ihre Flugnummer live in Echtzeit. Bei Verspätung oder verfrühter Landung wird Ihre Abholzeit automatisch und ohne Aufpreis angepasst. 60 Minuten kostenlose Wartezeit ab Landung sind immer inklusive.'
    }
  },
  {
    id: 'ski-equipment',
    category: 'winter',
    question: {
      en: 'Can we transport skis, snowboards, or mountain bikes?',
      it: 'Possiamo trasportare sci, snowboard o mountain bike?',
      de: 'Können wir Skier, Snowboards oder Mountainbikes transportieren?'
    },
    answer: {
      en: 'Yes! Our Mercedes 4MATIC minibuses and vans are equipped with aerodynamic ski boxes and optional bike trailers. Just select the ski/gear option when requesting your quote so we assign the appropriate vehicle setup.',
      it: 'Certamente! I nostri minibus Mercedes 4MATIC sono dotati di box portasci aerodinamici e carrelli per mountain bike. Basta selezionare l\'opzione attrezzatura per assegnare il veicolo ideale.',
      de: 'Ja! Unsere Mercedes 4MATIC Minibusse sind mit Skiboxen und im Sommer mit Biketrailern ausgestattet. Wählen Sie einfach die Sportgepäck-Option bei der Anfrage, damit wir das passende Fahrzeug bereitstellen.'
    }
  },
  {
    id: 'payment-methods',
    category: 'booking',
    question: {
      en: 'What payment methods do you accept?',
      it: 'Quali metodi di pagamento accettate?',
      de: 'Welche Zahlungsmethoden werden akzeptiert?'
    },
    answer: {
      en: 'All our vehicles are equipped with onboard POS card terminals. We accept Visa, Mastercard, Maestro, American Express, Apple Pay, Google Pay, Bank Transfer, and Cash. Official digital VAT tax receipts and invoices are provided immediately.',
      it: 'Tutti i veicoli dispongono di terminale POS a bordo. Accettiamo Visa, Mastercard, Maestro, American Express, Apple Pay, Google Pay, bonifico bancario e contanti. Rilasciamo regolare fattura elettronica o ricevuta.',
      de: 'Alle Fahrzeuge sind mit modernen POS-Kartenterminals ausgestattet. Wir akzeptieren Visa, Mastercard, American Express, Apple Pay, Google Pay, Überweisung und Barzahlung. Offizielle Rechnungen mit MwSt. werden sofort ausgestellt.'
    }
  },
  {
    id: 'snow-safety',
    category: 'winter',
    question: {
      en: 'Are your vehicles safe in heavy snow and icy Dolomite pass conditions?',
      it: 'I vostri veicoli sono sicuri in caso di forti nevicate e ghiaccio sui passi?',
      de: 'Sind die Fahrzeuge bei starkem Schneefall und Pass-Fahrten sicher?'
    },
    answer: {
      en: '100% of our fleet is equipped with Mercedes 4MATIC permanent all-wheel drive, premium certified Alpine winter tires, and onboard snow chains. Our local drivers have decades of experience navigating winter mountain passes (Passo Sella, Passo Gardena, Passo Pordoi) in all weather conditions.',
      it: 'Il 100% della nostra flotta dispone di trazione integrale Mercedes 4MATIC permanente, pneumatici invernali premium e catene da neve a bordo. I nostri autisti hanno decenni di esperienza sui passi alpini innevati.',
      de: '100% unserer Flotte verfügt über permanenten Mercedes 4MATIC Allradantrieb, zertifizierte Winterreifen und Schneeketten an Bord. Unsere einheimischen Fahrer besitzen jahrzehntelange Erfahrung auf verschneiten Dolomitenpässen.'
    }
  },
  {
    id: 'cancellation',
    category: 'booking',
    question: {
      en: 'What is your cancellation and modification policy?',
      it: 'Qual è la politica di cancellazione e modifica?',
      de: 'Wie lauten die Stornierungs- und Änderungsbedingungen?'
    },
    answer: {
      en: 'You can modify or cancel your booking free of charge up to 24 hours prior to the scheduled pickup time. In case of unexpected airline flight cancellations, we offer full flexibility to reschedule.',
      it: 'Potete modificare o cancellare gratuitamente la prenotazione fino a 24 ore prima dell\'orario stabilito. In caso di voli cancellati dalla compagnia aerea, offriamo la massima flessibilità di riprenotazione.',
      de: 'Sie können Ihre Buchung bis zu 24 Stunden vor der geplanten Abholung kostenlos ändern oder stornieren. Bei unvorhergesehenen Flugstreichungen bieten wir volle Flexibilität bei der Umbuchung.'
    }
  }
];
