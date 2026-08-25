import { describe, expect, it } from "vitest";
import { buildRecordLinkRegistry, splitRecordRefs } from "./recordLinks";
import type { LoadedCase } from "./schema";

describe("splitRecordRefs", () => {
  it("splits mixed claim, source, evidence, and research ids", () => {
    expect(
      splitRecordRefs(
        "Load-bearing EX-C001; see SRC-MULLER-2020 and EX-E010 via EX-R003.",
      ),
    ).toEqual([
      { kind: "text", value: "Load-bearing " },
      { kind: "record", id: "EX-C001" },
      { kind: "text", value: "; see " },
      { kind: "record", id: "SRC-MULLER-2020" },
      { kind: "text", value: " and " },
      { kind: "record", id: "EX-E010" },
      { kind: "text", value: " via " },
      { kind: "record", id: "EX-R003" },
      { kind: "text", value: "." },
    ]);
  });

  it("returns a single text segment when no ids are present", () => {
    expect(splitRecordRefs("No ids here.")).toEqual([
      { kind: "text", value: "No ids here." },
    ]);
  });
});

describe("buildRecordLinkRegistry", () => {
  // Synthetic case slice — the registry only reads record, claims,
  // sources, evidence, and research.
  const loaded = {
    record: { id: "EX-001", slug: "example-case" },
    claims: [
      { id: "EX-C001", reviewState: "ai_extracted" },
      { id: "EX-C002", reviewState: "rejected" },
    ],
    sources: [{ id: "SRC-MULLER-2020" }],
    evidence: [{ id: "EX-E001" }],
    research: [{ id: "EX-R001" }],
  } as unknown as LoadedCase;

  it("maps ids to the routes the site exposes", () => {
    const registry = buildRecordLinkRegistry([loaded]);

    expect(registry.get("EX-001")).toEqual({
      kind: "case",
      href: "/cases/example-case/",
    });
    expect(registry.get("EX-C001")).toEqual({
      kind: "claim",
      href: "/claims/EX-C001/",
    });
    expect(registry.get("SRC-MULLER-2020")).toEqual({
      kind: "source",
      href: "/sources/SRC-MULLER-2020/",
    });
    expect(registry.get("EX-E001")?.href).toBe(
      "/cases/example-case/#evidence-EX-E001",
    );
    expect(registry.get("EX-R001")?.href).toBe(
      "/cases/example-case/#research-EX-R001",
    );
  });

  it("never links rejected claims (tombstones stay unlinkable)", () => {
    const registry = buildRecordLinkRegistry([loaded]);
    expect(registry.get("EX-C002")).toBeUndefined();
  });

  it("returns an empty registry for zero cases", () => {
    expect(buildRecordLinkRegistry([]).size).toBe(0);
  });
});
