# Proposal: the Study — a first-class workpaper object

Status: proposal, revised after review round 1 (2026-08-26: a
founder-requested review, the upstream maintainer's review, and an
independent design review — all three on PR #32; revisions noted in §8).
Engine feature — would be built upstream and synced here; this document
lives in this repo because its motivating material references private
casework. Author: AI (Cursor agent session, 2026-08-26). Queue
reference: `ENGINE.md` upstreaming queue item 3; interim convention:
`docs/CONTENT_POLICY.md`, "Studies and workpapers."

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
UVU sequence against that distribution, in plain language ("faster than
all but one comparable case; alteration preceded formal release in two of
fourteen"), never as a percentile dressed up from a dozen rows. If UVU is
an outlier — especially if alteration preceded formal release — the
concealment question gains real, citable weight. If it is typical, the
anomaly deflates honestly. Either outcome publishes (§3.11).

This is desk work. An AI can do it in an afternoon for a few dollars. The
question this proposal answers is: **where does the result live, so that
it is honest, auditable, and usable?**

## 2. Why the current model cannot hold it

The epistemic unit of that tabulation is the **study, not the row**. The
finding a reader would dispute is the placement of UVU against the
distribution — not any single row. The current model offers only bad
homes:

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
  sourced is marked, not silently kept.
- **Honest coverage, in both directions.** Findings state coverage
  ("14 cases met criteria; 3 candidates excluded for X, listed") AND the
  direction of failed searches ("we looked for comparable cases where
  alteration preceded release and found none / found two, excluded for
  Y") — otherwise inclusion criteria silently become a one-way filter.
  This is §3.11 at study grain and costs one sentence per finding.
- **Plain-language placement.** No percentile or significance framing at
  tabulation sample sizes (§3.13): "faster than all but one comparable
  case," not "93rd percentile of n=14."

Explicit non-goals, now and if v1 succeeds: no per-study standing, no
study-level panels, no new verification vocabulary.

## 4. The exact plan

### 4.1 Schema (`src/domain/schema.ts`)

New `StudySchema`, one YAML file per study under
`content/cases/<case>/studies/<id>.yaml`:

- `id` (e.g. `KRK-S001`), `title`, `question` (one sentence).
- `researchIds` (non-empty; must resolve), `claimIds` (must resolve).
- `criteria`: `{ frozenOn: date, inclusion: string[], exclusion:
  string[], searchProtocol: string, knownCandidates: [{ name,
  disposition: include | exclude, reason }], criteriaHash: string }`.
  - `searchProtocol` enumerates the **literal queries and sources** to be
    searched — a re-runnable protocol, not a vibe.
  - `knownCandidates` pre-commits every candidate case the author is
    already aware of, with its disposition and reason. The hash catches
    post-freeze edits; this field addresses the subtler gerrymander —
    criteria written around a known population. Post-freeze discoveries
    are then visibly discoveries.
  - `criteriaHash` is computed over the criteria block at freeze time;
    CI recomputes it on every build, so any later edit to frozen
    criteria **fails the build** (§3.12 made structural).
- `method`: prose.
- `columns`: declared column names; `rows`: array of `{ cells:
  Record<column, string>, citation, independenceNote? }`. The row
  `citation` subshape is **structurally identical to the source-record
  citation shape** (url/doi/locator/verification), so the arbiter's
  mechanical citation verification covers every row with zero new code,
  and a decisive row graduating to a full Evidence record with its own
  primary Source (the ordinary rules) is a copy, not a translation. Row
  citations are inline — they do NOT create Source records, keeping
  `sources.yaml` under the restrictive admission rule.
- `findings`: array of `{ statement, evidenceId? }` — the aggregate
  findings, each optionally linked to the Evidence record that carries
  it into the ledger (dangling links fail the build). Statements follow
  the coverage and plain-language rules in §3.
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

**Supersession is wired to the ledger mechanically:** an Evidence record
citing a finding of a superseded study fails the build until re-pointed
or amended — same fail-closed spirit as every other integrity rule, no
new object.

### 4.3 Rendering — public from the freeze onward

One page per study (`app/cases/[slug]/studies/[id]/page.tsx`), rendered
**from the freeze PR onward**, not only once results exist:

- A frozen study with no rows renders as a visible pre-registration:
  the freeze block (criteria, known candidates, protocol, freeze date)
  with the banner **"pre-registered — collection pending since
  {frozenOn}"**.
- Once collected: freeze block first, then method, the full table with
  per-row citations and verification badges, findings with links to
  their ledger records, limitations, and the standard AI-provenance
  banner. Mobile-safe table rendering (§7).

Render-from-freeze is the anti-file-drawer rule: pre-registration has
two halves — freeze the protocol AND commit to publishing the result.
Without it, a deflating result could simply never get its collection PR
and the freeze would quietly age out; §3.11 is this site's signature
rule, so abandonment must be visible by construction. As a backstop, the
weekly digest lists frozen studies whose collection has been pending for
more than 30 days.

Studies link from the evidence records that cite them and from the
research-agenda item they execute. Zero-studies cases render nothing new.

### 4.4 Freeze enforcement: the two-PR discipline

A study lands in **two PRs, in order**:

1. **Freeze PR**: the study file with criteria (including known
   candidates and literal search protocol), method, question, references
   — and zero rows, zero findings. Small, reviewable, and the arbiter
   panel judges the criteria *before anyone knows what the data will
   say*. The `criteriaHash` is stamped here. The freeze PR body poses
   one specific question to the panel: **"would these criteria be
   equally defensible to someone who did not know the target case's
   value?"** — naming the pre-hoc tuning risk instead of pretending the
   hash covers it.
2. **Collection PR**: rows, findings, limitations, plus the workpaper
   Source record and the aggregate-finding Evidence records. CI verifies
   the criteria are byte-identical to the frozen state (the hash); the
   two-PR record itself shows the ordering to any auditor forever.

The hash is the enforcement; the two-PR form is the visibility. (No
third mechanism: an earlier draft added git-history ordering forensics
in CI — cut as redundant with the above.)

### 4.5 Execution: by hand in v1

No workflow, no dispatch machinery. An agent session drafts the freeze
PR and, after it merges, drafts the collection PR — following this
document, the way every other change in these repos is made today. Every
vendor call rides the existing stamped llm plumbing; the mechanical
citation verification already checks everything the collection PR adds
under `content/`. Automation is deferred until study volume justifies it
— orchestration ahead of demand is how machinery accretes.

### 4.6 Pilot before generalizing

The schema above was designed against one motivating case, so it is
piloted against exactly that case before anything generalizes:

1. **KRK-S001 executing KRK-R011** (the paving base-rate study), end to
   end in this repo: freeze PR → panel → collection PR → aggregate
   findings → blind re-panel of the case.
2. Let the real friction answer the remaining design questions; amend
   this document with what was learned.
3. Then the first public study upstream — the upstream maintainer
   nominates its copy-defect base-rate census (TRN-R007), a citable
   base-rate table inside a live academic dispute.

### 4.7 What it does NOT touch

No changes to assessment, ratification, reconciliation, or arbiter
logic. No new dependencies. AGENTS.md untouched. The engine work happens
upstream (schema, loader, page, CI) and syncs here; the upstream queue
entry carries mechanics only, no casework.

## 5. What this unlocks immediately

- **KRK-R011** (the pilot): the paving base rate, effortTier desk, both
  discriminating variables (sequence and authority) already specified.
- Kirk timeline discrepancy ledgers and docket/exhibit tabulations, and
  the same shapes for the September 11 and COVID-origins casework now in
  preparation.
- Upstream: the transients copy-defect census (TRN-R007), YDIH
  replication tabulations, CCC null-model reanalysis summaries — several
  existing research items are desk-executable and currently have nowhere
  to put their output.

## 6. Honest limits and risks

- **It moves desk-tractable research only.** Base rates, replication
  tallies, catalog cross-checks, timeline ledgers. It does not run
  experiments; physical decisive tests stay physical. Its contribution
  to physical cruxes is sharpening what a lab should test.
- **The freeze cannot prevent pre-hoc tuning.** Whoever drafts the
  criteria already knows the target case's value — it is in the case
  file — so criteria can be tuned *before* the freeze and the hash will
  faithfully certify the tuned criteria forever. Inherent to
  retrospective base-rate work. Mitigations, none complete: the
  known-candidates declaration (§4.1), literal query enumeration
  (§4.1), and the freeze-PR panel question (§4.4). Named here because a
  guarantee this feature cannot make should not be implied.
- **The file-drawer risk is closed structurally** (render-from-freeze,
  §4.3), not by trust.
- **Verification burden scales with rows.** Mechanical checks cover
  identifiers and URLs; quotations and page-level locators stay at
  whatever verification label they honestly earn. A study whose rows are
  mostly `unverified` is publishable but visibly weak — the labels do
  the work.
- **Scope-creep risk** (original-research mill) is handled by the §3
  boundaries and non-goals.
- **Effort**: schema + loader + one page + CI hash and supersession
  checks + tests — comparable to the panel-page build. The epistemic
  design (this document) is the hard part.

## 7. Questions resolved in review round 1

1. **Row citations: inline** (unanimous) — keeps the source admission
   rule strict; verification labels carry the honesty — with the
   reviewer's condition adopted: the inline shape is structurally
   identical to the source citation shape (§4.1).
2. **Two-PR + hash: both** (unanimous) — the hash is retrospective
   proof, the two-PR form is what makes pre-registration visible to the
   panel; paired with render-from-freeze so the two-PR form cannot
   create a file drawer. Git-ordering forensics cut.
3. **Public rendering: identical, and from the freeze onward**
   (unanimous, strengthened) — an unauditable table behind a finding is
   the "trust me" this project exists to refuse.
4. **Execution: no machinery at all in v1** (adopting the strictest
   review) — sessions draft both PRs by hand; `researchIds` non-empty
   does the real scope-limiting.
5. **Literal query enumeration: yes** (unanimous) — re-runnable
   protocol, and a partial mitigation of pre-hoc tuning.

## 8. Revision log

- **2026-08-26 (round 1):** Adopted from the three PR #32 reviews:
  render-from-freeze anti-file-drawer rule + 30-day pending backstop;
  `knownCandidates` freeze declaration; pre-hoc tuning named as an
  unclosable risk with its freeze-PR panel question; supersession wired
  to CI; row-citation shape unified with the source citation shape;
  failed-search direction required in findings; plain-language placement
  (no small-n percentiles, including in §1 of this document); execution
  workflow cut from v1; git-ordering CI check cut; explicit non-goals;
  KRK-R011 single-study pilot, then TRN-R007 as the first public study
  upstream.
