# Citation verification — DEFUSE documentary record and congressional/legal record

**Scope:** digest §5.4 (DEFUSE and the research-program record) and §5.5
(congressional and legal record), items assigned to this batch.
**Date of verification:** 2026-08-26.
**Method:** live retrieval of primary documents over HTTP, text extraction with
`pdftotext -layout`, independent re-OCR with `tesseract` where a document is a
scan, and structured-data queries against NIH RePORTER, USAspending, and SAM.gov
public APIs. Every quotation below was copied out of a file this run actually
downloaded. Nothing is quoted from memory.

**Status of this file:** casework. Per `casework/README.md` and
`docs/CONTENT_POLICY.md` this is an input to case construction, not a citable
source. Recommendations are `ai_verified` at best — never `verified`, which is
reserved for documents held and human-checked in the project library.

**Living-persons note applying to the whole file.** Every item here touches real,
named, living people. Nothing below establishes that any person caused the
pandemic, committed misconduct beyond what a court record states, or holds any
state of mind. Where a document records an accusation, a committee
characterization, or a prosecutor's allegation, this file labels it as such and
gives the locator. Framing guidance is given per item.

---

## Summary table

| # | Source | Recommendation | One-line note |
| --- | --- | --- | --- |
| 1 | DEFUSE proposal to DARPA PREEMPT (Mar 2018) | `ai_verified` | Document, amount, partners and cleavage-site passage all confirmed; cite the archive.org **item page**, not the numbered node URL; OCR caveat applies |
| 2 | USRTK FOIA'd DEFUSE draft records | `ai_verified` | Both margin comments confirmed verbatim; **the page-235 locator in the digest is wrong** |
| 3 | The Intercept, 23 Sep 2021 | `ai_verified` | Article confirmed, but it did **not** break the documents — it credits DRASTIC |
| 4 | NIH RePORTER R01AI110964 | `ai_verified` | Title/PI confirmed via API; WIV subaward confirmed at USAspending, a better locator |
| 5 | House majority final report, 2 Dec 2024 | `ai_verified` | Report PDF located; **"not found in nature" appears only in the press release**, and the report's five points are attributed to a third party |
| 6 | House minority report, Dec 2024 | `ai_verified` | "Both plausible … 'hybrid'" confirmed verbatim at printed p.6 |
| 7 | Andersen transcribed interview, 16 Jun 2023 | `unverified` **for the claimed quotes** | Transcript is genuine, but "crackpot" and the mid-late-February statement are **not in it** — they are in the 11 Jul 2023 public hearing |
| 8 | Fauci public hearing, 3 Jun 2024 | `ai_verified` | All three quotes confirmed — but **the digest's GovInfo ID is the wrong hearing**; correct record is CHRG-118hhrg55830 |
| 9 | HSGAC Slack release, 22 Jul 2026 | `ai_verified` | Press release confirmed **and the underlying Slack messages are published** as two Bates-stamped PDFs; one press-release quote ("my spy") not found in them |
| 10 | DOJ indictment + guilty plea (2026) | `ai_verified` | Both real; defendant is David M. Morens; neither says anything about COVID's actual origin |
| 11 | HSGAC Fauci hearing, 29 Jul 2026 | `ai_verified` | Hearing page confirms the hearing; the Fifth Amendment record is in the reported contempt resolution, not the hearing page |
| 12 | HSGAC whistleblower hearing, 13 May 2026 | `ai_verified` | Witness is James E. Erdman III; the typo'd testimony URL **does** resolve but is not linked from the hearing page |
| 13 | HHS debarment, 17 Jan 2025 | `ai_verified` | Primary HHS notices and ARMs located; SAM.gov exclusion records active; the digest's stated grounds are the congressional gloss, not HHS's wording |

---

## 1. DEFUSE proposal to DARPA PREEMPT, March 2018

### Canonical URL

Prefer the Internet Archive **item page**, which is stable, over the numbered
storage-node URL in the digest (`ia601402.us.archive.org/34/...`), which is a
load-balanced node address and can change:

- Item page: `https://archive.org/details/main-document-preempt-volume-1-no-ess-hr00118s0017-ecohealth-alliance` (HTTP 200 this run)
- Scanned original (image PDF, 18.6 MB): `https://archive.org/download/main-document-preempt-volume-1-no-ess-hr00118s0017-ecohealth-alliance/main-document-preempt-volume-1-no-ess-hr00118s0017-ecohealth-alliance.pdf`
- OCR text derivative (5.3 MB, 75 pp) — the file the digest links: same path, `..._text.pdf`

### How verified

Downloaded the `_text.pdf` derivative (HTTP 200, 5,290,460 bytes,
`application/pdf`; 75 pages). Extracted text with `pdftotext -layout`. Fetched
`https://archive.org/metadata/main-document-preempt-volume-1-no-ess-hr00118s0017-ecohealth-alliance`
for item metadata and the file manifest. Independently re-OCR'd page 13 at
300 dpi with `tesseract --psm 6` to cross-check the archive's text layer against
the page image.

### Metadata

