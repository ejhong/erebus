/**
 * Resolve a public asset path.
 *
 * GitHub Pages serves a project site from a repository subpath
 * (`/<repo>/`), so every absolute asset URL needs that prefix or it 404s.
 * The prefix comes from the same environment variable `next.config.ts`
 * uses for `basePath`, so the two can never disagree: the Pages deploy
 * workflow sets it, a custom domain serving at the root sets it empty, and
 * local `next dev` leaves it unset.
 *
 * Next rewrites `<Image>`/`<Link>` hrefs itself, but content records store
 * raw paths (`/images/cases/x/cover.jpg`) that reach the DOM through plain
 * `src` attributes, which Next does not touch. This function is what those
 * call sites use.
 */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(file: string): string {
  if (!BASE_PATH) return file;
  // Idempotent: a path already carrying the prefix is returned unchanged,
  // so double-prefixing is impossible if a caller passes a resolved value.
  return file.startsWith(`${BASE_PATH}/`) ? file : `${BASE_PATH}${file}`;
}
