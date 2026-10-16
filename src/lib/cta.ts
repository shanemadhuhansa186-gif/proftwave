import { siteConfig } from "../config/site";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackCta(label: string, href?: string) {
  window.dispatchEvent(
    new CustomEvent("pw:cta", {
      detail: { label, href, at: new Date().toISOString() },
    }),
  );

  if (!siteConfig.analytics.enabled) return;
  if (typeof window.gtag === "function") {
    window.gtag("event", "cta_click", { event_label: label, href });
  }
}

export const telegramCtaAttrs = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
