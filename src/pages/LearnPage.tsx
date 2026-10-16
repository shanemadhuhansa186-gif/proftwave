import { useState } from "react";
import { Section } from "../components/Section";
import { Seo } from "../components/Seo";
import { TelegramCta } from "../components/TelegramCta";
import { lessons } from "../config/content";

export function LearnPage() {
  const [openId, setOpenId] = useState<string | null>(lessons[0]?.id ?? null);

  return (
    <>
      <Seo
        title="Learn Trading | ProfitWave"
        description="Beginner-friendly Crypto and Forex lessons in Sinhala-English: pairs, pips, lots, risk, leverage, and trading psychology."
      />

      <Section
        eyebrow="Education"
        title="Trading ඉගෙන ගන්න — step by step"
        intro="මේ cards ownerට later articles, videos, සහ PDF guides add කරන්න modular. Each topic: simple explanation, example, සහ risk note."
      >
        <div className="grid gap-4">
          {lessons.map((lesson, index) => {
            const open = openId === lesson.id;
            return (
              <article
                key={lesson.id}
                id={lesson.id}
                className="pw-card scroll-mt-28 rounded-2xl"
              >
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-4 p-5 text-left"
                  aria-expanded={open}
                  onClick={() => setOpenId(open ? null : lesson.id)}
                >
                  <span>
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-pw-cyan">
                      Lesson {String(index + 1).padStart(2, "0")}
                    </span>
                    {lesson.thumbnailSrc && (
  <img
    src={lesson.thumbnailSrc}
    alt={lesson.title}
    className="w-full h-48 object-contain bg-gray-900 rounded-t-xl"
    loading="lazy"
  />
)}
                    <h3 className="mt-1 text-xl font-semibold">{lesson.title}</h3>
                    <p className="mt-2 text-sm text-pw-muted">{lesson.summary}</p>
                  </span>
                  <span className="text-pw-cyan" aria-hidden="true">
                    {open ? "–" : "+"}
                  </span>
                </button>
                {open ? (
                  <div className="space-y-4 border-t border-pw-border px-5 py-5 text-sm leading-relaxed text-pw-muted">
                    {lesson.thumbnailSrc ? (
                      <img
                        src={lesson.thumbnailSrc}
                        alt=""
                        className="h-40 w-full rounded-xl object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <p className="rounded-xl border border-dashed border-pw-border bg-pw-elevated px-3 py-2 text-xs">
                        Placeholder thumbnail — add a file in public/assets/education/
                        then set thumbnailSrc on this lesson in src/config/content.ts.
                      </p>
                    )}
                    <p>
                      <strong className="text-pw-text">Explanation. </strong>
                      {lesson.explanation}
                    </p>
                    <p>
                      <strong className="text-pw-text">Example. </strong>
                      {lesson.example}
                    </p>
                    {lesson.risk ? (
                      <p className="rounded-xl border border-pw-border bg-pw-elevated p-3 text-pw-text">
                        <strong>Risk. </strong>
                        {lesson.risk}
                      </p>
                    ) : null}
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </Section>

      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-6xl rounded-3xl border border-pw-border bg-pw-card px-6 py-10 text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Trading ඉගෙන ගන්න - Free Telegram Channel එකට Join වෙන්න.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pw-muted">
            Lessons මෙතනින් කියවලා, daily context එක channel එකෙන් ගන්න. New
            articles වලට id එකක් content file එකට add කරන එක විතරයි.
          </p>
          <TelegramCta className="mt-6" />
        </div>
      </section>
    </>
  );
}
