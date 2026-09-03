# V3 "Alpine Light" — placeholder image prompts

Generate these, drop the files into `public/images/` at the paths below, run
`pnpm optimize:images` (creates the 640/1280/1920 WebP variants and updates
`src/data/imageManifest.json`), and they can be wired into V3.

All of these are **temporary placeholders**. Generated faces must not go live
next to real driver names; swap them for real photos before launch.

## Style prefix (put in front of every prompt)

> Editorial travel photograph, realistic, natural daylight, 35 mm lens, soft
> shadows, calm composition with clean negative space, muted alpine palette
> (white snow, slate blue sky, pine green, dark grey vehicle), no text, no
> logos, no brand badges, no watermark.

Negative prompt (if the tool supports one): `text, watermark, logo, brand
emblem, distorted hands, extra fingers, oversaturated, HDR, lens flare`.

## Images

| # | File (under `public/images/`) | Size / ratio | Used in |
|---|-------------------------------|--------------|---------|
| 1 | `hero/alpine-light-hero.jpg` | 2400×1400, 16:9-ish | Home hero background |
| 2 | `drivers/driver-01.jpg` … `driver-06.jpg` | 800×800, square | "Meet your local drivers" cards (home + members) |
| 3 | `services/meet-greet-arrivals.jpg` | 1600×1200, 4:3 | "Airport & station transfers" card, "How it works" |
| 4 | `services/local-taxi-ortisei-night.jpg` | 1600×1200, 4:3 | "Local taxi in Val Gardena" card, urgent-taxi block |
| 5 | `services/ski-luggage-loading.jpg` | 1600×1200, 4:3 | Trust strip / fleet page |
| 6 | `services/hotel-arrival.jpg` | 1600×1000, 16:10 | "Hotels, chalets & concierges" band |
| 7 | `services/family-in-van.jpg` | 1600×1200, 4:3 | Reviews section / "Relax to your door" |
| 8 | `excursions/seceda-summer.jpg` | 1600×1200, 4:3 | Excursions page, summer season |

### 1. Home hero

> A dark grey premium minivan driving along a freshly ploughed mountain road
> in Val Gardena on a bright winter morning, Sassolungo and the Dolomite peaks
> sharp in the background, blue sky, sunlit snow, road slightly curving,
> vehicle in the right third of the frame, wide open sky on the left for text.

### 2. Driver portraits (six variations)

Base prompt:

> Friendly professional private driver standing beside a dark grey minivan on
> a snowy village road in the Dolomites, dark winter jacket, relaxed genuine
> smile, looking at camera, head-and-shoulders crop, soft overcast daylight,
> shallow depth of field, mountain village blurred behind.

Vary each one:

- 01: man, around 55, short grey hair, weathered face
- 02: man, around 35, dark hair, light beard
- 03: man, around 45, glasses, knitted hat
- 04: woman, around 40, dark hair tied back
- 05: man, around 60, moustache, flat cap
- 06: man, around 30, clean-shaven, sunglasses pushed up

### 3. Meet & greet in arrivals

> Inside a small modern alpine airport arrivals hall, a driver in a dark
> jacket holds a plain white name board at chest height, a family with two ski
> bags and a child walks toward him, bright interior light, glass wall with
> snowy mountains outside, shot from the family's side, board is blank.

### 4. Local taxi at night in Ortisei

> A snowy pedestrian street in an alpine village at dusk, warm light from
> wooden shopfronts and a restaurant, a dark minivan waiting at the kerb with
> its lights on, a couple in winter coats walking toward it, soft falling snow,
> blue hour sky, cosy but calm mood.

### 5. Loading ski equipment

> Rear view of a dark grey minivan with the tailgate open on a snowy hotel
> forecourt, a driver in a dark jacket sliding a ski bag into the boot next to
> two suitcases, bright winter daylight, Dolomite peaks in the background.

### 6. Hotel arrival

> A dark grey minivan pulling up at the wooden entrance of an alpine
> chalet-style hotel, a concierge in a dark coat greeting two guests stepping
> out, snow on the roof and balconies, warm interior light through the doors,
> late-afternoon winter light.

### 7. Family relaxed in the van

> Interior of a spacious minivan seen from the front seats, a family of four
> relaxed in the leather rear seats looking out of the window at snowy
> mountains passing by, soft natural light, calm and comfortable, no faces of
> the driver visible.

### 8. Summer excursion

> Hikers on the Seceda ridge in the Dolomites in summer, green alpine meadows,
> dramatic jagged peaks, blue sky with light clouds, a small group of three
> with daypacks walking away from the camera, wide landscape shot.
