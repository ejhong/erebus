# Hosting — Cloudflare Pages behind Cloudflare Access

Erebus is a private site: a Next.js static export served by Cloudflare
Pages, with Cloudflare Access (email allowlist + one-time PIN) in front of
it. Authentication is never built into the site itself (AGENTS.md §4).

## Build facts

- Build command: `npm ci && npm run build`
- Output directory: `out/`
- No base path: the export is served at the domain root.
- The build fails loudly on invalid content — that is intended.

## Founder setup steps (once)

### 1. Connect Cloudflare Pages to this repository

1. Cloudflare dashboard → **Workers & Pages → Create → Pages →
   Connect to Git**.
2. Authorize the GitHub account and select this repository (`ejhong/ebs`).
3. Project name: your choice (it becomes `<project>.pages.dev`).
4. Build settings:
   - Framework preset: **Next.js (Static HTML Export)** — or None;
   - Build command: `npm ci && npm run build`
   - Build output directory: `out`
5. Save and deploy. Every push to `main` now deploys automatically;
   PR branches get preview deployments.

### 2. Put Cloudflare Access in front of it

1. Cloudflare dashboard → **Zero Trust** (one-time Zero Trust org setup if
   new; the Free plan covers up to 50 users).
2. **Access → Applications → Add an application → Self-hosted.**
3. Application domain: the `<project>.pages.dev` domain (add both the apex
   and `*.<project>.pages.dev` so preview deployments are covered too).
4. Add a policy, action **Allow**, include → **Emails**: list the founder
   and invited readers' email addresses.
5. Authentication method: **One-time PIN** (no identity provider needed —
   readers receive a code by email).
6. Save. Unauthenticated visitors now hit the Access login instead of the
   site.

Note: Access in front of `pages.dev` protects the web viewership path.
Repository access (the content itself) is governed by GitHub private-repo
permissions.

## Actions secrets the pipeline will eventually need

Configured under **Settings → Secrets and variables → Actions**. None are
set at bootstrap; each workflow fails early with instructions when a
secret it needs is missing.

| Secret | Used by |
| --- | --- |
| `ANTHROPIC_API_KEY` | maintain, extract-claims, arbiter, cross-model checks |
| `OPENAI_API_KEY` | same (alternative/additional vendor seat) |
| `GEMINI_API_KEY` | arbiter and cross-model checks (vendor seat) |
| `XAI_API_KEY` | arbiter and cross-model checks (vendor seat) |
| `VENICE_API_KEY` | arbiter (vendor seat), where applicable |
| `IMAGE_API_KEY` | generate-case-art (OpenAI Images API) |
| `ENGINE_UPSTREAM` | engine sync + CI divergence check — a git URL for the upstream engine repository; never committed as a literal |
| `MAINTENANCE_PAT` (optional) | fine-grained PAT (contents + pull-requests write) so maintenance PRs trigger CI; without it, auto-merge waits forever |

Repository Actions **variable** (not secret): `EXTRACT_MODEL` pins the
extraction/assessment model id.

Also required for the auto-merge lane: repo **Settings → General → Allow
auto-merge**, and a branch ruleset on `main` requiring the CI and PR risk
checks so auto-merge only completes when they are green.
