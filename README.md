# Taxi Auto Sella website modernization

A single, production-focused redesign of the Taxi Auto Sella website for Val Gardena. The interface balances premium private transfers with practical local taxi, group, accessible, equipment, and excursion requests.

## Main routes

- `#/luxury` — home and quick transfer request
- `#/luxury/booking` — airport and rail prices plus a detailed request form
- `#/luxury/fleet` — cars, minivans, coaches, and specialist transport
- `#/luxury/services` — local taxi, shuttle, group, and tailored services
- `#/luxury/excursions` — Dolomites and regional day trips
- `#/luxury/faq` — booking and travel answers
- `#/luxury/members` — consortium drivers, partners, and night taxi requests

Unknown and retired prototype URLs redirect to `#/luxury`.

## Inquiry experience

The shared inquiry dialog adapts to the trigger that opened it:

- transfers request date, time, passengers, and travel details;
- excursions ask about itinerary and group needs;
- fleet requests emphasize luggage and equipment;
- urgent night taxis put direct calling first;
- general questions use a shorter free-form flow.

WhatsApp and email actions prepare a message for the visitor to send. The site does not claim a booking is confirmed until dispatch replies.

## Local development

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

The production build is emitted to `dist/`.
