# ProfitWave assets and content

## Brand

- Primary logo: `public/brand/logo.jpg` (owner-supplied artwork)
- Favicon: `public/brand/favicon.svg`
- Open Graph image: `/brand/logo.jpg`

## Folders for future uploads

| Use | Put files here | Then update |
| --- | --- | --- |
| Hero extras | `public/assets/hero/` | Optional: reference from `src/pages/HomePage.tsx` |
| Crypto results | `public/assets/results/crypto/` | `src/config/content.ts` → `results` (`market: "crypto"`, `imageSrc`, `placeholder: false`, `date`) |
| Forex results | `public/assets/results/forex/` | `src/config/content.ts` → `results` |
| Member feedback | `public/assets/testimonials/` | `src/config/content.ts` → `feedback` |
| Lesson thumbnails | `public/assets/education/` | `src/config/content.ts` → `lessons[].thumbnailSrc` |

Example result entry after you add `public/assets/results/crypto/btc-setup.jpg`:

```ts
{
  id: "crypto-btc-2026-10-01",
  market: "crypto",
  title: "BTC setup (verified screenshot)",
  date: "1 Oct 2026",
  context: "Short context. Historical example only.",
  imageSrc: "/assets/results/crypto/btc-setup.jpg",
  placeholder: false,
}
```

Do not invent screenshots, quotes, balances, or win rates.

## Site configuration

Edit `src/config/site.ts` for:

- Telegram URLs
- WhatsApp (international digits only, no `+`)
- Facebook, TikTok, email
- Membership price (`null` until confirmed)
- Optional `formEndpoint` for the contact form
- Optional analytics flag

New lessons: append an object to `lessons` in `src/config/content.ts`.
