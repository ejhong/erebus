# How the site runs

This site runs the engine described in its upstream's `docs/DESIGN.md`
(`https://github.com/ejhong/aletheia/blob/main/docs/DESIGN.md`), on the same
plan: an AI agent, the operator, does the work one session a day under a hard
spending cap; mechanical checks fail any quotation that is not in its source;
reviewers from four other companies read every change before it publishes and
say whether it leaves the site better or worse and whether it does a harm; five
models judge each case blind, and their agreement is the standing a judgment
carries; the founder holds the kill switch (`governance/operation.yaml`) and
the constitution (`AGENTS.md`). A change is data to everything that judges
it: the review and the quote check run main's code and read the change
through git, and an operator session's work is checked by main's code on a
fresh machine before any of it is published (the upstream's "The trust
boundary"). What follows is what is this site's own.

## What this site is for

Contested public events, many of them about living people and some about
active prosecutions. A reader should find, for each case: what the public
record establishes, what is disputed and why, the strongest evidence each way
with its exact source, what each side asserts — attributed, the defense
beside the prosecution — and what record, release or test would settle the
dispute. The site may say how strongly the public evidence supports a charged
account, as its own judgment on facts it shows; it never declares anyone
guilty or innocent (AGENTS.md, "Living persons and active proceedings",
founder amendment of 2026-10-19; `config/site-rules.md`).

## Where it differs from the upstream site

| | |
| --- | --- |
| Identity and notice | `config/site.yaml`: the name, the masthead, the living-persons notice on every case page, the names the pages must never contain. |
| Theme | `config/theme.css`: cool porcelain and steel, Space Grotesk and Inter, the blueprint ground. |
| Rules for models | `config/site-rules.md`: given to the operator, the reviewers and the panel with the constitution. |
| Money | `config/budget.yaml`: $40 a month (the founder, 2026-10-19); the start of $60 a month, set to run through 2026-10-31, was ended on 2026-10-19 by the founder's direction of 2026-10-20, so the two sites together stay near $100 a month. Spread over the month by its pace. |
| Live cases | A case about an active proceeding is checked for new filings, rulings and releases each time the operator works on the site; its procedural status carries the date it was last checked. |

## History

Until 2026-10-19 the site ran the September engine's weekly maintenance,
hourly re-assessment and a constitutional gate; its cases were then moved to
the current engine's editions mechanically (each case's first edition of
2026-10-19 is that migration), and their earlier judgments and panels stand
as they were. Its decisions are in `docs/DECISIONS.md`; the retired runbook is
`docs/archive/MAINTENANCE.md`.
