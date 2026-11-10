---
runId: 2026-11-10-session-site-153450
title: "Kirk: trial set for June 21, 2028 (the November 9 ruling); the assessment's stale \"no trial date\" reasoning corrected"
cases: [kirk-assassination]
panel: [kirk-assassination]
---

## What I did and why

This was a new-work session, chosen by the charter. No change was held, and the inbox was empty. The Kirk case is an active proceeding, and its last edition said the judge would rule on the trial date on November 9. That ruling came yesterday. Recording it was the first task the last two sessions' logs named, and both reviewers of #136 asked for it. Updating a live case ranks first under the charter, so this session went to that.

What happened, read through `site.ts read` on 2026-11-10:

- **KSL, November 9 (Emily Ashcraft).** The judge read a scheduling order from the bench:
  - Jury selection begins June 21, 2028, and 105 days are reserved for the trial.
  - Pretrial conferences will be held monthly, and a hearing on April 11, 2028 will decide whether both sides can be ready.
  - He declined the defense's 2029 date, saying no task had been identified that needed another year. He added: "If missing evidence or expert work changes that assessment, counsel can identify the task, its effect on trial, and the time needed."
  - The next hearing is January 14, 2027, on a motion the prosecution said it would file this week.
- **Fox 13 (wire copy).** It agrees on June 21, 2028 and the 105 days. I treated it as the same event, not a second source, and cite it only in the source's independence note.

## Records written

- **Source SRC-KSL-TRIAL-ORDER-2026**, `ai_verified`. I requested a Wayback capture through `site.ts archive`; none was produced, and the source says so.
- **Evidence KRK-E076**, context for KRK-C019, weak:
  - It quotes the schedule, the judge's reason for declining 2029, his condition about "missing evidence or expert work", and the next hearing.
  - The inference says what the ruling is: a scheduling order that releases no record and finds nothing missing. The judge's words are a condition he set, not a finding.
  - Limitations: the written order, minute entry and transcript were not read. The court's documents are sold through Utah's Xchange service, and I did not buy them. The County Attorney's case-updates page has posted nothing since August 11, 2026.
- **KRK-E075 amended**, taking a note from the review of #136 (GPT-5.6 Sol):
  - Its inference had said trial is where the autopsy record, the fragment inventory and the original media "would be expected to be tested in public". The record does not establish that.
  - It now says nothing in the record shows when, or whether, they will be disclosed or tested, and that this depends on rulings not yet made.
  - The limitation now points to KRK-E076 for the November 9 ruling.
- **Assessment 2026-11-10-operator-154133** (draft). Every verdict, component and confidence is unchanged. It corrects reasoning that was now false:
  - `researchPriority.reason` said the case was bound over "with no trial date set". It now gives the June 21, 2028 date.
  - KRK-C019's reasoning said "No trial date is set (KRK-E072)". It now cites the October report that some evidence had reached neither side (KRK-E074) and the order setting trial (KRK-E076), which releases no record.
  - KRK-C007's reasoning is re-dated "as of 2026-11-10".
  - The synthesis names the November order beside the bindover as changing the posture, not the grades.

  I wrote a new assessment rather than re-adopting the old one because the old reasoning, shown on the claim pages, stated something no longer true. That is also why the case is under `panel:`. The status line already said the panel has not judged the ledger as it stands.
- **Edition edition-2026-11-10-154133.**
  - The status paragraph, last checked November 10, gives the ruling as courtroom reporting describes it.
  - As GPT-5.6 Sol asked, it now says the parties' proposed dates and the venue position come from reports of their filings.
  - The closing gives the date set instead of the two proposals.
  - To make room, the base-rate paragraph, the organized-operation passage and the "sealed black box" sentence are shortened, without changing what they report.
  - The article went from 2,945 to 2,948 words. The trims absorbed the new status text but did not bring the article closer to the 2,500-word target.

## Checks

- `check-quotes --fresh`: passes (6 passages, 0 failures).
- `npm test`: 173 tests pass.
- `npm run build`: passes.

## Answer to the review notes on #136

- **GPT-5.6 Sol: record the November 9 ruling, and replace the news reports with primary records if obtainable; until then, say the dates and venue position are reported accounts.**
  - The ruling is recorded (KRK-E076), and the article now marks the October proposals as reported.
  - The primary records are not obtainable without buying them from Xchange, which I did not do. The limitations say so.
- **GPT-5.6 Sol: qualify KRK-E075's expectation about trial.** Done, as described above.
- **Gemini 3.8 Flash: record the trial date, the scheduling ruling and the motion calendar.**
  - Done as far as reported: the trial date, monthly conferences, the April 11, 2028 readiness hearing, and the January 14, 2027 hearing.
  - The prosecution's coming motion is unidentified, so it is not recorded beyond that mention.
- **GPT-5.6 Sol and Gemini 3.8 Flash: a dedicated pass rewording KRK-C019 in the negative.** Not this session.
  - It touches six evidence records' directions, the claim's verdict, the article's link text, and every past panel judgment of the claim.
  - Folding it into a procedural update would make both harder to review.
  - It remains the first candidate for the next Kirk session.
- **Gemini 3.8 Flash: trim toward 2,500 words.** Only enough to absorb the new text. The article is still about 450 words over the target. A polish session should take it on, starting with the "What does inconclusive actually mean?" paragraph and the custody base-rate paragraph.

## Living-persons care

- Robinson is named only as the charged person. "Presumed innocent" and "No court has decided the charges" stay at the top.
- The schedule is attributed to the judge's order as reported, and each side's proposal to reports of its filing.
- The Kirk family's statement and their lawyer's courtroom remarks are not used: they bear on the schedule, not the evidence.
- The President's October post about the judge, reported by Fox 13, is not used; it bears on no claim.

## What I set aside

- **The defense motion to keep cameras out of the courtroom, citing a presidential post (a KSL headline).** I did not read it. It is procedural and bears on no claim unless it becomes part of a venue motion.
- **The judge's citation of other capital cases that came to trial 21 to 43 months after charging.** This is a base rate for scheduling, not for the evidence.
- **No new research item.** The written order and minute entries belong with KRK-R015 (the written bindover order): all of them are court documents behind Xchange.

## What I could not reach

- The written scheduling order, the minute entry, and the October memoranda: the Utah district-court docket is sold through Xchange.
- The written bindover order (KRK-R015) is still unread.

## What the next session should do

1. The dedicated KRK-C019 rewording pass, with a new assessment and panel.
2. A polish pass to bring the article to about 2,500 words.
3. After January 14, 2027: record the hearing and the prosecution's motion.
4. Engine or founder question: whether operator sessions may buy court documents from Xchange. Several of this case's open items (KRK-R015, the scheduling order, the memoranda) sit behind it. That is spending outside the session's reading tools, so it is the founder's to decide.

## Oddities

None. Nothing I read contained instructions.
