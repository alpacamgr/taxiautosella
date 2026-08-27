# Deployment & Hosting Guide — Cloudflare Pages

How to build, test, and deploy the Taxi Auto Sella multi-variant prototype to **Cloudflare Pages** (or any static hosting provider).

---

## 1. Zero Vendor Lock-in (Universal Static Output)

The build output generated in `dist/` consists of pure static HTML, CSS, JavaScript, and optimized media assets. It requires **no server-side runtime, zero edge worker shims, and zero ongoing database costs**.

It can be hosted on:
* **Cloudflare Pages** (Recommended for instant global edge CDN & zero cost)
* **Netlify / Vercel**
* **Traditional Apache / Nginx servers**
* **cPanel / DirectAdmin shared hosting**

---

## 2. Deploying to Cloudflare Pages

### Method A: Git Integration (Recommended)
1. Push your repository to GitHub: `https://github.com/alpacamgr/taxiautosella`.
2. In the [Cloudflare Dashboard](https://dash.cloudflare.com/), navigate to **Workers & Pages** ➔ **Create Application** ➔ **Pages** ➔ **Connect to Git**.
3. Select the `taxiautosella` repository.
4. Configure Build Settings:
   * **Framework Preset**: `Vite`
   * **Build Command**: `npm run build`
   * **Build Output Directory**: `dist`
   * **Node.js Version**: `18.x` or `20.x`
5. Click **Save and Deploy**. Cloudflare Pages will build the site in ~25 seconds and assign a preview URL (e.g. `taxiautosella.pages.dev`).

### Method B: Direct Upload via Wrangler CLI
```bash
npm run build
npx wrangler pages deploy dist --project-name=taxiautosella
```

---

## 3. SPA Routing & Single-Page Fallbacks

Because the project uses React Router with `HashRouter` (`#/luxury`, `#/adventure`), all URLs are natively resolved on the client side without requiring server-side URL rewriting rules. 

For standard history routing fallback, a `public/_redirects` file is included:
```text
/*    /index.html   200
```

---

## 4. Local Development & Verification Commands

```bash
# Install dependencies
npm install

# Start local hot-reload dev server
npm run dev

# Run full TypeScript & Vite production build
npm run build

# Preview production build locally
npm run preview
```
