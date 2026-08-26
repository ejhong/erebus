#!/usr/bin/env node
/**
 * One-way engine sync: upstream engine repository → this repo.
 *
 * The engine (src/, app/, scripts/, workflows, build configs) is owned by
 * the upstream project; this repo edits only content, configuration, and
 * its own constitution (see ENGINE.md). This script:
 *
 *   node scripts/sync-engine.mjs --check   # report divergence, exit 1 if any
 *   node scripts/sync-engine.mjs --pull    # overwrite local engine files
 *                                          # with (scrubbed) upstream ones
 *
 * The upstream location comes from the ENGINE_UPSTREAM environment
 * variable / Actions secret (a git URL). Since the founder's 2026-08-25
 * amendment narrowed the name rule to the rendered site's inputs, the
 * URL may also be written openly in docs (see ENGINE.md).
 *
 * The scrub is an IDENTITY RENAME, not secrecy: upstream files carry the
 * upstream project's own name in UI strings, prompt versions, and
 * comments, and this site needs its own. The sync therefore renames
 * (case-preserving) every pulled text file to this project's name and
 * compares local files against the RENAMED upstream, so a rename-only
 * difference never counts as divergence. This also keeps src/ and app/
 * clean for the scoped CI name guard on the site's inputs.
 *
 * ALLOWLIST: paths where this repo deliberately diverges (site identity,
 * design tokens, empty-state pages, hosting). Allowlisted paths are never
 * overwritten by --pull and never reported by --check. Everything else
 * under the engine paths must match the scrubbed upstream — engine
 * changes are made upstream and pulled, not edited here.
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

// Assembled from pieces so this file never contains the forbidden string.
const FORBIDDEN = ["ale", "theia"].join("");
const REPLACEMENT = "erebus";

/** Engine paths (directories are recursive; files exact). */
const ENGINE_PATHS = [
  "src",
  "app",
  "scripts",
  ".github/workflows",
  "package.json",
  "package-lock.json",
  "tsconfig.json",
  "eslint.config.mjs",
  "postcss.config.mjs",
  "vitest.config.ts",
  "next.config.ts",
];

/**
 * Intentionally divergent paths (kept deliberately different from the
 * upstream engine). Add a path here ONLY with a reason, and record
 * material divergences in docs/DECISIONS.md.
 */
const ALLOWLIST = new Set([
  // Site identity and hosting (this site: private, Cloudflare, no basePath)
  "package.json",
  "package-lock.json",
  "next.config.ts",
  "src/config/site.ts",
  "src/config/assets.ts",
  ".github/workflows/deploy.yml", // upstream deploys to GitHub Pages; removed here
  ".github/workflows/ci.yml", // adds forbidden-string guard + this divergence check
  // Cold modern-technical design (docs/DECISIONS.md, bootstrap §8)
  "app/globals.css",
  "app/layout.tsx",
  // Zero-case empty states + living-persons notice (bootstrap §3, §4)
  "app/page.tsx",
  "app/cases/page.tsx",
  "app/research/page.tsx",
  "app/method/page.tsx",
  "app/cases/[slug]/page.tsx",
  // Tests rewritten without upstream content fixtures
  "src/domain/load.test.ts",
  "src/domain/resources.test.ts",
  "src/domain/recordLinks.test.ts",
  "src/domain/panel.test.ts",
  // Comment/prose wording adjusted beyond the mechanical scrub
  "src/domain/recordLinks.ts",
  "src/components/LinkedRecordText.tsx",
  "scripts/cross-model-check.mjs",
  "scripts/triage-watch.mjs",
  "scripts/watch-literature.mjs",
  // House art style is this site's own (style-e1, docs/IMAGES.md)
  "scripts/generate-case-art.mjs",
  ".github/workflows/generate-case-art.yml",
  ".github/workflows/extract-claims.yml",
  // Exists only in this repo
  "scripts/sync-engine.mjs",
]);

const mode = process.argv.includes("--pull")
  ? "pull"
  : process.argv.includes("--check")
    ? "check"
    : null;
if (!mode) {
  console.error("usage: node scripts/sync-engine.mjs --check | --pull");
  process.exit(2);
}

const upstreamUrl = process.env.ENGINE_UPSTREAM;
if (!upstreamUrl) {
  console.error(
    "ENGINE_UPSTREAM is not set. Provide the upstream engine git URL via " +
      "the ENGINE_UPSTREAM environment variable (locally) or the " +
      "ENGINE_UPSTREAM Actions secret (CI). It is never committed. See ENGINE.md.",
  );
  process.exit(2);
}

