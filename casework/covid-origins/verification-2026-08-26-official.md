# Citation verification — WHO and US intelligence assessments (SARS-CoV-2 origins)

**Run date:** 2026-08-26
**Verifier:** AI citation-verification worker (Cursor cloud agent), against live primary
documents fetched during this run.
**Scope:** the ten official-body sources in
`digest-case-construction-2026-08-26.md` §5.2–5.3 assigned to this batch.
**Standing under `docs/CONTENT_POLICY.md`:** everything below is at most
`ai_verified` — AI-checked citation, no human re-check. Nothing here is `verified`.

## How to read this file

- **VERBATIM QUOTE** blocks are literal text from a document I actually fetched and
  extracted in this run. Page locators are stated as *printed page* (the number on the
  page) with the *PDF page index* given where the two differ.
- Where the digest's characterization differs from the document, the difference is
  recorded under **Discrepancies**. Several of these are material.
- Local working copies were extracted with `pdftotext -layout` under `/tmp/verify`
  (ephemeral). SHA-256 digests of the exact PDF bytes I read are recorded so a later
  re-check can confirm it read the same file.

## Batch summary

| # | Source | Recommendation | Note |
| --- | --- | --- | --- |
| 1 | ODNI, WIV/COVID-19 origins links, 23 Jun 2023 | `ai_verified` | Full text verified; two digest quotes misworded, one misattributed from the 2021 report |
| 2 | ODNI updated assessment, Oct 2021 | `ai_verified` | Agency split and confidence levels verified verbatim |
| 3 | WHO SAGO independent assessment, Jun 2025 | `ai_verified` | Key passages verified; two digest quotes are **not in the document** |
| 4 | WHO DG remarks, 27 Jun 2025 | `ai_verified` | Verified verbatim from live who.int |
| 5 | WHO-China joint study report, Mar 2021 | `ai_verified` | Verified; the cited PDF is the 6 Apr 2021 corrected version |
| 6 | SAGO preliminary report, 9 Jun 2022 | `ai_verified` | Verified, with a three-member dissent the digest omits |
| 7 | CIA assessment, Jan 2025 | `ai_verified` (as a spokesperson statement) | No cia.gov page exists; wording verified across outlets — ONE source |
| 8 | HHS OIG audit A-05-21-00025, Jan 2023 | `ai_verified` | Report number, date, findings verified verbatim |
| 9 | NIH statement on origins misinformation, 20 Oct 2021 | `ai_verified` | Canonical nih.gov URL identified; staging URL must not be cited |
| 10 | China SCIO white paper, 30 Apr 2025 | `ai_verified` | Exists; positions verified. Government position statement, not evidence |

---

## 1. ODNI — "Potential Links Between the Wuhan Institute of Virology and the Origins of COVID-19" (23 June 2023)

### Canonical URL and how verified

- **Canonical URL:** `https://www.dni.gov/files/ODNI/documents/assessments/Report-on-Potential-Links-Between-the-Wuhan-Institute-of-Virology-and-the-Origins-of-COVID-19-20230623.pdf`
  — this is the correct canonical location and the URL in the digest is correct.
- **Live fetch failed (bot wall):** direct `curl` returns HTTP 403 and the fetch proxy
  returns HTTP 500. `dni.gov` blocks automated clients from this environment. This is a
  bot wall, **not** evidence the document has moved: the Wayback availability API
  reports a successful `200` capture of this exact URL as recently as 2026-05-22.
- **Verified against:** Internet Archive Wayback capture
  `http://web.archive.org/web/20230623234918id_/…` — **snapshot date 23 June 2023,
  23:49:18 UTC**, i.e. the release-day capture. CDX shows 40+ independent `200`
  captures of this URL sharing the same content digest
  (`DQSARMYGX5TYZJU226W6XBJXD63LEBIT`), so the snapshot is not an anomalous capture.
- **File read:** 10 PDF pages, 993,543 bytes, SHA-256
  `5d3837ef89229659ed4d38cbf7dd3e66c70b516630d57c9abec6e4acf07f384d`.

### Metadata

- **Issuing body:** Office of the Director of National Intelligence (US). Header on
  every page: `DECLASSIFIED by DNI Haines on 23 June 2023`.
- **Title:** the document itself carries no title page beyond that header; the title in
  the digest is the ODNI file/report title and is used correctly.
- **Date:** PDF creation 23 Jun 2023 22:23:30 UTC, modified 23 Jun 2023 23:20:39 UTC.
- **Statutory basis and authorship (printed p. 2, PDF p. 3):** "This report responds to
  the COVID-19 Origin Act of 2023 … This report was drafted by the National
  Intelligence Officer for Weapons of Mass Destruction and Proliferation and
  coordinated with the IC."
- **Structure:** Exec summary (p. 2); IC Assessments on COVID-19 Origins (p. 3); WIV
  activities with/for the PLA (p. 3); Coronavirus research at the WIV (pp. 4–5, with
  sub-sections *WIV Coronavirus Research and Holdings*, *WIV Genetic Engineering
  Capabilities*, *Biosafety Concerns at the WIV*); WIV Researchers Who Fell Ill in Fall
  2019 (p. 6); Appendix A: Definitions (pp. 7–9).
- **Page mapping:** PDF p. 1 is a cover bearing only the declassification line; PDF
  p. 2 is the unnumbered-in-TOC contents page printing "1". **Printed page N = PDF page
  N+1.** All locators below are printed pages, with PDF index in parentheses.
- **Redactions:** bullet points begin with blank runs where classification markings
  and/or short lead-ins were removed. Quotes below start at the first surviving word and
  are marked `[…]` where a redaction precedes the text.

### Scope caveat the report places on itself (printed p. 2 / PDF p. 3)

> **VERBATIM:** "This report outlines the IC's understanding of the WIV, its
> capabilities, and the actions of its personnel leading up to and in the early days of
> the COVID-19 pandemic. This report does not address the merits of the two most likely
> pandemic origins hypotheses, nor does it explore other biological facilities in Wuhan
> other than the WIV. A classified annex to this report includes information that was
> necessary to exclude from the unclassified portion of this report in order to protect
> sources and methods, but the information contained in the annex is consistent with the
> unclassified assessments contained in this report."

This is load-bearing and should travel with every citation of this document: the report
explicitly declines to adjudicate between the origin hypotheses.

### (a) The BSL-2 statement and its surrounding caveats — printed p. 5 (PDF p. 6)

Section: **"(U) Biosafety Concerns at the WIV"**, third bullet.

> **VERBATIM:** "[…] As of January 2019, WIV researchers performed SARS-like
> coronavirus experiments in BSL-2 laboratories, despite acknowledgements going back to
> 2017 of these virus' ability to directly infect humans through their spike protein and
> early 2019 warnings of the danger of this practice. Separately, the WIV's plan to
> conduct analysis of potential epidemic viruses from pangolin samples in fall 2019,
> suggests the researchers sought to isolate live viruses."

**Surrounding caveats — same section, lead paragraph (printed p. 5 / PDF p. 6):**

> **VERBATIM:** "[…] Some WIV researchers probably did not use adequate biosafety
> precautions at least some of the time prior to the pandemic in handling SARS-like
> coronaviruses, increasing the risk of accidental exposure to viruses. Before the
> pandemic, the WIV had been working to improve at least some biosafety conditions and
> training. We do not know of a specific biosafety incident at the WIV that spurred the
> pandemic and the WIV's biosafety training appears routine, rather than an emergency
> response by China's leadership."

**Fourth bullet, the 2020 inspection and its explicit caveat (printed p. 5 / PDF p. 6):**

> **VERBATIM:** "[…] An inspection of the WIV's high-containment laboratories in 2020—
> only months after the beginning of the COVID-19 outbreak's emergence—identified a need
> to update aging equipment, a need for additional disinfectant equipment, and
> improvements to ventilation systems. As this inspection occurred in the midst of the
> WIV's crisis response to the COVID-19 outbreak, these findings are not necessarily
> indicative of WIV's biosafety status prior to the outbreak."

**First bullet, BSL-4 accreditation context (printed p. 5 / PDF p. 6):**

> **VERBATIM:** "(U[…] Nearly a year after the accreditation of the WIV's BSL-4
> laboratory in 2017, China's decisions of which pathogens required higher
> biocontainment protocols remained opaque, while the facility had a shortage of
> appropriately trained personnel."

### (b) "probably did not use adequate biosafety precautions at least some of the time" — exact wording

Printed p. 5 (PDF p. 6), lead paragraph of "Biosafety Concerns at the WIV". The exact
string in the document is:

> **VERBATIM:** "Some WIV researchers probably did not use adequate biosafety
> precautions at least some of the time prior to the pandemic in handling SARS-like
> coronaviruses, increasing the risk of accidental exposure to viruses."

The digest's short form — "some researchers 'probably did not use adequate biosafety
precautions at least some of the time'" — is **exact as far as it goes**, but truncates
before the qualifier "prior to the pandemic in handling SARS-like coronaviruses". Any
evidence record should carry the full sentence, because the truncation drops the scope
limitation to SARS-like coronavirus handling.

Note also the closely parallel — but differently worded and *attributed* —
sentence in the October 2021 assessment (see §2, printed p. [8]): "Academic
publications suggest that WIV researchers did not use adequate biosafety precautions at
least some of the time, increasing the risk of a laboratory-associated incident." The
2021 version attributes the judgment to academic publications and omits "probably";
the 2023 version states it as an IC judgment with "probably". These are two different
sentences in two different documents and must not be conflated.

### (c) No indication the WIV held SARS-CoV-2 or a close progenitor — printed p. 4 (PDF p. 5)

Section: **"(U) CORONAVIRUS RESEARCH AND RELATED ACTIVITIES PERFORMED AT THE WIV"**,
lead paragraph.

> **VERBATIM:** "[…] Prior to the pandemic, we assess WIV scientists conducted extensive
> research on coronaviruses, which included animal sampling and genetic analysis. We
> continue to have no indication that the WIV's pre-pandemic research holdings included
> SARS-CoV-2 or a close progenitor, nor any direct evidence that a specific
> research-related incident occurred involving WIV personnel before the pandemic that
> could have caused the COVID pandemic."

Two further statements to the same effect:

**"(U) WIV Genetic Engineering Capabilities", printed p. 4 (PDF p. 5):**

> **VERBATIM:** "[…] We assess that some scientists at the WIV have genetically
> engineered coronaviruses using common laboratory practices. The IC has no information,
> however, indicating that any WIV genetic engineering work has involved SARS-CoV-2, a
> close progenitor, or a backbone virus that is closely-related enough to have been the
> source of the pandemic."

**"(U) WIV Coronavirus Research and Holdings", printed p. 4 (PDF p. 5):**

> **VERBATIM:** "[…] Information available to the IC indicates that the WIV first
> possessed SARS-CoV-2 in late December 2019, when WIV researchers isolated and
> identified the virus from samples from patients diagnosed with pneumonia of unknown
> causes."

### (d) The autumn-2019 sick-researchers passage, including "neither supports nor refutes"

Section **"(U) WIV RESEARCHERS WHO FELL ILL IN FALL 2019"**, printed p. 6 (PDF p. 7).
Lead paragraph:

> **VERBATIM:** "[…] Several WIV researchers were ill in Fall 2019 with symptoms; some
> of their symptoms were consistent with but not diagnostic of COVID-19. The IC
> continues to assess that this information neither supports nor refutes either
> hypothesis of the pandemic's origins because the researchers' symptoms could have been
> caused by a number of diseases and some of the symptoms were not consistent with
> COVID-19. Consistent with standard practices, those researchers likely completed
> annual health exams as part of their duties in a high-containment biosafety laboratory.
> The IC assesses that the WIV maintains blood samples and health records of all of their
> laboratory personnel—which are standard procedures in high-containment laboratories."

**Answer to the specific question asked: yes.** The report says in terms that the
episode "neither supports nor refutes either hypothesis of the pandemic's origins", and
gives its reason (symptom non-specificity).

