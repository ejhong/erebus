# Decisions log — Erebus

Append-only. Newest entries at the bottom. Read this file first: it records
the current confirmed direction and supersedes anything in other docs that
conflicts with it.

---

## 2026-08-25 — Bootstrap: Erebus engine, constitution, and hosting scaffold

**Decided by:** founder (direct instruction); implemented by AI (Cursor
cloud agent, Claude Fable 5).

Erebus is bootstrapped in this private repository as an AI-operated,
versioned evidence map of contested public events (assassinations,
disasters, alleged cover-ups). Decisions made at bootstrap:

1. **Engine, not fork-and-drift.** The engine (src/, app/, scripts/,
   workflows, configs) is copied from the upstream engine repository and
   flows ONE WAY, upstream → here. This repo edits only content,
   configuration, and its own constitution. `scripts/sync-engine.mjs`
   pulls engine paths from the `ENGINE_UPSTREAM` secret and CI warns (not
   fails) on divergence outside an explicit allowlist. The founder is
   further automating the upstream; those improvements arrive here via
   sync, not reimplementation.

2. **Independence in naming.** The upstream project's name must not appear
   in any committed file (any casing) — the site is to be seen as
   independent. Enforced by a fail-closed CI guard assembling the pattern
   from pieces. The upstream is referenced only via the `ENGINE_UPSTREAM`
   Actions secret (a git URL). Note: this repository's git *history* was
   seeded from the upstream mirror and still contains its name and content;
   the guard covers committed files at HEAD, which is what the site builds
   from. A history fresh-start (new root commit) is possible later if the
   founder wants the lineage invisible to repo collaborators too.

3. **Zero cases at launch.** All upstream content, case histories, image
   manifests, and project-history docs were removed, not carried. The UI
   renders a deliberate empty state on the homepage, /cases, and /research
   with zero cases. Planned first cases (arriving later as research briefs
   under casework/): the Charlie Kirk assassination, 9/11 evidence
   disputes, COVID origins.

4. **Living persons and active proceedings** section added to the
   constitution (AGENTS.md §3): evidence disputes are graded, never guilt;
   official assertions stay labeled as assertions; presumption of
   innocence displayed; private-individual allegations limited to court
   records and on-the-record statements; journalism is discovery, not
   evidence; corrections/takedowns processed before all other work. A
   living-persons and corrections notice renders on every case page.

5. **Automation runs exactly as the upstream** — founder instruction,
   2026-08-25, superseding the earlier bootstrap plan of disabling
   auto-merge and crons. The weekly Maintain cron, the tiered merge policy
   with the `auto:low-risk` auto-merge lane (enforced fail-closed by the
   PR risk check), and the constitutional arbiter on needs-approval PRs
   are all kept. Accordingly, the living-persons section's merge bullet
   was amended at bootstrap: the auto-merge lane covers only
   reversible-by-runId material that never touches featured content;
   anything touching featured claims, article text, case records, or any
   statement about a named person is needs-approval.

6. **Hosting: Cloudflare Pages, private.** Static export at the repo root
   (no basePath); the GitHub Pages deploy workflow was removed. Access
   control is Cloudflare Access (email allowlist, one-time PIN) in front
   of the pages.dev domain — never authentication built into the site.
   Setup steps and the eventual Actions secrets are in `docs/HOSTING.md`.

7. **casework/ is committed.** This repo is private, so research briefs
   live in-repo under `casework/<case-slug>/` (the upstream setup
   gitignores such material). Briefs are inputs for case construction,
   never citable sources; every citation inside them must be independently
   verified before any record enters `content/`. See `casework/README.md`.

8. **Design: cold modern-technical, not the upstream's warm Victorian
   register.** Founder direction (2026-08-25): "conspiracies are more of a
   cold modern feel." Space Grotesk display + Inter body + IBM Plex Mono
   record machinery; cool porcelain/steel-blue palette (token names kept
   for engine compatibility, values changed); engraving ornaments removed
   in favor of hand-built instrument-chart SVG; photo plates keep a cool
   steel duotone; generated cover art uses a new house style (style-e1):
   minimal technical-diagram illustration in cold pigments, still never
   depicting evidence. See `docs/IMAGES.md`.

