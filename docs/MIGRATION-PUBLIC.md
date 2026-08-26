# Going public: what every agent session needs to do

**Status:** pending. The history rewrite has **not** run yet.
**Audience:** every agent session and automation that works in this repository.
**Short version:** land your work, then expect to re-clone. Nothing is lost. Never force-push a branch created before the rewrite.

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
3. ⬜ **All in-flight work lands.** ← *currently waiting here*
4. ⬜ Stale branches deleted — most of the 47 are squash-merged leftovers;
   keep `main`.
5. ⬜ Purge runs across all remaining refs; force-push
   (`scripts/purge-casework-history.sh`, which refuses to run without explicit
   confirmation and verifies afterwards that no casework path and no
   third-party blob is reachable).
6. ⬜ Every session re-clones.
7. ⬜ Repository visibility flips to public.
8. ⬜ Pages comes up; confirm the site serves.
9. ⬜ Cloudflare Pages project and Access policy removed — **last**, so there
   is never a window with no live site.

## One residual risk, stated plainly

GitHub can retain unreachable objects server-side after a force-push and may
serve them via direct SHA links for a period. For a copyright question the
airtight remedy is to push the rewritten history into a **fresh empty
repository** and delete the old one — at the cost of the issue and PR history,
which includes every arbiter verdict comment and is itself part of the audit
trail this project stakes its accountability on.

Rewriting in place and asking GitHub Support to garbage-collect is the lighter
option, and is probably proportionate given these were discovery-aid copies
rather than distribution. That trade-off is the founder's call and is not
settled by this document.