First bullet, hospitalization (printed p. 6 / PDF p. 7):

> **VERBATIM:** "[…] We have no indications that any of these researchers were
> hospitalized because of the symptoms consistent with COVID-19. One researcher may have
> been hospitalized in this timeframe for treatment of a non-respiratory medical
> condition."

Second bullet, the NSC investigation and blood draws (printed p. 6 / PDF p. 7):

> **VERBATIM:** "[…] China's National Security Commission investigated the WIV in early
> 2020 and took blood samples from WIV researchers. According to the World Health
> Organization's March 2021 public report, WIV officials including Shi Zhengli—who leads
> the WIV laboratory group that conducts coronavirus research—stated lab employee
> samples all tested negative for SARS-CoV-2 antibodies."

Note the provenance chain here: the negative-antibody result is the IC relaying **WIV
officials' statement as recorded in the WHO-China March 2021 report** — an assertion by
its source, twice removed, not an IC finding. Any evidence record must preserve that.

Closing paragraph of the section (printed p. 6 / PDF p. 7):

> **VERBATIM:** "[…] While several WIV researchers fell mildly ill in Fall 2019, they
> experienced a range of symptoms consistent with colds or allergies with accompanying
> symptoms typically not associated with COVID-19, and some of them were confirmed to
> have been sick with other illnesses unrelated to COVID-19. While some of these
> researchers had historically conducted research into animal respiratory viruses, we are
> unable to confirm if any of them handled live viruses in the work they performed prior
> to falling ill."

### (e) The November 2019 biosafety training characterization ("appears routine")

**Two separate statements**, both printed p. 5 (PDF p. 6).

Lead paragraph of "Biosafety Concerns at the WIV":

> **VERBATIM:** "We do not know of a specific biosafety incident at the WIV that spurred
> the pandemic and the WIV's biosafety training appears routine, rather than an emergency
> response by China's leadership."

Second bullet, the specific November 2019 course:

> **VERBATIM:** "[…] In mid-2019, WIV officials were evaluating and implementing
> biosafety improvements, training, and procurements in the context of a growing body of
> broader biosecurity PRC legislation. In November 2019, the WIV, in cooperation with
> other CAS entities, hosted a biosafety training course for WIV and non-WIV personnel
> that included speakers from the China Centers for Disease Control and Prevention. Given
> the timing of the event, this training appears routine, rather than a response to a
> specific incident."

The digest's phrase "appears routine" is exact. Note there are two "appears routine"
constructions with different completions — "rather than an emergency response by
China's leadership" (general) and "rather than a response to a specific incident"
(the November 2019 course). Cite the one you mean.

### (f) The 2017 dissertation demonstrating trace-free cloning — printed p. 5 (PDF p. 6)

Second bullet of "(U) WIV Genetic Engineering Capabilities", which begins on printed
p. 4 and spills onto printed p. 5:

> **VERBATIM:** "[…] Some of the WIV's genetic engineering projects on coronaviruses
> involved techniques that could make it difficult to detect intentional changes. A 2017
> dissertation by a WIV student showed that reverse genetic cloning techniques—which are
> standard techniques used in advanced molecular laboratories—left no traces of genetic
> modification of SARS-like coronaviruses."

First bullet of the same section, printed p. 4 (PDF p. 5):

> **VERBATIM:** "[…] Scientists at the WIV have created chimeras, or combinations, of
> SARS-like coronaviruses through genetic engineering, attempted to clone other unrelated
> infectious viruses, and used reverse genetic cloning techniques on SARS-like
> coronaviruses."

Locator caution: the same finding appears in the **October 2021** assessment at printed
p. [4] with the singular "left no trace" rather than "left no traces". Do not cross-cite.

### (g) Not genetically engineered; not a biological weapon — printed p. 3 (PDF p. 4)

Fourth bullet of "(U) IC ASSESSMENTS ON COVID-19 ORIGINS":

> **VERBATIM:** "[…] Almost all IC agencies assess that SARS-CoV-2 was not genetically
> engineered. Most agencies assess that SARS-CoV-2 was not laboratory-adapted; some are
> unable to make a determination. All IC agencies assess that SARS-CoV-2 was not
> developed as a biological weapon."

Both digest claims confirmed exactly ("almost all" for engineering; "all" for
bioweapon), plus the third clause the digest also carries (most / not laboratory-adapted
/ some unable).

### (h) The agency split, with confidence levels — printed p. 3 (PDF p. 4)

Lead paragraph of "(U) IC ASSESSMENTS ON COVID-19 ORIGINS":

> **VERBATIM:** "In March, the IC updated its analysis on core intelligence questions
> related to COVID-19 origins, to include whether the first human infection with
> SARS-CoV-2—the virus that causes COVID-19—was the result of natural exposure to an
> infected animal or a laboratory-associated incident. Variations in IC analytic views on
> the origins of the COVID-19 pandemic largely stem from differences in how agencies
> weigh intelligence reporting and scientific publications and intelligence and
> scientific gaps. All agencies continue to assess that both a natural and
> laboratory-associated origin remain plausible hypotheses to explain the first human
> infection."

> **VERBATIM (bullets 1–3):** "[…] The National Intelligence Council and four other IC
> agencies assess that the initial human infection with SARS-CoV-2 most likely was caused
> by natural exposure to an infected animal that carried SARS-CoV-2 or a close
> progenitor, a virus that probably would be more than 99 percent similar to
> SARS-CoV-2."
>
> "[…] The Department of Energy and the Federal Bureau of Investigation assess that a
> laboratory-associated incident was the most likely cause of the first human infection
> with SARS-CoV-2, although for different reasons."
>
> "[…] The Central Intelligence Agency and another agency remain unable to determine the
> precise origin of the COVID-19 pandemic, as both hypotheses rely on significant
> assumptions or face challenges with conflicting reporting."

**Important:** the digest's rendering of the split ("NIC + four agencies natural
exposure, DOE and FBI laboratory-associated, CIA and one other unable to decide") is
accurate. **But the confidence levels are not in this document.** The 23 June 2023
report states the split without attaching a confidence level to any of the three groups;
the words "low confidence" and "moderate confidence" do not appear anywhere in it. The
report refers to a **March 2023** IC update ("In March, the IC updated its analysis…")
that it does not reproduce. If a claim in the case needs the per-agency confidence
levels, this document is the wrong citation for them, and the correct source — the
March 2023 update or the individual agencies' own statements — has not been verified in
this run.

Also note the PLA-collaboration section (printed pp. 3–4 / PDF pp. 4–5), relevant to
several digest claims:

> **VERBATIM (printed p. 3 / PDF p. 4):** "[…] The WIV is a civilian research institute
> founded in the 1950s by the Chinese Academy of Sciences (CAS). Although the WIV is
> independent of the People's Liberation Army (PLA), the IC assesses that WIV personnel
> have worked with scientists associated with the PLA on public health-related research
> and collaborated on biosafety and biosecurity projects. Information available to the IC
> indicates that some of the research conducted by the PLA and WIV included work with
> several viruses, including coronaviruses, but no known viruses that could plausibly be
> a progenitor of SARS-CoV-2."

And the RaTG13 / BANAL-52 statement (printed p. 4 / PDF p. 5), first bullet of "WIV
Coronavirus Research and Holdings":

> **VERBATIM:** "[…] In 2013, the WIV collected animal samples from which they
> identified the bat coronavirus RaTG13, which is 96.2 percent similar to the COVID-19
> virus. By 2018, the WIV had sequenced almost all of RaTG13, which is the second closest
> known whole genome match to SARS-CoV-2, after BANAL-52, which is 96.8 percent similar.
> Neither of these viruses is close enough to SARS-CoV-2 to be a direct progenitor."

The report's own definition of "progenitor virus" (Appendix A, printed p. 8 / PDF p. 9)
is what makes that judgment operational and should be cited alongside it:

> **VERBATIM:** "(U) Progenitor Virus: A virus that is closely related enough—more than
> 99 percent–to SARS-CoV-2 to have been its direct ancestor or plausible immediate origin
> of the outbreak. The closest known relative to SARS-CoV-2 is only about 96 percent
> similar; to put this into context, humans and chimps are about 99 percent similar,
> demonstrating the significant differences even at this similarity."

### Recommendation

**`ai_verified`.**

`verificationNote`: Full 10-page text verified against the Internet Archive release-day
capture (23 Jun 2023) of the canonical dni.gov URL; dni.gov itself bot-walls automated
fetches (403/500), so page locators are from the archived PDF (SHA-256 5d3837ef…).

### Discrepancies

1. **Misworded quote — "these viruses' ability".** The digest renders the BSL-2 bullet as
   "despite acknowledgements going back to 2017 of these **viruses'** ability". The
   document reads "these **virus'** ability" (singular possessive, in the original —
   apparently an ODNI typo). Quote the document as printed, or paraphrase; do not
   silently correct.
