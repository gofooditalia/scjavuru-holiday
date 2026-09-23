import type { Translations } from './types';

export const it: Translations = {
  nav: {
    gallery: 'Galleria',
    booking: 'Prenota',
    location: 'Dove Siamo',
    prices: 'Prezzi',
  },
  hero: {
    badge: 'Centro Storico, Palermo',
    title: 'Il profumo di casa nel cuore di Palermo',
    subtitle:
      'Appartamento elegante con terrazza e aria condizionata nel centro storico, a due passi da Fontana Pretoria e dai Quattro Canti.',
    ctaPrimary: 'Prenota ora',
    ctaSecondary: "Scopri l'appartamento",
  },
  gallery: {
    title: "L'Appartamento",
    subtitle: 'Spazi curati nel cuore della Palermo storica',
  },
  booking: {
    title: 'Prenota il tuo soggiorno',
    subtitle:
      'Appartamento intero con 1 camera da letto e divano letto, fino a 4 ospiti. Prenota su Booking.com o contattaci direttamente per uno sconto esclusivo.',
    features: [
      'Aria condizionata',
      'Terrazza e balcone',
      'WiFi gratuito veloce',
      'Bagno privato con doccia',
      'Parcheggio privato',
      'Ascensore',
    ],
    bookOnBooking: 'Prenota su Booking.com',
  },
  location: {
    title: 'Dove Siamo',
    subtitle: 'Nel cuore del centro storico di Palermo',
    description:
      "SCJAVURU of home Dominik si trova nel centro storico di Palermo, a due passi da Fontana Pretoria e dai Quattro Canti, a pochi minuti dal Museo Archeologico e da Teatro Massimo. L'aeroporto Falcone-Borsellino dista circa 32 km.",
    address: 'Via Maccherronai — 90133 Palermo (PA)',
    openMap: 'Apri in Google Maps',
  },
  prices: {
    title: 'Prezzi',
    subtitle: 'Tariffe aggiornate su Booking.com. Prenota via email per uno sconto esclusivo.',
    bookingCard: {
      label: 'Tariffe ufficiali',
      note: 'I prezzi variano in base alla stagione e alla disponibilità. Consulta Booking.com per le tariffe aggiornate in tempo reale.',
      cta: 'Vedi i prezzi su Booking.com',
    },
    discountCard: {
      badge: 'Offerta esclusiva',
      title: 'Prenota via email, risparmi di più',
      desc: 'Se le date che desideri sono disponibili e prenoti direttamente via email, applichiamo uno sconto rispetto alle tariffe pubblicate su Booking.com.',
      cta: 'Richiedi lo sconto',
    },
    minStay: 'Soggiorno minimo: 1 notte',
  },
  form: {
    name: 'Nome',
    namePlaceholder: 'Il tuo nome',
    email: 'Email',
    emailPlaceholder: 'la-tua@email.com',
    checkin: 'Data di arrivo',
    checkout: 'Data di partenza',
    message: 'Messaggio (opzionale)',
    messagePlaceholder: 'Domande, richieste particolari…',
    submit: 'Invia richiesta',
    submitting: 'Invio in corso…',
    successTitle: 'Richiesta inviata!',
    successMsg: 'Grazie per averci scritto. Ti risponderemo entro 24 ore.',
    successReset: "Invia un'altra richiesta",
    errorMsg: 'Si è verificato un errore. Riprova o scrivici a scjavuruhosteria@libero.it.',
  },
  footer: {
    tagline: 'Appartamento nel centro storico di Palermo',
    contact: 'Contatti',
    rights: '© 2026 SCJAVURU of home Dominik. Tutti i diritti riservati.',
  },
};
