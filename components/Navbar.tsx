import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/packages", label: "Packages" },
  { href: "/song-types", label: "Song Types" },
  { href: "/artists", label: "Artists" },
  { href: "/samples", label: "Samples" }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-rosewood/10 bg-parchment/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="font-serif text-2xl text-rosewood">
          BVKRI Songs
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-rosewood/80 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-rosewood"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/start" className="btn btn-primary">
            Start Your Song
          </Link>
        </div>
      </div>
      <div className="border-t border-rosewood/10 md:hidden">
        <div className="flex flex-wrap items-center justify-center gap-4 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-rosewood/60">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