2. **Misattributed quote — the "no indications" sentence.** The digest attributes to the
   2023 report the phrase "no indications that WIV research involved SARS-CoV-2 or a
   close progenitor virus". That exact string is from the **October 2021** assessment
   (printed p. [8]: "Although the IC has no indications that WIV research involved
   SARS-CoV-2 or a close progenitor virus…"). The 2023 report's equivalent is "We
   continue to have no indication that the WIV's **pre-pandemic research holdings
   included** SARS-CoV-2 or a close progenitor" — a claim about *holdings*, not about
   *research*, and singular "indication". This matters: "research holdings" is a
   narrower and more checkable proposition than "research".
3. **Confidence levels absent.** The digest's §5.3 row for this document is followed by
   confidence-level material elsewhere in the digest; this report supplies none. Do not
   cite it for confidence levels.
4. **Truncated quote drops scope.** "probably did not use adequate biosafety precautions
   at least some of the time" is exact but stops before "prior to the pandemic in
   handling SARS-like coronaviruses".
5. **Scope caveat omitted from the digest row.** The report's own statement that it "does
   not address the merits of the two most likely pandemic origins hypotheses" is not
   recorded in the digest and should be, since the document is cited on both sides.
6. **Mirror URL unverified.** The digest's mirror `https://www.hsdl.org/c/view?docid=879993`
   was not checked in this run. Do not cite it as verified.

---

## 2. ODNI — "Updated Assessment on COVID-19 Origins" (October 2021)

### Canonical URL and how verified

- **URL in digest:** `https://archive.dni.gov/files/ODNI/documents/assessments/Declassified-Assessment-on-COVID-19-Origins.pdf`
  — returns HTTP **403** to direct fetch (bot wall, same as `www.dni.gov`).
- **Preferred canonical URL:** `https://www.dni.gov/files/ODNI/documents/assessments/Declassified-Assessment-on-COVID-19-Origins.pdf`.
  The Wayback availability API reports a `200` capture of the `www.dni.gov` path as
  recently as 2026-07-15, so that path is the live one; `archive.dni.gov` is ODNI's own
  archive host and may or may not still serve it (403 tells us nothing either way).
- **Verified against:** Wayback capture
  `http://web.archive.org/web/20211029192027id_/https://www.dni.gov/…` —
  **snapshot date 29 October 2021, 19:20:27 UTC**. Two later captures exist
  (2021-12-06, 2021-12-10); the 2021-12-10 capture shares the 2021-10-29 content digest.
- **File read:** 18 PDF pages, 1,522,433 bytes, SHA-256
  `a46456bb362705dd9e5c8f23ee1a4c8432a787b95f46cef957fc3907e083e933`. PDF creation
  29 Oct 2021 14:20:11 UTC.
- **Page mapping:** PDF p. 1 is a graphic-only cover with no extractable text; printed
  page markers are bracketed, e.g. `[1]`. **Printed [N] = PDF page N+1.**

### Metadata

- **Issuing body:** Office of the Director of National Intelligence.
- **Title (printed [1]):** "Updated Assessment on COVID-19 Origins".
- **Scope note (printed [1]):** "This assessment responds to the President's request
  that the Intelligence Community (IC) update its previous judgments on the origins of
  COVID-19. It also identifies areas for possible additional research. Annexes include a
  lexicon, additional details on methodology, and comments from outside experts. This
  assessment is based on information through August 2021."

### Agency split and confidence levels — printed [1] (PDF p. 2), "Key Takeaways"

> **VERBATIM:** "After examining all available intelligence reporting and other
> information, though, the IC remains divided on the most likely origin of COVID-19. All
> agencies assess that two hypotheses are plausible: natural exposure to an infected
> animal and a laboratory-associated incident."

> **VERBATIM (bullet 1):** "Four IC elements and the National Intelligence Council
> assess with low confidence that the initial SARS-CoV-2 infection was most likely caused
> by natural exposure to an animal infected with it or a close progenitor virus—a virus
> that probably would be more than 99 percent similar to SARS-CoV-2. These analysts give
> weight to China's officials' lack of foreknowledge, the numerous vectors for natural
> exposure, and other factors."

> **VERBATIM (bullet 2):** "One IC element assesses with moderate confidence that the
> first human infection with SARS-CoV-2 most likely was the result of a
> laboratory-associated incident, probably involving experimentation, animal handling, or
> sampling by the Wuhan Institute of Virology. These analysts give weight to the
> inherently risky nature of work on coronaviruses."

> **VERBATIM (bullet 3):** "Analysts at three IC elements remain unable to coalesce
> around either explanation without additional information, with some analysts favoring
> natural origin, others a laboratory origin, and some seeing the hypotheses as equally
> likely."

> **VERBATIM (bullet 4):** "Variations in analytic views largely stem from differences in
> how agencies weigh intelligence reporting and scientific publications and intelligence
> and scientific gaps."

### Bioweapon and engineering judgments — printed [1] (PDF p. 2)

> **VERBATIM:** "In addition, the IC was able to reach broad agreement on several other
> key issues. We judge the virus was not developed as a biological weapon. Most agencies
> also assess with low confidence that SARS-CoV-2 probably was not genetically
> engineered; however, two agencies believe there was not sufficient evidence to make an
> assessment either way. Finally, the IC assesses China's officials did not have
> foreknowledge of the virus before the initial outbreak of COVID-19 emerged."

Also relevant (printed [4], PDF p. 5), under "Most Analysts Assess SARS-CoV-2 Not
Genetically Engineered":

> **VERBATIM:** "Most IC analysts assess with low confidence that SARS-CoV-2 was not
> genetically engineered. Their assessment is based on technical analysis of SARS-CoV-2
> and the IC's growing understanding of traits and the potential for recombination in
> other coronaviruses. Two agencies believe there is not sufficient evidence to make an
> assessment either way."

And on laboratory adaptation (printed [5], PDF p. 6):

> **VERBATIM:** "No IC analysts assess that SARS-CoV-2 was the result of laboratory
> adaptation, although some analysts do not have enough information to make this
> determination."

### The "no indications" sentence the digest misattributes to the 2023 report — printed [8] (PDF p. 9)

Under "WIV Research Includes Work With Animals That Carry Relatives of SARS-CoV-2":

> **VERBATIM:** "Although the IC has no indications that WIV research involved SARS-CoV-2
> or a close progenitor virus, these analysts note that it is plausible that researchers
> may have unwittingly exposed themselves to the virus without sequencing it during
> experiments or sampling activities, possibly resulting in asymptomatic or mild
> infection."

### The 2019 illnesses, as characterized in 2021 — printed [7] (PDF p. 8)

Sidebar "WIV Illnesses in Fall 2019 Not Diagnostic":

> **VERBATIM:** "The IC assesses that information indicating that several WIV researchers
> reported symptoms consistent with COVID-19 in autumn 2019 is not diagnostic of the
> pandemic's origins. Even if confirmed, hospital admission alone would not be diagnostic
> of COVID-19 infection."

### Recommendation

**`ai_verified`.**

`verificationNote`: Agency split, confidence levels, and bioweapon/engineering judgments
verified verbatim on printed page [1] of the 18-page PDF via Wayback capture 2021-10-29
of the www.dni.gov path; the archive.dni.gov URL in the digest bot-walls (403).

### Discrepancies

1. **Digest URL host.** The digest cites `archive.dni.gov`. Prefer the `www.dni.gov`
   path, which Wayback shows serving `200` as of 2026-07-15. Neither host could be
   fetched live from this environment.
2. **"Others undecided" understates the third group.** The digest's summary is accurate
   but flattens the third bullet, which specifies that *within* the three undecided
   elements "some analysts [favor] natural origin, others a laboratory origin, and some
   [see] the hypotheses as equally likely." That internal split is analytically
   significant and worth preserving.
3. **"Bioweapon hypothesis rejected" is a paraphrase.** The document says "We judge the
   virus was not developed as a biological weapon" — a judgment about development, not a
   "rejection" of a hypothesis. Use the document's wording.

---

## 3. WHO SAGO — "Independent assessment of the origins of SARS-CoV-2" (June 2025)

### Canonical URL and how verified

- **PDF (verified, HTTP 200, direct fetch):**
  `https://cdn.who.int/media/docs/default-source/documents/epp/sago/independent-assessment-of-the-origins-of-sars-cov-2-by-sago.pdf`
  (the digest's `?download=true&sfvrsn=b0f90ad4_6` query string also returns 200).
- **Landing page (verified, HTTP 200):**
  `https://www.who.int/publications/m/item/independent-assessment-of-the-origins-of-sars-cov-2-from-the-scientific-advisory-group-for-the-origins-of-novel-pathogens`
  — both URLs in the digest are correct and live.
- **File read:** 78 PDF pages, 1,007,917 bytes, SHA-256
  `2adb7806dffff08be58e200b1480936ad2e11de40555d68daf8703136d06a75f`. PDF creation
  1 September 2025 09:30:51 UTC — **later than the stated publication date**, explained
  by the revision note below.
- **Page mapping:** cover is PDF p. 1 (unnumbered); PDF p. 2 prints "2". **Printed page
  N = PDF page N** throughout.

### Metadata

- **Issuing body:** World Health Organization / Scientific Advisory Group for the Origins
  of Novel Pathogens (SAGO). Cover: "Scientific Advisory Group for the Origins of Novel
  Pathogens (SAGO) / Independent assessment of the origins of SARS-CoV-2 / Publication
  Date 27 June 2025".
- **Suggested citation (printed p. 3):** "World Health Organization. (2025). Independent
  assessment of the origins of SARS-CoV-2 from the Scientific Advisory Group for the
  Origins of Novel Pathogens (SAGO). Geneva, Switzerland. Available at:
  https://bit.ly/SAGO-SARS-CoV-2 License: CC BY-NC-SA 3.0 IGO."
- **Length:** 78 pages (landing page also states 78).
- **Version:** the landing page carries a revision note, quoted verbatim: "Note: the
  report accessible from this page is an updated version of the report originally
  published on 27 June 2025. The changes made were: correction of the reference of the
  WHO-China 2021 report from WHO, 2020g to WHO,2021c on page 9; and 1. correction of the
  date of collection of the BANAL-52 virus from 2018 to 2020 on page 13". The copy I read
  reflects both corrections.

### (a) "Weight of available evidence suggests zoonotic spillover" — printed p. 58, Conclusion

> **VERBATIM:** "The weight of available evidence reviewed by SAGO suggests zoonotic
> spillover of SARS-CoV-2 into the human population, either directly from bats or through
> an intermediate host. However, SAGO cannot conclude with certainty where and when this
> occurred, nor if the HSM was indeed the first instance of spillover into the human
> population, or the site of further spillover and amplification."

The digest's two fragments — "The weight of available evidence … suggests zoonotic
spillover" and "either directly from bats or through an intermediate host" — are both
exact. Note the digest's ellipsis hides "reviewed by SAGO", which is a real
qualification (the evidence SAGO was permitted to see) and should be retained.

Executive-summary equivalents:

> **VERBATIM (printed p. 10):** "This report will focus on the two main hypotheses. While
> most available and accessible published scientific evidence supports hypothesis #1,
> zoonotic transmission from animals, possibly from bats or an intermediate host to
> humans, SAGO is not currently able to conclude exactly when, where and how SARS-CoV-2
> first entered the human population."

> **VERBATIM (printed p. 12):** "To conclude, while a zoonotic origin with spillover from
> animals to humans is currently considered the best supported hypothesis by the available
> scientific data, until requests for further information are met or more scientific data
> becomes available, the origins of SARS-CoV-2 and how it entered the human population
> will remain inconclusive."

### (b) SAGO could not assess the laboratory hypothesis — printed pp. 58–59, Conclusion

> **VERBATIM (printed p. 58, running into p. 59):** "Information and evidence is also
> lacking to assess the possibility of a laboratory origin - either the evidence is not
> available or has not been provided to the scientific community. As a result, SAGO has
> been unable to adequately assess this route for human infection and therefore is not in
> a position to rule this out as a possibility. Hypotheses submitted to the SAGO or
> available in the public domain on intentional manipulation of the virus however, are not
> supported by accurate science, and not currently considered as the likely source."

The three specific withheld categories, printed p. 58 (immediately preceding the
weight-of-evidence sentence):

> **VERBATIM:** "Throughout the development of this independent assessment, it may be
> obvious to state that SAGO has only been able to analyze evidence made available to them
> and the public. However, SAGO and WHO are aware that more data exists. Some examples of
> this include requests for more information including: a) the sharing of more than 500
> sequences from individuals with COVID-19 early in the pandemic; (China National Center
> for Bioinformation, 2022). b) more detailed information on the sources, locations,
> sampling and testing methods of animals sold at the HSM and other wet markets in Wuhan,
> including upstream farming or illegal trade; and c) information on research and field
> activities in laboratories in Wuhan, including staff health records, biosafety and
> biosecurity information of the Wuhan Institute of Virology, and the Wuhan China CDC
> laboratory."

Discussion-section equivalent, printed p. 57:

> **VERBATIM:** "At the present, it is not possible to assess the possibility of an
> incident occurring in laboratories in Wuhan as SAGO has not had the opportunity to
> formally examine the biosafety and biosecurity protocols and measures that were in place,
> the activities conducted in those facilities, or the health status of staff from late
> 2019. SAGO notes that no evidence has been presented, other than speculation from
> scientific or intelligence reports, that supports a laboratory-related incident causing
> the spread of SARS-CoV-2 into the human population. Without the requested information,
> this hypothesis can however not be ruled out."

Executive-summary equivalent, printed p. 11:

> **VERBATIM:** "Much of the information needed to assess hypothesis #2, of an accidental
> laboratory related event, either during field investigations or a breach in laboratory
> biosafety or biosecurity, has not been made available to WHO or SAGO. WHO has made
> several requests to the Government of China to provide health records of staff and
> documentation on biosafety and biosecurity practices and procedures in laboratories in
> Wuhan, including the Wuhan Institute of Virology (WIV) and the Chinese Centers for
> Disease Control in Wuhan as recommended in the 2022 SAGO Preliminary Report (SAGO,
> 2022). Without information to fully assess the nature of the work on coronaviruses in
> Wuhan laboratories, nor information about the conditions under which this work was done,
> it is not possible for SAGO to assess whether the first human infection(s) may have
> resulted due to a research related event or breach in laboratory biosafety. It can
> therefore not be ruled out, nor can it be proven until more information is provided."

And the report's blanket data-access caveat, printed p. 9:

> **VERBATIM:** "It is important to note that SAGO did not have access to original raw
> data from any source in preparing this report. SAGO and WHO have requested further
> information from Member States, - including the Governments of China, Germany and the
> United States of America. … However, at the time of writing, all of the required
> information had not been provided to WHO."

Note that this last sentence names **three** governments, not only China. The digest's
framing ("could not assess the laboratory hypothesis for lack of provided records")
loses that; it matters for even-handedness, since Germany and the US withheld too.

