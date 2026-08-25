import { describe, expect, it } from "vitest";
import { loadAllCases } from "./load";
import { extractArxivId, extractDoi, resourceGroups } from "./resources";
import { CuratedResourceSchema, WatchConfigSchema } from "./schema";
import type { LoadedCase } from "./schema";

describe("identifier extraction", () => {
  it("finds DOIs in identifier prose and strips trailing punctuation", () => {
    expect(
      extractDoi("Science Advances 6(31): eabc0133. DOI: 10.1126/sciadv.abc0133"),
    ).toBe("10.1126/sciadv.abc0133");
    expect(extractDoi("DOI: 10.1016/j.jas.2005.09.011.")).toBe(
      "10.1016/j.jas.2005.09.011",
    );
    expect(extractDoi("no identifier here")).toBeNull();
    expect(extractDoi(undefined)).toBeNull();
  });

  it("finds modern arXiv ids in text and URLs", () => {
    expect(extractArxivId("arXiv:2408.01234v2")).toBe("2408.01234");
    expect(extractArxivId("https://arxiv.org/abs/2301.00001")).toBe(
      "2301.00001",
    );
    expect(extractArxivId("plain text")).toBeNull();
  });
});

describe("resource group derivation", () => {
  // Synthetic case slice — resourceGroups reads only sources and evidence.
  const src = (
    id: string,
    sourceType: string,
    extra: Record<string, unknown> = {},
  ) => ({ id, sourceType, title: id, ...extra });
  const ev = (id: string, sourceId: string, direction: string) => ({
    id,
    sourceId,
    direction,
  });

  const loaded = {
    sources: [
      src("SRC-SUPPORT-2021", "paper", {
        year: "2021",
        identifier: "DOI: 10.1234/support.2021",
      }),
      src("SRC-CRITIC-2023", "paper", { year: "2023" }),
      src("SRC-BOOK-2019", "book", { year: "2019" }),
      src("SRC-DATA-2020", "dataset", {
        year: "2020",
        url: "https://example.org/dataset",
      }),
    ],
    evidence: [
      ev("EX-E001", "SRC-SUPPORT-2021", "supports"),
      ev("EX-E002", "SRC-CRITIC-2023", "undermines"),
      ev("EX-E003", "SRC-CRITIC-2023", "undermines"),
      ev("EX-E004", "SRC-CRITIC-2023", "supports"),
      ev("EX-E005", "SRC-BOOK-2019", "supports"),
      ev("EX-E006", "SRC-DATA-2020", "context"),
    ],
  } as unknown as LoadedCase;

  const groups = resourceGroups(loaded);

  it("places every source exactly once and invents nothing", () => {
    const placed = groups.flatMap((g) => g.entries.map((e) => e.source.id));
    expect(placed.sort()).toEqual(
      loaded.sources.map((s) => s.id).sort(),
    );
  });

  it("derives the critiques group from evidence direction, honestly", () => {
    const critiques = groups.find((g) => g.key === "critiques");
    expect(critiques).toBeDefined();
    // The predominantly-undermining source belongs here.
    const ids = critiques!.entries.map((e) => e.source.id);
    expect(ids).toContain("SRC-CRITIC-2023");
    // Invariant: every entry in critiques has more undermining than
    // supporting evidence records; no other group has such an entry.
    for (const g of groups) {
      for (const e of g.entries) {
        const critical =
          (e.directionCounts.undermines ?? 0) >
          (e.directionCounts.supports ?? 0);
        expect(critical).toBe(g.key === "critiques");
      }
    }
  });

  it("links out via explicit URL or extracted DOI, never a fabricated one", () => {
    const entries = groups.flatMap((g) => g.entries);
    const support = entries.find((e) => e.source.id === "SRC-SUPPORT-2021");
    // A DOI link exists only because the identifier field carried it.
    expect(support?.href).toBe("https://doi.org/10.1234/support.2021");
    expect(support?.doi).toBe("10.1234/support.2021");
    const data = entries.find((e) => e.source.id === "SRC-DATA-2020");
    expect(data?.href).toBe("https://example.org/dataset");
    // A book with no URL and no DOI gets no public link — never a guess.
    const book = entries.find((e) => e.source.id === "SRC-BOOK-2019");
    expect(book?.href).toBeNull();
  });

  it("orders entries newest-first within a group", () => {
    for (const g of groups) {
      const years = g.entries.map((e) => e.source.year ?? "");
      const sorted = [...years].sort((a, b) => b.localeCompare(a));
      expect(years).toEqual(sorted);
    }
  });
});

describe("watch config schema", () => {
  const valid = {
    queries: [
      { id: "ballistics-review", query: "ballistics gelatin replication" },
    ],
  };

  it("parses a minimal config and defaults to arXiv + Crossref", () => {
    const cfg = WatchConfigSchema.parse(valid);
    expect(cfg.queries[0].sources).toEqual(["arxiv", "crossref"]);
  });

  it("rejects duplicate query ids", () => {
    expect(() =>
      WatchConfigSchema.parse({
        queries: [
          { id: "same", query: "one thing" },
          { id: "same", query: "another thing" },
        ],
      }),
    ).toThrow(/duplicate watch query id/);
  });

  it("rejects unknown sources, empty query lists, and bad ids", () => {
    expect(() =>
      WatchConfigSchema.parse({
        queries: [{ id: "q", query: "test query", sources: ["scholar"] }],
      }),
    ).toThrow();
    expect(() => WatchConfigSchema.parse({ queries: [] })).toThrow();
    expect(() =>
      WatchConfigSchema.parse({
        queries: [{ id: "Bad Id!", query: "test query" }],
      }),
    ).toThrow();
  });
});

describe("curated resources schema", () => {
  const valid = {
    title: "A real explainer",
    url: "https://example.com/explainer",
    type: "explainer",
    verification: "ai_verified",
  };

  it("requires a real URL and an honest verification label", () => {
    expect(() => CuratedResourceSchema.parse(valid)).not.toThrow();
    const { url: _url, ...noUrl } = valid;
    void _url;
    expect(() => CuratedResourceSchema.parse(noUrl)).toThrow();
    expect(() =>
      CuratedResourceSchema.parse({ ...valid, url: "not-a-url" }),
    ).toThrow();
    const { verification: _v, ...noVerification } = valid;
    void _v;
    expect(() => CuratedResourceSchema.parse(noVerification)).toThrow();
  });

  it("every published case's curated resources carry URLs and labels", () => {
    // Vacuous at zero cases; bites when the first case ships resources.
    for (const loaded of loadAllCases()) {
      for (const item of loaded.curatedResources) {
        expect(item.url).toMatch(/^https:\/\//);
        expect(item.verification).toBeDefined();
      }
    }
  });
});