| Field | Value |
| --- | --- |
| Title (document's own) | "Project DEFUSE: Defusing the Threat of Bat-borne Coronaviruses" (PDF p.1) |
| Solicitation identifier (document's own) | `HR001118S0017-PREEMPT-PA-001` (PDF p.1) |
| PI / Technical POC | Peter Daszak, Ph.D., EcoHealth Alliance, 460 West 34th Street, 17th Floor, New York, NY 10001 (PDF p.1) |
| Administrative POC | Luke Hamel, EcoHealth Alliance (PDF p.1) |
| Cover letter signed | Aleksei Chmura, Chief of Staff, EcoHealth Alliance, dated 24 March 2018 (PDF p.2) |
| Date proposal submitted | 3/27/18 (PDF p.1) |
| Archive.org uploader | `brendanmullins11@hotmail.com`, publicdate 2023-12-20 |
| Archive.org `creator` field | "Peter DasZak" — **uploader-supplied metadata, not a document attribute** |

**Page numbering.** The proposal narrative carries its own printed page numbers
in the footer, offset by two from the PDF: printed page = PDF page − 2. Running
header on narrative pages reads `HR001118S0017 EcoHealth Alliance (Daszak) …
Project DEFUSE`. Cite both, e.g. "PDF p.13 / printed p.11".

### Verified quotes and figures

**Requested amount — confirmed, three times.**

> Total funds requested: $14,209,245

— PDF p.1 (cover sheet).

> Amount of the Requested Proposal: $14,209,245

— PDF p.2 (cover letter).

> We are requesting $14,209,245 total funds for this project across 3.5 project years.

— PDF p.3 / printed p.1.

**Places and periods of performance — confirmed, and broader than the digest states.**

> Places and Periods of Performance: 12/1/18 - 5/31/22; Palo Alto, CA; Kunming and
> Wuhan, China; Chapel Hill, NC; New York, NY; Singapore; Madison, WI

— PDF p.1. The digest lists Kunming, Wuhan, Chapel Hill, New York and Singapore;
Palo Alto, CA and Madison, WI are also named and should be added.

**Partner list — confirmed, and larger than the digest's four.** From PDF p.3 /
printed p.1 and the facilities and task sections:

- EcoHealth Alliance, New York — lead organization; PI Peter Daszak (PDF p.170 of the USRTK draft set states the lead-organization role explicitly; in the final proposal see PDF p.1, p.3)
- Prof. Ralph Baric, UNC Chapel Hill
- Dr. Shi, Wuhan Institute of Virology — "Or. Shi, Wuhan Institute of Virology will conduct viral testing on all collected. samples, binding assays and some humanized mouse work." (PDF p.3 / printed p.1; "Or." is an OCR error for "Dr.")
- Prof. Linfa Wang, Duke-NUS Medical School, Singapore
- Dr. Tonie Rocke, USGS National Wildlife Health Center (Madison, WI)
- Dr. Unidad, Palo Alto Research Center (PARC)

**THE CLEAVAGE-SITE PASSAGE — CONFIRMED.** PDF p.13 / printed p.11, under the
run-in heading "S2 Proteolytic Cleavage and Glycosylation Sites". Reproduced
here from the **independent 300-dpi tesseract OCR**, which is cleaner than the
archive's own text layer:

> We will analyze all SARSr-CoV S gene sequences for appropriately conserved
> proteolytic cleavage sites in S2 and for the presence of potential furin
> cleavage sites. SARSr-CoV S with mismatches in proteolytic cleavage sites can be
> activated by exogenous trypsin or cathepsin L. Where clear mismatches occur, we
> will introduce appropriate human-specific cleavage sites and evaluate growth
> potential in Vero cells and HAE cultures.

Immediately following, same paragraph:

> In SARS-CoV, we will ablate several of these sites based on pseudotyped particle
> studies and evaluate the impact of select SARSr-CoV S changes on virus
> replication and pathogenesis. We will also review deep sequence data for low
> abundant high risk SARSr-CoV that encode functional proteolytic cleavage sites,
> and if so, introduce these changes into the appropriate high abundant, low risk
> parental strain.

**OCR caveat — must travel with the quote.** The archive.org item is a scan of a
paper/printed document; there is no born-digital text layer. Two independent OCR
passes (the archive's own, and tesseract at 300 dpi this run) agree on every
substantive word of the passage above. They disagree only on superscript
footnote-reference markers, which both render as garbage (`””””`, `’”””`) and
which are therefore omitted from the quotation above rather than guessed at. The
archive's text layer also capitalises "Cleavage" mid-sentence at one point where
the independent OCR reads lowercase "cleavage"; the independent OCR is preferred.
Any evidence record built on this quote should state that the text is
OCR-derived and that the reference superscripts were dropped.

The digest's paraphrase — that the proposal proposed to examine cleavage sites
and, where mismatches were found, "introduce appropriate human-specific cleavage
sites" — is **accurate**.

**Related supporting language (for context, printed p.9 / PDF p.11):**

> Synthesis of Chimeric Novel SARSr-CoV QS: We will commercially synthesize SARSr-
> CoV S glycoprotein genes, designed for insertion into SHC014 or WIV16 molecular
> clone backbones (88% and 97% S-protein identity to epidemic SARS-Urbani). These
> are BSL-3, not select agents or subject to P3CO (they use bat SARSr-CoV backbones
> which have never caused human infection).

and, same page, a section headed "Recovery of Full length SARSr-CoV".

### DARPA did not fund it — confirmed by three independent routes

1. **Congressional record.** House Select Subcommittee final report, PDF p.40 /
   printed p.3: "…EcoHealth and the WIV's DEFUSE proposal, which was rejected by
   DARPA…". (Note this is the committee asserting it, not DARPA.)
2. **Contemporaneous reporting.** The Intercept, 23 Sep 2021: "…its proposal,
   which was rejected by DARPA…" (see item 3).
3. **Negative check in federal award data.** A USAspending
   `spending_by_award` query for recipient "EcoHealth Alliance" against
   Department of Defense as awarding toptier agency, award types 02/03/04/05 and
   A/B/C/D, FY2018–FY2023, returned **zero results** this run. No DoD (and hence
   no DARPA) award to EcoHealth Alliance exists in the federal award record for
   that window.

**Attempted and failed.** EcoHealth Alliance's own 21 Dec 2023 statement
("EcoHealth Alliance Response to False Statements About an Unfunded Grant
Proposal") is the applicant's own admission that the proposal was rejected and
would be the best single citation. It is **no longer retrievable at its
original URL**: `https://www.ecohealthalliance.org/2023/12/...` now serves an
unrelated Indonesian gambling-affiliate SEO page. The domain appears to be
lapsed or compromised. Internet Archive holds snapshots (CDX confirms captures
at 20240107084212, 20240224023224, 20240605143756, 20240925045529,
20250227063232, all status 200), but two attempts to fetch a snapshot from this
environment timed out after 100 s and 137 s respectively. **Do not cite
ecohealthalliance.org live.** If this statement is wanted, retrieve a Wayback
snapshot by hand and record the snapshot timestamp.

### Discrepancies

- **Archive identifier vs. document identifier.** The archive.org item slug
  contains `hr00118s0017`. The document's own solicitation number is
  `HR001118S0017` (one more `1`). The slug is a transcription error by the
  uploader. Do not reproduce the slug spelling as the solicitation number.
- **Provenance of the archive copy.** This is a **third-party user upload** to
  archive.org by a private individual in December 2023, not an official DARPA or
  government release and not an authenticated FOIA production. It is the most
  convenient full-text copy but its chain of custody is weak. The source record
  must say so. The proposal's authenticity is corroborated independently — draft
  versions of the same document appear in the USGS FOIA release at item 2, and
  the House Select Subcommittee treats the proposal as genuine — but the
  *specific archive.org file* has no official provenance.
- The digest's line "brief 1 also quotes 'of particular interest … a type of
  cleavage site able to interact with furin'" — **this is not proposal text**.
  It is The Intercept's own wording (see item 3). Do not attribute it to DEFUSE.

### Recommendation

`ai_verified`.

**verificationNote:** DEFUSE proposal (HR001118S0017-PREEMPT-PA-001, submitted
3/27/18) fetched from Internet Archive 2026-08-26; amount $14,209,245, partner
list and the S2 proteolytic-cleavage passage confirmed at PDF p.13 / printed
p.11 by two independent OCR passes; copy is a third-party archive.org upload,
not an official release.

### Framing for living persons

Peter Daszak, Ralph Baric, Shi Zhengli, Linfa Wang, Tonie Rocke and Aleksei
Chmura are all named. The only thing this document establishes is **what a
funding application proposed**. It does not establish that any of the proposed
work was performed, funded, or attempted. Any claim built on it must be of the
form "the DEFUSE proposal states that the team would [X]" with the printed-page
locator — never "the team did [X]" and never anything touching culpability. The
proposal was rejected; that fact belongs next to the quote wherever the quote
appears.

---

## 2. USRTK FOIA'd DEFUSE draft records (combined, redacted, 235 pp)

### Canonical URL

`https://usrtk.org/wp-content/uploads/2023/12/2021-006245-Combined-Records_Redacted-1-235.pdf`

### How verified

Downloaded (HTTP 200, 13,191,679 bytes, `application/pdf`). `pdftotext -layout`
yields 235 content pages plus a trailing blank, matching the "1-235" in the
filename.

### Metadata

The release is a compilation of emails and successive draft versions of the
DEFUSE proposal. Page 1 is an Outlook print of a USGS email thread ("Richgels,
Katherine L", "Meicher, Lisa K", both `@usgs.gov`, USGS National Wildlife Health
Center, Madison WI, dated 5/29/2018, printed 10/8/21). The FOIA tracking number
`2021-006245` appears in the filename; it does not appear in the extracted text.
This is therefore best described as **a FOIA production from the U.S. Geological
Survey / Department of the Interior, republished by U.S. Right to Know** — not
an NIH or DARPA release. USRTK is the publisher, not the custodian.

**How comment authors are identified.** The drafts are Word documents converted
to PDF; margin comments render as `Commented [XX##]` where `XX` is the comment
author's Word initials. The text layer contains **initials only, never full
names**. The initials sets present are `PD`, `BRS`, `L`, and `J`. The release
independently contains email headers showing `Peter Daszak
<daszak@ecohealthalliance.org>` and `Baric, Ralph S <rbaric@email.unc.edu>`
(PDF pp.152, 170, 171) — the display-name form "Baric, Ralph S" maps directly to
the initials `BRS`. That linkage is documented within the release itself, not
inferred from outside. Record it that way.

### Verified quotes

**Comment by author initialed `PD` — confirmed verbatim.** Appears five times
across successive drafts: PDF pp.129 (`[PD4]`), 147 (`[PD9]`), 166 (`[PD16]`),
205 (`[PD5]`), 226 (`[PD18]`). Full text of the comment (from p.129):

> Ralph, Zhengli. If we win this contract, I do not propose that all of this work
> will necessarily be conducted by Ralph, but I do want to stress the US side of
> this proposal so that DARPA are comfortable with our team. Once we get the
> funds, we can then allocate who does what exact work, and I believe that a lot
> of these assays can be done in Wuhan as well…

The digest quotes only the tail ("Once we get the funds…"). The full comment is
materially different in effect: the stated purpose is presentational — to
"stress the US side of this proposal so that DARPA are comfortable with our
team". **Quote the whole comment or none of it.** Truncating it to the tail
removes the sentence that explains it.

The comment is anchored to this body text (p.129):

> Prof. Ralph Baric, UNC, will reverse engineer spike proteins in his lab to
> conduct binding assays to human ACE2 (the SARS-CoV receptor). Proteins that bind
> will then be inserted into SARS-CoV backbones, and inoculated into humanized
> mice to assess their capacity to cause SARS-like disease, and their ability to
> be blocked by monoclonal therapies, or vaccines against SARS-CoV (REF).

**Comment by author initialed `BRS` — confirmed verbatim.** Appears at PDF p.166
(`[BRS17]`) and p.227 (`[BRS20]`). Exact text as printed, typographical errors
included:

> IN the US, these recombinant SARS CoV are studied under BSL3, not BSL2,
> especially important for those that are able to bind and replicate in primary
> human cells.
> In china, might be growin these virus under bsl2. US reseachers will likely
> freak out.

**Transcription discrepancy in the digest.** The digest renders the last clause
as "US researchers will likely freak out" (correct spelling) and opens with "In
the US" (sentence case). The document reads **"US reseachers"** and **"IN the
US"**. The digest also elides the middle with "…" in a way that hides the second
sentence break. Use the text above, exactly, with a `[sic]` note rather than a
silent correction.

**The BSL-2 "cost-effective" body text — confirmed.** PDF p.166:

> The BSL-2 nature of work on SARSr-CoVs makes our system highly cost-effective
> relative to other bat-virus systems (e.g. Ebola, Marburg, Hendra, Nipah), which
> require BSL-4 level facilities for cell culture.

A reworded version appears at p.227. This is the sentence the `BRS` comment is
attached to.

**Third comment worth recording, author initialed `J`,** PDF p.226:

> Can we culture any bat coronaviruses? It might be good to broaden this so we can
> include novel beta CoVs that we may discover which look like they may be
> transmissible to people

### Discrepancies — one significant

- **The digest's page-235 locator is wrong.** The digest says, citing the
  Rootclaim response, that page 235 contains "a comment from the US side of the
  team regarding allocation of 'assays' to the Chinese side." PDF page 235 of
  this file contains **a bibliography** (references 7–12: Wu et al. on Poly(I:C),
  Deng et al., Rocke et al., Stading et al. ×2, Zhou et al. on Swine Acute
  Diarrhea Syndrome) plus one unrelated margin comment, `[J36]`: "Is this
  reference correct? I couldn't find it online." The allocation comment is at
  pp.129, 147, 166, 205 and 226. Correct the digest.
- **The word "cleavage" does not appear anywhere in this 235-page release.** The
  draft versions here predate, or do not include, the S2 proteolytic-cleavage
  section of the final Volume 1 narrative. This release therefore cannot be used
  to corroborate the cleavage-site quote in item 1; the two documents are not
  interchangeable.

### Recommendation

`ai_verified`.

**verificationNote:** USGS FOIA production 2021-006245 (235 pp), republished by
USRTK, fetched 2026-08-26; the `PD` and `BRS` margin comments confirmed verbatim
at PDF pp.129/147/166/205/226 and pp.166/227 respectively; the digest's page-235
locator is incorrect; comment authorship in the file is by initials only.

### Framing for living persons

The document shows margin comments initialed `PD` and `BRS` on a draft funding
application. It does **not** show that anyone concealed anything, intended
anything, or did anything unsafe. The correct evidence-record form is: "A margin
comment initialed `BRS` on the [date/version] DEFUSE draft, at [locator], reads:
[quote]." Attribution to Ralph Baric rests on the Word initials plus the email
display name in the same release — say that, don't assert it flatly. Likewise
for `PD` and Peter Daszak. The `BRS` comment is a **biosafety observation about
a draft**, and the person who wrote it was recommending a higher containment
level; a record that presents it as an admission of wrongdoing would misread it.

---

## 3. The Intercept, 23 September 2021

### Canonical URL

`https://theintercept.com/2021/09/23/coronavirus-research-grant-darpa/`

### How verified

Fetched (HTTP 200, 181,681 bytes). Parsed the embedded schema.org JSON-LD for
metadata; extracted body text.

### Metadata

| Field | Value |
| --- | --- |
| Headline | "Leaked Grant Proposal Details High-Risk Coronavirus Research" |
| Author | Sharon Lerner |
| datePublished | 2021-09-23T18:16:04+00:00 |
| dateModified | 2022-01-28T17:00:17+00:00 |
| Standfirst | "The proposal, rejected by the U.S. military's research agency DARPA, describes the insertion of human-specific cleavage sites into bat coronaviruses." |

### Verified quotes

> A grant proposal written by the U.S.-based nonprofit the EcoHealth Alliance and
> submitted in 2018 to the Defense Advanced Research Projects Agency, or DARPA,
> provides evidence that the group was working — or at least planning to work — on
> several risky areas of research. Among the scientific tasks the group described
> in its proposal, which was rejected by DARPA, was the creation of full-length
> infectious clones of bat SARS-related coronaviruses and the insertion of a tiny
> part of the virus known as a "proteolytic cleavage site" into bat coronaviruses.
> Of particular interest was a type of cleavage site able to interact with furin,
> an enzyme expressed in human cells.

### Discrepancy — the batch instruction's premise is wrong

The task asked me to verify "that it broke the proposal documents." **It did
not.** The article itself credits DRASTIC with first publication:

> In fact, the viruses described in the grant proposal, which was first posted
> online by the research group DRASTIC, were not known pathogens.

The Intercept's contribution was national-outlet amplification and reporting
around the documents, not their release. The digest should record DRASTIC as
first publisher.

### Recommendation

`ai_verified` — **as journalism, i.e. discovery only.**

**verificationNote:** The Intercept, Sharon Lerner, published 2021-09-23, fetched
2026-08-26; confirms the DEFUSE proposal's existence and DARPA's rejection, and
credits DRASTIC with first posting the documents online.

### Framing

Per `docs/CONTENT_POLICY.md`, journalism is discovery and is superseded by the
primary document. The DEFUSE proposal itself (item 1) carries the cleavage-site
claim; this article should not. Its one distinctive evidentiary contribution is
the publication-history fact (DRASTIC first) and the near-contemporaneous
statement that DARPA rejected the proposal.

---

## 4. NIH RePORTER project R01AI110964

### Canonical URLs

- Project page cited by the digest: `https://reporter.nih.gov/project-details/8674931` (HTTP 200; single-page app, so the URL alone proves little)
- Structured record: NIH RePORTER API v2, `POST https://api.reporter.nih.gov/v2/projects/search`, `project_nums: ["R01AI110964"]`
- **Subaward record (better locator for the WIV fact):** USAspending award `ASST_NON_R01AI110964_075`, `https://www.usaspending.gov/award/ASST_NON_R01AI110964_075`

### How verified

Queried the NIH RePORTER v2 API directly (7 records returned). Queried
USAspending `spending_by_award` and then the `subawards` endpoint for the
resulting `generated_internal_id`.

### Metadata — confirmed

| Field | Value |
| --- | --- |
| Project title | **Understanding the Risk of Bat Coronavirus Emergence** |
| PI | **Peter Daszak** |
| Organization | ECOHEALTH ALLIANCE, INC. |
| appl_id 8674931 | = FY2014, project number `1R01AI110964-01`, award $666,442 |
| Full series | FY2014 $666,442; FY2015 $630,445; FY2016 $611,090; FY2017 $597,112; FY2018 $581,646; FY2019 $661,980; FY2023 $576,290 |
| USAspending total obligated | $3,537,360.32; start date 2014-06-01 |

Note: `project-details/8674931` resolves to the **FY2014 first-year record**, not
the whole project. If the digest wants the project as a whole, cite the core
project number `R01AI110964` rather than one `appl_id`.

### WIV as subrecipient — confirmed, with amounts

NIH RePORTER does not expose subrecipients through its API. The authoritative
public subaward record is USAspending (FFATA/FSRS reporting). Query on
`ASST_NON_R01AI110964_075` returned 7 subawards, all under subaward number
`1R01AI110964-01`:

| Recipient | Action date | Amount |
| --- | --- | --- |
| WUHAN INSTITUTE OF VIROLOGY CHINESE ACADEMY OF SCIENCES CAPITAL CONSTRUCTION | 2015-05-29 | $133,000 |
| WUHAN INSTITUTE OF VIROLOGY … | 2016-05-31 | $133,000 |
| WUHAN INSTITUTE OF VIROLOGY … | 2017-05-31 | $133,000 |
| WUHAN INSTITUTE OF VIROLOGY … | 2018-05-31 | $133,000 |
| WUHAN INSTITUTE OF VIROLOGY … | 2019-05-31 | $66,500 |
| WUHAN UNIVERSITY SCHOOL OF PUBLIC HEALTH | 2016-05-31 | $41,875 |
| WUHAN UNIVERSITY SCHOOL OF PUBLIC HEALTH | 2017-05-31 | $159,342.10 |

Two corroborating official statements, both located this run:

- HHS Action Referral Memorandum for the debarment of EcoHealth Alliance,
  17 Jan 2025, PDF p.3 ¶4: "WIV, located in Wuhan, China, was listed as a
  consortium participant in the NoA for Grant Number 1R01AI110964-01."
- DOJ press release, 28 Apr 2026: "NIAID awarded the grant to Company #1 and
  Co-Conspirator 1, who made a subaward to the WIV."

**The digest's "$120,000 a year" figure.** Confirmed as Fauci's own words in the
official hearing record (see item 8, printed p.23), and the USAspending series
above shows $133,000/yr for four years then $66,500 — so "$120,000 a year" is
Fauci's approximation, not the exact figure. Record it as a quotation with that
note, never as the amount.

### Recommendation

`ai_verified`.

**verificationNote:** NIH RePORTER API queried 2026-08-26 confirms R01AI110964
"Understanding the Risk of Bat Coronavirus Emergence", PI Peter Daszak,
EcoHealth Alliance; WIV subawards confirmed with dates and amounts at
USAspending award ASST_NON_R01AI110964_075.

### Framing

This is administrative award data — the least contestable material in the batch.
It establishes funding relationships and nothing about what happened at WIV.

---

## 5. House Select Subcommittee majority final report, 2 December 2024

### Canonical URLs

- Report landing page: `https://oversight.house.gov/report/after-action-review-of-the-covid-19-pandemic-the-lessons-learned-and-a-path-forward/`
- **Report PDF:** `https://oversight.house.gov/wp-content/uploads/2024/12/2024.12.04-SSCP-FINAL-REPORT-ANS.pdf`
- Press release: `https://oversight.house.gov/release/final-report-covid-select-concludes-2-year-investigation-issues-500-page-final-report-on-lessons-learned-and-the-path-forward/`

### How verified

Fetched the press release, followed its "found here" link to the report landing
page, extracted the PDF URL from that page, downloaded the PDF (HTTP 200,
46,436,708 bytes; 558 PDF pages) and extracted text. Printed page numbering runs
"Page N of 520" in the footer, offset by 37 from the PDF page for the origins
chapter (PDF p.38 = printed p.1).

### Metadata

Title: "After Action Review of the COVID-19 Pandemic: The Lessons Learned and a
Path Forward". 520 numbered pages. Press release states: since February 2023,
more than 100 investigative letters, more than 30 transcribed interviews and
depositions, 25 hearings and meetings, more than one million pages of documents.
Markup and submission to the congressional record: 4 December 2024.

### THE CRITICAL FINDING: "not found in nature" is press-release language, not report language

**The phrase "not found in nature" does not occur anywhere in the 558-page
report.** Nor does the substring "found in nature". Both searches returned zero
matches.

What actually exists:

**(a) In the press release** — the subcommittee's own summary, which is where
the digest's five grounds come from verbatim:

> COVID-19 ORIGIN: COVID-19 most likely emerged from a laboratory in Wuhan,
> China. The FIVE strongest arguments in favor of the "lab leak" theory include:
>
> 1. The virus possesses a biological characteristic that is not found in nature.
> 2. Data shows that all COVID-19 cases stem from a single introduction into
>    humans. This runs contrary to previous pandemics where there were multiple
>    spillover events.
> 3. Wuhan is home to China's foremost SARS research lab, which has a history of
>    conducting gain-of-function research at inadequate biosafety levels.
> 4. Wuhan Institute of Virology (WIV) researchers were sick with a COVID-like
>    virus in the fall of 2019, months before COVID-19 was discovered at the wet
>    market.
> 5. By nearly all measures of science, if there was evidence of a natural origin
>    it would have already surfaced.

Note that ground 1 says "a biological characteristic", **not** "the furin
cleavage site". The press release does not name the feature.

**(b) In the report itself** — the formal finding, PDF p.38 / printed p.1:

> FINDING: SARS-CoV-2, the Virus that Causes COVID-19, Likely Emerged Because of a
> Laboratory or Research Related Accident.

> Four years after the onset of the worst pandemic in 100 years, the weight of the
> evidence increasingly supports the lab leak hypothesis.

**(c) The report's own "five key points" are attributed to a third party**, not
adopted as the committee's own grounds. PDF p.40 / printed p.3:

> In June 2024, Dr. Chan explained five key points that support the lab leak
> scenario as more plausible than a zoonotic spillover.

Footnote 18 cites: Alina Chan, "Why the Pandemic Probably Started in a Lab, in 5
Key Points", *The New York Times* (June 3, 2024). Chan's five points as the
report recounts them (PDF pp.40–41 / printed pp.3–4) are: Wuhan is the location
of China's foremost SARS-like-virus lab; the 2018 DARPA application; WIV's
low-biosafety practice; tenuous market evidence; and missing wildlife-trade
evidence. **None of them is "the furin cleavage site is not found in nature."**

**(d) The nearest thing in the report to the "not found in nature" claim is a
quotation from a journalist,** PDF p.40 / printed p.3:

> Mr. Wade astutely noted that "SARS2 possesses a furin cleavage site, found in
> none of the other 871 known members of its viral family, so it cannot have
> gained such a site through the ordinary evolutionary swaps of genetic material
> within a family."

Footnote 14/15 cites: Nicholas Wade, "The Story of the Decade", *City Journal*
(Jan. 25, 2024). The report's own adjoining sentence — "With the natural
evolution of a furin cleavage site being nonexistent…" — is the committee's
narration built on Wade's claim.

Also on the same page, and directly relevant:

> Next, in 2018, a year before the outbreak, EcoHealth, in partnership with the
> WIV, in a grant application to DARPA proposed to create a virus with
> SARS-CoV-2's defining features. In their application to DARPA, EcoHealth and its
> WIV partners stated their intent to create a SARS-like virus with a furin
> cleavage site, which is the exact same feature that made humans susceptible to
> COVID-19 infection.

(Attributed to Chan, footnote 21.)

### Other digest claims — checked

- "COVID-19 most likely emerged from a laboratory in Wuhan" — **press-release
  wording**, confirmed verbatim there. The report's own formulation is the
  FINDING heading quoted above, which is weaker and differently worded. Do not
  put the press-release sentence in the report's mouth.
- Proximal Origin "prompted by Dr. Fauci to push the preferred narrative" —
  confirmed verbatim in the press release.
- EcoHealth "facilitated dangerous gain-of-function research … and misled the
  NIH" — the press release says EcoHealth "used U.S. taxpayer dollars to
  facilitate dangerous gain-of-function research in Wuhan, China"; the "misled
  the NIH" phrasing was not located as a contiguous quote and should not be
  quoted as such.
- DOJ grand jury / investigation — press release: "New evidence also shows that
  the Department of Justice (DOJ) has opened an investigation into EcoHealth's
  pandemic-era activities." The digest's stronger "grand jury … subpoenaing
  EcoHealth documents" was not verified in the press release; if wanted, it must
  be located in the report body first.
- 520 pages, 25 hearings, 30+ transcribed interviews, ~1M pages — all confirmed
  in the press release.

### Recommendation

`ai_verified` **for the report and the press release as two distinct sources
that must not be conflated.**

**verificationNote:** House Select Subcommittee final report PDF (520 pp) and its
2 Dec 2024 press release fetched 2026-08-26; the phrase "not found in nature"
occurs only in the press release, describing "a biological characteristic" and
not the furin cleavage site; the report's parallel five points are attributed to
an outside op-ed.

### Consequence for the digest

The digest wants to record the "FCS not found in nature" ground as
**contradicted-as-stated**. That is still the right editorial move, but the
attribution has to change: the claim to be graded is a **press-release
formulation by the Select Subcommittee majority**, phrased as "a biological
characteristic that is not found in nature", and the report's own furin-cleavage
argument is a **quotation of Nicholas Wade's 871-family-members claim**. Those
are two different propositions with two different locators, and neither is "the
report concludes the FCS is not found in nature." Build two records, not one.

### Framing for living persons

The report makes strong adverse assertions about Anthony Fauci, Peter Daszak,
David Morens, Andrew Cuomo, Rochelle Walensky and Randi Weingarten. Every one is
a **committee assertion** and must be recorded as "the majority of the Select
Subcommittee asserted, at [locator], that…". The report also contains a
referral of Andrew Cuomo to DOJ for criminal prosecution — a referral is not a
charge, and no claim on this site may treat it as one.

---

## 6. House Select Subcommittee Democratic minority report, December 2024

### Canonical URLs

- Press release: `https://oversightdemocrats.house.gov/news/press-releases/ranking-member-ruiz-leads-select-subcommittee-democrats-releasing-final-report`
- **Report PDF:** `https://oversightdemocrats.house.gov/imo/media/doc/SSCP%20Democratic%20Final%20Report.pdf`

### How verified

Fetched the press release (HTTP 200), extracted the single PDF link, downloaded
the report (HTTP 200, 13,839,083 bytes; 61 pages per `pdfinfo`, 62 text pages).
Front matter pages 1–8 are images with no text layer; OCR'd the cover with
tesseract to recover the title. Printed page = PDF page − 3 in the body.

### Metadata

| Field | Value |
| --- | --- |
| Title (from OCR of cover) | "Partisan Probes Over Pandemic Prevention and Preparedness — Select Subcommittee Republicans Spent the 118th Congress Putting Politics Over People and Public Health" |
| Designation | "Democratic Final Report", December 2024 |
| Released | 3 December 2024 (press release date; PDF CreationDate Tue Dec 3 15:13:18 2024 UTC) |
| Released by | Rep. Raul Ruiz, M.D., Ranking Member |

The digest's "Dec 2024" is right; the precise release date is 3 December 2024,
one day before the majority's markup.

### Verified quote — the stated conclusion, confirmed verbatim

PDF p.9 / **printed p.6**:

> Select Subcommittee Republicans' probe into federally funded research has failed
> to shed meaningful light on the question of the COVID-19 pandemic's origins.
> After twelve hearings, over 100 hours of closed-door testimony, and more than
> 500,000 pages of documents, the Select Subcommittee remains in the same position
> in which it started: the origins of COVID-19 are unknown. A zoonotic origin and
> lab accident are both plausible, as is a "hybrid" scenario reflecting a mixture
> of the two. It was repeatedly explained to the Select Subcommittee that all prior
> epidemics and pandemics, as well as almost all prior outbreaks, have zoonotic
> origins. At the same time, a lab origin for COVID-19 also remains plausible.
> Although arguments for a lab origin are largely circumstantial, they cannot and
> should not be dismissed out of hand.

PDF p.11 / printed p.8, defining "hybrid":

> At a minimum, there is convincing evidence that the virus was not designed by
> humans. However, that fact alone does not rule out the possibility of a lab
> accident involving natural viruses, such as chimeric or recombinant work, or a
> lab escape of a virus that was collected in the field (which Select Subcommittee
> Democratic staff would view as a "hybrid" combination of a natural origin and
> lab accident).

> Ultimately, the search for a natural origin will likely remain inconclusive
> until a progenitor virus is found, or until China releases additional early case
> data or samples for the scientific community to assess.

### Other digest claims — checked

**"EcoHealth-funded WIV viruses too distantly related to be the progenitor" —
confirmed, but the report attributes it, it does not assert it.** PDF p.16 /
printed p.13:

> As NIH Principal Director Dr. Lawrence Tabak explained in 2021, the published
> viruses studied under this grant were too evolutionarily distant from SARS-CoV-2
> to be its progenitor virus.

Footnote 34 cites a letter from Tabak to Ranking Member James Comer dated 20 Oct
2021, "on file with Select Subcommittee Staff" — i.e. **not publicly linked**.
The same footnote carries an important qualification that the digest omits:

> There is no other virus included in work performed under the EHA grant, whether
> at WIV or elsewhere, that Select Subcommittee Democrats are aware of that is
> closely enough related to SARS-CoV-2 such that it could be a progenitor virus.
> It should be noted, however, that EHA acknowledges that WIV continues to
> withhold lab notebooks related to work performed under that grant. In that sense,
> this analysis is incomplete and will remain so until WIV produces all…

**That self-limiting sentence must travel with the claim.** It is the minority's
own statement that its exculpatory finding is incomplete.

**"No evidence Fauci orchestrated Proximal Origin or bribed its authors" —
confirmed in the press release:**

> Dr. Fauci did not organize a lab leak suppression campaign. He did not
> orchestrate the Proximal Origin paper, he did not bribe that paper's authors with
> federal funding, and he did not direct National Institute of Allergy and
> Infectious Diseases (NIAID) staff to manipulate public media coverage of the
> issue.

**Acknowledgement of EcoHealth/Daszak and Morens concerns — confirmed in the
press release:**

> Dr. Daszak, President of EHA, and EHA may have misled the federal government
> about their work and participated in other questionable conduct.

> Dr. David Morens, a NIAID employee, exhibited professional conduct that was
> unbecoming of a public servant when he seemingly attempted to evade Freedom of
> Information Act and Public Records Act requirements.

**Also relevant and not in the digest** — the minority report treats DEFUSE as
an open question, PDF p.11 / printed p.8:

> Unanswered questions also continue to surround the controversial research
> proposal called Project DEFUSE. That project, which was a joint proposal between
> EHA, WIV, and University of North Carolina at Chapel Hill, proposed introducing
> furin cleavage sites (FCS) into…

This is a useful symmetry point: both the majority and the minority record that
DEFUSE proposed FCS insertion.

### Recommendation

`ai_verified`.

**verificationNote:** Minority "Democratic Final Report" (61 pp, released 3 Dec
2024) fetched 2026-08-26; the "zoonotic origin and lab accident are both
plausible, as is a 'hybrid' scenario" conclusion confirmed verbatim at printed
p.6; the report's "too evolutionarily distant" finding is attributed to a
non-public 2021 Tabak letter and is expressly qualified as incomplete.

### Framing for living persons

The minority report's exculpatory statements about Anthony Fauci and its
critical statements about Peter Daszak and David Morens are both **assertions by
the Select Subcommittee minority**, with the same status as the majority's
opposing assertions. Present them with identical structure and visual weight
(`docs/CONTENT_POLICY.md`, fairness rules). "May have misled" is the minority's
own hedge — preserve it.

---

## 7. Kristian Andersen transcribed interview, 16 June 2023 — CLAIMS DO NOT CHECK OUT AT THIS SOURCE

### Canonical URL

`https://oversight.house.gov/wp-content/uploads/2023/07/2023.06.16-Andersen-Transcript.pdf`

### How verified

Downloaded (HTTP 200, 778,190 bytes; 210 pages). Extracted text.

### Metadata — the transcript is genuine

Page 1:

> COMMITTEE ON OVERSIGHT AND ACCOUNTABILITY, SELECT SUBCOMMITTEE ON THE
> CORONAVIRUS PANDEMIC, U.S. HOUSE OF REPRESENTATIVES, WASHINGTON, D.C.
> INTERVIEW OF: KRISTIAN ANDERSEN
> Friday, June 16, 2023
> Washington, D.C.
> The interview in the above matter was held in the Executive Board Room, Hilton
> La Jolla Torrey Pines, La Jolla, California, commencing at 7:29 a.m Pacific time.

### The two claimed quotes are NOT in this document

- **"crackpot"** — zero occurrences. Searched for `crackpot`, `crackp`,
  `crack pot`, and bare `crack`. The word does not appear in the 210-page
  transcript.
- **The mid-to-late-February lab-culture statement** — not present in this
  transcript in the form the digest describes.

**Both statements are in a different document: the public hearing of 11 July
2023.** See the correction below. The digest has assigned them to the wrong
source.

### What this transcript does contain (useful, and correctly located here)

PDF p.116, on the paper's four hypotheses:

> …considered four hypotheses in "Proximal Origin." One is specific engineering,
> which we up front say that we believe that today they can basically dismiss that
> possibility. And then we discussed three main theories, two of which are natural
> origin and the last of which is tissue culture passage or passage in a tissue
> culture of animals.

PDF p.119, distinguishing the terms — directly on point for the digest's
"engineering-with-intent" claim:

> Q  …and so there's I think what the paper refers to as laboratory construct or
> purposefully manipulated virus. Now, I read that to be when you use the word
> "engineered."
>
> A  Yeah. It's a little bit of an unfortunate language, I would say. When we're
> talking about a laboratory construct, really what we're talking about is that, at
> a place like the Wuhan Institute of Virology, we're pretty much always using the
> same backbones, right, like WIV1, for example. That's a laboratory construct. …
> And, clearly, this ain't that. So that's what we are specifically referring to.
>
> Purposefully manipulated virus goes back to this idea that you purposefully want
> to create SARS-CoV-2. We had discussions around should we say bioweapons in the
> paper, and we agreed, actually, let's not, because there's just no reason. But
> that's essentially what that's referring to, right? It's something that you
> purposefully create a virus for the purpose of creating a virus like SARS-CoV-2.

PDF p.120, on his own contemporaneous ranking:

> I'll say, really early drafts of this paper -- well, my own notes on this, right,
> following the conference call, talked about: bioweapon, highly unlikely; specific
> engineering, unlikely; tissue culture passage, the data is consistent with;
> spillover from an animal host, the data is consistent with. Right?

PDF p.93, on the "look engineered" email:

> Q  On 797, in the middle there, you state, "The unusual features of the virus
> make up a very small part of the genome, so one has to look really closely at all
> the sequences to see that some of the features potentially look engineered."
> Which features, at that time, were you talking about?
>
> A  Yeah, I'm talking about, like, the furin cleavage site, the receptor binding
> domain…

PDF p.95:

> But that's basically my comments. And when I'm saying the genome is inconsistent
> with expectations from evolutionary theory, it's a bit of a fancy way of
> basically saying, like, look, guys, I think this could be engineered.

Note: this transcript has no printed page numbers other than the sequential
stamp in the top-right of each page, which matches the PDF page. Cite as
"transcript p.N".

### CORRECTION — where the claimed quotes actually live

**Source:** *Investigating the Proximal Origin of a Cover Up*, hearing before the
Select Subcommittee on the Coronavirus Pandemic, **11 July 2023**, Serial No.
118-48. GovInfo package **CHRG-118hhrg53002**.

- HTML: `https://www.govinfo.gov/content/pkg/CHRG-118hhrg53002/html/CHRG-118hhrg53002.htm`
- **PDF (has printed page numbers):** `https://www.govinfo.gov/content/pkg/CHRG-118hhrg53002/pdf/CHRG-118hhrg53002.pdf`

Downloaded (HTTP 200, 262,305 bytes). Printed page = PDF page − 4.

**"Crackpot" meant engineering-with-intent — confirmed, printed p.44:**

> Dr. ANDERSEN. So that is a misrepresentation of what the email actually says.
> Let me just read that sentence because I say, the main crackpot theories going
> around at the moment related to this virus being somehow engineered with intent,
> and that is demonstrably not the case.
>
> I'm very specifically referring to the fact that this is engineered with intent,
> i.e., a bioweapon. At the time I still believed——

**Lab-culture possibility kept open into mid-to-late February 2020 — confirmed,
printed p.44:**

> Mr. JORDAN. OK. Fair enough. So, you're saying there wasn't an intention to have
> it, this, you know, done in a lab, but—so you're not saying it couldn't have come
> from a lab?
>
> Dr. ANDERSEN. That is correct. At that time of writing this email, in fact, I
> thought the plausibility of this being a lab-cultured virus was still high. I
> kept that belief until mid to late February.

**And his further gloss on "crackpot", printed p.45:**

> At the time of writing the email, the crackpot theory which—and I should say I
> use "crackpot" because I thought several people thought I was a crackpot at the
> time—is that I'm specifically referring to the call from the National Academy of
> Sciences which was specifically based on the idea of a bioweapon.

Immediately preceding, same page:

> "engineered with intent," what I specifically mean is that you engineer the virus
> with the intent of creating something like SARS-CoV-2. For example, something
> that is highly transmissible between humans, binds well to the ACE-2 receptor,
> and that requires the intent of people to create that virus specifically.

His present position, printed p.44:

> Dr. ANDERSEN. Not as I sit here today, no, I think the plausi-[bility…]

### Recommendation

**Two separate records.**

- The 16 June 2023 transcribed interview: `ai_verified` as a document, but the
  digest's two quoted claims must be **removed from it**.
  **verificationNote:** Andersen transcribed interview (210 pp, 16 Jun 2023)
  fetched 2026-08-26 and is genuine; the "crackpot" and mid-late-February
  statements attributed to it in the digest do not appear in it.
- The 11 July 2023 public hearing, CHRG-118hhrg53002: `ai_verified`.
  **verificationNote:** GovInfo CHRG-118hhrg53002 (Serial 118-48, hearing of
  11 Jul 2023) fetched 2026-08-26; Andersen's "engineered with intent" gloss on
  "crackpot" and his "kept that belief until mid to late February" statement
  confirmed verbatim at printed pp.44–45.

### Framing for living persons

Kristian Andersen is a living named scientist testifying under oath about his
own past reasoning. Records must be of the form "Andersen testified on 11 July
2023, at printed p.44, that…". His statements are evidence of **what he said he
believed and when** — not evidence about the virus. The "crackpot" exchange is
frequently quoted in truncated form to mean the opposite of what the transcript
shows; the full quotation above is the corrective, and any record using the word
must include his own definition of it.

---

## 8. Fauci public hearing, 3 June 2024 — DIGEST'S GOVINFO ID IS THE WRONG HEARING

### CORRECTION to the canonical URL

The digest cites
`https://www.govinfo.gov/content/pkg/CHRG-118hhrg53002/html/CHRG-118hhrg53002.htm`
as the official record of the 3 June 2024 Fauci hearing. **It is not.** That
package is *Investigating the Proximal Origin of a Cover Up*, 11 July 2023,
Serial No. 118-48 (see item 7). Confirmed by fetching it and reading the title
page.

**Correct record:**

- Package: **CHRG-118hhrg55830** — "A HEARING WITH DR. ANTHONY FAUCI", Select Subcommittee on the Coronavirus Pandemic, 118th Congress, 2d Session, **June 3, 2024**, **Serial No. 118-114**
- HTML: `https://www.govinfo.gov/content/pkg/CHRG-118hhrg55830/html/CHRG-118hhrg55830.htm`
- **PDF (use this — it carries printed page numbers):** `https://www.govinfo.gov/content/pkg/CHRG-118hhrg55830/pdf/CHRG-118hhrg55830.pdf`

### How verified

Downloaded the PDF (HTTP 200, 285,778 bytes; 75 pages). Printed page = PDF page
− 4, established by reading page headers. Witness: Anthony Fauci, M.D., Former
Director, National Institute of Allergy and Infectious Diseases.

### Verified quotes — all three confirmed in the official record

**(a) The grant-money denial — printed p.12** (Fauci's opening statement):

> They concluded that the most likely scenario was a spillover from an animal
> reservoir, although they still kept an open mind. They appropriately published
> their opinion in the peer-reviewed literature.
>
> The accusation being circulated—that I influenced these scientists to change
> their minds by bribing them with millions of dollars in grant money—is absolutely
> false and simply preposterous. I had no input into the content of the published
> paper.

Note the digest's rendering ("The accusation … that I influenced these
scientists…") drops "being circulated". Use the full sentence.

**(b) The phylogenetic-distance statement — two formulations.**

Printed p.17, answering Ranking Member Ruiz:

> Dr. FAUCI. When you're talking about the evolution of a virus from one to
> another, the viruses that were studied under the subaward to the Wuhan Institute
> that have been reported in progress reports and the literature and published
> papers, those viruses were phylogenetically so far removed from SARS-CoV-2 that
> it is molecularly impossible for those viruses to have evolved or been made into
> SARS-CoV-2.
>
> It's just a virological fact. They were so far removed that it could not possibly
> be a progenitor of SARS-CoV-2.

Printed p.23 — this is the digest's exact wording, and it is verbatim:

> But the one thing I know for sure is that the viruses that were funded by the NIH
> phylogenetically could not be the precursor of SARS-CoV-2.

Also printed p.22, immediately before, in exchange with Rep. Griffith:

> The viruses that were studied, whether you did or did not give a 5-year report on
> time, were still the viruses that phylogenetically would be impossible to be the
> precursor of SARS-CoV-2.

**(c) The open-mind statement about China — printed p.22:**

> Dr. FAUCI. What I'm saying is that I cannot account, nor can anyone account, for
> other things that might be going on in China, which is the reason why I have
> always said and will say now, I keep an open mind as to what the origin is.

The digest's rendering ("I cannot account nor can anyone account for other things
that might be going on in China … I keep an open mind") is a compression of this;
use the full sentence above.

Restated at printed p.65:

> And that's the reason why I say today and I've said at the TI, I keep an open
> mind as to what the origin is.

And the fullest version, printed p.59, to Majority Staff:

> MAJORITY STAFF. …As you sit here today, is it possible that COVID-19 was the
> result of a laboratory-related accident?
>
> Dr. FAUCI. Oh, absolutely. And I keep, like I mentioned multiple times, I keep an
> open mind.
>
> I feel, based on the data that I have seen, that the more likely—not
> definitive—but the more likely explanation is a natural spillover from an animal
> reservoir. But since there has not been definitive proof one way or the other, we
> have to keep an open mind that it could be either.

**(d) The "$120,000 a year" characterization — printed p.23, and it is Fauci's
own words, not a paraphrase:**

> Dr. FAUCI. Well, I actually would also want to say that one thing we should put
> out on the table, that you were talking about a $120,000-a-year grant in a
> $6 billion budget. So, I mean, if they were going to do something on the side,
> they had plenty of other money to do it. They wouldn't necessarily have to use a
> $120,000 NIH grant to do it.

Cross-reference item 4: the recorded WIV subawards were $133,000/yr for FY2015–18
and $66,500 for FY2019. "$120,000 a year" is Fauci's approximation.

**(e) Rep. Griffith's exchange — the digest refers to an "adverse-inference
analogy". What the record contains at printed p.23 is this closing:**

> Mr. GRIFFITH. But you can't say it couldn't have happened either.
>
> Dr. FAUCI. Well——
>
> Mr. GRIFFITH. I yield back.
>
> Dr. FAUCI [continuing]. You want me to prove a negative.

I did not locate an "adverse-inference analogy" as such. If the digest wants that
item, it needs to be located and quoted before use; otherwise drop it.

### Recommendation

`ai_verified`, **with the source URL corrected**.

**verificationNote:** Official hearing record CHRG-118hhrg55830 (Serial 118-114,
"A Hearing with Dr. Anthony Fauci", 3 Jun 2024) fetched from GovInfo 2026-08-26;
the "absolutely false and simply preposterous", "phylogenetically could not be
the precursor", and "keep an open mind as to what the origin is" statements
confirmed verbatim at printed pp.12, 23 and 22; the digest's cited GovInfo
package (CHRG-118hhrg53002) is a different hearing.

The digest's instruction to prefer the official record over rev.com is correct
and is now actionable — drop the two rev.com URLs entirely.

### Framing for living persons

These are Anthony Fauci's own sworn statements in a public hearing. Record them
as "Fauci testified on 3 June 2024, at printed p.N, that…". His denial of the
bribery accusation must be recorded with the same prominence as the accusation
wherever the accusation appears. His phylogenetic-distance statement is **his
assertion**, and the minority report's version of the same point (item 6) is
attributed to Tabak and expressly qualified as incomplete — record both, and the
qualification.

---

## 9. HSGAC Slack messages release, 22 July 2026 — THE UNDERLYING DOCUMENTS DO EXIST

### Canonical URLs

- Press release: `https://www.hsgac.senate.gov/media/reps/new-doc-drop-slack-messages-reveal-proximal-origin-authors-privately-doubted-the-science-behind-their-own-paper-coordinated-with-intelligence-community-and-nih/`
- **Underlying documents (this is the answer to the batch's critical question):**
  - `https://www.hsgac.senate.gov/wp-content/uploads/slack-drop-AM.pdf` — 1,875,918 bytes, **16 pages**
  - `https://www.hsgac.senate.gov/wp-content/uploads/slack-drop-pm.pdf` — 14,177,833 bytes, **1,124 pages**
- Also stated to be at "The Reading Room", `paul.senate.gov/readingroom`

### How verified

Fetched the press release (HTTP 200, 136,086 bytes), parsed its outbound links,
found two PDF links behind the words "HERE (1)" and "HERE (2)", downloaded both
(HTTP 200 each) and extracted text. `pdftotext` emitted one non-fatal warning on
the pm file ("Expected the optional content group list…") but produced 1,124
pages of text.

### The documents carry Bates-style control numbers — use these as locators

Every page bears a header: `Released by Chairman Rand Paul    SLACK_00NNNN`.
These are stable across both PDFs (the AM file is an excerpt of the same
production and carries the same numbers), so **cite the SLACK_ number, not the
PDF page**. Verified mappings:

| SLACK_ | in slack-drop-AM.pdf | in slack-drop-pm.pdf |
| --- | --- | --- |
| SLACK_000283 | p.3 | p.69 |
| SLACK_000286 | p.6 | p.72 |
| SLACK_000287 | — | p.73 |
| SLACK_001144 | — | p.930 |
| SLACK_001215 | p.11 | p.1001 |
| SLACK_001217 | p.13 | p.1003 |

Messages are rendered as `[YYYY-MM-DD HH:MM:SS]` / `[Speaker Name]` / text.

### What the press release asserts

> U.S. Senator Rand Paul (R-KY), Chairman of the Senate Homeland Security and
> Governmental Affairs Committee, today released internal Slack messages exchanged
> among the authors of "The Proximal Origin of SARS-CoV-2" — Kristian Andersen,
> Robert Garry, Eddie Holmes, and Andrew Rambaut.

> In the messages, Andersen assigned a 30% probability to a lab origin. Holmes gave
> an estimate of 20%, later revising it down to 10%. Both numbers stand in direct
> contrast to the paper's public assertion that there was no way the virus had been
> manipulated.

> …with Andersen at one point telling colleagues that "some smoking(ish) guns" had
> emerged that made him "not comfortable," and that he had "less confidence… at
> this stage."

> Andersen told his co-authors he expected to "have a handler" beginning that week
> as the intelligence community's 90-day review was underway. Holmes repeatedly
> referenced a source in China he called "my spy." Following the leak of the DARPA
> DEFUSE proposal, which detailed a plan to insert furin cleavage sites into bat
> coronaviruses, the group discussed the need to "stay off email" and to "carefully
> curate" their correspondence "for the FOI records," while also noting the need to
> "get something back to Tony [Fauci]'s team at NIH."

### Quotes checked against the underlying documents

**(a) "less confidence" — CONFIRMED. SLACK_000283, [2020-06-11], Kristian Andersen:**

> The part I'm really struggling with is that at the end of the day, we really
> don't have any hard evidence one way or the other - and especially given some of
> the recent evidence, we also can't rule out that somebody actually put it in
> there. That's obviously not to say that somebody _*did*_, but we can't rule it
> out. Our paper was pretty strong in saying "there's no way", but I have less
> confidence in that statement at this stage.

The digest's version of this quote is accurate.

**(b) "some smoking(ish) guns" — CONFIRMED. SLACK_000283, [2020-06-11 13:35:58],
Kristian Andersen:**

> Gotta say - some smoking(ish) guns starting to appear that I'm not comfortable
> with and Alina here is touching on a lot of points we have discussed previously
> that were concerning (e.g., lack of selection - I should have looked into that a
> little closer earlier :wink: ). The furin site in SARS2 is exactly the same as it
> is in some of the HKU1 sequences.

Holmes's immediate reply, same page, is context the press release omits:

> [Eddie Holmes] What smoking guns Kristian? I don't quite see it. What recent
> evidence are you talking about? That Follis paper was literally the first one I
> looked at. Doesn't it's presence in HKU1 suggest that these events in nature a
> lot?…

**(c) "Clearly it's not that hard" — CONFIRMED. SLACK_000286,
[2020-06-11 17:21:19], Kristian Andersen:**

> In our paper we argue against (a) manipulation and (b) tissue culture. Our main
> arguments were that manipulation is hard, but the German's came out and created a
> reverse genetics system of SARS2 in less than two weeks, so clearly it's not that
> hard. Our arguments against tissue culture mostly came down to the O-linked
> glycans and a 'mucin-like' domain. But by now it seems clear that these don't
> actually form a mucin-like domain, but rather those glycans modulate the function
> of the furin site. All our arguments about natural viruses emerging, the RBD
> identical in pangolin CoVs, etc., all still stand.

The digest quotes only "Clearly it's not that hard." The final sentence — "all
still stand" — is part of the same message and must not be dropped.

**(d) The probability estimates — the numbers are real but the press release's
gloss is an interpretation. SLACK_000287:**

> [2020-06-11 20:14:23]
> [Kristian Andersen]
> :bat:/n
> Eddie: 80/20
> Kristian: 70/30
>
> [2020-06-11 20:34:35]
> [Eddie Holmes]
> 90/10. I think.

The document records **ratios labelled `:bat:/n`** — apparently bat-origin versus
not — posted by Andersen after a Zoom call, followed by Holmes revising his own
number. It does **not** contain the words "probability of a lab origin". The
press release's rendering ("Andersen assigned a 30% probability to a lab origin.
Holmes gave an estimate of 20%, later revising it down to 10%") is the
committee's reading of these ratios. Record the ratios verbatim with the
`:bat:/n` label and note the committee's interpretation separately.

**(e) "have a handler" — CONFIRMED, and it is Andersen. SLACK_001144,
[2021-06-07 15:47:37], Kristian Andersen:**

> I'll have a handler Thursday onwards - and we already know Eddie has Jezza…

Reply, same page, [2021-06-07 15:48:03], Andrew Rambaut: "I would quite like a
handler. Tell me what to do."

**(f) "stay off email" / "carefully curate … for the FOI records" — CONFIRMED,
but the digest's attribution is wrong. Both lines are ANDREW RAMBAUT's, not
Andersen's. SLACK_001215:**

> [2021-09-21 09:01:22]
> [Andrew Rambaut]
> And stay off email
>
> [2021-09-21 09:02:00]
> [Andrew Rambaut]
> Or carefully curate some emails for the FOI records
>
> [2021-09-21 09:07:39]
> [Robert Garry]
> OK I'm on my bit...

Note the exact wording is "Or carefully curate some emails for the FOI records" —
one message, not two fragments, and the press release's construction ("to
'carefully curate' their correspondence 'for the FOI records'") splices it.

**(g) "get something back to Tony's team at NIH" — CONFIRMED, and the bracketed
"[Fauci]" is the committee's insertion, not in the document. SLACK_001217,
[2021-09-22 14:11:56], Kristian Andersen:**

> Yeah, I think that would be good - we can't ignore this and I also need to get
> something back to Tony's team at NIH.

**(h) "my spy" — NOT FOUND.** Searched both PDFs for the exact phrase "my spy"
(zero hits in either) and for the bare word "spy" (zero in the AM file; six pages
in the pm file, at pp.276, 362, 713, 856, 911, 949). Reviewing those, the uses
found are: Holmes, "A new cold war sounds fun. I love a good spy film."
(p.276); Garry, "Yeah - double agent - the most dangerous game a spy can play."
(p.911); Holmes, "There's also news/rumours about China's top spy defecting to
the US in Feb…" (p.949). **None is a reference by Holmes to a source in China as
"my spy."**

This does not prove the phrase does not exist. Two caveats: `pdftotext` emitted a
warning on the pm file, so extraction may be imperfect; and the release points to
a larger corpus at `paul.senate.gov/readingroom` which I did not enumerate. But
**as of this run the phrase is not locatable in the two PDFs the press release
itself links as "the full document set."** Do not record the "my spy" claim.

### Recommendation

Two records.

- **Underlying Slack production** — `ai_verified`. This is the citable source.
  **verificationNote:** HSGAC Slack production (slack-drop-AM.pdf, 16 pp;
  slack-drop-pm.pdf, 1,124 pp), Bates-stamped "Released by Chairman Rand Paul
  SLACK_00NNNN", fetched 2026-08-26; quotes confirmed at SLACK_000283, 000286,
  000287, 001144, 001215 and 001217.
- **Press release** — `ai_verified` as a committee statement only.
  **verificationNote:** HSGAC majority press release of 22 Jul 2026 fetched
  2026-08-26; asserts a lab-origin probability reading of ratio messages that the
  underlying documents record as ":bat:/n" ratios, and asserts a "my spy" quote
  not locatable in the linked document set.

**The digest's caution — "This is a press release; the underlying messages are
the source" — is correct, and the underlying messages turn out to be publicly
retrievable. The digest can be upgraded from "press release only" to a real
document citation with Bates numbers.**

### Framing for living persons

Kristian Andersen, Robert Garry, Edward Holmes and Andrew Rambaut are living
named scientists whose private messages were released by a Senate committee.
Rules for any record built on this material:

- Attribute each message to the **named speaker and timestamp shown in the
  document**, at its SLACK_ number. Several press-release attributions are loose;
  two of the most quoted lines are Rambaut's, not Andersen's.
- Quote whole messages. Every one of these lines has been circulated in truncated
  form that reverses its sense — most obviously (c), where the sentence
  immediately after the quoted fragment reaffirms the paper's other arguments.
- These messages are evidence of **what these scientists said to each other and
  when**. They are not evidence about the virus, and they do not establish that
  anyone acted improperly. The committee's framing ("privately doubted the
  science behind their own paper", "coordinated with") is the committee's
  characterization and must be labelled as such.
- Include the co-authors' contemporaneous disagreement (Holmes pushing back at
  SLACK_000283) wherever Andersen's doubt is recorded. Presenting one side of a
  two-sided exchange would breach the fairness rules.

---

## 10. DOJ — indictment (28 April 2026) and guilty plea (18 August 2026)

**Both check out. Both are real. The defendant is named.**

### Canonical URLs

- Indictment: `https://www.justice.gov/opa/pr/former-senior-niaid-official-indicted-concealing-federal-records-during-covid-19-pandemic-0`
- Guilty plea: `https://www.justice.gov/usao-md/pr/former-senior-niaid-official-pleads-guilty-charges-connected-concealing-federal-records`

### How verified

Indictment release fetched directly (HTTP 200, 94,899 bytes, full content, no
bot interstitial). The plea release was bot-walled on direct fetch (Akamai
`bm-verify` interstitial returning a 2,553-byte challenge page) and was retrieved
instead through the WebFetch tool, which returned full text. Both retrieved
2026-08-26.

### 10a. Indictment — metadata

| Field | Value |
| --- | --- |
| Title | Former Senior NIAID Official Indicted for Concealing Federal Records During COVID-19 Pandemic |
| Date | Tuesday, April 28, 2026 |
| Issuing office | Office of Public Affairs |
| **Press Release Number** | **26-403** |
| Components | Office of the Attorney General; FBI; USAO – Maryland |
| Last updated | April 28, 2026 |

### Defendant, charges, district — as DOJ states them

> David M. Morens, 78, of Chester, Maryland, is charged with conspiracy against
> the United States; destruction, alteration, or falsification of records in
> federal investigations; concealment, removal, or mutilation of records; and
> aiding and abetting. Morens served as a senior advisor in NIAID's Office of the
> Director from 2006 through 2022.

District: Maryland (U.S. Attorney Kelly O. Hayes for the District of Maryland;
prosecuting AUSAs Joseph R. Baldwin and Bijon A. Mostoufi). Investigating
agencies: FBI and HHS-OIG.

Maximum penalties as DOJ states them:

> If convicted, Morens faces a maximum penalty of five years in prison for
> conspiracy against the United States, a maximum penalty of 20 years in prison for
> each count of destruction, alteration, or falsification of records in federal
> investigations, and a maximum penalty of three years in prison for each count of
> concealment, removal, or mutilation of records.

**DOJ's own presumption-of-innocence statement — reproduce this wherever the
indictment is cited:**

> An indictment is not a finding of guilt. Individuals charged by indictment are
> presumed innocent until proven guilty beyond a reasonable doubt in a court of law.

### Alleged conduct

> According to the indictment, Morens, Co-Conspirator 1, Co-Conspirator 2, and
> others conspired during the COVID-19 pandemic to defraud and commit several
> offenses against the United States after NIH terminated Co-Conspirator 1's grant.
> NIH terminated the grant, Understanding the Risk of Bat Coronavirus Emergence
> (bat coronavirus grant), based on allegations that COVID-19 emerged from the
> Wuhan Institute of Virology (WIV) in Wuhan, China. NIAID awarded the grant to
> Company #1 and Co-Conspirator 1, who made a subaward to the WIV.

> In anticipation that their communications would be requested through a FOIA
> Request, Morens, Co-Conspirator 1, and Co-Conspirator 2 agreed in writing to
> intentionally hide from public view their communications by corresponding using
> Morens's personal Gmail account, rather than his official NIH email account.

> The indictment alleges that the conspirators used Morens's personal Gmail account
> to exchange non-public NIH information; correspond about their efforts to
> influence NIH to fund Company #1; exchange edits to drafts of letters addressed to
> NIH leadership for Company #1 and Co-Conspirator 1; and "back-channel" information
> to Senior NIAID Official 1.

> Additionally, the indictment further alleges that Morens and Co-Conspirator 1
> conspired to pay illegal gratuities. The indictment states that Co-Coconspirator 1
> gifted Morens wine for his "behind-the-scenes shenanigans," and arranged for its
> delivery to Morens's residence in Maryland. Morens then allegedly identified an
> official act that he could perform to "deserve" the gift, which was a scientific
> commentary in a prominent medical journal advocating that COVID-19 had natural
> origins. The indictment further alleges that Co-Conspirator 1 suggested he would
> provide Morens with additional things of value, including meals at Michelin-starred
> restaurants in Paris, New York, and Washington, D.C.

**Official statement quoted in the release — Acting Attorney General Todd
Blanche:**

> "These allegations represent a profound abuse of trust at a time when the
> American people needed it most — during the height of a global pandemic," said
> Acting Attorney General Todd Blanche. "As alleged in the indictment, Dr. Morens
> and his co-conspirators deliberately concealed information and falsified records
> in an effort to suppress alternative theories regarding the origins of COVID-19.
> Government officials have a solemn duty to provide honest, well-grounded facts and
> advice in service of the public interest — not to advance their own personal or
> ideological agendas."

**FBI Director Kash Patel:**

> "Circumventing records protocols with the intention of avoiding transparency is
> something that will not be tolerated by this FBI," said FBI Director Kash Patel.
> "Not only did Morens allegedly engage in the illegal obfuscation of his
> communications, but he received kickbacks for doing so."

### 10b. Guilty plea — metadata

| Field | Value |
| --- | --- |
| Title | Former Senior NIAID Official Pleads Guilty to Charges Connected to Concealing Federal Records During COVID-19 Pandemic |
| Date | Tuesday, August 18, 2026 |
| Issuing office | U.S. Attorney's Office, District of Maryland |
| Dateline | Greenbelt, Maryland |
| Topic | COVID-Related Fraud |
| Last updated | August 18, 2026 |

### What the plea admits — as DOJ states it

> David M. Morens, 78, of Chester, Maryland, pled guilty to conspiracy to commit
> offenses and to defraud the United States. Morens served as a senior advisor in
> NIAID's Office of the Director from 2006 through 2022.

Note the narrowing: the indictment charged four things; **the plea is to the
single conspiracy count**. Maximum penalty:

> Morens is facing up to five years in prison for conspiracy to commit offenses and
> to defraud the United States.

Conduct admitted:

> According to his guilty plea, Morens, Co-Conspirator 1, Co-Conspirator 2, and
> others conspired during the COVID-19 pandemic to defraud the United States after
> NIH terminated Co-Conspirator 1's grant. NIH terminated the grant, Understanding
> the Risk of Bat Coronavirus Emergence, based on allegations that COVID-19 emerged
> from the Wuhan Institute of Virology (WIV) in Wuhan, China. NIAID awarded the
> grant to Company 1 and Co-Conspirator 1, who made a subaward to the WIV.

> Following the termination, Morens and Co-Conspirator 2 pledged to help
> Co-Conspirator 1 restore the termination of the bat coronavirus grant and counter
> the narrative that COVID-19 leaked from a lab. In anticipation that their
> communications would be requested through FOIA Requests, Morens, Co-Conspirator 1,
> and Co-Conspirator 2 agreed in writing to intentionally hide their communications
> from public view by corresponding using Morens's personal Gmail account, rather
> than his official NIH email account.

> The co-conspirators used Morens's personal Gmail account to exchange non-public
> NIH information; correspond about their efforts to influence NIH to fund Company 1;
> exchange edits to drafts of letters addressed to NIH leadership for Company 1 and
> Co-Conspirator 1; and "back-channel" information to Senior NIAID Official 1.

> Additionally, as admitted to in his guilty plea, Morens and Co-Conspirator 1
> conspired to pay illegal gratuities. Co-Conspirator 1 gifted Morens wine for his
> "behind-the-scenes shenanigans," and arranged for its delivery to Morens's Maryland
> residence. Morens then allegedly identified an official act that he could perform
> to "deserve" the gift, which was to author a scientific commentary in a prominent
> medical journal advocating that COVID-19 had natural origins.

**Note carefully:** DOJ retains the word **"allegedly"** in that last passage even
in the plea release ("Morens then allegedly identified an official act…"), while
introducing the paragraph with "as admitted to in his guilty plea." That internal
inconsistency is in DOJ's text. Quote it as printed; do not smooth it.

### What these documents do and do not say about COVID origins

**They say nothing about where SARS-CoV-2 came from.** Neither document makes,
supports, or evaluates any origin claim. Specifically:

- The offense conduct is **records and FOIA evasion plus illegal gratuities**. It
  is a transparency and public-integrity case, not an origins case.
- Both documents describe the grant termination as having been "based on
  allegations that COVID-19 emerged from the Wuhan Institute of Virology" —
  i.e. DOJ is characterizing NIH's stated reason for terminating, not endorsing
  the allegation.
- The single sentence in the whole record that touches origins substantively is
  Acting AG Blanche's quoted assertion that the conduct was "in an effort to
  suppress alternative theories regarding the origins of COVID-19." That is a
  **prosecutor's public characterization in a press release**, not a finding, not
  a charge element, and not something the plea admits.
- The commentary described as the gratuity's "official act" is characterized as
  "advocating that COVID-19 had natural origins" — again a characterization of a
  document, not a finding about the document's correctness.

### Discrepancies with the digest

- The digest (from brief 2) describes the plea as involving "conspiracy involving
  intentional evasion of FOIA and Federal Records Act requirements". The plea
  release's own framing is "a conspiracy charge stemming from a scheme to evade
  Freedom of Information Act (FOIA) requests and the Federal Records Act" — close
  enough, but use DOJ's wording.
- The digest says "attempting to influence restoration of a grant" — DOJ's
  wording is that Morens and Co-Conspirator 2 "pledged to help Co-Conspirator 1
  restore the termination of the bat coronavirus grant".
- **The digest notes brief 1 does not mention these items. Both are now
  confirmed and may be used.**

### Recommendation

`ai_verified` for both.

**verificationNote (indictment):** DOJ Office of Public Affairs press release
26-403, 28 Apr 2026, fetched 2026-08-26; David M. Morens charged in the District
of Maryland with conspiracy against the United States and three records offenses;
an indictment is an allegation, not a finding of guilt.

**verificationNote (plea):** DOJ USAO-Maryland press release, 18 Aug 2026,
retrieved 2026-08-26 (site bot-walled to direct fetch); Morens pled guilty to the
single count of conspiracy to commit offenses and to defraud the United States;
neither document makes any claim about the origin of SARS-CoV-2.

### Framing for living persons — strictest in this batch

- **Do not name Co-Conspirator 1, Co-Conspirator 2, Company 1, or Senior NIAID
  Official 1.** DOJ deliberately does not name them. The grant title
  "Understanding the Risk of Bat Coronavirus Emergence" is public and its
  PI/awardee are public (item 4), which makes an inference available — but that
  inference is **ours, not DOJ's**, and under the living-persons rule
  ("Allegations about private individuals go no further than what court records
  or on-the-record official statements state") it must not be published as an
  identification. If the correspondence between the grant title and the RePORTER
  record is worth recording at all, it goes in `editorInference`, clearly
  separated from `sourceStatement`, and it must not be phrased as naming an
  uncharged person as a co-conspirator.
- The indictment is an allegation. The presumption-of-innocence notice must
  display on any page carrying it, and DOJ's own sentence to that effect should
  be quoted.
- The plea is a conviction on **one count**, by admission, and the sentence had
  not been imposed as of the release. Do not write "convicted of falsifying
  records" — that count was not the plea count.
- **Nothing here may be laddered into an origins claim.** This is a records case.
  A reader who arrives at it from an origins hypothesis must be told plainly that
  the documents contain no origins finding.

---

## 11. HSGAC hearing "Testimony of Anthony Fauci", 29 July 2026

### Canonical URLs

- Hearing page: `https://www.hsgac.senate.gov/hearings/testimony-of-anthony-fauci/`
- Chairman's opening statement: `https://www.hsgac.senate.gov/wp-content/uploads/Opening-Statement-Paul-2026-07-29.pdf` (5 pp)
- Ranking Member's opening statement: `https://www.hsgac.senate.gov/wp-content/uploads/Opening-Statement-Peters-2026-07-29.pdf`
- **Committee document recording the Fifth Amendment invocation:** `https://www.hsgac.senate.gov/wp-content/uploads/ROM26376.pdf` (4 pp)

### How verified

Fetched the hearing page (HTTP 200, 158,536 bytes) and parsed it. Followed the
two statement links, both of which 302-redirect to `wp-content/uploads` PDFs
(HTTP 200). Downloaded and extracted ROM26376.pdf (HTTP 200, 25,465 bytes).

### What the hearing page states — and what it does not

| Field | Value |
| --- | --- |
| Type | Full Committee Hearing |
| Title | Testimony of Anthony Fauci |
| Date | July 29, 2026 |
| Time | 8:30am |
| Location | Senate Dirksen Building, SD-342 |
| Witness, Panel I | ANTHONY FAUCI, M.D., Former Director (1984-2022), National Institute of Allergy and Infectious Diseases, National Institutes of Health, U.S. Department of Health and Human Services |
| Members with statements | Chairman Rand Paul (R-KY); Ranking Member Gary Peters (D-MI) |

**The hearing page says nothing about a subpoena and nothing about the Fifth
Amendment.** The digest describes it as the "official record of the subpoenaed
appearance"; the page itself does not carry that. It is a hearing notice with a
witness list. Cite it only for the fact, date, time, location and witness.

### The Fifth Amendment record — ROM26376.pdf

This is a Senate Legislative Counsel draft ("S.L.C.") of an **original resolution
reported by Mr. Paul from the Committee on Homeland Security and Governmental
Affairs**, 119th Congress, 2d Session, with the resolution number, calendar
number and report number left blank (`S. RES. ll`, `Calendar No. ll`,
`[Report No. 119–lll]`). Describe it as a reported committee resolution in draft
print, not as an enacted resolution.

Title:

> Authorizing the President of the Senate to certify the report of the Committee on
> Homeland Security and Governmental Affairs of the Senate regarding the refusal of
> Dr. Anthony S. Fauci to answer questions pertinent to the subject under inquiry
> before the Committee as required by Committee subpoena.

**Verbatim recitals — printed p.2:**

> Whereas the Committee on Homeland Security and Governmental Affairs of the Senate
> (in this preamble referred to as the "Committee") is conducting an investigation
> into, among other matters, risky life sciences research and the origins of the
> COVID-19 virus;

> Whereas, pursuant to rule XXVI of the Standing Rules of the Senate, section 12 of
> Senate Resolution 94 (119th Congress), agreed to February 27, 2025, and rule 5C of
> the Rules of Procedure of the Committee, on June 22, 2026, the Committee issued a
> subpoena directing Dr. Anthony S. Fauci to testify before the Committee on July
> 29, 2026, at 10:00 a.m. in 342 Dirksen Senate Office Building;

> Whereas, in a letter from Committee Chairman Rand Paul accompanying the subpoena,
> Dr. Fauci was instructed that he was "to provide testimony concerning matters
> under consideration by the Committee, including the origins of COVID-19, risky
> life sciences research, and your tenure as a Federal government employee";

> Whereas, on July 17, 2026, the Committee issued a revised subpoena directing Dr.
> Fauci to testify before the Committee on July 29, 2026, at 8:30 a.m. in 342
> Dirksen Senate Office Building;

> Whereas, on July 29, 2026, Dr. Fauci appeared before the Committee and delivered
> prepared testimony discussing his tenure as a Federal Government employee, prior
> testimony to Congress, and records released by the Committee as part of its
> investigation;

> Whereas Dr. Fauci concluded his prepared testimony by stating his intent to refuse
> to answer questions posed by the Committee, citing the right against
> self-incrimination under the Fifth Amendment to the Constitution of the United
> States;

**Printed p.3:**

> Whereas Dr. Fauci was knowingly provided "A Full and Unconditional Pardon" dated
> January 19, 2025, "For any offenses against the United States which he may have
> committed or taken part in during the period from January 1, 2014, through the
> date of this pardon arising from or in any manner related to his service as
> Director of the National Institute of Allergy and Infectious Diseases, as a member
> of the White House Coronavirus Task Force or the White House COVID-19 Response
> Team, or as Chief Medical Advisor to the President.";

> Whereas, upon being asked questions pertinent to the questions under inquiry, Dr.
> Fauci refused to answer, again citing the Fifth Amendment;

> Whereas Chairman Paul found the privilege of the Fifth Amendment unsupported as
> applied to questions pertaining to the period of the pardon and directed Dr. Fauci
> to answer;

> Whereas Chairman Paul further found Dr. Fauci waived his right to claim the
> privilege as a result of his opening testimony on subject matter pertinent to the
> questions under inquiry;

> Whereas Chairman Paul, having overruled the privilege of the Fifth Amendment
> asserted by Dr. Fauci, directed the witness to answer the questions put to him by
> the Committee in order to provide testimony on matters under consideration by the
> Committee, and warned Dr. Fauci that he may be held in contempt of Congress; and

> Whereas Dr. Fauci continued to refuse to answer questions pertinent to the
> questions under inquiry: Now, therefore, be it

**Resolving clause, printed p.4:**

> Resolved, That pursuant to sections 102 and 104 of the Revised Statutes (2 U.S.C.
> 192, 194), the President of the Senate shall certify the report of the Committee on
> Homeland Security and Governmental Affairs of the Senate, detailing the refusal of
> Dr. Anthony S. Fauci to answer questions pertinent to the subject under inquiry, to
> the United States Attorney for the District of Columbia, to the end that Dr. Fauci
> be proceeded against in the manner and form provided by law.

The digest's characterization — "Committee statement that Fauci delivered
prepared testimony then asserted the Fifth Amendment; chairman's rejection of the
privilege as applied to pardoned conduct" — is **accurate**.

### Chairman's opening statement — available and quotable as an assertion

`Opening-Statement-Paul-2026-07-29.pdf`, p.1:

> One million Americans died from COVID 19. Some estimate as many as 15 million
> people died worldwide from COVID 19. Publicly Anthony Fauci promoted the theory
> that the virus arose naturally while privately he was well aware of a mountain of
> evidence suggesting the virus originated in a lab.

This is a strong adverse assertion about a living person by a senator in a
prepared statement. If used at all, it must be recorded as the Chairman's
assertion with this locator, and Fauci's own contrary sworn statements (item 8)
must appear alongside it. Ranking Member Peters's statement
(`Opening-Statement-Peters-2026-07-29.pdf`) was downloaded and should be read and
paired with it before either is used; I did not extract it in full this run.

### Recommendation

`ai_verified`, but **split into two sources**.

**verificationNote (hearing page):** HSGAC hearing page for "Testimony of Anthony
Fauci", 29 Jul 2026, 8:30am, SD-342, witness Anthony Fauci M.D., fetched
2026-08-26; the page records the hearing only and states nothing about a subpoena
or the Fifth Amendment.

**verificationNote (ROM26376):** HSGAC-reported original resolution in S.L.C.
draft print (ROM26376, 4 pp) fetched 2026-08-26; recites the 22 Jun and 17 Jul
2026 subpoenas, Fauci's delivery of prepared testimony, his Fifth Amendment
refusal, and Chairman Paul's overruling of the privilege; resolution number and
calendar number are blank in this print.

### Framing for living persons

Everything in ROM26376 is a **committee recital in a document seeking a criminal
contempt referral**. It is the committee's account of its own hearing. Record it
as "the Committee's reported resolution recites, at p.2, that…". Invoking the
Fifth Amendment carries no adverse inference in law and none may be drawn here —
that must be stated on any page that records it. The Chairman's findings that the
privilege was "unsupported" and "waived" are **his rulings as chair**, contested
by definition, and must be labelled as such rather than restated as legal
conclusions. Note also that a certification to a U.S. Attorney is not a charge.

---

## 12. HSGAC whistleblower hearing, 13 May 2026

### Canonical URLs

- Hearing page: `https://www.hsgac.senate.gov/hearings/whistleblower-testimony-on-the-covid-coverup/`
- **Letter + written testimony PDF: `https://www.hsgac.senate.gov/wp-content/uploads/letter-and-testimomy.pdf`** — the filename typo ("testimomy") is real and the URL **does resolve** (HTTP 200, 842,875 bytes, `application/pdf`, 16 pages)
- Chairman's remarks (cited by the digest, not fetched this run): `https://www.hsgac.senate.gov/media/reps/chairman-paul-delivers-opening-remarks-during-whistleblower-hearing-on-the-multi-agency-cover-up-of-covid-19-and-gain-of-function-research/`

### How verified

Fetched the hearing page (HTTP 200, 146,115 bytes) and parsed it. Fetched the
typo'd PDF URL directly and extracted its text.

### Hearing page — metadata

| Field | Value |
| --- | --- |
| Type | Full Committee Hearing |
| Title | Whistleblower Testimony on the COVID Coverup |
| Date | May 13, 2026 |
| Time | 10:00am |
| Location | Senate Dirksen Building, SD-342 |
| Witness, Panel I | **JAMES E. ERDMAN III, Senior Operations Officer, Central Intelligence Agency** |

Note the title: **Senior Operations Officer**, not analyst. The digest describes
this as "CIA officer testimony", which is right, but any record must not imply he
was one of the CIA analysts whose judgments are at issue.

### Important caveat on the testimony URL

**The hearing page does not link to the testimony PDF.** I extracted every
`wp-content/uploads` and `library/files` href from the page; the only hits are
favicon images. The document is hosted on `hsgac.senate.gov` and is on its face a
committee product (see below), but it is an unlinked direct URL, presumably a
staff upload error accompanying the filename typo. Record the URL with that note;
it is retrievable but not discoverable, and could be moved or corrected without
notice. Consider capturing a local copy.

### What the PDF contains

Two documents in one 16-page file.

**(1) A committee letter, PDF p.1**, on the joint signature of Rand Paul, M.D.
(Chairman, HSGAC) and Ron Johnson (Chairman, Permanent Subcommittee on
Investigations), dated **May 14, 2026**, addressed to The Honorable John
Ratcliffe, Director, Central Intelligence Agency, McLean, VA 22101, copied to
The Honorable Christopher Fox, Inspector General of the Intelligence Community.
Verbatim:

> We write to follow up on the hearing held by the U.S. Senate Committee on
> Homeland Security and Governmental Affairs yesterday entitled "Whistleblower
> Testimony on the COVID Coverup."

> The Committee received testimony from James E. Erdman III, a Senior Operations
> Officer at the Central Intelligence Agency, who appeared pursuant to a subpoena
> issued by the Committee on May 5, 2026. This letter serves as formal notice that we
> expect no retaliatory action of any kind to be taken against Mr. Erdman in
> connection with his appearance before the Committee.

> Enclosed is a copy of the written testimony submitted to the Committee by Mr.
> Erdman. We ask that you personally review it in full, as Mr. Erdman testified under
> oath to a pattern of deeply troubling conduct occurring within the Central
> Intelligence Agency.

This letter is what establishes that the enclosed testimony is authentic and that
Erdman appeared under subpoena and testified under oath.

**(2) The written testimony, PDF pp.2–16**, headed:

> Written Testimony of James E. Erdman III
> Before the U.S. Senate Homeland Security & Governmental Affairs Committee
> Full Committee Hearing: Whistleblower Testimony on the COVID Coverup
> May 13, 2026

### The witness's sworn assertions — quoted as assertions

Self-description and provenance of his knowledge, PDF pp.2–3:

> On April 08, 2025, Director of National Intelligence Tulsi Gabbard created a task
> force charged with restoring transparency and accountability to the Intelligence
> Community. The group was called DIG, or Director's Initiatives Group…

> I was asked to join the group as one of its earliest members, given my many years
> of experience at the CIA and my knowledge on the origins of the COVID-19 pandemic.

> My expertise and portfolio with the DIG pertain to the origin of the COVID-19
> pandemic, as well as other life science and sensitive matters related to
> gain-of-function research. I believe the ODNI National Intelligence Council (NIC)
> and CIA personnel have spent years covering up the truth about the COVID-19
> pandemic.

Note "I believe" — his own framing.

**From the "Key findings" section, PDF pp.4–5** — these are the passages closest
to the digest's claim:

> The CIA and DNI managers responsible for COVID origin investigation made analytic
> decisions inconsistent with the conclusions of subject matter experts and analytic
> tradecraft, consistently favoring the theory of zoonosis – natural origin.

> Following the CIA's COVID relook that culminated in 2023, the CIA retaliated
> against analysts supporting lab leak hypothesis.

> CIA analysts were not bribed. The CIA analysts that supported the lab leak
> analysis conducted in 2022-2023, took every administrative measure available to
> them to address their deep concerns regarding the analytic integrity of their
> finished intelligence.

That third bullet is a **notable exculpatory statement** the digest does not
record, and it should be carried wherever the other two are.

Also from Key findings, PDF p.4 — an assertion directly about a named living
person:

> Dr. Anthony Fauci influenced the IC's analytic process and COVID origin's findings
> by leveraging his position to ensure the IC consulted with a conflicted list of
> curated Subject Matter Experts (SME), public health officials, and scientists.
> This included the authors of the paper "The Proximal Origin of Sars-COV-2" and
> other public health experts and scientists who have been in his orbit for 20+
> years, many of whom have and did receive funding from NIAID, as well as scientists
> working under IC contract.

> This contradicts Dr. Fauci's 2024 testimony to Congress, when he answered "not to
> my knowledge" when asked if he had briefed any intel agency concerning viral
> research.

**His own methodological critique, PDF p.6** — this cuts against a simple
lab-leak reading and must be recorded alongside the rest:

> The COVID origin analysis was an exercise in anchor bias. Instead of gathering
> data, drawing conclusions, and writing multiple products based on the data, the
> analysts worked from a binary choice: lab incident or natural origin. It drew
> needed analytic and operational discussion away from alternate and valuable topics
> like the possibility of pan-coronavirus vaccine and therapeutic research.

> Analysts hung onto the science questions long after it was time to finally pivot
> into answering the intelligence questions IC analysts are hired to boldly resolve.
> Right or wrong, it gave the impression that the analysts did not want to have to
> draw a conclusion.

Obstruction and retaliation allegations, PDF pp.2 and 5:

> 1) Withholding documents and information to both the DIG, and ultimately the
> American public, that had been ordered declassified by statute or executive order;
> 2) Denying the DIG access to necessary information to conduct its inquiries;
> 3) Withholding information from DNI Gabbard;
> 4) And, most alarmingly, opening investigations into, and monitoring the
> communications and computer activity of, DIG members.

> The CIA illegally monitored the computer and phone usage of DIG personnel in DNI
> spaces, their investigations, and contact with whistleblowers.

> One CIA contractor assisting with the DIG's COVID origins investigation was fired
> one day after meeting with the DIG.

### Sworn assertion vs. established fact — the distinction the batch asked for

Established by these documents:

- That a hearing titled "Whistleblower Testimony on the COVID Coverup" was held
  by HSGAC on 13 May 2026 at 10:00am in SD-342.
- That James E. Erdman III, described by the committee as a Senior Operations
  Officer at the CIA, appeared pursuant to a Committee subpoena issued 5 May 2026
  and testified under oath.
- That he submitted the written testimony reproduced at PDF pp.2–16.
- That the two chairmen transmitted it to the CIA Director on 14 May 2026 with a
  no-retaliation notice.

**Not established by these documents:** anything Erdman asserts. Every statement
in pp.2–16 is one witness's sworn account. No underlying analytic draft, email,
IT log, or CIA document is attached or cited by identifier. The digest's own
caution — that "a committee characterization does not permit independent audit"
and that the underlying analytic drafts should be obtained — applies with equal
force to the witness's testimony, which is also not auditable from what is
published here.

### Recommendation

`ai_verified` **as a record of testimony given**, never as a record of the facts
asserted.

**verificationNote:** HSGAC hearing page for "Whistleblower Testimony on the COVID
Coverup" (13 May 2026, SD-342, witness James E. Erdman III, Senior Operations
Officer, CIA) and the Paul/Johnson transmittal letter of 14 May 2026 enclosing
Erdman's written testimony (16 pp) both fetched 2026-08-26; the testimony PDF
resolves at the misspelled URL `letter-and-testimomy.pdf` but is not linked from
the hearing page; the testimony is one witness's sworn assertion with no
underlying documents attached.

### Framing for living persons

- Erdman is a named living person making allegations against a federal agency and
  against Anthony Fauci by name. Every claim drawn from this must read "Erdman
  testified in written testimony submitted 13 May 2026, at p.N, that…".
- His assertion that Fauci's conduct "contradicts Dr. Fauci's 2024 testimony to
  Congress" is **an allegation that a named living person gave false testimony to
  Congress**. It may be recorded only as Erdman's assertion, with the locator, and
  only alongside the testimony he says it contradicts. It is not a finding by
  anyone.
- Unnamed third parties in the testimony (the fired contractor, "CIA analysts",
  "DIG members") must stay unnamed.
- The exculpatory bullet ("CIA analysts were not bribed") and the anchor-bias
  critique must accompany the adverse material. Selecting only the parts that
  favour a lab origin would breach the fairness rules.

---

## 13. HHS debarment of EcoHealth Alliance and Peter Daszak, 17 January 2025

The digest cites only congressional press releases. **Both the primary HHS
decision documents and the authoritative exclusion register entries were located
this run.** Use these instead.

### Canonical sources — primary

**(a) The HHS decision documents.** These are HHS records on Office of the
Secretary letterhead, republished by the House Oversight Committee (which is
where they are publicly available; HHS did not post them). Four documents:

- Notice of Debarment of EcoHealth Alliance, Inc.: `https://oversight.house.gov/wp-content/uploads/2025/01/Notice-_EHA_1.17.2025_Redacted.pdf` (137,048 bytes)
- Action Referral Memorandum for the Debarment of EcoHealth Alliance, Inc.: `https://oversight.house.gov/wp-content/uploads/2025/01/ARM_EHA_1.17.2025_Redacted.pdf` (364,983 bytes, 28 pp)
- Notice of Debarment of Dr. Peter Daszak: `https://oversight.house.gov/wp-content/uploads/2025/01/Dr.-Peter-Daszak-HHS-Notice_Jan-17-2025_Redacted.pdf` (136,504 bytes)
- Action Referral Memorandum for the Debarment of Dr. Peter Daszak: `https://oversight.house.gov/wp-content/uploads/2025/01/Dr.-Daszak-HHS-ARM_1.17.2025_Redacted.pdf` (355,675 bytes)

All are marked Redacted. All four downloaded HTTP 200 this run.

**(b) The exclusion register — SAM.gov.** Queried
`https://sam.gov/api/prod/sgs/v1/search/?index=ex&q=…` with
`Accept: application/hal+json`, 2026-08-26. **Both exclusions are still active
today.**

| Field | EcoHealth Alliance, Inc. | Dr. Peter Daszak |
| --- | --- | --- |
| SAM record UUID | `70db15cf-3a7a-4975-a469-c4a45b5353f9` | `8425af77-a690-4f7b-874f-8ce3eb8e927e` |
| Classification | Firm | Individual |
| UEI / CAGE | TKS7NBB4JDN6 / 3MMU3 | — |
| Address of record | 520 8th Ave #1200, New York, NY 10018 | Tallman, NY 10982 |
| Exclusion type | Ineligible (Proceedings Completed) — code `IC` | Ineligible (Proceedings Completed) — code `IC` |
| Excluding agency | HHS | HHS |
| Exclusion program | Reciprocal | Reciprocal |
| Activation date | **2025-01-17** | **2025-01-17** |
| Termination date | **2029-05-14** | **2029-05-20** |
| Active as of 2026-08-26 | true | true |

### The term — five years, and the SAM.gov dates explain themselves

The apparent mismatch (activated Jan 2025, terminating May 2029 — about four
years and four months) is resolved by the notices, which credit the prior
suspension period.

**EcoHealth notice, p.2, verbatim:**

> EHA's debarment is for a period of five years, effective as of the date of this
> Notice, pursuant to 2 C.F.R. § 180.800(d), for "any other cause that is so serious
> or compelling in nature that it affects your present responsibility." The period of
> ineligibility during EHA's suspension and proposed debarment, which was effective
> May 15, 2024, will be included in the period of debarment. Therefore, under the
> five-year period of debarment, EHA will remain ineligible through May 14, 2029.

**Daszak notice, verbatim:**

> Dr. Daszak's debarment is for a period of five years, effective as of the date of
> this Notice, pursuant to 2 C.F.R. § 180.630(b), 2 C.F.R. § 180.625(b), and 2 C.F.R.
> § 180.800(d). The period of ineligibility during Dr. Daszak's suspension and
> proposed debarment, which was effective May 21, 2024, will be included in the period
> of debarment. Therefore, under the five-year period of debarment, Dr. Daszak will
> remain ineligible through May 20, 2029.

Both notices are signed "Suspension and Debarment Official and Deputy Assistant
Secretary for Acquisitions" (signature block redacted; no name in the text
layer). EcoHealth's counsel of record: Charles Blanchard, Ronald D. Lee and
Alex E. Sirio, Arnold & Porter Kaye Scholer LLP. Daszak's counsel of record:
Paul Hurst, Steptoe LLP.