### (c) Characterization of the wildlife co-location evidence — printed p. 57

> **VERBATIM:** "Currently, the most compelling evidence of a possible spillover from
> animals to humans comes from the independent metagenomic data analysis, which confirmed
> the presence of mitochondrial DNA of animals known to be susceptible in stalls at the
> HSM, and SARS-CoV-2 positive environmental swabs from the same stalls. The data confirms
> that these animals were present before the market was closed on 1 January 2020 and may
> have been a source for human infection. These species should be a focus of ongoing
> investigations into the identification of the intermediate host(s)."

The digest's characterization — "co-location described as the most compelling market
evidence but not proof" — is a **fair paraphrase but not a quote.** The document says
"the most compelling evidence of a possible spillover"; the "not proof" reading follows
from "may have been a source" and from the p. 58 statement that SAGO "cannot conclude
with certainty… nor if the HSM was indeed the first instance of spillover", not from any
sentence saying "not proof".

Related, printed p. 56:

> **VERBATIM:** "Despite some testing of the environment and animals sampled from the
> HSM, there was a limited number of susceptible species included in this testing, thus
> limiting the ability to make definitive conclusions. It is likely that many animals had
> already been removed due to public health measures imposed on 1 January 2020, when the
> market was shut down and disinfected; therefore, they were not traced for sampling."

### (d) The "surprising, considering the many susceptible species present" language — **NOT FOUND AS CLAIMED**

The word **"surprising" does not appear anywhere in the 78-page document** (verified by
exhaustive text search of the extracted text). The phrase "considering the many
susceptible species present" **does** appear, but in a **different argument about a
different subject**. Printed p. 56, discussion point 5:

> **VERBATIM:** "It has been reported to SAGO and WHO that no stored samples from animals
> in China taken before the first identified human cases of COVID-19 (January 2020) were
> SARS-CoV-2-positive (WHO, 2022). This has not been independently verified by SAGO.
> However, it seems unlikely that there have been no animal SARS-CoV-2 reverse zoonotic
> infections in China since the onset of the COVID-19 pandemic (aside from Syrian hamsters
> in Hong Kong Special Administrative Region), considering the many susceptible species
> present there, the reverse zoonoses events reported in various susceptible species around
> the world, and the possibility of exposure to potentially infected animals at source farms
> and the HSM."

What SAGO actually says is: it is **"unlikely"** that there have been **no reverse
zoonotic (human→animal) infections in China since the pandemic began**, given the many
susceptible species **present in China**. That is a statement of scepticism about
China's *post-pandemic animal-testing results*. It is **not** a statement that the
absence of an intermediate host at the market is "surprising". The digest's version
inverts the direction of transmission (reverse zoonosis, not spillover), changes the
referent of "present there" (China, not the market), and substitutes a word the document
does not use. **This claim must not enter the ledger in the digest's form.**

### (e) Genomic features explicable by natural recombination/mutation — printed p. 56

> **VERBATIM (discussion point 4):** "Two other unique features of the SARS-CoV-2 genome
> have been the focus of debate on the origin of SARS-CoV-2. As described in the genomics
> investigations section of this report, evidence around the evolution of the virus
> suggests that these features likely developed through natural evolution in susceptible
> animals and humans due to a propensity for recombination and accumulation of mutations
> associated with coronaviruses, including SARS-CoV-2. Furin cleavage sites occur in other
> human coronaviruses and had been previously identified in nature, for example in
> animal-associated merbecoviruses. This suggests that it could also be acquired in
> sarbecoviruses through natural recombination events between related sarbecoviruses in
> humans or susceptible animals. Based on our knowledge on coronavirus evolution and
> biology, this and other features of SARS-CoV-2 are readily explained by natural evolution
> and provide no support to theories of a man-made origin (Keusch et al., 2022; Sachs et
> al., 2022; Senate Health Education Labor and Pensions Committee Minority Oversight Staff,
> 2022; Marshall, 2023; Rubio, 2023; Office of the Director of National Intelligence, 2021;
> Office of the Director of National Intelligence, 2023). **However, the latter is also not
> refuted by biological data.**"

(Emphasis added by me for the final sentence; the document does not bold it.)

The final sentence is the most important part of this passage and is **absent from the
digest**. SAGO says the genomic features provide *no support* for a man-made origin, and
in the same breath that a man-made origin is *not refuted* by biological data. Any
evidence record using the first half must carry the second.

Executive-summary equivalent, printed p. 10:

> **VERBATIM:** "To evaluate hypothesis #4, of a deliberate manipulation of the virus in a
> laboratory and subsequent biosafety breach, SAGO analysed the genome structure of the
> virus and publications and reports addressing the likelihood of manipulation through
> reverse-genetics but did not find scientific evidence supporting this hypothesis over
> evidence that these mutations and recombination events also occur in coronaviruses in
> nature."

### (f) The two-lineage pattern versus a single lab introduction — **CLAIMED CONTRAST NOT IN THE DOCUMENT**

The digest attributes to SAGO the phrase "what would be expected from a lab leak — which
would be a single virus introduction". **No such sentence exists in the document.** The
strings "lab leak", "would be expected", and "single virus introduction" do not occur in
this configuration; "laboratory leak" appears once (printed p. 41, describing *other
reports* that "have evaluated the possibility of a laboratory leak").

What the document actually says about the lineages:

> **VERBATIM (printed p. 22):** "Based on phylogeny and empirical mutation frequencies,
> initial and updated analyses considering all currently available sequence data, Pekar et
> al. proposed that a single introduction of SARS-CoV-2 into the human population is
> 'highly unlikely' (Pekar et al., 2022; Hensel and Débarre, 2025; Pekar et al., 2025).
> These findings suggest two slightly different but distinct genetic virus variants:
> lineage A and lineage B. Human infection with lineage B is estimated to have occurred
> around 18 November 2019 (range 23 October-8 December) and predates the initial infection
> of humans with lineage A by days to weeks. In view of the inferred extinction rate of
> early lineages, approximately eight precursor lineages (95% Bayesian confidence limits,
> 2 to 25 introductions) would be required to make the survival of two founding lineages
> likely (Tang et al., 2021)."

> **VERBATIM (printed p. 55, discussion point 3):** "Analysis of available genomes
> provides evidence of two separate introductions of SARS-CoV-2 virus lineages - that led
> to the development of a sustained epidemic in humans has also been found after conducting
> analyses from environmental samples collected from the HSM in early 2020.
> (Crits-Christoph et al., 2024; Liu et al., 2023) These findings and evolutionary analyses
> suggest that these introductions occurred after November 2019 (Worobey et al., 2022a;
> Pekar et al., 2022)."

SAGO reports the two-introduction finding and attributes the "highly unlikely" judgment
about a single introduction to **Pekar et al.**, quoting them. It does **not** itself
draw the contrast with a lab leak. The inference "therefore a single lab introduction is
disfavoured" is an **editorial inference**, and under AGENTS.md §3.9 must be recorded as
`editorInference`, not as `sourceStatement` from SAGO.

### Also worth recording: SAGO's own review of the intelligence reports

SAGO devotes a section and table to the ODNI 2021 and 2023 assessments and other
government reports ("Intelligence Reports/Reports from Governments (Summarised in
Table 3.B)", per the contents page beginning at printed p. 43). Its summaries of both
ODNI documents sit on **printed p. 50**, and they reproduce the agency split accurately,
including the 2021 confidence levels:

> **VERBATIM (printed p. 50, summarizing the 2021 assessment):** "Natural Zoonotic
> Origin: Four intelligence agencies, along with the National Intelligence Council,
> assessed with low confidence that the initial SARS-CoV-2 infection was most likely
> caused by natural exposure to an infected animal or a close progenitor virus."
> … "Laboratory Incident Hypothesis: One agency assessed with moderate confidence that
> the first human infection was most likely the result of a laboratory incident, likely
> involving experimentation, animal handling, or sampling in the Wuhan Institute of
> Virology."

This makes SAGO a convenient cross-check on the ODNI documents but **not** an
independent source for their contents — cite the ODNI reports directly (independence
group: ODNI).

One passage in that review section is worth recording because it is SAGO summarizing a
third party's argument, not stating its own view — printed p. 42, in the discussion of a
published scientific review:

> **VERBATIM (printed p. 42):** "The review also offers views regarding various hypotheses
> for unnatural origin of SARS-CoV-2 including potential release from a laboratory but
> highlights the lack of compelling evidence other than circumstantial elements regarding
> the work at the WIV, Wuhan CDC and the presence of a furin-cleavage site. His conclusion
> is that most evidence points to the HSM as an epicenter, similar to the emergence of
> SARS-CoV-1 in 2002."

This is SAGO reporting a named author's review. Do not cite it as SAGO's own assessment.

### Recommendation

**`ai_verified`** for the passages quoted above.

`verificationNote`: 78-page PDF fetched live from cdn.who.int and verified page by page;
note the file is WHO's post-publication corrected version (landing page records two
corrections; PDF creation date 1 Sep 2025), and two claims attributed to this report in
the case digest are not present in it.

### Discrepancies

1. **CRITICAL — the "surprising … many susceptible species present at [the market]"
   quote is fabricated in substance.** "Surprising" is not in the document; the real
   sentence is about *reverse zoonoses in China* being "unlikely" to be absent, not about
   the missing intermediate host at the market. The digest's bracketed "[the market]"
   silently substitutes the wrong referent for "there" (= China). Reject this claim in its
   current form.
2. **CRITICAL — the two-lineage/lab-leak contrast is not SAGO's.** No sentence in the
   report contrasts the two-lineage pattern with "a single virus introduction" expected
   from a lab leak. The document reports two introductions and quotes Pekar et al. on a
   single introduction being "highly unlikely". Record the contrast as editor inference.
3. **The genomic-features passage is truncated in a way that changes its meaning.** The
   digest's "can be explained by natural recombination and mutations" is a paraphrase (the
   document says "readily explained by natural evolution and provide no support to theories
   of a man-made origin") and **omits the immediately following sentence**: "However, the
   latter is also not refuted by biological data."
4. **Withheld-information framing names three governments, not one.** Printed p. 9 lists
   China, Germany and the United States as governments from which requested information
   was not provided. The digest records only China.
5. **Version drift.** The PDF now served is a corrected version, not the 27 June 2025
   original. Any locator on printed pp. 9 and 13 differs between versions. Record the
   version read (the corrected one) in the Source record.
6. **"Most compelling market evidence but not proof" is a paraphrase, not a quote.** The
   document says "the most compelling evidence of a possible spillover".

---

## 4. WHO Director-General — opening remarks at the media briefing, 27 June 2025

### Canonical URL and how verified

- **URL (verified, HTTP 200, direct fetch):**
  `https://www.who.int/news-room/speeches/item/who-director-general-s-opening-remarks-at-the-media-briefing---27-june-2025`
  — exactly as in the digest.
- **How verified:** live HTML fetched twice in this run (once via the fetch proxy, once
  via `curl` with HTML stripped locally) and the quoted sentences matched byte-for-byte
  between the two extractions, so they are not artefacts of one conversion path.

### Metadata

- **Issuing body:** World Health Organization. **Speaker:** the WHO Director-General
  (Dr Tedros Adhanom Ghebreyesus).
- **Document type:** speech / opening remarks, published in the WHO newsroom.
- **Date:** 27 June 2025. **Locator:** no pagination; locate by paragraph within the
  section that begins "Now returning to our main subject today, the SAGO report on the
  origins of COVID-19."

### Verified quotes

**On the SAGO report's limits:**

> **VERBATIM:** "SAGO has advanced our understanding of the origins of COVID-19, but much
> of the information needed to evaluate fully all hypotheses has not been provided."

> **VERBATIM:** "WHO recognizes that China has shared some of this information, but not
> everything that we have requested."

**On the specific withheld categories:**

