# Citation verification — September 11 case, government/court record batch

**Date:** 2026-08-26
**Worker:** AI citation-verification agent (this batch: digest §5.5–§5.8 government/court sources)
**Method:** live fetches of primary documents (curl + pdftotext for PDFs; WebFetch for HTML;
tesseract OCR at 300 dpi for image-only scans; archive.org snapshots where live pages are
bot-walled, with snapshot dates noted). Every quote below was copied from content actually
fetched during this run. OCR-derived quotes are flagged; OCR spelling artifacts were corrected
only where the printed text is unambiguous, and flagged where not.
**Scope note:** per `docs/CONTENT_POLICY.md`, everything here is at most `ai_verified` —
no human has re-checked these citations.

---

## 1. The 9/11 Commission Report (2004)

- **Canonical URL:** `https://www.9-11commission.gov/report/911Report.pdf` — **confirmed
  live**; downloaded 2026-08-26 (7,574,768 bytes, PDF 1.5, 585 pp.); all quotes below
  extracted from this file with pdftotext.
- **Metadata:** *The 9/11 Commission Report: Final Report of the National Commission on
  Terrorist Attacks Upon the United States*, released July 22, 2004 (typesetter print marks
  in the PDF are dated 7/17/04).
- **Recommendation:** `ai_verified`.
  **verificationNote:** Official PDF fetched from 9-11commission.gov 2026-08-26; put-options
  passage, Ch. 8 title, PDB title, and Saudi-funding sentence all verified verbatim against
  the PDF with page locators.

### 1a. Put-options trace-out — CONFIRMED at Chapter 5, footnote 130

**Locator: Notes to Chapter 5, footnote 130, p. 499.** The task's believed locator
("notes to Chapter 5, possibly footnote 130") is **correct**. The footnote attaches to this
body sentence in §5.4, **p. 172**:

> "Exhaustive investigations by the Securities and Exchange Commission, FBI, and other
> agencies have uncovered no evidence that anyone with advance knowledge of the attacks
> profited through securities transactions.130"

Footnote 130 in full (p. 499), verbatim:

> "130. Highly publicized allegations of insider trading in advance of 9/11 generally rest on
> reports of unusual pre-9/11 trading activity in companies whose stock plummeted after the
> attacks. Some unusual trading did in fact occur, but each such trade proved to have an
> innocuous explanation. For example, the volume of put options—investments that pay off only
> when a stock drops in price—surged in the parent companies of United Airlines on
> September 6 and American Airlines on September 10—highly suspicious trading on its face.
> Yet, further investigation has revealed that the trading had no connection with 9/11.
> A single U.S.-based institutional investor with no conceivable ties to al Qaeda purchased
> 95 percent of the UAL puts on September 6 as part of a trading strategy that also included
> buying 115,000 shares of American on September 10. Similarly, much of the seemingly
> suspicious trading in American on September 10 was traced to a specific U.S.-based options
> trading newsletter, faxed to its subscribers on Sunday, September 9, which recommended these
> trades. These examples typify the evidence examined by the investigation. The SEC and the
> FBI, aided by other agencies and the securities industry, devoted enormous resources to
> investigating this issue, including securing the cooperation of many foreign governments.
> These investigators have found that the apparently suspicious consistently proved innocuous.
> Joseph Cella interview (Sept. 16, 2003; May 7, 2004; May 10–11, 2004); FBI briefing
> (Aug. 15, 2003); SEC memo, Division of Enforcement to SEC Chair and Commissioners,
> 'Pre-September 11, 2001 Trading Review,' May 15, 2002; Ken Breen interview (Apr. 23, 2004);
> Ed G. interview (Feb. 3, 2004)."

