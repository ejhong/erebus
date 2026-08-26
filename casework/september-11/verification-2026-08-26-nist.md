# Citation verification — NIST and official-engineering cluster

**Date:** 2026-08-26
**Worker:** AI citation-verification agent (this batch: digest §5.1–5.2 NIST/official-engineering sources)
**Method:** live fetches of the primary documents (NIST landing pages and PDFs from
nvlpubs.nist.gov, govinfo.gov, Springer, PolyU IR), with archive.org Wayback snapshots
where a live URL is bot-walled (noted per source with snapshot date). Every quotation
below was copied verbatim from content actually fetched during this run. Per
`docs/CONTENT_POLICY.md`, AI-performed verification is labeled `ai_verified`, never
`verified`.

**Digest cross-reference:** `digest-case-construction-2026-08-26.md` §5.1 (S-N1, S-N2,
S-N3, S-N5, S-N6, S-N9), §5.2 (S-Q1, S-L1, S-C1, S-F1, S-P1).

---

## 1. NIST NCSTAR 1A — Final Report on the Collapse of World Trade Center Building 7 (S-N1)

- **Canonical URLs:**
  - Landing page (resolves): `https://www.nist.gov/publications/final-report-collapse-world-trade-center-building-7-federal-building-and-fire-safety-0`
  - DOI: `https://doi.org/10.6028/NIST.NCSTAR.1a`
  - PDF (fetched and read in full-text): `https://nvlpubs.nist.gov/nistpubs/Legacy/NCSTAR/ncstar1a.pdf`
- **How verified:** direct fetch of landing page + direct download of the PDF
  (5.7 MB); text extracted and quoted from the PDF itself.
- **Metadata:** Shyam-Sunder, S., Gann, R., Grosshandler, W., et al., *Final Report on
  the Collapse of World Trade Center Building 7, Federal Building and Fire Safety
  Investigation of the World Trade Center Disaster (NIST NCSTAR 1A)*, National
  Institute of Standards and Technology, Gaithersburg, MD. Landing page states
  "Published November 20, 2008".

### Verified content (verbatim quotes with locators; page numbers are the printed page numbers in the PDF)

**"First known instance" (Executive Summary, §ES.1, p. xxxv):**

> "On September 11, 2001, WTC 7 endured fires for almost seven hours, from the time of the collapse of the north WTC tower (WTC 1) at 10:28:22 a.m. until 5:20:52 p.m., when it collapsed. This was the first known instance of the total collapse of a tall building primarily due to fires."

(The word "building" carries a footnote 1 in the original.) Restated in §4.2 Summary:

> "The collapse of WTC 7 represents the first known instance of the total collapse of a tall building primarily due to fires."

**Column temperatures (Chapter 2, p. 21):**

> "Due to the effectiveness of the SFRM, the highest column temperatures in WTC 7 only reached an estimated 300 °C (570 °F), and only on the east side of the building did the floor beams reach or exceed about 600 °C (1100 °F). The heat from these uncontrolled fires caused thermal expansion of the steel beams on the lower floors of the east side of WTC 7, primarily at or below 400 ºC (750 ºF), damaging the floor framing on multiple floors."

**Probable collapse sequence (§2.4 "The Probable Collapse Sequence", pp. 21–22):**

> "The initiating local failure that began the probable WTC 7 collapse sequence was the buckling of Column 79. This buckling arose from a process that occurred at temperatures at or below approximately 400 °C (750 °F), which are well below the temperatures considered in current practice for determining fire resistance ratings associated with significant loss of steel strength."

> "Fire-induced thermal expansion of the floor system surrounding Column 79 led to the collapse of Floor 13, which triggered a cascade of floor failures. In this case, the floor beams on the east side of the building expanded enough that they pushed the girder spanning between Columns 79 and 44 to the west on the 13th floor. […] This movement was enough for the girder to walk off of its support at Column 79."

> "The unsupported girder and other local fire-induced damage caused Floor 13 to collapse, beginning a cascade of floor failures down to the 5th floor […] This left Column 79 with insufficient lateral support, and as a consequence, the column buckled eastward, becoming the initial local failure for collapse initiation."

**Three-stage descent analysis (§3.6 "Timing of Collapse Initiation and Progression", pp. 44–45; Figure 3-15):**

> "The time that the roofline took to fall 18 stories or 73.8 m (242 ft) was approximately 5.4 s. The theoretical time for free fall (i.e., at gravitational acceleration) was computed from […] This time was approximately 3.9 s. Thus, the average time for the upper 18 stories to collapse, based on video evidence, was approximately 40 percent longer than the computed free fall time."

> "In Stage 2, the north face descended at gravitational acceleration, as the buckled columns provided negligible support to the upper portion of the north face. This free fall drop continued for approximately 8 stories or 32.0 m (105 ft), the distance traveled between times t = 1.75 s and t = 4.0 s."

And in the Principal Findings (Chapter 4, p. 48):

> "A more detailed analysis of the descent of the north face found three stages: (1) a slow descent with acceleration less than that of gravity that corresponded to the buckling of the exterior columns at the lower floors, (2) a freefall descent over approximately eight stories at gravitational acceleration for approximately 2.25 s, and (3) a decreasing acceleration as the north face encountered resistance from the structure below."

**Blast finding with the 130–140 dB threshold (Chapter 4 Principal Findings, p. 49):**