> **VERBATIM:** "Despite our repeated requests, China hasn't provided hundreds of viral
> sequences from individuals with COVID-19 early in the pandemic, more detailed information
> on animals sold at markets in Wuhan, and information on work done and biosafety conditions
> at laboratories in Wuhan."

All three digest categories confirmed: (i) hundreds of early sequences, (ii) market-animal
information, (iii) Wuhan laboratory work and biosafety conditions.

**On the intelligence reports:**

> **VERBATIM:** "WHO is also aware of intelligence reports by other governments around the
> world on the origins of COVID-19. We have also requested access to those reports."

> **VERBATIM:** "Neither WHO nor SAGO has yet had access to these reports, or their
> underlying data."

**On the hypotheses:**

> **VERBATIM:** "As things stand, all hypotheses must remain on the table, including
> zoonotic spillover and lab leak."

**Additional material fact, not recorded in the digest:**

> **VERBATIM:** "We know that SAGO's members have not agreed on every point, and that's to
> be expected."

> **VERBATIM:** "Earlier this week, one member of SAGO resigned, and three other members
> asked for their names to be removed from the report."

### Recommendation

**`ai_verified`.**

`verificationNote`: Speech verified verbatim from live who.int on 2026-08-26; quotes
cross-checked across two independent extractions of the same page.

### Discrepancies

1. **The digest's "all hypotheses remain on the table" drops "must" and the enumeration.**
   The DG said "all hypotheses **must** remain on the table, **including zoonotic spillover
   and lab leak**". The stronger modal and the explicit naming of the lab-leak hypothesis
   by the WHO DG are the reason this quote is worth having; do not soften it.
2. **The digest's row omits the SAGO dissent disclosure.** The DG's statement that one
   member resigned and three asked to be de-named is material to how much weight the SAGO
   report's consensus carries, and cuts against the featured-zoonosis reading. Under
   AGENTS.md §3.11 it should be recorded.
3. **The digest's row omits that WHO also asked other governments for their intelligence
   reports and was refused.** This is symmetric negative evidence about data access and
   belongs in the record.

---

## 5. WHO-China joint study report (March 2021)

### Canonical URL and how verified

- **PDF (verified, HTTP 200, direct fetch):**
  `https://www.who.int/docs/default-source/coronaviruse/final-joint-report_origins-studies-6-april-201.pdf`
  — the digest's URL is **correct and live**. The odd-looking `6-april-201` in the
  filename is a truncated "6-april-2021" and refers to the correction date (see below).
- **Canonical landing page (verified, HTTP 200):**
  `https://www.who.int/publications/i/item/who-convened-global-study-of-origins-of-sars-cov-2-china-part`
  — states 120 pages, matching the PDF, and carries this revision note:
  > **VERBATIM:** "This report was updated on 6 April 2021 to remove a working note that
  > was inadvertently included on page 13, and to correct the spelling of a name in the
  > acknowledgements section."
- **File read:** 120 PDF pages, 2,413,377 bytes, SHA-256
  `e1ca927a2e3c373445022370e96264cb0febbfd3539ad72da2bc244230ba93a9`. PDF creation
  3 April 2021 06:52:55 UTC.
- **Page mapping:** cover is PDF p. 1 and prints "1". **Printed page N = PDF page N.**

### Metadata

- **Issuing body:** World Health Organization (joint WHO-China study team).
- **Title (cover, printed p. 1):** "WHO-convened Global Study of Origins of SARS-CoV-2:
  China Part / Joint WHO-China Study / 14 January-10 February 2021 / Joint Report".
- **Dates:** study conducted 14 Jan – 10 Feb 2021; report presented and published
  30 March 2021; **PDF now served is the 6 April 2021 corrected version.**

### (a) The four pathway likelihood ratings — printed p. 9, Executive summary

> **VERBATIM:** "The joint team's assessment of likelihood of each possible pathway was as
> follows:
> • direct zoonotic spillover is considered to be a possible-to-likely pathway;
> • introduction through an intermediate host is considered to be a likely to very likely
> pathway;
> • introduction through cold/ food chain products is considered a possible pathway;
> • introduction through a laboratory incident was considered to be an extremely unlikely
> pathway."

Immediately preceding (printed p. 9), the method note that should accompany any citation
of these ratings:

> **VERBATIM:** "For each of these possible pathways of emergence, the joint team conducted
> a qualitative risk assessment, considering the available scientific evidence and findings.
> It also stated the arguments against each possibility. The team assessed the relative
> likelihood of these pathways and prioritized further studies that would potentially
> increase knowledge and understanding globally."

The ratings are also stated individually, at the end of each pathway's own section:

> **VERBATIM (printed p. 114, "Assessment of likelihood"):** "Based on the arguments
> listed, the zoonotic introduction scenario was listed as possible to likely."

> **VERBATIM (printed p. 116, "Assessment of likelihood"):** "Based on the above arguments,
> the scenario including introduction through an intermediary host was considered to be
> likely to very likely."

> **VERBATIM (printed p. 120, "Assessment of likelihood"):** "In view of the above, a
> laboratory origin of the pandemic was considered to be extremely unlikely."

The laboratory section's own scope limitation (printed p. 118), which must travel with the
"extremely unlikely" rating:

> **VERBATIM:** "SARS-CoV-2 is introduced through a laboratory incident, reflecting an
> accidental infection of staff from laboratory activities involving the relevant viruses.
> We did not consider the hypothesis of deliberate release or deliberate bioengineering of
> SARS-CoV-2 for release, the latter has been ruled out by other scientists following
> analyses of the genome (3)."

And the evidentiary basis the joint team gives for the rating (printed pp. 119–120):

> **VERBATIM:** "The three laboratories in Wuhan working with either CoVs diagnostics
> and/or CoVs isolation and vaccine development all had high quality biosafety level (BSL3
> or 4) facilities that were well-managed, with a staff health monitoring programme with no
> reporting of COVID-19 compatible respiratory illness during the weeks/months prior to
> December 2019, and no serological evidence of infection in workers through
> SARS-CoV-2-specific serology-screening. The Wuhan CDC lab which moved on 2nd December
> 2019 reported no disruptions or incidents caused by the move. They also reported no
> storage nor laboratory activities on CoVs or other bat viruses preceding the outbreak."

The likelihood scale is an explicitly arbitrary Likert opinion scale — printed p. 112,
citing Likert (1932) as reference (1) of the section:

> **VERBATIM (printed p. 112):** "For each of these possible pathways of emergence, the
> joint team conducted a qualitative risk assessment considering the available scientific
> evidence and findings. The team assessed the relative likelihood of these pathways using
> an arbitrary Likert opinion scale of 'extremely unlikely', through 'unlikely',
> 'possible', 'likely' to 'very likely'(1) and suggested further international and national
> phase 2 scientific studies as described in the recommendations. The diagrams are meant to
> be used as a dynamic risk assessment framework and can be reviewed periodically when new
> information or studies become available."

> **VERBATIM (printed p. 112, the ranking):** "In summary, the joint team considered the
> following ranking of potential introduction pathways, from very likely to extremely
> unlikely: (1) through an intermediate host; (2) direct zoonotic introduction; (3)
> introduction through cold/ food chain; and (4) introduction resulting from a laboratory
> incident. Building from the evidence for the studies conducted so far, follow-up research
> studies were proposed for the first three options."

The last sentence is worth recording on its own: phase-2 follow-up studies were proposed
for the first three pathways only, i.e. none were proposed for the laboratory pathway.

### (b) The ~80,000 animals tested figure, with exact framing

**Executive-summary framing — printed p. 8:**

> **VERBATIM:** "The animal and environment working group reviewed existing knowledge on
> coronaviruses that are phylogenetically related to SARS-CoV-2 identified in different
> animals, including horseshoe bats (Rhinolophus spp) and pangolins. However, the presence
> of SARS-CoV-2 has not been detected through sampling and testing of bats or of wildlife
> across China. More than 80 000 wildlife, livestock and poultry samples were collected
> from 31 provinces in China and no positive result was identified for SARS-CoV-2 antibody
> or nucleic acid before and after the SARS-CoV-2 outbreak in China. Through extensive
> testing of animal products in the Huanan market, no evidence of animal infections was
> found."

**Itemized framing with the component counts — printed p. 109, findings item 6:**

> **VERBATIM:** "Sampling and testing of 38 515 livestock and poultry samples and 41 696
> wild animal samples from 31 provinces in China during 2018 to 2020 resulted in no
> positive SARS-CoV-2 antibody or nucleic acid tests. No evidence was found of circulation
> of SARS-CoV-2 among domestic livestock, poultry and wild animals before and after the
> SARS-CoV-2 outbreak in China."

38,515 + 41,696 = 80,211, consistent with "more than 80 000". **Note the exact units:
"samples", not animals.** The report never says 80,000 *animals* were tested.

Related, same item (printed pp. 108–109):

> **VERBATIM:** "Of 923 environmental samples in Huanan market 73 were positive; Forty-four
> of those positive were from the stalls of 21 vendors dealing in the following products:
> aquatic animals and products (n = 13), cold-chain products (n = 16), poultry meat (n = 6),
> seafood products (n = 6), livestock meat (n = 5), vegetable products (n = 2) and farmed
> wildlife meat (n = 1)."

### Recommendation

**`ai_verified`.**

`verificationNote`: 120-page PDF fetched live from who.int; pathway ratings verified on
printed pp. 9, 114, 116 and 120 and the ~80,000-sample figure on printed pp. 8 and 109;
the served file is WHO's 6 April 2021 corrected version of the 30 March 2021 report.

### Discrepancies

1. **"~80,000 animals tested" should be "more than 80 000 samples".** The digest says
   "China's account of ~80,000 animals tested with no positives". The report says
   "More than 80 000 wildlife, livestock and poultry **samples**", broken down as 38,515
   livestock/poultry and 41,696 wild-animal samples, collected 2018–2020 across 31
   provinces. Samples ≠ animals. Correct before use.
2. **Attribution.** The digest calls this "China's account", which is right in substance —
   the testing was conducted by Chinese institutions and reported to the joint team — but
   the report presents it as a joint-team finding without flagging it as unverified by the
   international side. Record it as reported-to-the-joint-team, with the framing above.
3. **Version.** The cited PDF is the 6 April 2021 corrected version (working note removed
   from page 13). Anyone citing printed p. 13 must say which version.
4. **The "extremely unlikely" rating's scope.** The laboratory-incident section explicitly
   excludes deliberate release and deliberate bioengineering from consideration (printed
   p. 118). The rating therefore covers *accidental* laboratory infection only. The digest
   does not record this limitation and it is essential context.
5. **The Likert-scale caveat.** The report itself calls its likelihood scale "an arbitrary
   Likert opinion scale". Under AGENTS.md §3.13 this belongs with any use of the ratings.
6. **Not verified in this run:** the digest's separate claim "55 of 168 early cases
   market-associated (per brief 1)". Out of scope for this batch; still `unverified`.

---

## 6. SAGO preliminary report (9 June 2022)

### Canonical URL and how verified

- **PDF (verified, HTTP 200, direct fetch):**
  `https://cdn.who.int/media/docs/default-source/scientific-advisory-group-on-the-origins-of-novel-pathogens/sago-report-09062022.pdf`
  — exactly as in the digest.
