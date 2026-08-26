# Verification pass — Crits-Christoph et al. 2024 (*Cell*): confirming `COV-E005` quotations against the version of record

**Date:** 2026-08-26
**Run:** citation-verification worker (Claude Fable 5, Cursor cloud agent)
**Target record:** `content/cases/covid-origins/evidence.yaml` → `COV-E005`
**Target source:** `content/cases/covid-origins/sources.yaml` → `SRC-CRITS-CHRISTOPH-2024`
**Paper:** Crits-Christoph A., Levy J.I., Pekar J.E., … Débarre F. (2024). "Genetic tracing of market
wildlife and viruses at the epicenter of the COVID-19 pandemic." *Cell* 187(19):5468–5482.e11,
19 September 2024. DOI `10.1016/j.cell.2024.08.010`. PMID 39303692. PMC deposit PMC11427129.
PII `S0092-8674(24)00901-2` / `S0092867424009012`.

This document is casework, not a citable source (see `casework/README.md`). No file under
`content/` was edited by this pass.

---

## 1. Headline result

The version of record was obtained, in full, from Internet Archive captures of the publisher's
own `www.cell.com` full-text page. Three of the four quotations are confirmed verbatim. One —
the "either animal or human viral shedding" sentence — **differs from the published text by one
word**: the published version begins "**Although** either animal or human viral shedding…", not
"While either animal or human viral shedding…". The accepted manuscript reads "While"; Cell's
copyeditor changed it.

Separately, and definitively: **PMC11427129 is the accepted author manuscript, not the version of
record.** The PMC page carries the banner "Author manuscript; available in PMC: 2025 Sep 19.
Published in final edited form as: Cell. 2024 Sep 19;187(19):5468–5482.e11", and the deposit
carries `NIHMSID: NIHMS2024276`. The existing caveat's underlying premise was correct.

---

## 2. Routes attempted, in order, with results