> "Blast events did not play a role in the collapse of WTC 7. Based on visual and audio evidence and the use of specialized computer modeling to simulate hypothetical blast events, NIST concluded that blast events did not occur, and found no evidence whose explanation required invocation of a blast event. Blast from the smallest charge capable of failing a critical column (i.e., Column 79) would have resulted in a sound level of 130 dB to 140 dB at a distance of at least half a mile if unobstructed by surrounding buildings (such as along Greenwich Street or West Broadway). This sound level is consistent with standing next to a jet plane engine and more than 10 times louder than being in front of the speakers at a rock concert. There were no witness reports of such a loud noise, nor was such a noise heard on the audio tracks of video recordings of the WTC 7 collapse."

- **Recommendation:** `ai_verified`
- **verificationNote:** Landing page, DOI, and official NIST PDF fetched 2026-08-26; collapse-sequence, three-stage descent (2.25 s / 32.0 m / ~8 stories), first-known-instance, column-temperature, and blast-threshold statements all confirmed verbatim against the PDF with printed page numbers.

### Discrepancies vs. the digest

1. **The girder designation "A2001" does not appear anywhere in NCSTAR 1A** (0 hits in
   the full text). NCSTAR 1A says only "the girder spanning between Columns 79 and 44."
   The A2001 designation comes from NCSTAR 1-9. Digest C03's phrasing "the Floor 13
   girder (A2001)… as described in NIST NCSTAR 1A" needs its locator split: girder
   identity per NCSTAR 1-9, sequence per NCSTAR 1A §2.4.
2. Digest §5.1 says descent analysis is at "§3.6, NCSTAR 1-9 §12.5.3" — the NCSTAR 1A
   §3.6 locator is correct (confirmed); NCSTAR 1-9 §12.5.3 is cited by the FAQ as the
   detailed treatment but was not itself fetched in this batch (leave that sub-locator
   unverified).
3. Minor: digest says Stage 2 is "~32 m"; the report's exact figure is "32.0 m
   (105 ft)". Digest's "~2.25 s" matches "approximately 2.25 s".

---

## 2. NIST WTC 7 FAQ (S-N2)

- **Canonical URL (resolves):** `https://www.nist.gov/world-trade-center-investigation/study-faqs/wtc-7-investigation`
- **How verified:** direct fetch, 2026-08-26.
- **Metadata:** "FAQs - NIST WTC 7 Investigation", NIST. Page header: "September 19,
  2011 (updated 11/20/19) | Updated: September 10, 2021"; page footer: "Created
  September 13, 2011, Updated April 5, 2022". The September 2021 update "included
  minor edits and reordering the questions" (question numbers below are the current
  ones).

### Verified content (verbatim, with FAQ question numbers)

**Free-fall stages (Q32):**

> "The analyses of the video (both the estimation of the instant the roofline began to descend and the calculated velocity and acceleration of a point on the roofline) revealed three distinct stages characterizing the 5.4 seconds of collapse:
> - Stage 1 (0 to 1.75 seconds): acceleration less than that of gravity (i.e., slower than free fall).
> - Stage 2 (1.75 to 4.0 seconds): gravitational acceleration (free fall)
> - Stage 3 (4.0 to 5.4 seconds): decreased acceleration, again less than that of gravity"

> "During Stage 2, the north face descended essentially in free fall, indicating negligible support from the structure below."

(The FAQ gives Stage 2 as the 1.75–4.0 s interval — i.e., 2.25 s — but does not print
the number "2.25"; that figure is printed in NCSTAR 1A Chapter 4, p. 48.)

**Blast-sound analysis (Q33):**

> "In addition, no blast sounds were heard on the audio tracks of video recordings during the collapse of WTC 7 or reported by witnesses. According to calculations by the investigation team, the smallest blast capable of failing the building's critical column would have resulted in a sound level of 130 decibels (dB) to 140 dB at a distance of at least half a mile, if unobstructed by surrounding buildings."

**Witness booms (Q36):**

> "36. An emergency responder caught in WTC 7 between the 6th and 8th floors said he heard two loud booms. Isn't that evidence that there was an explosion?
> The sound levels reported by all witnesses do not match the sound level of an explosion that would have been required to cause the collapse of the building."

**Data withholding (Q7, added 11/20/19):**

> "This information was exempt from public disclosure under Section 7d of the National Construction Safety Team Act because it was determined by the Director of NIST that release of the files might jeopardize public safety. The withheld information contains detailed connection models that have been validated against actual events, and therefore, provide tools that could be used to predict the collapse of a building. The information contained in the withheld files is sufficiently detailed that it might be used to develop plans to destroy other, similarly constructed, buildings. In Michael Quick v. United States Department of Commerce, National Institute of Standards and Technology, Civil Action No. 09-02064 (CKK) U.S. District Court of the District of Columbia, Apr. 7, 2011, the court upheld NIST's finding to withhold this information."

**Steel recovery (Q21):**

> "Steel samples were removed from the site before the NIST investigation began. In the immediate aftermath of Sept. 11, 2001, debris was removed rapidly from the site to aid in recovery efforts and to facilitate emergency responders' efforts to work around the site. Once it was removed from the scene, the steel from WTC 7 could not be clearly identified. Unlike the pieces of steel from WTC 1 and WTC 2, which were painted red and contained distinguishing markings, WTC 7 steel did not contain such identifying characteristics."

**"First known instance" (Q15):**

> "The collapse of WTC 7 is the first known instance of a tall building brought down primarily by uncontrolled fires."

**Simulation-vs-video acknowledgment (Q25) (digest attributed to B2):**

> "Only in the later stages of the animation, after the initiation of global collapse, do the upper exterior wall deformations from the NIST analysis differ from the video images."

> "Given these factors, disparities between the video and the animation in the later stages of collapse would be expected."