- **Canonical landing page (identified and verified):**
  `https://www.who.int/publications/m/item/scientific-advisory-group-on-the-origins-of-novel-pathogens-report`
  ("Preliminary report for the Scientific Advisory Group for the Origins of Novel
  Pathogens (SAGO)", 44 pages — matching the PDF). The digest does not record a landing
  page; add this one.
- **File read:** 44 PDF pages, 864,459 bytes, SHA-256
  `53af45d22c9a61817a9cf7611aebcbb0bf37e1bc4ba6a3bfc13d01697d3ed998`. PDF creation
  9 June 2022 12:44:54 UTC. PDF Title metadata: "SAGO Preliminary Report".
- **Page mapping:** cover is PDF p. 1; printed footers match the PDF index for the pages
  cited below (verified individually).

### Metadata

- **Issuing body:** WHO / Scientific Advisory Group for the Origins of Novel Pathogens.
- **Title page (printed p. 1):** "Scientific Advisory Group for the Origins of Novel
  Pathogens (SAGO) / Preliminary Report of the SAGO / 9 June 2022 / Version 1 received 13
  April 2022 by WHO / Version 2 received 15 May 2022 by WHO* / *This version includes a
  timeline, letters to WHO from the SAGO, and clarifications requested by WHO."
- **Suggested citation (per the WHO copy):** "WHO Scientific Advisory Group for the Origins
  of Novel Pathogens (SAGO): preliminary report, 9 June 2022. Geneva: World Health
  Organization; 2022."

### Laboratory-related scenarios remain appropriate to investigate — verified

**Printed p. 6:**

> **VERBATIM:** "The SAGO notes that there has not been any new data made available to
> evaluate the laboratory as a pathway of SARS-CoV-2 into the human population and
> recommends further investigations into this and all other possible pathways. The SAGO
> will remain open to any and all scientific evidence that becomes available in the future
> to allow for comprehensive testing of all reasonable hypotheses."

**Printed p. 27, section "Possibility of introduction of SARS-CoV-2 to the human
population through a laboratory incident":**

> **VERBATIM:** "The SAGO recognizes the work of the joint WHO-China team and the findings
> presented in their report. During the discussions of the SAGO, the SAGO has agreed, apart
> from three objections (see footnote), that it remains important to consider all reasonable
> scientific data that is available either through published or other official sources to
> evaluate the possibility of the introduction of SARS-CoV-2 into the human population
> through a laboratory incident."

**Printed p. 28:**

> **VERBATIM:** "To support biosafety and biosecurity investigations into the introduction
> of SARS-CoV-2 into the human population through a laboratory incident; the SAGO notes
> that there would need to be access to and review of the evidence of all laboratory
> activities (both in vitro and in vivo studies) with coronaviruses including
> SARS-CoV-2-related viruses or close ancestors and the laboratory's approach to
> implementation and improvement of laboratory biosafety and biosecurity. As it is not
> common practice to publish the institutional implementation of biosafety and biosecurity
> practices of individual laboratories in peer-reviewed scientific journals, additional
> information will need to be obtained and reviewed to make conclusive recommendations."

**Printed p. 28, recommendation categories** — the fourth is:

> **VERBATIM:** "assessing the possibility of the introduction of SARS-CoV-2 to the human
> population through a breach in biosafety and biosecurity measures through a laboratory
> incident."

### The three-member dissent — footnote 5, printed p. 27

> **VERBATIM:** "It is noted that three members of SAGO (Dr Vladimir Dedkov, Dr Carlos
> Morel, Professor Yungui Yang) do not agree with the inclusion of further studies
> evaluating the possibility of introduction of SARS-CoV-2 to the human population through a
> laboratory incident in this preliminary report due to the fact that from their viewpoint,
> there is no new scientific evidence to question the conclusion of the WHO-convened global
> study of origins of SARS-CoV-2: China Part mission report published in March 2021."

**Living-persons note:** this footnote names three living scientists and records their
recorded professional dissent on a scientific question. It is quotable as an
on-the-record position stated in a published WHO report, and must be presented as such —
their stated viewpoint on study scope — with nothing inferred about motive.

### Recommendation

**`ai_verified`.**

`verificationNote`: 44-page PDF fetched live from cdn.who.int; the statement that
laboratory-related scenarios remain appropriate to investigate verified on printed pp. 6,
27 and 28, together with the named three-member dissent recorded in footnote 5.

### Discrepancies

1. **The digest omits the dissent.** "Laboratory-related scenarios remain appropriate to
   investigate" was **not unanimous**: three named SAGO members objected to including
   further laboratory-hypothesis studies at all. Recording the recommendation without the
   dissent overstates the consensus, in the opposite direction from the usual failure
   mode. AGENTS.md §3.11 requires it.
2. **No landing page recorded.** Add
   `https://www.who.int/publications/m/item/scientific-advisory-group-on-the-origins-of-novel-pathogens-report`.
3. **Version history.** The published report is version 2 (received by WHO 15 May 2022,
   published 9 June 2022) and differs from version 1 (13 April 2022) by the addition of a
   timeline, SAGO letters to WHO, and WHO-requested clarifications. Record which version
   any locator refers to.

---

## 7. CIA assessment (January 2025)

### What exists, and what does not

- **There is no CIA publication.** The January 2025 assessment was conveyed as an
  **unattributed statement by a CIA spokesperson to news organizations**. It is not a
  report, has no document number, no pagination, and no declassified PDF.
- **There is no cia.gov page carrying it.** I confirmed `cia.gov` is reachable from this
  environment (HTTP 200 for the root, `/stories/`, and the search endpoint), so the
  absence is not a fetch failure. The site's search is client-side rendered and its
  server-side responses contain neither the phrase "research-related origin" nor a
  matching press release; two web searches for a cia.gov statement page returned only news
  coverage. **Conclusion: no citable cia.gov primary source exists.** If one is later
  published it supersedes everything below.
- **Best available citable source:** the news reports that quote the spokesperson
  statement directly. Under AGENTS.md §3.10 and CONTENT_POLICY ("wire-copy duplication
  across outlets is ONE source with an independence group, not many"), **all of these are
  one source**: a single CIA spokesperson statement, redistributed. Give them a shared
  independence group.

### Verified wording

The two sentences in the digest were checked against the direct-quotation renderings in
multiple outlets' reports of the statement (NBC News, CBS News, CNBC, Reuters, BBC, CNN,
Guardian). The renderings agree with each other exactly on both sentences:

> **VERBATIM (CIA spokesperson statement, as quoted):** "CIA assesses with low confidence
> that a research-related origin of the COVID-19 pandemic is more likely than a natural
> origin based on the available body of reporting."

> **VERBATIM (CIA spokesperson statement, as quoted):** "CIA continues to assess that both
> research-related and natural origin scenarios of the COVID-19 pandemic remain plausible."

**Both sentences in the digest are exact.** A third element of the statement is also
consistently reported and should be carried with them, since it is the CIA's own
qualification:

> **REPORTED (paraphrase in coverage, wording varies by outlet):** the spokesperson added
> that the agency has "low confidence in this judgement" and will continue to evaluate any
> available credible new intelligence reporting or open-source information that could change
> the assessment.

I do not quote that third element as verbatim CIA wording because outlets render it
differently (some as a direct quote, some as paraphrase), which means the exact
spokesperson phrasing is not established. Mark it `unverified` or paraphrase it.

### Contextual facts reported alongside (attribute to the reporting, not to the CIA)

- The assessment was **not based on new intelligence**; it reflects analysts' review of
  existing information (reported by NBC News from "a source familiar with the matter", and
  independently by NYT and the Guardian).
- The review was **ordered in the closing weeks of the Biden administration** — Reuters
  attributes the request to then-Director William Burns — and **completed before the change
  of administration**; Director John Ratcliffe approved declassification/release after his
  confirmation.
- **Date:** the statement was issued Saturday **25 January 2025**.

These are journalistic claims about intelligence-community process, sourced to anonymous
officials. They are discovery-grade at best and must be labeled as reported claims, never
as CIA statements.

### Recommendation

**`ai_verified`** for the two quoted sentences, **as a spokesperson statement reported by
news outlets** — not as a document.

`verificationNote`: No CIA publication or cia.gov page exists for the January 2025
assessment (cia.gov reachable and searched); the two quoted sentences were verified as a
CIA spokesperson statement of 25 Jan 2025, identically rendered across NBC/CBS/CNBC/
Reuters/BBC/CNN — treat all outlets as ONE source with a shared independence group.

### Discrepancies

1. **Date precision.** The digest says "CIA January 2025 assessment" with an NBC News URL.
   Pin the date to 25 January 2025 (the day the statement was issued).
2. **Source type must be stated.** This is an unattributed spokesperson statement, not a
   declassified assessment. The digest's §5.3 placement among ODNI documents risks reading
   it as a comparable primary record. It is not: there is no underlying document a reader
   can inspect.
3. **Independence group required.** The digest lists this among "secondary reporting on
   intelligence positions" with a single NBC link, which is fine, but the record must
   flag that the seven-plus outlets carrying it are one source.
4. **The "low confidence in this judgement" continuation is not verbatim-established.**
   Do not present it as a CIA quote.

---

## 8. HHS OIG audit A-05-21-00025 (January 2023)

### Canonical URL and how verified

- **PDF (verified, HTTP 200, direct fetch):**
  `https://oig.hhs.gov/oas/reports/region5/52100025.pdf` — exactly as in the digest.
- **Report landing page (given inside the PDF itself, printed on the Report in Brief
  page):** `https://oig.hhs.gov/oas/reports/region5/52100025.asp`.
- **File read:** 72 PDF pages, 5,475,991 bytes, SHA-256
  `47d3f4c08cd53a1c74601a4c9ec6d68da0bf80d4b53f8ac3ca1bad3470b4ef3a`. PDF creation
  24 January 2023 16:44:15 UTC.
- **Page mapping:** front matter (cover, mission page, notices, Report in Brief) is
  unnumbered; the numbered body begins after it. **Printed page N = PDF page N+8** (e.g.
  printed p. 7 = PDF p. 15; printed p. 14 = PDF p. 22; printed p. 15 = PDF p. 23; printed
  p. 21 = PDF p. 29) — verified individually against page footers, each of which reads
  "NIH and EcoHealth Did Not Effectively Monitor Awards and Subawards (A-05-21-00025) N".

### Metadata — report number and date confirmed

- **Issuing body:** US Department of Health and Human Services, Office of Inspector
  General (Office of Audit Services).
- **Full title (PDF Title metadata and cover):** "The National Institutes of Health and
  EcoHealth Alliance Did Not Effectively Monitor Awards and Subawards, Resulting in Missed
  Opportunities to Oversee Research and Other Deficiencies, A-05-21-00025".
- **Report number:** **A-05-21-00025** — confirmed on the cover and on the Report in Brief
  page ("Report No. A-05-21-00025").