| # | Route | HTTP | What came back |
|---|---|---|---|
| 1 | `ebi.ac.uk/europepmc/webservices/rest/PMC11427129/fullTextXML` | **404** | Empty body. No Europe PMC full text for this PMCID. |
| 2 | Europe PMC REST `search` (by DOI, by `EXT_ID:39303692`) | 200 | Body was only `{"version":"6.9"}` with no `resultList` — the service returned no record for either query. Query-string passthrough was separately verified as working, so this is a service-side result, not a proxy artifact. |
| 3 | Europe PMC `MED/39303692/textMinedTerms/ORGANISM` | **404** | Not available. |
| 4 | PMC OA service `oa.fcgi?id=PMC11427129` | **404** | Not in the PMC Open Access Subset — consistent with a non-OA author-manuscript deposit. |
| 5 | NCBI E-utilities `esummary` (`db=pmc`) | 200 | JSON metadata. **First hard signal:** `articleids` contains `{"idtype":"MID","value":"NIHMS2024276"}` and `pmclivedate: 2025/09/19`. A NIHMS manuscript ID plus a 12-month live date is the signature of an NIH-Public-Access author-manuscript deposit. |
| 6 | NCBI E-utilities `efetch` (`db=pmc&retmode=xml`) | 200 | 239,173 bytes of JATS XML — the **full text of the accepted manuscript**. Metadata is explicit: `<journal-id journal-id-type="pmc-domain">nihpa</journal-id>`, `pmc-collection-title` = `NIHPA Author Manuscripts`, `<article-id pub-id-type="manuscript-id">NIHMS2024276</article-id>`, and a `<license>` reading "This file is available for text mining. It may also be used consistent with the principles of fair use under the copyright law." (i.e. **not** CC-BY). |
| 7 | `pmc.ncbi.nlm.nih.gov/articles/PMC11427129/` | 200 | HTML banner: "Cell . **Author manuscript**; available in PMC: 2025 Sep 19. Published in final edited form as: Cell. 2024 Sep 19;187(19):5468–5482.e11". Also "NIHMSID: NIHMS2024276" and "The publisher's version of this article is available at Cell". |
| 8 | NCBI E-utilities `efetch` (`db=pubmed&retmode=xml`) | 200 | The **publisher-deposited abstract**, ending "Copyright © 2024 Elsevier Inc. All rights reserved." This is the version-of-record abstract and differs from the author-manuscript abstract (see §3, Q4). |
| 9 | CrossRef `api.crossref.org/works/10.1016/j.cell.2024.08.010` | 200 | Metadata confirms `page: 5468-5482.e11`, `volume: 187`, `issue: 19`. **License list contains no CC licence.** The only `vor`-version licence is `elsevier.com/open-access/userlicense/1.0` starting 2025-09-19 with `delay-in-days: 383` — i.e. Elsevier's 12-month free-to-read "open archive", not CC-BY. TDM full-text links point at `api.elsevier.com`, which needs a subscriber key. |
| 10 | `https://doi.org/10.1016/j.cell.2024.08.010` (followed) | 200 | 2,976-byte `linkinghub` interstitial only. No article text. |
| 11 | `linkinghub.elsevier.com/retrieve/pii/S0092867424009012` | 200 | 2,975-byte redirect shell. No article text. |
| 12 | `sciencedirect.com/science/article/pii/S0092867424009012` (browser UA) | **403** | 1.2 MB bot-challenge page (`tdm-reservation`, `robots: NOARCHIVE`, embedded base64 font + challenge JS). None of the quotations present. |
| 13 | `cell.com/cell/fulltext/S0092-8674(24)00901-2` (browser UA) | **403** | 5,764-byte block page. |
| 14 | `api.elsevier.com/content/article/pii/…?httpAccept=text/plain` | **400** | Requires an Elsevier API key. |
| 15 | `scholar.archive.org` title search | 200 | No matching work or PDF returned. |
| 16 | Wayback CDX index for the `cell.com` full-text URL | 200 | Long capture history. Many `200` captures interleaved with `403`/`302` — the earlier "archive playback failed" result appears to have hit one of the `403`/`302` captures or a timing-out replay, not a genuine absence. |
| 17 | **`web.archive.org/web/20240923002754id_/https://www.cell.com/cell/fulltext/S0092-8674(24)00901-2`** | **200** | **577,089 bytes — the complete published full text.** Page metadata confirms the VOR: `DOI: 10.1016/j.cell.2024.08.010`, "Received September 13, 2023 / Revised May 1, 2024 / Accepted August 7, 2024", Cell's "Highlights" and "Summary" blocks, "STAR Methods". Capture date is 4 days after publication. **This is the route that worked.** |
| 18 | **`web.archive.org/web/20241004061625id_/…`** (same URL, different snapshot) | **200** | 574,966 bytes after gzip decompression — the same complete published full text, 11 days later. Used as an **independent cross-check**; all four quotation strings resolve identically in both captures. |
| 19 | Wayback captures `20241013093430`, `20241119180242`, `20241127024626` | — | Connection timeouts at 90–120 s. Replay for this URL is slow and unreliable; retrying different timestamps is worthwhile. |

Practical note for future passes: the Wayback `id_` (raw-record) replay form is what returns the
unrewritten publisher HTML, and its responses may arrive **gzip-encoded even without
`Accept-Encoding`** — capture 18 initially looked like binary garbage until decompressed. Use
`curl --compressed` or decompress explicitly, or a genuine capture will be mistaken for a failure.

---

## 3. Quotation-by-quotation findings

Verification method: each quotation was tested as an exact substring against tag-stripped text from
**both** version-of-record captures (17 and 18) and against the author-manuscript XML (6). Where a
whitespace/typography normalization was needed to compare across the two renderings, that is stated
explicitly below rather than silently applied.

### Q1 — species list in the five positive samples

**CONFIRMED in the version of record.**

Published wording (verbatim, capture 17, cross-confirmed in capture 18):

