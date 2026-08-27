#!/usr/bin/env node
/**
 * Generate cover-art candidates for a case in the house style
 * (see docs/IMAGES.md) via the OpenAI Images API.
 *
 * Usage:  IMAGE_API_KEY=... node scripts/generate-case-art.mjs <case-slug> [count]
 *         (falls back to OPENAI_API_KEY when IMAGE_API_KEY is not set)
 *
 * Writes candidates to public/images/cases/<slug>/candidates/ and prints a
 * manifest entry skeleton for the chosen one. Designed to run inside the
 * generate-case-art GitHub workflow, which opens a PR with the results —
 * the winner is picked during PR review.
 */
import fs from "node:fs";
import path from "node:path";
import { parse as parseYaml } from "yaml";

const STYLE_VERSION = "style-e2";
const MODEL = "gpt-image-1";

/**
 * style-e2 per-case palette assignments (see docs/IMAGES.md, "Case palette
 * assignments" — keep the two in sync). The structure is the house
 * signature and never varies: the case's place, painted, dissolving into
 * its ghosted survey record. The palette is the case's own — drawn from
 * its place and hour — and varies deliberately from case to case, so no
 * two covers share a wash. Assign each new case a palette here before
 * generating its cover.
 */
const CASE_TONES = {
  "kirk-assassination":
    "violet and rose alpenglow on snow-dusted peaks, deep russet and " +
    "burnt-orange autumn aspens, long twilight-blue shadows; the ghosted " +
    "plat in deep umber ink on cool grey-violet paper",
  "september-11":
    "deep cloudless cerulean and cobalt sky, silver-blue water, buildings " +
    "in pale steel and silver planes; the ghosted plat in slate-blue ink " +
    "on cool white paper",
  "covid-origins":
    "humid jade green, celadon, porcelain white and cool grey rain tones, " +
    "wet asphalt with green-grey reflections; the ghosted plat in " +
    "green-grey ink on cool pale paper",
};

/**
 * Per-case place-and-hour subjects. Required for style-e2: the place must
 * be chosen deliberately (a quiet hour, a respectful distance, never the
 * event), so there is no generic fallback. Each entry has the painted
 * scene and the archival drawing it dissolves into.
 */
const CASE_SUBJECTS = {
  // The valley, not the courtyard: the campus at a respectful landscape
  // distance under the Wasatch wall. No people, no memorials, no flags.
  "kirk-assassination":
    "a university campus in a broad Utah valley at dusk — low campus " +
    "buildings and autumn trees seen from a respectful distance, the " +
    "Wasatch mountain wall rising behind with early snow — dissolving " +
    "into a ghosted hand-drawn surveyor's plat of a campus courtyard and " +
    "its building footprints with dashed sightline measurements.",
  // The towers standing quiet on a clear September morning, seen from the
  // harbor. Explicitly: intact, before — no smoke, no aircraft, no
  // violence of any kind.
  "september-11":
    "Lower Manhattan seen from the harbor on a crystal-clear early " +
    "September morning in 2001, the twin towers of the World Trade Center " +
    "standing intact and quiet among the skyline, still water — no smoke, " +
    "no aircraft, nothing of the event — dissolving into a ghosted " +
    "hand-drawn surveyor's plat of the Lower Manhattan street grid with " +
    "two rectangular building footprints subtly emphasized.",
  // The market empty in morning rain — the place, not the pathogen. No
  // animals, no signage, no people.
  "covid-origins":
    "an empty wholesale market street in Wuhan on a humid rainy morning — " +
    "long rows of shuttered vendor stalls under corrugated awnings, mist " +
    "between the rows — dissolving into a ghosted hand-drawn surveyor's " +
    "plat of the market's numbered stall grid.",
};

/** One reversible generation run: a single runId stamped on every record. */
const RUN_ID = `cover-${STYLE_VERSION}-${new Date().toISOString().slice(0, 10)}`;

const [slug, countArg] = process.argv.slice(2);
const count = Math.min(Number(countArg ?? 3) || 3, 4);

if (!slug) {
  console.error("usage: node scripts/generate-case-art.mjs <case-slug> [count]");
  process.exit(1);
}

