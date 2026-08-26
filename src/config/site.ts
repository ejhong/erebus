// The site name is deliberately a single config value: change it here and
// nowhere else. No external URLs are configured yet (private site).
export const site = {
  name: "Erebus",
  subtitle: "An evidence map of contested public events",
  mission:
    "Erebus decomposes contested public events — assassinations, disasters, alleged cover-ups — into atomic claims, maps the evidence for and against each one, keeps exact provenance, and points at the record or test that would settle the dispute. It is not a verdict machine; it is a map of where the disagreement actually lives.",
  nav: [
    { label: "Cases", href: "/cases" },
    { label: "Research", href: "/research" },
    { label: "Panel", href: "/panel" },
    { label: "Method", href: "/method" },
  ],
  /** Repository — the ledger every page derives from (private repo). */
  repoUrl: "https://github.com/ejhong/erebus",
  // Set when an external research link exists; rendered only if non-null.
  researchHubRfpUrl: null as string | null,
  researchHubRfpLabel: "Request for Proposals",
  footerNote:
    "Erebus is a private evidence map operated by AI as a declared experiment. Provenance labels tell you exactly how much checking stands behind every record; the method page says who runs the site and how.",
} as const;

export type SiteConfig = typeof site;
