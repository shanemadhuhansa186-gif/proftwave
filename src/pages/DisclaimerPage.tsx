import { Section } from "../components/Section";
import { Seo } from "../components/Seo";
import { TelegramCta } from "../components/TelegramCta";

export function DisclaimerPage() {
  return (
    <>
      <Seo
        title="Trading risk disclaimer | ProfitWave"
        description="Trading Crypto and Forex involves risk. ProfitWave does not guarantee profits, income, or account growth."
      />
      <Section
        eyebrow="Risk"
        title="Trading risk disclaimer"
        intro="Read this before acting on any education, market update, or VIP information."
      >
        <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-pw-muted">
          <p>
            Crypto and Forex trading can result in the loss of some or all of
            your capital. Leverage can increase losses. Nothing on this website
            or in ProfitWave channels is a promise of profit, salary, or
            risk-free returns.
          </p>
          <p>
            Content is educational and informational. It is not personal
            financial advice, tax advice, or an invitation to use a specific
            broker. You are responsible for your own decisions and for checking
            rules that apply in Sri Lanka and on your trading platform.
          </p>
          <p>
            Screenshots and testimonials, once published, are historical. They
            are not typical results and they are not a forecast.
          </p>
          <p>
            Lifetime VIP describes membership access terms stated at the time of
            purchase communication — not a guaranteed trading outcome.
          </p>
        </div>
        <div className="mt-10">
          <TelegramCta label="Free Channel එකට Join වෙන්න" />
        </div>
      </Section>
    </>
  );
}
