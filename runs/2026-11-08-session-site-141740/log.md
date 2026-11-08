---
runId: 2026-11-08-session-site-141740
title: "COVID origins: the metagenomic reanalysis re-quoted from the copy the quote check reads (answering round 2 of the review of #138)"
cases: [covid-origins]
---

## What I did and why

This session answers the review of #138, and nothing else. I changed one
evidence record, `COV-E033`, one locator on a second, `COV-E037`, and the
source they share, `SRC-BLOOM-2023`. No claim, assessment or edition changed.

Round 1's harm and notes were answered by the previous session
(`2026-10-28-session-site-140008`, commit f2ae0c1). Its log, which is part of
this pull request, takes each one in turn: the ODNI announcement's
accusations against a named, uncharged person were taken off the page; the
declassification finding was narrowed to what the index shows; the
metagenomic record was split so each record has one direction; the
steelman's reference class was corrected and sourced; and the co-detection
was re-graded. Round 2 raised nothing new about any of that. It held the
change for two quote-check failures, both on `COV-E033`.

## Answer to the review

### Round 2: two quoted passages in `COV-E033` not found in `SRC-BLOOM-2023`. Fixed in the record.

**The cause.** The previous session read Bloom's paper from the PubMed
Central copy of the published article (PMC11314060) and quoted it. When I
read that copy again with `--fresh` this session, PubMed Central served a
bot-challenge page to both of the reading tool's clients, and Europe PMC
returned HTTP 500. The publisher's DOI now resolves, through OpenAlex, to
the bioRxiv preprint posted 3 May 2023, and that is the text the check read.
The preprint's wording differs slightly from the published version's:

- the abstract reads "14 samples have > 20% of their chordate mitochondrial
  material from raccoon dogs, but only one of these samples contains any
  SARS-CoV-2 reads", not the wording first quoted;
- the Results sentence has a comma after "hoary bamboo rats".

**The fix.** I copied both passages exactly from the text the check reads
(`node scripts/site.ts read … --fresh --find`), and pointed the source at
that text, as the instructions for a held quote ask:

- `COV-E033`'s `sourceStatement` now quotes the preprint's abstract (p. 1)
  and Results (p. 5) word for word. Its `exactLocator` names the preprint
  version and those pages.
- `SRC-BLOOM-2023`'s `url` is now the bioRxiv PDF itself
  (`…/2023/05/03/2023.04.25.538336.full.pdf`), which the reading tool reads
  directly. The DOI and the published citation stay in `identifier`. The
  `verificationNote` explains the change of copy and its date. It says the
  preprint's figures (14 samples, one with any viral reads, 1 of about
  200,000,000 reads) and its conclusions match what was first quoted. It
  also says I did not re-read the published article this session, because I
  could not.
- `COV-E037` quotes the abstract's closing sentence. That sentence passed the
  check, because it is the same in both copies, but its locator named the
  published article. Since the source's address changed, I changed the
  locator to the preprint's p. 1 so the record points at the text the check
  reads. Its quotation is unchanged.

**What did not need to change.** The meaning of the record did not change.
The assessment and the edition from the last session describe the result as
"fourteen samples with at least a fifth of chordate mitochondrial material
from raccoon dogs, only one contained any viral reads". That is a paraphrase
outside quotation marks, and it matches the preprint's "14 samples have >
20%". So neither was rewritten, and no new assessment was written. The
judgment the panel was convened on after the last session stands as it was.

## Checks

- `node scripts/site.ts check-quotes --fresh`: 5 records, 8 passages; 0
  failures, 0 warnings.
- `npm test`: 159 of 159 passed.
- `npm run build`: succeeded.

## What I could not reach

The published article's own text at PubMed Central is blocked to the reading
tool, as described above. If a later session can read a copy of the
published version that the check can also read (the publisher's page or an
Europe PMC rendering), it may restore quotations in the published wording and
point the source back. Until then the preprint is the honest address.

## What the next session should do

Round 1's carry-overs still stand, as the last log listed them: read Parts 2–4
of the June 2026 release against its index; get a text-bearing copy of the
May 2020 Livermore report (`COV-R009`); and find out whether the released
code and data allow the geographic signal (`COV-C002`) to be reproduced
independently, now that it is the case's most load-bearing observation.

## Oddities

None. Nothing I read this session contained instructions.