Procedural history stated in both notices: Notice of Suspension and Proposed
Debarment 15 May 2024 (EHA) / 21 May 2024 (Daszak); Amended Notice and Amended
ARM 11 December 2024; responses submitted 22 July 2024, 19 September 2024,
13 January 2025 and 15 January 2025; a Presentation of Matters in Opposition
meeting on 15 January 2025.

### The stated grounds — in HHS's own words, which differ from the congressional gloss

**The formal cause, EcoHealth ARM, printed p.26 (FINDINGS section):**

> As stated in the May 15, 2024, Notice and ARM, and December 11, 2024, Amended
> Notice and Amended ARM, pursuant to 2 C.F.R. § 180.800, a federal agency may debar
> an entity or individual for "any other cause of so serious or compelling a nature
> that it affects their present responsibility." See 2 C.F.R. § 180.800(d). I find
> the serious and egregious nature of the misconduct committed by EHA indicates a
> lack of business integrity and business honesty, thereby directly affecting its
> present responsibility, and provides cause for the debarment of EHA, pursuant to
> 2 C.F.R. § 180.800(d).

**The specific conduct, EcoHealth ARM, printed p.19** (aggravating factor
2 C.F.R. § 180.860(a)):

> In this matter, EHA's failure to adhere to the 1-log immediate reporting
> requirement, failure to submit a progress report on time, inaccurate claim that
> experiments described in the Year 4 and Year 5 progress reports were the same,
> failure to take robust active steps to obtain records from WIV to address the
> safety concerns, and claim that the delay in submitting the Year 5 progress report
> was due to a computer system lockout – are all reflective of a culture in which
> safety is not valued.

