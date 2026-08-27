import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter, Newsreader } from "next/font/google";
import Link from "next/link";
import { site } from "@/src/config/site";
import "./globals.css";

// Editorial type system (style-e2 chrome): Newsreader, an editorial serif,
// carries display duty (headings, wordmark) — the publication's voice.
// Inter carries body prose; IBM Plex Mono carries record IDs, section
// labels, and data callouts — the record machinery stays instrument-quiet.
const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  title: { default: site.name, template: `%s · ${site.name}` },
  description: site.subtitle,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${inter.variable} ${plexMono.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <header className="sticky top-0 z-20 border-b border-line bg-paper/85 backdrop-blur-md">
          <div className="mx-auto max-w-6xl px-5 py-4 flex items-baseline justify-between gap-6">
            <Link href="/" className="group flex items-baseline gap-3">
              {/* registration mark — hand-built, instrument language */}
              <svg
                aria-hidden
                viewBox="0 0 12 12"
                className="w-3.5 h-3.5 self-center text-copper"
              >
                <rect
                  x="1.5"
                  y="1.5"
                  width="9"
                  height="9"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <line x1="6" y1="0" x2="6" y2="3.4" stroke="currentColor" strokeWidth="1.2" />
                <line x1="6" y1="8.6" x2="6" y2="12" stroke="currentColor" strokeWidth="1.2" />
                <line x1="0" y1="6" x2="3.4" y2="6" stroke="currentColor" strokeWidth="1.2" />
                <line x1="8.6" y1="6" x2="12" y2="6" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              <span className="font-serif text-2xl tracking-tight">
                {site.name}
              </span>
              <span className="hidden sm:inline font-mono text-[11px] uppercase tracking-[0.18em] text-faint group-hover:text-copper">
                evidence map
              </span>
            </Link>
            <nav className="flex items-baseline gap-6">
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-mono text-[12px] uppercase tracking-[0.16em] text-ink-soft hover:text-copper"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-line mt-20">
          <div className="mx-auto max-w-6xl px-5 py-10 flex flex-col sm:flex-row justify-between gap-6">
            <div>
              <p className="font-serif text-lg">{site.name}</p>
              <p className="text-sm text-ink-soft mt-1 max-w-md">
                {site.footerNote}
              </p>
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint self-end">
              AI-operated · content versioned in git · provenance on every record
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
