#!/usr/bin/env node
/**
 * The engine sync: this site runs the engine developed in its upstream
 * repository, pulled here unchanged except for the upstream's name, which is
 * rewritten to this site's (case-preserving) so that nothing a reader sees
 * names it (AGENTS.md §4). A site is its own in its constitution (AGENTS.md),
 * its config (`config/`: identity, theme, rules for models, models, budget),
 * its content, and its docs — never in the engine's code (ENGINE.md).
 *
 *   node scripts/sync-engine.mjs --check   # exit 1 if an engine file differs from the renamed upstream
 *   node scripts/sync-engine.mjs --pull    # bring every engine file to the renamed upstream
 *
 * The upstream is public: https://github.com/ejhong/<upstream>.git, its `main`,
 * unless ENGINE_UPSTREAM (a git URL or path) and ENGINE_REF (a branch) say
 * otherwise — to try an engine change before it merges upstream.
 *
 * ALLOWLIST: engine paths this site keeps its own, each with its reason.
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
  "protocols",
  "operator",
  "package.json",
  "package-lock.json",
  "tsconfig.json",
  "eslint.config.mjs",
  "postcss.config.mjs",
  "vitest.config.ts",
  "next.config.ts",
];

/** Within the engine paths, what is never the engine's: the upstream's own history. */
const NOT_ENGINE = [/^protocols\/archive\//, /^scripts\/migrations\//];

const ALLOWLIST = new Set([
  // This file: the sync itself, which exists only here.
  "scripts/sync-engine.mjs",
  // The house art style is this site's own (style-e1, docs/IMAGES.md): the place, painted, dissolving into its survey.
  "scripts/generate-case-art.mjs",
  ".github/workflows/generate-case-art.yml",
]);
const LOCAL_ONLY = new Set(["scripts/sync-engine.mjs"]);

const mode = process.argv.includes("--pull") ? "pull" : process.argv.includes("--check") ? "check" : null;
if (!mode) {
  console.error("usage: node scripts/sync-engine.mjs --check | --pull");
  process.exit(2);
}

const upstreamUrl = process.env.ENGINE_UPSTREAM || `https://github.com/ejhong/${FORBIDDEN}.git`;
const ref = process.env.ENGINE_REF || "main";
const ROOT = process.cwd();
const SCRATCH = path.join(ROOT, ".engine-sync");
const CLONE = path.join(SCRATCH, "upstream");

fs.rmSync(SCRATCH, { recursive: true, force: true });
fs.mkdirSync(SCRATCH, { recursive: true });
try {
  execFileSync("git", ["clone", "--depth", "1", "--quiet", "--branch", ref, upstreamUrl, CLONE], { stdio: ["ignore", "inherit", "inherit"] });
} catch {
  console.error(`Could not clone the engine (${ref}).`);
  process.exit(2);
}
const upstreamCommit = execFileSync("git", ["-C", CLONE, "rev-parse", "HEAD"], { encoding: "utf8" }).trim();

/** Case-preserving rewrite of the upstream project's name to this site's. */
function scrub(text) {
  const cap = REPLACEMENT[0].toUpperCase() + REPLACEMENT.slice(1);
  return text
    .replaceAll(FORBIDDEN.toUpperCase(), REPLACEMENT.toUpperCase())
    .replaceAll(FORBIDDEN[0].toUpperCase() + FORBIDDEN.slice(1), cap)
    .replaceAll(FORBIDDEN, REPLACEMENT);
}

const isBinary = (buf) => buf.includes(0);

function listFiles(base, rel) {
  const abs = path.join(base, rel);
  if (!fs.existsSync(abs)) return [];
  if (fs.statSync(abs).isFile()) return NOT_ENGINE.some((re) => re.test(rel)) ? [] : [rel];
  return fs.readdirSync(abs, { withFileTypes: true }).flatMap((entry) => listFiles(base, path.posix.join(rel, entry.name)));
}

const upstreamFiles = new Set(ENGINE_PATHS.flatMap((p) => listFiles(CLONE, p)));
const localFiles = new Set(ENGINE_PATHS.flatMap((p) => listFiles(ROOT, p)));

const divergent = [];
for (const file of [...new Set([...upstreamFiles, ...localFiles])].sort()) {
  if (ALLOWLIST.has(file)) continue;
  if (!upstreamFiles.has(file)) {
    divergent.push({ file, kind: "local-only" });
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
  if (scrub(up.toString("utf8")) !== loc.toString("utf8")) divergent.push({ file, kind: "differs" });
}

if (mode === "check") {
  fs.rmSync(SCRATCH, { recursive: true, force: true });
  if (divergent.length === 0) {
    console.log(`engine in sync with ${ref} at ${upstreamCommit.slice(0, 10)}`);
    process.exit(0);
  }
  console.log(`engine differs from ${ref} at ${upstreamCommit.slice(0, 10)} in ${divergent.length} file(s):`);
  for (const d of divergent) console.log(`  - ${d.file}: ${d.kind}`);
  process.exit(1);
}

let wrote = 0;
let removed = 0;
for (const { file, kind } of divergent) {
  if (kind === "local-only") {
    if (LOCAL_ONLY.has(file)) continue;
    fs.rmSync(path.join(ROOT, file));
    removed++;
    continue;
  }
  const buf = fs.readFileSync(path.join(CLONE, file));
  fs.mkdirSync(path.dirname(path.join(ROOT, file)), { recursive: true });
  fs.writeFileSync(path.join(ROOT, file), isBinary(buf) ? buf : Buffer.from(scrub(buf.toString("utf8"))));
  wrote++;
}
fs.writeFileSync(path.join(ROOT, "ENGINE_VERSION"), `${upstreamCommit}\n`);
fs.rmSync(SCRATCH, { recursive: true, force: true });
console.log(`pulled the engine at ${upstreamCommit.slice(0, 10)} (${ref}): ${wrote} file(s) written, ${removed} removed; ENGINE_VERSION records the commit`);
