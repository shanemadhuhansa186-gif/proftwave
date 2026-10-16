# ProfitWave website

Sri Lankan Crypto and Forex community site. The main conversion is the free public Telegram channel: https://t.me/pwavesl

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:5173/

```bash
npm run build
npm run preview
```

## Configure before launch

Edit `src/config/site.ts`:

- WhatsApp (international digits, no `+`)
- Facebook page URL
- TikTok profile URL
- Contact email
- Lifetime VIP price (keep `null` until confirmed)
- Optional contact-form endpoint
- Optional analytics flag

Assets and results: see `ASSETS.md`.

## Hosting

This is a Vite SPA. Include a fallback to `index.html` for client routes (`/membership`, `/results`, `/learn`, …).

- Netlify: `public/_redirects`
- Vercel: `vercel.json`