**The lateness quantified, EcoHealth ARM, printed p.20** (aggravating factor
§ 180.860(b)):

> As established in the information in the record, EHA submitted the Year 5 I-RPPR
> for Grant Number 5R01AI110964-05, on August 3, 2021, nearly two years after the
> report due date. In addition, the NIH first formally requested that EHA provide
> WIV's laboratory notebooks on November 18, 2021, and again on January 6, 2022. To
> date, WIV's laboratory notebooks have not been provided.

**The underlying reporting condition, EcoHealth ARM, printed pp.4–5** — this is
what "1-log" refers to:

> In a letter dated July 7, 2016, however, the NIAID informed EHA that should any of
> the MERS-like or SARS-like chimeras generated under the grant show evidence of
> enhanced virus growth greater than 1 log over the parental backbone strain, EHA
> must stop all experiments with these viruses and provide the NIAID Program Officer
> and Grants Management Specialist, and WIV Institutional Biosafety Committee, with
> the relevant data and information related to these unanticipated outcomes.

**The imputation to Daszak, Daszak ARM, FINDINGS section:**

> The alleged conduct of EHA is imputed to Dr. Daszak, because during all or part of
> the time relevant, Dr. Daszak participated in, knew of, or had reason to know of
> EHA's improper conduct, through his role as th[e]…