> The five SARS-CoV-2-positive samples from wildlife stall A contained mtDNA from raccoon dogs,
> hoary bamboo rats, dogs (*Canis lupus familiaris*), and European rabbits (*Oryctolagus
> cuniculus*). Amur hedgehog and Malayan porcupine mtDNA was present in four samples, Reeves's
> muntjac (*Muntiacus reevesi*) and Himalayan marmot (*Marmota himalayana*) mtDNA was found in
> three, and one sample contained masked palm civet mtDNA (Figures 2D–2H; Table S2).

**Locator:** Results, subsection "Mammalian wildlife species detected in five SARS-CoV-2-positive
samples from a wildlife stall", second sentence of the subsection's second paragraph.

Identical to the accepted manuscript across the whole quoted span. Differences exist only
*outside* the quoted text, and only as production copyedits:

- figure citation: accepted manuscript "(Figure 2D–H; Table S2)" → published "(Figures 2D–2H; Table S2)";
- immediately preceding sentence: accepted manuscript "see Methods" → published "see STAR Methods";
- following sentence: accepted manuscript "susceptible to SARS-CoV-2 52–54" → published
  "susceptible to SARS-CoV-2,52,53,54" (Cell's expanded superscript reference style).

One typographic point, recorded so it is not mistaken for a substantive difference: the published
text uses a right single quotation mark (U+2019) in "Reeves's". The brief's rendering with an ASCII
apostrophe is a normalization, not a wording change. The string as stored in `evidence.yaml` elides
this clause anyway.

### Q2 — the shedding-asymmetry sentence

**CONFIRMED with a wording difference. The stored quotation is inaccurate by one word.**

| | Text |
|---|---|
| **Published (version of record)** | "**Although** either animal or human viral shedding is consistent with these data, only a zoonotic origin of SARS-CoV-2 directly predicts co-detection of SARS-CoV-2 and wildlife genetic material." |
| **Accepted manuscript (currently quoted)** | "**While** either animal or human viral shedding is consistent with these data, only a zoonotic origin of SARS-CoV-2 directly predicts co-detection of SARS-CoV-2 and wildlife genetic material." |

The difference is confined to the opening subordinator: `While` → `Although`. Everything after
"either animal or human viral shedding" is byte-identical in both versions. The two words are
synonymous here, so **no meaning changes and the evidential content of `COV-E005` is unaffected** —
but a quotation presented in quotation marks must match the version it is attributed to, so the
stored string is wrong for the version of record.

**Locator:** Discussion, first paragraph (approximately 4,200 characters into the Discussion; no
intervening subheading between the "Discussion" heading and this sentence).

Adjacent copyedits in the same paragraph, outside the quoted span, all confirming that Cell
copyedited this passage rather than leaving it untouched:

- "…shed the SARS-CoV-2 detected on the animal equipment**,** or that…" (AM) → "…animal equipment or that…" (VOR): comma removed;
- "Therefore human viral shedding…" (AM) → "Therefore**,** human viral shedding…" (VOR): comma added;
- reference order "…into the Huanan market 57, 25." (AM) → "…into the Huanan market.25,57" (VOR).

### Q3 — the authors' own limitation

**CONFIRMED in the version of record, verbatim, no difference.**

> It is not possible to conclude which of these species may have been infected and/or introduced
> the virus to the market from these data alone.

**Locator:** Discussion, first paragraph, fourth sentence (approximately 900 characters into the
Discussion). Immediately follows "These results show that multiple plausible intermediate hosts of
SARS-CoV-2 were present at the exact site within Wuhan to which COVID-19 was first
epidemiologically linked." and is immediately followed by "Nonetheless, our analysis provides a
short and actionable list of species with genotypic details."

Byte-identical in the accepted manuscript and in both version-of-record captures.

### Q4 — abstract sentence

**CONFIRMED in the version of record, verbatim, no difference — and the stored version is the
published one, not the manuscript one.**

> We identify wildlife DNA in all SARS-CoV-2-positive samples from this stall, including species
> such as civets, bamboo rats, and raccoon dogs, previously identified as possible intermediate
> hosts.

**Locator:** Summary (Cell's label for the abstract), fifth sentence. Confirmed by **two
independent routes**: both version-of-record captures (17, 18) and the publisher-deposited PubMed
abstract (route 8), which carries the "Copyright © 2024 Elsevier Inc." line.

This one is worth flagging as a small vindication of the existing record. The **accepted
manuscript** abstract reads "all SARS-CoV-2 **positive** samples" — unhyphenated. The published
abstract reads "all SARS-CoV-2**-**positive samples" — hyphenated. `COV-E005` stores the hyphenated
form, i.e. it correctly quotes the version of record, consistent with its own attribution of the
abstract to the published version.

Other version-of-record abstract copyedits, none of them inside the quoted sentence, given here
because they show how much the abstract was reworked and should be respected if any further
abstract wording is ever quoted:

- "market-linked SARS-CoV-2 genetic diversity" (AM) → "market-linked severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2) genetic diversity" (VOR: expansion at first use);
- "consistent with market emergence, and find" (AM) → "consistent with market emergence and find" (VOR: comma removed);
- "compare them **to** those from farms" (AM) → "compare them **with** those from farms" (VOR);
- "a short-list of potential intermediate hosts" (AM) → "a shortlist of potential intermediate hosts" (VOR).

---

## 4. Status of the PMC11427129 deposit — settled

**PMC11427129 is the accepted author manuscript. It is not the version of record.** Four
independent lines of evidence, all mutually consistent:

1. **The PMC page says so in plain language** (route 7): "Cell . Author manuscript; available in
   PMC: 2025 Sep 19. Published in final edited form as: Cell. 2024 Sep 19;187(19):5468–5482.e11",
   plus "The publisher's version of this article is available at Cell".
2. **The JATS metadata says so structurally** (route 6): `pmc-domain` = `nihpa`;
   `pmc-collection-title` = "NIHPA Author Manuscripts"; `manuscript-id` = `NIHMS2024276`;
   `pmcid-ver` = `PMC11427129.1`.
3. **The deposit's licence is the NIHMS text-mining/fair-use notice, not a CC licence** (route 6),
   and the article is absent from the PMC Open Access Subset (route 4).
4. **The content itself differs from the published text** in exactly the way an uncopyedited
   accepted manuscript should: pre-copyedit subordinator ("While" for "Although"), pre-copyedit
   punctuation, unexpanded first-use abbreviation, compressed reference ranges, "Methods" for
   "STAR Methods", and a stray `elocation-id` of `2023.09.13.557637` — the bioRxiv preprint
   identifier — left in the metadata.

A correction to a background assumption in the tasking: **this paper is not CC-BY or equivalent
open access.** CrossRef (route 9) lists no Creative Commons licence at all. The only
version-of-record licence is Elsevier's own open-access user licence, effective 2025-09-19 after a
383-day embargo — Elsevier's twelve-month free-to-read "open archive". That is why no CDN PDF or
repository mirror of the version of record surfaced, and why the PMC deposit is an NIHMS manuscript
rather than a publisher deposit. Future passes on this paper should not expect an OA full-text API
to serve it; the Wayback route is the practical one.

---

## 5. Recommendation on the `COV-E005` limitation note

The note currently reads:

> "Body-text wording is from the accepted author manuscript, not the published version — the
> publisher bot-walls automated clients and archive playback failed — and requires one confirmation
> pass before promotion."

**Recommendation: the note can be LIFTED — but only in the same change that corrects the Q2
quotation. It must NOT be lifted on its own.**

The confirmation pass it asks for has now been done, and it found a real discrepancy. Removing the
caveat while leaving "While either animal or human viral shedding…" in place would convert an
honestly-flagged manuscript quotation into an unflagged misquotation of the version of record —
strictly worse than the present state. The caveat is currently doing useful work and keeps doing it
until the text is fixed.

Concretely, the following edits to `content/` are recommended. They are **not** made by this pass:
they touch a featured evidence record's quoted text, so under the tiered merge policy in AGENTS.md
they are needs-approval, and this worker's instructions forbid editing `content/`.

**In `evidence.yaml`, record `COV-E005`:**

1. In `sourceStatement`, change `"While either animal or human viral shedding is consistent with
   these data…"` to `"Although either animal or human viral shedding is consistent with these
   data…"`, and drop the framing phrase "From the accepted manuscript:" — all three body-text
   quotations are now confirmed against the version of record.
2. Replace `exactLocator` — currently "Cell 187(19):5468–5482.e11, abstract; Results and Discussion
   quoted from the accepted author manuscript" — with a version-of-record locator, e.g.
   "Cell 187(19):5468–5482.e11 — Summary; Results, 'Mammalian wildlife species detected in five
   SARS-CoV-2-positive samples from a wildlife stall'; Discussion, first paragraph".
3. Delete the first `limitations` entry (the author-manuscript caveat). The other two limitations
   are unaffected by this pass and should stay: the shared-data/shared-authorship dependency, and
   the authors' own statement that the data cannot identify the infected species. Neither was
   contradicted by anything found here — the second is, if anything, strengthened, since Q3 is
   confirmed verbatim in the published text.

**In `sources.yaml`, record `SRC-CRITS-CHRISTOPH-2024`:**

4. Rewrite `verificationNote` to record what actually happened, rather than deleting the provenance
   history: the version of record was confirmed from two Internet Archive captures of the
   publisher's `www.cell.com` full-text page (2024-09-23 and 2024-10-04), with the abstract
   independently corroborated by the publisher-deposited PubMed record; the live publisher routes
   (`cell.com`, ScienceDirect) return HTTP 403 bot challenges; PMC11427129 is the NIHMS accepted
   author manuscript (`NIHMSID NIHMS2024276`) and not the version of record.
5. Delete the second `reliabilityNotes` entry (the "requires one confirmation pass" note).
6. Keep `verification: ai_verified`. Per `docs/CONTENT_POLICY.md`, AI-performed citation
   verification is never promoted to `verified`, and no document is held in a project library.

**On whether any residual provenance caveat is needed:** in my assessment, no — not on the
wording. The evidential basis is a capture of the publisher's own page taken four days after
publication, independently reproduced from a second capture eleven days later, with the abstract
corroborated through a completely separate channel (Elsevier's own deposit to PubMed). That is
stronger provenance than most quotations in this case carry. Recording the archival route in the
`verificationNote`, as in item 4, is the honest and sufficient disclosure; a standing limitation on
the evidence record is not warranted.

Two smaller precision nits, noted for whoever makes the edit, neither rising to a limitation:

- The stored Q1 elision reads "dogs … and European rabbits." The ellipsis correctly covers the
  dropped "(*Canis lupus familiaris*)", but "European rabbits." then omits the following
  "(*Oryctolagus cuniculus*)" without an ellipsis mark. Worth tidying while the record is open.
- `exactLocator` currently says "Results and Discussion". Q2 and Q3 are **both** in the Discussion;
  only Q1 is in the Results. The proposed locator in item 2 fixes this.

---

## 6. Reproducibility

The two commands that produced the version-of-record text:

```bash
curl -sS --compressed -A 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36' \
  -o vor1.html -m 120 \
  'https://web.archive.org/web/20240923002754id_/https://www.cell.com/cell/fulltext/S0092-8674(24)00901-2'

curl -sS --compressed -A 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36' \
  -o vor2.html -m 120 \
  'https://web.archive.org/web/20241004061625id_/https://www.cell.com/cell/fulltext/S0092-8674(24)00901-2'
```

The author-manuscript baseline and the publisher-deposited abstract:

```bash
curl -sS 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pmc&id=11427129&retmode=xml'      -o am.xml
curl -sS 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=39303692&retmode=xml'   -o vor-abstract.xml
```

Expected sizes: `vor1.html` 577,089 bytes; `vor2.html` 574,966 bytes decompressed; `am.xml`
239,173 bytes. Replay of the Wayback URLs is slow and intermittently times out; retry rather than
concluding the capture is unavailable.