const ROOT = process.cwd();
const SCRATCH = path.join(ROOT, ".engine-sync");
const CLONE = path.join(SCRATCH, "upstream");

fs.rmSync(SCRATCH, { recursive: true, force: true });
fs.mkdirSync(SCRATCH, { recursive: true });
try {
  execFileSync(
    "git",
    ["clone", "--depth", "1", "--quiet", upstreamUrl, CLONE],
    { stdio: ["ignore", "inherit", "inherit"] },
  );
} catch {
  console.error("Could not clone ENGINE_UPSTREAM (URL not echoed here).");
  process.exit(2);
}

/** Case-preserving scrub of the upstream project name. */
function scrub(text) {
  const cap = REPLACEMENT[0].toUpperCase() + REPLACEMENT.slice(1);
  return text
    .replaceAll(FORBIDDEN.toUpperCase(), REPLACEMENT.toUpperCase())
    .replaceAll(FORBIDDEN[0].toUpperCase() + FORBIDDEN.slice(1), cap)
    .replaceAll(FORBIDDEN, REPLACEMENT);
}

const isBinary = (buf) => buf.includes(0);

/** All files under an engine path, relative to the given root. */
function listFiles(base, rel) {
  const abs = path.join(base, rel);
  if (!fs.existsSync(abs)) return [];
  if (fs.statSync(abs).isFile()) return [rel];
  return fs
    .readdirSync(abs, { withFileTypes: true })
    .flatMap((entry) =>
      listFiles(base, path.posix.join(rel, entry.name)),
    );
}

const upstreamFiles = new Set(
  ENGINE_PATHS.flatMap((p) => listFiles(CLONE, p)),
);
const localFiles = new Set(ENGINE_PATHS.flatMap((p) => listFiles(ROOT, p)));

const divergent = []; // { file, kind }
for (const file of [...new Set([...upstreamFiles, ...localFiles])].sort()) {
  if (ALLOWLIST.has(file)) continue;
  if (!upstreamFiles.has(file)) {
    divergent.push({ file, kind: "local-only (not in upstream engine)" });
    continue;
  }
  if (!localFiles.has(file)) {
    divergent.push({ file, kind: "missing locally" });
    continue;
  }
  const up = fs.readFileSync(path.join(CLONE, file));
  const loc = fs.readFileSync(path.join(ROOT, file));
  if (isBinary(up) || isBinary(loc)) {
    if (!up.equals(loc)) divergent.push({ file, kind: "binary differs" });
    continue;
  }
  if (scrub(up.toString("utf8")) !== loc.toString("utf8")) {
    divergent.push({ file, kind: "content differs from scrubbed upstream" });
  }
}

if (mode === "check") {
  if (divergent.length === 0) {
    console.log(
      "engine in sync: all engine paths match the scrubbed upstream (allowlisted divergences excluded).",
    );
    fs.rmSync(SCRATCH, { recursive: true, force: true });
    process.exit(0);
  }
  console.log(`engine divergence in ${divergent.length} file(s):`);
  for (const d of divergent) console.log(`  - ${d.file}: ${d.kind}`);
  console.log(
    "\nEngine changes flow one way, upstream → here. Either pull " +
      "(node scripts/sync-engine.mjs --pull), or — for a deliberate " +
      "config-layer difference — add the path to the allowlist in " +
      "scripts/sync-engine.mjs with a reason.",
  );
  fs.rmSync(SCRATCH, { recursive: true, force: true });
  process.exit(1);
}

// --pull: bring non-allowlisted engine files to the scrubbed upstream state.
let wrote = 0;
let removed = 0;
for (const { file, kind } of divergent) {
  if (kind === "local-only (not in upstream engine)") {
    fs.rmSync(path.join(ROOT, file));
    console.log(`removed ${file}`);
    removed++;
    continue;
  }
  const buf = fs.readFileSync(path.join(CLONE, file));
  const out = isBinary(buf) ? buf : Buffer.from(scrub(buf.toString("utf8")));
  fs.mkdirSync(path.dirname(path.join(ROOT, file)), { recursive: true });
  fs.writeFileSync(path.join(ROOT, file), out);
  console.log(`synced ${file}`);
  wrote++;
}
fs.rmSync(SCRATCH, { recursive: true, force: true });
console.log(
  `pull complete: ${wrote} file(s) written, ${removed} removed, ` +
    `${ALLOWLIST.size} allowlisted path(s) untouched. Review the diff, run ` +
    "the checks, and commit.",
);
