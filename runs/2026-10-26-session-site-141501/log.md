---
runId: 2026-10-26-session-site-141501
title: "COVID origins: the laboratory account's own five points entered as claims and graded, the deleted early-sequence dataset recorded, and the article's mislinked absence given its own claim"
cases: [covid-origins]
---

## Read this first: the tree does not load as I leave it

`content/cases/covid-origins/editions/new.yaml` is an unstamped draft edition I wrote and could not stamp or remove. **Until it is stamped or deleted, `node scripts/site.ts status`, `npm run build` and the site loader all fail on it.** That is my error and the first job of the next session; details and the exact fix are in "What I could not reach" below.

## What I did and why

The covid-origins case had never been worked by an operator session — it entered at launch and has sat since. Two review notes on #117 have been outstanding since: the article's sentence saying no laboratory is publicly known to have held the virus or a close progenitor was linked to COV-C013, which states something different (genetic distance). Beyond that, the case was missing the thing `config/site-rules.md` asks every case for: the doubters' best case, from their best voices, each point a claim of its own, graded against the primary record. The laboratory account appeared on the page only as this site's paraphrase of it.

So this session did ledger work, in three parts.

**1. The absence gets its own claim.** COV-C019 states what the June 2023 declassified intelligence report actually says: that the community has no indication the institute's pre-pandemic holdings included SARS-CoV-2 or a close progenitor. COV-E033 quotes that sentence and the parallel sentence about genetic-engineering work, at their locators, with the limitation that an absence of indication in one government's reporting is neither an inventory nor an audit.

**2. The laboratory account, in the words of the body now stating it.** The most prominent current statement of that account is the White House page "Lab Leak: The True Origins of Covid-19", which lists five numbered points. COV-E034 quotes all five verbatim and records the page's own attribution line, which says its content comes from the House Oversight Committee's website — so it is the December 2024 press release restated, not an independent source. Three of the five became claims:

- COV-C020 (a researcher who fell ill in autumn 2019 was infected with SARS-CoV-2). Its first public assertion, the State Department fact sheet of January 15, 2021, is COV-E035 — and I graded it weak, because the document's own sentence says the symptoms were equally consistent with seasonal illness, and it names no researcher, date, diagnosis or record. COV-E036 is the same government two years later, in more detail and markedly less favourable to the point: the community assesses the information "neither supports nor refutes either hypothesis", some researchers were confirmed sick with unrelated illnesses, and none is known to have been hospitalised with COVID-like symptoms. The one asymmetry that matters is in the same passage: the institute holds blood samples and health records for all laboratory staff, and no independent party has examined them (COV-R006).
- COV-C021 (all cases descend from a single introduction). Recorded as contradicting COV-C010, which this case already grades `mixed`. It has no evidence record of its own — see below.
- COV-C023 (the furin cleavage site is a characteristic not found in nature). Carried by COV-E030, which this case already held: the phrase is press-release language, absent from the 520-page report, and contradicted regardless of authorship.

The page's third point is COV-C018, which this case grades well supported — a point of the laboratory account that holds, shown holding. Its fifth is an argument from the absence recorded at COV-C007.

**3. What is missing from the record.** COV-C022: sequencing data from early Wuhan outpatient samples were deleted from the NIH Sequence Read Archive at the submitters' request and were not public again until July 2021, after an outside researcher recovered them from cloud copies. COV-E037 is the finding; COV-E038 is deliberately paired with it, because the deletion is usually cited without either of its two qualifications — the data were restored, and the author himself writes that archive deletions "do not imply any malfeasance" — or its aggravation, which is that the explanation given publicly does not match the one given to the archive. Two new themes carry this work on the case page: "What is missing from the record" and "The laboratory account, in its proponents' words".

Also: a new research item, COV-R009, to establish from primary records what the institute's online virus databases held and when they stopped being reachable. Everything I could find on that is secondhand, and this case should not repeat secondhand accounts as if they were records.

Three sources entered, all read in full through the reading tool: Bloom 2021 (Mol Biol Evol), the State Department fact sheet, and the White House page.

One correction to an existing record: COV-E010's inference said the pre-correction Bayes factors were "61.6 and 4.2". They were 61.6 and 60.0, as COV-E011 says. A typo, but it contradicted the record beside it.

## What I set aside, and why

- **Quotations from SAGO 2025 and Pekar 2022.** I drafted two more evidence records — the WHO passage saying furin cleavage sites "had been previously identified in nature" against COV-C023, and the corrected Bayes factors against COV-C021 — and the quote check refused both. The reason is worth recording: WHO's landing page now serves a summary rather than the report PDF, and the only open copy of Pekar 2022 reachable by DOI is a scanned eScholarship file with no body text. Both quotations are already in the ledger (COV-E014, COV-E010), verified in August 2026, and are not rechecked because those records did not change — but they could not be re-verified today. I deleted the two new records rather than enter quotations the check cannot confirm. COV-C021 therefore has no evidence record of its own and should be graded `unresolved` until one exists; the honest position is that the one published analysis addressing it disfavours it, at Bayes factors near four, and that analysis has never been independently reproduced (COV-R001).
- **The institute's database going offline in September 2019.** Everything available to me was journalism or secondhand quotation of statements I could not read in the original. No claim, no evidence; a research item instead (COV-R009).
- **Archiving the three new sources.** Still the open question from the last session: requesting a Wayback capture is an outward-facing act no instruction covers. The White House page in particular is undated and mutable, and its record says so.

## What I could not reach

I wrote `editions/new.yaml` — the current article with the COV-C013 link corrected to COV-C019, plus two sentences, one for the five points and one for the deleted dataset — and the stamp refused it, correctly: an edition that re-adopts the 2026-10-19 migration assessment inherits three case-level fields written before the reader's budget existed, and the engine will not republish them over the ceiling. The fix is to write `assessments/new.yaml` restating the same judgment within budget. I tried to do that by script, to keep it cheap; running a script from `.cache/` was refused by the permission layer, and so were `rm` and `git clean`, so I could not take the draft edition back out of the tree either. I ran out of budget there.

**The next session should, before anything else:** either delete `content/cases/covid-origins/editions/new.yaml`, or finish it — copy `assessments/2026-10-19-migration-covid-origins.yaml` to `assessments/new.yaml`, drop the fields the stamp sets (`runId`, `model`, `date`, `promptVersion`, `humanReviewed`, `role`, `basis`, `migratedFrom`), bring `whereDisagreementLives` (167 words), `whatWouldSettleIt` (176) and `bestConventionalExplanation` (266) inside the ceilings of 130, 130 and 200, add a `steelman` (none exists; the strongest unanswered objection is that the geography, environmental, metagenomic and lineage results are four analytic layers over one Chinese CDC dataset, which on this site's own rule is one source described four ways), and give verdicts to COV-C019 through COV-C023 if it features any of them. Then `stamp`, and name the case under `panel:` — the assessment will be new even though the judgment is not.

I name no case under `panel:` here, because no judgment moved and no assessment was written.

## Checks

`node scripts/site.ts check-quotes` passes: 6 records checked, 20 passages, 0 failures. The ledger loaded cleanly after every content edit, up to the point where the draft edition entered the tree; after that the loader fails on that file alone, as described above. I did not get to `npm test` or `npm run build`, and they will fail on the same file until it is dealt with.

## What the next session should do after that

- Feature the new claims and grade them, which is the half of this work the reader does not yet see.
- COV-R009 and the two reanalysis items (COV-R001, COV-R002) remain the highest-yield open work.
- The remaining #117 note about transferred verdicts being displayed as standing is untouched and still open.
