# ENGINE.md — where the code comes from

This site runs on an engine developed in a separate upstream repository.
**Engine changes flow one way: upstream → here.** This repo edits only

- content (`content/`, `casework/`, `inbox/`, `proposals/`),
- configuration (`src/config/site.ts`, hosting, design tokens),
- its own constitution and docs (`AGENTS.md`, `docs/`).

Do not implement engine features or fixes here — make them upstream and
sync them in. Deliberate config-layer divergences are the narrow
exception, and each one is listed in the allowlist in
`scripts/sync-engine.mjs` with a reason.

## The upstream reference

The upstream is identified ONLY by the `ENGINE_UPSTREAM` environment
variable / GitHub Actions secret — a git URL. It is never committed as a
literal anywhere in this repo, because the upstream project's name must
not appear in any committed file (any casing). CI enforces that with a
fail-closed, case-insensitive forbidden-string guard on every push and
PR.

Because upstream files legitimately contain that name, the sync tooling
scrubs every pulled file (case-preserving rename to this project's name)
and compares local files against the *scrubbed* upstream — so the scrub
itself never shows up as divergence.

## Engine paths

`src/`, `app/`, `scripts/`, `.github/workflows/`, `package.json`,
`package-lock.json`, `tsconfig.json`, `eslint.config.mjs`,
`postcss.config.mjs`, `vitest.config.ts`, `next.config.ts`.

Everything else (content, casework, docs, AGENTS.md, README) is this
repo's own and is never touched by the sync.

## Commands

```bash
# Report divergence (exit 1 if any non-allowlisted engine file differs):
ENGINE_UPSTREAM=<git-url> node scripts/sync-engine.mjs --check

# Pull: overwrite non-allowlisted engine files with the scrubbed upstream
# state (also removes local engine files the upstream no longer has):
ENGINE_UPSTREAM=<git-url> node scripts/sync-engine.mjs --pull
```

After a pull: review the diff, run `npm run typecheck && npm run lint &&
npm test && npm run build`, and commit. If upstream renamed or added
config-layer files that this site must keep different, update the
allowlist in the same commit and record the reason in
`docs/DECISIONS.md`.

## CI integration

The CI workflow runs `--check` as a **warning, not a hard fail** (so
deliberate divergences under review don't block content work), and skips
it with a notice when the `ENGINE_UPSTREAM` secret is unset. The
forbidden-string guard, by contrast, is always a hard fail.
