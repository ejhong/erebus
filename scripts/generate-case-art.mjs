#!/usr/bin/env node
/**
 * Generate cover-art candidates for a case in the house style
 * (see docs/IMAGES.md) via the OpenAI Images API.
 *
 * Usage:  IMAGE_API_KEY=... node scripts/generate-case-art.mjs <case-slug> [count]
 *
 * Writes candidates to public/images/cases/<slug>/candidates/ and prints a
 * manifest entry skeleton for the chosen one. Designed to run inside the
 * generate-case-art GitHub workflow, which opens a PR with the results —
 * the winner is picked during PR review.
 */
import fs from "node:fs";
import path from "node:path";
import { parse as parseYaml } from "yaml";

const STYLE_VERSION = "style-e1";
const MODEL = "gpt-image-1";

/**
 * style-e1 per-case tone assignments (see docs/IMAGES.md, "Case tone
 * assignments" — keep the two in sync). The house palette is cold and
 * modern: every cover works in Prussian blue, slate, steel grey, indigo,
 * and graphite, with at most one restrained counter-accent. Assign each
 * new case a tone here before generating its cover.
 */
const CASE_TONES = {
  "kirk-assassination":
    "deep blue-black field, graphite and slate linework, one thin " +
    "pale-steel accent tracing the single unbroken line",
};

/**
 * Optional composition overrides for cases whose canonical cover subject is
 * more specific than what the dossier fields would generate.
 */
const CASE_SUBJECTS = {
  // "One Shot, Many Records": one event, many instruments, records that do
  // not fully reconcile. Pure diagram language — no scene, no place, no
  // person, nothing readable as documentation of the event itself.
  "kirk-assassination":
    "An abstract diagram of a single sharp impulse recorded by many " +
    "instruments: one clean vertical pulse at the left edge fanning out " +
    "rightward into many parallel horizontal traces, some continuing " +
    "unbroken, others fading into dotted gaps or stopping mid-line, with " +
    "small registration marks where the traces disagree — the idea of one " +
    "event producing many incomplete, imperfectly reconciled records.",
};

/** One reversible generation run: a single runId stamped on every record. */
const RUN_ID = `cover-${STYLE_VERSION}-${new Date().toISOString().slice(0, 10)}`;

const [slug, countArg] = process.argv.slice(2);
const count = Math.min(Number(countArg ?? 3) || 3, 4);

if (!slug) {
  console.error("usage: node scripts/generate-case-art.mjs <case-slug> [count]");
  process.exit(1);
}

const apiKey = process.env.IMAGE_API_KEY;
if (!apiKey) {
  console.error(
    [
      "",
      "ERROR: IMAGE_API_KEY is not set.",
      "",
      "This script calls the OpenAI Images API. To enable it:",
      "  1. Create an API key with image-generation access.",
      "  2. Add it as the repository secret IMAGE_API_KEY",
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

// The canonical style-e1 template from docs/IMAGES.md, with a subject
// derived from the case's own dossier fields (ideas, never evidence scenes)
// and the case's assigned tone.
const subject =
  CASE_SUBJECTS[slug] ??
  `An allegorical emblem for a case titled "${record.title}" in the domain of ` +
    `${record.domain}: a symbolic, typological composition suggesting the ` +
    `question — ${record.subtitle} — without depicting any real site, artifact, ` +
    `or dataset as documentation.`;

const tone = CASE_TONES[slug];
if (!tone) {
  console.error(
    `No style-e1 tone assigned for "${slug}". Add it to CASE_TONES here and ` +
      `to the tone table in docs/IMAGES.md, then re-run.`,
  );
  process.exit(1);
}

const prompt =
  `Minimal modern technical editorial illustration, in the visual language ` +
  `of a precise instrument chart or forensic diagram. ${subject} ` +
  `Thin, exact vector-like linework: fine isolines, section lines, ` +
  `waveform traces, small registration marks, restrained geometric ` +
  `abstraction. Cold palette only — ${tone} — on a near-white cool ` +
  `porcelain field (#eef1f4) or a deep blue-black field (#10151b); ` +
  `Prussian blue, slate, steel grey, indigo, graphite throughout; no warm ` +
  `cream, sepia, ochre, or terracotta tones anywhere. Flat, matte, ` +
  `documentary and quiet: no glow, no lens flare, no 3D render look, no ` +
  `gradients beyond subtle atmospheric shading. Generous negative space, ` +
  `austere composition. Absolutely no text, no numbers, no labels, no ` +
  `captions, no border frame lines. Stylized editorial artwork, obviously ` +
  `an illustration — not photorealistic, no photograph.`;

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
