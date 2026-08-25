# The inbox

Drop anything here — from your phone (github.dev or the GitHub app) or by
pushing files. The maintenance pipeline picks items up on the weekly run,
or whenever you trigger the **Maintain** workflow by hand.

**Two doors, one rule.** This folder is the capture bucket; a chat agent
session is the full-service processor. Anything dropped here gets the
mechanical treatment below on the next run. For material that needs
judgment — long PDFs, researcher correspondence, "was this already
considered?" — either wait for the weekly run and review its proposals,
or tell a chat agent to "process the inbox" and it will do the same job
immediately with live verification, filing what it used into
`inbox/processed/<runId>/` so the provenance trail is identical either
way. Items without a case assignment are never guessed at; they simply
wait here until one is added.

## What you can drop

**1. Commentary notes** (`.md` or `.txt`) — your opinions, in your words:

```markdown
---
case: <case-slug>
editor: <name>
---

The chain-of-custody objection seems right to me — the transfer log gap
is documented in the filing itself. I'd promote that claim.
```

Your text is preserved verbatim as the human editorial record; the AI only
*translates* it into proposed claim/evidence updates, and every proposal
carries your original words next to it.

**Third-party feedback** (researcher correspondence, expert emails): add
`from:` naming the contributor — or describing them if they can't be named
(`from: "researcher contact (not for attribution)"`) — plus an optional
`provenance:` line for how it reached you. The contributor's words are then
recorded as theirs, submitted via you, never silently attributed to you.

**2. Link lists** (`.md` or `.txt` where most lines are URLs):

```
https://doi.org/10.1234/example-paper
https://example.org/official-filing
```

Each link is fetched and verified reachable, and a source-record proposal
is drafted with an honest verification label.

**3. Documents** (`.txt`, `.md`, or `.pdf` full texts): routed through the
extraction pipeline into proposed catalog-tier claims. PDFs are converted
automatically when `pdftotext` (poppler) is available — it is installed in
the weekly workflow.

## Routing rules (plain version)

- Front matter `case: <case-dir>` targets a case. Alternatively drop the
  file inside `inbox/<case-dir>/`.
- No case given → the item is skipped with a note in the run report, never
  guessed.
- Front matter `type: commentary | links | document` overrides the
  auto-detection if it ever guesses wrong.

## What happens after

- Outputs land in `proposals/` (or PR branches) stamped with a `runId` —
  **never** directly in published content.
- Processed items move to `inbox/processed/<runId>/`, so this folder stays
  clean and every run is traceable (and revertable) by its runId.
- You get a PR with a plain-language digest. See `docs/MAINTENANCE.md`.

## What does NOT belong here

Material for a case that does not exist yet. The inbox is the intake for
**existing** cases. New-case research material goes in
`casework/<case-slug>/` (committed in this private repo — see
`casework/README.md`) and is worked on directly with an agent; it enters
`content/` only when the case is scaffolded, record by record, with
provenance.
