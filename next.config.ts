import type { NextConfig } from "next";

/**
 * Static export for GitHub Pages.
 *
 * Pages serves a project site from a repository subpath
 * (`/<repo>/`), so the export needs a matching `basePath` or every
 * absolute asset URL 404s. It is read from an environment variable rather
 * than hardcoded so the same tree builds correctly in three places: the
 * Pages deploy workflow sets it, a custom domain (which serves at the
 * root) sets it empty, and local `next dev` leaves it unset.
 *
 * `assetPath()` in src/config/site.ts is what content and components use
 * to build image and link URLs; it reads the same value.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;
