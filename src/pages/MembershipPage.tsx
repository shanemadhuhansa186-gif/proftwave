
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactForm } from "../components/ContactForm";
import { DisclaimerBanner } from "../components/DisclaimerBanner";
import { Section } from "../components/Section";
import { Seo } from "../components/Seo";
import { TelegramCta } from "../components/TelegramCta";
import { freeChannelBenefits } from "../config/content";

const adminTelegram = "https://t.me/chalangana";
const adminWhatsApp = "https://wa.me/94725542652";

const vipBenefits = [
  {
    title: "Daily 2–4 Trading Signals",
    body: "දිනපතා Cryptotrading signals ලබාගන්න. Market conditions අනුව signal ගණන වෙනස් විය හැක.",
  },
  {
    title: "Lifetime VIP Access",
    body: "එකවර ගෙවීමක් පමණයි. Monthly fee හෝ recurring membership charges කිසිවක් නැහැ.",
  },
  {
    title: "Trading Education Video Collection",
    body: "Trading strategies, market concepts සහ risk management ඉගෙනගැනීමට educational video collection එකක්.",
  },
  {
    title: "Crypto Analysis",
    body: "Crypto markets පිළිබඳ analysis, updates සහ educational content.",
  },
  {
    title: "Member Support",
    body: "VIP membership එකට අදාළ විස්තර සහ trading-related guidance ලබාගැනීමට admin සම්බන්ධ කරගන්න.",
  },
];

const comparisonRows = [
  ["Market updates", "Yes", "Yes"],
  ["VIP trading signals", "Public content", "Daily 2–4 signals"],
  ["Educational videos", "Public content", "VIP video collection"],
  ["Membership fee", "Free", "LKR 4,000(හාරදහයි) / USD 15"],
  ["Monthly fee", "None", "None"],
  
];

