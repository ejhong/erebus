# Content Policy

Erebus publishes **real content with honest provenance labels**, never
invented demo material. The living-persons rules in AGENTS.md take
precedence over everything here.

## Real citations only

- Every Source must be a real document. Fabricating a citation, quotation,
  DOI, docket number, exhibit number, page number, or locator is the one
  unforgivable failure.
- Verification status is always displayed: `verified` (document held in
  the project library), `ai_verified` (AI-checked citation, no human
  re-check), `unverified` (cited second-hand or from memory; locator
  unconfirmed).
- If any part of a citation is uncertain (e.g. a docket number remembered
  rather than checked), omit it and mark the source `unverified` with a
  note, rather than guessing.

## AI provenance is disclosed at the record level

- Claims extracted by AI agents without human hand-checking are
  `ai_extracted` and rendered with that badge. They are honest work
  products, not established findings.
- AI assessments live in append-only overlay files stamped with `runId`,
  model, date, and prompt version. The UI labels them as AI-generated
  drafts and displays their ratification standing.
- AI-performed citation verification is labeled `ai_verified`, never
  `verified`.

## Living persons (see AGENTS.md, "Living persons and active proceedings")

- The claim ladder grades evidence disputes, never anyone's guilt.
- Prosecution, defense, and official assertions are recorded as assertions
  by their source with locators (filing, docket, exhibit, transcript
  page), never restated as established fact.
- Allegations about private individuals go no further than what court
  records or on-the-record official statements state.
- Journalism is discovery, not evidence: a news report may point the
  pipeline at primary material but is superseded by it, and wire-copy
  duplication across outlets is ONE source with an independence group,
  not many.

## Studies and workpapers

Desk research (base-rate tabulations, timeline reconstructions,
discrepancy ledgers) produces working datasets whose epistemic unit is
the study, not the row. Studies are now a first-class, loader-validated,
site-rendered domain object — the full design and its ratified review
history are in `docs/STUDIES_PROPOSAL.md`; this section is the short
operating rule:

- **One YAML per study** under `content/cases/<case>/studies/<id>.yaml`
  (schema-validated, fail-closed): frozen criteria with `criteriaHash`
  (stamped via `node scripts/stamp-study.mjs <case> <id>`; any
  post-freeze edit fails the build) and pre-committed `knownCandidates`,
  method, the sourced table, findings, limitations, provenance stamps.
- **Two PRs, freeze first**: the freeze PR carries criteria only (the
  schema forbids findings before rows); the page renders publicly from
  the freeze onward as "pre-registered — collection pending" — a
  pre-registration that never collects is visible, and the weekly digest
  lists any pending more than 30 days.
- **The ledger cites the study, not its rows**: one `workpaper` Source
  record (honestly labeled, `studyId` wired both ways) plus a SMALL
  number of evidence records carrying aggregate findings — the level at
  which a reader disputes something. Superseded studies cannot keep
  ledger weight: evidence citing their workpaper fails the build.
- **Decisive rows get promoted**: any single datum that carries
  load-bearing weight graduates to a full evidence record with its own
  primary source, under the ordinary rules — the row-citation shape is
  the source-anchor shape, so promotion is a copy.

The aggregation layer is where judgment hides: which rows were excluded
matters more than any row. That is why criteria freeze first, travel
with the workpaper, and are tamper-evident.

## Research briefs are not sources

Material under `casework/` is input for case construction. Nothing in a
brief may be cited as a source; every citation a brief contains must be
independently verified against the primary document before any record
enters `content/`. See `casework/README.md`.

## Rejected claims are tombstones

A claim rejected during review keeps its record with
`reviewState: rejected` and a `rejectionReason`. This prevents future
extraction runs from re-proposing it and preserves the reasoning. Rejected
claims do not render in normal reader views.

## Source statement vs. editor inference

Evidence records keep what the source states (`sourceStatement`) strictly
separate from what we infer from it (`editorInference`). Where a
proponent's characterization of a source differs from the source itself,
the evidence record says so.

## Fairness rules

- Supporting and undermining evidence get the same structure and visual
  seriousness.
- The best conventional explanation is steelmanned, not strawmanned.
- Corrections that weaken a featured hypothesis are recorded as
  prominently as evidence that supports it.
