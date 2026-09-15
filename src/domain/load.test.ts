import { describe, expect, it } from "vitest";
import { seatKey } from "../../scripts/lib/seat-key.mjs";
import {
  extractClaimRefs,
  extractPlateRefs,
  parseArticle,
  parseInlines,
} from "./article";
import {
  historyNewestFirst,
  lastContentUpdate,
  crossModelSummary,
  RATIFICATION_MIN_PANEL,
  ratification,
  latestCheckPerModel,
  displayAssessment,
  liveClaims,
  loadAllCases,
  loadSiteImages,
  recentChanges,
  sourceAdmissionErrors,
} from "./load";
import {
  ClaimSchema,
  ConjectureSchema,
  EvidenceSchema,
  ImageSchema,
} from "./schema";

describe("content loading", () => {
  it("zero cases is a valid state — the loader returns an empty atlas, never throws", () => {
    // The site bootstraps with no published cases; the UI renders a
    // deliberate empty state. This must never be an error condition.
    const cases = loadAllCases();
    expect(Array.isArray(cases)).toBe(true);
  });

  it("a site with no image manifest has no site images", () => {
    expect(loadSiteImages()).toEqual([]);
  });

  it("every published case passes full integrity checks", () => {
    // Vacuous at zero cases; bites the moment the first case ships.
    for (const c of loadAllCases()) {
      // Every claim referenced by the article resolves to a live claim.
      for (const id of extractClaimRefs(c.overviewMarkdown)) {
        expect(liveClaims(c).some((cl) => cl.id === id)).toBe(true);
      }
      // Every plate embedded by the article is a real, non-generated image.
      const plates = c.images.filter((i) => i.role === "plate");
      for (const p of plates) {
        expect(p.source).not.toBe("generated");
      }
      const plateIds = new Set(plates.map((p) => p.id));
      for (const ref of extractPlateRefs(c.overviewMarkdown)) {
        expect(plateIds.has(ref)).toBe(true);
      }
    }
  });

  it("every live case surfaces its latest change in the homepage feed", () => {
    // Regression guard (upstream): with a date-only sort and a hard cap, a
    // burst of same-day entries on one case could evict another case's
    // launch entry. Vacuous at zero cases.
    const cases = loadAllCases();
    // Same sizing rule as the homepage: at least one slot per live case.
    const feed = recentChanges(cases, Math.max(4, cases.length));
    for (const c of cases) {
      const latest = historyNewestFirst(c.history)[0];
      expect(latest).toBeDefined();
      expect(
        feed.some(
          (e) => e.caseSlug === c.record.slug && e.change === latest?.change,
        ),
      ).toBe(true);
    }
    // Newest-first display order.
    for (let i = 1; i < feed.length; i++) {
      expect(feed[i - 1]!.date >= feed[i]!.date).toBe(true);
    }
  });
});

describe("recent-changes feed", () => {
  const entry = (date: string, change: string) => ({
    date,
    change,
    reason: "r",
    actor: "a",
    aiAssisted: false,
  });

  it("a busy case cannot evict another case's latest change", () => {
    const busy = {
      record: { title: "Busy", slug: "busy" },
      history: [
        entry("2026-08-22", "busy-1"),
        entry("2026-08-22", "busy-2"),
        entry("2026-08-22", "busy-3"),
        entry("2026-08-22", "busy-4"),
      ],
    };
    const fresh = {
      record: { title: "Fresh", slug: "fresh" },
      history: [entry("2026-08-22", "fresh launch")],
    };
    const feed = recentChanges([busy, fresh], 3);
    expect(feed.length).toBe(3);
    expect(feed.some((e) => e.change === "fresh launch")).toBe(true);
    // The busy case's own most recent entry (last appended) is there too.
    expect(feed.some((e) => e.change === "busy-4")).toBe(true);
  });

  it("lastContentUpdate uses newest content history, not lastReviewed", () => {
    const loaded = {
      record: { lastReviewed: "2026-08-22" },
      history: [
        entry("2026-08-22", "launch"),
        {
          ...entry("2026-08-23", "cover art regenerated"),
          kind: "housekeeping" as const,
        },
        { ...entry("2026-08-24", "inbox intake"), kind: "content" as const },
      ],
    };
    expect(lastContentUpdate(loaded)).toBe("2026-08-24");
  });

  it("lastContentUpdate ignores housekeeping and falls back to lastReviewed", () => {
    const loaded = {
      record: { lastReviewed: "2026-08-22" },
      history: [
        {
          ...entry("2026-08-23", "cover art regenerated"),
          kind: "housekeeping" as const,
        },
      ],
    };
    expect(lastContentUpdate(loaded)).toBe("2026-08-22");
  });

  it("orders same-date history entries newest-appended-first", () => {
    const sorted = historyNewestFirst([
      entry("2026-08-01", "old"),
      entry("2026-08-22", "first that day"),
      entry("2026-08-22", "second that day"),
    ]);
    expect(sorted.map((e) => e.change)).toEqual([
      "second that day",
      "first that day",
      "old",
    ]);
  });
});

