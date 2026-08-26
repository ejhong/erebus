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

1. **Zero-content static export.** `output: export` fails when a dynamic
   route generates zero params. Fix shipped here: a pure helper
   (`src/domain/staticExport.ts`) emits one reserved placeholder param per
   empty route, and the five dynamic-route pages render `notFound()` for
   unknown ids (replacing thrown errors). Affected files are listed in the
   sync allowlist under "zero-content static-export support."
2. **Inbox-response workflow token bug (live upstream bug).** The
   `inbox-response.yml` dispatch job grants only `actions: write`; `gh
   workflow run` first resolves the repo's default branch and fails with
   "Resource not accessible by integration." Fix shipped here: add
   `contents: read` to the workflow's permissions block.
3. **Study/workpaper domain object (feature proposal — build upstream
   first).** Desk research produces datasets (base-rate tabulations,
   replication tables, discrepancy ledgers) whose epistemic unit is the
   study, not the row. Proposed: a per-case `studies/` object with frozen
   inclusion criteria (freeze date), method, a sourced table, findings,
   and limitations — rendered on the case page and linkable from evidence
   records, so ledgers stay coarse (aggregate findings only) while the
   full table remains auditable on the site. Interim convention in this
   repo: `docs/CONTENT_POLICY.md`, "Studies and workpapers."
4. **Empty-state rendering for the homepage, case index, and research
   page** (lower priority; useful for bootstraps and full-archive states).
   Shipped here in the corresponding page files, listed in the allowlist.
5. **Design objection to the contested-reconciliation mechanism (from
   this repo's arbiter panel, 2026-08-25).** On the engine-sync PR
   carrying `scripts/reconcile-contested.mjs`, one seat (Opus 5) filed a
   substantiated §3.15 objection while four seats judged the mechanism
   compliant: the reconsideration draft is written non-blind (with every
   seat's dissent in hand) and standing then re-derives against the
   EXISTING check runs — so a contested standing can clear by moving the
   draft toward the judges' verdicts without any independent model
   judging the new draft. Proposed upstream fix: a contested→ratified
   transition after reconciliation requires at least one fresh blind
   check of the reconciled draft (or the standing derivation should
   treat post-reconciliation drafts as staling the panel). The dissent
   and the four complies readings are preserved verbatim in this repo's
   PR #8 arbiter comment.
6. **Arbiter seats cannot verify citations (design observation, from this
   repo's PR #10 panel, 2026-08-25).** Panel seats judge a diff against
   the constitution but have no way to check that a cited source,
   locator, or quotation is real — so an honest seat facing
   citation-heavy content must vote "unsure", which parks the PR
   regardless of its quality. Proposed upstream direction: separate
   mechanical citation verification (resolvable identifiers, reachable
   URLs, checked quotations) from editorial judgment, feed the
   verification result to the seats as an input, and instruct seats to
   judge the editorial layer conditional on it — so "unsure because
   unverifiable" stops masquerading as editorial doubt. (Recovered from
   closed PR #11, whose body described it but whose diff never carried
   it.)
