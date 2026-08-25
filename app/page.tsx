import Link from "next/link";
import { CaseCard } from "@/src/components/CaseCard";
import { ChangeTimeline } from "@/src/components/ChangeTimeline";
import { site } from "@/src/config/site";
import {
  caseCover,
  crossModelSummary,
  displayAssessment,
  isHousekeepingEntry,
  loadAllCases,
  recentChanges,
  reviewCoverage,
} from "@/src/domain/load";

/** Hand-built waveform divider — instrument-chart language, no raster art. */
function WaveDivider() {
  return (
    <div aria-hidden className="mx-auto max-w-3xl px-5 pt-14">
      <svg
        viewBox="0 0 640 40"
        className="block w-full h-10 text-line"
        preserveAspectRatio="none"
      >
        <path
          d="M0 20 H240 l6 -12 6 24 6 -30 6 34 6 -24 6 14 6 -6 H400 l6 -8 6 14 6 -10 6 6 H640"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
        />
        <circle cx="264" cy="20" r="2.5" className="text-copper" fill="currentColor" />
      </svg>
    </div>
  );
}

/** Measurement-scale strip under the hero — a quiet instrument ruler. */
function RulerStrip() {
  const ticks = Array.from({ length: 61 }, (_, i) => i * 10.65);
  return (
    <div aria-hidden className="mt-10 border-b border-faint/50 pb-px">
      <svg
        viewBox="0 0 640 14"
        className="block w-full h-4 text-faint/60"
        preserveAspectRatio="none"
      >
        {ticks.map((x, i) => (
          <line
            key={i}
            x1={x + 0.5}
            y1={i % 5 === 0 ? 2 : 8}
            x2={x + 0.5}
            y2={14}
            stroke="currentColor"
            strokeWidth={i % 5 === 0 ? 1.3 : 0.9}
            className={i === 30 ? "text-copper" : undefined}
          />
        ))}
      </svg>
    </div>
  );
}

export default function HomePage() {
  const cases = loadAllCases();
  // Epistemic changes lead the homepage feed; artwork/tooling entries stay
  // on each case's own history. At least one slot per live case, so a new
  // case's launch always shows.
  const contentOnly = cases.map((c) => ({
    record: c.record,
    history: c.history.filter((h) => !isHousekeepingEntry(h)),
  }));
  const feed = recentChanges(contentOnly, Math.max(4, cases.length));
  const housekeepingCount = cases.reduce(
    (n, c) => n + c.history.filter(isHousekeepingEntry).length,
    0,
  );

  return (
    <div>
      <section className="mx-auto max-w-6xl px-5 pt-12 sm:pt-16 pb-8">
        <p className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.22em] text-copper">
          <span aria-hidden className="inline-block w-2 h-2 border border-copper" />
          {site.subtitle}
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl tracking-tight mt-4 leading-[1.12] max-w-4xl">
          Contested events are argued at the wrong scale.
          <br className="hidden sm:block" /> We take them apart.
        </h1>
        <p className="mt-5 text-[15.5px] leading-relaxed text-ink-soft max-w-2xl">
          {site.mission}
        </p>
        <p className="mt-5 flex flex-wrap gap-x-8 gap-y-2">
          <Link
            href="/research/"
            className="font-mono text-[11px] uppercase tracking-[0.14em] text-copper underline underline-offset-4 hover:text-ink"
          >
            The research agenda — every decisive test →
          </Link>
          <Link
            href="/method/"
            className="font-mono text-[11px] uppercase tracking-[0.14em] text-copper underline underline-offset-4 hover:text-ink"
          >
            How the map works →
          </Link>
        </p>
        <RulerStrip />
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-8">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint mb-4">
          cases
        </h2>
        {cases.length === 0 ? (
          <div className="surface border border-line outline outline-1 outline-offset-4 outline-line/60 px-6 py-10 max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-copper">
              no cases published yet
            </p>
            <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">
              The first case dossiers are in preparation. A case is published
              only when its claims, evidence records, and sources meet the
              provenance standards described on the{" "}
              <Link
                href="/method/"
                className="underline underline-offset-2 decoration-copper/60 hover:text-ink"
              >
                method page
              </Link>
              — nothing ships early to fill this space.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 gap-4">
            {cases.map((c) => {
              const shown = displayAssessment(c);
              const sum = crossModelSummary(c);
              return (
                <CaseCard
                  key={c.record.id}
                  record={c.record}
                  verdict={shown?.run.caseAssessment.verdict ?? null}
                  standing={shown?.ratification.status ?? null}
                  reviewCoverage={reviewCoverage(c)}
                  check={
                    sum
                      ? {
                          models: sum.models.length,
                          concur: sum.caseUnanimousWithDisplayed,
                        }
                      : null
                  }
                  cover={caseCover(c)}
                />
              );
            })}
          </div>
        )}
      </section>

      <section className="bg-dossier text-dossier-text mt-10">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-copper-bright">
            how the map works
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-dossier-line border border-dossier-line mt-5">
            {[
              [
                "01 · Atomic claims",
                "Every case is decomposed into single propositions with clear truth conditions, arranged on a ladder from what is observable to what is claimed. Credibility is assessed per rung — evidence for a lower rung does not automatically climb.",
              ],
              [
                "02 · Symmetric evidence",
                "Evidence for and against gets the same structure and the same seriousness. What a source states is kept separate from what we infer. Every record carries its provenance: who extracted it, who checked it, and who hasn't yet.",
              ],
              [
                "03 · Decisive tests",
                "A case doesn't end in a verdict; it ends in a research agenda. Each unresolved crux is attached to the record, release, or analysis that would move it — and the assessment says in advance what would change its mind.",
              ],
              [
                "04 · Honest provenance",
                "Every case shows two outputs — what the evidence supports today, and how valuable resolving it would be. Assessments are labeled AI draft until a named human endorses them, and independent models from rival vendors re-judge each case blind; where they disagree is published, not smoothed over.",
              ],
            ].map(([title, text]) => (
              <div key={title} className="bg-dossier-soft p-6">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-copper-bright">
                  {title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-dossier-text/85">
                  {text}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-[13px] text-dossier-faint">
            Read the full{" "}
            <Link
              href="/method/"
              className="underline decoration-copper-bright/60 underline-offset-2 hover:text-dossier-text"
            >
              methodology
            </Link>
            , including exactly how AI is and is not used.
          </p>
        </div>
      </section>

      <WaveDivider />

      <section className="mx-auto max-w-6xl px-5 py-12">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint mb-6">
          recent changes · evidence &amp; assessments
        </h2>
        {feed.length === 0 ? (
          <p className="text-[14px] text-ink-soft max-w-2xl">
            No published changes yet. When cases go live, every change to a
            claim, evidence record, or assessment appears here with its date,
            reason, and the AI&apos;s role — the change history is part of the
            publication.
          </p>
        ) : (
          <ChangeTimeline entries={feed} />
        )}
        {housekeepingCount > 0 ? (
          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
            + {housekeepingCount} housekeeping changes (artwork, tooling) —
            recorded in each case&apos;s full history
          </p>
        ) : null}
      </section>
    </div>
  );
}
