# Erebus Image Style Guide

Current style version: **style-e1** (2026-08-25, cold modern-technical).
Bump the version when the canonical prompt changes, so regenerated art
stays consistent within a version and diffs between versions are
deliberate.

## The two image registers — never confused

1. **Editorial artwork (AI-generated).** Covers and site accents. One
   signature style (below), always credited "AI-generated editorial
   artwork," always stylized enough that no one could mistake it for a
   photograph or for evidence.
2. **Plates (real imagery).** Photographs, stills, documents, exhibits,
   data figures. Always real, always with recorded provenance and a
   verified license. Presented as numbered plates with a cool CSS duotone
   (originals untouched; hover restores the original).

## The hard rule

**AI-generated images must never depict evidence.** On this site that
rule carries extra weight: no generated "photos" of crime scenes, crash
sites, buildings, weapons, injuries, documents, footage frames, or any
person. Anything a reader could read as the record must be real imagery
with provenance — and generated imagery must never depict a real,
identifiable person at all. This is enforced in code where possible: the
image schema rejects `source: generated` + `role: plate`, and the loader
rejects generated images embedded in the article's plate position. Do not
weaken these checks.

Corollaries:

- Generated covers depict *ideas* — abstract, diagrammatic, typological
  compositions — never reconstructable scenes presented as documentation.
- If a generated image accidentally reads as a photograph, regenerate it
  with stronger diagram cues or discard it.
- Diagrams (ladder, timelines, dividers) stay hand-built SVG/CSS — never
  raster, never generated.

## House style: cold technical diagram (style-e1)

The signature is the visual language of a precise instrument chart or
forensic diagram: thin exact linework, isolines, waveform traces, small
registration marks, restrained geometric abstraction, generous negative
space. Documentary and quiet — it says "we measured carefully," never
"look at this." Nothing lurid, nothing sensational.

Palette is locked cold: Prussian blue, slate, steel grey, indigo,
graphite, on a near-white porcelain field (`#eef1f4`) or a deep
blue-black field (`#10151b`). No warm cream, sepia, ochre, or terracotta
anywhere. At most one restrained counter-accent per piece.

The canonical prompt template lives in `scripts/generate-case-art.mjs`;
per-case tone assignments live in `CASE_TONES` there. Keep this document
and that script in sync.

### Case tone assignments

| Case | Tone |
| --- | --- |
| `kirk-assassination` | deep blue-black field, graphite and slate linework, one thin pale-steel accent tracing the single unbroken line |

Rules of thumb:

- One dominant tone per piece, one small counter-accent at most. If a
  candidate looks like modern hype art — saturated, glowing, 3D-rendered —
  reject it and regenerate.
- Ban text and numbers in the image (models garble them; labels belong in
  HTML).
- Covers ship at exactly 16:9 — the case-grid card renders
  `aspect-[16/9]`, so what you crop is what readers see.
- Post-process: crop, resize to ≤1600 px wide, JPEG quality ~75.

## Plates: sourcing and treatment

- Sources: official releases, court exhibits with public availability,
  Wikimedia Commons, or user-owned photography. For Commons, run
  `node scripts/add-commons-image.mjs "File:..." <case-slug>` — it
  verifies the license permits reuse, downloads a 1600 px rendition, and
  emits a manifest entry with license/credit/provenance pre-filled. You
  write `alt`, `depicts` (observation language, not interpretation),
  `plateNumber`, and `claimIds`.
- Acceptable licenses: public domain, CC0, CC BY, CC BY-SA, official
  works released without restriction. Anything else: don't use it.
- Dignity constraint (living-persons rules apply to imagery too): no
  gratuitous imagery of injury or death; prefer diagrams, documents, and
  scene-context material over graphic frames, and crop or omit where the
  evidential value does not require showing a person.
- The duotone unification lives in CSS (`.plate-img`), keeping originals
  pristine. Never bake the treatment into the file.
- Plates appear in the article via a `{plate:IMG-...}` block on its own
  line, and automatically on the detail pages of any claims listed in the
  plate's `claimIds`.

## Manifest requirements (enforced at build time)

Every image — generated or real — must have `license` and `credit`, or
the build fails. Generated images must also record `prompt`,
`styleVersion`, and `model`. Plates must also record `plateNumber`,
`depicts`, and `provenance`. An image file missing from `public/` fails
the build.

### Two forms of plate provenance

Provenance may never be blank, and the schema requires exactly one of:

- **Published material** — record `sourceUrl` (plus `photographer`,
  `date`, `originalTitle` where known). A reader can go to the source and
  check.
- **Supplied material** — a researcher or witness supplied the figure
  directly and it is not published anywhere linkable. Record both
  `suppliedBy` (who, in what capacity, by what route, on what date) and
  `permission` (that publication permission was actually given, by whom,
  when). Both fields are required together, and the supplier's name
  appears in the credit line so a reader can weigh who the figure came
  from and discount accordingly.
