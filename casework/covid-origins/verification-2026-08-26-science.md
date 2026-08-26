# Citation verification — peer-reviewed scientific literature (COVID origins)

**Run date:** 2026-08-26
**Scope:** the eleven peer-reviewed / journal items in §5.1 of
`digest-case-construction-2026-08-26.md` (all listed there as unverified).
**Method:** live retrieval of primary documents. Publisher metadata taken from the
Crossref REST API (`api.crossref.org`) and Europe PMC (`ebi.ac.uk/europepmc`); full text
from Europe PMC / PMC deposits, `nature.com` direct, and Wayback Machine snapshots where
the publisher is Cloudflare bot-walled (`science.org`, `cell.com`). Snapshot dates are
given for every archived retrieval.
**Nothing below is invented.** Every quoted string was copied from content actually
retrieved in this run. Where only an abstract or an author manuscript could be reached,
that is stated and the quote is attributed to that version.

**Recommended labels are `ai_verified` at best**, per CONTENT_POLICY ("AI-performed
citation verification is labeled `ai_verified`, never `verified`").

---

## HEADLINE: the erratum question is resolved — there are TWO errata, one per paper

The digest (§5.1 row 2) flags a conflict: brief 2 attributes DOI `10.1126/science.adp1133`
to Worobey et al.; the Rootclaim response describes an erratum on "this lineage model"
(i.e. Pekar) that "reduc[ed] its significance to negligible." **Both sides are describing
real errata, but they are two different documents.** Neither characterization survives
contact with the text as stated.

| Erratum DOI | Corrects | Published | What it changes |
| --- | --- | --- | --- |
| `10.1126/science.adp1133` | **Worobey et al.** (`10.1126/science.abp8715`) | Science 383(6688):eadp1133, print 15 Mar 2024 (online 14 Mar 2024) | Duplicated/mis-sized GitHub data files. States results **unchanged**. |
| `10.1126/science.adl0585` | **Pekar et al.** (`10.1126/science.abp8337`) | Science 382(6667):eadl0585, 13 Oct 2023 | Code error in simulated-topology frequency. Bayes factors for multiple introductions **were overestimated**; corrected values still favor multiple introductions. |

Crossref `update-to` records are unambiguous and machine-authoritative:

- `adp1133` → `{"DOI":"10.1126/science.abp8715","type":"correction","label":"Correction","source":"publisher","updated":"2024-03-14"}`
- `adl0585` → `{"DOI":"10.1126/science.abp8337","type":"correction","label":"Correction","source":"publisher","updated":"2023-10-13"}`

**Adjudication.** Brief 2's DOI attribution is *correct*: `adp1133` is the Worobey erratum,
and it explicitly says the results did not change. Rootclaim's "reduced significance to
negligible" is aimed at the *other* erratum (`adl0585`, Pekar). Its **direction is right and
materially so** — the Bayes factor for two introductions versus one fell from 61.6/60.0 to
4.3/4.2, and the authors' own wording was downgraded from "strong support" to "substantial
support" — but **"negligible" overstates it**: the erratum itself says the corrected
analysis "still favors the multiple introduction scenario," and BF ≈ 4.3 remains positive
evidence under the Kass–Raftery cutoffs the erratum adopts. Any Erebus record must not
attach either characterization to the wrong DOI, and must not let "reduced" become
"eliminated."

---

## 1. Worobey et al., *Science* 2022 — Huanan market early epicenter

**Canonical citation.** M. Worobey, J. I. Levy, L. Malpica Serrano, A. Crits-Christoph,
J. E. Pekar, S. A. Goldstein, A. L. Rasmussen, M. U. G. Kraemer, C. Newman, M. P. G.
Koopmans, M. A. Suchard, J. O. Wertheim, P. Lemey, D. L. Robertson, R. F. Garry, E. C.
Holmes, A. Rambaut, K. G. Andersen, "The Huanan Seafood Wholesale Market in Wuhan was the
early epicenter of the COVID-19 pandemic," *Science* **377**(6609), 951–959 (2022).
DOI `10.1126/science.abp8715`. PMID 35881010; PMC9348750.
Science First Release 26 July 2022; print issue 26 August 2022.
**Corrected by** Erratum DOI `10.1126/science.adp1133` (see §2).

**How verified.** DOI resolves; Crossref metadata retrieved directly. Two versions read:
(a) the CC-BY First Release deposit, Europe PMC `PMC9348750` full text, direct fetch;
(b) the version of record, Wayback snapshot **2025-07-07** of
`https://www.science.org/doi/full/10.1126/science.abp8715` (science.org is Cloudflare
bot-walled to direct fetch). Quotes below are from the version of record (b); wording
differs cosmetically from the First Release.

### Early-case geography

> We considered three categories of cases, which were all significantly closer to the
> Huanan market than expected: (i) all cases (median distance 4.28 km; *P* < 0.001), (ii)
> cases linked directly to the Huanan market (median distance 5.74 km; *P* < 0.001), and
> (iii) cases with no evidence of a direct link to the Huanan market (median distance 4.00
> km; *P* < 0.001) (Fig. 2A). The cases with no known link to the market on average resided
> closer to the market than the cases with links to the market (*P* = 0.029).

*Locator:* Results, section "Early cases lived near to and centered on the Huanan market."
Also in that paragraph: null-distribution median distance to the market 16.11 km; center
point 1.02 km for all December cases (*P* = 0.007), 2.28 km for market-linked (*P* = 0.034),
0.91 km for cases with no reported link (*P* = 0.006), against 4.65 km for the age-matched
null draw.

### The exact sentence requested — unlinked cases lived closer than market workers

> One of the key findings of our study is that "unlinked' early COVID-19 patients, i.e.,
> those who did not work at the market, did not know someone who did, and had not recently
> visited the market, resided significantly closer to the market than patients with a
> direct link to it. The observation that a substantial proportion of early cases had no
> known epidemiological link had previously been used as an argument against the Huanan
> market being the epicenter of the pandemic. **However, this group of cases resided
> significantly closer to the market than those who worked there, indicating that they had
> been exposed to the virus at or near the Huanan market.** For market workers, the exposure
> risk was their place of work, not their residential locations, which were significantly
> farther afield than those cases not formally linked to the market.

*Locator:* Discussion, opening paragraph. (The mismatched quotation marks around
`"unlinked'` are as rendered in the version of record, not a transcription error. The First
Release deposit reads `‘unlinked’` and "those who neither worked at the market or knew
someone who did, nor had recently visited the market" — same claim, different phrasing.)

### Western-section environmental positivity

> We found evidence (*P* < 0.05) of a region in the southwest area of the market where live
> mammals were for sale (Fig. 4B).

> In each case, the distance to live mammal vendors remained predictive of environmental
> sample positivity, and the region of increased positive sample density in the southwest
> corner of the western section of the market remained consistent (fig. S18).

*Locator:* Results, section "Positive environmental samples linked both to live mammal
sales and to human cases at the Huanan market." Same paragraph: "distance to the nearest
vendor selling live mammals" and "distance to the nearest human case" independently
predictive of positivity, *P* = 0.004 and 0.014 respectively, for *n* = 6, table S9.

Related, from "Wild animal trading in Wuhan markets": "we identified an additional five
stalls that were likely selling live or freshly butchered mammals or other unspecified meat
products in the southwest corner of the western section of the market (Fig. 4A, figs. S16
and S17, and table S6)."

And from the Discussion: "All eight COVID-19 cases detected prior to 20 December were from
the western side of the market, where mammal species were also sold" (First Release
wording; §"Positive environmental samples…").

### Excess pneumonia and seroprevalence — IMPORTANT QUALIFICATION

> These include that … (iv) seroprevalence in Wuhan was highest in the districts around the
> market (*40*, *41*). It is also noteworthy that the December 2019 COVID-19 cases that we
> consider here were identified based on reviews of clinical signs and symptoms, not
> epidemiological factors such as where they resided or links to the Huanan market (*7*),
> and that excess deaths from pneumonia rose first in the districts surrounding the market
> (*42*). Moreover, the spatial relationship with the Huanan market remains after removing
> the two-thirds of the unlinked cases residing nearest the market.

*Locator:* Discussion, ascertainment-bias paragraph.

**Both points are Worobey et al. citing other work (refs 40, 41, 42), not findings of this
paper.** An Erebus evidence record must not present either as a Worobey result. The
underlying references need separate verification before either becomes an evidence record;
ref 40 appears in the reference list as Li Z. *et al.*, "Antibody seroprevalence in the
epicenter Wuhan, Hubei, and six selected provinces after containment of the first epidemic
wave of COVID-19 in China," *Lancet Reg. Health West. Pac.*, and ref 41 as He Z. *et al.*,
"Seroprevalence and humoral immune durability of anti-SARS-CoV-2 antibodies in Wuhan,
China," *Lancet* — neither of which was checked in this run.

### Recommendation

`ai_verified`.
*verificationNote:* Version of record read via Wayback snapshot 2025-07-07 of
science.org/doi/full/10.1126/science.abp8715 plus the CC-BY First Release deposit
(PMC9348750); Crossref metadata confirms Science 377(6609):951–959 and the attached
erratum 10.1126/science.adp1133.

### Discrepancies vs. the digest

1. **Date.** The digest gives "26 Jul 2022." That is the Science First Release date. The
   citable print reference is *Science* **377**(6609):951–959, issue date **26 August 2022**.
   Both are defensible; the record should carry the volume/page citation.
2. **"1676 sites in Wuhan were superior to HSM in terms of superspreading potential."**
   **Not in Worobey et al.** The string "1676" does not occur anywhere in the version of
   record. The digest already attributes this to the Rootclaim response's own comparison
   analysis; that attribution is correct and it must never be cited to Worobey.
3. **Excess pneumonia / seroprevalence** are cited claims, not Worobey findings (above).
4. **Contested in the literature at the same locator.** The science.org page for the
   erratum carries an eLetter by Andreas Martin Lisewski (Constructor University Bremen,
   dated 25 Mar 2024) arguing "lineage A and B cases were not closer to Wuhan's Huanan
   seafood market than statistically expected," and a reply from the original authors
   (30 Apr 2024) identifying "a number of fundamental flaws in Lisewski's approach"
   (normality assumption; standard-deviation estimation; only 100 null draws). Lisewski
   separately characterizes the *P* = 0.029 result as "borderline statistically significant
   (p = 0.029 at α = 0.05 level; Wilcoxon rank sum test)." If Erebus features the
   unlinked-cases-closer claim, this exchange is the symmetric undermining material and
   should be recorded alongside it. (Both texts read from the Wayback snapshots cited in
   §2 and §1; eLetters are not peer-reviewed and Science states they are "not edited,
   proofread, or indexed, but they are screened.")

---

## 2. **CRITICAL** — Erratum `10.1126/science.adp1133`: it attaches to WOROBEY

**Canonical citation.** "Erratum for the Research Article 'The Huanan Seafood Wholesale
Market in Wuhan was the early epicenter of the COVID-19 pandemic' by M. Worobey *et al.*,"
*Science* **383**(6688), eadp1133 (2024). DOI `10.1126/science.adp1133`.
Published in print **15 March 2024**; Crossref/PMC record online **14 March 2024**.
PMID 38484083; PMC11225943. Publisher: AAAS.

**Which paper it corrects.** Worobey et al., `10.1126/science.abp8715` — established three
independent ways: (a) the Crossref `update-to` record above; (b) the erratum's own title;
(c) the Worobey PMC deposit's own notice, "This article has been corrected. See Science.
2024 Mar 14;383(6688):eadp1133."

**How verified.** Crossref record fetched directly. Full text via Wayback snapshot
**2025-04-27** of `https://www.science.org/doi/10.1126/science.adp1133`. The PMC deposit
(PMC11225943) carries metadata only — NCBI efetch returns
"The publisher of this article does not allow downloading of the full text in XML form."
and Europe PMC `fullTextXML` returns empty — so the archived publisher page is the only
route to the body text.

### Verbatim erratum text (complete)

> On May 8 2023, a correction was posted to the Supplementary Material of the Research
> Article "The Huanan Seafood Wholesale Market in Wuhan was the early epicenter of the
> COVID-19 pandemic." Because this correction involved changes to the data files posted to
> Github, Science should have indexed it as a formal Erratum. The indexed version of the
> change was posted on 15 March 2024. The details of the Erratum do not substantively
> differ from those of the 8 May 2023 Correction and are as follows:
>
> It has been brought to the authors' attention that two files in the GitHub repository
> associated with the paper were identical: "distance_popdensityagegroups_null_35.csv"
> (located at https://github.com/sars-cov-2-origins/huanan-market/tree/main/data) and
> "distance_popdensityagegroups_null_120.csv" (located at
> https://doi.org/10.5281/zenodo.6786454). These files included median distances to the
> Huanan market of locations drawn from a Wuhan population density map, as described in the
> paper. In the original GitHub submission, the data in
> "distance_popdensityagegroups_null_35.csv" were incorrect. The median values in that file
> were duplicates of those in "distance_popdensityagegroups_null_120.csv."
>
> Upon inspection of these files, the authors also noticed that the number of
> pseudoreplicates contained in these two files and in one additional file
> ("distance_popdensityagegroups_null_155.csv") was 10,000 rather than the n = 1000 used
> for all related analyses. The authors therefore generated new versions of these three
> files with n = 1000 and re-ran all statistical tests in which any of the three files were
> used. **All results remained the same as previously reported: p < 0.001 and p-Adjusted
> (BH) = 0.003** for "distance_popdensityagegroups_null_35.csv," which now contains unique,
> updated data and a corrected n value, and the corrected versions of the original versions
> of "distance_popdensityagegroups_null_120. csv" and
> "distance_popdensityagegroups_null_155.csv" (see table S4). The authors have uploaded the
> three corrected files to their GitHub repository and archived the updated repository on
> Zenodo (https://doi.org/10.5281/zenodo.7887816).

*(Bold added here for emphasis only. The stray space in "distance_popdensityagegroups_null_120. csv"
is present in the retrieved page and is a publisher line-break artifact — do not reproduce
it as a filename.)*

### What it does and does not do

- It is a **data-file and pseudoreplicate-count correction**, not a reanalysis of a
  substantive conclusion.
- It **states the results did not change**: "All results remained the same as previously
  reported: p < 0.001 and p-Adjusted (BH) = 0.003."
- It records a **provenance history worth carrying**: an informal Supplementary-Material
  correction on **8 May 2023** that Science concedes "should have indexed … as a formal
  Erratum," formally indexed only on **15 March 2024** — a ten-month indexing gap. That is
  a legitimate, small, process-integrity observation about the publication record; it is
  not evidence about origins.

### The Rootclaim characterization belongs to a DIFFERENT erratum

**Erratum for Pekar et al.** "Erratum for the Research Article 'The molecular epidemiology
of multiple zoonotic origins of SARS-CoV-2' by J. E. Pekar *et al.*," *Science*
**382**(6667), eadl0585 (2023). DOI `10.1126/science.adl0585`. Published **13 October
2023**. PMID 37824677; PMC13244787.
Found by Crossref bibliographic search (it is not linked from the `adp1133` record);
full text via Wayback snapshot **2025-05-12** of
`https://www.science.org/doi/10.1126/science.adl0585`.

### Verbatim Pekar erratum text (complete)

> In the Research Article "The molecular epidemiology of multiple zoonotic origins of
> SARS-CoV-2," the frequency of simulated topologies matching phylogenetic structures
> arising from a single introduction was incorrectly reported because of an error in the
> code, which has been corrected. Correspondingly, the Bayes factors in favor of multiple
> introductions of severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2) into the
> human population relative to a single introduction were overestimated. The text now
> represents the corrected Bayes factors and topology frequency (Fig. 2C), which still
> favors the multiple introduction scenario. Bayes factor significance cutoffs from Kass
> and Raftery (1995) are now used throughout the text, including Table 1, where the
> probability of inferred ancestral haplotypes is reported. These cutoffs highlight the
> disagreement between the rooting inferred when using only human viruses (lineage B
> rooting) by comparison with incorporating the bat viruses through the recombinant common
> ancestor (lineage A rooting). This analysis independently supports the conclusion that
> lineages A and B were most likely the result of at least two cross-species transmissions
> of SARS-CoV-2.

### The size of the change, measured against both versions of Pekar

The erratum text does not give numbers. I recovered them by comparing the pre-correction
deposit against the corrected version of record:

| Quantity | Original (First Release / PMC9348752) | Corrected (version of record) |
| --- | --- | --- |
| BF, two introductions vs one, recCA rooting | 61.6 | 4.3 |
| BF, same, unconstrained rooting | 60.0 | 4.2 |
| Authors' own wording | "**strong** support" | "**substantial** support" |
| Simulation frequency of single-introduction lineage-A/B topology (Fig. 2C) | 0.5% | 3.1% |
| Simulation frequency of single-introduction C/C topology (Fig. 2B) | 0.1% | 0.0% |

Original, verbatim (PMC9348752, Results):

> Our epidemic simulations do not support a single introduction of SARS-CoV-2 giving rise to
> the observed phylogeny. We therefore quantified the relative support for two introductions
> resulting in the empirical topology. By synthesizing posterior probabilities of inferred
> ancestral haplotypes, frequencies of topologies in epidemic simulations, and the expected
> relationships between these haplotypes and topologies, we infer strong support favoring
> separate introductions of lineages A and B (BF=61.6 and BF=60.0 using the recCA and
> unconstrained rooting, respectively; see Methods).

Corrected, verbatim (Wayback snapshot **2025-07-04** of
`https://www.science.org/doi/full/10.1126/science.abp8337`, Results):

> …we inferred substantial support favoring separate introductions of lineages A and B
> (BF = 4.3 and BF = 4.2 by using the recCA and unconstrained rooting, respectively)
> [supplementary materials (SM), materials and methods]. This support is robust across
> shorter and longer doubling times, varying ascertainment rates, and minimum polytomy size
> (tables S4 and S5).

And, same version:

> Further, a topology corresponding to a single introduction of an ancestral lineage A or
> lineage B haplotype—characterized by a large basal polytomy and a large clade, comprising
> between 30 and 70% of taxa, two mutations from the root with no intermediate genomes—was
> observed in only 3.1% of our simulations (Fig. 2C and supplementary text).

### Recommendation

`ai_verified` for both errata.
*verificationNote:* Crossref `update-to` records establish that 10.1126/science.adp1133
corrects Worobey (abp8715) and 10.1126/science.adl0585 corrects Pekar (abp8337); full texts
read from Wayback snapshots of science.org dated 2025-04-27 and 2025-05-12 respectively, as
both PMC deposits carry metadata only.

### Discrepancies vs. the digest

1. **Brief 2 is right about the DOI.** `adp1133` *is* the Worobey erratum and *should* be
   linked alongside the original paper. Its content, however, is a null correction — it
   says results were unchanged — so linking it must not imply it weakened anything.
2. **The Rootclaim characterization is misattached and overstated.** The erratum on the
   lineage model is `adl0585`, not `adp1133`. It did reduce the Bayes factors by roughly
   fourteenfold (61.6 → 4.3), which is a real and citable weakening and should be recorded
   prominently under CONTENT_POLICY's fairness rule ("Corrections that weaken a featured
   hypothesis are recorded as prominently as evidence that supports it"). But "reduced its
   significance to negligible" is not supported by the document: the erratum says the
   corrected result "still favors the multiple introduction scenario," and BF ≈ 4.3 sits in
   the positive-evidence band of the Kass–Raftery cutoffs the erratum itself adopts. The
   honest evidence record is "reduced from strong to substantial support," with both numbers
   shown.
3. **The digest's year "2024" for the erratum is right only for the Worobey one.** The
   Pekar erratum is 2023.
4. **A third, separate correction notice exists on the Pekar page** and is not in the
   digest at all — see §3.

---

## 3. Pekar et al., *Science* 2022 — multiple zoonotic origins

**Canonical citation.** J. E. Pekar, A. Magee, E. Parker, N. Moshiri, K. Izhikevich, J. L.
Havens, K. Gangavarapu, L. M. Malpica Serrano, A. Crits-Christoph, N. L. Matteson, M.
Zeller, J. I. Levy, J. C. Wang, S. Hughes, J. Lee, H. Park, M.-S. Park, K. C. Z. Yan,
R. T. P. Lin, M. N. Mat Isa, Y. M. Noor, T. I. Vasylyeva, R. F. Garry, E. C. Holmes,
A. Rambaut, M. A. Suchard, K. G. Andersen, M. Worobey, J. O. Wertheim, "The molecular
epidemiology of multiple zoonotic origins of SARS-CoV-2," *Science* **377**(6609), 960–966
(2022). DOI `10.1126/science.abp8337`. PMID 35881005; PMC9348752.
First Release 26 July 2022; print issue 26 August 2022.
**Corrected by** Erratum DOI `10.1126/science.adl0585`, 13 October 2023 (§2).

**How verified.** Crossref metadata direct. Pre-correction text from the CC-BY First Release
deposit `PMC9348752` (direct fetch); corrected version of record from Wayback snapshot
**2025-07-04** of `https://www.science.org/doi/full/10.1126/science.abp8337`.

### Two lineages separated by two nucleotides

> Lineage A differs from lineage B by two nucleotide substitutions, C8782T and T28144C,
> which are also found in related coronaviruses from *Rhinolophus* bats (*4*), the presumed
> host reservoir (*7*). Lineage B viruses have a "C/T" pattern at these key sites (C8782 and
> T28144), whereas lineage A viruses have a "T/C" pattern (C8782T and T28144C).

*Locator:* Introduction, version of record. Unchanged by the erratum.

### Introduction-date estimates with HPD intervals

Abstract (version of record):

> The first zoonotic transmission likely involved lineage B viruses around 18 November 2019
> (23 October to 8 December), and the separate introduction of lineage A likely occurred
> within weeks of this event.

Results (version of record):

> Accounting for these dates and using the recCA rooting, we inferred the infection date of
> the lineage B primary case to be 18 November (95% HPD, 23 October to 8 December) and the
> infection date of the primary case of lineage A to be 25 November (95% HPD, 29 October to
> 14 December). The lineage B primary case predated that of lineage A in 64.6% of the
> posterior sample, by a median of 7 days (Fig. 3D and table S6).

Also, tMRCAs (First Release deposit): lineage B median 15 December (95% HPD 5–23 December),
lineage A median 20 December (95% HPD 5–29 December), recCA rooting; unconstrained-rooting
SARS-CoV-2 tMRCA 11 December 2019 (95% HPD 25 November – 12 December).

### Conclusion about multiple introductions

Abstract (version of record):

> Phylodynamic rooting methods, coupled with epidemic simulations, reveal that these
> lineages were most probably the result of at least two separate cross-species transmission
> events into humans. … These findings indicate that it is unlikely that SARS-CoV-2
> circulated widely in humans before November 2019 and define the narrow window between when
> SARS-CoV-2 first jumped into humans and when the first cases of COVID-19 were reported. As
> with other coronaviruses, SARS-CoV-2 emergence likely resulted from multiple zoonotic
> events.

Supporting, from the First Release Discussion:

> Here, we resolve this paradox by showing that early SARS-CoV-2 genomic diversity and
> epidemiology is best explained by at least two separate zoonotic transmissions, in which
> lineage A and B progenitor viruses were both circulating in non-human mammals prior to
> their introduction into humans (figs. S30 and S31).

### Errata attaching to this paper

**Yes — two distinct correction events.**

1. The substantive Erratum, DOI `10.1126/science.adl0585`, 13 October 2023 — the Bayes
   factor / topology frequency correction, quoted in full in §2.
2. A **separate erratum notice dated 12 October 2023** printed in the Supplementary
   Materials block of the version of record, verbatim:

> Erratum 12 October 2023:
>
> The original Supplementary Material versions are available here:
>
> In the print version of Pekar et al., "The molecular epidemiology of multiple zoonotic
> origins of SARS-CoV-2," Fig. 4 is printed incorrectly. The correct version can be viewed
> at https://www.science.org/doi/epdf/10.1126/science.abp8337.
>
> We apologize to readers and the authors for this error.
>
> During the processing of the previous correction for this paper, data files were
> inadvertently not uploaded to the new version. This affected data S1 and S2, which have
> now been uploaded.

*Locator:* version of record, Supplementary Materials block, Wayback snapshot 2025-07-04.
This is a figure-printing and data-file notice, distinct in date (12 vs 13 October 2023) and
in substance from `adl0585`. Whether Science treats these as one indexed erratum record with
two items, or two, could not be determined from the retrieved pages; I report only what each
page states.

### Recommendation

`ai_verified`.
*verificationNote:* Both the pre-correction First Release (PMC9348752) and the corrected
version of record (Wayback snapshot 2025-07-04 of science.org) were read; the two-nucleotide,
introduction-date, HPD and 64.6% figures are identical in both, while the Bayes factors and
Fig. 2C topology frequencies differ — cite the corrected values only.

### Discrepancies vs. the digest

1. **Date.** Digest "Jul 2022" is the First Release date; print citation is
   *Science* **377**(6609):960–966, 26 August 2022.
2. **"Lineage A within days to weeks after."** The paper's own phrasing is "within weeks of
   this event" (abstract) with a point estimate of 25 November (95% HPD 29 October – 14
   December) and a median 7-day gap. "Days to weeks" is a loose paraphrase; use the paper's
   wording and the HPD.
3. **"Simulations not supporting a single introduction."** Accurate as a paraphrase of "Our
   epidemic simulations do not support a single introduction," but this is exactly the
   sentence whose accompanying Bayes factors the erratum reduced. Any Erebus record on this
   point must cite the corrected numbers (BF 4.3 / 4.2, topology frequency 3.1%) and never
   the original ones (61.6 / 60.0, 0.5%). The digest currently carries none of these numbers,
   so this is a gap rather than an error.
4. **The digest does not mention the 12 October 2023 Fig. 4 / data-file notice.**

---

## 4. Crits-Christoph et al., *Cell* 2024 — genetic tracing of market wildlife

**Canonical citation.** A. Crits-Christoph, J. I. Levy, J. E. Pekar, S. A. Goldstein,
R. Singh, Z. Hensel, K. Gangavarapu, M. B. Rogers, N. Moshiri, R. F. Garry, E. C. Holmes,
M. P. G. Koopmans, P. Lemey, T. P. Peacock, S. Popescu, A. Rambaut, D. L. Robertson,
M. A. Suchard, J. O. Wertheim, A. L. Rasmussen, K. G. Andersen, M. Worobey, F. Débarre,
"Genetic tracing of market wildlife and viruses at the epicenter of the COVID-19 pandemic,"
*Cell* **187**(19), 5468–5482.e11 (19 September 2024).
DOI `10.1016/j.cell.2024.08.010`. PMID 39303692; PMC11427129.

**How verified.** Crossref metadata direct. `cell.com` is Cloudflare bot-walled and Wayback
playback for that URL returned HTTP 503 on repeated attempts, so the version of record could
not be read in full. **Two partial routes used:**
(a) **published abstract**, verbatim from the Europe PMC `core` record (which carries the
version-of-record abstract — it reads "SARS-CoV-2-positive" and "compare them with those,"
matching Cell's copyedited text);
(b) **author manuscript body text**, from the PMC deposit `PMC11427129` read via Wayback
snapshot **2026-08-20** of `https://pmc.ncbi.nlm.nih.gov/articles/PMC11427129/`. That deposit
is explicitly labelled "Author manuscript; available in PMC: 2025 Sep 19 … Published in final
edited form as: Cell. 2024 Sep 19;187(19):5468–5482.e11," and carries the publisher
disclaimer "This is a PDF file of an unedited manuscript that has been accepted for
publication."

**Consequence for locators:** body-text quotes below are from the accepted author manuscript.
Wording is very likely but not certainly identical to the version of record. **Re-check
against the published Cell text before any of these become a featured evidence record.**

### Susceptible mammal species whose mtDNA was found

Published abstract (route a), verbatim:

> …find increased SARS-CoV-2 positivity near and within a wildlife stall. We identify
> wildlife DNA in all SARS-CoV-2-positive samples from this stall, including species such as
> civets, bamboo rats, and raccoon dogs, previously identified as possible intermediate
> hosts. We also detect animal viruses that infect raccoon dogs, civets, and bamboo rats.

Author manuscript, Results (route b), verbatim:

> The five SARS-CoV-2-positive samples from wildlife stall A contained mtDNA from raccoon
> dogs, hoary bamboo rats, dogs (*Canis lupus familiaris*), and European rabbits
> (*Oryctolagus cuniculus*). Amur hedgehog and Malayan porcupine mtDNA was present in four
> samples, Reeves's muntjac (*Muntiacus reevesi*) and Himalayan marmot (*Marmota himalayana*)
> mtDNA was found in three, and one sample contained masked palm civet mtDNA (Figure 2D–H;
> Table S2). Of these species, raccoon dogs, rabbits, and dogs are documented as susceptible
> to SARS-CoV-2, with raccoon dogs experimentally confirmed as capable of transmission and
> in vitro evidence of civet susceptibility.

**All four species the digest names are confirmed present** — raccoon dog, masked palm
civet, hoary bamboo rat, Malayan porcupine — but at different sample counts: raccoon dog and
hoary bamboo rat in all five SARS-CoV-2-positive stall-A samples, Malayan porcupine in four,
masked palm civet in only one. The digest's flat list flattens that gradient.

Discussion, verbatim:

> Of the wildlife species detected in SARS-CoV-2 positive environmental samples, four have
> previously been implicated in bat coronavirus cross-species transmission through the animal
> trade: raccoon dogs, masked palm civets, hoary bamboo rats, and Malayan porcupines.

Also verifies the digest's "raccoon dog most abundant" claim:

> The common raccoon dog was the most abundantly detected animal species in market wildlife
> stalls sampled on January 12th, and in the wildlife stall with the most SARS-CoV-2 positive
> samples (Figure 3A; Table S2).

And:

> While all five positive samples from stall A contained human mtDNA, humans were not the
> most abundant mammalian species present in any of these samples (Figure 2D–H).

### Co-location with SARS-CoV-2-positive samples at a wildlife stall

Discussion, verbatim:

> Multiple lines of evidence are consistent with the infection of wildlife animals with
> SARS-CoV-2 in the Huanan market. Animal carts, a cage, a garbage cart, and a hair/feather
> removal machine from a wildlife stall tested positive for SARS-CoV-2, and there was more
> DNA from mammalian wildlife species in these samples than human DNA. The surrounding stalls
> also had relatively higher rates of SARS-CoV-2 positivity, and drains adjacent to and
> downstream of this wildlife stall tested positive for SARS-CoV-2.

### CRUCIAL — do the authors state this shows co-presence rather than animal infection?

**Yes, explicitly, in three places.** This is the most important thing in this entry and it
must travel with any co-location evidence record.

Discussion, verbatim:

> These data indicate either that the animals present at this stall shed the SARS-CoV-2
> detected on the animal equipment, or that early unreported human case(s) of COVID-19 shed
> virus in the exact same location as the detected animals. Under a zoonotic scenario, viral
> shedding by infected animal handlers is expected to occur after shedding by the animals
> they were infected by. Therefore human viral shedding post-zoonosis could plausibly also
> explain these data; in such a case, the animals brought into the stall are therefore still
> the most likely candidates for the zoonotic source. **While either animal or human viral
> shedding is consistent with these data, only a zoonotic origin of SARS-CoV-2 directly
> predicts co-detection of SARS-CoV-2 and wildlife genetic material.**

Discussion, verbatim:

> These results show that multiple plausible intermediate hosts of SARS-CoV-2 were present at
> the exact site within Wuhan to which COVID-19 was first epidemiologically linked. **It is
> not possible to conclude which of these species may have been infected and/or introduced
> the virus to the market from these data alone.** Nonetheless, our analysis provides a short
> and actionable list of species with genotypic details.

Limitations of the study, verbatim:

> Because the environmental metagenomic data used in this work cannot directly link viruses
> to their hosts in samples that contain DNA or RNA from multiple plausible host species
> (including humans), **our analysis cannot conclusively identify which species may have shed
> SARS-CoV-2 in different samples from the Huanan market.** Similarly, the exact timing of
> when viral or host genetic material were shed in the market environment can not be directly
> estimated.

They also disclaim the correlational approach used by some critics *and* by some proponents:

> As previously described, a correlational analysis would be unlikely to provide reliable
> insights into whether any particular species was or was not infected by SARS-CoV-2 within
> the market.

*(Bold added for emphasis only.)*

### Recommendation

`ai_verified` for the abstract; **`unverified` for the body-text quotes pending a read of the
version of record.**
*verificationNote:* Abstract verified against the Europe PMC version-of-record record;
body-text quotes taken from the accepted author manuscript (PMC11427129, Wayback snapshot
2026-08-20) because cell.com is bot-walled and Wayback playback of the Cell fulltext URL
returned HTTP 503 — wording must be re-checked against Cell 187(19):5468–5482.e11 before use.

### Discrepancies vs. the digest

1. **Author order.** The digest writes "Crits-Christoph, Débarre, Worobey et al." Débarre is
   the **last** author and Worobey second-to-last of 23. Cite as "Crits-Christoph et al."
2. **Date.** Digest "Sep 2024" is right; the precise citation is 19 September 2024,
   *Cell* 187(19):5468–5482.e11.
3. **Species detection is uneven, not uniform** (counts above). The digest's phrasing
   "wildlife DNA in all SARS-CoV-2-positive samples from that stall" is exact and correct;
   its species list is correct as a list of species detected somewhere in positive samples,
   but masked palm civet appears in only one of five.
4. **The digest omits the authors' own limitation** — that the data cannot establish which
   species was infected. Under CONTENT_POLICY §"Source statement vs. editor inference," this
   must be in the `sourceStatement` of any co-location evidence record, not left to an
   `editorInference`.

---

## 5. Liu et al., *Nature* — Huanan market surveillance (China CDC)

**Canonical citation.** W. J. Liu, P. Liu, W. Lei, Z. Jia, X. He, W. Shi, Y. Tan, S. Zou,
G. Wong, J. Wang, F. Wang, G. Wang, K. Qin, R. Gao, J. Zhang, M. Li, W. Xiao, Y. Guo, Z. Xu,
Y. Zhao, J. Song, J. Zhang, W. Zhen, W. Zhou, B. Ye, J. Song, M. Yang, W. Zhou, Y. Dai,
G. Lu, Y. Bi, W. Tan, J. Han, G. F. Gao, "Surveillance of SARS-CoV-2 at the Huanan Seafood
Market," *Nature* **631**(8020), 402–408 (2024). DOI `10.1038/s41586-023-06043-2`.
PMID 37019149.
**Publication history (from Crossref `assertion` records):** received 17 February 2022;
accepted 3 April 2023; first online (Accelerated Article Preview) **5 April 2023**; print
issue **11 July 2024**; change date 1 July 2024 (publisher correction, below).

**How verified.** Crossref metadata direct. Full text fetched directly from
`https://www.nature.com/articles/s41586-023-06043-2` (HTTP 200; Crossref marks the article
"This content has been made available to all"). Abstract cross-checked against the Europe PMC
`core` record.

### The 923 environmental samples

Abstract, verbatim:

> From 1 January 2020, after closure of the market, 923 samples were collected from the
> environment. From 18 January, 457 samples were collected from 18 species of animal,
> comprising unsold contents of refrigerators and freezers, swabs from stray animals and the
> contents of a fish tank. Using quantitative real-time polymerase chain reaction (RT-qPCR)
> and high-throughput sequencing (Bowtie2 analysis), SARS-CoV-2 was detected in 74 (70
> RT-qPCR and 4 Bowtie2) environmental samples, but none of the animal samples.

Results, verbatim:

> Out of the 923 environmental samples collected in and around the HSM, 74 were found by the
> quantitative real-time polymerase chain reactions (RT-qPCR, 70 positive samples) and
> high-throughput sequencing (Bowtie2 analysis, 4 positive samples with non-3' poly-A reads)
> to be positive for SARS-CoV-2 with a positivity rate of 8.0%.

Bonus, corroborating Worobey's western-section point from the Chinese CDC's own data:

> Among the 828 samples from inside the HSM, 64 samples (7.7%) were positive. Of the 64
> SARS-CoV-2-positive samples collected inside the HSM, 87.5% (56/64) were collected in the
> West Zone of the market, particularly in streets 1 to 8, with 71.4% (40/56) positive samples
> identified herein (Fig. 1a).

### Sampling began after the 1 January 2020 closure

Results, verbatim:

> The market was closed in the morning of 1 January 2020, shortly after the identification of
> the pneumonia of unknown aetiology. On the same day, in the early morning, the Chinese Center
> for Disease Control and Prevention (China CDC) dispatched an epidemiological team, together
> with experts from Hubei Provincial CDC and Wuhan Municipal CDC, to the HSM to collect
> environmental samples and study the potential introduction of SARS-CoV-2 into the market
> (Fig. 1b). From 1 January 2020 until 2 March 2020, a total of 923 environmental samples from
> different locations within and around the market and 457 animal samples, including dead
> animals in refrigerators and freezers and stray animals and their faeces, were collected,
> with some stray animals sampled until 30 March (Extended Data Tables 1–3 and Supplementary
> Table 1).

Methods, verbatim:

> The HSM was closed in the early morning of 1 January 2020, and at the same time, the China
> CDC began collecting environmental and animal samples. Staff from the China CDC entered the
> market about 30 times before the market's final clean-up on 2 March 2020, with some stray
> animals sampled outside the market until 30 March.

Also relevant to what the environmental samples could still show, verbatim:

> After the closure of the market, the outside surface of the rolling shutter doors of the
> stalls and the corridors were disinfected (with 1% bleach mixed with water) throughout
> January and February 2020. The goods inside the stalls were completely cleared and
> disinfected until early March 2020.

### No infected source animal demonstrated

Results, verbatim:

> The 457 animal samples included 188 individuals belonging to 18 species (with some stray
> animals sampled until 30 March; Extended Data Table 6). The sources of the samples included
> unsold goods kept in refrigerators and freezers in the stalls of the HSM, and goods kept in
> warehouses and refrigerators related to the HSM. Three Chinese giant salamanders, which were
> found in a fish tank, were alive and swab samples were collected and tested. Samples from
> stray animals in the market were also collected, comprising swab samples from 10 cats, 27
> samples of cat faeces, 1 dog, 1 weasel and 10 rats. **All of the 457 animal samples tested
> negative for SARS-CoV-2 nucleic acid.**

*(Bold added for emphasis only.)*

**Critical qualification, which the digest should carry:** the animals sampled were not the
candidate intermediate hosts. Crits-Christoph et al. state this explicitly about this very
dataset — "Neither sampling nor qPCR testing of any of the raccoon dogs or civets on sale in
the market have been reported, and no serology from any animals or their handlers in the
market has been described" (author manuscript, Introduction). So "all animal samples tested
negative" is weak negative evidence on the intermediate-host question, and must be recorded
with its scope, not as a clean disconfirmation.

### Corrections attaching to this paper

Two, both minor, both worth recording for provenance accuracy:

1. A **"Note added in proof"** in the version of record, verbatim in part:

> The original, unedited Accelerated Article Preview (AAP) version of this Article contained
> some errors, which have been corrected in the final proof. In the AAP version, we provided
> the results of analysis performed in early 2020 and reported that SARS-CoV-2 was detected in
> 73 of the 923 environmental samples by RT–PCR. However, this was incorrect. SARS-CoV-2 had
> been detected in 70 of the samples by RT–PCR, and SARS-CoV-2 reads had been detected in an
> additional 3 samples (Env-0552, Env-0576 and Env-0585) by next-generation sequencing (NGS)
> … have indicated in the paper that 74 samples tested positive for SARS-CoV-2: 70 by RT–PCR
> and an additional 4 by NGS (using Bowtie2 analysis).

**So the positive-sample count is 74 in the version of record and 73 in the widely cited AAP
version.** Any record citing a positive count must cite 74 and the 2024 version.

2. A publisher correction dated **1 July 2024**, from the Crossref `change_details`
   assertion, verbatim:

> In the version of this article initially published there was a publisher error at the end of
> the Note added in proof, where the sample "Env_0313 (F13)" was mistakenly listed in both
> conditions. The sentence has been corrected to read "Consistent with Fig. 1a, samples
> Env_0313 (F13) and Env_0126 (B5), but not Env_0354 (F54), were from stalls with confirmed
> cases" in the HTML and PDF versions of the article.

### Recommendation

`ai_verified`.
*verificationNote:* Full text read directly from nature.com (freely available); all three
digest claims confirmed verbatim; cite the version of record, Nature 631(8020):402–408 (2024),
not the 2023 Accelerated Article Preview.

### Discrepancies vs. the digest

1. **YEAR AND CITATION ARE WRONG in the digest.** It gives "Liu et al., *Nature*, Apr 2023."
   April 2023 is the Accelerated Article Preview date. The **version of record is *Nature*
   **631**(8020):402–408, print issue 11 July 2024**. The DOI and URL in the digest are
   correct and resolve to the 2024 version. Independent corroboration: the Venter et al.
   *Nature* comment (§10) cites this paper in its own reference list as "Liu, W. J. et al.
   *Nature* **631**, 402–408 (2024)."
2. **Positive-sample count changed between versions** (73 → 74); the digest does not give a
   count, so this is a trap to avoid rather than an existing error.
3. **Internal tension on animal-sampling start date.** The abstract says "From 18 January, 457
   samples were collected from 18 species of animal"; the Results say the 923 environmental
   *and* 457 animal samples were collected "From 1 January 2020 until 2 March 2020." Prefer
   the abstract's 18 January for animal sampling specifically, and note the discrepancy rather
   than silently picking one.
4. **"No infected source animal demonstrated"** is accurate but needs the scope qualification
   above; the digest states it flatly.

---

## 6. Huang et al., *The Lancet* 2020 — first 41 patients

**Canonical citation.** C. Huang, Y. Wang, X. Li, L. Ren, J. Zhao, Y. Hu, L. Zhang, G. Fan,
J. Xu, X. Gu, Z. Cheng, T. Yu, J. Xia, Y. Wei, W. Wu, X. Xie, W. Yin, H. Li, M. Liu, Y. Xiao,
H. Gao, L. Guo, J. Xie, G. Wang, R. Jiang, Z. Gao, Q. Jin, J. Wang, B. Cao, "Clinical features
of patients infected with 2019 novel coronavirus in Wuhan, China," *The Lancet* **395**(10223),
497–506 (2020). DOI `10.1016/S0140-6736(20)30183-5`. PMID 31986264; PMC7159299.
Published online 24 January 2020; issue dated 15 February 2020.

**How verified.** Crossref metadata direct; full text from Europe PMC deposit `PMC7159299`
(direct fetch, open access). No erratum found on the Crossref record.

### 41 patients and 27 of 41 (66%) with market exposure

Summary/Findings, verbatim:

> By Jan 2, 2020, 41 admitted hospital patients had been identified as having
> laboratory-confirmed 2019-nCoV infection. … 27 (66%) of 41 patients had been exposed to
> Huanan seafood market.

Results, verbatim:

> 27 (66%) patients had direct exposure to Huanan seafood market (figure 1B). Market exposure
> was similar between the patients with ICU care (nine [69%]) and those with non-ICU care (18
> [64%]).

Methods, verbatim, on the denominator: "Of 59 suspected cases, 41 patients were confirmed to
be infected with 2019-nCoV." And "The admission data of these patients was from Dec 16, 2019,
to Jan 2, 2020."

### First patient symptom onset 1 December 2019, and the exact sentence on epidemiological linkage

Results, verbatim, consecutive sentences:

> The symptom onset date of the first patient identified was Dec 1, 2019. None of his family
> members developed fever or any respiratory symptoms. **No epidemiological link was found
> between the first patient and later cases.** The first fatal case, who had continuous
> exposure to the market, was admitted to hospital because of a 7-day history of fever, cough,
> and dyspnoea. 5 days after illness onset, his wife, a 53-year-old woman who had no known
> history of exposure to the market, also presented with pneumonia and was hospitalised in the
> isolation ward.

*Locator:* Results, first paragraph of the epidemiological/clinical characteristics section.
*(Bold added for emphasis only.)*

### Recommendation

`ai_verified`.
*verificationNote:* All four digest claims confirmed verbatim from the open-access Europe PMC
full text (PMC7159299); Crossref confirms Lancet 395(10223):497–506 and shows no erratum.

### Discrepancies vs. the digest

1. **Capitalization only.** The digest renders the quote as "no epidemiological link was found
   between the first patient and later cases"; the paper's sentence begins the sentence, so it
   is "No epidemiological link was found between the first patient and later cases." Quote it
   with the capital N.
2. **Date.** The digest's "24 Jan / 15 Feb 2020" is exactly right: online 24 January, issue 15
   February. Good as written.
3. The digest says "41 patients hospitalized by 2 Jan 2020" — the paper says "By Jan 2, 2020,
   41 admitted hospital patients had been identified as having laboratory-confirmed 2019-nCoV
   infection," which is identification by that date among patients admitted from 16 December
   onward. Minor, but prefer the paper's wording.

---

## 7. Zhou et al., *Nature* 2020 — RaTG13

**Canonical citation.** P. Zhou, X.-L. Yang, X.-G. Wang, B. Hu, L. Zhang, W. Zhang, H.-R. Si,
Y. Zhu, B. Li, C.-L. Huang, H.-D. Chen, J. Chen, Y. Luo, H. Guo, R.-D. Jiang, M.-Q. Liu,
Y. Chen, X.-R. Shen, X. Wang, X.-S. Zheng, K. Zhao, Q.-J. Chen, F. Deng, L.-L. Liu, B. Yan,
F.-X. Zhan, Y.-Y. Wang, G.-F. Xiao, Z.-L. Shi, "A pneumonia outbreak associated with a new
coronavirus of probable bat origin," *Nature* **579**(7798), 270–273 (2020).
DOI `10.1038/s41586-020-2012-7`. PMID 32015507; PMC7095418.
Published online 3 February 2020; print issue 12 March 2020.

**How verified.** Crossref metadata direct; full text from Europe PMC deposit `PMC7095418`
(direct fetch, open access).

### The whole-genome identity figure, exactly as published

> We then found that a short region of RNA-dependent RNA polymerase (RdRp) from a bat
> coronavirus (BatCoV RaTG13)—which was previously detected in *Rhinolophus affinis* from
> Yunnan province—showed high sequence identity to 2019-nCoV. We carried out full-length
> sequencing on this RNA sample (GISAID accession number EPI_ISL_402131). Simplot analysis
> showed that 2019-nCoV was highly similar throughout the genome to RaTG13 (Fig. 1c), **with
> an overall genome sequence identity of 96.2%.**

*Locator:* Results, first paragraph on RaTG13 (paragraph containing Fig. 1c reference).
*(Bold added for emphasis only.)*

Same paragraph, on the spike gene — relevant to the "too distant to be the immediate
precursor" framing:

> The receptor-binding spike protein encoded by the S gene was highly divergent from other
> CoVs (Extended Data Fig. 2), with less than 75% nucleotide sequence identity to all
> previously described SARSr-CoVs, except for a 93.1% nucleotide identity to RaTG13 (Extended
> Data Table 3).

And the paper's own conclusion on relatedness: "The close phylogenetic relationship to RaTG13
provides evidence that 2019-nCoV may have originated in bats."

### Recommendation

`ai_verified`.
*verificationNote:* "96.2%" confirmed verbatim from the open-access Europe PMC full text
(PMC7095418); Crossref confirms Nature 579(7798):270–273.

### Discrepancies vs. the digest

1. **The digest's "~96.2%" is exactly right for this paper**, and its "brief 1 gives
   96.1–96.3%" range is loose but not wrong as a range across sources.
2. **A real literature discrepancy the digest should record.** Two later peer-reviewed sources
   verified in this same run give RaTG13 as **96.1%**, not 96.2%: Temmam et al. 2022 ("96.8%
   for BANAL-52 and 96.1% for RaTG13") and Venter et al. 2026 ("RaTG13, which shares 96.1% of
   its genetic code with SARS-CoV-2"). If Erebus states a RaTG13 identity figure it should
   attribute the number to its source rather than assert a single canonical value.
3. **The digest's gloss "showing RaTG13 too distant to be the immediate precursor" is an
   inference, not a Zhou et al. statement.** Zhou et al. do not say this; they report the
   identity figures and conclude bat origin. The "too distant to be a direct progenitor"
   framing does appear verbatim in Venter et al. 2026 (§10) and, per the digest, in the ODNI
   assessment. Attribute it there, not to Zhou.

---

## 8. Andersen et al., *Nature Medicine* 2020 — "The proximal origin of SARS-CoV-2"

**Canonical citation.** K. G. Andersen, A. Rambaut, W. I. Lipkin, E. C. Holmes, R. F. Garry,
"The proximal origin of SARS-CoV-2," *Nature Medicine* **26**(4), 450–452 (2020).
DOI `10.1038/s41591-020-0820-9`. PMID 32284615; PMC7095063.
Published online 17 March 2020; print issue April 2020.
Nature's own metadata types it `dc.type = Letter`.

**How verified.** Crossref metadata direct; full text from Europe PMC deposit `PMC7095063`
(direct fetch, open access); article page fetched directly from nature.com for the metrics.
No erratum on the Crossref record.

### Both requested quotes, verbatim, with section locators

**Quote 1 — "not a laboratory construct or a purposefully manipulated virus."**
Located in the **unheaded opening section** (the introduction, immediately before the heading
"Notable features of the SARS-CoV-2 genome"), as the **final sentence of that section**:

> Here we review what can be deduced about the origin of SARS-CoV-2 from comparative analysis
> of genomic data. We offer a perspective on the notable features of the SARS-CoV-2 genome and
> discuss scenarios by which they could have arisen. **Our analyses clearly show that
> SARS-CoV-2 is not a laboratory construct or a purposefully manipulated virus.**

**Quote 2 — "we do not believe that any type of laboratory-based scenario is plausible."**
Located in the **"Conclusions"** section, as the **final clause of its opening paragraph**:

> The genomic features described here may explain in part the infectiousness and
> transmissibility of SARS-CoV-2 in humans. Although the evidence shows that SARS-CoV-2 is not
> a purposefully manipulated virus, it is currently impossible to prove or disprove the other
> theories of its origin described here. However, since we observed all notable SARS-CoV-2
> features, including the optimized RBD and polybasic cleavage site, in related coronaviruses
> in nature, **we do not believe that any type of laboratory-based scenario is plausible.**

*(Bold added for emphasis only. Both quotes are exact, including "any type of
laboratory-based scenario is plausible" with no elision.)*

**Section structure of the paper, for locator precision** (from the PMC XML): unheaded
introduction → "Notable features of the SARS-CoV-2 genome" (subsections 1. Mutations in the
receptor-binding domain of SARS-CoV-2; 2. Polybasic furin cleavage site and O-linked glycans)
→ "Theories of SARS-CoV-2 origins" (1. Natural selection in an animal host before zoonotic
transfer; 2. Natural selection in humans following zoonotic transfer; 3. Selection during
passage) → "Conclusions."

### Access count

The nature.com article page, fetched **2026-08-26**, displays "6.21m Accesses." The digest's
">5.6 million accesses" per brief 1 is therefore consistent and now conservative. Note that
this is a live, monotonically increasing metric: if Erebus cites it at all, it must be cited
with the retrieval date, and it carries no evidential weight on origins.

### Recommendation

`ai_verified`.
*verificationNote:* Both quotes confirmed verbatim from the open-access Europe PMC full text
(PMC7095063), with section locators (introduction; Conclusions); Crossref confirms Nature
Medicine 26(4):450–452 and shows no erratum.

### Discrepancies vs. the digest

1. **The second quote is a fragment in the digest.** "not a laboratory construct or a
   purposefully manipulated virus" is the tail of "Our analyses clearly show that SARS-CoV-2 is
   not a laboratory construct or a purposefully manipulated virus." Quote the full sentence —
   the subject clause ("Our analyses clearly show that") is exactly the part later contested,
   and dropping it weakens the record in both directions.
2. **Article type.** This is a short commentary-style piece typed by the publisher as a
   `Letter` (three pages, 450–452), not a research article. Given how heavily it is invoked on
   both sides, the record should say so.
3. **Access count is a live metric** — 6.21m as of 2026-08-26, not the 5.6m in the digest.

---

## 9. Temmam et al., *Nature* — BANAL viruses, Laos

**Canonical citation.** S. Temmam, K. Vongphayloth, E. Baquero, S. Munier, M. Bonomi,
B. Regnault, B. Douangboubpha, Y. Karami, D. Chrétien, D. Sanamxay, V. Xayaphet,
P. Paphaphanh, V. Lacoste, S. Somlor, K. Lakeomany, N. Phommavanh, *et al.*, "Bat
coronaviruses related to SARS-CoV-2 and infectious for human cells," *Nature* **604**(7905),
330–336 (2022). DOI `10.1038/s41586-022-04532-4`. PMID 35172323.
**Published online 16 February 2022; print issue 14 April 2022.**

**How verified.** Crossref metadata direct (DOI resolves; year and pagination confirmed).
Full text fetched directly from `https://www.nature.com/articles/s41586-022-04532-4`
(HTTP 200). Abstract cross-checked against the Europe PMC `core` record.

### DOI and YEAR — the digest's suspicion resolved

**The DOI in the digest is correct and the year is 2022, not 2021.** Crossref gives
`published-online` 2022-02-16 and `published-print` 2022-04-14, *Nature* 604:330–336. There is
no 2021 published version; a 2021 date would refer only to preprint/submission material, which
is not citable here. The digest's footnote-74 transcription needs no change beyond fixing the
citation year to 2022 where the briefs say otherwise.

### The BANAL-52 identity figure

Results, verbatim:

> These results are consistent with the similarity plot analysis showing that RaTG13 and
> BANAL-52 bat coronaviruses exhibit high nucleotide identity with SARS-CoV-2 throughout the
> length of the genome (**96.8% for BANAL-52 and 96.1% for RaTG13**). Notably, BANAL-52 has a
> higher level of nucleotide conservation than RaTG13 in the S1 domain of the spike protein,
> and especially in the amino-terminal domain (NTD) and RBD of the spike protein (Fig. 1c).

*Locator:* Results, paragraph reporting the complete genomic sequences and similarity plot
(the paragraph referencing Fig. 1b–d). *(Bold added for emphasis only.)*

### Related bat-virus RBDs engaging human ACE2

Abstract, verbatim:

> We found that the receptor-binding domains of these viruses differ from that of SARS-CoV-2
> by only one or two residues at the interface with ACE2, bind more efficiently to the hACE2
> protein than that of the SARS-CoV-2 strain isolated in Wuhan from early human cases, and
> mediate hACE2-dependent entry and replication in human cells, which is inhibited by
> antibodies that neutralize SARS-CoV-2. **None of these bat viruses contains a furin cleavage
> site in the spike protein.** Our findings therefore indicate that bat-borne SARS-CoV-2-like
> viruses that are potentially infectious for humans circulate in *Rhinolophus* spp. in the
> Indochinese peninsula.

*(Bold added for emphasis only.)* The furin-cleavage-site sentence is negative evidence the
digest does not record and should — it is the same abstract, from the same authors, and it cuts
against the natural-FCS reading that §5.1's IntechOpen and Virological.org rows bear on.

The paper also states the standing problem plainly, in the introduction: "the closest
SARS-CoV-2 bat-borne genome still remains the one from *R. affinis*, RaTG13 (China, 2013),
with 96.1% identity at the whole-genome level."

### Recommendation

`ai_verified`.
*verificationNote:* DOI 10.1038/s41586-022-04532-4 resolves to Nature 604(7905):330–336,
online 16 Feb 2022 / print 14 Apr 2022 — year is 2022, not 2021; "96.8% for BANAL-52" confirmed
verbatim from the full text fetched directly from nature.com.

### Discrepancies vs. the digest

1. **Year resolved: 2022.** The digest's flagged uncertainty ("verify; the DOI year may be
   2021") is settled — the URL and DOI as printed in brief 2's footnote 74 are correct and
   point at a 2022 paper.
2. **Title.** The digest gives no title; the correct one is "Bat coronaviruses related to
   SARS-CoV-2 and infectious for human cells."
3. **RaTG13 figure differs from Zhou et al.** — 96.1% here vs 96.2% in Zhou et al. (§7).
4. **Missing negative evidence.** "None of these bat viruses contains a furin cleavage site in
   the spike protein" belongs in the digest's row for this paper, per AGENTS.md §3.11.

---

## 10. Venter et al., *Nature* 2026 — "COVID's origins: what we do and don't know"

**Canonical citation.** M. Venter, J.-C. Manuguerra, J. M. Watson, T. K. Fischer,
S. D. Blacksell, K. Summermatter, I. K. Damon, C. Drosten, P. Alviola, A. Assiri, E. Farag,
R. Gangakhedkar, N. Ghosn, M. G. Guzman, C. Happi, G. Kalema-Zikusoka, N. Labbé, K. Myint,
H. Nguyen-Viet, C. Ochu, M. Saijo, R. Sang, S. Wacharapluesadee, "COVID's origins: what we do
and don't know," *Nature* **650**, 829–833 (2026). DOI `10.1038/d41586-026-00530-y`.
Published **24 February 2026**.

**How verified.** URL in the digest resolves (HTTP 200). Full text fetched directly from
`https://www.nature.com/articles/d41586-026-00530-y`; Crossref record retrieved for authorship,
volume, pages and date; publisher HTML metadata inspected for article type.

### Existence, authorship, and "how many former SAGO members"

**Exists. 23 authors.** The Crossref author list contains exactly 23 names, first author
Marietjie Venter, matching the article's own opening sentence, verbatim:

> We are 23 of the 27 original members of the Scientific Advisory Group for the Origins of
> Novel Pathogens (SAGO) for the World Health Organization (WHO). After nearly 3.5 years of
> deliberations, we concluded our independent assessment of the origin of the coronavirus
> SARS-CoV-2, and provided our report in June 2025 to the WHO director-general.

**They are *former* members**, as the digest says, and the article says so itself, verbatim:

> Although the term of the first SAGO group ended in October last year, meaning we are no
> longer members, the WHO has proposed a second term for SAGO and issued a call for new
> participants.

**And it discloses internal dissent — which the digest omits and which matters for how much
weight the piece carries.** Verbatim:

> Of the four original members of SAGO who are not co-authors of this article, one resigned
> before the 2025 report was finalized. Three others dissented from our decision to evaluate
> the possibility that SARS-CoV-2 had leaked from a laboratory on the basis of there being no
> evidence for this (see hypotheses three and four below). We are grateful to all four for
> their contributions to our investigation. One of us (M.G.G.), whose name is on the 2025
> report, requests that her dissent regarding the evaluation of the lab-leak hypotheses be
> noted.

And, verbatim:

> We stress that we are solely responsible for the views expressed in this article, and that
> such views do not necessarily represent the views, decisions or policies of the WHO, or of
> any institutions that we are affiliated with.

### Comment, not a research article — CONFIRMED

Publisher HTML metadata on the article page reads `name="dc.type" content="Comment"` and
`name="prism.section" content="News"`. The `d41586-` DOI prefix is Nature's editorial
news-and-comment content, not its peer-reviewed research stream. The piece contains no methods
and reports no new data; it summarizes the authors' 2025 SAGO report in, as they put it, "a
more accessible way." The authors themselves draw the line, verbatim:

> We also stress that formal scientific evaluation of findings requires peer-reviewed
> publication.

**So this is an authoritative-authorship secondary source, not primary evidence.** Under
CONTENT_POLICY it points at the SAGO report (§5.2 of the digest) and is superseded by it.

### The DEFUSE argument — verbatim

The relevant passage, in the section headed "Challenging widely circulating theories":

> The DEFUSE grant proposal mentions a vaccine technology based on recombinant chimeric live
> coronavirus vectors, which contain parts of different *Sarbecovirus* genomes. It also
> mentions recombinant expression of synthetic genes encoding chimeric spike proteins. These
> are proteins (not viruses) that consist of parts of the spike protein of a bat coronavirus,
> SHC014-CoV, parts of another previously known bat coronavirus, HKU3, as well as parts of
> SARS-CoV-1.

> The SHC014-CoV sequence was provided by a researcher at the Wuhan Institute of Virology, and
> a research team at the University of North Carolina at Chapel Hill conducted binding assays
> to determine whether SHC014-CoV is capable of infecting human cells with ACE2 receptors. But
> **the genome elements making up the recombinant chimeric live coronavirus do not belong to
> the clade to which SARS-CoV-2 belongs** (a clade is a group of genetically similar viruses).
> Indeed, the terms recombinant and chimeric have different meanings depending on whether they
> are being used for live viruses or mere proteins.

> Although some of the researchers submitting the DEFUSE grant application held patents on
> recombinant chimeric live coronavirus vectors, they did not propose to vaccinate bats using
> this technology. In their grant application — which was never actually funded — they proposed
> using only recombinant proteins (or subunit antigens) to vaccinate bats. These cannot
> replicate or spread.

> Thus, contrary to the theories put forward, there was never any intention to use spreading,
> coronavirus-derived vaccine vectors on bats. **Even if the DEFUSE grant application had been
> approved, and even if the researchers had used the recombinant chimeric live virus technology
> in human cell lines or lab animals, it is scientifically implausible for SARS-CoV-2 to have
> been derived from the genome elements in the chimeric vaccine backbone or proposed spike
> protein.**

*(Bold added for emphasis only.)*

**Note the precise form of the argument.** The digest paraphrases it as "DEFUSE backbones and
spike components too evolutionarily distant to be a plausible direct precursor." The paper's
actual stated ground is **clade membership** — "the genome elements … do not belong to the
clade to which SARS-CoV-2 belongs" — concluding it "scientifically implausible." That is
adjacent to but not identical with "too evolutionarily distant," and it is asserted without
a quantitative distance measure or a supporting citation at that sentence. Record the
authors' wording, not the paraphrase.

### The self-spreading-vaccine clarification — verbatim, and confirmed

> Some have argued that, in trying to design a vaccine to reduce the load of coronaviruses in
> bats, researchers in the United States used reverse genetics to create SARS-CoV-2, which then
> escaped from a lab in China. Another widely circulating theory is that the virus could have
> escaped from animal experiments conducted in US labs. In the end, we decided to address these
> theories in our report to highlight some of the misconceptions, misinterpretations and
> speculations on which they are based.

Combined with "they did not propose to vaccinate bats using this technology … they proposed
using only recombinant proteins (or subunit antigens) … These cannot replicate or spread" and
"there was never any intention to use spreading, coronavirus-derived vaccine vectors on bats,"
this confirms the digest's second claim for this row.

### Bonus: this Comment concedes a point that cuts against the market hypothesis

Worth recording under AGENTS.md §3.11, verbatim from "Outstanding questions":

> **No animal testing positive for SARS-CoV-2 has ever been reported in China.** Yet it is
> unlikely that none was infected given the number of susceptible species that were in markets
> in the Wuhan region during the pandemic — and given that hundreds of infections were reported
> in species, such as ferrets, tigers, domestic cats and white-tailed deer, in the rest of the
> world from 2020 to 2023.

And, on the market itself:

> …although it remains unclear whether the virus first infected humans at Huanan, or whether the
> spillover event occurred earlier, with the virus subsequently being carried to the market by
> infected humans or animals.

*(Bold added for emphasis only.)*

### Recommendation

`ai_verified`.
*verificationNote:* Exists at the digest's URL; full text fetched directly from nature.com;
Crossref confirms Nature 650:829–833, 24 Feb 2026, with exactly 23 authors matching "23 of the
27 original members of SAGO"; publisher metadata `dc.type=Comment` / `prism.section=News`
confirms it is a Comment, not a research article, and it must be treated as a secondary source
superseded by the June 2025 SAGO report.

### Discrepancies vs. the digest

1. **Date and citation.** Digest "24 Feb 2026" is right; add *Nature* **650**:829–833.
2. **"23 former SAGO members" is correct**, but the digest omits that 4 of the 27 declined,
   3 of them dissenting specifically from the decision to evaluate the lab-leak hypothesis,
   and that one co-author (M.G.G.) noted her own dissent. That is material to the piece's
   weight and belongs in the record.
3. **The DEFUSE argument's stated ground is clade membership, not quantified evolutionary
   distance** (above). The digest's paraphrase should be replaced by the quotation.
4. **This is a Comment.** The digest already labels it "Nature comment," which is right; the
   record must not let its 23-expert authorship read as peer review.

---

## 11. Rahalkar & Bahulikar, *Frontiers in Public Health* 2020 — Mojiang miners

**Canonical citation.** M. C. Rahalkar, R. A. Bahulikar, "Lethal Pneumonia Cases in Mojiang
Miners (2012) and the Mineshaft Could Provide Important Clues to the Origin of SARS-CoV-2,"
*Frontiers in Public Health* **8**, 581569 (2020). DOI `10.3389/fpubh.2020.581569`.
PMID 33194988; PMC7606707. Published 20 October 2020.
**Two authors only** — both at Indian institutions (MACS Agharkar Research Institute, Pune;
BAIF Development Research Foundation, Pune).
PMC XML types it `article-type="correction"`-free but `brief-report`, with subject terms
"Public Health" and **"Perspective."**

**How verified.** Crossref metadata direct; full text from Europe PMC deposit `PMC7606707`
(direct fetch, open access). No erratum on the Crossref record.

### The basic facts

**April 2012, Tongguan mineshaft, six miners, three deaths — all confirmed.** Verbatim,
"Mojiang Mineshaft Associated With Lethal Pneumonia Cases in Miners (2012)":

> In April 2012, a pneumonia-like illness occurred in six miners who were cleaning bat feces
> from a copper mineshaft in Mojiang, Yunnan, in 2012, killing three of them (4).

Verbatim, from the section drawing on the Master's thesis:

> According to the Master's thesis, in April 2012, six miners were given a job of clearing bat
> waste and bat feces from a copper mineshaft in **Tongguan**, Mojiang, Yunnan. After working
> for ~14 days in the case of four miners, and 4–5 days in the case of the last two miners,
> they started facing breathing problems, cough, and fever which required immediate admission
> to the Kunming hospital in late April and early May (7). **Three of the miners died in the
> course of ~100 days and three survived** (Table 1A).

Abstract, verbatim:

> It was found that RaTG13/CoV4991 was collected from Tongguan mineshaft in Mojiang, Yunnan,
> China, in 2013. Surprisingly, the same mineshaft was also associated with a severe
> pneumonia-like illness in miners in 2012 killing three of the six miners.

*(Bold added for emphasis only.)*

### Zhong Nanshan's remote consultation — confirmed, with names

Verbatim:

> **Dr. Zhong Nanshan**, a doctor for respiratory diseases and a national advisor for the SARS
> and COVID-19 epidemic, **had provided remote consultation for patients 3 and 4**, the most
> serious patients. Patients 3 and 4 remained in the hospital for more than 100 days. … Dr.
> Nanshan's diagnosis for patients 3 and 4 were interstitial pneumonia (primarily of viral
> origin), with a possibility of secondary infection (invasive pulmonary aspergillosis). He
> requested swab testing and SARS antibody testing (to be carried in WIV).

### The WIV sampling period — the digest's "2012–2015" is NOT what this paper says

Verbatim:

> After the outbreak, WIV conducted longitudinal surveillance of the bat coronaviruses in the
> Mojiang mine (10). The mineshaft had six bat types of which the highest number of *Rhinolophus*
> sp. (horseshoe bats) were sampled. **Sample collections were done four times between August
> 2012 and July 2013.** A total of 150 alphacoronaviruses and only two betacoronaviruses, of
> which only one was SARS-like betacoronavirus (CoV/4991), were detected (10). The same virus
> 4991 was renamed as RaTG13, which is the next genetic relative of SARS-CoV-2 (12).

And, separately, on visits by researchers generally:

> According to the literature, three research groups went to the Mojiang mine to collect samples
> between 2012 and October 2014 (5, 9, 10).

*(Bold added for emphasis only.)*

### What the paper actually concludes — and what it explicitly declines to conclude

Conclusion section, verbatim in full:

> The striking similarities between the Mojiang pneumonia cases and COVID-19 are noteworthy, as
> is the fact that RaTG13/CoV4991, the next genomic relative of SARS-CoV-2 was found in the same
> mineshaft. The Master's thesis by Li Xu concludes that the pneumonia-illness in the miners was
> due to a SARS-like CoV from horseshoe bats. The remote consultation and diagnosis by a
> prominent pulmonologist in China, Dr. Nanshan, adds credibility to the diagnosis of the
> pneumonia cases in 2012. **Although we cannot say that RaTG13 or SARS-CoV-2 infected the
> miners, there is a high chance that it could be a virus quite similar in genetic composition to
> these two.** The coincidence between the 2012 illness in Mojiang miners, the subsequent
> samplings, and finding the nearest SARS-CoV-2 relative from this single mine warrants further
> inquiry, and the data along with the full history of this incident would be invaluable in the
> context of the current pandemic.

Abstract, verbatim, on the paper's own modest ambition:

> We propose that the Mojiang mineshaft miners' illness could provide important clues to the
> origin of SARS-CoV-2. These cases should be studied by various academicians, researchers, and
> medical professionals as many important questions are raised in this context.

It also **contradicts a published statement by Shi Zhengli**, which should be recorded as an
attributed dispute rather than a finding, verbatim:

> In the Scientific American interview, Dr. Zhengli Shi outlines that fungus was responsible for
> pneumonia in the miners (2). However, no detailed information was elucidated in literature and
> the cause of the miners' illness remained a mystery.

> Based on the detailed evidence presented in the Master's thesis (7) and the Ph.D. thesis (9)
> and the discussion presented here, **we do not think that fungus was the primary reason for the
> illness.**

*(Bold added for emphasis only.)*

### Recommendation

`ai_verified` for the paper's existence, citation, and the quoted statements.
**`unverified` for the underlying miners' clinical facts**, which this paper does not
independently establish.
*verificationNote:* Open-access full text read from Europe PMC (PMC7606707); April 2012,
Tongguan, six miners and three deaths confirmed verbatim, but this is a two-author Perspective
whose clinical detail rests entirely on an unverified Chinese-language Master's thesis and a PhD
thesis chapter, and it explicitly declines to claim RaTG13 or SARS-CoV-2 infected the miners.

### Discrepancies vs. the digest

1. **It is a Perspective / brief report, not a research article.** Frontiers' own subject term
   is "Perspective" and the PMC article type is `brief-report`. Two authors, neither a
   virologist-of-record on this material. The digest's neutral "Frontiers in Public Health
   (Mojiang miners analysis, 2020)" hides this; the record should name authors and type.
2. **PROVENANCE CHAIN PROBLEM — the most important issue with this row.** Every clinical fact
   about the miners in this paper is sourced to (a) Li Xu's Chinese-language Master's thesis
   and (b) a chapter of Canping Huang's PhD thesis, neither of which was verified in this run,
   plus a DocumentCloud upload of a translation
   (`https://www.documentcloud.org/documents/6981198-Analysis-of-Six-Patients-With-Unknown-Viruses.html`).
   Under CONTENT_POLICY §"Primary sources first" and AGENTS.md §3.8, this paper is **discovery,
   not evidence**, for the miners' illness. If Erebus features the Mojiang episode, the theses
   are the primary sources and must be obtained and verified; this Frontiers Perspective can
   carry only the fact that these authors published this reading of them.
3. **"WIV sampling 2012–2015" is unsupported by this paper.** It says sampling was "four times
   between August 2012 and July 2013," and separately that three research groups visited
   "between 2012 and October 2014." Neither is 2015. Correct the digest or find the source that
   says 2015.
4. **The digest's "Kunming master's thesis attributing the illness to a SARS-like coronavirus
   from horseshoe bats" is accurate** as a report of what the paper says the thesis concludes —
   but note it is Rahalkar & Bahulikar's characterization of a document they read in
   translation, two removes from the record.
5. **The paper's own limiting sentence is missing from the digest** — "Although we cannot say
   that RaTG13 or SARS-CoV-2 infected the miners" — and is exactly the kind of statement that
   must sit in `sourceStatement` for any Mojiang evidence record.

---

## Summary table

| # | Source | DOI / identifier resolves | Claims verified | Recommendation |
| --- | --- | --- | --- | --- |
| 1 | Worobey et al., *Science* 377:951–959 (2022) | Yes | All four (geography, unlinked-closer sentence, western section, excess-pneumonia/seroprevalence as *cited* claims) | `ai_verified` |
| 2 | Erratum `adp1133` → **Worobey** | Yes | Fully resolved; says results unchanged | `ai_verified` |
| 2b | Erratum `adl0585` → **Pekar** (not in digest as such) | Yes | BF 61.6/60.0 → 4.3/4.2; still favors multiple introductions | `ai_verified` |
| 3 | Pekar et al., *Science* 377:960–966 (2022) | Yes | Two nucleotides, 18 Nov 2019 (95% HPD 23 Oct–8 Dec), 64.6%, multiple introductions; **two** correction events | `ai_verified` |
| 4 | Crits-Christoph et al., *Cell* 187:5468–5482.e11 (2024) | Yes | All four species; co-location; authors' co-presence-not-infection statement | `ai_verified` (abstract) / `unverified` (body quotes — author manuscript only) |
| 5 | Liu et al., *Nature* **631**:402–408 (**2024**) | Yes | 923 samples, post-closure sampling, all 457 animal samples negative | `ai_verified` |
| 6 | Huang et al., *Lancet* 395:497–506 (2020) | Yes | 41 patients, 27/41 (66%), onset 1 Dec 2019, no-epi-link sentence | `ai_verified` |
| 7 | Zhou et al., *Nature* 579:270–273 (2020) | Yes | "an overall genome sequence identity of 96.2%" | `ai_verified` |
| 8 | Andersen et al., *Nat. Med.* 26:450–452 (2020) | Yes | Both quotes verbatim, with sections | `ai_verified` |
| 9 | Temmam et al., *Nature* 604:330–336 (**2022**) | Yes | DOI correct, year 2022, "96.8% for BANAL-52" | `ai_verified` |
| 10 | Venter et al., *Nature* 650:829–833 (2026) | Yes | Exists; 23 of 27 former SAGO; Comment not research article; DEFUSE argument | `ai_verified` |
| 11 | Rahalkar & Bahulikar, *Front. Public Health* 8:581569 (2020) | Yes | April 2012, Tongguan, six miners, three deaths; conclusion | `ai_verified` (paper) / `unverified` (miners' clinical facts) |

## Items that failed or fell short of full verification

Recording these honestly, per the constitution — a failed verification is a result.

1. **Crits-Christoph et al. body text (§4).** Only the accepted author manuscript could be
   read. `cell.com` is Cloudflare bot-walled; Wayback playback of the Cell fulltext URL returned
   HTTP 503 on five attempts across two snapshot timestamps. The published abstract *was*
   verified. Body-text wording needs one confirmation pass against the version of record.
2. **Both errata (§2) exist in PMC as metadata only.** NCBI efetch returns "The publisher of
   this article does not allow downloading of the full text in XML form"; Europe PMC
   `fullTextXML` returns empty. The erratum texts rest on Wayback snapshots of science.org
   (2025-04-27 and 2025-05-12). They are internally consistent with the Crossref `update-to`
   records and with the notices printed on both parent papers, so I regard them as solid — but
   they are archive-mediated, not publisher-direct.
3. **Whether Science treats the Pekar "Erratum 12 October 2023" (Fig. 4 / data files) as a
   separate indexed record** from `adl0585` (13 October 2023) could not be determined.
4. **Worobey refs 40, 41, 42** — the seroprevalence and excess-pneumonia sources behind the
   digest's claims — were **not** verified. Two are identifiable from the reference list (Li Z.
   et al., *Lancet Reg. Health West. Pac.*; He Z. et al., *Lancet*); ref 42 was not resolved.
   These need their own verification pass before either claim becomes an evidence record.
5. **The Rootclaim "1676 sites" figure** is not in Worobey et al. and was not traced to any
   primary document in this run.
6. **The Mojiang primary sources** — Li Xu's Master's thesis and Canping Huang's PhD thesis
   chapter — were not obtained. Everything the Frontiers Perspective says about the miners
   depends on them.
