# Hosting — GitHub Pages, public

The site is a Next.js static export served from git by GitHub Pages, with
**no access control in front of it**. It is public and unadvertised: open
to anyone who finds it, promoted to no one.

This replaced a Cloudflare Pages deployment behind Cloudflare Access
(email allowlist, one-time PIN) on 2026-08-26. The reasoning is in
`docs/DECISIONS.md`; the short version is that a site which grades
evidence disputes without accusing anyone should be able to survive being
read by both sides, and gating it was doing more to signal secrecy than to
protect anything.

## What is public, and what is deliberately not

Public: the whole repository. Content records, the engine, the
constitution, the decision log, every assessment overlay and arbiter
verdict, and the full commit history. That is the point — the
constitution stakes its accountability on inspectability, so the audit
trail has to be readable by the people it is meant to reassure.

Not public, and not in the repository at all: **research briefs**. They
are held privately outside it. Two reasons, both load-bearing:

1. Briefs routinely contain third-party copyrighted material kept as
   discovery aids — saved papers, books, blog archives. Committing that to
   a private repo was defensible as working material; publishing it would
   be republication.
2. Briefs contain material about living persons that the living-persons
   rules deliberately keep off the site. Publishing the briefs would
   publish exactly what the constitution excluded from `content/`.

Records may still name a brief in `origin.ref` as the provenance of an
extraction. Such a reference records where a record came from; it is not
something a reader can open, and it never was a citation — briefs have
never been citable, and every citation a brief contains must be verified
against the primary document before any derived record enters `content/`.

## Deployment

`.github/workflows/deploy-pages.yml` builds and deploys on every push to
`main`. Nothing else needs doing per-release.

The site is a **project site**, served from `/<repo>/`, so the export
needs a matching base path or every absolute asset URL 404s. One
environment variable drives it:

| Where | Value |
| --- | --- |
| Deploy workflow | `BASE_PATH: /erebus` (edit here if the repo is renamed) |
| `next.config.ts` | reads `NEXT_PUBLIC_BASE_PATH` → `basePath` + `assetPrefix` |
| `src/config/assets.ts` | reads the same variable for content-record asset paths |
| Local `next dev` | unset, so the site serves at the root |

Content records store raw paths like `/images/cases/x/cover.jpg` that
reach the DOM through plain `src` attributes, which Next does not rewrite.
`assetPath()` is what those call sites use, which is why both files read
the same variable — they cannot disagree.

The workflow asserts the prefix is present in the built output before
deploying, because a project site with unprefixed asset URLs produces a
*visually broken page rather than a failed build* — exactly the failure
that silently ships.

### One-time repository setup

1. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
2. Ensure Actions has `pages: write` and `id-token: write` (already
   declared in the workflow's `permissions` block).
3. Push to `main`. The first run creates the `github-pages` environment
   and publishes to `https://<owner>.github.io/<repo>/`.

### Moving to a custom domain later

Set `BASE_PATH` to an empty string in the deploy workflow and add the
domain under Settings → Pages. Nothing else changes: both config files
already treat an empty value as "serve at the root," and the workflow
skips its prefix assertion when the value is empty.

## Actions secrets

The autonomous workflows need model-vendor credentials. These are
repository secrets, never committed:

| Secret | Used by |
| --- | --- |
| `ANTHROPIC_API_KEY` | maintain, extract-claims, arbiter, cross-model checks |
| `OPENAI_API_KEY` | same (additional vendor seat) |
| `GEMINI_API_KEY` | arbiter and cross-model checks (vendor seat) |
| `XAI_API_KEY` | arbiter and cross-model checks (vendor seat) |
| `VENICE_API_KEY` | arbiter (vendor seat) |
| `IMAGE_API_KEY` | generate-case-art (OpenAI Images API) |
| `ENGINE_UPSTREAM` | sync-engine (upstream engine git URL) |

A public repository changes one thing about secrets that matters: **secrets
are not available to workflows triggered by pull requests from forks.** The
arbiter and the cross-model checks therefore cannot run on a fork PR. That
is the correct behaviour rather than a defect — an outside contributor
cannot summon the panel, and a maintainer must bring the branch into the
repository for it to be judged — but it means a fork PR's checks will show
as failed for want of credentials, not for want of merit.

## What was torn down

The Cloudflare Pages project and its Access policy. Order matters: bring
Pages up and confirm the site serves before removing the Cloudflare
deployment, so there is never a window with no live site.
