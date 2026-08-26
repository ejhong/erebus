# Proposal: the Study — a first-class workpaper object

Status: proposal for review (engine feature — would be built upstream and
synced here; this document lives in this repo because its motivating
material references private casework). Author: AI (Cursor agent session,
2026-08-26). Queue reference: `ENGINE.md` upstreaming queue item 3;
interim convention: `docs/CONTENT_POLICY.md`, "Studies and workpapers."

## 1. The motivating case, concretely

The Kirk case contains a live dispute the current data model cannot
resolve well. The UVU courtyard was excavated and repaved within days of
the shooting (KRK-C013): cleanup ordered September 11, pavers going in by
September 14, the lead investigator testifying he did not personally
authorize it. One camp reads this as evidence of concealment (KRK-C017);
the other as a university reopening a campus. The dispute's central
intuition — **"nobody alters a scene that fast"** — is an empirical claim
about a base rate, and nobody on either side has measured it.

The research agenda already names the fix (KRK-R011): tabulate a dozen or
more comparable cases (mass-casualty events, killings of public figures
at public venues) with, for each, the date investigators formally
released the scene, the date of first physical alteration, the interval,
the authorizing party, and the sourcing for every cell — then place the
UVU sequence against that distribution. If UVU is an outlier (especially
if alteration preceded formal release), the concealment question gains
real, citable weight. If it is typical, the anomaly deflates honestly.
Either outcome publishes (§3.11).

This is desk work. An AI can do it in an afternoon for a few dollars. The
question this proposal answers is: **where does the result live, so that
it is honest, auditable, and usable?**

## 2. Why the current model cannot hold it

The epistemic unit of that tabulation is the **study, not the row**. The
finding a reader would dispute is "UVU's release-to-alteration interval
sits at the Nth percentile of 14 comparable cases" — not any single row.
The current model offers only bad homes:

- **One evidence record carrying the aggregate** — but then the table
  itself lives nowhere citable, and a polished summary substitutes for
  primary evidence, which the constitution forbids outright.
- **Fourteen evidence records, one per comparable case** — ledger bloat;
  each row is individually weak and none is about *this* case; the
  signal (the distribution) lives in no record at all.
- **Outside the system** (a notebook, a chat transcript, a gist) — no
  §3.8 provenance, no versioning next to the assessments that lean on
  it, not visible to the check panels that ratify standing, and it rots.

The interim convention (workpapers in git that the loader ignores) was
the honest stopgap. Its weaknesses: nothing validates a workpaper, the
site never renders it (readers of the published case cannot audit the
table behind the finding), the freeze-before-audit rule (§3.12) is
enforced by agent discipline rather than structure, and its per-row
citations are invisible to the mechanical citation verification the
arbiter now runs.

## 3. What a Study is (and is not)

A **Study** is a versioned, schema-validated, site-rendered workpaper:
frozen inclusion criteria, method, a sourced table, aggregate findings,
and limitations — AI-authored project work, labeled as such, that enters
the evidence ledger only at the aggregate-finding grain.

Deliberate boundaries, to keep this from drifting toward an
original-research content farm:

- **Secondary synthesis only.** A study tabulates, cross-checks, or
  reanalyzes published and public material. It makes no novel primary
  claim about the world beyond what its rows carry.
- **No verdicts.** A study never grades a claim and never carries a
  standing. Its influence flows exclusively through ordinary Evidence
  records (the aggregate findings), which ride the existing gates: the
  merge is a content change (needs-approval tier), and new evidence
  automatically demotes the case standing until the blind panel
  re-judges the case with the study in view (§3.15). The panel — not the
  study's author — decides what the study means.
- **Crux-driven only (v1).** Every study must reference the research
  item(s) it executes (`researchIds` non-empty). No self-initiated
  studies until the crux-driven loop has a track record. This bounds
  spend and keeps studies purposeful.
