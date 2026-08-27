export type Language = 'en' | 'it' | 'de';

export const TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {
    // Navigation & Global
    'nav.home': 'Home',
    'nav.quote': 'Instant Quote',
    'nav.fleet': 'Our Fleet (25 Vehicles)',
    'nav.excursions': 'Excursions & Tours',
    'nav.consortium': 'Consortium & Drivers',
    'nav.faq': 'Questions & Answers',
    'nav.contact': 'Contact & 24/7 Hotline',
    'nav.bookNow': 'Book Transfer',
    'nav.callUs': 'Call (+39) 0471 790033',
    'nav.whatsapp': 'WhatsApp Us',

    // Demo Switcher
    'demo.title': 'Client Presentation Mode',
    'demo.switchTheme': 'Choose Concept:',
    'demo.concept1': 'Concept 1: Alpine Luxury & Prestige',
    'demo.concept2': 'Concept 2: Modern Global Tech (WelcomePickups Style)',
    'demo.concept3': 'Concept 3: Dolomites Adventure & Ski Shuttle',
    'demo.concept1.short': '1. Luxury Prestige',
    'demo.concept2.short': '2. Modern Tech',
    'demo.concept3.short': '3. Dolomites Ski & Adventure',
    'demo.lang': 'Language',
    'demo.previewBadge': 'Interactive Prototype',

    // Hero Luxury
    'luxury.hero.eyebrow': 'Exclusive Val Gardena & Dolomiti Superski Chauffeurs',
    'luxury.hero.title': 'Exquisite Mountain Transfers Across the Italian Dolomites',
    'luxury.hero.subtitle': 'Experience seamless private transfers from Munich, Innsbruck, Verona, Milan, and Venice straight to your luxury chalet or hotel. Val Gardena’s largest 4MATIC Mercedes fleet.',
    'luxury.hero.cta1': 'Calculate Private Quote',
    'luxury.hero.cta2': 'Explore 25-Vehicle Fleet',

    // Hero Tech
    'tech.hero.eyebrow': 'Val Gardena’s #1 Rated Transfer Consortium',
    'tech.hero.title': 'Smart Airport Transfers to Val Gardena & the Dolomites',
    'tech.hero.subtitle': 'Fixed upfront pricing, flight delay tracking, and professional local drivers. Book your private Mercedes transfer in under 60 seconds.',
    'tech.hero.badge': '★ 4.95/5 Rating (1,200+ Reviews) • 25 Mercedes 4MATIC Vehicles',

    // Hero Adventure
    'adventure.hero.eyebrow': 'Fast Track to Sella Ronda & Dolomiti Superski',
    'adventure.hero.title': 'Your Ultimate Dolomites Ski & Adventure Shuttle',
    'adventure.hero.subtitle': 'Heavy-duty 4x4 vans equipped for skis, snowboards, and mountain bikes. From regional airports directly to the ski lifts of Ortisei, S. Cristina, and Selva.',
    'adventure.hero.cta1': 'Book Ski Shuttle',
    'adventure.hero.cta2': 'Sella Ronda Tours',

    // Trust Metrics
    'trust.vehicles': '25 Modern Vehicles',
    'trust.vehicles.sub': 'Mercedes E-Class, V-Class & Coaches',
    'trust.drivers': '18 Local Drivers',
    'trust.drivers.sub': 'Generations of Alpine Experience',
    'trust.winter': '100% 4MATIC 4x4',
    'trust.winter.sub': 'Snow-Chains & High Pass Certified',
    'trust.tracking': 'Free Flight Tracking',
    'trust.tracking.sub': 'Zero extra charge for flight delays',

    // Calculator Widget
    'calc.title': 'Get an Instant Transfer Quote',
    'calc.pickup': 'Pick-Up Location (Airport, Station, City)',
    'calc.dropoff': 'Destination (Resort, Chalet, Pass)',
    'calc.date': 'Transfer Date',
    'calc.time': 'Pickup Time',
    'calc.pax': 'Passengers',
    'calc.luggage': 'Luggage Bags',
    'calc.skis': 'Ski / Snowboard Gear Included?',
    'calc.bikes': 'Mountain Bikes / Trailer Needed?',
    'calc.childSeats': 'Child / Booster Seats Needed?',
    'calc.flightNum': 'Flight / Train Number (For Live Delay Tracking)',
    'calc.calculateBtn': 'View Available Vehicles & Rates',
    'calc.estimatedTime': 'Est. Travel Time',
    'calc.estimatedDist': 'Road Distance',
    'calc.startingFrom': 'Starting from',
    'calc.selectVehicle': 'Select & Reserve',
    'calc.instantQuote': 'Instant Quote Breakdown',
    'calc.allInclusive': 'All-inclusive: Highway tolls, Alpine permits, Meet & Greet, and Flight Tracking included.',

    // Fleet Section
    'fleet.title': 'Our 25-Vehicle Mercedes Fleet',
    'fleet.subtitle': 'From private executive limousines to 8-passenger 4x4 minivans and 56-seat touring coaches.',
    'fleet.pax': 'Passengers',
    'fleet.bags': 'Luggage Bags',
    'fleet.skis': 'Ski Bags / Snowboards',
    'fleet.reserve': 'Reserve Vehicle',
    'fleet.viewSpecs': 'View Full Specs',

    // Excursions
    'excursions.title': 'Organized Dolomites Excursions & Day Trips',
    'excursions.subtitle': 'Discover the beauty of the UNESCO World Heritage Dolomites, romantic Venice, historic Verona, and imperial Innsbruck with our local chauffeurs.',
    'excursions.learnMore': 'Inquire About This Tour',

    // Consortium
    'consortium.title': 'Val Gardena’s Largest Taxi Consortium',
    'consortium.subtitle': 'Founded over 35 years ago in Santa Cristina. 18 local driver-partners delivering reliability, punctuality, and authentic mountain hospitality.',
    'consortium.hotlineTitle': 'Need an Immediate Local Taxi or Ski Shuttle?',
    'consortium.hotlineDesc': 'In high season, our central office provides rapid dispatch across Ortisei, S. Cristina, and Selva.',

    // Modal & Dispatch
    'modal.title': 'Complete Your Transfer Request',
    'modal.step1': '1. Review Route & Vehicle',
    'modal.step2': '2. Guest Details & Confirmation',
    'modal.name': 'Full Name',
    'modal.email': 'Email Address',
    'modal.phone': 'Mobile Phone (with country code)',
    'modal.notes': 'Special Requests / Hotel Name in Val Gardena',
    'modal.submitWhatsApp': 'Send Reservation via WhatsApp (Instant)',
    'modal.submitEmail': 'Send Official Reservation Request',
    'modal.success': 'Reservation Request Generated Successfully!',
    'modal.successDesc': 'Our central dispatch office will confirm your driver and send your booking voucher within minutes.',

    // Footer
    'footer.company': 'Taxi Auto Sella Consortium',
    'footer.address': 'Str. Gherdeina 7/A, I-39047 Santa Cristina (BZ), Val Gardena, Dolomites, Italy',
    'footer.vat': 'VAT No.: IT01707460216',
    'footer.rights': 'All Rights Reserved. Val Gardena Luxury Transfers & Taxi Consortium.'
  },
  it: {
    // Navigation & Global
    'nav.home': 'Home',
    'nav.quote': 'Preventivo Immediato',
    'nav.fleet': 'La Nostra Flotta (25 Mezzi)',
    'nav.excursions': 'Gite & Escursioni',
    'nav.consortium': 'Consorzio & Autisti',
    'nav.faq': 'Domande Frequenti',
    'nav.contact': 'Contatti & Centrale 24/7',
    'nav.bookNow': 'Prenota Transfer',
    'nav.callUs': 'Chiama (+39) 0471 790033',
    'nav.whatsapp': 'Scrivici su WhatsApp',

    // Demo Switcher
    'demo.title': 'Modalità Presentazione Cliente',
    'demo.switchTheme': 'Seleziona Concetto Grafico:',
    'demo.concept1': 'Concetto 1: Lusso Alpino & Prestigio',
    'demo.concept2': 'Concetto 2: Modern Global Tech (Stile WelcomePickups)',
    'demo.concept3': 'Concetto 3: Avventura Dolomiti & Ski Shuttle',
    'demo.concept1.short': '1. Lusso & Prestigio',
    'demo.concept2.short': '2. Modern Tech',
    'demo.concept3.short': '3. Avventura & Sci',
    'demo.lang': 'Lingua',
    'demo.previewBadge': 'Prototipo Interattivo',

    // Hero Luxury
    'luxury.hero.eyebrow': 'Noleggio Con Conducente Esclusivo Val Gardena & Dolomiti',
    'luxury.hero.title': 'Trasferimenti Privati d\'Eccellenza nelle Dolomiti',
    'luxury.hero.subtitle': 'Servizio transfer di prima classe dagli aeroporti di Monaco, Innsbruck, Verona, Milano e Venezia direttamente al vostro hotel in Val Gardena. La più grande flotta Mercedes 4MATIC.',
    'luxury.hero.cta1': 'Calcola Preventivo Privato',
    'luxury.hero.cta2': 'Scopri i 25 Veicoli',

    // Hero Tech
    'tech.hero.eyebrow': 'Il Consorzio Taxi #1 in Val Gardena',
    'tech.hero.title': 'Transfer Aeroportuali Intelligenti per la Val Gardena',
    'tech.hero.subtitle': 'Tariffe fisse trasparenti, monitoraggio ritardi aerei e autisti locali esperti. Prenota il tuo transfer Mercedes in meno di 60 secondi.',
    'tech.hero.badge': '★ Valutazione 4.95/5 (Oltre 1.200 Recensioni) • 25 Veicoli Mercedes 4MATIC',

    // Hero Adventure
    'adventure.hero.eyebrow': 'Accesso Diretto a Sella Ronda & Dolomiti Superski',
    'adventure.hero.title': 'Lo Shuttle Ideale per Sci, Bici e Avventura',
    'adventure.hero.subtitle': 'Minivan 4x4 attrezzati per sci, snowboard e mountain bike. Dagli aeroporti e stazioni direttamente agli impianti di Ortisei, S. Cristina e Selva.',
    'adventure.hero.cta1': 'Prenota Ski Shuttle',
    'adventure.hero.cta2': 'Tour Sella Ronda',

    // Trust Metrics
    'trust.vehicles': '25 Mezzi Moderni',
    'trust.vehicles.sub': 'Mercedes Classe E, Classe V e Pullman',
    'trust.drivers': '18 Autisti Locali',
    'trust.drivers.sub': 'Generazioni di Esperienza Alpina',
    'trust.winter': '100% 4MATIC 4x4',
    'trust.winter.sub': 'Catene da neve e abilitazione passi',
    'trust.tracking': 'Monitoraggio Voli Incluso',
    'trust.tracking.sub': 'Nessun costo extra per voli in ritardo',

    // Calculator Widget
    'calc.title': 'Calcola Preventivo Immediato',
    'calc.pickup': 'Luogo di Partenza (Aeroporto, Stazione, Città)',
    'calc.dropoff': 'Destinazione (Hotel, Paese, Passo)',
    'calc.date': 'Data del Transfer',
    'calc.time': 'Orario di Ritiro',
    'calc.pax': 'Passeggeri',
    'calc.luggage': 'Bagagli',
    'calc.skis': 'Attrezzatura Sci / Snowboard Inclusa?',
    'calc.bikes': 'Trasporto Mountain Bike / Carrello?',
    'calc.childSeats': 'Seggiolini Bambini / Rialzi?',
    'calc.flightNum': 'Numero Volo / Treno (Per Monitoraggio Ritardi)',
    'calc.calculateBtn': 'Visualizza Mezzi e Tariffe',
    'calc.estimatedTime': 'Tempo Stimato',
    'calc.estimatedDist': 'Distanza Stradale',
    'calc.startingFrom': 'A partire da',
    'calc.selectVehicle': 'Seleziona & Prenota',
    'calc.instantQuote': 'Dettaglio Preventivo Istantaneo',
    'calc.allInclusive': 'Tutto incluso: Pedaggi autostradali, permessi passi dolomitici, accoglienza all\'arrivo e monitoraggio volo.',

    // Fleet Section
    'fleet.title': 'Il Nostro Parco Mezzi Mercedes (25 Veicoli)',
    'fleet.subtitle': 'Dalle berline di lusso ai minibus 4x4 da 8 posti fino ai grandi pullman granturismo da 56 posti.',
    'fleet.pax': 'Passeggeri',
    'fleet.bags': 'Bagagli',
    'fleet.skis': 'Portasci / Snowboard',
    'fleet.reserve': 'Prenota Veicolo',
    'fleet.viewSpecs': 'Dettagli Tecnici',

    // Excursions
    'excursions.title': 'Gite Organizzate & Tour nelle Dolomiti',
    'excursions.subtitle': 'Ammira le Dolomiti Patrimonio UNESCO, la romantica Venezia, la storica Verona e la splendida Innsbruck con i nostri autisti locali.',
    'excursions.learnMore': 'Richiedi Info Tour',

    // Consortium
    'consortium.title': 'Il Più Grande Consorzio Taxi della Val Gardena',
    'consortium.subtitle': 'Fondato oltre 35 anni fa a Santa Cristina. 18 autisti consorziati al vostro servizio con massima serietà e puntualità.',
    'consortium.hotlineTitle': 'Hai bisogno di un taxi locale immediato o ski shuttle?',
    'consortium.hotlineDesc': 'In alta stagione il nostro centralino garantisce corse rapide tra Ortisei, S. Cristina e Selva Gardena.',

    // Modal & Dispatch
    'modal.title': 'Completa la Richiesta di Prenotazione',
    'modal.step1': '1. Riepilogo Itinerario & Mezzo',
    'modal.step2': '2. Dati Ospite & Conferma',
    'modal.name': 'Nome e Cognome',
    'modal.email': 'Indirizzo Email',
    'modal.phone': 'Numero di Cellulare (con prefisso)',
    'modal.notes': 'Note Speciali / Nome Hotel in Val Gardena',
    'modal.submitWhatsApp': 'Invia Prenotazione via WhatsApp (Immediato)',
    'modal.submitEmail': 'Invia Richiesta Ufficiale via Email',
    'modal.success': 'Richiesta di Prenotazione Generata!',
    'modal.successDesc': 'La nostra centrale operativa confermerà l\'autista e invierà il voucher di conferma in pochi minuti.',

    // Footer
    'footer.company': 'Consorzio Taxi Auto Sella',
    'footer.address': 'Str. Gherdeina 7/A, I-39047 Santa Cristina (BZ), Val Gardena, Dolomiti, Italia',
    'footer.vat': 'P.IVA: IT01707460216',
    'footer.rights': 'Tutti i diritti riservati. Consorzio Noleggio Con Conducente Val Gardena.'
  },
  de: {
    // Navigation & Global
    'nav.home': 'Startseite',
    'nav.quote': 'Sofort-Angebot',
    'nav.fleet': 'Unser Fuhrpark (25 Fahrzeuge)',
    'nav.excursions': 'Ausflüge & Touren',
    'nav.consortium': 'Konsortium & Fahrer',
    'nav.faq': 'Fragen & Antworten',
    'nav.contact': 'Kontakt & 24h Zentrale',
    'nav.bookNow': 'Transfer buchen',
    'nav.callUs': 'Anrufen (+39) 0471 790033',
    'nav.whatsapp': 'WhatsApp Nachricht',

    // Demo Switcher
    'demo.title': 'Kunden-Präsentationsmodus',
    'demo.switchTheme': 'Designkonzept wählen:',
    'demo.concept1': 'Konzept 1: Alpiner Luxus & Prestige',
    'demo.concept2': 'Konzept 2: Modern Global Tech (WelcomePickups Stil)',
    'demo.concept3': 'Konzept 3: Dolomiten Abenteuer & Ski Shuttle',
    'demo.concept1.short': '1. Luxus & Prestige',
    'demo.concept2.short': '2. Modern Tech',
    'demo.concept3.short': '3. Abenteuer & Ski',
    'demo.lang': 'Sprache',
    'demo.previewBadge': 'Interaktiver Prototyp',

    // Hero Luxury
    'luxury.hero.eyebrow': 'Exklusiver Chauffeur- & Transferservice Gröden / Dolomiten',
    'luxury.hero.title': 'Erstklassige Transfers in den Südtiroler Dolomiten',
    'luxury.hero.subtitle': 'Genießen Sie erstklassige Privattransfers von den Flughäfen München, Innsbruck, Verona, Mailand und Venedig direkt zu Ihrem Hotel in Gröden. Grödens größte Mercedes 4MATIC Flotte.',
    'luxury.hero.cta1': 'Privates Angebot berechnen',
    'luxury.hero.cta2': '25 Fahrzeuge entdecken',

    // Hero Tech
    'tech.hero.eyebrow': 'Grödens führende Mietwagenvereinigung mit Fahrer',
    'tech.hero.title': 'Smarte Flughafentransfers nach Gröden & Dolomiten',
    'tech.hero.subtitle': 'Transparente Festpreise, automatische Flugverfolgung und erfahrene einheimische Chauffeure. Buchen Sie Ihren Mercedes-Transfer in unter 60 Sekunden.',
    'tech.hero.badge': '★ 4.95/5 Bewertung (Über 1.200 Gäste) • 25 Mercedes 4MATIC Fahrzeuge',

    // Hero Adventure
    'adventure.hero.eyebrow': 'Direkter Anschluss an die Sellaronda & Dolomiti Superski',
    'adventure.hero.title': 'Ihr Dolomiten Ski- & Aktivurlaubs-Shuttle',
    'adventure.hero.subtitle': 'Leistungsstarke 4x4 Minibusse mit Skiboxen und Fahrradanhängern. Von den Flughäfen direkt zu den Bergbahnen in St. Ulrich, St. Christina und Wolkenstein.',
    'adventure.hero.cta1': 'Ski-Shuttle buchen',
    'adventure.hero.cta2': 'Sellaronda Rundfahrt',

    // Trust Metrics
    'trust.vehicles': '25 Moderne Fahrzeuge',
    'trust.vehicles.sub': 'Mercedes E-Klasse, V-Klasse & Busse',
    'trust.drivers': '18 Einheimische Fahrer',
    'trust.drivers.sub': 'Jahrzehntelange alpine Erfahrung',
    'trust.winter': '100% 4MATIC Allrad',
    'trust.winter.sub': 'Schneeketten & Passstraßen-Zulassung',
    'trust.tracking': 'Flugverfolgung Inklusive',
    'trust.tracking.sub': 'Keine Zusatzkosten bei Flugverspätungen',

    // Calculator Widget
    'calc.title': 'Sofortiges Transfer-Angebot Berechnen',
    'calc.pickup': 'Abholort (Flughafen, Bahnhof, Stadt)',
    'calc.dropoff': 'Zielort (Hotel, Ort, Pass)',
    'calc.date': 'Transferdatum',
    'calc.time': 'Abholzeit',
    'calc.pax': 'Personen',
    'calc.luggage': 'Gepäckstücke',
    'calc.skis': 'Ski- / Snowboard-Ausrüstung dabei?',
    'calc.bikes': 'Mountainbike-Transport erforderlich?',
    'calc.childSeats': 'Kindersitze / Sitzerhöhungen?',
    'calc.flightNum': 'Flug- / Zugnummer (Zur Flugverfolgung)',
    'calc.calculateBtn': 'Verfügbare Fahrzeuge & Preise anzeigen',
    'calc.estimatedTime': 'Geschätzte Fahrzeit',
    'calc.estimatedDist': 'Fahrstrecke',
    'calc.startingFrom': 'Ab',
    'calc.selectVehicle': 'Auswählen & Reservieren',
    'calc.instantQuote': 'Sofort-Angebotsübersicht',
    'calc.allInclusive': 'Alles inklusive: Autobahngebühren, Dolomitenpass-Maut, Namensschild-Empfang und Flugverfolgung.',

    // Fleet Section
    'fleet.title': 'Unser Fuhrpark von 25 Mercedes-Fahrzeugen',
    'fleet.subtitle': 'Von VIP-Limousinen über 8-Sitzer 4x4 Minibusse bis hin zu Reisebussen mit 56 Sitzplätzen.',
    'fleet.pax': 'Personen',
    'fleet.bags': 'Gepäck',
    'fleet.skis': 'Skibox / Snowboards',
    'fleet.reserve': 'Fahrzeug Anfragen',
    'fleet.viewSpecs': 'Technische Details',

    // Excursions
    'excursions.title': 'Geführte Ausflüge & Dolomiten-Rundfahrten',
    'excursions.subtitle': 'Erleben Sie das UNESCO-Weltnaturerbe Dolomiten, das romantische Venedig, Verona oder Innsbruck mit unseren ortskundigen Chauffeuren.',
    'excursions.learnMore': 'Tour anfragen',

    // Consortium
    'consortium.title': 'Grödens größte Mietwagenvereinigung mit Fahrer',
    'consortium.subtitle': 'Vor über 35 Jahren in St. Christina gegründet. 18 selbstständige Fahrer garantieren höchste Zuverlässigkeit, Sicherheit und Pünktlichkeit.',
    'consortium.hotlineTitle': 'Sofortiges lokales Taxi oder Ski-Shuttle benötigt?',
    'consortium.hotlineDesc': 'In der Hauptsaison erreichen Sie unsere Taxizentrale für schnelle Fahrten zwischen St. Ulrich, St. Christina und Wolkenstein.',

    // Modal & Dispatch
    'modal.title': 'Buchungsanfrage Abschließen',
    'modal.step1': '1. Route & Fahrzeugübersicht',
    'modal.step2': '2. Gästedaten & Bestätigung',
    'modal.name': 'Vollständiger Name',
    'modal.email': 'E-Mail-Adresse',
    'modal.phone': 'Mobilnummer (inkl. Ländervorwahl)',
    'modal.notes': 'Besondere Wünsche / Hotelname in Gröden',
    'modal.submitWhatsApp': 'Per WhatsApp senden (Sofort)',
    'modal.submitEmail': 'Offizielle E-Mail-Anfrage absenden',
    'modal.success': 'Buchungsanfrage erfolgreich erstellt!',
    'modal.successDesc': 'Unsere Buchungszentrale bestätigt Ihren Fahrer und sendet Ihnen den Bestätigungsvoucher innerhalb weniger Minuten.',

    // Footer
    'footer.company': 'Taxi Auto Sella Konsortium',
    'footer.address': 'Str. Gherdeina 7/A, I-39047 St. Christina (BZ), Gröden, Dolomiten, Italien',
    'footer.vat': 'MwSt.-Nr.: IT01707460216',
    'footer.rights': 'Alle Rechte vorbehalten. Taxi Autosella Gröden.'
  }
};
