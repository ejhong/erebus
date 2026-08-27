# Erebus Image Style Guide

Current style version: **style-e2** (2026-08-27, the place and its record).
Bump the version when the canonical prompt changes, so regenerated art
stays consistent within a version and diffs between versions are
deliberate. style-e1 (cold modern-technical, 2026-08-25) is superseded:
its covers were beautiful but anonymous — abstract instrument charts that
illustrated the site's method rather than any case, indistinguishable
from one another at a glance (founder direction, 2026-08-27; see
docs/DECISIONS.md).

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

- Generated covers may depict the case's *place* — painted, at a quiet
  hour, from a respectful distance — but never the *event*: no violence,
  no smoke, no aircraft, no weapons, no injuries, no memorials, and never
  a person. The place before or after, never the day itself.
- The rendering must be unmistakably a painting. If a generated image
  drifts toward photorealism — crisp edges, lens-like light — regenerate
  it with stronger painterly cues or discard it. Nothing a reader could
  mistake for a photograph ships.
- Diagrams (ladder, timelines, dividers) stay hand-built SVG/CSS — never
  raster, never generated.

## House style: the place and its record (style-e2)

Every cover is the same sentence said about a different case: **the
case's place, painted at a quiet hour, dissolving downward into a ghosted
hand-drawn survey record of itself.** The upper two-thirds is a gouache
painting of the place — visible brushwork, matte pigment, elegiac and
dignified, empty of people. The lower third dissolves into a faint
surveyor's plat — the stall grid, the street grid, the courtyard
footprints — thin ink on paper, watermark-faint. A beautiful place, and
beneath it, a file: the site's whole thesis in one frame.

The **structure is constant; the palette is the case's own.** Each case
takes its colors from its place and hour — no shared house wash, no
default sepia, no default cold navy. Two covers on the shelf should
plainly belong to the same publication and plainly be different places.
(This replaces style-e1's locked cold palette, whose uniformity made the
covers indistinguishable; the same uniformity problem was observed on the
upstream site's single-register art.)

Still absolute: nothing lurid, nothing sensational — the register says
"this place carries a history we recorded carefully," never "look at
this."

The canonical prompt template lives in `scripts/generate-case-art.mjs`;
per-case palettes live in `CASE_TONES` and per-case place-and-plat
subjects in `CASE_SUBJECTS` there. Both are required — the place, its
hour, and its archival drawing are editorial choices, made deliberately
per case. Keep this document and that script in sync.

### Case palette assignments

| Case | Place and hour | Palette |
| --- | --- | --- |
| `kirk-assassination` | the campus valley under the Wasatch wall, dusk alpenglow | violet and rose alpenglow, russet and burnt-orange aspens, twilight blue; plat in deep umber on grey-violet paper |
| `september-11` | Lower Manhattan from the harbor, the clear September morning, towers intact | cerulean and cobalt sky, silver-blue water, pale steel planes; plat in slate-blue on cool white paper |
| `covid-origins` | the market street empty in morning rain | jade, celadon, porcelain white, cool grey; plat in green-grey on cool pale paper |

Each subject is the place at a chosen hour, never the event: the towers
stand intact on a clear morning with nothing of the day in frame; the
market is shuttered and empty; the campus is seen at landscape distance
with no courtyard detail beyond the ghosted plat. The plats beneath are
generic archival drawings of the place's geometry — not reproductions of
any actual evidentiary exhibit, which is what keeps them clear of the
hard rule above.

Rules of thumb:

- If a candidate looks like modern hype art — saturated, glowing,
  3D-rendered — or like a photograph, reject it and regenerate.
- Ban text and numbers in the image (models garble them; labels belong in
  HTML). Suggestive, illegible plat lettering is rejected too: this site
  does not print invented text, even decoratively.
- Covers ship at exactly 16:9 — the case-grid card renders
  `aspect-[16/9]`, so what you crop is what readers see.
- Post-process: crop, resize to ≤1600 px wide, JPEG quality ~75–90.

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
