import * as fs from 'fs';
import * as path from 'path';

const basePath = 'e:/AutoSella/src/variants/adventure/pages';

const pages = {
  'AdventureHome.tsx': `import React from 'react';

export const AdventureHome: React.FC = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-12">
      <section className="text-center py-16 bg-[#181B22] text-[#FBF9F5] rounded-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#D6A56E]">The Warm Alpine Gateway</h1>
        <p className="text-xl max-w-2xl mx-auto text-opacity-80">
          Planned Airport Transfers & 1-Tap Urgent Valley Taxi Dispatch.
          Between luxury and everyday utility in the Dolomites.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white text-[#181B22] p-8 rounded-2xl shadow-sm border border-[#1B3B2B]/10">
          <h2 className="text-2xl font-bold mb-4 text-[#1B3B2B]">Track 1: Planned Airport Transfers</h2>
          <p className="mb-4">Instant quote calculator for Innsbruck, Munich, Verona, Venice, Milan, Bolzano.</p>
          <button className="bg-[#D97706] text-white px-6 py-3 rounded-lg font-bold">Calculate Quote</button>
        </div>
        <div className="bg-white text-[#181B22] p-8 rounded-2xl shadow-sm border border-[#1B3B2B]/10">
          <h2 className="text-2xl font-bold mb-4 text-[#1B3B2B]">Track 2: 1-Tap Urgent Valley Taxi Dispatch</h2>
          <p className="mb-4">Immediate rides between Ortisei, Santa Cristina, Selva, ski lifts, restaurants, and hotels.</p>
          <button className="bg-[#181B22] text-[#D6A56E] px-6 py-3 rounded-lg font-bold">Request Taxi Now</button>
        </div>
      </div>
    </div>
  );
};
`,
  'AdventureBookingPage.tsx': `import React from 'react';

export const AdventureBookingPage: React.FC = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-[#181B22]">Prices & Booking</h1>
      <div className="bg-white p-8 rounded-2xl shadow-sm">
        <h2 className="text-2xl font-bold mb-6 text-[#1B3B2B]">Online Booking Form</h2>
        <p className="mb-8">Complete fixed price tables for all 9 airports, train stations, and local valley trips.</p>
        
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Pickup Location" className="p-3 border rounded-lg w-full bg-[#FBF9F5]" />
            <input type="text" placeholder="Dropoff Location" className="p-3 border rounded-lg w-full bg-[#FBF9F5]" />
          </div>
          <button type="button" className="bg-[#D97706] text-white px-6 py-3 rounded-lg font-bold w-full">View Prices & Book</button>
        </form>
      </div>
    </div>
  );
};
`,
  'AdventureFleetPage.tsx': `import React from 'react';

export const AdventureFleetPage: React.FC = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-[#181B22]">Our Vehicles</h1>
      <p className="mb-8 text-lg">All 25 vehicles in our modern alpine fleet.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {['Mercedes E-Class', 'S-Class', 'GLS 4Matic', 'V-Class VIP', 'Vito 8-pax', 'Sprinter Coach', 'Grand Coach 56-pax', 'Disabled Van with wheelchair lift', 'Ski/Bike Trailer', 'Film Production Support'].map((vehicle) => (
          <div key={vehicle} className="bg-white p-6 rounded-2xl shadow-sm border border-[#1B3B2B]/10">
            <h3 className="text-xl font-bold mb-2 text-[#1B3B2B]">{vehicle}</h3>
            <p className="text-sm text-gray-600">Reliable transport for every need in the valley.</p>
          </div>
        ))}
      </div>
    </div>
  );
};
`,
  'AdventureServicesPage.tsx': `import React from 'react';

export const AdventureServicesPage: React.FC = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-[#181B22]">Taxi & Bus Services</h1>
      <p className="mb-8 text-lg">Complete services for the Dolomites.</p>
      
      <ul className="space-y-4">
        {['Valley taxi', 'Ski slope shuttles', 'Airport transfers', 'Casino trips', 'Disabled transport', 'School bus', 'Pets', 'Courier luggage', '10-bike trailer'].map((service) => (
          <li key={service} className="bg-white p-6 rounded-xl shadow-sm flex items-center gap-4 text-[#1B3B2B] font-bold">
            <div className="w-2 h-2 bg-[#D6A56E] rounded-full"></div>
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
};
`,
  'AdventureToursPage.tsx': `import React from 'react';

export const AdventureToursPage: React.FC = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-[#181B22]">Tours & Passes</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {['Sella Ronda 4-passes', 'Venice', 'Verona', 'Innsbruck', 'Cortina', 'Bolzano/Merano', 'Mountain hut dinners'].map((tour) => (
          <div key={tour} className="bg-[#1B3B2B] text-[#FBF9F5] p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-2 text-[#E2B17A]">{tour}</h3>
            <p className="text-opacity-80">Experience the beauty of the region with our guided tours and trips.</p>
          </div>
        ))}
      </div>
    </div>
  );
};
`,
  'AdventureFaqPage.tsx': `import React from 'react';

export const AdventureFaqPage: React.FC = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-[#181B22]">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {[
          { q: 'How do I book a valley taxi?', a: 'You can use our 1-Tap Urgent Valley Taxi Dispatch or call us directly.' },
          { q: 'What airports do you service?', a: 'We offer fixed price transfers to Innsbruck, Munich, Verona, Venice, Milan, and Bolzano.' },
          { q: 'Can you accommodate skis or bikes?', a: 'Yes, we have Ski/Bike Trailers available for all transfers.' },
        ].map((faq, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold mb-2 text-[#1B3B2B]">{faq.q}</h3>
            <p className="text-gray-700">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
`,
  'AdventureMembersPage.tsx': `import React from 'react';

export const AdventureMembersPage: React.FC = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-[#181B22]">Consortium & Sponsors</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-[#1B3B2B]">All 18 Driver Members</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 18 }).map((_, i) => (
            <div key={i} className="bg-white p-4 rounded-xl text-center shadow-sm">
              <div className="w-12 h-12 bg-[#D6A56E]/20 rounded-full mx-auto mb-2 flex items-center justify-center text-[#D6A56E] font-bold">
                {i + 1}
              </div>
              <p className="font-bold text-[#181B22]">Member {i + 1}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-[#1B3B2B]">Official Sponsors</h2>
        <div className="bg-[#181B22] p-8 rounded-2xl text-[#FBF9F5]">
          <p className="text-lg">Proudly sponsored by leading brands in the Dolomites region.</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 text-[#1B3B2B]">Val Gardena Nightlife & Restaurant Partners</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-[#D97706]">
              <h3 className="font-bold text-lg mb-2">Partner {i}</h3>
              <p className="text-sm text-gray-600">Exclusive drop-off zones and priority bookings.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
`
};

Object.entries(pages).forEach(([filename, content]) => {
  const filepath = path.join(basePath, filename);
  fs.writeFileSync(filepath, content, 'utf8');
  console.log(\`Wrote \${filepath}\`);
});