9. **Site name is one config value** (`src/config/site.ts`) so it can
   change cheaply. Current name: Erebus; placeholder tagline: "An evidence
   map of contested public events." No external URLs configured. The
   GitHub repository was briefly renamed to ejhong/ebs during bootstrap and
   renamed back to ejhong/erebus by the founder (GitHub keeps a redirect
   from the interim name).

10. **The upstream-name rule is narrowed to the site's inputs (founder
    amendment, 2026-08-25).** The bootstrap's repo-wide rule — the
    upstream engine project's name never in any committed file, upstream
    URL only as a secret — exceeded the founder's actual requirement,
    which was only that the *site* never reference the upstream. It was
    also unachievable: this repo's git history predates the split and
    contains the name throughout, so the guard policed the tree while
    every clone carried the name underneath. Its one day of operation
    cost a PDF-to-text re-rendering of founder-supplied briefs, two
    arbiter parks, and scrubbed working documents. New rule (AGENTS.md
    §4): the name must not appear in `content/`, `src/`, `app/`, or
    `public/` — enforced by the same fail-closed CI guard, scoped;
    everywhere else it may be written freely, including the upstream URL
    in `ENGINE.md`. The engine-sync rename survives unchanged, reframed
    as what it always mechanically was: an identity rename (upstream code
    carries its own name in UI strings and prompt versions), which also
    keeps `src/` and `app/` clean for the scoped guard. Already-scrubbed
    casework files stay as they are; their repo notes remain accurate
    history.

## 2026-08-26 — Global research page removed (following upstream); sync warns on upstream-deleted allowlisted files

**Decided by:** founder (direct instruction); implemented by AI (Cursor
cloud agent, Kimi K3).

Upstream removed its global research page ("The Price of Truth",
upstream PR #72: the founder judged the cross-case aggregate not useful;
per-case research agendas remain on every case page). The removal never
reached this repo because its entire footprint — `app/research/page.tsx`,
the nav entry in `src/config/site.ts`, the homepage link in
`app/page.tsx` — was allowlisted in `scripts/sync-engine.mjs`, and
allowlisted paths are invisible to both `--check` and `--pull`.

Two changes:

1. **The removal is mirrored here:** `app/research/` deleted, nav and
   homepage links removed, and the `app/research/page.tsx` allowlist
   entry retired.
2. **The structural blind spot is narrowed:** allowlisting covers
   deliberate *content* divergence, but when upstream deletes an
   allowlisted file outright, the divergence reason no longer applies
   and the deletion was silently invisible forever. `sync-engine.mjs`
   now warns (never fails) when an allowlisted local file no longer
   exists upstream, so such deletions surface for review instead of
   persisting by accident.

## 2026-08-26 — Erebus goes public: GitHub Pages, no access control, casework removed

**Decided by:** founder (direct instruction); implemented by AI (Cursor
cloud agent, Claude Fable 5). The constitutional amendments below are the
founder's reserved act (AGENTS.md §3.15); the AI drafted the wording.

Erebus moves from Cloudflare Pages behind Cloudflare Access (email
allowlist, one-time PIN) to **GitHub Pages with no access control**. The
site becomes public and unadvertised: open to anyone who finds it,
promoted to no one.

The founder's reasoning: the site is neutral, data-driven and
non-accusatory, and grades evidence disputes rather than anyone's guilt —
so neither side of any of its cases is likely to enjoy it, and gating it
was doing more to signal secrecy than to protect anything. The
constitution already stakes accountability on inspectability; a private
audit trail is a weaker version of that claim.

1. **Three constitutional clauses amended** (AGENTS.md):
   - §2 product identity: "a private publication for the founder and a few
     invited readers" becomes "a public publication, unadvertised."
   - §4 hosting: Cloudflare Pages behind Cloudflare Access becomes GitHub
     Pages with no access control.
   - §4 casework: research briefs are **no longer committed to this
     repository**. See item 2.

