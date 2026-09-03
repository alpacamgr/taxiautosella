# Deployment & Hosting Guide — Cloudflare Workers Static Assets

How to build, test, and deploy the Taxi Auto Sella website with **Cloudflare Workers Static Assets**.

---

## 1. Zero Vendor Lock-in (Universal Static Output)

The build output generated in `dist/` consists of pure static HTML, CSS, JavaScript, and optimized media assets. It requires **no server-side runtime, zero edge worker shims, and zero ongoing database costs**.

It can be hosted on:
* **Cloudflare Workers Static Assets** (current deployment target)
* **Cloudflare Pages**
* **Netlify / Vercel**
* **Traditional Apache / Nginx servers**
* **cPanel / DirectAdmin shared hosting**

---

## 2. Deploying to Cloudflare

Authenticate Wrangler for the intended Cloudflare account, then run:

```bash
pnpm deploy
```

The command runs the TypeScript/Vite production build first and then executes `wrangler deploy`. The Worker name, asset directory, compatibility date, and SPA fallback are defined in `wrangler.json`.

Push the same commit to GitHub so the repository and deployed artifact stay aligned.

---

## 3. SPA Routing & Zero-Config Architecture

The project uses React Router with `BrowserRouter`. Cloudflare serves `dist/index.html` for unmatched asset paths through `assets.not_found_handling: "single-page-application"` in `wrangler.json`, allowing direct visits to routes such as `/fleet` or `/booking`.

V1 is the default site implementation. V2 can be opened with `?version=v2`; the selected version is retained across client-side navigation.

---

## 4. Local Development & Verification Commands

```bash
# Install dependencies
pnpm install

# Start local hot-reload dev server
pnpm dev

# Run full TypeScript & Vite production build
pnpm build

# Preview production build locally
pnpm preview
```
