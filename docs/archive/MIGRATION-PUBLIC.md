# Going public: what every agent session needs to do

**Status: the history rewrite RAN on 2026-08-26.** `main` was force-pushed
with rewritten history and all other branches were deleted. If your clone
predates it, it is stale — see "after the rewrite" below.
**Audience:** every agent session and automation that works in this repository.
**Short version:** re-clone before doing anything. Nothing is lost. Never force-push a branch created before the rewrite.

---

## What is happening

Erebus is moving from Cloudflare Pages behind Cloudflare Access to **public
GitHub Pages**. The constitution was amended for it on 2026-08-26 (AGENTS.md
§2 and §4; reasoning in `docs/DECISIONS.md`).

Before visibility can flip, one destructive operation has to run: **`casework/`
is purged from the entire git history**, across every ref.

## Why the purge is not optional

`casework/` held research briefs and, with them, roughly 27 MB of third-party
copyrighted documents kept as discovery aids — two Rootclaim debate documents,
the full text of a book on the September 11 attacks, an advocacy booklet.
`casework/README.md` permitted that expressly *"while the repository is
private"* and forbade republication.

Deleting the files from `main` (already done, PR #41) is **not enough**. They
remain in history, and GitHub serves full history on public repositories. At
last count **44 of 47 branches carried `casework/`, and 22 carried all four
copyrighted files.**

Publishing before the purge would republish a complete copyrighted book.

## What the executed purge actually removed (wider than planned)

The pre-purge audit found the plan's `casework/`-only scope too narrow. This
repository shares pre-split history with the upstream engine repository, and
that history carried material with exactly the same problems:

- `research/` — third-party copyrighted PDFs kept as discovery aids (saved
  web pages, a PubPeer thread capture, Substack article captures) alongside
  the founder's own working documents;
- `inbox/processed/trn-villarroel-2026-08-24/` — **a private email from a
  living researcher to the founder**, with personal email addresses and a
  reference to an unpublished manuscript. Material supplied in confidence;
  its presence contradicted the upstream case history's own statement that
  the correspondence "is not published";
- the supplied research briefs committed loose in `inbox/` (the Kirk
  adversarial audit in PDF, JSON and Markdown forms; the Immortality Key
  brief; one stray attachment image).

All of those paths were purged along with `casework/`, from every ref. The
same exposure exists in the upstream engine repository — which is **already
public** — and was reported there the same day with an urgent removal PR;
its own history rewrite is pending the founder's authorization there.

## Does this hurt your session? What you must do

**Nothing is lost.** Every commit message, date, assessment overlay and
arbiter verdict survives — only one path is removed. But commit SHAs all
change, so any clone made before the rewrite shares no history with the
remote afterwards.

### Before the rewrite

| If your session is… | Do this |
| --- | --- |
| **Mid-flight with unmerged work** | Land it. Open the PR, get it merged, or explicitly abandon it. Do not hold a long-lived branch through the rewrite. |
| **Finished, may be resumed later** | Nothing now — but see "if you are resumed" below. |
| **An automation that clones fresh each run** (maintain cron, content-response, inbox-response) | Nothing. A fresh clone gets the rewritten history and is correct by construction. |

### After the rewrite

1. **Re-clone, or hard-reset to the new remote.** A `git pull` into a
   pre-rewrite clone will not converge; it will try to merge two unrelated
   histories and make a mess.
   ```
   git fetch origin
   git reset --hard origin/main     # discards local pre-rewrite state
   ```
   A fresh `git clone` is safer and always correct.

2. **Never force-push a branch created before the rewrite.** This is the one
   action that actually causes harm: a stale branch still contains the
   copyrighted blobs, and force-pushing it **puts them back into a public
   repository**. If you find yourself holding a pre-rewrite branch, discard it
   and redo the work on top of current `main`.

3. **If you are a resumed session,** your VM still holds the pre-rewrite
   clone. Treat it as stale: re-clone before doing anything, and do not push
   from the old working copy.

## The guard, for when someone does not read this

`.gitignore` ignores `casework/`, but ignore rules are advisory — `git add -f`,
a merge from a stale branch, or a resumed agent working from an old clone can
all reintroduce the files.

So CI carries a **fail-closed re-publication guard** (`.github/workflows/ci.yml`).
It fails the build on:

- any tracked path under `casework/`;
- any tracked `.pdf`, `.mhtml`, `.epub`, `.doc`, `.docx` — the site needs no
  document formats, so a tracked one is either a saved source document or a
  mistake, and both are re-publication risks;
- any tracked file over 4 MB — the largest legitimate asset is a plate under
  2 MB, so anything larger is a saved artifact.

This is deliberately a build failure rather than a warning. It is the only
check that cannot be bypassed by not reading a document.

## Working in a public repo: what changes for you

- **Briefs never enter the repository again.** They are held privately outside
  it. Records may still name a brief in `origin.ref` as the provenance of an
  extraction; that records where a record came from and is not something a
  reader can open. Briefs remain non-citable, and every citation in one must
  be verified against the primary document before any derived record enters
  `content/` — unchanged.
- **Saved source documents are out.** Cite the original and verify against it.
  If you need a copy to read, keep it outside the repo.
- **Living-persons rules matter more, not differently.** They were always
  absolute. What changes is that the audience is now anyone, so the
  corrections and takedown path on every case page is a live route rather than
  a notional one.
- **Actions secrets are unavailable to fork-triggered workflows.** The arbiter
  and cross-model checks therefore cannot run on a pull request from a fork.
  That is correct — an outside contributor should not be able to summon the
  panel — but such a PR's checks will fail for want of credentials, not merit.
  Bring the branch into the repository to have it judged.

## Sequence, and where we are in it

1. ✅ Constitution amended; `casework/` removed from `main`; base path and
   Pages deploy workflow ready (PR #41).
2. ✅ Re-publication guard in CI; this document.
3. ✅ All in-flight work landed (last: PR #45, 2026-08-26).
4. ✅ Stale branches deleted — 39 in total, every one a squash-merged
   leftover verified against its merged PR; only `main` remains.
5. ✅ Purge ran across all remaining refs (widened scope above); `main`
   force-pushed 2026-08-26. Verified from a fresh clone: **zero** casework,
   research or private-inbox paths reachable from any ref; **zero** tracked
   or historical `.pdf`/`.mhtml`/`.epub`/`.docx` blobs; the rewritten HEAD
   tree is byte-identical to the pre-rewrite `main` tree (the rewrite
   changed history only, never content). Pre-rewrite mirror backup retained
   off-repo by the operating session.
6. ✅ This session re-cloned and verified. **Other sessions: re-clone.**
7. ⬜ **GitHub Support sensitive-data request** ← *the flip waits here; see
   the corrected risk section below*
8. ⬜ Repository visibility flips to public (founder's act).
9. ⬜ Pages enabled (Settings → Pages → Source: GitHub Actions); confirm the
   site serves.
10. ⬜ Cloudflare Pages project and Access policy removed — **last**, so
    there is never a window with no live site.

## The residual risk, corrected after testing (supersedes the paragraph below)

The original risk statement — preserved below for the record — held that
post-purge exposure requires an adversary to know an *unpublished,
unguessable commit SHA*. **Testing after the force-push shows that is
wrong.** GitHub retains every pull request's head as a fetchable ref, and
those refs are not unguessable — they are enumerable:

    git fetch origin refs/pull/12/head   # returns the full casework/ tree
                                         # today, after the purge

The same content renders in each merged PR's "Files changed" view. So on
flip day, the purged material would be one enumerable fetch away for
anyone, and browsable in the PR UI — a categorically weaker barrier than
the one the accepted-risk decision was reasoned on.

**Consequence:** the founder's decision to rewrite in place and keep the PR
record stands — it was made for inspectability reasons that still hold —
but the GitHub Support request is upgraded from "cheap and worth making" to
**a precondition for flipping visibility**. GitHub's documented
[sensitive-data removal process](https://docs.github.com/en/site-policy/content-removal-policies/github-sensitive-data-removal-policy)
covers exactly this: ask Support to clear cached PR views and run a
garbage collection so the rewritten history is the only one served. The
alternative that avoids the wait — pushing the clean history to a fresh
repository and keeping this one private as the governance archive — remains
available if Support is slow, at the documented cost of splitting the PR
record from the public repo.

### The original risk statement (superseded 2026-08-26, kept for the record)

GitHub can retain unreachable objects server-side after a force-push and may
serve them by direct commit SHA for a period.

**Decision (founder, 2026-08-26): rewrite in place and keep the pull-request
history.** The fresh-repository alternative — push the rewritten history into
a new repo, delete the old one — is airtight against this, and is rejected
because it would discard every arbiter verdict comment on every PR. That is
the seat-by-seat record of the governance, including the parks and the
reversals, and this project stakes its accountability on inspectability.
Trading it away to perfect the removal of four copyright-encumbered PDFs
would sacrifice the central claim for a marginal gain.

Why the residual exposure is acceptable, stated precisely: it does not run
through the site, so site traffic is irrelevant to it. It requires an
adversary to know an unpublished, unguessable commit SHA in an unadvertised
repository, in order to obtain a discovery-aid copy of an already published
document they could find elsewhere. Every one of those has to hold at once.

A garbage-collection request to GitHub Support after the force-push is cheap
and worth making. It is not a precondition for flipping visibility.