describe("source admission rule", () => {
  const src = (id: string, background = false) => ({ id, background });
  const anchorClaim = (sourceId: string) => ({
    sourceAnchor: { sourceId, locator: "p. 1" },
  });

  it("rejects an uncited source without the background flag", () => {
    const errors = sourceAdmissionErrors([src("SRC-A")], [], []);
    expect(errors).toHaveLength(1);
    expect(errors[0]).toContain("SRC-A");
    expect(errors[0]).toContain("background: true");
  });

  it("accepts an uncited source marked background", () => {
    expect(sourceAdmissionErrors([src("SRC-A", true)], [], [])).toEqual([]);
  });

  it("accepts a source cited by an evidence record", () => {
    expect(
      sourceAdmissionErrors([src("SRC-A")], [{ sourceId: "SRC-A" }], []),
    ).toEqual([]);
  });

  it("accepts a source anchoring a claim", () => {
    expect(
      sourceAdmissionErrors([src("SRC-A")], [], [anchorClaim("SRC-A")]),
    ).toEqual([]);
  });

  it("rejects a cited source still mislabeled background", () => {
    const errors = sourceAdmissionErrors(
      [src("SRC-A", true)],
      [{ sourceId: "SRC-A" }],
      [],
    );
    expect(errors).toHaveLength(1);
    expect(errors[0]).toContain("remove background: true");
  });

  it("holds across all live content — the ledger carries no weightless sources", () => {
    for (const c of loadAllCases()) {
      expect(
        sourceAdmissionErrors(c.sources, c.evidence, c.claims),
      ).toEqual([]);
    }
  });
});