- **Recommendation:** `ai_verified`
- **verificationNote:** FAQ fetched live 2026-08-26; free-fall stages, 130–140 dB blast analysis, §7(d) withholding (with Quick v. NIST citation), WTC 7 steel-identification statement, and first-known-instance phrasing all confirmed verbatim (question numbers reflect the Sept 2021 reordering).

### Discrepancies vs. the digest

1. **Digest C09's framing overstates NIST's claim.** C09 says witness testimony
   contradicts "NIST's statement that no witness reports of blast sounds existed."
   NIST's actual statements are narrower: NCSTAR 1A says there were no witness reports
   "of such a loud noise" (a 130–140 dB blast), and FAQ Q36 explicitly acknowledges a
   responder who "heard two loud booms" while asserting the reported sound levels "do
   not match" a column-failing blast. NIST does not deny boom reports; it denies
   blast-level ones. The claim wording should target the actual NIST statement.
2. The digest quote "no blast sounds were heard on the audio tracks of video
   recordings" is verbatim-correct but truncated; the full sentence continues "during
   the collapse of WTC 7 or reported by witnesses."

---

## 3. NIST WTC Towers FAQ (S-N6)

- **Canonical URL (resolves):** `https://www.nist.gov/world-trade-center-investigation/study-faqs/wtc-towers-investigation`
- **How verified:** direct fetch, 2026-08-26.
- **Metadata:** "FAQs - NIST WTC Towers Investigation", NIST. "Created: September 14,
  2011 | Updated: September 10, 2021"; footer "Created September 14, 2011, Updated
  April 5, 2022".

### Verified content (verbatim, with FAQ question numbers)

**Progression "readily explained" (Q10):**

> "Once the collapse had begun, the propagation of the collapse was readily explained without the same complexity of modeling."

**No residue testing (Q29):**

> "29. Did the NIST investigation look for evidence of the WTC towers being brought down by controlled demolition? Was the steel tested for explosives or thermite residues?
> NIST did not test for the residue of these compounds in the steel."

> "Analysis of the WTC steel for the elements in thermite/thermate would not necessarily have been conclusive. The metal compounds also would have been present in the construction materials making up the WTC towers, and sulfur is present in the gypsum wallboard that was prevalent in the interior partitions."

**Puffs of dust / piston effect (Q32):**

> "No. As stated in Section 6.14.4 of NIST NCSTAR 1, the falling mass of the building compressed the air ahead of it—much like the action of a piston—forcing smoke and debris out the windows as the stories below failed sequentially."

