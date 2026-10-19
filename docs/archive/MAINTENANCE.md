# Maintenance: an AI-operated site, and the observer's loop

This site is operated by AI as a declared experiment (AGENTS.md §3.15).
The human founder holds exactly two powers — the kill switch (revert
anything by runId, or freeze the repo) and the constitution (`AGENTS.md`,
the one file reserved to a human). Everything else is the agents' job.

Every `needs-approval` PR is judged by the constitutional arbiter
(`.github/workflows/arbiter.yml` → `scripts/arbiter.mjs`): five
independent vendor seats each read the diff against `AGENTS.md` (taken
from the base revision, so a change is judged by the constitution it is
trying to change) and vote complies / violates / unsure. Verdict: **pass**
needs ≥4 complies and zero violates — one unsure or failed seat is
tolerated, a single substantiated objection is not, and a `violates` vote
must name the rule it invokes or it counts as unsure. The tally posts as a
sticky PR comment with every seat's reasoning, and the check renders green
(pass) or red (parked). The diff, PR title, and PR body are fenced as
untrusted data — a seat that follows instructions found in the material
under review has failed. Oversized diffs are truncated loudly; seats that
error or refuse become explicit unsure votes, never dropped from the
denominator.

## The observer's loop

**Feed it if you feel like it** — inbox drops enter as contributor
material: quoted, attributed, weighed, and arbitrated like correspondence
from any outside researcher. Feeding it is optional; the watch,
reassessment, and editorial-audit loops run without input.

**Feed it** (any time, from anywhere): drop files into `inbox/` — from
your phone via the GitHub app or github.dev, or push from a laptop. Three
kinds of drops (full convention in `inbox/README.md`): commentary notes,
link lists, documents.

**Wait** (or don't): the **Maintain** workflow runs every Monday, or run
it now from the Actions tab (workflow_dispatch).

**Read and tap**: each run opens one PR whose body is a plain-language
digest — what changed and why, readable on a phone. Two classes:

| Label | Meaning | What you do |
| --- | --- | --- |
| `auto:low-risk` | Reversible-by-runId, touches no featured content: new proposals, inbox moves, **new** append-only assessment overlays, append-only catalog-claim/source additions. | Nothing. It auto-merges when CI is green. Skim the digest if curious. |
| `needs-approval` | Anything touching featured claims, article/overview text, case records, review states, statements about named persons, existing human-attributed content, or code. | Read the digest, tap **Merge** (or comment / request changes). |

The classification is **enforced, fail-closed**: the `PR risk check`
workflow re-derives the class from the actual diff
(`scripts/classify-pr-risk.mjs`), and a PR labeled `auto:low-risk` whose
diff exceeds the allowlist fails the check, which blocks auto-merge.

Why auto-merging **new** assessment overlays stays low-risk: standing is
derived, never stored, and it only fails DOWN. `displayAssessment()`
always shows the latest draft, stamped with a ratification standing
computed at build time from the independent check runs: **ratified**
(≥4-model panel, at most one dissenter on the case verdict, no
load-bearing claim contested, panel newer than the content), **contested**
(panel disagrees — displayed, never hidden), or **unratified** (panel too
small or the content moved after it judged). An auto-merged overlay can
change the displayed *narrative*, but it cannot mint *standing*: a new
draft or new evidence automatically demotes the case to unratified until
independent models re-judge the current file.

**Living-persons override (AGENTS.md):** a correction or takedown request
concerning a living person is processed before any other maintenance
work, and nothing in the low-risk lane may carry a statement about a
named person into featured content.

## What happens automatically

Weekly (or on demand), the Maintain workflow:

1. **Processes the inbox** (`scripts/process-inbox.mjs`): commentary →
   proposed editorial actions in `proposals/inbox/<runId>/`, each carrying
   the verbatim quote; links → fetched, verified, proposed as source
   records with honest verification labels (`ai_verified` only when
   actually fetched); documents → the extraction pipeline; processed items
   move to `inbox/processed/<runId>/`.
2. **Refreshes assessments** (`scripts/reassess-changed.mjs`): for each
   case whose claims/evidence/sources changed in git after its latest
   assessment overlay, drafts a **new** overlay file (never edits an old
   one), stamped `humanReviewed: false` with runId/model/promptVersion;
   structurally validated before writing, discarded (and reported) if
   invalid.
3. **Corrects the editorial layer** (same script, second pass): for each
   reassessed case, reads `overview.md` and `research.yaml` against the
   current records and proposes exact-string corrections for factual
   conflicts only — never style, tone, or additions. Edits are exact
   string replacements (ambiguous or short spans are rejected), claim/plate
   annotations must survive, research edits are re-parsed after splicing,
   only prose fields are editable, and every applied edit appends a
   history entry. The diff touches featured content, so the classifier
   marks the PR `needs-approval` — nothing in this pass reaches the site
   on its own. `node scripts/reassess-changed.mjs --dry-run --case <slug>`
   previews without writing.
4. **Watches the literature** (`scripts/watch-literature.mjs`): runs each
   case's declared watch queries (optional per-case `watch.yaml`,
   validated at build time) against arXiv and Crossref and surfaces newly
   published items as **discovery-only** proposals under
   `proposals/watch/<runId>/` — exactly as the APIs returned them, all
   labeled `unverified`. Nothing is added to `sources.yaml`
   automatically. Un-promoted runs expire after 60 days. Possible
   duplicates are surfaced and labeled, never silently dropped.
