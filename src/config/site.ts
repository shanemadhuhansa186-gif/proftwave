export type SocialKey = "whatsapp" | "facebook" | "tiktok" | "email";

export const siteConfig = {
  name: "ProfitWave",
  tagline: "CATCH THE WAVE, RIDE THE PROFIT",
  description:
    "ProfitWave is a Sri Lankan Crypto and Forex trading community offering free market updates, trading education, and Lifetime VIP membership information.",
  url: "https://profitwave.lk",
  locale: "si_LK",
  logoSrc: "/brand/logo.jpg",
  faviconSrc: "/brand/favicon.svg",
  telegram: {
    public: {
      label: "Free public Telegram",
      url: "https://t.me/pwavesl",
      cta: "මෙතැන ක්ලික් කරලා Telegram Channel එකට Join වෙන්න",
      shortCta: "Public Channel එකට Join වෙන්න",
    },
    forex: {
      label: "Forex Telegram",
      url: "https://t.me/ProfitWaveslfx",
    },
  },
  /**
   * Leave empty strings until the owner confirms the exact URL or number.
   * WhatsApp must be international digits, e.g. 9477XXXXXXX (no + or spaces).
   */
  social: {
    whatsapp: "0725542652",
    facebook: "https://web.facebook.com/profile.php?id=61588474895364",
    tiktok: "",
    email: "profiwave304@gmail.com",
  } satisfies Record<SocialKey, string>,
  membership: {
    /** Set a string such as "LKR 25,000" only after the owner confirms. */
    price: null as string | null,
    priceNote:
      "Current Lifetime VIP pricing is shared privately after you contact the team. No price is published here until it is confirmed.",
    lifetimeMeans:
      "Lifetime VIP refers to the stated membership access terms — not guaranteed trading profits.",
  },
  /** Optional form POST endpoint. Leave null until a backend or email service is connected. */
  formEndpoint: null as string | null,
  analytics: {
    enabled: false,
  },
} as const;

export const navItems = [
  { to: "/", label: "Home" },
  { to: "/membership", label: "VIP / Membership" },
  { to: "/learn", label: "Learn Trading" },
  { to: "/contact", label: "Contact" },
] as const;

export function whatsappChatUrl(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  return `https://wa.me/${digits}`;
}

export function configuredSocials() {
  const links: { key: SocialKey; label: string; href: string }[] = [];
  const { social } = siteConfig;

  if (social.whatsapp) {
    links.push({
      key: "whatsapp",
      label: "WhatsApp",
      href: whatsappChatUrl(social.whatsapp),
    });
  }
  if (social.facebook) {
    links.push({ key: "facebook", label: "Facebook", href: social.facebook });
  }
  if (social.tiktok) {
    links.push({ key: "tiktok", label: "TikTok", href: social.tiktok });
  }
  if (social.email) {
    links.push({ key: "email", label: "Email", href: `mailto:${social.email}` });
  }

  return links;
}
