import { describe, expect, it } from "vitest";
import {
  caseStandings,
  dissentGallery,
  opsFeed,
  seatName,
  seatRecords,
} from "./panel";

/**
 * Zero-content-safe versions of the upstream live-data tests: the same
 * invariants, asserted over whatever content exists. All loops are
 * vacuous at zero cases and bite as soon as cases (and check runs) ship.
 */
describe("panel derivations", () => {
  it("seatName strips run-generation wording", () => {
    expect(
      seatName("Opus 5 (Anthropic) — independent check run via claude-opus-5"),
    ).toBe("Opus 5 (Anthropic)");
    expect(seatName("GPT-5.1 (OpenAI), independent judge run")).toBe(
      "GPT-5.1 (OpenAI)",
    );
  });

  it("standings are contested-first and each carries a reason", () => {
    const rows = caseStandings();
    const order = rows.map((r) => r.ratification.status);
    const firstRatified = order.indexOf("ratified");
    const lastContested = order.lastIndexOf("contested");
    if (firstRatified !== -1 && lastContested !== -1)
      expect(lastContested).toBeLessThan(firstRatified);
    for (const r of rows)
      expect(r.ratification.reason.length).toBeGreaterThan(10);
  });

  it("every dissent row carries the house verdict and at least two seats", () => {
    for (const d of dissentGallery()) {
      expect(d.seats.length).toBeGreaterThanOrEqual(2);
      expect(d.claimId).toMatch(/^[A-Z]+-C\d{3}$/);
    }
  });

  it("seat records count each vendor once per case and pairwise totals are symmetric", () => {
    const seats = seatRecords();
    for (const s of seats) {
      expect(s.agreesWithHouse).toBeLessThanOrEqual(s.casesJudged);
      for (const [other, p] of Object.entries(s.pairwise)) {
        const back = seats.find((x) => x.seat === other)!.pairwise[s.seat];
        expect(back.total).toBe(p.total);
        expect(back.agree).toBe(p.agree);
      }
    }
  });

  it("the ops feed is newest-first and bounded", () => {
    const events = opsFeed(25);
    expect(events.length).toBeLessThanOrEqual(25);
    for (let i = 1; i < events.length; i++)
      expect(events[i - 1].date >= events[i].date).toBe(true);
  });

  it("zero content derives an empty panel, never an error", () => {
    // Bootstrap state: no cases, no governance records. Every derivation
    // must return cleanly so the /panel page renders before first content.
    expect(Array.isArray(caseStandings())).toBe(true);
    expect(Array.isArray(seatRecords())).toBe(true);
    expect(Array.isArray(dissentGallery())).toBe(true);
    expect(Array.isArray(opsFeed())).toBe(true);
  });
});