5. **Triages the watch results** (`scripts/triage-watch.mjs`): one model
   call per case judges every surfaced item into `import` / `shelf` /
   `archive` with recorded reasons, fail-closed on malformed replies; an
   item flagged `possibleDuplicateOf` can never be imported (guarded in
   code, `scripts/lib/triage.mjs`). Imports queue a verification request
   as an inbox link drop for the next run. Every archived item is also
   appended to `proposals/watch/archive-ledger.yaml`, the audit trail for
   omissions.
6. **Opens the PR** with the digest body and the risk label.

For case fields' watch-query syntax and triage details, read the header
comments in the scripts themselves — they are the authoritative docs.

## Cross-model checks

`node scripts/cross-model-check.mjs <case-slug>` re-assesses one case with
every vendor whose API key is configured (ANTHROPIC/OPENAI/GEMINI/XAI),
each judge blind to all prior assessments. Passing replies install as
append-only `role: check` overlays in the case's `assessments/` directory;
malformed replies land in `proposals/cross-model-failures/` and are never
installed. The case page's concurrence panel then reports agreement with
the displayed assessment, naming split claims as review entry points.
Re-run after a case changes materially; each run is dated and stamped, so
history accumulates like any overlay.

## Where accountability lives

- Founder commentary is the human editorial record: the AI only translates
  it into proposed updates; every proposal shows the exact words beside
  it. If a translation misreads you, the record shows both texts — yours
  wins.
- Everything machine-produced stays honestly labeled: `ai_extracted`
  claims, `humanReviewed: false` overlays, `ai_verified`/`unverified`
  sources. Nothing pretends to be reviewed until a named human reviews it.

## Reverting a run

Every generated record carries one `runId`. To undo a run:

1. `git log --oneline | grep <runId>` (or find the merge PR) and revert
   the commit(s); or
2. surgically: delete `proposals/**/<runId>/`, delete the overlay file
   named `<runId>.yaml`, move files back out of
   `inbox/processed/<runId>/`, and remove any records whose
   `origin.runId` matches.

Since low-risk changes are append-only by policy, reverting them never
damages surrounding content.

## Setup requirements (once)

See `docs/HOSTING.md` for the full secrets table. In short: an LLM key
(`ANTHROPIC_API_KEY` preferred), the `EXTRACT_MODEL` Actions variable to
pin the model, optionally `MAINTENANCE_PAT` so maintenance PRs trigger CI,
repo auto-merge enabled, and a branch ruleset requiring the CI and PR-risk
checks so auto-merge only completes when they are green.
