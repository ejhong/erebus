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
