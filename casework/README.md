# casework/ — research briefs for cases in development

This PRIVATE repository commits research briefs directly under
`casework/<case-slug>/`. **This deliberately differs from a public-repo
setup**, where pre-case material is gitignored and worked on locally: here
the repository itself is private, so briefs are versioned in-repo where
agents and the founder can both reach them, and `.gitignore` must never
re-acquire a `casework/` rule.

## What a brief is — and is not

A research brief is an **input for case construction**: background
reading, candidate claims, leads on primary sources, draft ladders,
open questions. Briefs are working documents with no evidential standing.

Absolute rules (constitution: AGENTS.md, especially "Living persons and
active proceedings"):

- **Briefs are never citable sources.** No record in `content/` may cite
  a brief, quote a brief as authority, or inherit a citation from a brief
  unchecked.
- **Every citation inside a brief must be independently verified against
  the primary document** before any derived record enters `content/` —
  correct locators, honest verification labels (`verified` /
  `ai_verified` / `unverified`), no exceptions.
- Briefs about living persons follow the living-persons rules from the
  moment they are written: label assertions by their source, prefer court
  records and on-the-record statements, never draft culpability
  "verdicts."
- Material supplied in confidence does not go in a brief committed here
  unless its provenance terms allow it.

## Layout

```
casework/
  <case-slug>/          # one directory per case in development
    brief*.md           # the research brief(s)
    ...                 # supporting notes, source lists, extracts
```

When a case is ready, it is scaffolded record by record under
`content/cases/<case-slug>/` with proper provenance — the brief stays
here as the working-paper trail.
