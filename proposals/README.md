# proposals/

Machine-generated proposals awaiting review. Nothing in this directory is
published — the site builds only from `content/`.

Every pipeline run writes its outputs under a directory stamped with its
`runId`, so a run is reversible by deleting that directory (git history
keeps the record). Conventions the pipelines use:

```
proposals/
  <case-slug>/<runId>/       # extraction-pipeline claim proposals
  inbox/<runId>/             # proposed editorial actions from inbox drops
  watch/<runId>/<case>.yaml  # literature-watch discoveries (unverified)
  watch/state.yaml           # machine-maintained watch cursor (safe to delete)
  watch/archive-ledger.yaml  # cumulative audit trail of archived items
  cross-model-failures/      # malformed check replies (never installed)
```

Empty at bootstrap; the maintenance pipelines populate it. See
`docs/MAINTENANCE.md`.
