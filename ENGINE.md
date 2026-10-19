# ENGINE.md — where the code comes from

This site runs an engine developed in a separate upstream repository, the
public `https://github.com/ejhong/aletheia.git`. **Engine changes flow one way:
upstream → here.** The engine is pulled unchanged except for the upstream's
name, which is rewritten to this site's, so that nothing a reader sees names
it (AGENTS.md §4; CI's `node scripts/site.ts check-names` keeps the name out of
`content/`, `src/`, `app/` and `public/`, from `config/site.yaml`).

## What is the engine's, and what is this site's

| The engine's (pulled, never edited here) | This site's own |
| --- | --- |
| `src/`, `app/`, `scripts/`, `.github/workflows/`, `protocols/` (not its `archive/`), `operator/`, and the build configs (`package.json`, `package-lock.json`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`, `vitest.config.ts`, `next.config.ts`) | `AGENTS.md` (the constitution, the founder's), `config/` (identity and notice, theme, the rules every model this site calls must follow, models, budget, tariffs), `content/`, `inbox/`, `runs/`, `proposals/`, `governance/`, `docs/`, `public/` |

Three engine files are kept this site's own (the allowlist in
`scripts/sync-engine.mjs`): the sync itself, and the cover-art generator and
its workflow, which paint in this site's house style (`docs/IMAGES.md`).

`ENGINE_VERSION` records the upstream commit the engine was last pulled from.

## Pulling

```bash
node scripts/sync-engine.mjs --check   # does any engine file differ from the renamed upstream?
node scripts/sync-engine.mjs --pull    # bring every engine file to it
npm install && npm test && npm run build
```

`ENGINE_UPSTREAM` (a git URL or path) and `ENGINE_REF` (a branch) point the
sync at an engine change before it merges upstream.

## When this site needs something the engine lacks

Make it upstream, in the engine, so both sites have it — never here. If it is
truly this site's own, it belongs in `config/` and the engine reads it there
(that is how this site's name, its notice, its theme, its rules for models and
the date it took up the engine's rules work). The history of the September
sync, its hand-ports and its queue, is in git.