2. **casework/ is removed entirely, and this is the blocking condition for
   going public.** Two independent reasons, either sufficient:
   - **Copyright.** The tree held ~27 MB of third-party material kept as
     discovery aids: two Rootclaim debate documents, the full text of a
     book on the September 11 attacks, and an advocacy booklet.
     `casework/README.md` permitted this expressly "while the repository is
     private" and forbade republication. Making the repository public
     republishes all four, including a complete book.
   - **Living persons.** Briefs contain material the living-persons rules
     deliberately kept out of `content/` — the Kirk change log records one
     cluster dropped for photo-interpretation insinuations about a named
     private individual. Publishing the briefs would publish precisely what
     the constitution excluded from the site.

   Briefs are now held privately outside the repository. They remain what
   they always were: inputs for case construction, never citable, with
   every citation in them verified against the primary document before any
   derived record enters `content/`.

3. **Dangling `origin.ref` breadcrumbs are accepted deliberately.** 71
   claims across three cases name a brief in `origin.ref` (for example
   "casework/covid-origins digest — C001"). Those strings are left
   untouched. They record where an extraction came from, which remains
   true; they were never citations, and briefs were never openable by a
   reader even when the repository was private. Rewriting 71 provenance
   fields to tidy the appearance would be a mass edit of provenance
   records — exactly the kind of change the arbiter should question — to
   fix a cosmetic problem. The amended §4 states plainly that such a
   reference is not something a reader can open.

4. **History must be purged before visibility flips.** Removing the files
   from HEAD is insufficient: they exist in six commits, and GitHub serves
   full history on public repositories. The purge is a separate,
   coordinated operation (`git filter-repo --path casework --invert-paths`,
   then a force push), and it must run when no branches are in flight,
   because rewriting main orphans every branch based on the old history.
   At the time of writing another agent has five active branches, so the
   purge is deferred rather than run.

   **Publishing before the purge would republish a copyrighted book.** The
   order is not optional.

5. **A fresh root commit was considered and rejected.** It would solve
   copyright and hide the upstream lineage in one step, but it would
   destroy the commit history the constitution stakes its accountability
   on. Purging one path preserves every date, message, assessment overlay
   and arbiter verdict. The lineage question is moot in any case: the
   2026-08-25 amendment already narrowed the upstream-name rule to the
   site's own inputs and permits the name freely elsewhere, including the
   upstream URL in ENGINE.md.

6. **Base path, because Pages serves a project site from a subpath.** One
   environment variable (`NEXT_PUBLIC_BASE_PATH`) drives both
   `next.config.ts` and `src/config/assets.ts`, so they cannot disagree;
   the deploy workflow sets it, a custom domain would set it empty, and
   local development leaves it unset. The workflow asserts the prefix is
   present in the built output before deploying, because a project site
   with unprefixed asset URLs yields a visually broken page rather than a
   failed build — the failure mode that ships silently.

7. **One consequence of a public repository worth stating:** Actions
   secrets are unavailable to workflows triggered from forks, so the
   arbiter and the cross-model checks cannot run on a fork pull request.
   That is correct behaviour rather than a defect — an outside contributor
   cannot summon the panel — but a fork PR's checks will fail for want of
   credentials, not for want of merit.

8. **Teardown order.** Bring Pages up and confirm the site serves before
   removing the Cloudflare Pages project and its Access policy, so there
   is never a window with no live site.

## 2026-08-26 — Purge method settled: rewrite in place, keep the PR history

**Decided by:** founder (direct instruction); recorded by AI.

The going-public entry above left one question open: whether to rewrite
history in place and force-push, or push the rewritten history into a fresh
repository and delete the old one. The second is airtight against GitHub
retaining unreachable objects server-side; the first preserves the issue and
pull-request history.

**Decision: rewrite in place. The PR history is not to be lost.**

