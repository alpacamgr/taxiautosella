import React from 'react';
import { useAppStore } from './store/useAppStore';
import { DemoSwitcherBar } from './components/demo/DemoSwitcherBar';
import { ConceptLuxury } from './components/concepts/ConceptLuxury';
import { ConceptTech } from './components/concepts/ConceptTech';
import { ConceptAdventure } from './components/concepts/ConceptAdventure';
import { BookingModal } from './components/booking/BookingModal';
import { StickyMobileBar } from './components/mobile/StickyMobileBar';

export const App: React.FC = () => {
  const { activeConcept } = useAppStore();

  return (
    <div className="min-h-screen flex flex-col antialiased">
      {/* Floating Interactive Demo Presentation Toolbar */}
      <DemoSwitcherBar />

      {/* Main Concept Views */}
      <main className="flex-1 pb-16 lg:pb-0">
        {activeConcept === 'luxury' && <ConceptLuxury />}
        {activeConcept === 'tech' && <ConceptTech />}
        {activeConcept === 'adventure' && <ConceptAdventure />}
      </main>

      {/* 2-Step Reservation & Confirmation Modal */}
      <BookingModal />

      {/* Sticky Mobile Conversion Bar */}
      <StickyMobileBar />
    </div>
  );
};

export default App;