- **Date:** **January 2023** — confirmed on the cover ("Christi A. Grimm / Inspector
  General / January 2023 / A-05-21-00025") and on the Report in Brief page ("Date: January
  2023").

All three digest identifiers (number, date, subject) are correct.

### Central findings, verbatim

**Report in Brief, "What OIG Found" (unnumbered front matter page, PDF p. 4):**

> **VERBATIM:** "Despite identifying potential risks associated with research being
> performed under the EcoHealth awards, we found that NIH did not effectively monitor or
> take timely action to address EcoHealth's compliance with some requirements. Although NIH
> and EcoHealth had established monitoring procedures, we found deficiencies in complying
> with those procedures limited NIH and EcoHealth's ability to effectively monitor Federal
> grant awards and subawards to understand the nature of the research conducted, identify
> potential problem areas, and take corrective action. Using its discretion, NIH did not
> refer the research to HHS for an outside review for enhanced potential pandemic pathogens
> (ePPPs) because it determined the research did not involve and was not reasonably
> anticipated to create, use, or transfer an ePPP. However, NIH added a special term and
> condition in EcoHealth's awards and provided limited guidance on how EcoHealth should
> comply with that requirement. We found that NIH was only able to conclude that research
> resulted in virus growth that met specified benchmarks based on a late progress report
> from EcoHealth that NIH failed to follow up on until nearly 2 years after its due date.
> Based on these findings, we conclude that NIH missed opportunities to more effectively
> monitor research. With improved oversight, NIH may have been able to take more timely
> corrective actions to mitigate the inherent risks associated with this type of research."

> **VERBATIM (same page):** "We identified several other deficiencies in the oversight of
> the awards. Some of these deficiencies include: NIH's improper termination of a grant;
> EcoHealth's inability to obtain scientific documentation from WIV; and EcoHealth's
> improper use of grant funds, resulting in $89,171 in unallowable costs."

> **VERBATIM (same page, on foreign subrecipients):** "Although WIV cooperated with
> EcoHealth's monitoring for several years, WIV's lack of cooperation following the COVID-19
> outbreak limited EcoHealth's ability to monitor its subrecipient."

**FINDINGS section, printed p. 7 (PDF p. 15):**

> **VERBATIM:** "In accordance with Federal requirements, NIH had policies and procedures
> in place for monitoring grant awards by reviewing financial and progress reports, taking
> action to implement enhanced monitoring for awards to EcoHealth, and reviewing research
> that could involve enhanced potential pandemic pathogens. However, NIH did not adequately
> monitor EcoHealth's grant awards in accordance with its policies and procedures and other
> Federal requirements. Specifically, NIH did not ensure EcoHealth in a timely manner
> submitted a progress report that was 2 years late and that NIH concluded contained
> evidence of a virus with growth that should have been reported immediately; did not ensure
> EcoHealth publicly reported required subaward data; and did not follow proper procedures
> to terminate an award to EcoHealth."

> **VERBATIM (same page):** "EcoHealth had procedures in place to conduct risk assessments
> of its subrecipients, and also had standardized checklists to document routine monitoring
> of its subrecipients. However, we found that EcoHealth did not ensure that subawards were
> compliant with Federal requirements, did not ensure compliance with subrecipient
> monitoring and reporting requirements, and did not comply with certain public disclosure
> requirements associated with reporting subaward funding. In addition, EcoHealth did not
> always use its grant funds in accordance with Federal requirements, resulting in $89,171
> in unallowable costs."

### The late progress report and the growth threshold

**Printed p. 14 (PDF p. 22):**

> **VERBATIM:** "Once NIH received and reviewed the late progress report, NIH concluded the
> research resulted in a virus with enhanced growth. EcoHealth's Notice of Award for Year 5
> of R01AI110964 was issued on June 18, 2018. It had a budget period of June 1, 2018, to May
> 31, 2019. The Notice of Award required that a final progress report be submitted within 120
> days of the budget period's end date. Thus, EcoHealth should have submitted its progress
> report for Year 5 by the end of September 2019."

> **VERBATIM (same page):** "We found evidence in the online system that EcoHealth initiated
> the progress report in July 2019; however, not until after NIH requested the progress
> report in July 2021 did EcoHealth submit it on August 3, 2021, nearly 2 years late."

**Printed p. 15 (PDF p. 23) — the grant-specific threshold:**

> **VERBATIM:** "EcoHealth's Notice of Award for Year 5 of R01AI110964 required EcoHealth to
> immediately notify its NIAID Program Officer and Grants Management Specialist if any
> experiments proposed in the award resulted in a virus with enhanced growth by more than one
> log compared to wild-type strains. The Notice of Award also stated that research involving
> the resulting virus(es) may require review under the HHS P3CO Framework."

> **VERBATIM (same page):** "According to NIH's evaluation of EcoHealth's progress report for
> Year 5 of the grant, NIH believed there was evidence that the research conducted by
> EcoHealth's subrecipient WIV during Year 5 resulted in enhanced growth by more than one log,
> thus triggering the special term and condition to immediately notify NIAID and potentially
> requiring the research to undergo review under the HHS P3CO Framework. NIH required
> immediate notification of this type of unexpected research result, because a one-log
> increase in growth has been used as a criteria for initiating a secondary review to
> determine whether the research aims should be evaluated or new biosafety measures should be
> enacted."

**The audit's explicit disclaimer about the science — printed p. 14 (PDF p. 22), and again
in the Report in Brief:**

> **VERBATIM (printed p. 14):** "Below we provide an overview of NIH's and EcoHealth's
> interpretations of Year 5's research results. We again note that our audit did not assess
> scientific results for any of the experiments or make any determination regarding the
> accuracy of NIH's or EcoHealth's interpretations of Year 5's research results."

> **VERBATIM (Report in Brief, PDF p. 5):** "Regarding the finding that an experiment
> exhibited 'enhanced growth,' our audit did not assess scientific results for any of the
> experiments or make any determination regarding the accuracy of NIH's or EcoHealth's
> interpretations of the Years 4 and 5 research results. Our audit found that NIH's own
> evaluation of the Year 5 progress report concluded that the research was of a type that
> should have been reported immediately to NIH."

**EcoHealth's recorded disagreement — Report in Brief (PDF p. 5):**

> **VERBATIM:** "EcoHealth identified two substantive areas of disagreement with the reported
> findings: (1) the timeliness of EcoHealth's Year 5 progress report and (2) whether an
> experiment exhibited enhanced virus growth."

> **VERBATIM (same page):** "After reviewing NIH's and EcoHealth's comments, we maintain that
> all of our recommendations are valid."

### Audit scope (printed on the Report in Brief page, PDF p. 4)

> **VERBATIM:** "Our audit covered three NIH awards to EcoHealth totaling approximately $8.0
> million, which included $1.8 million of EcoHealth's subawards to eight subrecipients,
> including the Wuhan Institute of Virology (WIV)."

### Recommendation

**`ai_verified`.**

`verificationNote`: 72-page PDF fetched live from oig.hhs.gov; report number A-05-21-00025
and date January 2023 confirmed on the cover and Report in Brief, and the central findings
verified verbatim on printed pp. 7, 14 and 15.

### Discrepancies

1. **The digest's "a grant-specific growth threshold NIH had required to be reported" is
   right, but the audit's disclaimer must travel with it.** OIG says twice, in terms, that
   it "did not assess scientific results for any of the experiments or make any
   determination regarding the accuracy of NIH's or EcoHealth's interpretations". The
   "enhanced growth" finding is **NIH's** conclusion recorded by OIG, not OIG's own — and
   EcoHealth formally disputed it. Presenting the OIG report as establishing that an
   experiment produced enhanced growth would misstate the source (AGENTS.md §3.9).
2. **"Two years late" is the audit's phrasing but "nearly 2 years late" is the precise
   one.** The FINDINGS section says "2 years late"; the detailed narrative says "nearly 2
   years late" and gives the dates (due end of September 2019, submitted 3 August 2021).
   Prefer the dated version.
3. **The digest row omits the monetary and termination findings** ($89,171 unallowable
   costs; NIH's improper termination of a grant). The improper-termination finding cuts
   against a straightforward "NIH was lax" reading and belongs in the record for balance.

---

## 9. NIH statement on misinformation about SARS-CoV-2 origins (20 October 2021)

### Canonical URL — the digest's URL must not be used

- **Digest URL:** `https://stagetestdomain3.nih.gov/about-nih/who-we-are/nih-director/statements/statement-misinformation-about-sars-cov-2-origins`
  — a **staging host**. Confirmed unusable and must never be cited.
- **Canonical URL (identified):**
  `https://www.nih.gov/about-nih/who-we-are/nih-director/statements/statement-misinformation-about-sars-cov-2-origins`
  — the same path on the production host. Independent evidence this is the live canonical
  location: web search returns this URL as the top result with page text matching the
  archived copy verbatim.
- **Live fetch from this environment failed:** `curl` returns HTTP 403 for this URL **and
  for `https://www.nih.gov/` itself**, i.e. `nih.gov` bot-walls this environment
  wholesale; the fetch proxy returns HTTP 404 for this URL and for the parent
  `/statements` index alike, which is likewise an infrastructure block rather than
  evidence of removal. **I could not confirm the page is live by direct fetch.**
- **Verified against:** Internet Archive Wayback capture
  `http://web.archive.org/web/20211020204530id_/https://www.nih.gov/about-nih/who-we-are/nih-director/statements/statement-misinformation-about-sars-cov-2-origins`
  — **snapshot date 20 October 2021, 20:45:30 UTC** (release day). Four further
  same-day captures exist, three sharing the same content digest.

### Metadata

- **Issuing body:** National Institutes of Health (US), Office of the Director.
- **Title:** "Statement on Misinformation about SARS-CoV-2 Origins".
- **Date on page:** "October 20, 2021".
- **Signature block:** "Francis S. Collins, M.D., Ph.D. / Director, National Institutes of
  Health".
- **Locator:** no pagination; four body paragraphs. Locate by paragraph.

### The claim to be verified: EcoHealth-supported WIV viruses too genetically distant

**Paragraph 2, verbatim:**

> **VERBATIM:** "Unfortunately, in the absence of a definitive answer, misinformation and
> disinformation are filling the void, which does more harm than good. NIH wants to set the
> record straight on NIH-supported research to understand naturally occurring bat
> coronaviruses at the Wuhan Institute of Virology, funded through a subaward from NIH
> grantee EcoHealth Alliance. Analysis of published genomic data and other documents from
> the grantee demonstrate that the naturally occurring bat coronaviruses studied under the
> NIH grant are genetically far distant from SARS-CoV-2 and could not possibly have caused
> the COVID-19 pandemic. Any claims to the contrary are demonstrably false."

("Analysis" is hyperlinked in the original to
`https://www.niaid.nih.gov/diseases-conditions/coronavirus-bat-research`. That linked
analysis was **not** verified in this run and remains `unverified`.)

**Paragraph 3, verbatim** (relevant to the IC cross-references):

> **VERBATIM:** "The scientific evidence to date indicates that the virus is likely the
> result of viral evolution in nature, potentially jumping directly to humans or through an
> unidentified intermediary animal host. Historically, many viruses have emerged from
> animals to cause epidemics and pandemics, including influenza, Ebola, Zika, West Nile
> fever, SARS, and more. Importantly, after an intensive investigation, agencies in the U.S
> Intelligence Community agreed that the virus was not developed as a biological weapon and
> most agencies assessed that SARS-CoV-2 most likely was not genetically engineered."

**Paragraph 1, verbatim** (the epistemic framing, useful context):

> **VERBATIM:** "To date, the origin of the SARS-CoV-2 virus that caused the COVID-19
> pandemic has not been identified, despite intensive efforts to do so. This is not unusual
> — confirming with 100% certainty the origin of a virus is a long and complicated process.
> It took 14 years for scientists to find a single bat population that contained all the
> necessary genetic components of SARS-CoV, the virus that caused the 2003 SARS epidemic. We
> still do not know the origins of the 2014 Ebola outbreak."

**Paragraph 4, verbatim:**

> **VERBATIM:** "Public health and scientific organizations, including NIH, are intensely
> interested in getting a definitive answer to inform efforts to prevent future events. This
> effort would benefit from less speculation and more scientific cooperation, especially from
> China, without which the SARS-CoV-2 origins will be impossible to identify."

### Recommendation

**`ai_verified`.**

`verificationNote`: Canonical nih.gov URL identified (the digest's stagetestdomain3.nih.gov
URL is a staging host and must not be cited); statement text verified against the Internet
Archive release-day capture of 20 Oct 2021 because nih.gov bot-walls this environment
entirely (403 even for the site root).

### Discrepancies

1. **The digest's URL is unusable and is correctly flagged as such.** Replace with the
   `www.nih.gov` path above. Do not cite the staging host under any circumstances — it is
   not a publication location.
2. **Live status not confirmable from here.** I could not fetch the production page (403
   / proxy 404 across all nih.gov paths). Treat the archive snapshot as the verified
   locator and re-check the live URL from an unblocked client before publication. If the
   live page proves gone, cite the Wayback URL with its snapshot date.
3. **The digest's paraphrase is slightly stronger than the source in one respect and
   weaker in another.** NIH says the viruses "are genetically far distant from SARS-CoV-2
   and could not possibly have caused the COVID-19 pandemic" — a claim scoped precisely to
   "the naturally occurring bat coronaviruses studied under the NIH grant", i.e. the
   documented, grant-covered work. It is not a claim about everything done at the WIV, and
   must not be recorded as one. Conversely, the digest omits "Any claims to the contrary
   are demonstrably false", which is the sentence that made the statement contested.
4. **This is an assertion by NIH about its own funded research** — an interested party's
   statement on a question in which it has institutional exposure. Under the living-persons
   and source-statement rules it is recorded as NIH's assertion, not as an established
   finding.
5. **The linked NIAID analysis is unverified.** The load-bearing evidence for the genetic
   distance claim is the linked NIAID page, which was not checked in this run.

---

## 10. China State Council Information Office white paper (30 April 2025)

### Canonical URL and how verified

- **URL in digest (verified, HTTP 200):**
  `http://english.scio.gov.cn/whitepapers/2025-04/30/content_117854036_5.html`
  — this is **section III** ("The Mismanaged Response of the US to the Covid-19 Pandemic"),
  one page of a multi-page HTML publication. Fetched and read in full.
- **Other pages of the same document, all fetched and verified HTTP 200 in this run:**
  - `…/content_117854036.html` — title page and contents.
  - `…/content_117854036_2.html` — Preface.
  - `…/content_117854036_3.html` — Section I, "Contributing Chinese Wisdom to the Study of
    the Origins of SARS-CoV-2".
  - `…/content_117854036_6.html` — Conclusion.
  (Section II, "China's Contribution to the Global Fight Against Covid-19", is
  `…_4.html`; not read in this run.)
- **The document exists** and is served by the State Council Information Office's English
  site under the byline "Xinhua | April 30, 2025".

### Metadata

- **Issuing body (from the title page):** "The State Council Information Office of the
  People's Republic of China", dated "April 2025".
- **Title:** "Covid-19 Prevention, Control and Origins Tracing: China's Actions and
  Stance".
- **Release note (title page):** "China's State Council Information Office on Wednesday
  released a white paper titled 'Covid-19 Prevention, Control and Origins Tracing: China's
  Actions and Stance.'"
- **Contents (title page):** Preface; I. Contributing Chinese Wisdom to the Study of the
  Origins of SARS-CoV-2; II. China's Contribution to the Global Fight Against Covid-19;
  III. The Mismanaged Response of the US to the Covid-19 Pandemic; Conclusion.
- **Locator convention:** HTML, no pagination. Cite by page URL plus section and
  subsection heading (e.g. "Section I.1, 'China's Efforts in Tracing the Origins of the
  Virus'").

### (a) Lab leak "extremely unlikely" — Section I.2 (`…_3.html`)

The white paper does **not** make this judgment in its own voice as a fresh assessment; it
**restates the WHO-China joint study's four pathway ratings** as the study's conclusion:

> **VERBATIM (Section I.2, end):** "These findings were published in the 'Joint WHO-China
> Study' and international journals including The Lancet, Nature, Cell, National Science
> Review, Scientific Reports, and Virus Evolution. With solid laboratory data supporting the
> likelihood of four possible introduction pathways, the study concluded:
> • Direct zoonotic spillover is considered to be a possible-to-likely pathway;
> • Introduction through an intermediate host is considered to be a likely to very likely
> pathway;
> • Introduction through cold/food chain products is considered a possible pathway;
> • Introduction through a laboratory incident was considered to be an extremely unlikely
> pathway."

Its own-voice claim in the same section is broader and different:

> **VERBATIM (Section I.2, end):** "Through systematic epidemiological investigations,
> molecular tracing, animal host screening, and studies on cold-chain transmission, the
> possibility of Wuhan being the natural origin of SARS-CoV-2 was scientifically ruled out."

And in the Conclusion (`…_6.html`):

> **VERBATIM:** "The 'WHO-convened Global Study of Origins of SARS-CoV-2: China Part – Joint
> WHO-China Study' is the result of the collaborative study by Chinese and foreign experts.
> It distills the collective insights from the joint mission and has earned widespread
> recognition from both the international community and the global scientific world. The
> contributions of these experts merit respect, and their conclusions cannot be denied."

### (b) Declaring China's origins investigation complete — Section I.1 (`…_3.html`)

> **VERBATIM:** "To date, no findings have contradicted the conclusions of the 'Joint
> WHO-China Study'. It is fair to say that the study on the origins of SARS-CoV-2 conducted
> in China has ended."

### (c) Claims directed at the United States — Section III (`…_5.html`)

**The July 2019 Virginia material (Section III.4, "Evidence Pointing to the US as the
Origin of Covid-19"):**

> **VERBATIM:** "From May to October 2019, Virginia reported 19 respiratory disease
> outbreaks, a significant increase from the 13 and 15 outbreaks recorded during the same
> period in the previous two years. Laboratory tests were unable to identify the causes of
> some cases. In July 2019, two communities in northern Virginia reported outbreaks of
> pneumonia with unknown causes, which local media suspected to be 'a mystery virus'. A total
> of 54 people exhibited symptoms such as fever, coughing, and feableness, resulting in two
> deaths. That same month, the Fort Detrick Biological Laboratory, located just one hour's
> drive from the affected area, was suddenly shut down."

(The misspelling "feableness" is in the source; quoted as printed.)

**The Florida data material (Section III.4):**

> **VERBATIM:** "The US CDC data indicates that the first confirmed Covid-19 case in Florida
> was on March 1, 2020. However, according to the data on 171 Covid-19 patients published on
> the Florida Department of Health (DOH) website, the earliest confirmed cases were in
> January 2020. Most of these individuals reported no international travel history, suggesting
> that the virus was already circulating in local communities at the time. This crucial
> information about the timing of their diagnosis has since been deleted, and the then data
> chief at the Florida DOH was fired shortly after."

**The 28 UNC lab incidents (Section III.4):**

> **VERBATIM:** "From January 2015 to June 2020, the University of North Carolina at Chapel
> Hill reported 28 lab incidents involving genetically engineered microorganisms to the NIH.
> Six of these incidents involved various types of genetically modified coronavirus. Eight
> researchers might have been infected, yet only one was placed in quarantine. The
> university, NIH, and CDC all declined to disclose the incident reports to the public. An
> expert associated with The Lancet suggested that novel coronavirus might not have come from
> nature, and instead likely came from an incident that occurred in a US bio-technology lab."

**The Fort Detrick demand (Section III.4 and Conclusion):**

> **VERBATIM (Section III.4):** "What were the real reasons for the shutdown of the Fort
> Detrick Biological Laboratory in late 2019? The US owes the world an explanation."

> **VERBATIM (Conclusion):** "It must promptly respond to the legitimate concerns of the
> international community, proactively share with the WHO data on its early suspected cases,
> disclose information about Fort Detrick, its global network of biological laboratories, and
> the so-called research conducted therein, and provide a responsible account to the global
> public."

**Its characterization of the ODNI 2021 assessment (Section III.2):**

> **VERBATIM:** "In 2021, the US government directed its intelligence agencies to launch a
> 90-day investigation into the origins of SARS-CoV-2. At the end of August, the Office of the
> Director of National Intelligence (ODNI) released an unclassified summary of its intelligence
> assessment. While the report was rife with unfounded allegations against China, it had to
> concede that there was insufficient evidence to support the 'Wuhan lab leak' hypothesis."

> **VERBATIM (Section III.2):** "Between 2020 and 2023, three US entities – the Los Alamos
> National Laboratory (under the Department of Energy), the National Institutes of Health
> (NIH), and the ODNI – independently concluded in separate reports that the Wuhan Institute of
> Virology had maintained strict biosecurity protocols, and ruled out the possibility that the
> lab had engineered the novel coronavirus. However, not a single one of these findings has
> been accepted by the US government. Instead, they have been selectively ignored and
> concealed."

**Its own animal-testing account (Section I.2), for cross-reference with the WHO-China
report:**

> **VERBATIM:** "A number of research teams in China conducted systematic testing on more
> than 80,000 samples collected from bats, pangolins, wild birds, wild boars, raccoon dogs,
> and other wildlife, as well as livestock and poultry across the country. Sample collection
> spanned from 2017 to 2021, and the analyses detected no evidence of SARS-CoV-2 circulation
> in these animal populations."

Note the sampling window here is **2017 to 2021**, whereas the WHO-China joint report
(printed p. 109) gives **2018 to 2020** for the 80,211 samples. These are not the same
dataset description; do not merge them.

### Recommendation

**`ai_verified`** as a **government position statement**, explicitly **not** as evidence.

`verificationNote`: White paper verified live on english.scio.gov.cn (title page, Preface,
Section I, Section III and Conclusion all fetched 2026-08-26); it is an official PRC
position statement whose factual assertions are recorded as assertions by their source,
never as findings.

### Discrepancies

1. **The "extremely unlikely" rating is quoted, not asserted.** The white paper's
   "extremely unlikely" line is a **restatement of the WHO-China joint study's conclusion**,
   attributed to that study. It is not an independent Chinese assessment, and citing the
   white paper for the rating would double-count the WHO-China report (AGENTS.md §3.10 —
   put them in the same independence group). Its distinct own-voice claim is the stronger
   and separate assertion that "the possibility of Wuhan being the natural origin of
   SARS-CoV-2 was scientifically ruled out".
2. **The "investigation complete" claim is hedged in the original.** The white paper says
   "It is fair to say that the study on the origins of SARS-CoV-2 conducted in China has
   ended" — a rhetorical construction ("it is fair to say"), and scoped to the study
   *conducted in China*. The digest's "declares China's origins investigation complete" is
   a fair reading but should be recorded with the actual wording.
3. **Sampling window mismatch.** White paper: 2017–2021. WHO-China joint report: 2018–2020.
   Both describe "more than 80,000 samples". Record as a discrepancy rather than treating
   them as one corroborated figure.
4. **Section-level URLs are required.** The digest cites only `…_5.html`, which is Section
   III. The lab-leak rating and the investigation-complete statement are on `…_3.html`
   (Section I) and are **not** on the cited page. A Source record pointing at `…_5.html`
   for those claims would have the wrong locator.
5. **Living persons.** Section III names living individuals (including a named US official
   and a named scientist) and characterizes their conduct. Nothing from those passages
   should enter the case beyond what is needed, and only ever as PRC-government assertion.

---

## Cross-cutting notes for case construction

1. **Two documents in this batch could not be fetched from their canonical hosts and were
   verified from the Internet Archive:** the ODNI 2023 report (snapshot 2023-06-23), the
   ODNI 2021 assessment (snapshot 2021-10-29), and the NIH 2021 statement (snapshot
   2021-10-20). In all three cases the block is a bot wall (403/500 to automated clients,
   including for site roots), not a removal. Source records should carry both the canonical
   URL and the archive URL with its snapshot date, per AGENTS.md §3.8.
2. **Independence groups this batch establishes:**
   - **ODNI**: the 2021 assessment, the 2023 report, and SAGO's Table 3.B summary of both
     are not independent of each other. Cite ODNI directly.
   - **WHO-China joint study**: the joint report itself and the PRC white paper's
     restatement of its ratings are one source.
   - **CIA January 2025 statement**: all outlet reports are one source.
   - **The negative-antibody result for WIV staff** appears in the WHO-China report (as
     WIV officials' statement), is relayed by ODNI 2023, and is echoed by the white paper.
     One underlying assertion by WIV officials, three restatements.
3. **Three claims in the digest's §5.2–5.3 should not enter the ledger in their current
   form:** the SAGO "surprising … susceptible species present at [the market]" quote
   (§3, discrepancy 1); the SAGO two-lineage/lab-leak contrast (§3, discrepancy 2); and
   the attribution of the "no indications that WIV research involved SARS-CoV-2 or a close
   progenitor virus" phrase to the 2023 ODNI report rather than the 2021 one (§1,
   discrepancy 2).
4. **Not verified in this run and still `unverified`:** the HSDL mirror of the ODNI 2023
   report; the linked NIAID bat-coronavirus analysis; the WHO news item of 27 Jun 2025; the
   WHO COVID-19 timelines and DON233; Section II of the PRC white paper; the "55 of 168
   early cases market-associated" figure; and every source in §5.3's secondary-reporting
   paragraph other than the CIA statement.
