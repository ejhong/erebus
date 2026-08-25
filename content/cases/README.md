# content/cases/

One directory per published case. Empty at bootstrap — the site renders a
deliberate empty state with zero cases, and nothing ships early to fill
it.

Each case directory contains (schemas in `src/domain/schema.ts`, loader in
`src/domain/load.ts` — both fail the build loudly on invalid content):

```
<case-slug>/
  case.yaml          # case metadata, dossier fields, editorial state
  overview.md        # the article; inline claim refs: [text]{claim=XXX-C001}
  claims.yaml        # claim records (canon)
  claims-catalog.yaml# optional bulk-imported catalog-tier claims
  evidence.yaml      # evidence records (direction explicit)
  sources.yaml       # source records (honest verification labels)
  research.yaml      # research opportunities / decisive tests
  history.yaml       # append-only change log
  images.yaml        # optional image manifest (license + credit required)
  watch.yaml         # optional literature-watch queries
  resources.yaml     # optional curated reading guide
  conjectures.yaml   # optional on-the-record editorial conjectures
  assessments/       # append-only AI assessment overlays, one per run
```

Cases in development live as research briefs under `casework/<case-slug>/`
(never citable; see `casework/README.md`) until every record meets the
provenance standards in `docs/CONTENT_POLICY.md` and AGENTS.md.
