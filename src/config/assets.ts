/**
 * Resolve a public asset path. The site is a static export served at the
 * domain root (Cloudflare Pages), so no base-path prefix is applied; this
 * indirection stays so a future host with a subpath needs one change here.
 */
export function assetPath(file: string): string {
  return file;
}