describe("schema rules", () => {
  const baseClaim = {
    id: "GEO-C999",
    tier: "featured",
    statement: "A test statement long enough to pass.",
    plainLanguage: "A plain language gloss long enough.",
    theme: "tool-marks",
    rung: "observation",
    claimType: "observation",
    importance: "supporting",
    reviewState: "ai_extracted",
    origin: {
      ref: "test",
      extractedBy: "test",
      runId: "test-run",
      date: "2026-01-01",
    },
    credibility: "unresolved",
    credibilitySummary: "none",
    diagnosticity: "low",
    diagnosticitySummary: "none",
    strongestObjection: "none",
  };

  const baseCatalogClaim = {
    id: "GEO-C998",
    tier: "catalog",
    statement: "A lightweight catalog statement long enough to pass.",
    theme: "tool-marks",
    rung: "observation",
    reviewState: "ai_extracted",
    origin: {
      ref: "geo catalog T-999",
      extractedBy: "test",
      runId: "test-run",
      date: "2026-01-01",
    },
    sourceAnchor: { locator: "Fóti Ch 1, pp ~14–17" },
  };

  it("rejected claims require a rejectionReason (tombstone rule)", () => {
    expect(() =>
      ClaimSchema.parse({ ...baseClaim, reviewState: "rejected" }),
    ).toThrow();
    expect(() =>
      ClaimSchema.parse({
        ...baseClaim,
        reviewState: "rejected",
        rejectionReason: "because",
      }),
    ).not.toThrow();
    // The tombstone rule applies to catalog-tier claims too.
    expect(() =>
      ClaimSchema.parse({ ...baseCatalogClaim, reviewState: "rejected" }),
    ).toThrow();
  });

  it("catalog claims validate without featured-level richness", () => {
    expect(() => ClaimSchema.parse(baseCatalogClaim)).not.toThrow();
    const parsed = ClaimSchema.parse(baseCatalogClaim);
    expect(parsed.tier).toBe("catalog");
  });

  it("catalog claims require a source anchor", () => {
    const { sourceAnchor: _drop, ...unanchored } = baseCatalogClaim;
    void _drop;
    expect(() => ClaimSchema.parse(unanchored)).toThrow();
    expect(() =>
      ClaimSchema.parse({ ...baseCatalogClaim, sourceAnchor: { locator: "" } }),
    ).toThrow();
  });

  it("promotion is a one-field edit that then demands the full workup", () => {
    // Flipping tier alone fails loudly: the validator lists the editorial
    // fields still missing. That failure is the promotion checklist.
    expect(() =>
      ClaimSchema.parse({ ...baseCatalogClaim, tier: "featured" }),
    ).toThrow();
    // Supplying the featured fields completes the promotion.
    expect(() =>
      ClaimSchema.parse({
        ...baseCatalogClaim,
        tier: "featured",
        plainLanguage: "A plain language gloss long enough.",
        claimType: "observation",
        importance: "supporting",
        credibility: "unresolved",
        credibilitySummary: "none yet",
        diagnosticity: "low",
        diagnosticitySummary: "none yet",
        strongestObjection: "none recorded yet",
      }),
    ).not.toThrow();
  });

  it("featured claims still require the full editorial fields", () => {
    const { plainLanguage: _pl, ...missingGloss } = baseClaim;
    void _pl;
    expect(() => ClaimSchema.parse(missingGloss)).toThrow();
  });

  it("HARD RULE: AI-generated images can never be plates", () => {
    const base = {
      id: "IMG-TEST-X",
      file: "/images/site/hero.jpg",
      alt: "a test image alt text",
      license: "test",
      credit: "test credit",
      prompt: "p",
      styleVersion: "style-v1",
      model: "m",
      plateNumber: 1,
      depicts: "something",
      provenance: {
        photographer: "someone",
        sourceUrl: "https://example.com",
      },
    };
    expect(() =>
      ImageSchema.parse({ ...base, role: "plate", source: "generated" }),
    ).toThrow(/never be plates/);
    expect(() =>
      ImageSchema.parse({ ...base, role: "plate", source: "commons" }),
    ).not.toThrow();
    expect(() =>
      ImageSchema.parse({ ...base, role: "cover", source: "generated" }),
    ).not.toThrow();
  });

  it("images without license or credit fail validation", () => {
    expect(() =>
      ImageSchema.parse({
        id: "IMG-TEST-Y",
        role: "cover",
        file: "/images/site/hero.jpg",
        alt: "some alt text here",
        source: "commons",
        license: "",
        credit: "",
      }),
    ).toThrow();
  });

  it("evidence requires direction and at least one claim", () => {
    expect(() =>
      EvidenceSchema.parse({
        id: "GEO-E999",
        title: "t",
        claimIds: [],
        sourceId: "SRC-X",
        direction: "supports",
        strength: "weak",
        sourceStatement: "s",
        reviewState: "ai_extracted",
        origin: baseClaim.origin,
      }),
    ).toThrow();
  });
});

describe("article parser", () => {
  it("parses claim refs, links, and emphasis", () => {
    const inlines = parseInlines(
      "Before [the claim]{claim=GEO-C001} and *em* and **strong** and [a link](https://example.com).",
    );
    expect(inlines).toContainEqual({
      kind: "claimRef",
      text: "the claim",
      claimId: "GEO-C001",
    });
    expect(inlines).toContainEqual({ kind: "em", text: "em" });
    expect(inlines).toContainEqual({ kind: "strong", text: "strong" });
    expect(inlines).toContainEqual({
      kind: "link",
      text: "a link",
      href: "https://example.com",
    });
  });

  it("rejects unsupported heading levels", () => {
    expect(() => parseArticle("# Top level")).toThrow();
  });
});

