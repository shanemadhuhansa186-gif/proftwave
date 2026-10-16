import { siteConfig } from "../../config/site";
import { TelegramCta } from "../TelegramCta";

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-pw-border bg-pw-bg/95 p-3 backdrop-blur-md lg:hidden">
      <TelegramCta
        variant="sticky"
        label={siteConfig.telegram.public.shortCta}
      />
    </div>
  );
}