(That is the mechanism: 2 C.F.R. § 180.630(b) imputation, not an independent
finding of personal misconduct.)

**The decision, EcoHealth ARM, printed p.27:**

> Based on the information presented in the administrative record and the
> aggravating and mitigating factors set forth in this document… I have determined
> that a five-year debarment period for EHA is necessary to protect the United States
> Federal Government's interests. I acknowledge and understand that debarment is an
> administrative remedy that is serious in nature and is not an action to be taken
> lightly.

Also relevant, printed p.19 — why the term exceeded the normal three years:

> EHA only appeared to recognize the seriousness of HHS' and the NIH's concerns upon
> being suspended and proposed for debarment in May 2024, despite the numerous
> written letters and emails from NIH to EHA documenting concerns going back several
> years… In short, EHA's changes came too late, so I do not believe in their
> authenticity.

### Daszak's departure from EcoHealth — confirmed in the primary record

EcoHealth ARM, printed p.3 ¶3:

> Dr. Peter Daszak was the President and Chief Executive Officer of EHA from 2009
> until his termination, effective January 6, 2025. Dr. Daszak was the Project
> Director (PD)/Principal Investigator (PI) for Grant Number 1R01AI110964-01.

And at printed p.13, recording EcoHealth's own submission:

> On January 2, 2025, EcoHealth Alliance's Board of Directors voted to terminate Dr.
> Daszak as President and CEO of the organization. The Board took this action because
> it no longer had confidence in Dr. Daszak's leadership. Dr. Daszak's termination
> became effective on January 6, 2025. Going forward, Dr. Daszak will not have any
> involvement in the operation or management of EcoHealth Alliance.

