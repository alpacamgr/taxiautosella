import { create } from 'zustand';

export interface InquiryContact {
  name?: string;
  phone?: string;
  email?: string;
  date?: string;
  time?: string;
  groupSize?: string;
}

interface AppStore {
  isInquiryModalOpen: boolean;
  inquiryContext: string;
  inquiryPrefill: string;
  inquiryContact: InquiryContact;
  openInquiryModal: (context: string, prefill?: string, contact?: InquiryContact) => void;
  closeInquiryModal: () => void;
}

export const useAppStore = create<AppStore>((set) => ({
  isInquiryModalOpen: false,
  inquiryContext: '',
  inquiryPrefill: '',
  inquiryContact: {},
  openInquiryModal: (context, prefill = '', contact = {}) => set({
    isInquiryModalOpen: true,
    inquiryContext: context,
    inquiryPrefill: prefill,
    inquiryContact: contact,
  }),
  closeInquiryModal: () => set({ isInquiryModalOpen: false }),
}));
