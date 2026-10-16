
import {
  Bitcoin,
  GraduationCap,
  LineChart,
  Shield,
} from "lucide-react";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

import { ChartBackdrop } from "../components/ChartBackdrop";
import { DisclaimerBanner } from "../components/DisclaimerBanner";
import { FaqList } from "../components/FaqList";

import { Section } from "../components/Section";
import { Seo } from "../components/Seo";
import { TelegramCta } from "../components/TelegramCta";
import { about} from "../config/content";
import { siteConfig } from "../config/site";
import cryptoResult1 from "../assets/1.jpg";
import cryptoResult2 from "../assets/2.jpg";
import cryptoResult3 from "../assets/3.jpg";
import cryptoResult4 from "../assets/4.jpg";
import cryptoResult5 from "../assets/5.jpg";
import cryptoResult6 from "../assets/6.jpg";

export function HomePage() {
   const cryptoResultImages = [ cryptoResult1,
    cryptoResult2,
    cryptoResult3,
    cryptoResult4,
    cryptoResult5,
    cryptoResult6,
    ];

  return (
    <>
      <Seo
        title="ProfitWave - ලංකාවේ අඩුම මිලට Lifetime VIP Trading Signals!."
        description={siteConfig.description}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pw-hero-glow">
        <ChartBackdrop />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pt-16">
          <div>
            <img
              src={siteConfig.logoSrc}
              alt="ProfitWave"
              width={440}
              height={440}
              className="h-36 w-36 rounded-3xl object-cover object-[center_32%] ring-1 ring-pw-border sm:h-44 sm:w-44"
            />

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-pw-cyan">
              Sri Lankan Crypto & Forex community
            </p>

            <h1 className="mt-3 max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-3xl">
              ලංකාවේ අඩුම මිලට Lifetime VIP Trading Signals සමඟ Trading ඉගෙන ගන්න.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-pw-muted sm:text-lg">
              Free Crypto සහ Forex market updates, Daily Trading Results සහ
              Member Feedback බලන්න අපගේ Public Telegram Channel එකට join වෙන්න.
              Trading ගැන ඉගෙන ගන්නත්, වැඩිදුර විස්තර දැනගන්නත් අපගේ Official Admin{" "}
              <a
                href="https://t.me/chalangana"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-pw-cyan hover:underline"
              >
                @chalangana
              </a>{" "}
              Direct Contact කරන්න. Lifetime VIP Signals ගැන දැනගන්න පහළින් තියෙනවා.
            </p>

            {/* Main CTA Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TelegramCta />

              <Link
                to="/membership#lifetime-vip"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-pw-border bg-pw-elevated px-6 text-base font-semibold transition hover:opacity-80"
              >
                Lifetime VIP ගැන දැනගන්න
              </Link>
            </div>

            {/* Telegram and WhatsApp Contact Buttons */}
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://t.me/pwavesl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join ProfitWave on Telegram"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#229ED9] px-6 font-semibold text-white transition hover:opacity-90"
              >
                <FaTelegram size={22} />
                Join Telegram
              </a>

              <a
                href="https://wa.me/94725542652"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact ProfitWave on WhatsApp"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 font-semibold text-white transition hover:opacity-90"
              >
                <FaWhatsapp size={22} />
                Contact on WhatsApp
              </a>
            </div>

            <p className="mt-3 text-sm text-pw-muted">
              WhatsApp: +94 72 554 2652
            </p>
          </div>

          {/* Hero Right Side */}
          <div className="space-y-4">
            <img
              src={siteConfig.logoSrc}
              alt="ProfitWave — Catch the wave, ride the profit"
              width={720}
              height={720}
              className="w-full rounded-3xl bg-black object-contain ring-1 ring-pw-border"
            />

            <div className="pw-card rounded-3xl p-6">
              <p className="text-sm font-medium text-pw-green">
                Primary next step
              </p>

              <p className="mt-2 text-2xl font-semibold">
                Free channel එකට join වෙන්න
              </p>

              <p className="mt-3 text-sm leading-relaxed text-pw-muted">
                VIP membership එකට කලින්, public channel එකෙන්
                Members Feedback සහ Results බලන්න. Signals copy කරලා
                profit expect කරන එකක් නෙවෙයි - learning space එකක්.
              </p>

              <TelegramCta
                className="mt-6 w-full"
                label="Trading අදම ඉගෙන ගන්න"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Markets Section */}
      <Section
        eyebrow="Markets"
        title="Crypto සහ Forex - එක community එකකින්"
        intro="ඔයා beginner උනත්, already charts බලන කෙනෙක් උනත්, basics ඉඳන් clear language එකකින් explain කරනවා."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <article className="pw-card rounded-2xl p-6">
            <Bitcoin className="text-pw-cyan" />

            <h3 className="mt-4 text-xl font-semibold">Crypto</h3>

            <p className="mt-2 text-sm leading-relaxed text-pw-muted">
              Bitcoin සහ major digital assets වටා market updates,
              vocabulary, සහ risk-aware discussion. 24/7 volatility
              එක respect කරලා learn කරනවා.
            </p>
          </article>

          <article className="pw-card rounded-2xl p-6">
            <LineChart className="text-pw-green" />

            <h3 className="mt-4 text-xl font-semibold">Forex</h3>

            <p className="mt-2 text-sm leading-relaxed text-pw-muted">
              Currency pairs, sessions, සහ Forex-specific education.
              Dedicated Forex Telegram link එක footer එකේ තියෙනවා.
            </p>
          </article>
        </div>
      </Section>

      {/* Beginners Section */}
      <Section
        eyebrow="Beginners"
        title="Trading අලුත් නම්, මෙතනින් start කරන්න"
        intro="Charts බය වෙන්න එපා. First: words තේරුම් ගන්න, risk එක cap කරන්න, ඊට පස්සේ tools."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          <article className="rounded-2xl border border-pw-border bg-pw-elevated p-5">
            <GraduationCap className="text-pw-cyan" />

            <h3 className="mt-3 font-semibold">
              Language එක ඉගෙන ගන්න
            </h3>

            <p className="mt-2 text-sm text-pw-muted">
              Pips, lots, SL/TP වගේ terms Learn Trading page එකේ
              Sinhala-English mix එකකින් තියෙනවා.
            </p>
          </article>

          <article className="rounded-2xl border border-pw-border bg-pw-elevated p-5">
            <Shield className="text-pw-green" />

            <h3 className="mt-3 font-semibold">
              Risk මුලින්ම
            </h3>

            <p className="mt-2 text-sm text-pw-muted">
              Lose වෙන්න පුළුවන් money එකකින් විතරක් practice කරන්න.
              Guaranteed income claims ignore කරන්න.
            </p>
          </article>

          <article className="rounded-2xl border border-pw-border bg-pw-elevated p-5">
            <LineChart className="text-pw-cyan" />

            <h3 className="mt-3 font-semibold">
              Community එකට join වෙන්න
            </h3>

            <p className="mt-2 text-sm text-pw-muted">
              Free channel එකෙන් updates බලන්න.
            </p>
          </article>
        </div>
      </Section>

      {/* Results Section */}
      <Section
        id="results-preview"
        eyebrow="Results"
        title="Verified results"
        intro="සැබෑ Crypto trading screenshots දිනය සහ අදාළ තොරතුරු සමඟ බලන්න."
      >
        <div className="grid gap-4 md:grid-cols-3">
  {cryptoResultImages.map((image, index) => (
    <div
      key={image}
      className="overflow-hidden rounded-2xl border border-pw-border bg-pw-elevated"
    >
      <img
        src={image}
        alt={`Crypto trading result ${index + 1}`}
        className="h-auto w-full object-contain"
      />
    </div>
  ))}
</div>

        <DisclaimerBanner>
          Historical examples only. Past results do not guarantee future
          performance, සහ every member එකම outcome එකක් ලබන්නේ නැහැ.
        </DisclaimerBanner>

        <div className="mt-6">
          <Link
            to="/results"
            className="font-medium text-pw-cyan"
          >
            Results page එකට යන්න →
          </Link>
        </div>
      </Section>


      {/* About Section */}
      <Section id="about" eyebrow="About" title={about.title}>
        <div className="grid gap-4">
          {about.body.map((paragraph) => (
            <p
              key={paragraph}
              className="max-w-3xl text-base leading-relaxed text-pw-muted"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section eyebrow="FAQ" title="අහන ප්‍රශ්න">
        <FaqList />
      </Section>

      {/* Bottom CTA */}
      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-6xl rounded-3xl border border-pw-border bg-pw-card px-6 py-10 text-center">
          <h2 className="text-3xl font-semibold">
            Free channel එකෙන් start කරන්න
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-pw-muted">
            Lifetime VIP පැකේජය ගැන වැඩි විස්තර දැනගන්න අපගේ  Public Telegram Channel එකට Join වෙන්න.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <TelegramCta />

            <a
              href="https://wa.me/94725542652"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 font-semibold text-white transition hover:opacity-90"
            >
              <FaWhatsapp size={22} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
