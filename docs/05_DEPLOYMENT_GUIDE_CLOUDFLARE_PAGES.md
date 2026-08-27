# Cloudflare Pages Deployment & Universal Hosting Guide

Complete guide to deploying this project to **Cloudflare Pages** for the client demo presentation, plus instructions for migrating to any traditional or cloud host in the future.

---

## 1. Quick Deploy to Cloudflare Pages (Recommended)

### Method A: Direct Git Integration (Automated CI/CD)
1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete modern website with 3 switchable demo concepts"
   git push -u origin main
   ```
2. Log into the [Cloudflare Dashboard](https://dash.cloudflare.com/) and navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select the repository `alpacamgr/taxiautosella`.
4. Configure Build Settings:
   - **Framework preset**: `Vite` (or `None`)
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js version**: `20` or higher (Set environment variable `NODE_VERSION = 20` if needed).
5. Click **Save and Deploy**. Cloudflare will provide a live preview URL (e.g. `https://taxiautosella.pages.dev`).

### Method B: Direct Upload via Wrangler CLI
```bash
# 1. Install Wrangler globally or use npx
npx wrangler pages deploy dist --project-name=taxiautosella
```

---

## 2. SPA Routing Configuration on Cloudflare Pages

Cloudflare Pages natively handles Single Page Applications using the `_redirects` file in `public/_redirects`:

```text
/*    /index.html   200
```
*(This file is pre-configured in the repository `public/_redirects`)*.

---

## 3. Future Migration to Other Hosting Providers

Because this project builds to standard, universal static files in `dist/`, it has **zero proprietary lock-in** and can be hosted anywhere:

### Traditional Web Hosting (Apache / Nginx / cPanel / Digiem / Hetzner / Aruba):
1. Run `npm run build`.
2. Upload all files from the `dist/` directory directly to your server's `public_html` / `www` directory via SFTP/FTP.
3. For Apache servers, ensure an `.htaccess` file exists for routing:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

### Vercel / Netlify:
- Connect the Git repo.
- Set build command to `npm run build` and publish directory to `dist`.

### Docker:
A simple Nginx Alpine container can serve the `dist/` directory with under 20MB memory footprint.

---

## 4. Connecting Future Production Features

When transitioning from the presentation demo to production:
1. **WhatsApp Instant Dispatch**: Currently pre-wired to `+39 0471 790033` with automated trip summary formatting.
2. **Email Reservation Dispatch**: Ready to connect to EmailJS, Resend, or a PHP/Node mailer.
3. **Payment Processing**: Can seamlessly plug into Stripe Elements or PayPal SDK for booking deposits.
4. **Google Maps / Places API**: Ready to replace preset airport dropdowns with live address auto-complete if desired.
