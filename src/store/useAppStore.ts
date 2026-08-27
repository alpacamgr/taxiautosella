import { create } from 'zustand';
import { Language, TRANSLATIONS } from '../data/translations';
import { ROUTE_MATRIX, ORIGINS, DESTINATIONS } from '../data/routes';
import { FLEET, VehicleCategory } from '../data/fleet';

export type ConceptType = 'luxury' | 'tech' | 'adventure';

export interface BookingState {
  originId: string;
  destinationId: string;
  date: string;
  time: string;
  passengers: number;
  luggage: number;
  hasSkis: boolean;
  hasBikes: boolean;
  hasChildSeats: boolean;
  flightNumber: string;
  selectedVehicleId: string;
  customNotes: string;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
}

interface AppStore {
  activeConcept: ConceptType;
  language: Language;
  booking: BookingState;
  isModalOpen: boolean;
  isSuccessView: boolean;
  activeSection: string;

  // Actions
  setConcept: (concept: ConceptType) => void;
  setLanguage: (lang: Language) => void;
  updateBooking: (fields: Partial<BookingState>) => void;
  openBookingModal: (vehicleId?: string) => void;
  closeBookingModal: () => void;
  setSuccessView: (val: boolean) => void;
  setActiveSection: (sec: string) => void;
  t: (key: string) => string;
  
  // Computed helpers
  getRouteDetails: () => { distanceKm: number; durationMinutes: number; basePrice: number };
  getSelectedVehicle: () => VehicleCategory | undefined;
  calculateVehiclePrice: (vehicleMultiplier: number) => number;
}

export const useAppStore = create<AppStore>((set, get) => ({
  activeConcept: 'luxury', // default concept
  language: 'en',
  isModalOpen: false,
  isSuccessView: false,
  activeSection: 'home',

  booking: {
    originId: 'inn', // Innsbruck Airport default
    destinationId: 'ortisei',
    date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    time: '12:00',
    passengers: 2,
    luggage: 2,
    hasSkis: true,
    hasBikes: false,
    hasChildSeats: false,
    flightNumber: 'OS 903',
    selectedVehicleId: 'van-vclass',
    customNotes: '',
    guestName: '',
    guestEmail: '',
    guestPhone: ''
  },

  setConcept: (concept) => set({ activeConcept: concept }),
  setLanguage: (lang) => set({ language: lang }),
  
  updateBooking: (fields) =>
    set((state) => ({
      booking: { ...state.booking, ...fields }
    })),

  openBookingModal: (vehicleId) =>
    set((state) => ({
      isModalOpen: true,
      isSuccessView: false,
      booking: vehicleId
        ? { ...state.booking, selectedVehicleId: vehicleId }
        : state.booking
    })),

  closeBookingModal: () => set({ isModalOpen: false, isSuccessView: false }),
  setSuccessView: (val) => set({ isSuccessView: val }),
  setActiveSection: (sec) => set({ activeSection: sec }),

  t: (key: string): string => {
    const lang = get().language;
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
    return dict[key] || TRANSLATIONS.en[key] || key;
  },

  getRouteDetails: () => {
    const { originId } = get().booking;
    const match = ROUTE_MATRIX[originId];
    if (match) return match;
    return { distanceKm: 120, durationMinutes: 90, basePrice: 240 };
  },

  getSelectedVehicle: () => {
    const { selectedVehicleId } = get().booking;
    return FLEET.find((v) => v.id === selectedVehicleId) || FLEET[1];
  },

  calculateVehiclePrice: (vehicleMultiplier: number) => {
    const { getRouteDetails, booking } = get();
    const route = getRouteDetails();
    let price = Math.round(route.basePrice * vehicleMultiplier);
    if (booking.hasSkis && vehicleMultiplier < 1.1) {
      price += 15; // Small gear surcharge if standard sedan
    }
    return price;
  }
}));
