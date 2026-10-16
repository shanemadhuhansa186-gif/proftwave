import { siteConfig } from "../config/site";
import { telegramCtaAttrs, trackCta } from "../lib/cta";

type Variant = "primary" | "secondary" | "nav" | "sticky";

const styles: Record<Variant, string> = {
  primary:
    "inline-flex min-h-12 items-center justify-center rounded-full bg-pw-green px-6 text-base font-semibold text-pw-bg shadow-[0_10px_30px_rgba(62,224,122,0.25)] transition hover:brightness-110",
  secondary:
    "inline-flex min-h-12 items-center justify-center rounded-full border border-pw-border bg-pw-elevated px-6 text-base font-semibold text-pw-text transition hover:border-pw-cyan",
  nav: "inline-flex min-h-10 items-center justify-center rounded-full bg-pw-green px-4 text-sm font-semibold text-pw-bg transition hover:brightness-110",
  sticky:
    "inline-flex min-h-12 w-full items-center justify-center rounded-full bg-pw-green px-5 text-sm font-semibold text-pw-bg",
};

type Props = {
  variant?: Variant;
  label?: string;
  className?: string;
};

export function TelegramCta({
  variant = "primary",
  label = siteConfig.telegram.public.cta,
  className = "",
}: Props) {
  const href = siteConfig.telegram.public.url;

  return (
    <a
      href={href}
      className={`${styles[variant]} ${className}`}
      {...telegramCtaAttrs}
      onClick={() => trackCta(label, href)}
    >
      {label}
    </a>
  );
}
