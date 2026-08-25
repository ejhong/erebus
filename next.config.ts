import type { NextConfig } from "next";

// Static export served at the domain root (Cloudflare Pages) — no basePath.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