> Effective January 6, 2025, EHA's Board appointed Dr. Kevin Olival, EHA's Vice
> President for Research, and Dr. Jonathan Epstein, EHA's Vice President for Science
> and Outreach… to co-lead the EHA's interim leadership team.

### Discrepancy — the digest's stated grounds are the congressional characterization

The digest lists the grounds as "ignored oversight requests, failure to report
the humanized-mouse experiment, a progress report two years late", citing the
House Oversight press release. Checking against HHS's own text:

- "a progress report two years late" — **matches** ("nearly two years after the
  report due date").
- "ignored oversight requests" — **substantially matches** ("failure to take
  robust active steps to obtain records from WIV"; WIV lab notebooks never
  provided).
- **"failure to report the humanized-mouse experiment" — does not match.** The
  words "humanized" and "mice" **do not appear anywhere in the EcoHealth ARM**
  (zero hits). HHS's ground is "failure to adhere to the 1-log immediate
  reporting requirement" — a growth-rate reporting threshold, not an experiment
  type. The humanized-mouse framing comes from the congressional press release.
  Use HHS's wording.
- HHS also cites two grounds the digest omits: the "inaccurate claim that
  experiments described in the Year 4 and Year 5 progress reports were the same",
  and the "claim that the delay in submitting the Year 5 progress report was due
  to a computer system lockout". These are HHS characterizing EcoHealth's
  statements as inaccurate, and they are load-bearing in the decision.

### Recommendation

`ai_verified`.

**verificationNote:** HHS Notices of Debarment and Action Referral Memoranda for
EcoHealth Alliance, Inc. and Dr. Peter Daszak, all dated 17 Jan 2025 (redacted,
hosted by House Oversight), fetched 2026-08-26; five-year term running through
14 May 2029 (EHA) and 20 May 2029 (Daszak) confirmed in the notices and matched
against active SAM.gov exclusion records queried the same day.

Prefer the SAM.gov exclusion records as the register-of-record citation (with the
record UUIDs above) and the HHS notices/ARMs as the reasoned-decision citation.
Drop the Kennedy and Oversight press releases to discovery-only status.

### Framing for living persons

- Debarment is an **administrative determination of present responsibility**, not
  a finding of criminal wrongdoing, and HHS says so in its own text ("debarment is
  an administrative remedy"). Any record must say the same. It is not a
  punishment, not a conviction, and not a finding about COVID's origin.
- Daszak's debarment rests on **imputation** of EcoHealth's conduct to him under
  2 C.F.R. § 180.630(b) — record the mechanism, not a bare statement that he was
  found to have done something.
- The documents are redacted. Do not infer content from redactions.
- EcoHealth's contrary submissions (remedial actions, independent monitor, new
  leadership) are in the record at ARM printed p.13 and must be represented
  alongside the adverse findings.
- Nothing here supports a claim that EcoHealth or Daszak caused the pandemic. HHS
  did not find that and did not consider it.

---

## Consolidated corrections the digest needs

1. **§5.4 DEFUSE row** — replace the `ia601402...` node URL with the archive.org
   item page. Add Palo Alto, CA and Madison, WI to the places of performance. Add
   USGS NWHC (Rocke) and PARC (Unidad) to the partner list. Add printed-page
   locators (cleavage passage = printed p.11 / PDF p.13). Move "of particular
   interest … a type of cleavage site able to interact with furin" out of the
   DEFUSE row — it is The Intercept's wording. Note the archive slug's
   `hr00118s0017` is a typo for `HR001118S0017`. Note the copy is a third-party
   upload.
2. **§5.4 USRTK row** — **delete the "Page 235" locator**; the allocation comment
   is at pp.129/147/166/205/226. Correct the Baric-comment transcription to
   "IN the US…" and "US reseachers". Quote the Daszak comment in full, including
   the "stress the US side… so that DARPA are comfortable" sentence. Record that
   the release identifies comment authors by initials only. Note that the word
   "cleavage" appears nowhere in this release.
3. **§5.4 Intercept row** — it did not break the documents; DRASTIC posted them
   first, per the article itself.
4. **§5.4 NIH RePORTER row** — add the USAspending subaward record
   (`ASST_NON_R01AI110964_075`) as the locator for the WIV subaward fact, with
   amounts. Note `project-details/8674931` is the FY2014 record only.
5. **§5.4** — flag that `ecohealthalliance.org` is no longer usable as a citation
   (domain now serving unrelated spam).
6. **§5.5 majority-report row** — add the report PDF URL. Attribute "COVID-19
   most likely emerged from a laboratory in Wuhan" and the five arguments to the
   **press release**, not the report. Record the report's own FINDING heading
   separately (printed p.1). Record that the report's five points are Alina
   Chan's, cited to her NYT op-ed, and that the furin "not found in nature"
   argument in the report is a quotation of Nicholas Wade. Drop or verify the
   "grand jury" detail.
7. **§5.5 minority-report row** — add the report PDF URL and the title. Locator
   for the "both plausible / hybrid" quote is printed p.6. Add the minority's own
   qualification that its "too evolutionarily distant" analysis "is incomplete and
   will remain so until WIV produces all…".
8. **§5.5 Andersen row** — **move the "crackpot" and mid-late-February claims out
   of the 16 Jun 2023 transcript row** and into a new row for the 11 Jul 2023
   public hearing, CHRG-118hhrg53002, printed pp.44–45.
9. **§5.5 Fauci-hearing row** — **replace CHRG-118hhrg53002 with
   CHRG-118hhrg55830** (Serial 118-114). Add printed-page locators: preposterous
   p.12, phylogenetic p.23 (and p.17), open mind p.22. Delete the two rev.com
   URLs. Drop or locate the "Griffith adverse-inference analogy".
10. **§5.5 Slack row** — upgrade from press-release-only to the two Bates-stamped
    PDFs, with SLACK_ numbers. Reattribute "stay off email" and "carefully curate
    … for the FOI records" to **Andrew Rambaut**. Record the probability figures
    as the `:bat:/n` ratios they are, with the committee's interpretation
    separate. **Remove the "my spy" quote** — not locatable in the released
    documents.
11. **§5.5 DOJ rows** — both confirmed; use them. Defendant is David M. Morens,
    District of Maryland; indictment press release number 26-403; plea is to a
    single conspiracy count. Add the note that neither document makes any origins
    claim, and do not identify the unnamed co-conspirators.
12. **§5.5 HSGAC Fauci row** — the hearing page carries no subpoena or Fifth
    Amendment content; that is in ROM26376.pdf, which is a **draft print of a
    reported original resolution** with the number left blank.
13. **§5.5 whistleblower row** — name the witness (James E. Erdman III, Senior
    Operations Officer, CIA) and add the testimony PDF, noting the filename typo
    resolves but is unlinked from the hearing page. Add his "CIA analysts were not
    bribed" and anchor-bias statements alongside the adverse ones.
14. **§5.5 debarment row** — replace the congressional press releases with the
    four HHS documents and the two SAM.gov exclusion records. Correct the grounds:
    HHS's wording is "failure to adhere to the 1-log immediate reporting
    requirement", not the humanized-mouse experiment.

## What failed or remains open

- **EcoHealth Alliance's 21 Dec 2023 statement** — original URL now serves
  unrelated spam; two Wayback retrieval attempts timed out (100 s, 137 s) from
  this environment. Snapshots exist (CDX confirms five status-200 captures
  between 2024-01-07 and 2025-02-27). Retrieve by hand if wanted, recording the
  snapshot timestamp.
- **"My spy"** — asserted by the HSGAC press release, not locatable in either
  released Slack PDF. Unresolved rather than disproved: `pdftotext` warned on the
  1,124-page file, and the reading-room corpus at `paul.senate.gov/readingroom`
  was not enumerated.
- **Rep. Griffith's "adverse-inference analogy"** (digest §5.5) — not located in
  CHRG-118hhrg55830.
- **The majority report's DOJ "grand jury… subpoenaing EcoHealth documents"** —
  the press release says only that DOJ "has opened an investigation". The
  grand-jury detail must be located in the report body before use.
- **Tabak letter of 20 Oct 2021** — relied on by the minority report but marked
  "on file with Select Subcommittee Staff"; no public URL. Not verifiable.
- **Peters opening statement (29 Jul 2026)** — downloaded but not read in full
  this run. Should be read before the Paul opening statement is used, for balance.
- **Not in this batch, still unverified:** DRASTIC analysis; USRTK articles; HSGAC
  fifteen-agencies letter; NIH 20 Oct 2021 statement (digest correctly flags the
  cited URL as a staging host); HHS OIG audit A-05-21-00025; the Baric Senate and
  House interview transcripts; the chairman's remarks page for the 13 May 2026
  hearing.
