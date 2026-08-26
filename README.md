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

Deploy: Cloudflare Pages builds with `npm ci && npm run build`, output
directory `out/`, no base path. Pushing to `main` deploys automatically
once the Pages project is connected (`docs/HOSTING.md`).

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
workflows are synced one-way from an upstream engine repository —
referenced only via the `ENGINE_UPSTREAM` secret, never by name. See
`ENGINE.md`. CI includes a fail-closed guard that rejects any committed
occurrence of the upstream project's name, and a warning-only engine
divergence check.

## Operation

The site maintains itself: the **Maintain** workflow runs weekly (and on
demand), processing `inbox/` drops, refreshing assessments, watching the
literature, and opening one digest PR — auto-merged when the diff is
mechanically low-risk, founder-approved otherwise, with a five-vendor
constitutional arbiter on everything needing approval. Full loop:
`docs/MAINTENANCE.md`.

## Layout

| Path | Role |
|---|---|
| `AGENTS.md` | The constitution: epistemic rules, living-persons rules, code rules |
| `docs/DECISIONS.md` | Append-only decisions log — read first for current direction |
| `docs/` | Hosting, maintenance, content policy, image style |
| `ENGINE.md` | Engine sync: one-way flow from the upstream engine repo |
| `content/cases/` | Published cases (empty at bootstrap) |
| `inbox/` | Drop zone for the maintenance pipeline |
| `proposals/` | Machine-generated proposals awaiting review (never published) |
