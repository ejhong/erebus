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

The upstream is `https://github.com/ejhong/aletheia.git`, and the sync
tooling reads it from the `ENGINE_UPSTREAM` environment variable / GitHub
Actions secret.

**The name rule** (AGENTS.md §4, narrowed by founder amendment
2026-08-25): the upstream project's name must not appear in the rendered
site's inputs — `content/`, `src/`, `app/`, `public/` — so a reader of
this site never encounters it. CI enforces that with a fail-closed,
case-insensitive guard scoped to those directories. Elsewhere in the
repository (this file, docs, casework, tooling, commit history) the
upstream may be named freely. The original repo-wide rule was dropped
because it exceeded its purpose and was unachievable anyway: this repo's
git history predates the split and contains the name throughout.

The sync tooling still renames every pulled text file to this project's
name (case-preserving) and compares local files against the *renamed*
upstream — not for secrecy, but because upstream code carries its own
project name in UI strings, prompt versions, and comments, and this site
needs its own identity. The rename also keeps `src/` and `app/` clean for
the scoped guard.

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

## Upstreaming queue

Code flows one way (upstream → here), but *proposals* flow back: when
work in this repo produces something the engine should own, it is
recorded here as a description — never pushed upstream from this repo
directly. To flush the queue, run an agent session on the upstream
repository and hand it the relevant entries. After an item merges
upstream, pull it back with `sync-engine.mjs --pull` and delete the
corresponding allowlist entries in `scripts/sync-engine.mjs` — allowlist
entries are loans, not property. Queue descriptions must carry engine
mechanics only: no case content, no material from this private repo's
casework.

**Multi-repo session rule.** When an agent session has both this repo and
the upstream checked out (a multi-repo Cloud Agent environment), nothing
from this repository may be committed to the upstream: no casework, no
content, no docs text, no quotes — engine code and queue-entry mechanics
only. The upstream is public; this repository is not. Treat every
cross-repo copy as a publication decision.

Current queue (2026-08-25):

1. ~~Zero-content static export.~~ **Merged upstream 2026-08-26**
   (aletheia PR #81) and pulled back the same day; the six allowlist
   entries under "zero-content static-export support" are retired with it
   (the upstream port left only import-order differences here).
2. ~~Inbox-response workflow token bug.~~ **Merged upstream 2026-08-26**
   (aletheia PR #77) and pulled back the same day; the allowlist entry for
   `inbox-response.yml` is retired with it.
3. **Study/workpaper domain object (feature proposal — build upstream
   first).** Desk research produces datasets (base-rate tabulations,
   replication tables, discrepancy ledgers) whose epistemic unit is the
   study, not the row. Proposed: a per-case `studies/` object with frozen
   inclusion criteria (freeze date), method, a sourced table, findings,
   and limitations — rendered on the case page and linkable from evidence
   records, so ledgers stay coarse (aggregate findings only) while the
   full table remains auditable on the site. Interim convention in this
   repo: `docs/CONTENT_POLICY.md`, "Studies and workpapers."
4. ~~Empty-state rendering for the homepage and case index.~~ **Merged
   upstream 2026-08-26** (aletheia PR #81, in the upstream's own design
   idiom). This repo's page files stay allowlisted — they diverge for
   design register and the living-persons notice, not for the empty
   states — and the upstream research page no longer exists, so its empty
   state is moot.
5. ~~Design objection to the contested-reconciliation mechanism.~~
   **Merged upstream 2026-08-26** (aletheia PR #75, arbiter 5/5) and
   pulled back the same day: reconsideration overlays now stamp
   `reconciles` with the engaged check runIds, ratification refuses to
   ratify a reconciled draft until a blind check outside that list judges
   it, and stale-checks re-panels such cases automatically. The original
   dissent and the four complies readings remain preserved verbatim in
   this repo's PR #8 arbiter comment.
6. ~~Arbiter seats cannot verify citations.~~ **Merged upstream 2026-08-26**
   (aletheia PR #80, arbiter 5/5 — judged by the very mechanism it ships)
   and pulled back the same day: the arbiter now resolves every DOI,
   arXiv id, and URL a diff adds under `content/` (Crossref + doi.org
   fallback, arXiv API, HTTP) and feeds the results to the seats as tool
   output (prompt v3) — RESOLVES means judge honest use, FAILS is
   positive evidence, UNCHECKED never gates. Quotations and page-level
   locators remain seat judgment.
