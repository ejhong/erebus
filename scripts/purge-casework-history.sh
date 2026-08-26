#!/usr/bin/env bash
#
# ONE-TIME, DESTRUCTIVE: purge casework/ from the whole git history.
#
# WHY THIS EXISTS
#
# casework/ held ~27 MB of third-party copyrighted material as discovery
# aids — permitted by casework/README.md expressly "while the repository is
# private," and forbidden from republication. Deleting the files from HEAD
# is NOT enough: they remain in six commits, and GitHub serves full history
# on public repositories.
#
#   ==> Publishing this repository before running this script would
#   ==> republish a complete copyrighted book. The order is not optional.
#
# See docs/DECISIONS.md, 2026-08-26, items 2 and 4.
#
# WHEN TO RUN IT
#
# Only when NO branches are in flight. Rewriting main orphans every branch
# based on the old history, and every open PR becomes unmergeable. Check
# first:
#
#   gh pr list --state open
#   git branch -r --sort=-committerdate | head -20
#
# Coordinate with any other agent sessions working in the repo. This is the
# one operation here that cannot be done concurrently.
#
# WHAT IT DOES NOT DO
#
# It does not create a fresh root commit. Every commit date, message,
# assessment overlay and arbiter verdict is preserved — the constitution
# stakes accountability on inspectability, so the audit trail survives.
# Only the casework path is removed. Commit SHAs will all change.
#
set -euo pipefail

if [ "${1:-}" != "--yes-i-have-checked-no-branches-are-in-flight" ]; then
  cat <<'USAGE'
Refusing to run without explicit confirmation.

  1. Confirm no open PRs and no active branches (see header).
  2. Take a backup:  git clone --mirror . ../erebus-backup.git
  3. Re-run:
       scripts/purge-casework-history.sh --yes-i-have-checked-no-branches-are-in-flight
USAGE
  exit 1
fi

command -v git-filter-repo >/dev/null 2>&1 || {
  echo "git-filter-repo not found. Install it first:" >&2
  echo "  pipx install git-filter-repo   # or: pip install git-filter-repo" >&2
  exit 1
}

echo "==> Purging casework/ from all history"
git filter-repo --path casework --invert-paths --force

echo
echo "==> Verifying: any casework object left anywhere in history?"
if git log --all --oneline -- casework | grep -q .; then
  echo "FAILED: casework still present in history." >&2
  exit 1
fi
echo "    clean — no casework path in any commit"

echo
echo "==> Verifying the copyrighted blobs are unreachable"
# Names are matched loosely because the originals carried spaces.
if git rev-list --objects --all \
   | grep -Ei 'Rootclaim|Beyond-Misinformation|9 11 Unmasked|Practically-A-Book' \
   | grep -q .; then
  echo "FAILED: a third-party blob is still reachable." >&2
  exit 1
fi
echo "    clean — no third-party blob reachable from any ref"

cat <<'NEXT'

==> Done locally. Remaining steps, in order:

  1. Inspect:            git log --oneline | head
                         du -sh .git      # expect a large drop from ~87M
  2. Re-add the remote if filter-repo dropped it:
                         git remote add origin <url>
  3. Force-push every ref you intend to keep:
                         git push --force --all
                         git push --force --tags
  4. Tell any collaborator or agent session to re-clone. Old clones now
     share no history with the remote and will fight it.
  5. THEN flip repository visibility to public.
  6. Bring GitHub Pages up, confirm the site serves, and only then remove
     the Cloudflare Pages project and its Access policy.

Note: GitHub may retain unreachable objects server-side for a period and
can serve them via direct SHA links. If that matters, contact GitHub
Support to request garbage collection after the force-push, or create a
fresh repository and push the rewritten history into it.
NEXT