The founder's reasoning: the residual exposure is negligible, so the
airtight option is not worth its cost. Recorded with one correction to the
mechanism, because the reasoning should be right on the record even when the
conclusion is: the residual risk is not a function of site traffic, since it
does not run through the site at all. It is that GitHub may keep purged
blobs fetchable by direct commit SHA for a period after a force-push. What
makes it negligible is the conjunction of everything having to go right for
an adversary — the repository being unadvertised, the SHAs being unpublished
and unguessable, and the material being discovery-aid copies of already
published documents rather than distribution of anything unavailable
elsewhere. On that reasoning the conclusion holds.

What the decision buys, and why it is the right trade for this project
specifically: the pull-request history contains every arbiter verdict
comment — the panel's seat-by-seat reasoning on every consequential change,
including the parks and the reversals. The constitution stakes accountability
on inspectability. Discarding the record of the governance in order to
perfect the removal of four copyright-encumbered PDFs would trade the
project's central claim for a marginal gain against a threat nobody is
mounting.

Consequence for the runbook: `scripts/purge-casework-history.sh` rewrites in
place; the fresh-repository alternative is retained in the documentation as a
rejected option with its reason, not as a pending choice. A garbage-collection
request to GitHub Support after the force-push is cheap and worth making, but
is not a precondition for flipping visibility.

## 2026-08-26 — The purge ran: wider than planned, verified, and one premise corrected

Executed on the founder's go-ahead, in this order: preconditions verified
(zero open PRs, every recently-touched branch matched to its merged PR, no
other agent session running); full mirror backup taken off-repo; all 39
stale branches deleted; history rewritten with `git filter-repo`; `main`
force-pushed; the result verified from a fresh clone.

Three things worth the record beyond "it ran":

**1. The scope had to widen during execution.** The plan said `casework/`;
the post-rewrite audit of what remained found the shared pre-split history
also carried `research/` (third-party copyrighted page captures and PDFs
kept as discovery aids), the supplied research briefs loose in `inbox/`
(the Kirk adversarial audit in three formats, the Immortality Key brief),
and — worst — **a private email from a living researcher to the founder**
under `inbox/processed/`, with personal addresses and a reference to an
unpublished manuscript: material supplied in confidence, whose presence
contradicted the upstream case history's own claim that the correspondence
"is not published." All of it went into the same rewrite. Final state,
verified from a fresh clone across all refs: zero sensitive paths, zero
document-format blobs, and a rewritten HEAD tree byte-identical to the
pre-rewrite `main` tree — the rewrite touched history only, never content.

**2. The same exposure is live in the upstream engine repository, which is
already public.** The correspondence and the copyrighted captures sit in
its HEAD today, downloadable by anyone. Reported upstream the same day with
an urgent removal PR (tombstone, append-only case-history correction,
decision-log entry); the upstream history rewrite is that repo's own
decision and is recorded there as pending the founder's authorization.

**3. A premise of the accepted-risk decision was tested and failed.** The
in-place-rewrite decision reasoned that residual exposure requires an
unguessable commit SHA. Tested after the force-push: `git fetch origin
refs/pull/12/head` returns the full casework tree — pull-request refs
survive the rewrite and are enumerable, and merged PRs' "Files changed"
views render the content. The decision itself stands (its inspectability
rationale is untouched), but its consequence changes: the GitHub Support
sensitive-data request is now a **precondition** for flipping visibility,
not an optional courtesy. `docs/MIGRATION-PUBLIC.md` carries the corrected
risk statement, with the original preserved and marked superseded.


## 2026-08-27 — Budget epoch 2 (synced from upstream)

GATE_EPOCH advances to 2026-08-27T10:00Z: the founder-supervised
studies sprint of 2026-08-26/27 (~30 founder-tapped canon landings on
this site) stops counting against the autonomous weekly budget, which
restarts at zero from the sprint's end. Limit unchanged at 10/week.
Same rationale as the original epoch: the throttle bounds the
machine's pace, not the founder's. (AI record of a founder
instruction, 2026-08-27 session.)