Both claimed phrases check out verbatim: "with no conceivable ties to al Qaeda" and
"the apparently suspicious consistently proved innocuous" (full sentence: "These investigators
have found that the apparently suspicious consistently proved innocuous."). Note for C19:
the footnote does not name the investor, the newsletter, or the underlying SEC/FBI files —
the digest's point that the trace-outs are not independently auditable from the public record
is consistent with the text.

### 1b. Chapter 8 title — CONFIRMED

Chapter 8 is titled **"THE SYSTEM WAS BLINKING RED"** (quotation marks in the original title),
beginning **p. 254**; listed in the table of contents as `8. "THE SYSTEM WAS BLINKING RED" 254`.

### 1c. August 6, 2001 PDB title — CONFIRMED (with a capitalization wrinkle)

Body text, **p. 260**:

> "The result was an article in the August 6 Presidential Daily Brief titled 'Bin Ladin
> Determined to Strike in US.' It was the 36th PDB item briefed so far that year that related
> to Bin Ladin or al Qaeda, and the first devoted to the possibility of an attack in the
> United States."

The reproduced PDB text itself, **p. 261**, carries the headline as
**"Bin Ladin Determined To Strike in US"** (capital "To"), introduced by:

> "The following is the text of an item from the Presidential Daily Brief received by
> President George W. Bush on August 6, 2001. Redacted material is indicated by brackets."

**Discrepancy (minor):** the report itself is inconsistent — body text lowercase "to"
(pp. 260, 262 header repetition), reproduced document capital "To" (p. 261). The digest's
"Bin Ladin Determined To Strike in US" matches the document headline as reproduced.

---

## 2. Joint Inquiry report (2002)

- **Canonical URL:** `https://www.govinfo.gov/app/details/GPO-CRPT-107hrpt792` (details page,
  confirmed live) → PDF
  `https://www.govinfo.gov/content/pkg/GPO-CRPT-107hrpt792/pdf/GPO-CRPT-107hrpt792.pdf` —
  **confirmed live**; downloaded 2026-08-26 (5,875,940 bytes, 858-page PDF).
- **Metadata:** *Joint Inquiry into Intelligence Community Activities before and after the
  Terrorist Attacks of September 11, 2001*, Report of the Senate Select Committee on
  Intelligence and House Permanent Select Committee on Intelligence, S. Rept. 107-351 /
  H. Rept. 107-792, December 20, 2002 (declassified/released July 2003; govinfo lists
  832 pages of findings, narrative, and recommendations).
- **Claimed central finding — CONFIRMED verbatim.** It is **Factual Finding 1**
  (Part I, "III. Findings and Conclusions — A. Factual Findings", **p. 7**; also in
  "Abridged Findings and Conclusions," p. xi):

> "1. Finding: While the Intelligence Community had amassed a great deal of valuable
> intelligence regarding Usama Bin Ladin and his terrorist activities, none of it identified
> the time, place, and specific nature of the attacks that were planned for September 11,
> 2001. Nonetheless, the Community did have information that was clearly relevant to the
> September 11 attacks, particularly when considered for its collective significance."

The brief's paraphrase (no intelligence "identified the time, place, and specific nature of
the attacks") is an accurate fragment.

- **Recommendation:** `ai_verified`.
  **verificationNote:** GPO PDF fetched from govinfo 2026-08-26; Finding 1 verified verbatim
  at p. 7 (and abridged list, p. xi).

---

## 3. The "28 pages" (Joint Inquiry Part Four, declassified July 15, 2016)

- **Direct government URL — FOUND:**
  `https://intelligence.house.gov/uploadedfiles/declasspart4.pdf` — **confirmed live**
  (HTTP 200, application/pdf, 5,149,842 bytes, 34-page scanned PDF, no text layer).
  Announcement page: `https://intelligence.house.gov/2016/07/15/intel-committee-publishes-declassified-28-pages/`
  (confirmed live; July 15, 2016; Nunes/Schiff statements; confirms HPSCI posted the
  document, redacted to protect sources and methods).
- **Metadata:** "Part Four — Finding, Discussion and Narrative Regarding Certain Sensitive
  National Security Matters," the formerly wholly classified section of the 2002 Joint Inquiry
  report (printed pp. 415–443 of the report), declassified with redactions and published by
  HPSCI July 15, 2016.
- **Quotes — verified by OCR (tesseract, 300 dpi) of the scanned PDF.** OCR artifacts
  corrected in brackets where unambiguous:

Finding 20, first sentence, **printed p. 415 (PDF p. 6)**:

> "20. Finding: While in the United States, some of the September 11 hijackers were in
> contact with, and received support or assistance from, individuals who m[a]y be co[nn]ected
> to the Sa[u]di Government."

Reliability caveat, **printed p. 421 (PDF p. 12; page number inferred from OCR-read footers
415/416/419 and PDF page continuity — treat the "421" as ai-derived, not print-confirmed)**:

> "[I]t should be clear that this Joint Inquiry has made no final determinations as to the
> reliability or sufficiency of the information regarding these issu[e]s that we found
> contained in FBI [a]nd C[I]A documents. It was not the task of this Joint Inquiry to conduct
> the kind of extensive investigation that would be required to determine[d] the true
> significance of [a]ny such alleged connections to the Sa[u]di Government."

- **Discrepancies (wording of the digest's claimed quotes):**
  1. Document reads "the Saudi Government" (capital G); digest §5.8 rendered it lowercase
     "the Saudi government."
  2. The caveat is "has made no final determination**s**" (plural), phrased as quoted above —
     the digest's paraphrase "made no final determination as to the reliability or sufficiency
     of the information" is close but singular; use the verbatim sentence.
- **Recommendation:** `ai_verified` (quotes OCR-derived from the government scan; a human
  eyeball of pp. 415 and 421 of the PDF is cheap and recommended before featuring).
  **verificationNote:** HPSCI-hosted declassified scan fetched 2026-08-26; Finding 20 and the
  no-final-determinations caveat verified by OCR at pp. 415 and 421 respectively.

---

## 4. DOJ OIG review of FBI handling (Nov 2004, released June 2006)

- **Canonical URLs — ALL THREE CONFIRMED live** (fetched 2026-08-26):
  - Ch. 3 (Phoenix memo): `https://oig.justice.gov/sites/default/files/archive/special/s0606/chapter3.htm`
  - Ch. 4 (Moussaoui): `https://oig.justice.gov/sites/default/files/archive/special/s0606/chapter4.htm`
  - Ch. 5 (Hazmi/Mihdhar): `https://oig.justice.gov/sites/default/files/archive/special/s0606/chapter5.htm`
- **Metadata:** DOJ Office of the Inspector General, *A Review of the FBI's Handling of
  Intelligence Information Related to the September 11 Attacks*, "Special Report
  (November 2004), Released Publicly June 2006" (each chapter page carries that banner).
- **Discrepancy:** the Phoenix chapter is **Chapter Three at the s0606 path**, titled "The
  FBI's Handling of the Phoenix Electronic Communication and Other Information Relating to
  Use of Airplanes in Terrorist[s] Attacks". The digest's alternative `.../archive/special/0506/chapter3.htm`
  path was not needed and was not verified; cite s0606. HTML chapters carry no print page
  numbers — locators must be chapter/section (the report's PDF edition would be needed for
  page cites).
- **"Significant intelligence failure" — CONFIRMED, in Chapter 3 (Phoenix), conclusions
  section**, verbatim:

> "What we do know is that the FBI was not adequately analyzing information for the purpose
> of drawing conclusions and making predictions. This was a significant intelligence failure,
> which hindered the chances of the FBI being able to detect and prevent the September 11
> attacks."

- **Chapter 5 (Hazmi/Mihdhar), "V. OIG conclusions"**, verbatim:

> "In sum, we found individual and systemic failings in the FBI's handling of information
> regarding the Hazmi and Mihdhar matter. The FBI had at least five opportunities to learn
> about their presence in the United States and to seek to find them before September 11,
> 2001."

- **Chapter 4 (Moussaoui), "V. Conclusion"**, verbatim:

> "In sum, we did not find that any employees committed intentional misconduct, or violated
> established FBI policies or practices, or attempted to deliberately sabotage the Moussaoui
> case. But the performance of several individuals involved with the case was lacking."

- **Recommendation:** `ai_verified`.
  **verificationNote:** All three chapter pages fetched live from oig.justice.gov 2026-08-26;
  key judgments quoted verbatim; section-level locators only (HTML edition has no page numbers).

---

## 5. EPA Inspector General report 2003-P-00012 (August 21, 2003)

- **Primary document — LOCATED:**
  - Landing page: `https://www.epa.gov/office-inspector-general/report-epas-response-world-trade-center-collapse-challenges-successes-and`
  - PDF: `https://www.epa.gov/sites/default/files/2015-12/documents/wtc_report_20030821.pdf` —
    **confirmed live**, downloaded 2026-08-26 — **but this file is a 32-page excerpt** (ends
    mid-Chapter 3 at printed p. 22). The complete report is in EPA's NEPIS repository:
    `https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P1004EJZ.txt` (confirmed live; full text
    including all chapters/appendices). Same CEQ passages appear in both.
- **Metadata:** EPA Office of Inspector General, Evaluation Report, *EPA's Response to the
  World Trade Center Collapse: Challenges, Successes, and Areas for Improvement*, Report
  No. 2003-P-00012, August 21, 2003 (transmittal memo to Acting Administrator Marianne L.
  Horinko).
- **CEQ finding — CONFIRMED.** Executive Summary, **p. i**, verbatim:

> "Furthermore, The White House Council on Environmental Quality influenced, through the
> collaboration process, the information that EPA communicated to the public through its
> early press releases when it convinced EPA to add reassuring statements and delete
> cautionary ones."

(Sic — "The" is capitalized mid-sentence in the original.) Preceded on the same page by:
"However, when EPA made a September 18 announcement that the air was 'safe' to breathe, it
did not have sufficient data and analyses to make such a blanket statement."

Chapter 2, section **"Council on Environmental Quality Influenced EPA Press Releases,"
pp. 14–15**, verbatim:

> "As a result of the White House CEQ's influence, guidance for cleaning indoor spaces and
> information about the potential health effects from WTC debris were not included in EPA's
> issued press releases. In addition, based on CEQ's influence, reassuring information was
> added to at least one press release and cautionary information was deleted from EPA's draft
> version of that press release."

Also p. 15 (attribution detail worth keeping): a September 12, 2001 internal e-mail — "All
statements to the media should be cleared through the NSC [National Security Council] before
they are released" — and the OCEMR Associate Administrator's statement about professional-
cleaning advice: "It was in a press release: it was removed by. . . [the CEQ contact]."

- **Recommendation:** `ai_verified`.
  **verificationNote:** EPA-hosted PDF fetched 2026-08-26; CEQ finding verified verbatim at
  Exec. Summary p. i and Ch. 2 pp. 14–15; note the epa.gov PDF is a 32-page excerpt — cite
  NEPIS Dockey P1004EJZ for the complete report.

---

## 6. DoD IG Able Danger report (September 2006) + Senate Judiciary hearing (September 2005)

### 6a. DoD IG report

- **Primary document:** DoD Office of Inspector General, *Report of Investigation: Alleged
  Misconduct by Senior DoD Officials Concerning the Able Danger Program and Lieutenant
  Colonel Anthony A. Shaffer, U.S. Army Reserve*, Case Number H05L97905217, dated
  September 18, 2006 (stamp "SEP 18 2006"; transmittal signed Thomas F. Gimble; 71-page
  scanned PDF, no text layer).
- **URL status — the primary is NOT currently reachable on a live .mil/.gov page from this
  environment:** `dodig.mil` returns HTTP 403 (Akamai) and the live FAS mirror
  `https://irp.fas.org/agency/dod/ig-abledanger.pdf` returned an empty document; the document
  **was obtained via the archive.org capture of that FAS mirror**
  (`https://web.archive.org/web/2023*/https://irp.fas.org/agency/dod/ig-abledanger.pdf`,
  fetched 2026-08-26). Cite as: DoD IG report H05L97905217, Sept 18, 2006, retrieved from
  archive.org snapshot of irp.fas.org (mirror), snapshot fetched 2026-08-26. A DIA FOIA
  response (2016) confirms the DoD IG Electronic Reading Room held it as "Joint Report
  (Unnumbered) Alleged Misconduct of Senior DoD Officials Concerning the Able Danger
  Program..." — a live dodig.mil URL should be re-tried from a non-datacenter connection.
- **Conclusion — CONFIRMED (OCR of pp. 1–2 transmittal and p. 3 of the report body):**

Transmittal memorandum (p. 2 of PDF), verbatim:

> "The investigation addressed nine specific allegations raised in the media and by various
> Members of Congress. We did not substantiate those allegations. The evidence did not
> support assertions that Able Danger identified the September 11, 2001, terrorists nearly a
> year before the attack, that Able Danger team members were prohibited from sharing
> information with law enforcement authorities, or that DoD officials reprised against LTC
> Shaffer for his disclosures regarding Able Danger."

Report body, **p. 3**, verbatim:

> "We concluded that prior to September 11, 2001, Able Danger team members did not identify
> Mohammed Atta or any other 9/11 hijacker. While we interviewed four witnesses who claimed
> to have seen a chart depicting Mohammed Atta and possibly other terrorists or 'cells'
> involved in 9/11, we determined that their recollections were not accurate."

and (same page):

> "That chart (Figure 1 of this report) was produced by Orion Scientific Corporation (Orion)
> in May 1999 and contained the names and/or photographs of 53 terrorists who had been
> identified and in many cases, incarcerated, before 9/11, including a Brooklyn cell, but it
> did not identify Mohammed Atta or any of the other 9/11 terrorists."

- **The "five witnesses" issue — nuance found:** the IG report speaks of **four** witnesses
  who claimed to have seen an Atta chart; the **five** figure belongs to the Senate hearing
  record (Specter: "five key witnesses" barred — below) and to press accounts of the 2005
  Pentagon review. Do not conflate the two counts in claim C23.

### 6b. Senate Judiciary hearing (Sept 21, 2005)

- **URL:** `https://www.govinfo.gov/content/pkg/CHRG-109shrg25409/html/CHRG-109shrg25409.htm` —
  **confirmed live** (fetched 2026-08-26).
- **Metadata:** *Able Danger and Intelligence Information Sharing*, Hearing before the
  Committee on the Judiciary, United States Senate, 109th Congress, 1st Session,
  **September 21, 2005**, S. Hrg. 109-311, Serial No. J-109-39.
- **DoD barring witnesses / Specter remarks — CONFIRMED**, Chairman Specter's opening
  statement, verbatim:

> "I was surprised to find that the Department of Defense has ordered five key witnesses not
> to testify, some of them military, some civilian, all working for the Department of
> Defense. That looks to me as if it may be obstruction of the Committee's activities, which
> is something we will have to determine."

- **Recommendation:** DoD IG report `ai_verified` **with the mirror caveat** (quotes verified
  against an archived mirror scan, not a live .mil original — if a live dodig.mil link cannot
  be recovered, keep the mirror provenance explicit in the source record). Senate hearing
  `ai_verified`.
  **verificationNote (IG report):** Verified against archive.org capture of the FAS-mirrored
  official scan (Case H05L97905217, Sept 18, 2006), OCR-quoted; live dodig.mil URL returns 403
  from this environment.
  **verificationNote (hearing):** GPO HTML fetched live 2026-08-26; Specter quote verbatim.

---

## 7. FBI Vault EO 14040 releases + EO 14040

- **FBI Vault collection:** `https://vault.fbi.gov/9-11-attacks-investigation-and-related-materials` —
  **exists, but the live page is Cloudflare bot-walled** from this environment. Verified via
  **archive.org snapshot of 2026-02-26** (`http://web.archive.org/web/20260226054148/...`):
  collection titled "9/11 Attacks Investigation and Related Materials," filed under
  9/11 / Counterterrorism, listing (2 pages of items) the EO 14040 release series — e.g.
  "Documents Responsive to Executive Order 14040 2(d) Part 1" (03.02.22), "...2(c) Part 5/6"
  (03.15.22), "...Release Update Part 01–04" (03.23.22–04.29.22), "...2(b)(1) Supplemental
  Release 1–4," "...2(c) & 2(d) Supplemental Release 1–3" (through 04.29.22). The digest's
  deeper URL (`.../9-11-material-released-in-response-to-executive-order-14040`) was not
  separately verified; the collection root above suffices and is confirmed.
- **EO 14040:** `https://www.govinfo.gov/content/pkg/DCPD-202100713/pdf/DCPD-202100713.pdf` —
  **confirmed live**; downloaded 2026-08-26. It is what the digest claims, verbatim header:

> "Administration of Joseph R. Biden, Jr., 2021 / Executive Order 14040—Declassification
> Reviews of Certain Documents Concerning the Terrorist Attacks of September 11, 2001 /
> September 3, 2021"

  Bonus verbatim (Sec. 2(a)) — confirms the litigation caption from a government source:
  records "identified but withheld in full during discovery in *In re Terrorist Attacks on
  September 11, 2001*, MDL No. 03–1570 (S.D.N.Y.)".

- **Recommendation:** EO 14040 `ai_verified`; Vault collection `ai_verified` (via dated
  archive snapshot; note the bot-wall in the source record).
  **verificationNote (Vault):** Collection existence and EO 14040 release listing verified via
  archive.org snapshot dated 2026-02-26; live page bot-walled to automated fetchers.
  **verificationNote (EO):** GPO DCPD PDF fetched live 2026-08-26; Biden order of Sept 3, 2021
  confirmed, including the MDL 03-1570 reference.

---

## 8. "No evidence that the Saudi government as an institution..." — Commission Report sentence

- **Primary located — 9/11 Commission Report, p. 171** (Ch. 5, §5.4, footnote 122), verbatim:

> "Saudi Arabia has long been considered the primary source of al Qaeda funding, but we have
> found no evidence that the Saudi government as an institution or senior Saudi officials
> individually funded the organization. (This conclusion does not exclude the likelihood that
> charities with significant Saudi government sponsorship diverted funds to al Qaeda.)"

- **Framing correction for the digest:** §3/H5 of the digest calls this "the 2016 White House
  formulation" — the primary formulation is the Commission Report's own (2004, p. 171);
  2016-era statements echo it. The parenthetical caveat about Saudi-sponsored charities is
  part of the same passage and should travel with any use of the quote (per AGENTS.md §3.9,
  quoting the first clause without the parenthetical would misstate the source).
- **Recommendation:** `ai_verified`.
  **verificationNote:** Verified verbatim at p. 171 of the official Commission Report PDF,
  fetched 2026-08-26; includes the charities caveat sentence.

---

## 9. AP on the August 28, 2025 Daniels ruling (Saudi litigation)

- **URL:** `https://apnews.com/article/911-attacks-lawsuits-saudi-arabia-51f3692499ade7b1e320bc54b8d218eb` —
  **confirmed live** (fetched 2026-08-26). Headline: "Judge rejects Saudi Arabia's bid to
  dismiss claims it supported 9/11 hijackers." Dateline "NEW YORK (AP)"; text says the ruling
  came "Thursday" (August 28, 2025 was a Thursday); the fetched page did not display an
  explicit publication date.
- **Claims verified against the fetched text, verbatim:**
  - Denied dismissal: "A federal judge in New York on Thursday rejected Saudi Arabia's latest
    effort to dismiss civil claims that it supported the 9/11 hijackers."
  - Not a merits finding: "Judge George B. Daniels said in a written opinion that his decision
    pertained to jurisdiction rather than the merits of the claims against the Kingdom of
    Saudi Arabia."
  - Toward trial: "However, he found the claims legally sufficient to proceed to trial, noting
    that an imam and an accountant's employment by Saudi Arabia likely had some connection
    with their support of two al-Qaida members who came to the United States in early 2000 to
    study English and take flight lessons."
- **Saudi denial — NOT present as an explicit "denies" sentence in the fetched text.** The
  closest passage: "Lawyers for Saudi Arabia argued that the nation and the U.S. were partners
  in the 1990s against terrorism, al-Qaida and its founder, Osama bin Laden." If the case
  record needs an explicit denial, source it from KSA's filings, not this article.
- **Case name/docket — CONFIRMED from primary/government sources, not from the AP text:**
  *In re Terrorist Attacks on September 11, 2001*, **1:03-md-01570-GBD-SN (S.D.N.Y.)** —
  confirmed by EO 14040's own text ("MDL No. 03–1570 (S.D.N.Y.)") and by the court's
  Memorandum Decision and Order of 08/28/2025 (ECF No. 11182, 45 pp., Daniels, J.; caption
  "03 MDL 1570 (GBD) (SN)"; "KSA's renewed motion to dismiss is DENIED", 12(b)(1)/JASTA),
  seen via docket mirrors during this run. **"Ashton" was NOT confirmed in this batch** —
  Ashton v. al Qaeda/KSA is a member case of the MDL per the briefs, but no fetched primary
  document named it; cite the MDL caption unless/until an Ashton-specific filing is verified.
- **Material update the digest lacks:** a subsequent order in the same docket records that
  **KSA filed a notice of appeal (September 2025) and the district court stayed proceedings
  pending appeal** — "sends toward trial" is now conditional on the Second Circuit. The case
  page should reflect this.
- **Recommendation:** `ai_verified` (journalism = discovery only per CONTENT_POLICY; supersede
  with ECF No. 11182 as the primary source).
  **verificationNote:** AP article fetched live 2026-08-26; ruling scope (jurisdiction, not
  merits) verbatim; docket confirmed independently via EO 14040 and the 08/28/25 order;
  explicit Saudi-denial wording not present in the article text.

---

## 10. Commission FAA/NORAD hearing (June 17, 2004) + Bronner, "9/11 Live: The NORAD Tapes"

### 10a. Twelfth public hearing

- **URL:** `https://www.9-11commission.gov/archive/hearing12/9-11Commission_Hearing_2004-06-17.htm` —
  **confirmed live** (fetched 2026-08-26; full transcript, ~533 KB).
- **Metadata:** National Commission on Terrorist Attacks Upon the United States, Twelfth
  Public Hearing, Thursday, June 17, 2004, Washington D.C. (NTSB Conference Center), chaired
  by Thomas H. Kean. Panel I: Staff Statement No. 17, "Improvising a Homeland Defense"
  (read by Philip Zelikow); Panel II: Gen. Richard Myers, Adm. (sel.) Charles Joseph Leidig,
  Gen. Ralph E. Eberhart, Maj. Gen. Larry Arnold.
- **Corrected-timeline key passages — CONFIRMED, verbatim from the transcript:**

Staff Statement No. 17 (notice, first hijacking):

> "In summary, NEADS received notice of the hijacking nine minutes before it impacted the
> North Tower. The nine minutes notice was the most the military would receive that morning
> of any of the four hijackings."

Staff Statement No. 17 (the phantom American 11 / Langley scramble correction):

> "The report of American 11 heading south as the cause of the Langley scramble is reflected
> not just in taped conversations at NEADS, but in taped conversations in FAA centers, on
> chat logs compiled at NEADS, continental region headquarters, and NORAD, and in other
> records. Yet this response to a phantom aircraft, American 11, is not recounted in a single
> public timeline or statement issued by FAA or DOD. Instead, since 9/11, the scramble of the
> Langley fighters has been described as a response to the reported hijacking of American 77,
> or United 93, or some combination of the two."

Commissioner Ben-Veniste to Gen. Arnold (the confrontation):

> "General, is it not a fact that the failure to call our attention to the miscommunication
> and the notion of a phantom Flight 11 continuing from New York City south in fact skewed
> the whole reporting of 9/11, it skewed the official Air Force report, which is contained in
> a book called 'The Air War Over America'..."

### 10b. Bronner, Vanity Fair

- **Exists — CONFIRMED.** Canonical URL: `https://www.vanityfair.com/news/2006/09/norad200609`
  (live; full text fetched 2026-08-26). Vanity Fair's own archive:
  `https://archive.vanityfair.com/article/2006/9/1/911-live-the-norad-tapes`.
- **Metadata:** Michael Bronner, "9/11 Live: The NORAD Tapes," *Vanity Fair*, **September 2006
  issue** (the live page displays "October 17, 2006" as its web date; contemporaneous radio
  coverage was early August 2006). **Discrepancy:** the task said "August 2006" — the piece
  circulated in August 2006 but the issue is September 2006; cite the issue.
- **Core content — CONFIRMED:** built on ~30 hours of NEADS operations-floor recordings
  obtained from the Pentagon ("30-some hours of material in full, covering six and a half
  hours of real time"); documents the chase of "the phantom American 11" (referenced
  repeatedly, e.g. "the fact that the fighters have been launched in response to the phantom
  American 11—rather than American 77 or United 93—is referred to six more times on
  Nasypany's channel alone"); establishes United 93 crashed before NEADS knew ("by the time
  neads gets the report of a bomb on United 93, everyone on board is already dead"); and that
  no shootdown authority reached the pilots ("'…it's an order that had never been given
  before.' And it wasn't on 9/11, either.").
- **Caveat:** the digest's phrase "the military never had any hijacked airliner in its
  sights" does **not** appear verbatim in the article text fetched; it is a fair summary of
  the article + Staff Statement 17, but should not be quoted as Bronner's words.
- **Recommendation:** hearing `ai_verified`; Vanity Fair `ai_verified` (journalism —
  discovery/secondary; the NEADS tapes themselves are the primary).
  **verificationNote (hearing):** Commission-archived transcript fetched live 2026-08-26;
  key exchanges quoted verbatim.
  **verificationNote (Bronner):** Live vanityfair.com text fetched 2026-08-26; September 2006
  issue; NEADS-tapes provenance and phantom-AA11 content confirmed in the text.

---

## 11. United States v. Moussaoui trial exhibits

- **URL:** `https://www.vaed.uscourts.gov/101cr00455-trial-exhibits` — **confirmed live**
  (fetched 2026-08-26). Court's own page, "United States v. Zacarias Moussaoui, Criminal
  No. 01-455-A."
- **Claimed 1,202 admitted exhibits — CONFIRMED**, verbatim:

> "The following web pages link to all 1,202 exhibits admitted into evidence during the trial
> of U.S. v. Moussaoui, with the exception of seven that are classified or otherwise remain
> under seal. This is the first criminal case for which a federal court has provided access
> to all exhibits online. The exhibits were posted on July 31, 2006."

- **Recommendation:** `ai_verified`.
  **verificationNote:** E.D. Va. court page fetched live 2026-08-26; 1,202-exhibits statement
  verbatim (note: all but seven are online).

---

## 12. August 6, 2001 PDB — declassified text

- **Availability — CONFIRMED via two routes:**
  1. The full declassified text is reproduced in the **9/11 Commission Report, pp. 261–262**
     ("The following is the text of an item from the Presidential Daily Brief received by
     President George W. Bush on August 6, 2001. Redacted material is indicated by
     brackets.") — verified in the official PDF this run.
  2. `https://georgewbush-whitehouse.archives.gov/news/releases/2004/04/text/20040410-5.html` —
     **confirmed live**, but it is the April 10, 2004 White House **fact sheet about** the PDB
     ("Fact Sheet: The August 6, 2001 PDB"), not the PDB text itself. It confirms the release
     ("The copy of the PDB that has been released is a copy of the PDB prepared for the
     President, except that three redactions have been made to protect the names of foreign
     governments that provided information to CIA."). A government-hosted facsimile scan was
     not located this run (the commonly cited scan is at GWU's National Security Archive,
     non-gov).
- **The "patterns of suspicious activity" sentence — CONFIRMED verbatim** (Commission Report
  p. 262, PDB reproduction):

> "Nevertheless, FBI information since that time indicates patterns of suspicious activity in
> this country consistent with preparations for hijackings or other types of attacks,
> including recent surveillance of federal buildings in New York."

- **Discrepancy:** the digest's claimed quote ("patterns of suspicious activity in this
  country consistent with preparations for **a hijacking**") is wrong in the tail — the PDB
  says "**hijackings or other types of attacks**". Correct before use.
- **Recommendation:** `ai_verified`.
  **verificationNote:** PDB text verified verbatim from its reproduction in the Commission
  Report PDF (pp. 261–262), fetched 2026-08-26; White House fact sheet reachable but is
  commentary, not the document.

---

## Cross-cutting discrepancy summary

1. **Put-options locator settled:** Chapter 5, **footnote 130, p. 499** (body sentence
   p. 172). The task's tentative locator was right; the digest may now drop its "locator
   from task, unverified" flag.
2. **PDB quote correction:** "...preparations for hijackings or other types of attacks..."
   — not "a hijacking" (digest §5.5 S-PDB1). Also title capitalization: document headline
   "Determined To Strike", Commission body text "Determined to Strike".
3. **28 pages:** direct government URL now on file (intelligence.house.gov/uploadedfiles/declasspart4.pdf);
   caveat sentence is "has made no final determination**s**..."; "Saudi Government"
   capitalized; scanned PDF → quotes are OCR-verified, human eyeball recommended.
4. **DOJ OIG:** Phoenix chapter is s0606 chapter3, not the 0506 path; "significant
   intelligence failure" is in Chapter 3's conclusions and refers to the FBI's analytical
   failure generally, not to the Phoenix memo's handling alone.
5. **DoD IG:** live .mil copy unreachable (403); verified via archived FAS mirror scan.
   **Four** chart witnesses in the IG report vs. **five** barred witnesses in the Senate
   hearing — keep the counts distinct.
6. **EPA OIG:** the epa.gov "full report" PDF is a 32-page excerpt; complete text at NEPIS
   (Dockey P1004EJZ).
7. **Saudi-funding sentence** is the Commission Report's own (p. 171), not a "2016 White
   House formulation"; quote must carry the charities-diversion parenthetical.
8. **Saudi litigation:** docket confirmed as 1:03-md-01570-GBD-SN, order ECF No. 11182
   (Aug 28, 2025); **KSA has appealed and proceedings are stayed pending appeal** — the
   digest's "headed to trial" needs that qualifier. "Ashton" caption not confirmed this run.
   AP text contains no explicit Saudi-denial sentence.
9. **Bronner:** September 2006 issue (not August); "never had a hijacked airliner in its
   sights" is a summary, not a quotable sentence from the article.
10. **FBI Vault:** live page bot-walled; verified via archive.org snapshot dated 2026-02-26.