describe("ratification governance (stage 3)", () => {
  const mkDraft = (
    runId: string,
    date: string,
    verdict = "unresolved",
    loadBearing: string[] = [],
    claimVerdicts: Record<string, string> = {},
  ) => ({
    runId,
    model: "house/test",
    date,
    promptVersion: "t",
    humanReviewed: false,
    role: "draft" as const,
    caseAssessment: {
      verdict,
      loadBearing,
      weakestLinks: [],
      synthesis: "x".repeat(120),
    },
    claimAssessments: Object.entries(claimVerdicts).map(
      ([claimId, verdict]) => ({
        claimId,
        verdict,
        reasoning: "test reasoning",
        confidence: "moderate",
      }),
    ),
  });
  const mkCheck = (
    model: string,
    date: string,
    verdict = "unresolved",
    claimVerdicts: Record<string, string> = {},
  ) => ({
    ...mkDraft(`${date}-check-${model}`, date, verdict, [], claimVerdicts),
    // Seats are keyed by the vendor in the parenthetical (seatKey), so each
    // synthetic model gets its own vendor.
    model: `${model} (Vendor-${model}) — independent check`,
    role: "check" as const,
  });
  const caseWith = (
    runs: unknown[],
    history: { date: string; kind?: string }[] = [],
  ) =>
    ({
      assessmentRuns: runs,
      history: history.map((h) => ({
        date: h.date,
        kind: h.kind,
        change: "c",
        reason: "r",
        actor: "a",
        aiAssisted: true,
      })),
    }) as unknown as Parameters<typeof ratification>[0];
  const fiveChecks = (verdict: string, dissenters = 0, date = "2026-02-01") =>
    ["alpha", "beta", "gamma", "delta", "epsilon"].map((m, i) =>
      mkCheck(m, date, i < dissenters ? "mixed" : verdict),
    );

  it("no checks → unratified, and the reason says so", () => {
    const r = ratification(caseWith([mkDraft("d", "2026-01-01")]));
    expect(r?.status).toBe("unratified");
    expect(r?.reason).toMatch(/no independent model/);
  });

  it("a panel below the minimum cannot ratify", () => {
    const r = ratification(
      caseWith([
        mkDraft("d", "2026-01-01"),
        ...fiveChecks("unresolved").slice(0, RATIFICATION_MIN_PANEL - 1),
      ]),
    );
    expect(r?.status).toBe("unratified");
  });

  it("full agreement ratifies; one dissenter is tolerated; two are not", () => {
    const draft = mkDraft("d", "2026-01-01");
    expect(ratification(caseWith([draft, ...fiveChecks("unresolved")]))?.status).toBe(
      "ratified",
    );
    expect(
      ratification(caseWith([draft, ...fiveChecks("unresolved", 1)]))?.status,
    ).toBe("ratified");
    const two = ratification(caseWith([draft, ...fiveChecks("unresolved", 2)]));
    expect(two?.status).toBe("contested");
    expect(two?.reason).toMatch(/2 of 5 models dispute/);
  });

  it("content newer than the panel resets standing to unratified — never to ratified", () => {
    const r = ratification(
      caseWith(
        [mkDraft("d", "2026-01-01"), ...fiveChecks("unresolved")],
        [{ date: "2026-03-01" }],
      ),
    );
    expect(r?.status).toBe("unratified");
    expect(r?.staleSince).toBe("2026-03-01");
  });

  it("housekeeping history does not stale the panel", () => {
    const r = ratification(
      caseWith(
        [mkDraft("d", "2026-01-01"), ...fiveChecks("unresolved")],
        [{ date: "2026-03-01", kind: "housekeeping" }],
      ),
    );
    expect(r?.status).toBe("ratified");
  });

  it("a reconsideration cannot be ratified by the checks it engaged", () => {
    const engaged = fiveChecks("mixed"); // all five agree with the reconciled verdict
    const reconsider = {
      ...mkDraft("2026-02-02-reconsider-ab12", "2026-02-02", "mixed"),
      promptVersion: "erebus-reconsider-v1",
      reconciles: engaged.map((r) => r.runId),
    };
    const r = ratification(caseWith([reconsider, ...engaged]));
    expect(r?.status).toBe("unratified");
    expect(r?.reason).toMatch(/fresh blind check/);
  });

  it("one blind check outside the reconciles stamp restores normal derivation, even same-day", () => {
    const engaged = fiveChecks("mixed").slice(0, 4);
    const reconsider = {
      ...mkDraft("2026-02-02-reconsider-ab12", "2026-02-02", "mixed"),
      promptVersion: "erebus-reconsider-v1",
      reconciles: engaged.map((r) => r.runId),
    };
    const fresh = mkCheck("zeta", "2026-02-02", "mixed");
    const r = ratification(caseWith([reconsider, ...engaged, fresh]));
    expect(r?.status).toBe("ratified");
  });

  it("a pre-stamp reconsideration is fresh-checked only by a strictly later check", () => {
    const sameDay = fiveChecks("mixed", 0, "2026-02-02");
    const legacy = {
      ...mkDraft("2026-02-02-reconsider-cd34", "2026-02-02", "mixed"),
      promptVersion: "erebus-reconsider-v1",
    };
    expect(ratification(caseWith([legacy, ...sameDay]))?.status).toBe(
      "unratified",
    );
    const later = fiveChecks("mixed", 0, "2026-02-03");
    expect(ratification(caseWith([legacy, ...later]))?.status).toBe("ratified");
  });

  it("an ordinary blind draft is unaffected by the reconsideration rule", () => {
    const draft = mkDraft("d", "2026-02-02"); // newer than the checks
    const r = ratification(caseWith([draft, ...fiveChecks("unresolved")]));
    expect(r?.status).toBe("ratified");
  });

  it("a load-bearing claim the panel rejects blocks ratification even with case-verdict agreement", () => {
    const draft = mkDraft("d", "2026-01-01", "unresolved", ["C1"], {
      C1: "well_supported",
    });
    const checks = ["alpha", "beta", "gamma", "delta", "epsilon"].map((m, i) =>
      mkCheck(m, "2026-02-01", "unresolved", {
        C1: i < 3 ? "contradicted" : "well_supported",
      }),
    );
    const r = ratification(caseWith([draft, ...checks]));
    expect(r?.status).toBe("contested");
    expect(r?.contestedLoadBearing).toEqual(["C1"]);
  });

  it("displayAssessment always shows the latest draft, stamped with its standing", () => {
    const shown = displayAssessment(
      caseWith([
        mkDraft("old", "2026-01-01", "mixed"),
        mkDraft("new", "2026-02-01"),
        ...fiveChecks("unresolved", 0, "2026-02-02"),
      ]) as unknown as Parameters<typeof displayAssessment>[0],
    );
    expect(shown?.run.runId).toBe("new");
    expect(shown?.ratification.status).toBe("ratified");
  });

  it("every live case derives a valid standing; checked cases have a full panel", () => {
    // A freshly imported case legitimately has zero check runs — it must
    // still derive a valid standing (unratified, with the reason saying no
    // model has checked it), and it stays visibly unratified until the
    // cross-model panel judges it. But once any check runs exist, a partial
    // panel is a pipeline defect: checks are produced as a full sweep.
    for (const c of loadAllCases()) {
      const shown = displayAssessment(c);
      expect(shown).not.toBeNull();
      expect(["ratified", "contested", "unratified"]).toContain(
        shown!.ratification.status,
      );
      const hasChecks = c.assessmentRuns.some((a) => a.role === "check");
      if (hasChecks) {
        expect(shown!.ratification.panel).toBeGreaterThanOrEqual(
          RATIFICATION_MIN_PANEL,
        );
      } else {
        expect(shown!.ratification.status).toBe("unratified");
      }
      expect(shown!.ratification.reason.length).toBeGreaterThan(10);
    }
  });

  it("every case carries a research priority", () => {
    for (const c of loadAllCases()) {
      expect(["high", "medium", "low"]).toContain(
        c.record.researchPriority.level,
      );
    }
  });

  it("conjectures require disconfirmers", () => {
    expect(() =>
      ConjectureSchema.parse({
        id: "GEO-J099",
        by: "x",
        date: "2026-08-23",
        statement: "something bold and specific",
        confidence: "high",
        rationale: "intuition, stated as such",
        predictedFindings: ["a finding"],
        disconfirmers: [],
      }),
    ).toThrow();
  });
});