**Floor-capacity argument (Q18) (digest's "~11 floors static / ~6 sudden"):**

> "The vertical capacity of the connections supporting an intact floor below the level of collapse was adequate to carry the load of 11 additional floors if the load was applied gradually and 6 additional floors if the load was applied suddenly (as was the case)."

**Cores stood longer (Q31) (digest's "15–25 s"):**

> "From video evidence, significant portions of the cores of both buildings (roughly 60 stories of WTC 1 and 40 stories of WTC 2) are known to have stood 15 to 25 seconds after collapse initiation before they, too, began to collapse."

**Seismic (Q30) (relevant to C14 and the Lamont source below):**

> "There were no seismic signals that occurred prior to the initiation of the collapse of either tower. The seismic record contains no evidence that would indicate explosions occurring prior to the collapse of the towers."

- **Recommendation:** `ai_verified`
- **verificationNote:** FAQ fetched live 2026-08-26; no-residue-testing rationale (incl. sulfur-in-gypsum), "readily explained" propagation, piston/puffs explanation, 11-static/6-sudden floor capacity, and no-pre-collapse-seismic-signal statements confirmed verbatim.

### Discrepancies vs. the digest

1. **The fireproofing counterfactual ("neither tower would have collapsed…") is NOT on
   this FAQ page.** It is in NCSTAR 1 itself (see source 4). Digest C12 lists S-N6
   among its sources; the counterfactual should cite S-N5 (NCSTAR 1), not the FAQ.
2. The digest's paraphrase "floor-capacity sufficiency argument" is accurate; exact
   figures confirmed above.

---

## 4. NIST NCSTAR 1 — towers final report (S-N5)

- **Canonical URLs:**
  - Landing page (resolves): `https://www.nist.gov/publications/federal-building-and-fire-safety-investigation-world-trade-center-disaster-final-report`
  - DOI: `https://doi.org/10.6028/NIST.ncstar.1`
  - PDF (fetched and read in full-text): `https://nvlpubs.nist.gov/nistpubs/Legacy/NCSTAR/ncstar1.pdf`
- **How verified:** direct fetch of landing page + direct download of the PDF
  (21.7 MB); quoted from the PDF. (Note: the PDF's text layer is an OCR layer with
  occasional artifacts, e.g. "September 1 1" for "September 11"; quotes below preserve
  the visible artifacts where they occur.)
- **Metadata:** Shyam-Sunder, S., et al., *Federal Building and Fire Safety
  Investigation of the World Trade Center Disaster: Final Report of the National
  Construction Safety Team on the Collapses of the World Trade Center Towers (NIST
  NCSTAR 1)*, NIST. Landing page states "Published December 1, 2005"; the FAQ states
  the final report "was issued on Oct. 26, 2005."

### Verified content

**Fireproofing counterfactual (Executive Summary, p. xxxviii; OCR artifacts preserved):**

> "The WTC towers likely would not have collapsed under the combined effects of aircraft impact damage and the extensive, multi-floor fires that were encountered on September 1 1 2001, if the themial insulation had not been widely dislodged or had been only minimally dislodged by aircraft impact."

(The garbled "themial" is an OCR artifact for "thermal"; "September 1 1" for
"September 11".) Restated in Chapter 6, §6.14.5 conclusions, p. 149:

> "The towers likely would not have collapsed under the combined effects of aircraft impact and the subsequent multi-floor fires encountered on September 1 1 if the thermal insulation had not been widely dislodged or had been only minimally dislodged by aircraft impact."

And the no-impact companion finding (p. 149):

> "In the absence of structural and insulation damage, a conventional fire substantially similar to or less intense than the fires encountered on September 1 1, 2001, likely would not have led to the collapse of a WTC tower."

**Impact-simulation damage summaries:**

WTC 1 (Chapter 2, pp. 22–23):

> "35 exterior columns severed, 2 heavily damaged."
> "6 core columns severed, 3 heavily damaged."
> "43 of 47 core columns stripped of insulation on one or more floors."
> "Insulation stripped from trusses covering 60.000 ft' of floor area."

(OCR artifact: "60.000 ft'" = 60,000 ft².)

WTC 2 (Chapter 2, p. 41):

> "33 exterior columns severed, 1 heavily damaged."
> "10 core columns severed, 1 heavily damaged."
> "39 of 47 core columns stripped of insulation on one or more floors."
> "Insulation stripped from tmsses covering 80,000 ft" of floor area"

**No-demolition finding (Executive Summary, p. xxxviii):**

> "NIST found no corroborating evidence for altemative hypotheses suggesting that the WTC towers were brought down by controlled demolition using explosives planted prior to September 1 1, 2001. NIST also did not find any evidence that missiles were fired at or hit the towers."

- **Recommendation:** `ai_verified`
- **verificationNote:** Landing page, DOI, and official NIST PDF fetched 2026-08-26; both fireproofing counterfactual statements (ES p. xxxviii and §6.14.5 p. 149) and the WTC 1/WTC 2 impact-damage summaries (35/6 and 33/10 severed columns; 60,000/80,000 ft² truss insulation stripped) confirmed against the PDF.

### Discrepancies vs. the digest

1. **The counterfactual says "likely would not have collapsed", not "would not have
   collapsed."** Digest C12 ("NIST concluded neither tower would have collapsed had
   the fireproofing not been dislodged") drops NIST's own hedge. The frozen claim
   wording should keep "likely".
2. Publication-date wrinkle: NIST's landing page says December 1, 2005; NIST's own
   FAQ says the final report was issued October 26, 2005. Cite "October 2005 (final
   report); landing page dated December 1, 2005."
3. Digest's impact-sim summary ("35/33 exterior columns severed; 6/10 core;
   fireproofing stripped over 60,000–80,000 ft²") checks out, with the precision that
   the 60,000/80,000 ft² figures are for truss insulation specifically, and core-column
   stripping is counted separately (43/47 and 39/47).

---

## 5. NIST 2008 news release (S-N3)

- **Canonical URL (resolves):** `https://www.nist.gov/news-events/news/2008/08/nist-wtc-7-investigation-finds-building-fires-caused-collapse`
- **How verified:** direct fetch, 2026-08-26.
- **Metadata:** "NIST WTC 7 Investigation Finds Building Fires Caused Collapse —
  Report and Recommendations for Improving Building Safety Released for Comment",
  NIST news release, August 21, 2008 (footer: "Released August 21, 2008, Updated
  February 3, 2025").

### Verified content (verbatim)

> "This was the first known instance of fire causing the total collapse of a tall building, the agency stated as it released for public comment its WTC investigation report and 13 recommendations for improving building and fire safety."

Shyam Sunder quotes:

> "'Our study found that the fires in WTC 7, which were uncontrolled but otherwise similar to fires experienced in other tall buildings, caused an extraordinary event,' said NIST WTC Lead Investigator Shyam Sunder. 'Heating of floor beams and girders caused a critical support column to fail, initiating a fire-induced progressive collapse that brought the building down.'"

> "'Video and photographic evidence combined with detailed computer simulations show that neither explosives nor fuel oil fires played a role in the collapse of WTC 7,' Sunder said."

Blast-sound statement:

> "The team said that the smallest blast event capable of crippling the critical column would have produced a 'sound level of 130 to 140 decibels at a distance of half a mile,' yet no noise this loud was reported by witnesses or recorded on videos."

Sprinkler counterfactual:

> "The investigators also reported that if the city water main had not been cut by the collapse of World Trade Center towers 1 and 2 (WTC 1 and WTC 2), operating sprinklers in WTC 7 would likely have prevented its collapse."

- **Recommendation:** `ai_verified`
- **verificationNote:** Release fetched live 2026-08-26; existence, date (Aug 21, 2008), Sunder quotes, and blast-sound statement confirmed — note this release announces the DRAFT report for public comment, not the November 2008 final.

### Discrepancies vs. the digest

1. **This is the draft-report release (Aug 21, 2008).** The final report is the
   November 2008 NCSTAR 1A (landing page: Nov 20, 2008; FAQ Q6: "final report on WTC 7
   issued on Nov. 23, 2008" — NIST's own pages differ by three days; record both, rely
   on neither as exact). B2's separate URL for a November final-release item
   (`…/2008/11/nist-releases-final-wtc-7-investigation-report`) was not checked in
   this batch.
2. The release's "first known instance" phrasing ("fire causing the total collapse of
   a tall building") differs slightly from NCSTAR 1A's ("total collapse of a tall
   building primarily due to fires") and the FAQ's ("brought down primarily by
   uncontrolled fires"). Pick the report wording when quoting, and label the variant
   by source.

---

## 6. NIST "Response to Comments" publication (S-N9)

- **Canonical URL (resolves):** `https://www.nist.gov/publications/response-comments-national-institute-standards-and-technology-investigation-2001-world`
- **How verified:** direct fetch of the NIST landing page, 2026-08-26. (The paper
  itself, behind the journal DOI, was not fetched.)
- **Metadata:** Gann, R., Hamins, A., McAllister, T., McGrattan, K., Pitts, W., and
  Prasad, K. (2014), "Response to Comments on the National Institute of Standards and
  Technology Investigation of the 2001 World Trade Center Fires." Landing page
  citation field says *Journal of Fire Sciences*, DOI
  `https://doi.org/10.1177/0734904114528457`, published April 15, 2014.

### What it actually is (verbatim from the NIST abstract)

> "The editor of a special issue of Fire Technology invited the NIST authors to address the NIST Investigation of the WTC disaster and associated practice and research progress in the 10 years since then. The three published papers are a summary of the extensive investigation of the collapses of the WTC 1, WTC 2, and WTC 7 buildings. Professors Quintiere and Williams have a hypothesis of the WTC 1 and WTC 2 collapses that differs from the accumulated evidence and performed analyses in the NIST reports. This letter provides citations to the documentation of aspects of the Investigation that Profs. Quintere and Williams wrongly assert were not considered or were considered incorrectly in the NIST investigation. NIST stands by its findings."

- **Recommendation:** `ai_verified` (for existence and identity); the letter's contents remain unquoted.
- **verificationNote:** NIST landing page fetched live 2026-08-26; confirmed to be a 2014 journal letter by NIST authors (Gann et al.) replying to a Quintiere/Williams critique — DOI 10.1177/0734904114528457.

### Discrepancies vs. the digest

1. **B2's characterization ("expert criticism + official rebuttal side-by-side") is
   inaccurate.** This is a reply letter by NIST authors to a specific published
   critique (Quintiere & Williams), not a side-by-side comment-and-response
   compendium. If the case wants the public-comment record on the WTC 7 draft report,
   that is a different document set.
2. Internal metadata oddity: the NIST abstract says the venue context is a *Fire
   Technology* special issue while the citation field says *Journal of Fire Sciences*
   (where the letter appeared). Record the journal as *Journal of Fire Sciences* per
   the citation and DOI prefix (10.1177 = SAGE).

---

## 7. Quick v. NIST (S-Q1)

- **Canonical URL (resolves, PDF downloaded):** `https://www.govinfo.gov/content/pkg/USCOURTS-dcd-1_09-cv-02064/pdf/USCOURTS-dcd-1_09-cv-02064-0.pdf`
- **How verified:** direct download of the 22-page opinion PDF from govinfo.gov;
  quoted from the PDF.
- **Metadata:** *Michael Quick v. United States Department of Commerce, National
  Institute of Standards and Technology*, Civil Action No. 09-02064 (CKK), U.S.
  District Court for the District of Columbia, Memorandum Opinion, April 7, 2011
  (header: "Case 1:09-cv-02064-CKK Document 24 Filed 04/07/11"). Judge: Colleen
  Kollar-Kotelly (initials CKK).

### Verified content (verbatim; page numbers are the opinion's printed pages)

**Nature of the case (p. 1):**

> "Plaintiff Michael Quick ('Quick') commenced this action against the National Institute of Standards and Technology ('NIST'), an agency of the United States Department of Commerce, under the Freedom of Information Act ('FOIA'), 5 U.S.C. § 552, seeking the disclosure of the raw data that NIST used in its architectural and engineering modeling of the collapse of the World Trade Center 7 ('WTC 7') building on September 11, 2001."

**Director's finding (p. 4):**

> "On July 9, 2009, the Director of NIST issued a formal finding pursuant to the NCSTA providing that the public disclosure of certain information gathered by NIST in connection with its investigation into the collapse of the WTC 7 building 'might jeopardize public safety.'"

**File counts (pp. 4–5):**

> "Overall, NIST produced a total of 25,644 data files responsive to Quick's request and withheld a total of 68,500 data files. Def.'s Stmt. ¶ 5; Pl.'s Stmt. ¶ 13. NIST invoked FOIA Exemption 3 as the basis for the non-disclosure of all 68,500 data files withheld."

The 91,114 figure appears separately (p. 17):

> "…individuals with the requisite technical expertise and familiarity with the raw data were required to individually review the 91,114 potentially responsive data files, sharply curtailing the number of competent staff available to participate."

**Statutory basis (p. 8) — NCST Act §7(d), codified at 15 U.S.C. § 7306(d):**

> "Of particular relevance here, the NCSTA expressly precludes NIST from 'publicly releas[ing] any information it receives in the course of an investigation . . . if the Director finds that the disclosure of that information might jeopardize public safety.' 15 U.S.C. § 7306(d)."

**What was withheld and why (p. 8):**

> "…the released data files contain structural models based on information generally available to building designers and engineers, whereas the withheld data files contain information that could be used to predict the collapse of a building and, if made available to a person with the appropriate level of expertise, would provide instruction to individuals wanting to learn how to simulate building collapses and how to most effectively destroy large buildings."

**Holding (p. 1):**

> "…the Court shall grant NIST's Motion for Summary Judgment, deny Quick's Cross-Motion…"

- **Recommendation:** `ai_verified`
- **verificationNote:** Opinion PDF fetched from govinfo.gov 2026-08-26; case identity, April 7, 2011 date, 25,644 released / 68,500 withheld / 91,114 potentially responsive, the "might jeopardize public safety" language, and the 15 U.S.C. § 7306(d) (NCST Act §7(d)) basis all confirmed verbatim.

### Discrepancies vs. the digest

1. **The arithmetic does not reconcile inside the opinion itself:** 25,644 released +
   68,500 withheld = 94,144, but the opinion elsewhere says 91,114 "potentially
   responsive" files were reviewed. Digest C06's "withheld approximately 68,500 of
   ~91,114 responsive… files" is a fair reading but should not present 68,500/91,114
   as an exact fraction; the safest claim wording quotes the three numbers as the
   opinion gives them, without forcing them to add up.
2. Note the Director's §7(d) finding date is **July 9, 2009** (digest says "a July
   2009 NCST Act §7(d) finding" — consistent).

---

## 8. Lamont-Doherty seismology page (S-L1)

- **Canonical URL:** `https://lamont.columbia.edu/news/morning-shook-world-seismology-911`
  — **live URL is bot-walled** (Cloudflare "verifying you are not a bot" interstitial;
  content unreachable by this agent).
- **How verified:** archive.org Wayback snapshot dated **2025-10-11**
  (`http://web.archive.org/web/20251011045901/https://lamont.columbia.edu/news/morning-shook-world-seismology-911`),
  fetched 2026-08-26.
- **Metadata:** "A Morning That Shook the World: The Seismology of 9/11",
  Lamont-Doherty Earth Observatory (Columbia University), by Kevin Krajick; "A version
  of this story was first published in September 2016 … updated … to mark the 20th
  anniversary" (i.e., 2021). This is a news/feature article, not the primary LDEO
  report; the primary report it describes is Kim et al., published by AGU (*Eos
  Transactions*) in November 2001.

### Verified content (verbatim from the snapshot)

**Impact times:**

> "The seismologists determined that the planes had hit the towers at 8:46:26 and 9:02:54, give or take a few seconds—in the case of the first strike, about 2 minutes earlier than first reported by media."

**Impact magnitudes:**

> "The jet strikes generated seismic waves comparable to small earthquakes of magnitudes 0.9 and 0.7 respectively—probably only a small part of the total energy generated when the planes hit the buildings."

**Collapse times and the ~10 s measurement-chain difference:**

> "According to the seismic data, the collapse of the South Tower came at 9:59:04. The North Tower came down at 10:28:31. Some federal investigators put the times about 10 seconds earlier, but they apparently measured from when the buildings began pancaking from the top; the seismologists pinpointed when they hit bottom. The South Tower collapse generated seismic waves comparable to a magnitude 2.1 earthquake. The fall of the North Tower, a half-hour later, generated the most powerful wave of the day, corresponding to a magnitude 2.3 earthquake."

**WTC 7:**

> "The nearby 7 World Trade Center came down at 5:20:33 pm, and the instruments picked that up, too. 'It was more gradual than the big towers,' said Kim."

**The only "extra signals" discussion (quarry blasts, not pre-collapse explosions):**

> "Later, when Kim looked back over the New York City data, something popped out that dumbfounded him. Interspersed around the plane impacts and the fall of the towers were five or six smaller seismic signals. At first he thought they were incremental collapses. But he tracked their locations to a line of sites along a formation of hard rock in northern New Jersey. He had seen these before many times: dynamite blasts at rock quarries."

**Primary-report pointer:**

> "Their first official product, coauthored by 12 Lamont seismologists and grad students, was a November 2001 paper published by the American Geophysical Union, It described the waves generated by the attacks, their potential effects, and the precise timing of each event."

- **Recommendation:** `ai_verified` (via Wayback snapshot 2025-10-11; live page bot-walled)
- **verificationNote:** Verified against Wayback snapshot of 2025-10-11 (live page behind Cloudflare); impact times 8:46:26/9:02:54 and collapse timing/magnitudes confirmed, but the page does NOT explicitly state "no pre-collapse spikes."

### Discrepancies vs. the digest

1. **The page does not state "no pre-collapse spikes."** The digest (§5.4, and C14's
   "no seismic pre-collapse spikes (Lamont-Doherty)") attributes that negative finding
   to this page. The page's closest material is the quarry-blast anecdote (extra
   signals identified as New Jersey quarry blasts, not tower events). The explicit
   no-pre-collapse-signal statement is NIST's (Towers FAQ Q30, quoted under source 3),
   which cites seismic records. For C14, either cite NIST FAQ Q30, or locate and cite
   the primary Kim et al. 2001 *Eos* paper (not fetched in this batch — the page names
   it but gives no link).
2. **WTC 7 collapse-time chain:** LDEO gives 5:20:33 p.m. (seismic), NIST gives
   5:20:52 p.m. (video). Same class of measurement-chain divergence the digest already
   flags for the impact times; extend that note to WTC 7 so C01's "about 5:20 p.m."
   stays chain-agnostic.
3. This is a feature article (journalism-adjacent, on the observatory's own site) —
   per CONTENT_POLICY it should point the pipeline at the primary Kim et al. report
   rather than carry weight itself.

---

## 9. FEMA 403 — WTC Building Performance Study, May 2002 (S-C1 / S-F1)

- **Canonical URLs (FEMA original hosting confirmed to exist):**
  - Appendix C: `https://www.fema.gov/pdf/library/fema403_apc.pdf`
  - Chapter 5: `https://www.fema.gov/pdf/library/fema403_ch5.pdf`
  - (Sibling chapters confirmed present under the same path, e.g. `fema403_ch8.pdf`,
    `fema403_apd.pdf`, `fema403_apf.pdf`.)
- **How verified:** fema.gov serves these paths but **blocks non-browser fetches**
  (Akamai "Access Denied" to direct download in this environment). Verified via
  archive.org Wayback snapshots **of the fema.gov URLs themselves**: Appendix C
  snapshot **2026-08-16** (`web.archive.org/web/20260816121823/...fema403_apc.pdf`,
  7-page PDF) and Chapter 5 snapshot **2026-04-20**
  (`web.archive.org/web/20260420064727/...fema403_ch5.pdf`, 25-page PDF). Both PDFs
  downloaded and quoted from directly.
- **Metadata:** FEMA 403, *World Trade Center Building Performance Study: Data
  Collection, Preliminary Observations, and Recommendations*, FEMA, May 2002.
  Appendix C: "Limited Metallurgical Examination", authors listed on p. C-1: Jonathan
  Barnett, Ronald R. Biederman, R. D. Sisson, Jr. (WPI affiliation not printed on the
  appendix pages fetched).

### Verified content — Appendix C (verbatim; locators are the printed C-page numbers)

**Sulfidation/eutectic observation (§C.2, p. C-1):**

> "Evidence of a severe high temperature corrosion attack on the steel, including oxidation and sulfidation with subsequent intergranular melting, was readily visible in the near-surface microstructure. A liquid eutectic mixture containing primarily iron, oxygen, and sulfur formed during this hot corrosion attack on the steel."

**Sample 1 summary (§C.3, p. C-5):**

> "1. The thinning of the steel occurred by a high-temperture corrosion due to a combination of oxidation and sulfidation.
> 2. Heating of the steel into a hot corrosive environment approaching 1,000 °C (1,800 °F) results in the formation of a eutectic mixture of iron, oxygen, and sulfur that liquefied the steel.
> 3. The sulfidation attack of steel grain boundaries accelerated the corrosion and erosion of the steel."

("temperture" is as printed in the PDF text layer.)

**The sulfur-source sentence and the recommendation (§C.6 "Suggestions for Future Research", p. C-13):**

> "The severe corrosion and subsequent erosion of Samples 1 and 2 are a very unusual event. No clear explanation for the source of the sulfur has been identified. The rate of corrosion is also unknown. It is possible that this is the result of long-term heating in the ground following the collapse of the buildings. It is also possible that the phenomenon started prior to collapse and accelerated the weakening of the steel structure. A detailed study into the mechanisms of this phenomenon is needed to determine what risk, if any, is presented to existing steel structures exposed to severe and long-burning fires."

**Sample identities (§C.1, p. C-1):**

> "Two structural steel members with unusual erosion patterns were observed in the WTC debris field. The first appeared to be from WTC 7 and the second from either WTC 1 or WTC 2."

### Verified content — Chapter 5 (WTC 7)

**Water main and no-firefighting (§5.6.1, p. 5-24):**

> "WTC 7 collapsed approximately 7 hours after the collapse of WTC 1. Preliminary indications were that, due to lack of water, no manual firefighting actions were taken by FDNY."

**Water main detail (p. 5-21):**

> "It appeared that water on site was limited due to a 20-inch broken water main in Vesey Street. Although WTC 7 was sprinklered, it did not appear that there would have been a sufficient quantity of water to control the growth and spread of the fires on multiple floors. In addition, the firefighters made the decision fairly early on not to attempt to fight the fires, due in part to the damage to WTC 7 from the collapsing towers. Hence, the fire progressed throughout the day fairly unimpeded by automatic or manual suppression activities."

**FEMA's own uncertainty (§5.7 "Observations and Findings", ~p. 5-31):**

> "The specifics of the fires in WTC 7 and how they caused the building to collapse remain unknown at this time. Although the total diesel fuel on the premises contained massive potential energy, the best hypothesis has only a low probability of occurrence. Further research, investigation, and analyses are needed to resolve this issue."

- **Recommendation:** `ai_verified` (via Wayback snapshots of the fema.gov originals: App C 2026-08-16, Ch 5 2026-04-20; live fema.gov paths exist but reject non-browser clients)
- **verificationNote:** FEMA-original PDFs (fema.gov/pdf/library/) obtained via Wayback; Appendix C sulfidation/eutectic language, the exact "No clear explanation for the source of the sulfur has been identified." sentence (p. C-13), the further-study recommendation, and Chapter 5's no-manual-firefighting/water-main statements all confirmed verbatim.

### Discrepancies vs. the digest

1. **Appendix C does not propose gypsum or acid rain as candidate sulfur sources.**
   Digest C08's parenthetical "(gypsum, acid rain per the authors)" is not supported by
   the appendix text (0 hits for gypsum/acid). The gypsum-as-sulfur-source point is
   NIST's (Towers FAQ Q29; WTC 7 FAQ Q34), not Appendix C's. Appendix C's own stated
   possibilities are about *when* the corrosion occurred (long-term heating in the
   ground vs. before collapse), not the sulfur's source. Fix before freezing C08.
2. Digest C08 says the appendix documented sulfidation "on one WTC 7 beam and one
   tower column" — Appendix C supports this ("The first appeared to be from WTC 7 and
   the second from either WTC 1 or WTC 2"; Sample 2 is "thought to be" from a column
   member), but note the hedged identifications ("appeared to be", "thought to be").
3. The digest's mirrors (printernational.co.uk, 911research.wtc7.net) are unnecessary:
   the FEMA originals exist at fema.gov and in Wayback captures of fema.gov. Cite the
   fema.gov URL with the Wayback snapshot as the access path.

---

## 10. Plasco Building collapse, Tehran 2017 (S-P1)

Two candidate primary references checked; recommend the second as the anchor.

### 10a. Khan et al. 2021 (PolyU modeling paper, Part I)

- **URL (resolves, PDF downloaded):** `https://ira.lib.polyu.edu.hk/bitstream/10397/92432/1/Khan_Modeling_Collapse_Plasco.pdf`
- **How verified:** direct download from the PolyU institutional repository,
  2026-08-26. The file is the accepted manuscript ("This is the Pre-Published
  Version."); version of record at `https://doi.org/10.1007/s12273-021-0825-4`.
- **Metadata:** A. Khan, R. Domada, X. Huang, M. Khan, A. Usmani (2021), "Modeling the
  Collapse of the Plasco Building Part I: Reconstruction of Fire", *Building
  Simulation*.
- **Verified content (verbatim):**

> "A fire broke out on 19 January 2017 at the north-western corner of the 10th floor of the 16-story Plasco Building, which led to the collapse of the building."

> "No fire protection coating was provided to any structural components or the verticals shaft containing the staircase"

> "In the building, there was no automatic sprinkler system installed (which was not a mandatory requirement at the time of construction), and the standpipe was not operational."

> "The realistic thermal data allows understanding the reasons for the total collapse of the Plasco Building…"

  Structural material (§4, materials): "carbon steel (for trusses and columns) and
  concrete (slabs) are taken from Eurocode 3."

- **Limitation:** this Part I paper does **not** state the firefighter death toll (its
  only fatality figure, "48 fatalities", refers to a historical comparison fire cited
  to Malholtra and Hinkley 1981).

### 10b. Ahmadi et al. 2020, Fire Technology (recommended anchor)

- **URL (resolves):** `https://link.springer.com/article/10.1007/s10694-019-00903-y`
  — DOI `https://doi.org/10.1007/s10694-019-00903-y`
- **How verified:** direct fetch of the Springer article page (abstract and metadata),
  2026-08-26. Full text not fetched (paywall not tested).
- **Metadata:** Ahmadi, M.T., Aghakouchak, A.A., Mirghaderi, R., Tahouni, S.,
  Garivani, S., Shahmari, A., Epackachi, S., "Collapse of the 16-Story Plasco Building
  in Tehran due to Fire", *Fire Technology* 56, 769–799 (2020); published 13 September
  2019. Authors at Tarbiat Modares University, University of Tehran, Amirkabir
  University of Technology, University of Bojnord — this is the Iranian
  investigation-team paper (references the national Plasco incident committee
  reports).
- **Verified content (verbatim, from the abstract):**

> "On January 19, 2017 an accidental fire, which started by an electric shorting, resulted in the complete collapse of the 16-storey Plasco Building in Tehran. Twenty-two people including sixteen firefighters were killed in that incident."

> "Based on these information and some engineering judgments, the paper summarizes the sequence of events from the start of the fire to final collapse, almost 3.5 h later, and the inferred scenario explaining how the structure collapsed completely."

- **Recommendation:** `ai_verified` for both (10a from the full PDF; 10b from the
  Springer abstract/metadata page). Use **Ahmadi et al. 2020 (Fire Technology)** as
  the primary anchor for the basic facts (date, complete collapse, 16 firefighters
  among 22 dead), with Khan et al. 2021 as the modeling companion (steel-framed,
  unprotected steel, no sprinklers, fire-induced total collapse).
- **verificationNote (10a):** PolyU accepted-manuscript PDF fetched 2026-08-26; date (19 Jan 2017), 16-story steel-framed structure, unprotected steel, no sprinklers, and total collapse confirmed — no casualty figures in this paper.
- **verificationNote (10b):** Springer page fetched 2026-08-26; abstract confirms accidental electrical fire, complete collapse, and "Twenty-two people including sixteen firefighters were killed."

### Discrepancies vs. the digest

1. None substantive; the digest lists only the Khan PDF and Wikipedia. Add Ahmadi et
   al. 2020 as the casualty/facts anchor since the Khan Part I paper carries no death
   toll. (Contemporary wire reporting initially said "20 firefighters" — the
   peer-reviewed investigation figure is 16 firefighters + 6 civilians = 22; use the
   latter.)
2. For H1/C04 use ("replicated as a class by Tehran's Plasco collapse"): both papers
   support "fire-induced total collapse of an unprotected steel-framed high-rise";
   neither claims structural similarity to WTC 7's framing system. Keep the claim at
   the mechanism-class level.

---

## Batch summary

| # | Source | Result | Label |
|---|---|---|---|
| 1 | NCSTAR 1A (report PDF) | verified in full; A2001 designation absent | `ai_verified` |
| 2 | NIST WTC 7 FAQ | verified; C09 framing overstates NIST's claim | `ai_verified` |
| 3 | NIST Towers FAQ | verified; fireproofing counterfactual not on this page | `ai_verified` |
| 4 | NCSTAR 1 (report PDF) | verified; "likely" hedge must be kept | `ai_verified` |
| 5 | NIST 2008 news release | verified; it is the DRAFT-report release | `ai_verified` |
| 6 | Response to Comments | identity confirmed (2014 reply letter); B2 mischaracterized | `ai_verified` |
| 7 | Quick v. NIST opinion | verified; internal count arithmetic doesn't reconcile | `ai_verified` |
| 8 | Lamont-Doherty page | verified via Wayback 2025-10-11; "no pre-collapse spikes" NOT stated there | `ai_verified` |
| 9 | FEMA 403 App C + Ch 5 | verified via Wayback of fema.gov originals; gypsum/acid-rain attribution wrong | `ai_verified` |
| 10 | Plasco (Khan 2021 + Ahmadi 2020) | verified; use Ahmadi for casualties | `ai_verified` |

**Not verified in this batch (explicitly out of scope or unreachable):** NIST NCSTAR
1-9 (needed for the A2001 designation and §12.5.3 descent detail); the B2 November
2008 final-release news item; the primary Kim et al. 2001 *Eos* seismology paper; the
full text of the 2014 Response-to-Comments letter; FEMA 403 chapters other than 5/8
and appendices other than C.