const apiKey = process.env.IMAGE_API_KEY || process.env.OPENAI_API_KEY;
if (!apiKey) {
  console.error(
    [
      "",
      "ERROR: neither IMAGE_API_KEY nor OPENAI_API_KEY is set.",
      "",
      "This script calls the OpenAI Images API. To enable it:",
      "  1. Create an OpenAI API key with image-generation access.",
      "  2. Add it as the repository secret IMAGE_API_KEY — or rely on",
      "     OPENAI_API_KEY, which is used as a fallback",
      "     (GitHub → Settings → Secrets and variables → Actions).",
      "  3. Re-run the 'generate-case-art' workflow.",
      "",
    ].join("\n"),
  );
  process.exit(1);
}

const caseFile = path.join(process.cwd(), "content", "cases", slug, "case.yaml");
if (!fs.existsSync(caseFile)) {
  console.error(`No case at content/cases/${slug}/case.yaml`);
  process.exit(1);
}
const record = parseYaml(fs.readFileSync(caseFile, "utf8"));

// The canonical style-e2 template from docs/IMAGES.md: the case's place,
// painted, dissolving into its ghosted survey record, in the case's own
// palette. Subject and palette are both required per case — the place and
// its hour are editorial choices, never derived mechanically.
const subject = CASE_SUBJECTS[slug];
if (!subject) {
  console.error(
    `No style-e2 place-and-plat subject for "${slug}". Choose the case's ` +
      `place, hour, and archival drawing deliberately (a quiet hour, a ` +
      `respectful distance, never the event), add it to CASE_SUBJECTS here ` +
      `and to docs/IMAGES.md, then re-run.`,
  );
  process.exit(1);
}

const tone = CASE_TONES[slug];
if (!tone) {
  console.error(
    `No style-e2 palette assigned for "${slug}". Add it to CASE_TONES here ` +
      `and to the palette table in docs/IMAGES.md, then re-run.`,
  );
  process.exit(1);
}

const prompt =
  `Editorial cover artwork, unmistakably a gouache painting — visible ` +
  `brushstrokes, matte pigment, soft paper-textured edges, nothing ` +
  `photographic. Upper two-thirds: ${subject.split(" — dissolving into")[0]}, ` +
  `rendered in loose confident brushwork with buildings and land as ` +
  `simplified planes of pigment. Lower third: the painting dissolves ` +
  `downward into ${subject.includes("dissolving into") ? subject.split("dissolving into ")[1] : "a ghosted hand-drawn surveyor's plat of the place"} ` +
  `— thin ink linework, faint as a watermark, as if the painted scene ` +
  `rests on an archival record of itself. The transition is gradual and ` +
  `atmospheric, paint strokes breaking apart into ink lines. Palette: ` +
  `${tone}. Quiet, elegiac, dignified; completely empty of people; no ` +
  `violence, no memorials, no flags. Absolutely no text, no numbers, no ` +
  `labels, no logos, no border frame lines. Painterly throughout — ` +
  `obviously a painting, never photorealistic, never mistakable for a ` +
  `photograph.`;

const outDir = path.join(
  process.cwd(),
  "public",
  "images",
  "cases",
  slug,
  "candidates",
);
fs.mkdirSync(outDir, { recursive: true });

console.error(`Generating ${count} cover candidates for ${slug}...`);
for (let i = 1; i <= count; i++) {
  const res = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: MODEL,
      prompt,
      size: "1536x1024",
      quality: "high",
      n: 1,
    }),
  });
  if (!res.ok) {
    console.error(`Image API error ${res.status}: ${await res.text()}`);
    process.exit(1);
  }
  const data = await res.json();
  const b64 = data.data?.[0]?.b64_json;
  if (!b64) {
    console.error("Image API returned no image data");
    process.exit(1);
  }
  const file = path.join(outDir, `cover-candidate-${i}.png`);
  fs.writeFileSync(file, Buffer.from(b64, "base64"));
  console.error(`  wrote ${path.relative(process.cwd(), file)}`);
}

console.log(`
# After picking a winner in PR review:
#   1. sips -s format jpeg -s formatOptions 75 -Z 1600 <winner>.png --out public/images/cases/${slug}/cover.jpg
#   2. delete the candidates/ directory
#   3. add to content/cases/${slug}/images.yaml:

- id: IMG-${slug.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 8)}-COVER
  role: cover
  file: /images/cases/${slug}/cover.jpg
  alt: "TODO: describe the artwork"
  source: generated
  license: "Project artwork (AI-generated)"
  credit: "AI-generated editorial artwork, Erebus house style"
  styleVersion: ${STYLE_VERSION}
  model: "${MODEL}"
  runId: "${RUN_ID}"
  prompt: >-
    ${prompt}
`);
