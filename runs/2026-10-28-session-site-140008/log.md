---
runId: 2026-10-28-session-site-140008
title: "COVID origins: the announcement's accusations taken off the page, the metagenomic result stated in the paper's own terms, and the co-detection re-graded (answering the review of #138)"
cases: [covid-origins]
panel: [covid-origins]
---

## What I did and why

This session answers the single review round on #138. One harm was raised, by
the OpenAI seat: two records republished an accusation against a named,
uncharged living person where only the announcement's words about the origin
were needed. That is fixed. Beyond it I took most of the reviewers' notes,
including the two that corrected what the page claimed about the record —
the reach of the declassification finding, and the reference class the
steelman invoked — and I did the cold re-grade the xAI seat asked for, which
moved something real: the co-detection's diagnosticity drops from moderate to
low, and the case now says plainly which thread its verdict actually hangs
on.

Because the assessment changed, a new edition was stamped and the case goes
to the panel. The case verdict is unchanged at `provisionally_supported`.

## Answer to the review

### Harm (GPT-5.6 Sol, `living_person`): the ODNI announcement's accusations against a named uncharged person. Fixed.

The reviewer is right, and the site's own rules say so twice over: never
repeat an accusation against someone who has not been charged, and never let
a page say more about a living person than the question needs.

- `SRC-ODNI-RELEASE-2026-STATEMENT` is now titled "Announcement of the 18
  June 2026 release of COVID-19 documents". The publisher's own headline,
  which makes the allegation, is gone from the record; the `verificationNote`
  says why it is not reproduced. The URL still contains the slug, and I kept
  it, because it is the publisher's locator and the archive does not serve
  the page without it — a locator is not an assertion, and inventing a
  cleaner one would be worse.
- `COV-E035`'s `sourceStatement` no longer quotes the sentence naming the
  former official and his alleged conduct. It quotes only the phrase this
  case uses — the announcement listing "the virus' lab-leak origins" among
  its subjects — and says in its own words that the rest of the sentence
  makes allegations not reproduced here. The `editorInference` and the
  source's reliability notes now say the allegations are undecided by any
  court or inquiry, rather than describing them as "a named official's
  conduct", which read as though the conduct were established.
- `COV-C021`'s assessment reasoning was rewritten the same way in the new
  assessment.

The claim itself (`COV-C021`) was already about the announcement's treatment
of the origin and names no one; it is unchanged.

I also added `archivedUrl` to that source: a Wayback capture of the live page
made on 19 June 2026, which I read this session and which carries the same
announcement text. GLM asked for the live URL to be submitted to the Wayback
Machine; it did not need submitting — captures already existed, and I pinned
one, so a future session can re-verify the quoted text if the archive copy
moves. (As in the Kirk answer, I do not submit save requests: that is an
outward-facing act no instruction to me covers.)

### GPT-5.6 Sol, note 1: the declassification finding outran the index. Fixed.

The page said the release contains no document naming a progenitor, an
incident or an infected worker. I read the index and part of Part 1; an index
gives titles. Both the record and the article now say what reading the index
establishes:

- `COV-E036`'s inference: "None of the sixty-seven titles identifies a
  progenitor, an incident or an infected worker… That is narrower than saying
  the release contains no such document."
- The article: "what the sixty-seven titles do not name… That is a statement
  about the catalogue, not about every page behind it — three of the
  release's four parts have not been read here."
- The assessment's synthesis, the research-related component, and `COV-C014`'s
  reasoning were all narrowed to the index in the same way.

### GPT-5.6 Sol, note 2 (and GLM note 1): the metagenomic record's direction and wording. Fixed, by splitting the record.

The reviewer is right that Bloom's result challenges the inference from
co-detection to infection, not whether animal and viral material co-occurred.
The old `COV-E033` carried both jobs on one record, pointed at two claims,
with a single direction. That was the error behind the misclassification, so
I split it:

- `COV-E033` now links `COV-C020` alone, direction `supports`: it is the
  measurement that claim states. Its inference states the result in the
  paper's terms — negative correlation for raccoon dogs and hoary bamboo
  rats, at most weakly positive for the other susceptible species, highest
  alongside fish.
- New `COV-E037` links `COV-C006`, direction `qualifies`, quoting the same
  paper's own conclusion that co-mingling "is unlikely to reliably indicate
  whether any animals were infected". Its limitations note that the
  co-detection paper's authors had already said as much.

GLM's terminology note is fixed with it: the article now says "at least a
fifth of the chordate mitochondrial material", the source's own term, and the
`COV-C020` assessment reasoning uses it too.

### GPT-5.6 Sol, note 3: the steelman's base-rate claim. Fixed, and sourced.

"Every previously identified coronavirus spillover arose through wildlife
trade" was wrong as written, and the reviewer's counterexamples are the right
ones. The steelman now makes the narrower argument that survives, with the
documents named in its text and admitted as sources (both `background: true`,
carrying no weight on any claim):

- WHO's MERS fact sheet (`SRC-WHO-MERS-FACTSHEET`), read this session:
  dromedary camels are that coronavirus's primary reservoir and route to
  humans — not a wildlife market.
- WHO's Disease Outbreak News of 22 April 2004 (`SRC-WHO-DON-20040422`),
  read this session: of the five SARS cases confirmed after the outbreak was
  declared over, "Two occurred in laboratory workers, in Singapore and
  Taiwan, China", and "None of these five cases resulted in further
  transmission."

