import { useMemo, useState } from "react";
import { DisclaimerBanner } from "../components/DisclaimerBanner";
import { PlaceholderMedia } from "../components/PlaceholderMedia";
import { Section } from "../components/Section";
import { Seo } from "../components/Seo";
import { TelegramCta } from "../components/TelegramCta";
import { feedback, results, type Market } from "../config/content";

type Filter = "all" | Market | "feedback";

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "crypto", label: "Crypto" },
  { id: "forex", label: "Forex" },
  { id: "feedback", label: "Feedback" },
];

export function ResultsPage() {
  const [filter, setFilter] = useState<Filter>("all");

  const visibleResults = useMemo(() => {
    if (filter === "all") return results;
    if (filter === "feedback") return [];
    return results.filter((item) => item.market === filter);
  }, [filter]);

  const showFeedback = filter === "all" || filter === "feedback";

  return (
    <>
      <Seo
        title="Results & Community Feedback | ProfitWave"
        description="Historical ProfitWave trading examples and member feedback. Results are not a guarantee of future performance."
      />

      <Section
        eyebrow="Evidence"
        title="Results and community feedback"
        intro="Owner-supplied screenshots විතරක් මෙතනට එනවා. Fake balances, fake testimonials, හෝ invented win-rates නැහැ."
      >
        <DisclaimerBanner>
          These are historical examples for context. They do not guarantee future
          performance, and they do not imply that every member will see the same
          result.
        </DisclaimerBanner>

        <div
          className="mt-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Result categories"
        >
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={filter === item.id}
              className={`min-h-11 rounded-full px-4 text-sm font-medium ${
                filter === item.id
                  ? "bg-pw-green text-pw-bg"
                  : "border border-pw-border text-pw-muted"
              }`}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {filter !== "feedback" ? (
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {visibleResults.map((item) => (
              <article key={item.id} className="pw-card rounded-2xl p-4">
                {item.imageSrc && !item.placeholder ? (
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="h-56 w-full rounded-xl object-cover"
                    loading="lazy"
                  />
                ) : (
                  <PlaceholderMedia label={item.title} hint={item.context} />
                )}
                <div className="px-1 pt-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-pw-cyan">
                    {item.market}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
                  {item.date ? (
                    <p className="mt-1 text-sm text-pw-muted">{item.date}</p>
                  ) : (
                    <p className="mt-1 text-sm text-pw-muted">Date pending</p>
                  )}
                  <p className="mt-2 text-sm text-pw-muted">{item.context}</p>
                </div>
              </article>
            ))}
          </div>
        ) : null}

        {showFeedback ? (
          <div className="mt-12">
            <h3 className="text-2xl font-semibold">Member feedback</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {feedback.map((item) => (
                <article key={item.id} className="pw-card rounded-2xl p-4">
                  {item.imageSrc && !item.placeholder ? (
                    <img
                      src={item.imageSrc}
                      alt=""
                      className="h-48 w-full rounded-xl object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <PlaceholderMedia
                      label={item.title}
                      hint={item.quote ?? "Approved quote pending."}
                    />
                  )}
                  {item.attribution ? (
                    <p className="mt-3 text-sm text-pw-muted">{item.attribution}</p>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        ) : null}
      </Section>

      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-6xl rounded-3xl border border-pw-border bg-pw-card px-6 py-10 text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Context එක free channel එකෙන් බලන්න
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pw-muted">
            Screenshots එකක් win එකක් වගේ feel උනාට, process එක සහ risk එක
            education එකෙන් තේරුම් ගන්න.
          </p>
          <TelegramCta className="mt-6" />
        </div>
      </section>
    </>
  );
}