- **Honest sourcing at row grain.** Every row cell that carries weight
  cites its source with a locator and the standard verification label
  (`verified` / `ai_verified` / `unverified`). A row that cannot be
  sourced is marked, not silently kept. Aggregate findings must state
  coverage honestly ("14 cases met criteria; 3 candidates excluded for
  X, listed").

## 4. The exact plan

### 4.1 Schema (`src/domain/schema.ts`)

New `StudySchema`, one YAML file per study under
`content/cases/<case>/studies/<id>.yaml`:

- `id` (e.g. `KRK-S001`), `title`, `question` (one sentence).
- `researchIds` (non-empty; must resolve), `claimIds` (must resolve).
- `criteria`: `{ frozenOn: date, inclusion: string[], exclusion:
  string[], searchProtocol: string, criteriaHash: string }`. The hash is
  computed over the criteria text at freeze time; CI recomputes it on
  every build, so any later edit to frozen criteria **fails the build**
  (§3.12 made structural — see 4.4).
- `method`: prose.
- `columns`: declared column names; `rows`: array of `{ cells:
  Record<column, string>, citation: { text, url?, doi?, locator?,
  verification }, independenceNote? }`. Row citations are inline — they
  do NOT create Source records, keeping `sources.yaml` under the
  restrictive admission rule. A decisive row graduates to a full
  Evidence record with its own primary Source under the ordinary rules.
- `findings`: array of `{ statement, evidenceId? }` — the aggregate
  findings, each optionally linked to the Evidence record that carries
  it into the ledger (dangling links fail the build).
- `limitations`: non-empty array.
- Provenance stamps as on assessment overlays: `runId`, `model`, `date`,
  `promptVersion`, `humanReviewed: false`, plus optional `supersedes`
  (studies are append-only; corrections are a new study that supersedes,
  never an edit to rows already judged).

### 4.2 Loader and integration (`src/domain/load.ts`)

Validate all studies at build time (fail closed, no dangling ids). One
Source record per published study (a new source kind, `workpaper`,
honestly labeled "AI-authored project work held in this repository") so
Evidence records citing the aggregate findings have a citable container
(§3.6). The evidence → study link renders as an ordinary source link
that lands on the study page.

### 4.3 Rendering (`app/cases/[slug]/studies/[id]/page.tsx`)

One page per study: the freeze block rendered prominently (criteria,
freeze date, protocol — before anything else, so the reader sees what
was fixed before data collection), method, the full table with per-row
citations and verification badges, findings with links to their ledger
records, limitations, and the standard AI-provenance banner. Linked from
the evidence records that cite it and from the research-agenda item it
executes. Mobile-safe table rendering (the constitution's §7).
Zero-studies cases render nothing new.

### 4.4 Freeze enforcement: the two-PR discipline

A study lands in **two PRs, in order**:

1. **Freeze PR**: the study file with criteria, method, question,
   references — and zero rows, zero findings. Small, reviewable, and the
   arbiter panel judges the criteria *before* anyone knows what the data
   will say. The `criteriaHash` is stamped here.
2. **Collection PR**: rows, findings, limitations, plus the workpaper
   Source record and the aggregate-finding Evidence records. CI verifies
   the criteria are byte-identical to the frozen state (hash) and that
   the freeze commit predates every row (git history makes the ordering
   inspectable forever).

This turns §3.12 from a norm into a mechanism: you cannot tune inclusion
criteria to the result without the diff saying so.

### 4.5 Execution workflow

V1 keeps execution manual-or-operator: a dispatchable workflow (or an
operator duty) that takes a case slug and a desk-tier research id,
drafts the freeze PR, and — after that merges — runs collection and
drafts the collection PR. Every vendor call rides the existing stamped
llm plumbing; the mechanical citation verification already checks every
DOI/URL the collection PR adds under `content/`. No scheduled/autonomous
study generation in v1.

### 4.6 What it does NOT touch

No changes to assessment, ratification, reconciliation, or arbiter
logic. No new dependencies. AGENTS.md untouched. The engine work happens
upstream (schema, loader, page, CI, workflow) and syncs here; the
upstream queue entry carries mechanics only, no casework.

## 5. What this unlocks immediately

- **KRK-R011** (the motivating study): the paving base rate, effortTier
  desk, both discriminating variables (sequence and authority) already
  specified.
- Kirk timeline discrepancy ledgers and docket/exhibit tabulations
  (KRK-R012-adjacent), and the same shapes for the September 11 and
  COVID-origins casework now in preparation.
- Upstream: the transients catalog cross-checks, YDIH replication
  tabulations, CCC null-model reanalysis summaries — several existing
  research items are desk-executable and currently have nowhere to put
  their output.

## 6. Honest limits and risks

- **It moves desk-tractable research only.** Base rates, replication
  tallies, catalog cross-checks, timeline ledgers. It does not run
  experiments; geopolymer's decisive tests stay physical. Its
  contribution to physical cruxes is sharpening what a lab should test.
- **Verification burden scales with rows.** Mechanical checks cover
  identifiers and URLs; quotations and page-level locators in rows stay
  at whatever verification label they honestly earn. A study whose rows
  are mostly `unverified` is publishable but visibly weak — the labels
  do the work.
- **Scope-creep risk** (original-research mill) is handled by the
  boundaries in §3 above: secondary synthesis, no verdicts, crux-driven,
  aggregate-grain ledger entry, ordinary gates.
- **Effort**: schema + loader + one page + CI hash check + workflow
  prompt + tests — comparable to the panel-page build; the epistemic
  design (this document) is the hard part.

## 7. Open questions for reviewers

1. Row citations inline vs. requiring Source records per row — inline is
   proposed (keeps the admission rule strict), but it does create a
   second, lighter citation format. Acceptable?
2. Is the two-PR freeze worth the friction, or is the `criteriaHash`
   check alone enough? (Proposed: both; the two-PR form is what makes
   pre-registration visible to the arbiter panel.)
3. Should a study page render on the public upstream site identically,
   or is a study a research artifact that stays one link deeper than
   case pages? (Proposed: identical rendering; auditability is the
   point.)
4. Execution rights: operator duty on a schedule vs. dispatch-only in
   v1. (Proposed: dispatch-only.)
5. Should `criteria.searchProtocol` require the literal queries/sources
   to be enumerated (stronger pre-registration, more friction)?
   (Proposed: yes for v1 — desk studies are cheap enough to re-run.)