describe("cross-model checks", () => {
  // Synthetic case slices — the functions under test only read
  // assessmentRuns and history.
  const run = (
    runId: string,
    model: string,
    date: string,
    role: "draft" | "check",
    verdict = "unresolved",
    claimVerdicts: Record<string, string> = {},
  ) => ({
    runId,
    model,
    date,
    promptVersion: "t",
    humanReviewed: false,
    role,
    caseAssessment: {
      verdict,
      loadBearing: [],
      weakestLinks: [],
      synthesis: "x".repeat(120),
    },
    claimAssessments: Object.entries(claimVerdicts).map(
      ([claimId, v]) => ({
        claimId,
        verdict: v,
        reasoning: "test reasoning",
        confidence: "moderate",
      }),
    ),
  });
  const caseWith = (runs: unknown[]) =>
    ({ assessmentRuns: runs, history: [] }) as unknown as Parameters<
      typeof crossModelSummary
    >[0];

  it("check runs never narrate; the draft still displays", () => {
    const loaded = caseWith([
      run("d1", "house/test", "2026-01-01", "draft"),
      run("2026-02-01-check-alpha", "Alpha (Vendor-A) — check", "2026-02-01", "check"),
      run("2026-02-01-check-beta", "Beta (Vendor-B) — check", "2026-02-01", "check"),
    ]);
    const shown = displayAssessment(loaded);
    // The newest draft-role run displays; checks never do, however new.
    expect(shown?.run.role).toBe("draft");
    expect(shown?.run.runId).toBe("d1");
  });

  it("concurrence summary reports agreement against the displayed run", () => {
    const loaded = caseWith([
      run("d1", "house/test", "2026-01-01", "draft", "unresolved", {
        C1: "well_supported",
        C2: "mixed",
        C3: "contradicted",
      }),
      run("c-a", "Alpha (V)", "2026-02-01", "check", "unresolved", {
        C1: "well_supported", // exact
        C2: "weakly_supported", // adjacent (one step)
        C3: "well_supported", // split (far apart)
      }),
    ]);
    const s = crossModelSummary(loaded);
    expect(s).not.toBeNull();
    expect(s!.models).toEqual(["Alpha (V)"]);
    expect(s!.claimsCompared).toBe(3);
    expect(s!.exact).toBe(1);
    expect(s!.adjacent).toBe(1);
    expect(s!.split).toBe(1);
    expect(s!.splitClaimIds).toEqual(["C3"]);
    // Every compared claim lands in exactly one bucket.
    expect(s!.exact + s!.adjacent + s!.split).toBe(s!.claimsCompared);
    expect(s!.caseUnanimousWithDisplayed).toBe(true);
  });

  it("a same-day re-check wins the per-model tie, and the superseded run is not double-counted", () => {
    // Append-only means a re-checked case carries two runs per model with
    // the same date. The -r2 suffix convention must win the tie, and the
    // panel must count each vendor once — "10 independent models" from 5
    // vendors was the original double-counting bug (upstream).
    const loaded = caseWith([
      run("d1", "house/test", "2026-01-01", "draft"),
      run("2026-02-01-check-alpha", "Alpha (Vendor-A) — check", "2026-02-01", "check", "mixed"),
      run("2026-02-01-check-alpha-r2", "Alpha (Vendor-A) — re-check", "2026-02-01", "check", "unresolved"),
      run("2026-01-15-check-beta", "Beta (Vendor-B) — check", "2026-01-15", "check"),
    ]);
    const perModel = latestCheckPerModel(loaded);
    // One entry per vendor, and Alpha's -r2 re-run wins the same-date tie.
    expect(perModel).toHaveLength(2);
    const alpha = perModel.find((r) => r.model.startsWith("Alpha"));
    expect(alpha?.runId).toBe("2026-02-01-check-alpha-r2");
    const keys = perModel.map((r) => seatKey(r.model));
    expect(new Set(keys).size).toBe(keys.length);
  });

  it("a later date beats any runId suffix in the per-model tie", () => {
    const loaded = caseWith([
      run("d1", "house/test", "2026-01-01", "draft"),
      run("2026-02-01-check-alpha-r2", "Alpha (Vendor-A)", "2026-02-01", "check"),
      run("2026-03-01-check-alpha", "Alpha (Vendor-A)", "2026-03-01", "check"),
    ]);
    const perModel = latestCheckPerModel(loaded);
    expect(perModel).toHaveLength(1);
    expect(perModel[0].runId).toBe("2026-03-01-check-alpha");
  });

  it("cases without check runs have no summary", () => {
    const checkless = caseWith([run("d1", "house/test", "2026-01-01", "draft")]);
    expect(crossModelSummary(checkless)).toBeNull();
  });
});
