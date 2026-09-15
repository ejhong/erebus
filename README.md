# Erebus

**An evidence map of contested public events.**

Erebus decomposes contested public events — assassinations, disasters,
alleged cover-ups — into atomic claims, maps the evidence for and against
each one with honest provenance labels, and points at the record, release,
or analysis that would settle the dispute. It is operated by AI as a
declared experiment under the constitution in `AGENTS.md`, and it is
public and unadvertised: served from git by GitHub Pages with no access
control in front of it (`docs/HOSTING.md`). Open to anyone who finds it,
promoted to no one.

Cases in development live as research briefs held privately OUTSIDE this
repository. Briefs are never citable, and every citation one contains must
be verified against the primary document before any derived record enters
`content/`. They are not committed here because the repository is public
and briefs routinely carry third-party copyrighted material plus material
about living persons that the living-persons rules keep off the site.

## Commands

```bash
npm ci             # install (use npm install for day-to-day dev)
npm run dev        # dev server at localhost:3000
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
npm test           # vitest (schema/loader/parser tests)
npm run build      # static export to out/ (fails loudly on invalid content)
```

Deploy: pushing to `main` runs CI and deploys the static export to GitHub
Pages (`.github/workflows/deploy-pages.yml`); the base path is injected by
the workflow. See `docs/HOSTING.md`.

## Architecture

Three zones, one-way flow:

1. **Content** (`content/cases/<case>/`) — plain YAML + markdown per case:
   `case.yaml`, `overview.md` (article with `[text]{claim=...}` refs),
   `claims.yaml`, `evidence.yaml`, `sources.yaml`, `research.yaml`,
   `history.yaml`, and append-only AI assessment overlays in
   `assessments/<runId>.yaml`. See `content/cases/README.md`.
2. **Domain** (`src/domain/`) — Zod schemas, the loader (fails the build
   on dangling IDs or unresolved claim refs), and the constrained article
   parser.
3. **UI** (`src/components/`, `app/`) — pure components, one per domain
   concept.

Dependencies are deliberately minimal: Next.js (static export) +
TypeScript strict + Tailwind + Zod + yaml; vitest dev-only; all visuals
hand-built.

**The engine is not developed here.** `src/`, `app/`, `scripts/`, and the
workflows are synced one-way from the upstream engine repository (see
`ENGINE.md`). CI includes a fail-closed guard that keeps the upstream
project's name out of the rendered site's inputs (`content/`, `src/`,
`app/`, `public/`), and a warning-only engine divergence check. Since
2026-09-01 the sync is on hold for the upstream's metabolism jobs
(promotion, Bench scoring, adoption) until the founder judges them working
there; see the DECISIONS entry of that date. Two changes were hand-ported
ahead of the sync (2026-09-05): the digest permission and the panel's
seat table (`scripts/lib/vendors.mjs` — Opus 5 medium · GPT-5.6 Sol high ·
Gemini 3.8 Flash medium · Grok 4.5 high · GLM 5.3 Flash high via Venice).

## Operation

The site maintains itself: the **Maintain** workflow runs weekly (and on
inbox drops), processing `inbox/` drops, refreshing assessments, watching
the literature, triaging, proposing agenda items, and opening one PR plus
the weekly digest issue; **Content response** re-assesses and re-panels
cases whose canon changed; the **Operator** tends parked PRs and issues.
Low-risk diffs auto-merge; everything else is judged by the five-vendor
constitutional arbiter. Runbook: `docs/MAINTENANCE.md`.

## Layout

| Path | Role |
|---|---|
| `AGENTS.md` | The constitution: epistemic rules, living-persons rules, code rules |
| `docs/DECISIONS.md` | Append-only decisions log — read first for current direction |
| `docs/` | Hosting, maintenance, content policy, image style, the studies design, the public-migration record |
| `ENGINE.md` | Engine sync: one-way flow from the upstream engine repo |
| `content/cases/` | Published cases: COVID origins, the Kirk assassination, Pizzagate, September 11 |
| `inbox/` | Drop zone for the maintenance pipeline |
| `proposals/` | Machine-generated proposals awaiting review (never published) |
