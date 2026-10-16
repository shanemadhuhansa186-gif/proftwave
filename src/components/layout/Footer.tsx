import { Facebook, Mail, MessageCircle, Send } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { configuredSocials, siteConfig } from "../../config/site";
import { telegramCtaAttrs, trackCta } from "../../lib/cta";
import { Logo } from "../Logo";

function TikTokIcon({ size = 16 }: { size?: number; "aria-hidden"?: boolean }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M14.5 3c.4 2.6 1.9 4.4 4.5 4.7v2.5c-1.5 0-2.9-.5-4.1-1.4v6.7c0 3.4-2.7 6.2-6.2 6.2S2.5 18.9 2.5 15.4 5.2 9.2 8.7 9.2c.4 0 .8 0 1.2.1v2.7c-.4-.1-.8-.2-1.2-.2-2 0-3.6 1.6-3.6 3.6s1.6 3.6 3.6 3.6 3.6-1.6 3.6-3.6V3h2.2Z" />
    </svg>
  );
}

const iconByKey: Record<string, LucideIcon | typeof TikTokIcon> = {
  whatsapp: MessageCircle,
  facebook: Facebook,
  tiktok: TikTokIcon,
  email: Mail,
};

export function Footer() {
  const socials = configuredSocials();

  return (
    <footer className="border-t border-pw-border bg-pw-elevated pb-24 lg:pb-10">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-pw-muted">
            Sri Lankan Crypto & Forex community. Free public updates first.
            Lifetime VIP is optional membership access.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-pw-cyan">
            Explore
          </h2>
          <ul className="mt-4 grid gap-2 text-sm">
            <li>
              <Link to="/" className="text-pw-muted hover:text-pw-text">
                Home
              </Link>
            </li>
            <li>
              <Link to="/membership" className="text-pw-muted hover:text-pw-text">
                Free VIP / Membership
              </Link>
            </li>
            <li>
              <Link to="/results" className="text-pw-muted hover:text-pw-text">
                Results
              </Link>
            </li>
            <li>
              <Link to="/learn" className="text-pw-muted hover:text-pw-text">
                Learn Trading
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="text-pw-muted hover:text-pw-text">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link to="/disclaimer" className="text-pw-muted hover:text-pw-text">
                Trading risk disclaimer
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-pw-cyan">
            Contact
          </h2>
          <ul className="mt-4 grid gap-3 text-sm">
            <li>
              <a
                href={siteConfig.telegram.public.url}
                className="inline-flex items-center gap-2 text-pw-text hover:text-pw-green"
                {...telegramCtaAttrs}
                onClick={() =>
                  trackCta("footer-public-telegram", siteConfig.telegram.public.url)
                }
              >
                <Send size={16} aria-hidden="true" />
                Free Telegram — @pwavesl
              </a>
            </li>
            <li>
              <a
                href={siteConfig.telegram.forex.url}
                className="inline-flex items-center gap-2 text-pw-muted hover:text-pw-text"
                {...telegramCtaAttrs}
              >
                <Send size={16} aria-hidden="true" />
                Forex Telegram
              </a>
            </li>
            {socials.map((item) => {
              const Icon = iconByKey[item.key];
              return (
                <li key={item.key}>
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-2 text-pw-muted hover:text-pw-text"
                    {...(item.key === "email" ? {} : telegramCtaAttrs)}
                    aria-label={item.label}
                  >
                    <Icon size={16} aria-hidden={true} />
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
          {socials.length === 0 ? (
            <p className="mt-3 text-xs leading-relaxed text-pw-muted">
              WhatsApp, Facebook, TikTok, and email links appear here after they
              are added in <code>src/config/site.ts</code>.
            </p>
          ) : null}
        </div>
      </div>
      <hr className="pw-hairline mx-auto max-w-6xl" />
      <p className="mx-auto max-w-6xl px-4 py-6 text-xs leading-relaxed text-pw-muted sm:px-6">
        Trading involves risk. Losses are possible. Historical results do not
        guarantee future performance. © {new Date().getFullYear()} {siteConfig.name}.
      </p>
    </footer>
  );
}