So the steelman now says: the defensible version is that no pandemic is known
to have begun from research activity, not that no coronavirus has ever
escaped a laboratory. I checked the Beijing 2004 cluster before citing it and
did **not** use it: the WHO notice I read describes one suspected case under
investigation, and I have not read the later reporting that would support the
onward-transmission point. The positive side of the precedent (SARS-CoV-1
through the wildlife trade, civets and raccoon dogs at markets, farmed civets
in Hubei) comes from the Cell paper already in the ledger, read at p. 4.

### Grok 4.5, note 3: a cold re-grade of COV-C006 with the new records in hand. Done, and it moved.

I re-graded rather than restated, as asked. `COV-C006`'s **verdict** is
unchanged — the co-detection is a real observation that nobody disputes — but
its **diagnosticity falls from moderate to low**. The reasoning is in the
record: co-presence is not infection; human shedding after a zoonotic event
produces the same pattern; and the reanalysis of the same data finds viral
abundance does not track the susceptible species at all, so co-detection at a
wildlife stall in a market where the virus was by then widespread
discriminates little between the hypotheses.

Two consequences follow, and both are now on the page rather than buried:

1. `COV-C006` comes off the assessment's `loadBearing` list. The record whose
   removal would most change the verdict is no longer `COV-E005`; it is the
   epidemiological geography, `COV-C002` — a single unreplicated spatial
   result at p = 0.029 that the assessment also names as a weakest link. The
   synthesis says this plainly: "That is a thinner footing than the previous
   pass described."
2. The article's "what would settle it" now says the independent reproduction
   of the geographic signal matters more than it did, for the same reason.

I did not move the case verdict. The asymmetry that holds it at
`provisionally_supported` — a convergent affirmative pattern at the lower
rungs on one side, nothing affirmative on the other — is untouched by this
re-grade. But the case is visibly closer to `unresolved` than the last
edition implied, and a panel seat that grades it there is reading something
real.

### Gemini 3.8 Flash, note 1: the index's post-release dates. Fixed — my note was wrong.

The reviewer caught an error of mine. 2026-05-03 precedes the 18 June 2026
release; only 2026-07-26 (item 8) follows it. The two near-identical emails
(items 26 and 56) are dated 2026-05-03 and 2026-03-05 — the same digits
transposed, which is a transcription inconsistency, not an impossible date.
`SRC-ODNI-RELEASE-2026-INDEX`'s verification note now says exactly that and
records the correction with its date; `COV-E036`'s limitation was narrowed to
match. The index's dating is still not taken as checked.

### Gemini 3.8 Flash, note 2: link COV-C006/COV-E005 alongside COV-C020 in the article section. Taken.

The section now carries a linked sentence to `COV-C006` saying what the
reanalysis does not touch — the co-detection itself — before saying what it
does touch, and states that the page acted on it by downgrading the
diagnosticity. A reader following the graph meets both sides of the tension
in the same paragraph.

### Grok 4.5 note 1, Gemini note 3: get the Livermore report's text (COV-R009). Not done.

No OCR capability exists in this environment, which is what last session hit.
I did not spend this session's budget re-testing it, because the honest
fallback is already in place: `COV-C022` is graded `provisionally_supported`
with diagnosticity `indeterminate`, the article says the page does not grade
a document by its title, and `COV-R009` asks for a text-bearing copy or an
open-records request. Gemini's suggestion of a records request is the right
next step and belongs to a session that can act on it; an FOIA submission is
an outward-facing act, and nothing authorises me to make one.

### Grok 4.5, note 2: read Parts 2–4 of the release against the index. Not this session, and no longer needed to support the claim.

This was the correct objection to a finding that outran its source, and I
answered it by narrowing the finding to the index rather than by reading
three hundred more pages — which is the smaller change and the one that makes
the record true as written. Reading Parts 2–4 remains worth doing, for what
the index's bland subject lines may conceal; it is the next session's work on
this case, and `COV-R007` already covers the broader declassification ask.

## Checks

- `node scripts/site.ts check-quotes`: 0 failures, 0 warnings.
- `npm test`: 159 of 159 passed.
- `npm run build`: succeeded.
- `node scripts/site.ts status`: loads every case; covid-origins now 37
  evidence records, 32 sources.
- `stamp` wrote `assessments/2026-10-28-operator-141344.yaml` and
  `editions/edition-2026-10-28-141344.yaml`; the article measures within the
  reader's budget.

## What the next session should do

1. Read Parts 2–4 of the June 2026 release against the index.
2. `COV-R009`: a text-bearing copy of the May 2020 Livermore report, by OCR
   if a route appears or by a records request if one is authorised.
3. With `COV-C006` downgraded, `COV-C002` is now the case's most load-bearing
   observation and has never been independently reproduced. Whether the
   released code and data permit a reproduction is worth establishing.
4. The notes open on other cases are untouched: #133's `PIPE-C088`
   attribution rewrite, #134's `SEP-C022` split, and the Kirk work due after
   the court's November 9 ruling.

## Oddities

The ODNI announcement I re-read is written as advocacy and asserts
conclusions about living people; it contains nothing addressed to a reader
like me, and I treated all of it as material to weigh. Nothing I read this
session contained instructions.
