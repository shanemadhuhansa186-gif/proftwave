import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { TelegramCta } from "../components/TelegramCta";

export function NotFoundPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <Seo
        title="Page not found | ProfitWave"
        description="That ProfitWave page does not exist. Return home or join the free Telegram channel."
      />
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pw-cyan">
        404
      </p>
      <h1 className="mt-3 text-3xl font-semibold">Page එක හම්බුණේ නැහැ</h1>
      <p className="mt-3 text-pw-muted">
        Link එක old වෙන්න පුළුවන්. Home එකට යන්න, නැත්නම් free Telegram channel
        එකට join වෙන්න.
      </p>
      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Link
          to="/"
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-pw-border px-6 font-semibold"
        >
          Home
        </Link>
        <TelegramCta />
      </div>
    </div>
  );
}