export function MembershipPage() {
  return (
    <>
      <Seo
        title="Lifetime VIP Membership | ProfitWave"
        description="Join ProfitWave Lifetime VIP for LKR 4,000 or USD 14. Get daily 2–4 Crypto and Forex signals, educational videos, and lifetime access with no monthly membership fees."
      />

      <Section
        eyebrow="Membership"
        title="Free Public Channel vs Lifetime VIP"
        intro="මුලින්ම අපේ Free Public Channel එකට join වෙන්න. තවත් trading signals සහ educational content අවශ්‍ය නම් Lifetime VIP membership එක ගැන දැනගන්න."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {/* FREE PUBLIC CHANNEL */}
          <article className="pw-card rounded-3xl p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pw-green">
              Start Here
            </p>

            <h3 className="mt-2 text-2xl font-semibold">
              FREE PUBLIC CHANNEL
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-pw-muted">
              Crypto සහ Forex market updates, trading education,
              සහ community announcements. කිසිම payment එකක් අවශ්‍ය නැහැ.
            </p>

            <ul className="mt-6 grid gap-3">
              {freeChannelBenefits.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-sm text-pw-text"
                >
                  <Check
                    className="mt-0.5 shrink-0 text-pw-green"
                    size={18}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <TelegramCta
              className="mt-8 w-full"
              label="Free Channel එකට Join වෙන්න"
            />
          </article>

          {/* LIFETIME VIP */}
          <article
            id="lifetime-vip"
            className="pw-card scroll-mt-28 rounded-3xl p-6 ring-2 ring-pw-green/40"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pw-green">
              One-Time Payment
            </p>

            <h3 className="mt-2 text-2xl font-semibold">
              LIFETIME VIP
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-pw-muted">
              Crypto signals, trading education සහ
              educational video collection එකක් සමඟ Lifetime VIP
              membership එක ලබාගන්න.
            </p>

            {/* MEMBERSHIP PRICE */}
            <div className="mt-6 rounded-2xl border border-pw-border bg-pw-elevated p-5">
              <p className="text-sm font-medium text-pw-muted">
                Lifetime Membership Fee
              </p>

              <p className="mt-2 text-3xl font-bold text-pw-green">
                LKR 4,000 (හාරදහයි)
              </p>

              <p className="mt-1 text-lg font-semibold">
                $15
              </p>

              <div className="mt-4 space-y-2 text-sm text-pw-muted">
                <p className="flex gap-2">
                  <Check size={17} className="shrink-0 text-pw-green" />
                  One-time payment
                </p>
                <p className="flex gap-2">
                  <Check size={17} className="shrink-0 text-pw-green" />
                  Lifetime membership access
                </p>
                <p className="flex gap-2">
                  <Check size={17} className="shrink-0 text-pw-green" />
                  No monthly fee
                </p>
                <p className="flex gap-2">
                  <Check size={17} className="shrink-0 text-pw-green" />
                  No recurring membership charges
                </p>
              </div>
            </div>

            {/* VIP BENEFITS */}
            <ul className="mt-6 grid gap-5">
              {vipBenefits.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <Check
                    className="mt-1 shrink-0 text-pw-green"
                    size={18}
                  />

                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-pw-muted">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* VIP CONTACT BUTTONS */}
            <a
              href={adminWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-pw-green px-6 font-semibold text-black transition-opacity hover:opacity-90"
            >
              WhatsApp Admin for VIP Details
            </a>

            <a
              href={adminTelegram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-pw-border px-6 font-semibold transition-colors hover:bg-pw-elevated"
            >
              Contact Admin on Telegram
            </a>
          </article>
        </div>
      </Section>

      {/* VVIP MEMBERSHIPS */}
      <Section
        eyebrow="Premium Access"
        title="VVIP & Super VVIP Memberships"
        intro="තවත් advanced membership options අවශ්‍යද? VVIP සහ Super VVIP plans වල features, prices සහ membership details adminගෙන් දැනගන්න."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <article className="pw-card rounded-3xl p-6">
            <h3 className="text-xl font-semibold">VVIP</h3>

            <p className="mt-3 text-sm leading-relaxed text-pw-muted">
              VVIP membership එකේ available features සහ price
              පිළිබඳ විස්තර ලබාගැනීමට admin අමතන්න.
            </p>

            <a
              href={`${adminWhatsApp}?text=${encodeURIComponent(
                "Hi ProfitWave Admin, I would like to know the VVIP membership price and details."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-pw-border px-5 font-semibold hover:bg-pw-elevated"
            >
              Ask About VVIP
            </a>
          </article>

          <article className="pw-card rounded-3xl p-6">
            <h3 className="text-xl font-semibold">SUPER VVIP</h3>

            <p className="mt-3 text-sm leading-relaxed text-pw-muted">
              Super VVIP membership එකේ features, access සහ
              current price දැනගැනීමට admin සමඟ සම්බන්ධ වන්න.
            </p>

            <a
              href={`${adminWhatsApp}?text=${encodeURIComponent(
                "Hi ProfitWave Admin, I would like to know the Super VVIP membership price and details."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-pw-green px-5 font-semibold text-black hover:opacity-90"
            >
              Ask About Super VVIP
            </a>
          </article>
        </div>
      </Section>

      {/* MEMBERSHIP COMPARISON */}
      <Section
        title="Free vs Lifetime VIP"
        intro="ඔබට ගැළපෙන membership option එක තෝරාගැනීමට පහත comparison එක බලන්න."
      >
        <div className="overflow-x-auto rounded-2xl border border-pw-border">
          <table className="w-full min-w-[32rem] text-left text-sm">
            <thead className="bg-pw-elevated text-pw-muted">
              <tr>
                <th className="px-4 py-3 font-medium">Feature</th>
                <th className="px-4 py-3 font-medium">
                  Free Channel
                </th>
                <th className="px-4 py-3 font-medium">
                  Lifetime VIP
                </th>
              </tr>
            </thead>

            <tbody>
              {comparisonRows.map(([feature, free, vip]) => (
                <tr
                  key={feature}
                  className="border-t border-pw-border"
                >
                  <td className="px-4 py-3">{feature}</td>
                  <td className="px-4 py-3">{free}</td>
                  <td className="px-4 py-3">{vip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6">
          <DisclaimerBanner>
            Trading involves risk. Trading signals and educational
            materials do not guarantee profits. You can lose some or
            all of your trading capital. Always use appropriate risk
            management and trade according to your financial situation.
          </DisclaimerBanner>
        </div>
      </Section>

      {/* CONTACT SECTION */}
      <Section
        id="vip-contact"
        eyebrow="Contact"
        title="Lifetime VIP Details ලබාගන්න"
        intro="Membership එක join වෙන්න කලින් details සහ payment instructions ලබාගන්න. WhatsApp හෝ Telegram හරහා admin සම්බන්ධ කරගන්න."
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <ContactForm />
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Contact ProfitWave Admin
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-pw-muted">
              Lifetime VIP fee, payment methods, VVIP සහ Super VVIP
              prices, සහ membership access ගැන වැඩි විස්තර ලබාගන්න.
            </p>

            <a
              href={`${adminWhatsApp}?text=${encodeURIComponent(
                "Hi ProfitWave Admin, I would like to know more about the Lifetime VIP membership. Please send me the payment details."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-pw-green px-5 font-semibold text-black hover:opacity-90"
            >
              WhatsApp: +94 72 554 2652
            </a>

            <a
              href={adminTelegram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-pw-border px-5 font-semibold hover:bg-pw-elevated"
            >
              Telegram: @chalangana
            </a>

            <div className="mt-6">
              <TelegramCta
                className="w-full"
                label="Free Public Channel එකට Join වෙන්න"
              />
            </div>

            <p className="mt-6 text-sm">
              <Link to="/disclaimer" className="text-pw-cyan">
                Trading risk disclaimer →
              </Link>
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
